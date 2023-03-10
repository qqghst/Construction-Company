import React from 'react';
import Image from 'next/image';
import { services } from '../constants'

const Services = () => {
    return (
        <section id='services' className='flex flex-col bg-white py-20'>
            <div className='container mx-auto px-8'>
                <p className='text-[16.00px] lg:text-[23.04px] font-medium text-center'>Строим и проектируем <strong>коттеджи</strong> и <strong>многоквартирные дома</strong> в городе Элиста с 2018-го года.</p>
            </div>
            <div className='container mx-auto mt-[64px] px-8'>
                <h2 className='text-[27.65px] lg:text-[33.18px] text-[#030E4A] font-bold pb-[70px] text-center'>Наши услуги</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center'>
                    {services.map((service, index) => 
                        <div key={service.id} >
                            <div className='bg-[#030E4A] w-[320px] h-[160px] rounded-lg flex justify-center items-center text-center'>
                                <p className='text-white text-center'>{service.title}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Services