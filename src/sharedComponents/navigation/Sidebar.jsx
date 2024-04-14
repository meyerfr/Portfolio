import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"

import { StyledProfilePicture } from "./ProfilePicture"
import {
	DarkModeSwitch,
	Divider,
	NavList,
	Profile,
	Socials,
	StyledNavItem,
	StyledSidebarProfile,
	StyledSidebarSocials,
} from "./StyledComponents"

import { useTheme } from "../../styles/ThemeContext"
import { device, screenSize } from "../../util/breakpoints"

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
			color: ${props => props.theme.text.primary};
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
				min-width: ${props => props.theme.font.xxl};
				min-height: ${props => props.theme.font.xxl};
			}
			font-size: ${props => props.theme.font.l};
		}
	}
`

const StyledNavigationListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing[4]};
	align-self: stretch;
	align-items: center;
	flex: 1;
`

const SidebarWrapper = styled.div`
	transition: width 0.3s ease-in-out;
	z-index: 500;
	display: none;
	width: 0;
	overflow: scroll;

	@media ${device.biggerThanTablet} {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: ${props => (props.$expanded ? "220px" : `calc(100px - (2 * ${props.theme.spacing[3]}))`)};
		padding: ${props => props.theme.spacing[5]} ${props => props.theme.spacing[3]};
		gap: ${props => props.theme.spacing[4]};
	}

	${props =>
		props.$expanded
			? css`
					${Divider} {
						display: none;
					}
					${StyledNavigationListWrapper} {
						flex-direction: column-reverse;
					}
					${StyledSidebarSocials} {
						flex-direction: unset;
					}
				`
			: css`
					${SidebarItemList} {
						a span {
							display: none;
						}
					}
					${StyledNavItem} span {
						display: none;
					}
					${StyledSidebarProfile} {
						${StyledProfilePicture} {
							width: 48px;
							height: 48px;
						}
						.content {
							display: none;
						}
					}
				`}
`

const useSidebarExpandable = () => {
	const [isSidebarExpandable, setSidebarExpandable] = useState(window.innerWidth >= screenSize.laptopL)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < screenSize.laptopL) {
				setSidebarExpandable(false)
			} else {
				setSidebarExpandable(true)
			}
		}

		window.addEventListener("resize", handleResize)

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return isSidebarExpandable
}

const Sidebar = () => {
	const [isSidebarExpanded, setSidebarExpanded] = useState(true)
	const isSidebarExpandable = useSidebarExpandable()

	const { theme } = useTheme()

	const toggleSidebar = () => {
		if (!isSidebarExpanded && isSidebarExpandable) {
			setSidebarExpanded(true)
		} else if (isSidebarExpandable) {
			setSidebarExpanded(false)
		}
	}

	return (
		<SidebarWrapper $expanded={isSidebarExpanded && isSidebarExpandable} $theme={theme}>
			<Profile type="sidebar" onClick={toggleSidebar} />
			<StyledNavigationListWrapper>
				<NavList />
				<Divider />
				<Socials type="sidebar" />
			</StyledNavigationListWrapper>
			<DarkModeSwitch />
		</SidebarWrapper>
	)
}

export default Sidebar
