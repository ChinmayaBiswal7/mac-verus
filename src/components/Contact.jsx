import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div id="contact" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
                    <p className="text-gray-400">Let's discuss how we can help transform your ideas into reality</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <p className="text-gray-400 mb-8">
                            Reach out to us and we'll get back to you as soon as possible.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-teal-900/30 rounded flex items-center justify-center shrink-0">
                                    <Mail className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email</h4>
                                    <a href="mailto:contact@macverus.com" className="text-white hover:text-primary transition-colors">contact@macverus.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-teal-900/30 rounded flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                                    <p className="text-white">Bangalore, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-lg border border-gray-800">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
