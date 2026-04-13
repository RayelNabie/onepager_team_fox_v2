"use client";

import {useRef} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import OrangeLine from '../public/orange_line.svg';
import ArrowDown from '../public/arrow-down.svg';
import FoxVisual from '../public/fox_visual.svg';

gsap.registerPlugin(ScrollTrigger);

const Situations = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. Roze blok (komt van links)
        gsap.from('.situations__card--current', {
            x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {trigger: containerRef.current, start: "top 70%", once: true}
        });

        // 2. Groene blok (komt van rechts)
        gsap.from('.situations__card--desired', {
            x: 50, opacity: 0, duration: 0.8, delay: 0.2, ease: "power3.out",
            scrollTrigger: {trigger: containerRef.current, start: "top 60%", once: true}
        });

        // 3. Vosje (popt in beeld tegelijk met het groene blok)
        gsap.from('.situations__fox', {
            scale: 0, opacity: 0, duration: 0.5, delay: 0.4, ease: "back.out(1.5)",
            scrollTrigger: {trigger: containerRef.current, start: "top 60%", once: true}
        });

        // 4. Pijl (fade in en gaat oneindig bouncen)
        gsap.from('.situations__arrow', {
            opacity: 0, scale: 0.5, duration: 0.5, delay: 0.6,
            scrollTrigger: {trigger: containerRef.current, start: "top 60%", once: true}
        });

        gsap.to('.situations__arrow img', {
            y: 12, x: 8, rotation: 3, repeat: -1, yoyo: true, duration: 1.2, ease: "sine.inOut"
        });
    }, {scope: containerRef});

    return (
        <section className="situations" id="situaties" ref={containerRef}>
            <div className="situations__wiggles" aria-hidden="true">
                <div className="situations__wiggle situations__wiggle--orange">
                    <Image src={OrangeLine} alt="" width={1542} height={1328} style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>

            <div className="situations__container container">

                <div className="situations__card situations__card--current">
                    <h2 className="situations__title">Huidige situatie</h2>
                    <p className="situations__text">
                        In Rotterdam is phubbing de nieuwe sociale standaard geworden. Dit fenomeen houdt in dat iemand
                        een gesprekspartner negeert ten gunste van een smartphone. Ruim 38 procent van de Nederlanders
                        denkt niet bewust na over hun eigen schermgebruik. Wetenschappelijk onderzoek toont aan dat dit
                        gedrag dezelfde hersengebieden activeert als fysieke pijn. Veel jongeren gebruiken de smartphone
                        tegenwoordig als een reflexmatige buffer om sociale ongemakken te vermijden. Ook binnen de
                        thuissituatie in Rotterdam is de impact hiervan erg groot. Uit onderzoek blijkt dat jongeren
                        drie keer meer kans hebben op angstgevoelens wanneer hun ouders constant met hun telefoon bezig
                        zijn. De smartphone fungeert daardoor vaak als een ontsnappingsmechanisme voor dagelijkse
                        stress. Dit gedrag creëert helaas een extra muur binnen het gezin en versterkt de sociale
                        isolatie in de stad. De drempel voor echte en fysieke connectie wordt hierdoor steeds hoger
                        onder jongeren.
                    </p>
                </div>

                <div className="situations__arrow">
                    <Image src={ArrowDown} alt="Pijl naar beneden" width={80} height={80}/>
                </div>

                <div className="situations__fox">
                    <Image src={FoxVisual} alt="Zittend vosje" width={128} height={174}/>
                </div>

                <div className="situations__card situations__card--desired">
                    <h2 className="situations__title situations__title--light">Gewenste situatie</h2>
                    <p className="situations__text situations__text--light">
                        Wij streven naar een Rotterdam waarin de sociale norm verschuift van digitale afleiding naar
                        fysieke aanwezigheid. In de ideale situatie zijn jongeren zich volledig bewust van hun
                        reflexmatige smartphonegedrag en maken ze bewuste keuzes over wanneer technologie hun connectie
                        versterkt in plaats van hindert. De drempel voor spontaan en fysiek contact is verlaagd en
                        jongeren voelen zich sociaal weerbaar genoeg om gesprekken te voeren zonder de constante
                        veiligheid van een digitale buffer. Er ontstaat een gezonde digitale balans waarin de
                        thuissituatie weer een plek is van echte aandacht, waarbij ouders en jongeren de online
                        leefwereld samen navigeren in plaats van door technologie van elkaar gescheiden te worden. Door
                        de inzet van slimme interventies wordt de kwaliteit van de interactie tussen ouders en kinderen
                        hersteld en ontstaat er weer ruimte voor authentieke vriendschappen in de wijk. Ons doel is een
                        omgeving waarin elke jongere in Rotterdam weer met zelfvertrouwen en volle aandacht kan
                        deelnemen aan de fysieke samenleving.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Situations;