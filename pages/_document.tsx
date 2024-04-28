import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<link
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
				rel="stylesheet"
			></link>
			<Script
				type="text/javascript"
				src="//dapi.kakao.com/v2/maps/sdk.js?appkey=3c47b6af8fc538f105c538f2d85828c2&autoload=false"
			></Script>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
