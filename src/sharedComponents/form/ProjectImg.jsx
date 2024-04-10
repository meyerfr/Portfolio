import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Image } from "cloudinary-react"
import styled from "styled-components"

import { device, screenSize } from "../../util/breakpoints"
import useCloudinaryUploadWidget from "../../util/customHooks/useCloudinaryUploadWidget"
import useHandleResize from "../../util/customHooks/useHandleResize"
import { formTranslationHelper as trans } from "../../util/formFields"
import FullScreenImgLibrary from "../FullScreenImgLibrary"
import InlineCarousel from "../InlineCarousel"
import { Button } from "../styledComponents/Button"
import { InputWrapper } from "../styledComponents/Input"

const StyledImgField = styled(InputWrapper)`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing[1.5]};
	.selectedImg {
		border-radius: ${props => props.theme.radius.m};
		width: 225px;
		height: 150px;
		object-fit: cover;
	}
	.actions {
		display: flex;
		flex-direction: column;
		gap: ${props => props.theme.spacing[1.5]};
		@media ${device.tablet} {
			width: 50%;
		}
	}
	${Button} {
		background: ${props => props.theme.colors.white};
		color: ${props => props.theme.colors.gray800};
		border: 2px solid ${props => props.theme.colors.gray400};

		&:hover,
		&:focus {
			background: color-mix(in oklch, ${props => props.theme.colors.gray400} 100%, black 10%);
		}

		&:focus {
			box-shadow: 0 0 4px color-mix(in oklch, ${props => props.theme.colors.gray400} 100%, black 30%);
		}

		&:active {
			box-shadow: 0 0 10px color-mix(in oklch, ${props => props.theme.colors.gray400} 100%, white 30%);
		}
	}
`

const widgetAttributes = {
	folder: "groups/covers",
	cropping: true,
	croppingShowDimensions: true,
	croppingAspectRatio: 1.4,
	// croppingDefaultSelectionRatio: 2.5,
}

const ProjectImg = ({ input, label, options }) => {
	const handleImgUpload = uploadInfo => {
		input.onChange(uploadInfo.public_id)
	}

	useCloudinaryUploadWidget(widgetAttributes, "uploadProjectImgWidget", handleImgUpload)
	const { width: windowWidth } = useHandleResize()
	const [showCarousel, setShowCarousel] = useState(false)
	const { t } = useTranslation(["forms", "common"])
	const [isGalleryOpen, setGalleryOpen] = useState(false)

	const handleSelect = opt => {
		input.onChange(opt)
		setShowCarousel(false)
		setGalleryOpen(false)
	}

	const toggleImgOptions = e => {
		if (windowWidth < parseInt(screenSize.tablet.replace("px", ""))) {
			setGalleryOpen(!isGalleryOpen)
		} else {
			setShowCarousel(!showCarousel)
		}
		e.currentTarget.blur()
	}

	return (
		<StyledImgField>
			{label && <label>{trans(t, label)}</label>}

			{input.value && !showCarousel && <Image cloudName="di8ujuqae" publicId={input.value} className={"selectedImg"} />}
			{showCarousel && <InlineCarousel images={options} selectedImg={input.value} onClick={handleSelect} />}
			<div className="actions">
				<Button type="button" onClick={toggleImgOptions}>
					{showCarousel ? t("common:actions.cancel") : t("actions.chooseOtherImg")}
				</Button>
				<Button id="uploadProjectImgWidget" onClick={() => setShowCarousel(false)} type="button">
					{t("actions.uploadImg")}
				</Button>
			</div>
			<FullScreenImgLibrary
				images={options}
				isOpen={isGalleryOpen}
				onClose={() => setGalleryOpen(false)}
				selectedImg={input.value}
				onClick={handleSelect}
			/>
		</StyledImgField>
	)
}

export default ProjectImg
