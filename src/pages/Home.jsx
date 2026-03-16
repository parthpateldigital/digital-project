import React from 'react'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import WhyChooseUs from '../components/WhyChooseUs'
import Results from '../components/Results'
import BlogPreview from '../components/BlogPreview'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Process from '../components/Process'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <ServicesGrid />
            <Process />
            <WhyChooseUs />
            <Results />
            <BlogPreview />
            <Testimonials />
            <FAQ limit={8} />
            <FinalCTA />
        </motion.div>
    )
}

export default Home
