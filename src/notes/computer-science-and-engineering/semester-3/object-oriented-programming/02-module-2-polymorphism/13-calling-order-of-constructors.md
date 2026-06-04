---
title: "Calling Order of Constructors"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acaf"
status: "completed"
scrapedAt: "2026-05-20T16:28:51.378Z"
---
## Object-Oriented Programming: Module 2 - Polymorphism: Calling Order of Constructors

These notes cover the calling order of constructors in object-oriented programming, focusing on scenarios involving inheritance and polymorphism.

**Learning Outcomes:**

*   Understand the default calling order of constructors in inheritance.
*   Be able to control the calling order of constructors using `super()` or equivalent mechanisms.
*   Explain the importance of the base class constructor being called before the derived class constructor.
*   Predict the output of code involving constructor calls in inheritance hierarchies.
*   Recognize and avoid common pitfalls related to constructor calling order.

**1. Key Concepts and Definitions**

*   **Constructor:** A special method within a class that is automatically called when an object of that class is created. Its primary purpose is to initialize the object's state (i.e., its member variables).
*   **Inheritance:** A mechanism that allows a new class (the derived class or subclass) to inherit properties and methods from an existing class (the base class or superclass). This promotes code reuse and establishes an "is-a" relationship.
*   **Polymorphism:** The ability of an object to take on many forms. In this context, it refers to the ability of different classes in an inheritance hierarchy to respond to the same method call in their own specific ways.
*   **Base Class (Superclass):** The class being inherited from.
*   **Derived Class (Subclass):** The class that inherits from the base class.
*   **`super()` (or equivalent):**  A keyword/function used in the derived class's constructor to explicitly call the constructor of the base class. The specific syntax varies depending on the programming language (e.g., `super()` in Python and Java, `base()` in C#).
*   **Constructor Chaining:** The process of constructors calling other constructors, either within the same class or in its parent class.

**2. Default Calling Order of Constructors in Inheritance**

*   **Implicit Call:** When a derived class object is created, the base class constructor is automatically called *before* the derived class constructor. This ensures that the base class's state is properly initialized before the derived class attempts to use or modify it.
*   **Order:** The constructors are called in a top-down manner, starting from the base class and proceeding down the inheritance hierarchy.
*   **Default Constructor:** If the derived class constructor does not explicitly call a base class constructor (using `super()` or equivalent), the base class's *default constructor* (a constructor with no arguments) is automatically called.  If the base class doesn't have a default constructor, an error will occur unless a parameterized constructor is explicitly called using `super()`.

**3. Controlling the Calling Order with `super()` (or Equivalent)**

*   **Explicit Call:**  You can use `super()` to explicitly call a specific constructor of the base class, even if the base class has multiple constructors.
*   **Parameter Passing:** You can pass arguments to the base class constructor through the `super()` call. This allows you to initialize the base class's member variables with specific values.
*   **Placement:** The `super()` call *must* be the first statement in the derived class constructor.  This is crucial because the base class needs to be properly initialized before the derived class can perform any operations on it.

**4. Importance of Base Class Constructor Being Called First**

*   **Initialization Dependency:** Derived classes often rely on the base class's state being properly initialized. The base class constructor sets up the foundation for the derived class's functionality.
*   **Resource Allocation:** The base class constructor may allocate resources (e.g., memory, file handles) that the derived class needs to operate.
*   **Preventing Errors:** Calling the base class constructor ensures that member variables are initialized to known, valid states, preventing unexpected behavior and potential errors.

**5. Examples**

Let's illustrate with Python examples:

```python
class Animal:
    def __init__(self, name):
        print("Animal constructor called")
        self.name = name

    def speak(self):
        print("Generic animal sound")


class Dog(Animal):
    def __init__(self, name, breed):
        print("Dog constructor called")
        super().__init__(name)  # Calling the Animal constructor
        self.breed = breed

    def speak(self):
        print("Woof!")

# Example usage
my_dog = Dog("Buddy", "Golden Retriever")  # Create a Dog object
print(my_dog.name)
print(my_dog.breed)
my_dog.speak()

```

**Output:**

```
Dog constructor called
Animal constructor called
Buddy
Golden Retriever
Woof!
```

**Explanation:**

