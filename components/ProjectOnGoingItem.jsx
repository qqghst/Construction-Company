import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectOnGoing = ({ id, name }) => {
    return (
        <div>
            <Image
                className="rounded-md"
                src={`/assets/projectsOnGoing/liga_project_${id}.jpg`}
                alt='projectOnGoing'
                width={1000}
                height={600}
            />
            <div className="text-[13.33px] text-[#020202] pt-[8px]">{name}</div>
        </div>
    )
}

export default ProjectOnGoing;