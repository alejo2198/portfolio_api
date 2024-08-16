const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || "8888"

const db = require("./database/db");

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/api/contacts", async (request, response) => {
    try {
      let contacts = await db.getContacts();
      response.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error.message);
      response.status(500).json({ error: "Failed to fetch contacts" });
    }
});
  
  app.get("/api/skills", async (request, response) => {
    try {
      let skills = await db.getSkills();
      response.json(skills)
    } catch (error) {
      console.error("Error fetching skills:", error.message);
      response.status(500).json({ error: "Failed to fetch skills" });
    }
    
});
app.get("/api/projects", async (request, response) => {
  try {
    let projects = await db.getProjects();
    response.json(projects)
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    response.status(500).json({ error: "Failed to fetch projects" });
  }
  
});

  if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`);
    }); 
  }

// Export the app as a serverless function
module.exports = (req, res) => {
    return app(req, res);
};