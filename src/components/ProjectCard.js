import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, guithubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {imgUrl && (
        <div className="proj-imgbx">
          <img
            src={imgUrl}
            alt=""
            style={{
              height: description ? "300px" : "120px",
              width: "100%",
              backgroundColor: title ? "#e8e8e8" : "transparent",
            }}
          />

          <div className="proj-txtx">
            <h4 style={{ fontSize: "18px" }}>{title}</h4>
            <span>{description}</span>
            {guithubLink && (
              <button className="card-btn">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={`${guithubLink}`}>
                  Github Link
                </a>
              </button>
            )}
          </div>
        </div>
      )}
    </Col>
  );
};
