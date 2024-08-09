// src/components/SomeComponent.js
import React, { useState, useEffect } from 'react';
import { createData, readData, updateData, deleteData } from '../../utils/Functions/functions';

const BackEndTest = () => {
  const [data, setData] = useState([]);
  const collectionName = 'Users';

  useEffect(() => {
    const fetchData = async () => {
      const result = await readData(collectionName);
      setData(result);
    };
    fetchData();
  }, []);

  const handleCreate = async () => {
    const newData = { name: 'New Item', description: 'Description' };
    await createData(collectionName, newData);
    // Refresh the data
    const updatedData = await readData(collectionName);
    setData(updatedData);
  };

  const handleUpdate = async (id) => {
    const updatedData = { name: 'Updated Item', description: 'Updated Description' };
    await updateData(collectionName, id, updatedData);
    // Refresh the data
    const updatedDataList = await readData(collectionName);
    setData(updatedDataList);
  };

  const handleDelete = async (id) => {
    await deleteData(collectionName, id);
    // Refresh the data
    const updatedDataList = await readData(collectionName);
    setData(updatedDataList);
  };

  return (
    <div>
      <button onClick={handleCreate}>Create</button>
      {console.log(data)}
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.firstName}</h2>
          <p>{item.description}</p>
          <button onClick={() => handleUpdate(item.id)}>Update</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BackEndTest;
