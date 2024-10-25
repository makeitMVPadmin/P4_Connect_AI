import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  mockMatchedUser  from '../../mockDataForPhotocard';
import PhotoCard from '../../components/P5AP_PhotoCard/photocard';
import './PairupBoard.scss';

const PairupBoard = () => {
  const [matchedUser, setMatchedUser] = useState(null);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMatchedUser(mockMatchedUser);
      setLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const handleBeginChallenge = () => {
    navigate('/challenge');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="pairup-board">
      {loading && <div className="pairup-board__loading">Loading...</div>}
      {!loading && (
        <>
          <div className="pairup-board_text">We found a buddy to pair with.</div>
          {matchedUser ? <PhotoCard user={matchedUser} /> : <p>No user data available</p>}
          <div className="pairup-board_text-bottom">What are you waiting for?</div>
          <div className="pairup-board__actions">
            <button className="btn btn-secondary" onClick={handleGoBack}>Go Back</button>
            <button className="btn btn-primary btn-default" onClick={handleBeginChallenge}>Begin Challenge</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PairupBoard;

