import React, { useRef } from "react"
import { useTranslation } from "react-i18next"

import { formTranslationHelper as trans } from "../../util/formFields"
import { InputWrapper } from "../styledComponents/Input"

const Input = ({
	input,
	label,
	placeholder,
	type,
	hint,
	disabled = false,
	Prefix,
	Suffix,
	meta: { touched, error },
}) => {
	const inputRef = useRef()
	const { t } = useTranslation("forms")

	const handleFocusInput = e => {
		e.preventDefault()
		document.activeElement !== inputRef.current && inputRef.current.focus()
	}

	return (
		<InputWrapper onClick={handleFocusInput} $state={error && touched ? "error" : "default"}>
			{label && <label>{trans(t, label)}</label>}
			<div className={"inputContainer"}>
				<div className="input">
					{Prefix && <Prefix className="prefix" />}
					<input
						{...input}
						type={type}
						placeholder={placeholder && trans(t, placeholder)}
						ref={inputRef}
						disabled={disabled}
					/>
					{Suffix && <Suffix className="suffix" />}
				</div>
				{hint && <span className="hint">{trans(t, hint)}</span>}
				{touched && error && <span className="error">{trans(t, error)}</span>}
			</div>
		</InputWrapper>
	)
}

export default Input
