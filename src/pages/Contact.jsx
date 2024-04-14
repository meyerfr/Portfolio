import React, { useState } from "react"
import styled from "styled-components"

import MyButton from "./Button"
import { StyledSection } from "./SharedComponents"

import { ContentContainer } from "../layouts/AppLayout"
import { Divider, StyledInlineButtons } from "../sharedComponents/navigation/StyledComponents"

const StyledContactSection = styled(StyledSection)`
	gap: ${({ theme }) => theme.spacing[6]};
	.header {
		gap: ${({ theme }) => theme.spacing[2]};
		p {
			color: ${({ theme }) => theme.text.secondary};
		}
	}
`

const DensedContainer = styled.div`
	display: grid;
	gap: ${({ theme }) => theme.spacing[4]};
	align-self: stretch;
`

const StyledContactInfoWrapper = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
	align-self: stretch;
	flex-wrap: wrap;
`
const StyledContactInfoItem = styled.div`
	display: grid;
	gap: ${({ theme }) => theme.spacing[1]};
	min-width: 250px;
	p:first-child {
		font-weight: 500;
	}
	p:last-child {
		color: ${({ theme }) => theme.text.secondary};
		font-size: ${({ theme }) => theme.font.s};
	}
`

const StyledContactForm = styled.form`
	display: grid;
	gap: ${({ theme }) => theme.spacing[5]};
	justify-items: end;
	align-items: flex-end;
	.form-body {
		display: flex;
		gap: ${({ theme }) => theme.spacing[5]};
		align-self: stretch;
		flex-wrap: wrap;
	}
	button {
		width: fit-content;
		padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[6]};
	}
`

const StyledInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing[1.5]};
	flex: 1 0 240px;
	&:has(> textarea) {
		min-width: 50%;
	}
`

const Input = props => {
	return (
		<StyledInput>
			<label htmlFor={`input-${props.name}`}>{props.label}</label>
			{props.type === "textarea" ? (
				<textarea id={`input-${props.name}`} {...props} className={"setMinWidth"} />
			) : (
				<input id={`input-${props.name}`} {...props} />
			)}
		</StyledInput>
	)
}

const contactFields = [
	{ type: "text", name: "name", placeholder: "Bob Schmidt", label: "Name" },
	{ type: "email", name: "email", placeholder: "bob@schmidt.com", label: "Email" },
	{ type: "textarea", name: "message", placeholder: "Enter your message…", label: "Message" },
]
const ContactForm = () => {
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			setLoading(true)
			const response = await fetch(process.env.REACT_APP_GOOGLE_SHEET_URL, {
				method: "POST",
				body: JSON.stringify(formData),
				headers: {
					"Content-Type": "text/plain",
				},
			})
			const result = await response.json()
			if (result.status === "success") {
				setFormData({
					name: "",
					email: "",
					message: "",
				})
				setLoading(false)
			}
			console.log(result) // Handle success
		} catch (error) {
			console.error("Error submitting form", error) // Handle errors
		}
	}

	return (
		<StyledContactForm onSubmit={handleSubmit}>
			<div className="form-body">
				{contactFields.map(field => {
					return <Input key={field.name} {...field} value={formData[field.name]} onChange={handleChange} />
				})}
			</div>
			<MyButton $type={"primary"} type="submit" $loading={loading} disabled={loading}>
				Send message
			</MyButton>
		</StyledContactForm>
	)
}

const Contact = () => {
	return (
		<ContentContainer>
			<StyledContactSection>
				<DensedContainer>
					<div className="header">
						<h1>Contact</h1>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						<p>Showcase of selected projects I've worked on in the past</p>
					</div>
					<Divider />
					<StyledContactInfoWrapper>
						<StyledContactInfoItem>
							<p>fritz.meyer@allesfritz.com</p>
							<p>Email</p>
						</StyledContactInfoItem>
						<StyledContactInfoItem>
							<p>+49 173 7557722</p>
							<p>Phone</p>
						</StyledContactInfoItem>
					</StyledContactInfoWrapper>
				</DensedContainer>
				<StyledInlineButtons>
					<MyButton $type={"primary-outlined"} type={"button"}>
						Write Email
					</MyButton>
					<MyButton disabled={false}>Schedule Call</MyButton>
				</StyledInlineButtons>
			</StyledContactSection>
			<StyledSection>
				<div className="header">
					<h2>Send a message</h2>
				</div>
				<ContactForm />
			</StyledSection>
		</ContentContainer>
	)
}

export default Contact
