import "./App.css"
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/XSkills";

function Resume({ data }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      {/* Print button (won’t appear in printout) */}
      <button
        onClick={handlePrint}
        style={{
          marginBottom: "20px",
          padding: "6px 12px",
          cursor: "pointer"
        }}
        className="no-print"
      >
        Print Resume
      </button>

      <Header name={data.name} title={data.title} />
      <hr />
      <Experience list={data.experience} />
      <Education list={data.education} />
      <Skills list={data.skills} />
    </div>
  );
}

export default Resume;
