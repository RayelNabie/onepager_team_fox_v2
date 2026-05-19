import {useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const useTeamStoryAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const flowerRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        gsap.from(flowerRef.current, {
            scale: 0, opacity: 0, duration: 1, ease: "back.out(1.7)",
            scrollTrigger: {trigger: flowerRef.current, start: "top 80%", once: true}
        });
    }, {scope: containerRef});

    return {containerRef, flowerRef};
};

export default useTeamStoryAnimation;
