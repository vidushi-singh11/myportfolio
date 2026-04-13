import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = formRef.current;
    const templateParams = {
      from_name: form.from_name.value,
      reply_to: form.from_email.value,
      message: form.message.value,
      to_name: 'Vidushi Singh',
    };

    try {
      await emailjs.send(
        'service_58uy7wk',
        'template_uo6y09i',
        templateParams,
        'SkvP6CuoM82_3b5Nn'
      );
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'sending':
        return 'Sending...';
      case 'success':
        return 'Sent ✓';
      case 'error':
        return 'Failed — Retry';
      default:
        return 'Send Message';
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div {...fadeInUp}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's Connect</h2>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
          >
            <h3>Get in touch</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to collaborate. Feel free to reach out!
            </p>

            <div className="contact-links">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vidushisingh0705@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <HiMail className="icon" />
                vidushisingh0705@gmail.com
              </a>
              <a
                href="https://github.com/vidushi-singh11"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <FaGithub className="icon" />
                github.com/vidushi-singh11
              </a>
              <a
                href="https://www.linkedin.com/in/vidushi-singh-493097326"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <FaLinkedinIn className="icon" />
                LinkedIn — Vidushi Singh
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                id="contact-name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                id="contact-email"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                id="contact-message"
              />
            </div>
            <button
              type="submit"
              className={`form-submit ${status}`}
              disabled={status === 'sending'}
              id="contact-submit"
            >
              {getButtonText()} {status === 'idle' && <HiArrowRight />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
