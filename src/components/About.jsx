import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id="about" className="py-20 bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-white mb-8">About Mac Verus</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        Innovating at the intersection of technology and real-world challenges
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-16">
                        Mac Verus is a technology-driven startup that focuses on identifying real-world problems across any
                        domain—education, transport, operations, management, automation, and beyond. Instead of simply
                        repairing existing systems, we analyze gaps, inefficiencies, and manual processes, then build smart,
                        scalable, and innovative tech solutions.
                    </p>
                </motion.div>

                {/* Our Approach */}
                <div className="mb-32">
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-16 relative inline-block"
                    >
                        Our Approach
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded shadow-[0_0_15px_rgba(20,184,166,1)]"></div>
                    </motion.h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { id: "01", title: "Discover", desc: "We identify problems that others overlook through deep analysis and research." },
                            { id: "02", title: "Design", desc: "We architect solutions using modern technology stacks and best practices." },
                            { id: "03", title: "Deploy", desc: "We build and launch scalable systems that solve real-world challenges." },
                            { id: "04", title: "Deliver", desc: "We continuously optimize and enhance solutions for maximum impact." }
                        ].map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card p-8 rounded-lg border border-gray-800 text-left hover:border-primary hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 group"
                            >
                                <span className="text-4xl text-primary font-bold mb-4 block group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]">{item.id}</span>
                                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* What Drives Us */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-16 relative inline-block"
                    >
                        What Drives Us
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded shadow-[0_0_15px_rgba(20,184,166,1)]"></div>
                    </motion.h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-lg border border-gray-800 text-center hover:border-primary hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.072-4-3-6-.928 2-1.928 3.857-3 6 0 1-1.5 1.62-1.5 3.5a2.5 2.5 0 0 0 2.5 2.5c1.38 0 2.5-1.12 2.5-2.5M15.5 14.5A2.5 2.5 0 0 0 18 12c0-1.38-.5-2-1-3-1.072-2.143-2.072-4-3-6-.928 2-1.928 3.857-3 6 0 1-1.5 1.62-1.5 3.5a2.5 2.5 0 0 0 2.5 2.5c1.38 0 2.5-1.12 2.5-2.5" /></svg>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Innovation First</h4>
                            <p className="text-gray-400">Constantly pushing boundaries with creative solutions</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-lg border border-gray-800 text-center hover:border-primary hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Problem-Focused</h4>
                            <p className="text-gray-400">Starting with the problem, not the technology</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-lg border border-gray-800 text-center hover:border-primary hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Future-Ready</h4>
                            <p className="text-gray-400">Building solutions that scale and adapt over time</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
