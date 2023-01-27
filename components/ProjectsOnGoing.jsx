import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectOnGoingItem from "./ProjectOnGoingItem";

const ProjectsOnGoing = () => {
    return (
        <section className="bg-white ">
            <div className="container mx-auto pb-[80px]">
                <h2 className='text-[27.65px] lg:text-[33.18px] text-[#030E4A] font-bold pb-[70px]'>Наши действующие проекты</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProjectOnGoingItem id='1'/>
                    <ProjectOnGoingItem id='2'/>
                    <ProjectOnGoingItem id='3'/>
                    <ProjectOnGoingItem id='3'/>
                </div>
            </div>
            <div className="container mx-auto px-16 pb-[160px]">
                <Link className="px-[32px] py-[16px] bg-[#030E4A] text-white rounded-md text-[13.33px]" href='/ProjectsAll'>Все проекты</Link>
            </div>
        </section>
    )
}

export default ProjectsOnGoing;
