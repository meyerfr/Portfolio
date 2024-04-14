import styled, { css, keyframes } from "styled-components"

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const MyButton = styled.button.attrs(props => {
	if (!props.$type) {
		return {
			$buttonStyle: props.theme.buttons.primary.default,
			$loading: props.$loading || false,
		}
	}

	const baseType = props.$type.split("-")[0] // Extracts 'primary' or 'secondary' from 'primary-outlined' etc.
	const buttonType = props.theme.buttons[baseType] || props.theme.buttons.primary
	const isOutlined = props.$type?.includes("outlined")
	const isBorderless = props.$type?.includes("borderless")
	const buttonStyle = isOutlined
		? buttonType["outlined"]
		: isBorderless
			? buttonType["borderless"]
			: buttonType["default"]
	return {
		$buttonStyle: buttonStyle,
		$isOutlined: isOutlined,
		$isBorderless: isBorderless,
		$loading: props.$loading || false,
	}
})`
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.spacing[1.5]};
  outline: none;
  background: transparent;
  border: 1px solid transparent;
  font-size: 1.1em;
  height: 48px;
  cursor: pointer;
  position: relative;
	transition: background-color .3s, color .3s, border-color .3s, background .3s, scale .1s, outline .2s;

  // Progress/loading state using pseudo-element
  &:after {
    content: "";
    display: ${({ $loading }) => ($loading ? "block" : "none")};
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border: 2px solid #ffffff;
    border-top-color: transparent !important;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
  }
	
	&:not(:disabled):active {
    scale: 0.98;
  }
	
	&:disabled {
    cursor: not-allowed;
  }

  ${({ $isOutlined, $isBorderless, $buttonStyle }) => {
		if ($isOutlined) {
			return css`
				border-color: ${$buttonStyle.border};
				color: ${$buttonStyle.color};
				background: ${$buttonStyle.bg};
				&:after {
					border-color: ${props => props.theme.text.primary};
				}
			`
		} else if ($isBorderless) {
			return css`
				color: ${$buttonStyle.color};
				&:after {
					border-color: ${props => props.theme.text.primary};
				}
			`
		} else {
			return css`
				color: ${$buttonStyle.color};
				background: ${$buttonStyle.bg};
			`
		}
	}}

  &:hover {
    ${({ $isOutlined, $isBorderless, $buttonStyle }) => {
			if ($isOutlined) {
				return css`
					background: ${$buttonStyle.hover.bg};
					color: ${$buttonStyle.hover.color};
				`
			} else if ($isBorderless) {
				return css`
					background: ${$buttonStyle.hover.bg};
					color: ${$buttonStyle.hover.color};
				`
			} else {
				return css`
					background: ${$buttonStyle.hover.bg};
				`
			}
		}}
  }

  &:not(:active):not(:hover):focus {
    ${({ $isOutlined, $isBorderless, $buttonStyle }) => {
			if ($isOutlined) {
				return css`
					background: ${$buttonStyle.focus.bg};
					outline: ${$buttonStyle.focus.outline};
				`
			} else if ($isBorderless) {
				return css`
					background: ${$buttonStyle.focus.bg};
					outline: ${$buttonStyle.focus.outline};
				`
			} else {
				return css`
					background-color: ${$buttonStyle.focus.bg};
					outline: ${$buttonStyle.focus.outline};
				`
			}
		}}
  }

  &:active {
    ${({ $isOutlined, $isBorderless, $buttonStyle }) => {
			if ($isOutlined) {
				return css`
					background-color: ${$buttonStyle.active.bg};
				`
			} else if ($isBorderless) {
				return css`
					background-color: ${$buttonStyle.active.bg};
					color: ${$buttonStyle.active.color};
				`
			} else {
				return css`
					background-color: ${$buttonStyle.active.bg};
				`
			}
		}}
  }

  &:disabled {
    ${({ $isOutlined, $isBorderless, $buttonStyle }) => {
			if ($isOutlined) {
				return css`
					background-color: ${$buttonStyle.disabled.bg};
					color: ${$buttonStyle.disabled.color};
					border-color: ${$buttonStyle.disabled.border};
				`
			} else if ($isBorderless) {
				return css`
					color: ${$buttonStyle.disabled.color};
				`
			} else {
				return css`
					background-color: ${$buttonStyle.disabled.bg};
					color: ${$buttonStyle.disabled.color};
				`
			}
		}}
  }
}
`

export default MyButton
