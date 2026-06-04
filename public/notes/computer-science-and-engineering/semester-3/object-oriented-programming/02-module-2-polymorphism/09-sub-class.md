---
title: "Sub Class"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acab"
status: "completed"
scrapedAt: "2026-05-20T16:28:48.234Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 2: Polymorphism - Topic: Sub Class

## Introduction

This module delves into the concept of subclasses within Object-Oriented Programming (OOP), particularly in the context of polymorphism. Understanding subclasses is crucial for building maintainable, extensible, and reusable code.  Subclasses allow us to inherit properties and behaviors from existing classes (parent or superclasses) and extend or modify them to fit specific needs. This allows for powerful code reuse and organization.

## Learning Outcomes

Upon completion of this topic, you should be able to:

*   Define the concept of a subclass and its relationship to a superclass.
*   Explain the purpose of inheritance and its benefits in OOP.
*   Implement subclass creation using appropriate syntax in your chosen language (examples will use Python).
*   Override methods inherited from the superclass.
*   Extend the functionality of the superclass in the subclass.
*   Understand and use the `super()` keyword.
*   Distinguish between inheritance and composition.

## 1. Defining Subclasses and Superclasses

*   **Superclass (Parent Class):**  The class whose properties and methods are inherited by another class. It represents a more general or abstract concept.

*   **Subclass (Child Class):**  The class that inherits properties and methods from a superclass. It represents a more specialized or concrete concept.  A subclass "is-a" type of its superclass.

*   **Inheritance:** The mechanism by which a subclass acquires the properties (attributes/data) and behaviors (methods/functions) of its superclass.  Inheritance promotes code reuse and reduces redundancy.

**Example (Python):**

```python
class Animal:  # Superclass
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Generic animal sound"

class Dog(Animal):  # Subclass inheriting from Animal
    def speak(self):  # Method overriding
        return "Woof!"

class Cat(Animal): #Subclass inheriting from Animal
    def speak(self): #Method overriding
        return "Meow!"

# Create instances
my_dog = Dog("Buddy")
my_cat = Cat("Whiskers")

print(my_dog.name)  # Output: Buddy (inherited from Animal)
print(my_dog.speak()) # Output: Woof! (overridden in Dog)
print(my_cat.name) #output: Whiskers (inherited from Animal)
print(my_cat.speak()) #output: Meow! (Overridden in Cat)

```

**Key Concepts:**

*   The `class Dog(Animal):` syntax indicates that `Dog` is a subclass of `Animal`.
*   The `Animal` class is the superclass of `Dog`.
*   The `Dog` class inherits the `__init__` and `name` attributes from `Animal`.

## 2. Purpose and Benefits of Inheritance

*   **Code Reusability:**  Subclasses inherit existing code from superclasses, reducing the need to rewrite code for similar functionalities. This saves time and effort.
*   **Code Extensibility:** Subclasses can add new methods and attributes to the inherited ones, extending the functionality of the superclass.
*   **Code Maintainability:** Changes to the superclass are automatically reflected in its subclasses (unless overridden), simplifying maintenance.  If a bug is fixed in the superclass, all subclasses that inherit that functionality are automatically fixed as well.
*   **Polymorphism:** Inheritance enables polymorphism, allowing objects of different classes to be treated as objects of a common type (their superclass).  This simplifies code that needs to operate on multiple types of objects.
*   **Abstraction:**  Inheritance allows you to create abstract base classes that define a common interface for a set of related classes.  This promotes a more structured and organized code design.

## 3. Implementing Subclass Creation

The syntax for creating a subclass varies depending on the programming language.  Here's the Python example again:

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Generic animal sound"

class Dog(Animal):  # Dog is a subclass of Animal
    def __init__(self, name, breed): #Override the constructor
        super().__init__(name) #Call the superclass constructor
        self.breed = breed #Add a new attribute

    def speak(self):
        return "Woof!"

    def bark(self): #Add a new method
        return "Dog is barking"


