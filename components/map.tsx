import { Map } from 'react-kakao-maps-sdk'
import { useEffect, useState } from 'react'

declare global {
	interface Window {
		kakao: any
	}
}

const KakaoMap = () => {
	useEffect(() => {
		const kakaoMapScript = document.createElement('script')
		kakaoMapScript.async = false
		kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=3c47b6af8fc538f105c538f2d85828c2&autoload=false`
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
			})
		}

		kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
	}, [])

	return <div id="map" style={{ width: '100%', height: '100%' }}></div>
}

export default KakaoMap
