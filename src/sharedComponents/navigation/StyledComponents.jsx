import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import {
	faFigma,
	faGithub,
	faHtml5,
	faLinkedin,
	faNodeJs,
	faReact,
	faSlack,
	// eslint-disable-next-line import/no-unresolved
} from "@awesome.me/kit-aaa9bcafa6/icons/classic/brands"
import {
	faAt,
	faBriefcase as faBriefcaseSolid,
	faBrightness,
	faEnvelope as faEnvelopeSolid,
	faHouse as faHouseSolid,
	faMoon,
	faUser as faUserSolid,
	// eslint-disable-next-line import/no-unresolved
} from "@awesome.me/kit-aaa9bcafa6/icons/classic/regular"
// eslint-disable-next-line import/no-unresolved
import { faBriefcase, faEnvelope, faHouse, faUser } from "@awesome.me/kit-aaa9bcafa6/icons/classic/thin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import ProfilePicture, { StyledProfilePicture } from "./ProfilePicture"

import ProfilePic from "../../assets/ProfilePic.png"
import MyButton from "../../pages/Button"
import { useTheme } from "../../styles/ThemeContext"
import { device, screenSize } from "../../util/breakpoints"
import useHandleResize from "../../util/customHooks/useHandleResize"

export const Divider = styled.hr.attrs({ $orientation: "horizontal" })`
	width: ${({ $orientation }) => ($orientation === "horizontal" ? "100%" : "unset")};
	height: ${({ $orientation }) => ($orientation === "horizontal" ? "unset" : "100%")};
	border: 2px solid ${props => props.theme.surface.gray};
	border-radius: 20px;
	margin: 0;
`

// eslint-disable-next-line no-unused-vars
const RowContainer = styled.div.attrs({ $gap: 2 })`
	display: flex;
	gap: ${({ theme, $gap }) => theme.spacing[$gap]};
`

// eslint-disable-next-line no-unused-vars
const WrapContainer = styled.div.attrs({ $gap: 2 })`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ theme, $gap }) => theme.spacing[$gap]};
`

// eslint-disable-next-line no-unused-vars
const ColumnContainer = styled.div.attrs({ $gap: 2 })`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: ${({ theme, $gap }) => theme.spacing[$gap]};
`

const StyledProfile = styled.div`
	display: flex;
	justify-content: center;
	gap: ${props => props.theme.spacing[2]};
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: ${props => props.theme.spacing[0.5]};
		span {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.primary-text {
			font-size: ${props => props.theme.font.m};
			font-weight: 700;
		}
		.secondary-text {
			font-size: ${props => props.theme.font.s};
			color: ${props => props.theme.text.secondary};
		}
	}
`

export const StyledSidebarProfile = styled(StyledProfile)`
	flex-direction: column;
	align-items: center;
	.content {
		align-items: center;
	}
`

export const NavbarProfile = styled(StyledProfile)`
	${StyledProfilePicture} {
		width: 48px;
		height: 48px;
	}
`

export const Profile = ({ type = "navbar", onClick }) => {
	const StyledElement = type === "navbar" ? NavbarProfile : StyledSidebarProfile

	const handleClick = () => {
		onClick && onClick()
	}

	return (
		<StyledElement onClick={handleClick}>
			<ProfilePicture />
			<div className="content">
				<span className="primary-text">Fritz Meyer</span>
				<span className="secondary-text">Product Developer</span>
			</div>
		</StyledElement>
	)
}

export const StyledSocials = styled.div`
	display: flex;
	gap: ${props => props.theme.spacing[5]};
	align-items: center;
	justify-content: center;
	svg {
		font-size: 20px;
		padding: 6px;
		color: ${props => props.theme.text.secondary};
		cursor: pointer;
	}
`

export const StyledSidebarSocials = styled(StyledSocials)`
	flex-direction: column;
	gap: ${props => props.theme.spacing[1.5]};
`

export const socialLinks = [{ icon: faAt }, { icon: faLinkedin }, { icon: faGithub }]

export const Socials = ({ type = "navbar" }) => {
	const StyledElement = type === "navbar" ? StyledSocials : StyledSidebarSocials
	return (
		<StyledElement>
			{socialLinks.map((item, i) => (
				<FontAwesomeIcon key={i} icon={item.icon} />
			))}
		</StyledElement>
	)
}

