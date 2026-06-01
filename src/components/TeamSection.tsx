import AlejandroImg from "@public/image_alejandro.svg";
import CelineImg from "@public/image_celine.svg";
import MaureenImg from "@public/image_maureen.svg";
import RayelImg from "@public/image_rayel.svg";
import ShiteshImg from "@public/image_shitesh.svg";
import Image from "next/image";
import type React from "react";
import type {JSX} from "react";
import {LinkedinIcon} from "@/components/images/ImageLoader";
import type TeamMember from "@/types/TeamMemberInterface";

const teamMembers: TeamMember[] = [
  {
    name: "Maureen van Eijk",
    role: "UX Designer",
    studentID: "1032520",
    image: MaureenImg,
    linkedinLink: "maureenvaneijk",
    linkedinName: "maureenvaneijk",
  },
  {
    name: "Rayel Nabie",
    role: "Software Developer",
    studentID: "1002893",
    image: RayelImg,
    linkedinLink: "rayelnabie",
    linkedinName: "rayelnabie",
  },
  {
    name: "Celine Scova Righini",
    role: "Data Scientist",
    studentID: "1077277",
    image: CelineImg,
    linkedinLink: "celine-s-righini-647a16326",
    linkedinName: "celine-s-righini",
  },
  {
    name: "Alejandro Dullemond",
    role: "Business & IT",
    studentID: "1073316",
    image: AlejandroImg,
    linkedinLink: "alejandro-dullemond-341ba4251",
    linkedinName: "alejandro-dullemond",
  },
  {
    name: "Shitesh da Silva",
    role: "Software Developer",
    studentID: "1083242",
    image: ShiteshImg,
    linkedinLink: "shitesh-jay-da-silva-8a0782246",
    linkedinName: "shitesh-jay-da-silva",
  },
];

const TeamSection: () => React.JSX.Element = (): JSX.Element => {
  return (
    <section className="team" id="team">
      <div className="team__container">
        {/* Team Title */}
        <h2 className="team__title">Het Team</h2>

        {/* Team Members */}
        <div className="team__list">
          {teamMembers.map(
            (member: TeamMember): JSX.Element => (
              <div className="team__member" key={member.name}>
                <Image
                  src={member.image}
                  alt={`Foto van ${member.name}`}
                  className="team__image"
                />
                <div className="team__info">
                  <h3 className="team__name">{member.name}</h3>
                  <p className="team__role">{member.role}</p>
                  <p className="team__role">{member.studentID}</p>

                  <a
                    href={`https://linkedin.com/in/${member.linkedinLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team__linkedin"
                  >
                    <LinkedinIcon className="team__linkedin-icon"/>
                    <span>{member.linkedinName}</span>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
