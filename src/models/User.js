const users = [];

let userId = 1;

class User {
  constructor(fullName, job, age, city) {
    this.id = userId++;
    this.fullName = fullName;
    this.job = job;
    this.age = age;
    this.city = city;
  }

  static getAll() {
    return users;
  }

  static getById(id) {
    return users.find((user) => user.id === id);
  }

  static create(userData) {
    const { fullName, job, age, city } = userData;
    const newUser = new User(fullName, job, age, city);
    users.push(newUser);
    return newUser;
  }

  static update(id, updateData) {
    const user = this.getById(id);
    if (!user) return null;

    Object.assign(user, updateData);
    return user;
  }

  static delete(id) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
  }
  
}



module.exports = User;
