---
title: "Method Overriding"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfaa"
status: "completed"
scrapedAt: "2026-05-20T16:56:14.203Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism

## Topic: Method Overriding

---

### 1. Introduction to Method Overriding

Method overriding is a core concept within polymorphism, specifically **runtime polymorphism** (also known as dynamic polymorphism). It allows a subclass to provide its own specific implementation of a method that is already defined in its superclass.

**Key Concepts:**

*   **Inheritance:** Method overriding is only possible when a subclass inherits from a superclass. The method being overridden must exist in the superclass.
*   **Same Method Signature:** The overridden method in the subclass must have the **exact same name and parameter list** (number, type, and order of parameters) as the method in the superclass.
*   **Relationship:** The subclass's method is a specialized version of the superclass's method.

**Why is Method Overriding Important?**

*   **Code Reusability & Specialization:** It allows you to inherit general behavior from a superclass and then tailor that behavior to the specific needs of the subclass.
*   **Polymorphism:** It enables you to treat objects of different subclasses in a uniform way through a reference of the superclass. The correct method version will be executed at runtime based on the actual object type.
*   **Abstraction:** It can be used to provide a common interface in the superclass while allowing subclasses to implement the details.

---

### 2. Learning Outcomes Covered

This section will cover the following learning outcomes:

*   **Understanding the concept of method overriding.**
*   **Identifying the conditions for method overriding.**
*   **Differentiating method overriding from method overloading.**
*   **Implementing method overriding in programming languages.**
*   **Explaining the role of method overriding in achieving polymorphism.**

---

### 3. Conditions for Method Overriding

For a method in a subclass to be considered an override of a method in its superclass, the following conditions must be met:

*   **Inheritance:** The subclass must inherit from the superclass.
*   **Same Method Name:** The method in the subclass must have the same name as the method in the superclass.
*   **Same Parameter List:** The method in the subclass must have the same number, type, and order of parameters as the method in the superclass.
*   **Same Return Type (or Covariant Return Types):**
    *   In many languages, the return type of the overridden method must be the same as the superclass method.
    *   Some languages (like Java) allow **covariant return types**, where the subclass method can return a subtype of the superclass method's return type.
*   **Access Modifier:** The access modifier of the overridden method in the subclass must be **the same or a more permissive** access level than the method in the superclass.
    *   **Example:** If a superclass method is `public`, the subclass method can be `public`. If the superclass method is `protected`, the subclass method can be `protected` or `public`. It cannot be made more restrictive (e.g., `private`).
*   **Exception Handling:**
    *   The overridden method cannot throw checked exceptions that are *not* declared in the superclass method's `throws` clause.
    *   It can throw fewer checked exceptions or exceptions that are subclasses of those declared in the superclass method.
    *   It can throw any unchecked exceptions (runtime exceptions).

**Important Point to Remember:** Constructors and private methods cannot be overridden.

---

### 4. Method Overriding vs. Method Overloading

It's crucial to distinguish method overriding from method overloading, as they are often confused.

| Feature          | Method Overriding                                     | Method Overloading                                       |
| :--------------- | :---------------------------------------------------- | :------------------------------------------------------- |
| **Concept**      | Subclass provides a specific implementation of a method inherited from its superclass. | Defining multiple methods with the same name in the same class, but with different parameter lists. |
| **Inheritance**  | Requires inheritance (method in subclass overrides method in superclass). | Does not require inheritance. Occurs within the same class. |
| **Method Signature** | Must have the **same name and same parameter list**. | Must have the **same name but different parameter lists** (different number, type, or order of parameters). |
| **Runtime Behavior** | Resolved at **runtime** (dynamic polymorphism).     | Resolved at **compile-time** (static polymorphism).      |
| **Purpose**      | Achieve specialization and runtime polymorphism.      | Provide different ways to perform a similar operation based on input. |
| **Return Type**  | Must be the same or covariant.                        | Can be different, but not the sole distinguishing factor. |
| **Access Modifier** | Same or more permissive.                             | No specific restriction related to access modifiers.      |

**Example:**

```java
// Superclass
class Animal {
    void eat() {
        System.out.println("Animal is eating.");
    }
}

// Subclass
class Dog extends Animal {
    // Method Overriding: Same name, same parameters
    @Override // Annotation is good practice
    void eat() {
        System.out.println("Dog is eating kibble.");
    }

    // Method Overloading: Same name, different parameters
    void eat(String food) {
        System.out.println("Dog is eating " + food + ".");
    }
}

// Another Subclass
class Cat extends Animal {
    // Method Overriding
    @Override
    void eat() {
        System.out.println("Cat is eating fish.");
    }
}
```

