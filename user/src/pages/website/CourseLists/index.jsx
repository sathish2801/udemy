import React, { useEffect, useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { getCourseItems } from '../../../api/urls';
import NavigationHeader from '../../../components/website/Header';
import Card from '../../../components/website/Card';
import Search from '../../../components/website/search'

const CourseLists = () => {
    const [courseLists, setCourseLists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCourseItems() {
            const data = await getCourseItems();
            setCourseLists(data.results || []);
        }
        fetchCourseItems();
    }, []);

    const goToCourseDetails = (uuid) => {
        navigate(`/course-details/${uuid}`);
    };

    return (
        <div>
            <NavigationHeader />
            <div className='listing'>
               <div className='course'>
                  <p>Course</p>
               </div>
            <Search/>
            </div>
            <Card/>
        </div>
        
        
    );
};

export default CourseLists;
