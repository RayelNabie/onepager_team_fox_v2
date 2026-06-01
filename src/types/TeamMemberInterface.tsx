import type { StaticImageData } from "next/image";

export default interface TeamMember {
  name: string;
  role: string;
  studentID: string;
  image: StaticImageData;
  linkedinLink: string;
  linkedinName: string;
}
