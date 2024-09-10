// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary'; 
import Login from './pages/authentication/Login';
import CourseLists  from './pages/website/CourseLists';
import CourseDetails from './pages/website/CourseDetails';
import WishLists from './pages/website/wishlist';
import Homepage from './pages/website/Homepage';
import Profile from './pages/website/profile';

function App() {
    return (
        <Router>
            <ErrorBoundary>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/course" element={<CourseLists />} />
                    <Route path="/wish" element={<WishLists />} />
                    <Route path="/course-details/:uuid" element={<CourseDetails />} />
                   
                </Routes>
            </ErrorBoundary>
        </Router>
    );
}

export default App;
