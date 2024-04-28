import { cls } from '@/libs/utils'

interface AboutUsServiceProps {
	text: string
	title: string
	children: React.ReactNode
	fontSize?: 'text-3xl' | 'text-4xl' | 'text-5xl'
}

const AboutUsService = ({ text, title, children, fontSize = 'text-5xl' }: AboutUsServiceProps) => {
	return (
		<div className="flex flex-col items-center justify-around border-4 p-8 max-md:p-4 break-keep">
			<span className={cls('', fontSize)}>{children}</span>
			<span className="my-4 max-md:my-6">
				<b>{title}</b>
			</span>
			<span className="text-base">{text}</span>
		</div>
	)
}

export default AboutUsService
