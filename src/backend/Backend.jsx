import React, { useState, useEffect } from "react";
import { COLLECTIONS } from "../constants.js";
import {
  createData,
  readData,
  updateData,
  deleteData,
} from "../utils/Functions/functions";

const BackEndTest = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const collectionName = COLLECTIONS.USERS;

  const fetchDataAndUpdateState = async () => {
    const result = await readData(collectionName);
    setData(result);
  };

  useEffect(() => {
    fetchDataAndUpdateState();
  }, []);

  const handleCreate = async () => {
    const newData = { name: "New Item", description: "Description" };
    await createData(collectionName, newData);
    setData((prevData) => [...prevData, newData]);
  };

  const handleUpdate = async (id) => {
    const updatedData = {
      name: "Updated Item",
      description: "Updated Description",
    };
    await updateData(collectionName, id, updatedData);
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? updatedData : item))
    );
  };

  const handleDelete = async (id) => {
    setError(null);
    try {
      await deleteData(collectionName, id);
      fetchDataAndUpdateState();
    } catch (error) {
      setError("Error deleting data");
      console.error(error);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <button type="button" onClick={handleCreate}>
        Create
      </button>
      {data.length > 0 ? (
        data.map(({ id, firstName, description }) => (
          <div key={id}>
            <h2>{firstName}</h2>
            <p>{description}</p>
            <button type="button" onClick={() => handleUpdate(id)}>
              Update
            </button>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default BackEndTest;
