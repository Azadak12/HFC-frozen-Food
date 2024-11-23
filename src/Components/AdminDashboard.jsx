import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Table, Badge } from "react-bootstrap";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const mockUsers = [
    { id: "1", name: "Alice", email: "alice@example.com" },
    { id: "2", name: "Bob", email: "bob@example.com" },
  ];

  const mockProducts = [
    { id: "1", name: "Frozen Pizza", price: 12.99, stock: 10 },
    { id: "2", name: "Frozen Lasagna", price: 14.99, stock: 5 },
    { id: "3", name: "Frozen Fries", price: 7.99, stock: 20 },
  ];

  const mockOrders = [
    { id: "1", customerName: "Alice", status: "Delivered" },
    { id: "2", customerName: "Bob", status: "Pending" },
  ];

  useEffect(() => {
    setUsers(mockUsers);
    setProducts(mockProducts);
    setOrders(mockOrders);
  }, []);

  return (
    <Container fluid className="p-4">
      <Row>
       
        <Col
          md={3}
          className={`bg-light p-3 ${isSidebarCollapsed ? "d-none d-md-block" : ""}`}
          style={{ height: "100vh", position: "fixed", left: 0 }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h4>Admin Panel</h4>
            <Button
              variant="link"
              className="text-dark d-md-none"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            >
              {isSidebarCollapsed ? "Expand" : "Collapse"}
            </Button>
          </div>
          <ul className="list-unstyled mt-3">
            <li>
              <Button variant="link" className="w-100 text-start">
                Dashboard
              </Button>
            </li>
            <li>
              <Button variant="link" className="w-100 text-start">
                Manage Products
              </Button>
            </li>
            <li>
              <Button variant="link" className="w-100 text-start">
                Manage Users
              </Button>
            </li>
            <li>
              <Button variant="link" className="w-100 text-start">
                Orders
              </Button>
            </li>
          </ul>
        </Col>

        <Col md={{ span: 9, offset: 3 }} className="mt-4">
          <h1 className="mb-4">Admin Dashboard</h1>
          <Row>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>Products</Card.Title>
                  <Card.Text>Total: {products.length}</Card.Text>
                  <Button variant="primary">View Products</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>Users</Card.Title>
                  <Card.Text>Total: {users.length}</Card.Text>
                  <Button variant="primary">View Users</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>Orders</Card.Title>
                  <Card.Text>Total: {orders.length}</Card.Text>
                  <Button variant="primary">View Orders</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

       
          <h3>Recent Orders</h3>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>
                    <Badge
                      bg={
                        order.status === "Delivered"
                          ? "success"
                          : order.status === "Pending"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {order.status}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="success" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
