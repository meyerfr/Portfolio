import React from "react"
import { useTranslation } from "react-i18next"
// eslint-disable-next-line import/no-unresolved
import { faHouse } from "@awesome.me/kit-aaa9bcafa6/icons/classic/thin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const element = <FontAwesomeIcon icon={faHouse} />

const Home = () => {
	const { t } = useTranslation()
	return (
		<div>
			{element}
			<h1>{t("navigation.dashboard")}</h1>
		</div>
	)
}

export default Home
