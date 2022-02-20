import React, { useState } from "react";
import { motion } from "framer-motion";

import { Page } from "../Components/Page";
import { ProjectCard } from "../Components/ProjectCard";

import DefaultIcon from "../Assets/img/icon.png";
import WondersLogo from "../Assets/img/wonders.png";


// Component
interface IProjectsProps { }

export const Projects: React.FC<IProjectsProps> = () => {
    return (
        <Page compensateNavbar className="flex justify-center items-center">
            <div className="h-full w-full grid grid-cols-1 gap-y-[25rem] md:grid-cols-4 auto-rows-fr pt-12 px-20">
                <ProjectCard icon={WondersLogo} title="Wonders" subtitle="Repository"/>
                <ProjectCard icon={DefaultIcon} title="Portfolio" subtitle="Repository"/>
				<ProjectCard icon={DefaultIcon} title="Reactions" subtitle="Repository"/>
                <ProjectCard icon={DefaultIcon} title="Beam" subtitle="Repository"/>

                <ProjectCard icon={WondersLogo} title="Wonders" subtitle="Repository"/>
                <ProjectCard icon={DefaultIcon} title="Portfolio" subtitle="Repository"/>
				<ProjectCard icon={DefaultIcon} title="Reactions" subtitle="Repository"/>
                <ProjectCard icon={DefaultIcon} title="Beam" subtitle="Repository"/>
            </div>
        </Page>
    );
}