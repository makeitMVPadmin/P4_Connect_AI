// // src/utils/Functions/openaiFunctions.js
// import { OpenAI } from "openai";
// import openaiConfig from "../../config/openaiConfig";

// // Initialize OpenAI client
// const openai = new OpenAI({
//   apiKey: openaiConfig.apiKey,
//   dangerouslyAllowBrowser: true,
// });

// const schema = {
//   type: "object",
//   properties: {
//     goals: {
//       type: "array",
//       description: "List of 3 goals, each with 4 subtasks",
//       items: {
//         type: "object",
//         properties: {
//           goal: {
//             type: "string",
//             description: "The main goal to be achieved",
//           },
//           subtasks: {
//             type: "array",
//             description: "List of 4 subtasks to achieve the goal",
//             items: {
//               type: "string",
//             },
//           },
//         },
//         required: ["goal", "subtasks"],
//       },
//       minItems: 3,
//       maxItems: 3,
//     },
//   },
//   required: ["goals"],
// };

// const callOpenAiApi = async (userA, userB, project) => {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are a matching AI. One user gets matched with another user to aid in a project and hold each other accountable. Your goal is to create 3 goals for the user with 4 sub-tasks.",
//         },
//         {
//           role: "user",
//           content: `${userA.firstName} is working on a project which ${project}. ${userA.firstName} needed help so a matching algorithm matched ${userA.firstName} to ${userB.firstName}. ${userA.firstName} is proficient in ${userA.skills} and ${userB.firstName} is proficient in ${userB.skills}. Using this information can you create 3 detailed goals for ${userA.firstName} to collaboratively work with ${userB.firstName} in a step-by-step format. Use bullet point notation and be as concise as possible.`,
//         },
//       ],
//       functions: [{ name: "get_goal_data", parameters: schema }],
//       function_call: { name: "get_goal_data" },
//       temperature: 0.5,
//     });

//     const data = JSON.parse(
//       response.choices[0].message.function_call.arguments
//     );

//     return data;
//   } catch (error) {
//     console.error("Error calling OpenAI API:", error);
//     throw error;
//   }
// };

// export { callOpenAiApi };
