import DesignConditions from "@/components/DesignConditions";
import DesignQuestion from "@/components/DesignQuestion";
import DesignScope from "@/components/DesignScope";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Situations from "@/components/Situations";
import TeamSection from "@/components/TeamSection";
import TeamStory from "@/components/TeamStory";
import TeamValues from "@/components/TeamValues";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <TeamSection />
      <TeamStory />
      <TeamValues />
      <Situations />
      <DesignQuestion />
      <DesignScope />
      <DesignConditions />
      <Process />
    </main>
  );
}
