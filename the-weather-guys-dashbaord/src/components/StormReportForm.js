import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const StormReportForm = () => {
  const [stormReport, setStormReport] = useState({
    event: '',
    description: '',
    date: '',
    street: '',
    isGreenville: false,
    isSpartanburg: false,
  });
  
  const navigate = useNavigate();
  const { id } = useParams(); // Getting the ID from URL params if in edit mode
  const editMode = !!id; // Check if it's edit mode

  // Fetch the storm report if we're in edit mode
  useEffect(() => {
    if (editMode) {
      axios.get(`http://localhost:5000/storm-reports/${id}`)
        .then(response => {
          setStormReport(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the storm report!", error);
        });
    }
  }, [id, editMode]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setStormReport({ ...stormReport, [name]: checked });
    } else {
      setStormReport({ ...stormReport, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update existing storm report
      axios.put(`http://localhost:5000/storm-reports/${id}`, stormReport)
        .then(response => {
          navigate('/storm-reports');
        })
        .catch(error => {
          console.error("There was an error updating the storm report!", error);
        });
    } else {
      // Create a new storm report
      axios.post('http://localhost:5000/storm-reports', stormReport)
        .then(response => {
          navigate('/storm-reports');
        })
        .catch(error => {
          console.error("There was an error creating the storm report!", error);
        });
    }
  };

  return (
    <div>
      <h2>{editMode ? 'Edit' : 'New'} Storm Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event</label>
          <input 
            type="text" 
            className="form-control" 
            name="event" 
            value={stormReport.event} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea 
            className="form-control" 
            name="description" 
            value={stormReport.description} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input 
            type="date" 
            className="form-control" 
            name="date" 
            value={stormReport.date} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Street</label>
          <input 
            type="text" 
            className="form-control" 
            name="street" 
            value={stormReport.street} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            name="isGreenville" 
            checked={stormReport.isGreenville} 
            onChange={handleChange} 
          />
          <label className="form-check-label">Is Greenville</label>
        </div>
        <div className="form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            name="isSpartanburg" 
            checked={stormReport.isSpartanburg} 
            onChange={handleChange} 
          />
          <label className="form-check-label">Is Spartanburg</label>
        </div>
        <button type="submit" className="btn btn-primary">
          {editMode ? 'Update' : 'Create'} Report
        </button>
      </form>
    </div>
  );
};

export default StormReportForm;
