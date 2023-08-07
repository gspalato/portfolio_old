import { useLayoutEffect, useState } from "react";

type ScreenSize = { height: number, width: number };

const useScreenSize  = (): ScreenSize => {
    const [height, setHeight] = useState<number>(window.innerHeight);
    const [width, setWidth] = useState<number>(window.innerWidth);

    const calculate = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    };

    useLayoutEffect(() => {
        window.addEventListener("resize", calculate);

        return () => {
            window.removeEventListener("resize", calculate);
        };
    }, []);


    return { height, width };
}

export { useScreenSize };