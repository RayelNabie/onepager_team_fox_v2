"use client";

import type { JSX } from "react";

import useDesignScopeAnimation from "@/hooks/useDesignScopeAnimation";

const DesignScope = (): JSX.Element => {
  const containerRef = useDesignScopeAnimation();

  return (
    <div className="design-scope" ref={containerRef}>
      <div className="design-scope__card">
        {/* Within Scope */}
        <h3 className="design-scope__card-title">Binnen de scope</h3>
        <p className="design-scope__card-text">
          De scope richt zich op jongvolwassenen (18-25 jaar) in Rotterdam binnen de context van
          'Third Spaces'. Het project behelst een fysieke, curatieve interventie die
          phubbing-gewoontes in vriendengroepen doorbreekt en de gezamenlijke mentale aanwezigheid
          versterkt via speelse elementen.
        </p>
      </div>
      <div className="design-scope__card">
        {/* Outside Scope */}
        <h3 className="design-scope__card-title">Buiten de scope</h3>
        <p className="design-scope__card-text">
          Buiten de scope vallen personen buiten de leeftijdscategorie 18-25 jaar, de thuissituatie
          en medische zorg voor smartphoneverslaving. Puur digitale oplossingen en interventies
          zonder sociale focus vallen er ook buiten. Ons prototype is alleen bedoeld voor informele
          third spaces, niet voor klaslokalen of werkomgevingen, en is geen tool voor diepgaande
          gesprekken.
        </p>
      </div>
    </div>
  );
};

export default DesignScope;
