import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div {...fadeInUp}>
          <p className="section-label">About</p>
          <h2 className="section-title">A bit about me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
          >
            <p>
              I'm <strong>Vidushi Singh</strong>, a third-year engineering student 
              with a deep passion for frontend development and UI/UX design. I love 
              turning ideas into elegant, functional interfaces that people enjoy using.
            </p>
            <p>
              My work sits at the intersection of <strong>design and code</strong> — I believe 
              great user experiences come from understanding both the visual language and the 
              technical foundation. From animated landing pages to full-stack applications, 
              I enjoy building things that are both beautiful and purposeful.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new design trends, 
              experimenting with creative animations, or learning about emerging 
              web technologies.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Projects Shipped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years of Learning</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Curiosity for Design</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
