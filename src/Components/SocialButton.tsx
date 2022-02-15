import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ISocialButtonProps {
    color?: string;
    link: string;
    icon: IconDefinition;
    size?: SizeProp;
}

export const SocialButton: React.FC<ISocialButtonProps> = props => {
    return (
        <a target="_blank" href={props.link}>
            <FontAwesomeIcon
                className="hover:text-scheme-blue transition-colors"
                color={props.color ?? "#ffffff"}
                icon={props.icon}
                size={props.size ?? "2x"}
            />
        </a>
    );
}