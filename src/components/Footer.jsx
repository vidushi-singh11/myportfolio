function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} Vidushi Singh — All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/vidushi-singh11"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vidushi-singh-493097326"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
