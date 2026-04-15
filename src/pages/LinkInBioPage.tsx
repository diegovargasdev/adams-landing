import { socialLinks } from "../data/socialLink";

export default function LinkInBioPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-16">

            <div className="text-center mb-16">
                <h1 className="text-3xl font-semibold text-[#3A3364] tracking-tight">
                    Conecta con nosotros
                </h1>
                <p className="text-sm text-gray-500 mt-2">
                    Encuentra nuestras redes aquí
                </p>
            </div>

            <div className="w-full max-w-md grid grid-cols-2 gap-8">
                {socialLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center gap-3 py-8 rounded-2xl bg-[#F3EBEB] shadow-md transition-all hover:shadow-xl hover:scale-[1.04] active:scale-95"
                    >
                        <img
                            src={link.icon}
                            alt={link.name}
                            className="w-20 h-20 animate-float"
                        />
                        <span className="text-sm font-medium text-[#3A3364]">
                            {link.name}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}
