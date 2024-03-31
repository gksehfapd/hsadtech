interface HomeItemProps {
	children: React.ReactNode
	text: string
}

const HomeItem = ({ text, children: splitItem }: HomeItemProps) => {
	return (
		<li className="flex w-full justify-around">
			<span className="w-1/3 flex justify-between">{splitItem}</span>{' '}
			<span className="mx-4">|</span>
			<span className="w-2/3 break-keep">{text}</span>
		</li>
	)
}

export default HomeItem
