// AuthLayout.js
import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

import Navbar from "../sharedComponents/navigation/Navbar"
import Sidebar from "../sharedComponents/navigation/Sidebar"
import { device } from "../util/breakpoints"

const AppWrapper = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;

	background: var(--surface-surface-primary, #f4f5f5); // todo change color to theme background
	@media ${device.tablet} {
		flex-direction: row;
	}
`

const ContentWrapper = styled.div`
	display: flex;
	padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[2]} 0 ${props => props.theme.spacing[2]};
	flex-direction: column;
	align-items: center;
	gap: ${props => props.theme.spacing[1.5]};
	flex: 1;
`

const ContentContainer = styled.div`
	display: flex;
	padding: 100px;
	flex-direction: column;
	flex: 1;
	gap: ${props => props.theme.spacing[8]};
	@media ${device.tablet} {
		gap: ${props => props.theme.spacing[11]};
	}
`

const AppLayout = () => (
	<AppWrapper>
		<Sidebar />
		<Navbar />
		<ContentWrapper>
			<ContentContainer>
				<Outlet />
			</ContentContainer>
		</ContentWrapper>
		<div id="modal-root" />
	</AppWrapper>
)

export default AppLayout
