import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Programming Courses</h1>
          <p className="hero-description">
            Unlock your potential with our comprehensive programming courses.
            From beginner to advanced, master the skills that drive the tech
            industry.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <h3>React.js Mastery</h3>
            <p>
              Learn to build dynamic user interfaces with React. Covers
              components, hooks, and state management.
            </p>
            <button className="enroll-button">Enroll Now</button>
          </div>
          <div className="course-card">
            <h3>Angular Essentials</h3>
            <p>
              Dive into Angular framework with TypeScript. Explore components,
              services, and routing.
            </p>
            <button className="enroll-button">Enroll Now</button>
          </div>
          <div className="course-card">
            <h3>ASP.NET Core Development</h3>
            <p>
              Build robust web applications with .NET Core. Learn MVC, APIs, and
              Entity Framework.
            </p>
            <button className="enroll-button">Enroll Now</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Our Courses?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>Expert Instructors</h3>
            <p>
              Learn from industry professionals with years of experience in
              software development.
            </p>
          </div>
          <div className="benefit">
            <h3>Hands-On Projects</h3>
            <p>
              Apply your knowledge through real-world projects and build a
              strong portfolio.
            </p>
          </div>
          <div className="benefit">
            <h3>Flexible Learning</h3>
            <p>
              Study at your own pace with lifetime access to course materials.
            </p>
          </div>
          <div className="benefit">
            <h3>Community Support</h3>
            <p>
              Join a vibrant community of learners and get help from peers and
              mentors.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>
              This course transformed my career. The React.js content was
              top-notch!
            </p>
            <cite>- Alex Johnson, Frontend Developer</cite>
          </div>
          <div className="testimonial">
            <p>
              ASP.NET Core made backend development so much easier. Highly
              recommend!
            </p>
            <cite>- Maria Garcia, Software Engineer</cite>
          </div>
          <div className="testimonial">
            <p>
              Angular course was comprehensive and practical. Loved the
              projects.
            </p>
            <cite>- David Lee, Full-Stack Developer</cite>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of learners and advance your programming skills today.
        </p>
        <button className="cta-button">Browse All Courses</button>
      </section>
    </div>
  );
};

export default Home;
