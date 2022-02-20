import React, { useState } from "react";
import { motion } from "framer-motion";

import { Page } from "../Components/Page";


// Component
interface IHomeProps { }

export const Home: React.FC<IHomeProps> = () => {
    return (
        <Page compensateNavbar className="flex justify-center items-center">
            <h1 className="text-4xl font-display text-white">Content goes here.</h1>
        </Page>
    );
}