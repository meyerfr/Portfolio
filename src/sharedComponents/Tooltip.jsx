import React from "react"
import styled from "styled-components"

const TooltipContainer = styled.div`
	position: relative;
	display: inline-block;
	z-index: 2000;
`

const TooltipText = styled.div`
	position: absolute;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	padding: 5px 0;
	border-radius: 6px;
	visibility: hidden;
	${TooltipContainer}:hover & {
		visibility: visible;
	}

	/* Dynamically adjust based on direction prop */
	${props => {
		switch (props.$direction) {
			case "top":
				return `
          bottom: 100%;
          left: 50%;
          margin-left: -60px; /* Half the width */
        `
			case "right":
				return `
          top: 50%;
          left: 150%;
          margin-top: -20px; /* Half the height */
        `
			case "bottom":
				return `
          top: 100%;
          left: 50%;
          margin-left: -60px;
        `
			case "left":
				return `
          top: 50%;
          right: 100%;
          margin-top: -20px;
        `
			default:
				return ""
		}
	}}

	&::after {
		content: "";
		position: absolute;
		border-style: solid;
		// Adjustments based on props.direction for positioning and arrow orientation
		${props => {
			switch (props.$direction) {
				case "top":
					return `
          bottom: -5px;
          left: 50%;
          transform: translateX(50%);
          border-width: 0 5px 5px 5px;
          border-color: transparent transparent black transparent;
        `
				case "right":
					return `
          top: 50%;
          left: -5px;
          transform: translateY(-50%);
          border-width: 5px 5px 5px 0;
          border-color: transparent black transparent transparent;
        `
				case "bottom":
					return `
			    top: -5px;
			    left: 50%;
			    transform: translateX(-50%);
			    border-width: 5px 5px 0 5px;
			    border-color: black transparent transparent transparent;
			  `
				case "left":
					return `
			    top: 50%;
			    right: -5px;
			    transform: translateY(-50%);
			    border-width: 5px 0 5px 5px;
			    border-color: transparent transparent transparent black;
			  `
			}
		}}
	}
`

const Tooltip = ({ children, content, direction = "bottom" }) => {
	return (
		<TooltipContainer>
			{children}
			<TooltipText $direction={direction}>{content}</TooltipText>
		</TooltipContainer>
	)
}

export default Tooltip
