import React, { useState } from "react";
import "./FormStyles.css";
import { Project } from "./Utils";
import Checkbox from "./Checkbox";

const TechnologiesList: { id: string; name: string }[] = [
  { id: "html", name: "HTML" },
  { id: "css", name: "CSS" },
  { id: "js", name: "JavaScript" },
  { id: "ts", name: "TypeScript" },
  { id: "python", name: "Python" },
  { id: "scala", name: "Scala" },
  { id: "reactjs", name: "React.js" },
  { id: "nodejs", name: "Node.js" },
  { id: "php", name: "PHP" },
];

const AddOrderForm: React.FC<{
  addProject: (project: Project) => void;
}> = ({ addProject }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !deadline || technologies.length === 0) {
      alert("Please fill in all fields");
      return;
    }
    const newProject: Project = {
      id: Date.now(),
      name,
      description,
      deadline,
      technologies,
    };

    addProject(newProject);

    setName("");
    setDescription("");
    setDeadline("");
    setTechnologies([]);
  };

  const handleCheckboxChange = (value: string) => {
    if (technologies.includes(value)) {
      setTechnologies(technologies.filter((tech) => tech !== value));
    } else {
      setTechnologies([...technologies, value]);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>Project Order Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="project-name">Project Name:</label>
            <input
              type="text"
              id="project-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="project-description">Project Description:</label>
            <textarea
              id="project-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline:</label>
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Technologies:</label>
            <div className="TechnologyContainer">
              {TechnologiesList.map((tech) => (
                <Checkbox
                  key={tech.id}
                  id={tech.id}
                  value={tech.name}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={() => {
                setName("");
                setDescription("");
                setDeadline("");
                setTechnologies([]);
              }}
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrderForm;
