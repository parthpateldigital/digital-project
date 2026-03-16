import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import FinalCTA from '../components/FinalCTA'

const TermsOfService = () => {
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
                            Terms of <span className="text-gradient">Service</span>
                        </h1>

                        <div className="glass-card p-10 rounded-3xl border-white/10 space-y-8 text-lg font-light leading-relaxed">
                            <p className="text-slate-400 italic">Last Updated: March 16, 2026</p>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">1. Acceptance of Terms</h2>
                                <p>By accessing and using the services of Digital Parth Patel, you accept and agree to be bound by the terms and provision of this agreement.</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">2. Description of Service</h2>
                                <p>Digital Parth Patel provides digital marketing services including SEO, SMM, and PPC management. All services are subject to the specific service agreements signed between the agency and the client.</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">3. Client Obligations</h2>
                                <p>Clients are expected to provide accurate information and necessary access to digital assets required for the fulfillment of the services.</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">4. Payment Terms</h2>
                                <p>Service fees and payment schedules are defined in individual project proposals and contracts. All fees are non-refundable once the work has commenced.</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">5. Intellectual Property</h2>
                                <p>All content created during the service term becomes the intellectual property of the client upon full payment, unless otherwise specified in the contract.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <FinalCTA />
        </div>
    )
}

export default TermsOfService
