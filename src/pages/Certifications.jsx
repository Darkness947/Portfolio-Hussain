import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaCertificate } from "react-icons/fa";

import cert1 from "../assets/carsimg/cars1.png";
import cert2 from "../assets/carsimg/cars2.png";
import cert3 from "../assets/carsimg/cars3.png";
import cert4 from "../assets/carsimg/cars4.png";
import cert5 from "../assets/carsimg/cars5.png";
import cert6 from "../assets/carsimg/cars6.png";
import cert7 from "../assets/carsimg/cars7.png";
import cert8 from "../assets/carsimg/cars8.png";
import cert9 from "../assets/carsimg/cars9.png";
import cert10 from "../assets/carsimg/cars10.png";
import cert11 from "../assets/carsimg/cars11.png";
import cert12 from "../assets/carsimg/cars12.png";
import cert13 from "../assets/carsimg/cars13.png";
import cert14 from "../assets/carsimg/cars14.png";
import cert15 from "../assets/carsimg/cars15.png";
import cert16 from "../assets/carsimg/cars16.png";
import cert17 from "../assets/carsimg/cars17.png";
import cert18 from "../assets/carsimg/cars18.png";

function Certifications() {
    const { t } = useTranslation();

    const certsData = [
        { key: 'html', img: cert1 },
        { key: 'css', img: cert2 },
        { key: 'js1', img: cert3 },
        { key: 'js2', img: cert4 },
        { key: 'uiux', img: cert5 },
        { key: 'java', img: cert6 },
        { key: 'webrules', img: cert7 },
        { key: 'datasci', img: cert8 },
        { key: 'analytics', img: cert9 },
        { key: 'ai', img: cert10 },
        { key: 'cyber', img: cert11 },
        { key: 'hardware', img: cert12 },
        { key: 'it_essentials', img: cert13 },
        { key: 'sdaia_ai', img: cert14 },
        { key: 'sdaia_advanced_ai', img: cert15 },
        { key: 'python_essentials_1', img: cert16 },
        { key: 'python_essentials_2', img: cert17 },
        { key: 'os_basics', img: cert18 },
    ];

    return (
        <div className="min-h-screen py-10">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent pb-2 leading-tight"
            >
                {t('nav.certifications', 'Certifications')}
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {certsData.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="glass-card rounded-xl overflow-hidden group hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all duration-300"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                            <img
                                src={cert.img}
                                alt={t(`certs.${cert.key}.title`)}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-2 right-2 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 text-neon-blue">
                                <FaCertificate size={16} />
                            </div>
                        </div>

                        <div className="p-5">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors truncate">
                                {t(`certs.${cert.key}.title`)}
                            </h3>
                            <p className="text-gray-400 text-sm line-clamp-3">
                                {t(`certs.${cert.key}.desc`)}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
export default Certifications;
