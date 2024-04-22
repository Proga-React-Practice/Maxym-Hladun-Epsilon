import React, { useState } from "react";
import AddOrderForm from "./AddOrderForm";
import Cards from "./Cards";
import "./index.css";

interface Project {
  id: number;
  name: string;
  description: string;
  deadline: string;
  technologies: string[];
}

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="main">
      <AddOrderForm addProject={addProject} />
      <Cards projects={projects} deleteProject={deleteProject} />
    </div>
  );
};

export default App;
