import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation2 = ({handleButtonNumberClick, isAlertVisible}) => {
	//бургер меню
	const [showMenu, setShowMenu] = useState(false)

	const closeMenu = () => {
		setShowMenu(false)
	}
	//бургер меню

	return (
		<nav className='flex flex-col justify-center items-end px-[32px] text-center fixed w-full pt-[32px]'>
			<div className='container mx-auto justify-center items-center text-center md:flex hidden'>
				<ul className='flex flex-row gap-[48px] text-[#030E4A] font-bold'>
					<li className=''>
						<Link href='/'>Главная</Link>
					</li>
					<li className=''>
						<Link href='#services' scroll={false}>Услуги</Link>
					</li>
					<li className=''>
						<Link href='#projectsReady' scroll={false}>Проекты</Link>
					</li>
					<li className=''>
						<a onClick={handleButtonNumberClick} className='cursor-pointer'>+7 (937) 461-08-88</a>
           				{/* {isAlertVisible && <div className='absolute top-[128px] left-0 right-0'><p className='inline-block z-1'>Номер скопирован!</p></div>} */}
						{isAlertVisible && <div className='absolute top-[128px] left-0 right-0 z-10'>Номер скопирован!</div>}
					</li>
				</ul>
			</div>

			<div className='md:hidden flex z-50'>
				<Image
					src={
						showMenu
							? '/assets/burgerMenu/Close.svg'
							: '/assets/burgerMenu/Menu.svg'
					}
					width={64 / 2}
					height={64 / 2}
					alt='burgerMenu'
					onClick={() => setShowMenu(prevState => !prevState)}
					className='object-contain z-[100] top-0 right-0'
				/>

				<div
					className={`${
						showMenu ? 'flex' : 'hidden'
					} bg-[#71bff3] absolute top-0 right-0  w-screen h-screen rounded-xl sidebar flex justify-center items-center z-50`}
				>
					<div className={`flex flex-col gap-[40px] z-50`}>
						<ul
							className={`flex flex-col justify-center text-center  gap-[40px] text-whiteOppacity text-[16.00px] font-bold `}
						>
							<li className=''>
								<Link onClick={closeMenu} href='/'>Главная</Link>
							</li>
							<li className=''>
								<Link onClick={closeMenu} href='#services'>Услуги</Link>
							</li>
							<li className=''>
								<Link onClick={closeMenu} href='#projectsReady'>Проекты</Link>
							</li>
							<li className=''>
								<button onClick={handleButtonNumberClick}>+7 (937) 461-08-88</button>
           						{/* {isAlertVisible && <div className='absolute top-[128px] left-0 right-0'><p className='inline-block z-1'>Номер скопирован!</p></div>} */}
								{isAlertVisible && 
								<div className='absolute top-[128px] left-0 right-0'>Номер скопирован!</div>}
					</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navigation2
