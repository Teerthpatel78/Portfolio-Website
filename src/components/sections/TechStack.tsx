'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techStack = [
    {
        category: 'Languages',
        items: [
            { name: 'Dart', color: '#0175C2' },
            { name: 'Java', color: '#ED8B00' },
            { name: 'Python', color: '#3776AB' },
            { name: 'C++', color: '#00599C' },
        ]
    },
    {
        category: 'Frameworks',
        items: [
            { name: 'Flutter', color: '#02569B' },
        ]
    },
    {
        category: 'Backend & Database',
        items: [
            { name: 'Firebase', color: '#FFCA28' },
            { name: 'Supabase', color: '#3ECF8E' },
            { name: 'MongoDB', color: '#47A248' },
            { name: 'MySQL', color: '#4479A1' },
        ]
    },
    {
        category: 'Tools',
        items: [
            { name: 'Git', color: '#F05032' },
            { name: 'GitHub', color: '#ffffff' },
            { name: 'VS Code', color: '#007ACC' },
            { name: 'Android Studio', color: '#3DDC84' },
        ]
    },
];

export default function TechStack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="tech-stack" className="relative py-20 lg:py-32">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {techStack.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="glass rounded-2xl p-6"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                                {category.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="relative group"
                                    >
                                        <div
                                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                                 hover:border-white/20 transition-all duration-300 cursor-default"
                                        >
                                            <span className="text-gray-300 group-hover:text-white transition-colors flex items-center gap-2">
                                                <span
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ backgroundColor: tech.color }}
                                                />
                                                {tech.name}
                                            </span>
                                        </div>

                                        {/* Glow effect on hover */}
                                        <div
                                            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-lg"
                                            style={{ backgroundColor: tech.color }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
