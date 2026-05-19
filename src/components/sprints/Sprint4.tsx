import DSIapp from "@public/DSI_app.svg"
import Phubbom from "@public/phubbom.svg";
import SmartAndSocialFest from "@public/smart_and_social_fest.svg"
import Sprint4Visual from "@public/sprint_4_visual.svg";
import TestingPhubbom2 from "@public/testing_phubbom.svg";
import Image from "next/image";
import type React from "react";
import type {JSX} from "react";
import SprintLayout, {SprintDivider} from "@/components/common/SprintLayout";

const Sprint4: () => React.JSX.Element = (): JSX.Element => {
  return (
    <SprintLayout
      sprintNumber={4}
      timelineLabel="Ideation, Create & Testing fase"
      visual={<Image src={Sprint4Visual} alt="Sprint 3 Visual" className="sprint-layout__visual"/>}
      footerTitle="Klaar voor de volgende stap"
      footerContent={<>
        <p>In de aankomende sprint gaan we ons prototype afronden tot een definitief ontwerp. Hierbij maken we gebruik van het ophalen en verwerken van de laatste feedback en voeren we extra testen uit om de gebruikerservaring te optimaliseren. Daarnaast richten we ons op het volledig werkend maken van de webapplicatie, zowel front- als backend en het technisch uitwerken van de interne werking van de Phubbom.</p>
        <p>Onze eind expositie is op 4 juni en we streven er naar om ons volledig uitgewerkt en werkend eindproduct te kunnen presenteren!</p>
      </>}
    >
      <div className="sprint3__col">
        <h4>Van gespreksstarter naar gedragsbreker</h4>
        <p>
          Na de feedback uit de eerste testfase van Sprint 3 hebben wij ons gericht op het verder visueel en technisch
          uitwerken van het prototype. De focus lag op het ontwikkelen van een compact en speels object dat eenvoudig
          meegenomen kon worden naar eventuele third spaces.</p>

        <h4>Visueel:</h4>
        <p>
          Voor het ontwerp van de bom zijn verschillende schetsen gemaakt, waarbij rekening werd gehouden met geluid,
          licht en de draagbaarheid van het object. Vanuit de schetsen is een definitief ontwerp ontstaan, dat
          vervolgens is uitgewerkt tot een 3D-model.</p>
        <h4>Technisch:</h4>
        <p>
          Op technisch vlak is er gekozen voor een AI-koppeling, waarmee er op basis van interesses van de gebruiker
          gepersonaliseerde vragen worden gegenereerd en deze vervolgens uitspreekt. Hiervoor is een webapplicatie
          ontwikkeld waarbij de gebruiker de mogelijkheid heeft om de groepsinteresses in te voeren, waarna er
          automatisch een vraag verschijnt met een tikkende timer op de achtergrond. Om het systeem betrouwbaar te
          houden, is er een back-updatabase toegevoegd met vooraf ingestelde interesses en vragen.<br/>
        </p>
        <p>De Phubbom bestaat uiteindelijk uit een 3D-geprint omhulsel met een speaker die de vragen hardop
          afspeelt.</p>
      </div>

      <SprintDivider direction="left" sprintNumber={3}/>

      <div className="sprint3__col sprint3__col--image-container">
        <Image
          src={Phubbom}
          alt="Phubbom"
          width={429}
          height={337}
          className="sprint3__image"
        />
        <Image
          src={DSIapp}
          alt="DSIapp"
          width={429}
          height={337}
          className="sprint3__image"
        />

      </div>

      <div className="sprint3__col sprint3__col--image-container">
        <Image
          src={SmartAndSocialFest}
          alt="Smart and social fest"
          width={429}
          height={337}
          className="sprint3__image"
        />
      </div>

      <SprintDivider direction="right" sprintNumber={4}/>

      <div className="sprint3__col">
        <h4>Tussenpresentaties @ Smart &Social Fest</h4>
        <p>
          Tijdens de tussenpresentatie op het Smart & Social Fest hebben wij ons concept aan medestudenten, docenten en
          bezoekers gepresenteerd door middel van posters, een videoclip en een interactieve demonstratie van de
          Phubbom. De ontvangen feedback gaf ons nieuwe inzichten in de beleving van het spel. Het concept werd positief
          opgevangen door het speelse karakter en de persoonlijke vragen. Tegelijkertijd kregen we waardevolle feedback
          over mogelijke verbeteringen in de samenwerking tussen de digitale app en de fysieke bom.
        </p>
      </div>

      <div className="sprint3__col">
        <h4>Feedback verwerken</h4>
        <p>
          Na de tussenpresentatie is er tijd genomen om de feedback te analyseren en te verwerken in nieuwe aanpassingen
          van het ontwerp. Hierbij lag de focus op het verbeteren van de samenwerking tussen de digitale webapp en de
          fysieke bom, zodat het spel vrijwel geheel fysiek werkt nadat de interesses digitaal zijn ingevoerd. Ons doel
          is om jongeren minder naar hun telefoon te laten grijpen en de ervaring juist zo fysiek mogelijk te maken. Op
          basis van deze inzichten zijn nieuwe schetsen ontwikkeld waarin verschillende aanpassingen zijn gemaakt aan de
          vorm en interactie van de pubbom.
        </p>
      </div>

      <SprintDivider direction="left" sprintNumber={4}/>

      <div className="sprint3__col sprint3__col--image-container">
        <Image
          src={TestingPhubbom2}
          alt="Testen van de phubbom"
          width={429}
          height={337}
          className="sprint3__image"
        />
        <h4>Testen</h4>
        <p>Het prototype is getest bij verschillende groepen om de gebruikswijze en beleving te kunnen evalueren. Tijdens
          de test hebben we de participanten het spel laten ervaren zonder in te grijpen, om te observeren hoe zij omgaan
          met zowel de digitale als de fysieke onderdelen van de bom. De ontvangen feedback gaf ons nieuwe inzichten in de
          interactie en bracht onduidelijkheden in het concept naar boven. Deze feedback wordt meegenomen in de verdere
          ontwikkeling van het prototype</p>
      </div>
    </SprintLayout>
  );
};

export default Sprint4;
