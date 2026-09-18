import ProjectCard from "../components/ProjectCard";

function Projects() {

    const projects = [
        {
            number: "01",
            title: "E-Commerce",
            category: "JavaScript Project",
            image: "/src/assets/project1.png",
            technologies: [
                "HTML5",
                "CSS3",
                "JavaScript"
            ],
            github: "https://github.com/yasin7458/E-Commerce-Project.git",
            live: "#"
        },

        {
            number: "02",
            title: "To Do List",
            category: "React Project",
            image: "/src/assets/project2.png",
            technologies: [
                "HTML5",
                "CSS3",
                "Js",
                "React",
                "React-Routing"
            ],
            github: "https://github.com/yasin7458/Question-Pages.git",
            live: "#"
        },

        {
            number: "03",
            title: "District Zomato",
            category: "HTML Project",
            image: "/src/assets/project3.png",
            technologies: [
                "HTML5",
                "CSS3"
            ],
            github: "https://github.com/yasin7458/Destrict-Zomato-Clone.git",
            live: "#"
        },

        {
            number: "04",
            title: "GSAP Experience",
            category: "Frontend Project",
            image: "/src/assets/project4.png",
            technologies: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "GSAP"
            ],
            github: "https://github.com/yasin7458/GSAP-Experience.git",
            live: "#"
        }
    ];


    return (
        <section className="projects-section">

            <div className="container">

                <div className="projects-heading">

                    <p className="section-label">
                        MY WORK
                    </p>

                    <h2>
                        Selected
                        <span> Projects.</span>
                    </h2>

                    <p>
                        A collection of projects where I experiment
                        with development, design and interactive
                        web experiences.
                    </p>

                </div>


                <div className="row g-4">

                    {projects.map((project) => {

                        return (
                            <div
                                className="col-lg-6"
                                key={project.number}
                            >

                                <ProjectCard
                                    project={project}
                                />

                            </div>
                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default Projects;