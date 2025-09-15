import React from 'react';
import { Project, SkillCategory, Certificate, Skill, Experience } from './types';

export const GITHUB_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
    </svg>
);

export const LINKEDIN_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9Zm-1.5-10.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.6-1.3c2.8 0 5 2.2 5 5v4Z"></path>
    </svg>
);

export const EMAIL_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
    </svg>
);

export const CONTACT_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5h-1.528a13.5 13.5 0 01-11.9-11.904A1.5 1.5 0 013.5 3H5a1.5 1.5 0 011.5 1.5v.528A13.5 13.5 0 012 3.5z" clipRule="evenodd" />
    </svg>
);

export const SOCIAL_LINKS = {
    github: "https://github.com/banelemiles17-io",
    linkedin: "https://www.linkedin.com/in/banele-nkambule-179154188/",
    email: "mailto:banelemiles17@gmail.com",
    contact: "tel:0767480230"
};

// Replace '#' with the actual URL to your qualification document/image
export const QUALIFICATION_URL = "https://i.ibb.co/L5hH8hW/Cert.png";

export const EXPERIENCE: Experience[] = [
    {
        role: "Digital Associate Intern",
        company: "Capaciti",
        period: "Jul 2025 - Present",
        description: [
            "Learned how to prompt LLMs to create applications.",
            "Assisted in the development and testing of a sentiment analysis dashboard among other projects.",
            "Learned how to create no-code chatbots.",
            "Improved communication, time management, creativity and teamworking skills."
        ],
        technologies: ["LLM Prompting", "No-Code Development", "Sentiment Analysis", "Team Collaboration"]
    }
];

