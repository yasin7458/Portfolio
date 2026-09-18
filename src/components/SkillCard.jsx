function SkillCard({ skill, category }) {

    return (
        <div className="skill-card">

            <div className="skill-card-number">
                {skill.number}
            </div>

            <h3>
                {skill.name}
            </h3>

            <p>
                {category}
            </p>

        </div>
    );
}

export default SkillCard;