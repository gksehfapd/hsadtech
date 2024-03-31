import Link from 'next/link'
import { useState } from 'react'

interface NavItemProps {
	href: string
	text: string
	hoverText: string
}

const NavItem = ({ href, text, hoverText }: NavItemProps) => {
	const [isHover, setIsHover] = useState(false)

	return (
		<li
			onMouseOver={() => {
				setIsHover(true)
			}}
			onMouseLeave={() => {
				setIsHover(false)
			}}
			className="w-1/6 flex justify-center items-center whitespace-nowrap"
		>
			<Link className="w-full h-full justify-center items-center flex py-1" href={href}>
				<span className="">{isHover ? hoverText : text}</span>
			</Link>
		</li>
	)
}

export default NavItem
