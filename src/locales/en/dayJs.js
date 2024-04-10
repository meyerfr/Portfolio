// English [en]
import dayjs from "dayjs"

const locale = {
	name: "en",
	weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
	months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
	ordinal: n => {
		const s = ["th", "st", "nd", "rd"]
		const v = n % 100
		return `[${n}${s[(v - 20) % 10] || s[v] || s[0]}]`
	},
	weekStart: 0,
	yearStart: 4,
	formats: {
		LTS: "h:mm:ss a",
		LT: "h:mm a",
		L: "DD.MM.YYYY",
		LL: "D. MMMM YYYY",
		LLL: "dd, D. MMMM YYYY",
		LLLL: "dddd, D. MMMM YYYY h:mm a",
	},
}

dayjs.locale(locale, null, true)

export default locale