const StyledModeSwitch = styled.div`
	svg {
		font-size: 22px;
		padding: 6px;
		color: ${props => props.theme.text.secondary};
		cursor: pointer;
	}
`

export const DarkModeSwitch = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<StyledModeSwitch>
			<FontAwesomeIcon icon={theme === "light" ? faBrightness : faMoon} onClick={toggleTheme} />
		</StyledModeSwitch>
	)
}

const StyledNavLink = styled(NavLink)`
	appearance: none;
	text-decoration: none;
	color: ${props => props.theme.text.primary};
	cursor: pointer;
	align-self: stretch;
	display: flex;
	justify-content: center;
	border-radius: ${props => props.theme.radius.l};
`

export const StyledNavItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${props => props.theme.spacing[1.5]};
	padding: 0 ${props => props.theme.spacing[2]};
	background: ${props => (props.$active ? props.theme.surface.secondary : "transparent")};
	border-radius: ${props => props.theme.radius.l};
	flex: 1;
	min-width: calc(48px - (${props => props.theme.spacing[2]} * 2));
	min-height: 48px;
	svg {
		font-size: 20px;
	}
	span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 100%;
	}
`

export const NavListItem = ({ iconFocused, icon, title, path, onClick }) => (
	<StyledNavLink to={path} onClick={onClick}>
		{({ isActive }) => (
			<StyledNavItem $active={isActive}>
				<FontAwesomeIcon icon={isActive ? iconFocused : icon} />
				<span>{title}</span>
			</StyledNavItem>
		)}
	</StyledNavLink>
)

export const StyledNavList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${props => props.theme.spacing[1]};
	align-self: stretch;
	flex: 1;
`

export const navItems = [
	{ iconFocused: faHouseSolid, icon: faHouse, title: "Homepage", path: "/" },
	{ iconFocused: faBriefcaseSolid, icon: faBriefcase, title: "Projects", path: "/projects" },
	{ iconFocused: faUserSolid, icon: faUser, title: "About", path: "/about" },
	{ iconFocused: faEnvelopeSolid, icon: faEnvelope, title: "Contact", path: "/contact" },
]

export const NavList = ({ onItemClick }) => (
	<StyledNavList>
		{navItems.map((item, i) => (
			<NavListItem key={i} {...item} onClick={onItemClick} />
		))}
	</StyledNavList>
)

const StyledSkillsList = styled.div`
	display: flex;
	flex-wrap: wrap;

	gap: ${({ theme }) => theme.spacing[1]};
	align-self: stretch;

	border-radius: ${({ theme }) => theme.radius.m};
	overflow: hidden;
	@media ${device.tablet} {
		border-radius: ${({ theme }) => theme.radius.l};
	}
`

const StyledSkillItem = styled.div`
	flex: 1 1 calc(50% - (${({ theme }) => theme.spacing[1]} * 0.5) - (${({ theme }) => theme.spacing[2]} * 2));
	// flex: 1 1 calc(50% - (gap * 0.5) - (padding * 2));
	min-width: 240px;
	display: flex;
	padding: ${({ theme }) => theme.spacing[2]};
	gap: ${({ theme }) => theme.spacing[2]};
	align-items: center;
	background: ${({ theme }) => theme.surface.gray};
	white-space: nowrap;
	@media ${device.tablet} {
		flex: 1 1 calc(50% - (${({ theme }) => theme.spacing[1]} * 0.5) - (${({ theme }) => theme.spacing[3]} * 2));
		padding: ${({ theme }) => theme.spacing[3]};
	}
`

export const services = [
	{ text: "End-to-end product design" },
	{ text: "Backend Development" },
	{ text: "UI / UX design" },
	{ text: "Product Strategy" },
	{ text: "Frontend Development" },
	{ text: "Relational Databases" },
	{ text: "Non-relational Databases" },
	{ text: "Brand design" },
]

export const tools = [
	{ icon: faGithub, text: "Github" },
	{ icon: faFigma, text: "Figma" },
	{ text: "Webstorm" },
	{ text: "ChatGPT" },
	{ icon: faSlack, text: "Slack" },
	{ text: "Adobe photoshop" },
	{ icon: faHtml5, text: "Javascript, Python, Ruby, SQL, HTMl, (S)CSS" },
	{ icon: faNodeJs, text: "NodeJs, React, Redux, MongoDB, PostgreSQL" },
]

