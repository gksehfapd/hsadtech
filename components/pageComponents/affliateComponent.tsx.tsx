import AffliateList from '../affliateSpan'
import { IoPhonePortraitOutline } from 'react-icons/io5'

const AffliateComponent = () => {
	return (
		<div className="flex flex-col pb-20 max-md:pb-10 break-keep">
			<span className="text-4xl items-center text-purple-900 max-md:pb-6 pb-20">
				제휴마케팅 서비스 제공
			</span>
			<div className="w-full flex justify-around items-center max-md:flex-col">
				<div className="w-1/2 max-md:w-full">
					<div className="font-bold text-xl flex flex-col">
						<span>폭 넓은 카테고리/대형 제휴처 협업을 통해 최적의 KPI달성 및 </span>
						<span>앱설치, 실행, 회원가입, 구매 등 KPI 진행 가능</span>
					</div>
					<ul className="flex flex-col pt-6 pr-20 max-md:pr-0">
						<AffliateList>
							오퍼월 매체 포함 450여개 APP, WEB 제휴사 체계적 관리
						</AffliateList>
						<hr />
						<AffliateList>
							목표 KPI(CPI) 달성을 위한 합리적인 광고 단가 적용
						</AffliateList>
						<hr />
						<AffliateList>배너 / 앱푸시 등 소재 관리와 신속한 이슈 대응</AffliateList>
						<hr />
						<AffliateList>매체관리 및 제휴사 서비스</AffliateList>
						<hr />
						<AffliateList>
							제휴사 플랫폼을 통해 배너(온/오프라인) 노출 혹은 앱푸시/LMS 발송
						</AffliateList>
					</ul>
				</div>
				<div className="w-1/2 max-md:w-full text-5xl justify-center items-center flex bg-red-200">
					<div className="">
						<IoPhonePortraitOutline /> img
					</div>
				</div>
			</div>
		</div>
	)
}

export default AffliateComponent
