---
title: "Dynamic Method Dispatch"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acb1"
status: "completed"
scrapedAt: "2026-05-20T16:28:54.320Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 2: Polymorphism - Dynamic Method Dispatch

## Introduction

This module focuses on Dynamic Method Dispatch, a key concept within polymorphism in Object-Oriented Programming (OOP).  Dynamic method dispatch allows the correct version of a method to be called at runtime, based on the actual object type, rather than being determined at compile time. This provides flexibility and extensibility in your code.

## Learning Outcomes

By the end of this topic, you should be able to:

1.  **Define dynamic method dispatch (also known as runtime polymorphism or late binding).**
2.  **Explain how dynamic method dispatch relates to inheritance and method overriding.**
3.  **Demonstrate how dynamic method dispatch works in practice using examples.**
4.  **Understand the benefits of using dynamic method dispatch, such as increased flexibility and code reusability.**
5.  **Differentiate between static (early) binding and dynamic (late) binding.**
6.  **Analyze code snippets to predict the output based on dynamic method dispatch principles.**

## 1. Definition of Dynamic Method Dispatch (Runtime Polymorphism/Late Binding)

*   **Dynamic Method Dispatch:** The process of selecting which method implementation to execute at *runtime*, based on the actual object type being referenced.  This is also called **Runtime Polymorphism** or **Late Binding**.

*   **Key Concepts:**
    *   **Runtime:** The time when the program is executing (as opposed to compile time).
    *   **Polymorphism:** The ability of an object to take on many forms. In this context, it means that a method call can behave differently depending on the object it's invoked on.
    *   **Late Binding:** The decision of which method to call is made at runtime, not at compile time.

*   **Why is it "Dynamic"?** The method call is resolved dynamically because the precise type of the object is not known until the program is running.

## 2. Relationship to Inheritance and Method Overriding

*   **Inheritance:** Dynamic method dispatch relies heavily on inheritance. Inheritance allows subclasses to inherit methods from a superclass.

*   **Method Overriding:** This is the cornerstone of dynamic method dispatch. When a subclass *overrides* a method from its superclass, it provides its own specific implementation of that method.  The method signature (name, parameters) remains the same, but the method's behavior is different.

*   **How they work together:** When a method is called on an object, the runtime system checks the actual type of the object (not the type of the reference variable) and then executes the *overridden* version of the method defined in that class (or its closest ancestor if not overridden in that class).

**Example (Java):**

```java
class Animal {
    public void makeSound() {
        System.out.println("Generic animal sound");
    }
}

class Dog extends Animal {
    @Override // Good practice to use @Override annotation
    public void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myAnimal.makeSound(); // Output: Generic animal sound
        myDog.makeSound();    // Output: Woof! (Dynamic Method Dispatch)
        myCat.makeSound();    // Output: Meow! (Dynamic Method Dispatch)
    }
}
```

In this example, even though `myDog` and `myCat` are declared as `Animal`, at runtime, the `makeSound()` method of the `Dog` and `Cat` classes are executed, respectively, due to dynamic method dispatch.

## 3. Demonstration of Dynamic Method Dispatch in Practice

The example above is a perfect demonstration. Here's another example to highlight different scenarios:

**Example (Python):**

```python
class Shape:
    def draw(self):
        print("Drawing a shape")

class Circle(Shape):
    def draw(self):
        print("Drawing a circle")

class Square(Shape):
    def draw(self):
        print("Drawing a square")

def paint_shape(shape):
    shape.draw() # Dynamic Method Dispatch

# Create instances
my_circle = Circle()
my_square = Square()

# Call the draw method through a function
paint_shape(my_circle)  # Output: Drawing a circle
paint_shape(my_square)  # Output: Drawing a square
```

**Explanation:**

