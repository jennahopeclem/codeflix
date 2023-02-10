const db = require('../config/connection');
const { Project, User, Endorsement } = require('../models');

const projectData = require('./projectData.json');
const userData = require('./userData.json');
const endorsementsData = require('./endorsementsData.json');

// REFERENCE: 21-MERN\01-Activities\28-Stu_Mini-Project\Main\server\seeds\seed.js


// db.once('open', async () => {
//   await Tech.deleteMany({});

//   const technologies = await Tech.insertMany(techData);

//   console.log('Technologies seeded!');
//   process.exit(0);
// });