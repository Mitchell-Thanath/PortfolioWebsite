import { useEffect } from "react";
import { edu, exp } from "../svgImage";
import { jarallaxContent } from "../utilits";

const Resume = () => {
  useEffect(() => {
    jarallaxContent();
  }, []);
  return (
    <div className="aali_tm_section" id="resume">
      <div className="aali_tm_resume">
        <div className="content">
          <div className="container">
            <div className="resume_in">
              <div
                className="aali_tm_main_title"
                data-text-align="left"
                data-color="dark"
              >
                <span></span>
                <h3>My Resume</h3>
                {/* <p>
                  I enjoy every step of the design process, from discussion and
                  collaboration to concept and execution
                </p> */}
              </div>
              <div className="content_inner">
                <ul>
                  <li className="wow fadeInLeft" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Education</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>University of Florida</h3>
                              <span>BS in Computer Science Engineering</span>
                            </div>
                            <div className="right">
                              <span>2020 - 2023</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Minor in Mathematics
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Massachusetts Institute of Technology</h3>
                              <span>Data Science Professional Certification</span>
                            </div>
                            <div className="right">
                              <span>2024</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              <span style={{ textDecoration: 'underline' }}>Courses</span>: Foundations for Data Science, Data Analysis & Visualization, Machine Learning, Practical Data Science, Deep Learning, Recommendation Systems
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="wow fadeInRight" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Experience</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Software Engineer 2</h3>
                              <span>Abacus Global Management</span>
                            </div>
                            <div className="right">
                              <span>Sep 2023 - Present</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              • Full-stack engineer across frontend, backend, databases and cloud infrastructure.
                            </p>
                            <p>
                              • Took internal tools from early prototypes to production applications used across the company.
                            </p>
                            <p>
                              • Built data pipelines and machine learning models that run in production.
                            </p>
                            <p>
                              • Built and maintain the frontend of a customer-facing SaaS product.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Simulation Developer</h3>
                              <span>CAE USA</span>
                            </div>
                            <div className="right">
                              <span>2022 - 2023</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Developed and maintained simulation software for training systems
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
