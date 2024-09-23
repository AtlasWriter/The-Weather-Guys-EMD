import React from 'react';

const Home = () => {
  return (
    <div className="container mt-4">
      <h1>Welcome to the Weather Guys Dashboard</h1>
      <p>This is your central hub for managing weather updates, storm reports, shelters, school closings, and power outages in the region.</p>
      <p>Use the navigation links above to access different sections of the dashboard.</p>
      <div className="mt-5">
        <img
          src="https://hudsonvalleyweather.com/wp-content/uploads/2024/01/958cb85b-cf8b-49d6-9da4-ce506ee5bbe4.jpg"
          alt="Weather"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Home;