*   The `paint_shape` function accepts a `Shape` object (or any subclass of `Shape`).
*   Inside the function, `shape.draw()` is called.
*   Dynamic method dispatch ensures that the correct `draw()` method is called based on the *actual* type of the `shape` object (whether it's a `Circle`, `Square`, or a generic `Shape`).

## 4. Benefits of Dynamic Method Dispatch

*   **Flexibility:** Allows you to write code that can work with objects of different classes without needing to know their specific types at compile time.
*   **Extensibility:**  Easy to add new classes (subclasses) without modifying existing code that uses the superclass interface.  You just create the new class and override the methods as needed.
*   **Code Reusability:** You can write generic code that operates on a variety of object types, promoting code reuse and reducing redundancy.
*   **Polymorphism:** Achieves true polymorphism, allowing objects of different classes to respond to the same method call in different ways.
*   **Maintainability:** Changes in one class are less likely to affect other parts of the system if the interface defined by the superclass is maintained.

## 5. Static (Early) Binding vs. Dynamic (Late) Binding

| Feature          | Static (Early) Binding                               | Dynamic (Late) Binding                                   |
|-------------------|-------------------------------------------------------|----------------------------------------------------------|
| **Resolution Time** | Compile time                                           | Runtime                                                     |
| **Mechanism**     | Function overloading, static methods, final methods     | Method overriding through inheritance                         |
| **Performance**   | Generally faster because the method is known at compile time | Can be slightly slower due to the runtime lookup.             |
| **Flexibility**   | Less flexible                                           | More flexible and adaptable to changes in object types.   |
| **Polymorphism**  | Achieves compile-time polymorphism (overloading)        | Achieves runtime polymorphism (overriding)                 |

**Examples of Static Binding:**

*   **Function Overloading:**  Having multiple methods with the same name but different parameter lists.  The compiler determines which method to call based on the arguments passed.
*   **`final` methods (Java):** `final` methods cannot be overridden, so the compiler knows exactly which method to call.
*   **`static` methods:** `static` methods belong to the class, not the object, so the compiler knows which method to call at compile time.

## 6. Analyzing Code Snippets (Practice Questions)

Here are a few code snippets to test your understanding. Provide the output and explain your reasoning.

**Question 1 (Java):**

```java
class Vehicle {
    public void startEngine() {
        System.out.println("Generic vehicle engine started.");
    }
}

class Car extends Vehicle {
    @Override
    public void startEngine() {
        System.out.println("Car engine started.");
    }
}

class Motorcycle extends Vehicle {
    // No override of startEngine()
}

public class Test {
    public static void main(String[] args) {
        Vehicle v1 = new Vehicle();
        Vehicle v2 = new Car();
        Vehicle v3 = new Motorcycle();

        v1.startEngine();
        v2.startEngine();
        v3.startEngine();
    }
}
```

**Answer 1:**

```
Generic vehicle engine started.
Car engine started.
Generic vehicle engine started.
```

**Reasoning:**

*   `v1` is an `Animal` object, so `Animal`'s `startEngine()` is called.
*   `v2` is a `Car` object, even though it's referenced by an `Animal` variable. Dynamic method dispatch ensures `Car`'s `startEngine()` is called (because it overrides the method).
*   `v3` is a `Motorcycle` object, but `Motorcycle` *doesn't* override `startEngine()`. Therefore, `Animal`'s `startEngine()` method is called through inheritance.

**Question 2 (Python):**

```python
class Animal:
    def speak(self):
        return "Animal sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

def animal_sound(animal):
    print(animal.speak())

my_dog = Dog()
my_cat = Cat()
my_animal = Animal()

animal_sound(my_dog)
animal_sound(my_cat)
animal_sound(my_animal)
```

**Answer 2:**

```
Woof!
Meow!
Animal sound
```

**Reasoning:**  Dynamic method dispatch ensures that the correct `speak()` method is called based on the *actual* object type passed to the `animal_sound` function.

**Question 3 (Conceptual):**

Why is dynamic method dispatch important for creating extensible software systems?

**Answer 3:**

Dynamic method dispatch is crucial for extensibility because it allows new classes (subclasses) to be added to the system without requiring modifications to existing code that uses the superclass interface.  The new classes can override methods from the superclass to provide their own specific behavior, and the existing code will automatically use these overridden methods due to dynamic method dispatch. This promotes loose coupling and makes the system easier to maintain and evolve.

## Important Points to Remember

*   Dynamic method dispatch happens at *runtime*.
*   It relies on *inheritance* and *method overriding*.
*   The *actual object type*, not the reference type, determines which method is called.
*   It provides flexibility, extensibility, and code reusability.
*   It's also known as runtime polymorphism or late binding.
*   Understand the difference between static (early) and dynamic (late) binding.

By mastering these concepts, you'll be well-equipped to leverage the power of polymorphism and write more flexible, maintainable, and extensible object-oriented programs.
