import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  mockMatchedUser  from '../../mockDataForPhotocard';
import PhotoCard from '../../components/P5AP_PhotoCard/photocard';
import firebase from '../../firebase'; 
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
            <button className="btn btn-primary" onClick={handleBeginChallenge}>Begin Challenge</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PairupBoard;


/*

        import { useState, useEffect } from 'react';
        import { useNavigate } from 'react-router-dom';
        import { doc, getDoc } from 'firebase/firestore';
        import { db } from '../../firebase'; 
        import PhotoCard from '../../components/P5AP_PhotoCard/photocard';
        import './PairupBoard.scss';
        
        const PairupBoard = () => {
          const [matchedUser, setMatchedUser] = useState(null);
          const [loading, setLoading] = useState(false);
          const [error, setError] = useState(null);
          const navigate = useNavigate();
        
          useEffect(() => {
            const fetchUserData = async () => {
              try {
                setLoading(true); 
                const userDocRef = doc(db, "accountapair_p5ap_users_test", "accountapair_user_testOnly"); 
                const userDoc = await getDoc(userDocRef);
        
                if (userDoc.exists()) {
                  setMatchedUser(userDoc.data());
                } else {
                  console.log("No such document!");
                  setError("No user found");
                }
              } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Failed to fetch user data");
              } finally {
                setLoading(false); 
              }
            };
        
            fetchUserData();
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
              {error && <div className="pairup-board__error">{error}</div>}
              {!loading && !error && (
                <>
                  <div className="pairup-board_text">We found a buddy to pair with.</div>
        
                  {matchedUser ? (
                    <PhotoCard
                      profilePicture={matchedUser.profilePicture}
                      name={matchedUser.name}
                      level={matchedUser.level}
                      role={matchedUser.role}
                      skills={matchedUser.skills}
                    />
                  ) : (
                    <p>No user data available</p>
                  )}
        
                  <div className="pairup-board_text-bottom">What are you waiting for?</div>
                  <div className="pairup-board__actions">
                    <button className="btn btn-secondary" onClick={handleGoBack}>Go Back</button>
                    <button className="btn btn-primary" onClick={handleBeginChallenge}>Begin Challenge</button>
                  </div>
                </>
              )}
            </div>
          );
        };
        
        export default PairupBoard;
        */
                