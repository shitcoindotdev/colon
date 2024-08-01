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
				className="rounded-xl text-[16px]"
				style={{
					background: 'rgba(0, 0, 0, 0.5)',
					border: 'none',
					color: 'white',
					padding: '6px',
					cursor: 'pointer',
				}}
			>
				{isPlaying ? 'Pause' : 'Play'}
			</button>
		</div>
	)
}

export default AudioPlayer
