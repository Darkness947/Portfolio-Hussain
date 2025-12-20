import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaSteam, FaGithub, FaExternalLinkAlt, FaUnity, FaReact, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiBootstrap, SiTailwindcss, SiVite, SiNextdotjs } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

import imgDarkness from '../assets/prosimg/pros2.png';
import imgSchedule from '../assets/prosimg/pros1.png';
import imgPortfolio from '../assets/prosimg/portfolio-new.png';
import imgGpa from '../assets/prosimg/pros4.png';
import imgClock from '../assets/prosimg/pros5.png';
import imgTodo from '../assets/prosimg/pros6.png';
import imgAlgo from '../assets/prosimg/algo.png';

const projectsData = [
    {
        key: 'darkness',
        img: imgDarkness,
        stack: [<FaUnity className="text-white" />, <TbBrandCSharp className="text-purple-600" />],
        link: 'https://store.steampowered.com/app/3865470/Darkness_Takeover/',
        type: 'steam',
        pos: 'object-center'
    },
    {
        key: 'schedule',
        img: imgSchedule,
        stack: [<FaHtml5 className="text-orange-500" />, <FaCss3Alt className="text-blue-500" />, <FaJs className="text-yellow-400" />],
        link: 'https://github.com/Darkness947/schedule-maker',
        type: 'web'
    },
    {
        key: 'algo_visualizer',
        img: imgAlgo,
        stack: [<FaReact className="text-cyan-400" />, <SiTailwindcss className="text-cyan-300" />, <SiNextdotjs className="text-white" />],
        link: 'https://algo-visualizer-dev.netlify.app',
        type: 'web'
    },
    {
        key: 'portfolio',
        img: imgPortfolio,
        stack: [<FaReact className="text-cyan-400" />, <SiVite className="text-purple-500" />, <SiTailwindcss className="text-cyan-300" />],
        link: 'https://hussain-portfolio-dev.netlify.app',
        type: 'web',
        pos: 'object-top'
    },
    {
        key: 'gpa',
        img: imgGpa,
        stack: [<FaReact className="text-cyan-400" />, <SiBootstrap className="text-purple-500" />],
        link: 'https://gpa-calc-dev.netlify.app',
        type: 'web'
    },
    {
        key: 'clock',
        img: imgClock,
        stack: [<FaJava className="text-red-500" />],
        link: 'https://github.com/Darkness947/pro-clock',
        type: 'app'
    },
    {
        key: 'todo',
        img: imgTodo,
        stack: [<SiMongodb className="text-green-500" />, <FaNodeJs className="text-green-600" />, <FaReact className="text-cyan-400" />],
        link: 'https://to-do-list-dev8.netlify.app',
        type: 'web'
    }
];

function Projects() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen py-10">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent pb-2 leading-tight"
            >
                {t('projects.title', 'My Projects')}
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.key}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
                        className="group bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-neon-purple/50 hover:shadow-[0_0_30px_rgba(188,19,254,0.2)] transition-all duration-300 flex flex-col h-full"
                    >
                        {/* Image Container */}
                        <div className="relative w-full h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
                            <img
                                src={project.img}
                                alt={t(`projects.${project.key}.title`)}
                                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.pos || 'object-top'}`}
                            />
                            {/* Overlay Badge for Type */}
                            <div className="absolute top-3 right-3 z-20">
                                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                                    {project.type}
                                </span>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                                {t(`projects.${project.key}.title`)}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                {t(`projects.${project.key}.desc`)}
                            </p>

                            <div className="pt-4 border-t border-white/10 mt-auto">
                                <div className="flex items-center gap-3 mb-4 text-xl text-gray-300">
                                    {project.stack}
                                </div>

                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block text-center px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-sm tracking-wide hover:bg-neon-blue hover:text-black hover:border-transparent transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        <span>{project.type === 'steam' ? t('projects.view_steam', 'View on Steam') : t('projects.view_project', 'View Project')}</span>
                                        {project.type === 'steam' ? <FaSteam className="group-hover/btn:scale-110 transition-transform" /> : <FaExternalLinkAlt className="group-hover/btn:rotate-45 transition-transform" />}
                                    </a>
                                ) : (
                                    <button disabled className="w-full block text-center px-6 py-3 bg-white/5 border border-white/5 rounded-xl text-gray-500 font-bold text-sm tracking-wide cursor-not-allowed">
                                        Coming Soon
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
export default Projects;
