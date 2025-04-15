import ReactCounter from "./ReactCounter";

const Counter = () => {
  return (
    <div className="aali_tm_section" id="counter">
      <div className="aali_tm_counter">
        <div className="container">
          <div className="counter_list">
            <ul className="wow fadeIn" data-wow-duration="1s">
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        {/* <span
                          className="tm_counter"
                          data-from={0}
                          data-to={5}
                          data-speed={1200}
                        >
                          0
                        </span> */}
                        <ReactCounter end={2} />
                        <label className="small">+</label>
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        Years
                        <br />
                        Work Experience
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        <ReactCounter end={100} />
                        <label className="small">+</label>
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        Organizations Using
                        <br />
                        Products I've Built
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        <label className="big">$</label>
                        <ReactCounter end={100} />
                        <label className="big">M</label>
                        <label className="small">+</label>
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        Fund's
                        <br />
                        CRM Solution Created
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <span className="border moving_effect" data-direction="x" /> */}
      </div>
    </div>
  );
};

export default Counter;
