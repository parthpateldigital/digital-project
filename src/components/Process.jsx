import React from 'react'
import { motion } from 'framer-motion'
import { Target, PenTool, Rocket, TrendingUp } from 'lucide-react'

const steps = [
    {
        num: '01',
        title: 'Discovery & Strategy',
        desc: 'We analyze your market, competitors, and current digital footprint to craft a high-ROI strategy tailored to your goals.',
        icon: Target,
        color: 'from-blue-500/20 to-sky-400/20',
        textColor: 'text-blue-400'
    },
    {
        num: '02',
        title: 'Creation & Setup',
        desc: 'Our team builds the foundation—optimizing profiles, creating high-converting content, and setting up tracking ecosystems.',
        icon: PenTool,
        color: 'from-purple-500/20 to-pink-400/20',
        textColor: 'text-purple-400'
    },
    {
        num: '03',
        title: 'Execution & Launch',
        desc: 'We deploy targeted campaigns, publish optimized content, and execute link-building to scale your visibility rapidly.',
        icon: Rocket,
        color: 'from-pink-500/20 to-rose-400/20',
        textColor: 'text-pink-400'
    },
    {
        num: '04',
        title: 'Scale & Optimize',
        desc: 'Continuous monitoring, A/B testing, and data-driven refinements ensure maximum return on every marketing rupee spent.',
        icon: TrendingUp,
        color: 'from-emerald-500/20 to-teal-400/20',
        textColor: 'text-emerald-400'
    }
]

const Process = () => {
    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-bold uppercase tracking-widest"
                    >
                        How We Work
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                    >
                        Our Proven <span className="text-gradient">Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        We turn complex digital marketing goals into a simple, effective, and transparent 4-step execution plan.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card p-8 rounded-[2rem] border-white/5 relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="absolute top-6 right-8 text-5xl font-black text-white/5 group-hover:text-primary/10 transition-colors duration-300">
                                {step.num}
                            </div>

                            <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center ${step.textColor} mb-8 shadow-lg`}>
                                <step.icon size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed font-light">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process
