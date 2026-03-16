import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <Header/>
            
            <section id="team" className="team section">
                <div className="container">
                    <h2>Het Team</h2>
                    <p>Team content placeholder...</p>
                </div>
            </section>

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
