---
title: "protected Members"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfa8"
status: "completed"
scrapedAt: "2026-05-20T16:56:12.746Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism

## Topic: Protected Members

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the purpose and functionality of `protected` members in Object-Oriented Programming.
*   Differentiate `protected` members from `public` and `private` members.
*   Explain how `protected` members facilitate inheritance and code reuse.
*   Illustrate the access control of `protected` members in various scenarios, including within the class itself, by derived classes, and by unrelated classes.
*   Apply the concept of `protected` members in practical programming examples.

---

### 1. Introduction to Protected Members

`protected` is an access specifier in Object-Oriented Programming (OOP) that defines the visibility and accessibility of class members (attributes and methods). It strikes a balance between the unrestricted access of `public` members and the strict encapsulation of `private` members.

**Key Concept:** `protected` members are accessible from:

*   **Within the class itself:** Members declared as `protected` can be accessed by any method or attribute within the same class.
*   **By derived (child) classes:** Members declared as `protected` are accessible by any class that inherits from the base class.
*   **By friends (in some languages like C++):** If a language supports "friend" functions or classes, those explicitly declared as friends can access `protected` members.

**Crucially, `protected` members are NOT accessible from:**

*   **Unrelated (external) classes:** Classes that do not inherit from the base class cannot directly access its `protected` members.

---

### 2. Comparison with Public and Private Members

To fully grasp `protected`, it's helpful to compare it with `public` and `private`:

| Access Specifier | Accessible From | Within the Class | Derived Classes | Unrelated Classes | Friend Classes/Functions |
| :--------------- | :-------------- | :--------------- | :-------------- | :---------------- | :----------------------- |
| **`public`**     | Anywhere        | Yes              | Yes             | Yes               | Yes                      |
| **`protected`**  | Class & Derived | Yes              | Yes             | No                | Yes                      |
| **`private`**    | Only within the Class | Yes              | No              | No                | No                       |

**Analogy:**

Imagine a family estate:

*   **`public`:** The front gate and the main living areas. Anyone can access them.
*   **`protected`:** The family library or a private garden. Only family members (including children) can access them. Outsiders are not allowed.
*   **`private`:** A personal diary or a secure vault. Only the owner of the diary/vault can access it. Even other family members cannot.

---

### 3. Purpose and Benefits of Protected Members

The `protected` access specifier plays a vital role in OOP, particularly in the context of inheritance:

