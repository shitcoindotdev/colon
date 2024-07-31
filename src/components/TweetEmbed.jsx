import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const App = () => {
	return (
		<div className="flex w-full max-w-[600px] items-center justify-center">
			<TwitterTweetEmbed tweetId={'1036063695162421248'} />
		</div>
	)
}

export default App
