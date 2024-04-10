import React, { useEffect, useState } from "react"
import { HiChevronDoubleLeft as CollapseIcon, HiChevronDoubleRight as ExpandIcon } from "react-icons/hi2"
import styled from "styled-components"
// eslint-disable-next-line import/no-unresolved
import { faHouse, faBriefcase, faUser, faEnvelope, faSun, faAt } from "@awesome.me/kit-aaa9bcafa6/icons/classic/thin"
// eslint-disable-next-line import/no-unresolved
import { faLinkedIn, faGithub } from "@awesome.me/kit-aaa9bcafa6/icons/brands/thin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { bottomNavigationItems, NavigationItem, topNavigationItems } from "./navigation.helpers"

import { ReactComponent as Logo } from "../../logo.svg"
import { device, screenSize } from "../../util/breakpoints"
import useHandleResize from "../../util/customHooks/useHandleResize"

const SidebarListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
	padding-bottom: 30px;
`

export const SidebarItemList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	li {
		align-self: stretch;
		a {
			display: flex;
			padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
			align-items: center;
			justify-content: center;
			align-self: stretch;
			gap: ${props => props.theme.spacing[1.5]};
			appearance: none;
			text-decoration: none;
			color: ${props => props.theme.textColors.primary};
			cursor: pointer;
			&.active {
				box-shadow: inset 3px 0 ${props => props.theme.colors.primary};
				svg {
					color: ${props => props.theme.colors.primary};
				}
			}
			span {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 100%;
			}
			svg,
			img {
				min-width: ${props => props.theme.fontSize.xxl};
				min-height: ${props => props.theme.fontSize.xxl};
			}
			font-size: ${props => props.theme.fontSize.l};
		}
	}
`

const SidebarWrapper = styled.div`
	width: 0;
	height: 100%;
	background: ${props => props.theme.colors.white};
	box-shadow: 6px 8px 16px 0 rgba(0, 0, 0, 0.16);
	transition: width 0.3s ease-in-out;
	z-index: 500;
	position: relative;
	display: flex;
	flex-direction: column;

	@media ${device.laptop} {
		width: ${props => (props.$expanded ? "220px" : "80px")};
	}

	${SidebarItemList} {
		a span {
			display: ${props => (props.$expanded ? "block" : "none")};
		}
	}

	.logoPlacing {
		display: flex;
		min-height: 56px;
		justify-content: center;
		align-items: center;
		align-self: stretch;

		@media ${device.tablet} {
			min-height: 64px;
		}
		@media ${device.laptop} {
			min-height: 72px;
		}

		svg,
		img {
			height: 30px;
		}
	}
`

const Profile = styled.div``

const NavItem = styled.div``

const Sidebar = () => {
	const [isSidebarExpanded, setSidebarExpanded] = useState(window.innerWidth >= 1024)
	const { width: windowWidth } = useHandleResize()

	useEffect(() => {
		if (windowWidth < parseInt(screenSize.laptopL.replace("px", ""))) {
			setSidebarExpanded(false)
		} else {
			setSidebarExpanded(true)
		}
	}, [windowWidth])

	const toggleSidebar = () => {
		setSidebarExpanded(!isSidebarExpanded)
	}

	return (
		<SidebarWrapper $expanded={isSidebarExpanded}>
			<Profile>
				<Logo />
				<div>
					<span>Fritz Meyer</span>
					<span>Product Developer</span>
				</div>
			</Profile>
			<div className="inline-icons">
				<FontAwesomeIcon icon={faAt} />
				<FontAwesomeIcon icon={faLinkedIn} />
				<FontAwesomeIcon icon={faGithub} />
			</div>
			<div>
				<NavItem>
					<FontAwesomeIcon icon={faHouse} />
					<span>Homepage</span>
				</NavItem>
				<NavItem>
					<FontAwesomeIcon icon={faBriefcase} />
					<span>Projects</span>
				</NavItem>
				<NavItem>
					<FontAwesomeIcon icon={faUser} />
					<span>About</span>
				</NavItem>
				<NavItem>
					<FontAwesomeIcon icon={faEnvelope} />
					<span>Contact</span>
				</NavItem>
			</div>
			<FontAwesomeIcon icon={faSun} className={"modeSwitch"} />
		</SidebarWrapper>
	)
}

export default Sidebar
