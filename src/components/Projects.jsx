import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const projects = [
  {
    id: 1,
    name: 'Hawk Shuttles',
    description:
      'A futuristic shuttle booking platform with smooth animations, interactive UI components, and a modern design language.',
    image: '/assets/hawk_shuttles.png',
    link: 'https://hawk-shuttles.vercel.app/',
  },
  {
    id: 2,
    name: 'Cooking',
    description:
      'An animated recipe application featuring engaging page transitions, beautiful typography, and a user-friendly browsing experience.',
    image: '/assets/cooking.png',
    link: 'https://cooking-weld.vercel.app/',
  },
  {
    id: 3,
    name: 'Live Chat App',
    description:
      'A real-time chat application with a sleek, modern interface, seamless messaging, and a polished user experience.',
    image: '/assets/live_chat_app.png',
    link: 'https://live-chat-app-h5hr.onrender.com',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      <div className="project-image-wrapper">
        <motion.img
          src={project.image}
          alt={project.name}
          className="project-image"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
      <div className="project-info">
        <span className="project-number">
          {String(project.id).padStart(2, '0')}
        </span>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <span className="project-link">
          View Project <HiArrowRight />
        </span>
      </div>
    </motion.a>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div {...fadeInUp}>
          <p className="section-label">Work</p>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
