import React, {type JSX} from "react";
import Image from 'next/image';
import FotoTakumi from '@public/Foto_Takumi.svg';
import Sprint0Pic1 from '@public/sprint0_picture_1.svg';
import Sprint0Pic2 from '@public/sprint0_picture_2.svg';
import Sprint0Pic3 from '@public/sprint0_picture_3.svg';
import Hackathon1 from '@public/hackathon_1.svg';
import Hackathon2 from '@public/hackathon_2.svg';
import Sprint0Visual from '@public/sprint_0_visual.svg';
import SprintLayout, {SprintDivider} from "../common/SprintLayout";

const Sprint0: () => React.JSX.Element = (): JSX.Element => {
  return (
    <SprintLayout
      sprintNumber={0}
      timelineLabel="Hackathon"
      visual={<Image src={Sprint0Visual} alt="Sprint 0 Visual" className="sprint-layout__visual"/>}
      footerTitle="Klaar voor de volgende stap"
      footerContent="Sprint 0 was echt heel erg inzichtelijk en diende eigenlijk als een soort mini projectje als voorproefje hoe het daadwerkelijke project zou gaan. We hebben de samenwerking binnen het team meteen op de proef gesteld en kinderziektes er snel tussenuit kunnen halen."
    >
      {/* Sectie 1: Elkaar leren kennen */}
      <div className="sprint0__col sprint0__col--left">
        <h4 className="sprint0__intro">Elkaar leren kennen</h4>
        <p>
          In Sprint 0 ging het er voor Team Fox vooral om dat we elkaar beter leerden kennen. Vooral omdat we een
          heel nieuw groepje waren. Voor een goede samenwerking is een goede basis nodig. Daarom zijn voor
          teambuilding naar de Markthal in Rotterdam gegaan. We hebben daar superlekker ramen gegeten bij Takumi!
          Het was super gezellig en tijdens het eten was het ijs meteen gebroken.
        </p>
      </div>

      <SprintDivider direction="left" sprintNumber={0}/>

      <div className="sprint0__col sprint0__col--image sprint0__col--right">
        <div className="sprint0__image-grid">
          <Image src={FotoTakumi} alt="Team bij Takumi" width={429} height={334} className="sprint0__image"/>
        </div>
      </div>

      {/* Sectie 2: De Hackathon */}
      <div className="sprint0__col sprint0__col--image sprint0__col--left">
        <div className="sprint0__image-grid">
          <Image src={Sprint0Pic1} alt="Sprint 0 foto 1" width={429} height={334} className="sprint0__image"/>
          <Image src={Sprint0Pic2} alt="Sprint 0 foto 2" width={429} height={334} className="sprint0__image"/>
          <Image src={Sprint0Pic3} alt="Figma schermen" width={429} height={572} className="sprint0__image"/>
        </div>
      </div>

      <SprintDivider direction="right" sprintNumber={0}/>

      <div className="sprint0__col sprint0__col--text sprint0__col--right">
        <h4>De Hackathon</h4>
        <p className="sprint0__intro">Problemen oplossen</p>
        <p>
          Problemen oplossen Na het etentje was het tijd voor de hackathon. We besloten ons te focussen op de
          probleemstelling van Digital Child Rights. Zij focussen zich vooral op de digitale veiligheid en ethisch
          gebruik van telefoons door kinderen. Na veel brainstormen en een uitgebreide mindmap te maken kwamen we
          uit op een herkenbaar probleem: te veel schermtijd en eindeloos doomscrollen. Hier wilde we zelf helpen
          met het reguleren van schermtijd. Want geen schermtijd is ook niet de oplossing. Veel kinderen zitten
          urenlang op hun telefoon en dat is volgens onderzoek van Reading between the lines slecht voor ze.
        </p>

        <p className="sprint0__intro">Van tekening naar echt app</p>
        <p>
          Om de allerbeste oplossing te bedenken, deden we een brainstorm-spel dat &#39;Crazy 8&#39; heet. Je vouwt een blaadje
          in acht vakjes en tekent in 8 minuten 8 snelle ideeën! Daarna gingen we stemmen door stipjes te plakken bij de
          leukste schetsen (dat noemen ze &#39;dot voting&#39;). Met het winnende idee deden we nóg een keer een Crazy 8 om het
          nog beter te maken. Na een tweede stemronde hebben we de vetste stukjes van de ideeën gecombineerd tot één
          superidee!
        </p>
        <p>
          Daarna hebben we dit concept digitaal heel mooi nagemaakt in het programma Figma. We hebben schermen
          ontworpen
          voor de app en een coole poster gemaakt.
        </p>
      </div>

      {/* Sectie 3: Van een tekening naar een echte app */}
      <div className="sprint0__col sprint0__col--text sprint0__col--left">
        <div className="sprint0__ons-idee">
          <h4>Ons idee: Van Swipe naar Life</h4>
          <p>
            Daarom bedachten wij het concept: &#34;Van Swipe naar Life&#34;.
            Dit is speciaal voor kinderen onder de 13 jaar. We bedachten een voorbeeld-persoon: Gio van 11 jaar. Gio zit
            de hele dag vastgeplakt aan TikTok en Fortnite en heeft daar altijd strijd over thuis. Ouders pakken vaak
            telefoons af als straf, maar wij wilden het juist omdraaien. Geen straf, maar beloningen!
          </p>
        </div>

        <div className="sprint0__hoe-werkt-het">
          <h4>Hoe werkt het?</h4>
          <ul>
            <li><strong>Missies doen:</strong> In plaats van doelloos swipen, kunnen kinderen &apos;missies&apos; doen.
              Bijvoorbeeld even helpen met
              de afwas of een uur buiten spelen.
            </li>
            <li><strong>Punten scoren:</strong> Met die missies verdien je punten in de app.</li>
            <li><strong>Sparen voor de leukste dingen:</strong> In een speciale shop in de app kun je jouw punten
              inwisselen. Bijvoorbeeld voor een extra uurtje gamen, een Roblox-party met vrienden, of je kunt ze
              opsparen voor iets groters zoals een nieuwe PlayStation-controller!
            </li>
          </ul>
        </div>
      </div>

      <SprintDivider direction="left" sprintNumber={0}/>

      <div className="sprint0__col sprint0__col--image sprint0__col--right">
        <div className="sprint0__image-wrapper">
          <Image src={Hackathon1} alt="De Hackathon 1" width={429} height={334} className="sprint0__image"/>
          <Image src={Hackathon2} alt="De Hackathon 2" width={429} height={334} className="sprint0__image"/>
        </div>
      </div>
    </SprintLayout>
  )
}

export default Sprint0;