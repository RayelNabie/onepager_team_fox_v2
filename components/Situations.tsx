"use client";

import React, {useRef, type JSX} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import OrangeLine from '../public/orange_line.svg';
import {ArrowdownIcon} from "@/components/images/ImageLoader";
import FoxVisual from '../public/fox_visual.svg';

gsap.registerPlugin(ScrollTrigger);

const Situations: () => React.JSX.Element = (): JSX.Element => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP((): void => {
        const arrow = '.situations__arrow';

        gsap.from(arrow, {
            opacity: 0, scale: 0.5, duration: 0.5, delay: 0.6,
            scrollTrigger: {trigger: containerRef.current, start: "top 60%", once: true}
        });

        gsap.to(arrow, {
            y: 12, x: 8, rotation: 3, repeat: -1, yoyo: true, duration: 1.2, ease: "sine.inOut"
        });
    }, {scope: containerRef});

    return (
        <section className="situations" id="situaties" ref={containerRef}>

            {/* Orange Wiggle */}
            <div className="situations__wiggles" aria-hidden="true">
                <Image src={OrangeLine} alt="" className="situations__wiggle situations__wiggle--orange"/>
            </div>

            <div className="situations__container">

                {/* Current Situation */}
                <div className="situations__row situations__row--top">
                    <div className="situations__card situations__card--current">
                        <h2 className="situations__title">Huidige situatie</h2>
                        <p className="situations__text">
                            In Rotterdamse &#39;Third Spaces&#39;, zoals terrassen, café’s en jongerenhubs, is phubbing
                            de
                            nieuwe sociale standaard geworden. Smartphones fungeren als een reflexmatige buffer om elk
                            moment van stilte of sociale ongemakkelijkheid te vermijden. Wetenschappelijk onderzoek
                            toont aan dat dit gedrag dezelfde hersengebieden activeert als fysieke pijn, wat de
                            negatieve impact op de sociale sfeer verklaart. Het brein is door platforms zoals TikTok en
                            Instagram getraind op snelle dopamine-prikkels, waardoor de drempel voor diepgaande, fysieke
                            connectie steeds hoger wordt. In plaats van echte verbinding tijdens het samenzijn, ontstaat
                            er digitale isolatie binnen de vriendengroep, waarbij de kwaliteit van het gesprek
                            ondergeschikt raakt aan de constante stroom van notificaties en schermafleiding.
                        </p>
                    </div>
                    <ArrowdownIcon className="situations__arrow"/>
                </div>

                {/* Desired Situation */}
                <div className="situations__row situations__row--bottom">
                    <div className="situations__fox">
                        <Image src={FoxVisual} alt="Zittend vosje" className='situations__fox'/>
                    </div>

                    <div className="situations__card situations__card--desired">
                        <h2 className="situations__title situations__title--light">Gewenste situatie</h2>
                        <p className="situations__text situations__text--light">
                            De sociale norm in Rotterdam verschuift van digitale afleiding naar volledige mentale
                            aanwezigheid tijdens sociale ontmoetingen. Jongvolwassenen zijn zich bewust van hun
                            reflexmatige smartphonegedrag en maken de bewuste keuze om mentaal aanwezig te zijn bij hun
                            vrienden. De drempel voor spontaan en betekenisvol fysiek contact is verlaagd, doordat
                            jongeren zich weer sociaal weerbaar voelen zonder digitale buffer. Door de inzet van
                            speelse, fysieke interventies wordt de kwaliteit van de interactie hersteld en ervaren
                            vriendengroepen weer de authentieke waarde van het &#39;hier en nu&#39;. Het resultaat is een
                            omgeving waarin elke jongere met zelfvertrouwen en onverdeelde aandacht kan deelnemen aan de
                            fysieke samenleving in de stad.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Situations;