export const SkillsList = ({ array = services }) => {
	return (
		<StyledSkillsList>
			{array.map((item, i) => (
				<StyledSkillItem key={i}>
					{item.icon && <FontAwesomeIcon icon={item.icon} />}
					<span>{item.text}</span>
				</StyledSkillItem>
			))}
		</StyledSkillsList>
	)
}

const StyledReviewsList = styled.div`
	display: flex;
	flex-wrap: wrap;

	gap: ${({ theme }) => theme.spacing[3]};
	align-self: stretch;
	position: relative;
	.moreBtn {
		position: absolute;
		bottom: 0;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100px;
		padding-bottom: ${({ theme }) => theme.spacing[4]};

		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 4.15%,
			rgba(255, 255, 255, 0.6) 17.57%,
			rgba(255, 255, 255, 0.8) 53.51%,
			#fff 100%
		);

		button {
			padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
			border-radius: ${({ theme }) => theme.spacing[1.5]};
			outline: none;
			background: transparent;
			border: 1px solid ${({ theme }) => theme.buttons.primary.background};
			font-size: 1.1em;
			height: 48px;
			cursor: pointer;
			color: ${({ theme }) => theme.buttons.primary.background};
		}
	}
`

const StyledReviewItem = styled.div`
	flex: 1 1 calc(50% - (${({ theme }) => theme.spacing[3]} * 0.5) - (${({ theme }) => theme.spacing[5]} * 2));
	// flex: 1 1 calc(50% - (gap * 0.5) - (padding * 2));
	min-width: 170px;
	display: flex;
	flex-direction: column;
	padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
	gap: ${({ theme }) => theme.spacing[3]};
	background: ${({ theme }) => theme.surface.gray};
	border-radius: ${({ theme }) => theme.radius.xl};
	text-align: justify;
	.author {
		display: flex;
		align-items: center;
		gap: ${({ theme }) => theme.spacing[2]};
		img {
			width: 60px;
			height: 60px;
			flex-shrink: 0;
			object-fit: cover;
			object-position: top;
		}
		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			.secondary-text {
				color: ${({ theme }) => theme.text.secondary};
				font-size: ${({ theme }) => theme.font.s};
				font-weight: 400;
			}
		}
	}
	@media ${device.biggerThanTablet} {
		flex: 1 1 calc(50% - (${({ theme }) => theme.spacing[3]} * 0.5) - (${({ theme }) => theme.spacing[6]} * 2));
		padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
	}
`

const homeReviews = [
	{
		text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
		author: {
			name: "John Doe",
			role: "CEO",
			imgPath: ProfilePic,
		},
	},
	{
		text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
		author: {
			name: "John Doe",
			role: "CEO",
			imgPath: ProfilePic,
		},
	},
	{
		text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
		author: {
			name: "John Doe",
			role: "CEO",
			imgPath: ProfilePic,
		},
	},
	{
		text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
		author: {
			name: "John Doe",
			role: "CEO",
			imgPath: ProfilePic,
		},
	},
]

export const ReviewList = ({ reviews = homeReviews }) => {
	const { width: windowWidth } = useHandleResize()

	const displayReviewCount = windowWidth < screenSize.tablet ? 2 : 4
	const selectedReviews = reviews.slice(0, displayReviewCount)

	return (
		<StyledReviewsList>
			{selectedReviews.map((review, i) => (
				<StyledReviewItem key={i}>
					<span>{review.text}</span>
					<div className="author">
						<img src={review.author.imgPath} />
						<div className="content">
							<span className="primary-text">{review.author.name}</span>
							<span className="secondary-text">{review.author.role}</span>
						</div>
					</div>
				</StyledReviewItem>
			))}
			{selectedReviews.length < reviews.length && (
				<div className="moreBtn">
					<button>View more reviews</button>
				</div>
			)}
		</StyledReviewsList>
	)
}

const StyledExperiencesList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing[4]};
	align-self: stretch;
	@media ${device.tablet} {
		gap: ${({ theme }) => theme.spacing[5]};
	}
