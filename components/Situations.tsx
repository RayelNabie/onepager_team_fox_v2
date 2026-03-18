"use client";

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Situations = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. Roze blok (komt van links)
        gsap.from('.situations__card--current', {
            x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: containerRef.current, start: "top 70%", once: true }
        });

        // 2. Groene blok (komt van rechts)
        gsap.from('.situations__card--desired', {
            x: 50, opacity: 0, duration: 0.8, delay: 0.2, ease: "power3.out",
            scrollTrigger: { trigger: containerRef.current, start: "top 60%", once: true }
        });

        // 3. Vosje (popt in beeld tegelijk met het groene blok)
        gsap.from('.situations__fox', {
            scale: 0, opacity: 0, duration: 0.5, delay: 0.4, ease: "back.out(1.5)",
            scrollTrigger: { trigger: containerRef.current, start: "top 60%", once: true }
        });

        // 4. Pijl (fade in en gaat oneindig bouncen)
        gsap.from('.situations__arrow', {
            opacity: 0, scale: 0.5, duration: 0.5, delay: 0.6,
            scrollTrigger: { trigger: containerRef.current, start: "top 60%", once: true }
        });

        gsap.to('.situations__arrow img', {
            y: 12, x: 8, rotation: 3, repeat: -1, yoyo: true, duration: 1.2, ease: "sine.inOut"
        });
    }, { scope: containerRef });

    return (
        <section className="situations" id="situaties" ref={containerRef}>
            <div className="situations__wiggles" aria-hidden="true">
                <div className="situations__wiggle situations__wiggle--orange">
                    {/* We gebruiken een gewone img tag voor achtergrond-SVGs, dat schaalt makkelijker mee */}
                    <img src="/orange_line.svg" alt="" />
                </div>
            </div>

            <div className="situations__container container">

                {/* ELEMENT 1: Roze blok (Rij 1, Links) */}
                <div className="situations__card situations__card--current">
                    <h2 className="situations__title">Huidige situatie</h2>
                    <p className="situations__text">
                        In Rotterdam is de spreiding in de samenleving steeds duidelijker. Dit fenomeen houdt in dat
                        iemand een groot deel van de dag leeft vanuit een smartphone. Ruim 26 procent van de
                        Rotterdammers denkt niet bewust na over hun eigen schermgebruik. Jongeren stappen bovendien
                        vaak in een virtuele wereld die hen afleidt van de fysieke realiteit. Dit zorgt voor een
                        kloof tussen de online en offline wereld en maakt het moeilijker om echt contact te
                        maken met de omgeving.
                    </p>
                </div>

                {/* ELEMENT 2: Pijl (Overlapt Rij 1 en 2, Midden) */}
                <div className="situations__arrow">
                    <Image src="/arrow-down.svg" alt="Pijl naar beneden" width={80} height={80} />
                </div>

                {/* ELEMENT 3: Vosje (Rij 2, net voor het groene blok) */}
                <div className="situations__fox">
                    <Image src="/fox_visual.svg" alt="Zittend vosje" width={128} height={174} />
                </div>

                {/* ELEMENT 4: Groene blok (Rij 2, Rechts) */}
                <div className="situations__card situations__card--desired">
                    <h2 className="situations__title situations__title--light">Gewenste situatie</h2>
                    <p className="situations__text situations__text--light">
                        Wij creëren een Rotterdamse community waar verbinding en welzijn in de stad centraal
                        staan. Dit bereiken we door offline ontmoetingen te stimuleren, zodat we de barrières van
                        technologie en schermtijd overbruggen. In plaats van vluchten in de virtuele wereld, bouwen
                        we aan fysiek contact, levendige en betrokken relaties in de wijk. Daardoor ontstaat een
                        ecosysteem waarin iedereen zich onderdeel voelt van de Rotterdamse cultuur.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Situations;