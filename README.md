# The Weather Guys - Emergency Management Dashboard

The Weather Guys: Emergency Management Dashboard is an innovative application designed to provide comprehensive, real-time information for managing and responding to weather-related emergencies. This dashboard will be a critical tool for emergency responders, local authorities, and the general public, offering a centralized platform to access vital data such as local storm reports, school closings, power outages, road closures, storm status/tracks, storm shelters, webcams, and weather maps. With a robust search integrated into the application making reports easy to find. 

# Benefits and Opportunities
Real-time weather and disaster monitoring is one main advantage since it lets the general public and emergency responders get correct and timely reports on storms, power outages, road closures, and other important weather-related occurrences. This improves situational awareness, so facilitating proactive decision-making that might help to lower property damage and casualties. Between municipal governments, emergency services, and community groups, the dashboard provides simplified coordination and communication. Centralizing data on shelters, school closures, and efforts at power restoration helps to enable a more effective reaction to extreme weather.

Data-driven emergency management presents even another possibility since past storm data and trends can be examined to guide future readiness plans. Predictive analytics can improve resource allocation and forecasting, therefore enabling governments to provide aid where most needed. By allowing people to document local meteorological conditions, road impediments, or storm damage, the initiative also fosters public involvement and empowerment. Official reports can be complemented by crowdsourced data, therefore providing a more complete knowledge of disaster consequences.

Reduced inefficiencies of scattered communication and response systems helps governments and emergency management organizations save money. A well-integrated dashboard guarantees efficient allocation of resources and helps to minimize effort duplication. At last, the dashboard may be a teaching tool, raising public knowledge of severe storm readiness and supporting a resilient culture. Actionable knowledge and preparedness rules enable communities to more resist upcoming crises. By means of these advantages and possibilities, the Weather Guys EMD may transform emergency response operations, therefore saving lives and reducing the consequences of severe weather disasters.

# UML Design
<img width="975" height="541" alt="image" src="https://github.com/user-attachments/assets/858c00e1-8d0d-4a2a-8488-35a77b074a30" />

# Flowchart
<img width="962" height="590" alt="image" src="https://github.com/user-attachments/assets/fd63794f-01f9-461d-b917-3382bf9a094e" />

# API Endpoints
<img width="985" height="1010" alt="image" src="https://github.com/user-attachments/assets/bfd59413-c35e-4467-a9b5-4603e4798039" />

Fetching Real-Time Weather Updates (Backend - Node.js):

<img width="742" height="286" alt="image" src="https://github.com/user-attachments/assets/f44e9b59-b4b2-4201-8d2c-d5076388d65a" />

<img width="975" height="716" alt="image" src="https://github.com/user-attachments/assets/6798eb73-2662-4b29-b7e9-1ccfee044219" />

# ER Diagram
<img width="975" height="639" alt="image" src="https://github.com/user-attachments/assets/c32cf381-d774-4de3-bb1c-114da4275f0b" />

# Working Product:

<img width="985" height="593" alt="image" src="https://github.com/user-attachments/assets/7b4ded59-ef39-403e-8db3-0f1af36cab8a" />

<img width="975" height="472" alt="image" src="https://github.com/user-attachments/assets/c6f9d125-e84d-48d2-9688-1b5abda4c26c" />

# Sprint Log
<img width="975" height="510" alt="image" src="https://github.com/user-attachments/assets/e4b4109f-0b63-466e-a78f-c969cdb835eb" />

More Details:
The Weather Guys EMD is a web-based application developed using Angular (frontend) and Node.js/Express (backend) with MySQL as the database. The system integrates various services to process, store, and visualize real-time weather data.
Solution Architecture
Below is the high-level system architecture:
Frontend (Angular)
* User interface for real-time storm updates, maps, and alerts.
* Interactive components for submitting storm reports and searching shelters.
* Uses Bootstrap for UI design and Leaflet.js for interactive mapping.
Backend (Node.js + Express)
* RESTful APIs to fetch and update weather reports, storm data, and power outages.
* Handles user authentication and role-based access.
* Uses MySQL to store and manage storm reports, power outages, and historical data.
Database (MySQL)
* Stores user-submitted reports, weather events, and emergency response actions.
* Optimized queries for fast retrieval and historical analysis

## Installation

Before installing, make sure you have the following installed:

* Node.js (version 18.x or higher recommended)

* Angular CLI (version 15+)

* Git (to clone the repository)

* A code editor like VS Code

```bash
git clone https://github.com/your-username/weather-guys-dashboard.git
cd weather-guys-dashboard
```

## Usage

```python
weather-guys-dashboard/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── western-carolina-map/
│   │   │       ├── western-carolina-map.component.ts
│   │   │       ├── western-carolina-map.component.html
│   │   │       └── western-carolina-map.component.css
│   │   └── app.module.ts
│   ├── assets/
│   │   └── WesternCarolinaMapUp.geojson
│   │   └── map image.png
│   └── index.html
├── .gitignore
├── angular.json
├── package.json
└── README.md

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
