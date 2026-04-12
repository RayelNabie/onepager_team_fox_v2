"use client";

import {useState, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

import Sprint1 from './sprints/Sprint1';
import Sprint2 from './sprints/Sprint2';

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

    const renderSprintContent = () => {
        switch (activeTab) {
            case "Sprint 1":
                return <Sprint1/>;
            case "Sprint 2":
                return <Sprint2 />;
            case "Sprint 3":
                return <p>Inhoud voor Sprint 3 volgt nog...</p>;
            default:
                return <p>Selecteer een sprint om de inhoud te bekijken.</p>;
        }
    };

    return (
        <section className="process" id="proces" ref={containerRef}>
            <div className="process__container container">
                <h2 className="process__title">Het proces</h2>

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
                    {renderSprintContent()}
                </div>
            </div>
        </section>
    );
};

export default Process;