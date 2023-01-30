import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectReadyItem from "../components/ProjectReadyItem";
import ProjectOnGoingItem from "../components/ProjectOnGoingItem";
import Button from "../components/UI/Button";

const ProjectsAll = () => {
    return (
        <section className="bg-white pt-[32px]">
            <div className="container mx-auto mb-[160px]">
                <div className="flex justify-between">
                    <div>
                        <h2 className='text-[33.18px] lg:text-[39.81px] text-[#030E4A] font-bold pb-[70px]'>Наши готовые проекты</h2>
                    </div>
                    <div className="">
                        <Link href='/'>
                            <Button>На главную &larr;</Button>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProjectReadyItem id='1' description='Описание проекта'/>
                    <ProjectReadyItem id='1' description='Описание проекта'/>
                    <ProjectReadyItem id='map' description='Описание проекта'/>
                </div>
            </div>

            <div className="container mx-auto mb-[160px]">
                <h2 className='text-[33.18px] lg:text-[39.81px] text-[#030E4A] font-bold pb-[70px]'>Наши действующие проекты</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProjectOnGoingItem id='1' description='Описание проекта'/>
                    <ProjectOnGoingItem id='2' description='Описание проекта'/>
                    <ProjectOnGoingItem id='3' description='Описание проекта'/>
                    <ProjectOnGoingItem id='town1' description='Описание проекта'/>
                </div>
            </div>
        </section>
    )
}

export default ProjectsAll