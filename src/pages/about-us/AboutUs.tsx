import React from 'react';
import './AboutUs.scss';

const AboutUs: React.FC = () => {
  // Extracted data logic outside JSX
  const heroData = {
    title: 'About Us',
    description:
      'Discover our story, meet our team, and learn about our commitment to empowering learners worldwide through high-quality programming education.',
  };

  const storyParagraphs = [
    'Founded in 2018, Programming Courses was born from a passion for technology and education. Our founders, a group of experienced developers and educators, recognized the growing demand for accessible, high-quality programming education. What started as a small online platform has grown into a comprehensive learning ecosystem, helping thousands of students worldwide master the skills needed for successful careers in tech.',
    'We believe that everyone should have the opportunity to learn programming, regardless of their background or experience level. Our courses are designed by industry experts and continuously updated to reflect the latest trends and technologies in the field.',
  ];

  const missionVision = [
    {
      title: 'Our Mission',
      description:
        'To democratize programming education by providing accessible, high-quality courses that empower individuals to build successful careers in technology and contribute to innovation in the digital world.',
    },
    {
      title: 'Our Vision',
      description:
        'To be the leading online platform for programming education, fostering a global community of skilled developers who drive technological advancement and solve real-world problems.',
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description:
        'We strive for the highest quality in our courses, content, and user experience.',
    },
    {
      title: 'Innovation',
      description:
        'We embrace new technologies and teaching methods to provide cutting-edge education.',
    },
    {
      title: 'Inclusivity',
      description:
        'We believe in creating an inclusive learning environment accessible to all.',
    },
    {
      title: 'Community',
      description:
        'We foster a supportive community of learners, instructors, and tech enthusiasts.',
    },
    {
      title: 'Integrity',
      description:
        'We maintain transparency, honesty, and ethical practices in all our operations.',
    },
    {
      title: 'Growth',
      description:
        'We encourage continuous learning and professional development for our students and team.',
    },
  ];

  const teamMembers = [
    {
      name: 'Jane Doe',
      role: 'CEO & Co-Founder',
      bio: 'Former software engineer at Google with 10+ years of experience in web development.',
    },
    {
      name: 'John Smith',
      role: 'CTO & Co-Founder',
      bio: 'Expert in full-stack development and cloud technologies, previously at Microsoft.',
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Education',
      bio: 'PhD in Computer Science, passionate about making programming education accessible.',
    },
    {
      name: 'Mike Wilson',
      role: 'Lead Instructor',
      bio: 'Full-stack developer and mentor, specializing in React and Node.js.',
    },
  ];

  const achievements = [
    { number: '50,000+', label: 'Students Enrolled' },
    { number: '100+', label: 'Courses Offered' },
    { number: '95%', label: 'Student Satisfaction' },
    { number: '20+', label: 'Countries Reached' },
  ];

  const ctaData = {
    title: 'Join Our Community',
    description:
      'Ready to start your programming journey? Explore our courses and become part of our growing community of developers.',
    buttonText: 'Browse Courses',
  };

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">{heroData.title}</h1>
          <p className="hero-description">{heroData.description}</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <div className="story-content">
          {storyParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        {missionVision.map((item, index) => (
          <div key={index} className={index === 0 ? 'mission' : 'vision'}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-item">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <h2>Our Achievements</h2>
        <div className="stats-grid">
          {achievements.map((stat, index) => (
            <div key={index} className="stat">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>{ctaData.title}</h2>
        <p>{ctaData.description}</p>
        <button className="cta-button">{ctaData.buttonText}</button>
      </section>
    </div>
  );
};

export default AboutUs;
