/**
 * server.js
 * 
 * This is the entry point of our backend application.
 * Here, we set up an Express server, define routes (endpoints), 
 * and handle requests from the client.
 */

// 1. IMPORT EXPRESS
// Express is a minimalist web framework for Node.js. It makes handling HTTP requests easy.
const express = require('express');

// 2. INITIALIZE THE EXPRESS APPLICATION
// This 'app' object represents our server and contains methods to configure it.
const app = express();

// 3. DEFINE A PORT
// Servers listen on specific ports (like virtual channels) for incoming network traffic.
// We use 3000 as our default port for local development.
const PORT = 3000;

// 4. MIDDLEWARE SETUP
// Middleware functions run between receiving a request and sending a response.
// This built-in middleware tells Express to automatically parse incoming JSON request bodies.
app.use(express.json());

// ==========================================
// 5. DEFINE ROUTES (ENDPOINTS)
// ==========================================

/**
 * Route 1: GET / (The Home Route)
 * Description: Sends a simple welcoming HTML page when someone visits http://localhost:3000/
 */
app.get('/', (req, res) => {
  // 'req' (Request): Contains information about the incoming request.
  // 'res' (Response): Used to send back a response to the client.
  res.send(`
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #0f172a;
        color: #f8fafc;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
      }
      .card {
        background-color: #1e293b;
        padding: 2.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
        max-width: 600px;
        text-align: center;
        border: 1px solid #334155;
      }
      h1 { color: #38bdf8; margin-top: 0; }
      p { line-height: 1.6; color: #cbd5e1; }
      .tag {
        background-color: #0284c7;
        color: white;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: bold;
      }
      ul { text-align: left; padding-left: 20px; }
      li { margin-bottom: 8px; color: #94a3b8; }
      code { background: #0f172a; padding: 2px 6px; border-radius: 4px; color: #f472b6; font-family: monospace; }
    </style>
    <div class="card">
      <span class="tag">Express Basics</span>
      <h1>Welcome to Your First Backend Server! 🚀</h1>
      <p>Your Node.js + Express backend is running successfully on <strong>port ${PORT}</strong>.</p>
      <p>Try visiting these endpoints in your browser or API client:</p>
      <ul>
        <li><code>GET <a href="/api/topics" style="color: #38bdf8;">/api/topics</a></code> - Get list of core backend concepts</li>
        <li><code>GET <a href="/api/topics/1" style="color: #38bdf8;">/api/topics/1</a></code> - Get details of a specific topic (URL Param)</li>
        <li><code>GET <a href="/api/greet?name=Student" style="color: #38bdf8;">/api/greet?name=Student</a></code> - Custom greeting (Query Param)</li>
      </ul>
    </div>
  `);
});

// Dummy database data representing core backend placement preparation topics
const backendTopics = [
  {
    id: 1,
    title: "Client-Server Architecture",
    description: "The conceptual model where clients (e.g. browsers) request resources and servers provide them.",
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "HTTP Methods & Status Codes",
    description: "HTTP verbs like GET, POST, PUT, DELETE, and server response codes like 200 (OK), 404 (Not Found), 500 (Server Error).",
    difficulty: "Beginner"
  },
  {
    id: 3,
    title: "Middlewares in Express",
    description: "Functions that execute during the request-response lifecycle. Used for logging, authentication, validation, etc.",
    difficulty: "Intermediate"
  },
  {
    id: 4,
    title: "RESTful APIs",
    description: "Representational State Transfer. A standard pattern for designing networked applications using resource-based URLs.",
    difficulty: "Intermediate"
  }
];

/**
 * Route 2: GET /api/topics (Get All Topics)
 * Description: Returns a list of backend topics in JSON format.
 */
app.get('/api/topics', (req, res) => {
  // res.json() formats the array/object into JSON and sets appropriate headers automatically.
  res.json(backendTopics);
});

/**
 * Route 3: GET /api/topics/:id (Get Specific Topic - Path/URL Parameter)
 * Description: Demonstrates dynamic routing. The ':id' is a placeholder for any value.
 * Try: http://localhost:3000/api/topics/2
 */
app.get('/api/topics/:id', (req, res) => {
  // We extract the 'id' parameter from req.params.
  // Note: req.params values are always strings, so we convert it to an integer.
  const topicId = parseInt(req.params.id);
  
  // Find the topic in our dummy database
  const topic = backendTopics.find(t => t.id === topicId);

  if (!topic) {
    // If the topic was not found, return a 404 Not Found status along with an error message.
    return res.status(404).json({ error: `Topic with ID ${topicId} not found.` });
  }

  // If found, respond with the topic JSON data
  res.json(topic);
});

/**
 * Route 4: GET /api/greet (Greeting with Query Parameters)
 * Description: Uses query parameters (the part of URL after '?') to customize the response.
 * Try: http://localhost:3000/api/greet?name=Animesh
 */
app.get('/api/greet', (req, res) => {
  // We extract the 'name' key from req.query.
  // Example URL: /api/greet?name=Animesh -> req.query.name will be "Animesh"
  const name = req.query.name || "Guest Student";

  res.json({
    message: `Hello, ${name}! Welcome to the world of Backend Engineering. Keep learning!`,
    timestamp: new Date().toISOString()
  });
});

/**
 * Route 5: POST /api/feedback (Submit Feedback - JSON Request Body)
 * Description: Receives data sent in the request body from a form or an API request.
 * Note: Since browser URL bars can only perform GET requests, you will need tools like Postman,
 * Thunder Client, or curl to test this.
 */
app.post('/api/feedback', (req, res) => {
  // 'req.body' contains the JSON payload sent by the client.
  const { studentName, topicId, comment } = req.body;

  // Simple validation
  if (!studentName || !topicId) {
    return res.status(400).json({ error: "Missing required fields: 'studentName' and 'topicId' are required." });
  }

  // Process the feedback (in a real app, we would write this to a database)
  const feedbackReceipt = {
    message: "Feedback received successfully!",
    receivedAt: new Date().toISOString(),
    data: {
      studentName,
      topicId: parseInt(topicId),
      comment: comment || "No comment provided."
    }
  };

  // Send back the response with a 201 Created status code
  res.status(201).json(feedbackReceipt);
});

// ==========================================
// 6. START THE SERVER
// ==========================================
// We tell our app to start listening for incoming connections on our specified port.
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 SERVER RUNNING AT: http://localhost:${PORT}`);
  console.log(`👉 Press Ctrl + C to stop the server`);
  console.log(`=========================================`);
});
