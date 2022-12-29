import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectReady = ({ id }) => {
    return (
        <div>
            <Image
                className="rounded-md"
                src={`/assets/projectsReady/liga_project_${id}.jpg`}
                alt='project'
                width={5000}
                height={2500}
            />
        </div>
    )
}

export default ProjectReady