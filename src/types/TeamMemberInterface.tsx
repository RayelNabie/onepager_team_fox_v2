import type {StaticImageData} from "next/image";

export default interface TeamMember {
    name: string;
    role: string;
    image: StaticImageData;
    linkedin: string;
}