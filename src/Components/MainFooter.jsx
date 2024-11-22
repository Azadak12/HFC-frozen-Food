import { Container, Row, Col, Button } from "react-bootstrap";
import "../assets/bootstrap/css/bootstrap.min.css";
import logo from "../assets/logo-removebg-preview.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";
import "../Styles/Mainfooter.css";
import { IoMdClock } from "react-icons/io";

function MainFooter() {
  return (
    <div>
      <Container fluid className="bg-dark">
        <Row>
          <Col md={4}>
            <div className="footerhead text-white p-5">
              <img src={logo} style={{ height: "100px" }} alt="Logo" />
              <br />
              <p className="mt-3">
                A wonderful serenity embraces our hearts, like the freshness of spring mornings—bringing you the finest frozen delights with care and quality.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="footerhead1 text-white mt-5">
              <div className="head">𝑺𝒐𝒄𝒊𝒂𝒍 𝑳𝒊𝒏𝒌𝒔
                <div className="stylish-linee"></div>
              </div>
              <ul>
                <li>
                  <FaFacebook style={{ fontSize: "26px", color: "#3b5998" }} /> <a href="https://www.facebook.com" target="blank">Facebook</a>
                </li>
                <li>
                  <FaTiktok style={{ fontSize: "26px", color: "#000000" }} /> <a href="https://www.tiktok.com/login" target="blank">TikTok</a>
                </li>
                <li>
                  <FaSquareInstagram style={{ fontSize: "26px", color: "#E1306C" }} /> <a href="https://www.instagram.com/" target="blank">Instagram</a>
                </li>
                <li>
                  <FaSnapchatSquare style={{ fontSize: "26px", color: "#FFFC00" }} /> <a href="https://www.snapchat.com/" target="blank">Snapchat</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footerhead1 text-white mt-5">
              𝑾𝒐𝒓𝒌𝒊𝒏𝒈 𝑯𝒐𝒖𝒓𝒔
              <div className="stylish-line"></div>
              <div className="mt-3">
                <IoMdClock style={{ fontSize: "25px" }} /> Everyday 10 AM - 9 PM <br />
                A wonderful serenity has taken possession of my entire soul.
              </div>
              <Button className="mt-5">Contact US</Button>
            </div>
          </Col>
        </Row>

        {/* Google Maps Section */}
        <Row className="mt-5">
          <Col md={12}>
            <div className="google-map-container">
              <h5 className="text-white">Find Us</h5>
              <div className="map-responsive">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0009532126696!2d90.39412221497346!3d23.810399392914338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76d7b63e6ad%3A0x6731895bdf75e4e5!2sDhaka!5e0!3m2!1sen!2sbd!4v1634702236973!5m2!1sen!2sbd" 
                  width="100%" 
                  height="250" 
                  style={{border: "10px" }} 
                  allowFullScreen="" 
                  loading="lazy"></iframe>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="text-white p-3">
              All rights reserved © HFC Frozen Food. The content on this website, including text, images, and other materials, is the property of HFC Frozen Food and is protected by copyright laws.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainFooter;
