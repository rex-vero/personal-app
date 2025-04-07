import { FaBootstrap, FaCss3, FaGitAlt, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa";
import { SiMui } from "react-icons/si";

export const icons = [
    { title: 'HTML', icon: <FaHtml5 />, color: '#e44e25', description: 'The first time I saw HTML, I thought frontend was easy. Just some clean tags and everything looked simple. Later, I realized that simplicity was just on the surface… still, it was a nice start, a good old feeling.' },
    { title: 'CSS', icon: <FaCss3 />, color: '#1572b6', description: 'Styling? At first glance, it was exciting! The idea of creating beauty with code felt magical. And learning CSS still felt easy, at least in the beginning.' },
    { title: 'Bootstrap', icon: <FaBootstrap />, color: '#820afa', description: "The first framework I got to know was Bootstrap, a tool that made CSS easier for developers. Even though it's an old tech, it still holds value for me." },
    { title: 'Sass', icon: <FaSass />, color: '#ce679a', description: 'Sass felt cool, giving developers more control over CSS and even letting us use some programming-like concepts. Learning it was honestly enjoyable.' },
    { title: 'JavaScript', icon: <FaJs />, color: '#f7df1e', description: 'And finally, a real challenge! learning JavaScript, the core of Front-End and the heart of programming logic. Despite its complexity, diving into it has always been and will always be something I truly enjoy & respect.' },
    { title: 'React', icon: <FaReact />, color: '#61dbfb', description: "I never thought I'd connect with React library this well, its simplicity and accessibility honestly amazed me. It showed me that moving forward is always worth it, and that I should make the most of the knowledge I've gained." },
    { title: 'Material-UI', icon: <SiMui />, color: '#007fff', description: "Since Bootstrap felt a bit outdated, I saw Material-UI as a great step forward to level up my design skills. One of its best strengths is the ready-to-use components with fast customization. honestly, it's amazing!" },
    { title: 'Git', icon: <FaGitAlt />, color: '#f05033', description: "To me, Git is essential. No matter your programming field. It's a free, cloud-based system for saving code, sharing it, and working as a team. Honestly, we have to admit… a lot of our problems are already solved because of it." }
];