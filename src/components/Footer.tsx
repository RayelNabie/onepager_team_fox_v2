import type { JSX } from "react";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <p className="footer__contact">
        <span className="footer__label">Contact persoon</span>
        <span className="footer__name">Alejandro Dullemond</span>
        <a className="footer__email" href="mailto:1073316@hr.nl">
          1073316@hr.nl
        </a>
      </p>
    </footer>
  );
};

export default Footer;
