import AboutUsItem from '@/components/aboutusItem'
import Layout from '@/components/layout'

const AboutUs = () => {
	return (
		<Layout className="p-8">
			<div className="flex flex-col pb-32">
				<span className="text-4xl text-purple-900 pb-2">퍼포먼스 운영 및</span>
				<span className="text-4xl text-purple-900 pb-6">제휴 마케팅 전문 그룹</span>
				<div className="flex flex-col text-xl">
					<span>
						디지털 퍼포먼스 운영 및 제휴마케팅의 최적화된 솔루션을 통합적으로
						제공합니다.
					</span>
				</div>
			</div>
			<div className="flex flex-col items-center pb-48">
				<span className="text-4xl text-purple-900 mb-12">PERFORMANCE MARKETING</span>
				<div className="flex w-full justify-around text-center">
					<AboutUsItem text="Affiliate AD" />
					<AboutUsItem text="퍼포먼스 노출형 광고" />
					<AboutUsItem text="CPA CPS CPP CPE CPI CPSNS" />
					<AboutUsItem text="검색광고 (SA)" />
					<AboutUsItem text="PG TECH" />
					<AboutUsItem text="AD TECH" />
					<AboutUsItem text="바이럴 (인플루언서 캠페인)" />
				</div>
			</div>
			<div className="flex flex-col pb-32">
				<span className="text-4xl text-purple-900 pb-2">퍼포먼스 마케팅의</span>
				<span className="text-4xl text-purple-900 pb-6">One Stop Service</span>
				<div className="flex flex-col text-xl">
					<span>
						퍼포먼스 마케팅을 수행하기 위한 일원화된 기능과 조직으로 광고주의 성과를
						극대화하기 위해 Integrated Performance Marketing Service를 One Stop으로
						제공합니다
					</span>
				</div>
			</div>
		</Layout>
	)
}
export default AboutUs
