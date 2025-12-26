'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="about" className="relative py-20 lg:py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left - Image/Visual */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
                            {/* Gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl" />

                            {/* Main card */}
                            <div className="relative glass rounded-3xl p-8 h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                        <span className="text-5xl font-bold text-white">TP</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Teerth Patel</h3>
                                    <p className="text-purple-400">Computer Engineering Graduate</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            About <span className="gradient-text">Me</span>
                        </h2>

                        <div className="space-y-4 text-gray-300 text-base lg:text-lg">
                            <p>
                                I&apos;m a passionate <span className="text-white font-medium">Computer Engineering graduate</span> with
                                a strong foundation in mobile application development. My expertise lies in building
                                beautiful, performant cross-platform applications using Flutter and Dart.
                            </p>

                            <p>
                                With hands-on experience in <span className="text-purple-400">Firebase</span>,
                                <span className="text-blue-400"> Supabase</span>, and various REST APIs, I create
                                applications that are not only visually stunning but also robust and scalable.
                            </p>

                            <p>
                                I believe in writing clean, maintainable code and following best practices in
                                UI/UX design to deliver exceptional user experiences.
                            </p>
                        </div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-4 mt-8"
                        >
                            {[
                                { number: '3+', label: 'Projects' },
                                { number: '2', label: 'Internships' },
                                { number: '10+', label: 'Technologies' },
                            ].map((stat, index) => (
                                <div key={index} className="glass rounded-xl p-4 text-center">
                                    <div className="text-2xl lg:text-3xl font-bold gradient-text">{stat.number}</div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
