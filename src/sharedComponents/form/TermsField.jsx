/* eslint-disable no-unused-vars */
import React from "react"
import { Trans } from "react-i18next"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledTermsField = styled.label`
	display: flex;
	align-items: center;
	gap: ${props => props.theme.spacing[1.5]};
	color: ${props => (!props.$hasError ? props.theme.text.primary : props.theme.colors.danger)};
`

const TermsField = ({ input, type, meta: { touched, error } }) => {
	return (
		<StyledTermsField className="optionWrapper" htmlFor="terms-input" $hasError={touched && error}>
			<input type={type} {...input} id="terms-input" />
			<span>
				<Trans i18nKey="forms:labels.terms">
					<Link to="/terms">general terms and conditions</Link>
					<Link to="/privacy">privacy policy</Link>
				</Trans>
			</span>
		</StyledTermsField>
	)
}

export default TermsField
