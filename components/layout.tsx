import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavItem from './navItem'
import { cls } from '@/libs/utils'

interface LayoutProps {
	children: React.ReactNode
	className?: string
}

export default function Layout({ children, className = '' }: LayoutProps) {
	const [scroll, setScroll] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll) //clean up
		}
	}, [])

	const handleScroll = () => {
		window.scrollY <= 50 ? setScroll(false) : setScroll(true)
	}
	return (
		<div className="min-h-screen relative">
			<nav
				className={cls(
					'flex justify-center w-full items-center fixed top-0 text-base px-16 py-3 text-black box-border z-99 bg-white',
					scroll ? 'border-b-2' : ''
				)}
			>
				<div className="flex items-center w-1/2">
					<div>
						<Link href="/" className="p-3">
							로고
						</Link>
					</div>
				</div>

				<div className="flex items-center w-1/2">
					<ul className="flex w-full justify-between">
						<NavItem text="Home" hoverText="홈" href="/" />
						<NavItem text="About Us" hoverText="HS Comm" href="/aboutus" />
						<NavItem text="Affliate" hoverText="제휴" href="/affliate" />
						<NavItem text="Costomer" hoverText="고객사" href="/customer" />
						<NavItem text="Contact" hoverText="문의하기" href="/customer" />
					</ul>
				</div>
			</nav>
			<div className={cls('pt-14 min-h-screen pb-72', className)}>{children}</div>
			<footer className="bg-zinc-800 text-gray-500 flex flex-col w-full absolute bottom-0">
				<div className="flex p-6 justify-around">
					<div className="w-1/4">
						<ul>
							<li className="pr-2">상호명 : ㈜ 현승커뮤니케이션</li>
							<li className="">대표이사 : 김현주</li>
						</ul>
					</div>
					<div className="w-1/3">
						<div className="w-1/2">
							<h2>CONTACT US</h2>
							<hr className="opacity-50 mt-1" />
						</div>
						<div className="pt-4">
							<ul className="float-none">
								<li className="py-1">
									<span className="flex items-center">
										<span className="material-icons mr-2">near_me</span>
										서울특별시 성동구 상원1길 25 SOL빌딩 4층
									</span>
								</li>
								<li className="py-1">
									<span className="flex items-center">
										<span className="material-icons mr-2">phone</span>
										02-462-2384 | FAX : 0504-001-2384
									</span>
								</li>
								<li className="py-1">
									<span className="flex items-center">
										<span className="material-icons mr-2">mail</span>{' '}
										hsadtech@hsadtech.com
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="bg-zinc-900 px-6 py-3 flex justify-center items-center b-0">
					&copy; HSADTECH Co., Ltd. All rights reserved.
				</div>
			</footer>
		</div>
	)
}
