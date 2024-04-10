import React, { useRef } from "react"
import { useTranslation } from "react-i18next"
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"

import { formTranslationHelper as trans } from "../../util/formFields"
import { InputWrapper } from "../styledComponents/Input"

const PasswordSuffix = ({ show, ...props }) => {
	if (show) {
		return <HiOutlineEyeSlash {...props} />
	} else {
		return <HiOutlineEye {...props} />
	}
}

const PasswordInput = ({
	input,
	label,
	placeholder,
	type,
	hint,
	Prefix,
	forgotPasswordLink,
	meta: { touched, error },
}) => {
	const inputRef = useRef()
	const { t } = useTranslation(["forms", "auth"])
	const navigate = useNavigate()

	const handleSuffixClick = () => {
		handlePasswordToggle()
	}

	const handlePasswordToggle = () => {
		if (inputRef.current.type === "password") {
			inputRef.current.type = "text"
		} else {
			inputRef.current.type = "password"
		}
	}

	const handleForgotPassword = e => {
		e.stopPropagation()

		navigate("/auth/forgotPassword")
	}

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
					<input {...input} type={type} placeholder={placeholder && trans(t, placeholder)} ref={inputRef} />
					<PasswordSuffix
						className="suffix clickable"
						show={inputRef.current?.type === "password"}
						onClick={handleSuffixClick}
					/>
				</div>
				{hint && <span className="hint">{trans(t, hint)}</span>}
				{forgotPasswordLink && (
					<a onClick={handleForgotPassword} className="tiny fieldLink">
						{t("auth:login.forgotPassword")}
					</a>
				)}
				{touched && error && <span className="error">{trans(t, error)}</span>}
			</div>
		</InputWrapper>
	)
}

export default PasswordInput
