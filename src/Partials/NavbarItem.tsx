import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface INavbarItem {
    last?: boolean;
    link?: string;
}

export const NavbarItem: React.FC<INavbarItem> = ({ children, last, link }) => {
    let Link = styled.a`
        display: inline-block;
        position: relative;

        a:after {    
            background: none repeat scroll 0 0 transparent;
            bottom: 0;
            content: "";
            display: block;
            height: 2px;
            left: 50%;
            position: absolute;
            background: #fff;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
        }

        a:hover:after { 
            width: 100%; 
            left: 0; 
        }
    `;

	return (
		<motion.li
        whileTap={{ scale: 0.95, filter: "brightness(75%)" }}
        className={`font-light hover:text-blue
        active:text-blue transition-colors ${last ? "" : "pr-5"}`}>
            <Link target="_blank" href={link}>
                {children}
            </Link>
        </motion.li>
	);
}