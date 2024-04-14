import { useEffect } from "react"

const useHandleClickOutside = (navRef, bool, onClickOutside) => {
	useEffect(() => {
		const handleClickOutside = event => {
			if (bool && navRef.current && !navRef.current.contains(event.target)) {
				onClickOutside()
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [bool])
}

export default useHandleClickOutside
