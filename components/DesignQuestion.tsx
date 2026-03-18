"use client";

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const DesignQuestion = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animeer de tekst en quote
        gsap.from('.design-question__header', {
            y: 30, opacity: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: containerRef.current, start: "top 75%", once: true }
        });

        // Animeer de twee groene blokken tegelijk in
        gsap.from('.design-question__card', {
            y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
            scrollTrigger: { trigger: '.design-question__scopes', start: "top 80%", once: true }
        });

        // Animeer de randvoorwaarden één voor één
        gsap.from('.design-question__condition', {
            y: 20, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
            scrollTrigger: { trigger: '.design-question__conditions', start: "top 85%", once: true }
        });
    }, { scope: containerRef });

    return (
        <section className="design-question" id="ontwerpvraag" ref={containerRef}>
            <div className="design-question__container container">

                {/* Titel & Quote */}
                <div className="design-question__header">
                    <h2 className="design-question__title">Ontwerpvraag</h2>
                    <div className="design-question__quote-wrapper">
                        <p className="design-question__quote">
                            Hoe kunnen we jongeren in Rotterdam (10-14 jaar) ondersteunen bij het doorbreken van phubbing-gewoontes, zodat de sociale norm verschuift van digitale afleiding naar fysieke aanwezigheid en er een grotere bewustwording ontstaat over hun eigen smartphonegedrag?
                        </p>
                        <div className="design-question__quote-icon">
                            <Image src="/quote.svg" alt="Quote" width={48} height={48} />
                        </div>
                    </div>
                </div>

                {/* Scope Cards */}
                <div className="design-question__scopes">
                    <div className="design-question__card">
                        <h3 className="design-question__card-title">Binnen de scope</h3>
                        <p className="design-question__card-text">
                            Het ontwerpen van een offline, fysieke interventie die jongeren aanmoedigt om hun telefoon weg te leggen. We richten ons op interacties in de openbare ruimte binnen Rotterdam-Zuid en betrekken jongeren actief bij het testproces.
                        </p>
                    </div>
                    <div className="design-question__card">
                        <h3 className="design-question__card-title">Buiten de scope</h3>
                        <p className="design-question__card-text">
                            Aanpassingen in digitaal beleid (zoals het verbieden van telefoons) of het ontwikkelen van een app om schermtijd te reduceren. De focus ligt op gedragsverandering in de fysieke ruimte zonder gebruik van digitale middelen.
                        </p>
                    </div>
                </div>

                {/* Randvoorwaarden */}
                <div className="design-question__conditions">
                    <h2 className="design-question__title">Randvoorwaarden</h2>
                    <div className="design-question__conditions-list">

                        <div className="design-question__condition">
                            <h4 className="design-question__condition-title">Veiligheid</h4>
                            <p className="design-question__condition-text">
                                Een veilige sociale omgeving is een basisvoorwaarde bij alles wat ontworpen wordt, zowel fysiek als wat betreft de privacy van de deelnemers.
                            </p>
                        </div>

                        <div className="design-question__condition">
                            <h4 className="design-question__condition-title">Toegankelijkheid</h4>
                            <p className="design-question__condition-text">
                                Het gebruik van de oplossing mag geen financiële drempel inbrengen voor de doelgroep.
                            </p>
                        </div>

                        <div className="design-question__condition">
                            <h4 className="design-question__condition-title">Schaalbaarheid</h4>
                            <p className="design-question__condition-text">
                                De aanpak sluit aan op de dagelijkse context en leefwereld van jongeren in Rotterdam.
                            </p>
                        </div>

                        <div className="design-question__condition">
                            <h4 className="design-question__condition-title">Haalbaarheid</h4>
                            <p className="design-question__condition-text">
                                De oplossing moet realistisch ontwikkelbaar en testbaar zijn binnen de looptijd van het semester.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default DesignQuestion;