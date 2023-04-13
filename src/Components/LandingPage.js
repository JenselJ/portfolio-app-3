import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="base-div p-4">
      <div className="triangle-parent">
        <div className="triangle-top-left"></div>
        <div className="triangle-bottom-right"></div>
      </div>
      <div className="main-div p-12">
        <div className="main-div-child">
          <div className="nav-div h-12 flex justify-between px-4 items-center font-mono">
            <div className="text-gray">Logo</div>
            <div className="text-gray flex items-center">
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
          <div className="main-content border border-red-50 pb-12">
            <div className="main-content-child border border-red-500">
              <div className="main-content-grandchild border border-red-500">
                Welcome
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
