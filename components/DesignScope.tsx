"use client";
import React, {type JSX, useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const DesignScope: () => React.JSX.Element = (): JSX.Element => {
    const scope = useRef<HTMLDivElement>(null);

    useGSAP((): void => {
        gsap.from('.design-scope__card', {
            y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
            scrollTrigger: {trigger: scope.current, start: "top 80%", once: true}
        });
    }, {scope});

    return (
        <div className="design-scope" ref={scope}>
            <div className="design-scope__card">

                {/* Within Scope */}
                <h3 className="design-scope__card-title">Binnen de scope</h3>
                <p className="design-scope__card-text">De reikwijdte van dit project richt zich specifiek op
                    jongvolwassenen in de leeftijdscategorie van 18 tot 25 jaar binnen de regio Rotterdam.
                    Hierbij ligt de nadruk op een curatieve aanpak waarbij bestaande phubbing-gewoontes op een
                    directe manier worden doorbroken binnen de sociale context van vriendengroepen. De
                    interventie is ontworpen voor gebruik in zogenaamde &#39;Third Spaces&#39;, oftewel publieke
                    ontmoetingsplekken zoals terrassen, café&#39;s en jongerenhubs. Centraal in de oplossing staat
                    het realiseren van een fysiek object dat door middel van speelse elementen de mentale
                    aanwezigheid versterkt en een actieve gezamenlijke focus afdwingt, waardoor de drempel voor
                    spontaan sociaal contact wordt verlaagd.</p>
            </div>
            <div className="design-scope__card">

                {/* Outside Scope */}
                <h3 className="design-scope__card-title">Buiten de scope</h3>
                <p className="design-scope__card-text">Buiten de kaders van dit onderzoek vallen doelgroepen
                    jonger dan 18 jaar en volwassenen ouder dan 25 jaar, waarbij ook de specifieke thuissituatie
                    of de interactie tussen ouders en kinderen niet langer tot het onderzoeksveld behoort. Er
                    wordt geen medische of klinische hulp geboden voor zware smartphoneverslaving en het project
                    beperkt zich geografisch strikt tot de stad Rotterdam. Tevens worden er geen digitale
                    platforms ontwikkeld die het fysieke gesprek pogen te vervangen; oplossingen die uitsluitend
                    gericht zijn op het beperken van schermtijd zonder een expliciete sociale focus worden niet
                    in het ontwerp meegenomen. De focus ligt hiermee puur op de directe sociale interactie en
                    niet op individueel smartphonegebruik buiten een groepscontext..</p>
            </div>
        </div>
    );
};

export default DesignScope;