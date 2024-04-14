import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

import MyButton from "./Button"
import { StyledSection } from "./SharedComponents"

import { BackNavigation, ContentContainer as DefaultContentContainer } from "../layouts/AppLayout"
import {
	Badge,
	ProjectList,
	projectsList,
	ReviewList,
	SkillsList,
	StepsList,
} from "../sharedComponents/navigation/StyledComponents"
import { device } from "../util/breakpoints"

const DensedContentContainer = styled(DefaultContentContainer)`
	gap: ${({ theme }) => theme.spacing[4]};
	@media ${device.biggerThanTablet} {
		gap: ${props => props.theme.spacing[6]};
	}
`

const StyledHeroSection = styled(StyledSection)`
	gap: ${({ theme }) => theme.spacing[4]};
	@media ${device.tablet} {
		gap: ${({ theme }) => theme.spacing[5]};
	}
	${StyledSection} {
		gap: ${({ theme }) => theme.spacing[2]};
		@media ${device.tablet} {
			gap: ${({ theme }) => theme.spacing[3]};
		}
	}
`

const StyledProjectImg = styled.img`
	align-self: center;
	width: 100%;
	object-fit: cover;
	border-radius: ${({ theme }) => theme.radius.xl};
	@media ${device.biggerThanMobileL} {
		max-width: 600px;
		max-height: 350px;
		//width: 70%;
	}
`

const InlineDiv = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.spacing[2]};
`

const ProjectShow = () => {
	const { projectId } = useParams()

	const project = projectsList.find(project => project.id === projectId)

	if (!project) {
		return <div>Project not found</div>
	}

	return (
		<DensedContentContainer>
			<BackNavigation />
			<DefaultContentContainer>
				<StyledHeroSection>
					<InlineDiv>
						{project.badges.map((badge, idx) => (
							<Badge key={idx} {...badge} />
						))}
					</InlineDiv>
					<StyledSection>
						<div className="header">
							<h1>{project.title}</h1>
						</div>
						<p>{project.longDescription}</p>
					</StyledSection>
					<MyButton>Visit Website</MyButton>
				</StyledHeroSection>
				<StyledProjectImg src={project.img} />
				<StyledSection>
					<div className="header">
						<h2>Background</h2>
					</div>
					<p>{project.backgroundStory}</p>
				</StyledSection>
				<StyledSection>
					<div className="header">
						<h2>Goals</h2>
					</div>
					<StepsList array={project.goals} />
				</StyledSection>
				<StyledSection>
					<div className="header">
						<h2>Solutions</h2>
					</div>
					<StepsList array={project.solutions} />
				</StyledSection>
				<StyledSection>
					<div className="header">
						<h2>Tools</h2>
					</div>
					<SkillsList array={project.tools} />
				</StyledSection>
				<StyledSection>
					<div className="header">
						<h2>What the client says</h2>
					</div>
					<ReviewList reviews={project.reviews} />
				</StyledSection>
				<StyledSection>
					<div className="header">
						<h2>Conclusion</h2>
					</div>
					<p>{project.backgroundStory}</p>
				</StyledSection>
				<StyledSection>
					<div className="header">
						<h2>More projects</h2>
					</div>
					<ProjectList projects={projectsList.filter(p => p.id !== projectId).slice(0, 2)} goToProjectsOpt={true} />
				</StyledSection>
			</DefaultContentContainer>
		</DensedContentContainer>
	)
}

export default ProjectShow
