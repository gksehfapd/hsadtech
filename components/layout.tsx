import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavItem from './navItem'
import { cls } from '@/libs/utils'
import Image from 'next/image'
import { CiMenuBurger } from 'react-icons/ci'

interface LayoutProps {
	children: React.ReactNode
	className?: string
}

export default function Layout({ children, className = '' }: LayoutProps) {
	const [scroll, setScroll] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleScroll = () => {
		window.scrollY <= 50 ? setScroll(false) : setScroll(true)
	}
	return (
		<div className="min-h-screen relative">
			<nav
				className={cls(
					'flex w-full justify-between items-center fixed top-0 text-base px-16 max-md:px-10 py-2 max-md:h-16 text-black box-border z-50 bg-white',
					scroll ? 'border-b-2 shadow-lg' : ''
				)}
			>
				<div className="flex items-center px-2">
					<div>
						<Link href="/" className="px-3">
							<Image src="/hsadtech_icon.png" width={30} height={30} alt="icon" />
						</Link>
					</div>
				</div>

				<div className="flex items-center relative min-[768px]:w-1/2">
					<ul className="flex w-full justify-between max-md:hidden">
						<NavItem text="Home" hoverText="홈" href="/" />
						<NavItem text="About Us" hoverText="HS Comm" href="/aboutus" />
						<NavItem text="Affliate" hoverText="제휴" href="/affliate" />
						<NavItem text="Costomer" hoverText="고객사" href="/customer" />
						<NavItem text="Contact" hoverText="문의하기" href="/contactus" />
					</ul>
					<div className="min-[768px]:hidden w-full flex justify-between">
						<div className="flex justify-between">
							<div
								className="h-14 cursor-pointer flex items-center justify-center"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								<CiMenuBurger className="text-xl" />
							</div>
						</div>
						{isMenuOpen ? (
							<div>
								<ul className="flex flex-col w-full h-full bg-white fixed top-16 right-0 items-center border-b-2">
									<NavItem text="Home" hoverText="홈" href="/" />
									<NavItem text="About Us" hoverText="HS Comm" href="/aboutus" />
									<NavItem text="Affliate" hoverText="제휴" href="/affliate" />
									<NavItem text="Costomer" hoverText="고객사" href="/customer" />
									<NavItem
										text="Contact"
										hoverText="문의하기"
										href="/contactus"
									/>
								</ul>
							</div>
						) : null}
					</div>
				</div>
			</nav>
			<div className={cls('pt-20 min-h-screen pb-72 max-md:pb-96')}>
				<div className={cls(className, 'p-8')}>{children}</div>
			</div>

			<footer className="bg-zinc-800 text-gray-500 flex flex-col w-full absolute bottom-0">
				<div className="flex p-6 justify-around max-md:flex-col">
					<div className="w-1/4 max-md:w-full max-md:pb-8">
						<ul>
							<li className="pr-2">상호명 : ㈜ 현승커뮤니케이션</li>
							<li className="">대표이사 : 김현주</li>
						</ul>
					</div>
					<div className="w-1/3 max-md:w-full">
						<div className="w-1/2">
							<h2>
								<b>CONTACT US</b>
							</h2>
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
