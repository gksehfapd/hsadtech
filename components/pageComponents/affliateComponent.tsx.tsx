import { FaPeopleGroup } from 'react-icons/fa6'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaArrowUpLong } from 'react-icons/fa6'
import { FaArrowDownLong } from 'react-icons/fa6'
import { TbDeviceMobileMessage } from 'react-icons/tb'

const AffliateComponent = () => {
	return (
		<div className="flex flex-col pb-20 max-md:pb-10 break-keep">
			<span className="text-4xl items-center text-purple-900 pb-20">
				제휴마케팅 서비스 제공
			</span>
			<div className="flex flex-col text-xl items-center w-full  text-center">
				<div className="flex justify-around items-center w-full bg-red-200">
					<div className="w-1/5 flex items-center justify-center">
						<div className="w-20 h-20 flex justify-center items-center rounded-full bg-purple-900 text-white">
							<b>광고주</b>
						</div>
					</div>
					<div className="flex justify-around items-center w-1/5">
						<FaArrowLeftLong className="text-3xl" />
						<div className="w-3/5 flex flex-col items-center justify-center text-base text-center font-bold">
							<span>오퍼월 매체 포함 450여개 APP, WEB 제휴사 체계적 관리</span>
							<span>및</span>
							<span>목표 KPI(CPI) 달성을 위한 합리적인 광고 단가 적용</span>
						</div>
						<FaArrowRightLong className="text-3xl" />
					</div>
					<div className="w-1/5 flex flex-col justify-center items-center">
						<span className="text-base">매체관리 및 제휴사 서비스</span>
						<TbDeviceMobileMessage className="text-8xl" />
						<span className="text-red-500 font-bold">사업 제휴</span>
					</div>
					<div className="flex justify-center items-center w-1/5">
						<FaArrowLeftLong className="text-3xl" />
						<span className="font-bold px-5 flex text-center">소재 관리</span>
						<FaArrowRightLong className="text-3xl" />
					</div>
					<div className="flex flex-col justify-center items-center w-1/5">
						<span className="text-base">서비스 이용 고객</span>
						<FaPeopleGroup className="text-8xl" />
					</div>
				</div>
				<div className="py-6 flex flex-col justify-center items-center">
					<FaArrowUpLong className="text-3xl" />
					<div className="py-4 flex flex-col justify-center items-center">
						<span>제휴사 플랫폼을 통해 </span>
						<span className="text-purple-800">
							배너(온/오프라인) 노출 혹은 앱푸시/LMS 발송
						</span>
					</div>
					<FaArrowDownLong className="text-3xl" />
				</div>
				<div className="font-bold flex flex-col justify-center items-center">
					<span>
						폭 넓은 카테고리/대형 제휴처 협업을 통해 최적의{' '}
						<span className="text-purple-800">KPI 달성</span>
					</span>
					<span className="text-purple-800">
						앱 설치, 실행, 회원가입, 구매 등 KPI 진행 가능
					</span>
				</div>
			</div>
		</div>
	)
}

export default AffliateComponent
