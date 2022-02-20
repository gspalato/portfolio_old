import React from 'react';

interface ISectionProps {
	background?: React.ReactNode;
	blur?: boolean;
	className?: string;
	noMaxWidth?: boolean;
	overlayColor?: boolean;
	title?: string | React.ReactNode;
}

export const Section: React.FC<ISectionProps> = (props) => {
  return (
    <section className="relative flex flex-col justify-center h-screen mx-auto">
			<div className="absolute h-full w-full">
				{props.background}
			</div>
			<div className={`flex justify-center h-full w-full px-0
			${props.blur ? "backdrop-blur-2xl" : ""} ${props.overlayColor ? "bg-contrast-transparent" : ""}`}>
				<div className={`flex flex-col items-center justify-center
				h-full w-full ${!props.noMaxWidth ? "max-w-screen-xl" : ""}`}>
					<h1 className="font-display font-bold text-offwhite text-5xl py-24">{props.title}</h1>
					<div className={`flex-1 h-auto w-full ${props.className ?? ""}`}>
						{/* This div should act just like a normal one. */}
						{/* Styles applied to it shouldn't break. */}
						{props.children}
					</div>
				</div>
			</div>
		</section>
  );
}