import { useEffect, useState } from "react";
import {
  camera,
  cameraDark,
  msg,
  pen,
  penDark,
  user,
  userDark,
  web,
  webDark,
} from "../svgImage";
import ModalBox from "./ModalBox";

const Service = ({ dark }) => {
  const [modal, setModal] = useState(0);
  const hidden = (value) => (value === modal ? "" : "service_hidden_details");
  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);
  return (
    <div className="aali_tm_section" id="service">
      <div className="aali_tm_service">
        <div className="container">
          <div className="service_list">
            <div className="aali_tm_main_title" data-text-align="left" data-color="dark">
              <h3>My Skills</h3>
            </div>
            <ul>
              <li
                className="wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="Service"
                    />
                  </span>
                  {/* https://devicon.dev/ */}
                  <div className="title">
                    <h3>Languages</h3>
                  </div>
                  <div className="text">
                    <div className="language-grid">
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                        <span>Python</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                        <span>JavaScript</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                        <span>Java</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                        <span>C++</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" />
                        <span>C#</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />
                        <span>CSS</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL" />
                        <span>SQL</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" alt="Matlab" />
                        <span>MATLAB</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="Service"
                    />
                  </span>
                  <div className="title">
                    <h3>Frameworks</h3>
                  </div>
                  <div className="text">
                    <div className="language-grid">
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                        <span>React</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                        <span>Node.js</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" />
                        <span>Express.js</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask" />
                        <span>Flask</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" />
                        <span>FastAPI</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                        <span>Next.js</span>
                      </div>
                      <div className="language-item">
                        <img src="img/service/FlutterFlow.png" alt="FlutterFlow" />
                        <span>FlutterFlow</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="Service"
                    />
                  </span>
                  <div className="title">
                    <h3>Tools</h3>
                  </div>
                  <div className="text">
                    <div className="language-grid">
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Git" />
                        <span>Git</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                        <span>PostgreSQL</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" />
                        <span>Postman</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" />
                        <span>Figma</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                        <span>MongoDB</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VSCode" />
                        <span>VSCode</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="Service"
                    />
                  </span>
                  <div className="title">
                    <h3>Cloud & DevOps</h3>
                  </div>
                  <div className="text">
                    <div className="language-grid">
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                        <span>AWS</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" />
                        <span>Azure</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" />
                        <span>Docker</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" alt="Github Actions" />
                        <span>Github Actions</span>
                      </div>
                      <div className="language-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" alt="Vercel" />
                        <span>Vercel</span>
                      </div>

                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span
          className="square_left moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span
          className="square_right moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Service;
