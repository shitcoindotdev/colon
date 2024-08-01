// components/AudioPlayer.js
import React, { useEffect, useRef, useState } from 'react'

const AudioPlayer = ({ src }) => {
	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (!isPlaying) {
				setIsPlaying(true)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isPlaying])

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play().catch((error) => {
				console.error('Audio play failed:', error)
				setIsPlaying(false)
			})
		} else {
			audioRef.current.pause()
		}
	}, [isPlaying])

	const togglePlay = () => {
		setIsPlaying(!isPlaying)
	}

	return (
		<div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}>
			<audio ref={audioRef} loop>
				<source src={src} type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>
			<button
				onClick={togglePlay}
				className="shaking-element rounded-xl px-4 py-2 text-[16px] font-bold"
				style={{
					background: 'rgba(255, 255, 255, 0.95)',
					border: 'none',
					cursor: 'pointer',
				}}
			>
				<span className="gradient-text">{isPlaying ? 'Pause' : 'Play'}</span>
			</button>
		</div>
	)
}

export default AudioPlayer
