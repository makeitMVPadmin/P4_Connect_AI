import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import mockMatchedUser from '../../mockDataForPhotocard'; 
import PhotoCard from '../../components/P5AP_PhotoCard/photocard';
import './PairupBoard.scss';

const PairupBoard = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false); 
  const [matchedUser, setMatchedUser] = useState(location.state?.matchedUser || null); 
  const navigate = useNavigate();

  useEffect(() => {
 
    if (!matchedUser) {
  
      setMatchedUser(mockMatchedUser[0]); 
    }
  }, [matchedUser]);

  const handleBeginChallenge = () => {
    navigate('/taskPage');
  };

  const handleGoBack = () => {
    navigate('/challengePage');
  };

  return (
    <div className="pairup-board">
      {loading && <div className="pairup-board__loading">Loading...</div>}
      {!loading && (
        <>
          <div className="pairup-board_text">
            We found a buddy to pair with.
          </div>
          {matchedUser ? (
            <PhotoCard user={matchedUser} />
          ) : (
            <p>No user data available</p>
          )}
          <div className="pairup-board_text-bottom">
            What are you waiting for?
          </div>
          <div className="pairup-board__actions">
            <button className="btn btn-secondary" onClick={handleGoBack}>
              Go Back
            </button>
            <button
              className="btn btn-primary btn-default"
              onClick={handleBeginChallenge}
            >
              Begin Challenge
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PairupBoard;
