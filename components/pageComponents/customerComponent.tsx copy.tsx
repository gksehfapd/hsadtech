import CustomerList from '@/components/customerList'
import Layout from '@/components/layout'
import { BsGraphUpArrow } from 'react-icons/bs'
import { TbDatabaseShare } from 'react-icons/tb'

const financeCustomer = ['samsungfire', 'meritzfire', 'wooricard', 'bithumb', 'shinhanlife']
const mobileCustomer = ['lg', 'kt', '', '', '']
const gameCustomer = ['nexon', 'ncsoft', 'kakaogames', 'netmarble', 'com2us']
const o2oCustomer = ['kurly', 'socar', 'gc', 'trip', 'tada']
const eduCustomer = ['hackers', 'tutoring', 'pagoda', 'ybm', 'jaseng']
const etcCustomer = ['audi', 'nike', 'adidas', 'duo', 'lotte']

const CustomerComponent = () => {
	return (
		<div>
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
			<div className="flex flex-col pb-8 text-purple-900 break-keep max-md:pb-96">
				<span className="text-5xl pb-16">제휴마케팅을 통한 BIG 광고주 목표 달성 성과</span>
				<div className="flex text-xl h-72 max-md:flex-col">
					<div className="w-1/2 p-2 justify-between flex flex-col items-center max-md:w-full max-md:pb-12">
						<span>보험 DB 게더링 캠페인 상반기 목표 실적 106% 달성!</span>
						<div className="flex w-full justify-center text-black max-md:py-8">
							<BsGraphUpArrow className="text-9xl" />
						</div>
						<span>상반기 약 80만명 보험료 조회</span>
					</div>
					<div className="w-1/2 p-2 justify-between flex flex-col items-center max-md:w-full max-md:py-8">
						<span>통신사 DB 수집 & 개통 목표 달성!</span>
						<div className="flex w-full justify-center text-black max-md:py-8">
							<TbDatabaseShare className="text-9xl" />
						</div>
						<span>일 개통신청 DB 30건 / 월 600건</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CustomerComponent
