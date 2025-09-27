function Experience({list}){
    return (
        <div>
            <h2>Experience</h2>
            <ul>
                {list.map((exp, index) => (
                    <li key={index}>
                        <b>{exp.year}</b> - {exp.company} ({exp.role})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Experience;