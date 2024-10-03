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

  const fetchDataAndUpdateState = async () => {
    setError(null);
    try {
      const result = await readData(collectionName);
      setData(result);
    } catch (error) {
      setError("Error fetching data");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataAndUpdateState();
  }, []);

  const handleCreate = async () => {
    setError(null);
    try {
      const newData = { name: "New Item", description: "Description" };
      await createData(collectionName, newData);
      fetchDataAndUpdateState();
    } catch (error) {
      setError("Error creating data");
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {
    setError(null);
    try {
      const updatedData = {
        name: "Updated Item",
        description: "Updated Description",
      };
      await updateData(collectionName, id, updatedData);
      fetchDataAndUpdateState();
    } catch (error) {
      setError("Error updating data");
      console.error(error);
    }
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
        data.map((item) => (
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
        ))
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default BackEndTest;
