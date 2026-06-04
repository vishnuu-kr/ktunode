---
title: "Types of Inheritance"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfa6"
status: "completed"
scrapedAt: "2026-05-20T16:56:11.301Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism

## Topic: Types of Inheritance

### Learning Outcomes:

*   Understand the concept of inheritance in OOP.
*   Differentiate between various types of inheritance.
*   Explain the advantages of using different inheritance models.
*   Identify scenarios where each type of inheritance is most suitable.
*   Implement different types of inheritance in a programming language (e.g., Python, Java).

---

## 1. Introduction to Inheritance

Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a new class (called a **derived class** or **child class**) to inherit properties and behaviors (attributes and methods) from an existing class (called a **base class** or **parent class**). This promotes code reusability, reduces redundancy, and establishes a hierarchical relationship between classes.

**Key Concepts:**

*   **Base Class/Parent Class:** The class from which properties are inherited.
*   **Derived Class/Child Class:** The class that inherits properties from another class.
*   **"Is-a" Relationship:** Inheritance establishes an "is-a" relationship. For example, a `Dog` "is-a" `Animal`.

**Example:**

Consider an `Animal` class with a `speak()` method. A `Dog` class inheriting from `Animal` would also have access to the `speak()` method and could potentially override it to make a dog-specific sound.

---

## 2. Types of Inheritance

Inheritance can be classified into several types based on how derived classes inherit from base classes.

### 2.1. Single Inheritance

In single inheritance, a derived class inherits from only **one** base class. This is the simplest and most common form of inheritance.

**Concept:**

*   A child class inherits directly from a single parent class.
*   Establishes a direct hierarchical relationship.

**Syntax (Conceptual):**

```
class ParentClass:
    # parent class attributes and methods

class ChildClass(ParentClass):
    # child class attributes and methods
```

**Example:**

```python
class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def display_brand(self):
        print(f"Brand: {self.brand}")

class Car(Vehicle): # Car inherits from Vehicle
    def __init__(self, brand, model):
        super().__init__(brand) # Call parent constructor
        self.model = model

    def display_model(self):
        print(f"Model: {self.model}")

my_car = Car("Toyota", "Camry")
my_car.display_brand()  # Output: Brand: Toyota
my_car.display_model()  # Output: Model: Camry
```

**Advantages:**

*   Simple to understand and implement.
*   Reduces code complexity.

**Disadvantages:**

*   Limited in terms of code reuse compared to other types.

### 2.2. Multiple Inheritance

In multiple inheritance, a derived class inherits from **more than one** base class. This allows a class to acquire properties from multiple sources.

**Concept:**

*   A child class inherits from multiple parent classes.
*   Allows combining features from different hierarchies.

**Syntax (Conceptual):**

```
class ParentClass1:
    # ...

class ParentClass2:
    # ...

class ChildClass(ParentClass1, ParentClass2):
    # ...
```

**Example:**

```python
class Flyable:
    def fly(self):
        print("I can fly!")

class Swimmable:
    def swim(self):
        print("I can swim!")

class FlyingFish(Flyable, Swimmable): # Inherits from Flyable and Swimmable
    pass

my_fish = FlyingFish()
my_fish.fly()   # Output: I can fly!
my_fish.swim()  # Output: I can swim!
```

**Advantages:**

*   High degree of code reusability by combining functionalities from multiple sources.
*   Models complex relationships where an entity possesses traits from different categories.

**Disadvantages:**

*   **The Diamond Problem:** This is a significant issue. If a class `D` inherits from `B` and `C`, and both `B` and `C` inherit from a common base class `A`, then `D` might have multiple copies of `A`'s members, leading to ambiguity. Most languages handle this through mechanisms like method resolution order (MRO) in Python or by disallowing multiple inheritance of implementation in languages like Java (though it allows multiple interface inheritance).

    **Example of Diamond Problem:**

    ```
        A
       / \
      B   C
       \ /
        D
    ```

    If `A` has a method `foo()`, and both `B` and `C` override it, which `foo()` should `D` call?

### 2.3. Multilevel Inheritance

In multilevel inheritance, a class inherits from another derived class. This creates a chain or hierarchy of inheritance.

**Concept:**

*   A class `C` inherits from class `B`, and class `B` inherits from class `A`.
*   Forms a chain: `A` -> `B` -> `C`.

**Syntax (Conceptual):**

```
class GrandparentClass:
    # ...

class ParentClass(GrandparentClass):
    # ...

class ChildClass(ParentClass):
    # ...
```

**Example:**

