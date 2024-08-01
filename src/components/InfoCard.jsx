import React, { useState } from 'react'

const InfoCard = ({ title, content, className }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={`infoCard w-[560px] max-w-[85vw] rounded-lg ${className}`}>
			<details className={`group peer`} open={isOpen} onToggle={toggleOpen}>
				<summary className="flex cursor-pointer items-center px-4 py-2">
					<h2 className="gradient-text text-left text-[20px] font-semibold">{title}</h2>
				</summary>
			</details>
			<div
				className={`grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-[200ms] ease-in-out`}
			>
				<div className="overflow-hidden">
					<p className="group-open:border-t-1 mx-4 -translate-y-3 border-t border-white py-3 text-left text-[16px] font-normal transition-all duration-[200ms] ease-in-out">
						{content}
					</p>
				</div>
			</div>
		</div>
	)
}

export default InfoCard
