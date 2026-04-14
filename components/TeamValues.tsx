"use client";

import React, {useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

import {HandheartIcon, LightbulbIcon, PrayinIcon, ScaleIcon, SmileyIcon} from "@/components/images/ImageLoader";

gsap.registerPlugin(ScrollTrigger);

interface ValueData {
    title: string,
    icon: React.ElementType,
    text: string
}

const valuesData: ValueData[] = [
    {
        title: "Rechtvaardigheid",
        icon: ScaleIcon,
        text: "Wij behandelen iedereen op dezelfde manier en maken eerlijke keuzes. We luisteren naar iedereen en zorgen dat niemand wordt buitengesloten."
    },
    {
        title: "Plezier",
        icon: SmileyIcon,
        text: "Wij vinden het belangrijk dat werken leuk is en dat we samen kunnen lachen. Als we plezier hebben in ons werk, gaat alles makkelijker en worden de resultaten beter."
    },
    {
        title: "Eerlijkheid",
        icon: HandheartIcon,
        text: "Wij zijn glashelder over elke stap die we zetten. Door transparant te zijn over ons proces en de keuzes die we maken, bouwen we aan een fundament van vertrouwen met de gemeenschap in Rotterdam-Zuid."
    },
    {
        title: "Behulpzaam",
        icon: PrayinIcon,
        text: "Wij vertellen elkaar altijd de waarheid, ook als dat soms lastig is. We zijn open over wat we doen, zodat we elkaar écht kunnen vertrouwen."
    },
    {
        title: "Creativiteit",
        icon: LightbulbIcon,
        text: "Wij durven nieuwe dingen te proberen en bedenken slimme oplossingen voor problemen. We staan open voor alle ideeën en kijken op een andere manier naar ons werk."
    }
];

const TeamValues = () => {
        const containerRef = useRef<HTMLDivElement>(null);

        useGSAP(() => {
            const cards = gsap.utils.toArray('.team-values__card');

            gsap.from(cards, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    once: true,
                }
            });
        }, {scope: containerRef});
        return (
            <section className="team-values" id="teamwaarden" ref={containerRef}>
                <h2 className="team-values__title">Teamwaarden</h2>

                <div className="team-values__grid">
                    {valuesData.map((item: ValueData, index: number) => {
                        const IconContent = item.icon;

                        return (
                            <div className="team-values__card" key={index}>
                                <h3 className="team-values__card-title">{item.title}</h3>
                                <div className="team-values__card-content">
                                        <IconContent className="team-values__icon"/>
                                    <p className="team-values__text">{item.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="team-values__scroll">
                    <p>Scroll voor meer</p>
                    <span className="team-values__scroll-arrow">&rarr;</span>
                </div>
            </section>
        );
    }
;

export default TeamValues;