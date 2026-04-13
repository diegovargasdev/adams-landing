import { useEffect, useState } from "react";
import type { Activity } from "../types/workshop";
import { activities } from "../data/workshops";





export function ConocenosParticipa() {
    const [activeActivity, setActiveActivity] = useState<Activity | null>(null);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveActivity(null);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <section id="conocenos-y-participa" className="py-24 lg:py-32 bg-[#F8F7FF]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#977DA4] text-center mb-10">
                    CONÓCENOS Y PARTICIPA
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {activities.map((activity) => (
                        <button
                            key={activity.id}
                            onClick={() => setActiveActivity(activity)}
                            className="group block rounded-2xl overflow-hidden border border-[#DED8ED] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#977DA4] cursor-pointer"
                            aria-label={`Abrir detalles de ${activity.title}`}>
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className="h-full w-full object-scale-down transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <p className="absolute bottom-2 left-2 text-sm font-semibold text-white drop-shadow">
                                    {activity.subtitle}
                                </p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-[#3A3364]">{activity.title}</h3>
                            </div>
                        </button>
                    ))}
                </div>

                {activeActivity && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                        onClick={() => setActiveActivity(null)}
                    >
                        <div
                            className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-start justify-between">
                                <h3 className="text-2xl font-semibold text-[#3A3364]">{activeActivity.title}</h3>
                                <button
                                    onClick={() => setActiveActivity(null)}
                                    className="text-[#977DA4] hover:text-[#6C4F8A] font-bold"
                                    aria-label="Cerrar modal"
                                >
                                    ✕
                                </button>
                            </div>
                            <p className="text-sm text-[#6B638D] mt-1">{activeActivity.subtitle}</p>
                            <p className="mt-4 text-[#3A3364] leading-relaxed">{activeActivity.details}</p>

                            <div className="mt-6 text-right">
                                <button
                                    onClick={() => setActiveActivity(null)}
                                    className="rounded-lg bg-[#7CDB55] px-4 py-2 font-medium text-[#3A3364] hover:bg-[#6CC945]"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

