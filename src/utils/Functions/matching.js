//retrieving users:
import { getAllUserAnswers } from "./functions";

// Define weighted questions and their weights
const weightedQuestions = new Map([
    ["001", 1.0],
    ["002", 1.0],
    ["003", 0.5],
    ["004", 1.0],
    ["005", 0.5],
    ["006", 1.0],
    ["007", 0.5],
    ["008", 1.0],
    ["009", 0.5],
    ["010", 0.5],
    ["011", 0.5]
]);

function parseAnswers(answers) {
    return answers.map(answer => {
        const id = answer.slice(0, 3);
        const value = answer.slice(3);
        return { id, value };
    });
}

function weightedJaccardSimilarity(X, Y) {
    const mapX = new Map(parseAnswers(X).map(({ id, value }) => [id, value]));
    const mapY = new Map(parseAnswers(Y).map(({ id, value }) => [id, value]));

    // Compute weighted intersection
    let weightedIntersection = 0;
    mapX.forEach((valueX, id) => {
        if (mapY.has(id)) {
            const valueY = mapY.get(id);
            if (valueX === valueY) {
                const weight = weightedQuestions.get(id) || 0; // Use weight if it's in the weighted questions map
                weightedIntersection += weight;
            }
        }
    });

    // Compute weighted union
    let weightedUnion = 0;
    const allKeys = new Set([...mapX.keys(), ...mapY.keys()]);
    allKeys.forEach(id => {
        const weight = weightedQuestions.get(id) || 0;
        weightedUnion += weight;
    });

    return weightedIntersection / weightedUnion;
}

export async function findBestMatch(newUser) {

    try {
        let bestMatch = null;
        let highestSimilarity = 0;
        const usersForMatching = await getAllUserAnswers();

        usersForMatching.forEach(user => {
            if (user.user_id !== newUser.user_id) {
                const similarity = weightedJaccardSimilarity(newUser.answers, user.answers);
                if (similarity > highestSimilarity) {
                    highestSimilarity = similarity;
                    bestMatch = user;
                }
            }
        });

        return { bestMatch, highestSimilarity };

    } catch (error) {
        console.error("Error fetching user answers: ", error);
    }

}

