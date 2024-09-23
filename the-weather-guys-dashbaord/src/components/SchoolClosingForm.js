import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SchoolClosingForm = () => {
  const [schoolClosing, setSchoolClosing] = useState({
    name: '',
    status: '',
    isGreenville: false,
    isSpartanburg: false,
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const editMode = !!id;

  useEffect(() => {
    if (editMode) {
      axios.get(`http://localhost:5000/school-closings/${id}`)
        .then(response => {
          setSchoolClosing(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the school closing!", error);
        });
    }
  }, [id, editMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setSchoolClosing({ ...schoolClosing, [name]: checked });
    } else {
      setSchoolClosing({ ...schoolClosing, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      axios.put(`http://localhost:5000/school-closings/${id}`, schoolClosing)
        .then(() => {
          navigate('/school-closings');
        })
        .catch(error => {
          console.error("There was an error updating the school closing!", error);
        });
    } else {
      axios.post('http://localhost:5000/school-closings', schoolClosing)
        .then(() => {
          navigate('/school-closings');
        })
        .catch(error => {
          console.error("There was an error creating the school closing!", error);
        });
    }
  };

  return (
    <div>
      <h2>{editMode ? 'Edit' : 'New'} School Closing</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={schoolClosing.name} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <input 
            type="text" 
            className="form-control" 
            name="status" 
            value={schoolClosing.status} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="isGreenville"
            checked={schoolClosing.isGreenville}
            onChange={handleChange}
          />
          <label className="form-check-label">Is Greenville</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="isSpartanburg"
            checked={schoolClosing.isSpartanburg}
            onChange={handleChange}
          />
          <label className="form-check-label">Is Spartanburg</label>
        </div>
        <button type="submit" className="btn btn-primary">
          {editMode ? 'Update' : 'Create'} School Closing
        </button>
      </form>
    </div>
  );
};

export default SchoolClosingForm;
