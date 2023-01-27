import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <section className="flex flex-row bg-[#F3F3F3]">
            <div className="flex flex-row justify-between container mx-auto my-[160px] text-[12px] md:text-[16px]">
                <div className={`flex-grow-0`}>
                    <Image
                        src='/assets/logo.png'
                        width={ 320 / 2}
                        height={320 / 2}
                        alt='logo'
                    />
                </div>

                <div>
                    <h4 className="font-bold pb-[40px] text-[#030E4A]">О нас</h4>
                    <div className="flex flex-col gap-[16px] tracking-wide">
                        <p>ООО «ЛИГА»</p>
                        <p>ИНН 0816037527</p>
                        <p>ОГРН 1180816001442</p>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold pb-[40px] text-[#030E4A]">Контакты</h4>
                    <div className="flex flex-col gap-[16px] tracking-wide">
                        <p>+79374610888</p>
                        <a className="hover:text-[#030E4A]" target="_blank" rel="noopener noreferrer" href="https://vk.com/ligaelista">https://vk.com/ligaelista</a>
                        <a className="hover:text-[#030E4A]" href="#"><p>Ligaelista@mail.ru</p></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold pb-[40px] text-[#030E4A]">Адрес</h4>
                    <div className="flex flex-col gap-[16px] tracking-wide">
                        <p>Юридический адрес: <br/> Республика Калмыкия, <br />г. Элиста, ул. Им Ю.Нейман, д. 9А</p>
                        <p>Офис продаж: <br/> Республика Калмыкия, <br />г. Элиста, ул. Ю. Клыкова, д. 4, стр. 5</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer