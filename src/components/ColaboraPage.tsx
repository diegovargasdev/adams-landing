import { Users, HeartHandshake, GraduationCap } from "lucide-react";
import { ContactInfo } from "./ContactInfo";

export default function ColaboraPage() {
    return (
        <main className="bg-[#F3EBEB]">

            {/* HERO */}
            <section className="py-20 bg-white text-center px-6">
                <h1 className="text-4xl md:text-5xl text-[#3A3364] mb-6">
                    Forma parte de nuestro equipo
                </h1>
                <p className="max-w-2xl mx-auto text-[#3A3364] leading-relaxed">
                    Únete a nuestro programa y contribuye activamente al bienestar emocional
                    de nuestra comunidad. Tu participación puede marcar una diferencia real.
                </p>
            </section>

            {/* OPCIONES */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl text-center text-[#977DA4] mb-12">
                    Modalidades de colaboración
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Voluntariado */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
                        <HeartHandshake className="text-[#7CDB55] mb-4" size={40} />
                        <h3 className="text-xl text-[#3A3364] mb-4">
                            Voluntariado
                        </h3>
                        <p className="text-[#3A3364] leading-relaxed">
                            Participa activamente en talleres, apoyo logístico y acompañamiento
                            emocional en nuestras actividades comunitarias.
                        </p>
                    </div>

                    {/* Servicio Social */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
                        <Users className="text-[#7CDB55] mb-4" size={40} />
                        <h3 className="text-xl text-[#3A3364] mb-4">
                            Servicio Social
                        </h3>
                        <p className="text-[#3A3364] leading-relaxed">
                            Realiza tu servicio social con impacto real, desarrollando
                            habilidades profesionales en un entorno humano y colaborativo.
                        </p>
                    </div>

                    {/* Prácticas */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
                        <GraduationCap className="text-[#7CDB55] mb-4" size={40} />
                        <h3 className="text-xl text-[#3A3364] mb-4">
                            Prácticas Profesionales
                        </h3>
                        <p className="text-[#3A3364] leading-relaxed">
                            Aplica tus conocimientos académicos en proyectos reales,
                            adquiriendo experiencia significativa en intervención social.
                        </p>
                    </div>

                </div>
            </section>

            {/* REQUISITOS */}
            <section className="py-20 bg-white px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl text-[#977DA4] mb-8 text-center">
                        Requisitos generales
                    </h2>

                    <ul className="space-y-4 text-[#3A3364]">
                        <li>• Compromiso y responsabilidad.</li>
                        <li>• Interés genuino en el bienestar comunitario.</li>
                        <li>• Disponibilidad mínima acordada.</li>
                        <li>• Carta de presentación o solicitud formal (según modalidad).</li>
                    </ul>
                </div>
            </section>

            {/* BENEFICIOS */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl text-[#977DA4] mb-8 text-center">
                    Beneficios de colaborar
                </h2>

                <div className="grid md:grid-cols-2 gap-6 text-[#3A3364]">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        ✔ Desarrollo de habilidades profesionales.
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        ✔ Experiencia comprobable.
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        ✔ Constancia de participación.
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        ✔ Impacto social real.
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-20 bg-white px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl text-[#977DA4] mb-6">
                        Estamos para servirte
                    </h2>

                    <p className="text-[#3A3364] mb-12 max-w-2xl mx-auto">
                        Si tienes dudas sobre el proceso de voluntariado,
                        servicio social o prácticas profesionales,
                        no dudes en comunicarte con nosotros.
                    </p>

                    <ContactInfo />
                </div>
            </section>
        </main>
    );
}