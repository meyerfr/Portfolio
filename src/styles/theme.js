// theme.js
import { blue, cyan, gray, green, indigo, orange, pink, purple, red, teal, themeColors, yellow } from "../util/colors"

const spacingBase = 8

const spaces = [0.5, 1, 1.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const spacing = spaces.reduce((acc, space) => {
	acc[space] = `${spacingBase * space}px`
	return acc
}, {})

const radius = {
	xs: "2px",
	s: "4px",
	m: "8px",
	l: "16px",
	xl: "32px",
	xxl: "128px",
}

const font = {
	xxl: "1.5rem",
	xl: "1.3rem",
	l: "1.17rem",
	m: "1rem",
	s: "0.9rem",
	xs: "0.78rem",
}

const colors = {
	...themeColors,
	...indigo,
	...blue,
	...gray,
	...purple,
	...red,
	...green,
	...orange,
	...pink,
	...yellow,
	...cyan,
	...teal,
	white: "#FCFCFC",
}

export const lightTheme = {
	mode: "light",
	typography: {
		fontFamily: "Inter, Arial, sans-serif",
		secondaryFamily: "Helvetica Neue",
	},
	spacing,
	radius,
	font,
	colors,
	text: {
		primary: "#111111",
		primaryInvert: "#FFFFFF",
		secondary: "#666666",
		secondaryInvert: "#FFFFFF",
		brand: "#FF9529",
	},
	surface: {
		primary: "#F4F5F5",
		primaryInvert: "#141414",
		secondary: "#AEB1B752",
		secondaryInvert: "#000000",
		brand: "#FF9529",
		white: "#FFFFFF",
		black: "#000000",
		gray: "#EFEFF0",
	},
	buttons: {
		primary: {
			default: {
				bg: "#303236",
				color: "#FFFFFF",
				hover: {
					bg: "#18191b",
				},
				focus: {
					bg: "#18191b",
					outline: "3px solid #87adf5",
				},
				active: {
					bg: "#484b51",
				},
				disabled: {
					bg: "#30323699",
					color: "#FFFFFF99",
				},
			},
			outlined: {
				border: "#303236",
				color: "#303236",
				hover: {
					bg: "#303236",
					color: "#FFFFFF",
				},
				focus: {
					bg: "#EDEFEF",
					outline: "3px solid #87adf5",
				},
				active: {
					bg: "#484b51",
				},
				disabled: {
					bg: "#e9ecec99",
					border: "#30323699",
					color: "#30323699",
				},
			},
			borderless: {
				color: "#303236",
				hover: {
					bg: "#303236",
					color: "#FFFFFF",
				},
				focus: {
					bg: "#EDEFEF",
					outline: "3px solid #87adf5",
				},
				active: {
					bg: "#484b51",
					color: "#FFFFFF",
				},
				disabled: {
					bg: "#e9ecec99",
					color: "#30323699",
				},
			},
		},
	},
	input: {
		bg: "#F4F5F5",
		placeholder: "#6C757D",
		border: "#DEE2E6",
	},
	badge: {
		green: {
			bg: "#09FF7D29",
			color: "#08804F",
		},
		red: {
			bg: "#FAE9E1",
			color: "#A15830",
		},
	},
	// ... add any other theming constants you need
}

export const darkTheme = {
	mode: "dark",
	typography: {
		fontFamily: "Inter, Arial, sans-serif",
		secondaryFamily: "Helvetica Neue",
	},
	spacing,
	radius,
	font,
	colors,
	text: {
		primary: "#f8f5f5",
		primaryInvert: "#111111",
		secondary: "#FFFFFF99",
		secondaryInvert: "#666666",
		brand: "#FF9529",
	},
	surface: {
		primary: "#141414",
		primaryInvert: "#F4F5F5",
		secondary: "#000000",
		secondaryInvert: "#AEB1B752",
		brand: "#FF9529",
		white: "#1A1A1A",
		black: "#FFFFFF",
		gray: "#282828",
	},
	buttons: {
		primary: {
			default: {
				bg: "#FFFFFF24",
				color: "#FFFFFF",
				hover: {
					bg: "#FFFFFF3D",
				},
				focus: {
					bg: "#FFFFFF30",
					outline: "3px solid #87adf5",
				},
				active: {
					bg: "#FFFFFF24",
				},
				disabled: {
					bg: "#FFFFFF14",
					color: "#CCCCCC99",
				},
			},
			outlined: {
				border: "#FFFFFF3D",
				color: "#f8f5f5",
				hover: {
					bg: "#FFFFFF3D",
					color: "#f8f5f5",
				},
				focus: {
					bg: "#FFFFFF24",
					outline: "3px solid #87adf5",
				},
				active: {
					bg: "#FFFFFF33",
				},
				disabled: {
					bg: "#FFFFFF0F",
					border: "#FFFFFF24",
					color: "#FFFFFF24",
				},
			},
			borderless: {
				color: "#f8f5f5",
				hover: {
					bg: "#303236",
					color: "#FFFFFF",
				},
				focus: {
					bg: "#EDEFEF",
					outline: "3px solid #87adf5",
				},
				active: {
					bg: "#484b51",
					color: "#FFFFFF",
				},
				disabled: {
					bg: "#e9ecec99",
					color: "#30323699",
				},
			},
		},
	},
	input: {
		bg: "#141414",
		placeholder: "#6C757D",
		border: "#333333",
	},
	badge: {
		green: {
			bg: "#0F8A5136",
			color: "#12C971",
		},
		red: {
			bg: "#382218",
			color: "#FABC9B",
		},
	},
}
