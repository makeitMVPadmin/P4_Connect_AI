// src/components/SomeComponent.js
import React, { useState, useEffect } from "react";
import {
  createData,
  readData,
  updateData,
  deleteData,
} from "../utils/Functions/functions";

const BackEndTest = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const collectionName = "Users";

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const result = await readData(collectionName);
        setData(result);
        console.log(result);
      } catch (error) {
        setError("Error fetching data");
        console.error(error);
      }
    };
    fetchData();
  }, []);
  if (data.length > 0) {
    console.log(data);
  }

  const handleCreate = async () => {
    setError(null);
    try {
      const newData = { name: "New Item", description: "Description" };
      await createData(collectionName, newData);
    } catch (error) {
      setError("Error creating data");
      console.error(error);
    }
    // Refresh the data
    const updatedData = await readData(collectionName);
    setData(updatedData);
  };

  const handleUpdate = async (id) => {
    setError(null);
    try {
      const updatedData = {
        name: "Updated Item",
        description: "Updated Description",
      };
      await updateData(collectionName, id, updatedData);
    } catch (error) {
      setError("Error updating data");
      console.error(error);
    }
    // Refresh the data
    const updatedDataList = await readData(collectionName);
    setData(updatedDataList);
  };

  const handleDelete = async (id) => {
    setError(null);
    try {
      await deleteData(collectionName, id);
    } catch (error) {
      setError("Error deleting data");
      console.error(error);
    }
    // Refresh the data
    const updatedDataList = await readData(collectionName);
    setData(updatedDataList);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <button type="button" onClick={handleCreate}>
        Create
      </button>
      {console.log(data)}
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.firstName}</h2>
          <p>{item.description}</p>
          <button type="button" onClick={() => handleUpdate(item.id)}>
            Update
          </button>
          <button type="button" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BackEndTest;
