const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/save',userController.createSaver);
router.get('/',userController.getAll);
router.get('/:id',userController.getUserById);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);

module.exports = router;