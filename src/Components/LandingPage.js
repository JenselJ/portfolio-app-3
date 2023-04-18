import "./LandingPage.css";
import sunny from "../assets/sunny.JPG";
import game from "../assets/game.png";
import quiz from "../assets/quiz.png";
import job from "../assets/job.png";
import css from "../assets/css.png";

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
      <div className="about-title flex items-center">
        <div className="text-gray2 font-sans text-2xl">
          <a className="text-aqua font-mono">02.</a>
          <a className="font-bold"> Some things I've built</a>
        </div>
        <div></div>
        <div className="line"></div>
      </div>
      <div className="projects flex items-center justify-center">
        <div className="project-div flex py-10 justify-center">
          <div className="pb-0 mb-0">
            <div className="w-full flex justify-center items-center mb-10">
              <div className="text-aqua font-mono text-2xl">
                Featured Project -{" "}
                <a className="text-gray3 font-sans font-semibold text-2xl">
                  Megaman VS Samus
                </a>
              </div>
              {/* <div className="text-gray3 font-sans font-semibold text-2xl">
                Megaman VS Samus
              </div> */}
            </div>

            <div className="project-content flex mb-10 items-center">
              {/* <div className="project-libraries border border-red-500">code</div> */}
              <div className="project-photos flex items-center px-10">
                <div className="game-wrapper rounded-xl"></div>
                <img src={game} className="game-photo rounded-xl" />
              </div>
              <div className="project-text pr-10 flex items-center font-sans">
                <div>
                  <div className="text-gray4 text-center">
                    <a className="text-aqua">Megaman vs Samus</a> is a simple
                    turn-based combat game that I had a lot of fun making. Users
                    play as Megaman an choose between three ability options to
                    take down the AI opponent Samus. In this app I used React
                    hooks to compute the AI opponent choices, create the batle
                    sequence and configure narrator announcements.
                  </div>
                  <div className="text-gray4 text-center mt-3">
                    The styling is done with pure CSS and some basic CSS
                    animation are used too. I also used some more complex
                    Javascript syntax to build the battle sequence, such as an
                    IIFE (immediately invoked function expression).
                  </div>
                  <div className="text-gray4 text-center mt-3">
                    No login is needed for this app. Good luck defeating Samus!{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="project-code flex justify-center">
              <div className="w-1/3 flex justify-between text-aqua font-mono">
                <div>React</div>
                <div>CSS</div>
                <div>JavaScript</div>
              </div>
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
      <div className="flex mt-32 items-center justify-center">
        <div className="project-div flex py-10 justify-center">
          <div className="">
            <div className="w-full flex justify-center items-center mb-10">
              <div className="text-aqua font-mono text-2xl">
                Featured Project -{" "}
                <a className="text-gray3 font-sans font-semibold text-2xl">
                  JobWorm
                </a>
              </div>
              {/* <div className="text-gray3 font-sans font-semibold text-2xl">
                Megaman VS Samus
              </div> */}
            </div>

            <div className="project-content flex mb-10 items-center">
              {/* <div className="project-libraries border border-red-500">code</div> */}
              <div className="project-photos flex items-center px-10">
                <div className="job-wrapper rounded-xl"></div>
                <img src={job} className="job-photo rounded-xl" />
              </div>
              <div className="project-text pr-10 flex items-center font-sans">
                <div>
                  <div className="text-gray4 text-center">
                    <a className="text-aqua">JobWorm</a> is a simple job board
                    that allows users interact with each other by posting,
                    viewing and commenting on job offers. Upon signing in, users
                    are taken to a home page where they can view and comment of
                    job offers created by fellow users. They can also post and
                    delete their own job listing with a couple button clicks.
                  </div>
                  <div className="text-gray4 text-center mt-3">
                    For this app, I built the back-end myself by making a
                    RESTful API with Node.js and Express. This gave me a better
                    understanding of how the front-end and back-end interact
                    with one another. Like with my quiz app, Firebase was used
                    for user-authentication and tailwind was used for styling.
                  </div>
                  {/* <div className="text-gray4 text-center mt-3">
                    You can use the user details below to browse my app or feel
                    free to create your own account. User:
                    james.clarke@gmail.com Password: james123{" "}
                  </div> */}
                </div>
              </div>
            </div>
            <div className="project-code flex justify-center">
              <div className="w-1/2 flex justify-between text-aqua font-mono">
                <div>React</div>
                <div>REST API</div>
                <div>Firebase</div>
                <div>Tailwind</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-32 items-center justify-center">
        <div className="project-div flex py-10 justify-center">
          <div className="">
            <div className="w-full flex justify-center items-center mb-10">
              <div className="text-aqua font-mono text-2xl">
                Featured Project -{" "}
                <a className="text-gray3 font-sans font-semibold text-2xl">
                  The Quiz Club
                </a>
              </div>
              {/* <div className="text-gray3 font-sans font-semibold text-2xl">
                Megaman VS Samus
              </div> */}
            </div>

            <div className="project-content flex mb-10 items-center">
              {/* <div className="project-libraries border border-red-500">code</div> */}
              <div className="project-photos flex items-center px-10">
                <div className="quiz-wrapper rounded-xl"></div>
                <img src={quiz} className="quiz-photo rounded-xl" />
              </div>
              <div className="project-text pr-10 flex items-center font-sans">
                <div>
                  <div className="text-gray4 text-center">
                    <a className="text-aqua">The Quiz Club</a> is my attempt at
                    an elevated version of the classic Javascript quiz. When
                    users complete quizes, their results and data automatically
                    saved on the back-end. This data is then presently cleanly
                    on their Profile page so they can see their progress. React
                    was used for the front-end with Tailwind for a modern and
                    responsive website style. I used Firebase User
                    Authentication and Realtime Database to create a userbase
                    and store back-end data.
                  </div>
                  <div className="text-gray4 text-center mt-3">
                    In making this website I learnt how to manipulate data
                    arrays and objects with more advanced Javascript to present
                    data in a clear and useful way for users. I also learnt how
                    to use Firebase to create a secure back-end and how to
                    connect this to the front-end with HTTP Requests.
                  </div>
                  {/* <div className="text-gray4 text-center mt-3">
                    You can use the user details below to browse my app or feel
                    free to create your own account. User:
                    james.clarke@gmail.com Password: james123{" "}
                  </div> */}
                </div>
              </div>
            </div>
            <div className="project-code flex justify-center">
              <div className="w-1/3 flex justify-between text-aqua font-mono">
                <div>React</div>
                <div>Firebase</div>
                <div>Tailwind</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-32 items-center justify-center pb-20">
        <div className="project-div flex py-10 justify-center">
          <div className="">
            <div className="w-full flex justify-center items-center mb-10">
              <div className="text-aqua font-mono text-2xl">
                Featured Project -{" "}
                <a className="text-gray3 font-sans font-semibold text-2xl">
                  Todoist Clone
                </a>
              </div>
              {/* <div className="text-gray3 font-sans font-semibold text-2xl">
                Megaman VS Samus
              </div> */}
            </div>

            <div className="project-content flex mb-10 items-center">
              {/* <div className="project-libraries border border-red-500">code</div> */}
              <div className="project-photos flex items-center px-10">
                <div className="css-wrapper rounded-xl"></div>
                <img src={css} className="css-photo rounded-xl" />
              </div>
              <div className="project-text pr-10 flex items-center font-sans">
                <div>
                  <div className="text-gray4 text-center">
                    My <a className="text-aqua">Todoist Clone</a> is a copy of
                    the Todoist app made purely from HTML, CSS and Boostrap.
                    This project was aimed to challenge my understanding of raw
                    CSS and apply the Bootstrap grid structure.
                  </div>
                  <div className="text-gray4 text-center mt-3">
                    I had to pay careful attention to small details in order to
                    create this app and learnt how to use media queries for
                    responsiveness.
                  </div>
                  <div className="text-gray4 text-center mt-3">
                    No login is needed to browse this app. Enjoy!
                  </div>
                </div>
              </div>
            </div>
            <div className="project-code flex justify-center">
              <div className="w-1/3 flex justify-between text-aqua font-mono">
                <div>HTML</div>
                <div>CSS</div>
                <div>Bootstrap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
