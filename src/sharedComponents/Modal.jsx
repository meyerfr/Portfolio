import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${props =>
		`${props.theme.colors.gray400}cc`}; // the cc at the end add the opacity to the hex color code
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	cursor: pointer;
`

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null

	return ReactDOM.createPortal(
		<ModalWrapper onClick={onClose}>{children}</ModalWrapper>,
		document.getElementById("modal-root")
	)
}

export default Modal
