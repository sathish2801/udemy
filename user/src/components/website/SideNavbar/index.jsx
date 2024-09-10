import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMoneyCheckAlt, faChartBar, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import './SideNavbar.css';

const SideNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768); // Collapse when screen width is less than 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`side-navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="nav-item">
        <FontAwesomeIcon icon={faBook} />
        {!isCollapsed && <span>Course</span>}
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faMoneyCheckAlt} />
        {!isCollapsed && <span>Payment Details</span>}
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faChartBar} />
        {!isCollapsed && <span>Video Analytics</span>}
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faChalkboardTeacher} />
        {!isCollapsed && <span>Instructor Details</span>}
      </div>
    </div>
  );
};

export default SideNavbar;
