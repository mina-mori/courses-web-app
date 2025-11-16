import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseList.scss';

const courses = [
  {
    id: 'react',
    title: 'React JS Course',
    description:
      'Learn to build dynamic user interfaces with React. Covers components, hooks, state management, and more.',
    duration: '8 weeks',
    level: 'Beginner to Intermediate',
    instructor: 'Jane Doe',
    rating: 4.8,
    students: 1250,
    tags: ['JavaScript', 'Frontend', 'UI/UX'],
  },
  {
    id: 'angular',
    title: 'Angular Course',
    description:
      'Master the TypeScript-based web application framework. Explore components, services, routing, and advanced features.',
    duration: '10 weeks',
    level: 'Intermediate',
    instructor: 'John Smith',
    rating: 4.7,
    students: 980,
    tags: ['TypeScript', 'Frontend', 'Framework'],
  },
  {
    id: 'dotnet',
    title: '.Net Core Course',
    description:
      'Learn the basics of .NET Core (.NET 6) and build a simple CRUD application with MVC. Includes Entity Framework and APIs.',
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    instructor: 'Emily Johnson',
    rating: 4.9,
    students: 750,
    tags: ['C#', 'Backend', 'MVC'],
  },
];

const filterOptions = [
  { key: 'all', label: 'All Courses' },
  { key: 'JavaScript', label: 'JavaScript' },
  { key: 'TypeScript', label: 'TypeScript' },
  { key: 'C#', label: 'C#' },
];

const infoItems = [
  {
    title: 'Expert-Led Content',
    description: 'Learn from industry experts with real-world experience.',
  },
  {
    title: 'Practical Projects',
    description: 'Build portfolios with hands-on projects and assignments.',
  },
  {
    title: 'Flexible Schedule',
    description: 'Study at your own pace with lifetime access.',
  },
  {
    title: 'Certification',
    description: 'Earn certificates upon completion to showcase your skills.',
  },
];

const CourseList: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('all');

  const filteredCourses =
    filter === 'all'
      ? courses
      : courses.filter((course) => course.tags.includes(filter));

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
  };

  return (
    <div className="courses-list-container">
      <header className="courses-header">
        <h1>Explore Our Programming Courses</h1>
        <p>
          Choose from a variety of courses designed to boost your skills and
          advance your career.
        </p>
        <div className="filter-buttons">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              className={filter === option.key ? 'active' : ''}
              onClick={() => setFilter(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </header>

      <div className="courses-grid">
        {filteredCourses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-image">
              <div className="course-tags">
                {course.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="course-content">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span className="meta-item">
                  <strong>Duration:</strong> {course.duration}
                </span>
                <span className="meta-item">
                  <strong>Level:</strong> {course.level}
                </span>
                <span className="meta-item">
                  <strong>Instructor:</strong> {course.instructor}
                </span>
              </div>
              <div className="course-stats">
                <div className="rating">
                  <span className="stars">{renderStars(course.rating)}</span>
                  <span className="rating-value">{course.rating}</span>
                </div>
                <span className="students">{course.students} students</span>
              </div>
              <button
                className="course-button"
                onClick={() => navigate(`${course.id}`)}
              >
                View Course Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="courses-info">
        <h2>Why Enroll in Our Courses?</h2>
        <div className="info-grid">
          {infoItems.map((item, index) => (
            <div className="info-item" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseList;
