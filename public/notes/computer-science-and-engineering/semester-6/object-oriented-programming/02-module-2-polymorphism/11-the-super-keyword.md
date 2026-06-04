---
title: "The super keyword"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfa7"
status: "completed"
scrapedAt: "2026-05-20T16:56:12.022Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 2: Polymorphism

### Topic: The `super` Keyword

---

### 1. Introduction to `super`

The `super` keyword in Object-Oriented Programming (OOP) is a powerful tool used primarily within **inheritance hierarchies**. It acts as a reference to the **immediate parent class** of the current class. This allows you to access and invoke members (methods and constructors) of the parent class from within the child class.

**Key Concept:** `super` is essential for establishing and managing relationships between parent and child classes, particularly when extending functionality or overriding methods.

---

### 2. Learning Outcomes Covered

This topic will equip you with the knowledge and skills to:

*   **Understand the purpose and functionality of the `super` keyword.**
*   **Differentiate between using `super` to access parent class constructors and methods.**
*   **Explain scenarios where `super` is mandatory and where it is optional.**
*   **Recognize the role of `super` in method overriding.**
*   **Apply the `super` keyword correctly in code examples.**

---

### 3. Using `super` with Constructors

One of the most common uses of `super` is to explicitly call the **constructor of the parent class** from the constructor of the child class. This is crucial for initializing the inherited members of the parent class.

**Key Concept:** When a child class constructor is invoked, the parent class constructor must be called first to ensure that the parent's state is properly initialized before the child's state is set.

**Scenarios:**

*   **Mandatory Call:** If the parent class has a **no-argument constructor**, and the child class constructor does **not** explicitly call any parent constructor using `super()`, the Java compiler (and often in other OOP languages) will implicitly insert a call to `super()` as the first statement in the child constructor. However, if the parent class has **only parameterized constructors**, then the child class **must** explicitly call one of the parent's constructors using `super(...)`.
*   **Optional Call:** If the parent class has a no-argument constructor, and the child class constructor also has a no-argument constructor, the `super()` call is optional. The compiler will add it automatically. However, it's good practice to be explicit for clarity.
*   **Passing Arguments:** If the parent class constructor requires arguments, you **must** use `super(arguments)` to pass the necessary values.

**Example (Java):**

```java
class Animal {
    String name;

    // Parent constructor
    Animal(String name) {
        this.name = name;
        System.out.println("Animal constructor called. Name: " + name);
    }
}

class Dog extends Animal {
    String breed;

    // Child constructor
    Dog(String name, String breed) {
        super(name); // Calling the parent class constructor
        this.breed = breed;
        System.out.println("Dog constructor called. Breed: " + breed);
    }

    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy", "Golden Retriever");
    }
}
```

**Output:**

```
Animal constructor called. Name: Buddy
Dog constructor called. Breed: Golden Retriever
```

**Explanation:**

*   The `Dog` constructor `Dog(String name, String breed)` explicitly calls `super(name)`.
*   This passes the `name` argument to the `Animal` class's constructor, initializing the `name` instance variable inherited from `Animal`.
*   After the parent constructor completes, the `Dog` constructor continues to initialize its own `breed` instance variable.

---

### 4. Using `super` with Methods

The `super` keyword can also be used to call **methods of the parent class** from within a child class. This is particularly useful in the context of **method overriding**.

**Key Concept:** When a child class overrides a method from its parent class, it can still access and execute the original parent's implementation of that method using `super.method_name()`.

**Scenarios:**

*   **Extending Functionality:** You might want to add extra behavior to the parent's method without completely replacing it.
*   **Reusing Parent Logic:** Leverage existing functionality from the parent class.

**Example (Java):**

```java
class Vehicle {
    String brand;

    Vehicle(String brand) {
        this.brand = brand;
    }

    void displayInfo() {
        System.out.println("Brand: " + brand);
    }
}

class Car extends Vehicle {
    String model;

    Car(String brand, String model) {
        super(brand); // Call parent constructor
        this.model = model;
    }

    // Overriding the displayInfo method
    @Override
    void displayInfo() {
        super.displayInfo(); // Call parent's displayInfo method
        System.out.println("Model: " + model);
    }

    public static void main(String[] args) {
        Car myCar = new Car("Toyota", "Camry");
        myCar.displayInfo();
    }
}
```

**Output:**

```
Brand: Toyota
Model: Camry
```

**Explanation:**

