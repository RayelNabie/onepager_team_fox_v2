import Image from 'next/image';

const Sprint1 = () => {
    return (
        <>
            <div className="process__timeline">
                <Image
                    src="/sprint_1_visual.svg"
                    alt="Tijdlijn van de sprints"
                    width={1440}
                    height={150}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>

            <div className="process__content">
                <div className="process__text-column">
                    <h3 className="process__sprint-title">Sprint 1</h3>
                    <p className="process__sprint-subtitle">Research fase</p>
                    <p className="process__sprint-intro">
                        Deskresearch aan de hand van de volgende thema’s:
                    </p>

                    <div className="process__themes">
                        <div className="process__theme">
                            <h4>Thema 1 Negatieve Gevolgen en Sociale impact</h4>
                            <p>
                                Het in kaart brengen van de schadelijke effecten van phubbing op de kwaliteit
                                van gesprekken, het gevoel van sociale uitsluiting en de psychologische impact
                                op de groepsdynamiek.
                            </p>
                        </div>
                        <div className="process__theme">
                            <h4>Thema 2 Sociale Angst en de Drang</h4>
                            <p>
                                Het onderzoeken van de rol die sociale anxiety en de constante drang naar
                                digitale prikkels spelen bij het reflexmatig grijpen naar de smartphone.
                            </p>
                        </div>
                        <div className="process__theme">
                            <h4>Thema 3 De Impact van de Thuissituatie</h4>
                            <p>
                                Het analyseren van de invloed van ouders als rolmodel (parental phubbing) en hoe
                                een mogelijke cultuur- of communicatiekloof binnen het gezin jongeren richting
                                online verbinding drijft.
                            </p>
                        </div>
                        <div className="process__theme">
                            <h4>Thema 4: Oplossingsrichting en Bewustwording</h4>
                            <p>
                                Het identificeren van effectieve fysieke interventies en niet-digitale prikkels
                                die de reflexmatige drang naar de smartphone doorbreken en de actieve
                                bewustwording bij jongeren stimuleren.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="process__image-column">
                    <div className="process__image-wrapper">
                        <Image
                            src="/foto_gro-up.svg"
                            alt="Team aan het werk in Sprint 1"
                            width={400}
                            height={300}
                            className="process__image"
                        />
                        <Image
                            src="/flower.svg"
                            alt=""
                            width={60}
                            height={60}
                            className="process__flower-decoration"
                        />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Sprint1;