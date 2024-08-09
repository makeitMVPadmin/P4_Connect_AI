import "./TestPage.scss";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import {
  readData2,
  readData,
  getAllUserAnswers,
} from "../../utils/Functions/functions";

const TestPage = () => {
  const [data, setData] = useState([]);
  const collectionName = "Users";

  // const readData = async (collectionName) => {
  //   try {
  //     console.log("reading data from" + collectionName);
  //     const querySnapshot = await getDocs(collection(db, collectionName));
  //     const dataList = [];
  //     querySnapshot.forEach((doc) => {
  //       dataList.push({ id: doc.id, ...doc.data() });
  //     });
  //     return dataList;
  //   } catch (e) {
  //     console.error("Error reading documents: ", e);
  //     throw e;
  //   }
  // };

  const debouncedGetAllUserAnswers = debounce(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "UserAnswers"));
      const dataList = [];
      querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() });
      });
      setData(dataList);
    } catch (e) {
      console.error("Error reading documents: ", e);
      throw e;
    }
  }, 300); // Adjust delay (300ms) as needed
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  useEffect(() => {
    const fetchData = async () => {
      let result = await readData("Matches");
      setData(result);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <p>open console log</p>
    </>
  );
};

export default TestPage;
