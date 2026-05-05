const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');

router.post('/register', userController.register);
// router.get('/users', userController.getAll);
// router.get('/users/:id', userController.getOne);
// router.put('/users/:id', userController.update);


router.delete('/users/:id', userController.delete);

router.post('/getAllUserWithPagination', userController.getAllUserWithPagination);


module.exports = router;