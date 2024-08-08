import "./TestPage.scss";
import { useState, useEffect } from "react";
import { readData } from "../../utils/Functions/functions";

const TestPage = () => {
  const [data, setData] = useState([]);
  const collectionName = "Matches";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await readData(collectionName);
  //     setData(result);
  //   };
  //   fetchData();
  // }, []);

  console.log("Matches:");
  console.log(data);

  return (
    <>
      <p>open console log</p>
    </>
  );
};

export default TestPage;
