import "./LandingPage.css";

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
                <div className="mr-8">
                  <a className="text-aqua">2.</a> About
                </div>
                <div className="mr-8">
                  <a className="text-aqua">3.</a> Projects
                </div>
                <div className="mr-8">
                  <a className="text-aqua">4.</a> Contact
                </div>
                <div className="border border-aqua text-aqua rounded-md px-3 py-2">
                  Resume
                </div>
              </div>
            </div>
            <div className="main-content pb-12">
              <div className="main-content-child flex items-center justify-between">
                <div className="ml-40 main-content-grandchild font-sans text-gray">
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
                    I'm comfortable working full stack but my strength lies in
                    front-end (JavaScript) where I have commercial experience in
                    Angular and React.
                  </div>
                </div>
                <div className="socials">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-div flex items-center justify-center">
        <div className="about-main flex">
          <div className="border border-red-500 w-2/3 py-3 px-4">
            <div className="about-title flex items-center">
              <div className="text-gray2 font-sans text-2xl">
                <a className="text-aqua font-mono">01.</a>
                <a className="font-bold"> About Me</a>
              </div>
              <div className="line"></div>
            </div>
          </div>
          <div className="text-aqua">photo</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
