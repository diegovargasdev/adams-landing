
import { socialLinks } from "../../data/socialLink";
import { useNavigate } from "react-router-dom";


export function Footer() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* Brand and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <img src="/logo/logo.png" alt="Logo" className="w-10 h-10" />
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
                            <p>Email: contacto@armoniafamiliar.org</p>
                            <p>Teléfono: +52 (55) 6974-1564</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Síguenos</h4>
                        <div className="flex gap-4 flex-wrap">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.id}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition hover:scale-110"
                                    aria-label={social.name}
                                >
                                    <img
                                        src={social.icon}
                                        alt={social.name}
                                        className="w-5 h-5 object-contain"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Work With Us */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Trabaja con nosotros</h4>
                        <p className="text-white/80 text-sm">
                            ¿Te gustaría formar parte de nuestra misión y generar impacto positivo?
                        </p>
                        <button
                            onClick={() => {
                                navigate('/colabora');
                                window.scrollTo(0, 0);
                            }}
                            className="bg-accent text-primary cursor-pointer px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
                            Ver vacantes
                        </button>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
                        <p>
                            © {currentYear} Armonía Familiar.
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
