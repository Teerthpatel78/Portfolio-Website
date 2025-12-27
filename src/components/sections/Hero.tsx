'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy load 3D component only on desktop
const FloatingShape = dynamic(() => import('@/components/3d/FloatingShape'), {
    ssr: false,
    loading: () => null,
});

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-animated"
        >
            {/* 3D Background - Hidden on mobile for performance */}
            <div className="hidden lg:block absolute inset-0 opacity-60">
                <FloatingShape />
            </div>

            {/* Mobile gradient orbs fallback */}
            <div className="lg:hidden absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl float-animation" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '-3s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-purple-400 text-sm md:text-base font-medium tracking-wider uppercase mb-4"
                    >
                        Welcome to my portfolio
                    </motion.p>



                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"

                    >
                        Flutter & Mobile Application Developer
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium mb-6"
                    >
                        Hi, I&apos;m{' '}
                        <span className="gradient-text">Teerth Patel</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10"
                    >
                        Building scalable, high-performance cross-platform mobile applications
                        with clean architecture and beautiful user experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-full 
                         shadow-lg hover:shadow-purple-500/25 transition-all duration-300 w-full sm:w-auto text-center"
                        >
                            View Projects
                        </motion.a>

                        <motion.a
                            href="Teerth_Patel_CV.pdf"
                            download="Teerth_Patel_CV.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 glass text-white font-medium rounded-full 
                         hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
                        >
                            Download CV
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
