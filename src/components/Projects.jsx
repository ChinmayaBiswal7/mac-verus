import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Bus, Layout, Smartphone } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Bus Tracker",
            description: "Real-time bus tracking application designed specifically for college students to monitor routes and schedules effectively.",
            link: "https://bus-tracker-kmd5.onrender.com",
            icon: <Bus size={32} />,
            tags: ["Real-time Tracking", "Student Friendly", "Route Management"]
        },
        {
            title: "Future Project",
            description: "An upcoming innovative solution that will revolutionize how we interact with digital services.",
            link: "#",
            icon: <Layout size={32} />,
            tags: ["Innovation", "Future Tech", "Coming Soon"]
        }
    ];

    return (
        <div id="projects" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded shadow-[0_0_15px_rgba(20,184,166,1)]"></div>
                    <p className="text-gray-400 mt-4">Showcasing our latest work and technological solutions</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 60 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-card p-8 rounded-lg border border-gray-800 hover:border-primary hover:shadow-[0_0_50px_rgba(20,184,166,0.6)] transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] text-primary">
                                    {project.icon}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary transition-colors duration-300 p-2"
                                >
                                    <ExternalLink size={24} />
                                </a>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                            <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
