import React, { useEffect, useState } from "react"
import { HiOutlineBars3 as BurgerIcon } from "react-icons/hi2"
import styled from "styled-components"

import { bottomNavigationItems, NavigationItem, topNavigationItems } from "./navigation.helpers"
import { SidebarItemList } from "./Sidebar"

import { ReactComponent as Logo } from "../../logo.svg"
import { device, screenSize } from "../../util/breakpoints"
import useHandleResize from "../../util/customHooks/useHandleResize"

const NavbarContainer = styled.nav`
	display: flex;
	min-height: 56px;
	padding: 0 ${props => props.theme.spacing[4]};
	justify-content: space-between;
	align-items: center;
	align-self: stretch;

	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	background-color: ${props => props.theme.colors.white};
	box-shadow: 8px 6px 16px 0 rgba(0, 0, 0, 0.16);

	z-index: 1000;
	@media ${device.tablet} {
		position: sticky;
		top: 0;
		min-height: 64px;
	}
	@media ${device.laptop} {
		display: none;
	}
	svg,
	img {
		width: ${props => props.theme.fontSize.xxl};
		height: ${props => props.theme.fontSize.xxl};
	}
`

const BurgerButton = styled.button`
	display: block;
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	@media ${device.laptop} {
		display: none;
	}
`

const OffCanvasMenu = styled.div`
	position: fixed;
	top: 0;
	right: ${props => (props.open ? "0" : "100%")};
	width: 100%;
	height: 100%;
	background: #fff;
	transition: right 0.3s ease;
	z-index: 900;
	padding-top: 56px;
	${SidebarItemList} {
		a {
			padding: 20px ${props => props.theme.spacing[3]};
			border-width: 5px;
		}
	}
`

const Navbar = () => {
	const [isOffCanvasOpen, setOffCanvasOpen] = useState(false)
	const { width: windowWidth } = useHandleResize()

	useEffect(() => {
		if (windowWidth >= parseInt(screenSize.laptop.replace("px", ""))) {
			setOffCanvasOpen(false)
		}
	}, [windowWidth])

	const toggleOffCanvas = () => {
		setOffCanvasOpen(!isOffCanvasOpen)
	}

	return (
		<>
			<NavbarContainer>
				<BurgerButton onClick={toggleOffCanvas}>
					<BurgerIcon />
				</BurgerButton>
				{/* Placeholder for justify-content between to work */}
				<div />
				<Logo />
			</NavbarContainer>
			<OffCanvasMenu open={isOffCanvasOpen}>
				<SidebarItemList>
					{topNavigationItems.map((item, i) => (
						<NavigationItem key={i} {...item} onClick={() => setOffCanvasOpen(false)} />
					))}
					{bottomNavigationItems.map((item, i) => (
						<NavigationItem key={i} {...item} onClick={() => setOffCanvasOpen(false)} />
					))}
				</SidebarItemList>
			</OffCanvasMenu>
		</>
	)
}

export default Navbar