1.  When `Dog("Buddy", "Golden Retriever")` is created, the `Dog` constructor is called first.
2.  Inside the `Dog` constructor, `super().__init__(name)` calls the `Animal` constructor, passing the `name` argument.
3.  The `Animal` constructor is executed, printing "Animal constructor called" and setting `self.name`.
4.  Control returns to the `Dog` constructor, which then sets `self.breed`.
5.  The print statements demonstrate the initialized values, and `my_dog.speak()` illustrates polymorphism (the `Dog`'s `speak` method is called).

**Example with No Default Constructor in Base Class:**

```python
class Animal:
    def __init__(self, name, species):
        print("Animal constructor called with name and species")
        self.name = name
        self.species = species

class Dog(Animal):
    def __init__(self, name, breed):
        print("Dog constructor called")
        super().__init__(name, "Canine")  # Provide species
        self.breed = breed

my_dog = Dog("Buddy", "Golden Retriever")
print(f"Name: {my_dog.name}, Species: {my_dog.species}, Breed: {my_dog.breed}")
```

**Output:**

```
Dog constructor called
Animal constructor called with name and species
Name: Buddy, Species: Canine, Breed: Golden Retriever
```

**Explanation:**

Since the Animal class *only* has a parameterized constructor, the Dog class's constructor *must* explicitly call it with `super()`, providing the necessary arguments (name and species).

**6. Common Pitfalls**

*   **Forgetting to call `super()`:** This can lead to the base class not being initialized, resulting in errors or unexpected behavior.
*   **Incorrect placement of `super()`:**  `super()` must be the *first* statement in the derived class constructor.
*   **Calling the wrong constructor:** Ensure you're calling the correct base class constructor with the appropriate arguments.  If you pass the wrong types or number of arguments, you'll get an error.
*   **Base class having no default constructor and derived class not calling `super()` explicitly:** This will lead to an error during object creation.

**7. Practice Questions/Exercises**

**Question 1:**

Consider the following Java code:

```java
class Vehicle {
    String type;

    Vehicle() {
        System.out.println("Vehicle constructor");
        type = "Generic Vehicle";
    }

    Vehicle(String vehicleType) {
        System.out.println("Vehicle constructor with type");
        type = vehicleType;
    }
}

class Car extends Vehicle {
    String model;

    Car() {
        System.out.println("Car constructor");
        model = "Unknown";
    }

    Car(String vehicleType, String carModel) {
        super(vehicleType);
        System.out.println("Car constructor with type and model");
        model = carModel;
    }

    public static void main(String[] args) {
        Car myCar1 = new Car();
        Car myCar2 = new Car("Automobile", "Sedan");
    }
}
```

What will be the output of this code?

**Answer:**

```
Vehicle constructor
Car constructor
Vehicle constructor with type
Car constructor with type and model
```

**Explanation:**

*   `Car myCar1 = new Car();` calls the default `Car` constructor, which implicitly calls the default `Vehicle` constructor.
*   `Car myCar2 = new Car("Automobile", "Sedan");` calls the `Car` constructor that takes two arguments. This constructor explicitly calls the `Vehicle` constructor with one argument (`super(vehicleType)`).

**Question 2:**

Explain why the `super()` call must be the first statement in a derived class constructor.

**Answer:**

The `super()` call must be the first statement because the base class needs to be initialized before the derived class can access or modify any inherited members. The derived class's constructor relies on the base class's initialization to establish a consistent and predictable state. By calling `super()` first, you ensure that the base class's state is set up before the derived class attempts to use it.  Failing to do so can lead to unpredictable behavior or errors, as the derived class might be accessing uninitialized or inconsistent data.

**Question 3:**

Write a Python class `Rectangle` that inherits from a class `Shape`. The `Shape` class has a constructor that takes a color as input. The `Rectangle` class has a constructor that takes color, length, and width as input. Ensure the `Shape` constructor is properly called.

**Answer:**

```python
class Shape:
    def __init__(self, color):
        print("Shape constructor called")
        self.color = color

class Rectangle(Shape):
    def __init__(self, color, length, width):
        print("Rectangle constructor called")
        super().__init__(color)
        self.length = length
        self.width = width

#Example usage
my_rectangle = Rectangle("Blue", 10, 5)
print(f"Color: {my_rectangle.color}, Length: {my_rectangle.length}, Width: {my_rectangle.width}")

```

**8. Important Points to Remember**

*   The base class constructor is *always* called before the derived class constructor.
*   Use `super()` (or equivalent) to explicitly call the base class constructor and pass arguments if necessary.
*   `super()` *must* be the first statement in the derived class constructor.
*   Understand the inheritance hierarchy and ensure the correct constructors are being called.
*   Be aware of the default constructor behavior and handle cases where the base class does not have a default constructor.
