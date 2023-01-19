import React from 'react';
import Image from 'next/image';

const Services = () => {
    return (
        <section id='services' className='flex flex-col bg-white py-20'>
            {/* <div className='container mx-auto px-16 '>
                <p className='text-[16.00px] lg:text-[23.04px] font-medium text-center'>Строим и проектируем <strong>коттеджи</strong> и <strong>многоквартирные дома</strong> в городе Элиста с 2018-го года.</p>
            </div> */}
            <div className='container mx-auto px-16 mt-[64px]'>
                {/* <h2 className='text-[27.65px] lg:text-[33.18px] text-[#030E4A] font-bold pb-[70px]'>Наши услуги</h2> */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className='bg-[#030E4A] w-[320px] h-[160px] rounded-lg'>
                            <p className='text-white text-center'>Строительство многоквартирных жилых домов и таунхаусов</p>
                        </div>

                        <div className='bg-[#030E4A] w-[320px] h-[160px] flex justify-center items-center rounded-lg'>
                            <p className='text-white text-center'>Составление смет</p>
                        </div>

                        <div className='bg-[#030E4A] w-[320px] h-[160px] flex justify-center items-center rounded-lg'>
                            <p className='text-white text-center'>Подведение коммуникаций</p>
                        </div>

                        <div className='bg-[#030E4A] w-[320px] h-[160px] flex justify-center items-center rounded-lg'>
                            <p className='text-white text-center'>Внутренняя отделка</p>
                        </div>

                        <div className='bg-[#030E4A] w-[320px] h-[160px] flex justify-center items-center rounded-lg'>
                            <p className='text-white text-center'>Благоустройство территории</p>
                        </div>

                        <div className='bg-[#030E4A] w-[320px] h-[160px] flex justify-center items-center rounded-lg'>
                            <p className='text-white text-center'>Благоустройство территории</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Services