---
title: "Access Protection"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces – Packages "
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acb6"
status: "completed"
scrapedAt: "2026-05-20T16:28:57.218Z"
---
## Object Oriented Programming: Module 3 - Packages and Interfaces (Access Protection)

**Subject:** Object Oriented Programming
**Module:** Module 3: Packages and Interfaces – Packages
**Topic:** Access Protection

**Learning Outcomes:**

*   Understand the concept of access protection in Java.
*   Explain the different access modifiers (private, default, protected, public).
*   Demonstrate how access modifiers control visibility within a class, package, and hierarchy.
*   Apply access modifiers appropriately to encapsulate data and methods.
*   Understand the implications of using different access modifiers.

---

### 1. Introduction to Access Protection

Access protection (or access control) is a fundamental concept in Object-Oriented Programming that controls the visibility and accessibility of class members (variables and methods). It's a key part of **encapsulation**, a core OOP principle. By restricting access, we can:

*   Prevent accidental modification of data from outside the class, maintaining data integrity.
*   Hide internal implementation details, allowing us to change them without affecting code that uses the class.
*   Improve code maintainability and reusability.

Java provides four access modifiers that define the access level of class members:

*   `private`
*   `default` (no modifier specified)
*   `protected`
*   `public`

### 2. Access Modifiers in Detail

Here's a breakdown of each access modifier and their scope:

| Access Modifier | Visibility Scope                                                                                                               |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------|
| `private`        | Visible only within the class where it is declared.  No other class, even subclasses, can access it directly.                    |
| `default`        | Visible within the package where the class is located.  Also known as "package-private" or "package access".                    |
| `protected`      | Visible within the package where the class is located, and also to subclasses (even in different packages).                   |
| `public`         | Visible from anywhere in the program, including other classes in the same package, other packages, and subclasses.           |

**2.1 `private`:**

*   **Definition:** The most restrictive access level.
*   **Usage:** Used to hide internal implementation details and prevent direct access to sensitive data from outside the class.
*   **Example:**

    ```java
    class BankAccount {
        private double balance; // Only accessible within BankAccount class

        public BankAccount(double initialBalance) {
            this.balance = initialBalance;
        }

        public double getBalance() {
            return balance; // Accessing private member within the class
        }

        public void deposit(double amount) {
            balance += amount;
        }
    }

    public class Main {
        public static void main(String[] args) {
            BankAccount account = new BankAccount(1000);
            // account.balance = 500;  // Error: balance has private access in BankAccount
            System.out.println("Balance: " + account.getBalance()); // Correct way to access balance
        }
    }
    ```
*   **Important Point:**  `private` members are not inherited by subclasses.  A subclass cannot directly access `private` members of its superclass.

**2.2 `default` (Package-Private):**

*   **Definition:**  When no access modifier is specified, the member has package-private access.
*   **Usage:** Allows classes within the same package to collaborate and share data, while hiding it from classes in other packages.
*   **Example:**

    Let's say we have two classes, `Employee` and `SalaryCalculator`, in the same package `com.example.payroll`:

    ```java
    // com.example.payroll/Employee.java
    package com.example.payroll;

    class Employee { // default access - class itself
        String name; // default access
        int employeeId; // default access

        Employee(String name, int employeeId) {
            this.name = name;
            this.employeeId = employeeId;
        }
    }

    // com.example.payroll/SalaryCalculator.java
    package com.example.payroll;

    public class SalaryCalculator {
        public static void main(String[] args) {
            Employee emp = new Employee("John Doe", 12345);
            System.out.println("Employee Name: " + emp.name); // Accessible because in the same package
        }
    }
    ```

    Now, let's try to access the `Employee` class and its members from a different package `com.example.company`:

    ```java
    // com.example.company/Company.java
    package com.example.company;

    import com.example.payroll.Employee; // Compilation error if Employee were default

    public class Company {
        public static void main(String[] args) {
            // Employee emp = new Employee("Jane Smith", 67890);  // Error: Employee is not public in com.example.payroll; cannot be accessed from outside package
            // System.out.println(emp.name); // Error: name has default access in com.example.payroll.Employee
        }
    }
    ```
*   **Important Point:** The `default` access modifier provides a good balance between security and collaboration within a package.

**2.3 `protected`:**

