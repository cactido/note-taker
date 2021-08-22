const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require('fs');
const path = require('path');

// get route for /api/notes
router.get('/notes', (req, res) => {
    res.json(notes);
})
// post route for /api/notes
router.post('/notes', (req, res) => {
    // assigns a unique id to the posted note based on the number of notes existing in the db
    req.body.id = notes.length;
    // add new note to the existing notes and overwrite the existing database with the updated one
    // then returns the new db
    db = notes;
    db.push(req.body);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes))
    res.json(notes);
})

module.exports = router;