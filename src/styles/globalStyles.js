// GlobalStyle.js
import React, { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { HiMiniCheck as CheckMark } from "react-icons/hi2"
import { createGlobalStyle, css } from "styled-components"

import { device } from "../util/breakpoints"

export const reactSvgComponentToMarkupString = Component =>
	`data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(createElement(Component)))}`

const getHeaderStyles = () => {
	return css`
		h1,
		h2,
		h3,
		h4,
		h5,
		p,
		label {
			margin: 0;
			padding: 0;
		}
		h1 {
			font-size: 2.2rem;
		}
		h2 {
			font-size: 1.75rem;
		}
		h3 {
			font-size: 1.15rem;
		}
		h4 {
			font-size: 1.05rem;
		}
		h5 {
			font-size: 0.85rem;
		}
	`
}

const getDefaultInputStyles = () => css`
	input[type="radio"],
	input[type="checkbox"] {
		appearance: none;
		display: flex;
		min-width: 24px;
		min-height: 24px;
		width: fit-content;
		height: fit-content;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid ${props => props.theme.colors.gray400};
		background: ${props => props.theme.colors.white};
		transition:
			background-color 0.3s,
			background 0.3s,
			border 0.3s;
		&::before {
			content: "";
			flex: 1;
			align-self: stretch;
			transform: scale(0);
			transition: transform 0.3s;
		}
		&:focus-visible {
			outline-color: ${props => props.theme.colors.primary};
		}
		&:checked {
			background: ${props => props.theme.colors.primary};
			border-color: ${props => props.theme.colors.primary};
			&:before {
				transform: scale(1);
			}
		}
	}
	input[type="radio"] {
		border-radius: 50%;
		&:checked {
			background: ${props => props.theme.colors.white};
			border-color: ${props => props.theme.colors.primary};
			border-width: 6px;
		}
	}
	input[type="checkbox"] {
		border-radius: ${props => props.theme.radius.m};
		&::before {
			background-image: url("${reactSvgComponentToMarkupString(() => <CheckMark style={{ color: "white" }} />)}");
			background-repeat: no-repeat;
			background-position: center;
			//clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
		}
	}

	label {
		font-size: 1.1em;
	}
	input,
	textarea {
		padding: ${({ theme }) => theme.spacing[2]};

		display: flex;
		padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
		align-items: center;
		gap: ${({ theme }) => theme.spacing[1]};
		align-self: stretch;

		border: 1px solid ${({ theme }) => theme.input.border};
		border-radius: ${({ theme }) => theme.radius.m};
		background: ${({ theme }) => theme.input.bg};
		font-size: ${({ theme }) => theme.font.m};
		&::placeholder {
			font-size: ${({ theme }) => theme.font.s};
			font-family: ${({ theme }) => theme.typography.fontFamily};
			color: ${({ theme }) => theme.input.placeholder};
		}
		&:focus-visible {
			border-color: transparent;
			outline: 2px solid #87adf5;
		}
	}
`

// const generateGapStyles = theme => {
// 	return Object.keys(theme.spacing).map(key => {
// 		// Create a CSS block for each spacing key
// 		return css`
// 			.gap-${key.replace(".", "-") /* Replace decimal points for valid CSS class names */} {
// 				display: grid;
// 				gap: ${props => props.theme.spacing[key]};
// 			}
// 		`
// 	})
// }

const GlobalStyle = createGlobalStyle`
	:root{
    font-size: 16px;
    @media ${device.biggerThanTablet} {
      font-size: 18px;
    }
	}
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.typography.fontFamily};
	  color: ${({ theme }) => theme.text.primary};
    // You can add more global styles here
  }
	${getHeaderStyles}
  ${getDefaultInputStyles}
`
// ${({ theme }) => generateGapStyles(theme)}

export default GlobalStyle
