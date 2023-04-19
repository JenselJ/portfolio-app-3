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
                  <a className="text-aqua">01.</a> Home
                </div>
                {/* <div className="mr-8">
                  <a className="text-aqua">2.</a> About
                </div> */}
                <div className="mr-8">
                  <a className="text-aqua">02.</a> Projects
                </div>
                <div className="mr-8">
                  <a className="text-aqua">03.</a> Contact
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
                  {/* <div className="text-gray4 text-center mt-3">
                    No login is needed for this app. Good luck defeating Samus!{" "}
                  </div> */}
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

      <div className="flex mt-32 items-center justify-center pb-5">
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
      <div className="contact-page flex items-center justify-between">
        <div className="foot">Built by Sunny Samanta</div>
        <div className="email-wrapper items-end justify-end ml-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="git mb-8"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="link mb-8"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
          <div className="line vertical"></div>
        </div>{" "}
        <div className="contact-main text-center">
          <div className="text-aqua font-mono mb-4">03. What's Next?</div>
          <div className="text-gray3 font-sans font-bold text-5xl mb-5">
            Get In Touch
          </div>
          <div className="text-gray font-sans">
            I'm always open to new opportunities, or even just a friendly
            conversation. If you'd like to contact me, please click below and
            I'll do my best to get back to you!
          </div>
          <div className="w-full flex justify-center mt-10">
            <div className="border border-aqua text-aqua font-mono text-sm rounded-md px-6 py-4">
              Say Hello
            </div>{" "}
          </div>
        </div>
        <div className="email-wrapper items-end justify-end mr-10">
          <div className="email-div text-gray4 font-mono text-xs mb-8">
            saneer.work@gmail.com
          </div>
          <div className="line vertical"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
