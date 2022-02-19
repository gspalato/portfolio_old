import React from "react";
import styled from "styled-components";

import ProfilePicture from "../Assets/img/problems_dark.png";

export const DefaultNavbar: React.FC = ({ children }) => {
	return (
		<header className="w-full flex items-center justify-center fixed p-5 top-0 backdrop-blur-lg z-50">
			<nav className="bg-black bg-opacity-25 backdrop-blur
      flex flex-wrap items-center justify-between
      max-w-screen-lg mx-auto md:w-7/12 w-10/12">
				<div className="flex h-full w-auto align-middle items-center">
					<h1 className="text-white font-bold text-[1.5rem]">unreaalism<span className="pl-[2px]">_</span></h1>
				</div>
				<ul className="flex flex-row last:pr-0 text-display text-white w-auto">
					
				</ul>
				<div className="flex h-full w-auto items-center">
					<ul className="flex flex-row last:pr-0 text-display text-white w-auto">
						{children}
					</ul>
				</div>
			</nav>
		</header>
	);
}