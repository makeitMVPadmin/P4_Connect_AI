// src/components/AiBackendTest.jsx
import React, { useState } from "react";
import { callOpenAiApi } from "../utils/Functions/openaiFunctions";

const AiBackendTest = () => {
  const [goals, setGoals] = useState(null);

  const handleFetchData = async () => {
    const userA = { firstName: "Alice", skills: ["JavaScript", "React"] };
    const userB = { firstName: "Bob", skills: ["Python", "Django"] };
    const project = "building a web application";

    try {
      const data = await callOpenAiApi(userA, userB, project);
      setGoals(data.goals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={handleFetchData}>Fetch Goals</button>
      {console.log(goals)}
      {goals && (
        <div>
          {goals.map((goal, index) => (
            <div key={index}>
              <h3>
                Goal {index + 1}: {goal.goal}
              </h3>
              <ul>
                {goal.subtasks.map((subtask, subIndex) => (
                  <li key={subIndex}>{subtask}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AiBackendTest;
