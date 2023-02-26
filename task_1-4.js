class User {
    #name;
    constructor(name, login, age){
        this.#name = name;
        this.login = login;
        this.age = age;
    }
    getName(isAdmin){
        return isAdmin ? this.#name || this.login : 'Permission deniaed';
    } 
    ChangeName(newName, password){
        if(password === '123'){
            const oldName = this.#name;
            this.#name = newName;
            console.log(`Name changed from ${oldName} to ${newName}`);
        }
        else {
            console.log('Permission denied');
        }
    }
}
// task_4
class Admin extends User {
    #isAdmin;
    constructor(name, login, age){
                super(name, login, age)
                this.#isAdmin = true;
            }
    getUserName(user) {
        return user.getName(true);
    }
}
let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User('BOB', 'NRG', 22);
let admin = new Admin('Admin', 'admin', 30);

console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);
// console.log(user2.#name);

// task_2
console.log(user1.getName(true));
console.log(user2.getName(true));
console.log(user2.getName(false));

// task_3
user1.ChangeName('Bill', '123');
user1.ChangeName('John', '7777');


console.log(admin.getUserName(user2));