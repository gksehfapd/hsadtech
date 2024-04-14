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
			className="w-1/6 flex justify-center items-center whitespace-nowrap max-md:text-base max-md:w-full max-md:my-1 pl-5"
		>
			{href ? (
				<Link
					className="w-full h-full justify-center items-center flex py-1 max-md:p-2 max-md:rounded-xl max-md:justify-start"
					href={href}
				>
					<span className="">{isHover ? hoverText : text}</span>
				</Link>
			) : (
				<div
					onClick={onClick}
					className="w-full h-full justify-center items-center flex py-1 max-md:p-2 max-md:rounded-xl max-md:justify-start"
				>
					{isHover ? hoverText : text}
				</div>
			)}
		</li>
	)
}

export default NavItem
