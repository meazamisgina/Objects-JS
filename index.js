//First start with defining BankAccount constructor function
//Set the name and balance 
//Define the method deposit(amount)
//Add the amount to the balance and store it in the balance 
//Define another method withdraw(withdrawAmount)
//Compare the withdraw amount with the balance and make sure that balance is 
// greater or equal to the withdraw amout 
// If the balance is greater or equal to withdraw amount then subtract withdraw amount 
// from balance and store it in the balance 

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


//Create an object names taskList
//Initialize a property tasks as an empty array
//Define a method addTask(task) and add the task to the tasks array
//Define a method completeTask(task)
//Then find the index of the task in the tasks array and if the task exists remove the taskfrom the array
//If it does not exist print task not found
//Define snother method listTask() 
//Check the tasks array and if it is not empty print loop through each task in tasks array and print the task
//If it is  empty  print "No tasks left"

const taskList = {
    tasks: [],

    addTask: function (task) {
        this.tasks.push(task);
        console.log(`Task added: "${task}"`);

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
taskList.addTask("Study Kotlin");
taskList.addTask("Washing clothes");

taskList.listTasks();

taskList.completeTask("Clean the room");
taskList.completeTask("Finish homework");
taskList.addTask("Washing clothes");

taskList.listTasks()


//Create Student object with name and scores(array)
//Define method getAverage()
//Sum all scores and return sum devided by number of scores
//Define new method hasPassed() and return true if the average is greater than or equal to 50
//IF average is less than 50 return false
//Then finally create student instances


function Student(name,scores){
    this.name=name;
    this.scores=scores;

    this.getAverage=function(){
        const sum = this.scores.reduce((acc,score)=> acc + score, 0);
        return sum/this.scores.length;
    };
    this.hasPassed= function(){
        return this.getAverage()>=50;
    };

}

const student1 = new Student("Rahel",[50,60,90,78,67]);
const student2 = new Student("Eyob",[78,69,95,88,77]);


console.log(`${student1.name}'s average: ${student1.getAverage()}`);
console.log(`Passed? ${student1.hasPassed()}`);



console.log(`${student2.name}'s average: ${student2.getAverage()}`);
console.log(`Passed? ${student2.hasPassed()}`);



//Create a ShoppingCart object with items(which is empty array)
//Dedfine method addItem(item);
//Add item to items array 
//Define method getTotal() and sum price of all items in items array and return total sum 
//Create a ShoppingCart instance


const ShoppingCart={
    items:[],

    addItem: function(item){
        this.items.push(item);
    },

    getTotal:function(){
        return this.items.reduce((total,item)=> total + item.price, 0);
    }
};

ShoppingCart.addItem({name:"Charger", price:100});
ShoppingCart.addItem({name:"Shoe", price:500});
ShoppingCart.addItem({name:"Book", price:200});

console.log("Total Cost:", ShoppingCart.getTotal())


//First define movie constructor function that takes title,year and rating.
//Define isClassic() function 
//Check if the year is before 2000, If yes return True
//Define a method recommend() 
//Check if the rating is more than 8 and if it is true then return "Highly recommended"
//Finally create 3 movies and call the methods


function Movie(title, year, rating) {

    this.title = title;
    this.year = year;
    this.rating = rating;

    this.isClassic = function () {
        return this.year < 2000;

    };

    this.recommend = function () {
        if (this.rating > 8) {
            return "Highly recommended!";
        }
        else {
            return "Consider other options";
        }

    };
}

const movie1 = new Movie("The Godfather", 1972, 9.2);
const movie2 = new Movie("Broken", 2002, 9);
const movie3 = new Movie("The Intouchables", 1997, 7.5);

console.log(`"${movie1.title}" is classic movie: ${movie1.isClassic()}`);
console.log(`Recommendation: ${movie1.recommend()}`);


console.log(`"${movie2.title}" is classic: ${movie2.isClassic()}`);
console.log(`Recommendation: ${movie2.recommend()}`);


console.log(`"${movie3.title}" is classic: ${movie3.isClassic()}`);
console.log(`Recommendation: ${movie3.recommend()}`);
