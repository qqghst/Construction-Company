import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation2 from "./Navigation2";
// import {ScrollContext} from '../utils/scroll-observer.jsx';

const Hero = () => {
    // const refContainer = useRef(null)
    // const {scrollY} = useContext(ScrollContext)

    // let progress = 0

    // const { current: elContainer } = refContainer
    // if ( elContainer ) {
    //     progress = Math.min(1, scrollY / elContainer.clientHeight)
    // }

    return (
        // <div ref={refContainer} style={{transform: `translateY(-${progress * 20}vh)`}} id='hero' className='min-h-screen flex flex-col justify-center items-center bg-bgHero bg-no-repeat bg-cover bg-center sticky top-0 -z-10'>
        //     <div className=' font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
        <div
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center bg-bgHero bg-no-repeat bg-cover bg-center sticky top-0 -z-10"
        >
            <div className=" font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
                {/* <Navigation2 /> */}
                <Image
                    src="/assets/logo.png"
                    width={502 / 2}
                    height={312 / 2}
                    alt="logo"
                />
                <div className="pt-[16px]">
                    <h1 className="text-[33.18px]">Строительная компания</h1>
                    {/* <h2 className='text-[47.78px]'>&#171;ЛИГА&#187;</h2> */}
                </div>
            </div>
            <div className={`flex-grow-0 animate-bounce`}>
                <Image
                    src="/assets/arrow-down.svg"
                    width={160 / 2}
                    height={160 / 2}
                    alt="arrow down"
                />
            </div>
        </div>
    );
};

export default Hero;
