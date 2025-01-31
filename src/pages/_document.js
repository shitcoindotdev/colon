import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html className="bg-black" lang="en">
			<Head>
				<link rel="icon" type="image/svg+xml" href="/shibasvg.svg" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
