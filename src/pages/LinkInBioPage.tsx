
import { Instagram, Facebook, Music2, Twitter } from "lucide-react";
import { socialLinks } from "../data/socialLink";

const iconMap: Record<string, any> = {
    instagram: Instagram,
    facebook: Facebook,
    music: Music2,
    twitter: Twitter
};

export default function LinkInBioPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 py-12">

            {/* Grid */}
            <div className="w-full max-w-md grid grid-cols-2 gap-8 py-8">
                {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon];

                    return (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center justify-center gap-3 py-8 rounded-2xl bg-[#F3EBEB] shadow-md transition-all hover:shadow-xl hover:scale-[1.04] active:scale-95"
                        >
                            {Icon && (
                                <Icon
                                    size={34}
                                    className="text-[#3A3364] animate-float"
                                />
                            )}

                            <span className="text-sm font-medium text-[#3A3364]">
                                {link.name}
                            </span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
