
import { ContactInfo } from "./ContactInfo";

export function HelpSection() {
    return (
        <section
            id="help"
            className="py-24 lg:py-32 bg-[#A9AABC]/20"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Imagen */}
                    <div>
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <img src="/logo/us.jpeg" alt="Imagen de apoyo emocional" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Texto */}
                    <div className="space-y-6">

                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#977DA4]">
                            Estamos para acompañarte
                        </h2>

                        <p className="text-[#3A3364] leading-relaxed">
                            Ya sea que busques apoyo emocional, mejorar tus relaciones
                            o conectar con una comunidad solidaria, en Armonía Familiar
                            encontrarás un espacio seguro y profesional.
                        </p>

                        <p className="text-[#3A3364] leading-relaxed">
                            Nuestros servicios son confidenciales, compasivos y
                            accesibles. No tienes que afrontar tus desafíos solo.
                        </p>

                        {/* Bullet confianza */}
                        <div className="pt-2 space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#7CDB55]" />
                                <span className="text-[#3A3364]">
                                    Facilitadores y consejeros profesionales
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#7CDB55]" />
                                <span className="text-[#3A3364]">
                                    Ambiente seguro y acogedor
                                </span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-6">
                            <a
                                href="https://wa.me/5569741564"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#7CDB55] text-[#3A3364] px-8 py-4 rounded-lg font-medium hover:bg-[#6CC945] transition-all duration-300 hover:scale-105 shadow-md"
                            >
                                Contáctanos por WhatsApp
                            </a>
                        </div>
                    </div>

                </div>

                {/* Separador */}
                <div className="mt-20 border-t border-[#977DA4]/20 pt-16">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-semibold text-[#3A3364]">
                            Información de contacto
                        </h3>
                    </div>

                    <ContactInfo />
                </div>

            </div>
        </section>
    );
}