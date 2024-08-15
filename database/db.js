const mongoose = require("mongoose");
const dbUrl = `${process.env.DBURL}`;

//set up Schema and model
const SkillSchema = new mongoose.Schema({
  name: String,
  icon: String,
  category: String,
});
const Skill = mongoose.model("skills", SkillSchema);

//set up Schema and model
const ContactSchema = new mongoose.Schema({
  link: String,
  name: String,
  icon: String,
  
});
const Contact = mongoose.model("contacts", ContactSchema);

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}

//Get all skills
async function getSkills() {
  await connect();
  let skills = await Skill.find({})
  return skills //return array for find all
}
//Get all contacts
async function getContacts() {
  await connect();
  return await Contact.find({}); //return array for find all
}

module.exports = {
  getSkills,
  getContacts
}