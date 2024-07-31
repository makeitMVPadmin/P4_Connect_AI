/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.addGoal = functions.https.onRequest(async (req, res) => {
  try {
    // Extract the goals from the request body
    const { goals, user } = req.body;

    // Check if the goals is provided
    if (!goals) {
      res.status(400).send("Goal is required");
      return;
    }
    if (!user) {
      res.status(400).send("User is required");
      return;
    }

    // Create a new goals object with the current timestamp
    const newGoal = {
      goals,
      userID: user.id,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Add the new goals to the 'goals' collection in Firestore
    await db.collection("goals").add(newGoal);

    // Send a success response
    res.status(200).send("Goal added successfully");
  } catch (error) {
    // Handle any errors that occur
    console.error("Error adding goals:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
