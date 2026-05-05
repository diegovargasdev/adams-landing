import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    MapPin,
} from "lucide-react";
import { workshops } from "../data/workshops";
import { Breadcrumbs } from "../components/Breadcrumbs";

export default function WorkshopDetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const workshop = workshops.find(
        (w) => w.id === Number(id)
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (workshop?.workshopImages?.length || 1));
        }, 3000); // Cambia de imagen cada 3 segundos
        return () => clearInterval(interval);
    }, [workshop?.workshopImages?.length]);

    if (!workshop) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F3EBEB]">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl text-[#3A3364]">
                        Taller no encontrado
                    </h1>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-[#7CDB55] text-[#3A3364] px-6 py-3 rounded-lg"
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-[#F3EBEB]">
            {/* Breadcrumbs */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 p-8">
                <Breadcrumbs
                    items={[
                        { label: "Inicio", href: "/" },
                        { label: "Talleres", href: "/#workshops" },
                        { label: workshop.title }
                    ]}
                />
            </section>

            {/* Hero */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="w-full h-full rounded-2xl overflow-hidden ">
                        <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-4xl text-[#3A3364]">
                            {workshop.title}
                        </h1>

                        <p className="text-[#3A3364] leading-relaxed">
                            {workshop.description}
                        </p>

                        {/* Info block */}
                        <div className="bg-[#A9AABC] rounded-xl p-6 space-y-3">
                            <div className="flex items-center gap-3 text-[#3A3364]">
                                <MapPin size={20} />
                                {workshop.modality}
                            </div>
                        </div>
                        {/* CTA */}
                        <a href="https://forms.gle/mVaQMqCKmAsR5YtQ7" target="_blank" rel="noopener noreferrer">
                            <button className="w-full bg-[#7CDB55] text-[#3A3364] py-4 rounded-lg text-lg hover:bg-[#6CC945] transition-colors cursor-pointer">
                                Quiero asistir
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-6 space-y-6">
                    <h2 className="text-3xl text-[#977DA4]">
                        Sobre este taller
                    </h2>
                    <p className="text-[#3A3364] leading-relaxed">
                        {workshop.about}
                    </p>
                </div>
            </section>

            {/* Objectives */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl text-[#977DA4] mb-8">
                        Objetivos del taller
                    </h2>

                    <ul className="grid md:grid-cols-2 gap-4">
                        {workshop.objectives?.map((obj, i) => (
                            <li
                                key={i}
                                className="bg-[#F3EBEB] p-4 rounded-lg flex gap-3"
                            >
                                <span className="w-2 h-2 mt-2 rounded-full bg-[#7CDB55]" />
                                <span className="text-[#3A3364]">{obj}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl text-[#977DA4] mb-8">
                        Contenido del taller
                    </h2>

                    <ul className="space-y-4">
                        {workshop.content?.map((item, i) => (
                            <li
                                key={i}
                                className="bg-white p-4 rounded-lg flex gap-4"
                            >
                                <span className="bg-[#FCC44E] text-[#3A3364] px-3 py-1 rounded">
                                    {i + 1}
                                </span>
                                <span className="text-[#3A3364]">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Testimonials */}
            {/* <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl mb-8 text-center text-[#977DA4]">
                        Lo que dicen nuestros participantes
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                text: "Este taller cambió mi perspectiva. Me ayudó a entender mejor mis emociones y a conectar con otras personas que pasaban por situaciones similares.",
                                author: "María G.",
                                role: "Participante"
                            },
                            {
                                text: "Un espacio seguro y lleno de empatía. Los facilitadores son increíbles y realmente se preocupan por el bienestar de todos.",
                                author: "Anónimo",
                                role: "Participante"
                            },
                            {
                                text: "Las herramientas que aprendí aquí me han ayudado en mi vida diaria. Recomiendo este taller a cualquiera que busque apoyo emocional.",
                                author: "Carlos R.",
                                role: "Participante"
                            }
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl space-y-4 shadow-md bg-[#F3EBEB]"
                            >
                                <p className="leading-relaxed italic text-[#3A3364]">
                                    "{testimonial.text}"
                                </p>
                                <div className="pt-4 border-t border-[#A9AABC]">
                                    <p className="text-[#977DA4]">{testimonial.author}</p>
                                    <p className="text-sm text-[#A9AABC]">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Galería de Taller */}
            {workshop.workshopImages && workshop.workshopImages.length > 0 && (
                <section className="py-16 bg-[#F3EBEB]">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl mb-12 text-center text-[#977DA4]">
                            Galería de nuestro taller
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[0, 1, 2].map((offset) => {
                                const imageIndex = (currentImageIndex + offset) % workshop.workshopImages!.length;
                                return (
                                    <div
                                        key={offset}
                                        className="overflow-hidden rounded-xl shadow-lg h-80 cursor-pointer group"
                                    >
                                        <img
                                            src={workshop.workshopImages![imageIndex]}
                                            alt={`Taller imagen ${imageIndex + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex justify-center gap-2 mt-8">
                            {workshop.workshopImages!.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex
                                        ? "bg-[#7CDB55] w-8"
                                        : "bg-[#A9AABC]"
                                        }`}
                                    aria-label={`Ir a imagen ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Contact and Assistance Section */}
            <section className="py-16 bg-[#F3EBEB]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                            <img src="/logo/us.jpeg" alt="Imagen de contacto" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl text-[#977DA4]">
                                ¿Necesitas más información?
                            </h2>
                            <p className="text-lg leading-relaxed text-[#3A3364]">
                                Estamos aquí para apoyarte. Si tienes preguntas sobre nuestros talleres o necesitas orientación,
                                no dudes en contactarnos. Nuestro equipo está disponible para brindarte el apoyo que necesitas.
                            </p>
                            <div className="space-y-3 text-[#3A3364]">
                                <p>📧 Email: contacto@armoniafamiliar.com.mx</p>
                                <p>📱 Teléfono: +52 (55) 6974-1564</p>
                                <p>📍 Dirección: Calle Descartes 70, Col. Anzures, Alcaldia Miguel Hidalgo, C.P.11590 , CDMX</p>
                            </div>
                            <a href="https://forms.gle/mVaQMqCKmAsR5YtQ7" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-4 rounded-lg text-lg font-semibold bg-[#7CDB55] text-white hover:bg-[#6CC945] transition-colors">
                                    Agendar cita
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
