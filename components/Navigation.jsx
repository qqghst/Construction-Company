import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
    return (
        <section>
            <div>
                <ul className="flex flex-row gap-8 py-[16px] px-[32px] bg-slate-400/75">
                    <li className="text-[#030E4A]">Главная</li> 
                    <li className="text-[#030E4A]">Услуги</li>
                    <li className="text-[#030E4A]">Проекты</li>
                    <li className="text-white">+7 937 461 0888</li>
                </ul>
            </div>
        </section>
    )
}

export default Navigation;