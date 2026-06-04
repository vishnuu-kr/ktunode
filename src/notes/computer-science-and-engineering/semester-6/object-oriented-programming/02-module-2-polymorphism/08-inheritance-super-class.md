---
title: "Inheritance  - Super Class"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfa4"
status: "completed"
scrapedAt: "2026-05-20T16:56:09.853Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism

## Topic: Inheritance - Super Class

---

### Introduction

Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows us to define a new class based on an existing class. This mechanism promotes code reusability and establishes a hierarchical relationship between classes. The **Super Class**, also known as the **Parent Class** or **Base Class**, is the existing class from which new classes inherit properties and behaviors.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   **Understand the concept of a Super Class** and its role in inheritance.
*   **Identify the characteristics and purpose of a Super Class**.
*   **Explain how Super Classes facilitate code reusability and establish relationships** between classes.
*   **Recognize and apply Super Class concepts** in object-oriented design.

---

### Key Concepts and Definitions

#### 1. Super Class (Parent Class / Base Class)

*   **Definition:** A class from which another class (the subclass) inherits properties (attributes/data members) and behaviors (methods/functions).
*   **Purpose:**
    *   **Code Reusability:** Defines common attributes and methods that can be shared by multiple subclasses.
    *   **Establishing Relationships:** Represents a general concept or category.
    *   **Hierarchical Structure:** Forms the foundation of an inheritance hierarchy.

#### 2. Sub Class (Child Class / Derived Class)

*   **Definition:** A class that inherits properties and behaviors from a Super Class.
*   **Relationship:** A subclass *is-a* type of its Super Class. For example, a `Dog` *is-a* `Animal`.

#### 3. Inheritance Mechanism

*   When a class inherits from a Super Class, it automatically gains access to the Super Class's non-private members (attributes and methods).
*   Subclasses can also define their own unique attributes and methods, or override (redefine) inherited methods to provide specialized behavior.

---

### Characteristics and Purpose of a Super Class

*   **Generalization:** Super Classes typically represent more general concepts or entities.
    *   *Example:* `Vehicle` is a general concept, while `Car`, `Bike`, and `Truck` are specific types of vehicles.
*   **Foundation for Specialization:** They provide a common blueprint that can be extended and specialized by subclasses.
    *   *Example:* A `Shape` Super Class can define basic properties like `color` and a `draw()` method. Subclasses like `Circle`, `Square`, and `Triangle` can inherit these and add their specific properties (e.g., `radius` for `Circle`) and implement specialized `draw()` methods.
*   **Abstraction:** Super Classes can be abstract, meaning they cannot be instantiated directly. They serve as templates for other classes.
    *   *Example:* An abstract `Employee` class might have common attributes like `name` and `employeeId`, but the specific way to calculate salary might vary, making `calculateSalary()` an abstract method. Concrete subclasses like `FullTimeEmployee` and `PartTimeEmployee` would then provide their own implementations.
*   **Polymorphism Enabler:** Super Classes are crucial for achieving polymorphism. By allowing objects of different subclasses to be treated as objects of the Super Class, we can write code that works with the general Super Class type, but executes the specific behavior defined in the subclass.

---

### How Super Classes Facilitate Code Reusability and Establish Relationships

#### Code Reusability

*   **Eliminates Redundancy:** Instead of writing the same code in multiple classes, common attributes and methods are defined once in the Super Class and inherited by all its subclasses.
*   **Easier Maintenance:** If a common functionality needs to be updated, it only needs to be changed in the Super Class, and the update will be reflected in all inheriting subclasses.

#### Establishing Relationships

*   **"Is-A" Relationship:** Inheritance models the "is-a" relationship, indicating that a subclass is a more specific version of its Super Class. This makes the class design intuitive and understandable.
    *   *Example:* `Car` **is a** `Vehicle`. `Dog` **is an** `Animal`.
*   **Hierarchical Classification:** Creates a clear hierarchy, allowing for better organization and understanding of the program's structure.

---

### Examples

Let's illustrate the concept of a Super Class with a Python example.

**Scenario:** Representing different types of animals.

```python
# --- Super Class: Animal ---
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        print(f"{self.name} the {self.species} has been created.")

    def speak(self):
        """Default behavior for any animal sound."""
        print("Some generic animal sound")

    def move(self):
        """Default movement behavior."""
        print(f"{self.name} is moving.")

# --- Sub Class: Dog ---
class Dog(Animal):  # Dog inherits from Animal
    def __init__(self, name, breed):
        # Call the __init__ of the Super Class (Animal)
        super().__init__(name, species="Dog")
        self.breed = breed
        print(f"{self.name} is a {self.breed}.")

    def speak(self):  # Overriding the speak method
        """Dog-specific sound."""
        print("Woof! Woof!")

    def fetch(self):
        """Dog-specific behavior."""
        print(f"{self.name} is fetching the ball.")

# --- Sub Class: Cat ---
class Cat(Animal): # Cat inherits from Animal
    def __init__(self, name, color):
        super().__init__(name, species="Cat")
        self.color = color
        print(f"{self.name} is a {self.color} cat.")

    def speak(self): # Overriding the speak method
        """Cat-specific sound."""
        print("Meow!")

# --- Usage ---

# Creating instances
my_dog = Dog("Buddy", "Golden Retriever")
my_cat = Cat("Whiskers", "Gray")

print("\n--- Demonstrating Inheritance and Polymorphism ---")

# Accessing inherited attributes and methods
print(f"{my_dog.name} is of species: {my_dog.species}")
my_dog.move() # Inherited from Animal

print(f"{my_cat.name} is of species: {my_cat.species}")
my_cat.move() # Inherited from Animal

# Calling overridden methods (Polymorphism in action)
my_dog.speak()
my_cat.speak()

# Calling subclass-specific methods
my_dog.fetch()
# my_cat.fetch() # This would cause an error as Cat doesn't have fetch()

# Using Super Class type for a list of animals (Polymorphism)
print("\n--- Treating subclasses as Super Class types ---")
animals = [my_dog, my_cat]
for animal in animals:
    animal.speak() # Calls the appropriate speak() method based on the object's actual type
```