*   **Definition:** Visible within the package and also to subclasses (even if they are in a different package).
*   **Usage:** Useful when you want to allow subclasses to inherit and potentially modify certain members, but you don't want those members to be directly accessible from unrelated classes outside the package.
*   **Example:**

    ```java
    // com.example.animal/Animal.java
    package com.example.animal;

    public class Animal {
        protected String name; // Accessible within the package and by subclasses

        public Animal(String name) {
            this.name = name;
        }

        protected void makeSound() { // Accessible within the package and by subclasses
            System.out.println("Generic animal sound");
        }
    }

    // com.example.animal/Dog.java
    package com.example.animal;

    public class Dog extends Animal {
        public Dog(String name) {
            super(name);
        }

        @Override
        public void makeSound() {
            System.out.println("Woof!");  // Overriding protected method
        }

        public void displayDogInfo() {
            System.out.println("Dog Name: " + name); // Accessing protected member in subclass
        }
    }

    // com.example.zoo/Zoo.java
    package com.example.zoo;

    import com.example.animal.Animal;
    import com.example.animal.Dog;

    public class Zoo {
        public static void main(String[] args) {
            Animal animal = new Animal("Generic Animal");
            // System.out.println(animal.name); // Error: name has protected access in Animal - only accessible within package or via subclass
            Dog dog = new Dog("Buddy");
            System.out.println("Dog's Name:" + dog.name); // Accessible because Zoo is in a different package and Dog is a subclass of Animal.
            dog.makeSound(); // Calls Dog's overriden makeSound() method.
        }
    }
    ```
*   **Important Points:**
    *   `protected` provides more access than `default` when inheritance is involved.
    *   If a subclass overrides a `protected` method, the overridden method in the subclass can be more restrictive (e.g., `private`) but not less restrictive (e.g., `public`).

**2.4 `public`:**

*   **Definition:**  The least restrictive access level.
*   **Usage:** Used for methods and variables that need to be accessed from anywhere in the program.  Generally used for the public interface of a class.
*   **Example:**

    ```java
    // com.example.utility/MathUtils.java
    package com.example.utility;

    public class MathUtils {
        public static int add(int a, int b) {
            return a + b;
        }
    }

    // com.example.application/MyApp.java
    package com.example.application;

    import com.example.utility.MathUtils;

    public class MyApp {
        public static void main(String[] args) {
            int sum = MathUtils.add(5, 3); // Accessible because add() is public
            System.out.println("Sum: " + sum);
        }
    }
    ```
*   **Important Points:**
    *   Use `public` judiciously. Overuse of `public` can weaken encapsulation and make your code more difficult to maintain.
    *   Classes themselves can also be declared as `public` or `default` (package-private).  A `public` class is accessible from any package.  A `default` class is only accessible within its package.

### 3. Encapsulation and Access Protection

Access protection is crucial for achieving encapsulation. Encapsulation is the bundling of data and methods that operate on that data within a class, and restricting direct access to some of the class's components.  We typically make instance variables `private` and provide `public` methods (getters and setters) to access and modify them in a controlled manner.

**Example:**

```java
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name; // Getter method
    }

    public void setName(String newName) {
        if (newName != null && !newName.isEmpty()) {
            this.name = newName; // Setter method with validation
        } else {
            System.out.println("Invalid name.");
        }
    }

    public int getAge() {
        return age;
    }

    public void setAge(int newAge) {
        if (newAge >= 0 && newAge <= 150) { //Age validation
            this.age = newAge;
        } else {
            System.out.println("Invalid age.");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Alice", 30);
        System.out.println("Name: " + person.getName());
        person.setName("Bob");
        System.out.println("Name: " + person.getName());
        person.setAge(-5); // prints "Invalid age." and age is not changed.
        System.out.println("Age: " + person.getAge());
    }
}
```

In this example:

*   `name` and `age` are `private`, preventing direct modification.
*   `getName()`, `setName()`, `getAge()`, and `setAge()` provide controlled access. The `setName()` and `setAge()` methods include validation to ensure data integrity.

### 4. Implications of Access Modifiers

Choosing the correct access modifier is important. Consider these points:

*   **`private`:**  Provides the highest level of security.  Use it for data that should not be directly accessed or modified from outside the class.
*   **`default`:**  Good for internal implementation details within a package.  Use it when you want classes in the same package to collaborate without exposing those details to other packages.
*   **`protected`:**  Appropriate for members that subclasses might need to access or override.
*   **`public`:**  Use sparingly.  Only make methods and variables `public` if they are part of the class's public API and are intended to be used by code outside the class and package.

