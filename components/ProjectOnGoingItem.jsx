import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectOnGoing = ({ id, description }) => {
    return (
        <div className="flex flex-col gap-[16px]">
            <div className="text-[13.33px] text-[#020202] pt-[8px]">{description}</div>
            <Image
                className="rounded-md"
                src={`/assets/projectsOnGoing/liga_project_${id}.jpg`}
                alt='projectOnGoing'
                width={1000}
                height={600}
            />
        </div>
    )
}

export default ProjectOnGoing;