import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
    const { t } = useTranslation();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden mt-auto">
            {/* Animated Wave Effect */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-neon-purple/20"
                    ></path>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                            Hussain.
                        </h2>
                        <p className="text-gray-400 max-w-xs leading-relaxed">
                            {t('footer.desc')}
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-semibold text-white">{t('footer.quick_links')}</h3>
                        <ul className="space-y-2">
                            {['home', 'projects', 'certifications', 'contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'home' ? '/' : `/${item}`}
                                        className="text-gray-400 hover:text-neon-blue transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-neon-purple opacity-0 group-hover:opacity-100 transition-all" />
                                        {t(`nav.${item}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Socials & Interaction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-semibold text-white">{t('footer.follow_me')}</h3>
                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ y: -5, scale: 1.1 }}
                                href="https://www.linkedin.com/in/hussain-alhumaidi-6726b334a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-transparent transition-all shadow-[0_0_15px_rgba(0,119,181,0.3)]"
                            >
                                <FaLinkedin size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5, scale: 1.1 }}
                                href="https://github.com/Darkness947"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#333] hover:border-transparent transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                            >
                                <FaGithub size={20} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p className="flex items-center gap-1">
                        &copy; {new Date().getFullYear()} {t('footer.name')} {t('footer.rights')}
                        <span className="hidden md:flex items-center gap-1 ml-2 border-l border-gray-700 pl-2 rtl:border-r rtl:border-l-0 rtl:pl-0 rtl:pr-2">
                            | {t('footer.made_with')} <FaHeart className="text-red-500 animate-pulse" />
                        </span>
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="px-4 py-2 bg-white/5 hover:bg-neon-purple/20 border border-white/10 rounded-full flex items-center gap-2 hover:border-neon-purple/50 transition-all group"
                    >
                        <span>{t('footer.top')}</span>
                        <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none" />
        </footer>
    );
}

export default Footer;
