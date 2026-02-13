import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className="bg-primary">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                            <span className="text-primary text-lg">
                                <img src="/logo/logo.png" alt="Logo" className="w-10 h-10" />
                            </span>
                        </div>
                        <span className="text-white font-medium">
                            Armonía Familiar
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection("who-we-are")}
                            className="text-white/90 hover:text-white transition-colors"
                        >
                            Sobre nosotros
                        </button>
                        <button
                            onClick={() => scrollToSection("workshops")}
                            className="text-white/90 hover:text-white transition-colors"
                        >
                            Talleres
                        </button>
                        <button
                            onClick={() => scrollToSection("help")}
                            className="text-white/90 hover:text-white transition-colors"
                        >
                            Contáctanos
                        </button>
                    </nav>

                    {/* CTA Desktop */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => scrollToSection("help")}
                            className="bg-accent text-primary px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
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
                            onClick={() => scrollToSection("who-we-are")}
                            className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
                        >
                            Sobre nosotros
                        </button>
                        <button
                            onClick={() => scrollToSection("workshops")}
                            className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
                        >
                            Talleres
                        </button>
                        <button
                            onClick={() => scrollToSection("help")}
                            className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
                        >
                            Contáctanos
                        </button>

                        <button
                            onClick={() => scrollToSection("help")}
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
