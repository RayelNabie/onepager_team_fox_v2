import Image from 'next/image';
import Sprint2Visual from '../../public/sprint_2_visual.svg';
import Brainstormsessie from '../../public/brainstormsessie.svg';
import LiftExperiment from '../../public/lift_experiment.svg';
import PrototypeTussenonsje from '../../public/prototype_tussenonsje.svg';

const Sprint2 = () => {
    return (
        <>
            <div className="process__timeline">
                <Image src={Sprint2Visual} alt="Tijdlijn van de sprints" width={1036} height={200} style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="process__content process__content--sprint2">
                <div>
                    <h1 className="process__sprint-title">Sprint 2</h1>

                    <div className="sprint2-grid">
                        <div className="sprint2-timeline-label">
                            Ideation<br/>fase
                        </div>

                        <div className="sprint2-col">
                            <h4> De koerswijziging</h4>
                            <p>
                                Na de waardevolle feedback uit Sprint 1 hebben we een belangrijke knoop doorgehakt. In
                                plaats van phubbing alleen te voorkomen, richten we ons nu op het verbreken van
                                bestaande
                                gewoontes. Deze verschuiving naar een curatieve aanpak vroeg om een nieuwe doelgroep:
                                jongvolwassenen in Rotterdam tussen de 18 en 25. Zij ervaren dagelijks de frictie tussen
                                hun
                                digitale en fysieke leefwereld. Onze nieuwe ontwerpvraag richt zich op het herontdekken
                                van
                                de waarde van mentaal aanwezig zijn binnen vriendengroepen, waarbij we zoeken naar een
                                oplossing die aansluit bij hun leefwereld.
                            </p>
                        </div>
                        <div className="sprint2-divider sprint2-divider--left">
                            <div className="sprint2-stalk"></div>
                            <div className="sprint2-dot"></div>
                        </div>
                        <div className="sprint2-col">
                            <Image src={Brainstormsessie} alt="Brainstormen" width={400}
                                   height={300} className="process__image"/>
                        </div>

                        <div className="sprint2-col">
                            <Image src={LiftExperiment} alt="UX Experiment" width={400}
                                   height={300} className="process__image"/>
                        </div>
                        <div className="sprint2-divider sprint2-divider--right">
                            <div className="sprint2-stalk"></div>
                            <div className="sprint2-dot"></div>
                        </div>
                        <div className="sprint2-col">
                            <h4>Het Liftexperiment</h4>
                            <p>Om onze aannames over onbewust gedrag te toetsen, hebben we een uitgebreid experiment
                                uitgevoerd in twee verschillende liftomgevingen binnen de Hogeschool Rotterdam. Het doel
                                was
                                om te onderzoeken hoe de fysieke aanwezigheid van een smartphone de sociale dynamiek
                                beïnvloedt. We hebben hierbij twee verschillende scenario&apos;s getest:</p>
                            <h4>Test 1</h4>
                            <p>Terwijl wij als tweetal een gesprek voerden, observeerden we de reactie van de andere
                                aanwezigen. Hieruit bleek dat mensen die op hun telefoon zaten vrijwel niets meekregen
                                van
                                de interactie naast hen, zij zaten volledig in hun eigen bubbel. Mensen zonder telefoon
                                bleken daarentegen veel meer in het moment te zitten en de sociale signalen om hen heen
                                op
                                te vangen.</p>
                            <h4>Test 2</h4>
                            <p>In dit scenario gingen we zelf op onze telefoon zitten scrollen zodra er anderen de lift
                                betraden. De resultaten waren opvallend: bijna alle proefpersonen grepen direct ook naar
                                hun
                                eigen smartphone. Dit bevestigde onze aanname dat de telefoon vaak wordt gebruikt als
                                reflexmatige sociale buffer om ongemakkelijke stiltes te vermijden.</p>
                        </div>

                        <div className="sprint2-col">
                            <h4>Prototype: &#39;Tussenonsje&#39;</h4>
                            <p>
                                Deze inzichten leidden tot ons eerste low-fidelity prototype: &#39;Tussenonsje&#39;. Dit
                                is
                                een
                                fysiek interactiebord dat momenteel op de derde verdieping van locatie Wijnhaven staat.
                                Met
                                vragen die je aan het denken zetten en herkenbare situaties nudgen we studenten om hun
                                gedachten te delen op post-its in plaats van te vluchten in hun scherm. Via een QR-code
                                koppelen willen we dit koppelen aan een app-concept waar studenten zelf input kunnen
                                geven
                                voor nieuwe vragen. We testen momenteel of er meer behoefte is aan diepgaande
                                persoonlijke
                                vragen of aan laagdrempelige situaties waarin men elkaar om advies kan vragen.
                            </p>
                        </div>
                        <div className="sprint2-divider sprint2-divider--left">
                            <div className="sprint2-stalk"></div>
                            <div className="sprint2-dot"></div>
                        </div>
                        <div className="sprint2-col">
                            <Image src={PrototypeTussenonsje} alt="Prototype" width={400} height={300}
                                   className="process__image"/>
                        </div>

                    </div>

                    <div className="sprint2-footer">
                        <h4 className="process__sprint-subtitle">Klaar voor de volgende stap</h4>
                        <p>In de volgende fase gaan we de resultaten van onze lopende enquêtes bij SOL en Gro-up
                            verwerken
                            om onze kwantitatieve onderbouwing te versterken. Daarnaast zullen we
                            het &#39;Tussenonsje&#39; verder
                            itereren op basis van de A/B-testresultaten op school. Ons doel voor Sprint 3 is om de
                            interventie zo te verfijnen dat deze de sociale norm in de stad weer een stapje richting
                            echte,
                            fysieke aandacht verschuift.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sprint2;