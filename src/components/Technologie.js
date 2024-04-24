import "animate.css";
import { Col, Container, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

import cplusplusImg from "../assets/img/C++Img.png";
import PythonImg from "../assets/img/PythonImg.png";
import bootstarpImg from "../assets/img/bootstarpImg.png";
import cImg from "../assets/img/cImg.png";
import cssImg from "../assets/img/cssImg.png";
import expressjsImg from "../assets/img/expressjsImg.png";
import firebaseImg from "../assets/img/firebaseImg.png";
import htmlImg from "../assets/img/htmlImg.png";
import javaImg from "../assets/img/javaImg.png";
import jsImg from "../assets/img/jsImg.png";
import laravelImg from "../assets/img/laravelImg.png";
import mongoImg from "../assets/img/mongoImg.png";
import mysqlmg from "../assets/img/mysqlmg.png";
import nodejsImg from "../assets/img/nodejsImg.png";
import oracleImg from "../assets/img/oracleImg.png";
import phpImg from "../assets/img/phpImg.png";
import plsqlImg from "../assets/img/plsqlImg.png";
import reactImg from "../assets/img/reactImg.png";
import react_hook_formImg from "../assets/img/react_hook_formImg.png";
import react_queryImg from "../assets/img/react_queryImg.png";
import reduxImg from "../assets/img/reduxImg.png";
import springBootImg from "../assets/img/spting-bootImg.png";
import tailwindImg from "../assets/img/tailwindImg.png";
import talendImg from "../assets/img/talendImg.png";
import materialui from "../assets/img/materialui.png";
import antd from "../assets/img/antd.png";
import figmaImg from "../assets/img/figmaImg.png";
import umlImg from "../assets/img/umlImg.png";
import githubImg from "../assets/img/githubImg.png";


import { ProjectCard } from "./ProjectCard";

export const Technologie = () => {
  const projects = [
    { title: "HTML", imgUrl: htmlImg },
    { title: "CSS", imgUrl: cssImg },
    { title: "JavaScript", imgUrl: jsImg },
    { title: "React", imgUrl: reactImg },
    { title: "Redux", imgUrl: reduxImg },
    { title: "Tailwind CSS", imgUrl: tailwindImg },
    { title: "Bootstrap", imgUrl: bootstarpImg },
    { title: "Material UI", imgUrl: materialui },
    { title: "Ant Design", imgUrl: antd },

    { title: "React Hook Form", imgUrl: react_hook_formImg },
    { title: "React Query", imgUrl: react_queryImg },

    { title: "", imgUrl: "" },

    { title: "Node js", imgUrl: nodejsImg },
    { title: "Express js", imgUrl: expressjsImg },

    { title: "Java", imgUrl: javaImg },
    { title: "Spring Boot", imgUrl: springBootImg },
    { title: "PHP", imgUrl: phpImg },
    { title: "Laravel", imgUrl: laravelImg },
    { title: "Firebase", imgUrl: firebaseImg },

    { title: "", imgUrl: "" },

    { title: "Python", imgUrl: PythonImg },
    { title: "C", imgUrl: cImg },
    { title: "C++", imgUrl: cplusplusImg },
    { title: "", imgUrl: "" },

    { title: "MongoDB", imgUrl: mongoImg },
    { title: "MySQL", imgUrl: mysqlmg },
    { title: "PL/SQL", imgUrl: plsqlImg },
    { title: "Oracle", imgUrl: oracleImg },
    { title: "Talend", imgUrl: talendImg },
    { title: "Figma", imgUrl: figmaImg },

    { title: "UML", imgUrl: umlImg },
    { title: "Git/Github", imgUrl: githubImg },
  ];

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
                          {projects.map((project, index) => (
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
