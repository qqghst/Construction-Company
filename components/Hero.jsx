import React, { useRef, useContext, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<div
			id='hero'
			className='min-h-screen flex flex-col justify-center items-center bg-bgHero bg-no-repeat bg-cover bg-center sticky top-0 -z-10'
		>
			<div className='font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
				<Image
					src='/assets/logo.png'
					width={502 / 2}
					height={312 / 2}
					alt='logo'
				/>
				<div className='pt-[16px]'>
					<h1 className='text-[33.18px]'>Строительная компания</h1>
				</div>
			</div>
			<div className={`flex-grow-0 animate-bounce`}>
				<Image
					src='/assets/arrow-down.svg'
					width={160 / 2}
					height={160 / 2}
					alt='arrow down'
				/>
			</div>
		</div>
	)
}

export default Hero
