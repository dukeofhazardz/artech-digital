import React from "react";
import { useLocation, Link } from "react-router-dom";
import { formatTitleForURL } from "../lib/formatter";
import placeholderImg from "../assets/placeholder-img.jpg";
import readMore from "../assets/more.svg";

const ProjectDetail = () => {
  const baseURL = "http://localhost:8000";
  const location = useLocation();
  const { project, projects } = location.state || {};

  if (!project) return <p>Loading...</p>;

  return (
    <div className="project-detail wrapper">
      <h2 id="body-title">{project.title}</h2>
      <p id="body-subtitle">{project.description}</p>
      <img id="placeholder-img" src={placeholderImg} alt="Placeholder" />
      <p id="body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Link id="body-link" to={"/"}>
        Contact
      </Link>

      <div className="similar-container">
        <h2 id="similar-title">More Similar Projects</h2>
        <div className="similar-projects">
          {projects
            .filter((p) => p.id !== project.id)
            .map((project) => (
              <div key={project.id} className="project-card">
                <img
                  src={`${baseURL}${project.image_url}`}
                  alt={project.title}
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="read-more">
                  <Link
                    to={`/projects/${formatTitleForURL(project.title)}`}
                    state={{ project, projects }}
                  >
                    Read more
                  </Link>
                  <img src={readMore} alt="Read more icon" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
