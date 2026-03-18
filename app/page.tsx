import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import TeamSection from "@/components/TeamSection";
import TeamStory from "@/components/TeamStory";
import TeamValues from "@/components/TeamValues";
import Situations from "@/components/Situations";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <Header/>
            <TeamSection/>
            <TeamStory/>
            <TeamValues/>
            <Situations/>
        </main>
    );
}
