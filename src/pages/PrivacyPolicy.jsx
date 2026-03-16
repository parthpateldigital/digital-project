import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import FinalCTA from '../components/FinalCTA'

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="pt-24 min-h-screen bg-slate-950 text-slate-300">
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-12 uppercase tracking-tight">
                            Privacy <span className="text-gradient">Policy</span>
                        </h1>

                        <div className="glass-card p-10 rounded-3xl border-white/10 space-y-8 text-lg font-light leading-relaxed">
                            <p className="text-slate-400 italic">Last Updated: March 16, 2026</p>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">1. Information We Collect</h2>
                                <p>We collect information that you provide directly to us through our contact forms, audit requests, and newsletter signups. This may include your name, email address, phone number, and business details.</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">2. How We Use Your Information</h2>
                                <p>We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Digital Parth Patel and our users. We also use this information to offer you tailored content—like giving you more relevant search results and ads.</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">3. Data Security</h2>
                                <p>We work hard to protect Digital Parth Patel and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We use encryption to keep your data private while in transit.</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">4. Third-Party Services</h2>
                                <p>We do not share your personal information with companies, organizations, or individuals outside of Digital Parth Patel except in cases where we have your consent or for legal reasons.</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">5. Contact Us</h2>
                                <p>If you have any questions about this Privacy Policy, please contact us at parthpateldigital@gmail.com.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <FinalCTA />
        </div>
    )
}

export default PrivacyPolicy
