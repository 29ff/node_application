const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', storeController.homePage);
router.get('/stores', catchErrors(storeController.getStores));
router.get('/stores/:id/edit', storeController.editStore);
router.get('/add', catchErrors(storeController.addStore));
router.post('/add', catchErrors(storeController.createStore));
router.post('/add/:id', catchErrors(storeController.updateStore));

module.exports = router;
