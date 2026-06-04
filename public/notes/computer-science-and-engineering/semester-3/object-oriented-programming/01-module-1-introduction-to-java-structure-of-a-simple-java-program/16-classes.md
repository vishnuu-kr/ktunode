---
title: "Classes"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java: Structure of a simple java program"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac97"
status: "completed"
scrapedAt: "2026-05-20T16:27:05.720Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 1: Introduction to Java - Classes

## Topic: Classes

### Learning Outcomes:

*   Understand the concept of a class as a blueprint for creating objects.
*   Define and declare classes in Java.
*   Understand the role of instance variables (attributes/fields) within a class.
*   Understand the role of methods (behavior) within a class.
*   Learn how to create objects (instances) from a class using the `new` keyword.
*   Access and manipulate instance variables and methods of an object.
*   Understand the concept of `this` keyword.
*   Differentiate between classes and objects.

### 1. Key Concepts and Definitions

*   **Class:** A blueprint or template that defines the characteristics and behaviors of objects of a particular type. It's a user-defined data type.  Think of it like an architectural blueprint for a house.  The blueprint describes the house, but it's not the house itself.
*   **Object:** An instance of a class. It's a concrete entity created based on the class blueprint. Using our house analogy, an object is an actual house built from the architectural blueprint.  Each house can be different (different paint color, different furniture) but they all share the same fundamental structure defined in the blueprint.
*   **Instance Variables (Attributes/Fields):**  Variables declared within a class that hold the state of an object. They represent the characteristics or properties of an object.  For example, a `Dog` class might have instance variables for `breed`, `age`, and `color`.
*   **Methods (Behavior):** Functions defined within a class that define the actions or operations an object can perform. They represent the behavior of an object. For example, a `Dog` class might have methods for `bark()`, `eat()`, and `sleep()`.
*   **Instantiation:** The process of creating an object (instance) from a class. This is done using the `new` keyword.
*   **`this` Keyword:** A reference to the current object within a method or constructor.  It's used to disambiguate instance variables when a local variable or method parameter has the same name.

### 2. Defining and Declaring Classes in Java

The basic syntax for declaring a class in Java is:

```java
class ClassName {
    // Instance variables (fields/attributes)
    dataType variableName1;
    dataType variableName2;

    // Methods (behavior)
    returnType methodName1(parameterList) {
        // Method body
    }

    returnType methodName2(parameterList) {
        // Method body
    }
}
```

**Example:**

```java
class Dog {
    // Instance variables
    String breed;
    int age;
    String color;

    // Method to make the dog bark
    void bark() {
        System.out.println("Woof!");
    }

    // Method to display dog's details
    void displayDetails() {
        System.out.println("Breed: " + breed);
        System.out.println("Age: " + age);
        System.out.println("Color: " + color);
    }
}
```

### 3. Instance Variables (Attributes/Fields)

