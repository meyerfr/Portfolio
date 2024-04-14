import React from "react"
import styled from "styled-components"

import { StyledSection } from "./SharedComponents"

import BodyNoBg from "../assets/BodyNoBg.png"
import { ContentContainer } from "../layouts/AppLayout"
import { ExperiencesList, SkillsList, tools } from "../sharedComponents/navigation/StyledComponents"
import { device } from "../util/breakpoints"

const BrandColorText = styled.span`
	color: ${props => props.theme.text.brand};
`

const StyledHeroSection = styled.div`
	.heroImg {
		display: none;
		width: 100%;
		min-width: 200px;
		position: relative;
		img {
			width: 100%;
			object-fit: contain;
			transform: scale(-1, 1);
			position: absolute;
			height: 100%;
			max-height: 480px;
			min-width: 200px;
			left: 0;
			//top: -35px;
		}
		.shadow {
			position: absolute;
			width: 100%;
			height: 100%;
			//top: -35px;
			left: 0;
			z-index: 1;
			background: linear-gradient(
				180deg,
				${props => `${props.theme.surface.white}00`} 51.56%,
				${props => `${props.theme.surface.white}99`} 79.11%,
				${props => `${props.theme.surface.white}F2`} 94.78%,
				${props => props.theme.surface.white} 100%
			);
		}
	}
	@media ${device.tablet} {
		display: grid;
		gap: 10%;
		.heroImg {
			display: block;
		}
		grid-template-columns: 1fr 27%;
	}

	@media ${device.laptop} {
		.heroImg img,
		.heroImg .shadow {
			min-height: 120%;
		}
	}
	${StyledSection} {
		gap: ${({ theme }) => theme.spacing[6]};
		.content {
			text-align: justify;
		}
	}
`

const About = () => {
	return (
		<ContentContainer>
			<StyledHeroSection>
				<StyledSection>
					<div className="header">
						<h1>Fritz Meyer</h1>
						<h2>Product Developer</h2>
					</div>
					<div className="content">
						<p>
							{/* eslint-disable-next-line react/no-unescaped-entities */}
							I'm Fritz, a Digital Product Developer specialising in{" "}
							<BrandColorText>crafting holistic digital experiences</BrandColorText> that bridge your product’s dream to
							its digital reality.
						</p>
						<p>
							With a mixture of technical thinking and aesthetic sensibility, I channel my passion for technology and
							design into developing seamless and innovative digital products. My journey combines the eye of a Brand &
							UI/UX Designer, the precision of a full-stack software engineering, and the visionary outlook of a product
							manager.
						</p>
					</div>
				</StyledSection>
				<div className="heroImg">
					<div className="shadow" />
					<img src={BodyNoBg} alt="fritz-upper-body-picture" />
				</div>
			</StyledHeroSection>
			<StyledSection>
				<div className="header">
					<h2>Services</h2>
				</div>
				<SkillsList />
			</StyledSection>
			<StyledSection>
				<div className="header">
					<h2>Tools</h2>
				</div>
				<SkillsList array={tools} />
			</StyledSection>
			<StyledSection>
				<div className="header">
					<h2>Experience</h2>
				</div>
				<ExperiencesList />
			</StyledSection>
			<StyledSection>
				<div className="header">
					<h2>Education</h2>
				</div>
				<ExperiencesList type="education" />
			</StyledSection>
		</ContentContainer>
	)
}

export default About
