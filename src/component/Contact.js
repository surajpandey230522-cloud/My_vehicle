import React from "react";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>
          Have questions about our vehicles or services? We'd love to hear from
          you. Fill out the form below and our team will get back to you as soon
          as possible.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-box">
            <span>📍</span>
            <div>
              <h3>Address</h3>
              <p>123 Vehicle Street, New Delhi, India</p>
            </div>
          </div>

          <div className="info-box">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-box">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>info@vehicleworld.com</p>
            </div>
          </div>

          <div className="info-box">
            <span>🕒</span>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday (9:00 AM - 7:00 PM)</p>
            </div>
          </div>

          <div className="social-icons">
            <a href="/">🌐</a>
            <a href="/">📘</a>
            <a href="/">📸</a>
            <a href="/">▶️</a>
          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form">

          

         <form className="contact-form" id="contactForm">
      <h3 style={{ marginBottom: "0.5rem", fontWeight: 600 }}>
        <i className="fas fa-pen" style={{ color: "var(--gold)" }} /> Send a
        message
      </h3>
      <input type="text" id="name" placeholder="Full name" required="" />
      <input type="email" id="email" placeholder="Email address" required="" />
      <input type="text" id="subject" placeholder="Subject" />
      <textarea
        id="message"
        placeholder="Tell us about your connection to nature ..."
        defaultValue={""}
      />
      <button type="submit" className="btn">
        <i className="fas fa-paper-plane" /> Send message
      </button>
      <p style={{ marginTop: "0.8rem", fontSize: "0.9rem", color: "#386a52" }}>
        <i className="fas fa-seedling" /> We reply within 24 hours.
      </p>
    </form>
        </div>

      </div>

    </section>
  );
}

export default Contact;