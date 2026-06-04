---
title: "Inheritance - Super Class"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acaa"
status: "completed"
scrapedAt: "2026-05-20T16:28:47.513Z"
---
## Object Oriented Programming: Module 2 - Polymorphism: Inheritance - Super Class

**Learning Outcomes:**

*   Understand the concept of inheritance and its benefits.
*   Define and identify the superclass (also known as the parent class or base class).
*   Explain the relationship between a superclass and a subclass.
*   Understand how a subclass inherits properties and methods from a superclass.
*   Learn how to access superclass members from a subclass using the `super()` keyword.
*   Implement simple inheritance scenarios involving a superclass.

**1. Introduction to Inheritance**

*   **Definition:** Inheritance is a fundamental object-oriented programming (OOP) concept that allows a new class (called a *subclass* or *derived class*) to inherit properties and methods from an existing class (called a *superclass*, *parent class*, or *base class*).

*   **Benefits of Inheritance:**
    *   **Code Reusability:**  Avoids writing the same code multiple times. The subclass automatically inherits and reuses the superclass's functionality.
    *   **Extensibility:**  Allows you to extend the functionality of existing classes without modifying them directly.  You can add new features or modify existing ones in the subclass.
    *   **Organization:**  Promotes a hierarchical organization of classes, making code easier to understand and maintain.  Facilitates the creation of a clear class structure.
    *   **Polymorphism (Related to Later Modules):** Enables treating objects of different classes uniformly, especially when they inherit from a common superclass.

**2. The Super Class (Parent Class or Base Class)**

*   **Definition:** The superclass is the class from which other classes inherit. It defines the common characteristics and behaviors that are shared by all its subclasses.

*   **Role of the Superclass:**
    *   Provides a blueprint for creating subclasses.
    *   Defines common attributes (data members or fields) and methods (functions) that all subclasses will possess.
    *   May define abstract methods (in more advanced scenarios) that subclasses are *required* to implement.

*   **Example (Python):**

    ```python
    class Animal:  # Superclass or Base Class
        def __init__(self, name, species):
            self.name = name
            self.species = species

        def make_sound(self):
            print("Generic animal sound") # Default behavior

        def __str__(self):
            return f"{self.name} is a {self.species}"

    # Example Usage
    animal1 = Animal("Generic Animal", "Generic Species")
    print(animal1)  # Output: Generic Animal is a Generic Species
    animal1.make_sound() # Output: Generic animal sound

    ```

**3. Relationship between Superclass and Subclass**

*   **"Is-a" Relationship:** The core concept behind inheritance is the "is-a" relationship.  A subclass "is-a" type of its superclass.  For example, a Dog "is-a" type of Animal.
*   **Inheritance Hierarchy:**  Classes can be organized into a hierarchy where a superclass can have multiple subclasses, and a subclass can be a superclass to other subclasses (multilevel inheritance).
*   **Subclass Extends Superclass:** The subclass *extends* the superclass by adding new attributes, methods, or modifying existing ones.  It doesn't replace the superclass; it builds upon it.

**4. Inheritance of Properties and Methods**

*   **Automatic Inheritance:**  When a subclass inherits from a superclass, it automatically inherits all the public and protected (depending on the language; discussed later) attributes and methods of the superclass.
*   **Access to Inherited Members:** Subclasses can access and use the inherited members as if they were defined in the subclass itself (subject to access modifiers like `public`, `private`, `protected`).
*   **Overriding Methods:** A subclass can provide its own implementation of a method that is already defined in the superclass.  This is called *method overriding*.  This allows subclasses to customize the behavior of inherited methods to suit their specific needs.

*   **Example (Python - Extending the Animal example):**

    ```python
    class Dog(Animal):  # Dog is a Subclass of Animal
        def __init__(self, name, breed):
            # Call the superclass's constructor to initialize name and species
            super().__init__(name, species="Dog")
            self.breed = breed

        # Overriding the make_sound method
        def make_sound(self):
            print("Woof!")

        def fetch(self):  # Adding a new method specific to Dog
            print("Fetching the ball!")

    # Example Usage
    dog1 = Dog("Buddy", "Golden Retriever")
    print(dog1)      # Output: Buddy is a Dog (Inherited from Animal's __str__)
    dog1.make_sound() # Output: Woof!  (Overridden method)
    dog1.fetch()     # Output: Fetching the ball! (New method)

    animal2 = Animal("Some Other Animal", "Unknown Species")
    animal2.make_sound() # Output: Generic animal sound (No override in Animal)

    ```

