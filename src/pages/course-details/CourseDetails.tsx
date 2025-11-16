import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CourseData } from '../../model/SharedModels';
import './CourseDetails.scss';

const CourseDetails: React.FC = () => {
  const { id } = useParams();
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [jsonData, setJsonData] = useState<CourseData[]>([]);
  const [completedTopics, setCompletedTopics] = useState<Set<number>>(
    new Set()
  );
  const [courseProgress, setCourseProgress] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/data/${id}.json`);
        setJsonData(response.data);
        setSelectedTopic(1);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    if (jsonData.length > 0) {
      const progress = (completedTopics.size / jsonData.length) * 100;
      setCourseProgress(progress);
    }
  }, [completedTopics, jsonData]);

  const handleTopicClick = (topicId: number) => {
    setSelectedTopic(topicId);
    setCompletedTopics((prev) => new Set(prev).add(topicId));
  };

  const getCourseTitle = () => {
    switch (id) {
      case 'react':
        return 'React JS Course';
      case 'angular':
        return 'Angular Course';
      case 'dotnet':
        return '.NET Core Course';
      default:
        return 'Course';
    }
  };

  const getCourseDescription = () => {
    switch (id) {
      case 'react':
        return 'Master React.js with hands-on projects and real-world applications.';
      case 'angular':
        return 'Learn Angular framework from basics to advanced concepts.';
      case 'dotnet':
        return 'Build robust applications with ASP.NET Core and .NET technologies.';
      default:
        return '';
    }
  };

  return (
    <div className="course-details-container">
      {/* Course Header */}
      <header className="course-header">
        <div className="course-info">
          <h1 className="course-title">{getCourseTitle()}</h1>
          <p className="course-description">{getCourseDescription()}</p>
          <div className="course-meta">
            <span className="meta-item">
              Duration: {jsonData.length * 2} hours
            </span>
            <span className="meta-item">Topics: {jsonData.length}</span>
            <span className="meta-item">Level: Beginner to Advanced</span>
          </div>
        </div>
        <div className="progress-section">
          <h3>Course Progress</h3>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${courseProgress}%` }}
            ></div>
          </div>
          <p>{Math.round(courseProgress)}% Complete</p>
        </div>
      </header>

      <div className="course-content-wrapper">
        {/* Sidebar Menu */}
        <aside className="menu-sidebar">
          <h2 className="menu-title">Course Content</h2>
          <ul className="menu-list">
            {jsonData.map((topic, index) => (
              <li
                className={`menu-item ${selectedTopic === topic.id ? 'active' : ''} ${completedTopics.has(topic.id) ? 'completed' : ''}`}
                key={index}
                onClick={() => handleTopicClick(topic.id)}
              >
                <span className="topic-number">{topic.id}</span>
                <span className="topic-title">{topic.title}</span>
                {completedTopics.has(topic.id) && (
                  <span className="checkmark">✓</span>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content-main">
          {selectedTopic !== null ? (
            <div className="content-section">
              <div className="content-header">
                <h2 className="content-title">
                  {jsonData[selectedTopic - 1].title}
                </h2>
                <div className="content-actions">
                  <button
                    className="mark-complete"
                    onClick={() =>
                      setCompletedTopics((prev) =>
                        new Set(prev).add(selectedTopic)
                      )
                    }
                  >
                    Mark as Complete
                  </button>
                  <button className="share-topic">Share</button>
                </div>
              </div>
              <div
                className="content-text"
                dangerouslySetInnerHTML={{
                  __html: jsonData[selectedTopic - 1].content as string,
                }}
              />
              <div className="content-navigation">
                {selectedTopic > 1 && (
                  <button
                    className="nav-button prev"
                    onClick={() => handleTopicClick(selectedTopic - 1)}
                  >
                    ← Previous Topic
                  </button>
                )}
                {selectedTopic < jsonData.length && (
                  <button
                    className="nav-button next"
                    onClick={() => handleTopicClick(selectedTopic + 1)}
                  >
                    Next Topic →
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <h3>Welcome to {getCourseTitle()}</h3>
              <p>Select a topic from the sidebar to begin learning.</p>
              <div className="course-overview">
                <h4>Course Overview</h4>
                <ul>
                  <li>Comprehensive coverage of {id} concepts</li>
                  <li>Hands-on coding exercises</li>
                  <li>Real-world project implementations</li>
                  <li>Expert instructor support</li>
                </ul>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Related Courses Section */}
      <section className="related-courses">
        <h2>Related Courses</h2>
        <div className="related-grid">
          {['react', 'angular', 'dotnet']
            .filter((course) => course !== id)
            .map((course) => (
              <div key={course} className="related-card">
                <h3>
                  {course === 'react'
                    ? 'React JS'
                    : course === 'angular'
                      ? 'Angular'
                      : '.NET Core'}
                </h3>
                <p>Explore {course} development and expand your skills.</p>
                <button className="explore-button">Explore Course</button>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
