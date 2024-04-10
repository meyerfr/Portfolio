import React, { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { TimePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"

import { formTranslationHelper as trans } from "../../util/formFields"
import { InputWrapper } from "../styledComponents/Input"

const MyTimePicker = ({ input, label, hint, meta: { touched, error } }) => {
	const inputRef = useRef()
	const { t } = useTranslation("forms")

	const handleChange = value => {
		input.onChange(value ? value.format() : null)

		// Manually trigger onBlur to set touched state
		input.onBlur()
	}

	// This effect sets up and tears down the blur event listener
	useEffect(() => {
		const handleBlur = () => input.onBlur()
		const currentInputRef = inputRef.current

		if (currentInputRef) {
			currentInputRef.addEventListener("blur", handleBlur)
		}

		return () => {
			if (currentInputRef) {
				currentInputRef.removeEventListener("blur", handleBlur)
			}
		}
	}, [])

	return (
		<InputWrapper
			onClick={() => document.activeElement !== inputRef.current && inputRef.current.focus()}
			$state={error ? "error" : "default"}
		>
			{label && <label>{trans(t, label)}</label>}
			<div className={"inputContainer"}>
				<TimePicker
					name={input.name}
					value={dayjs(input.value)}
					inputRef={inputRef}
					onChange={value => handleChange(value)}
					inputFormat="HH:mm"
					timeSteps={{ hours: 1, minutes: 15 }}
					minutesStep={5}
					mask="__:__"
					views={["hours", "minutes"]}
					ampm={false}
				/>
				{hint && <span className="hint">{trans(t, hint)}</span>}
				{touched && error && <span className="error">{trans(t, error)}</span>}
			</div>
		</InputWrapper>
	)
}

export default MyTimePicker
