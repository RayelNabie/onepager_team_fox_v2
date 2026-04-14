"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DesignScope = () => {
    const scope = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.design-question__card', {
            y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
            scrollTrigger: { trigger: scope.current, start: "top 80%", once: true }
        });
    }, { scope });

    return (
        <div className="design-question__scopes-section" ref={scope}>
            <div className="container">
                <div className="design-question__scopes">
                    <div className="design-question__card">
                        <h3 className="design-question__card-title">Binnen de scope</h3>
                        <p className="design-question__card-text">Het ontwerpen van een offline, fysieke interventie...</p>
                    </div>
                    <div className="design-question__card">
                        <h3 className="design-question__card-title">Buiten de scope</h3>
                        <p className="design-question__card-text">Aanpassingen in digitaal beleid...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignScope;