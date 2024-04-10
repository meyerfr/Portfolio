import React, { useRef } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import useAutosizeTextArea from "../../util/customHooks/useAutoSizeTextArea"
import { formTranslationHelper as trans } from "../../util/formFields"
import { InputWrapper } from "../styledComponents/Input"

const StyledTextarea = styled(InputWrapper)`
	.input {
		position: relative;
		textarea {
			flex: 1;
			appearance: none;
			border: none;
			resize: none;
			background: none;
			min-height: 60px;
			max-height: 120px;
			&:focus-visible {
				outline: none;
			}
		}
		.charCountInfo {
			font-size: ${props => props.theme.fontSize.xs};
			position: absolute;
			bottom: 6px;
			right: 8px;
			color: ${props => props.theme.colors.gray400};
		}
	}
`

const Textarea = ({ input, label, placeholder, hint, Prefix, Suffix, maxLength, meta: { touched, error } }) => {
	const inputRef = useRef()
	const { t } = useTranslation("forms")

	useAutosizeTextArea(inputRef, input.value)

	const handleTextareaChange = e => {
		if (!maxLength) return input.onChange(e)

		const newValue = e.target.value
		if (newValue.length > maxLength) return
		return input.onChange(e)
	}

	return (
		<StyledTextarea
			onClick={() => document.activeElement !== inputRef.current && inputRef.current.focus()}
			$state={error && touched ? "error" : "default"}
		>
			{label && <label>{trans(t, label)}</label>}
			<div className={"inputContainer"}>
				<div className="input">
					{Prefix && <Prefix />}
					<textarea
						{...input}
						onChange={handleTextareaChange}
						placeholder={placeholder && trans(t, placeholder)}
						ref={inputRef}
						rows={1}
					/>
					{maxLength && <span className="charCountInfo">{`${input.value.length}/${maxLength}`}</span>}
					{Suffix && <Suffix />}
				</div>
				{hint && <span className="hint">{trans(t, hint)}</span>}
				{touched && error && <span className="error">{trans(t, error)}</span>}
			</div>
		</StyledTextarea>
	)
}

export default Textarea
