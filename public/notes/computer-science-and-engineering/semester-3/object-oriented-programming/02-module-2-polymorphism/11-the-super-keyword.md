---
title: "The super keyword"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acad"
status: "completed"
scrapedAt: "2026-05-20T16:28:49.934Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism: The `super` Keyword

## Learning Outcomes:

*   Understand the purpose and function of the `super` keyword.
*   Explain how `super` is used to access members (fields and methods) of the parent class.
*   Differentiate between using `super()` to call the parent class constructor and `super.methodName()` to call a parent class method.
*   Recognize scenarios where using `super` is necessary and beneficial.
*   Avoid common pitfalls when using `super`.

## 1. Introduction to the `super` Keyword

*   **Definition:** The `super` keyword in object-oriented programming (specifically languages like Java, Python, etc.) is a reference variable that allows you to access members (fields and methods) of the parent (or super) class from within a child (or subclass). It essentially provides a way to interact with the functionality inherited from the parent class.

*   **Purpose:**
    *   To invoke the constructor of the parent class (using `super()`).
    *   To access methods and fields of the parent class that have been overridden in the child class.
    *   To reuse existing code from the parent class, promoting code reuse and reducing redundancy.

## 2. Using `super()` to Call the Parent Class Constructor

*   **Syntax:** `super()`

*   **Functionality:**
    *   `super()` calls the constructor of the immediate parent class.
    *   It **must** be the first statement in the child class's constructor.
    *   If the parent class has multiple constructors, `super()` will call the no-argument (default) constructor unless you specify arguments within the parentheses (e.g., `super(arg1, arg2)`).
    *   If the parent class doesn't have a default constructor (a constructor with no arguments) and the child class's constructor doesn't explicitly call `super()` with the appropriate arguments, a compilation error will occur.

*   **Why Use It?**
    *   To initialize the inherited fields of the parent class properly.  The parent class might have its own initialization logic that the child class needs to execute.
    *   To ensure proper object construction by following the chain of constructors from the root class down to the child class.

*   **Example (Java):**

    ```java
    class Animal {
        String name;

        Animal(String name) {
            this.name = name;
            System.out.println("Animal constructor called");
        }
    }

    class Dog extends Animal {
        String breed;

        Dog(String name, String breed) {
            super(name); // Calls Animal's constructor with the name argument
            this.breed = breed;
            System.out.println("Dog constructor called");
        }

        public static void main(String[] args) {
            Dog myDog = new Dog("Buddy", "Golden Retriever");
            System.out.println("Dog's name: " + myDog.name);
            System.out.println("Dog's breed: " + myDog.breed);
        }
    }
    ```

    **Output:**

    ```
    Animal constructor called
    Dog constructor called
    Dog's name: Buddy
    Dog's breed: Golden Retriever
    ```

    **Explanation:**  The `Dog` constructor uses `super(name)` to call the `Animal` constructor, which initializes the `name` field. This ensures that the `Animal` part of the `Dog` object is properly initialized.
*   **Example (Python):**

    ```python
    class Animal:
        def __init__(self, name):
            self.name = name
            print("Animal constructor called")

    class Dog(Animal):
        def __init__(self, name, breed):
            super().__init__(name) # Calls Animal's constructor with the name argument
            self.breed = breed
            print("Dog constructor called")

    my_dog = Dog("Buddy", "Golden Retriever")
    print("Dog's name:", my_dog.name)
    print("Dog's breed:", my_dog.breed)
    ```

    **Output:**

    ```
    Animal constructor called
    Dog constructor called
    Dog's name: Buddy
    Dog's breed: Golden Retriever
    ```

## 3. Using `super.methodName()` to Call a Parent Class Method

*   **Syntax:** `super.methodName(arguments)`

*   **Functionality:**
    *   `super.methodName()` calls a method from the parent class that has been overridden in the child class.  It specifies that you want to execute the parent's version of the method, rather than the child's.
    *   It's used when you want to extend the functionality of the parent class method, rather than completely replacing it.  You can perform some actions in the child's method and then call the parent's method to handle the rest.

*   **Why Use It?**
    *   To reuse existing code from the parent class.
    *   To avoid code duplication.
    *   To maintain consistency with the parent class's behavior while adding or modifying functionality in the child class.

*   **Example (Java):**

    ```java
    class Animal {
        void makeSound() {
            System.out.println("Generic animal sound");
        }
    }

    class Dog extends Animal {
        @Override
        void makeSound() {
            super.makeSound(); // Calls Animal's makeSound method
            System.out.println("Woof!");
        }

        public static void main(String[] args) {
            Dog myDog = new Dog();
            myDog.makeSound();
        }
    }
    ```

    **Output:**

    ```
    Generic animal sound
    Woof!
    ```

    **Explanation:** The `Dog` class overrides the `makeSound` method. Inside the `Dog`'s `makeSound` method, `super.makeSound()` is called. This first executes the `Animal`'s `makeSound` method (printing "Generic animal sound") and then executes the additional code in the `Dog`'s method (printing "Woof!").

