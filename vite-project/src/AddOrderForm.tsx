import React, { useState } from "react";
import "./FormStyles.css";

interface Project {
  id: number;
  name: string;
  description: string;
  deadline: string;
  technologies: string[];
}

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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
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
            <br />
            <div className="TechnologyComponent">
              <input
                type="checkbox"
                id="html"
                value="HTML"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="html">HTML</label>
            </div>
            <br />
            <div className="TechnologyComponent">
              <input
                type="checkbox"
                id="css"
                value="CSS"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="css">CSS</label>
            </div>
            <br />
            <div className="TechnologyComponent">
              <input
                type="checkbox"
                id="js"
                value="JavaScript"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="js">JavaScript</label>
            </div>
            <br />
            <div className="TechnologyComponent">
              <input
                type="checkbox"
                id="ts"
                value="TypeScript"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="ts">TypeScript</label>
            </div>
            <br />
            <div className="TechnologyComponent">
              <input
                type="checkbox"
                id="python"
                value="Python"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="python">Python</label>
            </div>
            <br />
            <div className="TechnologyComponent">
              <input
                type="checkbox"
                id="scala"
                value="Scala"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="scala">Scala</label>
            </div>
            <br />
            <div className="TechnologyComponent">
              <input
                type="checkbox"
                id="reactjs"
                value="React.js"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="reactjs">React.js</label>
            </div>
            <br />
            <div className="TechnologyComponent">
              <input
                type="checkbox"
                id="nodejs"
                value="Node.js"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="nodejs">Node.js</label>
            </div>
            <br />
            <div className="TechnologyComponent">
              <input
                type="checkbox"
                id="php"
                value="PHP"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="php">PHP</label>
            </div>
            <br />
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
