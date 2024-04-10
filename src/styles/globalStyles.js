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
			font-size: 2.2em;
		}
		h2 {
			font-size: 1.7em;
		}
		h3 {
			font-size: 1.3em;
		}
		h4 {
			font-size: 1.17em;
		}
		h5 {
			font-size: 0.9em;
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
`

const getFontStyles = () => {
	return css`
		${getHeaderStyles}

		label, input, textarea, a {
			font-family: ${props => props.theme.typography.fontFamily};
			font-size: 1em;
			&.tiny {
				font-size: ${props => props.theme.fontSize.xs};
				@media ${device.tablet} {
					font-size: ${props => props.theme.fontSize.s};
				}
			}
			&.small {
				font-size: ${props => props.theme.fontSize.s};
				@media ${device.tablet} {
					font-size: ${props => props.theme.fontSize.m};
				}
			}
			&.large {
				font-size: ${props => props.theme.fontSize.l};
				@media ${device.tablet} {
					font-size: ${props => props.theme.fontSize.xl};
				}
			}
			&.x-large {
				font-size: ${props => props.theme.fontSize.l};
				@media ${device.tablet} {
					font-size: ${props => props.theme.fontSize.xl};
				}
				@media ${device.tablet} {
					font-size: ${props => props.theme.fontSize.xxl};
				}
			}
		}

		a {
			text-decoration: none;
			color: ${props => props.theme.colors.blue400};
			&:hover {
				text-decoration: underline;
			}
			&:focus {
				color: ${props => props.theme.colors.blue600};
			}
		}
	`
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.typography.fontFamily};
	  font-size: 16px;
	  color: ${({ theme }) => theme.textColors.primary};
    @media ${device.tablet} {
      font-size: 18px;
    }
    // You can add more global styles here
  }

  // ///* width */
  // ::-webkit-scrollbar {
  //   width: 4px;
  // }
  // //
  // ///* Track */
  // ::-webkit-scrollbar-track {
  //   background: color-mix(in oklch, ${props => props.theme.colors.gray100} 100%, white 30%);
  // }
  // //
  // ///* Handle */
  // ::-webkit-scrollbar-thumb {
  //   background: color-mix(in oklch, ${props => props.theme.colors.gray200} 100%, white 10%);
  //   background: ${props => props.theme.colors.gray300};
	//   border-radius: 6px;
  // }
  // //
  // ///* Handle on hover */
  // ::-webkit-scrollbar-thumb:hover {
  //   background: color-mix(in oklch, ${props => props.theme.colors.gray200} 100%, blakc 10%);
  // }
	
  ${getFontStyles}
  
  ${getDefaultInputStyles}
`

export default GlobalStyle
