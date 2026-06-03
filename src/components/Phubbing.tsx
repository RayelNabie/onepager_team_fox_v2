import type { JSX } from "react";

const Phubbing = (): JSX.Element => {
  return (
    <section className="phubbing">
      <div className="phubbing__content">
        {/* Phubbing */}
        <h2 className="phubbing__title">Phubbing</h2>
        <div className="phubbing__description">
          <p className="phubbing__text">
            Phubbing is het negeren van mensen om je heen door je aandacht op je smartphone te
            richten tijdens gezamenlijke momenten. In third places (informele ontmoetingsplekken
            buiten thuis en werk) gebeurt dit constant. Jongvolwassenen zitten fysiek samen maar
            zijn mentaal afwezig, wat leidt tot oppervlakkigere gesprekken en verminderde sociale
            verbondenheid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Phubbing;
