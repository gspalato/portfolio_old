import { useLayoutEffect, useState } from "react";

type ScreenSize = { height: number | null, width: number | null };

const useWindowSize = (): ScreenSize => {
    const [size, setSize] = useState<ScreenSize>({
      width: null,
      height: null,
    });
  
    useLayoutEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return size;
  }
export { useWindowSize };