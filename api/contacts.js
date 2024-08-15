

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const db = require("../database/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export default async function handler(req, res) {
    res.status(200).json({ skills: ['JavaScript', 'Node.js', 'React'] });
    let contact = await db.getContacts();
    response.json(contact)
}
