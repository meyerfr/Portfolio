import React from "react"
import { useTranslation } from "react-i18next"
import styled, { css } from "styled-components"

import { formTranslationHelper as trans } from "../../util/formFields"
import { InputWrapper } from "../styledComponents/Input"

// eslint-disable-next-line no-unused-vars
const getFieldNameStyles = fieldName => {
	const realFieldName = fieldName.includes(".") ? fieldName.split(".")[1] : fieldName

	switch (realFieldName) {
		case "gender":
		case "selfModerated":
			return css`
				.options {
					flex-wrap: wrap;
					flex-direction: row;
					.optionWrapper {
						flex: 1 0 max-content;
					}
				}
			`
		case "recurrenceType":
		case "duration":
			return css`
				.options {
					flex-wrap: wrap;
					flex-direction: row;
					.optionWrapper {
						flex: 1 0 230px;
					}
				}
			`
		default:
			return css``
	}
}

const StyledSelectWrapper = styled(InputWrapper).attrs(props => ({
	$fieldName: props.$fieldName || "default",
}))`
	.optionWrapper {
		display: flex;
		justify-content: space-between;
		align-self: stretch;
		flex: 1;
		gap: ${props => props.theme.spacing[1]};
		padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};

		border-radius: ${props => props.theme.radius.m};
		background: ${props => props.theme.colors.white};
		border: 1px solid ${props => props.theme.colors.gray400};
	}
	.options {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 12px;
		align-self: stretch;
	}
	${({ theme, $fieldName }) => getFieldNameStyles($fieldName, theme)}
`

const Select = ({ input, label, type, hint, options, meta: { touched, error }, showTopHint = false }) => {
	const { t } = useTranslation("forms")

	const isMultiSelect = type.toLowerCase().includes("multi")

	const handleOnChange = (e, opt) => {
		if (!isMultiSelect) {
			return input.onChange(opt.value)
		}

		const newValue = [...input.value]
		if (e.target.checked) {
			newValue.push(opt.value)
		} else {
			newValue.splice(newValue.indexOf(opt.value), 1)
		}

		return input.onChange(newValue)
	}

	return (
		<StyledSelectWrapper $state={error && touched ? "error" : "default"} $fieldName={input.name}>
			{label && <label>{trans(t, label)}</label>}
			{showTopHint && <label>{t(isMultiSelect ? "chooseMin" : "chooseOne")}</label>}
			<div className="options">
				{options.map((opt, i) => (
					<label className="optionWrapper" key={i} htmlFor={`${input.name}[${i}]`}>
						{opt.label && <label>{trans(t, opt.label)}</label>}
						<input
							type={isMultiSelect ? "checkbox" : "radio"}
							id={`${input.name}[${i}]`}
							name={`${input.name}[${i}]`}
							value={opt.value}
							checked={Array.isArray(input.value) ? input.value.indexOf(opt.value) !== -1 : input.value === opt.value}
							onChange={e => handleOnChange(e, opt)}
						/>
					</label>
				))}
			</div>
			{hint && <span className="hint">{trans(t, hint)}</span>}
			{touched && error && <span className="error">{trans(t, error)}</span>}
		</StyledSelectWrapper>
	)
}

export default Select
