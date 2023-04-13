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
          <div className="nav-div h-16 border border-red-500 flex justify-between px-4 pt-3">
            <div className="text-aqua">Sunny</div>
            <div className="text-gray flex">
              <div className="mr-8">
                <a className="text-aqua">1.</a> Home
              </div>
              <div className="mr-8">2. About</div>
              <div className="mr-8">3. Projects</div>
              <div>4. Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
