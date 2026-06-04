---
title: "SOLID Principles in Java ( https://www.javatpoint.com/solid-principles-java)"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: SOLID Principles in Java ( https://www.javatpoint.com/solid"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acc8"
status: "completed"
scrapedAt: "2026-05-20T16:29:11.529Z"
---
# SOLID Principles in Java

## Introduction

SOLID is an acronym representing five design principles intended to make software designs more understandable, flexible, and maintainable. These principles are a subset of many principles promoted by Robert C. Martin (also known as Uncle Bob). By applying these principles, you reduce dependencies, improve code reusability, and minimize the risk of introducing bugs when changes are made.

This document provides comprehensive study notes on SOLID principles in Java, covering key concepts, examples, and practice questions.

## 1. Learning Outcomes

By the end of this module, you should be able to:

*   Understand the SOLID principles.
*   Explain each SOLID principle with examples.
*   Identify violations of SOLID principles in code.
*   Refactor code to adhere to SOLID principles.
*   Apply SOLID principles in your own Java projects.

## 2. Key Concepts and Definitions

SOLID stands for:

*   **S**ingle Responsibility Principle (SRP)
*   **O**pen/Closed Principle (OCP)
*   **L**iskov Substitution Principle (LSP)
*   **I**nterface Segregation Principle (ISP)
*   **D**ependency Inversion Principle (DIP)

Let's explore each principle in detail.

## 3. Single Responsibility Principle (SRP)

### 3.1. Definition

A class should have only one reason to change.  In other words, a class should have only one responsibility.

### 3.2. Explanation

If a class has multiple responsibilities, changes to one responsibility might inadvertently affect the others. This leads to unpredictable behavior, tighter coupling, and increased complexity.  It becomes harder to test, maintain, and reuse.

### 3.3. Example: Violation of SRP

```java
class Employee {
    private String employeeId;
    private String name;
    private String email;
    private double salary;

    public Employee(String employeeId, String name, String email, double salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.email = email;
        this.salary = salary;
    }

    // Methods related to employee data (getters/setters omitted for brevity)

    public void calculatePay() {
        // Logic to calculate employee's pay
        System.out.println("Calculating pay for " + name);
    }

    public void generateReport() {
        // Logic to generate employee report
        System.out.println("Generating report for " + name);
    }

    public void saveEmployeeData() {
        // Logic to save employee data to a database
        System.out.println("Saving employee data for " + name);
    }
}
```

**Problem:** The `Employee` class has three responsibilities:

1.  Managing employee data.
2.  Calculating pay.
3.  Generating reports.
4.  Saving data to database.

If the reporting requirements change, you would have to modify the `Employee` class, even though the pay calculation or employee data management hasn't changed.

### 3.4. Example: Adhering to SRP

```java
class Employee {
    private String employeeId;
    private String name;
    private String email;
    private double salary;

    public Employee(String employeeId, String name, String email, double salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.email = email;
        this.salary = salary;
    }

    // Methods related to employee data (getters/setters omitted for brevity)
}

class PayCalculator {
    public void calculatePay(Employee employee) {
        // Logic to calculate employee's pay
        System.out.println("Calculating pay for " + employee.name);
    }
}

class EmployeeReportGenerator {
    public void generateReport(Employee employee) {
        // Logic to generate employee report
        System.out.println("Generating report for " + employee.name);
    }
}

class EmployeeRepository {
    public void saveEmployeeData(Employee employee) {
        // Logic to save employee data to a database
        System.out.println("Saving employee data for " + employee.name);
    }
}
```

**Solution:**

1.  `Employee`:  Only holds employee data.
2.  `PayCalculator`:  Calculates the employee's pay.
3.  `EmployeeReportGenerator`: Generates reports.
4.  `EmployeeRepository`: Saves data to the database.

Now, each class has a single responsibility. Changes to the reporting logic will only affect the `EmployeeReportGenerator` class.

### 3.5. Important Points to Remember

*   SRP aims for high cohesion (related responsibilities within a class) and low coupling (minimal dependencies between classes).
*   It can sometimes lead to more classes, but the benefit is increased maintainability and reusability.
*   Identifying the correct responsibilities is crucial.  Consider what aspects of a class are likely to change and separate them accordingly.

## 4. Open/Closed Principle (OCP)

### 4.1. Definition

Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

### 4.2. Explanation

This means you should be able to add new functionality to a system without modifying existing code.  This is achieved through abstraction. Instead of modifying existing classes to accommodate new features, you create new classes that extend the existing ones or implement interfaces.

### 4.3. Example: Violation of OCP

```java
class Shape {
    String type;

    public Shape(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}

class AreaCalculator {
    public double calculateArea(Shape shape) {
        if (shape.getType().equals("Rectangle")) {
            // Calculate rectangle area
            return 10;  // Dummy area
        } else if (shape.getType().equals("Circle")) {
            // Calculate circle area
            return 5;  // Dummy area
        }
        return 0;
    }
}
```

**Problem:** If you want to add a new shape (e.g., Triangle), you have to modify the `AreaCalculator` class, violating the OCP.

### 4.4. Example: Adhering to OCP

```java
interface Shape {
    double calculateArea();
}

class Rectangle implements Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double calculateArea() {
        return width * height;
    }
}

class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Triangle implements Shape {
    private double base;
    private double height;

    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    public double calculateArea() {
        return 0.5 * base * height;
    }
}

class AreaCalculator {
    public double calculateArea(Shape shape) {
        return shape.calculateArea();
    }
}
```

**Solution:**

1.  Define an interface `Shape` with a `calculateArea()` method.
2.  Implement the `Shape` interface for each shape (Rectangle, Circle, Triangle).
3.  `AreaCalculator` now takes any `Shape` object and calls its `calculateArea()` method.

Now, to add a new shape, you simply create a new class that implements the `Shape` interface without modifying the `AreaCalculator` class.

### 4.5. Important Points to Remember

*   Abstraction is key to achieving OCP. Use interfaces and abstract classes to define common behavior.
*   Carefully consider potential future extensions when designing your classes.
*   OCP can lead to more classes and a more complex initial design, but it simplifies future maintenance and extensions.

## 5. Liskov Substitution Principle (LSP)

### 5.1. Definition

Subtypes must be substitutable for their base types without altering the correctness of the program.

### 5.2. Explanation

This means that if you have a class `B` that inherits from class `A`, you should be able to use an object of class `B` anywhere you would use an object of class `A` without causing unexpected behavior or errors.  Essentially, a subclass should not narrow the behavior of its base class in a way that surprises the user.

### 5.3. Example: Violation of LSP

```java
class Rectangle {
    protected double width;
    protected double height;

    public void setWidth(double width) {
        this.width = width;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getArea() {
        return width * height;
    }
}

class Square extends Rectangle {
    @Override
    public void setWidth(double width) {
        super.setWidth(width);
        super.setHeight(width);
    }

    @Override
    public void setHeight(double height) {
        super.setHeight(height);
        super.setWidth(height);
    }
}

//Client code
public class Main {
    public static void main(String[] args) {
        Rectangle rect = new Square();
        rect.setWidth(5);
        rect.setHeight(10);

        System.out.println("Area: " + rect.getArea()); // Output: Area: 100 (incorrect)
    }
}
```

**Problem:**  The `Square` class inherits from `Rectangle`.  However, a square's width and height are always equal.  The `setWidth` and `setHeight` methods in `Square` override the base class's methods to maintain this invariant.

In the `Main` class, the client code uses a `Square` object as a `Rectangle`. The client expects `setWidth(5)` and `setHeight(10)` to set the width to 5 and the height to 10, respectively. However, because it is a `Square`, setting the height also sets the width to 10, resulting in an incorrect area calculation of 100.  This violates the LSP.  `Square` is *not* a substitutable subtype of `Rectangle` in all contexts.

### 5.4. Example: Adhering to LSP (and potentially SRP as well)

```java
interface Shape {
    double getArea();
}

class Rectangle implements Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    @Override
    public double getArea() {
        return width * height;
    }
}

class Square implements Shape {
    private double side;

    public Square(double side) {
        this.side = side;
    }

    public double getSide() {
        return side;
    }

    public void setSide(double side) {
        this.side = side;
    }

    @Override
    public double getArea() {
        return side * side;
    }
}

//Client code
public class Main {
    public static void main(String[] args) {
        Shape rect = new Rectangle(5, 10);
        System.out.println("Rectangle Area: " + rect.getArea()); // Output: Rectangle Area: 50

        Shape square = new Square(5);
        System.out.println("Square Area: " + square.getArea()); // Output: Square Area: 25

    }
}
```

**Solution:**

1.  Introduce a `Shape` interface with a `getArea()` method.
2.  Implement `Rectangle` and `Square` as separate classes implementing `Shape`.  They no longer inherit from each other.

Now, `Square` and `Rectangle` are distinct classes. The client code treats them according to their intended behavior, ensuring the LSP is upheld. You are no longer trying to *force* Square to *be* a Rectangle.  You are representing them both as Shapes.

### 5.5. Important Points to Remember

*   Subclasses should not introduce new exceptions that the client code is not expecting from the base class.
*   Preconditions cannot be strengthened in a subtype. (A subclass method cannot require more than its parent's method)
*   Postconditions cannot be weakened in a subtype. (A subclass method cannot promise less than its parent's method)
*   Avoid designing class hierarchies where subtypes have significantly different behavior than their base types. If they do, consider alternative designs, such as using interfaces or composition.

## 6. Interface Segregation Principle (ISP)

### 6.1. Definition

Clients should not be forced to depend on methods they do not use.

### 6.2. Explanation

This means that instead of having one large, general-purpose interface, it is better to have multiple smaller, more specific interfaces.  Classes should only implement the interfaces that are relevant to their functionality.

### 6.3. Example: Violation of ISP

```java
interface Machine {
    void print();
    void scan();
    void fax();
}

class OldFashionedPrinter implements Machine {
    @Override
    public void print() {
        // Implementation for printing
        System.out.println("Printing...");
    }

    @Override
    public void scan() {
        throw new UnsupportedOperationException("Scanning not supported");
    }

    @Override
    public void fax() {
        throw new UnsupportedOperationException("Faxing not supported");
    }
}
```

**Problem:**  The `Machine` interface has three methods: `print`, `scan`, and `fax`. The `OldFashionedPrinter` class only supports printing. It is forced to implement the `scan` and `fax` methods, even though it doesn't use them. This violates the ISP.  Clients of `OldFashionedPrinter` might expect it to *be* a full `Machine` and try to use `scan` or `fax`, leading to exceptions.

### 6.4. Example: Adhering to ISP

```java
interface Printer {
    void print();
}

interface Scanner {
    void scan();
}

interface Fax {
    void fax();
}

class ModernPrinter implements Printer, Scanner, Fax {
    @Override
    public void print() {
        System.out.println("Printing...");
    }

    @Override
    public void scan() {
        System.out.println("Scanning...");
    }

    @Override
    public void fax() {
        System.out.println("Faxing...");
    }
}

class SimplePrinter implements Printer {
    @Override
    public void print() {
        System.out.println("Printing...");
    }
}
```

**Solution:**

1.  Create separate interfaces for each functionality: `Printer`, `Scanner`, and `Fax`.
2.  `ModernPrinter` implements all three interfaces because it supports all functionalities.
3.  `SimplePrinter` only implements the `Printer` interface because it only supports printing.

Now, clients only depend on the interfaces they need. `SimplePrinter` isn't forced to implement methods it doesn't use.

### 6.5. Important Points to Remember

*   ISP promotes loose coupling by allowing clients to depend only on the specific interfaces they need.
*   It reduces the risk of unnecessary code changes when one of the unused interface methods changes.
*   Sometimes applying the ISP can lead to a larger number of interfaces, but the benefits in terms of flexibility and maintainability outweigh the complexity.

## 7. Dependency Inversion Principle (DIP)

### 7.1. Definition

1.  High-level modules should not depend on low-level modules. Both should depend on abstractions.
2.  Abstractions should not depend on details. Details should depend on abstractions.

### 7.2. Explanation

This means that instead of high-level modules (e.g., business logic) directly depending on low-level modules (e.g., database access), both should depend on abstractions (e.g., interfaces). This decouples the modules and makes the system more flexible and testable.

### 7.3. Example: Violation of DIP

```java
class EmailService {
    public void sendEmail(String message) {
        System.out.println("Sending email: " + message);
    }
}

class NotificationService {
    private EmailService emailService = new EmailService();

    public void sendNotification(String message) {
        emailService.sendEmail(message);
    }
}
```

**Problem:** The `NotificationService` (high-level module) directly depends on the `EmailService` (low-level module).  If you wanted to switch to a different notification method (e.g., SMS), you would have to modify the `NotificationService` class. This violates the DIP.  Also, the `NotificationService` is tightly coupled to `EmailService`, making it hard to test in isolation.

### 7.4. Example: Adhering to DIP

```java
interface MessageService {
    void sendMessage(String message);
}

class EmailService implements MessageService {
    @Override
    public void sendMessage(String message) {
        System.out.println("Sending email: " + message);
    }
}

class SMSService implements MessageService {
    @Override
    public void sendMessage(String message) {
        System.out.println("Sending SMS: " + message);
    }
}

class NotificationService {
    private MessageService messageService;

    public NotificationService(MessageService messageService) {
        this.messageService = messageService;
    }

    public void sendNotification(String message) {
        messageService.sendMessage(message);
    }
}

// Usage (Dependency Injection)
public class Main {
    public static void main(String[] args) {
        MessageService emailService = new EmailService();
        NotificationService notificationService = new NotificationService(emailService);
        notificationService.sendNotification("Hello!");

        MessageService smsService = new SMSService();
        NotificationService notificationService2 = new NotificationService(smsService);
        notificationService2.sendNotification("Alert!");
    }
}
```

**Solution:**

1.  Define an interface `MessageService` with a `sendMessage()` method.
2.  `EmailService` and `SMSService` implement the `MessageService` interface.
3.  `NotificationService` depends on the `MessageService` interface, not on concrete implementations.  It receives the `MessageService` instance through its constructor (Dependency Injection).

Now, you can easily switch between different message services without modifying the `NotificationService` class.  You can also test `NotificationService` with a mock `MessageService`.

### 7.5. Important Points to Remember

*   Dependency injection (constructor injection, setter injection, interface injection) is a common technique for implementing DIP.
*   DIP promotes loose coupling, making the system more flexible, testable, and maintainable.
*   It allows for easier substitution of implementations at runtime.
*   Inversion of control (IoC) containers are often used to manage dependencies and automatically inject them into objects.

## 8. Practice Questions/Exercises

1.  **Question:**  Explain the Single Responsibility Principle (SRP) in your own words. Give a real-world example of a class that violates the SRP and describe how you would refactor it.
    *   **Answer:** SRP states that a class should have only one reason to change. For example, a `User` class that handles both user data and database access violates SRP.  I would refactor it into separate `User` and `UserRepository` classes.

2.  **Question:** What is the Open/Closed Principle (OCP)? How can you design your code to adhere to OCP?
    *   **Answer:** OCP states that software entities should be open for extension but closed for modification. You can achieve this through abstraction (interfaces and abstract classes) and dependency injection.

3.  **Question:** Describe a scenario where the Liskov Substitution Principle (LSP) might be violated. How could you fix it?
    *   **Answer:** The classic example is a `Square` inheriting from `Rectangle`, as demonstrated in the examples above.  Fix it by removing the inheritance relationship and potentially having them both implement a `Shape` interface.

4.  **Question:** Explain the Interface Segregation Principle (ISP) and why it is important.
    *   **Answer:** ISP states that clients should not be forced to depend on methods they do not use.  It's important because it promotes loose coupling and reduces the risk of unnecessary code changes.

5.  **Question:** What is the Dependency Inversion Principle (DIP)? How does it improve the flexibility and testability of your code?
    *   **Answer:** DIP states that high-level modules should not depend on low-level modules, and both should depend on abstractions.  It improves flexibility by allowing you to switch implementations easily and testability by allowing you to use mock objects for dependencies.

6.  **Exercise:** Consider a class that handles order processing. It includes methods for validating the order, calculating the total price, applying discounts, and sending a confirmation email.  Identify which SOLID principles are potentially violated in this design.  Describe how you would refactor the code to adhere to these principles.

    * **Answer:** This class likely violates SRP (multiple responsibilities: validation, calculation, discounts, email) and potentially DIP if it directly instantiates classes for email sending or discount calculations.  Refactor into separate classes: `OrderValidator`, `PriceCalculator`, `DiscountApplicator`, `EmailService`, and inject instances of these into the `OrderProcessor` class using interfaces.

## 9. Conclusion

The SOLID principles are valuable guidelines for designing robust, maintainable, and extensible object-oriented software.  By understanding and applying these principles, you can create code that is easier to understand, modify, and test.  While applying SOLID principles can sometimes lead to more classes and a more complex initial design, the long-term benefits in terms of maintainability and flexibility are significant.  Remember that SOLID is a guideline, not a strict rule; use your judgment to apply the principles appropriately to your specific situation.
