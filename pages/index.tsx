import HomeItem from '@/components/homeItem'
import Layout from '@/components/layout'

export default function Home() {
	return (
		<div>
			<Layout className="flex justify-around">
				<div className="w-1/3 p-6 flex flex-col justify-center items-center text-5xl">
					<div className="flex flex-col text-purple-900 w-2/3">
						<span>DIGITAL</span>
						<span>PERFORMANCE</span>
						<span className="w-1/4 flex justify-center">&</span>
						<span>ADTECH COMPANY</span>
					</div>
					<div className="mt-6 w-4/5 p-6">
						<span className="text-2xl break-keep">
							클라이언트의 KPI를 달성하기 위해 애드테크 제휴 기반으로 마케팅을
							제안하고 서비스하는 퍼포먼스 운영 MKT 그룹입니다.
						</span>
					</div>
				</div>
				<div className="w-1/2 p-6 justify-center items-center flex text-lg">
					<ul className="flex flex-col w-full">
						<HomeItem text="㈜HSADTECH_ADRPMALL">
							<span>회</span>
							<span>사</span>
							<span>명</span>
						</HomeItem>
						<HomeItem text="광고업 및 중소기업">
							<span>업</span>
							<span>종</span>
							<span>및</span>
							<span>기</span>
							<span>업</span>
							<span>구</span>
							<span>분</span>
						</HomeItem>
						<HomeItem text="2023년 10월">
							<span>설</span>
							<span>립</span>
							<span>예</span>
							<span>정</span>
							<span>일</span>
						</HomeItem>
						<HomeItem text="5명">
							<span>직</span>
							<span>원</span>
							<span>수</span>
						</HomeItem>
						<HomeItem text="2,500만원">
							<span>자</span>
							<span>본</span>
							<span>금</span>
						</HomeItem>
						<HomeItem text="55억원 (2024년 예상매출)">
							<span>예</span>
							<span>상</span>
							<span>매</span>
							<span>출</span>
							<span>액</span>
						</HomeItem>
						<HomeItem text="서울특별시 성동구 상원1길 25 SOL빌딩 4층">
							<span>주</span>
							<span>소</span>
						</HomeItem>
						<HomeItem text="02-462-2384">
							<span>연</span>
							<span>락</span>
							<span>처</span>
						</HomeItem>
						<HomeItem text="0504-001-2384">
							<span>팩</span>
							<span>스</span>
						</HomeItem>
					</ul>
				</div>
			</Layout>
		</div>
	)
}
