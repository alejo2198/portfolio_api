const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const db = require("../database/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export default async function handler(req, res) {
    let skills = await db.getSKills();
    response.json(skills)
}