In the example above:
*   `Dog`'s `eat()` method overrides `Animal`'s `eat()` method.
*   `Dog`'s `eat(String food)` method overloads `Animal`'s `eat()` method (and also overloads `Dog`'s own `eat()` method).
*   `Cat`'s `eat()` method also overrides `Animal`'s `eat()` method.

---

### 5. Implementing Method Overriding

Method overriding is implemented by defining a method in a subclass that has the same signature as a method in its superclass.

**Using the `super` Keyword:**

Sometimes, you might want to extend the functionality of the superclass method rather than completely replacing it. You can do this by calling the superclass's version of the method using the `super` keyword.

**Example:**

```java
// Superclass
class Vehicle {
    void move() {
        System.out.println("Vehicle is moving.");
    }
}

// Subclass
class Car extends Vehicle {
    @Override
    void move() {
        // Call the superclass's move() method first
        super.move();
        // Add specific behavior for Car
        System.out.println("Car is driving on the road.");
    }
}
```

**Annotation (`@Override`)**

Many modern programming languages (like Java, C#) support an `@Override` annotation. This is highly recommended:

*   **Compile-time Check:** The compiler checks if the annotated method is indeed overriding a superclass method. If not, it will generate a compile-time error. This helps catch mistakes early.
*   **Readability:** It clearly indicates the programmer's intent.

---

### 6. Role of Method Overriding in Polymorphism

Method overriding is the mechanism that enables **runtime polymorphism**.

*   **Dynamic Dispatch/Late Binding:** When you have a superclass reference pointing to a subclass object, and you call an overridden method through that reference, the decision of which method implementation to execute (the superclass's or the subclass's) is made at **runtime**, based on the actual type of the object.

**Example (Continuing from above):**

```java
// Superclass reference
Vehicle myVehicle = new Car(); // A Car object referred to by a Vehicle reference

// When move() is called, the JVM looks at the actual object type (Car)
// and executes the overridden move() method in the Car class.
myVehicle.move();
```

**Output:**

```
Vehicle is moving.
Car is driving on the road.
```

**How it demonstrates Polymorphism:**

*   We can treat `Car` objects, `Motorcycle` objects, `Truck` objects (all subclasses of `Vehicle`) uniformly through `Vehicle` references.
*   When we call `move()` on these different objects, the appropriate `move()` behavior for each specific vehicle type is executed. This is polymorphism in action – "many forms."

---

### 7. Practice Questions and Exercises

**Question 1:**

Which of the following are valid conditions for method overriding?
A. Same method name, different parameter list.
B. Same method name, same parameter list, subclass method has more restrictive access.
C. Same method name, same parameter list, subclass method throws a new checked exception not declared in the superclass.
D. Same method name, same parameter list, same return type, and same or more permissive access.

**Question 2:**

What is the primary difference between method overriding and method overloading?

**Question 3:**

Consider the following code snippet:

```java
class Shape {
    void draw() {
        System.out.println("Drawing a generic shape.");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a circle.");
    }

    void draw(String style) {
        System.out.println("Drawing a circle with style: " + style);
    }
}

class Square extends Shape {
    // Missing override annotation
    void draw() {
        System.out.println("Drawing a square.");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape s1 = new Circle();
        Shape s2 = new Square();
        Circle c1 = new Circle();

        s1.draw();
        s2.draw();
        c1.draw();
        c1.draw("dashed");
    }
}
```

What will be the output of the `main` method?

**Question 4:**

Can a private method of a superclass be overridden? Explain why or why not.

**Question 5:**

Explain the role of the `super` keyword when used in an overridden method.

---

### 8. Answers to Practice Questions

**Answer 1:**

D. Same method name, same parameter list, same return type, and same or more permissive access.

*   A is incorrect because it describes overloading.
*   B is incorrect because the access modifier cannot be more restrictive.
*   C is incorrect because a subclass method cannot throw new checked exceptions that are not declared in the superclass.

**Answer 2:**

The primary difference is that **method overriding** requires inheritance and involves a subclass providing its own implementation of a method with the **same signature** (name and parameters) as the superclass method, resolved at **runtime**. **Method overloading** occurs within the same class and involves defining multiple methods with the **same name but different parameter lists**, resolved at **compile-time**.

**Answer 3:**

```
Drawing a circle.
Drawing a square.
Drawing a circle.
Drawing a circle with style: dashed
```

**Explanation:**

*   `s1.draw();`: `s1` is a `Shape` reference pointing to a `Circle` object. The `draw()` method in `Circle` overrides the one in `Shape`, so `Circle`'s `draw()` is called.
*   `s2.draw();`: `s2` is a `Shape` reference pointing to a `Square` object. The `draw()` method in `Square` overrides the one in `Shape`, so `Square`'s `draw()` is called. (Note: Even without `@Override`, if the signature matches and it's not private, it's treated as an override. The `@Override` annotation would catch the missing annotation, but it wouldn't prevent execution here unless there was a signature mismatch.)
*   `c1.draw();`: `c1` is a `Circle` reference pointing to a `Circle` object. The `draw()` method specific to `Circle` is called.
*   `c1.draw("dashed");`: This calls the overloaded `draw(String style)` method in the `Circle` class.

**Answer 4:**

No, a private method of a superclass cannot be overridden. Private methods are not accessible outside their own class. Therefore, a subclass cannot access or provide an alternative implementation for a private method of its superclass.

**Answer 5:**

The `super` keyword is used within an overridden method in a subclass to explicitly call the implementation of that method from its immediate superclass. This is useful when you want to extend the functionality of the superclass method rather than completely replacing it. For example, you might perform some initialization or logging in the superclass method and then add subclass-specific logic.

---

### 9. Important Points to Remember

*   **Method overriding is about specialization:** Extending or modifying inherited behavior.
*   **Method overloading is about convenience:** Providing different ways to call a method with different inputs.
*   **Runtime Polymorphism:** Method overriding is the key to achieving polymorphism that is resolved at runtime.
*   **`@Override` Annotation:** Always use it where supported for compile-time checks and improved code clarity.
*   **Access Modifiers:** Be mindful of how access modifiers change between the superclass and subclass methods.
*   **Constructors and Private Methods:** Cannot be overridden.

---
