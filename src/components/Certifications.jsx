import { motion } from 'motion/react';
import { HiOutlineAcademicCap, HiOutlineCodeBracket } from 'react-icons/hi2';
import { certifications } from '../data/portfolioData';
import './Certifications.css';

const certIconMap = {
  award: HiOutlineAcademicCap,
  code: HiOutlineCodeBracket,
};

export default function Certifications() {
  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="certs-grid">
          {certifications.map((cert, index) => {
            const Icon = certIconMap[cert.icon] || HiOutlineAcademicCap;
            return (
              <motion.div
                key={cert.title}
                className="cert-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="cert-icon">
                  <Icon size={22} />
                </div>
                <div className="cert-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
