const validateUser = (req, res, next) => {
    const { fullName, job, age, city } = req.body;
  
    if (!fullName || !job || !age || !city) {
      return res.status(400).json({ error: "Все поля обязательны" });
    }
  
    if (typeof age !== "number" || age <= 0) {
      return res.status(400).json({ error: "Возраст должен быть положительным числом" });
    }
  
    next();
  };
  
  module.exports = validateUser;
  