import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShelterList = () => {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    loadShelters();
  }, []);

  const loadShelters = async () => {
    const result = await axios.get('http://localhost:5000/shelters');
    setShelters(result.data);
  };

  const deleteShelter = async (id) => {
    await axios.delete(`http://localhost:5000/shelters/${id}`);
    loadShelters();
  };

  return (
    <div className="py-4">
      <h2>Shelters</h2>
      <Link className="btn btn-success" to="/shelters/new">Add New Shelter</Link>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Greenville</th>
            <th>Spartanburg</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shelters.map((shelter) => (
            <tr key={shelter.id}>
              <td>{shelter.id}</td>
              <td>{shelter.name}</td>
              <td>{shelter.address}</td>
              <td>{shelter.phone}</td>
              <td>{shelter.isGreenville ? 'Yes' : 'No'}</td>
              <td>{shelter.isSpartanburg ? 'Yes' : 'No'}</td>
              <td>
                <Link className="btn btn-primary" to={`/shelters/edit/${shelter.id}`}>
                  Edit
                </Link>
                <button className="btn btn-danger ml-2" onClick={() => deleteShelter(shelter.id)}>
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

export default ShelterList;
