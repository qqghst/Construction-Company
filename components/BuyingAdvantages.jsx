import React from "react";
import Image from "next/image";

const BuyingAdvantages = () => {
    return (
        <section className='flex flex-col bg-white py-20'>
            <div className='container mx-auto px-11 mt-[64px]'>
                <h2 className='mx-auto text-[27.65px] lg:text-[33.18px] text-[#030E4A] font-bold text-center pb-[70px] max-w-[700px]'>Преимущества покупки квартиры от строительной компании «ЛИГА»</h2>
                <div>
                    <ul className='text-[16.00px] lg:text-[23.04px] font-medium flex flex-col gap-[32px] leading-[150%]'>
                        <li><span className="text-[#030E4A] font-bold">Функциональные планировки &ndash;</span><br />жилое пространство можно задействовать по максимуму. Никаких неудобств и неэффективных квадратных метров.</li>
                        <li><span className="text-[#030E4A] font-bold">Сдаем вовремя &ndash;</span><br />ключи от своей новой квартиры вы получите точно в срок. Нередко сдача дома происходит раньше заявленной даты – будьте готовы к приятному сюрпризу!</li>
                        <li><span className="text-[#030E4A] font-bold">Инфраструктура &ndash;</span><br />индивидуально для каждого проекта мы продумываем благоустройство, предусматривающее интересные игровые комплексы, спортивные площадки и зоны отдыха.</li>
                        <li><span className="text-[#030E4A] font-bold">Комфортное проведение сделки &ndash;</span><br />наши специалисты помогут подобрать жилье, соответствующее вашим требованиям, и помогут правильно и безопасно осуществить покупку квартиры. Для вашего удобства с компанией работают ипотечные брокеры, которые обеспечат вам удобные условия получения кредита.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default BuyingAdvantages;