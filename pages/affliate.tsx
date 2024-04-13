import Layout from '@/components/layout'
import Link from 'next/link'

export default function Affliate() {
	return (
		<div>
			<Layout className="p-8">
				<div className="flex flex-col pb-20 max-md:pb-10">
					<span className="text-4xl items-center text-purple-900 pb-40">
						제휴마케팅 서비스 제공
					</span>
					<div className="flex flex-col text-xl bg-red-200 items-center w-full">
						<div className="flex justify-around items-center w-full">
							<div className="w-20 h-20 flex justify-center items-center rounded-full bg-purple-900 text-white">
								<b>광고주</b>
							</div>
							<div className="w-1/5 flex flex-col bg-blue-200 justify-center items-center">
								<span className="text-base break-keep flex text-center">
									200여개 APP, WEB 제휴사 체계적 관리 (오퍼월 매체 포함 450여개
									제휴처)
								</span>
								<div>양쪽화살표</div>
								<span className="text-base break-keep flex text-center">
									목표 KPI(CPI) 달성을 위한 합리적인 광고 단가 적용
								</span>
							</div>
							<div>매체관리 및 제휴가 서비스</div>
							<div>소재 관리</div>
							<div>서비스 이용고객</div>
						</div>
						<div>위아래 화살표</div>
						<div>
							<span>폭 넓은 카테고리/대형 제휴처 협업을 통해 최적의 KPI 달성</span>
							<span>앱 설치, 실행, 회원가입, 구매 등 KPI 진행 가능</span>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	)
}
