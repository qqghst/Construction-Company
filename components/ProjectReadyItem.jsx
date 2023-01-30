import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectReady = ({ id, description }) => {
    return (
        <div>
            <Image
                className="rounded-md"
                src={`/assets/projectsReady/liga_project_${id}.jpg`}
                alt='project'
                width={5000}
                height={2500}
            />
            <div className="text-[13.33px] text-[#020202] pt-[8px]">{description}</div>
        </div>
    )
}

export default ProjectReady