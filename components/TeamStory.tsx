"use client";

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Vertel GSAP dat we de ScrollTrigger plugin willen gebruiken
gsap.registerPlugin(ScrollTrigger);

const TeamStory = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const flowerRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        // GSAP animatie: we animeren VANAF (from) schaal 0 naar de normale status
        gsap.from(flowerRef.current, {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)", // Geeft die lekkere organische "pop" (overshoot)
            scrollTrigger: {
                trigger: flowerRef.current,
                start: "top 80%", // Start de animatie als de bovenkant van de bloem op 80% van je schermhoogte is
                once: true, // Zorgt dat hij maar 1x afspeelt, net als daarnet!
            }
        });
    }, { scope: containerRef }); // Scope zorgt dat GSAP netjes opruimt als de component verdwijnt

    return (
        <section className="team-story" id="team-story" ref={containerRef}>
            <div className="team-story__container container">

                <div className="team-story__content">
                    <h2 className="team-story__title">Team story</h2>
                    <div className="team-story__text">
                        <p>
                            Wij zijn Team Fox, een interdisciplinaire groep studenten die met een
                            gezamenlijke missie voor de stad werkt.
                        </p>
                        <p>
                            Onze kracht zit in het combineren van inzichten vanuit vijf verschillende
                            perspectieven, waarbij we expertise uit design, IT, informatica, business & IT en
                            applied data science naadloos samenbrengen. Door deze verschillende achtergronden
                            aan elkaar te knopen, kijken we verder dan een standaard aanpak en werken we aan
                            een totaaloplossing die zowel technisch robuust als sociaal relevant is. Het als een vos
                            treden we hierbij op als slimme verkenners die scherp blijven op wat er echt speelt in
                            de wijk én wat jongeren nodig hebben voor daadwerkelijke verbinding.
                        </p>
                    </div>
                </div>

                <div className="team-story__animation">
                    <Image
                        ref={flowerRef} // GSAP kijkt nu direct naar de Image tag
                        src="/flower.svg"
                        alt="Decoratieve bloem"
                        width={250}
                        height={250}
                        // Geen extra classes meer nodig!
                    />
                </div>

            </div>
        </section>
    );
};

export default TeamStory;