```python
class Animal:
    def eat(self):
        print("I eat food.")

class Mammal(Animal):
    def nurse(self):
        print("I nurse my young.")

class Dog(Mammal):
    def bark(self):
        print("Woof! Woof!")

my_dog = Dog()
my_dog.eat()    # Inherited from Animal - Output: I eat food.
my_dog.nurse()  # Inherited from Mammal - Output: I nurse my young.
my_dog.bark()   # Defined in Dog - Output: Woof! Woof!
```

**Advantages:**

*   Allows for building complex class hierarchies.
*   Promotes reusability of code across multiple levels.

**Disadvantages:**

*   Can lead to deep inheritance chains, making the code harder to understand and maintain.
*   The "diamond problem" can still arise if multiple multilevel inheritances converge.

### 2.4. Hierarchical Inheritance

In hierarchical inheritance, **multiple derived classes** inherit from a **single base class**. This creates a tree-like structure where one parent has multiple children.

**Concept:**

*   Multiple child classes inherit from one common parent class.
*   Represents specialization from a general base.

**Syntax (Conceptual):**

```
class ParentClass:
    # ...

class ChildClass1(ParentClass):
    # ...

class ChildClass2(ParentClass):
    # ...

class ChildClass3(ParentClass):
    # ...
```

**Example:**

```python
class Shape:
    def area(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

my_circle = Circle(5)
print(f"Circle area: {my_circle.area()}") # Output: Circle area: 78.5

my_rectangle = Rectangle(4, 6)
print(f"Rectangle area: {my_rectangle.area()}") # Output: Rectangle area: 24
```

**Advantages:**

*   Efficient for categorizing related entities under a common parent.
*   Promotes code reuse for common functionalities in the base class.

**Disadvantages:**

*   If the base class is modified, it can affect all derived classes.

### 2.5. Hybrid Inheritance

Hybrid inheritance is a combination of two or more types of inheritance (e.g., single, multiple, multilevel). It arises naturally when complex relationships are modeled.

**Concept:**

*   A mix of different inheritance types.
*   Often arises from combining multiple and multilevel inheritance, or multiple and hierarchical inheritance.

**Example (Combination of Multiple and Multilevel):**

```python
class MusicalInstrument:
    def play_music(self):
        print("Playing music...")

class ElectricInstrument(MusicalInstrument):
    def amplify(self):
        print("Amplifying sound...")

class Guitar:
    def strum(self):
        print("Strumming guitar...")

class ElectricGuitar(ElectricInstrument, Guitar): # Multiple Inheritance
    pass

my_electric_guitar = ElectricGuitar()
my_electric_guitar.play_music()  # Inherited from MusicalInstrument - Output: Playing music...
my_electric_guitar.amplify()     # Inherited from ElectricInstrument - Output: Amplifying sound...
my_electric_guitar.strum()       # Inherited from Guitar - Output: Strumming guitar...
```

**Advantages:**

*   Provides maximum flexibility and reusability by combining the benefits of various inheritance types.
*   Can model very complex and real-world relationships effectively.

**Disadvantages:**

*   Can be very complex to design, implement, and maintain.
*   The diamond problem is more likely to occur and can be harder to resolve.

---

## 3. Advantages of Using Different Inheritance Models

*   **Code Reusability:** Reduces the need to write the same code multiple times.
*   **Extensibility:** Allows adding new features to existing classes without modifying them.
*   **Maintainability:** Changes in the base class are reflected in derived classes, simplifying updates.
*   **Modularity:** Breaks down complex systems into smaller, manageable, and reusable components.
*   **Polymorphism:** Inheritance is a prerequisite for polymorphism, enabling objects of different classes to be treated as objects of a common base class.

---

## 4. Scenarios for Each Type of Inheritance

*   **Single Inheritance:** When a class has a clear "is-a" relationship with only one other class, and no need to inherit from multiple sources. E.g., `Car` is a `Vehicle`.
*   **Multiple Inheritance:** When an entity needs to acquire distinct behaviors or properties from different, unrelated classes. E.g., a `Robot` that can `Walk` (from a `Locomotion` class) and `Operate` (from an `Operator` class).
*   **Multilevel Inheritance:** When creating a specialization hierarchy. E.g., `Animal` -> `Mammal` -> `Dog`.
*   **Hierarchical Inheritance:** When multiple distinct types share common characteristics and behaviors. E.g., `Shape` (base) with `Circle`, `Rectangle`, `Triangle` (derived).
*   **Hybrid Inheritance:** For complex systems where a single inheritance model is insufficient to represent all relationships and reuse requirements. This is often found in larger frameworks.

