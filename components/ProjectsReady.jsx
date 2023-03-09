import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectReadyItem from "./ProjectReadyItem";

const ProjectsReady = () => {
    return (
        <section id='projectsReady' className="bg-white pt-[80px]">
            <div className="container mx-auto pb-[160px] px-8">
                <h2 className='text-[27.65px] lg:text-[33.18px] text-[#030E4A] font-bold pb-[70px]'>Наши готовые проекты</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProjectReadyItem id='project1' width={700} height={500}/>
                    <ProjectReadyItem id='project2' width={700} height={500}/>
                    <ProjectReadyItem id='map' width={700} height={500}/>
                </div>
            </div>
        </section>
    )
}

export default ProjectsReady