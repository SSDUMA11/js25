class User {
    #phone;
    constructor(name, phone) {
      this.name = name;
      this.#phone = phone;
    }
    getPhone(isAdmin) {
      let phoneParts = this.#phone.split('-');
      if (isAdmin) {
        return this.#phone;
      } 
      else {
        phoneParts[1] = '***';
        phoneParts[2] = '***';
        return phoneParts.join('-');
      }
    }
}
let user1 = new User('Mike', '067-888-88-99');
let user2 = new User('Tom', '099-888-88-99');
console.log(user1.getPhone(false)); 
console.log(user2.getPhone(false));
console.log(user1.getPhone(true));
console.log(user2.getPhone(true));