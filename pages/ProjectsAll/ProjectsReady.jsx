// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// import ProjectReadyItem from '../../components/ProjectReadyItem'

// const ProjectsReady = () => {
// 	return (
// 		<div className='container mx-auto mb-[160px]'>
// 			<h2 className='text-[33.18px] lg:text-[39.81px] text-[#030E4A] font-bold pb-[70px]'>
// 				Наши готовые проекты
// 			</h2>
// 			<div className='flex justify-between items-center gap-[32px]'>
// 				<div className=''>
// 					<ProjectReadyItem id='1' width={1000} height={500} />
// 				</div>
// 				<div className='text-[16px] text-black flex flex-col gap-[16px] mt-[32px] w-[700px]'>
// 					<p>
// 						Жилые дома по улице Хулхутинская, 4 представляет собой
// 						комплекс из 28 блокированных жилых домов с мансардным
// 						этажом. Благоустройство прилегающей территории включает
// 						в себя организацию детской площадки, подъездной дороги,
// 						прилегающей к домам, территории.
// 					</p>
// 					<p>
// 						Площадь таунхаусов варьируется от 56 до 130 кв. м. На
// 						прилегающей территории к каждому дому имеется
// 						парковочное место для автомобиля. К домам подведено
// 						электро - и водоснабжение, канализация. Система
// 						отопления – конвекторная. Нагрев воды осуществляется
// 						бойлером. Таунхаусы доступны для покупки в ипотеку или
// 						наличный расчет. Возможна частичная оплата материнским
// 						капиталом, субсидией, сертификатом.
// 					</p>
// 					<p>Объект введен в эксплуатацию.</p>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default ProjectsReady

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const ProjectsReady = () => {
	const slides = [
		{
			url: 'assets/projectsReady/liga_project_map.webp'
		},
		{
			url: 'assets/projectsReady/liga_project_project1.webp'
		},
		{
			url: 'assets/projectsReady/liga_project_project2.webp'
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
				Наши готовые проекты
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
				<div className='px-[32px] text-[16px] text-black flex flex-col gap-[16px] mt-[32px] xl:w-[700px]'>
					<p>
						Жилой дом по улице Братьев Алёхиных, 34 представляет
						собой 7-ми этажное 88-ми квартирное здание с мансардным
						этажом и коммерческими помещениями в цокольном этаже.
						Благоустройство прилегающей территории включает в себя
						организацию детской площадки, зоны отдыха и озеленение.
						В шаговой доступности находятся школа, продовольственные
						магазины, центральный рынок, театр,
						торгово-развлекательные центры, остановки общественного
						транспорта.
					</p>
					<p>Объект введен в эксплуатацию в 1 квартале 2022 года. </p>
				</div>
			</div>
		</div>
	)
}

export default ProjectsReady
