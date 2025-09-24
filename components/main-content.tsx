import AboutMeCard from "./about-me-card";
import TecnologiesCard from "./tecnologies-card";
import LetsTalkCard from "./lets-talk-card";
import MainCards from "./main-card";
import ProjectsCard from "./projects-card";

export default function MainContent() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-4 md:py-12">
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                <AboutMeCard />
                <ProjectsCard />
                <MainCards />
                <TecnologiesCard/>
                <LetsTalkCard/>
            </div>
        </main>
    )
}