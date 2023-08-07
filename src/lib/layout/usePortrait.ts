import { useLayoutEffect, useState } from "react";

const usePortrait = (): boolean => {
    const [browserDefinedPortrait, setBrowserDefinedPortrait] = useState<boolean>(false);
    const [viewportRotatedPortrait, setViewportRotatedPortrait] = useState<boolean>(false);

    const calculate = () => {
        setBrowserDefinedPortrait(window.screen.orientation.type.startsWith('portrait'));
        setViewportRotatedPortrait(window.innerWidth < window.innerHeight);
    };

    useLayoutEffect(() => {
        window.addEventListener("resize", calculate);
        if (window.screen?.orientation) {
            calculate()
            window.screen.orientation.addEventListener("change", calculate);
        } else {
            calculate()
            window.addEventListener("orientationchange", calculate);
        }

        return () => {
            window.removeEventListener("resize", calculate);
            if (window.screen?.orientation) {
                window.screen.orientation.removeEventListener("change", calculate);
            } else {
                window.removeEventListener("orientationchange", calculate);
            }
        };
    }, []);


    return browserDefinedPortrait || viewportRotatedPortrait;
}

export { usePortrait };