const express = require('express');
const router = express.Router();

// Destructuring
const { bandDao: dao } =  require('../../daos/dao');

// api/band/
router.get('/', (req, res) => {
    dao.findAll(res, dao.table);
});

// api/band/count
router.get('/count', (req, res) => {
    dao.countAll(res, dao.table);
});

// api/band/1
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id);
});

// api/band/create
router.post('/create', (req, res)=> {
    dao.create(req, res);
});

// api/band/update/1
router.patch('/update/:id', (req, res) => {
    dao.update(req, res);
})

module.exports = router;

// next daoCommon.js