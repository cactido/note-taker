const router = require('express').Router();
const path = require('path');
// route for root
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
// route for /notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;