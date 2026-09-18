import { Link } from "react-router-dom";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaArrowUp
} from "react-icons/fa";

function Footer() {

    return (
        <footer className="footer-section">

            <div className="container">

                <div className="footer-main">

                    <div className="footer-brand">

                        <Link to="/" className="footer-logo">
                            YASIN<span>.</span>
                        </Link>

                        <p className="footer-description">
                            Frontend Developer focused on building modern,
                            interactive and visually engaging web experiences
                            with clean and creative code.
                        </p>

                        <div className="footer-socials">

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </a>

                        </div>

                    </div>


                    <div className="footer-navigation">

                        <h4>
                            NAVIGATION
                        </h4>

                        <Link to="/">
                            Home
                        </Link>

                        <Link to="/about">
                            About
                        </Link>

                        <Link to="/projects">
                            Projects
                        </Link>

                        <Link to="/services">
                            Services
                        </Link>

                        <Link to="/contact">
                            Contact
                        </Link>

                    </div>


                    <div className="footer-cta">

                        <span>
                            LET'S WORK TOGETHER
                        </span>

                        <h3>
                            Have an idea?
                            <br />
                            Let's build it.
                        </h3>

                        <p>
                            I'm always interested in creating meaningful
                            digital experiences and interesting projects.
                        </p>

                        <Link
                            to="/contact"
                            className="footer-contact-btn"
                        >
                            Contact Me
                        </Link>

                    </div>

                </div>


                <div className="footer-line"></div>


                <div className="footer-bottom">

                    <p>
                        © 2026 Yasin Mithani. All Rights Reserved.
                    </p>

                    <p>
                        Designed & Built with <span>♥</span> by Yasin
                    </p>

                    <Link
                        to="/"
                        className="footer-top"
                    >
                        <FaArrowUp />
                    </Link>

                </div>

            </div>

        </footer>
    );
}

export default Footer;