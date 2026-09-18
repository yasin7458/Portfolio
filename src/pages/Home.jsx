import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {

    return (
        <section className="home-section">

            <div className="container">

                <div className="row align-items-center home-container">

                    <div className="col-lg-7">

                        <p className="home-small-text">
                            HELLO, I'M
                        </p>

                        <h1 className="home-title">
                            Yasin <span>Mithani</span>
                        </h1>

                        <h2 className="home-role">
                            Frontend Developer
                        </h2>

                        <p className="home-description">
                            I build modern, interactive and visually engaging
                            web experiences using HTML, CSS, JavaScript,
                            React and GSAP.
                        </p>

                        <div className="home-buttons">

                            <Link to="/projects">
                                <a href="#projects" className="btn home-btn">
                                    View My Work
                                </a>
                            </Link>

                            <Link to="/contact">
                                <a href="#contact" className="btn home-btn-outline">
                                    Contact Me
                                </a>
                            </Link>

                        </div>

                    </div>

                    <div className="col-lg-5">

                        <div className="home-image-box">

                            <div className="home-glow"></div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </section>
    );
}

export default Home;