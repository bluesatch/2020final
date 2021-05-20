const express = require('express');
const router = express.Router();

// Destructuring
const { labelDao: dao } =  require('../../daos/dao');

// api/label/
router.get('/', (req, res) => {
    dao.findAll(res, dao.table);
});

// api/label/count
router.get('/count', (req, res) => {
    dao.countAll(res, dao.table);
});

// api/label/1
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id);
});

// api/label/create
router.post('/create', (req, res)=> {
    dao.create(req, res);
});

// api/label/update/1
router.patch('/update/:id', (req, res) => {
    dao.update(req, res);
})

module.exports = router;

// next daoCommon.js