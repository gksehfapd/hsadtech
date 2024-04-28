interface AboutUsItemProps {
	text: string
}

const AboutUsItem = ({ text }: AboutUsItemProps) => {
	return (
		<span className="w-24 h-24 text-sm border-gray-500 border-4 flex justify-center items-center rounded-full break-keep">
			{text}
		</span>
	)
}

export default AboutUsItem
