import React from 'react';
import html2canvas from 'html2canvas';
import './style.css'; // Import the custom CSS file for styling

const Certificate = ({ name, courseName }) => {
  const handleDownload = () => {
    const certificateElement = document.querySelector('.certificate-container');
    html2canvas(certificateElement, { backgroundColor: null }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'certificate.png';
      link.click();
    });
  };

  return (
    <div>
      <div className="certificate-container">
        <div className="certificate">
          <img src="/path/to/coursera-logo.png" alt="Nexemy Logo" className="coursera-logo"/>
          
          <div className="ribbon">
            <p className="ribbon-text">COURSE CERTIFICATE</p>
          </div>
          
          <p className="certificate-id">Certificate ID: xxxxxxxx</p>
          <p className="certified-name">{name}</p>
          <p className="certified-text">has successfully completed</p>
          <p className="course-name">{courseName}</p>
          <p className="course-description">
            an online non-credit course authorized by Coursera Community Team and offered through Coursera
          </p>
          
          <div className="signature-section">
            <img src="/path/to/seal.png" alt="Nexemy Seal" className="coursera-seal"/>
            <div className="signature">
              <p>Claire Smith</p>
              <p>Community Manager</p>
              <p>Nexemy Community</p>
            </div>
          </div>
          
          <p className="verification">Verify at Nexemy.org/verify/xxxxxxxx</p>
        </div>
      </div>
      <button onClick={handleDownload} className="download-button">Download Certificate</button>
    </div>
  );
};

export default Certificate;
