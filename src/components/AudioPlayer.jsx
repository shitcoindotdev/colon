// components/AudioPlayer.js
import React, { useEffect, useRef, useState } from 'react'

const AudioPlayer = ({ src }) => {
	const audioRef = useRef(null)
	const [isMuted, setIsMuted] = useState(false)

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.play().catch((error) => {
				console.error('Audio play failed:', error)
			})
		}
	}, [])

	const toggleMute = () => {
		if (audioRef.current) {
			audioRef.current.muted = !isMuted
			setIsMuted(!isMuted)
		}
	}

	return (
		<div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}>
			<audio ref={audioRef} loop>
				<source src={src} type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>
			<button
				onClick={toggleMute}
				className="gradient-text"
				style={{
					cursor: 'pointer',
				}}
			>
				{isMuted ? 'Unmute' : 'Mute'}
			</button>
		</div>
	)
}

export default AudioPlayer
