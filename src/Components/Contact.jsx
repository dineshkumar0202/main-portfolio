import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import smiley from "../assets/yellow-smile.jpeg";

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_zhfdplj", // Your Service ID
        "template_5362m6h", // Your Template ID
        form.current,
        "cDI6OZ_0ctfic-aI1" // Your Public Key
      );
      alert("✅ Message sent successfully!");
      form.current.reset();
    } catch (error) {
      alert("❌ Failed to send message.");
      console.error("EmailJS error:", error);
    }
  };
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
        <div className="contact-details">
          <p>
            If you have any questions or just want to say hello, feel free to
            reach out!
          </p>
          <div className="contact-info">
            <p>💌: dhinesh.dk093@gmail.com</p>
            <p>📞: +91 9080410549</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Your Phone"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