*   **Example (Python):**

    ```python
    class Animal:
        def make_sound(self):
            print("Generic animal sound")

    class Dog(Animal):
        def make_sound(self):
            super().make_sound()  # Calls Animal's make_sound method
            print("Woof!")

    my_dog = Dog()
    my_dog.make_sound()
    ```

    **Output:**

    ```
    Generic animal sound
    Woof!
    ```

## 4. Accessing Parent Class Fields with `super`

*   While it's primarily used for constructors and methods, `super` can *technically* be used to access fields of the parent class as well, but this is **less common and generally discouraged**.
*   It's better practice to access parent class fields directly (if they are accessible via access modifiers like `protected` or `public`) or through getter methods defined in the parent class.

*   **Example (Java - not recommended):**

    ```java
    class Animal {
        protected String sound = "Generic animal sound"; // Protected for demonstration
    }

    class Dog extends Animal {
        void displaySound() {
            System.out.println(super.sound); // Accessing parent's field (discouraged for direct field access)
        }

        public static void main(String[] args) {
            Dog myDog = new Dog();
            myDog.displaySound();
        }
    }
    ```

    **Why it's discouraged:**
    *   Violates encapsulation:  Directly accessing fields from a child class can break the encapsulation principle.  The parent class loses control over how its data is being used.
    *   Tight coupling:  Creates a strong dependency between the child and parent classes, making it harder to modify the parent class without affecting the child class.
    *   Use getter methods instead: It's almost always better to define a `getSound()` method in `Animal` and call `getSound()` from `Dog` instead.

## 5. When to Use `super`

*   **Calling the parent class constructor:**  Always use `super()` in the child class's constructor to properly initialize inherited fields and ensure correct object creation, especially if the parent class doesn't have a default constructor.
*   **Extending parent class methods:**  Use `super.methodName()` when you want to add functionality to an overridden method in the child class while still retaining the behavior of the parent class method.
*   **Accessing hidden members:** In rare cases (and often indicating a design flaw), use `super` when a child class variable accidentally hides (shadows) a parent class variable with the same name.

## 6. Common Pitfalls and Things to Remember

*   **`super()` must be the first statement in the constructor:**  Failing to do so will result in a compilation error.
*   **Constructor parameters:**  Make sure you pass the correct arguments to `super()` if the parent class constructor requires them.
*   **Infinite recursion:**  Be careful to avoid infinite recursion when calling `super.methodName()`.  Ensure that the parent class's implementation of the method eventually terminates and doesn't call the child class's overridden version of the method.  This usually involves careful design of the method hierarchies.
*   **Access modifiers:** Remember that `super` can only access members of the parent class that are accessible based on their access modifiers (e.g., `public`, `protected`, or default (package-private) if the classes are in the same package). `super` cannot access `private` members of the parent class.
*   **Understand the Class Hierarchy:**  Before using `super`, have a clear understanding of the inheritance hierarchy.  Know which class is the direct parent class and what members it provides.

## 7. Practice Questions/Exercises

**Question 1:**

```java
class Vehicle {
    String model;
    Vehicle(String model) {
        this.model = model;
    }

    String getModel() {
        return model;
    }
}

class Car extends Vehicle {
    String color;

    Car(String model, String color) {
        // Missing code here
        this.color = color;
    }

    String getColor() {
        return color;
    }

    public static void main(String[] args) {
        Car myCar = new Car("Sedan", "Red");
        System.out.println("Model: " + myCar.getModel() + ", Color: " + myCar.getColor());
    }
}
```

What code should be inserted in the `// Missing code here` section to correctly initialize the `Car` object?

**Answer:**

```java
super(model);
```

**Explanation:** The `Car` constructor needs to call the `Vehicle` constructor to initialize the `model` field.  `super(model)` achieves this.

**Question 2:**

Given the following Python code:

```python
class A:
    def greet(self):
        print("Hello from A")

class B(A):
    def greet(self):
        print("Hello from B")
        # Missing code here

b = B()
b.greet()
```

What code should be added to the `# Missing code here` line so that the output will be:

```
Hello from B
Hello from A
```

**Answer:**

```python
super().greet()
```

**Explanation:** The `super().greet()` call within the `B` class's `greet` method invokes the `greet` method of the parent class `A`, resulting in both greetings being printed.

**Question 3:**

Explain why it's generally better to use getter methods from the parent class to access the parent class's field, instead of using `super` to directly access the field.

**Answer:**

Using getter methods provides encapsulation. The parent class controls how the child class accesses its data. Direct access through `super` breaks encapsulation and creates tighter coupling between the classes, making refactoring and maintenance more difficult. Getter methods provide an abstraction layer that allows the parent class to modify its internal implementation without affecting the child class, as long as the getter method's interface remains the same.

**Question 4:**

What happens if you forget to call `super()` in the constructor of a child class when the parent class only has a parameterized constructor (i.e., no default constructor)?

**Answer:**

A compilation error will occur. The compiler requires that the parent class's constructor be called, and if there is no default constructor, you must explicitly call one of the parameterized constructors using `super(arguments)`.  Otherwise, the parent class's state will not be initialized correctly.  In Python, you would see an error raised at runtime rather than compilation.
