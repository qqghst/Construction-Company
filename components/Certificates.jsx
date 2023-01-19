import React from "react";
import Image from "next/image";
import Link from "next/link";
import CertificateItem from "./CertificateItem";

const Certificate = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-16 mb-[160px]">
                <h2 className='text-[27.65px] lg:text-[33.18px] text-[#030E4A] font-bold pb-[70px]'>Наши сертификаты</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <CertificateItem id='1'/>
                    <CertificateItem id='1'/>
                    <CertificateItem id='1'/>
                    <CertificateItem id='1'/>
                </div>
            </div>
        </section>
    )
}

export default Certificate