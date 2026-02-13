import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
    Calendar,
    Clock,
    MapPin,
} from "lucide-react";
import { workshops } from "../data/workshops";
import { Breadcrumbs } from "../components/Breadcrumbs";

export default function WorkshopDetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const workshop = workshops.find(
        (w) => w.id === Number(id)
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    <div className="w-full h-[350px] bg-gradient-to-br from-[#977DA4] to-[#7CDB55] flex items-center justify-center">
                        <span className="text-[#F3EBEB] text-xl">Imagen de apoyo emocional</span>
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
                                <Calendar size={20} />
                                {workshop.date}
                            </div>
                            <div className="flex items-center gap-3 text-[#3A3364]">
                                <Clock size={20} />
                                {workshop.time}
                            </div>
                            <div className="flex items-center gap-3 text-[#3A3364]">
                                <MapPin size={20} />
                                {workshop.modality}
                            </div>
                        </div>

                        {/* CTA */}
                        <button className="w-full bg-[#7CDB55] text-[#3A3364] py-4 rounded-lg text-lg hover:bg-[#6CC945] transition-colors">
                            Quiero asistir
                        </button>
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
                        Este taller está diseñado para brindar un espacio seguro,
                        acompañamiento emocional y herramientas prácticas para la vida diaria.
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
            <section className="py-16 bg-white">
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
            </section>

            {/* Contact and Assistance Section */}
            <section className="py-16 bg-[#F3EBEB]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                            <div className="w-full h-[350px] bg-gradient-to-br from-[#977DA4] to-[#7CDB55] flex items-center justify-center">
                                <span className="text-[#F3EBEB] text-xl">Imagen de apoyo emocional</span>
                            </div>
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
                                <p>📧 Email: contacto@centrodeapoyo.org</p>
                                <p>📱 Teléfono: (55) 1234-5678</p>
                                <p>📍 Dirección: Calle Principal #123, Ciudad</p>
                            </div>
                            <button className="px-8 py-4 rounded-lg text-lg font-semibold bg-[#7CDB55] text-white hover:bg-[#6CC945] transition-colors">
                                Agendar cita
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
