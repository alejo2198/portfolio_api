const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || "8888"

const db = require("./database/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/contacts", async (request, response) => {
    let contact = await db.getContacts();
    response.json(contact)
  });
  
  app.get("/skills", async (request, response) => {
    let skills = await db.getSkills();
    response.json(skills)
  });

  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  }); 