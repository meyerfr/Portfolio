const createTranslationObject = (key, options = {}) => ({
	key,
	...(options && { options }),
})

export default createTranslationObject
