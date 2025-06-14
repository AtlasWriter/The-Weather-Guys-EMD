<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>The Weather Guys EMD</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" />
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      background: #f5f9ff;
      margin: 0;
      padding: 0;
    }

    header {
      background: #023e8a;
      color: white;
      padding: 1.5rem 2rem;
      text-align: center;
    }

    h1 {
      margin-bottom: 0.5rem;
    }

    .container {
      max-width: 1000px;
      margin: 2rem auto;
      padding: 0 1rem;
    }

    .section {
      margin-bottom: 2rem;
    }

    .tech-logos img {
      height: 50px;
      margin: 0.5rem;
      vertical-align: middle;
    }

    pre {
      background: #e6f0ff;
      padding: 1rem;
      border-left: 4px solid #0077b6;
      overflow-x: auto;
    }

    footer {
      background: #03045e;
      color: white;
      text-align: center;
      padding: 1rem;
    }

    .legend {
      background: #caf0f8;
      padding: 1rem;
      border-left: 4px solid #0077b6;
    }

    a {
      color: #0077b6;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <header>
    <h1>The Weather Guys: Emergency Management Dashboard</h1>
    <p>Developed by Daniel Rumfelt · CST 452 – Grand Canyon University</p>
  </header>

  <div class="container">

    <div class="section">
      <h2>🌩️ Project Overview</h2>
      <p>This Angular-based web application displays live National Weather Service alerts, storm reports, school closings, shelter locations, and more for Western North Carolina and South Carolina. It integrates a local GeoJSON map with real-time NOAA API data to support emergency decision-making during severe weather events.</p>
    </div>

    <div class="section">
      <h2>⚙️ Technologies Used</h2>
      <div class="tech-logos">
        <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" title="Angular">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/D3.js_logo.svg" alt="D3.js" title="D3.js" style="height:40px;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Bootstrap_logo.svg" alt="Bootstrap" title="Bootstrap" style="height:40px;">
      </div>
    </div>

    <div class="section">
      <h2>🚀 How to Start</h2>
      <pre><code>
# Clone the project
git clone https://github.com/yourusername/weather-guys-dashboard.git
cd weather-guys-dashboard

# Install dependencies
npm install

# Run the app
ng serve --open
      </code></pre>
      <p>App will launch at <a href="http://localhost:4200" target="_blank">http://localhost:4200</a></p>
    </div>

    <div class="section">
      <h2>🗺️ Features</h2>
      <ul>
        <li>Live weather alerts from NOAA / NWS</li>
        <li>Interactive GeoJSON map of NC & SC counties</li>
        <li>Dynamic county-level coloring by alert type</li>
        <li>Legend display for weather severity</li>
        <li>Tooltips on click with alert details</li>
        <li>Sections for Storm Reports, Closings, Shelters</li>
      </ul>
    </div>

    <div class="section">
      <h2>🧭 Map Legend</h2>
      <div class="legend">
        <ul>
          <li><strong>Red</strong>: Tornado Warning</li>
          <li><strong>Orange</strong>: Severe Thunderstorm Warning</li>
          <li><strong>Dark Red</strong>: Flood Warning</li>
          <li><strong>Lime Green</strong>: Flood Advisory</li>
          <li><strong>Light Green</strong>: Flood Watch</li>
          <li><strong>Blue</strong>: No Active Alert</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>📦 License</h2>
      <p>This project is built for educational purposes under Grand Canyon University's CST 452 Capstone Project guidelines. NOAA/NWS APIs are open data sources under public use policies.</p>
    </div>

  </div>

  <footer>
    <p>© 2025 The Weather Guys | NOAA/NWS Data | Built by WxDaniel</p>
  </footer>
</body>
</html>
