// import React, { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import Button from '../components/UI/Button'

// import ProjectReadyItem from '../components/ProjectReadyItem'
// import ProjectOnGoingItem from '../components/ProjectOnGoingItem'

// const ProjectsAll = () => {
// 	const [currentSlide, setCurrentSlide] = useState(0)

// 	const settings = {
// 		dots: false,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		afterChange: index => setCurrentSlide(index),
// 		prevArrow: (
// 			<button className='slick-arrow slick-prev'>
// 				<span className='arrow-icon'>&lt;</span>
// 			</button>
// 		),
// 		nextArrow: (
// 			<button className='slick-arrow slick-next'>
// 				<span className='arrow-icon'>&gt;</span>
// 			</button>
// 		)
// 	}

// 	const onGoingProjects = [
// 		{ id: 1 },
// 		{ id: 2 },
// 		{ id: 'project' },
// 		{ id: 'map' }
// 	]

// 	return (
// 		<section className='bg-white pt-[32px] px-8'>
// 			<div className='container mx-auto mb-[160px]'>
// 				<div className='flex flex-col'>
// 					<div className='pb-[70px]'>
// 						<Link href='/'>
// 							<Button>На главную ←</Button>
// 						</Link>
// 					</div>
// 					<div className=''>
// 						<h2 className='text-[33.18px] lg:text-[39.81px] text-[#030E4A] font-bold pb-[70px]'>
// 							Наши готовые проекты
// 						</h2>
// 					</div>
// 				</div>
// 				<div className=''>
// 					<Slider {...settings}>
// 						{onGoingProjects.map((project, index) => (
// 							<div key={index}>
// 								<ProjectOnGoingItem
// 									id={project.id}
// 									width={2000 / 2}
// 									height={100 / 2}
// 								/>
// 							</div>
// 						))}
// 					</Slider>
// 					<div className='text-[16px] text-black flex flex-col gap-[16px] mt-[32px]'>
// 						<p>
// 							Жилые дома по улице Хулхутинская, 4 представляет
// 							собой комплекс из 28 блокированных жилых домов с
// 							мансардным этажом. Благоустройство прилегающей
// 							территории включает в себя организацию детской
// 							площадки, подъездной дороги, прилегающей к домам,
// 							территории.
// 						</p>
// 						<p>
// 							Площадь таунхаусов варьируется от 56 до 130 кв. м.
// 							На прилегающей территории к каждому дому имеется
// 							парковочное место для автомобиля. К домам подведено
// 							электро - и водоснабжение, канализация. Система
// 							отопления – конвекторная. Нагрев воды осуществляется
// 							бойлером. Таунхаусы доступны для покупки в ипотеку
// 							или наличный расчет. Возможна частичная оплата
// 							материнским капиталом, субсидией, сертификатом.
// 						</p>
// 						<p>Объект введен в эксплуатацию.</p>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// export default ProjectsAll

import React from 'react'
import Link from 'next/link'

import Button from '../../components/UI/Button'

import ProjectsOnGoing from './ProjectsOnGoing'
import ProjectsReady from './ProjectsReady'

const ProjectsAll = () => {
	return (
		<section className='bg-white pt-[32px] px-8'>
			<div className=''>
				<div className='pb-[70px] pl-[40px]'>
					<Link href='/'>
						<Button>На главную ←</Button>
					</Link>
				</div>
				<ProjectsOnGoing />
				<ProjectsReady />
			</div>
		</section>
	)
}

export default ProjectsAll
