import React from "react"
import { Trans, useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { formTranslationHelper as trans } from "../../util/formFields"
import { StyledFormStep } from "../DefaultMultiFormStep"
import { Button } from "../styledComponents/Button"

const StyledSuccessStep = styled(StyledFormStep)`
	.stepHeader {
		gap: ${props => props.theme.spacing[5]};
		h1 {
			font-weight: 400;
			font-family: ${props => props.theme.typography.secondaryFamily};
		}
		h4.subheader {
			color: ${props => props.theme.colors.gray800};
		}
		h4.subheader,
		h4.subheader a {
			font-weight: 400;
			.help {
				display: flex;
				flex-direction: column;
			}
		}
	}
	.form {
		display: flex;
		flex-direction: column;
		gap: ${props => props.theme.spacing[4]};
	}
	button.fullWidth {
		width: 100%;
	}
`

const CreateGroupSuccess = ({ selfModerated, selectedOption, handleContinue }) => {
	const { t } = useTranslation()

	return (
		<StyledSuccessStep>
			<div className="stepHeader">
				<h1>
					{selfModerated
						? t("auth:signup.steps.headers.successModerator")
						: t("auth:signup.steps.headers.successOther")}
				</h1>
				<h4 className="subheader">
					<Trans
						i18nKey={
							selfModerated
								? "auth:signup.steps.subheaders.successModerator"
								: "auth:signup.steps.subheaders.successOther"
						}
						components={{
							1: <Link to={"mailto:help@groupera.de"} />,
							2: <br />,
							3: <strong />,
						}}
					/>
				</h4>
			</div>

			<div className="form">
				{selfModerated && (
					<a href={selectedOption.program} download={`${selectedOption.value}_program.pdf`}>
						<Button $size="large" $type="primary-outlined" className={"fullWidth"}>
							Download {`${trans(t, selectedOption.label)}_${t("common:program")}.pdf`}
						</Button>
					</a>
				)}
				<div className="actions">
					<div />
					{/* Placeholder for design flex justify-content: space-between */}
					<div className="sub-stack">
						<Button onClick={handleContinue} $type="primary" $size="large">
							{t("common:actions.submit")}
						</Button>
					</div>
				</div>
			</div>
		</StyledSuccessStep>
	)
}

export default CreateGroupSuccess
