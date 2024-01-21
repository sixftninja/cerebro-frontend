import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  let navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Update the path to direct to '/workspace' instead of '/dbconnect'
    navigate('/workspace');
  };

  return (
    <div className="landing">
      <h1>CEREBRO</h1>
      <p>Untethered Ideation. Transform Chats to Tasks.</p>
      <button className="start-btn" onClick={handleGetStartedClick}>
        GET STARTED
      </button>
    </div>
  );
};

export default LandingPage;
