"use client";
import React, {type JSX, useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {QuoteIcon} from "@/components/images/ImageLoader";

const DesignQuestion: () => React.JSX.Element = (): JSX.Element => {
    const scope = useRef<HTMLDivElement>(null);

    useGSAP((): void => {
        gsap.from('.design-question__header', {
            y: 30, opacity: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {trigger: scope.current, start: "top 85%", once: true}
        });
    }, {scope});

    return (
        <div className="design-question" ref={scope}>
            <div className="design-question__container">

                <h2 className="design-question__title">Ontwerpvraag</h2>

                <p className="design-question__quote">
                    Hoe kunnen we jongvolwassenen in Rotterdam tussen de 18 en 25 ondersteunen bij het verbreken
                    van phubbing-gewoontes, zodat zij binnen vriendengroepen tijdens het samenzijn in &#34;Third
                    Places&#34; de waarde van mentaal aanwezig zijn opnieuw gaan ervaren en kiezen voor contact
                    boven schermafleiding?
                </p>

            </div>

            <QuoteIcon className="design-question__quote-icon"/>
        </div>
    );
};

export default DesignQuestion;