import React, { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { HiOutlinePencil as EditIcon, HiOutlineTrash as DeleteIcon } from "react-icons/hi2"
import { useSelector } from "react-redux"
import dayjs from "dayjs"
import styled from "styled-components"

import { formTranslationHelper as trans } from "../../util/formFields"
import renderField from "../../util/renderField.helper"
import { Button } from "../styledComponents/Button"

const StyledMeetingsFieldWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing[4]};
	.inactiveMeetings {
		display: flex;
		flex-direction: column;
		gap: ${props => props.theme.spacing[4]};
	}
	.subForm-actions {
		display: flex;
		justify-content: end;
		gap: ${props => props.theme.spacing[4]};
		margin-top: ${props => props.theme.spacing[4]};
	}
`

const StyledActiveSubForm = styled.div`
	display: flex;
	flex-direction: column;
	h4.subFieldHeader {
		color: ${props => props.theme.colors.gray600};
		font-weight: 400;
		margin-bottom: ${props => props.theme.spacing[2]};
	}
`

const StyledInactiveSubItem = styled.div`
	border-radius: ${props => props.theme.radius.m};
	background: ${props => props.theme.colors.white};
	border: 1px solid ${props => props.theme.colors.gray400};
	padding: ${props => props.theme.spacing[2]};
	${props => props.theme.spacing[4]};
	display: flex;
	justify-content: space-between;
	align-items: end;
	position: relative;
	h5 {
		color: ${props => props.theme.colors.gray600};
		font-weight: 400;
		margin-bottom: ${props => props.theme.spacing[1]};
		position: absolute;
		right: ${props => props.theme.spacing[4]};
		top: ${props => props.theme.spacing[2]};
	}
	.dataOverview {
		display: flex;
		flex-direction: column;
		gap: ${props => props.theme.spacing[1]};
		.detailedInfo {
			display: flex;
			flex-direction: column;
			gap: ${props => props.theme.spacing[0.5]};
			color: ${props => props.theme.colors.gray700};
		}
	}
	.actions {
		display: flex;
		justify-content: end;
		gap: ${props => props.theme.spacing[1]};
	}
`

const RenderInactiveSubInfos = ({ meeting, index, remove, edit }) => {
	const { t } = useTranslation()

	return (
		<StyledInactiveSubItem>
			<h5>
				{t("meeting")} {index + 1}
			</h5>
			<div className={"dataOverview"}>
				<h4>{meeting.title}</h4>
				<div className={"detailedInfo"}>
					<p>{dayjs(meeting.startDate).format("customDate")}</p>
					<p>
						{dayjs(meeting.time).format("customTime")} - {dayjs(meeting.time).minute(meeting.duration).format("LT")}
					</p>
				</div>
			</div>
			<div className={"actions"}>
				<Button $type="borderless" onClick={edit}>
					<EditIcon />
				</Button>
				<Button $type="borderless" onClick={remove}>
					<DeleteIcon />
				</Button>
			</div>
		</StyledInactiveSubItem>
	)
}

const RenderActiveSubField = ({ meeting, index, subFields }) => {
	const { t } = useTranslation("common")

	return (
		<StyledActiveSubForm>
			<h4 className="subFieldHeader">
				{t("meeting")} {index + 1}
			</h4>
			<div className="fields" id={"activeMeetingFields"}>
				{subFields.map(f => renderField({ ...f, name: `${meeting}.${f.name}` }))}
			</div>
		</StyledActiveSubForm>
	)
}

const scrollToElement = el => {
	const signupScrollContainer = document.getElementById("signupScrollContainer")
	if (!el) {
		signupScrollContainer.scroll({ top: 0, left: 0, behavior: "smooth" })
	} else {
		const calculatedOffsetTop = el.offsetTop - 80
		signupScrollContainer.scroll({
			top: calculatedOffsetTop,
			left: 0,
			behavior: "smooth",
		})
	}
}

const MeetingsArrayField = ({ fields, handleSubmit, subFields, meta: { error } }) => {
	const [activeFieldIdx, setActiveFieldIdx] = useState(fields.length ? fields.length - 1 : null)
	const isFirstRender = useRef(true)
	const { t } = useTranslation()

	const meetingErrors = useSelector(
		state => state.form.signupForm?.syncErrors?.group?.meetings || state.form.createGroupForm?.syncErrors?.meetings
	)

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false
		} else if (activeFieldIdx !== null) {
			// scroll to Active Field
			const activeFieldContainer = document.getElementById("subFormWrapper")
			scrollToElement(activeFieldContainer)
		} else {
			// scroll to top of form step
			scrollToElement()
		}
	}, [activeFieldIdx])

	const closeActiveMeeting = () => {
		fields.remove(activeFieldIdx)
		setActiveFieldIdx(null)
	}

	const handleSaveMeeting = () => {
		if (!Object.values(meetingErrors[activeFieldIdx]).some(v => v)) {
			setActiveFieldIdx(null)
		}
	}

	const handleAddMeeting = () => {
		const newField = {
			title: "",
			duration: 60,
			recurrenceType: "weekly",
			startDate: dayjs().format(),
			time: dayjs().startOf("hour").format(),
		}
		fields.push(newField)
		setActiveFieldIdx(fields.length)
	}

	const handleEdit = idx => {
		if (!Object.values(meetingErrors[activeFieldIdx]).some(v => v)) {
			setActiveFieldIdx(idx)
		}
	}

	const handleRemoveInactive = idx => {
		fields.remove(idx)
		if (activeFieldIdx > idx) setActiveFieldIdx(activeFieldIdx - 1)
		if (fields.length === 1) {
			const newField = {
				title: "",
				duration: 60,
				recurrenceType: "weekly",
				startDate: dayjs().format(),
				time: dayjs().startOf("hour").format(),
			}
			fields.push(newField)
			setActiveFieldIdx(0)
		}
	}

	return (
		<StyledMeetingsFieldWrapper>
			{fields.map((m, i) => i !== activeFieldIdx).some(bool => bool) && (
				<div className="inactiveMeetings">
					{fields.map(
						(meeting, idx) =>
							idx !== activeFieldIdx && (
								<RenderInactiveSubInfos
									key={idx}
									meeting={fields.get(idx)}
									index={idx}
									remove={() => handleRemoveInactive(idx)}
									edit={!activeFieldIdx ? () => setActiveFieldIdx(idx) : () => handleSubmit(handleEdit(idx))}
								/>
							)
					)}
				</div>
			)}
			<div id={"subFormWrapper"}>
				{activeFieldIdx !== null && (
					<RenderActiveSubField
						meeting={`${fields.name}[${activeFieldIdx}]`}
						index={activeFieldIdx}
						subFields={subFields}
					/>
				)}
				<div className="subForm-actions">
					{activeFieldIdx !== null && fields.length > 1 && (
						<Button type="button" $type="secondary-borderless" onClick={closeActiveMeeting}>
							{t("auth:signup.steps.meetings.removeMeeting")}
						</Button>
					)}
					<Button
						type="button"
						$type="primary-borderless"
						onClick={
							!activeFieldIdx && activeFieldIdx !== 0 ? handleAddMeeting : () => handleSubmit(handleSaveMeeting())
						}
					>
						{activeFieldIdx ? t("auth:signup.steps.meetings.saveMeeting") : t("auth:signup.steps.meetings.addMeeting")}
					</Button>
				</div>
			</div>
			{error && <div>{trans(t, error)}</div>}
		</StyledMeetingsFieldWrapper>
	)
}

export default MeetingsArrayField
