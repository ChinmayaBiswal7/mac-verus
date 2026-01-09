import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6">Mac Verus</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We Discover Problems. We Build the Future.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-gray-500 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-500 hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-gray-500 hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#team" className="text-gray-500 hover:text-primary transition-colors">Team</a></li>
                            <li><a href="#contact" className="text-gray-500 hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            <a href="mailto:contact@macverus.com" className="flex items-center gap-3 text-gray-500 hover:text-primary transition-colors">
                                <span className="w-5 h-5 border border-primary/20 rounded flex items-center justify-center text-primary text-xs">✉</span>
                                contact@macverus.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 text-center">
                    <p className="text-gray-600 text-sm">
                        &copy; {new Date().getFullYear()} Mac Verus. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
