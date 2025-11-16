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

  // Extracted data logic outside JSX
  const heroData = {
    title: 'Contact Us',
    description:
      "Have questions about our courses? Need support? We're here to help. Reach out to us and we'll respond as soon as possible.",
  };

  const contactInfo = [
    {
      title: 'Address',
      content: '123 Tech Street\nInnovation City, IC 12345\nUnited States',
    },
    {
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      title: 'Email',
      content: 'info@programmingcourses.com',
    },
    {
      title: 'Business Hours',
      content:
        'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
    },
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'YouTube', url: '#' },
  ];

  const faqItems = [
    {
      question: 'How do I enroll in a course?',
      answer:
        'You can enroll by visiting our Course List page and clicking "View Course" on your chosen course.',
    },
    {
      question: 'Are the courses self-paced?',
      answer:
        'Yes, all our courses are self-paced, allowing you to learn at your own speed with lifetime access.',
    },
    {
      question: 'Do you offer certificates?',
      answer:
        "Yes, upon completion of each course, you'll receive a certificate to showcase your achievement.",
    },
    {
      question: 'What if I need help with a course?',
      answer:
        'Our community forum and instructor support are available to help you throughout your learning journey.',
    },
  ];

  return (
    <div className="contact-us-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1 className="hero-title">{heroData.title}</h1>
        <p className="hero-description">{heroData.description}</p>
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
            {contactInfo.map((info, index) => (
              <div key={index} className="info-item">
                <h3>{info.title}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
              </div>
            ))}
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="social-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqItems.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
