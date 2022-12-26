import React from 'react';
import Image from 'next/image';

const Services = () => {
    return (
        <section className='flex flex-col bg-white py-20'>
            <div className='container mx-auto px-11'>
                <p className='text-[33.18px] font-medium'>Строим и проектируем <strong>коттеджи</strong> и <strong>многоквартирные дома</strong> в городе Элиста с 2018-го года.</p>
            </div>
            <div className='container mx-auto px-11 mt-[64px]'>
                <h2 className='text-[39.81px] text-[#030E4A] font-bold pb-[24px]'>Наши услуги</h2>
                <div>
                    <ul className='text-[33.18px] font-medium'>
                        <li>&#183; Строительство многоквартирных жилых домов и таунхаусов.</li>
                        <li>&#183; Составление смет.</li>
                        <li>&#183; Подведение коммуникаций.</li>
                        <li>&#183; Внутренняя отделка.</li>
                        <li>&#183; Благоустройство территории.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services