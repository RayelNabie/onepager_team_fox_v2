"use client";

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const valuesData = [
    {
        title: "Rechtvaardigheid",
        icon: "/icon-weegschaal.svg",
        text: "Wij kijken verder dan cijfers. In ons proces wegen we de verschillen tussen mensen actief mee. Iedere Rotterdammer verdient een eerlijke kans op digitale verbinding, ongeacht hun achtergrond of situatie."
    },
    {
        title: "Plezier",
        icon: "/icon-smiley.svg",
        text: "Verbinding moet energie geven. We zorgen ervoor dat de drempel om onze oplossing te gebruiken zo laag mogelijk is; het moet een positieve ervaring zijn en absoluut geen last om te gebruiken."
    },
    {
        title: "Eerlijkheid",
        icon: "/icon-handen.svg",
        text: "Wij zijn glashelder over elke stap die we zetten. Door transparant te zijn over ons proces en de keuzes die we maken, bouwen we aan een fundament van vertrouwen met de gemeenschap in Rotterdam-Zuid."
    },
    {
        title: "Behulpzaam",
        icon: "/icon-praying.png",
        text: "Wij staan in dienst van de wijk. Dit betekent dat we eerst echt luisteren naar wat de mensen nodig hebben en ondersteuning bieden waar en wanneer zij dat zelf wensen."
    },
    {
        title: "Creativiteit",
        icon: "/icon-smart.png",
        text: "Wij ontwerpen vernieuwende oplossingen door met een frisse blik naar de huidige standaard te kijken. We durven vaste gewoontes ter discussie te stellen om iets te bedenken dat echt werkt en beter aansluit op de behoeften van de jongeren."
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
    }, { scope: containerRef });

    return (
        <section className="team-values" id="teamwaarden" ref={containerRef}>
            <div className="team-values__container container">
                <h2 className="team-values__title">Teamwaarden</h2>

                <div className="team-values__grid">
                    {valuesData.map((item, index) => (
                        <div className="team-values__card" key={index}>
                            <h3 className="team-values__card-title">{item.title}</h3>
                            <div className="team-values__card-content">
                                <div className="team-values__icon">
                                    <Image src={item.icon} alt={`${item.title} icoon`} width={40} height={40} />
                                </div>
                                <p className="team-values__text">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="team-values__scroll">
                    <p>Scroll voor meer</p>
                    <span>&rarr;</span>
                </div>
            </div>
        </section>
    );
};

export default TeamValues;