
import mockMatchedUser from '../../mockDataForPhotocard'; 

export const findMatchedUser = (currentUser) => {

  let matchedCandidates = mockMatchedUser.filter(user =>
    user.role === currentUser.role &&
    user.skills.some(skill => currentUser.skills.includes(skill))
  );

  if (matchedCandidates.length) {
    matchedCandidates = matchedCandidates.filter(user =>
      user.level === currentUser.level
    );
  }

  return matchedCandidates.length ? matchedCandidates[Math.floor(Math.random() * matchedCandidates.length)] : null;
};
