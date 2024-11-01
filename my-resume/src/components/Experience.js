function Experience() {
    const experiences = [
        {
            title: "Senior Developer",
            company: "Company Name",
            period: "2020 - Present",
            achievements: [
                "Led development of key features",
                "Managed team of junior developers"
            ]
        }
        // Add more experiences here
    ];

    return (
        <section id="experience">
            <div className="container">
                <h2>Professional Experience</h2>
                {experiences.map((exp, index) => (
                    <div className="experience-item" key={index}>
                        <h3>{exp.title}</h3>
                        <p className="company">{exp.company}</p>
                        <p className="date">{exp.period}</p>
                        <ul>
                            {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience; 