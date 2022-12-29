import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectReadyItem from "../components/ProjectReadyItem";
import ProjectOnGoingItem from "../components/ProjectOnGoingItem";

const ProjectsAll = () => {
    return (
        <section className="bg-white pt-[32px]">
            <div className="container mx-auto px-16 mb-[160px]">
                <h2 className='text-[33.18px] lg:text-[39.81px] text-[#030E4A] font-bold pb-[70px]'>Наши готовые проекты</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProjectReadyItem id='1' />
                    <ProjectReadyItem id='1' />
                    <ProjectReadyItem id='map' />
                </div>
            </div>

            <div className="container mx-auto px-16 mb-[160px]">
                <h2 className='text-[33.18px] lg:text-[39.81px] text-[#030E4A] font-bold pb-[70px]'>Наши действующие проекты</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProjectOnGoingItem id='1' name='adsadasdasd1'/>
                    <ProjectOnGoingItem id='2' name='dsadad2'/>
                    <ProjectOnGoingItem id='3' name='asdadas3'/>
                    <ProjectOnGoingItem id='town1' name='4'/>
                </div>
            </div>
        </section>
    )
}

export default ProjectsAll