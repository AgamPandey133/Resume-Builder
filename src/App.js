import Resume from "./Resume";

function App(){
    const resume = {
        name: "Agam Pandey",
        title: "Software Development",
        experience: [
            {year: "2024", company: "Microsoft", role: "Intern"},
            {year: "2023", company: "OpenAI", role: "Research Assistant"},
            {year: "2022", company:"Google", role: "Frontend Developer"}
        ],
        education:[
            { year: "2027", degree: "B.Tech IT", school: "IIIT Una" },
            { year: "2023", degree: "Class 12", school: "ABC School" }
        ],
        skills: ["React.js", "Node.js", "C++", "Java"]
    };

    return <Resume data={resume}/>
}

export default App;