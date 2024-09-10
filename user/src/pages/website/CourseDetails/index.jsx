import React, { useEffect, useState } from 'react';
import { getCourseDetails } from '../../../api/urls';
import { useParams } from 'react-router-dom';
import NavigationHeader from '../../../components/website/Header';
import './style.scss';

import CourseInfo from '../../../components/website/CourseInfo';

const CourseDetails = () => {
  const [details, setCourseDetails] = useState([]);
  const info = {
    identity: details.identity,
    description: details.description,
    avg_rating: details.avg_rating,
    rating_count: details.rating_count,
    prior_experience: details.prior_experience,
    price: details.price,
    category: details.category,
    difficulty_level: details.difficulty_level,
    duration: details.duration
  };
  
  const { uuid } = useParams();

  useEffect(() => {
    async function fetchCourseItemDetails() {
      try {
        const data = await getCourseDetails(uuid);
        setCourseDetails(data);
      } catch (error) {
        console.error('Failed to fetch course details', error);
      }
    }
    fetchCourseItemDetails();
  }, [uuid]);

  
  return (
    <div className='body'>
      <NavigationHeader />
      <div className="media-box">
      <img src="{details.image_detail?.file}" alt={details.identity} />
        {details.identity}
      </div>
      <div className="outer-box">
        <CourseInfo details={info} />
      </div>
    </div>
  );
};

export default CourseDetails;
