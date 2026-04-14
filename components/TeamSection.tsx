import Image from 'next/image';
import MaureenImg from '../public/maureen.svg';
import RayelImg from '../public/rayel.svg';
import CelineImg from '../public/celine.svg';
import AlejandroImg from '../public/alejandro.svg';
import ShiteshImg from '../public/shitesh.svg';
import LinkedinIcon from './icons/Icons';
import {type JSX} from "react";
import type TeamMember from "@/types/TeamMemberInterface";

const teamMembers: TeamMember[] = [
    {name: 'Maureen van Eijk', role: 'UX Designer', image: MaureenImg, linkedin: 'maureenvaneijk'},
    {name: 'Rayel Nabie', role: 'Software Developer', image: RayelImg, linkedin: 'rayelnabie'},
    {name: 'Celine Scova Righini', role: 'Data Scientist', image: CelineImg, linkedin: 'celine-s-righini'},
    {name: 'Alejandro Dullemond', role: 'Business & IT', image: AlejandroImg, linkedin: 'alejandrodullemond'},
    {name: 'Shitesh da Silva', role: 'Software Developer', image: ShiteshImg, linkedin: 'shitesh-jay-da-silva'},
];

const TeamSection: () => void = (): JSX.Element => {
    return (
        <section className="team" id="team">
            <div className="team__container">
                <h2 className="team__title">Het Team</h2>
                <div className="team__list">
                    {teamMembers.map((member: TeamMember): JSX.Element => (
                        <div className="team__member" key={member.name}>
                            <div className="team__image-wrapper">
                                <Image src={member.image} alt={`Foto van ${member.name}`} className="team__image"/>
                            </div>
                            <div className="team__info">
                                <h3 className="team__name">{member.name}</h3>
                                <p className="team__role">{member.role}</p>

                                <a
                                    href={`https://linkedin.com/in/${member.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="team__linkedin"
                                >
                                    <LinkedinIcon className="team__linkedin-icon"/>
                                    <span>{member.linkedin}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TeamSection;