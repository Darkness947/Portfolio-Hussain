import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#1e1e2f",
  headerBgColor: "#007bff",
  headerFontColor: "#fff",
  headerFontSize: "18px",
  botBubbleColor: "#007bff",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};
const Bot = () => {
// Chatbot Conversation Flow
const steps = [
    {
        id: "start",
        message: "👋 Hi, I’m Hussain’s Portfolio Assistant. What do you want to do?",
        trigger: "mainOptions",
    },
    {
        id: "mainOptions",
        options: [
            {value: "about", label: "About Hussain", trigger: "about"},
            { value: "skills", label: "Tech Skills", trigger: "skills" },
            { value: "projects", label: "Projects", trigger: "projects" },
            { value: "Contact", label: "Contact Info", trigger: "contact" },
            { value: "end", label: "End Chat", end: true },
        ],
    },
    {
        id: "about",
        message: "Hussain is a Software Engineering student at PMU, passionate about Web Dev, AI, and Game Dev 🎮.",
        trigger: "askMore",
    },
    {
        id: "skills",
        message: "Hussain's skills include HTML, CSS, JAVA, JavaScript, React, C#, and Unity3D. 🚀",
        trigger: "askMore",
    },
    {
        id: "projects",
        message: "Hussain has worked on projects like Darkness Takeover (a horror game) and a GPA Calculator app. Check out the Projects page for more! 📂",
        trigger: "askMore",
    },
    {
        id: "contact",
        message: "You can reach Hussain via email at husdfdf@gmail.com or connect on LinkedIn. Check out the Contact page for more! 📧",
        trigger: "askMore",
    },
    {
        id: "askMore",
        options: [
      { value: "another", label: "Ask again", trigger: "mainOptions" },
      { value: "end", label: "End Chat", end: true },
        ],
    },
];

    return (
    <ThemeProvider theme={theme}>
        <ChatBot steps={steps} floating={true} />
    </ThemeProvider>
    );
};

export default Bot;
// This code defines a Chatbot component that provides an interactive chat interface for users to learn about Hussain.
