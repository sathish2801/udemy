import React, { useState } from 'react';
import NavigationHeader from '../../../components/website/Header';
import './style.scss';
import courseImage from '../../../assets/course.png'; // Example course image

const courses = [
  // Example course data
  {
    id: 1,
    name: "React Basics",
    owner: "John Doe",
    duration: "4 weeks",
    status: "Active",
    deadline: "2024-09-30",
    image: "https://via.placeholder.com/40?text=R",
    totalLessons: 20,
    completedLessons: 10,
  },
  {
    id: 2,
    name: "Node.js Fundamentals",
    owner: "Jane Smith",
    duration: "6 weeks",
    status: "Completed",
    deadline: "2024-08-15",
    image: "https://via.placeholder.com/40?text=N",
    totalLessons: 25,
    completedLessons: 25,
  },
  {
    id: 3,
    name: "CSS Mastery",
    owner: "Mark Brown",
    duration: "3 weeks",
    status: "Progress",
    deadline: "2024-09-10",
    image: "https://via.placeholder.com/40?text=C",
    totalLessons: 15,
    completedLessons: 7,
  }
];

const subscriptionDetails = {
  plan: 'Premium',
  price: '$29.99/month',
  features: [
    'Unlimited access to all courses',
    'Downloadable content',
    '24/7 support',
    'Certification on completion'
  ],
  enrolledCourses: [
    'React Basics',
    'Node.js Fundamentals',
    'CSS Mastery'
  ]
};

const Profile = () => {
  const [view, setView] = useState('courses'); // 'courses', 'profile', 'subscription'
  const [showNewCourse, setShowNewCourse] = useState(false);

  // State for profile information
  const [profile, setProfile] = useState({
    name: 'Vishvabro',
    email: 'vishva28@gmail.com',
    contact: '123-456-7890',
    degree: "Bachelor's",
    profilePic: 'https://i1.wp.com/shoprenewableenergy.com/wp-content/uploads/2020/02/cropped-portrait-photo-of-smiling-man-with-his-arms-crossed-standing-2379004-scaled-1.jpg?ssl=1'
  });

  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    contact: profile.contact,
    degree: profile.degree,
    profilePic: profile.profilePic
  });

  const handleStartNewCourseClick = () => {
    setShowNewCourse(true);
    setView('courses');
  };

  const handleViewCoursesClick = () => {
    setShowNewCourse(false);
    setView('courses');
  };

  const handleProfileClick = () => {
    setView('profile');
  };
  const handleCertificateClick = () => {
    setView('certificate');
  };

  const handleSubscriptionClick = () => {
    setView('subscription');
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setProfile({
      ...profile,
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      degree: formData.degree,
      profilePic: formData.profilePic
    });
    setView('courses'); // Optional: return to the course view or keep on the profile page
  };

  return (
    <div>
      <NavigationHeader />
      <div className="side-nav">
        <div className="profile">
          <img
            src={profile.profilePic}
            alt="Profile Picture"
            className="profile-pic"
          />
          <div className="user-profile">
            <p>{profile.name} <br /><span>{profile.email}</span></p>
          </div>
        </div>
        <ul className="nav-items">
          <li><a href="#profile" onClick={handleProfileClick}>Profile</a></li>
          <li><a href="#mycourse" onClick={handleViewCoursesClick}>My Course</a></li>
          <li><a href="#subscription" onClick={handleSubscriptionClick}>Subscription</a></li>
          <li><a href="#certificte" onClick={handleCertificateClick}>Settings</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </div>

      <div className="main-content">
        {view === 'profile' ? (
          <div className="profile-form">
            <h4>Edit Profile</h4>
            <form onSubmit={handleSaveChanges}>
              <div className="form-group profile-pic-group">
                <label htmlFor="profile-pic">Profile Picture</label>
                <div className="profile-pic-container">
                  <img
                    src={formData.profilePic}
                    alt="Profile"
                    className="profile-pic"
                  />
                  <input type="file" id="profile-pic" onChange={handleProfilePicChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact No.</label>
                <input type="text" id="contact" value={formData.contact} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="degree">Degree Level</label>
                <input type="text" id="degree" value={formData.degree} onChange={handleInputChange} />
              </div>
              <button type="submit">Save Changes</button>
              <button type="button" className="btn-delete">Delete Profile</button>
            </form>
          </div>
        ) : view === 'subscription' ? (
         <div className="subscription-container">
  <div className="card subscription-details">
    <h4>Subscription Details</h4>
    <h5>Plan: {subscriptionDetails.plan}</h5>
    <p>Price: {subscriptionDetails.price}</p>
    <h6>Features:</h6>
    <ul>
      {subscriptionDetails.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>

  <div className="card enrolled-courses">
    <h4>Enrolled Courses</h4>
    <ul>
      {subscriptionDetails.enrolledCourses.map((course, index) => (
        <li key={index}>{course}</li>
      ))}
    </ul>
  </div>
</div>

        ) : (
          <div>
            <div className="welcome-progress-container">
              <div className="welcome-container">
                <div className="text-content">
                  <h1 className="welcome-heading">Welcome Back, User!</h1>
                  <p className="welcome-subheading">Keep track of your progress and achievements here.</p>
                  <div className="button-container">
                    <button
                      className="btn btn-course"
                      onClick={handleViewCoursesClick}
                    >
                      View Courses
                    </button>
                    <button
                      className="btn btn-new"
                      onClick={handleStartNewCourseClick}
                    >
                      Start New Course
                    </button>
                  </div>
                </div>
                <div className="image-content">
                  <img src={courseImage} alt="Welcome" />
                </div>
              </div>
            </div>

            {!showNewCourse && (
              <div className="course-list">
                <h4>Course List</h4>
                <div className="heading-row">
                  <div className="cell">Image</div>
                  <div className="cell">Course Name</div>
                  <div className="cell">Owner</div>
                  <div className="cell">Duration</div>
                  <div className="cell">Status</div>
                  <div className="cell">Deadline</div>
                </div>
                {courses.map((course) => (
                  <div className="row" key={course.id}>
                    <div className="cell">
                      <img src={course.image} alt="Course" className="course-image" />
                    </div>
                    <div className="cell">{course.name}</div>
                    <div className="cell">{course.owner}</div>
                    <div className="cell">{course.duration}</div>
                    <div className={`cell status-${course.status}`}>{course.status}</div>
                    <div className="cell">{course.deadline}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
