import Image from 'next/image'

interface CustomerListProps {
	title: string
	customer: string[]
}

const CustomerList = ({ title, customer }: CustomerListProps) => {
	return (
		<div className="flex items-center mb-12 max-md:flex-col max-md:items-start">
			<span className="flex items-center justify-center text-3xl text-purple-900 w-1/6 max-md:w-1/3 max-md:justify-start">
				{title}
			</span>
			<div className="flex w-5/6 justify-around items-center max-md:w-full max-md:grid max-md:grid-cols-3">
				{customer.map((e) => {
					return (
						<div
							className="w-1/5 items-center justify-center text-center flex px-3 h-20 max-md:w-full"
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
