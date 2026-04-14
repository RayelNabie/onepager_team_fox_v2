"use client";
import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const conditions = [
    {
        title: "Fysiek karakter",
        text: "Het ontwerp moet een tastbaar object bevatten dat de visuele en fysieke aandacht opeist om digitale notificaties te overstemmen."
    },
    {
        title: "groepsdeelname",
        text: "De werking van de oplossing moet afhankelijk zijn van de inzet van de gehele vriendengroep."
    },
    {
        title: "Toegankelijkheid",
        text: "De interventie moet laagdrempelig, begrijpelijk en bruikbaar zijn voor jongeren met uiteenlopende achtergronden en taalniveaus."
    },
    {
        title: "Geen kosten",
        text: "Er mag geen financiële drempel zijn voor de doelgroep om deel te nemen aan de interventie."
    },
    {
        title: "Speelsheid",
        text: "Het ontwerp moet gebruikmaken van uitdagende of competitieve elementen die aansluiten bij de belevingswereld van de doelgroep."
    },
    {
        title: "Haalbaarheid",
        text: "Het prototype moet binnen de resterende weken van het semester technisch en organisatorisch gerealiseerd en getest kunnen worden."
    }
];

const DesignConditions = () => {
    const scope = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.design-conditions__condition', {
            y: 20, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
            scrollTrigger: {trigger: scope.current, start: "top 85%", once: true}
        });
    }, {scope});

    return (
        <div className="design-conditions" ref={scope}>
            <h2 className="design-conditions__title">Randvoorwaarden</h2>
            <div className="design-conditions__list">
                {conditions.map((item, index) => (
                    <div className="design-conditions__condition" key={index}>
                        <h4 className="design-conditions__condition-title">{item.title}</h4>
                        <p className="design-conditions__condition-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesignConditions;