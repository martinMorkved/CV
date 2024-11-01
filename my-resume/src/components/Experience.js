import React from 'react';

function Experience({ experiences }) {
    return (
        <section id="experience">
            <div className="container">
                <h2>Professional Experience</h2>
                {experiences.map((exp, index) => (
                    <ExperienceItem
                        key={index}
                        title={exp.title}
                        company={exp.company}
                        from={exp.from}
                        to={exp.to}
                        achievements={exp.achievements}
                    />
                ))}
            </div>
        </section>
    );
}

function ExperienceItem({ title, company, from, to, achievements }) {
    return (
        <div className="experience-item">
            <h3>{title}</h3>
            <p className="company">{company}</p>
            <p className="date">{from} - {to}</p>
            <ul>
                {achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                ))}
            </ul>
        </div>
    );
}

export default Experience; 