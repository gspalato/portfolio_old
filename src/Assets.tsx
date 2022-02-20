import React, { useState } from 'react';

export const PreloadImages = async (srcs: string[], setState: () => void) => {
    const promises = srcs.map((src) => {
        return new Promise((res, rej) => {
            const img = new Image();
            img.src = src;

            img.onload = res;
            img.onerror = rej;
        });
    });

    await Promise.all(promises);

    setState();
}