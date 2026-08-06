import React from "react";

import car from "../images/car.jpg";
import bike from "../images/bike.jpg";
import bus from "../images/bus.jpg";
import truck from "../images/truck1.jpg";
import cycle from "../images/cycle.jpg";
import tractor from "../images/tector.jpg";

function Hero() {
  const vehicles = [
    {
      id: 1,
      name: "Sports Car",
      image: car,
      description: "Fast, stylish, and comfortable."
    },
    {
      id: 2,
      name: "Motor Bike",
      image: bike,
      description: "Perfect for city rides."
    },
    {
      id: 3,
      name: "Bus",
      image: bus,
      description: "Comfortable public transport."
    },
    {
      id: 4,
      name: "Truck",
      image: truck,
      description: "Heavy-duty transportation."
    },
    {
      id: 5,
      name: "Bicycle",
      image: cycle,
      description: "Eco-friendly and healthy."
    },
    {
      id: 6,
      name: "Tractor",
      image: tractor,
      description: "Powerful farming vehicle."
    }
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Explore Amazing Vehicles</h1>
        <p>
          Choose your favorite vehicle from our premium collection.
        </p>
      </div>

      <div className="card-container">
        {vehicles.map((vehicle) => (
          <div className="card" key={vehicle.id}>
            <img src={vehicle.image} alt={vehicle.name} />

            <div className="card-body">
              <h2>{vehicle.name}</h2>

              <p>{vehicle.description}</p>

              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;