import { workshops } from "../data/workshops";
import { WorkshopsCarousel } from "../components/WorkshopsCarousel";
import { WorkshopDetail } from "../components/WorkshopDetail";
import { useState } from "react";
import { Hero } from "../components/Hero";
import { WhoWeAre } from "../components/WhoWeAre";

export function Home() {
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
        </>
    );
}