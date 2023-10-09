// ServiceDetails.js

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Testimonials from "../../component/Testimonials";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    // Fetch the specific service details based on the ID
    fetch(`/eventstype.json`) // Path to your JSON data
      .then((response) => response.json())
      .then((data) => {
        const selectedService = data.find((item) => item.id === parseInt(id));
        setService(selectedService);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  // Render loading while fetching data
  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        className="hero h-[300px] mt-10 rounded-lg overflow-hidden"
        style={{
          backgroundImage:
            `url(${service.img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">{service.title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      {/* ============================ */}
      
      <div>
        {/* <h3>Service Title: {service.title}</h3> */}
        <p className="mt-5 px-16 text-2xl text-gray-500">Service Price: ${service.price}</p>
        <p className="mt-8 container px-16">
            {service.description}
        </p>
        {/* Add other details you want to display */}
        {/* <img src={service.img} alt={service.title} /> */}
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default ServiceDetails;