`

const StyledExperienceItem = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.spacing[6]};
	align-self: stretch;
	.content {
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing[3]};
	}
	.content .header span:last-child,
	.minLeft {
		color: ${({ theme }) => theme.text.secondary};
		font-size: ${({ theme }) => theme.font.s};
	}
	.minLeft {
		min-width: 230px;
		max-width: 280px;
		flex: 1;
	}
	.minRight {
		min-width: 390px;
		flex: 1;
	}
`

const experiences = [
	{
		date: "August 2023 - March 2024",
		title: "Groupera GmbH",
		subtitle: "Product Strategy + UI / UX Design",
		desc: "Engaged in executing studies, trial runs with users, brainstorming, sketching blueprints, and crafting refined user experiences and user interfaces for iOS, Android, and the Web. Closely partnering with engineers, product supervisors, and important personnel. Designing experiences that are guided by data and centered on the user.",
	},
	{
		date: "July 2023 - January 2024",
		title: "Always Present GmbH",
		subtitle: "Product Strategy + UI / UX Design",
		desc: "Engaged in executing studies, trial runs with users, brainstorming, sketching blueprints, and crafting refined user experiences and user interfaces for iOS, Android, and the Web. Closely partnering with engineers, product supervisors, and important personnel. Designing experiences that are guided by data and centered on the user.",
	},
	{
		date: "July 2021 - April 2023",
		title: "CallGuru",
		subtitle: "Co-Founder + CPO",
		desc: "Engaged in executing studies, trial runs with users, brainstorming, sketching blueprints, and crafting refined user experiences and user interfaces for iOS, Android, and the Web. Closely partnering with engineers, product supervisors, and important personnel. Designing experiences that are guided by data and centered on the user.",
	},
	{
		date: "January 2019 - July 2022",
		title: "Stacey Real Estate UG",
		subtitle: "Product Strategy + UI / UX Design",
		desc: "Engaged in executing studies, trial runs with users, brainstorming, sketching blueprints, and crafting refined user experiences and user interfaces for iOS, Android, and the Web. Closely partnering with engineers, product supervisors, and important personnel. Designing experiences that are guided by data and centered on the user.",
	},
	{
		date: "Mai 2018 - September 2018",
		title: "Afilio GmbH",
		subtitle: "Product Strategy + UI / UX Design",
		desc: "Engaged in executing studies, trial runs with users, brainstorming, sketching blueprints, and crafting refined user experiences and user interfaces for iOS, Android, and the Web. Closely partnering with engineers, product supervisors, and important personnel. Designing experiences that are guided by data and centered on the user.",
	},
]

const courses = [
	{
		date: "September 19 - Present",
		title: "Bsc Software Engineering",
		subtitle: "CODE University of Applied Science",
	},
	{
		date: "September 2018 - December 2018",
		title: "LeWagon Coding Bootcamp",
		subtitle: "Intense coding course with focus on Web-development",
	},
	{
		date: "2015-2017",
		title: "High School",
		subtitle: "Cecilien Gymnasium Düsseldorf",
	},
]

export const ExperiencesList = ({ type = "experiences" }) => {
	const array = type === "experiences" ? experiences : courses
	return (
		<StyledExperiencesList>
			{array.map((item, i) => {
				return i < array.length - 1 ? (
					[
						<StyledExperienceItem key={i}>
							<span className="minLeft">{item.date}</span>
							<div className="content minRight">
								<div className="header">
									<span>{item.title}</span>
									<span>{item.subtitle}</span>
								</div>
								{item.desc && <p>{item.desc}</p>}
							</div>
						</StyledExperienceItem>,
						<Divider key={`${i}-divider`} />,
					]
				) : (
					<StyledExperienceItem key={i}>
						<span className="minLeft">{item.date}</span>
						<div className="content minRight">
							<div className="header">
								<span>{item.title}</span>
								<span>{item.subtitle}</span>
							</div>
							{item.desc && <p>{item.desc}</p>}
						</div>
					</StyledExperienceItem>
				)
			})}
		</StyledExperiencesList>
	)
}

const StyledStepsList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing[4]};
	align-self: stretch;
	@media ${device.tablet} {
		gap: ${({ theme }) => theme.spacing[5]};
	}
