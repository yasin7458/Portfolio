import SkillCard from "../components/SkillCard";

function About() {

    const skills = [
        {
            number: "01",
            name: "HTML5",
            category: "Frontend"
        },
        {
            number: "02",
            name: "CSS3",
            category: "Frontend"
        },
        {
            number: "03",
            name: "JavaScript",
            category: "Programming"
        },
        {
            number: "04",
            name: "React",
            category: "Frontend"
        },
        {
            number: "05",
            name: "Bootstrap",
            category: "Framework"
        },
        {
            number: "06",
            name: "GSAP",
            category: "Animation"
        },
        {
            number: "08",
            name: "DSA",
            category: "Problem Solving"
        },
        {
            number: "09",
            name: "C",
            category: "Programming"
        },
        {
            number: "10",
            name: "C++",
            category: "Programming"
        }
    ];

    return (
        <section className="about-section">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-5">

                        <div className="about-card">

                            <div className="about-number">
                                01
                            </div>

                            <p>
                                ABOUT ME
                            </p>

                            <h2>
                                Turning Ideas
                                <br />
                                Into <span>Web Experiences.</span>
                            </h2>

                        </div>

                    </div>


                    <div className="col-lg-7">

                        <div className="about-content">

                            <p className="section-label">
                                WHO I AM
                            </p>

                            <h2>
                                A Frontend Developer
                                <br />
                                Who Loves To <span>Create.</span>
                            </h2>

                            <p>
                                I'm Yasin Mithani, a frontend developer
                                who enjoys creating modern and interactive
                                websites. I like turning ideas and designs
                                into clean and engaging web experiences.
                            </p>

                            <p>
                                I work with HTML, CSS, JavaScript, Bootstrap,
                                React and GSAP, and I continuously improve
                                my development and problem-solving skills.
                            </p>

                            <div className="about-info">

                                <div className="info-item">
                                    <span>
                                        Education
                                    </span>

                                    <strong>
                                        12th Science
                                    </strong>
                                </div>

                                <div className="info-item">
                                    <span>
                                        Focus
                                    </span>

                                    <strong>
                                        Frontend Development
                                    </strong>
                                </div>

                                <div className="info-item">
                                    <span>
                                        Learning
                                    </span>

                                    <strong>
                                        Full Stack Development
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="skills-section">

                    <div className="skills-heading">

                        <p className="section-label">
                            MY SKILLS
                        </p>

                        <h2>
                            Technologies I
                            <span> Work With.</span>
                        </h2>

                    </div>


                    <div className="row g-4">

                        {skills.map((skill) => {

                            return (
                                <div
                                    className="col-lg-3 col-md-4 col-sm-6"
                                    key={skill.number}
                                >
                                    <SkillCard
                                        skill={skill}
                                        category={skill.category}
                                    />
                                </div>
                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;