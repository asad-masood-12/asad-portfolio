import { motion } from 'motion/react';
import './Footer.css';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <motion.div
        className="footer-inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-brand">
          <span className="footer-logo">Asad.dev</span>
          <span className="footer-tagline">AI Engineer — Building Intelligent Systems</span>
        </div>

        <ul className="footer-links">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Asad Ullah Masood. Built with <span className="heart">♥</span> and React
        </p>
      </div>
    </footer>
  );
}
