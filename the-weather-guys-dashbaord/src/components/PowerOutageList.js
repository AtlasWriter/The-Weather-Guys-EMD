import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PowerOutageList = () => {
  const [powerOutages, setPowerOutages] = useState([]);

  useEffect(() => {
    loadPowerOutages();
  }, []);

  const loadPowerOutages = async () => {
    const result = await axios.get('http://localhost:5000/power-outages');
    setPowerOutages(result.data);
  };

  const deletePowerOutage = async (id) => {
    await axios.delete(`http://localhost:5000/power-outages/${id}`);
    loadPowerOutages();
  };

  return (
    <div className="py-4">
      <h2>Power Outages</h2>
      <Link className="btn btn-success" to="/power-outages/new">Add New Power Outage</Link>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Location</th>
            <th>Affecting</th>
            <th>Greenville</th>
            <th>Spartanburg</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {powerOutages.map((powerOutage) => (
            <tr key={powerOutage.id}>
              <td>{powerOutage.id}</td>
              <td>{powerOutage.location}</td>
              <td>{powerOutage.affecting}</td>
              <td>{powerOutage.isGreenville ? 'Yes' : 'No'}</td>
              <td>{powerOutage.isSpartanburg ? 'Yes' : 'No'}</td>
              <td>
                <Link className="btn btn-primary" to={`/power-outages/edit/${powerOutage.id}`}>
                  Edit
                </Link>
                <button className="btn btn-danger ml-2" onClick={() => deletePowerOutage(powerOutage.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PowerOutageList;
