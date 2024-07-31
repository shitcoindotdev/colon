import React, { useEffect, useState } from 'react'

const Typewriter = ({ text, speed, className }) => {
	const [displayedText, setDisplayedText] = useState('')
	const [index, setIndex] = useState(0)

	useEffect(() => {
		if (index < text.length) {
			const timeoutId = setTimeout(() => {
				setDisplayedText((prev) => prev + text[index])
				setIndex((prevIndex) => prevIndex + 1)
			}, speed) // Delay between each character, adjust as needed

			return () => clearTimeout(timeoutId)
		}
	}, [index, text])

	return <div className={className}>{displayedText}</div>
}

export default Typewriter
