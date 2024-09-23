const express = require('express');

const r = express.Router();
const cr = require('../controller/Jomercontroller');

r.get('/', cr.main);
r.get('/about', cr.about);
r.get('/contact', cr.contact); 
r.get('/services', cr.services); 
r.get('/portfolio', cr.portfolio);
module.exports = r;