`

const StyledStepItem = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
	align-self: stretch;
	.content {
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing[2]};
		p:first-child {
			font-weight: 500;
		}
		p:last-child {
			color: ${({ theme }) => theme.text.secondary};
		}
	}
	.content .header span:last-child,
	.minLeft {
		color: ${({ theme }) => theme.text.secondary};
		font-size: ${({ theme }) => theme.font.s};
	}
	.minLeft {
		display: flex;
		width: 40px;
		height: 40px;
		justify-content: center;
		align-items: center;
		border-radius: 50px;
		background: ${({ theme }) => `${theme.surface.brand}80`}; // 50% opacity
		color: ${({ theme }) => theme.text.primary};
		font-weight: 500;
	}
	.minRight {
		min-width: 280px;
		flex: 1;
	}
`

export const StepsList = ({ array }) => {
	return (
		<StyledStepsList>
			{array.map((item, i) => (
				<StyledStepItem key={i}>
					<span className="minLeft">{i + 1}</span>
					<div className="content minRight">
						<p>{item.title}</p>
						<p>{item.description}</p>
					</div>
				</StyledStepItem>
			))}
		</StyledStepsList>
	)
}

const StyledProject = styled.div`
	flex: 1 1 300px;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[2]};
	cursor: pointer;
	.imgWrapper {
		img {
			width: 100%;
			max-height: 250px;
			object-fit: cover;
			border-radius: ${({ theme }) => theme.radius.m};
		}
	}
	.content {
		display: grid;
		gap: ${({ theme }) => theme.spacing[1]};
		p:first-child {
			color: ${({ theme }) => theme.text.primary};
			font-weight: 600;
		}
		p:last-child {
			color: ${({ theme }) => theme.text.secondary};
		}
	}
	@media ${device.biggerThanMobileL} {
		flex: 1 1 calc(50% - (${({ theme }) => theme.spacing[5]} * 0.5));
		max-width: calc(50% - (${({ theme }) => theme.spacing[5]} * 0.5));
	}
`

const StyledProjectList = styled.div`
	display: flex;
	flex-direction: column;
	align-self: stretch;
	gap: ${({ theme }) => theme.spacing[5]};
	> div {
		display: flex;
		flex-wrap: wrap;
		gap: ${({ theme }) => theme.spacing[5]};
		align-self: stretch;

		position: relative;
	}
	button {
		align-self: stretch;
	}
`

