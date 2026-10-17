import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import {
  fb,
  insta,
  maximize,
  soundcloud,
  text,
  twitter,
  vimeo,
  youtube,
} from "../svgImage";
import { aTagClick, dataImage } from "../utilits";
import ModalBox from "./ModalBox";
import Popup from "./Popup";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    dataImage();
    aTagClick();
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  // popup
  const [video, setVideo] = useState(false);
  const [videoContent, setVideoContent] = useState({ name: "", src: "" });
  const showPopup = (name, src) => {
    setVideo(true);
    setVideoContent({ name, src });
  };
  // Model Box
  const [modal, setModal] = useState(null);
  return (
    <div className="aali_tm_section help" id="portfolio">
      {video && <Popup close={setVideo} content={videoContent} />}
      <div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="light"
          >
            <span></span>
            <h3>Check My Portfolio!</h3>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a 
                  onClick={handleFilterKeyChange("*")} 
                  className={filterKey === "*" ? "current" : ""}
                >
                  All
                </a>
              </li>
              <li>
                <a 
                  onClick={handleFilterKeyChange("ai")} 
                  className={filterKey === "ai" ? "current" : ""}
                >
                  Artificial Intelligence
                </a>
              </li>
              <li>
                <a 
                  onClick={handleFilterKeyChange("fullstack")} 
                  className={filterKey === "fullstack" ? "current" : ""}
                >
                  Full Stack Development
                </a>
              </li>
              <li>
                <a 
                  onClick={handleFilterKeyChange("oop")} 
                  className={filterKey === "oop" ? "current" : ""}
                >
                  Object Oriented Programming
                </a>
              </li>
              <li>
                <a 
                  onClick={handleFilterKeyChange("cloud")} 
                  className={filterKey === "cloud" ? "current" : ""}
                >
                  Cloud
                </a>
              </li>
              <li>
                <a 
                  onClick={handleFilterKeyChange("freelance")} 
                  className={filterKey === "freelance" ? "current" : ""}
                >
                  Freelance
                </a>
              </li>
            </ul>
          </div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              <li className="filter-item detail ai fullstack cloud">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="SmartBytes AI POS System" />
                    <div className="main" data-img-url="img/portfolio/SmartBytes1.jpg" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>SmartBytes AI</span>
                    <h3>Full-Stack AI POS System</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal("project3")}
                  />
                  <div className={modal === "project3" ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/SmartBytes1.jpg"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>SmartBytes AI</span>
                          <h3>Full-Stack AI POS System</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              SmartBytes AI is a point-of-sale kiosk for restaurants that recommends menu items to customers. I built the full-stack web app: a React frontend, a Node.js backend and database, and a recommendation engine using the ChatGPT API and LangChain. The backend runs in Docker on AWS EC2, with S3 for storage and a load balancer (ELB) spreading traffic across instances. Each restaurant gets its own subdomain frontend, deployed on Vercel, and Stripe handles payments and feeds transaction data into the analytics.
                            </p>
                            <p>
                              Here are some of my key takeaways:
                            </p>
                            <div className="takeaways">
                              <ul>
                                <li>Led full-stack development using React and Express.js</li>
                                <li>Integrated OpenAI's API for AI-driven recommendations</li>
                                <li>Deployed the frontend with Vercel and backend services using AWS EC2 and S3</li>
                                <li>Containerized backend services using Docker for consistency and scalability</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="AI Recommendation System"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/Stealth2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="AI Recommendation System"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/Stealth3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item detail fullstack cloud">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="MatchUp Sports Prediction App" />
                    <div className="main" data-img-url="img/portfolio/MatchUp1.jpg" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>MatchUp</span>
                    <h3>Head-to-Head Sports Prediction App</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal("project10")}
                  />
                  <div className={modal === "project10" ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/MatchUp1.jpg"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>MatchUp</span>
                          <h3>Head-to-Head Sports Prediction App</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              MatchUp is an iPhone app where two sports fans go head-to-head on the same real game. Each player answers a short card of questions, like who wins and whether a player goes over or under a stat line, and whoever gets more right wins the match. I built it with two friends: a React Native app in Expo, a Supabase database, a real-time match server built on Colyseus and Node.js running on AWS EC2, and Stripe for payments. About 40 people tested it through TestFlight.
                            </p>
                            <p>
                              Here are some of my key takeaways:
                            </p>
                            <div className="takeaways">
                              <ul>
                                <li>Built a cross-platform mobile app with React Native and Expo</li>
                                <li>Built real-time matchmaking with a Colyseus game server on AWS EC2</li>
                                <li>Used Supabase for the database, user accounts and edge functions</li>
                                <li>Integrated Stripe payments and shipped test builds through TestFlight</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="MatchUp matchmaking, picks and victory screens"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/MatchUp2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="MatchUp welcome, matches and tiebreaker screens"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/MatchUp3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item detail fullstack cloud freelance">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="Batter Up Field Sales App" />
                    <div className="main" data-img-url="img/portfolio/BatterUp1.jpg" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Batter Up · Freelance Project</span>
                    <h3>Field Sales Tracking App</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal("project11")}
                  />
                  <div className={modal === "project11" ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/BatterUp1.jpg"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Batter Up · Freelance Project</span>
                          <h3>Field Sales Tracking App</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              Batter Up is a freelance project: a mobile app for a food distributor's field sales team that turns prospecting into a baseball game. Every prospect moves around the bases, from the first visit to the first order, and each rep gets a quarterly batting average that their manager and VP can see live. I built the whole thing: a React Native app in Expo with TypeScript, a Supabase backend with Postgres, user accounts, edge functions and nightly scoring jobs, maps with Google Places for nearby leads, push notifications, and a Next.js admin console. It's live on the App Store and in use by the sales team.
                            </p>
                            <p>
                              Here are some of my key takeaways:
                            </p>
                            <div className="takeaways">
                              <ul>
                                <li>Built a cross-platform React Native app and shipped it to the App Store</li>
                                <li>Designed a multi-company Postgres schema with row-level security on every table</li>
                                <li>Moved scoring into the database so reps can't fake their numbers from the phone</li>
                                <li>Built maps, nearby-lead search and push notifications with Supabase edge functions</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="Batter Up rep dashboard, lineup and prospect screens"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/BatterUp2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="Batter Up manager dashboard, team map and executive overview"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/BatterUp3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item detail ai fullstack cloud">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="Tech News Scraper" />
                    <div className="main" data-img-url="img/portfolio/TechNews1.png" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Project</span>
                    <h3>Full-Stack LLM News Summarizer</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal("project1")}
                  />
                  <div className={modal === "project1" ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/1-1.jpg" alt="Tech News Scraper" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/TechNews1.png"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Personal Project</span>
                          <h3>Full-Stack LLM News Summarizer</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                            To stay up to date with relevant tech news, I developed a fully automated Tech News Summarizer website 
                            that handles daily headline scraping and article summarization. Using Python, I built a web scraper to
                             extract news headlines, and the scraped data was stored in a PostgreSQL database hosted on Azure. The back-end was
                              developed using Node.js and Express.js, and deployed on Azure App Service to efficiently manage and serve the article data. On the 
                              front-end, I implemented a React-based interface, which displays the archive of articles along with
                               view count analytics. I also integrated open-source models, including the BART LLM for article 
                               summarization and FinBERT LLM for sentiment analysis, providing users with concise summaries and 
                               sentiment scores for each article. The project allowed me to work with full-stack technologies, 
                               focus on data automation, and enhance user experience with AI-powered insights. 
                            </p>
                            <p>
                              Here are some of my main takeaways from the project:
                            </p>
                            <div className="takeaways">
                              <ul>
                                <li>Python, Node.js, PostgreSQL, React experience</li>
                                <li>Web scraping, data storage, and API development</li>
                                <li>Implementing machine learning models (BART, FinBERT) for summarization and sentiment analysis</li>
                                <li>Full-stack development: front-end, back-end, and database integration</li>
                                <li>Azure cloud platform experience: deploying backend services and managing PostgreSQL databases</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/1-1.jpg"
                                    alt="Tech News Scraper"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/TechNews2.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/1-1.jpg"
                                    alt="Tech News Scraper"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/TechNews3.png"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item detail fullstack">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="Job Board Web App" />
                    <div className="main" data-img-url="img/portfolio/JobBoard1.png" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Project</span>
                    <h3>Job Board Web App</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal("project8")}
                  />
                  <div className={modal === "project8" ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/JobBoard1.png"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Personal Project</span>
                          <h3>Job Board Web App</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              Developed a full-stack web app where employers can post job 
                              openings and students can share that they're looking for 
                              positions. Built the frontend with React and Bootstrap for 
                              a clean, responsive UI, and used Express.js and MongoDB to 
                              handle data storage and API routes. Key features include user 
                              authentication, a searchable feed, comment sections, upvote/downvote functionality, 
                              and the ability to sort posts by popularity or recency.
                            </p>
                            <p>
                              Here are some of my key takeaways:
                            </p>
                            <div className="takeaways">
                              <ul>
                                <li>Experience building and connecting a React frontend to Express/MongoDB backend</li>
                                <li>Built RESTful APIs, managed application state, and handled user interactions</li>
                                <li>Focused on clean, user-friendly design using Figma and responsive layout techniques</li>
                                <li>Implemented features like login, search, comments, upvotes/downvotes, and sorting</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="Job Board Web App"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/JobBoard2.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="Job Board Web App"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/JobBoard3.png"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item detail ai">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="Facial Emotion Detection" />
                    <div className="main" data-img-url="img/portfolio/CNN1.png" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Project</span>
                    <h3>Neural Network Emotion Detector</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal("project2")}
                  />
                  <div className={modal === "project2" ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/CNN1.png"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Personal Project</span>
                          <h3>Neural Network Emotion Detector</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              As part of my Applied Data Science course, I had the task of developing several deep learning models to perform Facial Emotion Detection. I created models using Neural Networks, Transfer Learning Architectures (ResNet, EfficientNet, VGG-16), and Convolutional Neural Networks. I performed created the models with the intent to maximize accuracy in classifying facial emotions. I also performed several techniques to reduce overfitting such as dropout, max pooling, and cross-validation. I tested the performance of all these models and concluded that the Convolutional Neural Network model produced the highest accuracy against the test set for our intended purpose of Facial Emotion Recognition.
                            </p>
                            <p>
                              Here are some of my main takeaways from the project:
                            </p>
                            <div className="takeaways">
                              <ul>
                                <li>Python, TensorFlow, NumPy, Pandas experience</li>
                                <li>Neural Networks, Transfer Learning Architectures, Convolutional Neural Networks</li>
                                <li>Data Preprocessing, Statistical Analysis & Data Visualization</li>
                                <li>Cross-validation techniques to improve model performance evaluation</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img src="img/thumbs/4-2.jpg" alt="Facial Emotion Detection" />
                                  <div className="main" data-img-url="img/portfolio/CNN2.png" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img src="img/thumbs/4-2.jpg" alt="Facial Emotion Detection" />
                                  <div className="main" data-img-url="img/portfolio/CNN3.png" />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item detail fullstack freelance">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="Static Restaurant Website" />
                    <div className="main" data-img-url="img/portfolio/Soupa1.png" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Freelance Project</span>
                    <h3>Restaurant Ecommerce Website</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal("project6")}
                  />
                  <div className={modal === "project6" ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/Soupa1.png"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Freelance Project</span>
                          <h3>Restaurant Ecommerce Website</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              As a freelance project, I built an e-commerce website for a local restaurant to help them establish an online presence and sell branded merchandise. I designed a clean, user-friendly interface and configured key website settings, including setting up their domain and hosting the site through Bluehost. I also integrated and customized an e-commerce section to manage products and online orders. Throughout the project, I worked closely with a non-technical business owner to understand their needs and deliver a solution tailored to their goals.
                            </p>
                            <p>
                              Here are some of my key takeaways:
                            </p>
                            <div className="takeaways">
                              <ul>
                                <li>Configured hosting and domain management using Bluehost</li>
                                <li>Designed and launched a functional, user-friendly website</li>
                                <li>Set up and customized an e-commerce storefront for merchandise sales</li>
                                <li>Collaborated effectively with a non-technical client to translate business needs into technical solutions</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img src="img/thumbs/4-2.jpg" alt="Restaurant Ecommerce Website" />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/Soupa2.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img src="img/thumbs/4-2.jpg" alt="Restaurant Ecommerce Website" />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/Soupa3.png"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item detail oop">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="Custom Programming Language" />
                    <div className="main" data-img-url="img/portfolio/langTest1.png" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Project</span>
                    <h3>Custom Programming Language</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal("project7")}
                  />
                  <div className={modal === "project7" ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div className="main" data-img-url="img/portfolio/langTest1.png" />
                        </div>
                        <div className="portfolio_main_title">
                          <span>Personal Project</span>
                          <h3>Custom Programming Language</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              As part of my Programming Language Concepts course, I had the task of developing a programming language from scratch in Java. I followed a set of predefined grammar rules and created the various cruical components of a programming language. To begin with, I constructed a Lexer, responsible for converting source code into a sequence of tokens. Next, I created a Parser, which parsed the token stream and transformed it into an abstract syntax tree (AST). I then made an Interpreter to execute the program by traversing the AST, evaluating statements, and producing results in accordance with the language's semantics. I then constructed an Analyzer which ensured type safety, detected potential errors, and validated the correctness of the program. Finally, I created the Generator which generated the final code by mapping it to Java. From the completion of this project and implementing the Lexer, Parser, Interpreter, Analyzer, and Generator, I gained a comprehensive understanding of the inner workings of programming languages and their various components. I also gained valuble experience using some of Java's newer features and using JUnit5 to conduct testing.
                            </p>
                            <p>
                              Here are some of my main takeaways from the project:
                            </p>
                            <div className="takeaways">
                              <ul>
                                <li>Java experience</li>
                                <li>Use of JUnit5 for testing</li>
                                <li>Creating an Abstract Syntax Tree</li>
                                <li>Valuable debugging experience</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img src="img/thumbs/4-2.jpg" alt="Custom Programming Language" />
                                  <div className="main" data-img-url="img/portfolio/langTest2.png" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img src="img/thumbs/4-2.jpg" alt="Custom Programming Language" />
                                  <div className="main" data-img-url="img/portfolio/langTest3.png" />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item detail oop">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="GatorRides" />
                    <div className="main" data-img-url="img/portfolio/GatorRides1.png" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Project</span>
                    <h3>GatorRides</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal("project4")}
                  />
                  <div className={modal === "project4" ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div className="main" data-img-url="img/portfolio/GatorRides1.png" />
                        </div>
                        <div className="portfolio_main_title">
                          <span>Personal Project</span>
                          <h3>GatorRides</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              The Gator Rides is a project in C++ designed to assist users in finding
                               available shared cars within a specified radius of their chosen location.
                                This program utilizes a dataset consisting of over 100,000 tuples,
                                 containing information about shared cars in Tel Aviv, such as location,
                                  model, color, and more. To efficiently store and access the dataset, 
                                  I implemented a map data structure. The project incorporates the 
                                  Simple and Fast Multimedia Library (SFML), for easy user interaction
                                   with the shared car map. The project works by having the user 
                                   click on a location on the map as their intended position. Then, 
                                   the project uses a function that takes the user-selected location 
                                   coordinates as input parameters and returns the closest 'x' number 
                                   of cars based on distance calculation. In order to enhance the
                                    project's performance, I optimized the algorithm and reduced 
                                    its time complexity. As a result, the program's execution time
                                     was significantly improved with the runtime decreasing from
                                    approximately 4 minutes to around 30 seconds.
                            </p>
                            <p>
                              Here are my biggest takeaways from this project:
                            </p>
                            <div className="takeaways">
                              <ul>
                                <li>C++ development experience</li>
                                <li>Designing efficient data structures</li>
                                <li>Working with large datasets</li>
                                <li>Algorithm optimization for time complexity</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img src="img/thumbs/4-2.jpg" alt="GatorRides" />
                                  <div className="main" data-img-url="img/portfolio/GatorRides2.png" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img src="img/thumbs/4-2.jpg" alt="GatorRides" />
                                  <div className="main" data-img-url="img/portfolio/GatorRides3.png" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img src="img/thumbs/4-2.jpg" alt="GatorRides" />
                                  <div className="main" data-img-url="img/portfolio/GatorRides4.png" />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item detail oop">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="Minesweeper" />
                    <div className="main" data-img-url="img/portfolio/Minesweeper1.png" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Project</span>
                    <h3>Minesweeper</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal("project5")}
                  />
                  <div className={modal === "project5" ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div className="main" data-img-url="img/portfolio/Minesweeper1.png" />
                        </div>
                        <div className="portfolio_main_title">
                          <span>Personal Project</span>
                          <h3>Minesweeper</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              I developed a Minesweeper game in Java, implementing object-oriented programming principles to create a modular and maintainable codebase. The game features a graphical user interface built with Java Swing, allowing players to interact with the game board through mouse clicks. I implemented core game mechanics such as mine placement, cell revealing, and win/loss conditions, while ensuring proper encapsulation and separation of concerns.
                            </p>
                            <p>
                              Here are some of my key takeaways:
                            </p>
                            <div className="takeaways">
                              <ul>
                                <li>Applied object-oriented programming principles in Java</li>
                                <li>Developed a graphical user interface using Java Swing</li>
                                <li>Implemented game logic and user interaction handling</li>
                                <li>Created modular and maintainable code structure</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img src="img/thumbs/4-2.jpg" alt="Minesweeper" />
                                  <div className="main" data-img-url="img/portfolio/Minesweeper2.png" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img src="img/thumbs/4-2.jpg" alt="Minesweeper" />
                                  <div className="main" data-img-url="img/portfolio/Minesweeper3.png" />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item detail fullstack">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="Mitchell image" />
                    <div className="main" data-img-url="img/portfolio/Portfolio1.png" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Project</span>
                    <h3>Portfolio Website</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal("project9")}
                  />
                  <div className={modal === "project9" ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/Portfolio1.png"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Personal Project</span>
                          <h3>Portfolio Website</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              As a personal project, I developed a portfolio website using React.js and Next.js 
                              to showcase my software projects, technical skills, and experiences. The site 
                              features a clean, responsive design with smooth navigation and interactive elements, 
                              built with modern web technologies. Each project is presented with a short 
                              description and key technologies used, with a modal system for detailed project
                              information. I also included sections for my resume, contact information, and 
                              an about me page to give visitors a full picture of my background. The site is 
                              hosted using GitHub Pages and is using a custom domain name.
                            </p>
                            <p>
                              Here are some of my key takeaways:
                            </p>
                            <div className="takeaways">
                              <ul>
                                <li>Frontend development with React.js and Next.js</li>
                                <li>Styled components using CSS</li>
                                <li>Implemented interactive modals and animations for enhanced user experience</li>
                                <li>Deployed website using GitHub Pages</li>
                                <li>Set up and configured a custom domain</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
