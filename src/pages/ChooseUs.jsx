import "../App.css";
import MainCard from "../components/cards/MainCard";
import user from "../assets/user.svg";
import line from "../assets/line.svg";
import bg from "../assets/ab.svg"

const ChooseUs = () => {
    const bgstyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section id="services" className=" bg-primaryWhite" style={bgstyles}  >
      <div className="mx-auto max-w-screen-2xl">
        <div className="wrapper py-10 sm:py-24">
          <div className="mb-14">
            <h2 className="gradText text-[19px] text-center uppercase font-Inter font-bold mb-6">
              Why Choose Us?
            </h2>
            <div className="text-[44px] text-center capitalize font-Nunito font-normal">
              <strong>benefits</strong> of online tutoring
              <br /> services at{" "}
              <span className="relative">
                <strong>tutorlancer</strong>
                <div className="mt-3">
                  <img
                    src={line}
                    alt="line"
                    className="absolute left-10 top-10 mt-4"
                  />
                  <img
                    src={line}
                    alt="line"
                    className="absolute left-10 -bottom-3"
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="cards">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-4 px-6 lg:gap-6 gap-8">
              <MainCard
                icon={user}
                iconBgColor="bg-violet-dark"
                title="Online tutoring"
                description="all of our special education experts have a degree in special education"
              />
              <MainCard
                icon={user}
                iconBgColor="bg-green-lime"
                title="24/7 support"
                description="24/7 tutor availability assured at tutorlancer matched to your learning style!"
              />
              <MainCard
                icon={user}
                iconBgColor="bg-pink-hotPink"
                title="live sessions"
                description="our digital whiteboard equipped with audio-video-chat features."
              />
              <MainCard
                icon={user}
                iconBgColor="bg-orange-dark"
                title="lab work"
                description="choose an experienced tutor that fits your budget"
              />
              <MainCard
                icon={user}
                iconBgColor="bg-green-olive"
                title="project help"
                description="all of our special education experts have a degree in special education"
              />
              <MainCard
                icon={user}
                iconBgColor="bg-gray-dark"
                title="video calling support"
                description="24/7 tutor availability assured at tutorlancer matched to your learning style!"
              />
              <MainCard
                icon={user}
                iconBgColor="bg-[#14AAF5]"
                title="writing help"
                description="our digital whiteboard equipped with audio-video-chat features."
              />
              <MainCard
                icon={user}
                iconBgColor="bg-gray-slate"
                title="homework help"
                description="choose an experienced tutor that fits your budget"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
