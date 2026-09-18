function ProjectCard({ project }) {

    return (
        <div className="project-card">

            <div className="project-image">

                <img
                    src={project.image}
                    alt={project.title}
                />

                <div className="project-overlay">
                    <span>
                        {project.number}
                    </span>
                </div>

            </div>


            <div className="project-content">

                <p>
                    {project.category}
                </p>

                <h3>
                    {project.title}
                </h3>

                <div className="project-tech">

                    {project.technologies.map((technology) => {

                        return (
                            <span key={technology}>
                                {technology}
                            </span>
                        );

                    })}

                </div>


                <div className="project-links">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo ↗
                    </a>

                </div>

            </div>

        </div>
    );
}

export default ProjectCard;