import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ProjectReadyItem from '../../components/ProjectReadyItem'

const ProjectsReady = () => {
	return (
		<div className='container mx-auto mb-[160px]'>
			<h2 className='text-[33.18px] lg:text-[39.81px] text-[#030E4A] font-bold pb-[70px]'>
				Наши готовые проекты
			</h2>
			<div className='flex justify-between items-center gap-[32px]'>
				<div className=''>
					<ProjectReadyItem id='1' width={1000} height={500} />
				</div>
				<div className='text-[16px] text-black flex flex-col gap-[16px] mt-[32px] w-[700px]'>
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

export default ProjectsReady
