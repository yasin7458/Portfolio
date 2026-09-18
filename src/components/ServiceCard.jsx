function ServiceCard({ service }) {

    return (
        <div className="service-card">

            <div className="service-number">
                {service.number}
            </div>

            <div className="service-icon">
                {service.icon}
            </div>

            <h3>
                {service.title}
            </h3>

            <p>
                {service.description}
            </p>

            <div className="service-line"></div>

        </div>
    );
}

export default ServiceCard;