---

## 5. Practice Questions and Exercises

**Question 1:**
What is the primary relationship established by inheritance?
a) "has-a" relationship
b) "uses-a" relationship
c) "is-a" relationship
d) "InstanceOf" relationship

**Question 2:**
Which type of inheritance allows a class to inherit from multiple base classes?
a) Single Inheritance
b) Multilevel Inheritance
c) Hierarchical Inheritance
d) Multiple Inheritance

**Question 3:**
Consider the following code snippet:
```python
class A:
    def method_a(self):
        print("Method A")

class B(A):
    def method_b(self):
        print("Method B")

class C(B):
    def method_c(self):
        print("Method C")

obj = C()
obj.method_a()
obj.method_b()
obj.method_c()
```
What type of inheritance is demonstrated here?
a) Single Inheritance
b) Multiple Inheritance
c) Multilevel Inheritance
d) Hierarchical Inheritance

**Question 4:**
Explain the "Diamond Problem" in the context of inheritance and how it might be addressed in OOP languages.

**Question 5 (Coding Exercise):**
Create a Python program that demonstrates hierarchical inheritance.
*   Define a base class `Employee` with an `__init__` method that takes `name` and `employee_id`.
*   Define two derived classes: `Manager` and `Developer`.
*   The `Manager` class should have an additional attribute `team_size` and a method `manage_team()`.
*   The `Developer` class should have an additional attribute `programming_language` and a method `write_code()`.
*   Instantiate objects of `Manager` and `Developer` and call their methods.

---

## 6. Answers to Practice Questions

**Answer 1:**
c) "is-a" relationship

**Answer 2:**
d) Multiple Inheritance

**Answer 3:**
c) Multilevel Inheritance
*   `C` inherits from `B`, and `B` inherits from `A`.

**Answer 4:**
The **Diamond Problem** occurs in multiple inheritance when a class inherits from two classes that have a common ancestor. If both intermediate classes override a method from the common ancestor, it becomes ambiguous which version of the method the final derived class should inherit and call.

*   **Addressing the Diamond Problem:**
    *   **Method Resolution Order (MRO):** Languages like Python define a specific order (MRO) in which base classes are searched for methods. This ensures that even with multiple inheritance, there's a deterministic way to find and call a method.
    *   **Virtual Inheritance (C++):** C++ uses virtual inheritance to ensure that only one copy of the common base class is inherited.
    *   **Disallowing Multiple Implementation Inheritance (Java):** Java generally disallows inheriting implementation from multiple classes but allows inheriting from multiple interfaces, which bypasses the implementation ambiguity.

**Answer 5 (Python Code Solution):**

```python
class Employee:
    def __init__(self, name, employee_id):
        self.name = name
        self.employee_id = employee_id

    def display_info(self):
        print(f"Name: {self.name}, Employee ID: {self.employee_id}")

class Manager(Employee):
    def __init__(self, name, employee_id, team_size):
        super().__init__(name, employee_id) # Call parent constructor
        self.team_size = team_size

    def manage_team(self):
        print(f"{self.name} is managing a team of {self.team_size} members.")

class Developer(Employee):
    def __init__(self, name, employee_id, programming_language):
        super().__init__(name, employee_id) # Call parent constructor
        self.programming_language = programming_language

    def write_code(self):
        print(f"{self.name} is writing code in {self.programming_language}.")

# --- Instantiation and Method Calls ---

# Create a Manager object
manager1 = Manager("Alice", "M101", 15)
manager1.display_info()   # Output: Name: Alice, Employee ID: M101
manager1.manage_team()    # Output: Alice is managing a team of 15 members.

print("-" * 20) # Separator

# Create a Developer object
developer1 = Developer("Bob", "D202", "Python")
developer1.display_info()     # Output: Name: Bob, Employee ID: D202
developer1.write_code()       # Output: Bob is writing code in Python.
```

---

## 7. Important Points to Remember

*   Inheritance is a mechanism for code reuse and creating "is-a" relationships.
*   **Single Inheritance** is the simplest and most common.
*   **Multiple Inheritance** offers flexibility but can lead to the "Diamond Problem."
*   **Multilevel Inheritance** creates a chain of inheritance.
*   **Hierarchical Inheritance** is used when multiple classes share a common ancestor.
*   **Hybrid Inheritance** is a combination, offering maximum flexibility but also maximum complexity.
*   Always consider the clarity and maintainability of your code when choosing an inheritance model. Avoid overly deep or complex inheritance hierarchies.
*   Understand how your specific programming language handles multiple inheritance to avoid unexpected behavior.
