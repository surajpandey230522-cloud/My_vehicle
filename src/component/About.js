import React from 'react'

function About() {
  return (
    <section className="about">

      <div className="about-header">
        <h1>About Vehicle World</h1>

        <p>
          Welcome to <span>Vehicle World</span>, where innovation,
          performance, and trust come together. We believe every journey
          deserves the perfect vehicle. From stylish sports cars to
          powerful trucks and eco-friendly bicycles, we offer a collection
          designed for every lifestyle and purpose.
        </p>
      </div>

      <div className="about-content">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZlaGljbGV8ZW58MHx8MHx8fDA%3D"
            alt="Vehicle"
          />
        </div>

        <div className="about-text">

          <h2>Drive Your Dreams With Us</h2>

          <p>
            Our goal is to help every customer discover vehicles that match
            their needs, personality, and budget. We work with trusted
            manufacturers to ensure quality, safety, and excellent
            performance.
          </p>

          <p>
            Whether you're searching for a family SUV, a luxury sports car,
            a reliable bike, or commercial transportation, our platform
            makes finding your next vehicle simple and enjoyable.
          </p>

          <button>Explore Vehicles</button>

        </div>

      </div>

      <div className="features">

        <div className="feature-card">
          <h3>🚗 Premium Collection</h3>
          <p>
            Discover a wide range of modern, stylish, and high-performance
            vehicles for every need.
          </p>
        </div>

        <div className="feature-card">
          <h3>🛡 Trusted Quality</h3>
          <p>
            Every vehicle is selected with a focus on quality, reliability,
            and customer satisfaction.
          </p>
        </div>

        <div className="feature-card">
          <h3>⚡ Fast Service</h3>
          <p>
            Our dedicated team provides quick support and a smooth
            experience from inquiry to purchase.
          </p>
        </div>

      </div>

      <div className="stats">

        <div className="stat">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat">
          <h2>500+</h2>
          <p>Premium Vehicles</p>
        </div>

        <div className="stat">
          <h2>50+</h2>
          <p>Trusted Brands</p>
        </div>

        <div className="stat">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>

      </div>

    </section>
  );
}

export default About;
