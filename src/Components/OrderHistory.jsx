import "../assets/bootstrap/css/bootstrap.min.css";

function OrderHistory() {
  const orders = [
    { id: 1, date: "2024-11-20", status: "Delivered", amount: "$120" },
    { id: 2, date: "2024-11-18", status: "Pending", amount: "$80" },
    { id: 3, date: "2024-11-15", status: "Cancelled", amount: "$50" },
  ];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav
        className="bg-dark text-white vh-100"
        style={{ width: "250px", position: "fixed", left: 0, top: 0 }}
      >
        <h3 className="p-3">Dashboard</h3>
        <ul className="nav flex-column p-2">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Order History
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Settings
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div
        className="container-fluid"
        style={{ marginLeft: "250px", padding: "20px" }}
      >
        {/* Top Navbar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Order History</h1>
          <div>
            <button className="btn btn-primary me-2">Notifications</button>
            <button className="btn btn-secondary">Profile</button>
          </div>
        </div>

        {/* Stats Widgets */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card text-white bg-primary">
              <div className="card-body">
                <h5 className="card-title">Total Orders</h5>
                <p className="card-text">3</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning">
              <div className="card-body">
                <h5 className="card-title">Pending Orders</h5>
                <p className="card-text">1</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-danger">
              <div className="card-body">
                <h5 className="card-title">Cancelled Orders</h5>
                <p className="card-text">1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Table */}
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        order.status === "Delivered"
                          ? "bg-success"
                          : order.status === "Pending"
                          ? "bg-warning"
                          : "bg-danger"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
