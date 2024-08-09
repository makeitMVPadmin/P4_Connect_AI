// src/components/functions/functions.js
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Create
export const createData = async (collectionName, data) => {
  try {
    console.log("creating data from" + collectionName);
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

// Read
export const readData = async (collectionName) => {
  try {
    console.log("reading data from" + collectionName);
    const querySnapshot = await getDocs(collection(db, collectionName));
    const dataList = [];
    querySnapshot.forEach((doc) => {
      dataList.push({ id: doc.id, ...doc.data() });
    });
    return dataList;
  } catch (e) {
    console.error("Error reading documents: ", e);
    throw e;
  }
};

// Update
export const updateData = async (collectionName, id, newData) => {
  try {
    console.log("updating data from" + collectionName);
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, newData);
    return true;
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e;
  }
};

// Delete
export const deleteData = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return true;
  } catch (e) {
    console.error("Error deleting document: ", e);
    throw e;
  }
};

//Get all questions
export const getAllQuestions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "questions"));
    const dataList = [];
    querySnapshot.forEach((doc) => {
      dataList.push({ id: doc.id, ...doc.data() });
    });
    return dataList;
  } catch (e) {
    console.error("Error reading documents: ", e);
    throw e;
  }
};

//Get all UserAnswers
export const getAllUserAnswers = throttle(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "UserAnswers"));
    const dataList = [];
    querySnapshot.forEach((doc) => {
      dataList.push({ id: doc.id, ...doc.data() });
    });
    return dataList;
  } catch (e) {
    console.error("Error reading documents: ", e);
    throw e;
  }
}, 1000);

export const readData2 = (collectionName) => {
  throttle(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const dataList = [];
      querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() });
      });
      return dataList;
    } catch (e) {
      console.error("Error reading documents: ", e);
      throw e;
    }
  }, 1000);
};
