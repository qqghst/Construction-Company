import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectOnGoingItem from "./ProjectOnGoingItem";
import Button from "./UI/Button";

const ProjectsOnGoing = () => {
    return (
        <section className="bg-white ">
            <div className="container mx-auto pb-[80px] px-8">
                <h2 className='text-[27.65px] lg:text-[33.18px] text-[#030E4A] font-bold pb-[70px]'>Наши действующие проекты</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProjectOnGoingItem id='1'/>
                    <ProjectOnGoingItem id='2'/>
                    <ProjectOnGoingItem id='map'/>
                    <ProjectOnGoingItem id='project'/>
                </div>
            </div>
            <div className="container mx-auto pb-[160px] px-8">
                <Link href='/ProjectsAll'>
                    <Button>Все проекты</Button>
                </Link>
            </div>
        </section>
    )
}

export default ProjectsOnGoing;