*   Instance variables define the data that an object holds.
*   Each object of a class has its own copy of the instance variables.
*   They are usually declared with access modifiers like `public`, `private`, or `protected` (we'll cover these in detail later, but for now, `private` is good practice to ensure data encapsulation).

**Example:**

In the `Dog` class example above:

*   `breed` is an instance variable of type `String`.
*   `age` is an instance variable of type `int`.
*   `color` is an instance variable of type `String`.

### 4. Methods (Behavior)

*   Methods define the actions that an object can perform.
*   They can take parameters as input and return values.
*   The `void` keyword indicates that a method does not return a value.

**Example:**

In the `Dog` class example above:

*   `bark()` is a method that doesn't take any parameters and returns nothing (void).
*   `displayDetails()` is a method that doesn't take any parameters and returns nothing (void).

### 5. Creating Objects (Instances)

To create an object from a class, you use the `new` keyword followed by the class name and parentheses:

```java
ClassName objectName = new ClassName();
```

**Example:**

```java
Dog myDog = new Dog();
```

This creates an object named `myDog` of the `Dog` class.

### 6. Accessing and Manipulating Instance Variables and Methods

You can access instance variables and call methods of an object using the dot (`.`) operator.

*   **Accessing Instance Variables:**

    ```java
    objectName.variableName = value;  // Assigning a value
    dataType variable = objectName.variableName; // Retrieving a value
    ```

*   **Calling Methods:**

    ```java
    objectName.methodName(argumentList);
    ```

**Example:**

```java
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();

        // Assigning values to instance variables
        myDog.breed = "Golden Retriever";
        myDog.age = 3;
        myDog.color = "Golden";

        // Calling methods
        myDog.bark(); // Output: Woof!
        myDog.displayDetails(); // Output: Breed: Golden Retriever, Age: 3, Color: Golden
    }
}
```

### 7. `this` Keyword

The `this` keyword refers to the current object instance.  It is particularly useful when a method parameter has the same name as an instance variable.

**Example:**

```java
class Rectangle {
    private int width;
    private int height;

    public Rectangle(int width, int height) {
        // 'this.width' refers to the instance variable 'width'
        // 'width' (without 'this') refers to the method parameter 'width'
        this.width = width;
        this.height = height;
    }

    public int getArea() {
        return this.width * this.height;
    }
}

public class Main {
    public static void main(String[] args) {
        Rectangle myRectangle = new Rectangle(10, 5);
        System.out.println("Area: " + myRectangle.getArea()); // Output: Area: 50
    }
}
```

In this example, the `this` keyword is used in the constructor to differentiate between the instance variables `width` and `height` and the constructor parameters `width` and `height`.

### 8. Classes vs. Objects: A Clear Distinction

| Feature        | Class                                      | Object                                         |
| -------------- | ------------------------------------------ | --------------------------------------------- |
| **Definition** | Blueprint or template                    | Instance of a class                          |
| **Nature**     | Logical entity                           | Physical entity                              |
| **Memory**     | Doesn't occupy memory when defined       | Occupies memory when created                  |
| **Creation**   | Defined using the `class` keyword         | Created using the `new` keyword               |
| **Example**    | `Car`                                       | `myCar = new Car();`                          |

### 9. Important Points to Remember

*   A class is a blueprint, and an object is an instance of that blueprint.
*   Instance variables define the state of an object.
*   Methods define the behavior of an object.
*   The `new` keyword is used to create objects.
*   The dot (`.`) operator is used to access instance variables and call methods of an object.
*   The `this` keyword refers to the current object instance.

### 10. Practice Questions and Exercises

**Question 1:**  What is the difference between a class and an object?

**Answer:**  A class is a blueprint or template, while an object is a specific instance of that blueprint.  Think of a cookie cutter (class) and the cookie made using that cutter (object).

**Question 2:**  How do you create an object from a class in Java?

**Answer:** You use the `new` keyword followed by the class name and parentheses: `ClassName objectName = new ClassName();`

**Question 3:**  What is the purpose of instance variables?

**Answer:** Instance variables store the data that defines the state of an object. They hold the characteristics or properties of the object.

**Question 4:**  What is the purpose of methods in a class?

**Answer:** Methods define the actions or operations that an object can perform. They define the behavior of the object.

**Question 5:**  What is the `this` keyword used for?  Give an example.

**Answer:** The `this` keyword refers to the current object instance. It's used to differentiate instance variables from local variables or method parameters with the same name.  See the `Rectangle` class example above.

**Exercise 1:**

Create a class called `BankAccount` with the following:

*   Instance variables: `accountNumber` (String), `accountHolderName` (String), `balance` (double).
*   Methods:
    *   `deposit(double amount)`:  Adds the given amount to the balance.
    *   `withdraw(double amount)`:  Subtracts the given amount from the balance.  Print "Insufficient funds" if the withdrawal amount exceeds the balance.
    *   `displayAccountDetails()`: Prints the account number, account holder name, and balance.

Create a `Main` class, create an instance of `BankAccount`, deposit and withdraw some amounts, and then display the account details.

**Answer:**

```java
class BankAccount {
    String accountNumber;
    String accountHolderName;
    double balance;

    public BankAccount(String accountNumber, String accountHolderName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = initialBalance;
    }

    void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount);
    }

    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient funds");
        }
    }

    void displayAccountDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount myAccount = new BankAccount("1234567890", "John Doe", 1000.0);

        myAccount.deposit(500.0);
        myAccount.withdraw(200.0);
        myAccount.withdraw(2000.0); // Insufficient funds
        myAccount.displayAccountDetails();
    }
}
```

This comprehensive guide provides a solid foundation for understanding classes in Java, which is a cornerstone of object-oriented programming.  Remember to practice these concepts to gain a deeper understanding.
