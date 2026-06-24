import { motion } from 'motion/react';
import { HiOutlineStar } from 'react-icons/hi2';
import { projects } from '../data/portfolioData';
import './Projects.css';

const projectEmojis = ['🏨', '🛡️', '🇪🇺', '💬', '🚗', '📺', '📄'];

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world AI systems built from concept to deployment
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card glass-card ${index === 0 ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="project-card-accent"
                style={{ background: `linear-gradient(to right, ${project.color}, ${project.color}88)` }}
              />
              <div className="project-card-body">
                {index === 0 ? (
                  <>
                    <div className="project-card-content">
                      <div className="project-card-header">
                        <div className="project-featured-badge">
                          <HiOutlineStar size={14} />
                          Featured Project
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-subtitle">{project.subtitle}</p>
                      </div>
                      <ul className="project-highlights">
                        {project.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                      <div className="project-tech">
                        {project.tech.map((t) => (
                          <span key={t} className="project-tech-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                    <motion.div
                      className="project-featured-visual"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="project-visual-icon">{projectEmojis[index]}</div>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <div className="project-card-header">
                      <span className="project-number">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                    </div>
                    <ul className="project-highlights">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                    <div className="project-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="project-tech-tag">{t}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
