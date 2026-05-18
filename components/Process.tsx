"use client";

import React, {useState, useRef, type JSX} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

import Sprint0 from './sprints/Sprint0';
import Sprint1 from './sprints/Sprint1';
import Sprint2 from './sprints/Sprint2';
import Sprint3 from './sprints/Sprint3';

gsap.registerPlugin(ScrollTrigger);

const sprints: string[] = ["Sprint 0", "Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5"];

const Process: () => React.JSX.Element = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState("Sprint 3");
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP((): void => {
        gsap.from('.process__card', {
            y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {trigger: containerRef.current, start: "top 75%", once: true}
        });
    }, {scope: containerRef});

    const renderSprintContent: () => React.JSX.Element = (): JSX.Element => {
        switch (activeTab) {
            case "Sprint 0":
                return <Sprint0/>;
            case "Sprint 1":
                return <Sprint1/>;
            case "Sprint 2":
                return <Sprint2/>;
            case "Sprint 3":
                return <Sprint3/>;
            default:
                return <p>Selecteer een sprint om de inhoud te bekijken.</p>;
        }
    };

    return (
        <section className="process" id="proces" ref={containerRef}>
            <div className="process__container">
                <h2 className="process__title">Het proces</h2>
                <div>
                    <div className="process__controls">

                        {/* Mobile Dropdown */}
                        <div className="process__dropdown-wrapper">
                            <select
                                className="process__dropdown"
                                value={activeTab}
                                onChange={(e) => setActiveTab(e.target.value)}
                            >
                                {sprints.map((sprint) => (
                                    <option key={sprint} value={sprint}>
                                        {sprint}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Desktop Tabs */}
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
                    </div>

                    <div className="process__card">
                        <div className="process__card-inner">
                            {renderSprintContent()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
};

export default Process;