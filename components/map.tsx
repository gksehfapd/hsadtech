import { Map } from 'react-kakao-maps-sdk'
import { useEffect, useState } from 'react'

declare global {
	interface Window {
		kakao: any
	}
}

const KakaoMap = () => {
	const appKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY

	useEffect(() => {
		const kakaoMapScript = document.createElement('script')
		kakaoMapScript.async = false
		kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`
		document.head.appendChild(kakaoMapScript)

		const onLoadKakaoAPI = () => {
			window.kakao.maps.load(() => {
				var mapContainer = document.getElementById('map'), // 지도를 표시할 div
					mapOption = {
						center: new kakao.maps.LatLng(37.5458559401876, 127.047977996156), // 지도의 중심좌표
						level: 3 // 지도의 확대 레벨
					}

				//@ts-ignore
				var map = new kakao.maps.Map(mapContainer, mapOption) // 지도를 생성합니다

				// 마커가 표시될 위치입니다
				var markerPosition = new kakao.maps.LatLng(37.5458559401876, 127.047977996156)

				// 마커를 생성합니다
				var marker = new kakao.maps.Marker({
					position: markerPosition
				})

				// 마커가 지도 위에 표시되도록 설정합니다
				marker.setMap(map)

				var iwContent =
						'<div style="padding-top:5px; padding-bottom:5px; text-align:center; width:150px;">HSADTECH</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
					iwPosition = new kakao.maps.LatLng(37.5458559401876, 127.047977996156) //인포윈도우 표시 위치입니다

				// 인포윈도우를 생성합니다
				var infowindow = new kakao.maps.InfoWindow({
					position: iwPosition,
					content: iwContent
				})

				// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
				infowindow.open(map, marker)
			})
		}

		kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
	}, [])

	return <div id="map" style={{ width: '100%', height: '100%' }}></div>
}

export default KakaoMap
