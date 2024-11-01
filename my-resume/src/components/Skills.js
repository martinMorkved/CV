function Skills() {
    const skills = [
        "React",
        "JavaScript",
        "HTML/CSS",
        "Node.js",
        // Add more skills here
    ];

    return (
        <section id="skills">
            <div className="container">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills; 