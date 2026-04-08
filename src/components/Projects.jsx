import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <div className="container projects my-3" id="projects">
      <h1 className="section-title">PROJECTS</h1>
      <div className="row-grid">
        {project.map((data) => (
          <div
            key={data.id}
            className="project-card glass-panel"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img
              src={data.imageSrc}
              className="project-card-img"
              alt={data.title}
            />
            <div className="project-card-body text-center">
              <h5 className="project-card-title">{data.title}</h5>
              <p className="project-card-text">{data.description}</p>
              <div className="project-card-actions">
                <a href={data.source} className="btn-secondary-custom" target="_blank" rel="noreferrer">
                  Source Code
                </a>
                <a href={data.deploy} className="btn-primary-custom" target="_blank" rel="noreferrer">
                  Deployed Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;