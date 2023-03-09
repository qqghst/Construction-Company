import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const ProjectsOnGoing = () => {
	const slides = [
		{
			url: 'assets/projectsOnGoing/liga_project_1.webp'
		},
		{
			url: 'assets/projectsOnGoing/liga_project_2.webp'
		},
		{
			url: 'assets/projectsOnGoing/liga_project_map.webp'
		},
		{
			url: 'assets/projectsOnGoing/liga_project_project.webp'
		}
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	return (
		<div className='container mx-auto mb-[160px]'>
			<h2 className='text-[33.18px] lg:text-[39.81px] text-[#030E4A] font-bold '>
				Наши действующие проекты
			</h2>
			<div className='flex flex-col xl:flex-row justify-between items-center gap-[32px]'>
				<div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
					<div
						style={{
							backgroundImage: `url(/${slides[currentIndex].url})`
						}}
						className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
					></div>
					<div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
						<BsChevronCompactLeft onClick={prevSlide} size={32} />
					</div>
					<div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
						<BsChevronCompactRight onClick={nextSlide} size={32} />
					</div>
				</div>
				<div className='text-[16px] text-black flex flex-col gap-[16px] xl:w-[700px] px-[32px]'>
					<p>
						Жилые дома по улице Хулхутинская, 4 представляет собой
						комплекс из 28 блокированных жилых домов с мансардным
						этажом. Благоустройство прилегающей территории включает
						в себя организацию детской площадки, подъездной дороги,
						прилегающей к домам, территории.
					</p>
					<p>
						Площадь таунхаусов варьируется от 56 до 130 кв. м. На
						прилегающей территории к каждому дому имеется
						парковочное место для автомобиля. К домам подведено
						электро - и водоснабжение, канализация. Система
						отопления – конвекторная. Нагрев воды осуществляется
						бойлером. Таунхаусы доступны для покупки в ипотеку или
						наличный расчет. Возможна частичная оплата материнским
						капиталом, субсидией, сертификатом.
					</p>
					<p>Объект введен в эксплуатацию.</p>
				</div>
			</div>
		</div>
	)
}

export default ProjectsOnGoing
