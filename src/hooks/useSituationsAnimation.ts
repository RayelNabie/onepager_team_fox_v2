import {useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const useSituationsAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const arrow = '.situations__arrow';

        gsap.from(arrow, {
            opacity: 0, scale: 0.5, duration: 0.5, delay: 0.6,
            scrollTrigger: {trigger: containerRef.current, start: "top 60%", once: true}
        });

        gsap.to(arrow, {
            y: 12, x: 8, rotation: 3, repeat: -1, yoyo: true, duration: 1.2, ease: "sine.inOut"
        });
    }, {scope: containerRef});

    return containerRef;
};

export default useSituationsAnimation;
