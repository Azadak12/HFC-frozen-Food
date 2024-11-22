import { Button, Card, CardBody, CardHeader, CardImg, CardLink, CardSubtitle, Col, Row } from "react-bootstrap"
import "../assets/bootstrap/css/bootstrap.min.css"
import "../Styles/Home.css"
import Footer from "./Footer"
import MainFooter from "./MainFooter"
import {  FaTruck } from 'react-icons/fa';
import BestCatogoriesSlider from "./BestCatogriesSlider"
import founderpic from "../assets/vecteezy_ai-generative-photo-happy-businessman-standing-with-arms_29306038.jpg"
import TeamSection from "./TeamsSection"
function Home() {
 
    const orderfunction= ()=>{
      alert("Select Product to place the order");
    }
  return (
    <div style={{overflow:"hidden"}}>
     
 <div className="mainpage">
<div className="title">	𝙂𝙚𝙩 𝙧𝙚𝙖𝙙𝙮 𝙛𝙤𝙧 𝙩𝙝𝙚 <strong>𝙛𝙧𝙚𝙨𝙝𝙚𝙨𝙩 𝙛𝙧𝙤𝙯𝙚𝙣 𝙛𝙤𝙤𝙙</strong>, 𝙙𝙚𝙡𝙞𝙫𝙚𝙧𝙚𝙙 𝙬𝙞𝙩𝙝 𝙘𝙖𝙧𝙚!<br></br> <br></br> <span className="special">𝘼 𝙩𝙖𝙨𝙩𝙮 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙚 𝙞𝙨 𝙟𝙪𝙨𝙩 𝙢𝙤𝙢𝙚𝙣𝙩𝙨 𝙖𝙬𝙖𝙮 🥘</span></div>

<div className="d-flex justify-content-center mt-4">
  <Button
    type="button"
    className="btn-primary px-4 py-2"
    style={{ borderRadius: "30px", backgroundColor:"#d68910", border:"0px"}}  onClick={orderfunction}
  >
     <FaTruck className="me-2" />
     ORDER NOW
  </Button>
</div>
 </div>
 <BestCatogoriesSlider/>
 <Footer/>
 {/* <Row className="p-3" style={{alignItems:"center"}}>
  <Col md ={4}>
  <Card>
    <CardImg src={founderpic} style={{width:"200px", border:"2px solid red"}}></CardImg>
    <CardBody>
      <CardHeader>Founder HFC Frozen Food</CardHeader>
      <CardSubtitle>Talha Arshad</CardSubtitle>
      <Button>Read More</Button>
    </CardBody>
  </Card>
  </Col>
  <Col md ={4}>
  <Card>
    <CardImg src={founderpic} style={{width:"200px", border:"2px solid red"}}></CardImg>
    <CardBody>
      <CardHeader>Cheif Technology Officer</CardHeader>
      <CardSubtitle>Abdul Kalam</CardSubtitle>
      <Button>Read More</Button>
    </CardBody>
  </Card>
  </Col>
  <Col md ={4}>
  <Card>
    <CardImg src={founderpic} style={{width:"200px", border:"2px solid red"}}></CardImg>
    <CardBody>
      <CardHeader>Supply Management</CardHeader>
      <CardSubtitle>Sufyan Masood</CardSubtitle>
      <Button>Read More</Button>
    </CardBody>
  </Card>
  </Col>
 </Row> */}
 <TeamSection/>
 <MainFooter/>
    </div>
  )
}

export default Home
