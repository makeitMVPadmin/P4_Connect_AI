import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoCard from '../../components/P5AP_PhotoCard/PhotoCard';
import firebase from '../../firebase'; 
import './PairupBoard.scss';

const mockMatchedUser = {
    profilePicture: 'https://s3-alpha-sig.figma.com/img/ac42/ff41/fa88b42e672301ff65e0dbf24db3866f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NMt-UgNdrJrHFAUpBqjiHLPTiZPTA7AxLyuGV0lcIpeWvy70GwdS-ztBChBVHjjFrRemE87lEMIBXS4Mh136CnycMPgdGjJ3AixBQS56q7E0hunRxi7k3F9R66TfQvkNqg4JBeSq4IcAxzra5AWWs48bLyF~qqFECv2WYX4Q-hO5zd4oBwtP~hYNg6SV0q96NBlM5UpSYBTIC2AkIpk87u8iDeWp2oIEGXCW4sIERuU1j~UQhaLRNBar-YGIGDxMGjGtL0QFDjmSUfyn7-cKfOqamzAgKND08YHGj8UYQomb8qL3HwpNl86deNHntI3ON3alC7bHAlg22QQt0mDJmA__', 
    name: 'Kate Tanner',
    role: 'UI Designer',
    skills: ['Figma', 'Prototyping', 'Auto Layout', 'Component Structuring'],
    level: 'Beginner',
  };

  const PairupBoard = () => {
    const [matchedUser, setMatchedUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const navigate = useNavigate(); 
    
    useEffect(() => { 
        const timeout = setTimeout(() => {
            setMatchedUser(mockMatchedUser); 
            setLoading(false); 
          }, 1000); 
        
          return () => clearTimeout(timeout); 
        }, []);
        
          const handleBeginChallenge = () => {
            navigate('/challenge'); 
          };
        
          const handleGoBack = () => {
            navigate('/dashboard'); 
          };
        
          if (loading) {
            return <div className="pairup-board">Loading...</div>; // Show loading state
          }
        
          return (
            <div className="pairup-board">
              <div className="pairup-board_text">We found a buddy to pair with.</div>
        
              {matchedUser ? <PhotoCard user={matchedUser} /> : <p>No user data available</p>}
        
              <div className="pairup-board_text-bottom">What are you waiting for?</div>
              <div className="pairup-board__actions">
                <button className="btn btn-secondary" onClick={handleGoBack}>Go Back</button>
                <button className="btn btn-primary" onClick={handleBeginChallenge}>Begin Challenge</button>
              </div>
            </div>
          );
        };
        
        export default PairupBoard;
        