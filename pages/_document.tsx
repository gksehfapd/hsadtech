import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<link
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
				rel="stylesheet"
			></link>
			<script
				type="text/javascript"
				src="//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5"
			></script>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
