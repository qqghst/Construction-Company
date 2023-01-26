import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './Menu.svg'
import Close from './Close.svg'
import SvgComponent from './svg2'

const Navigation2 = () => {
	const [showMenu, setShowMenu] = useState(false)

	const closeMenu = () => {
		setShowMenu(false)
	}

    const copyNumber = () => {
        navigator.clipboard.writeText('+7 (937) 461-08-88')
    }

    const alertWhenCopyNumber = () => {
        alert('Номер скопирован!')
    }

    const lol = (one, two) => {
        alertWhenCopyNumber()
        copyNumber()
    }

	return (
		<nav className='flex flex-col justify-center items-center text-center fixed w-full pt-[32px]'>
			<div className='container mx-auto justify-center items-center text-center md:flex hidden'>
				<ul className='flex flex-row gap-[48px] text-[#030E4A] font-bold'>
					<li className='hover:text-white'>
						<Link href='/'>Главная</Link>
					</li>
					<li className='hover:text-white'>
						<Link href='#services'>Услуги</Link>
					</li>
					<li className='hover:text-white'>
						<Link href='#projectsReady'>Проекты</Link>
					</li>
					<li className='hover:text-white'>
						<button onClick={lol} href=''>+7 (937) 461-08-88</button>
					</li>
				</ul>
			</div>

			<div className='md:hidden flex z-50'>
				<Image
					src={showMenu ? '/assets/Close.svg' : '/assets/Menu.svg'}
					// src={showMenu ? <Menu /> : <Close />}
					width={64 / 2}
					height={64 / 2}
					// color='white'
					alt='burgerMenu'
					onClick={() => setShowMenu(prevState => !prevState)}
                    className='object-contain z-[100] top-0 right-0'
				/>

				<div
					className={`${
						showMenu ? 'flex' : 'hidden'
					} bg-white absolute top-0 right-0  w-screen h-screen rounded-xl sidebar flex justify-center items-center z-50`}
				>
					<div className={`flex flex-col gap-[40px] z-50`}>
						<ul
							className={`flex flex-col justify-center text-center  gap-[32px] text-whiteOppacity text-[16.00px]  tracking-[4px]`}
						>
							<li className=''>
								<a href=''>asa</a>
							</li>
							<li className=''>
								<a href=''>sasasa</a>
							</li>
							<li className=''>
								<a href=''>123</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navigation2
