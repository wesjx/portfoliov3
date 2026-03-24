import ContactForm from "@/components/contact/contact-form";
import Footer from "@/components/footer";
import { About } from "@/components/freelance-page/freelance-about";
import { Contact } from "@/components/freelance-page/freelance-contact";
import { Differentiators } from "@/components/freelance-page/freelance-differentiators";
import { Hero } from "@/components/freelance-page/freelance-hero";
import { Projects } from "@/components/freelance-page/freelance-projects";
import { Services } from "@/components/freelance-page/freelance-services";
import Header from "@/components/header";
import { LanguageProvider } from "@/context/language-context";

export default function FreelancePage() {
    return (

        <>
            <LanguageProvider>
                <Header />
                <main className="min-h-screen bg-background">
                <Hero/> 
                <About />
                <Services />
                <Differentiators />
                <Projects/>
                <Contact/>
                </main>
                <Footer/>
            </LanguageProvider>
        </>
    )
}