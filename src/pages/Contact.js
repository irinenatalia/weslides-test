import React, { useState } from 'react';
import { PopupModal } from "react-calendly";
import ApiService from "../services/Service";
import mastheadbg from "../assets/mast-contact.jpg";
import arrow from "../assets/red-arrow.svg";


const Contact = () => {
  const [openCalendly, setOpenCalendly] = useState(false);
  const initialFormState = {
    id: null,
    name: "",
    email: "",
    subject: "",
    message: ""
  };
  const [contactForm, setContactForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const saveForm = () => {
    var data = {
      name: contactForm.name,
      email: contactForm.email,
      subject: contactForm.subject,
      message: contactForm.message
    };

    ApiService.create(data)
      .then(response => {
        setContactForm({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          subject: response.data.subject,
          message: response.data.message
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newForm = () => {
    setContactForm(initialFormState);
    setSubmitted(false);
  };

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
              <div className='form-group'>
                <div className="input-group">
                  <label for="fullname">Name</label>
                  <input
                    type="text"
                    id="fullname"
                    required
                    value={submitted? "" : contactForm.name}
                    onChange={handleInputChange}
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="input-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={submitted? "" : contactForm.email}
                    onChange={handleInputChange}
                    name="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="input-group">
                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={submitted? "" : contactForm.subject}
                    onChange={handleInputChange}
                    name="subject"
                    placeholder="“I need a Pro design!”"
                  />
                </div>
                <div className="input-group">
                  <label for="message">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows='8' 
                    required
                    value={submitted? "" : contactForm.message}
                    onChange={handleInputChange}
                    placeholder="We're happy to help! Describe your inquiry and we will reach out soon."/>
                </div>
                {submitted ? (
                  <div className='success'>
                    <strong>Thank you, we'll get back to you soon!</strong>
                  </div>
                ) : ""}
                <button className="submit book-call" onClick={saveForm}>
                  Send Message <img src={arrow} alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Contact;