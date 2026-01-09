import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div id="home" className="min-h-screen flex items-center justify-center pt-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    We Discover Problems. We <br />
                    <span className="text-white">Build the Future.</span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
                    A technology-driven startup that identifies real-world problems and solves them using modern technology.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-primary hover:bg-teal-600 text-black font-semibold px-8 py-3 rounded text-lg transition-colors flex items-center gap-2">
                        Explore Services <ArrowRight size={20} />
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded text-lg transition-colors">
                        Get in Touch
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
