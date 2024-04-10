import React from "react"

import renderField from "../../util/renderField.helper"
import { Form } from "../styledComponents/Collection"

const SharedForm = ({ handleSubmit, onFormSubmit, fields, SubmitBtn, BackBtn, submitting }) => (
	<Form onSubmit={handleSubmit}>
		<div className="fields">{fields.map(field => renderField(field, handleSubmit))}</div>
		<div className="actions">
			{BackBtn && <BackBtn />}
			<div /> {/* Placeholder for design flex justify-content: space-between */}
			<div className="sub-stack">
				<SubmitBtn disabled={submitting} onClick={handleSubmit(onFormSubmit)} />
			</div>
		</div>
	</Form>
)

export default SharedForm
