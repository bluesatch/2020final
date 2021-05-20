const daoCommon = require('./common/daoCommon');

const albumDao = {
    ...daoCommon,
    ...require('./api/albumDao')  
}

const artistDao  = {
    ...daoCommon, 
    ...require('./api/artistDao')
}

const bandDao = {
    ...daoCommon,
    ...require('./api/bandDao')
}

const countryDao = {
    ...daoCommon,
    ...require('./api/countryDao')
}

const genreDao = {
    ...daoCommon,
    ...require('./api/genreDao')
}

const labelDao = {
    ...daoCommon,
    ...require('./api/labelDao')
}

// alternative const albumDao = Object.assign(daoCommon, require('./api/albumDao))

module.exports = {
    albumDao,
    artistDao,
    bandDao, 
    countryDao,
    genreDao,
    labelDao
};

// next albumDao.js