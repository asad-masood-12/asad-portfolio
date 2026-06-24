import { motion } from 'motion/react';
import {
  HiOutlineCpuChip,
  HiOutlineCommandLine,
  HiOutlineCubeTransparent,
  HiOutlineEye,
  HiOutlineMicrophone,
  HiOutlineChartBarSquare,
  HiOutlineCloud,
  HiOutlineCircleStack,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

const iconMap = {
  brain: HiOutlineCpuChip,
  workflow: HiOutlineCommandLine,
  layers: HiOutlineCubeTransparent,
  eye: HiOutlineEye,
  mic: HiOutlineMicrophone,
  chart: HiOutlineChartBarSquare,
  cloud: HiOutlineCloud,
  database: HiOutlineCircleStack,
  tool: HiOutlineWrenchScrewdriver,
};

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building end-to-end AI solutions
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || HiOutlineCpuChip;
            return (
              <motion.div
                key={cat.title}
                className="skill-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    <Icon size={20} />
                  </div>
                  <h3 className="skill-card-title">{cat.title}</h3>
                </div>
                <div className="skill-tags">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
