import { useEffect } from "react"

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (textAreaRef, value) => {
	useEffect(() => {
		// Function to adjust textarea height
		const adjustHeight = () => {
			if (textAreaRef?.current) {
				// Reset the height to ensure we're measuring content accurately
				textAreaRef.current.style.height = "auto"
				const scrollHeight = textAreaRef.current.scrollHeight

				// Set the height to scrollHeight to accommodate all content
				textAreaRef.current.style.height = `${scrollHeight}px`
			}
		}

		// Call adjustHeight to resize on mount and when value changes
		adjustHeight()

		// Optional: Consider resizing on window resize if your layout is responsive
		window.addEventListener("resize", adjustHeight)
		return () => window.removeEventListener("resize", adjustHeight)
	}, [textAreaRef, value])
}

export default useAutosizeTextArea
