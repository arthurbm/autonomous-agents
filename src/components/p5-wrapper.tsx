// src/P5Wrapper.js
import { useEffect, useRef } from 'react';
import p5 from 'p5';
import { sketch } from '../scripts/sketch';

export const P5Wrapper = () => {
    const sketchRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const canvas = sketchRef.current ? new p5(sketch, sketchRef.current) : null;

        return () => {
            canvas?.remove(); // Cleanup the sketch when the component is unmounted
        };
    }, []);

    return <div ref={sketchRef}></div>;
};

