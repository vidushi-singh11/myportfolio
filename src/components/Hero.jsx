import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { useMagnetic } from '../hooks/useMagnetic';

function Hero() {
  const magneticPrimary = useMagnetic(0.25);
  const magneticSecondary = useMagnetic(0.2);
  const magneticImage = useMagnetic(0.08);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Vidushi<br />Singh</h1>
            <p className="hero-title">Frontend Developer & UI/UX Designer</p>
            <p className="hero-description">
              A third-year engineering student passionate about crafting modern, 
              interactive, and accessible web experiences that feel alive.
            </p>
            <div className="hero-cta">
              <button
                ref={magneticPrimary.ref}
                style={magneticPrimary.style}
                className="btn-primary"
                onClick={() => handleScroll('projects')}
              >
                View Projects <HiArrowRight />
              </button>
              <button
                ref={magneticSecondary.ref}
                style={magneticSecondary.style}
                className="btn-secondary"
                onClick={() => handleScroll('contact')}
              >
                Get in Touch
              </button>
            </div>
          </motion.div>

          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="hero-image-container"
              ref={magneticImage.ref}
              style={magneticImage.style}
            >
              <div className="hero-image-glow" />
              <img
                src="/assets/me.png"
                alt="Vidushi Singh"
                className="hero-image"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span>scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}

export default Hero;
