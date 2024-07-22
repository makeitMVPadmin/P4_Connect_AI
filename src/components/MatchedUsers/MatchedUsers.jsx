import "./MatchedUsers.scss";

const MatchedUsers = () => {
  return (
    <div className="matched">
      <h2 className="matched__title">Congratulations! You have an 88% match!</h2>
      {/* insert logic to retrieve and display user1's profile picture */}
      {/* insert logic to retrieve and display user2's profile picture */}
      <p className="matched__text">
        Ready to start collaborating? Connect with your partner now and begin working
        towards your shared goals.
      </p>
      <div className="matched__buttons"></div>
    </div>
  );
};
export default MatchedUsers;
