import styled from "styled-components"

import { device } from "../util/breakpoints"

export const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing[3]};
	align-self: stretch;
	.header:has(h1) h2 {
		color: ${({ theme }) => theme.text.secondary};
	}
	.header {
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing[1]};
		h1 {
			color: ${({ theme }) => theme.text.primary};
			//font-size: 32px;
			font-weight: 500;
		}
		h2 {
			color: ${({ theme }) => theme.text.primary};
			//font-size: 24px;
			font-weight: 500;
		}
		//h1:has(+ h2) {
		// 	color: ${({ theme }) => theme.text.secondary};
		//}
	}
	> .content {
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing[4]};
	}
	@media ${device.tablet} {
		gap: ${({ theme }) => theme.spacing[4]};
	}
`
