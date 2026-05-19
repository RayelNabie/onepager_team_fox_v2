import {useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const useProcessAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.process__card', {
            y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {trigger: containerRef.current, start: "top 75%", once: true}
        });
    }, {scope: containerRef});

    return containerRef;
};

export default useProcessAnimation;
