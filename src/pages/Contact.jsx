import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: <FaEnvelope size={40} className="text-neon-blue" />,
      title: "Email",
      value: "husdfdf@gmail.com",
      link: "mailto:husdfdf@gmail.com",
      action: t('contact.send_email', 'Send Email')
    },
    {
      icon: <FaGithub size={40} className="text-white" />,
      title: "GitHub",
      value: "Darkness947",
      link: "https://github.com/Darkness947",
      action: t('contact.visit_github', 'Visit GitHub')
    },
    {
      icon: <FaLinkedin size={40} className="text-blue-500" />,
      title: "LinkedIn",
      value: "Hussain Alhumaidi",
      link: "https://www.linkedin.com/in/hussain-alhumaidi-6726b334a/",
      action: t('contact.visit_linkedin', 'Visit LinkedIn')
    },
    {
      icon: <FaMapMarkerAlt size={40} className="text-red-500" />,
      title: "Location",
      value: "Eastern Province, Saudi Arabia",
      link: null,
      action: null
    }
  ];

  return (
    <div className="min-h-screen py-20 flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple rtl:bg-gradient-to-l bg-clip-text text-transparent pb-2 leading-relaxed"
      >
        {t('nav.contact', 'Contact Me')}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
        {contactMethods.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white/5 transition-all duration-300"
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {contact.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
            <p className="text-gray-400 mb-6">{contact.value}</p>

            {contact.link && (
              <a
                href={contact.link}
                target={contact.title === 'Email' ? "_self" : "_blank"}
                rel="noreferrer"
                className="px-6 py-2 border border-white/20 rounded-full text-sm font-bold hover:bg-neon-blue hover:text-black hover:border-transparent transition-all duration-300"
              >
                {contact.action}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
