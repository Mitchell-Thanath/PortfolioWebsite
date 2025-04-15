import { download, exp } from "../svgImage";

const About = () => {
  return (
    <div className="aali_tm_section" id="about">
      <div className="aali_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              {/* <img src="img/thumbs/45-49.jpg" alt="aali image" /> */}
              <div className="main" data-img-url="img/about/1.jpg" />
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
                <span
                  className="in moving_effect"
                  data-direction="x"
                  data-reverse="yes"
                />
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">About Me</span>
              <h3>
                {`I'm`} <span>Mitchell</span>
              </h3>
              {/* <h3>
                Web <span>Designer</span>
              </h3> */}
              {/* <span className="subtitle">Based in London,UK</span> */}
            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <p>
              I'm a Full-Stack Developer with a strong passion for continuous 
              learning and building impactful applications. 
              With over 2 years of work experience, I’ve developed everything
              from responsive frontends, to robust backend
              systems that serve real user needs.
              I thrive on challenging projects that require creative problem-solving
              and push me to expand my technical capabilities.
              </p>
              <p>
              I am also deeply interested in the evolving capabilities of AI and 
              eager to apply my growing expertise to create innovative solutions 
              and drive real-world impact. As the field rapidly advances, I am 
              committed to staying at the forefront by learning and experimenting 
              with emerging technologies to push boundaries and explore new possibilities.
              </p>
            </div>
            <div
              className="aali_tm_button wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <a href="#portfolio">
                <span>View Portfolio {exp}</span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <div className="main" data-img-url="img/about/2.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
