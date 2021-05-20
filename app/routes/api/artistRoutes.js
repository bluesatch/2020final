const express = require('express');
const router = express.Router();

// Destructuring
const { artistDao: dao } =  require('../../daos/dao');

// api/artist/
router.get('/', (req, res) => {
    dao.findAll(res, dao.table);
});

// api/artist/count
router.get('/count', (req, res) => {
    dao.countAll(res, dao.table);
});

// api/artist/1
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id);
});

// api/artist/create
router.post('/create', (req, res)=> {
    dao.create(req, res);
});

// api/artist/update/1
router.patch('/update/:id', (req, res) => {
    dao.update(req, res);
})

module.exports = router;