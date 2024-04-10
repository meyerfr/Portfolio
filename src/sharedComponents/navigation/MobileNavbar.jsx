// First, let's import what we need
import React, { useState } from "react"
import styled from "styled-components"

import { device } from "../../util/breakpoints"

// We'll define our styled components here
const NavbarContainer = styled.div`
	display: flex;
	flex: 1;
	height: 80px;
	padding: 0px ${theme => theme.spacing[3]};
	justify-content: space-between;
	align-items: center;
	gap: ${theme => theme.spacing[4]};
	background: var(--surface-surface-primary, #f4f5f5); // todo change color to theme background
	@media ${device.laptop} {
		display: none;
	}
`

const Logo = styled.div`
	// Add your styles for the logo here
`

const BurgerButton = styled.button``

const FullScreenMenu = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: ${props => (props.isOpen ? "100%" : "0")};
	height: 100%;
	background: rgba(0, 0, 0, 0.9);
	transition: width 0.3s ease;
	z-index: 100;
`

const NavList = styled.ul`
	// Style your navigation list here
`

const NavItem = styled.li`
	// And individual navigation items here
`

// The main Navbar component starts here
const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen)
	}

	return (
		<NavbarContainer>
			<Logo>Your Logo</Logo>
			<BurgerButton isOpen={isMenuOpen} onClick={toggleMenu}>
				{/* Here you can add a burger icon */}☰
			</BurgerButton>
			<FullScreenMenu isOpen={isMenuOpen}>
				<NavList>
					{/* Populate this with your actual navigation items */}
					<NavItem>Home</NavItem>
					<NavItem>About</NavItem>
					<NavItem>Services</NavItem>
					<NavItem>Contact</NavItem>
				</NavList>
			</FullScreenMenu>
		</NavbarContainer>
	)
}

export default Navbar