### 5. Best Practices

*   **Favor the most restrictive access level possible.** Start with `private` and only increase the visibility if necessary.
*   **Use getters and setters (accessor and mutator methods) for controlled access to `private` data.** This allows you to add validation and logic to how data is accessed and modified.
*   **Carefully consider the impact of making members `protected`.**  It exposes them to subclasses, which can potentially break encapsulation if not used wisely.
*   **Document the intended use of each `public` method.**

### 6. Practice Questions and Exercises

**Question 1:**

What is the purpose of access modifiers in Java?

**Answer:**

Access modifiers control the visibility and accessibility of class members (variables and methods), providing encapsulation and data protection.

**Question 2:**

Explain the difference between `private`, `default`, and `protected` access modifiers.

**Answer:**

*   `private`: Accessible only within the declaring class.
*   `default`: Accessible within the same package.
*   `protected`: Accessible within the same package and by subclasses, even in different packages.

**Question 3:**

When should you use the `public` access modifier?

**Answer:**

Use the `public` access modifier when a class, method, or variable needs to be accessible from anywhere in the program. Use it for the public interface of a class.

**Question 4:**

Why is encapsulation important, and how do access modifiers help achieve it?

**Answer:**

Encapsulation is important because it hides internal implementation details, protects data integrity, and allows for easier maintenance and modification of code. Access modifiers allow you to control which parts of a class are accessible from outside, ensuring that data is only accessed and modified through controlled methods (getters and setters).

**Exercise 1:**

Create a class called `Employee` with the following attributes: `name` (String), `salary` (double), and `employeeId` (int). Make `name` and `salary` `private`, `employeeId` `protected`, and provide `public` getter methods for all three attributes.  Create a setter method for salary (with appropriate validation) that is also public. Create a subclass called `Manager` in a different package. Inside the `Manager` class, try to access the `name`, `salary`, and `employeeId` directly and print them and using the getter method for them and print them. Explain which members you could and could not access and why.

**Answer:**

```java
// Employee.java
package com.example.company;

public class Employee {
    private String name;
    private double salary;
    protected int employeeId;

    public Employee(String name, double salary, int employeeId) {
        this.name = name;
        this.salary = salary;
        this.employeeId = employeeId;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        if (salary > 0) {
            this.salary = salary;
        } else {
            System.out.println("Invalid salary.");
        }
    }

    public int getEmployeeId() {
        return employeeId;
    }
}

// Manager.java
package com.example.management;

import com.example.company.Employee;

public class Manager extends Employee {
    public Manager(String name, double salary, int employeeId) {
        super(name, salary, employeeId);
    }

    public void displayInfo() {
        // Cannot access name and salary directly (private)
        // System.out.println("Name: " + name); // Error: name has private access
        // System.out.println("Salary: " + salary); // Error: salary has private access

        System.out.println("Employee ID using employeeId directly : " + employeeId); //Correct

        System.out.println("Name: " + getName()); //Correct via getter
        System.out.println("Salary: " + getSalary()); //Correct via getter
        System.out.println("Employee ID: " + getEmployeeId());  // Correct via getter
    }

    public static void main(String[] args) {
        Manager manager = new Manager("Alice Smith", 80000.0, 54321);
        manager.displayInfo();
    }
}
```

**Explanation:**

*   `name` and `salary` are `private` in the `Employee` class, so they cannot be accessed directly from the `Manager` class, even though it's a subclass.  We can only access them using the `public` getter methods.
*   `employeeId` is `protected` in the `Employee` class. Since `Manager` is a subclass of `Employee`, it can access `employeeId` directly (as well as through the getter).
*   We use public getter methods `getName`, `getSalary`, `getEmployeeId` to access all the attributes from the Manager class.

### 7. Important Points to Remember

*   Access modifiers are a key part of encapsulation.
*   Choose the most restrictive access modifier that meets your needs.
*   Use getters and setters for controlled access to private data.
*   Understand the implications of inheritance when using `protected` access.
*   Overuse of `public` can weaken encapsulation and make code harder to maintain.
---
This comprehensive set of notes covers the learning outcomes by defining access protection, explaining each access modifier with examples, demonstrating visibility control, and providing practice questions with detailed answers. It highlights important points to remember and adheres to the markdown formatting guidelines. Good luck with your studying!
