const User = require('../models/User');
const Task = require('../models/Task');


module.exports = {
  getAllUsers(req, res) {
    res.json(User.getAll());
  },

  getUserById(req, res) {
    const user = User.getById(Number(req.params.id));
    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }
    res.json(user);
  },

  createUser(req, res) {
    const { fullName, job, age, city } = req.body;

    if (!fullName || !job || !age || !city) {
      return res.status(400).json({ error: 'Все поля (fullName, job, age, city) обязательны' });
    }

    const newUser = User.create({ fullName, job, age, city });
    res.status(201).json(newUser);
  },

  updateUser(req, res) {
    const { fullName, job, age, city } = req.body;
    const updatedUser = User.update(Number(req.params.id), { fullName, job, age, city });

    if (!updatedUser) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }

    res.json(updatedUser);
  },

  deleteUser(req, res) {
    const userId = Number(req.params.id);
  
    if (!User.getById(userId)) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }
  
    console.log('Task methods:', Task);

    Task.deleteAllByUserId(userId);
  
    User.delete(userId);
  
    res.status(204).send();
  },

};
