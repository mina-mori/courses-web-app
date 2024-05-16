import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CourseData } from '../../model/SharedModels';
import './CourseDetails.scss';

const CourseDetails: React.FC = () => {
  const { id } = useParams();
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [jsonData, setJsonData] = useState<CourseData[]>([]);

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
  }, []);

  const handleTopicClick = (topicId: number) => {
    setSelectedTopic(topicId);
  };

  return (
    <div className='course-details-container'>
      <div className='menu'>
        <h2 className='menuTitle'>Course Content</h2>
        <ul className='menuList'>
          {jsonData.map((topic, index) => (
            <li
              className='menuItem'
              key={index}
              onClick={() => handleTopicClick(topic.id)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
      </div>
      <div className='content'>
        {selectedTopic !== null ? (
          <div>
            <h2 className='contentTitle'>
              {jsonData[selectedTopic - 1].title}
            </h2>
            <p className='contentText'>{jsonData[selectedTopic - 1].content}</p>
          </div>
        ) : (
          <p>Select a topic from the menu to view its content.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