**5. The `super()` Keyword**

*   **Purpose:** The `super()` keyword is used to access the superclass's members (attributes and methods) from within a subclass.
*   **Common Use Cases:**
    *   **Calling the Superclass Constructor:**  `super().__init__(...)` is frequently used in the subclass's constructor (`__init__` in Python) to initialize the inherited attributes.  This is crucial to properly initialize the object.
    *   **Calling Overridden Methods:** When a subclass overrides a method, `super().method_name()` can be used to call the superclass's implementation of that method.  This allows you to extend the superclass's functionality while adding your own specific behavior.

*   **Example (Continued from above):**

    In the `Dog` class, `super().__init__(name, species="Dog")` calls the `Animal` class's constructor to initialize the `name` and `species` attributes. We set the species to "Dog" because it's implied given this object is of type Dog.

**6. Important Points to Remember**

*   **"Is-a" relationship is KEY:** Ensure the relationship between superclass and subclass makes logical sense.
*   **Constructor Initialization:** Always call the superclass's constructor using `super().__init__(...)` in the subclass constructor to properly initialize inherited attributes.  Failure to do so can lead to errors or unexpected behavior.
*   **Method Overriding vs. Overloading:**  Overriding replaces a method from the superclass. Overloading (if supported by the language, like in Java) creates a new method with the same name but different parameters.  Be mindful of the distinction.
*   **Access Modifiers:** Be aware of access modifiers (public, private, protected) in your programming language. They control which members of the superclass are accessible from the subclass. In Python, there is a convention of using single and double underscores to denote "protected" and "private" members respectively, but these are not enforced by the language.

**7. Practice Questions/Exercises**

**Question 1:**

Define a superclass called `Vehicle` with attributes `model`, `color`, and `year`.  Include a method `start_engine()` that prints "Engine started."  Create a subclass called `Car` that inherits from `Vehicle` and adds an attribute `num_doors`. Override the `start_engine()` method in the `Car` class to print "Car engine started." Create an instance of the `Car` class and call the `start_engine()` method.

**Answer 1:**

```python
class Vehicle:
    def __init__(self, model, color, year):
        self.model = model
        self.color = color
        self.year = year

    def start_engine(self):
        print("Engine started.")

class Car(Vehicle):
    def __init__(self, model, color, year, num_doors):
        super().__init__(model, color, year)
        self.num_doors = num_doors

    def start_engine(self):
        print("Car engine started.")


my_car = Car("Sedan", "Red", 2023, 4)
my_car.start_engine()  # Output: Car engine started.

```

**Question 2:**

Create a class `Shape` with an abstract method `area()`.  Create subclasses `Rectangle` and `Circle` that inherit from `Shape` and implement the `area()` method to calculate and return the area of the respective shapes. (Note: In Python, you'd use the `abc` module for abstract classes and methods;  we'll illustrate the basic concept without it here).

**Answer 2:**

```python
class Shape:
    def area(self): # Treat this as if it's an abstract method in other languages
        raise NotImplementedError("Subclasses must implement the area() method")

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
        import math
        return math.pi * self.radius**2

my_rectangle = Rectangle(5, 10)
print(f"Rectangle Area: {my_rectangle.area()}") # Output: Rectangle Area: 50

my_circle = Circle(3)
print(f"Circle Area: {my_circle.area()}") # Output: Circle Area: 28.274333882308138
```

**Question 3:**

Explain the purpose of the `super()` keyword and provide a scenario where it is essential.

**Answer 3:**

The `super()` keyword is used to access the superclass's members (attributes and methods) from within a subclass. It is essential in scenarios where you need to call the superclass's constructor (`__init__`) to initialize inherited attributes or when you want to extend the functionality of an overridden method by calling the superclass's implementation first.  Without `super()`, you would have to explicitly reference the superclass, which can become cumbersome and less maintainable, especially in complex inheritance hierarchies. It ensures proper initialization and inheritance.
