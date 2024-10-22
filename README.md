# Artech Digital Assignment

## Overview

This project is a web application that consists of a **React frontend** and a **FastAPI backend**. The backend serves data through a `/projects` endpoint, and the frontend displays projects using the provided API. Users can explore the listed projects and see detailed views for each.

---

## Prerequisites

To run this project locally, you’ll need the following:

- **Python 3.12+** (for the backend)
- **Node.js 20+** (for the frontend)
- **FastAPI** framework
- **npm** package manager
- **pip** (Python package installer)
  
---

## How to Clone the Repository

1. Open your terminal or command prompt.
2. Clone the repository using the following command:

   ```bash
   git clone git@github.com:dukeofhazardz/artech-digital.git
   ```

3. Navigate to the project folder:

   ```bash
   cd artech-digital
   ```

---

## Backend (FastAPI)

### 1. Install Backend Dependencies

Navigate to the backend directory (if it's structured separately) and install the required Python dependencies:

```bash
cd portfolio-backend
pip install -r requirements.txt
```

### 2. Run the Backend

To start the backend server using the provided `start.sh` script:

1. First, make sure the script has execution permissions. Run the following command:

   ```bash
   chmod +x start.sh
   ```

2. Run the script to start the backend server:

   ```bash
   ./start.sh
   ```

This will start the **FastAPI** server on `http://localhost:8000`.

You can test the `/projects` endpoint by visiting `http://localhost:8000/projects` in your browser or using an API testing tool like **Postman**.

---

## Frontend (React)

### 1. Install Frontend Dependencies

Navigate to the frontend directory and install the dependencies using **npm**:

```bash
cd portfolio-frontend
npm install
```

### 2. Start the Frontend

Once the dependencies are installed, start the development server:

```bash
npm start
```

This will start the frontend server on `http://localhost:3000`.

---

## Directory Structure

Here’s an overview of the key directories and files in the project:

```
/artech-digital
│
├── portfolio-backend/
│   ├── main.py                  # FastAPI app and route definitions
│   ├── db.py                    # Project data definition
│   ├── requirements.txt         # Python dependencies
│   └── start.sh                 # Shell script to run the FastAPI server
│
├── portfolio-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── App.js               # Main application file
│   │   └── index.js             # Entry point for the React app
│   └── package.json             # npm dependencies
│
└── README.md                    # Project documentation
```

---

## Available Scripts

### Backend

- **`./start.sh`**: Starts the FastAPI backend server.
- **`pip install -r requirements.txt`**: Installs backend dependencies from `requirements.txt`.

### Frontend

- **`npm start`**: Starts the React frontend in development mode.
- **`npm run build`**: Builds the React app for production.

---

## Testing

- **FastAPI** comes with an interactive API documentation at `http://localhost:8000/docs`.
- Ensure the backend API is running before accessing the frontend to view projects.

---

## Additional Notes

- The frontend connects to the backend via the API endpoint `http://localhost:8000/projects`.
- Make sure both backend and frontend servers are running simultaneously for the full application functionality.
