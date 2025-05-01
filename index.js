function BankAccount(userName, balance) {
    this.userName = userName;
    this.balance = balance;

    this.deposite = function (depositAmount) {
        this.balance += depositAmount;
        console.log(`${this.userName}'s new balance is: ${this.balance} Birr`);
    };
    this.withdraw = function (withdrawAmount) {
        if (this.balance >= withdrawAmount) {
            this.balance -= withdrawAmount;
            console.log(`${this.userName} withdraws ${withdrawAmount} Birr, and ${userName}'s new balance is : ${this.balance} Birr`);
        }
        else {
            console.log(`${this.userName} has insufficient funds.`);
        }
    };
}
const account1 = new BankAccount("Eyuel", 5000);
const account2 = new BankAccount("Selam", 1000);
const account3 = new BankAccount("Rodi", 800);

account1.deposite(100);
account1.withdraw(1000);

account2.deposite(500);
account2.withdraw(2000);

account3.deposite(300);
account3.withdraw(500);



const taskList = {
    tasks: [],

    addTask: function (task) {
        this.tasks.push(task);
        console.log(`Task added:: "${task}"`);

    },
    completeTask: function (task) {
        let index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log(`Task completed: "${task}`);

        }
        else {
            console.log(`Task not found:  ${task}`);
        }
    },
    listTasks: function () {
        if (this.tasks.length > 0) {
            console.log('Remaining tasks:', this.tasks.join(","));
        }
        else {
            console.log("No tasks left");
        }
    }
};

taskList.addTask("Practice Python");
taskList.addTask("Clean the room");
taskList.addTask("Finish homework");

taskList.listTasks();

taskList.completeTask("Clean the room");
taskList.completeTask("Finish homework")

taskList.listTasks()







// const ShoppingCart = {
//     items: [],
//     //     {itemName:"Charger", price:100},
//     //     {itemName: "Mouse", price: 300}
//     // ],

//     addItem(name,price){
//         this.items.push({});
//     },


//     addItem: function (item) {
//         this.items.push(item);
//         console.log(`Added item: ${item,itemName}, price: ${item.price}`);

//     },
//     getTotal: function () {
//         const total = this.items.reduce((sum, item) => sum + item.price, 0);
//         return total;
//     }
// };

// ShoppingCart.addItem({ itemName: "Charger", price: 100 });
// ShoppingCart.addItem({ itemName: "Keyboard", price: 200 });

// console.log(`Final total: ${ShoppingCart.getTotal()}`);






function Movie(title, year, rating) {

    this.title = title;
    this.year = year;
    this.rating = rating;

    this.isClassic = function(){
        return this.year<2000;

    };
    
    this.recommend =function(){
        if(this.rating > 8){
            return "Highly recommended!";
        }
        else{
            return "Consider other options";
        }

    };
}

const movie1 = new Movie("The Godfather",1972, 9.2);
const movie2 = new Movie("Broken", 2002, 9);
const movie3 = new Movie("The Intouchables", 1997, 7.5);

console.log(`"${movie1.title}" is classic movie: ${movie1.isClassic()}`);
console.log(`Recommendation: ${movie1.recommend()}`);


console.log(`"${movie2.title}" is classic: ${movie2.isClassic()}`);
console.log(`Recommendation: ${movie2.recommend()}`);


console.log(`"${movie3.title}" is classic: ${movie3.isClassic()}`);
console.log(`Recommendation: ${movie3.recommend()}`);
