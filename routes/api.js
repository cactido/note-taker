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
    let db = notes;
    db.push(req.body);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db));
    res.json(db);
})
//delete route for /api/notes/
router.delete('/notes/:id', (req, res) => {
    let db = notes;
    // remove the requested note from the database array
    console.log(db[req.params.id]);
    db.splice(req.params.id, 1);
    // reassign remaining notes 'id' so the ids can keep being used to reference the proper position
    // in the database array
    for (let i = 0; i < db.length; i++) { db[i].id = i; }
    // rewrite the database file
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db));
    res.json(db);
})

module.exports = router;