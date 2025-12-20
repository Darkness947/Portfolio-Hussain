import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { cn } from "../utils/cn";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    const routes = [
        { name: t('nav.home'), path: "/" },
        { name: t('nav.projects'), path: "/Projects" },
        { name: t('nav.certifications'), path: "/Certifications" },
        { name: t('nav.contact'), path: "/Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                    Hussain Alhumaidi
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                    {routes.map((route) => (
                        <Link
                            key={route.path}
                            to={route.path}
                            className={cn(
                                "text-sm font-medium transition-colors duration-300 hover:text-neon-blue relative group",
                                location.pathname === route.path ? "text-neon-blue" : "text-gray-300"
                            )}
                        >
                            {route.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full",
                                location.pathname === route.path ? "w-full" : ""
                            )} />
                        </Link>
                    ))}
                    <button
                        onClick={toggleLanguage}
                        className="min-w-[80px] px-3 py-1 text-xs font-bold border border-white/20 rounded-full hover:bg-white/10 transition-all text-neon-purple flex items-center justify-center gap-2"
                    >
                        {i18n.language === 'en' ? '🇸🇦 AR' : '🇺🇸 EN'}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="min-w-[60px] px-2 py-1 text-xs font-bold border border-white/20 rounded-full hover:bg-white/10 transition-all text-neon-purple flex items-center justify-center gap-1"
                    >
                        {i18n.language === 'en' ? 'AR' : 'EN'}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-6 space-y-4">
                            {routes.map((route) => (
                                <Link
                                    key={route.path}
                                    to={route.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium transition-colors hover:text-neon-blue",
                                        location.pathname === route.path ? "text-neon-blue" : "text-gray-300"
                                    )}
                                >
                                    {route.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