export const projectsList = [
	{
		id: "groupera",
		title: "Groupera GmbH",
		description: "Product Strategy & UI / UX Desgin",
		longDescription:
			"Not another useless UI kit. Tetrisly Design System is a collection of rules, tools and processes which simplify design processes and the development of digital products.",
		img: "https://via.placeholder.com/200x150",
		backgroundStory:
			"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
		goals: [
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
		],
		solutions: [
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
		],
		tools: [
			{
				icon: faFigma,
				text: "Figma",
			},
			{
				icon: faReact,
				text: "React",
			},
		],
		conclusion:
			"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
		reviews: [
			{
				text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
				author: {
					name: "John Doe",
					role: "CEO",
					imgPath: ProfilePic,
				},
			},
			{
				text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
				author: {
					name: "John Doe",
					role: "CEO",
					imgPath: ProfilePic,
				},
			},
		],
		badges: [
			{
				text: "Product Strategy",
				color: "red",
			},
			{
				text: "UI/UX",
				color: "red",
			},
			{
				text: "Fullstack Development",
				color: "red",
			},
		],
	},
	{
		id: "stacey",
		title: "Stacey Real Estate UG",
		description: "Product Strategy & UI / UX Desgin",
		longDescription:
			"Not another useless UI kit. Tetrisly Design System is a collection of rules, tools and processes which simplify design processes and the development of digital products.",
		img: "https://via.placeholder.com/200x150",
		backgroundStory:
			"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
		goals: [
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
		],
		solutions: [
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
		],
		tools: [
			{
				icon: faFigma,
				text: "Figma",
			},
			{
				icon: faReact,
				text: "React",
			},
		],
		conclusion:
			"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
		reviews: [
			{
				text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
				author: {
					name: "John Doe",
					role: "CEO",
					imgPath: ProfilePic,
				},
			},
			{
				text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
				author: {
					name: "John Doe",
					role: "CEO",
					imgPath: ProfilePic,
				},
			},
		],
		badges: [
			{
				text: "Product Strategy",
				color: "red",
			},
			{
				text: "UI/UX",
				color: "red",
			},
			{
				text: "Fullstack Development",
				color: "red",
			},
		],
	},
	{
		id: "callguru",
		title: "CallGuru GmbH",
		description: "Product Strategy & UI / UX Desgin",
		longDescription:
			"Not another useless UI kit. Tetrisly Design System is a collection of rules, tools and processes which simplify design processes and the development of digital products.",
		img: "https://via.placeholder.com/200x150",
		backgroundStory:
			"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
		goals: [
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
		],
		solutions: [
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
		],
		tools: [
			{
				icon: faFigma,
				text: "Figma",
			},
			{
				icon: faReact,
				text: "React",
			},
		],
		conclusion:
			"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
		reviews: [
			{
				text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
				author: {
					name: "John Doe",
					role: "CEO",
					imgPath: ProfilePic,
				},
			},
			{
				text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
				author: {
					name: "John Doe",
					role: "CEO",
					imgPath: ProfilePic,
				},
			},
		],
		badges: [
			{
				text: "Product Strategy",
				color: "red",
			},
			{
				text: "UI/UX",
				color: "red",
			},
			{
				text: "Fullstack Development",
				color: "red",
			},
		],
	},
	{
		id: "present",
		title: "PRESENT GmbH",
		description: "Product Strategy & UI / UX Desgin",
		longDescription:
			"Not another useless UI kit. Tetrisly Design System is a collection of rules, tools and processes which simplify design processes and the development of digital products.",
		img: "https://via.placeholder.com/200x150",
		backgroundStory:
			"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
		goals: [
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
		],
		solutions: [
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges",
			},
			{
				title: "Bringing a new dimension to user experiences and interfaces.",
				description:
					"The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
			},
		],
		tools: [
			{
				icon: faFigma,
				text: "Figma",
			},
			{
				icon: faReact,
				text: "React",
			},
		],
		conclusion:
			"In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.",
		reviews: [
			{
				text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
				author: {
					name: "John Doe",
					role: "CEO",
					imgPath: ProfilePic,
				},
			},
			{
				text: "We've worked with Fritz multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Fritz works in a very timely manner and always ensures that you are fully satisfied with the results!",
				author: {
					name: "John Doe",
					role: "CEO",
					imgPath: ProfilePic,
				},
			},
		],
		badges: [
			{
				text: "Product Strategy",
				color: "red",
			},
			{
				text: "UI/UX",
				color: "red",
			},
			{
				text: "Fullstack Development",
				color: "red",
			},
		],
	},
]

export const ProjectList = ({ projects = projectsList, goToProjectsOpt }) => {
	const navigate = useNavigate()

	return (
		<StyledProjectList>
			<div>
				{projects.map((project, i) => (
					<StyledProject key={i} onClick={() => navigate(`/projects/${project.id}`)}>
						<div className="imgWrapper">
							<img src={project.img} />
						</div>
						<div className="content">
							<p>{project.title}</p>
							<p>{project.description}</p>
						</div>
					</StyledProject>
				))}
			</div>
			{goToProjectsOpt && (
				<MyButton $type="primary-outlined">All projects</MyButton>
				// <div className="moreBtn">
				// </div>
			)}
		</StyledProjectList>
	)
}

export const StyledInlineButtons = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
	align-self: stretch;
	button {
		flex: 1 0 180px;
		max-width: 220px;
	}
`

const StyledBadge = styled.div.attrs(props => {
	const badgeType = props.theme.badge[props.$type] || props.theme.badge.green
	return {
		$badgeType: badgeType,
	}
})`
	display: flex;
	padding: 2px 12px;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.spacing[1.5]};
	border-radius: ${({ theme }) => theme.radius.m};
	background: ${({ $badgeType }) => $badgeType.bg};
	color: ${({ $badgeType }) => $badgeType.color};
	font-size: ${({ theme }) => theme.font.xs};
	font-weight: 500;
	svg {
		font-size: 0.68rem;
	}
`

export const Badge = ({ icon, text, type = "red" }) => {
	return (
		<StyledBadge $type={type}>
			{icon && <FontAwesomeIcon icon={icon} />} <span>{text}</span>
		</StyledBadge>
	)
}
