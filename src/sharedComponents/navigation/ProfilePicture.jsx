import React from "react"
import styled from "styled-components"

import ProfilePic from "../../assets/ProfilePic.png"

export const StyledProfilePicture = styled.div`
	display: flex;
	width: 60px;
	height: 60px;
	justify-content: center;
	align-items: center;
	border-radius: var(--radius-md, 8px);
	background: linear-gradient(
			151deg,
			rgba(236, 239, 244, 0) 32.25%,
			rgba(236, 239, 244, 0.6) 65.05%,
			rgba(236, 239, 244, 0.75) 85.84%
		),
		var(--surface-surface-brand, #ff9529);
	position: relative;
	overflow: hidden;
	transition:
		height 0.3s,
		width 0.3s;
	img {
		position: absolute;
		top: 8px;
		right: 8px;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 100% 0;
		transform: scale(-1, 1);
	}
`

const ProfilePicture = () => (
	<StyledProfilePicture>
		<img src={ProfilePic} alt="" />
	</StyledProfilePicture>
)

export default ProfilePicture
