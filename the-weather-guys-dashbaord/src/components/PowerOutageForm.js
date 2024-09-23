import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PowerOutageForm = () => {
  const [powerOutage, setPowerOutage] = useState({
    location: '',
    affecting: '',
    isGreenville: false,
    isSpartanburg: false,
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const editMode = !!id;

  useEffect(() => {
    if (editMode) {
      axios.get(`http://localhost:5000/power-outages/${id}`)
        .then(response => {
          setPowerOutage(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the power outage!", error);
        });
    }
  }, [id, editMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setPowerOutage({ ...powerOutage, [name]: checked });
    } else {
      setPowerOutage({ ...powerOutage, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      axios.put(`http://localhost:5000/power-outages/${id}`, powerOutage)
        .then(() => {
          navigate('/power-outages');
        })
        .catch(error => {
          console.error("There was an error updating the power outage!", error);
        });
    } else {
      axios.post('http://localhost:5000/power-outages', powerOutage)
        .then(() => {
          navigate('/power-outages');
        })
        .catch(error => {
          console.error("There was an error creating the power outage!", error);
        });
    }
  };

  return (
    <div>
      <h2>{editMode ? 'Edit' : 'New'} Power Outage</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={powerOutage.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Affecting</label>
          <textarea
            className="form-control"
            name="affecting"
            value={powerOutage.affecting}
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="isGreenville"
            checked={powerOutage.isGreenville}
            onChange={handleChange}
          />
          <label className="form-check-label">Is Greenville</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="isSpartanburg"
            checked={powerOutage.isSpartanburg}
            onChange={handleChange}
          />
          <label className="form-check-label">Is Spartanburg</label>
        </div>
        <button type="submit" className="btn btn-primary">
          {editMode ? 'Update' : 'Create'} Power Outage
        </button>
      </form>
    </div>
  );
};

export default PowerOutageForm;
