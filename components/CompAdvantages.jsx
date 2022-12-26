import React from 'react';
import Image from 'next/image';

const CompAdvantages = () => {
    return (
        <section className='flex flex-col bg-white py-20'>
            <div className='container mx-auto px-11 mt-[64px]'>
                <h2 className='text-[39.81px] text-[#030E4A] font-bold text-center pb-[70px]'>Конкурентные преимущества</h2>
                <div>
                    <ul className='text-[33.18px] font-medium flex flex-col gap-[16px]'>
                        <li>&#183; Соблюдаем нормы строительства согласно регламенту СНиП 31-01-2003, 21-01-97, 12-03-2001, 12-04-200, 3.04.01-87, 3.01.03-85 и др., нормы производства строительно – монтажных работ СНиП 3.03.01-87, 3.04.01-87, 3.02.01-87, 3.04.03-85, III-4-80 и др.</li>
                        <li>&#183; Cертификат строительной компании СРО Ассоциация «Строители НВ» от 05.07.2019 г.</li>
                        <li>&#183; В компании работают строители и монтажники не ниже III разряда. Электрики не ниже IV квалификационной группы.</li>
                        <li>&#183; Гарантия на работы 5 лет, гарантия на установленное оборудование по гарантийному талону производителя от 1 года.</li>
                        <li>&#183; Мы используем строительные материалы, соответствующие нормам (ГОСТ 530-95, ГОСТ 379-95, ГОСТ 30244-94, ГОСТ 25898-83, ГОСТ 21718-84, ГОСТ 26819-86, ГОСТ 11583-74 от 1976-01-01 и др.)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CompAdvantages