import ServiceCard from "../components/ServiceCard";

function Services() {

    const services = [
        {
            number: "01",
            icon: "</>",
            title: "Frontend Development",
            description:
                "Building clean, modern and interactive websites using HTML, CSS, JavaScript and React."
        },

        {
            number: "02",
            icon: "GS",
            title: "Web Animations",
            description:
                "Creating smooth and engaging website animations using GSAP and modern animation techniques."
        },

        {
            number: "03",
            icon: "UI",
            title: "UI Implementation",
            description:
                "Turning designs and ideas into polished web interfaces using Bootstrap, CSS and JavaScript."
        },

        {
            number: "04",
            icon: "JS",
            title: "JavaScript Development",
            description:
                "Creating interactive functionality and dynamic experiences with JavaScript."
        }
    ];


    return (
        <section className="services-section">

            <div className="container">

                <div className="services-heading">

                    <p className="section-label">
                        WHAT I DO
                    </p>

                    <h2>
                        My <span>Services.</span>
                    </h2>

                    <p>
                        I focus on building visually engaging and
                        interactive web experiences with clean code
                        and modern frontend technologies.
                    </p>

                </div>


                <div className="row g-4">

                    {services.map((service) => {

                        return (
                            <div
                                className="col-lg-3 col-md-6"
                                key={service.number}
                            >

                                <ServiceCard
                                    service={service}
                                />

                            </div>
                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default Services;