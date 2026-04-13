import { motion } from 'framer-motion';
import { HiCode, HiColorSwatch, HiCog } from 'react-icons/hi';

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: <HiCode />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'UI/UX Design',
    icon: <HiColorSwatch />,
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
  },
  {
    title: 'Tools & Technologies',
    icon: <HiCog />,
    skills: ['Git', 'VS Code', 'npm', 'Vercel', 'Firebase'],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div {...fadeInUp}>
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills & Tools</h2>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="skill-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(139, 92, 246, 0.2)',
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="skill-group-title">
                <span className="icon">{group.icon}</span>
                {group.title}
              </h3>
              <div className="skill-chips">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-chip"
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                      backgroundColor: 'rgba(139, 92, 246, 0.2)',
                      borderColor: 'rgba(139, 92, 246, 0.4)',
                      color: '#e8e4e0',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
