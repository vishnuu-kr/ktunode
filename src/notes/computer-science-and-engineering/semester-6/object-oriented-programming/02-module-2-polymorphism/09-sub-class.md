---
title: "Sub Class"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfa5"
status: "completed"
scrapedAt: "2026-05-20T16:56:10.575Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism
## Topic: Sub Class

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Define** what a sub class is in the context of Object-Oriented Programming (OOP).
*   **Explain** the concept of inheritance and how sub classes relate to super classes.
*   **Identify** the advantages of using sub classes.
*   **Describe** and **implement** different types of inheritance (if applicable to the language context, e.g., single, multiple, multilevel).
*   **Understand** and **apply** method overriding in sub classes.
*   **Differentiate** between `is-a` and `has-a` relationships.
*   **Recognize** the role of sub classes in achieving polymorphism.

---

### 1. What is a Sub Class?

*   A **sub class**, also known as a **derived class**, **child class**, or **inheriting class**, is a class that acquires properties (attributes/data members) and behaviors (methods/functions) from another class.
*   The class from which the sub class inherits is called the **super class**, **base class**, or **parent class**.

---

### 2. The Concept of Inheritance

*   **Inheritance** is a fundamental OOP principle that allows a new class (sub class) to be based on an existing class (super class).
*   It establishes an **"is-a" relationship** between the two classes. For example, a `Dog` **is-a** `Animal`.
*   The sub class inherits all the **non-private** members (attributes and methods) of its super class.
*   This promotes **code reusability**, as common functionalities can be defined in the super class and reused by multiple sub classes.

#### Analogy:
Think of a family tree. Your parents have certain traits and abilities. You inherit these traits and abilities from them, and you might also develop your own unique characteristics.

---

### 3. Advantages of Using Sub Classes

*   **Code Reusability:** Avoids redundant code by defining common features in a super class.
*   **Extensibility:** Allows you to add new functionalities or modify existing behaviors in sub classes without altering the super class.
*   **Maintainability:** Changes to common features are made once in the super class, simplifying maintenance.
*   **Polymorphism:** Enables treating objects of different sub classes in a uniform way through a common super class interface.
*   **Modularity:** Organizes code into logical hierarchies, making it easier to understand and manage.

---

### 4. Types of Inheritance (Conceptual Overview)

The availability and implementation of these types vary by programming language.

#### 4.1. Single Inheritance

*   A sub class inherits from only **one** super class.
*   This is the most common and straightforward form of inheritance.

    ```
    SuperClass
       ^
       |
     SubClass
    ```

#### 4.2. Multilevel Inheritance

*   A class inherits from another derived class. This creates a chain of inheritance.
*   `Class A` -> `Class B` (inherits from A) -> `Class C` (inherits from B).

    ```
    SuperClass (A)
       ^
       |
    IntermediateClass (B)
       ^
       |
     SubClass (C)
    ```

#### 4.3. Hierarchical Inheritance

*   Multiple sub classes inherit from a **single** super class.

    ```
          SuperClass
         /        \
        /          \
      SubClass1   SubClass2
    ```

#### 4.4. Multiple Inheritance (Less Common/Supported)

*   A sub class inherits from **more than one** super class.
*   This can lead to the "diamond problem" (ambiguity when inheriting the same method from multiple super classes with different implementations). Some languages, like Java, do not support multiple inheritance of classes directly but allow it through interfaces.

    ```
      SuperClass1     SuperClass2
           \           /
            \         /
             SubClass
    ```

---

### 5. Method Overriding

*   **Method overriding** occurs when a sub class provides a specific implementation for a method that is already defined in its super class.
*   The method in the sub class must have the **same name**, **return type**, and **same or compatible parameters** as the method in the super class.
*   Overriding allows sub classes to customize the behavior inherited from the super class.

#### Example (Python-like pseudocode):

```python
class Animal:
    def make_sound(self):
        print("Generic animal sound")

class Dog(Animal):
    # Method overriding
    def make_sound(self):
        print("Woof!")

class Cat(Animal):
    # Method overriding
    def make_sound(self):
        print("Meow!")

# --- Usage ---
animal = Animal()
dog = Dog()
cat = Cat()

animal.make_sound()  # Output: Generic animal sound
dog.make_sound()     # Output: Woof!
cat.make_sound()     # Output: Meow!
```

**Important:** The `@override` annotation (or similar language construct) is often used to explicitly indicate that a method is intended to override a super class method, helping to catch errors at compile time if the signature doesn't match.

---

### 6. `is-a` vs. `has-a` Relationships

*   **`is-a` Relationship:**
    *   Represents inheritance.
    *   A sub class **is a** specialized version of its super class.
    *   Example: A `Car` **is a** `Vehicle`. A `Dog` **is an** `Animal`.

