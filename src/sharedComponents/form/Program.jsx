import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { HiOutlineArrowDownTray as DownloadIcon } from "react-icons/hi2"
import styled from "styled-components"

import { formTranslationHelper as trans } from "../../util/formFields"
import { InputWrapper } from "../styledComponents/Input"

const StyledProgramDownloadWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing[4]};
	.desc {
		display: flex;
		flex-direction: column;
		gap: ${props => props.theme.spacing[3]};
		div {
			display: flex;
			flex-direction: column;
			gap: ${props => props.theme.spacing[0.5]};
			p:first-child {
				font-weight: 600;
			}
		}
	}
	a {
		text-decoration: none;
		color: ${props => props.theme.text.primary};
		cursor: pointer;
		.input span {
			flex: 1;
		}
	}
	a:hover {
		text-decoration: none;
	}
	${InputWrapper} {
		position: relative;
		&::after {
			display: block;
			content: "";
			height: 2px;
			width: calc(${props => `${props.$progress}%`} - 8px);
			position: absolute;
			top: 0;
			left: 4px;
			background: green;
		}
	}
`

const ProgramDownload = ({ input, hint, options, meta: { touched, error } }) => {
	const { t } = useTranslation(["forms", "auth", "common"])
	const [progress, setProgress] = useState(0)

	const selectedOption = options.find(opt => opt.value === input.value) || options.find(opt => opt.value === "other")

	const handleDownload = () => {
		if (progress === 100) setProgress(0)
		const timer = setInterval(() => {
			setProgress(oldProgress => {
				if (oldProgress === 100) {
					clearInterval(timer)
					return 100
				}
				const diff = Math.random() * 10
				return Math.min(oldProgress + diff, 100)
			})
		}, 80)

		setTimeout(() => {
			setProgress(0)
		}, 5000)
	}

	return (
		<StyledProgramDownloadWrapper $progress={progress}>
			<div className="desc">
				<div>
					<p>{t("auth:signup.steps.program.program")}</p>
					<p>{t("auth:signup.steps.program.program_desc")}</p>
				</div>
				<div>
					<p>{t("auth:signup.steps.program.moderation")}</p>
					<p>{t("auth:signup.steps.program.moderation_desc")}</p>
				</div>
			</div>

			<a href={selectedOption.program} download={`${selectedOption.value}_program.pdf`} onClick={handleDownload}>
				<InputWrapper $state={error && touched ? "error" : "default"}>
					<div className={"inputContainer"}>
						<div className="input">
							<span>{`${trans(t, selectedOption.label)}_${t("common:program")}.pdf`}</span>
							<DownloadIcon />
						</div>
						{hint && <span className="hint">{trans(t, hint)}</span>}
						{touched && error && <span className="error">{trans(t, error)}</span>}
					</div>
				</InputWrapper>
			</a>
		</StyledProgramDownloadWrapper>
	)
}

export default ProgramDownload
