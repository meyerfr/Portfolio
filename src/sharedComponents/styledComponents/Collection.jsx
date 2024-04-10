// AuthLayoutStyles.js
import styled from "styled-components"

import { device } from "../../util/breakpoints"

export const Card = styled.div`
	background: ${props => props.theme.colors.white};
	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
	border-radius: 0.5rem;
	padding: 1.5rem 2.5rem;
`

export const AuthCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing[4]};
	width: 100%;
	height: fit-content;
	overflow-y: scroll;
	.headerWrapper {
		display: flex;
		flex-direction: column;
		gap: ${props => props.theme.spacing[1.5]};
	}
	@media ${device.tablet} {
		background: ${props => props.theme.colors.white};
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
		border-radius: ${props => props.theme.radius.m};
		padding: 1.5rem 2.5rem;
		width: 75%;
	}
	@media ${device.laptop} {
		width: 60%;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing[4]};

	.fields {
		display: flex;
		flex-direction: column;
		gap: ${props => props.theme.spacing[3]};
	}

	.actions {
		display: flex;
		gap: ${props => props.theme.spacing[2]};
	}
`
