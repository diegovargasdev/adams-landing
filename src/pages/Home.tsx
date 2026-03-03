import { workshops } from "../data/workshops";
import { WorkshopsCarousel } from "../components/WorkshopsCarousel";
import { WorkshopDetail } from "../components/WorkshopDetail";
import { useState } from "react";
import { Hero } from "../components/Hero";
import { WhoWeAre } from "../components/WhoWeAre";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HelpSection } from "../components/HelpSection";


export function Home() {

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            element?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <Hero />
            <WhoWeAre />
            <WorkshopsCarousel
                workshops={workshops}
                selectedIndex={selectedIndex}
                onSelectWorkshop={setSelectedIndex}
            />
            <WorkshopDetail workshop={workshops[selectedIndex]} />
            <HelpSection />
        </>
    );
}