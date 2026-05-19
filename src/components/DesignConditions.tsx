"use client";

import {type JSX} from 'react';
import Image from "next/image";
import PinkLine from "@public/pink_line.svg";
import type DesignConditionsInterface from "@/types/DesignConditionsInterface";

import useDesignConditionsAnimation from "@/hooks/useDesignConditionsAnimation";

const conditions: DesignConditionsInterface[] = [
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

const DesignConditions = (): JSX.Element => {
    const containerRef = useDesignConditionsAnimation();

    return (
        <section className="design-conditions">

            {/* Pink Wiggle */}
            <div className="situations__wiggles" aria-hidden="true">
                <Image src={PinkLine} alt="" className="design-conditions__wiggle design-conditions__wiggle--pink"/>
            </div>

            {/* Design conditions */}
            <div className="design-conditions__container" ref={containerRef}>
                <h2 className="design-conditions__title">Randvoorwaarden</h2>
                <div className="design-conditions__list">
                    {conditions.map((item: DesignConditionsInterface, index: number): JSX.Element => (
                        <div className="design-conditions__condition" key={index}>
                            <h4 className="design-conditions__condition-title">{item.title}</h4>
                            <p className="design-conditions__condition-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignConditions;
