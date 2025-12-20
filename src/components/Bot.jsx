import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaRobot, FaTimes, FaCommentDots, FaPaperPlane, FaUser } from "react-icons/fa";

const Bot = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [showOptions, setShowOptions] = useState(true);
    const messagesEndRef = useRef(null);

    // Scroll to bottom of chat
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Initialize chat
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            handleBotResponse("intro");
        }
    }, [isOpen]);

    const handleBotResponse = (key) => {
        setIsTyping(true);
        setShowOptions(false);

        // Simulate typing delay
        setTimeout(() => {
            const text = key === "intro" ? t('bot.intro') : t(`bot.answers.${key}`);
            setMessages(prev => [...prev, { type: 'bot', text }]);
            setIsTyping(false);
            setShowOptions(true);
        }, 1000);
    };

    const handleOptionClick = (option) => {
        // Add user message
        const label = t(`bot.options.${option}`);
        setMessages(prev => [...prev, { type: 'user', text: label }]);

        if (option === 'end') {
            setTimeout(() => setIsOpen(false), 1000);
            return;
        }

        // Trigger bot response
        if (option === 'back') {
            // Just show options again, maybe with a prompt
            handleBotResponse("intro");
        } else {
            handleBotResponse(option);
        }
    };

    const options = [
        { key: "about", icon: "👤" },
        { key: "skills", icon: "💻" },
        { key: "projects", icon: "🚀" },
        { key: "contact", icon: "📧" },
        { key: "social", icon: "🔗" },
        { key: "end", icon: "❌" }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="pointer-events-auto bg-black/80 backdrop-blur-xl border border-neon-purple/30 rounded-2xl w-[350px] h-[500px] shadow-[0_0_40px_rgba(188,19,254,0.3)] overflow-hidden flex flex-col mb-4 font-sans"
                    >
                        {/* Header */}
                        <div className="bg-neon-purple/20 p-4 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-neon-purple rounded-full">
                                    <FaRobot className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Hussain AI</h3>
                                    <span className="flex items-center gap-1 text-xs text-green-400">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: msg.type === 'bot' ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`
                                        max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed
                                        ${msg.type === 'bot'
                                            ? 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                                            : 'bg-neon-purple text-white rounded-tr-none shadow-[0_0_15px_rgba(188,19,254,0.4)]'}
                                    `}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Options Area */}
                        <div className="p-4 border-t border-white/10 bg-black/40">
                            <div className="flex flex-wrap gap-2 justify-center">
                                <AnimatePresence>
                                    {showOptions && !isTyping && options.map((opt, i) => (
                                        <motion.button
                                            key={opt.key}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                            onClick={() => handleOptionClick(opt.key)}
                                            className="px-3 py-2 bg-white/5 hover:bg-neon-purple/20 border border-white/10 hover:border-neon-purple/50 rounded-lg text-xs text-white transition-all flex items-center gap-2"
                                        >
                                            <span>{opt.icon}</span>
                                            {t(`bot.options.${opt.key}`)}
                                        </motion.button>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float Button */}
            {!isOpen && (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="pointer-events-auto w-16 h-16 bg-gradient-to-tr from-neon-purple to-neon-blue rounded-full shadow-[0_0_30px_rgba(188,19,254,0.6)] flex items-center justify-center text-white text-2xl z-50 hover:shadow-[0_0_50px_rgba(0,243,255,0.6)] transition-all"
                >
                    <FaRobot />
                </motion.button>
            )}
        </div>
    );
};

export default Bot;
