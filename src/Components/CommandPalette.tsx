/*
import React from 'react';

import Input from './Input';

const CommandPalette: React.FC = () => {
    return (
        <div className="hidden fixed md:flex items-center justify-center
        top-0 left-0 h-screen w-screen z-[100]
        bg-[#000a]">
            <div className="rounded-3xl bg-gray-300/75
            flex flex-col m-auto h-1/2 w-1/2 z-[101] border
            border-border backdrop-blur-lg">
                <Input
                className="!border-b !border-b-border pl-6"
                placeholder="Type something to search."/>
                <div className="">
                    
                </div>
            </div>
        </div>
    );
}

export default CommandPalette;
*/

import React, { useRef, useState, useEffect } from "react";
import useArrowKeyNavigationHook from "react-arrow-key-navigation-hook";
import { useDetectClickOutside } from "react-detect-click-outside";

const Options = [
  {
    href: "https://hxrsh.in/",
    title: "Portfolio"
  },
  {
    href: "https://github.com/harshhhdev",
    title: "GitHub"
  },
  {
    href: "https://twitter.com/harshhhdev/",
    title: "Twitter"
  },
  {
    href: "https://dev.to/harshhhdev",
    title: "Dev"
  },
  {
    href: "https://dribbble.com/harshhhdev",
    title: "Dribbble"
  },
  {
    href: "https://www.linkedin.com/in/harsh-singh-5ba6b31b8/",
    title: "Linkedin"
  },
  {
    href: "https://behance.net/harshhhdev",
    title: "Behance"
  },
  {
    href: "https://instagram.com/harshh.singh_",
    title: "Instagram"
  },
  {
    href: "https://www.snapchat.com/add/harshhhhsingh",
    title: "Snapchat"
  },
  {
    href: "https://t.me/harshhhdev",
    title: "Telegram"
  },
  {
    href: "https://www.youtube.com/channel/UC6ix6gYRC62pM0sMRYKPKUQ",
    title: "YouTube"
  },
  {
    href: "https://codepen.io/harshhhdev",
    title: "Codepen"
  },
  {
    href: "https://discord.gg/kcbWSfzPuF",
    title: "Discord"
  },
  {
    href: "https://harshhhdev.itch.io",
    title: "Itch"
  }
];

const filter = (options: typeof Options, query: string) => {
  if (!query) return options;

  return options.filter((option) => {
    const optionText = option.title.toLowerCase();
    return optionText.includes(query.toLowerCase());
  });
};

const Palette: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchQuery(e.currentTarget.value);
  };

  const filteredResults = filter(Options, searchQuery);

  const parentRef = useArrowKeyNavigationHook({ selectors: "a,input" });

  const [open, setOpen] = useState(false);
  useEffect(
    () =>
      document.addEventListener("keydown", (e) => e.key === " " && toggle()),
    []
  );
  useEffect(() => {
    open && inputRef.current!.focus();
  }, [open]);

  const toggle = () => {
    setSearchQuery("");
    setOpen((open) => !open);
  };
  const boundary = useDetectClickOutside({ onTriggered: toggle });

  return (
    <>
      {open && (
        <div className="fixed min-h-screen w-screen bg-[rgba(0,0,0,.5)] select-none z-[1]" role="dialog" aria-modal="true">
          <div className="flex flex-col max-h-[50vh] h-fit w-[35rem] mx-[8%] my-auto left-0 right-0 rounded-2xl
          overflow-hidden z-[999]" ref={parentRef}>
            <div className="flex flex-col overflow-hidden" ref={boundary}>
              <div className="flex align-center w-[35rem] h-[4rem] p-[1.25rem]">
                <input
                  type="text"
                  placeholder="Type to Search..."
                  spellCheck="false"
                  className="border-none outline-none bg-none text-xl"
                  ref={inputRef}
                  onChange={changeHandler}
                />
              </div>
              <div className="w-[35rem] overflow-x-hidden overflow-y-scroll">
                {filteredResults.map((option, index) => (
                  <a
                    className="flex align-center w-[35rem] h-[2.5rem] border-none decoration-none"
                    href={option.href}
                    rel="norefferer"
                    key={index}
                    draggable="false"
                  >
                    {option.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Palette;
