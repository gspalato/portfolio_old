'use client';

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { v4 as uuid } from 'uuid';

const Component: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div id="wrapper" className="h-full w-full relative">
      <main id="content" className="h-full w-full relative z-[1]">
        <AnimatePresence mode="wait">
          {
            /*
            React.Children.map(
              props.children,
              (child) => (
                <motion.div
                  style={{ height: '100%', width: '100%' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: .5 }}
                  key={uuid()}
                >
                  {child}
                </motion.div>
              )
            )
            */
          }
          {props.children}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default Component;