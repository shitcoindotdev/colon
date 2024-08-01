/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		// Add file-loader configuration
		config.module.rules.push({
			test: /\.(mp3|wav)$/, // Handle MP3 and WAV files
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[hash].[ext]',
					outputPath: 'static/media/', // Output files to the static/media folder
					publicPath: '/_next/static/media/', // Public path for loading assets
				},
			},
		})

		return config
	},
}

export default nextConfig
