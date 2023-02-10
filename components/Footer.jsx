import React from "react";
import Image from "next/image";

const Footer = ({handleButtonNumberClick, isAlertVisible}) => {
    return (
        <section className="flex flex-row bg-[#F3F3F3]">
            <div className="gap-[32px] md:gap-0 container mx-auto flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left md:justify-between  my-[160px] text-[16px] md:text-[11.11px] lg:text-[16px]  px-8">
                <div className={`flex-grow-0 pb-[48px] md:pb-0`}>
                    <Image
                        src='/assets/logo.png'
                        width={ 300 / 2}
                        height={300 / 2}
                        alt='logo'
                    />
                </div>

                <div>
                    <h4 className="font-bold pb-[16px] text-[#030E4A]">О нас</h4>
                    <div className="flex flex-col gap-[8px] tracking-wide">
                        <p>ООО «ЛИГА»</p>
                        <p>ИНН 0816037527</p>
                        <p>ОГРН 1180816001442</p>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold pb-[16px] text-[#030E4A]">Контакты</h4>
                    <div className="flex flex-col gap-[8px] tracking-wide">
                        <p className="hover:text-[#030E4A]">+7 (937) 461-08-88</p>
                        <a className="hover:text-[#030E4A]" target="_blank" rel="noopener noreferrer" href="https://vk.com/ligaelista">https://vk.com/ligaelista</a>
                        <a className="hover:text-[#030E4A]" href="#"><p>ligaelista@mail.ru</p></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold pb-[16px] text-[#030E4A]">Адрес</h4>
                    <div className="flex flex-col gap-[8px] tracking-wide">
                        <p>Юридический адрес: <br/> Республика Калмыкия, <br />г. Элиста, ул. Им Ю.Нейман, д. 9А</p>
                        <p>Офис продаж: <br/> Республика Калмыкия, <br />г. Элиста, ул. Ю. Клыкова, д. 4, стр. 5</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer