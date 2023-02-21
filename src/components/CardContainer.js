import * as mdb from "mdb-ui-kit"; // lib
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import leetcode from "../images/leetcode.png";
import profile from "../images/profile.jpg";
function CardContainer() {
  return (
    <Container>
      <Row>
        <Col>
          <Card
            className="mx-auto card-container"
            style={{ width: "25rem", height: "100%" }}
          >
            <Card.Img
              variant="top"
              src={profile}
              style={{ width: "25rem", height: "25rem" }}
            />
            <Card.Body className="card--body">
              <Card.Title className="card--title">
                <h3>John Christopher Ilacad</h3>
                <h5 className="profile--title">Aspiring Software Engineer</h5>
                <h6>johnchristopherilacad27@gmail.com</h6>
              </Card.Title>
              <div className="d-grid mt-3">
                <Button
                  href="https://www.linkedin.com/in/john-christopher-ilacad-4a2a761bb/"
                  variant="primary"
                  size="md"
                >
                  LinkedIn
                </Button>
              </div>

              <Card.Title className="mt-4">About</Card.Title>
              <Card.Text className="card--text">
                I'm a student at University of the City of Manila and currently
                taking computer science. In my spare time I'm learning how to
                develop web application.
              </Card.Text>

              <Card.Title className="mt-4">Interests</Card.Title>
              <Card.Text className="card--text">
                I love discovering things related to technology. Currently, I am
                studying web applications development.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted card--footer">
              <a
                className="me-3"
                style={{ color: "#3b5998" }}
                href="https://www.facebook.com/jcilacadl/"
                role="button"
              >
                <i class="fab fa-facebook-f fa-lg"></i>
              </a>

              <a
                className="me-3"
                style={{ color: "#55acee" }}
                href="https://leetcode.com/jcilacad/"
                role="button"
              >
                <img
                  src={leetcode}
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
              </a>

              <a
                className="me-3"
                style={{ color: "#ffac44" }}
                href="https://stackoverflow.com/users/21259318/john-christopher-ilacad"
                role="button"
              >
                <i class="fab fa-stack-overflow fa-lg"></i>
              </a>

              <a
                className="me-3"
                style={{ color: "#333333" }}
                href="https://github.com/jcilacad"
                role="button"
              >
                <i class="fab fa-github fa-lg"></i>
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardContainer;
