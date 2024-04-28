import HomeItem from '@/components/homeItem'

const IndexComponent = () => {
	return (
		<div className="w-full max-md:w-full flex flex-col justify-center items-center text-5xl pb-20">
			<div className="flex flex-col text-purple-900 max-md:w-full max-md:text-4xl w-full">
				<span>DIGITAL PERFORMANCE</span>
				<span className="w-1/4 flex justify-center">&</span>
				<span>ADTECH COMPANY</span>
			</div>
			<div className="mt-6 w-full max-md:w-full flex max-md:flex-col">
				<div className="flex max-md:w-full w-1/2 max-md:pb-10 pr-2 min-[768px]:pr-12 min-[768px]:items-center">
					<span className="text-2xl break-keep">
						클라이언트의 KPI를 달성하기 위해 애드테크 제휴 기반으로 마케팅을 제안하고
						서비스하는 퍼포먼스 운영 MKT 그룹입니다.
					</span>
				</div>
				<div className="w-1/2 max-md:w-full justify-center items-center flex text-lg max-md:text-sm">
					<ul className="flex flex-col w-full">
						<HomeItem text="㈜HSADTECH_ADRPMALL" splitItem="회사명" />
						<HomeItem text="광고업 및 중소기업" splitItem="업종및기업구분" />
						<HomeItem text="2023년 10월" splitItem="설립예정일" />
						<HomeItem text="5명" splitItem="직원수" />
						<HomeItem text="2,500만원" splitItem="자본금" />
						<HomeItem text="55억원 (2024년 예상매출)" splitItem="예상매출액" />
						<HomeItem
							text="서울특별시 성동구 상원1길 25 SOL빌딩 4층"
							splitItem="주소"
						/>
						<HomeItem text="02-462-2384" splitItem="연락처" />
						<HomeItem text="0504-001-2384" splitItem="팩스" />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default IndexComponent
