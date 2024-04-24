import 'animate.css';
import { Col, Container, Row, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import deliveryApp from "../assets/img/deliveryApp.JPG";
import gymApp from "../assets/img/gymApp.JPG";
import quizApp from "../assets/img/quizApp.JPG";
import rentApp from "../assets/img/rentApp.JPG";
import spring from "../assets/img/spring.png";
import stage from "../assets/img/stage.png";
import template1 from "../assets/img/template1.JPG";
import university from "../assets/img/university.JPG";
import webSchool from "../assets/img/webSchool.JPG";

import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "University Web Application",
      description: "MERN Stack",
      imgUrl: university,
      guithubLink: "",
    },
    {
      title: "Library projet",
      description: "Spring Boot & Microservices architecture",
      imgUrl: spring,
      guithubLink: "https://github.com/Hadil-Guerfi/microservices-reactivite",
    },
    {
      title: "Real Estate Web Application ",
      description: "MERN Stack",
      imgUrl: rentApp,
      guithubLink: "",
    },
    {
      title: "Order management application for a sewing workshop",
      description: "React js & Laravel",
      imgUrl: stage,
      guithubLink: "",
    },
    {
      title: "Food Delivery",
      description: "React js & Firebase",
      imgUrl: deliveryApp,
      guithubLink: "https://github.com/Hadil-Guerfi/Delivery-Food",
    },
    {
      title: "Gym Web Site",
      description: "React js",
      imgUrl: gymApp,
      guithubLink: "https://github.com/Hadil-Guerfi/Gym-Template",
    },
    {
      title: "Quiz Game",
      description: "Html & Css & Js ",
      imgUrl: quizApp,
      guithubLink: "https://github.com/Hadil-Guerfi/Quiz-Game",
    },
    {
      title: "Template ",
      description: "Html & Css",
      imgUrl: template1,
      guithubLink: "https://github.com/Hadil-Guerfi/Template-HTML-CSS",
    },
    {
      title: "Web School Template",
      description: "Html & Css",
      imgUrl: webSchool,
      guithubLink: "https://github.com/Hadil-Guerfi/Web-School-Template",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Projects</h2>
                  <p className='project-text'>
                    Each project embodies a journey of problem-solving,
                    creativity, and continuous learning. From responsive layouts
                    to dynamic functionality, I aim to create user-friendly
                    experiences that leave a profound impression.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row className="g-5" style={{ marginTop: "20px" }}>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
