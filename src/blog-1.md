The Four Pillars of OOP - Applied to Large-scale TypeScript

As TypeScript applications grow, managing logic beacomes harder. OOP helps organize code usig four main principles: Inheritance, Encapsulation, Polymorphism, & Abstraction.
this principles imporves scalability, readability and maintainability.

1.Inheritance(Reusing logic):
Inheritance allows one class to use features from another class. this reduces code duplication.
Example:

      class User{
        login(){
            console.log("User logged in");
        }
      }
      class Admin extends User{
        removeUser(){
            console.log("User removed");
        }
      }

Advantages: ~Reuses common functionality.
            ~Make code easier to maintain.


2.Polymorphism(Multiple behaviours):
Polymorphism lets the same method act differently in different classes.
Example:

class Payment{
    pay(){
        console.log("payment successfull");
    }
}
class Bkash extends Payment{
    pay(){
        console.log("pain using Bkash");
    }
}

Advantages: ~reduce complex conditions like "if-else".
            ~Make system flexible


3.Abstraction(Hiding complexity):
Abstraction hides internal details and shows only necessary functions.
Example:      

abstract class Database {
  abstract connect(): void;
}

Advantages: ~Simplifies large systems
            ~Improves modular design



4.Encapsulation(Protecting data):
Encapsulation limits direct access to object data with access modifiers like "private".
Example:

 class BankAccount{
    private balance = 0;

    deposit(amount: number){
        this.balance += amount;
    }
 }

 Advantages: ~Protects data from unwanted changes.
            ~Improves security & reliability.


The four pillars of OOP helps developers build clean and scalable TypeScript applications.Together they make large-scale projects easier to manage, maintain and expand.
