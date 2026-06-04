---
title: "Inner Classes"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfa3"
status: "completed"
scrapedAt: "2026-05-20T16:56:09.130Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism
## Topic: Inner Classes

---

### 1. Introduction to Inner Classes

#### 1.1 What are Inner Classes?

*   **Definition:** An inner class is a class defined **inside** another class. The outer class is the enclosing class.
*   **Purpose:** Inner classes are used to logically group classes that are only used in one place, increase encapsulation, and create more readable and maintainable code.
*   **Visibility:** Inner classes are typically private, meaning they are only accessible from within the outer class. This aids in encapsulation and hides implementation details.
*   **Relationship:** An inner class has a special relationship with its outer class. An instance of an inner class is always associated with an instance of the outer class.

#### 1.2 Benefits of Using Inner Classes

*   **Encapsulation:** Inner classes can be hidden from the outside world, providing better encapsulation. The outer class can control access to the inner class and its members.
*   **Code Organization:** They help in logically grouping classes that are closely related and used together, improving code readability and structure.
*   **Access to Outer Class Members:** Inner classes can directly access all members (private, protected, default, public) of their enclosing outer class, even private ones.
*   **Reduced Naming Conflicts:** They can help avoid naming conflicts, especially when dealing with large projects.
*   **Facilitating Event Handling (GUI Programming):** Inner classes are commonly used for implementing event listeners in graphical user interfaces (GUIs).

---

### 2. Types of Inner Classes

There are four main types of inner classes in Java:

#### 2.1 Member Inner Classes

*   **Definition:** Defined within the outer class but outside any method, constructor, or block. They are treated as members of the outer class.
*   **Access:** They have access modifiers (public, protected, default, private) just like other members of the outer class.
*   **Instantiation:** An instance of a member inner class can only be created **after** an instance of the outer class is created.
    *   Syntax: `OuterClass.InnerClass innerObject = outerObject.new InnerClass();`
*   **Accessing Outer Class Members:** A member inner class can directly access all members of the outer class.
*   **Accessing Inner Class Members from Outer Class:** The outer class needs to create an instance of the inner class to access its members.

**Example:**

```java
class OuterClass {
    private int outerVariable = 10;

    class InnerClass { // Member Inner Class
        private int innerVariable = 5;

        public void display() {
            System.out.println("Accessing outerVariable from InnerClass: " + outerVariable);
            System.out.println("Accessing innerVariable from InnerClass: " + innerVariable);
        }
    }

    public void outerMethod() {
        InnerClass innerObj = new InnerClass(); // Creating instance of inner class
        innerObj.display();
        System.out.println("Accessing innerVariable from OuterClass: " + innerObj.innerVariable); // Can access public/protected/default members if allowed
    }

    public static void main(String[] args) {
        OuterClass outerObj = new OuterClass();
        outerObj.outerMethod();

        // Direct instantiation of inner class from outside the outer class (requires instance of outer class)
        OuterClass.InnerClass innerObjFromOutside = outerObj.new InnerClass();
        innerObjFromOutside.display();
    }
}
```

**Key Points for Member Inner Classes:**

*   Cannot have `static` members (unless they are `static` final constants).
*   Can be `private`, `protected`, `default`, or `public`.
*   Have access to `private` members of the outer class.

#### 2.2 Local Inner Classes (or Nested Local Classes)

*   **Definition:** Defined inside a method, constructor, or block of code.
*   **Scope:** Their scope is limited to the block in which they are defined.
*   **Instantiation:** They are instantiated within the same block where they are declared.
*   **Accessing Outer Class Members:** They can access members of the enclosing outer class.
*   **Accessing Local Variables:** Local inner classes can access local variables of the enclosing method or block, but these variables must be **final** or **effectively final**.
    *   **Effectively Final:** A variable is effectively final if its value is never changed after it's initialized.

**Example:**

```java
class OuterClass {
    private int outerVariable = 20;

    public void outerMethodWithLocalInnerClass() {
        final int localVar = 30; // Must be final or effectively final

        class LocalInnerClass { // Local Inner Class
            private int localInnerVar = 15;

            public void display() {
                System.out.println("Accessing outerVariable from LocalInnerClass: " + outerVariable);
                System.out.println("Accessing localVar from LocalInnerClass: " + localVar);
                System.out.println("Accessing localInnerVar from LocalInnerClass: " + localInnerVar);
            }
        }

        LocalInnerClass localObj = new LocalInnerClass(); // Instantiating within the block
        localObj.display();
    }

    public static void main(String[] args) {
        OuterClass outerObj = new OuterClass();
        outerObj.outerMethodWithLocalInnerClass();
    }
}
```

