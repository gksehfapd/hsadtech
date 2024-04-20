import Image from 'next/image'

interface CustomerListProps {
	title: string
	customer: string[]
}

const CustomerList = ({ title, customer }: CustomerListProps) => {
	return (
		<div className="flex items-center mb-12">
			<span className="flex items-center justify-center text-3xl text-purple-900 w-1/6">
				{title}
			</span>
			<div className="flex w-5/6 justify-around items-center">
				{customer.map((e) => {
					return (
						<div
							className="w-1/6 items-center justify-center text-center flex px-3 h-20"
							key={e}
						>
							{e === '' ? null : (
								<Image
									src={'/icons/' + String(e) + '.png'}
									alt={e}
									width={100}
									height={52}
								/>
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default CustomerList
