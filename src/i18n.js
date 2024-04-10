import { initReactI18next } from "react-i18next"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat" // For parsing custom formats
import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import "./locales/de/dayJs"
import "./locales/en/dayJs"

import authDE from "./locales/de/auth.json"
import commonDE from "./locales/de/common.json"
import formsDE from "./locales/de/forms.json"
import authEN from "./locales/en/auth.json"
import commonEN from "./locales/en/common.json"
import formsEN from "./locales/en/forms.json"

// the translations
const resources = {
	en: {
		common: commonEN,
		auth: authEN,
		forms: formsEN,
	},
	de: {
		common: commonDE,
		auth: authDE,
		forms: formsDE,
	},
}

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources,
		lng: "en", // default language
		fallbackLng: "en",
		debug: true,
		ns: ["common", "auth", "forms"],
		defaultNS: "common",
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	})

// Extend day.js with necessary plugins
dayjs.extend(customParseFormat)

// Custom plugin to add new format templates
const customFormatTemplates = (options, dayjsClass) => {
	const oldFormat = dayjsClass.prototype.format // Store original format method

	dayjsClass.prototype.format = function (formatStr) {
		// Access the current locale
		const currentLocale = this.$locale() // This requires the localeData plugin

		// Define custom format templates based on locale
		const customFormats = {
			customDate: () => {
				// Example: Adjust the format based on the current locale
				if (currentLocale.name === "de") {
					return `${this.format("dd")}, ${this.format("D")}. ${this.format("MMMM YYYY")}`
				} else {
					// Default to English format or include other locale checks
					return `${this.format("dd")}, ${this.format("D")} ${this.format("MMMM YYYY")}`
				}
			},
			customTime: () => {
				// Example: Adjust the format based on the current locale
				if (currentLocale.name === "de") {
					return `${this.format("H")}:${this.format("mm")}`
				} else {
					// Default to English format or include other locale checks
					return `${this.format("h")}:${this.format("mm")}`
				}
			},
			// Add other custom formats and locale checks as needed
		}

		// Check if the requested format is a custom template
		if (customFormats[formatStr]) {
			return customFormats[formatStr].call(this)
		}

		// Fallback to day.js's original format method
		return oldFormat.call(this, formatStr)
	}
}

// Extend day.js with the custom plugin
dayjs.extend(customFormatTemplates)

// Function to update day.js locale based on i18next language
function updateDayjsLocale(lng) {
	switch (lng) {
		case "de":
			dayjs.locale("de")
			break
		default:
			dayjs.locale("en") // Default to English
	}
}

// Listen to i18next language changes
i18n.on("languageChanged", lng => {
	updateDayjsLocale(lng)
})

// Initial setting of day.js locale based on browser language or fallback
updateDayjsLocale(i18n.language)

export default i18n
