
import { Link } from "react-router-dom";
import type { Workshop } from "../types/workshop";



interface WorkshopDetailProps {
    workshop: Workshop;
}

export function WorkshopDetail({ workshop }: WorkshopDetailProps) {
    return (
        <section className="py-24 lg:py-32 bg-bg">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <div>
                        <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6">
                        <span className="text-muted text-sm uppercase tracking-wide">
                            ¿De qué trata?
                        </span>

                        <h3 className="text-primary text-3xl lg:text-4xl font-semibold">
                            {workshop.title}
                        </h3>

                        <p className="text-primary max-w-xl">
                            {workshop.description}
                        </p>

                        <div className="pt-4">
                            <Link
                                to={`/workshop/${workshop.id}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="bg-accent text-primary px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer">
                                    Ver más
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