my_dog = Dog("Buddy", "Golden Retriever")
print(my_dog.name) #Buddy
print(my_dog.breed) #Golden Retriever
print(my_dog.speak()) #Woof!
print(my_dog.bark()) #Dog is barking
```

**Important Points:**

*   The subclass `Dog` specifies its superclass (`Animal`) in parentheses: `class Dog(Animal):`.
*   If the subclass needs to initialize its own attributes in addition to those inherited from the superclass, it should define its own `__init__` method.
*   Inside the subclass's `__init__` method, you should call the superclass's `__init__` method using `super().__init__(...)` to initialize the inherited attributes.

## 4. Method Overriding

*   **Method Overriding:**  When a subclass defines a method with the same name and signature (parameters) as a method in its superclass, it *overrides* the superclass's method.  This allows the subclass to provide a specialized implementation of the method.

*   In the previous example, the `Dog` class overrides the `speak()` method inherited from `Animal`.  When you call `my_dog.speak()`, the `Dog`'s version of the method is executed, not the `Animal`'s version.

**Example (revisited):**

```python
class Animal:
    def speak(self):
        return "Generic animal sound"

class Dog(Animal):
    def speak(self):  # Overriding the speak() method
        return "Woof!"

my_animal = Animal()
my_dog = Dog()

print(my_animal.speak())  # Output: Generic animal sound
print(my_dog.speak())  # Output: Woof!
```

## 5. Extending Functionality

*   Subclasses can extend the functionality of the superclass by adding new attributes and methods.

**Example (revisited and extended):**

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Generic animal sound"

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed  # Extending the functionality - adding a new attribute

    def speak(self):
        return "Woof!"

    def fetch(self):  # Extending the functionality - adding a new method
        return "Dog is fetching the ball!"

my_dog = Dog("Buddy", "Golden Retriever")
print(my_dog.name)      # Output: Buddy
print(my_dog.breed)     # Output: Golden Retriever
print(my_dog.speak())    # Output: Woof!
print(my_dog.fetch())    # Output: Dog is fetching the ball!
```

In this example, `Dog` extends the functionality of `Animal` by adding a `breed` attribute and a `fetch()` method.

## 6. The `super()` Keyword

*   The `super()` keyword provides a way to access methods and attributes from the superclass within the subclass.

*   As demonstrated earlier, it's commonly used in the subclass's `__init__` method to call the superclass's `__init__` method and initialize inherited attributes.

*   It can also be used to call other methods from the superclass, even if they are overridden in the subclass.  This allows you to reuse some of the superclass's logic while still providing a specialized implementation in the subclass.

**Example:**

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Generic animal sound"

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # Call Animal's __init__
        self.breed = breed

    def speak(self):
        return "Woof!"

    def display_animal_sound(self):
        return super().speak() #calls Animal's Speak method.

my_dog = Dog("Buddy", "Golden Retriever")
print(my_dog.display_animal_sound()) #Generic animal sound

```

## 7. Inheritance vs. Composition

*   **Inheritance ("is-a" relationship):**  A subclass inherits properties and behaviors from a superclass.  Use inheritance when a subclass *is a* specialized version of its superclass.  Example:  A `Dog` *is a* `Animal`.

*   **Composition ("has-a" relationship):**  A class contains an object of another class as one of its attributes.  Use composition when a class *has a* relationship with another class.  Example:  A `Car` *has an* `Engine`.

**Example illustrating the difference:**

```python
# Inheritance (is-a)
class Engine: #Assume we have an Engine class
    def start(self):
        return "Engine Started"

class Car(Engine): #Car *is a* Engine (incorrect use of inheritance)
    def __init__(self, model):
        self.model = model

# Composition (has-a) - Correct approach
class BetterCar:
    def __init__(self, model, engine):
        self.model = model
        self.engine = engine #Car *has an* Engine

    def start(self):
        return self.engine.start() #Delegating to the engine object

engine = Engine()
my_better_car = BetterCar("Tesla", engine)
print(my_better_car.start()) # Engine Started. Engine's start method is correctly called.

