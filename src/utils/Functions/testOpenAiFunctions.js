// src/utils/Functions/testOpenAiFunctions.js
const { callOpenAiApi } = require("./openaiFunctions");

// Define the test case
const runTest = async () => {
  const userA = {
    firstName: "Alice",
    skills: "JavaScript, React",
  };
  const userB = {
    firstName: "Bob",
    skills: "Node.js, Express",
  };
  const project = "Build a web application";

  try {
    console.log("Testing callOpenAiApi...");
    const result = await callOpenAiApi(userA, userB, project);
    // Use console.dir to print nested objects or arrays
    console.dir(result, { depth: null });
  } catch (error) {
    console.error("Test failed:", error);
  }
};

// Run the test
runTest();
