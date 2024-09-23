import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StormReportList = () => {
  const [stormReports, setStormReports] = useState([]);

  useEffect(() => {
    loadStormReports();
  }, []);

  const loadStormReports = async () => {
    const result = await axios.get('http://localhost:5000/storm-reports');
    setStormReports(result.data);
  };

  const deleteStormReport = async (id) => {
    await axios.delete(`http://localhost:5000/storm-reports/${id}`);
    loadStormReports();
  };

  return (
    <div className="py-4">
      <h2>Storm Reports</h2>
      <Link className="btn btn-success" to="/storm-reports/new">Add New Storm Report</Link>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Event</th>
            <th>Description</th>
            <th>Date</th>
            <th>Street</th>
            <th>Greenville</th>
            <th>Spartanburg</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stormReports.map((stormReport) => (
            <tr key={stormReport.id}>
              <td>{stormReport.id}</td>
              <td>{stormReport.event}</td>
              <td>{stormReport.description}</td>
              <td>{stormReport.date}</td>
              <td>{stormReport.street}</td>
              <td>{stormReport.isGreenville ? 'Yes' : 'No'}</td>
              <td>{stormReport.isSpartanburg ? 'Yes' : 'No'}</td>
              <td>
                <Link className="btn btn-primary" to={`/storm-reports/edit/${stormReport.id}`}>
                  Edit
                </Link>
                <button className="btn btn-danger ml-2" onClick={() => deleteStormReport(stormReport.id)}>
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

export default StormReportList;
