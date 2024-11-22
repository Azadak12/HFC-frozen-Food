import { Container, Row, Col } from "react-bootstrap";
import "../assets/bootstrap/css/bootstrap.min.css";
import pixelshamel from "../assets/pexels-shameel-mukkath-3421394-14731642.jpg";

function About() {
  return (
    <div>
      <Container fluid className="bg-dark text-white p-5 rounded border border-light">
        <Row>
          <p className="text-center" style={{ fontSize: "25px" }}>
            𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝑯𝑭𝑪 𝑭𝒓𝒐𝒛𝒆𝒏 𝑭𝒐𝒐𝒅!
          </p>
          <Col md={4}>
            <img
              src={pixelshamel}
              alt="HFC Frozen Food"
              style={{ height: "300px", width: "200px", borderRadius: "4px" }}
            />
          </Col>
          <Col md={8}>
            <p className="mt-5">
              We believe in delivering not just food, but an experience that brings comfort, joy, and the taste of home right to your table.
            </p>
          </Col>
        </Row>
      </Container>

  
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center">Our Mission</h2>
            <p className="text-center">
              To provide high-quality frozen food products that make meal preparation easy and enjoyable, ensuring our customers can enjoy delicious meals at home.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center">Our Vision</h2>
            <p className="text-center">
              To be the leading provider of frozen food products that are both convenient and nutritious, making home cooking accessible to everyone.
            </p>
          </Col>
        </Row>
      </Container>


      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center">Our Values</h2>
            <ul className="text-center">
              <li>Quality: We prioritize the quality of our ingredients.</li>
              <li>Convenience: Making meal preparation easy for everyone.</li>
              <li>Customer Satisfaction: Our customers are at the heart of everything we do.</li>
              <li>Innovation: We continuously seek new ways to improve our products.</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <footer className="text-center p-4 bg-dark text-white">
        <p>&copy; 2024 HFC Frozen Food. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
