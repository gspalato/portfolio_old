import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';
import { styled } from '../stitches.config';

import { Card } from './Card';


// Styles


// Main component
const items = [
    {
        id: 'oculus',
        name: 'oculus',
        description: 'A state-of-the-art general-purpose discord bot built in C#.',
        image: '',
    },
    {
        id: 'beam',
        name: 'beam',
        description: 'A Lavalink wrapper with queue system for discord.js.',
        image: '',
    }
];

export const CardViewer: React.FC = props => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    
    return (
        <AnimateSharedLayout type="crossfade">
            {
                items.map(
                    item => (
                        <Card.Container
                            image={item.image}
                            layoutId={item.id}
                            onClick={() => setSelectedId(item.id)}
                        >
                            <Card.Info
                                name={item.name}
                                description={item.description}
                            />
                        </Card.Container>
                    )
                )
            }
            <AnimatePresence>
                {
                    selectedId
                }
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};