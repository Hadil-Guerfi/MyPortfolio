import "animate.css";
import { Col, Container, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

import cssImg from "../assets/img/cssImg.png";
import expressjsImg from "../assets/img/expressjsImg.png";
import htmlImg from "../assets/img/htmlImg.png";
import jsImg from "../assets/img/jsImg.png";
import mongoImg from "../assets/img/mongoImg.png";
import mysqlmg from "../assets/img/mysqlmg.png";
import nodejsImg from "../assets/img/nodejsImg.png";
import reactImg from "../assets/img/reactImg.png";
import react_hook_formImg from "../assets/img/react_hook_formImg.png";
import react_queryImg from "../assets/img/react_queryImg.png";
import reduxImg from "../assets/img/reduxImg.png";
import tailwindImg from "../assets/img/tailwindImg.png";
import materialui from "../assets/img/materialui.png";
import githubImg from "../assets/img/githubImg.png";
import nextImg from "../assets/img/nextjs.png";
import nestImg from "../assets/img/nestjs.png";
import k8s from "../assets/img/k8s.png";
import aws from "../assets/img/aws.png";
import githubactions from "../assets/img/gitub_actions.png";
import docker from "../assets/img/docker.png";
import postgres from "../assets/img/postgres.png";
import ts from "../assets/img/ts.png";
import java from "../assets/img/java.png";
import php from "../assets/img/php.png";
import linux from "../assets/img/LinuxImg.png";
import jest from "../assets/img/jest.png";
import rtl from "../assets/img/rtl.png";
import SpringBoot from "../assets/img/SpringBoot.png"
import Laravel from "../assets/img/Laravel.png";

import { ProjectCard } from "./ProjectCard";

export const Technologie = () => {
  const frontEnd = [
    { title: "HTML", imgUrl: htmlImg },
    { title: "CSS", imgUrl: cssImg },
    { title: "React", imgUrl: reactImg },
    { title: "Next js", imgUrl: nextImg },
    { title: "Redux", imgUrl: reduxImg },
    { title: "React Hook Form", imgUrl: react_hook_formImg },
    { title: "React Query", imgUrl: react_queryImg },
    { title: "Tailwind CSS", imgUrl: tailwindImg },
    { title: "Material UI", imgUrl: materialui },
  ];

  const backend = [
    { title: "Node js", imgUrl: nodejsImg },
    { title: "Express js", imgUrl: expressjsImg },
    { title: "Nest js", imgUrl: nestImg },
    { title: "Spring Boot", imgUrl: SpringBoot },
    { title: "Laravel", imgUrl: Laravel },
  ];

  const testing = [
    { title: "Jest", imgUrl: jest },
    { title: "React Testing Library", imgUrl: rtl },
  ];

  const devops = [
    { title: "docker", imgUrl: docker },
    { title: "Kubernetes", imgUrl: k8s },
    { title: "AWS", imgUrl: aws },
    { title: "Github Actions", imgUrl: githubactions },
  ];

  const Databases = [
    { title: "MongoDB", imgUrl: mongoImg },
    { title: "MySQL", imgUrl: mysqlmg },
    { title: "Postgres", imgUrl: postgres },
  ];

  const langauges = [
    { title: "JavaScript", imgUrl: jsImg },
    { title: "TypeScript", imgUrl: ts },
    { title: "Php", imgUrl: php },
    { title: "Java", imgUrl: java },
  ];

  const os = [{ title: "Linux", imgUrl: linux }];
  const version = [{ title: "Git/Github", imgUrl: githubImg }];

  return (
    <section className="project technologies" id="technologies">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2 className="tech-title">Technologies</h2>
                  <div
                    style={{
                      width: "full",
                      height: "0.5px",
                      backgroundColor: "#dbdbdb",
                    }}></div>
                  <h3
                    style={{
                      margin: "15px 0 40px",
                      color: "#0ba4ae",
                      textAlign: "center",
                    }}>
                    Front End
                  </h3>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row
                          xs={3}
                          md={3}
                          lg={3}
                          xl={5}
                          xxl={8}
                          className="g-5">
                          {frontEnd.map((project, index) => (
                            <Col
                              key={index}
                              className="d-flex align-items-center justify-content-center">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <div
                    style={{
                      width: "full",
                      height: "0.5px",
                      backgroundColor: "#dbdbdb",
                    }}></div>
                  <h3
                    style={{
                      margin: "15px 0 40px",
                      color: "#0ba4ae",
                      textAlign: "center",
                    }}>
                    Back end
                  </h3>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row
                          xs={3}
                          md={3}
                          lg={3}
                          xl={5}
                          xxl={8}
                          className="g-5">
                          {backend.map((project, index) => (
                            <Col
                              key={index}
                              className="d-flex align-items-center justify-content-center">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <div
                    style={{
                      width: "full",
                      height: "0.5px",
                      backgroundColor: "#dbdbdb",
                    }}></div>
                  <h3
                    style={{
                      margin: "15px 0 40px",
                      color: "#0ba4ae",
                      textAlign: "center",
                    }}>
                    Testing
                  </h3>{" "}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row
                          xs={3}
                          md={3}
                          lg={3}
                          xl={5}
                          xxl={8}
                          className="g-5">
                          {testing.map((project, index) => (
                            <Col
                              key={index}
                              className="d-flex align-items-center justify-content-center">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <div
                    style={{
                      width: "full",
                      height: "0.5px",
                      backgroundColor: "#dbdbdb",
                    }}></div>
                  <h3
                    style={{
                      margin: "15px 0 40px",
                      color: "#0ba4ae",
                      textAlign: "center",
                    }}>
                    Databases
                  </h3>{" "}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row
                          xs={3}
                          md={3}
                          lg={3}
                          xl={5}
                          xxl={8}
                          className="g-5">
                          {Databases.map((project, index) => (
                            <Col
                              key={index}
                              className="d-flex align-items-center justify-content-center">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <div
                    style={{
                      width: "full",
                      height: "0.5px",
                      backgroundColor: "#dbdbdb",
                    }}></div>
                  <h3
                    style={{
                      margin: "15px 0 40px",
                      color: "#0ba4ae",
                      textAlign: "center",
                    }}>
                    DevOps
                  </h3>{" "}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row
                          xs={3}
                          md={3}
                          lg={3}
                          xl={5}
                          xxl={8}
                          className="g-5">
                          {devops.map((project, index) => (
                            <Col
                              key={index}
                              className="d-flex align-items-center justify-content-center">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <div
                    style={{
                      width: "full",
                      height: "0.5px",
                      backgroundColor: "#dbdbdb",
                    }}></div>
                  <h3
                    style={{
                      margin: "15px 0 40px",
                      color: "#0ba4ae",
                      textAlign: "center",
                    }}>
                    Programming languages
                  </h3>{" "}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row
                          xs={3}
                          md={3}
                          lg={3}
                          xl={5}
                          xxl={8}
                          className="g-5">
                          {langauges.map((project, index) => (
                            <Col
                              key={index}
                              className="d-flex align-items-center justify-content-center">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <div
                    style={{
                      width: "full",
                      height: "0.5px",
                      backgroundColor: "#dbdbdb",
                    }}></div>
                  <h3
                    style={{
                      margin: "15px 0 40px",
                      color: "#0ba4ae",
                      textAlign: "center",
                    }}>
                    Operatings Systems
                  </h3>{" "}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row
                          xs={3}
                          md={3}
                          lg={3}
                          xl={5}
                          xxl={8}
                          className="g-5">
                          {os.map((project, index) => (
                            <Col
                              key={index}
                              className="d-flex align-items-center justify-content-center">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <div
                    style={{
                      width: "full",
                      height: "0.5px",
                      backgroundColor: "#dbdbdb",
                    }}></div>
                  <h3
                    style={{
                      margin: "15px 0 40px",
                      color: "#0ba4ae",
                      textAlign: "center",
                    }}>
                    Version Control
                  </h3>{" "}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row
                          xs={3}
                          md={3}
                          lg={3}
                          xl={5}
                          xxl={8}
                          className="g-5">
                          {version.map((project, index) => (
                            <Col
                              key={index}
                              className="d-flex align-items-center justify-content-center">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
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
};
