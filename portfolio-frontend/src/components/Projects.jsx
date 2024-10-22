import React, { useEffect, useRef, useState } from "react";
import api from "../lib/api";
import { formatTitleForURL } from "../lib/formatter";
import { Link } from "react-router-dom";
import readMore from "../assets/more.svg";
import circle from "../assets/circle.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const Projects = () => {
  const baseURL = "http://localhost:8000";
  const scrollRef = useRef(null);
  const [projects, setProjects] = useState([]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -360,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="Projects" className="wrapper">
      <div className="title-container">
        <h2>Projects</h2>
        <p>Explore our case studies</p>
      </div>

      <div className="scroll-controls">
        <button className="scroll-btn left-btn" onClick={scrollLeft}>
          <img src={circle} alt="circle" className="circle-img" />
          <img src={arrowLeft} alt="left arrow" className="arrow-left" />
        </button>
        <div className="projects-grid" ref={scrollRef}>
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={`${baseURL}${project.image_url}`} alt={project.title} />
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
        <button className="scroll-btn left-btn" onClick={scrollRight}>
          <img src={circle} alt="circle" className="circle-img" />
          <img src={arrowRight} alt="left arrow" className="arrow-right" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
