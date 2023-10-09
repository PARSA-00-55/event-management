import OurTeam from "../../component/OurTeam";

const Aboutus = () => {
  return (
    <div>
      {/* ================= hero ==================== */}
      <div
        className="hero h-[300px] mt-10 rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url(https://i.ibb.co/Gv2dJn0/about-us.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About us</h1>
            {/* <p className="mb-5">
            Event Tech is your expert partner for corporate event management, crafting exceptional experiences that reflect your brand's identity and leave a lasting impact on your audience. With creativity, precision, and a commitment to excellence, we turn your event vision into reality.
            </p> */}
          </div>
        </div>
      </div>
      {/* ================= about us ==================== */}

      <div>
        <p className="mt-14 container px-16">
          Welcome to Event Tech, your premier partner in the world of
          corporate event management. With a passion for crafting unforgettable
          experiences and a commitment to excellence, we are dedicated to making
          your corporate events shine. At Event Tech, we understand that
          every event is unique, and that's why we approach each project with
          creativity, precision, and a keen eye for detail. Our team of seasoned
          professionals boasts a wealth of experience in curating and executing
          a wide range of corporate events, from conferences and seminars to
          product launches and team-building retreats. What sets us apart is our
          unwavering commitment to delivering exceptional results. We work
          closely with our clients to understand their vision, goals, and
          objectives, ensuring that every event we plan is not just a success
          but a true reflection of your brand's identity. From concept to
          execution, our dedicated team handles every aspect, allowing you to
          focus on what you do best – running your business. With a track record
          of exceeding client expectations and a portfolio of successful events
          under our belt, Event Tech has earned a reputation for excellence
          in the corporate event management industry. We pride ourselves on our
          ability to turn your ideas into reality and transform your events into
          memorable experiences that leave a lasting impression on your
          attendees. Whether you're planning a small executive meeting or a
          large-scale corporate gala, Event Tech is your trusted partner in
          creating seamless, impactful, and unforgettable corporate events. We
          look forward to collaborating with you and bringing your vision to
          life. Your success is our success, and we're here to ensure every
          event is a resounding triumph. Contact us today to discuss your
          upcoming corporate event needs, and let us make your event a
          resounding success that will be remembered long after the lights go
          down. Welcome to a world of limitless possibilities in corporate event
          management with Event Tech.
        </p>
      </div>
      {/* -------------- our team -------------- */}
      <OurTeam />
    </div>
  );
};

export default Aboutus;
