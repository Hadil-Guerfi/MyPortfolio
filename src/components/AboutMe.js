import "animate.css";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import AboutMeImg from "../assets/img/aboutMe.png";

export const AboutMe = () => {


  return (
    <section className="contact" id="aboutme">
      <Container>
        <Row className="align-items-center ">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }>
                  <img src={AboutMeImg} alt="Header Img" className="img-me" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6} className="about-me-container">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>About me</h2>
                  <div className="about-me-text">
                    As a Full Stack Developer, I deal with development challenges with
                    a comprehensive mindset, merging my proficiency in both
                    front-end and back-end development.Throughout my software
                    development journey, I've cultivated a diverse skill set
                    that allows me to adapt and be flexible across various
                    aspects of development. From conceptualization to
                    deployment, my focus is on delivering refined, effective
                    solutions that satisfy client expectations. I'm deeply
                    invested in staying updated with the latest industry trends
                    and technologies, ensuring that I continuously refine my
                    expertise to deliver innovative solutions that yield
                    tangible results. This dedication to ongoing learning allows
                    me to evolve and elevate my skills while enhancing project
                    outcomes.
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