```

**Key Considerations:**

*   Inheritance should be used sparingly and carefully. Overuse can lead to tightly coupled and fragile code.
*   Favor composition over inheritance when possible.  Composition generally leads to more flexible and maintainable code.
*   Ask yourself:  Does the subclass truly *is a* type of the superclass? If not, composition may be a better choice.

## Practice Questions / Exercises

1.  **Create a `Shape` class with a method `area()` that returns 0.  Create subclasses `Rectangle` and `Circle` that inherit from `Shape` and override the `area()` method to calculate the area of the respective shapes.**
    *   Rectangle should have `width` and `height` attributes.
    *   Circle should have a `radius` attribute.

    ```python
    import math

    class Shape:
        def area(self):
            return 0

    class Rectangle(Shape):
        def __init__(self, width, height):
            self.width = width
            self.height = height

        def area(self):
            return self.width * self.height

    class Circle(Shape):
        def __init__(self, radius):
            self.radius = radius

        def area(self):
            return math.pi * self.radius**2

    # Example Usage
    my_rectangle = Rectangle(5, 10)
    my_circle = Circle(7)

    print(f"Rectangle area: {my_rectangle.area()}")  # Output: Rectangle area: 50
    print(f"Circle area: {my_circle.area()}")       # Output: Circle area: 153.93804002589985
    ```

2.  **Create a `Vehicle` class with attributes `make` and `model`. Create subclasses `Car` and `Motorcycle`. `Car` should have an additional attribute `num_doors`, and `Motorcycle` should have an attribute `has_sidecar`.  Implement a method called `description()` in each class that returns a string describing the vehicle.**

    ```python
    class Vehicle:
        def __init__(self, make, model):
            self.make = make
            self.model = model

        def description(self):
            return f"This is a {self.make} {self.model}."

    class Car(Vehicle):
        def __init__(self, make, model, num_doors):
            super().__init__(make, model)
            self.num_doors = num_doors

        def description(self):
            return f"This is a {self.make} {self.model} with {self.num_doors} doors."


    class Motorcycle(Vehicle):
        def __init__(self, make, model, has_sidecar):
            super().__init__(make, model)
            self.has_sidecar = has_sidecar

        def description(self):
            sidecar_text = "with a sidecar" if self.has_sidecar else "without a sidecar"
            return f"This is a {self.make} {self.model} {sidecar_text}."

    # Example Usage
    my_car = Car("Toyota", "Camry", 4)
    my_motorcycle = Motorcycle("Harley-Davidson", "Sportster", False)

    print(my_car.description())       # Output: This is a Toyota Camry with 4 doors.
    print(my_motorcycle.description()) # Output: This is a Harley-Davidson Sportster without a sidecar.
    ```

3. **Explain when you would choose inheritance and when you would choose composition in object-oriented design.**
    * *Answer:*
        * **Inheritance:** Choose inheritance when a class "is-a" specialized version of another class. It's appropriate when you want to reuse code from a parent class and extend it with specific functionality. However, use it cautiously as it can lead to tight coupling and the fragile base class problem.
        * **Composition:** Choose composition when a class "has-a" relationship with another class. This involves creating instances of other classes as attributes. Composition promotes loose coupling and is generally preferred over inheritance when it leads to a more flexible and maintainable design.  The dependency is explicitly declared and less prone to unexpected side effects.

## Important Points to Remember

*   **"Is-a" vs. "Has-a":** Understanding the difference between these relationships is crucial for deciding whether to use inheritance or composition.
*   **`super()` usage:** Always call `super().__init__(...)` in the subclass's `__init__` method to properly initialize inherited attributes.
*   **Method overriding:** Be aware of which methods you are overriding and ensure that the subclass implementation behaves as expected.
*   **Inheritance depth:** Avoid deep inheritance hierarchies, as they can become difficult to manage and understand.  Consider the Liskov Substitution Principle when designing inheritance structures.
*   **Favor composition:** When in doubt, prefer composition over inheritance.

These notes provide a comprehensive overview of subclasses in Object-Oriented Programming.  By understanding these concepts and practicing with examples, you will be well-equipped to design and implement robust and maintainable software systems.
