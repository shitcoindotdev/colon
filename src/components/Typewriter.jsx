import React, { useEffect, useState } from 'react'

const Typewriter = ({ text, speed, className, delay = 0 }) => {
	const [displayedText, setDisplayedText] = useState('')
	const [index, setIndex] = useState(0)
	const [startTyping, setStartTyping] = useState(false)

	useEffect(() => {
		let timeoutId

		if (delay > 0 && !startTyping) {
			// Initial delay before starting the typewriter effect
			timeoutId = setTimeout(() => {
				setStartTyping(true)
			}, delay)
		} else if (index < text.length && startTyping) {
			// Typewriter effect logic
			timeoutId = setTimeout(() => {
				setDisplayedText((prev) => prev + text[index])
				setIndex((prevIndex) => prevIndex + 1)
			}, speed)
		}

		return () => clearTimeout(timeoutId)
	}, [index, text, delay, speed, startTyping])

	return <div className={className}>{displayedText}</div>
}

export default Typewriter
