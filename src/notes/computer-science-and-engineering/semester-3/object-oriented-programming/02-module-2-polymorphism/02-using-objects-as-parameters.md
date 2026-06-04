---
title: "Using Objects as Parameters"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aca4"
status: "completed"
scrapedAt: "2026-05-20T16:28:24.113Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism: Using Objects as Parameters

## Introduction

This module focuses on polymorphism, a core concept in Object-Oriented Programming (OOP). This section will delve into using objects as parameters, which is a powerful technique that leverages polymorphism. We'll explore how passing objects as arguments to methods allows for flexible and reusable code.

## Learning Outcomes

By the end of this section, you should be able to:

*   Understand the concept of passing objects as parameters to methods.
*   Explain the advantages of using objects as parameters.
*   Write code to pass objects as parameters.
*   Understand the concept of type checking and polymorphism when using object parameters.
*   Differentiate between passing objects by value and by reference (in languages where applicable).
*   Apply these concepts to solve practical programming problems.

## Key Concepts and Definitions

*   **Object:** An instance of a class, containing data (attributes) and methods (functions).
*   **Parameter:**  A variable declared in a method's definition that accepts a value when the method is called.
*   **Argument:** The actual value passed to a method when it's called.
*   **Polymorphism:**  The ability of an object to take on many forms.  In the context of object parameters, it often refers to a method being able to accept objects of different classes (usually related through inheritance) as arguments.
*   **Type Checking:** The process of verifying that the data types used in a program are compatible and used correctly.
*   **Passing by Value:**  A copy of the object's data is passed to the method. Changes made to the object within the method do *not* affect the original object.
*   **Passing by Reference:** A reference (or pointer) to the object's memory location is passed to the method. Changes made to the object within the method *do* affect the original object.  Note: In languages like Python, objects are typically passed by object reference (similar to passing by reference, but the reference itself is passed by value).
*   **Object Composition:** Building complex objects by combining other objects as parts or attributes. Using objects as parameters facilitates object composition.

## Using Objects as Parameters: Detailed Explanation

### 1. The Basic Concept

Instead of passing primitive data types (like integers, strings, or booleans) as parameters to methods, we can pass objects. This allows a method to interact with and manipulate the state of another object.

**Example (Python):**

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} says: Woof!")

class Person:
    def __init__(self, name):
        self.name = name

    def walk_dog(self, dog):  # 'dog' is an object of type Dog
        print(f"{self.name} is walking {dog.name}.")
        dog.bark()

# Create instances
my_dog = Dog("Buddy")
my_person = Person("Alice")

# Call the method, passing the Dog object as a parameter
my_person.walk_dog(my_dog)
```

**Explanation:**

*   The `Person` class has a method `walk_dog` that takes a `Dog` object as a parameter.
*   Inside the `walk_dog` method, we can access the `Dog` object's attributes (like `name`) and call its methods (like `bark`).
*   When we call `my_person.walk_dog(my_dog)`, we're passing the `my_dog` object as an argument.

### 2. Advantages of Using Objects as Parameters

*   **Code Reusability:**  Methods can be designed to work with different types of objects that implement a common interface or inherit from a common base class (polymorphism).  This reduces code duplication.
*   **Modularity:**  Encapsulates logic related to object interaction within a specific method, making the code more organized and easier to maintain.
*   **Flexibility:**  Allows you to create more dynamic and adaptable systems. Methods can handle various types of objects, enabling them to perform different actions based on the object passed.
*   **Data Encapsulation:** The method only has access to the object's public interface (public methods and attributes), adhering to the principle of encapsulation.
*   **Composition:** Facilitates building complex objects from simpler ones (object composition).

### 3. Type Checking and Polymorphism

When using objects as parameters, it's essential to consider type checking.

*   **Static Typing (e.g., Java, C++):**  The compiler checks the types of parameters at compile time. If the argument passed to a method is not of the expected type (or a subtype), the compiler will generate an error.  Polymorphism is achieved through inheritance and interfaces.
*   **Dynamic Typing (e.g., Python):**  Type checking occurs at runtime. If a method attempts to use an object in a way that is not supported by its type, a runtime error will occur. Duck typing (if it walks like a duck and quacks like a duck, then it's a duck) is common in dynamically typed languages to leverage polymorphism.

**Example (Python - Duck Typing):**

```python
class Duck:
    def quack(self):
        print("Quack!")

class Person:
    def make_it_quack(self, animal): #Expects an object that implements the 'quack' method
        animal.quack()

class Dog:
    def quack(self):  # Dog also has a 'quack' method (duck typing)
        print("Woof! (pretending to quack)")


person = Person()
duck = Duck()
dog = Dog()

person.make_it_quack(duck)  # Prints "Quack!"
person.make_it_quack(dog)   # Prints "Woof! (pretending to quack)"
```

In this example, the `make_it_quack` method in the `Person` class expects an object that has a `quack` method. Because both `Duck` and `Dog` classes have a `quack` method, they can be passed to the method without raising a type error.
