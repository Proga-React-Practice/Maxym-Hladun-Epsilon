import React from "react";
import "./CardsStyles.css";
import { Project } from "./Utils";

const Cards: React.FC<{
  projects: Project[];
  deleteProject: (id: number) => void;
}> = ({ projects, deleteProject }) => {
  return (
    <div className="cards-container">
      <h2>Project Orders: </h2>
      {projects.map((project) => (
        <div key={project.id} className="card">
          <h3>{project.name}</h3>
          <p>
            <span>Description:</span> {project.description}
          </p>
          <p>
            <span>Deadline:</span> {project.deadline}
          </p>
          <p>
            <span>Technologies:</span> {project.technologies.join(", ")}
          </p>
          <button onClick={() => deleteProject(project.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
