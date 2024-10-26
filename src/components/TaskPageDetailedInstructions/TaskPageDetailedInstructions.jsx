import "./TaskPageDetailedInstructions.scss";
import { db } from "../../firebase";
import { useEffect, useState, useRef } from "react";
import { getDoc, doc } from "firebase/firestore";
import closeIcon from "../../assets/icons/close_icon.svg"
import Button from "../Button/Button";

export default function TaskPageDetailedInstructions({ id }) {

    const challengeId = id

    const [challengeData, setChallengeData] = useState(null);

    const modalRef = useRef()

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

    function toggleDetailsModal() {
        //get the reference

        //change its style
        if (modalRef.current.style.display === "none") {
            modalRef.current.style.display = "flex"
        }
        else {
            modalRef.current.style.display = "none"
        }
    }


    if (!challengeData) {
        return <div>Loading</div>;
    }
    return (
        <>
            <Button className="challenge-details-button" eventListener={toggleDetailsModal} color="dark-blue">Challenge Details</Button>
            <section className="details-modal" ref={modalRef}>
                <div className="details-modal__overview">
                    <img src={closeIcon} alt="close Icon" className="details-modal__close-icon" onClick={toggleDetailsModal}/>
                    <>
                        <h1 className="overview__title">{challengeData.task}</h1>
                        <p className="">
                            {challengeData.detailedProblem.description}
                        </p>
                    </>


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
        </>
    );
}