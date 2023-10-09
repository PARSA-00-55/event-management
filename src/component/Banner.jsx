import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div
        className="hero h-[700px] mt-10 rounded-lg overflow-hidden"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/LPhYFwx/banner-img.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">On Stop</h1>
            <h1 className="mb-5 text-5xl font-bold">Event Planner</h1>
            <p className="mb-5">
              Every event should be perfect
            </p>
            <Link to="/service">
            <button className="btn btn-primary">Book your event</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
