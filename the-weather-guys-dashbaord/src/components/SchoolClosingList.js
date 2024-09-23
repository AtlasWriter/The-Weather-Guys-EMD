import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SchoolClosingList = () => {
  const [schoolClosings, setSchoolClosings] = useState([]);

  useEffect(() => {
    loadSchoolClosings();
  }, []);

  const loadSchoolClosings = async () => {
    const result = await axios.get('http://localhost:5000/school-closings');
    setSchoolClosings(result.data);
  };

  const deleteSchoolClosing = async (id) => {
    await axios.delete(`http://localhost:5000/school-closings/${id}`);
    loadSchoolClosings();
  };

  return (
    <div className="py-4">
      <h2>School Closings</h2>
      <Link className="btn btn-success" to="/school-closings/new">Add New School Closing</Link>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Greenville</th>
            <th>Spartanburg</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schoolClosings.map((schoolClosing) => (
            <tr key={schoolClosing.id}>
              <td>{schoolClosing.id}</td>
              <td>{schoolClosing.name}</td>
              <td>{schoolClosing.status}</td>
              <td>{schoolClosing.isGreenville ? 'Yes' : 'No'}</td>
              <td>{schoolClosing.isSpartanburg ? 'Yes' : 'No'}</td>
              <td>
                <Link className="btn btn-primary" to={`/school-closings/edit/${schoolClosing.id}`}>
                  Edit
                </Link>
                <button className="btn btn-danger ml-2" onClick={() => deleteSchoolClosing(schoolClosing.id)}>
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

export default SchoolClosingList;
