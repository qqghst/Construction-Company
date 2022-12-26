import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className={`flex-grow-0`}>
                <Image
                    src='/assets/logo.png'
                    width={702 / 2}
                    height={512 / 2}
                    alt='logo'
                />
            </div>
            <div className=' font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
                <h1 className='mb-[16px] text-[33.18px]'>Строительная компания</h1>
                <h2 className='text-[47.78px]'>&#171;ЛИГА&#187;</h2>
            </div>
            <div className={`flex-grow-0 animate-bounce pb-[32px]`}>
                <Image
                    src='/assets/icons/arrow-down.svg'
                    width={160 / 2}
                    height={160 / 2}
                    alt='arrow down'
                />
            </div>
        </div>
    )
}

export default Hero