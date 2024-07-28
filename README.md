## Table of Contents
1. Setup Instructions
2. SQL Script--(refer file setup.sql in backend)
3. Design Decisions

## Setup Instructions

### Prerequisites
- Node.js (v14.x or later)
- MySQL (v8.x or later)

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd <repository_directory>/backend
   
2. Install dependencies:
npm install

3.Set up environment variables:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpass
DB_NAME=auctionpe_db
JWT_SECRET_KEY=my-secret-key

4.SQL Script:
refer the "setup.sql" file given in backend.

5.Start the Server
npm start

### FrontEnd Setup

1.Navigate to the frontend directory:
cd ../frontend

2.Install dependencies:
npm install

3.Start the frontend development server:
npm start

### Design Decisions
1.Backend
server.js: The entry point for the backend server. Configures middleware, routes, and starts the server.
config/: Contains configuration files, such as database connection setup.
controllers/: Contains the business logic for handling requests (e.g., authentication, session management).
routes/: Defines the API routes and associates them with corresponding controller functions.
middleware/: Contains middleware functions for authentication and request validation.

2.Frontend
src/: Contains the main source code for the React application.
components/: Reusable UI components (e.g., Header, Table, Modal, Text, Input, Button).
pages/: Page-level components that correspond to different routes (e.g., UserDashboard).
utils/: Utility functions and constants (e.g., API configurations, token management).
App.js: Main application component that sets up routing.
index.js: Entry point for the React application.

