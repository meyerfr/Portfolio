// First, let's import what we need
import React, { useRef, useState } from "react"
import { isMobile } from "react-device-detect"
// eslint-disable-next-line import/no-unresolved
import { faBars, faXmarkLarge } from "@awesome.me/kit-aaa9bcafa6/icons/classic/regular"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import { DarkModeSwitch, Divider, NavList, Profile, Socials } from "./StyledComponents"

import { device } from "../../util/breakpoints"
import useHandleClickOutside from "../../util/customHooks/useHandleClickOutside"

const NavbarWrapper = styled.nav`
	display: flex;
	flex-direction: ${isMobile ? "column-reverse" : "column"};
	@media ${device.biggerThanTablet} {
		display: none;
	}
`

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	min-height: 80px;
	padding: 0 ${({ theme }) => theme.spacing[3]};
	gap: ${({ theme }) => theme.spacing[4]};

	.actions {
		display: flex;
		gap: ${({ theme }) => theme.spacing[1.5]};
		svg {
			font-size: 20px;
			padding: 8px;
			color: ${props => props.theme.text.primary};
			cursor: pointer;
		}
	}
`

const CollapsableNavMenu = styled.div`
	max-height: ${props => (props.$isOpen ? "500px" : "0")};
	z-index: 100;
	display: flex;
	flex-direction: ${isMobile ? "column-reverse" : "column"};
	align-items: center;
	gap: ${({ theme }) => theme.spacing[3]};
	padding: ${({ $isOpen, theme }) => ($isOpen ? `${theme.spacing[4]} ${theme.spacing[4]}` : `0 ${theme.spacing[4]}`)};
	overflow: hidden;
	transition:
		max-height 0.3s ease-in-out,
		padding 0.3s ease-in-out;
`

// The main Navbar component starts here
const Navbar = () => {
	const navRef = useRef()
	const [isMenuOpen, setMenuOpen] = useState(false)

	useHandleClickOutside(navRef, isMenuOpen, () => setMenuOpen(false))

	const toggleMenu = () => setMenuOpen(!isMenuOpen)

	return (
		<NavbarWrapper ref={navRef}>
			<NavbarContainer>
				<Profile />
				<div className="actions">
					<DarkModeSwitch />
					<FontAwesomeIcon id="openMenuBtn" icon={isMenuOpen ? faXmarkLarge : faBars} onClick={toggleMenu} />
				</div>
			</NavbarContainer>
			<CollapsableNavMenu $isOpen={isMenuOpen}>
				<NavList onItemClick={() => setMenuOpen(false)} />
				<Divider />
				<Socials />
			</CollapsableNavMenu>
		</NavbarWrapper>
	)
}

export default Navbar
