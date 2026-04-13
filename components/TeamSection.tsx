import Image from 'next/image';
import MaureenImg from '../public/maureen.svg';
import RayelImg from '../public/rayel.svg';
import CelineImg from '../public/celine.svg';
import AlejandroImg from '../public/alejandro.svg';
import ShiteshImg from '../public/shitesh.svg';
import LinkedinIcon from '../public/linkedin.svg';

const teamMembers = [
    {name: 'Maureen van Eijk', role: 'UX Designer', image: MaureenImg, linkedin: 'maureenvaneijk'},
    {name: 'Rayel Nabie', role: 'Software Developer', image: RayelImg, linkedin: 'rayelnabie'},
    {name: 'Celine Scova Righini', role: 'Data Scientist', image: CelineImg, linkedin: 'celine-s-righini'},
    {name: 'Alejandro Dullemond', role: 'Business & IT', image: AlejandroImg, linkedin: 'alejandrodullemond'},
    {name: 'Shitesh da Silva', role: 'Software Developer', image: ShiteshImg, linkedin: 'shitesh-jay-da-silva'},
];

const TeamSection = () => {
    return (
        <section className="team" id="team">
            <div className="team__container container">
                <h2 className="team__title">Het Team</h2>

                <div className="team__grid">
                    {teamMembers.map((member, index) => (
                        <div className="team__member" key={index}>
                            <div className="team__image-wrapper">
                                <Image
                                    src={member.image}
                                    alt={`Foto van ${member.name}`}
                                    width={160}
                                    height={160}
                                    className="team__image"
                                />
                            </div>

                            <h3 className="team__name">{member.name}</h3>
                            <p className="team__role">{member.role}</p>

                            <a
                                href={`https://linkedin.com/in/${member.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="team__linkedin"
                            >
                                <Image src={LinkedinIcon} alt="LinkedIn icon" width={16} height={16}/>
                                <span>{member.linkedin}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;