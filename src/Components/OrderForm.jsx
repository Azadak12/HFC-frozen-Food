import { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function OrderForm({ product, onCancel, onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      product,
      name,
      number,
      address,
      quantity,
    };
    onSubmit(orderDetails);
  };

  return (
    <Container style={{ backgroundColor: "#2b2b2b", padding: "20px", borderRadius: "10px" }}>
      <h4 className="text-white text-center mb-4">Order {product}</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label className="text-white">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formNumber">
          <Form.Label className="text-white">Contact Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your contact number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label className="text-white">Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formQuantity">
          <Form.Label className="text-white">Quantity</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </Form.Group>
        <div className="d-flex justify-content-between mt-3">
          <Button variant="danger" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" style={{ backgroundColor: "#ff4c4c", border: "none" }}>
            Submit Order
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default OrderForm;
