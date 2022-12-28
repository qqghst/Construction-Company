import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <section className="flex flex-row  bg-[#F3F3F3]">
            <div className="flex flex-row justify-between container mx-auto px-11 my-[160px]">
                <div className={`flex-grow-0`}>
                    <Image
                        src='/assets/logo.png'
                        width={160 / 2}
                        height={120 / 2}
                        alt='logo'
                    />
                </div>

                <div>
                    <h4 className="font-bold pb-[40px] text-[#030E4A]">КОНТАКТЫ</h4>
                    <div className="flex flex-col gap-[16px] tracking-wide">
                        <p>+79374610888</p>
                        <a className="hover:text-[#030E4A]" target="_blank" rel="noopener noreferrer" href="https://vk.com/ligaelista">HTTPS://VK.COM/LIGAELISTA</a>
                        <a className="hover:text-[#030E4A]" href="#"><p>LIGAELISTA@MAIL.RU</p></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold pb-[40px] text-[#030E4A]">НАВИГАЦИЯ</h4>
                    <div className="flex flex-col gap-[16px] tracking-wide">
                        <a className="hover:text-[#030E4A]" href="#hero">ГЛАВНАЯ</a>
                        <a className="hover:text-[#030E4A]" href="#services">УСЛУГИ</a>
                        <a className="hover:text-[#030E4A]" href="#projects">ПРОЕКТЫ</a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold pb-[40px] text-[#030E4A]">АДРЕС</h4>
                    <div className="tracking-wide">
                        <p>УЛ. КЛЫКОВА 4, СТР. 5</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer