import React from 'react';
import './style.scss';
import Payment from '../PaymentButton';
const CourseInfo = ({ details }) => {
return (
    <div className="course-info">
        <div className="header-info">
            <p>{details.category}</p>
            <p>{details.prior_experience}</p>
            <p>{details.duration}Hours</p>
        </div>
        <div className="body">
            <div className="info">
                <h6>{details.identity}-{details.difficulty_level}</h6>
                <p>{details.description}</p>
            </div>
            <div className="left-info-box">
                <div className="rating-box">
                <p>{details.avg_rating}</p>
                <p>({details.rating_count})</p>
                </div>
                <div className="enroll-detail">
                <p>₹{details.price}</p>
                <Payment amount={details.price} />
                </div>
            </div>
        </div>
    </div>
);
};

    export default CourseInfo;
