
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import {
  Mail,
  MapPin,
  Send,
  Phone,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        "service_1wy2yjg",
        "template_gqmalpf",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        {
          publicKey: "QN6cOWRgBi-w1FurR",
        }
      );

      console.log("Email sent:", result.text);

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("Message could not be sent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span className="section-tag">
            GET IN TOUCH
          </span>

          <h2>
            Let's Work <span>Together</span>
          </h2>

          <p>
            Have a project or opportunity in mind?
            Let's connect and create something amazing.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <h3>Let's talk!</h3>

            <p>
              I'm open to Java Developer, Backend Developer
              and Full Stack Developer opportunities.
              Feel free to connect with me.
            </p>

            <div className="contact-detail">
              <div className="contact-icon">
                <Mail />
              </div>

              <div>
                <h4>Email</h4>
                <a href="mailto:vignesh.j0606@gmail.com?subject=Portfolio%20Contact">
  vignesh.j0606@gmail.com
</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Phone />
              </div>

              <div>
                <h4>Phone</h4>
                <a href="tel:+917339126270">
                  +91 7339126270
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin />
              </div>

              <div>
                <h4>Current Location</h4>
                <p>Bangalore, Karnataka, India</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin />
              </div>

              <div>
                <h4>Native Place</h4>
                <p>Salem, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/vignesh060"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="Visit my GitHub"
              >
                <span className="github-text">GH</span>
              </a>
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>

              <textarea
                name="message"
                placeholder="Tell me about your opportunity..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send size={18} />}
            </button>

            {status && (
              <p className="contact-status" role="status">
                {status}
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
