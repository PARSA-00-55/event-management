import { useEffect, useState } from "react";
import "./components.css"
import { Link } from "react-router-dom";

const OurService = () => {
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
    // <div>
      <section className="text-gray-700 body-font ">
        <div className="container px-5 my-10 rounded-lg mx-auto bg-gray-200">
        <br />
        <h3 className="text-5xl">Our Service</h3>
        <br /><br />
          <div className="flex flex-wrap -m-4">
            {services.map((service, i) => (
              <div className="lg:w-1/3 md:w-1/2 p-4 w-full" key={i}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={service.img}
                  />
                </a>
                <div className="mt-4 flex align-middle justify-between">
                  <div>
                    <h3 className="text-slate-700 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-black-300 title-font text-lg font-medium | card-title">
                      <span>{service.title}</span>
                    </h2>
                    <p className="mt-1 text-slate-500">${service.price}</p>
                  </div>
                  <Link to={`/service/${service.id}`}>
                    <button className="btn btn-active btn-primary">
                      View details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    // </div>
  );
};

export default OurService;
