import "./TaskPageDetailedInstructions.scss";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";

export default function TaskPageDetailedInstructions({id}) {

    const challengeId  = id

    const [challengeData, setChallengeData] = useState(null);

    useEffect(() => {
        async function getChallengeData() {

            const docRef = doc(db, "Challenges", challengeId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data()
                setChallengeData(data);
            }
        }

        getChallengeData()
    }, [challengeId])


    if (!challengeData) {
        return <div>Loading</div>;
    }
    return (
        <section className="challenge details-side-container">
            <div className="overview">
                <h1 className="details__title--primary">Challenge Details</h1>
                <p className="overview__overview">
                    {challengeData.detailedProblem.description}
                </p>


                <div className="details__section">
                    <h2 className="details__title">Constraints</h2>
                    <ul className="objectives__list">
                        {challengeData.detailedProblem.constraints.map(
                            (constraint, index) => {
                                return (
                                    <li className="objectives__item" key={index}>
                                        {constraint}
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>

                <div className="details__section">
                    <h2 className="details__title">Examples</h2>
                    <ul className="examples__list">
                        {challengeData.detailedProblem.examples.map(
                            (example, index) => {
                                return (
                                    <code className="examples__item" key={index}>
                                        Input: {example.input} <br /> Output: {example.output}
                                    </code>
                                );
                            }
                        )}
                    </ul>
                </div>

                <div className="details__section">
                    <h2 className="details__title">Solution Approach</h2>
                    <ul className="solutions__list">
                        {challengeData.detailedProblem.solutionApproach.map(
                            (example, index) => {
                                return (
                                    <li className="solutions__item" key={index}>
                                        {example}
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>

                
            </div>
        </section>
    );
}