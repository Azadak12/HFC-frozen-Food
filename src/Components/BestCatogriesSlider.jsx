import Carousel from 'react-bootstrap/Carousel';
import kabab from "../assets/nigts.png"; 

function BestCategoriesSlider() {
  return (
    <Carousel 
      data-bs-theme="dark" 
      interval={3000} 
      className='mt-5' 
      style={{
        maxWidth: "1200px", // Set max-width for larger screens
        margin: "0 auto", // Center the carousel horizontally
      }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={kabab}
          alt="First slide"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.5s ease-in-out",
          }} 
        />
        <Carousel.Caption 
          style={{
            backgroundColor: "rgba(255, 0, 0, 0.7)", // Semi-transparent red for better contrast
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h5 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}>
            Delicious Chapli Kabab
          </h5>
          <p style={{ fontSize: "1.2rem", color: "white" }}>
            Enjoy the taste of our premium Chapli Kabab, made with the finest ingredients.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={kabab}
          alt="Second slide"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.5s ease-in-out",
          }}
        />
        <Carousel.Caption 
          style={{
            backgroundColor: "rgba(255, 0, 0, 0.7)", 
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h5 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}>
            Tasty and Fresh
          </h5>
          <p style={{ fontSize: "1.2rem", color: "white" }}>
            Freshly made, hot and crispy. A must-try for every foodie.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={kabab} 
          alt="Third slide"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.5s ease-in-out",
          }}
        />
        <Carousel.Caption 
          style={{
            backgroundColor: "rgba(255, 0, 0, 0.7)", 
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h5 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}>
            Grilled to Perfection
          </h5>
          <p style={{ fontSize: "1.2rem", color: "white" }}>
            Our grilled kababs are always served fresh and flavorful, with the perfect blend of spices.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BestCategoriesSlider;
