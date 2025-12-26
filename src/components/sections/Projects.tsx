'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
    {
        title: 'Gym Management App',
        description: 'A comprehensive gym management solution with member tracking, workout plans, subscription management, and real-time analytics dashboard.',
        tech: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL'],
        color: 'from-purple-500 to-pink-500',
        icon: '🏋️',
    },
    {
        title: 'Job Search Application',
        description: 'A modern job search platform featuring advanced filtering, saved searches, application tracking, and push notifications for new opportunities.',
        tech: ['Flutter', 'REST API', 'Provider', 'SQLite'],
        color: 'from-blue-500 to-cyan-500',
        icon: '💼',
    },
    {
        title: 'Employee Data Management',
        description: 'Enterprise-grade employee management system with document viewer supporting PDF and images, data export, and role-based access control.',
        tech: ['Flutter', 'PDF Viewer', 'Image Picker', 'Firebase'],
        color: 'from-green-500 to-emerald-500',
        icon: '📊',
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="projects" className="relative py-20 lg:py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Some of the applications I&apos;ve built that showcase my skills
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative group"
                        >
                            {/* Card */}
                            <motion.div
                                animate={{
                                    scale: hoveredIndex === index ? 1.02 : 1,
                                    y: hoveredIndex === index ? -5 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="relative glass rounded-2xl p-6 h-full flex flex-col overflow-hidden"
                            >
                                {/* Top gradient bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />

                                {/* Icon */}
                                <div className="text-4xl mb-4">{project.icon}</div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover gradient overlay */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                                />
                            </motion.div>

                            {/* Glow effect */}
                            <div
                                className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
