function createNewUser() {
  const birthday = prompt("Введіть дату народження у форматі dd.mm.yyyy").split(".");
  newUser = {
    firstName: prompt("Введіть ім'я"),
    lastName: prompt("Введіть прізвище"),
    birthday: new Date(birthday[2], birthday[1] - 1, birthday[0]),
    getLogin: function getLogin() {
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();},
    getAge() {
      return Math.floor(
        (new Date() - this.birthday) / 1000 / 60 / 60 / 24 / 365);},
    getPassword() {
      return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.getFullYear();
    },
  };
  return newUser;
}
let user = createNewUser();
console.log(user);
console.log(user.getAge());
console.log(user.getPassword());
console.log(user.getLogin());
