import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const goToSection = (sectionId: string) => {
        navigate("/", { state: { scrollTo: sectionId } });
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-primary">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Link to="/">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <img src="/logo/logo.png" alt="Logo" className="w-10 h-10" />
                            </div>
                        </Link>

                        <Link to="/">
                            <span className="text-white font-medium">
                                Armonía Familiar
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => goToSection("who-we-are")}
                            className="text-white/90 hover:text-white transition-colors cursor-pointer"
                        >
                            Sobre nosotros
                        </button>

                        <button
                            onClick={() => goToSection("workshops")}
                            className="text-white/90 hover:text-white transition-colors cursor-pointer"
                        >
                            Talleres
                        </button>

                        <button
                            onClick={() => goToSection("help")}
                            className="text-white/90 hover:text-white transition-colors cursor-pointer"
                        >
                            Contáctanos
                        </button>
                    </nav>

                    {/* CTA Desktop */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => goToSection("help")}
                            className="bg-accent text-primary px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition cursor-pointer"
                        >
                            ¿Necesitas ayuda?
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-6 space-y-4">
                        <button
                            onClick={() => goToSection("who-we-are")}
                            className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
                        >
                            Sobre nosotros
                        </button>

                        <button
                            onClick={() => goToSection("workshops")}
                            className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
                        >
                            Talleres
                        </button>

                        <button
                            onClick={() => goToSection("help")}
                            className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
                        >
                            Contáctanos
                        </button>

                        <button
                            onClick={() => goToSection("help")}
                            className="w-full bg-accent text-primary px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition mt-4"
                        >
                            ¿Necesitas ayuda?
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
