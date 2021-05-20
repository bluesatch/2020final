const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 3000;

// root route -> http://localhost:3000/api
router.get('/', (req, res) => {
    // res.send('Daddy Bugs Records');
    res.json({
        'All Albums': `http://localhost:${PORT}/api/album`,
        'All Artists': `http://localhost:${PORT}/api/artist`,
        'All Bands': `http://localhost:${PORT}/api/band`,
        'All Countries': `http://localhost:${PORT}/api/country`,
        'All Genres': `http://localhost:${PORT}/api/genre`,
        'All Labels': `http://localhost:${PORT}/api/label`,
    })
});

router.get('/about', (req, res) => {
    res.send('aboot roote');
});

// http://localhost:3000/api/album
router.use('/album', require('./api/albumRoutes'));

// http://localhost:3000/api/artist
router.use('/artist', require('./api/artistRoutes'));

// http://localhost:3000/api/band
router.use('/band', require('./api/bandRoutes'));

// http://localhost:3000/api/country
router.use('/country', require('./api/countryRoutes'));

// http://localhost:3000/api/genre
router.use('/genre', require('./api/genreRoutes'));

// http://localhost:3000/api/label
router.use('/label', require('./api/labelRoutes'));

module.exports = router;

// next dbconfig.js