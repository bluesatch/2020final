const express = require('express');
const router = express.Router();

// Destructuring
const { countryDao: dao } =  require('../../daos/dao');

// api/country/
router.get('/', (req, res) => {
    dao.findAll(res, dao.table);
});

// api/country/count
router.get('/count', (req, res) => {
    dao.countAll(res, dao.table);
});

// api/country/1
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id);
});

// api/country/create
router.post('/create', (req, res)=> {
    dao.create(req, res);
});

// api/country/update/1
router.patch('/update/:id', (req, res) => {
    dao.update(req, res);
})

module.exports = router;

// next daoCommon.js