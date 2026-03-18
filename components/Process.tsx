"use client";

import {useState, useRef} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const sprints = ["Sprint 0", "Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5"];

const Process = () => {
    const [activeTab, setActiveTab] = useState("Sprint 1");
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.process__card', {
            y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {trigger: containerRef.current, start: "top 75%", once: true}
        });
    }, {scope: containerRef});

    return (
        <section className="process" id="proces" ref={containerRef}>
            <div className="process__container container">

                <h2 className="process__title">Het proces</h2>

                {/* De Tabbladen */}
                <div className="process__tabs">
                    {sprints.map((sprint) => (
                        <button
                            key={sprint}
                            className={`process__tab ${activeTab === sprint ? 'process__tab--active' : ''}`}
                            onClick={() => setActiveTab(sprint)}
                        >
                            {sprint}
                        </button>
                    ))}
                </div>

                {/* De grote beige content-kaart */}
                <div className="process__card">

                    {/* De visuele tijdlijn (jouw geëxporteerde SVG) */}
                    <div className="process__timeline">
                        <img src="/sprints_visual.svg" alt="Tijdlijn van de sprints"/>
                    </div>

                    {/* De inhoud (tekst + foto) */}
                    <div className="process__content">

                        {/* Linker kolom: Tekst */}
                        <div className="process__text-column">
                            <h3 className="process__sprint-title">Sprint 1</h3>
                            <p className="process__sprint-subtitle">Research fase</p>
                            <p className="process__sprint-intro">
                                Deskresearch aan de hand van de volgende thema’s:
                            </p>

                            <div className="process__themes">
                                <div className="process__theme">
                                    <h4>Thema 1 Negatieve Gevolgen en Sociale impact</h4>
                                    <p>
                                        Het in kaart brengen van de schadelijke effecten van phubbing op de kwaliteit
                                        van gesprekken, het gevoel van sociale uitsluiting en de psychologische impact
                                        op de groepsdynamiek.</p>
                                </div>
                                <div className="process__theme">
                                    <h4>Thema 2 Sociale Angst en de Drang</h4>
                                    <p>Het onderzoeken van de rol die sociale anxiety en de constante drang naar
                                        digitale prikkels spelen bij het reflexmatig grijpen naar de smartphone</p>
                                </div>
                                <div className="process__theme">
                                    <h4>Thema 3 De Impact van de Thuissituatie</h4>
                                    <p>
                                        Het analyseren van de invloed van ouders als rolmodel (parental phubbing) en hoe
                                        een mogelijke cultuur- of communicatiekloof binnen het gezin jongeren richting
                                        online verbinding drijft.</p>
                                </div>
                                <div className="process__theme">
                                    <h4>Thema 4: Oplossingsrichting en Bewustwording</h4>
                                    <p>
                                        Het identificeren van effectieve fysieke interventies en niet-digitale prikkels
                                        die de reflexmatige drang naar de smartphone doorbreken en de actieve
                                        bewustwording bij jongeren stimuleren.</p>
                                </div>
                                {/* Voeg hier de rest van je thema's toe */}
                            </div>
                        </div>

                        {/* Rechter kolom: Foto met decoratie */}
                        <div className="process__image-column">
                            <div className="process__image-wrapper">
                                <Image
                                    src="/foto_gro-up.svg"
                                    alt="Team aan het werk in Sprint 1"
                                    width={400}
                                    height={300}
                                    className="process__image"
                                />
                                {/* Het decoratieve bloemetje */}
                                <Image
                                    src="/flower.svg"
                                    alt=""
                                    width={60}
                                    height={60}
                                    className="process__flower-decoration"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Process;