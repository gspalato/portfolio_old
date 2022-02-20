import React from "react";

export const DefaultFooter: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center h-24
    w-full bg-transparent border-t border-border/50">
    	<h1 className="text-center m-auto text-offwhite/50 text-display font-light px-6">
        Designed and coded with ❤️ by Gabriel Spalato Marques.
        Source code on <a
          className="underline decoration-inherit decoration-2"
          target="_blank"
          href="https://github.com/gspalato/portfolio">
            GitHub
        </a>.
      </h1>
  	</div>
	);
}