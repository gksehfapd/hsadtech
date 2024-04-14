import AboutUsItem from '@/components/aboutusItem'
import AboutUsService from '@/components/aboutusService'
import Layout from '@/components/layout'
import { PiTargetBold } from 'react-icons/pi'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { MdAppShortcut } from 'react-icons/md'
import { FiImage } from 'react-icons/fi'
import { GrDocumentPerformance } from 'react-icons/gr'
import { BiSolidNetworkChart } from 'react-icons/bi'
import { AiFillFacebook } from 'react-icons/ai'
import { SiNaver } from 'react-icons/si'

const AboutUs = () => {
	return (
		<Layout className="p-8">
			<div className="flex flex-col pb-20 max-md:pb-10">
				<span className="text-4xl text-purple-900 pb-2">퍼포먼스 운영 및</span>
				<span className="text-4xl text-purple-900 pb-6">제휴 마케팅 전문 그룹</span>
				<div className="flex flex-col text-xl">
					<span>
						디지털 퍼포먼스 운영 및 제휴마케팅의 최적화된 솔루션을 통합적으로
						제공합니다.
					</span>
				</div>
			</div>
			<div className="flex w-full justify-around text-center max-md:grid max-md:grid-cols-4 max-md:gap-y-12 max-md:gap-x-8 pb-32">
				<AboutUsItem text="Affiliate AD" />
				<AboutUsItem text="퍼포먼스 노출형 광고" />
				<AboutUsItem text="검색광고 (SA)" />
				<AboutUsItem text="디스플레이광고 (DA)" />
				<AboutUsItem text="CPA CPS CPP CPE CPI CPSNS" />
				<AboutUsItem text="PG TECH" />
				<AboutUsItem text="AD TECH" />
				<AboutUsItem text="바이럴 (인플루언서 캠페인)" />
			</div>
			<div className="flex flex-col pb-32">
				<span className="text-4xl text-purple-900 pb-2">퍼포먼스 마케팅의</span>
				<span className="text-4xl text-purple-900 pb-6">One Stop Service</span>
				<div className="flex flex-col text-xl">
					<span className="pb-20">
						퍼포먼스 마케팅을 수행하기 위한 일원화된 기능과 조직으로 광고주의 성과를
						극대화하기 위해 Integrated Performance Marketing Service를 One Stop으로
						제공합니다
					</span>
					<div className="grid grid-cols-2 grid-rows-4 gap-8 content-stretch">
						<AboutUsService
							title="Affiliate AD"
							text="고도화된 타겟팅 기반 제휴 마케팅"
						>
							<PiTargetBold />
						</AboutUsService>
						<AboutUsService title="Search Ad" text="고효율의 검색 마케팅">
							<FaMagnifyingGlass />
						</AboutUsService>
						<AboutUsService title="App Marketing" text="고도화된 App 마케팅">
							<MdAppShortcut />
						</AboutUsService>
						<AboutUsService title="Media Platform" text="디지털 퍼포먼스 광고 플랫폼">
							<GrDocumentPerformance />
						</AboutUsService>
						<AboutUsService
							title="Performance Creative"
							text="퍼포먼스의 효율을 높일 수 있는 직관적인 비주얼과 메시지의 Creative"
						>
							<FiImage />
						</AboutUsService>
						<AboutUsService
							title="Network AD"
							text="GDN, DDN 등 네트워크 퍼포먼스 광고"
							fontSize="text-4xl"
						>
							<BiSolidNetworkChart />
						</AboutUsService>
						<AboutUsService
							title="Native AD"
							text="페이스북, 인스타그램, 밴드 등 고효율의 SNS 전문 광고"
						>
							<AiFillFacebook />
						</AboutUsService>
						<AboutUsService
							title="Portal AD"
							text="금융, 유통, 게임 등 다양한 카테고리의 포털 광고"
							fontSize="text-3xl"
						>
							<SiNaver />
						</AboutUsService>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default AboutUs
