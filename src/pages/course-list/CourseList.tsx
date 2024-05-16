import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseList.scss';

const courses = [
  {
    id: 'react',
    title: 'React JS Course',
    description: 'Learn to build dynamic user interfaces with React.',
  },
  {
    id: 'angular',
    title: 'Angular Course',
    description: 'Master the TypeScript-based web application framework.',
  },
  {
    id: 'dotnet',
    title: '.Net Core Course',
    description:
      'Learn the basics of .NET Core (.NET 6) and then build a simple CRUD application with MVC in this tutorial.',
  },
];

const CourseList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='courses-list-container'>
      {courses.map((course, index) => (
        <div className='courseCard' key={index}>
          <h2 className='courseTitle'>{course.title}</h2>
          <p className='courseDescription' title={course.description}>
            {course.description}
          </p>
          <button
            className='courseButton'
            onClick={() => navigate(`${course.id}`)}
          >
            View Course
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
