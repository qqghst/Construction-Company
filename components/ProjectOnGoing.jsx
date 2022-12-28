import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectOnGoing = ({ id }) => {
    return (
        <div>
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