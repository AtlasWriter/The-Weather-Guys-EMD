import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import StormUpdateList from './components/StormUpdateList';
import StormUpdateForm from './components/StormUpdateForm';
import StormReportList from './components/StormReportList'; 
import StormReportForm from './components/StormReportForm'; 
import ShelterList from './components/ShelterList';
import ShelterForm from './components/ShelterForm';
import SchoolClosingList from './components/SchoolClosingList';
import SchoolClosingForm from './components/SchoolClosingForm';
import PowerOutageList from './components/PowerOutageList';
import PowerOutageForm from './components/PowerOutageForm';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/storm-updates" element={<StormUpdateList />} />
            <Route path="/storm-updates/new" element={<StormUpdateForm />} />
            <Route path="/storm-updates/edit/:id" element={<StormUpdateForm />} />
            <Route path="/storm-reports" element={<StormReportList />} /> 
            <Route path="/storm-reports/new" element={<StormReportForm />} /> 
            <Route path="/storm-reports/edit/:id" element={<StormReportForm />} /> 
            <Route path="/shelters" element={<ShelterList />} />
            <Route path="/shelters/new" element={<ShelterForm />} />
            <Route path="/shelters/edit/:id" element={<ShelterForm />} />
            <Route path="/school-closings" element={<SchoolClosingList />} />
            <Route path="/school-closings/new" element={<SchoolClosingForm />} />
            <Route path="/school-closings/edit/:id" element={<SchoolClosingForm />} />
            <Route path="/power-outages" element={<PowerOutageList />} />
            <Route path="/power-outages/new" element={<PowerOutageForm />} />
            <Route path="/power-outages/edit/:id" element={<PowerOutageForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
