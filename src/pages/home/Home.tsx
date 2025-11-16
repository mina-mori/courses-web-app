import React from 'react';
import './Home.scss';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Extracted data logic outside JSX
  const featuredCourses = [
    {
      id: 'react',
      title: 'React.js Mastery',
      description:
        'Learn to build dynamic user interfaces with React. Covers components, hooks, and state management.',
    },
    {
      id: 'angular',
      title: 'Angular Essentials',
      description:
        'Dive into Angular framework with TypeScript. Explore components, services, and routing.',
    },
    {
      id: 'dotnet',
      title: 'ASP.NET Core Development',
      description:
        'Build robust web applications with .NET Core. Learn MVC, APIs, and Entity Framework.',
    },
  ];

  const benefits = [
    {
      title: 'Expert Instructors',
      description:
        'Learn from industry professionals with years of experience in software development.',
    },
    {
      title: 'Hands-On Projects',
      description:
        'Apply your knowledge through real-world projects and build a strong portfolio.',
    },
    {
      title: 'Flexible Learning',
      description:
        'Study at your own pace with lifetime access to course materials.',
    },
    {
      title: 'Community Support',
      description:
        'Join a vibrant community of learners and get help from peers and mentors.',
    },
  ];

  const testimonials = [
    {
      text: 'This course transformed my career. The React.js content was top-notch!',
      author: 'Alex Johnson, Frontend Developer',
    },
    {
      text: 'ASP.NET Core made backend development so much easier. Highly recommend!',
      author: 'Maria Garcia, Software Engineer',
    },
    {
      text: 'Angular course was comprehensive and practical. Loved the projects.',
      author: 'David Lee, Full-Stack Developer',
    },
  ];

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
          <button className="cta-button" onClick={() => navigate('/courses')}>
            Get Started
          </button>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          {featuredCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button
                className="enroll-button"
                onClick={() => navigate(`/courses/${course.id}`)}
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Our Courses?</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit" key={index}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>{testimonial.text}</p>
              <cite>- {testimonial.author}</cite>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of learners and advance your programming skills today.
        </p>
        <button className="cta-button" onClick={() => navigate('/courses')}>
          Browse All Courses
        </button>
      </section>
    </div>
  );
};

export default Home;
