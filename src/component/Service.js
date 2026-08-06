import React from "react";

function Services() {
  const services = [
    {
      icon: "🚗",
      title: "Premium Vehicle Sales",
      description:
        "Explore a wide range of premium cars, bikes, SUVs, trucks, and commercial vehicles from trusted brands."
    },
    {
      icon: "🔧",
      title: "Vehicle Servicing",
      description:
        "Professional maintenance including engine inspection, oil change, brake repair, tire replacement, and complete servicing."
    },
    {
      icon: "🛡️",
      title: "Insurance Assistance",
      description:
        "Get affordable insurance plans with quick claim support and complete protection for your vehicle."
    },
    {
      icon: "💳",
      title: "Easy Finance & EMI",
      description:
        "Flexible EMI options, quick loan approvals, and attractive interest rates to make purchasing easier."
    },
    {
      icon: "🚘",
      title: "Test Drive Booking",
      description:
        "Book your favorite vehicle online and experience its comfort, performance, and features before purchasing."
    },
    {
      icon: "🔄",
      title: "Vehicle Exchange",
      description:
        "Exchange your old vehicle and receive the best market value toward your next purchase."
    },
    {
      icon: "⚡",
      title: "24/7 Roadside Assistance",
      description:
        "Emergency towing, battery jump-start, fuel delivery, flat tire replacement, and technical support anytime."
    },
    {
      icon: "📞",
      title: "Customer Support",
      description:
        "Our expert team is available to answer your questions and provide guidance throughout your journey."
    }
  ];

  return (
    <section className="services">

      <div className="service-title">
        <h1>Our Premium Services</h1>

        <p>
          We provide everything your vehicle needs — from buying your dream
          vehicle to maintenance, insurance, finance, and lifetime customer
          support.
        </p>
      </div>

      <div className="service-container">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="icon">
              {service.icon}
            </div>

            <h2>{service.title}</h2>

            <p>{service.description}</p>

            <button>Learn More</button>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Services;