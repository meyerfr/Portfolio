// theme.js
import { blue, cyan, gray, green, indigo, orange, pink, purple, red, teal, themeColors, yellow } from "../util/colors"

const spacingBase = 8

const theme = {
	colors: {
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
	},
	typography: {
		fontFamily: "Helvetica Neue, Arial, sans-serif",
		secondaryFamily: "Alike",
	},
	spacing: {
		0.5: `${spacingBase / 2}px`,
		1: `${spacingBase}px`,
		1.5: `${spacingBase * 1.5}px`,
		2: `${spacingBase * 2}px`,
		3: `${spacingBase * 3}px`,
		4: `${spacingBase * 4}px`,
		5: `${spacingBase * 5}px`,
		6: `${spacingBase * 6}px`,
		7: `${spacingBase * 7}px`,
		8: `${spacingBase * 8}px`,
		9: `${spacingBase * 9}px`,
		10: `${spacingBase * 10}px`,
		11: `${spacingBase * 11}px`,
		12: `${spacingBase * 12}px`,
		13: `${spacingBase * 13}px`,
	},
	radius: {
		xs: "2px",
		s: "4px",
		m: "8px",
		l: "16px",
		xl: "32px",
		xxl: "128px",
	},
	textColors: {
		primary: gray.gray900,
		secondary: gray.gray600,
		brand: themeColors.primary,
	},
	surfaceColors: {
		primary: gray.gray100,
		secondary: gray.gray800,
		brand: themeColors.primary,
	},
	fontSize: {
		xxl: "1.5em",
		xl: "1.3em",
		l: "1.17em",
		m: "1em",
		s: "0.9em",
		xs: "0.75em",
	},
	// ... add any other theming constants you need
}

export default theme
