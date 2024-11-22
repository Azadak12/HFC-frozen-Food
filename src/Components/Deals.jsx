
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import kabab from "../assets/kbab.jpg";  
import kofta from "../assets/kofta.jfif"; 
import nuggets from "../assets/nigts.png";  

function Deals() {

  const deals = [
    {
      id: 1,
      name: "Chapli Kabab",
      originalPrice: 20.00,
      discountPercentage: 30,
      image: kabab,
    },
    {
      id: 2,
      name: "Kofta",
      originalPrice: 15.00,
      discountPercentage: 30,
      image: kofta,
    },
    {
      id: 3,
      name: "Nuggets",
      originalPrice: 10.00,
      discountPercentage: 30,
      image: nuggets,
    },
  ];

  return (
    <Container fluid className="mt-5">
      <h2 className="text-center mb-4">Amazing Deals!</h2>
      <Row>
        {deals.map((deal) => {
          const discountedPrice = (deal.originalPrice * (1 - deal.discountPercentage / 100)).toFixed(2);
          return (
            <Col md={4} key={deal.id} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={deal.image} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{deal.name}</Card.Title>
                  <Card.Text>
                    <span style={{ textDecoration: "line-through", marginRight: "5px" }}>${deal.originalPrice}</span>
                    <span style={{ color: "red", fontWeight: "bold" }}>Now: ${discountedPrice}</span>
                  </Card.Text>
                  <Button variant="danger">Grab This Deal</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Deals;
