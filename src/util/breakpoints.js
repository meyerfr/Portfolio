export const screenSize = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 768,
	laptop: 1024,
	laptopL: 1440,
	desktop: 2560,
	desktopL: 2900,
}

export const device = {
	mobileS: `(min-width: ${screenSize.mobileS}px)`,
	mobileM: `(min-width: ${screenSize.mobileM}px)`,
	mobileL: `(min-width: ${screenSize.mobileL}px)`,
	biggerThanMobileL: `(min-width: ${screenSize.mobileL + 1}px)`,
	tablet: `(min-width: ${screenSize.tablet}px)`,
	biggerThanTablet: `(min-width: ${screenSize.tablet + 1}px)`,
	laptop: `(min-width: ${screenSize.laptop}px)`,
	biggerThanLaptop: `(min-width: ${screenSize.laptop + 1}px)`,
	laptopL: `(min-width: ${screenSize.laptopL}px)`,
	biggerThanLaptopL: `(min-width: ${screenSize.laptopL + 1}px)`,
	desktop: `(min-width: ${screenSize.desktop}px)`,
	desktopL: `(min-width: ${screenSize.desktopL}px)`,
}
