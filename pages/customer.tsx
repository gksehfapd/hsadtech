import CustomerList from '@/components/customerList'
import Layout from '@/components/layout'

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
			<div>
				<CustomerList title="Finance" customer={financeCustomer}></CustomerList>
				<CustomerList title="통신" customer={mobileCustomer}></CustomerList>
				<CustomerList title="Game" customer={gameCustomer}></CustomerList>
				<CustomerList title="O2O" customer={o2oCustomer}></CustomerList>
				<CustomerList title="교육" customer={eduCustomer}></CustomerList>
				<CustomerList title="ETC." customer={etcCustomer}></CustomerList>
			</div>
		</Layout>
	)
}
