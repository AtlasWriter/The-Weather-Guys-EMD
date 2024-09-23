import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ShelterForm = () => {
  const [shelter, setShelter] = useState({
    name: '',
    address: '',
    phone: '',
    isGreenville: false,
    isSpartanburg: false,
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const editMode = !!id;

  useEffect(() => {
    if (editMode) {
      axios.get(`http://localhost:5000/shelters/${id}`)
        .then(response => {
          setShelter(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the shelter!", error);
        });
    }
  }, [id, editMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setShelter({ ...shelter, [name]: checked });
    } else {
      setShelter({ ...shelter, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      axios.put(`http://localhost:5000/shelters/${id}`, shelter)
        .then(() => {
          navigate('/shelters');
        })
        .catch(error => {
          console.error("There was an error updating the shelter!", error);
        });
    } else {
      axios.post('http://localhost:5000/shelters', shelter)
        .then(() => {
          navigate('/shelters');
        })
        .catch(error => {
          console.error("There was an error creating the shelter!", error);
        });
    }
  };

  return (
    <div>
      <h2>{editMode ? 'Edit' : 'New'} Shelter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={shelter.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={shelter.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={shelter.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="isGreenville"
            checked={shelter.isGreenville}
            onChange={handleChange}
          />
          <label className="form-check-label">Is Greenville</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="isSpartanburg"
            checked={shelter.isSpartanburg}
            onChange={handleChange}
          />
          <label className="form-check-label">Is Spartanburg</label>
        </div>
        <button type="submit" className="btn btn-primary">
          {editMode ? 'Update' : 'Create'} Shelter
        </button>
      </form>
    </div>
  );
};

export default ShelterForm;
