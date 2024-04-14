import React from "react"
import { useNavigate } from "react-router-dom"
// eslint-disable-next-line import/no-unresolved
import { faCircleDot, faLocationDot } from "@awesome.me/kit-aaa9bcafa6/icons/classic/regular"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import MyButton from "./Button"
import { StyledSection } from "./SharedComponents"

import { ContentContainer } from "../layouts/AppLayout"
import { Badge, ProjectList, ReviewList, StyledInlineButtons } from "../sharedComponents/navigation/StyledComponents"
import { device } from "../util/breakpoints"

const StyledLocation = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.spacing[2]};
	align-items: center;
	color: ${props => props.theme.text.brand};
`

const StyledHeroSection = styled(StyledSection)`
	gap: ${({ theme }) => theme.spacing[5]};
	@media ${device.tablet} {
		gap: ${({ theme }) => theme.spacing[6]};
	}
`

const StyledLargerSpacingSection = styled(StyledSection)`
	gap: ${({ theme }) => theme.spacing[4]};
	@media ${device.tablet} {
		gap: ${({ theme }) => theme.spacing[5]};
	}
`

const Home = () => {
	const navigate = useNavigate()
	return (
		<ContentContainer>
			<StyledHeroSection>
				<Badge icon={faCircleDot} text={"Available for work"} type="green" />
				<StyledLargerSpacingSection>
					<div className="header">
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						<h1>Hello, I'm Fritz</h1>
						<h2>Digital Product Developer</h2>
					</div>
					<StyledLocation>
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Germany, Berlin</span>
					</StyledLocation>
					<p>
						Product designer and design system specialist with over 9 years of experience focusing on user experience
						and design systems to creating a user-centered design in SaaS products.
					</p>
				</StyledLargerSpacingSection>
				<StyledInlineButtons>
					<MyButton onClick={() => navigate("/contact")}>Reach out</MyButton>
				</StyledInlineButtons>
			</StyledHeroSection>
			<StyledSection>
				<div className="header">
					<h2>Projects</h2>
				</div>
				<ProjectList />
			</StyledSection>
			<StyledSection>
				<div className="header">
					<h2>What clients say</h2>
				</div>
				<ReviewList />
			</StyledSection>
		</ContentContainer>
	)
}

export default Home
