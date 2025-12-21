import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaJava, FaJs, FaCode, FaGamepad, FaPaintBrush, FaRocket, FaHtml5, FaCss3Alt, FaPython, FaUnity } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiBootstrap, SiTypescript, SiMongodb } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

import imgDarkness from '../assets/prosimg/pros2.png';
import imgPortfolio from '../assets/prosimg/portfolio-new.png';
import imgSchedule from '../assets/prosimg/pros1.png';
import imgAlgo from '../assets/prosimg/algo.png';

const techStack = [
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
    { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
    { icon: <FaJava className="text-red-500" />, name: "Java" },
    { icon: <TbBrandCSharp className="text-purple-600" />, name: "C#" },
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    { icon: <FaPython className="text-yellow-300" />, name: "Python" },
    { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <FaUnity className="text-white" />, name: "Unity" },
];

const AnimatedCounter = ({ value, suffix = "+" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const rounded = useTransform(springValue, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return (
        <span ref={ref} className="flex">
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

function About() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const serviceCards = [
        { icon: <FaCode />, title: "service_frontend", desc: "service_frontend_desc", color: "from-blue-500 to-cyan-400" },
        { icon: <FaGamepad />, title: "service_game", desc: "service_game_desc", color: "from-purple-500 to-pink-500" },
        { icon: <FaPaintBrush />, title: "service_ui", desc: "service_ui_desc", color: "from-orange-500 to-red-500" }
    ];

    const stats = [
        { value: 1, label: "stats_years" },
        { value: 8, label: "stats_projects" },
        { value: 1000, label: "stats_commits" }
    ];

    return (
        <div className="min-h-screen text-white overflow-hidden pb-20 font-sans">
            {/* Hero Section */}
            <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-neon-purple/20 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute top-1/4 left-1/4 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-neon-blue/20 blur-[50px] md:blur-[80px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    <h2 className="text-xl md:text-2xl text-neon-blue font-mono mb-4">
                        {t('hero.greeting', "Hello, I'm")}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                        Hussain Alhumaidi
                    </h1>

                    <div className="h-20 md:h-24 overflow-hidden relative">
                        <motion.div
                            animate={{ y: [0, -40, -80, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", times: [0, 0.3, 0.6, 1] }}
                            className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
                        >
                            <div className="h-10 md:h-12 flex items-center justify-center">{t('hero.role_student', "Software Engineering Student")}</div>
                            <div className="h-10 md:h-12 flex items-center justify-center">{t('hero.role_dev', "Front-End Developer")}</div>
                            <div className="h-10 md:h-12 flex items-center justify-center">UI/UX Enthusiast</div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex gap-4 justify-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link to="/Projects" className="px-8 py-3 bg-neon-blue/10 border border-neon-blue text-neon-blue rounded-full hover:bg-neon-blue hover:text-black transition-all duration-300 font-bold shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]">
                            {t('hero.cta_projects', "View Work")}
                        </Link>
                        <Link to="/Contact" className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 font-bold backdrop-blur-sm">
                            {t('hero.cta_contact', "Contact Me")}
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Tech Stack Marquee */}
            <div className="w-full py-10 bg-black/30 backdrop-blur-sm border-y border-white/5 mb-20 overflow-hidden">
                <motion.div
                    className="flex gap-12 whitespace-nowrap min-w-max"
                    animate={{ x: isRTL ? [0, 1000] : [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                        <div key={index} className="flex items-center gap-2 text-2xl font-bold text-gray-400">
                            <span className="text-3xl">{tech.icon}</span>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-6 space-y-40">
                {/* About & Mindset Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: isMobile ? 0 : 10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-10 rounded-3xl relative overflow-hidden group perspective-1000 hover:border-neon-blue/40 transition-colors"
                    >
                        <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto p-6 opacity-20 text-9xl rotate-12 group-hover:rotate-0 transition-transform duration-700">👋</div>
                        <h2 className="text-4xl font-black mb-8 text-white flex items-center gap-4">
                            <span className="text-neon-blue">#</span> {t('home.about_title')}
                        </h2>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg relative z-10">
                            <p>{t('home.about_p1')}</p>
                            <p className="border-l-4 border-neon-blue pl-4 rtl:pl-0 rtl:border-l-0 rtl:border-r-4 rtl:pr-4 italic bg-white/5 p-4 rounded-r-xl rtl:rounded-r-none rtl:rounded-l-xl">
                                <Trans i18nKey="home.about_p2" components={{ 1: <strong className="text-white" />, 3: <strong className="text-white" /> }} />
                            </p>
                            <p>{t('home.about_p3')}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: isMobile ? 0 : -10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-10 rounded-3xl relative overflow-hidden hover:border-neon-purple/40 transition-colors flex flex-col justify-center"
                    >
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
                        <h2 className="text-4xl font-black mb-8 text-white text-right">
                            {t('home.mindset_title')} <span className="text-neon-purple">#</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-right">
                            <p>{t('home.mindset_p1')}</p>
                            <p className="text-2xl font-light text-white"><Trans i18nKey="home.mindset_p2" components={{ 1: <strong className="text-neon-purple font-bold" /> }} /></p>
                            <p>{t('home.mindset_p3')}</p>
                        </div>
                    </motion.div>
                </div>

                {/* What I Do Section */}
                <div className="relative">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-black text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-white to-neon-purple"
                    >
                        {t('home.services_title')}
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceCards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                whileHover={{ y: -15 }}
                                className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/20 relative group overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.color}`} />
                                <div className={`bg-gradient-to-br ${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{t(`home.${card.title}`)}</h3>
                                <p className="text-gray-400 leading-relaxed">{t(`home.${card.desc}`)}</p>
                                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${card.color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="glass-card rounded-3xl p-12 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-neon-purple/5" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-center divide-y md:divide-y-0 md:divide-x divide-white/10 rtl:divide-x-reverse">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="pt-8 md:pt-0">
                                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 font-mono flex justify-center">
                                    <AnimatedCounter value={stat.value} />
                                </div>
                                <p className="text-neon-blue text-lg uppercase tracking-widest font-bold">{t(`home.${stat.label}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Projects Spotlight */}
                <section className="relative py-20">
                    <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-transparent to-neon-purple/5 pointer-events-none" />

                    <div className="text-center mb-16 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-neon-blue to-white"
                        >
                            {t('home.featured_title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 font-light"
                        >
                            {t('home.featured_desc')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
                        {[
                            { img: imgDarkness, title: "Darkness Takeover", color: "from-purple-600 to-black" },
                            { img: imgPortfolio, title: "Portfolio 2026", color: "from-cyan-500 to-blue-600" },
                            { img: imgAlgo, title: "Algorithm Visualizer", color: "from-indigo-500 to-blue-500" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50, rotateX: isMobile ? 0 : 10 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, type: "spring", stiffness: 50 }}
                                whileHover={!isMobile ? { y: -20, rotateX: 5, scale: 1.05, zIndex: 10 } : { y: -10 }}
                                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10`} />
                                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{item.title}</h3>
                                    <div className="h-1 w-12 bg-white rounded-full group-hover:w-full transition-all duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link
                            to="/Projects"
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/20 rounded-full overflow-hidden hover:bg-white/10 transition-all hover:border-neon-blue/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]"
                        >
                            <span className="relative z-10 text-xl font-bold text-white group-hover:text-neon-blue transition-colors">{t('home.explore_all')}</span>
                            <FaRocket className="text-xl text-gray-400 group-hover:text-neon-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/10 to-neon-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </Link>
                    </div>
                </section>

                {/* 1. Creative Orbit (Antigravity Section) */}
                <section className="relative py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-neon-purple/5 to-black pointer-events-none" />
                    <div className="text-center mb-20 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-4">{t('home.orbit_title')}</h2>
                        <p className="text-gray-400 max-w-lg mx-auto">{t('home.orbit_desc')}</p>
                    </div>

                    <div className="relative h-[600px] w-full max-w-6xl mx-auto">
                        {[
                            { icon: <FaReact />, top: "10%", left: "20%", size: "text-6xl", color: "text-cyan-400" },
                            { icon: <SiNextdotjs />, top: "40%", left: "50%", size: "text-8xl", color: "text-white" },
                            { icon: <FaNodeJs />, top: "70%", left: "15%", size: "text-7xl", color: "text-green-500" },
                            { icon: <SiTailwindcss />, top: "20%", left: "80%", size: "text-5xl", color: "text-cyan-300" },
                            { icon: <FaGamepad />, top: "60%", left: "75%", size: "text-9xl", color: "text-purple-500" },
                            { icon: <FaCode />, top: "85%", left: "40%", size: "text-4xl", color: "text-pink-500" },
                        ].slice(0, isMobile ? 3 : 6).map((item, i) => (
                            <motion.div
                                key={i}
                                className={`absolute ${item.size} ${item.color} filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
                                style={{ top: item.top, left: item.left }}
                                animate={isMobile ? {
                                    y: [0, -15, 0]
                                } : {
                                    y: [0, -30, 0],
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 5 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.5
                                }}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 2. The Creative Process (Sine Wave Timeline) */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-neon-blue/5 skew-y-3 pointer-events-none" />
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-20 text-center"
                        >
                            {t('home.process_title')}
                        </motion.h2>

                        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-800">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                            </div>

                            {[1, 2, 3, 4].map((step, idx) => (
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.3 }}
                                    className="relative z-10 flex flex-col items-center text-center group"
                                >
                                    <div className="w-24 h-24 rounded-full bg-black border-4 border-gray-800 flex items-center justify-center text-3xl font-bold mb-6 group-hover:border-neon-blue group-hover:scale-110 transition-all duration-500 shadow-2xl relative overflow-hidden">
                                        <div className="absolute inset-0 bg-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="relative z-10">{step}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">{t(`home.process_step${step}`)}</h3>
                                    <p className="text-gray-400 max-w-xs">{t(`home.process_desc${step}`)}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. The Final Spark (Magic Pulse CTA) */}
                <section className="py-40 flex justify-center items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/20 to-transparent opacity-50 pointer-events-none" />

                    <Link to="/Contact" className="relative group">
                        <div className="absolute inset-0 bg-neon-purple rounded-full blur-[50px] opacity-20 group-hover:opacity-40 animate-pulse transition-opacity" />
                        <div className="absolute inset-0 bg-neon-blue rounded-full blur-[80px] opacity-10 group-hover:opacity-30 animate-pulse transition-opacity delay-75" />

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-gray-900 to-black rounded-full border border-white/10 flex items-center justify-center cursor-pointer overflow-hidden shadow-2xl z-20 group-hover:border-neon-blue/50 transition-colors"
                        >
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="text-center relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                <span className="block text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                                    {t('home.final_cta')}
                                </span>
                                <span className="text-sm mt-2 text-gray-500 tracking-widest uppercase group-hover:text-white transition-colors">Click to Start</span>
                            </div>
                        </motion.div>
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default About;
