import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectReadyItem from "./ProjectReadyItem";

const ProjectsReady = () => {
    return (
        <section className="bg-white pt-[160px]">
            <div className="container mx-auto px-16 mb-[160px]">
                <h2 className='text-[33.18px] lg:text-[39.81px] text-[#030E4A] font-bold pb-[70px]'>Наши готовые проекты</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProjectReadyItem id='1'/>
                    <ProjectReadyItem id='1'/>
                    <ProjectReadyItem id='map'/>
                </div>
            </div>
        </section>
    )
}

export default ProjectsReady