import styled, { css } from "styled-components"

import { device } from "../../util/breakpoints"

const getSizeStyles = (size, theme) => {
	switch (size) {
		case "small":
			return css`
				padding: ${theme.spacing[0]} ${theme.spacing[2]};
				font-size: ${theme.font.s};
				@media ${device.laptop} {
					font-size: ${theme.font.m};
				}
			`
		case "large":
			return css`
				padding: ${theme.spacing[1.5]} ${theme.spacing[3]};
				font-size: ${theme.font.l};
				@media ${device.laptop} {
					font-size: ${theme.font.xl};
				}
			`
		case "medium": // fall-through case as 'medium' will be the default size
		default:
			return css`
				padding: ${theme.spacing[1]} ${theme.spacing[3]};
				font-size: ${theme.font.m};
				@media ${device.laptop} {
					font-size: ${theme.font.l};
				}
			`
	}
}

const isOutlinedType = type => type.includes("outlined")
const isBorderlessType = type => type.includes("borderless")

const getOutlinedStyles = (type, theme) => {
	const baseType = type.split("-")[0] // Extracts 'primary' or 'secondary' from 'primary-outlined' etc.
	const typeColor = theme.colors[baseType]

	return css`
		background: ${theme.colors.white};
		color: ${typeColor};
		border: 2px solid ${typeColor};

		&:hover,
		&:focus {
			background: color-mix(in oklch, ${typeColor} 100%, black 10%);
			color: ${theme.colors.white};
		}

		&:focus {
			box-shadow: 0 0 4px color-mix(in oklch, ${typeColor} 100%, black 30%);
		}

		&:active {
			box-shadow: 0 0 10px color-mix(in oklch, ${typeColor} 100%, white 30%);
		}
	`
}

const getBorderlessStyles = (type, theme) => {
	const baseType = type.split("-")[0] // Extracts 'primary' or 'secondary' from 'primary-outlined' etc.
	let typeColor

	switch (baseType) {
		case "primary":
		case "secondary":
			typeColor = theme.colors[baseType]
			break
		case "":
		case undefined:
		case null:
			typeColor = theme.colors.gray700
			break
		default:
			typeColor = theme.colors[baseType]
	}

	return css`
		background: transparent;
		color: ${typeColor};
		border: 2px solid transparent;

		&:hover,
		&:focus {
			border-color: ${typeColor};
		}

		&:focus {
			box-shadow: 0 0 4px ${typeColor};
		}

		&:active {
			box-shadow: 0 0 10px color-mix(in oklch, ${typeColor} 100%, white 30%);
		}
	`
}

const getTypeStyles = (type, theme) => {
	if (isOutlinedType(type)) {
		return getOutlinedStyles(type, theme)
	} else if (isBorderlessType(type)) {
		return getBorderlessStyles(type, theme)
	}

	switch (type) {
		case "primary":
		case "danger":
		case "secondary": {
			const typeColor = theme.colors[type]
			return css`
				background: ${typeColor};
				color: ${theme.colors.white};

				&:hover,
				&:focus {
					background: color-mix(in oklch, ${typeColor} 100%, black 10%);
				}

				&:focus {
					box-shadow: 0 0 4px color-mix(in oklch, ${typeColor} 100%, black 30%);
				}

				&:active {
					box-shadow: 0 0 10px color-mix(in oklch, ${typeColor} 100%, white 30%);
				}
			`
		}
		case "default":
		default:
			return css`
				background: ${theme.colors.gray200};
				color: ${theme.text.primary};

				&:hover,
				&:focus {
					background: transparent;
				}

				&:focus {
					box-shadow: 0 0 4px ${theme.colors.gray200};
				}

				&:active {
					box-shadow: 0 0 10px ${theme.colors.gray200};
				}
			`
	}
}

export const Button = styled.button.attrs(props => ({
	$type: props.$type || "default",
	$size: props.$size || "medium",
}))`
	display: inline-flex;
	padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[3]};
	justify-content: center;
	align-items: center;
	gap: ${props => props.theme.spacing[1]};

	border: 2px solid transparent;
	border-radius: ${props => props.theme.radius.s};
	cursor: pointer;

	${({ theme, $size }) => getSizeStyles($size, theme)}
	${({ theme, $type }) => getTypeStyles($type, theme)}
	
	&:disabled {
		opacity: 0.5;
	}

	&:focus-visible {
		outline: none;
	}

	transition:
		background 0.3s ease-in-out,
		border-color 0.3s ease-in-out;
`
