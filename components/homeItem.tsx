interface HomeItemProps {
	splitItem: string
	text: string
}

const HomeItem = ({ text, splitItem }: HomeItemProps) => {
	const splitItemArray = splitItem.split('')

	return (
		<li className="flex w-full justify-around py-2">
			<span className="w-1/3 flex justify-between">
				{splitItemArray.map((e) => {
					return <span key={e}>{e}</span>
				})}
			</span>{' '}
			<span className="mx-4">|</span>
			<span className="w-2/3 break-keep">{text}</span>
		</li>
	)
}

export default HomeItem
