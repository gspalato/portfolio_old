import React from "react";
import styled from "styled-components";

import ProfilePicture from "../Assets/img/problems_dark.png";

export const DefaultNavbar: React.FC = ({ children }) => {
	return (
		<header className="fixed w-full z-10">
			<nav className="
                h-24 bg-black bg-opacity-25 backdrop-blur border-b
                border-neutral-gray-25 border-neutral-gray-border
                flex flex-wrap items-center justify-between
                max-w-screen-lg mx-auto p-5"
            >
				<div className="h-full w-auto">
					{/*<img className="rounded-full h-full w-auto" src={ProfilePicture}/>*/}
				</div>
				<ul className="flex flex-row last:pr-0 text-display text-white w-auto">
					{children}
				</ul>
				<div className="h-full w-auto">

				</div>
			</nav>
		</header>
	);
}