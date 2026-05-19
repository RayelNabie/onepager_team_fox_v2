"use client";

import type { JSX } from "react";
import { QuoteIcon } from "@/components/images/ImageLoader";

import useDesignQuestionAnimation from "@/hooks/useDesignQuestionAnimation";

const DesignQuestion = (): JSX.Element => {
  const containerRef = useDesignQuestionAnimation();

  return (
    <div className="design-question" ref={containerRef}>
      <div className="design-question__container">
        <h2 className="design-question__title">Ontwerpvraag</h2>

        <p className="design-question__quote">
          Hoe kunnen we jongvolwassenen in Rotterdam tussen de 18 en 25 ondersteunen bij het
          verbreken van phubbing-gewoontes, zodat zij binnen vriendengroepen tijdens het samenzijn
          in &#34;Third Places&#34; de waarde van mentaal aanwezig zijn opnieuw gaan ervaren en
          kiezen voor contact boven schermafleiding?
        </p>
      </div>

      <QuoteIcon className="design-question__quote-icon" />
    </div>
  );
};

export default DesignQuestion;
