import React from "react";
import smiley from "../assets/yellow-smile.jpeg";

function Contact() {
  return (
    <section id="contact">
      <h1>
        C
        <span className="face-icon">
          <img src={smiley} alt="face" />
        </span>
        ntact Mee!
      </h1>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-details">
          <p>
            If you have any questions or just want to say hello, feel free to
            reach out!
          </p>
          <div className="contact-info">
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