export const PROJECTS: Project[] = [
    {
        title: "Sentiment Analysis Dashboard",
        description: "An interactive dashboard that analyzes sentiment in text data, enabling users to understand emotional tone in customer reviews, social media posts, or other text content.",
        tags: ["Python", "TensorFlow", "Flask", "React", "Docker", "GCP"],
        imageUrl: "https://picsum.photos/seed/project1/400/200",
        liveDemoUrl: "https://jobus-ai-application.my.canva.site/dagxxhysk-g",
        sourceCodeUrl: "https://github.com/Jozi-Navigators/Sentiment-Analysis-Dashboard.git"
    },
    {
        title: "Image Generation",
        description: "A specialized content generation tool that produces high-quality outputs for a specific use case",
        tags: ["PyTorch", "OpenCV", "FastAPI", "Kubernetes", "AWS S3"],
        imageUrl: "https://picsum.photos/seed/project2/400/200",
        liveDemoUrl: "https://image-gen-xo-main.tiiny.site/",
        sourceCodeUrl: "https://github.com/Jozi-Navigators/image-gen-xo.git"
    },
    {
        title: "AI Resume Builder",
        description: "an intelligent resume generation system that creates customized, ATS-friendly resumes based on user inputs.",
        tags: ["Gemini API", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        imageUrl: "https://picsum.photos/seed/project3/400/200",
        liveDemoUrl: "https://ai-resume-builder-nine-mauve.vercel.app/",
        sourceCodeUrl: "https://github.com/Jozi-Navigators/ai-resume-builder.git"
    },
    {
        title: "No-Code Chatbot",
        description: "Designed and implemented a machine learning model to predict equipment failures. By analyzing sensor data, the system provides early warnings, reducing downtime by 20% and maintenance costs by 12%.",
        tags: ["Python", "Scikit-learn", "Pandas", "MQTT", "Grafana"],
        imageUrl: "https://picsum.photos/seed/project4/400/200",
        liveDemoUrl: "https://schoolhub.ai/en-US/generate/chatbot/view/6fcb0878-6378-4a97-9489-080ee23e80a3?",
        sourceCodeUrl: "https://github.com/banelemiles17-io/No-code-ChatBot.git"
    },
    {
        title: "Celestial Learning Hub",
        description: "A comprehensive AI application that solves a meaningful real-world problem by integrating multiple AI technologies into a cohesive solution.",
        tags: ["AWS Lambda", "API Gateway", "S3", "DynamoDB", "Node.js"],
        imageUrl: "https://picsum.photos/seed/project5/400/200",
        liveDemoUrl: "https://lock-in-one.vercel.app/",
        sourceCodeUrl: "https://github.com/Jozi-Navigators/-End-to-End-AI-Solution.git"
    },
    
];

// Skill Icons
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => <span className="h-5 w-5 shrink-0">{children}</span>;
const PythonIcon = () => <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Python</title><path d="M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm-8.27-16.51a1.03 1.03 0 0 0-.49.33.8.8 0 0 0-.17.59v3.22c0 .28.08.48.17.6a1.03 1.03 0 0 0 .5.33c.18.07.4.1.66.1h2.23v1.1H4.91v1.1h3.76v1.1H4.91v1.1h3.76v1.1H4.91v1.1h3.94c.3 0 .56-.03.77-.1.22-.07.4-.18.53-.33.13-.15.22-.33.28-.55.06-.22.09-.48.09-.78v-4.88c0-.3-.03-.56-.09-.78a.93.93 0 0 0-.28-.55 1.13 1.13 0 0 0-.53-.33c-.2-.07-.47-.1-.77-.1H4.4l-.67.66h4.59v1.1H4.9v2.67h2.82c.24 0 .42-.02.54-.05.12-.04.22-.1.3-.18.08-.08.13-.18.15-.3.02-.12.04-.28.04-.48v-2.1h-3.2zm11.88 7.1h-2.23v-1.1h3.75v-1.1h-3.75v-1.1h3.75v-1.1h-3.75v-1.1H19.7c-.3 0-.56.03-.77.1-.22.07-.4.18-.53.33-.13.15-.22.33-.28.55-.06-.22-.09.48-.09.78v4.88c0 .3.03.56.09.78.06.22.16.4.28.55.12.15.29.26.53.33.21.07.47.1.77.1h4.2l.67-.66h-4.6v-1.1h3.81v-2.67h-2.82c-.24 0-.42.02-.54-.05-.12-.04-.22.1-.3.18-.08-.08-.13-.18-.15.3-.02-.12-.04-.28-.04.48v2.1h3.2z"/></svg></IconWrapper>;
const JSIcon = () => <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.261c-1.42 2.132-3.63 3.32-6.58 3.32-2.84 0-4.99-.977-6.32-2.733-.42-.55-.63-1.22-.63-1.9 0-.9.34-1.63.85-2.2.51-.57 1.2-.85 2.05-.85.73 0 1.34.23 1.8.7.46.47.7 1.1.7 1.88 0 .57-.13.98-.39 1.26-.26.28-.6.42-1.02.42-.43 0-.78-.14-1.03-.42-.25-.28-.38-.63-.38-1.05 0-.6.22-1.08.6-1.5.42-.4 1.02-.62 1.75-.62.9 0 1.68.25 2.28.76.6.51.95 1.2.95 2.06 0 .6-.13 1.12-.4 1.52-.27.4-.63.7-1.1.9-.47.2-1.02.3-1.65.3-1.22 0-2.2-.4-2.94-1.2-.74-.8-1.1-1.8-1.1-3.04 0-1.2.37-2.26 1.1-3.12.74-.88 1.7-1.32 2.9-1.32 1.28 0 2.28.47 2.98 1.4.7.93 1.06 2.14 1.06 3.62 0 .2-.02.43-.05.68h-6.2c.1.9.56 1.62 1.28 2.15.72.53 1.62.8 2.68.8.8 0 1.48-.17 2.04-.5.56-.33.95-.82 1.17-1.45h2.1zm-9.3-3.95c-.02-.2-.04-.4-.06-.57l-.05-.22c-.08-.34-.22-.62-.42-.84-.2-.22-.48-.33-.82-.33-.42 0-.75.13-1.01.4-.26.27-.4.62-.42.98h2.8zM22.81 8.1H19.2V1.5h-2.13v6.6H13.5v1.95h3.57v7.8c0 1.22.33 2.18 1.0 2.87.66.7 1.55 1.04 2.67 1.04.28 0 .55-.02.8-.07.25-.05.48-.12.7-.2l-.42-1.95c-.18.08-.35.15-.48.18-.13.03-.28.05-.42.05-.6 0-1.04-.16-1.3-.47-.26-.31-.38-.75-.38-1.3V10.05h3.61V8.1z"/></svg></IconWrapper>;
const TSIcon = () => <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>TypeScript</title><path d="M1.5 0 h 21 v 21 h-21 z M 2.5 1 v 19 h 19 v -19 z M 4.8 4.2 v 1.9 H 11.4 v 11.2 h 1.9 V 6.1 h 6.6 V 4.2 Z"/></svg></IconWrapper>;
const SQLIcon = () => <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>SQL</title><path d="M4.02 11.97H2.11C2.56 5.86 7.6 2.41 12 2.41c4.4 0 9.44 3.45 9.89 9.56h-1.91c-.43-5.04-4.3-8.29-7.98-8.29-3.68 0-7.55 3.25-7.98 8.29zm0 1.27h-.14c0 5.8 4.48 8.08 8.12 8.08 3.64 0 8.12-2.27 8.12-8.08h-.14c0 4.7-3.4 6.81-7.98 6.81-4.58 0-7.98-2.11-7.98-6.81zm9.86-1.27h-4.05c0-1.12.39-2.03.95-2.03s.95.91.95 2.03h.14c0-1.12.39-2.03.95-2.03s.95.91.95 2.03h.11zm-5.94 0h-.11c0-1.12.39-2.03.95-2.03s.95.91.95 2.03h-1.79zM18 11.97h2.11c-.45 6.11-5.49 9.56-9.89 9.56-4.4 0-9.44-3.45-9.89-9.56H2.1c.43 5.04 4.3 8.29 7.98 8.29s7.55-3.25 7.98-8.29z"/></svg></IconWrapper>;
const HTMLIcon = () => <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zM12 17.25l5.42-1.45L18.5 4.5h-13l.9 10.25h9.1l-.3 3.45-2.7.75-2.7-.75-.17-1.95H7.1l.3 4.1 4.58 1.3 4.58-1.3.6-6.7Z"/></svg></IconWrapper>;
const CSSIcon = () => <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>CSS3</title><path d="m1.5 0 1.9 21.5L12 24l8.6-2.5L22.5 0zM17.8 5.4l-.2 2.3h-5.2l.2-2.3zm-5.4 4.4h5.2l-.3 3.3-2.3.6-2.3-.6-.2-2.1H9.6l.3 3.5 4.6 1.2 4.6-1.2.6-6.9.1-1.3H6.8l.3 3.5z"/></svg></IconWrapper>;
const TeamworkIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.095a1.23 1.23 0 00.41-1.412A9.99 9.99 0 0010 12c-2.31 0-4.438.784-6.131 2.095zM16.535 14.493A1.23 1.23 0 0115 15.905c-1.335.622-2.83.945-4.434.945-1.604 0-3.1-.323-4.434-.945a1.23 1.23 0 01-1.94-1.412A9.99 9.99 0 0110 12c1.604 0 3.1.323 4.434.945.3.14.544.362.701.648z"/></svg></IconWrapper>;
const CommunicationIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm10.5-2.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zM8.5 5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zM5.5 7.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5z" clipRule="evenodd"/></svg></IconWrapper>;
const ProblemSolvingIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 3.5a5.75 5.75 0 00-5.75 5.75c0 3.12 2.54 5.9 5.25 6.64v1.86a.75.75 0 001.5 0v-1.86c2.7-.74 5.25-3.52 5.25-6.64A5.75 5.75 0 0010 3.5zM10 13a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zM12.25 18a.75.75 0 00.75-.75v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 00.75.75zM7 15.75a.75.75 0 00.75.75h4.5a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75z"/></svg></IconWrapper>;
const AdaptabilityIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M15.312 11.342a1.25 1.25 0 01.938 2.319l-2.61 1.095-2.61-1.095a1.25 1.25 0 11.938-2.318l1.171.49 1.172-.49zM10 3.25a.75.75 0 01.75.75v5.336l1.72-1.72a.75.75 0 011.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V4a.75.75 0 01.75-.75zm-6.09 7.09a1.25 1.25 0 11-.938 2.319l2.61 1.095 2.61-1.095a1.25 1.25 0 11.938-2.318l-1.171.49-1.172-.49a1.25 1.25 0 01-.938-2.318z" clipRule="evenodd"/></svg></IconWrapper>;
const CreativityIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5 2a1 1 0 00-1 1v1.5a1 1 0 001 1v10.5a1 1 0 001 1h8a1 1 0 001-1V5.5a1 1 0 001-1V3a1 1 0 00-1-1H5zM4 3a2 2 0 012-2h10a2 2 0 012 2v1.5a2 2 0 01-2 2V17a2 2 0 01-2 2H6a2 2 0 01-2-2V6.5a2 2 0 01-2-2V3z" clipRule="evenodd"/><path d="M6 6h8v8H6V6z"/></svg></IconWrapper>;
const TimeManagementIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd"/></svg></IconWrapper>;

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        name: "Languages",
        skills: [
            { name: "Python", icon: <PythonIcon /> },
            { name: "JavaScript", icon: <JSIcon /> },
            { name: "TypeScript", icon: <TSIcon /> },
            { name: "SQL", icon: <SQLIcon /> },
            { name: "HTML", icon: <HTMLIcon /> },
            { name: "CSS", icon: <CSSIcon /> }
        ]
    },
    {
        name: "Soft Skills",
        skills: [
            { name: "Teamwork", icon: <TeamworkIcon /> },
            { name: "Communication", icon: <CommunicationIcon /> },
            { name: "Problem Solving", icon: <ProblemSolvingIcon /> },
            { name: "Adaptability", icon: <AdaptabilityIcon /> },
            { name: "Creativity", icon: <CreativityIcon /> },
            { name: "Time Management", icon: <TimeManagementIcon /> }
        ]
    }
];
export const CERTIFICATES: Certificate[] = [
    {
        title: "Generative AI with Large Language Models",
        issuer: "AWS & DeepLearning.AI",
        imageUrl: "/images/coursera_generative_ai_with_large_language_models.jpg",
        verifyUrl: "https://coursera.org/verify/QE2R7LP415DL"
    },
    {
        title: "Introduction to Generative AI",
        issuer: "Google Cloud",
        imageUrl: "/images/coursera_intro_to_generative_ai.jpg",
        verifyUrl: "https://coursera.org/verify/1BLRGFXJ9MZD"
    },
    {
        title: "Introduction to Artificial Intelligence (AI)",
        issuer: "IBM",
        imageUrl: "/images/coursera_introduction_to_artificial_intelligence_ai.jpg",
        verifyUrl: "https://coursera.org/verify/G3PXIL7L9XER"
    },
    {
        title: "Introduction to Responsible AI",
        issuer: "Google Cloud",
        imageUrl: "/images/coursera_introduction_to_responsible_ai.jpg",
        verifyUrl: "https://coursera.org/verify/I1GDPP3983U6"
    },
    {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        imageUrl: "/images/coursera_python_for_data_science_ai__development.jpg",
        verifyUrl: "https://coursera.org/verify/CYSVQVG3ST8Q"
    },
    {
        title: "AI Essentials",
        issuer: "Intel",
        imageUrl: "/images/coursera_ai_essentials.jpg",
        verifyUrl: "https://coursera.org/verify/3B5J9VX1V9KW"
    },
    {
        title: "AI For Everyone",
        issuer: "DeepLearning.AI",
        imageUrl: "/images/coursera_ai_for_everyone.jpg",
        verifyUrl: "https://coursera.org/verify/AV4LA0C68K08"
    },
    {
        title: "AI Foundations: Prompt Engineering with ChatGPT",
        issuer: "Arizona State University",
        imageUrl: "/images/coursera_ai_foundations_prompt_engineering_with_chatgpt.jpg",
        verifyUrl: "https://coursera.org/verify/HXHLZTVB05QT"
    },
    {
        title: "Artificial Intelligence on Microsoft Azure",
        issuer: "Microsoft",
        imageUrl: "/images/coursera_artificial_intelligence_on_microsoft_azure.jpg",
        verifyUrl: "https://coursera.org/verify/HCFK8GATMBZZ"
    },
    {
        title: "Building AI Powered Chatbots Without Programming",
        issuer: "IBM",
        imageUrl: "/images/coursera_building_ai_powered_chatbots.jpg",
        verifyUrl: "https://coursera.org/verify/MS0E4OMQVCKO"
    }
];
