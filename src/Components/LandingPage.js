import "./LandingPage.css";
import sunny from "../assets/sunny.JPG";
import game from "../assets/game.png";

const LandingPage = () => {
  return (
    <div className="app-div">
      <div className="base-div p-4">
        <div className="triangle-parent">
          <div className="triangle-top-left"></div>
          <div className="triangle-bottom-right"></div>
        </div>
        <div className="main-div p-12">
          <div className="main-div-child">
            <div className="nav-div h-12 flex justify-between px-4 items-center font-mono">
              <div className="text-gray">Logo</div>
              <div className="text-gray3 flex items-center">
                <div className="mr-8">
                  <a className="text-aqua">1.</a> Home
                </div>
                {/* <div className="mr-8">
                  <a className="text-aqua">2.</a> About
                </div> */}
                <div className="mr-8">
                  <a className="text-aqua">2.</a> Projects
                </div>
                <div className="mr-8">
                  <a className="text-aqua">3.</a> Contact
                </div>
                <div className="border border-aqua text-aqua rounded-md px-3 py-2">
                  Resume
                </div>
              </div>
            </div>
            <div className="main-content pb-12">
              <div className="main-content-child flex items-center justify-between">
                <div className="ml-32 main-content-grandchild font-sans text-gray mb-20">
                  <div className="welcome text-gray2 font-semibold">
                    Welcome.
                  </div>
                  <div className="text-4xl text-gray font-semibold">
                    I'm Sunny and I build things for the web.
                  </div>
                  <div className="mt-8 text-lg">
                    I'm a junior web developer working part-time at{" "}
                    <a className="text-aqua">SurryHQ.</a> My goal right now is
                    to transition into a full-time role where I can grow my
                    skillset and break deeper into the industry.
                  </div>
                  <div className="mt-4 text-lg">
                    I'm comfortable working full-stack but my strength lies in
                    front-end (JavaScript) where I have commercial experience in
                    Angular and React.
                  </div>
                </div>
                <div className="photo flex items-center mr-8">
                  <div className="sunny mt-20">
                    <div className="sunny-wrapper rounded-lg px-1 py-1"></div>
                    <img className="rounded-lg sunny-img" src={sunny}></img>
                    <div className="sunny-outline rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects flex items-center justify-center">
        <div className="project-div">
          <div className="project-content flex">
            {/* <div className="project-libraries border border-red-500">code</div> */}
            <div className="project-photos flex items-center">
              <div className="game-wrapper rounded-xl"></div>
              <img src={game} className="game-photo rounded-xl" />
            </div>
            <div className="project-text p-2">
              <div className="text-gray3 font-sans font-semibold text-2xl w-full text-center">
                Megaman VS Samus
              </div>
              <div className="text-gray4 text-center mt-3">
                Megaman vs Samus is a simple turn-based combat game that I had a
                lot of fun making. Users play as Megaman an choose between three
                ability options to take down the AI opponent Samus. In this app
                I used React hooks to compute the AI opponent choices, create
                the batle sequence and configure narrator announcements.
              </div>
              <div>code</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-div flex items-center justify-center">
        <div className="about-main flex">
          <div className="border border-red-500 w-2/3 py-3 px-4">
            <div className="about-title flex items-center">
              <div className="text-gray2 font-sans text-2xl">
                <a className="text-aqua font-mono">01.</a>
                <a className="font-bold"> About Me</a>
              </div>
              <div></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="text-aqua">photo</div>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