**Key Points for Local Inner Classes:**

*   Can be `private`, `protected`, `default`, or `public` (though access modifiers are less relevant due to their limited scope).
*   Can only access `final` or `effectively final` local variables from the enclosing method/block.
*   The outer class members can be accessed directly.

#### 2.3 Anonymous Inner Classes

*   **Definition:** A class that has no name. It is declared and instantiated at the same time.
*   **Purpose:** Used when you need to create a small, one-time-use class, often for implementing interfaces or extending abstract classes. They are frequently used with event handling.
*   **Syntax:** They extend a class or implement an interface and override its methods.
*   **Instantiation:** Created using the `new` keyword followed by the class name or interface name.

**Example (Implementing an Interface):**

```java
interface MyInterface {
    void showMessage();
}

class OuterClass {
    public void outerMethodWithAnonymousInnerClass() {
        MyInterface anonymousObj = new MyInterface() { // Anonymous Inner Class implementing MyInterface
            @Override
            public void showMessage() {
                System.out.println("This is an anonymous inner class!");
            }
        };
        anonymousObj.showMessage();
    }

    public static void main(String[] args) {
        OuterClass outerObj = new OuterClass();
        outerObj.outerMethodWithAnonymousInnerClass();
    }
}
```

**Example (Extending a Class):**

```java
class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class OuterClass {
    public void outerMethodWithAnonymousInnerClass() {
        Animal anonymousDog = new Animal() { // Anonymous Inner Class extending Animal
            @Override
            void makeSound() {
                System.out.println("Woof woof!");
            }
        };
        anonymousDog.makeSound();
    }

    public static void main(String[] args) {
        OuterClass outerObj = new OuterClass();
        outerObj.outerMethodWithAnonymousInnerClass();
    }
}
```

**Key Points for Anonymous Inner Classes:**

*   Cannot have constructors (as they have no name to refer to).
*   Can access members of the enclosing outer class.
*   If they access local variables from the enclosing method/block, those variables must be `final` or `effectively final`.
*   They are a concise way to create single-use objects.

#### 2.4 Static Nested Classes

*   **Definition:** A nested class declared with the `static` keyword.
*   **Relationship:** They are not associated with an instance of the outer class. They are more like regular classes nested within the outer class.
*   **Access:** They can only access `static` members of the outer class directly. To access non-static members, they need an instance of the outer class.
*   **Instantiation:** Can be instantiated without an instance of the outer class.
    *   Syntax: `OuterClass.StaticNestedClass nestedObj = new OuterClass.StaticNestedClass();`
*   **Purpose:** Used for grouping classes that are logically related to the outer class but don't need access to its instance members. They can improve encapsulation.

**Example:**

```java
class OuterClass {
    private static String staticOuterVariable = "Static Outer";
    private int nonStaticOuterVariable = 100;

    static class StaticNestedClass { // Static Nested Class
        void display() {
            System.out.println("Accessing staticOuterVariable from StaticNestedClass: " + staticOuterVariable);
            // System.out.println("Cannot access nonStaticOuterVariable directly: " + nonStaticOuterVariable); // Error!
            // To access non-static members, we need an instance of the outer class.
            OuterClass outer = new OuterClass();
            System.out.println("Accessing nonStaticOuterVariable via outer instance: " + outer.nonStaticOuterVariable);
        }
    }

    public static void main(String[] args) {
        // Instantiating static nested class
        OuterClass.StaticNestedClass nestedObj = new OuterClass.StaticNestedClass();
        nestedObj.display();
    }
}
```

**Key Points for Static Nested Classes:**

*   Can have `static` members (methods, variables, nested classes).
*   Cannot access non-`static` members of the outer class directly.
*   Can be `private`, `protected`, `default`, or `public`.
*   They are essentially independent classes that are packaged inside another class for organizational purposes.

---

### 3. Accessing Inner Class Members

*   **From within the Outer Class:**
    *   Create an instance of the inner class: `InnerClass innerObject = new InnerClass();` (for non-static inner classes).
    *   Access members using the inner class instance: `innerObject.innerMethod();`
    *   For static nested classes: `StaticNestedClass nestedObject = new StaticNestedClass();` or `OuterClass.StaticNestedClass nestedObject = new OuterClass.StaticNestedClass();`
*   **From within the Inner Class:**
    *   Direct access to all outer class members (including `private`).
    *   To refer to an instance of the outer class explicitly, use `OuterClass.this`.
