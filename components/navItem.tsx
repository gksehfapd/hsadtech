import Link from 'next/link'
import { useState } from 'react'

interface NavItemProps {
	href?: string
	text: string
	hoverText: string
	[key: string]: any
}

const NavItem = ({ href, text, hoverText, onClick }: NavItemProps) => {
	const [isHover, setIsHover] = useState(false)

	return (
		<li
			onMouseOver={() => {
				setIsHover(true)
			}}
			onMouseLeave={() => {
				setIsHover(false)
			}}
			className="w-1/6 flex justify-center items-center whitespace-nowrap max-md:text-3xl max-md:w-3/4"
		>
			{href ? (
				<Link
					className="w-full h-full justify-center items-center flex py-1 max-md:bg-slate-200 max-md:my-4 max-md:p-4 max-md:rounded-xl"
					href={href}
				>
					<span className="">{isHover ? hoverText : text}</span>
				</Link>
			) : (
				<div
					onClick={onClick}
					className="w-full h-full justify-center items-center flex py-1 max-md:bg-slate-200 max-md:my-4 max-md:p-4 max-md:rounded-xl cursor-pointer"
				>
					{isHover ? hoverText : text}
				</div>
			)}
		</li>
	)
}

export default NavItem
