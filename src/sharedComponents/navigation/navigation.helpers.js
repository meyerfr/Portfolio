import React from "react"
import { useTranslation } from "react-i18next"
import {
	HiHome,
	HiOutlineHome,
	HiOutlineMagnifyingGlass,
	HiOutlineUserCircle,
	HiOutlineUserGroup,
	HiUserCircle,
	HiUserGroup,
} from "react-icons/hi2"
import { NavLink } from "react-router-dom"

const createNavigationItem = (Icon, IconFocused, title, path) => ({
	Icon,
	IconFocused,
	title,
	path,
})

export const topNavigationItems = [
	createNavigationItem(HiOutlineHome, HiHome, "navigation.dashboard", "/"),
	createNavigationItem(HiOutlineMagnifyingGlass, HiOutlineMagnifyingGlass, "navigation.findGroup", "/groups"),
	createNavigationItem(HiOutlineUserGroup, HiUserGroup, "navigation.myGroups", "/my-groups"),
]

export const bottomNavigationItems = [
	createNavigationItem(HiOutlineUserCircle, HiUserCircle, "navigation.profile", "/profile"),
]

export const NavigationItem = ({ Icon, IconFocused, title, path, onClick }) => {
	const { t } = useTranslation()
	return (
		<li>
			<NavLink to={path} onClick={onClick}>
				{({ isActive }) => (
					<>
						{isActive ? <IconFocused /> : <Icon />}
						<span>{t(title)}</span>
					</>
				)}
			</NavLink>
		</li>
	)
}