**Explanation:**

*   **`Animal` is the Super Class:** It defines common attributes (`name`, `species`) and methods (`speak`, `move`).
*   **`Dog` and `Cat` are Sub Classes:** They inherit from `Animal`.
*   **`super().__init__(...)`:** This is crucial. It calls the `__init__` method of the Super Class (`Animal`) to initialize the inherited attributes.
*   **Method Overriding:** Both `Dog` and `Cat` override the `speak()` method to provide their specific sounds. When `speak()` is called on a `Dog` or `Cat` object, the subclass's version is executed.
*   **Polymorphism:** The `for` loop iterating through `animals` demonstrates polymorphism. Even though `animal` is treated as an `Animal` type within the loop, the `animal.speak()` call executes the correct `speak()` method based on whether `animal` is actually a `Dog` or a `Cat`.

---

### Practice Questions and Exercises

1.  **What is the primary benefit of using a Super Class in OOP?**
    *   A) It allows classes to be hidden from other classes.
    *   B) It enforces strict data types.
    *   C) It promotes code reusability.
    *   D) It prevents methods from being called.

2.  **Explain the "is-a" relationship in the context of Super Classes and Sub Classes.**
    *   *Example:* Consider a `Vehicle` Super Class and a `Car` Sub Class.

3.  **If a Super Class has a method, and its Sub Class does not override it, what will happen when you call that method on an instance of the Sub Class?**

4.  **Create a simple Python program with a `Shape` Super Class and two Sub Classes: `Circle` and `Rectangle`.**
    *   The `Shape` class should have an `__init__` method that accepts a `color`.
    *   It should also have a `display_color()` method that prints the color.
    *   The `Circle` class should inherit from `Shape`, add a `radius` attribute, and override `display_color()` to also print the radius.
    *   The `Rectangle` class should inherit from `Shape`, add `width` and `height` attributes, and also override `display_color()` to print the dimensions.

---

### Answers to Practice Questions

1.  **Answer: C) It promotes code reusability.**
    *   **Explanation:** The core advantage of inheritance, and thus Super Classes, is the ability to define common elements once and reuse them across multiple derived classes, reducing redundant code.

2.  **Answer:** The "is-a" relationship signifies that a Sub Class is a specific type or specialization of its Super Class.
    *   **Example:** A `Car` **is a** `Vehicle`. This means a `Car` possesses all the general characteristics of a `Vehicle` (e.g., it has an engine, wheels, can move) but also has its own specific attributes and behaviors (e.g., number of doors, specific engine type, driving mechanism).

3.  **Answer:** When you call a method on an instance of the Sub Class that has not been overridden, the method defined in the **Super Class** will be executed. The Sub Class inherits this method and uses its implementation.

4.  **Python Program Example:**

    ```python
    class Shape:
        def __init__(self, color):
            self.color = color
            print(f"A shape with color {self.color} is created.")

        def display_color(self):
            print(f"Color: {self.color}")

    class Circle(Shape):
        def __init__(self, color, radius):
            super().__init__(color)
            self.radius = radius
            print(f"A circle with radius {self.radius} is created.")

        def display_color(self):
            # Call the Super Class method first (optional but good practice for consistency)
            super().display_color()
            print(f"Radius: {self.radius}")

    class Rectangle(Shape):
        def __init__(self, color, width, height):
            super().__init__(color)
            self.width = width
            self.height = height
            print(f"A rectangle with width {self.width} and height {self.height} is created.")

        def display_color(self):
            super().display_color()
            print(f"Dimensions: {self.width}x{self.height}")

    # --- Testing ---
    print("--- Creating instances ---")
    my_circle = Circle("Red", 5)
    my_rectangle = Rectangle("Blue", 10, 20)

    print("\n--- Displaying information ---")
    my_circle.display_color()
    print("-" * 10)
    my_rectangle.display_color()
    ```

---

### Important Points to Remember

*   **Super Class is the Foundation:** Think of the Super Class as the blueprint for a family of related objects.
*   **"Is-A" Relationship is Key:** Inheritance is appropriate when the Sub Class truly *is a* type of the Super Class. If the relationship is "has-a" (composition), inheritance is usually not the correct design pattern.
*   **`super()` is Essential:** When defining an `__init__` in a Sub Class, always call the Super Class's `__init__` using `super().__init__(...)` to ensure inherited attributes are properly initialized.
*   **Code Reusability Saves Time and Effort:** Leverage Super Classes to avoid repetitive coding.
*   **Inheritance Enables Polymorphism:** The ability to treat objects of different subclasses uniformly through their Super Class is a core aspect of polymorphism.

---