*   **Facilitating Inheritance:** It allows base classes to expose certain data or functionality that derived classes might need to access, modify, or extend. This is fundamental to the "is-a" relationship in inheritance.
*   **Code Reusability:** Derived classes can leverage `protected` members of their base class without needing to reimplement them. This promotes DRY (Don't Repeat Yourself) principles.
*   **Encapsulation with Inheritance in Mind:** `protected` provides a level of encapsulation that is more granular than `private`. It allows controlled access for subclasses while still preventing arbitrary external access. This is crucial for maintaining the integrity of the base class's internal state while allowing for specialized behavior in derived classes.
*   **Implementing Hierarchies:** In complex class hierarchies, `protected` members can be used to share common functionality or data among related classes without making them universally public.

---

### 4. Access Control Scenarios

Let's illustrate the access control of `protected` members with a conceptual example. Assume we have a `Base` class and a `Derived` class that inherits from `Base`.

```
// Conceptual Example (Syntax might vary by language)

class Base {
protected:
    int protected_data;

public:
    Base(int val) : protected_data(val) {}

    void display_protected_from_base() {
        std::cout << "From Base class: " << protected_data << std::endl;
    }
};

class Derived : public Base {
public:
    Derived(int val) : Base(val) {}

    void access_protected_from_derived() {
        // Accessing protected_data from Derived class (allowed)
        std::cout << "From Derived class accessing Base's protected_data: " << protected_data << std::endl;
    }
};

class Unrelated {
public:
    void try_access_protected(Base& obj) {
        // Trying to access protected_data from an unrelated class (NOT allowed)
        // std::cout << "From Unrelated class: " << obj.protected_data << std::endl; // This would cause a compile-time error
    }
};

int main() {
    Base b(10);
    Derived d(20);

    // Accessing public members of Base
    b.display_protected_from_base(); // Allowed

    // Accessing public members of Derived
    d.access_protected_from_derived(); // Allowed

    // Trying to access protected members directly from outside (NOT allowed)
    // std::cout << b.protected_data << std::endl; // Compile-time error
    // std::cout << d.protected_data << std::endl; // Compile-time error (protected member inherited, but not directly accessible)

    Unrelated u;
    // u.try_access_protected(b); // Would try to access protected_data, which is not allowed

    return 0;
}
```

**Explanation of Scenarios:**

1.  **Access within the `Base` class:** The `display_protected_from_base` method within `Base` can directly access `protected_data`.
2.  **Access within the `Derived` class:** The `access_protected_from_derived` method within `Derived` can also directly access `protected_data` because `Derived` inherits from `Base`.
3.  **Access by `Unrelated` class:** An `Unrelated` class, which does not inherit from `Base`, cannot directly access `protected_data` through an instance of `Base` or `Derived`.

---

### 5. Examples in Different Programming Languages

The concept of `protected` is present in many OOP languages, though the exact keywords might differ (e.g., `protected` in C++, C#, Java; `protected` or `_` prefix in Python for convention).

#### 5.1 C++ Example

```cpp
#include <iostream>

class Vehicle {
protected:
    std::string brand;

public:
    Vehicle(const std::string& b) : brand(b) {}

    void displayBrand() {
        std::cout << "Brand: " << brand << std::endl; // Accessing protected member within the class
    }
};

class Car : public Vehicle {
public:
    Car(const std::string& b) : Vehicle(b) {}

    void displayCarInfo() {
        std::cout << "This is a car from ";
        std::cout << brand << std::endl; // Accessing protected member from derived class
    }
};

class Bicycle {
public:
    void tryAccessVehicleBrand(Vehicle& v) {
        // Cannot access protected member from unrelated class
        // std::cout << "Trying to access brand: " << v.brand << std::endl; // Error
    }
};

int main() {
    Car myCar("Toyota");
    myCar.displayCarInfo(); // Output: This is a car from Toyota
    myCar.displayBrand();   // Output: Brand: Toyota (public method of Base accessed via Derived)

    Vehicle genericVehicle("Generic");
    // genericVehicle.brand; // Error: 'brand' is protected within this context
    genericVehicle.displayBrand(); // Output: Brand: Generic

    Bicycle myBike;
    // myBike.tryAccessVehicleBrand(myCar); // Would fail if it tried to access 'brand'

    return 0;
}
```

#### 5.2 Java Example

```java
class Vehicle {
    protected String brand;

    public Vehicle(String b) {
        this.brand = b;
    }

    public void displayBrand() {
        System.out.println("Brand: " + brand); // Accessing protected member within the class
    }
}

class Car extends Vehicle {
    public Car(String b) {
        super(b);
    }

    public void displayCarInfo() {
        System.out.println("This is a car from " + brand); // Accessing protected member from derived class
    }
}

class Bicycle {
    public void tryAccessVehicleBrand(Vehicle v) {
        // Cannot access protected member from unrelated class
        // System.out.println("Trying to access brand: " + v.brand); // Error
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Honda");
        myCar.displayCarInfo(); // Output: This is a car from Honda
        myCar.displayBrand();   // Output: Brand: Honda (public method of Base accessed via Derived)

        Vehicle genericVehicle = new Vehicle("Suzuki");
        // genericVehicle.brand; // Error: 'brand' has protected access in 'Vehicle'
        genericVehicle.displayBrand(); // Output: Brand: Suzuki

        Bicycle myBike = new Bicycle();
        // myBike.tryAccessVehicleBrand(myCar); // Would fail if it tried to access 'brand'
    }
}
```

#### 5.3 Python (Convention-based)

Python doesn't have explicit `protected` keywords like C++ or Java. Instead, it uses a naming convention: members prefixed with a single underscore (`_`) are conventionally considered "protected" and are intended for internal use by the class and its subclasses. While Python doesn't strictly enforce this at runtime (you *can* still access them from outside), it's a strong signal to developers.

```python
class Vehicle:
    def __init__(self, brand):
        self._brand = brand  # Conventionally protected member

    def display_brand(self):
        print(f"Brand: {self._brand}") # Accessing protected member within the class

class Car(Vehicle):
    def __init__(self, brand, model):
        super().__init__(brand)
        self.model = model

    def display_car_info(self):
        print(f"This is a {self.model} from {self._brand}") # Accessing protected member from derived class

class Bicycle:
    def try_access_vehicle_brand(self, v: Vehicle):
        # Conventionally, you shouldn't access _brand directly here.
        # If you did: print(f"Trying to access brand: {v._brand}") # This works but violates convention
        pass

my_car = Car("Ford", "Mustang")
my_car.display_car_info() # Output: This is a Mustang from Ford
my_car.display_brand()    # Output: Brand: Ford

generic_vehicle = Vehicle("Nissan")
# print(generic_vehicle._brand) # This works, but is discouraged by convention
generic_vehicle.display_brand() # Output: Brand: Nissan

my_bike = Bicycle()
# my_bike.try_access_vehicle_brand(my_car) # No direct access to _brand attempted in the method itself
```

---

### 6. Important Points to Remember

*   **Inheritance is Key:** `protected` members are primarily for enabling controlled access within inheritance hierarchies.
*   **Not Public, Not Private:** They are not as exposed as `public` members, nor as hidden as `private` members.
*   **Intention vs. Enforcement:** In languages like Python, the `_` prefix is a convention, not a strict enforcement mechanism. Developers should respect this convention.
*   **Consider Alternatives:** Before making a member `protected`, consider if a `public` getter/setter method for a `private` member might be a cleaner approach if the subclass only needs to read or set a specific value without direct access to the internal representation.
*   **API Design:** The choice of `protected` affects the API of your base class and how subclasses can interact with it. Think carefully about what functionality or data truly needs to be shared with subclasses.

---

### 7. Practice Questions/Exercises

1.  **Conceptual:** Explain in your own words the primary purpose of `protected` members in object-oriented programming.
2.  **Comparison:** Create a small table comparing the accessibility of `public`, `protected`, and `private` members from the class itself, derived classes, and unrelated classes.
3.  **Scenario Analysis:**
    Consider the following code snippet (use a language you are familiar with, or pseudocode):

    ```
    class Animal:
        protected:
            animal_type: str

        def __init__(self, type):
            self.animal_type = type

        def show_type(self):
            print(f"This animal is a {self.animal_type}")

    class Dog(Animal):
        def __init__(self, name):
            super().__init__("Canine")
            self.name = name

        def bark(self):
            print(f"{self.name} says Woof!")
            print(f"Accessing type from Dog: {self.animal_type}") # Line A

    class Cat:
        def __init__(self, color):
            self.color = color

        def get_animal_type(self, animal: Animal):
            print(f"Accessing type from Cat: {animal.animal_type}") # Line B

    my_dog = Dog("Buddy")
    my_dog.bark()
    # What is printed at Line A?
    # What would happen if you tried to access my_dog.animal_type directly from the main scope?

    my_cat = Cat("Black")
    # my_cat.get_animal_type(my_dog)
    # What would happen at Line B if the 'animal_type' was 'protected' (or conceptually protected)?
    ```

4.  **Code Implementation (Choose one language):**
    *   **C++ / Java:** Create a `Shape` base class with a `protected` member `color`. Implement `Circle` and `Rectangle` classes that inherit from `Shape`. Allow `Circle` and `Rectangle` to access and print the `color` of the shape. Demonstrate that an external class (`ColorTester`) cannot directly access the `color` of a `Shape` object.
    *   **Python:** Create a `Book` class with a `_title` (protected convention) and `_author` (protected convention). Create a `EBook` class inheriting from `Book` that can access and print both `_title` and `_author`. Show that trying to access `_title` or `_author` directly from outside the classes is discouraged by convention.

---

### 8. Answers to Practice Questions

1.  **Conceptual Purpose:** The primary purpose of `protected` members is to allow controlled access to class members from within the class itself and from its derived (child) classes, while preventing access from unrelated external classes. This facilitates inheritance and code reuse by providing a mechanism for base classes to share necessary implementation details with their subclasses without exposing them to the general public.

2.  **Comparison Table:**

    | Access Specifier | Accessible From             | Within the Class | Derived Classes | Unrelated Classes |
    | :--------------- | :-------------------------- | :--------------- | :-------------- | :---------------- |
    | **`public`**     | Anywhere                    | Yes              | Yes             | Yes               |
    | **`protected`**  | Class & Derived Classes     | Yes              | Yes             | No                |
    | **`private`**    | Only within the Class       | Yes              | No              | No                |

3.  **Scenario Analysis:**

    *   **Line A:** `Accessing type from Dog: Canine` (The `Dog` class can access `animal_type` because it's `protected` and `Dog` inherits from `Animal`).
    *   **Direct Access:** If you tried to access `my_dog.animal_type` directly from the main scope, you would get a compile-time error (or an attribute error in Python if not adhering to convention), because `animal_type` is `protected` and not directly accessible from outside the class hierarchy.
    *   **Line B (with `protected`):** If `animal_type` was `protected` in `Animal`, Line B would cause a compile-time error in C++/Java/C#. The `Cat` class is unrelated to `Animal` and therefore cannot access its `protected` members. In Python, even though `v._animal_type` would work at runtime, it violates the protected convention.

4.  **Code Implementation (Example in Python for brevity):**

    ```python
    # Python Example for Question 4

    class Shape:
        def __init__(self, color):
            self._color = color  # Protected member by convention

        def display_color(self):
            print(f"Shape color: {self._color}")

    class Circle(Shape):
        def __init__(self, color, radius):
            super().__init__(color)
            self.radius = radius

        def display_circle_info(self):
            print(f"Circle with radius {self.radius}")
            print(f"Color accessed from Circle: {self._color}") # Accessing protected member

    class Rectangle(Shape):
        def __init__(self, color, width, height):
            super().__init__(color)
            self.width = width
            self.height = height

        def display_rectangle_info(self):
            print(f"Rectangle {self.width}x{self.height}")
            print(f"Color accessed from Rectangle: {self._color}") # Accessing protected member

    class ColorTester:
        def test_shape_color(self, shape_instance: Shape):
            # print(f"ColorTester trying to access color: {shape_instance._color}") # Works, but violates convention
            # Better to use public methods if available
            shape_instance.display_color()

    print("--- Circle ---")
    my_circle = Circle("Red", 5)
    my_circle.display_circle_info()
    my_circle.display_color() # Accessing via public method

    print("\n--- Rectangle ---")
    my_rectangle = Rectangle("Blue", 10, 20)
    my_rectangle.display_rectangle_info()
    my_rectangle.display_color() # Accessing via public method

    print("\n--- ColorTester ---")
    tester = ColorTester()
    tester.test_shape_color(my_circle)
    tester.test_shape_color(my_rectangle)

    # Demonstrating discouraged direct access outside class
    print("\n--- Discouraged Direct Access ---")
    # print(my_circle._color) # Works in Python, but not good practice for protected
    # print(my_rectangle._color) # Works in Python, but not good practice for protected
