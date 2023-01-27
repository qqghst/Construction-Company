import React from 'react';
import Image from 'next/image';

const Icons = () => {
    return (
        <section className='flex flex-col bg-[#F3F3F3]'>
            <div className='flex flex-col container mx-auto my-[160px] gap-[48px]'>
                <div className='flex flex-row gap-[48px]'>
                    <div className={`flex-grow-0`}>
                        <Image
                            src='/assets/icons/team.png'
                            alt='team'
                            width={418 / 2}
                            height={418 / 2}
                        />
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <h3 className='text-[#030E4A] text-[27.65px] lg:text-[33.18px] font-bold'>Команда</h3>
                        <p className='text-[#020202] text-[16px] lg:text-[23.04px] leading-[160%]'>Мы - команда профессионалов, объединенных одной целью. Каждый сотрудник важен и влияет на общий результат. Мы уважаем, доверяем и поддерживаем друг друга. Сила нашей команды в Единстве!</p>
                    </div>
                </div>

                <div className='flex flex-row gap-[48px]'>
                    <div className={`flex-grow-0`}>
                        <Image
                            src='/assets/icons/responsibility.png'
                            alt='team'
                            width={295 / 2}
                            height={295 / 2}
                        />
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <h3 className='text-[#030E4A] text-[27.65px] lg:text-[33.18px] font-bold'>Ответственность</h3>
                        <p className='text-[#020202] text-[16px] lg:text-[23.04px] leading-[160%]'>Мы объединены единой целью и несём ответственность за то, что мы создаем. Ответственное отношение сотрудников - залог успеха компании!</p>
                    </div>
                </div>

                <div className='flex flex-row gap-[48px]'>
                    <div className={`flex-grow-0`}>
                        <Image
                            src='/assets/icons/quality.png'
                            alt='team'
                            width={384 / 2}
                            height={384 / 2}
                        />
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <h3 className='text-[#030E4A] text-[27.65px] lg:text-[33.18px] font-bold'>Качество</h3>
                        <p className='text-[#020202] text-[16px] lg:text-[23.04px] leading-[160%]'>Профессионализм и компетентность нашей команды, ответственное и добросовестное отношение к обязанностям позволяют нам создавать качественный продукт, которым мы гордимся!</p>
                    </div>
                </div>

                <div className='flex flex-row gap-[48px]'>
                    <div className={`flex-grow-0`}>
                        <Image
                            src='/assets/icons/progress.png'
                            alt='team'
                            width={340 / 2}
                            height={340 / 2}
                        />
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <h3 className='text-[#030E4A] text-[27.65px] lg:text-[33.18px] font-bold'>Развитие</h3>
                        <p className='text-[#020202] text-[16px] lg:text-[23.04px] leading-[160%]'>Мы растем и развиваемся, внедряем новые технологии и делаем жизнь наших клиентов комфортной. Мы смело принимаем вызов и достигаем высоких результатов!</p>
                    </div>
                </div>
                <div className='flex flex-row gap-[48px]'>
                    <div className={`flex-grow-0`}>
                        <Image
                            src='/assets/icons/reliability.png'
                            alt='team'
                            width={291 / 2}
                            height={291 / 2}
                        />
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <h3 className='text-[#030E4A] text-[27.65px] lg:text-[33.18px] font-bold'>Надежность</h3>
                        <p className='text-[#020202] text-[16px] lg:text-[23.04px] leading-[160%]'>Верность взятым на себя обязательствам. Честность и порядочность в отношении с партнерами и клиентами. Уверенность в завтрашнем дне!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Icons