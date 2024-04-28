interface AffliateSpanProps {
	children: React.ReactNode
}

const AffliateList = ({ children }: AffliateSpanProps) => {
	return (
		<li className="w-full">
			<span className="py-2 flex">
				<span className="mr-2 opacity-50">⊙</span> {children}
			</span>
		</li>
	)
}

export default AffliateList
