import Carousel from "react-bootstrap/Carousel";
import React, {useState} from "react";

function Dashboard() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://qph.fs.quoracdn.net/main-qimg-0f8ebffc3ba22813b2b547a58c8e4676"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>GPS TRACKING</h3>
          <p>Track Your Vehicles in Every Where</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://artrakker.com/wp-content/uploads/2020/02/gps-vehicle-tracking-system-installation.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Location Marker</h3>
          <p>See Your Vehicles in Every Where</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.freepik.com/free-psd/gps-location-tracker-concept-with-mock-up_23-2148759474.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>GPS Data Analysing</h3>
          <p>
            Analysing GPS Data
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Dashboard;
