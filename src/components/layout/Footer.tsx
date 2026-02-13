export function Footer() {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">

                    {/* Brand and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                                <span className="text-primary text-lg">❤</span>
                            </div>
                            <span className="font-medium">
                                Armonía Familiar
                            </span>
                        </div>

                        <p className="text-white/80 max-w-xs">
                            Organización que brinda apoyo emocional y talleres comunitarios.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Contáctanos</h4>
                        <div className="space-y-2 text-white/80 text-sm">
                            <p>Email: support@safespace.org</p>
                            <p>Teléfono: (555) 123-4567</p>
                            <p>Línea de apoyo: 1-800-555-HELP</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Síguenos</h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                                aria-label="Facebook"
                            >
                                <span className="text-white">f</span>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                                aria-label="X"
                            >
                                <span className="text-white">𝕏</span>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                                aria-label="Instagram"
                            >
                                <span className="text-white">in</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
                        <p>
                            © 2026 Armonía Familiar. Organización sin fines de lucro.
                        </p>

                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">
                                Aviso de privacidad
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Términos
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
