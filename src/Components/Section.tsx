import React from 'react';

interface ISectionProps {
	background?: React.ReactNode;
	blur?: boolean;
	className?: string;
	overlayColor?: boolean;
	title?: string | React.ReactNode;
}

export const Section: React.FC<ISectionProps> = ({ background, blur, className, overlayColor, title, children }) => {
  return (
    <section className={`relative flex flex-col justify-center h-screen mx-auto ${className ?? ""}`}>
			<div className="absolute h-full w-full">
				{/* Background */}
				{background}
			</div>
			<div className={`flex justify-center h-full w-full pl-5 pr-5
			${blur ? "backdrop-blur-2xl" : ""} ${overlayColor ? "bg-scheme-contrast-transparent" : ""}`}>
				<div className="flex flex-col items-center justify-center max-w-screen-xl h-full w-full">
					<h1 className="font-display font-bold text-scheme-offwhite text-5xl py-24">{title}</h1>
					<div className="flex-1 h-auto w-full">
						{children}
					</div>
				</div>
			</div>
		</section>
  );
}