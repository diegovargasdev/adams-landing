import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Workshop } from "../types/workshop";

interface WorkshopsCarouselProps {
    workshops: Workshop[];
    selectedIndex: number;
    onSelectWorkshop: (index: number) => void;
}

export function WorkshopsCarousel({
    workshops,
    selectedIndex,
    onSelectWorkshop,
}: WorkshopsCarouselProps) {
    const handlePrevious = () => {
        onSelectWorkshop(
            selectedIndex === 0 ? workshops.length - 1 : selectedIndex - 1
        );
    };

    const handleNext = () => {
        onSelectWorkshop(
            selectedIndex === workshops.length - 1 ? 0 : selectedIndex + 1
        );
    };

    return (
        <section id="workshops" className="py-24 lg:py-32 bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <h2 className="text-muted text-center text-3xl font-semibold mb-16">
                    Nuestros talleres
                </h2>

                <div className="relative">

                    <div className="flex items-center gap-6">

                        <button
                            onClick={handlePrevious}
                            className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition"
                            aria-label="Taller anterior"
                        >
                            <ChevronLeft className="w-6 h-6 cursor-pointer" />
                        </button>

                        <div className="flex-1 overflow-hidden">
                            <div
                                className="flex gap-6 transition-transform duration-300 ease-in-out "
                                style={{
                                    transform: `translateX(-${selectedIndex * 304}px)`,
                                }}
                            >
                                {workshops.map((workshop, index) => (
                                    <button
                                        key={workshop.id}
                                        onClick={() => onSelectWorkshop(index)}
                                        className={`flex-shrink-0 w-72 bg-bg rounded-xl overflow-hidden transition-all text-left cursor-pointer
                                            ${selectedIndex === index
                                                ? "ring-4 ring-accent shadow-xl scale-105"
                                                : "hover:shadow-lg"
                                            }
                                        `}
                                    >
                                        <div className="aspect-[4/3] overflow-hidden">
                                            Example of workshop image
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-primary font-semibold">
                                                {workshop.title}
                                            </h3>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={handleNext}
                            className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition"
                            aria-label="Siguiente taller"
                        >
                            <ChevronRight className="w-6 h-6 cursor-pointer" />
                        </button>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {workshops.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => onSelectWorkshop(index)}
                                className={`h-2 rounded-full  cursor-pointer transition-all ${index === selectedIndex
                                    ? "bg-accent w-8"
                                    : "bg-muted/40 w-2"
                                    }`}
                                aria-label={`Ir al taller ${index + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
