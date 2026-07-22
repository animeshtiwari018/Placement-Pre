# 🚀 Backend Development: Core Basics with Express.js

Welcome to your first step into **Backend Development**! This guide is designed to take you from absolute scratch (knowing nothing about backend) to running your own local server, understanding requests and responses, and writing API routes.

---

## 🗺️ Understanding the Client-Server Architecture

Before writing any code, let's understand how the web works at a high level.

```
       ┌────────────────────────┐
       │         CLIENT         │ (Browser, Mobile App, or curl)
       │  (Makes a Request 🙋‍♂️)  │
       └───────────┬────────────┘
                   │
                   │  HTTP Request (GET /api/topics)
                   ▼
       ┌────────────────────────┐
       │         SERVER         │ (Our Node.js + Express App)
       │  (Processes Request ⚙️) │
       └───────────┬────────────┘
                   │
                   │  HTTP Response (JSON data, HTML, or Files)
                   ▼
       ┌────────────────────────┐
       │         CLIENT         │ (Receives & displays the result)
       └────────────────────────┘
```

### 🍔 The Restaurant Analogy
To make it super simple, think of a backend like a **Restaurant**:
1. **The Client (Customer)**: Sits at a table and looks at the menu.
2. **The Request (Order)**: The client tells the waiter (HTTP Request) what they want (e.g., "Bring me the cheese pizza").
3. **The Server (Kitchen)**: The chef (Backend Server) receives the order, cooks the food, fetches ingredients from the pantry (Database), and prepares the plate.
4. **The Response (Served Food)**: The waiter brings the hot pizza (HTTP Response) back to the client.

---

## 🛠️ Core Concepts Explained

### 1. What is Node.js?
JavaScript was originally built to run only inside browsers. **Node.js** is a runtime environment that allows you to run JavaScript *outside* the browser, directly on your machine. It is what allows us to write backend servers using JavaScript.

### 2. What is Express.js?
Node.js has a built-in module to create servers, but it requires a lot of repetitive code. **Express.js** is a light, fast, and minimalist framework built on top of Node.js that makes creating routes, handling requests, and managing servers incredibly easy and neat.

### 3. What is an IP Address and a Port?
*   **IP Address**: Like a home address (e.g., `127.0.0.1` represents your local machine, also called `localhost`). It tells the network *which computer* to talk to.
*   **Port**: Like an apartment number inside a building (e.g., `:3000`). A computer runs many applications simultaneously. A port ensures network traffic gets routed to the correct application.

### 4. HTTP Methods (The Actions)
When a client sends a request, it specifies an **HTTP Method** to tell the server what action it wants to perform:
*   `GET`: Retrieve data (e.g., load a page, fetch list of topics).
*   `POST`: Create/submit new data (e.g., submit a form, register a user).
*   `PUT` / `PATCH`: Update existing data.
*   `DELETE`: Remove data.

---

## 🚀 Setting Up Your Project

Follow these steps to initialize and run the code inside this directory:

### Step 1: Initialize the Project
Open your terminal inside the `1-Express-Basics` folder and initialize a Node.js project:
```bash
npm init -y
```
*(This creates a `package.json` file which keeps track of your project dependencies).*

### Step 2: Install Express.js
Install Express by running:
```bash
npm install express
```
*(This creates the `node_modules` folder and updates your `package.json` with the Express dependency).*

### Step 3: Run the Server
To start the server, run:
```bash
npm start
```
*(This executes `node server.js` which starts listening for incoming requests on Port 3000).*

---

## 🔍 Understanding the Code: `server.js`

Let's dissect the core components of [server.js](file:///d:/Computer%20science/Placement%20Pre/Backend/1-Express-Basics/server.js):

### 1. Initialization and Port
```javascript
const express = require('express'); // Import the Express package
const app = express();              // Initialize the app object
const PORT = 3000;                  // Define our port number
```

### 2. Defining a GET Route
A route is defined by mapping an **HTTP Method** and a **URL Path** to a callback function (known as a handler):
```javascript
app.get('/api/topics', (req, res) => {
  // 'req' represents the incoming request
  // 'res' represents the outgoing response
  res.json(backendTopics); // Sends backendTopics array as JSON to the client
});
```

### 3. Dynamic URL/Path Parameters (`req.params`)
Sometimes you want to capture values directly from the URL path. For example, in `/api/topics/:id`, `:id` is dynamic:
```javascript
app.get('/api/topics/:id', (req, res) => {
  const topicId = parseInt(req.params.id); // Extracts ID from URL (e.g., "/api/topics/2" -> 2)
  const topic = backendTopics.find(t => t.id === topicId);
  res.json(topic);
});
```

### 4. Query Parameters (`req.query`)
Query parameters are key-value pairs appended at the end of a URL after a `?`.
*   Example URL: `http://localhost:3000/api/greet?name=Animesh`
```javascript
app.get('/api/greet', (req, res) => {
  const name = req.query.name || "Guest"; // Extracts "Animesh" from query
  res.json({ message: `Hello, ${name}!` });
});
```

### 5. Reading POST Body (`req.body` & Middleware)
When submitting data, it is sent in the body of the request. To read this, we must tell Express to parse incoming JSON using middleware:
```javascript
app.use(express.json()); // Built-in middleware to parse JSON requests

app.post('/api/feedback', (req, res) => {
  const { studentName, topicId } = req.body; // Extracts data sent in JSON body
  res.status(201).json({ message: "Received!", studentName });
});
```

---

## 🧪 Testing Your Server

Once your server is running (via `npm start`), open your browser or an API client (like Postman) and try the following endpoints:

| Action | URL | Description | How to Test |
| :--- | :--- | :--- | :--- |
| **GET** | `http://localhost:3000/` | The visual Home Page | Open in any Web Browser |
| **GET** | `http://localhost:3000/api/topics` | Get all backend topics | Open in Web Browser |
| **GET** | `http://localhost:3000/api/topics/2` | Get specific topic | Open in Web Browser |
| **GET** | `http://localhost:3000/api/greet?name=YourName` | Greeting (Query param) | Open in Web Browser (change `YourName` to yours) |
| **POST** | `http://localhost:3000/api/feedback` | Submit feedback (Body) | Use Postman, Thunder Client, or the Curl command below |

### 💻 Testing POST via Curl (in Command Prompt / Terminal)
Open a new terminal window and run:
```bash
curl -X POST http://localhost:3000/api/feedback \
  -H "Content-Type: application/json" \
  -d "{\"studentName\": \"Animesh\", \"topicId\": 1, \"comment\": \"Great introduction!\"}"
```

---

## 🎯 Next Steps & Challenges
To check your understanding, try modifying [server.js](file:///d:/Computer%20science/Placement%20Pre/Backend/1-Express-Basics/server.js) to:
1. Add a new GET route `/api/time` that returns the current server time.
2. Add a new topic to the `backendTopics` array.
3. Add a GET route `/api/topics/difficulty/:level` that filters and returns only topics with matching difficulty (e.g. "Beginner" or "Intermediate").
