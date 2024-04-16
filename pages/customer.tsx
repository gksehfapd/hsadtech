import CustomerList from '@/components/customerList'
import Layout from '@/components/layout'
import { BsGraphUpArrow } from 'react-icons/bs'
import { TbDatabaseShare } from 'react-icons/tb'

const financeCustomer = ['삼성화재', '메리츠화재', '우리카드', '빗썸', '신한생명']
const mobileCustomer = ['LG U+', 'KT', '', '', '']
const gameCustomer = ['NEXON', 'NC SOFT', 'kakao games', 'netmarble', 'com2us']
const o2oCustomer = ['markey Kurly', 'SOCAR', '여기어때', 'Trip.', '타다']
const eduCustomer = ['해커스어학원', '튜터링', 'PAGODA', 'YBM어학원', '자생한방병원']
const etcCustomer = ['Audi', 'NIKE', 'adidas', '듀오', '롯데제과']

export default function Customer() {
	return (
		<Layout>
			<div className="flex flex-col pb-8">
				<span className="text-5xl text-purple-900 pb-6">Client</span>
				<div className="flex flex-col text-xl">
					<span>성장의 원동력이자, 핵심 경쟁력은 우리의 클라이언트 입니다.</span>
					<span>
						플랫폼, 금융, 쇼핑, 게임, 테크앱 등 다양한 영역의 TOP 광고주들과 시작을
						함께하고 있습니다.
					</span>
				</div>
			</div>
			<div className="pb-12">
				<CustomerList title="Finance" customer={financeCustomer}></CustomerList>
				<CustomerList title="통신" customer={mobileCustomer}></CustomerList>
				<CustomerList title="Game" customer={gameCustomer}></CustomerList>
				<CustomerList title="O2O" customer={o2oCustomer}></CustomerList>
				<CustomerList title="교육" customer={eduCustomer}></CustomerList>
				<CustomerList title="ETC." customer={etcCustomer}></CustomerList>
			</div>
			<div className="flex flex-col pb-8 text-purple-900 break-keep">
				<span className="text-5xl pb-10">제휴마케팅을 통한 BIG 광고주 목표 달성 성과</span>
				<div className="flex text-xl h-72">
					<div className="w-1/2 p-2 justify-between flex flex-col items-center">
						<span>보험 DB 게더링 캠페인 상반기 목표 실적 106% 달성!</span>
						<div className="flex w-full justify-center text-black">
							<BsGraphUpArrow className="text-9xl" />
						</div>
						<span>상반기 약 80만명 보험료 조회</span>
					</div>
					<div className="w-1/2 p-2 justify-between flex flex-col items-center">
						<span>통신사 DB 수집 & 개통 목표 달성!</span>
						<div className="flex w-full justify-center text-black">
							<TbDatabaseShare className="text-9xl" />
						</div>
						<span>일 개통신청 DB 30건 / 월 600건</span>
					</div>
				</div>
			</div>
		</Layout>
	)
}
