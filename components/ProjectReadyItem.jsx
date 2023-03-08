import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectReady = ({ id, width, height }) => {
    return (
        <div>
            <Image
                className="rounded-md"
                src={`/assets/projectsReady/liga_project_${id}.webp`}
                alt='project'
                width={width}
                height={height}
            />
            {/* <div className="text-[13.33px] text-[#020202] pt-[8px]">{description}</div> */}
        </div>
    )
}

export default ProjectReady