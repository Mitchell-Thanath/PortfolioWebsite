import emailjs from "emailjs-com";
import { useState } from "react";
import { emailIcon, linkedin, msgSent } from "../svgImage";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError("Please fill in all required fields");
      clearError();
      setIsSubmitting(false);
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError("Please enter a valid email address");
      clearError();
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        mailData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setError(false);
        setMailData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
      clearError();
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 5000);
  };

  return (
    <div className="aali_tm_section" id="contact">
      <div className="aali_tm_contact">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <h3>Connect with Me with Confidence</h3>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {/* <div className="text">
                <p>
                  Please fill out the form on this section to contact with me.
                  Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through
                  Friday
                </p>
              </div> */}
              <ul>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>Email</span>
                    <h3>
                      <a className="line_anim" href="mailto:mitchellthanath@gmail.com">
                        mitchellthanath@gmail.com
                      </a>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    {linkedin}
                    <span>LinkedIn</span>
                    <h3>
                      <a className="line_anim" href="https://www.linkedin.com/in/mitchell-thanath" target="_blank" rel="noopener noreferrer">
                        www.linkedin.com/in/mitchell-thanath
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={onSubmit}
                >
                  <div
                    className={error === true ? "empty_notice" : error === false ? "returnmessage" : "hidden"}
                    style={{ display: error !== null ? "block" : "none" }}
                  >
                    <span>
                      {error === true 
                        ? "Please fill in all required fields" 
                        : error === false 
                          ? "Your message has been received. I'll get back to you soon!" 
                          : error}
                    </span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          onChange={onChange}
                          value={name}
                          placeholder="Your Name"
                          disabled={isSubmitting}
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          onChange={onChange}
                          value={email}
                          disabled={isSubmitting}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                      onChange={onChange}
                      value={message}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="aali_tm_button">
                    <button 
                      type="submit" 
                      id="send_message" 
                      disabled={isSubmitting}
                      style={{ 
                        background: '#007bff',
                        border: 'none',
                        padding: '12px 30px',
                        borderRadius: '4px',
                        color: 'white',
                        fontSize: '16px',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                      }}
                    >
                      <span>
                        {isSubmitting ? "Sending..." : "Submit Message"} {msgSent}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Contact;
