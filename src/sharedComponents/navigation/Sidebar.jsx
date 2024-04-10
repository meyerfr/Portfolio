import React, { useEffect, useState } from "react"
import { HiChevronDoubleLeft as CollapseIcon, HiChevronDoubleRight as ExpandIcon } from "react-icons/hi2"
import styled from "styled-components"

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

const SidebarContainer = styled.div`
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

const ToggleSidebarButton = styled.button`
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

	position: absolute;
	top: 56px;
	right: 0;
	transform: translate(50%, 100%);
	z-index: 1200;
	display: none;
	width: 28px;
	height: 28px;
	background: ${props => props.theme.colors.primary};
	color: ${props => props.theme.colors.white};
	border-radius: ${props => props.theme.spacing[1]};
	align-items: center;
	justify-content: center;
	@media ${device.laptop} {
		top: 64px;
		display: flex;
		width: 32px;
		height: 32px;
		svg,
		img {
			min-width: ${props => props.theme.fontSize.l};
			min-height: ${props => props.theme.fontSize.l};
		}
	}
	@media ${device.laptop} {
		width: 40px;
		height: 40px;
		top: 72px;
		svg,
		img {
			min-width: ${props => props.theme.fontSize.xl};
			min-height: ${props => props.theme.fontSize.xl};
		}
	}
`

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
		<>
			<SidebarContainer $expanded={isSidebarExpanded}>
				<div className="logoPlacing">
					<Logo />
				</div>
				<ToggleSidebarButton onClick={toggleSidebar}>
					{isSidebarExpanded ? <CollapseIcon /> : <ExpandIcon />}
				</ToggleSidebarButton>
				<SidebarListWrapper>
					<SidebarItemList>
						{topNavigationItems.map((item, i) => (
							<NavigationItem key={i} {...item} />
						))}
					</SidebarItemList>
					<SidebarItemList>
						{bottomNavigationItems.map((item, i) => (
							<NavigationItem key={i} {...item} />
						))}
					</SidebarItemList>
				</SidebarListWrapper>
			</SidebarContainer>
		</>
	)
}

export default Sidebar
