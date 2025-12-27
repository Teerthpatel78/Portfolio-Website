'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTO_REPLY_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus({ type: 'error', message: 'Email service is not configured correctly.' });
            setIsSubmitting(false);
            return;
        }

        try {
            // Send Admin Notification
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current!,
                publicKey
            );

            // Send User Auto-Reply (only if configured)
            if (autoReplyTemplateId) {
                // We need to pass the form data explicitly if using sendForm doesn't work well for the second call 
                // or just reuse sendForm if the input names match the template variables.
                // However, sendForm reads from the DOM. 
                // A safer bet for the second email (auto-reply) is often 'send' with an object, 
                // but sendForm is fine if the template variables (user_name, user_email) match the input names.
                await emailjs.sendForm(
                    serviceId,
                    autoReplyTemplateId,
                    formRef.current!,
                    publicKey
                );
            }

            setStatus({ type: 'success', message: 'Message sent successfully!' });
            formRef.current?.reset();

            // Clear success message after 3 seconds
            setTimeout(() => {
                setStatus({ type: null, message: '' });
            }, 3000);

        } catch (error: any) {
            console.error('EmailJS Error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-20 lg:py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {status.message && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mb-8 p-4 rounded-lg text-center ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                            }`}
                    >
                        {status.message}
                    </motion.div>
                )}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s work together to create something amazing.
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="max-w-4xl"
                        >
                            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="Your name"
                                            name="user_name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="your@email.com"
                                            name="user_email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                            placeholder="Your message..."
                                            name="message"
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg
                           hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col justify-center"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Connect with me
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Feel free to reach out through any of these platforms. I&apos;m always open to discussing new projects and opportunities.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-sm sm:text-base font-medium tracking-wide">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -2 }}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 uppercase relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
                                    </motion.a>
                                ))}
                            </div>

                            {/* Quick contact info */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-gray-400 text-sm">
                                    📍 Gujarat, India
                                </p>

                            </div>
                        </motion.div>
                    </div>
                </div>
        </section>
    );
}
