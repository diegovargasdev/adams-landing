export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
}

export const socialLinks: SocialLink[] = [
    {
        id: "tiktok",
        name: "TikTok",
        url: "https://www.tiktok.com/@afa_i.a.p?_r=1&_t=ZS-93sIynIYNaG",
        icon: "/socialMedia/tiktokIcon.png"
    },
    {
        id: "instagram",
        name: "Instagram",
        url: "https://www.instagram.com/armoniafamiliar_iap/",
        icon: "/socialMedia/InstagramIcon.png"
    },
    {
        id: "facebook",
        name: "Facebook",
        url: "https://www.facebook.com/ArmoniaFamiliarIAP",
        icon: "/socialMedia/facebookIcon.png"
    },
    {
        id: "x",
        name: "X",
        url: "https://x.com/Armonia_FamIAP",
        icon: "/socialMedia/xIcon.png"
    },
    {
        id: "Whatsapp",
        name: "WhatsApp",
        url: "https://wa.me/5569741564",
        icon: "/socialMedia/whatsappIcon.png"
    },
    {
        id: "Email",
        name: "Email",
        url: "mailto:contacto@armoniafamiliar.com.mx",
        icon: "/socialMedia/emailIcon.png"
    }
];