*   The `Car` class overrides the `displayInfo()` method.
*   Inside the overridden `displayInfo()`, `super.displayInfo()` is called. This executes the `displayInfo()` method from the `Vehicle` class, printing the `brand`.
*   Then, the `Car` class's specific logic is executed, printing the `model`.

---

### 5. `super` Keyword in Different OOP Languages

While the core concept of `super` remains the same, its syntax and specific behavior might vary slightly across different object-oriented programming languages.

*   **Java:** Uses `super.method()` for methods and `super(...)` for constructors.
*   **Python:** Uses `super().method()` for methods and `super().__init__(...)` for constructors (often within the `__init__` method).
*   **C++:** Uses the scope resolution operator `::` to access parent members (e.g., `ParentClass::method()`, `ParentClass::ParentClass()`).

**Example (Python):**

```python
class Animal:
    def __init__(self, name):
        self.name = name
        print(f"Animal constructor called. Name: {self.name}")

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # Calling the parent class constructor
        self.breed = breed
        print(f"Dog constructor called. Breed: {self.breed}")

my_dog = Dog("Buddy", "Golden Retriever")
```

**Output:**

```
Animal constructor called. Name: Buddy
Dog constructor called. Breed: Golden Retriever
```

---

### 6. Important Points to Remember

*   **`super` refers to the immediate parent class.** If you have a deep inheritance hierarchy (A -> B -> C), `super` in class C will refer to class B, not A.
*   **`super()` in a constructor must be the first statement.** This ensures proper initialization order.
*   **You cannot use `super` to access private members of the parent class.** `super` can only access public and protected members.
*   **`super` is not a variable; it's a keyword.** You cannot assign a value to `super`.
*   **In some languages (like Python), `super()` can be used to call methods of sibling classes in a cooperative inheritance scenario (e.g., mixins), but this is a more advanced topic.** For foundational understanding, focus on the parent class relationship.

---

### 7. Practice Questions

**Question 1:**

Consider the following Java code snippet:

```java
class A {
    public void display() {
        System.out.println("Display from A");
    }
}

class B extends A {
    @Override
    public void display() {
        System.out.println("Display from B");
    }
}

class C extends B {
    @Override
    public void display() {
        // What should go here to call display() from B?
    }
}
```

What statement should be placed in the `// What should go here...` comment to call the `display()` method of the `B` class?

**Answer 1:**
`super.display();`

---

**Question 2:**

Explain the difference between `super()` and `super.method_name()` when using the `super` keyword in a child class.

**Answer 2:**
*   `super()` (or `super(...)` with arguments) is used to call the **constructor** of the immediate parent class. It must be the first statement in the child class's constructor.
*   `super.method_name()` is used to call a **method** defined in the immediate parent class, typically when the child class has overridden that method.

---

**Question 3:**

When is it **mandatory** to use the `super` keyword to call a parent constructor? Provide a brief explanation.

**Answer 3:**
It is mandatory to use `super` to call a parent constructor when the parent class has **only parameterized constructors**, and the child class constructor needs to initialize the parent's state. In such cases, the child constructor **must** explicitly call one of the parent's constructors using `super(...)`. If the parent has a no-argument constructor, and the child doesn't explicitly call it, the compiler implicitly inserts a `super()` call.

---

**Question 4:**

Examine the following Python code and predict its output:

```python
class Parent:
    def __init__(self, value):
        self.value = value
        print(f"Parent init: {self.value}")

class Child(Parent):
    def __init__(self, value, extra):
        self.extra = extra
        super().__init__(value)
        print(f"Child init: {self.extra}")

    def show(self):
        print(f"Value: {self.value}, Extra: {self.extra}")

c = Child(10, 20)
c.show()
```

**Answer 4:**

```
Parent init: 10
Child init: 20
Value: 10, Extra: 20
```

**Explanation:**
1.  The `Child` constructor is called with `value=10` and `extra=20`.
2.  `super().__init__(value)` calls the `Parent` constructor, initializing `self.value` to 10 and printing "Parent init: 10".
3.  The `Child` constructor then initializes `self.extra` to 20 and prints "Child init: 20".
4.  `c.show()` is called, which prints the inherited `self.value` and the child's `self.extra`.

---

### 8. Conclusion

The `super` keyword is fundamental to understanding and implementing inheritance effectively. It allows for controlled access to parent class members, enabling code reuse, extension of functionality, and proper initialization within inheritance structures. Mastering its usage is key to building robust and well-organized object-oriented applications.
