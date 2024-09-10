import React from 'react';
import './Category.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faLayerGroup, faChartLine, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const CategoryCard = ({ category, icon }) => {
    return (
        
        <div className="category-card">
            
            <div className="icon">
                <FontAwesomeIcon icon={icon} size="2x" />
            </div>
            <div className="category-title">
                {category}
            </div>
        </div>
    );
};

export default CategoryCard;
