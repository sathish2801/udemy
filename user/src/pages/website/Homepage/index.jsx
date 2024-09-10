import React from 'react';
import NavigationHeader from '../../../components/website/Header';
import Certificate from '../../../components/website/certificate';
import CarouselFadeExample from '../../../components/website/promotion/CarouselfadeExample';
import About from '../../../components/website/promotion/about';
import CategoryCard from '../../../components/website/promotion/categories';
import PartnerLogo  from '../../../components/website/promotion/partners';
import { faCode, faDatabase, faLayerGroup, faChartLine, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import './style.css'
import Card from '../../../components/website/Card';

const slides = [
    {
        label: "Special Discount on React.js",
        text: "Limited Time Offer: $19.99 | Rating: 4.5 | Difficulty: Intermediate | Duration: 8 hours",
        imageAlt: "React.js promotion",
        captionTitle: "React.js Course Discount",
        captionText: "Get 50% off on our React.js course. Learn with practical projects and boost your skills.",
        image: "https://via.placeholder.com/300?text=React.js+Promo"
    },
    {
        label: "Python for Beginners Sale",
        text: "Now Only $9.99 | Rating: 4.0 | Difficulty: Beginner | Duration: 6 hours",
        imageAlt: "Python promotion",
        captionTitle: "Python Course Sale",
        captionText: "Master Python programming at an unbeatable price. Perfect for beginners!",
        image: "https://via.placeholder.com/300?text=Python+Promo"
    },
    {
        label: "Node.js Masterclass Special",
        text: "Discounted Price: $29.99 | Rating: 5.0 | Difficulty: Advanced | Duration: 12 hours",
        imageAlt: "Node.js promotion",
        captionTitle: "Node.js Masterclass",
        captionText: "Advance your backend skills with our Node.js Masterclass. Limited time discount available!",
        image: "https://via.placeholder.com/300?text=Node.js+Promo"
    }
];

const categories = [
    { category: 'UX/UI Design', icon: faPaintBrush },
    { category: 'Front-End Developer', icon: faCode },
    { category: 'Back-End Developer', icon: faDatabase },
    { category: 'Fullstack Developer', icon: faLayerGroup },
    { category: 'Data Analyst', icon: faChartLine },
    { category: 'Graphic Design', icon: faPaintBrush },
];
const partners = [
    { initial: 'A', name: 'RORIRI Software' },
    { initial: 'B', name: 'Nexgen IT Academy' },
    { initial: 'C', name: 'Nexgen College' },
    { initial: 'D', name: 'Riya IAS Academy' },
  ];


const Homepage = () => {
    return (
        <>
            <NavigationHeader/>
            <CarouselFadeExample slides={slides}/>
            <div className="category-heading">
                <h2 >Choose Your Path</h2> {/* Added heading */}
            </div>
            
            <div className="category-list">
                {categories.map((cat, index) => (
                    <CategoryCard key={index} category={cat.category} icon={cat.icon} />
                ))}
            </div>
            <About/>
            <div className="category-heading">
              <h3>Pick A Course To Get Started</h3> {/* Added heading */}
            </div>
            <Card/>
            <h3 >Learn With Our Partners</h3>
            <div className="partner-logos-wrapper">
        {partners.map((partner, index) => (
          <PartnerLogo key={index} initial={partner.initial} name={partner.name} />
        ))}
      </div>
      <div className='info'>
  <h3>Get Your Quality <span>Certificate</span> Through Nexemy</h3>
  <button>Get Started</button>
  </div>
  {/* <Certificate/> */}
</>
    );
}

export default Homepage;
