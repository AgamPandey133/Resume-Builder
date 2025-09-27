function Education({ list }) {
  return (
    <div>
      <h2>Education</h2>
      <ul>
        {list.map((edu, index) => (
          <li key={index}>
            <b>{edu.year}</b> - {edu.degree} ({edu.school})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
