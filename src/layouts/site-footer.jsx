import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = [
    { label: "VỀ CHÚNG TÔI", href: "/about-us" },
    { label: "TCBC", href: "/press" },
    { label: "T&C", href: "/terms-of-use" },
    { label: "LIÊN HỆ", href: "/contact-us" },
];

const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/ONEEsportsVN/", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/oneesports", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/oneesports/", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "https://www.youtube.com/oneesports", label: "Youtube" },
];

const Footer = () => {
    return (
        <footer className="bg-[#15172e] pt-0 pb-3 mt-8 text-gray-300">
            <div className="container mx-auto px-4 w-[1350px] max-w-full">
                <div className="w-full mx-auto pt-4">
                    <div className="uppercase font-bold text-sm text-[#cbd2d9] tracking-wide border-b border-gray-700 pb-2">
                        ONE ESPORTS VIETNAM – LÃNH ĐỊA CỦA ESPORTS
                    </div>
                </div>
                {/* Phần còn lại của footer */}
                <div className="w-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-4">
                    <div className="flex flex-wrap gap-8">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium tracking-wide hover:text-yellow-400 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex gap-5 mt-2 md:mt-0">
                        {socialLinks.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-6 text-xs text-gray-400 pl-4 md:pl-0">
                    © ONE ESPORTS
                </div>
            </div>
        </footer>
    );
};

export default Footer;