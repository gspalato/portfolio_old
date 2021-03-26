import { AnimationProps, MotionProps } from "framer-motion";
import React, { useState } from "react";
import InView from "react-intersection-observer";

// Main component
interface IWhenViewedProps extends AnimationProps, MotionProps {
	delay?: number;
	initialInView?: boolean;
	root?: Element | Document | null;
    rootMargin?: string;
    skip?: boolean;
	threshold?: number | number[];
	trackVisibility?: boolean;
	triggerOnce?: boolean;
    
	betweenDelay?: number;

	onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void;
};

const defaultProps = {
	delay: 200,
	initial: { opacity: 0, y: 50 },
	animate: { opacity: 1, y: 0 },
	threshold: 1,
	transition: { type: "easeInOut", duration: .5 },
};

export const WhenViewed: React.FC<IWhenViewedProps> = (props) => {
	const animateProp = props.animate ?? defaultProps.animate;
	const delayProp = props.delay ?? defaultProps.delay;
	const initialProp = props.initial ?? defaultProps.initial;
	const thresholdProp = props.threshold ?? defaultProps.threshold;
	const transitionProp = props.transition ?? defaultProps.transition;

	let currentChild: number = 0;

    return (
		<>
			{
			React.Children.map(props.children, child => {
				let current = ++currentChild;
        		return (
            		<InView threshold={thresholdProp} delay={delayProp}>
            		{
            		({ inView, ref, entry }) => (
                		React.cloneElement(child as any, {
        	          		animate: inView ? animateProp : initialProp,
                    		delay: (delayProp + current * (props.betweenDelay ?? 500)),
                    		initial: initialProp,
                    		ref,
                    		transition: transitionProp,
                		})
            		)
            		}
            		</InView>
        		);
    		})
			}
		</>
	)
};