*   **From Outside the Outer Class:**
    *   Requires an instance of the outer class to create an instance of a non-static inner class: `OuterClass outerObject = new OuterClass(); OuterClass.InnerClass innerObject = outerObject.new InnerClass();`
    *   Can create an instance of a static nested class directly: `OuterClass.StaticNestedClass nestedObject = new OuterClass.StaticNestedClass();`

---

### 4. When to Use Inner Classes

*   **Logical Grouping:** When a class is used only in one place and is tightly coupled with another class.
*   **Encapsulation:** To hide helper classes or implementation details that are not meant to be exposed to the outside world.
*   **Event Handling:** Commonly used for creating event listeners (e.g., `ActionListener` in Swing/AWT) where the listener logic is specific to a particular UI component. Anonymous inner classes are very popular here.
*   **Creating Helper Classes:** To encapsulate specific functionalities that support the main functionality of the outer class.
*   **Readability and Maintainability:** To keep related code together and improve the overall structure of the program.

---

### 5. Practice Questions & Exercises

**Question 1:**
What is the primary advantage of using inner classes in terms of code organization and encapsulation?

**Question 2:**
Which type of inner class is defined inside a method or constructor and has a scope limited to that block?

**Question 3:**
Can a local inner class access local variables of the method in which it is defined? If yes, what condition must these local variables satisfy?

**Question 4:**
How do you create an instance of a member inner class named `Inner` within a class named `Outer`?

**Question 5:**
What is the key difference between a static nested class and a member inner class regarding their relationship with the outer class instance?

**Question 6:**
Consider the following code snippet. What will be the output?

```java
class Outer {
    int x = 10;
    static int y = 20;

    class Inner {
        void show() {
            System.out.println("x = " + x);
            System.out.println("y = " + y);
        }
    }

    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        inner.show();
    }
}
```

**Question 7:**
Write a Java program that demonstrates an anonymous inner class implementing a `Runnable` interface to print a message after a delay.

---

### 6. Answers to Practice Questions

**Answer 1:**
The primary advantage is **logical grouping** and **encapsulation**. Inner classes allow you to group classes that are only used in one place and hide them from the outside world, improving code organization and preventing namespace pollution.

**Answer 2:**
A **local inner class** (or nested local class) is defined inside a method or constructor and has a scope limited to that block.

**Answer 3:**
Yes, a local inner class can access local variables of the method in which it is defined, but these local variables must be **final** or **effectively final**.

**Answer 4:**
You would first create an instance of the `Outer` class, and then use that instance to create an instance of the `Inner` class:
`Outer outerObj = new Outer();`
`Outer.Inner innerObj = outerObj.new Inner();`

**Answer 5:**
A **static nested class** is not associated with an instance of the outer class and can only directly access `static` members of the outer class. A **member inner class**, on the other hand, is always associated with an instance of the outer class and can directly access all members (static and non-static, including private) of the outer class.

**Answer 6:**
The output will be:
```
x = 10
y = 20
```
Explanation: The `Inner` class (a member inner class) has direct access to both the instance variable `x` and the static variable `y` of the `Outer` class.

**Answer 7:**
```java
class AnonymousRunnableExample {
    public static void main(String[] args) {
        // Creating an anonymous inner class implementing Runnable
        Runnable myRunnable = new Runnable() {
            @Override
            public void run() {
                System.out.println("Message from anonymous inner class!");
            }
        };

        // Creating a Thread with the anonymous Runnable
        Thread thread = new Thread(myRunnable);

        // Starting the thread
        thread.start();

        System.out.println("Main thread finished.");
    }
}
```
**Expected Output (order might vary slightly due to thread scheduling):**
```
Main thread finished.
Message from anonymous inner class!
```
Or
```
Message from anonymous inner class!
Main thread finished.
```

---

### 7. Important Points to Remember

*   **Encapsulation:** Inner classes are a powerful tool for enhancing encapsulation by hiding implementation details.
*   **Association:** Non-static inner classes (member and local) have an implicit reference to the instance of their outer class.
*   **`this` keyword:** Inside a member inner class, `this` refers to the instance of the inner class. To refer to the outer class instance, use `OuterClass.this`.
*   **`static` Modifier:** The `static` keyword on a nested class converts it into a static nested class, removing its association with the outer class instance.
*   **Local Variables:** Local inner classes can only access `final` or `effectively final` local variables from their enclosing blocks.
*   **One-Time Use:** Anonymous inner classes are best suited for creating small, single-use objects, particularly for interfaces and abstract classes.
*   **Access Control:** Inner classes can have access modifiers (`public`, `protected`, `default`, `private`), which determine their visibility.

---
**End of Study Notes**
