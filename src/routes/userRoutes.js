const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateUser = require('../middleware/userValidator');

router.get('/', userController.getAllUsers); // Получить всех пользователей
router.get('/:id', userController.getUserById); // Получить пользователя по ID
router.post('/', validateUser, userController.createUser); // Создать пользователя
router.put('/:id', validateUser, userController.updateUser); // Обновить пользователя
router.delete('/:id', userController.deleteUser); // Удалить пользователя

module.exports = router;
