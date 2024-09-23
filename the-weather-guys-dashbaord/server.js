const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'thewxguys_emergencydashboard'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Get all storm updates
app.get('/storm-updates', (req, res) => {
  const query = 'SELECT * FROM stormupdate';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get storm update by ID
app.get('/storm-updates/:id', (req, res) => {
  const query = 'SELECT * FROM stormupdate WHERE id = ?';
  db.query(query, [req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// Create new storm update
app.post('/storm-updates', (req, res) => {
  const query = 'INSERT INTO stormupdate SET ?';
  db.query(query, req.body, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...req.body });
  });
});

// Update storm update
app.put('/storm-updates/:id', (req, res) => {
  const query = 'UPDATE stormupdate SET ? WHERE id = ?';
  db.query(query, [req.body, req.params.id], (err, result) => {
    if (err) throw err;
    res.json(req.body);
  });
});

// Delete storm update
app.delete('/storm-updates/:id', (req, res) => {
  const query = 'DELETE FROM stormupdate WHERE id = ?';
  db.query(query, [req.params.id], (err, result) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});


// Get all storm reports
app.get('/storm-reports', (req, res) => {
    const query = 'SELECT * FROM stromreports';
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.json(results);
    });
});
  
  // Get a single storm report by ID
app.get('/storm-reports/:id', (req, res) => {
    const query = 'SELECT * FROM stromreports WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result[0]);
    });
});
  
  // Create a new storm report
  app.post('/storm-reports', (req, res) => {
    const query = 'INSERT INTO stromreports (event, description, date, street) VALUES (?, ?, ?, ?)';
    const values = [req.body.event, req.body.description, req.body.date, req.body.street];
    db.query(query, values, (err, result) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json(result);
    });
  });
  
  // Update a storm report
  // Update a storm report
  app.put('/storm-reports/:id', (req, res) => {
    const query = 'UPDATE stromreports SET event = ?, description = ?, date = ?, street = ?, isGreenville = ?, isSpartanburg = ? WHERE id = ?';
    const values = [req.body.event, req.body.description, req.body.date, req.body.street, req.body.isGreenville, req.body.isSpartanburg, req.params.id];
    db.query(query, values, (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
  });
  
  
  // Delete a storm report
app.delete('/storm-reports/:id', (req, res) => {
    const query = 'DELETE FROM stromreports WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
});

// Get all shelters
app.get('/shelters', (req, res) => {
    const query = 'SELECT * FROM shelters';
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.json(results);
    });
});

// Get a single shelter by ID
app.get('/shelters/:id', (req, res) => {
    const query = 'SELECT * FROM shelters WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result[0]);
    });
});

// Create a new shelter
app.post('/shelters', (req, res) => {
    const query = 'INSERT INTO shelters (name, address, phone, isGreenville, isSpartanburg) VALUES (?, ?, ?, ?, ?)';
    const values = [req.body.name, req.body.address, req.body.phone, req.body.isGreenville, req.body.isSpartanburg];
    db.query(query, values, (err, result) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json(result);
    });
});

// Update a shelter
app.put('/shelters/:id', (req, res) => {
    const query = 'UPDATE shelters SET name = ?, address = ?, phone = ?, isGreenville = ?, isSpartanburg = ? WHERE id = ?';
    const values = [req.body.name, req.body.address, req.body.phone, req.body.isGreenville, req.body.isSpartanburg, req.params.id];
    db.query(query, values, (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
});

// Delete a shelter
app.delete('/shelters/:id', (req, res) => {
    const query = 'DELETE FROM shelters WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
});

// Get all school closings
app.get('/school-closings', (req, res) => {
    const query = 'SELECT * FROM schoolclosings';
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.json(results);
    });
});

// Get a single school closing by ID
app.get('/school-closings/:id', (req, res) => {
    const query = 'SELECT * FROM schoolclosings WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result[0]);
    });
});

// Create a new school closing
app.post('/school-closings', (req, res) => {
    const query = 'INSERT INTO schoolclosings (name, status, isGreenville, isSpartanburg) VALUES (?, ?, ?, ?)';
    const values = [req.body.name, req.body.status, req.body.isGreenville, req.body.isSpartanburg];
    db.query(query, values, (err, result) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json(result);
    });
});

// Update a school closing
app.put('/school-closings/:id', (req, res) => {
    const query = 'UPDATE schoolclosings SET name = ?, status = ?, isGreenville = ?, isSpartanburg = ? WHERE id = ?';
    const values = [req.body.name, req.body.status, req.body.isGreenville, req.body.isSpartanburg, req.params.id];
    db.query(query, values, (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
});

// Delete a school closing
app.delete('/school-closings/:id', (req, res) => {
    const query = 'DELETE FROM schoolclosings WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
});

// Get all power outages
app.get('/power-outages', (req, res) => {
    const query = 'SELECT * FROM poweroutages';
    db.query(query, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.json(results);
    });
});

// Get a single power outage by ID
app.get('/power-outages/:id', (req, res) => {
    const query = 'SELECT * FROM poweroutages WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result[0]);
    });
});

// Create a new power outage
app.post('/power-outages', (req, res) => {
    const query = 'INSERT INTO poweroutages (location, affecting, isGreenville, isSpartanburg) VALUES (?, ?, ?, ?)';
    const values = [req.body.location, req.body.affecting, req.body.isGreenville, req.body.isSpartanburg];
    db.query(query, values, (err, result) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json(result);
    });
});

// Update a power outage
app.put('/power-outages/:id', (req, res) => {
    const query = 'UPDATE poweroutages SET location = ?, affecting = ?, isGreenville = ?, isSpartanburg = ? WHERE id = ?';
    const values = [req.body.location, req.body.affecting, req.body.isGreenville, req.body.isSpartanburg, req.params.id];
    db.query(query, values, (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
});

// Delete a power outage
app.delete('/power-outages/:id', (req, res) => {
    const query = 'DELETE FROM poweroutages WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});