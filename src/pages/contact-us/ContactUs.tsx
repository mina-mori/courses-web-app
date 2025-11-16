import React, { useState } from 'react';
import './ContactUs.scss';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-us-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1 className="hero-title">Contact Us</h1>
        <p className="hero-description">
          Have questions about our courses? Need support? We're here to help.
          Reach out to us and we'll respond as soon as possible.
        </p>
      </section>

      {/* Contact Form and Info Section */}
      <section className="contact-content">
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info-section">
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <div className="info-item">
              <h3>Address</h3>
              <p>
                123 Tech Street
                <br />
                Innovation City, IC 12345
                <br />
                United States
              </p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>info@programmingcourses.com</p>
            </div>
            <div className="info-item">
              <h3>Business Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          <img
            src="https://via.placeholder.com/800x400?text=Map+Location"
            alt="Map"
          />
          <p>Interactive map would be embedded here.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How do I enroll in a course?</h3>
            <p>
              You can enroll by visiting our Course List page and clicking "View
              Course" on your chosen course.
            </p>
          </div>
          <div className="faq-item">
            <h3>Are the courses self-paced?</h3>
            <p>
              Yes, all our courses are self-paced, allowing you to learn at your
              own speed with lifetime access.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you offer certificates?</h3>
            <p>
              Yes, upon completion of each course, you'll receive a certificate
              to showcase your achievement.
            </p>
          </div>
          <div className="faq-item">
            <h3>What if I need help with a course?</h3>
            <p>
              Our community forum and instructor support are available to help
              you throughout your learning journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
