import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const StormUpdateForm = () => {
  const [stormUpdate, setStormUpdate] = useState({
    stromName: '',
    stormPosition: '',
    stormTrack: '',
    stormImpact: '',
    stormOpnionForecast: '',
    stormUpdateDate: ''
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const editMode = !!id;

  useEffect(() => {
    if (editMode) {
      axios.get(`http://localhost:5000/storm-updates/${id}`)
        .then(response => {
          setStormUpdate(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the storm update!", error);
        });
    }
  }, [id, editMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStormUpdate({ ...stormUpdate, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      axios.put(`http://localhost:5000/storm-updates/${id}`, stormUpdate)
        .then(response => {
          navigate('/storm-updates');
        })
        .catch(error => {
          console.error("There was an error updating the storm update!", error);
        });
    } else {
      axios.post('http://localhost:5000/storm-updates', stormUpdate)
        .then(response => {
          navigate('/storm-updates');
        })
        .catch(error => {
          console.error("There was an error creating the storm update!", error);
        });
    }
  };

  return (
    <div>
      <h2>{editMode ? 'Edit' : 'New'} Storm Update</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Storm Name</label>
          <input type="text" className="form-control" name="stromName" value={stormUpdate.stromName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Storm Position</label>
          <input type="text" className="form-control" name="stormPosition" value={stormUpdate.stormPosition} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Storm Track</label>
          <input type="text" className="form-control" name="stormTrack" value={stormUpdate.stormTrack} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">{editMode ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default StormUpdateForm;