*   **`has-a` Relationship:**
    *   Represents **composition** or **aggregation**.
    *   A class **has a** reference to an object of another class.
    *   Example: A `Car` **has an** `Engine`. A `Library` **has a** collection of `Book` objects.

    **Key Distinction:**
    Inheritance (`is-a`) implies shared identity and behavior. Composition (`has-a`) implies a relationship where one object contains or uses another object.

---

### 7. Role of Sub Classes in Polymorphism

*   Polymorphism (meaning "many forms") is the ability of an object to take on many forms.
*   Sub classes are crucial for achieving polymorphism, especially **subtype polymorphism**.
*   When a variable of a super class type refers to an object of a sub class, and a method is called on that variable, the version of the method in the sub class (if overridden) is executed.

#### Example (Python-like pseudocode):

```python
class Shape:
    def draw(self):
        print("Drawing a generic shape")

class Circle(Shape):
    def draw(self):
        print("Drawing a circle")

class Square(Shape):
    def draw(self):
        print("Drawing a square")

def render_shapes(shapes):
    for shape in shapes:
        shape.draw() # Polymorphic behavior

# --- Usage ---
shapes_list = [Circle(), Square(), Shape()]
render_shapes(shapes_list)

# Output:
# Drawing a circle
# Drawing a square
# Drawing a generic shape
```

In this example, `render_shapes` function can accept a list of `Shape` objects. When `shape.draw()` is called, the *actual* type of the object (Circle, Square, or Shape) determines which `draw` method is executed. This is polymorphism.

---

### Key Points to Remember:

*   **Inheritance is key:** Sub classes inherit from super classes.
*   **"is-a" relationship:** This is the defining characteristic of inheritance.
*   **Code Reusability:** The primary benefit of inheritance.
*   **Method Overriding:** Allows customization of inherited behavior. The method signature (name, parameters, return type) must match.
*   **Access Specifiers:** Sub classes can only access non-private members of the super class.
*   **Constructors:** Sub classes typically call the super class's constructor to initialize inherited members.
*   **Composition vs. Inheritance:** Understand the difference between `has-a` and `is-a`. Often, composition is preferred over deep or complex inheritance hierarchies.
*   **Polymorphism:** Sub classes are the foundation for subtype polymorphism.

---

### Practice Questions/Exercises:

1.  **Definition:** What is a sub class, and what is its relationship to a super class?
2.  **Analogy:** Explain the "is-a" relationship using an example of your own.
3.  **Advantage:** Name two key advantages of using inheritance with sub classes.
4.  **Method Overriding:**
    *   Given the following Python code, what will be the output?
        ```python
        class Vehicle:
            def move(self):
                print("Moving...")

        class Car(Vehicle):
            def move(self):
                print("Driving...")

        my_vehicle = Vehicle()
        my_car = Car()

        my_vehicle.move()
        my_car.move()
        ```
    *   What concept does this example demonstrate?
5.  **`is-a` vs. `has-a`:** Identify whether the relationship between the following pairs is `is-a` or `has-a`:
    *   `Book` and `Library`
    *   `Student` and `Person`
    *   `Computer` and `CPU`
6.  **Polymorphism Application:** Imagine you have a system for processing different types of files (e.g., `TextFile`, `ImageFile`, `AudioFile`), all inheriting from a common `File` class with a `process()` method. How would you use a list of `File` objects to process all files uniformly, regardless of their specific type?

---

### Answers to Practice Questions:

1.  **Definition:** A sub class (or derived class) is a class that inherits properties and behaviors from another class, called the super class (or base class).
2.  **Analogy:** A `Cat` **is an** `Animal`. This means a Cat shares general characteristics of all animals (like breathing, eating) but has its own specific traits (like purring, climbing).
3.  **Advantage:**
    *   Code Reusability
    *   Extensibility
4.  **Method Overriding:**
    *   Output:
        ```
        Moving...
        Driving...
        ```
    *   This example demonstrates **Method Overriding**.
5.  **`is-a` vs. `has-a`:**
    *   `Book` and `Library`: `has-a` (A Library contains Books)
    *   `Student` and `Person`: `is-a` (A Student is a Person)
    *   `Computer` and `CPU`: `has-a` (A Computer has a CPU)
6.  **Polymorphism Application:** You would create a list that can hold objects of the `File` type (or a parent type if there are multiple levels). Then, you would iterate through this list, calling the `process()` method on each `File` object. Because of polymorphism, the correct `process()` method (from `TextFile`, `ImageFile`, or `AudioFile`) would be executed automatically for each specific file type.

    ```python
    # Example (Python-like pseudocode)
    files = [TextFile("report.txt"), ImageFile("photo.jpg"), AudioFile("song.mp3")]

    for file_obj in files:
        file_obj.process() # Polymorphic call
