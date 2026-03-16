import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
    {
        question: "How long does it take to see SEO results?",
        answer: "SEO is a long-term strategy. Typically, you can expect to see significant improvements in rankings and traffic within 3 to 6 months, depending on your niche and competition."
    },
    {
        question: "Which platform is better for Ads: Google or Facebook?",
        answer: "It depends on your goal! Google Ads are great for capturing intent (people searching for you), while Facebook Ads are excellent for building awareness and targeting specific demographics."
    },
    {
        question: "Do you provide custom marketing packages?",
        answer: "Absolutely. We understand every business is unique. We tailor our strategies and packages based on your specific business goals, budget, and industry."
    },
    {
        question: "How do you track the success of campaigns?",
        answer: "We use advanced tracking tools like Google Analytics 4, Meta Pixel, and Search Console. You'll receive monthly reports with clear data on traffic, leads, and ROI."
    },
    {
        question: "What is the difference between SMM and SMO?",
        answer: "SMO (Social Media Optimization) focuses on building your organic presence and profile authority, while SMM (Social Media Marketing) involves paid advertising and promotional campaigns to scale reach rapidly."
    },
    {
        question: "Why is content marketing important?",
        answer: "Content marketing builds trust and authority. By providing value to your audience through blogs, videos, and guides, you establish your expertise and improve your organic search rankings."
    },
    {
        question: "Do I need a large budget for PPC advertising?",
        answer: "Not necessarily. We can start with a modest budget and scale up as we see positive results. We optimize every rupee to ensure the highest possible Return on Ad Spend (ROAS)."
    },
    {
        question: "Can you help with brand identity and logo design?",
        answer: "Yes, we offer complete digital branding services, including logo design, brand voice development, and visual identity to ensure your brand looks premium across all platforms."
    }
]

const FAQItem = ({ faq, isOpen, toggle }) => {
    return (
        <div className="mb-4">
            <button
                onClick={toggle}
                className={`w-full text-left p-6 rounded-2xl glass-card border-white/5 flex justify-between items-center transition-all ${isOpen ? 'border-primary/50' : ''}`}
            >
                <div className="flex items-center gap-4">
                    <HelpCircle className="text-primary" size={20} />
                    <span className="text-white font-bold">{faq.question}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="text-slate-500" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 text-slate-400 leading-relaxed bg-white/5 rounded-b-2xl mt-[-1rem] border-x border-b border-white/5">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQ = ({ limit = 6 }) => {
    const [openIndex, setOpenIndex] = useState(0)
    const displayFaqs = faqs.slice(0, limit);

    // AEO/GEO: FAQ Schema Structured Data
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": displayFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <section className="py-20 bg-dark">
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">FA<span className="text-gradient">Q</span></h2>
                    <p className="text-slate-400 text-lg">Common questions about our digital marketing process.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {displayFaqs.map((faq, i) => (
                        <FAQItem
                            key={i}
                            faq={faq}
                            isOpen={openIndex === i}
                            toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                        />
                    ))}
                </div>
            </div>
        </section >
    )
}

export default FAQ
