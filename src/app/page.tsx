import DesignConditions from "@/components/DesignConditions";
import DesignQuestion from "@/components/DesignQuestion";
import DesignScope from "@/components/DesignScope";
import Image from "next/image";
import PinkLine from "@public/pink_line.svg";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Situations from "@/components/Situations";
import TeamSection from "@/components/TeamSection";
import TeamStory from "@/components/TeamStory";
import TeamValues from "@/components/TeamValues";
import Phubbing from "@/components/Phubbing";
import Phubbom from "@/components/Phubbom";
import InsightCards from "@/components/InsightCards";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <TeamSection />
      <TeamStory />
      <TeamValues />
      <Phubbing />
      <Phubbom />
      <InsightCards />
      <Situations />
      <div className="design-wrapper">
        <Image src={PinkLine} alt="" className="design-wrapper__wiggle" aria-hidden={true} />
        <DesignQuestion />
        <DesignScope />
      </div>
      <DesignConditions />
      <Process />
    </main>
  );
}
