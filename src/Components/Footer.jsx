import { useState } from "react";
import "../assets/bootstrap/css/bootstrap.min.css";
import { Container, Row, Card, Col, CardHeader, CardImg, CardBody, Button, CardText } from "react-bootstrap";
import kofta from "../assets/Chicken-Kofta-1-removebg-preview.png";
import chapli from "../assets/chapli kabab.png";
import shekh from "../assets/shekh kabab.png";
import OrderForm from "./OrderForm";

import { auth, db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import "../Styles/footer.css";

function Footer() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [user] = useState(auth.currentUser);

  const handleOrderClick = (product) => {
    if (!user) {
      alert("Error: You must be logged in to place an order.");
      return;
    }
    setSelectedProduct(product);
    setShowOrderForm(true);
  };

  const handleCancel = () => {
    setShowOrderForm(false);
    setSelectedProduct("");
  };

  const handleSubmit = (orderDetails) => {
    const orderData = {
      product: selectedProduct,
      userId: user.uid,
      userName: user.displayName,
      orderDetails: orderDetails,
      orderDate: Timestamp.fromDate(new Date()),
      status: "Pending",
    };

    addDoc(collection(db, "orders"), orderData)
      .then(() => {
        console.log("Order saved successfully!");
        alert("Order placed successfully!");
        setShowOrderForm(false);
      })
      .catch((error) => {
        console.error("Error placing order: ", error);
        alert("Error placing order: " + error.message);
      });
  };

  if (showOrderForm) {
    return <OrderForm product={selectedProduct} onCancel={handleCancel} onSubmit={handleSubmit} />;
  }

  return (
    <div className="mt-4">
      <Container fluid style={{ backgroundColor: "#1b2631", padding: "30px 0" }}>
        <Row className="justify-content-center">
          
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="card-hover" style={{ width: "18rem", backgroundColor: "#2b2b2b", borderRadius: "15px", transition: "transform 0.3s ease" }}>
              <div className="text-center p-3">
                <CardImg
                  variant="top"
                  src={kofta}
                  className="rounded-circle card-img-hover"
                  style={{ width: "150px", height: "150px", objectFit: "cover", border: "4px solid white", transition: "transform 0.3s ease" }}
                />
              </div>
              <CardHeader className="text-white text-center" style={{ backgroundColor: "transparent", fontSize: "22px" }}>
                𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐊𝐨𝐟𝐭𝐚
              </CardHeader>
              <CardBody className="text-center">
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Price  &nbsp;&nbsp;&nbsp;&nbsp; $20</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Peaces &nbsp;&nbsp;&nbsp;&nbsp;$15</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Discount &nbsp;&nbsp;&nbsp;&nbsp;28%</CardText>
                <Button
                  onClick={() => handleOrderClick("Chicken Kofta")}
                  style={{
                    backgroundColor: "#ff4c4c",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "16px",
                    transition: "background-color 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                  }}
                  className="hover-effect"
                >
                  Make Order
                </Button>
                <br />
                <Button className="mt-4">
                  <a href="https://wa.link/k1ypjt" style={{ color: "#fff" }} target="blank">
                    Order Now
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>

       
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="card-hover" style={{ width: "18rem", backgroundColor: "#2b2b2b", borderRadius: "15px", transition: "transform 0.3s ease" }}>
              <div className="text-center p-3">
                <CardImg
                  variant="top"
                  src={chapli}
                  className="rounded-circle card-img-hover"
                  style={{ width: "150px", height: "150px", objectFit: "cover", border: "4px solid white", transition: "transform 0.3s ease" }}
                />
              </div>
              <CardHeader className="text-white text-center" style={{ backgroundColor: "transparent", fontSize: "22px" }}>
                𝐂𝐡𝐚𝐩𝐥𝐢 𝐊𝐚𝐛𝐚𝐛
              </CardHeader>
              <CardBody className="text-center">
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Price  &nbsp;&nbsp;&nbsp;&nbsp; $25</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Peaces &nbsp;&nbsp;&nbsp;&nbsp;$20</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Discount &nbsp;&nbsp;&nbsp;&nbsp;15%</CardText>
                <Button
                  onClick={() => handleOrderClick("Chapli Kabab")}
                  style={{
                    backgroundColor: "#ff4c4c",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "16px",
                    transition: "background-color 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                  }}
                  className="hover-effect"
                >
                  Make Order
                </Button>
                <br />
                <Button className="mt-4">
                  <a href="https://wa.link/k1ypjt" style={{ color: "#fff" }} target="blank">
                    Order Now
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>

       
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="card-hover" style={{ width: "18rem", backgroundColor: "#2b2b2b", borderRadius: "15px", transition: "transform 0.3s ease" }}>
              <div className="text-center p-3">
                <CardImg
                  variant="top"
                  src={shekh}
                  className="rounded-circle card-img-hover"
                  style={{ width: "150px", height: "150px", objectFit: "cover", border: "4px solid white", transition: "transform 0.3s ease" }}
                />
              </div>
              <CardHeader className="text-white text-center" style={{ backgroundColor: "transparent", fontSize: "22px" }}>
                𝐒𝐡𝐞𝐤𝐡 𝐊𝐚𝐛𝐚𝐛
              </CardHeader>
              <CardBody className="text-center">
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Price  &nbsp;&nbsp;&nbsp;&nbsp; $30</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Peaces &nbsp;&nbsp;&nbsp;&nbsp;$25</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Discount &nbsp;&nbsp;&nbsp;&nbsp;10%</CardText>
                <Button
                  onClick={() => handleOrderClick("Shekh Kabab")}
                  style={{
                    backgroundColor: "#ff4c4c",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "16px",
                    transition: "background-color 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                  }}
                  className="hover-effect"
                >
                  Make Order
                </Button>
                <br />
                <Button className="mt-4">
                  <a href="https://wa.link/k1ypjt" style={{ color: "#fff" }} target="blank">
                    Order Now
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="card-hover" style={{ width: "18rem", backgroundColor: "#2b2b2b", borderRadius: "15px", transition: "transform 0.3s ease" }}>
              <div className="text-center p-3">
                <CardImg
                  variant="top"
                  src={kofta}
                  className="rounded-circle card-img-hover"
                  style={{ width: "150px", height: "150px", objectFit: "cover", border: "4px solid white", transition: "transform 0.3s ease" }}
                />
              </div>
              <CardHeader className="text-white text-center" style={{ backgroundColor: "transparent", fontSize: "22px" }}>
                𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐊𝐨𝐟𝐭𝐚
              </CardHeader>
              <CardBody className="text-center">
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Price  &nbsp;&nbsp;&nbsp;&nbsp; $20</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Peaces &nbsp;&nbsp;&nbsp;&nbsp;$15</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Discount &nbsp;&nbsp;&nbsp;&nbsp;28%</CardText>
                <Button
                  onClick={() => handleOrderClick("Chicken Kofta")}
                  style={{
                    backgroundColor: "#ff4c4c",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "16px",
                    transition: "background-color 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                  }}
                  className="hover-effect"
                >
                  Make Order
                </Button>
                <br />
                <Button className="mt-4">
                  <a href="https://wa.link/k1ypjt" style={{ color: "#fff" }} target="blank">
                    Order Now
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>

       
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="card-hover" style={{ width: "18rem", backgroundColor: "#2b2b2b", borderRadius: "15px", transition: "transform 0.3s ease" }}>
              <div className="text-center p-3">
                <CardImg
                  variant="top"
                  src={chapli}
                  className="rounded-circle card-img-hover"
                  style={{ width: "150px", height: "150px", objectFit: "cover", border: "4px solid white", transition: "transform 0.3s ease" }}
                />
              </div>
              <CardHeader className="text-white text-center" style={{ backgroundColor: "transparent", fontSize: "22px" }}>
                𝐂𝐡𝐚𝐩𝐥𝐢 𝐊𝐚𝐛𝐚𝐛
              </CardHeader>
              <CardBody className="text-center">
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Price  &nbsp;&nbsp;&nbsp;&nbsp; $25</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Peaces &nbsp;&nbsp;&nbsp;&nbsp;$20</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Discount &nbsp;&nbsp;&nbsp;&nbsp;15%</CardText>
                <Button
                  onClick={() => handleOrderClick("Chapli Kabab")}
                  style={{
                    backgroundColor: "#ff4c4c",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "16px",
                    transition: "background-color 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                  }}
                  className="hover-effect"
                >
                  Make Order
                </Button>
                <br />
                <Button className="mt-4">
                  <a href="https://wa.link/k1ypjt" style={{ color: "#fff" }} target="blank">
                    Order Now
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>

       
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="card-hover" style={{ width: "18rem", backgroundColor: "#2b2b2b", borderRadius: "15px", transition: "transform 0.3s ease" }}>
              <div className="text-center p-3">
                <CardImg
                  variant="top"
                  src={shekh}
                  className="rounded-circle card-img-hover"
                  style={{ width: "150px", height: "150px", objectFit: "cover", border: "4px solid white", transition: "transform 0.3s ease" }}
                />
              </div>
              <CardHeader className="text-white text-center" style={{ backgroundColor: "transparent", fontSize: "22px" }}>
                𝐒𝐡𝐞𝐤𝐡 𝐊𝐚𝐛𝐚𝐛
              </CardHeader>
              <CardBody className="text-center">
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Price  &nbsp;&nbsp;&nbsp;&nbsp; $30</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Peaces &nbsp;&nbsp;&nbsp;&nbsp;$25</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Discount &nbsp;&nbsp;&nbsp;&nbsp;10%</CardText>
                <Button
                  onClick={() => handleOrderClick("Shekh Kabab")}
                  style={{
                    backgroundColor: "#ff4c4c",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "16px",
                    transition: "background-color 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                  }}
                  className="hover-effect"
                >
                  Make Order
                </Button>
                <br />
                <Button className="mt-4">
                  <a href="https://wa.link/k1ypjt" style={{ color: "#fff" }} target="blank">
                    Order Now
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default Footer;
