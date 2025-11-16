import React from 'react';
import './AboutUs.scss';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-description">
            Discover our story, meet our team, and learn about our commitment to
            empowering learners worldwide through high-quality programming
            education.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <div className="story-content">
          <p>
            Founded in 2018, Programming Courses was born from a passion for
            technology and education. Our founders, a group of experienced
            developers and educators, recognized the growing demand for
            accessible, high-quality programming education. What started as a
            small online platform has grown into a comprehensive learning
            ecosystem, helping thousands of students worldwide master the skills
            needed for successful careers in tech.
          </p>
          <p>
            We believe that everyone should have the opportunity to learn
            programming, regardless of their background or experience level. Our
            courses are designed by industry experts and continuously updated to
            reflect the latest trends and technologies in the field.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To democratize programming education by providing accessible,
            high-quality courses that empower individuals to build successful
            careers in technology and contribute to innovation in the digital
            world.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be the leading online platform for programming education,
            fostering a global community of skilled developers who drive
            technological advancement and solve real-world problems.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Excellence</h3>
            <p>
              We strive for the highest quality in our courses, content, and
              user experience.
            </p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>
              We embrace new technologies and teaching methods to provide
              cutting-edge education.
            </p>
          </div>
          <div className="value-item">
            <h3>Inclusivity</h3>
            <p>
              We believe in creating an inclusive learning environment
              accessible to all.
            </p>
          </div>
          <div className="value-item">
            <h3>Community</h3>
            <p>
              We foster a supportive community of learners, instructors, and
              tech enthusiasts.
            </p>
          </div>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>
              We maintain transparency, honesty, and ethical practices in all
              our operations.
            </p>
          </div>
          <div className="value-item">
            <h3>Growth</h3>
            <p>
              We encourage continuous learning and professional development for
              our students and team.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Jane Doe</h3>
            <p>CEO & Co-Founder</p>
            <p>
              Former software engineer at Google with 10+ years of experience in
              web development.
            </p>
          </div>
          <div className="team-member">
            <h3>John Smith</h3>
            <p>CTO & Co-Founder</p>
            <p>
              Expert in full-stack development and cloud technologies,
              previously at Microsoft.
            </p>
          </div>
          <div className="team-member">
            <h3>Emily Johnson</h3>
            <p>Head of Education</p>
            <p>
              PhD in Computer Science, passionate about making programming
              education accessible.
            </p>
          </div>
          <div className="team-member">
            <h3>Mike Wilson</h3>
            <p>Lead Instructor</p>
            <p>
              Full-stack developer and mentor, specializing in React and
              Node.js.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <h2>Our Achievements</h2>
        <div className="stats-grid">
          <div className="stat">
            <h3>50,000+</h3>
            <p>Students Enrolled</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Courses Offered</p>
          </div>
          <div className="stat">
            <h3>95%</h3>
            <p>Student Satisfaction</p>
          </div>
          <div className="stat">
            <h3>20+</h3>
            <p>Countries Reached</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Our Community</h2>
        <p>
          Ready to start your programming journey? Explore our courses and
          become part of our growing community of developers.
        </p>
        <button className="cta-button">Browse Courses</button>
      </section>
    </div>
  );
};

export default AboutUs;
