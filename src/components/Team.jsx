import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const Team = () => {
    const team = [
        {
            name: "Chinmaya Biswal",
            role: "Founder",
            description: "Visionary leader driving Mac Verus's mission to solve real-world problems through technology."
        },
        {
            name: "Akash Maity",
            role: "Co-Founder",
            description: "Strategic thinker focused on building scalable solutions and fostering innovation."
        },
        {
            name: "Manish Sarkar",
            role: "Co-Founder",
            description: "Technical expert passionate about leveraging cutting-edge technology for impactful solutions."
        },
        {
            name: "Ananya Roy",
            role: "Designer",
            description: "Creative designer crafting exceptional user experiences and visual identities."
        }
    ];

    return (
        <div id="team" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
                    <p className="text-gray-400">Meet the innovators behind Mac Verus</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-lg text-center border border-gray-800 hover:border-primary hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 group"
                        >
                            <div className="w-20 h-20 bg-teal-900/30 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]">
                                <User className="text-primary group-hover:text-black transition-colors duration-300" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                            <p className="text-primary text-sm font-medium mb-4 uppercase drop-shadow-[0_0_5px_rgba(20,184,166,0.8)]">{member.role}</p>
                            <p className="text-gray-400 text-sm">{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
