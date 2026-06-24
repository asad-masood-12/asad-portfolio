import { motion } from 'motion/react';
import { HiOutlineDocumentArrowDown, HiOutlineEnvelope } from 'react-icons/hi2';
import { personalInfo, education } from '../data/portfolioData';
import profileImg from '../../Asad Ullah Masood.jpg';
import './About.css';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Get to know me</h2>
          <p className="section-subtitle">
            A passionate AI Engineer building the future with intelligent systems
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about-avatar-container">
              <div className="about-avatar-ring" />
              <img src={profileImg} alt="Asad Ullah Masood" className="about-avatar-img" />
              <motion.div
                className="about-floating-tag"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                🤖 AI/ML Expert
              </motion.div>
              <motion.div
                className="about-floating-tag"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                🎙️ Voice AI
              </motion.div>
              <motion.div
                className="about-floating-tag"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                🔗 LangChain
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3>Crafting intelligent solutions that matter</h3>
            <p className="about-text">
              I'm an <span className="highlight">AI Engineer</span> with a passion for building and deploying{' '}
              <span className="highlight">real-world AI systems</span>. My expertise spans{' '}
              <span className="highlight">LLM-based applications</span>,{' '}
              <span className="highlight">RAG pipelines</span>, and{' '}
              <span className="highlight">voice-driven solutions</span>. I specialize in designing{' '}
              <span className="highlight">multi-agent workflows</span> and integrating modern AI APIs into
              scalable backend systems.
            </p>
            <p className="about-text">
              Currently pursuing my <span className="highlight">{education.degree}</span> at{' '}
              {education.university}, I bring hands-on experience translating complex business requirements into
              practical, production-ready solutions.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <span className="about-info-label">Location</span>
                <span className="about-info-value">{personalInfo.location}</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Education</span>
                <span className="about-info-value">{education.degree}</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">University</span>
                <span className="about-info-value">{education.university}</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Graduating</span>
                <span className="about-info-value">{education.year}</span>
              </div>
            </div>

            <div className="about-actions">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <HiOutlineEnvelope size={18} />
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
