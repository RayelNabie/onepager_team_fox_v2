"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const conditions = [
    { title: "Veiligheid", text: "Een veilige sociale omgeving is een basisvoorwaarde..." },
    { title: "Toegankelijkheid", text: "Het gebruik mag geen financiële drempel inbrengen..." },
    { title: "Geen kosten", text: "De oplossing is kosteloos voor de doelgroep." },
    { title: "Schaalbaarheid", text: "De aanpak sluit aan op de leefwereld in Rotterdam." },
    { title: "Haalbaarheid", text: "Realistisch ontwikkelbaar binnen het semester." }
];

const DesignConditions = () => {
    const scope = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.design-question__condition', {
            y: 20, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
            scrollTrigger: { trigger: scope.current, start: "top 85%", once: true }
        });
    }, { scope });

    return (
        <div className="design-question__conditions-section" ref={scope}>
            <div className="container">
                <div className="design-question__conditions">
                    <h2 className="design-question__title">Randvoorwaarden</h2>
                    <div className="design-question__conditions-list">
                        {conditions.map((item, index) => (
                            <div className="design-question__condition" key={index}>
                                <h4 className="design-question__condition-title">{item.title}</h4>
                                <p className="design-question__condition-text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignConditions;