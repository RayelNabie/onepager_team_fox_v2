import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import TeamSection from "@/components/TeamSection";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <Header/>
            <TeamSection/>

            <section id="situatie" className="situation section">
                <div className="container">
                    <h2>Huidige & Gewenste situatie</h2>
                    <p>Situation content placeholder...</p>
                </div>
            </section>

            <section id="ontwerpvraag" className="design-challenge section">
                <div className="container">
                    <h2>Ontwerpvraag</h2>
                    <p>Ontwerpvraag content placeholder...</p>
                </div>
            </section>

            <section id="sprintplanning" className="scope section">
                <div className="container">
                    <h2>Sprintplanning</h2>
                    <p>Sprintplanning content placeholder...</p>
                </div>
            </section>
        </main>
    );
}
