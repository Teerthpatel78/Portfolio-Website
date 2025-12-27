'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/teerth-patel-a2658b25b/',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/Teerthpatel78',
    },
    {
        name: 'Email',
        href: 'mailto:teerthpatel74@gmail.com',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/teerth_patel74?igsh=MWg5c215bnZkdnI2ZQ%3D%3D&utm_source=qr',
    },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Connect</span>
                        </h2>

                        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
                            I'm always open to discussing new projects, creative ideas, or opportunities.
                            Feel free to reach out through any of the platforms below.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="flex flex-col items-center gap-3 group"
                                >
                                    <span className="text-gray-400 font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                                        {link.name}
                                    </span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Quick contact info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-16 pt-8 border-t border-white/10"
                        >
                            <p className="text-gray-500 text-sm tracking-widest uppercase">
                                📍 Gujarat, India
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
