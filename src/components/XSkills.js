function XSkills({ list }) {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {list.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default XSkills;
