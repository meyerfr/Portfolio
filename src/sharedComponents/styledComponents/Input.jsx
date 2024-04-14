import styled, { css } from "styled-components"

import { device } from "../../util/breakpoints"

const getSizeStyles = (size, theme) => {
	switch (size) {
		case "small":
			return css`
				gap: ${props => props.theme.spacing[1]};
				font-size: ${theme.font.s};
				.input {
					padding: ${theme.spacing[1]};
					${theme.spacing[3]};
					.prefix,
					.suffix {
						height: ${theme.font.s};
						width: ${theme.font.s};
					}
				}
				@media ${device.laptop} {
					.input .prefix,
					.suffix {
						height: ${theme.font.m};
						width: ${theme.font.m};
					}
				}
			`
		case "large":
			return css`
				font-size: ${theme.font.l};
				.input {
					padding: ${theme.spacing[2]};
					${theme.spacing[4]};
					.prefix,
					.suffix {
						height: ${theme.font.l};
						width: ${theme.font.l};
					}
				}
				@media ${device.laptop} {
					.input .prefix,
					.suffix {
						height: ${theme.font.l};
						width: ${theme.font.l};
					}
				}
			`
		case "medium": // fall-through case as 'medium' will be the default size
		default:
			return css`
				gap: ${props => props.theme.spacing[1]};
				.input {
					padding: ${theme.spacing[2]} ${theme.spacing[3]};
					.prefix,
					.suffix {
						height: ${theme.font.m};
						width: ${theme.font.m};
					}
				}
				.MuiInputBase-root {
					padding-right: ${theme.spacing[3]};
					.MuiInputBase-input {
						padding-left: ${theme.spacing[3]};
					}
				}
				@media ${device.laptop} {
					.input .prefix,
					.suffix {
						height: ${theme.font.l};
						width: ${theme.font.l};
					}
				}
			`
	}
}

const getStateStyles = (state, theme) => {
	switch (state) {
		case "error":
			return css`
				.error {
					color: ${theme.colors.danger};
				}
				.inputContainer .input,
				.MuiInputBase-root {
					border: 1px solid ${theme.colors.danger};
					&:focus-within {
						border: 1px solid ${theme.colors.danger};
						box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.25);
					}
				}
			`
		default:
			return css`
				.inputContainer .input,
				.MuiInputBase-root {
					border: 1px solid ${theme.colors.gray400};
					&:focus-within {
						border: 1px solid ${theme.colors.blue200};
						box-shadow: 0 0 0 4px rgba(158, 197, 254, 0.25);
					}
				}
			`
	}
}

export const InputWrapper = styled.div.attrs(props => ({
	$size: props.$size || "medium",
	$state: props.$state || "default",
}))`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${props => props.theme.spacing[1.5]};
	align-self: stretch;
	label {
		color: ${props => props.theme.text.primary};
		font-weight: 400;
		line-height: 150%;
	}
	.hint,
	.error {
		font-size: ${props => props.theme.font.xs};
		color: ${props => props.theme.colors.gray};
	}
	.fieldLink {
		align-self: end;
		cursor: pointer;
		z-index: 100;
	}
	.inputContainer {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: ${props => props.theme.spacing[0.5]};
		align-self: stretch;
		a.input:has(input[type="text"]) {
			cursor: pointer;
			color: ${props => props.theme.text.primary};
		}
		.input {
			display: flex;
			align-items: center;
			gap: ${props => props.theme.spacing[1]};
			align-self: stretch;
			border-radius: ${props => props.theme.radius.m};
			background: ${props => props.theme.colors.white};

			&:has(input[type="text"]),
			&:has(input[type="email"]),
			&:has(textarea),
			input,
			textarea {
				cursor: text;
			}

			&:has(input[type="text"]:disabled),
			&:has(input[type="email"]:disabled),
			&:has(textarea:disabled),
			input:disabled,
			textarea:disabled {
				cursor: not-allowed;
			}

			input,
			textarea {
				border: none;
				color: ${props => props.theme.text.primary};
				width: 100%;
				background: none;
				appearance: none;
				&:focus {
					outline: none;
				}
				&::placeholder {
					color: ${props => props.theme.colors.gray600};
					font-weight: 400;
					line-height: 150%;
				}

				&:disabled {
					opacity: 0.5;
				}
			}

			.suffix.clickable,
			.prefix.clickable {
				cursor: pointer;
			}
		}

		.MuiFormControl-root {
			background: ${props => props.theme.colors.white};
			.MuiInputBase-root {
				border-radius: ${props => props.theme.radius.m};
				border: 1px solid ${props => props.theme.colors.gray400};
				fieldset {
					border: none;
				}
				.MuiSvgIcon-root {
					color: ${props => props.theme.colors.gray600};
				}
			}
		}
	}

	${({ theme, $size }) => getSizeStyles($size, theme)}
	${({ theme, $state }) => getStateStyles($state, theme)}
`
