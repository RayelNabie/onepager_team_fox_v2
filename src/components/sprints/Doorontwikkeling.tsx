import Sprint5Visual from "@public/sprint_5_visual.svg";
import Image from "next/image";
import type React from "react";
import type { JSX } from "react";
import SprintLayout from "@/components/common/SprintLayout";

const Doorontwikkeling: () => React.JSX.Element = (): JSX.Element => {
  return (
    <section className="doorontwikkeling">
      <Image src={Sprint5Visual} alt="Sprint 5 Visual" className="sprint-layout__visual" />
      <h3> Advies aan vervolgteams </h3>

      <h4>Begin met wat er al is</h4>
      <p>
        De code, technische documentatie, onderzoeksresultaten en alle sprintrapportages zijn
        beschikbaar via de projectpagina. Lees die eerst goed door voordat je iets aanpast of
        verbetert. Veel keuzes die wij hebben gemaakt zijn bewust gebaseerd op onderzoek en tests,
        en zonder die context loop je het risico dingen terug te draaien die juist goed werkten. De
        One-Pager is daarvoor het beste startpunt: die geeft in één oogopslag een overzicht van de
        ontwerpvraag, de scope en de voortgang per sprint.
      </p>

      <h4>Hardware verbeteren</h4>
      <p>
        De huidige behuizing is 3D-geprint, wat voor een prototype prima werkt maar niet schaalbaar
        is. Als je meerdere exemplaren wil maken, is het de moeite waard om alternatieven zoals
        spuitgieten te onderzoeken. Dat verlaagt de kosten per eenheid fors zodra je een mal hebt.
        Daarnaast verdient de speaker aandacht: de geluidskwaliteit is functioneel, maar kan beter,
        zeker voor gebruik op luidruchtigere plekken.
      </p>

      <h4>Stille modus ontwikkelen</h4>
      <p>
        De Phubbom werkt nu volledig op geluid, wat niet in elke omgeving past. In rustigere
        settings waar geluid storend is, valt een groot deel van de interventie weg. Een ledstrip,
        e-ink display of haptische feedback via trillingen zijn relatief betaalbare manieren om het
        object ook daar bruikbaar te maken. De trillingen zitten technisch al deels in de bom, maar
        een volwaardige stille modus hadden we niet meer de tijd voor.
      </p>

      <h4>API-limieten oplossen</h4>
      <p>
        De huidige versie draait op eigen tokens en is beperkt tot ongeveer 20 requests per dag, wat
        voor een prototype voldoende is maar voor structureel gebruik niet houdbaar. Er zijn
        meerdere richtingen om dit op te lossen. Een vooraf gegenereerde offline vragenbank
        elimineert het limiet vrijwel volledig, maar maakt het spel minder persoonlijk. Sponsoring
        via SOL of Gro-up is een andere optie, waarbij zij de kosten van een premium API-abonnement
        op zich nemen. Tot slot is een eenvoudig abonnementsmodel denkbaar. Welke route het beste
        past hangt af van hoe en door wie de Phubbom uiteindelijk wordt ingezet.
      </p>

      <h4>Breder testen</h4>
      <p>
        Onze fieldtests waren kleinschalig en voornamelijk binnen bekende kringen, wat waardevolle
        maar niet representatieve inzichten oplevert. Test met groepen die je niet kent, want
        bekenden zijn sneller bereid mee te werken en geven vaker sociaal wenselijke antwoorden.
        Wissel ook van context: een sportkantine, studentencafé of jongerencentrum leveren
        waarschijnlijk andere resultaten op dan een terras. Herhaal sessies bovendien met dezelfde
        groep om te zien of het effect beklijft of juist afneemt als de nieuwigheid ervan af is.
      </p>

      <h4>Schaalbaarheid en verspreiding</h4>
      <p className="sprint5__doorontwikkeling">
        SOL heeft al een netwerk in meerdere steden en directe toegang tot de third spaces waar de
        Phubbom het meest relevant is. Als zij de Phubbom inzetten als onderdeel van hun bestaande
        aanbod, hoef je het wiel niet opnieuw uit te vinden qua distributie. Verken die mogelijkheid
        vroeg in het proces, want het bepaalt welke eisen je aan het product moet stellen op het
        gebied van robuustheid en gebruiksgemak.
      </p>
    </section>
  );
};

export default Doorontwikkeling;
