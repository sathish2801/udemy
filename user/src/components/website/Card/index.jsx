import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Outlined heart icon
import FavoriteIcon from '@mui/icons-material/Favorite'; // Filled heart icon
import './style.scss'; // Make sure this file contains your SCSS styles
import data from '../data.json'; // Import the JSON data

const Card = () => {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    // Set items with the imported JSON data
    setItems(data);
  }, []);

  const handleEnrollClick = (item) => {
    console.log('Enroll clicked for:', item);
  };

  const handleWishlistClick = (item) => {
    setWishlist((prevWishlist) => ({
      ...prevWishlist,
      [item.id]: !prevWishlist[item.id],
    }));
  };

  return (
    <div className="canteen-list">
      {items.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt="Course Image" className="course-image" />
<div className="card-content">
  <div className="difficulty-level">{item.difficulty}</div>
  <Typography variant="h6" className="card-title">{item.title}</Typography>
  <div className="card-rating">
    <Rating name="half-rating" value={item.rating} precision={0.5} readOnly />
    <Typography variant="body2" className="rating-value">({item.rating} / 5 Rating)</Typography>
  </div>
  <div className="card-price">${item.price}</div>
  {/* <button onClick={() => handleEnrollClick(item)}>Enroll</button> */}
</div>

<div className="hover-content">
  <div className="course-title">{item.title}</div>
  <p className="course-description">{item.description}</p>
  <div className="card-rating">
    <Typography component="legend">({item.rating} / 5 Rating)</Typography>
    <Rating name="half-rating" value={item.rating} precision={0.5} readOnly />
  </div>
  <div className="hover-price">${item.price}</div>
  <button className="enroll-btn" onClick={() => handleEnrollClick(item)}>Enroll</button>
  <span className="wishlist-icon" onClick={() => handleWishlistClick(item)}>
    {wishlist[item.id] ? <FavoriteIcon className="filled-heart" /> : <FavoriteBorderIcon className="outlined-heart" />}
  </span>
  <div className="course-hours">Duration: {item.duration}</div>
</div>

        </div>
      ))}
    </div>
  );
};

export default Card;
