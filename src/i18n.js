import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "projects": "Projects",
        "certifications": "Certifications",
        "contact": "Contact"
      },
      "hero": {
        "role_student": "Software Engineering Student",
        "role_dev": "Front-End Developer",
        "greeting": "Hello, I'm",
        "cta_projects": "View My Work",
        "cta_contact": "Contact Me"
      },
      "home": {
        "about_title": "Hey, I'm Hussain 👋",
        "about_p1": "I am a passionate Software Engineering student at PMU. My journey into technology started with curiosity, but quickly evolved into a mission: to build, create, and leave a legacy through code.",
        "about_p2": "I have developed multiple projects including <1>Darkness Takeover</1> — a solo-developed psychological horror game, and the <3>PMU Schedule Maker</3>, a full client-side tool to help students manage their time.",
        "about_p3": "I am also working on enhancing my skills to be a Full Stack Developer. My dream is to build products that blend story, technology, and impact. One line of code at a time.",
        "mindset_title": "Beyond Code: My Mindset",
        "mindset_p1": "I believe in crafting with purpose. Whether it is designing a game world or building a web application, I approach every project with creativity, discipline, and heart.",
        "mindset_p2": "I am driven by values — <1>Faith, Family, Focus</1>. These guide my personal growth and every line of code I write.",
        "mindset_p3": "In my free time, you will find me gaming, watching movies, or writing project ideas. This portfolio is not just a showcase — it is a living record of my growth. And this is only the beginning.",
        "services_title": "What I Do",
        "service_frontend": "Front-End Development",
        "service_frontend_desc": "Crafting responsive, performance-optimized, and aesthetically pleasing web interfaces using React and Tailwind.",
        "service_game": "Game Development",
        "service_game_desc": "Building immersive 2D/3D game worlds with Unity and C#, focusing on mechanics and atmosphere.",
        "service_ui": "UI/UX Design",
        "service_ui_desc": "Designing intuitive user flows and high-fidelity prototypes that ensure seamless user experiences.",
        "stats_years": "Years Experience",
        "stats_projects": "Projects Completed",
        "stats_commits": "Code Commits",
        "cta_ready": "Ready to Start?",
        "cta_text": "Let's build something amazing together.",
        "cta_btn": "Start a Project",
        "featured_title": "Selected Works",
        "featured_desc": "A glimpse into my universe of code and creativity.",
        "explore_all": "Explore All Projects",
        "orbit_title": "Creative Orbit",
        "orbit_desc": "Ideas that float, drift, and defy gravity.",
        "process_title": "My Creative Process",
        "process_step1": "Discover",
        "process_desc1": "Understanding the core problem.",
        "process_step2": "Design",
        "process_desc2": "Crafting intuitive interfaces.",
        "process_step3": "Develop",
        "process_desc3": "Writing clean, scalable code.",
        "process_step4": "Deploy",
        "process_desc4": "Launching to the world.",
        "final_cta": "Let's Make The Future"
      },
      "footer": {
        "rights": "All Rights Reserved.",
        "quick_links": "Quick Links",
        "follow_me": "Follow Me",
        "desc": "Building digital experiences that matter.",
        "name": "Hussain Alhumaidi.",
        "made_with": "Made with",
        "top": "Top"
      },
      "projects": {
        "title": "My Projects",
        "view_project": "View Project",
        "view_steam": "View on Steam",
        "darkness": {
          "title": "Darkness Takeover",
          "desc": "A psychological horror game where players navigate a dark maze, with a monster lurking in the shadows. Developed with Unity Engine & C#."
        },
        "schedule": {
          "title": "PMU Schedule Maker",
          "desc": "A client-side application to help students create and manage their schedules efficiently. Built with simple web technologies."
        },
        "portfolio": {
          "title": "My Portfolio",
          "desc": "This premium animated portfolio showcasing my skills and projects. Built with React, Vite, Tailwind, and Framer Motion."
        },
        "gpa": {
          "title": "GPA Calculator",
          "desc": "A simple tool for students to calculate their GPA based on their grades. Built with React and Bootstrap."
        },
        "clock": {
          "title": "Pro Clock",
          "desc": "A precision digital clock application displaying micro & nano seconds. Developed with Java & JavaFX."
        },
        "todo": {
          "title": "Full-Stack To-Do List",
          "desc": "A MERN stack application allowing users to manage tasks with account authentication. My first full-stack project."
        },
        "algo_visualizer": {
          "title": "Algorithm Visualizer",
          "desc": "Master complex algorithms through interactive, step-by-step visualizations. Explore Sorting, Searching, and Graph algorithms in a beautiful, modern interface."
        },
        "vigilante": {
          "title": "Vigilante AI Assistant",
          "desc": "An intelligent, secure, and lightning-fast AI assistant designed to amplify your productivity. Built with Next.js, TypeScript, and MongoDB."
        },
        "vigilante_crawler": {
          "title": "Vigilante Web Crawler",
          "desc": "An autonomous web indexer and crawler system. Built with Python, SQL, and Web Technologies."
        }
      },
      "certs": {
        "html": { "title": "HTML Essentials", "desc": "A comprehensive course covering the fundamentals of HTML, including structure, elements, and best practices." },
        "css": { "title": "CSS Essentials", "desc": "A comprehensive course covering the fundamentals of CSS, including styling, layout, and responsive design." },
        "js1": { "title": "JavaScript Essentials 1", "desc": "A comprehensive course covering the fundamentals of JavaScript, including syntax, data types, and control structures." },
        "js2": { "title": "JavaScript Essentials 2", "desc": "A continuation of JavaScript Essentials 1, focusing on advanced topics like functions, objects, and asynchronous programming." },
        "uiux": { "title": "UI/UX", "desc": "A workshop focused on user interface and user experience design principles, covering topics like usability, accessibility, and design thinking." },
        "java": { "title": "Java Foundations", "desc": "A foundational course in Java programming, covering basic syntax, object-oriented programming concepts, and core libraries." },
        "webrules": { "title": "Six Rules of Web Dev", "desc": "A workshop that covers six essential principles for effective web development, including performance optimization, security, and maintainability." },
        "datasci": { "title": "Intro to Data Science", "desc": "An introductory course on data science concepts, including data analysis, visualization, AI, and machine learning basics." },
        "analytics": { "title": "Data Analytics Essentials", "desc": "A course that covers the fundamentals of Data Analytics, including data collection, cleaning, analysis, and visualization techniques." },
        "ai": { "title": "Intro to Modern AI", "desc": "An introductory course on modern AI concepts, including machine learning, AI Bots, and AI Benefits." },
        "cyber": { "title": "Intro to Cybersecurity", "desc": "A course that provides an overview of cybersecurity principles, including threat detection, prevention strategies, and best practices." },
        "hardware": { "title": "Computer Hardware Basics", "desc": "A course that covers the fundamentals of computer hardware, including components, assembly, and troubleshooting techniques." },
        "it_essentials": { "title": "IT Essentials 7", "desc": "Fundamental computer and career skills for entry-level IT jobs, covering hardware, software, and networking." },
        "sdaia_ai": { "title": "Fundamentals of AI", "desc": "A foundational course by SDAIA covering the core concepts of Artificial Intelligence, its applications, and future impact." },
        "sdaia_advanced_ai": { "title": "Advanced AI Concepts", "desc": "An advanced course by SDAIA exploring deep learning, neural networks, and real-world AI implementation strategies." },
        "python_essentials_1": { "title": "Python Essentials 1", "desc": "Foundational Python skills including syntax, data types, and control flow." },
        "python_essentials_2": { "title": "Python Essentials 2", "desc": "Advanced Python concepts: modules, packages, and object-oriented programming." },
        "os_basics": { "title": "Operating Systems Basics", "desc": "Core concepts of operating systems, file management, and virtualization." }
      },
      "contact": {
        "send_email": "Send Email",
        "visit_github": "Visit GitHub",
        "visit_linkedin": "Visit LinkedIn"
      },
      "bot": {
        "intro": "👋 Hi! I'm Hussain's AI Assistant. I can help you navigate his portfolio. What would you like to know?",
        "options": {
          "about": "About Hussain",
          "skills": "Tech Skills",
          "projects": "Projects",
          "contact": "Contact Info",
          "social": "Online Presence",
          "github": "GitHub Profile",
          "linkedin": "LinkedIn Profile",
          "end": "End Chat",
          "back": "Ask Another Question"
        },
        "answers": {
          "about": "Hussain is a dedicated Software Engineering student at PMU 🎓 and a creative Front-End Developer. He loves building immersive web experiences and developing games with Unity 🎮.",
          "skills": "Hussain specializes in **Front-End Development** (React, Tailwind, Framer Motion) and **Game Dev** (Unity, C#). He also has experience with Java, Python, and UI/UX Design 🚀",
          "projects": "He has built amazing projects like **Darkness Takeover** (Steam Horror Game) 🕹️ and useful tools like the **PMU Schedule Maker** 📅. Check out the Projects page for full details!",
          "contact": "You can reach him via email or social media. He is always open to new opportunities and collaborations! 📬",
          "social": "You can find his open-source work on **GitHub** and professional updates on **LinkedIn**. Links are in the footer! 🔗"
        }
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "home": "الرئيسية",
        "projects": "المشاريع",
        "certifications": "الشهادات",
        "contact": "تواصل معي"
      },
      "hero": {
        "role_student": "طالب هندسة برمجيات",
        "role_dev": "مطور واجهات أمامية",
        "greeting": "مرحباً، أنا",
        "cta_projects": "تصفح أعمالي",
        "cta_contact": "تواصل معي"
      },
      "home": {
        "about_title": "مرحباً، أنا حسين 👋",
        "about_p1": "أنا طالب هندسة برمجيات شغوف في جامعة الأمير محمد بن فهد. بدأت رحلتي التقنية بالفضول، وسرعان ما تحولت إلى مهمة: البناء، الابتكار، وترك أثر من خلال البرمجة.",
        "about_p2": "قمت بتطوير العديد من المشاريع بما في ذلك <1>Darkness Takeover</1> — لعبة رعب نفسي طورتها بمفردي، و <3>صانع جداول PMU</3>، وهي أداة لمساعدة الطلاب على تنظيم وقتهم.",
        "about_p3": "أعمل أيضاً على تعزيز مهاراتي لأصبح مطور Full Stack. حلمي هو بناء منتجات تمزج بين القصة، التكنولوجيا، والأثر. سطر برمجي تلو الآخر.",
        "mindset_title": "ما وراء الكود: عقليتي",
        "mindset_p1": "أؤمن بالإتقان الهادف. سواء كان تصميم عالم لعبة أو بناء تطبيق ويب، أتعامل مع كل مشروع بإبداع، انضباط، وقلب.",
        "mindset_p2": "تقودني قيم — <1>الإيمان، العائلة، التركيز</1>. هذه القيم توجه نموي الشخصي وكل سطر كود أكتبه.",
        "mindset_p3": "في وقت فراغي، ستجدني ألعب الألعاب، أشاهد الأفلام، أو أكتب أفكار مشاريع. هذا الملف الشخصي ليس مجرد معرض — إنه سجل حي لنموي. وهذه مجرد البداية.",
        "services_title": "ماذا أقدم؟",
        "service_frontend": "تطوير الواجهات",
        "service_frontend_desc": "تصميم واجهات ويب متجاوبة، سريعة، وجميلة باستخدام React و Tailwind.",
        "service_game": "تطوير الألعاب",
        "service_game_desc": "بناء عوالم ألعاب غامرة ثنائية وثلاثية الابعاد باستخدام Unity و C#.",
        "service_ui": "تصميم UI/UX",
        "service_ui_desc": "تصميم تجارب مستخدم بديهية ونماذج عالية الدقة تضمن سهولة الاستخدام.",
        "stats_years": "سنوات الخبرة",
        "stats_projects": "مشروع مكتمل",
        "stats_commits": "تغيير برمجي",
        "cta_ready": "جاهز للبدء؟",
        "cta_text": "لنصنع شيئاً مذهلاً معاً.",
        "cta_btn": "ابدأ مشروعاً",
        "featured_title": "أعمال مختارة",
        "featured_desc": "لمحة عن عالمي من الكود والإبداع.",
        "explore_all": "تصفح كل المشاريع",
        "orbit_title": "المدار الإبداعي",
        "orbit_desc": "أفكار تطفو، تنجرف، وتتحدى الجاذبية.",
        "process_title": "عمليتي الإبداعية",
        "process_step1": "اكتشاف",
        "process_desc1": "فهم المشكلة الأساسية.",
        "process_step2": "تصميم",
        "process_desc2": "صياغة واجهات بديهية.",
        "process_step3": "تطوير",
        "process_desc3": "كتابة كود نظيف وقابل للتوسع.",
        "process_step4": "إطلاق",
        "process_desc4": "الإطلاق للعالم.",
        "final_cta": "لنصنع المستقبل"
      },
      "footer": {
        "rights": "جميع الحقوق محفوظة.",
        "quick_links": "روابط سريعة",
        "follow_me": "تابعني",
        "desc": "بناء تجارب رقمية ذات معنى.",
        "name": "حسين الحميدي.",
        "made_with": "صنع بـ",
        "top": "الأعلى"
      },
      "projects": {
        "title": "مشاريعي",
        "view_project": "عرض المشروع",
        "view_steam": "عرض على Steam",
        "darkness": {
          "title": "Darkness Takeover",
          "desc": "لعبة رعب نفسي حيث يتنقل اللاعبون في متاهة مظلمة مع وحش يتربص في الظلال. طورت باستخدام محرك Unity و C#."
        },
        "schedule": {
          "title": "صانع جداول PMU",
          "desc": "تطبيق ويب لمساعدة الطلاب على إنشاء وإدارة جداولهم بكفاءة."
        },
        "portfolio": {
          "title": "ملفي الشخصي",
          "desc": "هذا الموقع التعريفي المليء بالرسوم المتحركة لعرض مهاراتي ومشاريعي. بني باستخدام React و Tailwind."
        },
        "gpa": {
          "title": "حاسبة المعدل التراكمي",
          "desc": "أداة بسيطة للطلاب لحساب معدلهم التراكمي بناءً على درجاتهم."
        },
        "clock": {
          "title": "Pro Clock",
          "desc": "ساعة رقمية دقيقة تعرض أجزاء الميكرو والنانو ثانية. طورت باستخدام Java & JavaFX."
        },
        "todo": {
          "title": "قائمة مهام Full-Stack",
          "desc": "تطبيق MERN stack يسمح للمستخدمين بإدارة المهام مع نظام تسجيل دخول. أول مشروع تطوير شامل لي."
        },
        "algo_visualizer": {
          "title": "مصور الخوارزميات",
          "desc": "أتقن الخوارزميات المعقدة من خلال تصورات تفاعلية خطوة بخطوة. استكشف خوارزميات الترتيب والبحث والرسوم البيانية في واجهة عصرية وجميلة."
        },
        "vigilante": {
          "title": "المساعد الذكي Vigilante",
          "desc": "مساعد ذكي، آمن، وسريع للغاية مصمم لزيادة إنتاجيتك. بني باستخدام Next.js، TypeScript، و MongoDB."
        },
        "vigilante_crawler": {
          "title": "زاحف الويب Vigilante",
          "desc": "نظام زاحف ومفهرس ويب مستقل. تم بناؤه باستخدام Python و SQL وتقنيات الويب."
        }
      },
      "certs": {
        "html": { "title": "HTML Essentials", "desc": "دورة شاملة تغطي أساسيات HTML، بما في ذلك الهيكل، العناصر، وأفضل الممارسات." },
        "css": { "title": "CSS Essentials", "desc": "دورة شاملة تغطي أساسيات CSS، بما في ذلك التنسيق، التخطيط، والتصميم المتجاوب." },
        "js1": { "title": "JavaScript Essentials 1", "desc": "دورة شاملة تغطي أساسيات JavaScript، بما في ذلك النحو، أنواع البيانات، وهياكل التحكم." },
        "js2": { "title": "JavaScript Essentials 2", "desc": "تكملة لأساسيات JavaScript 1، تركز على مواضيع متقدمة مثل الدوال، الكائنات، والبرمجة غير المتزامنة." },
        "uiux": { "title": "UI/UX", "desc": "ورشة عمل تركز على مبادئ تصميم واجهة المستخدم وتجربة المستخدم، وتغطي مواضيع مثل قابلية الاستخدام وإمكانية الوصول." },
        "java": { "title": "Java Foundations", "desc": "دورة تأسيسية في برمجة Java، تغطي النحو الأساسي، ومفاهيم البرمجة كائنية التوجه، والمكتبات الأساسية." },
        "webrules": { "title": "Six Rules of Web Dev", "desc": "ورشة عمل تغطي ستة مبادئ أساسية لتطوير ويب فعال، بما في ذلك تحسين الأداء، الأمان، وقابلية الصيانة." },
        "datasci": { "title": "Intro to Data Science", "desc": "دورة تمهيدية حول مفاهيم علم البيانات، بما في ذلك تحليل البيانات، التصور، الذكاء الاصطناعي، وأساسيات التعلم الآلي." },
        "analytics": { "title": "Data Analytics Essentials", "desc": "دورة تغطي أساسيات تحليل البيانات، بما في ذلك جمع البيانات، تنظيفها، تحليلها، وتقنيات التصور." },
        "ai": { "title": "Intro to Modern AI", "desc": "دورة تمهيدية حول مفاهيم الذكاء الاصطناعي الحديثة، بما في ذلك التعلم الآلي، وروبوتات الذكاء الاصطناعي، وفوائده." },
        "cyber": { "title": "Intro to Cybersecurity", "desc": "دورة تقدم نظرة عامة على مبادئ الأمن السيبراني، بما في ذلك اكتشاف التهديدات، واستراتيجيات الوقاية، وأفضل الممارسات." },
        "hardware": { "title": "Computer Hardware Basics", "desc": "دورة تغطي أساسيات عتاد الحاسوب، بما في ذلك المكونات، التجميع، وتقنيات استكشاف الأخطاء وإصلاحها." },
        "it_essentials": { "title": "IT Essentials 7", "desc": "مهارات الحاسوب والمسار الوظيفي الأساسية لوظائف تكنولوجيا المعلومات للمبتدئين، تغطي الأجهزة والبرمجيات والشبكات." },
        "sdaia_ai": { "title": "مبادئ الذكاء الاصطناعي", "desc": "دورة تأسيسية من سدايا تغطي المفاهيم الأساسية للذكاء الاصطناعي، تطبيقاته، وأثره المستقبلي." },
        "sdaia_advanced_ai": { "title": "مفاهيم الذكاء الاصطناعي المتقدمة", "desc": "دورة متقدمة من سدايا تستكشف التعلم العميق، الشبكات العصبية، واستراتيجيات تطبيق الذكاء الاصطناعي في العالم الحقيقي." },
        "python_essentials_1": { "title": "أساسيات بايثون 1", "desc": "مهارات بايثون التأسيسية بما في ذلك النحو، أنواع البيانات، والتحكم في التدفق." },
        "python_essentials_2": { "title": "أساسيات بايثون 2", "desc": "مفاهيم بايثون المتقدمة: الوحدات، الحزم، والبرمجة كائنية التوجه." },
        "os_basics": { "title": "أساسيات أنظمة التشغيل", "desc": "المفاهيم الأساسية لأنظمة التشغيل، إدارة الملفات، والافتراضية." }
      },
      "contact": {
        "send_email": "أرسل بريد الكتروني",
        "visit_github": "زيارة GitHub",
        "visit_linkedin": "زيارة LinkedIn"
      },
      "bot": {
        "intro": "👋 مرحباً! أنا مساعد حسين الذكي. أنا هنا لمساعدتك في تصفح الملف الشخصي. ماذا تحب أن تعرف؟",
        "options": {
          "about": "من هو حسين؟",
          "skills": "المهارات التقنية",
          "projects": "المشاريع",
          "contact": "معلومات التواصل",
          "social": "حساباتي",
          "github": "حساب GitHub",
          "linkedin": "حساب LinkedIn",
          "end": "إنهاء المحادثة",
          "back": "سؤال آخر"
        },
        "answers": {
          "about": "حسين طالب هندسة برمجيات مجتهد في جامعة PMU 🎓 ومطور واجهات أمامية مبدع. يعشق بناء تجارب الويب الغامرة وتطوير الألعاب باستخدام Unity 🎮.",
          "skills": "يتخصص حسين في **تطوير الواجهات** (React, Tailwind) و **تطوير الألعاب** (Unity, C#). لديه أيضاً خبرة في Java, Python, وتصميم UI/UX 🚀",
          "projects": "قام ببناء مشاريع رائعة مثل **Darkness Takeover** (لعبة رعب) 🕹️ وصانع الجداول لطلاب PMU 📅. تفقد صفحة المشاريع للمزيد!",
          "contact": "يمكنك التواصل معه عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي. هو دائماً منفتح للفرص الجديدة! 📬",
          "social": "يمكنك العثور على مشاريعه في **GitHub** وتحديثاته المهنية في **LinkedIn**. الروابط موجودة في أسفل الصفحة! 🔗"
        }
      }
    }
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
