import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import founderpic from "../assets/vecteezy_ai-generative-photo-happy-businessman-standing-with-arms_29306038.jpg"; 
import CTO from "../assets/CTO.jpg";
import manage from "../assets/mange.jpg";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../Styles/TeamSectio.css"; 

const teamMembers = [
  {
    id: 1,
    role: "Founder HFC Frozen Food",
    name: "Talha Arshad",
    image: founderpic,
  },
  {
    id: 2,
    role: "Chief Technology Officer",
    name: "Abdul Kalam",
    image: CTO,
  },
  {
    id: 3,
    role: "Supply Management",
    name: "Sufyan Masood",
    image: manage,
  },
];

function TeamCard({ role, name, image }) {
  return (
    <Card className="team-card mb-4 shadow-sm">
      <div className="image-container">
        <img src={image} alt={name} className="team-image" />
        <div className="loading-animation"></div>
      </div>
      <Card.Body className="text-center">
        <h5 className="fw-bold text-primary">{role}</h5>
        <p className="text-muted">{name}</p>
        <Button variant="outline-primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

function TeamSection() {
  return (
    <Row className="p-3 text-center">
      {teamMembers.map((member) => (
        <Col key={member.id} md={4}>
          <TeamCard role={member.role} name={member.name} image={member.image} />
        </Col>
      ))}
    </Row>
  );
}

export default TeamSection;
