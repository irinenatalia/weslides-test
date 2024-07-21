import React, { useState } from 'react';
import { PopupModal } from "react-calendly";
import mastheadbg from "../assets/mast-contact.jpg";
import arrow from "../assets/red-arrow.svg";


const Contact = () => {
  const [openCalendly, setOpenCalendly] = useState(false);

    return (
      <div className="contact-page">
        <div className="single-page masthead" style={{backgroundImage: `url(${mastheadbg})`}}>
          <h1>Start Your Journey to Success</h1>
        </div>
        <section className="container">
          <div className="section-head">
            <h2>Speak to Us Anytime, Anywhere</h2>
          </div>
          <div className="section-body flex">
            <div className="col-left flex flex-col">
              <div className="description">We have a dedicated international team ready to assist you, 24 hours a day. Your questions won't wait, and neither will we.</div>
              <div>
                <div className="subtitle">Email</div>
                <div className="description-large">Email@email.com</div>
              </div>
              <div>
                <div className="subtitle">Meet us now</div>
                <button className='book-call' onClick={() => setOpenCalendly(true)}>
                  Schedule a call <img src={arrow} alt="Arrow" />
                </button>
                <PopupModal
                url="https://calendly.com/irinenat-ng/proslider-introduction"
                onModalClose={() => setOpenCalendly(false)}
                open={openCalendly}
                rootElement={document.getElementById("root")}
              />
              </div>
            </div>

            <div className="col-right">
              <div className="subtitle">Contact form</div>
              <form>
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" name="fullname" placeholder="Enter your name"/>
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input type="text" name="email" placeholder="Enter your email address"/>
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" name="subject" placeholder="“I need a Pro design!”"/>
                </div>
                <div className="input-group">
                  <label>Message</label>
                  <textarea name="message" rows='8' placeholder="We're happy to help! Describe your inquiry and we will reach out soon."/>
                </div>
                <button className="submit book-call">Send Message <img src={arrow} alt="Arrow" /></button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Contact;