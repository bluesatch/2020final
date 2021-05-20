const express = require('express');
const router = express.Router();

// Destructuring
const { albumDao: dao } =  require('../../daos/dao');

// api/album/
router.get('/', (req, res) => {
    dao.findAll(res, dao.table);
});

// api/album/count
router.get('/count', (req, res) => {
    dao.countAll(res, dao.table);
});

// api/album/1
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id);
});

// api/album/create
router.post('/create', (req, res)=> {
    dao.create(req, res);
});

// api/album/update/1
router.patch('/update/:id', (req, res) => {
    dao.update(req, res);
})

module.exports = router;

// next daoCommon.js