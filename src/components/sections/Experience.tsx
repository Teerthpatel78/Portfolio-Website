'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
    {
        title: 'Mobile Application Developer Intern',
        company: 'Akino Labs',
        period: 'Recent',
        description: 'Developed cross-platform mobile applications using Flutter. Collaborated with the team to implement new features and optimize app performance.',
        skills: ['Flutter', 'Dart', 'REST APIs', 'State Management'],
    },
    {
        title: 'Software Developer Intern',
        company: 'BlackID Solution',
        period: 'Previous',
        description: 'Worked on software development projects, gaining hands-on experience with various technologies and development methodologies.',
        skills: ['Software Development', 'Problem Solving', 'Team Collaboration'],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="relative py-20 lg:py-32">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Professional experience and internships
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent transform md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-x-1/2 mt-6 md:mt-8 z-10">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-ping opacity-20" />
                            </div>

                            {/* Card */}
                            <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="glass rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                                >
                                    <span className="text-sm text-purple-400 font-medium">{exp.period}</span>
                                    <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
                                    <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                                    <p className="text-gray-400 text-sm mb-4">{exp.description}</p>

                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
