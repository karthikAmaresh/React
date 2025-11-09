import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          <span className="title-icon">●</span> Let's Connect
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:shweta@example.com">shweta@example.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>City, Country</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>LinkedIn</span>
              </a>
              <a href="#" className="social-link" aria-label="Behance">
                <span>Behance</span>
              </a>
              <a href="#" className="social-link" aria-label="Dribbble">
                <span>Dribbble</span>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; 2024 Shweta Mandwale. All rights reserved.</p>
          <p className="footer-tagline">Designed with <span className="heart">❤</span> and intention</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
