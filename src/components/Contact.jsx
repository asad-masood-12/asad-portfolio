import { motion } from 'motion/react';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
} from 'react-icons/hi2';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s discuss how I can help bring your AI vision to life.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let&apos;s build something amazing together</h3>
            <p>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part
              of your next AI venture. Feel free to reach out through any channel below.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <HiOutlineEnvelope size={20} />
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                  </span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <HiOutlinePhone size={20} />
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">Phone</span>
                  <span className="contact-detail-value">
                    <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                  </span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <HiOutlineMapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-social-link"
                aria-label="Email"
              >
                <HiOutlineEnvelope />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                window.open(
                  `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`,
                  '_self'
                );
              }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input type="text" id="contact-name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input type="email" id="contact-email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input type="text" id="contact-subject" name="subject" placeholder="How can I help?" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" placeholder="Tell me about your project..." required />
              </div>
              <div className="form-submit">
                <button type="submit" className="btn btn-primary">
                  <HiOutlinePaperAirplane size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
