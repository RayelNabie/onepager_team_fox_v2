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
                            In Rotterdam is phubbing de nieuwe sociale standaard geworden. Dit
                            fenomeen houdt in dat iemand een gesprekspartner negeert ten gunste van een smartphone. Ruim
                            38
                            procent van de Nederlanders denkt niet bewust na over hun eigen schermgebruik.
                            Wetenschappelijk
                            onderzoek toont aan dat dit gedrag dezelfde hersengebieden activeert als fysieke pijn. Veel
                            jongeren gebruiken de smartphone tegenwoordig als een reflexmatige buffer om sociale
                            ongemakken
                            te vermijden. Ook binnen de thuissituatie in Rotterdam is de impact hiervan erg groot. Uit
                            onderzoek blijkt dat jongeren drie keer meer kans hebben op angstgevoelens wanneer hun
                            ouders
                            constant met hun telefoon bezig zijn. De smartphone fungeert daardoor vaak als een
                            ontsnappingsmechanisme voor dagelijkse stress. Dit gedrag creëert helaas een extra muur
                            binnen
                            het gezin en versterkt de sociale isolatie in de stad. De drempel voor echte en fysieke
                            connectie wordt hierdoor steeds hoger onder jongeren.
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
                            Wij streven naar een Rotterdam waarin de sociale norm verschuift van digitale afleiding naar
                            fysieke aanwezigheid. In de ideale situatie zijn jongeren zich volledig bewust van hun
                            reflexmatige smartphonegedrag en maken ze bewuste keuzes over wanneer technologie hun
                            connectie
                            versterkt in plaats van hindert. De drempel voor spontaan en fysiek contact is verlaagd en
                            jongeren voelen zich sociaal weerbaar genoeg om gesprekken te voeren zonder de constante
                            veiligheid van een digitale buffer. Er ontstaat een gezonde digitale balans waarin de
                            thuissituatie weer een plek is van echte aandacht, waarbij ouders en jongeren de online
                            leefwereld samen navigeren in plaats van door technologie van elkaar gescheiden te worden.
                            Door
                            de inzet van slimme interventies wordt de kwaliteit van de interactie tussen ouders en
                            kinderen
                            hersteld en ontstaat er weer ruimte voor authentieke vriendschappen in de wijk. Ons doel is
                            een
                            omgeving waarin elke jongere in Rotterdam weer met zelfvertrouwen en volle aandacht kan
                            deelnemen aan de fysieke samenleving.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Situations;