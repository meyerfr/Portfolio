import React from "react"
import styled from "styled-components"

import { StyledSection } from "./SharedComponents"

import { ContentContainer } from "../layouts/AppLayout"
import { ProjectList } from "../sharedComponents/navigation/StyledComponents"

const StyledProjectsSection = styled(StyledSection)`
	gap: ${({ theme }) => theme.spacing[6]};
	.header {
		gap: ${({ theme }) => theme.spacing[2]};
		p {
			color: ${({ theme }) => theme.text.secondary};
		}
	}
`

const Projects = () => {
	return (
		<ContentContainer>
			<StyledProjectsSection>
				<div className="header">
					<h1>Projects</h1>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					<p>Showcase of selected projects I've worked on in the past</p>
				</div>
				<ProjectList />
			</StyledProjectsSection>
		</ContentContainer>
	)
}

export default Projects
