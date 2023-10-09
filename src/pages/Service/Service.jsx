import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public directory
    fetch("/eventstype.json") // Path to your JSON file
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {services.map((service,) => (
        <div
          className="hero h-[300px] mt-10 rounded-lg overflow-hidden"
          key={service.id}
          style={{
            backgroundImage:
              `url(${service.img})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">{service.title}</h1>
              {/* <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p> */}
              <Link to={`/service/${service.id}`}>
              <button className="btn btn-primary">See Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
};

export default Service;
