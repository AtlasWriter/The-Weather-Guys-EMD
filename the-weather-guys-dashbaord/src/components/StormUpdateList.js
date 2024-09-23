import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StormUpdateList = () => {
  const [stormUpdates, setStormUpdates] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/storm-updates')
      .then(response => {
        setStormUpdates(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the storm updates!", error);
      });
  }, []);

  const deleteStormUpdate = (id) => {
    axios.delete(`http://localhost:5000/storm-updates/${id}`)
      .then(response => {
        setStormUpdates(stormUpdates.filter(stormUpdate => stormUpdate.id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the storm update!", error);
      });
  };

  return (
    <div>
      <h2>Storm Updates</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Storm Name</th>
            <th>Storm Position</th>
            <th>Storm Track</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stormUpdates.map(stormUpdate => (
            <tr key={stormUpdate.id}>
              <td>{stormUpdate.id}</td>
              <td>{stormUpdate.stromName}</td>
              <td>{stormUpdate.stormPosition}</td>
              <td>{stormUpdate.stormTrack}</td>
              <td>
                <Link to={`/storm-updates/edit/${stormUpdate.id}`} className="btn btn-primary">Edit</Link>
                <button className="btn btn-danger ml-2" onClick={() => deleteStormUpdate(stormUpdate.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StormUpdateList;
