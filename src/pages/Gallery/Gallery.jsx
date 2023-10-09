import { SiEventstore } from "react-icons/si";

const Gallery = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 flex align-middle gap-3">
            <SiEventstore /> Event Tech
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore our gallery page to witness the magic of our meticulously crafted corporate events. Immerse yourself in a world of unforgettable moments and inspiring experiences.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://i.ibb.co/z5vQQxb/Team-Building-Workshops.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://i.ibb.co/bvSzpm6/Trade-Shows-and-Expos.webp"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://i.ibb.co/QHGxb82/Conferences-and-Seminars.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://i.ibb.co/5sSYW97/Product-Launches.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://i.ibb.co/s6NfVLP/Award-Ceremonies.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://i.ibb.co/vQ2SqQn/Corporate-Meetings.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
