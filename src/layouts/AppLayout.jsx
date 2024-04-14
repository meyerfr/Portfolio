// AuthLayout.js
import React, { useEffect, useRef } from "react"
import { isMobile } from "react-device-detect"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
// eslint-disable-next-line import/no-unresolved
import { faChevronLeft } from "@awesome.me/kit-aaa9bcafa6/icons/classic/regular"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import MobileNavbar from "../sharedComponents/navigation/MobileNavbar"
import Sidebar from "../sharedComponents/navigation/Sidebar"
import { Divider } from "../sharedComponents/navigation/StyledComponents"
import { device } from "../util/breakpoints"

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;

	background: ${({ theme }) => theme.surface.primary};
	@media ${device.biggerThanTablet} {
		flex-direction: row;
	}
`

const AppContainer = styled.div`
	display: flex;
	flex-direction: ${isMobile ? "column-reverse" : "column"};
	flex: 1;
	overflow: hidden;
`

const ScrollContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow: scroll;

	padding: ${props => props.theme.spacing[1]};
	gap: ${props => props.theme.spacing[1.5]};
	@media ${device.biggerThanMobileL} {
		padding: ${props => props.theme.spacing[2]};
		gap: ${props => props.theme.spacing[8]};
	}
`

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	border-radius: ${({ theme }) => theme.spacing[1.5]};
	padding: ${props => props.theme.spacing[4]} ${props => props.theme.spacing[3]};
	background: ${({ theme }) => theme.surface.white};
	@media ${device.biggerThanMobileL} {
		padding: ${props => props.theme.spacing[4]};
	}
	@media ${device.biggerThanTablet} {
		border-radius: ${({ theme }) => theme.spacing[3]};
		padding: ${props => props.theme.spacing[10]};
	}
	@media ${device.biggerThanLaptop} {
		padding: ${props => props.theme.spacing[12]};
	}
`

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[6]};
	@media ${device.biggerThanMobileL} {
		gap: ${props => props.theme.spacing[8]};
	}
	@media ${device.biggerThanTablet} {
		gap: ${props => props.theme.spacing[11]};
	}
`

const StyledBackNavigation = styled.div`
	display: grid;
	gap: ${({ theme }) => theme.spacing[3]};
	div {
		display: flex;
		align-items: center;
		gap: ${({ theme }) => theme.spacing[3]};
		padding: ${({ theme }) => theme.spacing[2]};
		cursor: pointer;
	}
`

export const BackNavigation = () => {
	const navigate = useNavigate()

	return (
		<StyledBackNavigation>
			<div onClick={() => navigate(-1)}>
				<FontAwesomeIcon icon={faChevronLeft} />
				<span>Back</span>
			</div>
			<Divider />
		</StyledBackNavigation>
	)
}

const AppLayout = () => {
	const scrollContainer = useRef()
	const { pathname } = useLocation()

	useEffect(() => {
		if (scrollContainer.current) {
			scrollContainer.current.scrollTo({
				top: 0,
			})
		}
	}, [pathname])

	return (
		<AppWrapper>
			<Sidebar />
			<AppContainer>
				<MobileNavbar />
				<ScrollContainer ref={scrollContainer}>
					<ContentWrapper>
						<Outlet />
					</ContentWrapper>
				</ScrollContainer>
			</AppContainer>
			<div id="modal-root" />
		</AppWrapper>
	)
}

export default AppLayout
