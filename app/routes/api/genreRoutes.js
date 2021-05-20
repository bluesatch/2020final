const express = require('express');
const router = express.Router();

// Destructuring
const { genreDao: dao } =  require('../../daos/dao');

// api/genre/
router.get('/', (req, res) => {
    dao.findAll(res, dao.table);
});

// api/genre/count
router.get('/count', (req, res) => {
    dao.countAll(res, dao.table);
});

// api/genre/1
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id);
});

// api/genre/create
router.post('/create', (req, res)=> {
    dao.create(req, res);
});

// api/genre/update/1
router.patch('/update/:id', (req, res) => {
    dao.update(req, res);
})

module.exports = router;

// next daoCommon.js