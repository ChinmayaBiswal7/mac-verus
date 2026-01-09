import React from 'react';
import { Search, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div id="services" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
                    <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded shadow-[0_0_15px_rgba(20,184,166,1)]"></div>
                    <p className="text-gray-400 mt-4">Comprehensive technology solutions tailored to solve your unique challenges</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Service 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-lg border border-gray-800 hover:border-primary hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_15px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]">
                            <Search className="text-primary group-hover:text-black transition-colors duration-300" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Problem Discovery & Analysis</h3>
                        <p className="text-gray-400">
                            We identify gaps, inefficiencies, and manual processes in existing systems across any domain.
                        </p>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-lg border border-gray-800 hover:border-primary hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_15px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]">
                            <Code className="text-primary group-hover:text-black transition-colors duration-300" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Software Development</h3>
                        <p className="text-gray-400">
                            Building scalable, efficient, and user-friendly software solutions tailored to your specific needs.
                        </p>
                    </motion.div>
                    {/* Service 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-lg border border-gray-800 hover:border-primary hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_15px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]">
                            <Code className="text-primary group-hover:text-black transition-colors duration-300" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">AI & Automation Solutions</h3>
                        <p className="text-gray-400">
                            Leveraging artificial intelligence and automation to streamline operations and enhance productivity.
                        </p>
                    </motion.div>

                    {/* Service 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-lg border border-gray-800 hover:border-primary hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_15px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]">
                            <Code className="text-primary group-hover:text-black transition-colors duration-300" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">System Design & Optimization</h3>
                        <p className="text-gray-400">
                            Designing robust system architectures and optimizing existing infrastructures for peak performance.
                        </p>
                    </motion.div>

                    {/* Service 5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-lg border border-gray-800 hover:border-primary hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_15px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]">
                            <Code className="text-primary group-hover:text-black transition-colors duration-300" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Tech-based Innovation</h3>
                        <p className="text-gray-400">
                            Creating innovative digital solutions that transform challenges into opportunities for growth.
                        </p>
                    </motion.div>
                </div>

                {/* Why Choose Our Services */}
                <div className="mt-32 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Services?</h2>
                        <div className="h-1 w-24 bg-primary mx-auto rounded shadow-[0_0_15px_rgba(20,184,166,1)]"></div>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-lg border border-gray-800 flex gap-6 items-start hover:border-primary hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300"
                        >
                            <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Domain Agnostic</h3>
                                <p className="text-gray-400">We work across any industry—education, healthcare, finance, logistics, and more.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-lg border border-gray-800 flex gap-6 items-start hover:border-primary hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300"
                        >
                            <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">End-to-End Solutions</h3>
                                <p className="text-gray-400">From problem identification to deployment and maintenance, we handle it all.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-lg border border-gray-800 flex gap-6 items-start hover:border-primary hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300"
                        >
                            <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Modern Tech Stack</h3>
                                <p className="text-gray-400">Utilizing the latest technologies including AI, cloud computing, and automation tools.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-lg border border-gray-800 flex gap-6 items-start hover:border-primary hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300"
                        >
                            <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Scalable Architecture</h3>
                                <p className="text-gray-400">Building systems designed to grow with your business needs.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
