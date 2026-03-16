import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import FinalCTA from '../components/FinalCTA'

const CookiePolicy = () => {
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
                            Cookie <span className="text-gradient">Policy</span>
                        </h1>

                        <div className="glass-card p-10 rounded-3xl border-white/10 space-y-8 text-lg font-light leading-relaxed">
                            <p className="text-slate-400 italic">Last Updated: March 16, 2026</p>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">1. What Are Cookies</h2>
                                <p>Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">2. How We Use Cookies</h2>
                                <p>When you use and access Digital Parth Patel's services, we may place a number of cookies files in your web browser. We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics, and to store your preferences.</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">3. Third-party Cookies</h2>
                                <p>In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service and so on (e.g., Google Analytics).</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">4. Your Choices Regarding Cookies</h2>
                                <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <FinalCTA />
        </div>
    )
}

export default CookiePolicy
