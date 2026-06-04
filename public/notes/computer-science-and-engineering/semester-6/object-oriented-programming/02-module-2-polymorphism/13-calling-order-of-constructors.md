---
title: "Calling Order of Constructors"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Polymorphism  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bfa9"
status: "completed"
scrapedAt: "2026-05-20T16:56:13.467Z"
---
# Object-Oriented Programming: Module 2 - Polymorphism

## Topic: Calling Order of Constructors

This topic explores how constructors are invoked when creating objects in an inheritance hierarchy. Understanding this order is crucial for correctly initializing objects and preventing potential issues.

---

### Learning Outcomes:

*   **Understand the necessity of constructor chaining:** Why is it important to call constructors in a specific order?
*   **Identify the role of `super()` in Java:** How is the constructor of the parent class explicitly called?
*   **Explain the default constructor invocation:** What happens if the parent constructor is not explicitly called?
*   **Describe the order of execution when initializing instance variables:** How do instance variables get their values in relation to constructor calls?
*   **Analyze the calling order of constructors in multi-level inheritance:** How does the order extend to more than two levels of inheritance?
*   **Differentiate between constructor overloading and constructor chaining:** What are the distinct purposes of these concepts?

---

### Key Concepts and Definitions:

*   **Constructor:** A special method that is automatically called when an object of a class is created. Its primary purpose is to initialize the object's state (instance variables).
*   **Inheritance:** A mechanism where a new class (subclass or derived class) inherits properties and behaviors from an existing class (superclass or base class).
*   **`super` Keyword (Java):** Used in a subclass to refer to the immediate parent class. Specifically, `super()` is used to call the constructor of the parent class.
*   **Constructor Chaining:** The process of calling one constructor from another constructor within the same class or in the parent class. This ensures that all necessary initialization steps are performed.
*   **Instance Variable:** A variable declared within a class but outside of any method. Each object of the class has its own copy of instance variables.
*   **Multi-level Inheritance:** A scenario where a class inherits from another class, which in turn inherits from another class, creating a chain of inheritance.
*   **Constructor Overloading:** Defining multiple constructors in a class, each with a different parameter list (number or type of parameters).

---

### 1. Understanding the Necessity of Constructor Chaining

*   **Initialization of Parent Class Members:** When you create an object of a subclass, it not only needs to initialize its own instance variables but also the instance variables inherited from its parent class.
*   **Ensuring Complete Object State:** Constructor chaining ensures that the entire object, including all its inherited and declared members, is properly initialized before it is used.
*   **Preventing Uninitialized Data:** Without proper constructor chaining, inherited members might remain uninitialized, leading to unpredictable behavior or `NullPointerException` (in Java) if they are accessed.
*   **Encapsulation and Abstraction:** It helps maintain encapsulation by ensuring that the parent class's initialization logic is executed correctly.

---

### 2. The Role of `super()` in Java

*   **Explicitly Calling Parent Constructor:** The `super()` keyword, when used as a method call (e.g., `super();` or `super(arguments);`), explicitly invokes the constructor of the immediate parent class.
*   **`super()` must be the first statement:** The call to `super()` in a subclass constructor must be the very first statement in that constructor. This is because the parent class's members must be initialized before the subclass can initialize its own.
*   **No explicit `super()`:** If a subclass constructor does not explicitly call a parent constructor using `super()`, the Java compiler automatically inserts a call to the parent's **no-argument (default) constructor**.

**Example (Java):**

```java
class Parent {
    int parentVar;

    Parent() {
        this.parentVar = 10;
        System.out.println("Parent constructor called.");
    }

    Parent(int val) {
        this.parentVar = val;
        System.out.println("Parent constructor with argument called: " + val);
    }
}

class Child extends Parent {
    int childVar;

    Child() {
        // super(); // Implicitly called if not present
        // super(5); // Explicitly calling parent's constructor with an argument
        this.childVar = 20;
        System.out.println("Child constructor called.");
    }

    Child(int pVal, int cVal) {
        super(pVal); // Explicitly call Parent's constructor with pVal
        this.childVar = cVal;
        System.out.println("Child constructor with arguments called.");
    }

    void display() {
        System.out.println("ParentVar: " + parentVar);
        System.out.println("ChildVar: " + childVar);
    }
}

public class ConstructorCallOrder {
    public static void main(String[] args) {
        System.out.println("Creating child object 1:");
        Child child1 = new Child(); // Calls Child() -> super() -> Parent()
        child1.display();

        System.out.println("\nCreating child object 2:");
        Child child2 = new Child(100, 200); // Calls Child(int, int) -> super(int) -> Parent(int)
        child2.display();
    }
}
```

**Output for `child1`:**
```
Creating child object 1:
Parent constructor called.
Child constructor called.
ParentVar: 10
ChildVar: 20
```

**Output for `child2`:**
```
Creating child object 2:
Parent constructor with argument called: 100
Child constructor with arguments called.
ParentVar: 100
ChildVar: 200
```

---

### 3. The Default Constructor Invocation

*   **Automatic `super()` Call:** If a subclass constructor does not explicitly call any parent constructor (using `super()` or `this()`), the Java compiler automatically inserts a call to the parent's **no-argument (default) constructor** as the first statement.
*   **Requirement for Parent's Default Constructor:** This automatic call implies that the parent class **must have a visible no-argument constructor**. If the parent class only has parameterized constructors and no explicit no-argument constructor, and the subclass constructor doesn't call a parent constructor explicitly, you will get a compile-time error.

**Example (Compile-time Error Scenario):**

```java
class Base {
    // No no-argument constructor defined here!
    Base(int x) {
        System.out.println("Base constructor with arg: " + x);
    }
}

class Derived extends Base {
    Derived() {
        // No explicit call to super()
        // Compiler will try to insert super();
        // BUT Base class has no no-argument constructor.
        System.out.println("Derived constructor.");
    }
}

public class ErrorExample {
    public static void main(String[] args) {
        // Derived d = new Derived(); // This line would cause a compile-time error
    }
}
```

**Error Message:**
`implicit super constructor Base() is undefined. Must explicitly invoke another constructor.`

---

### 4. Order of Execution When Initializing Instance Variables

The execution order generally follows this pattern:

1.  **Parent Class Initialization:**
    *   **Parent's instance variables are initialized.** This happens either through the parent's no-argument constructor (if implicitly or explicitly called) or a parameterized constructor.
    *   **Parent constructor body executes.**
2.  **Subclass Initialization:**
    *   **Subclass's instance variables are initialized.** This happens either through default initialization (to `0` for numeric types, `null` for objects, `false` for booleans) or through explicit initialization at the time of declaration.
    *   **Subclass constructor body executes.**

**Detailed Flow:**

When `new SubClass(...)` is called:

1.  **Memory Allocation:** Memory is allocated for the `SubClass` object.
2.  **Parent Constructor Call:** The constructor of the **immediate parent class** is called.
    *   If the subclass constructor doesn't explicitly call a parent constructor, the **no-argument constructor of the parent** is called.
    *   If the subclass constructor explicitly calls `super(arguments)`, that specific parent constructor is invoked.
3.  **Parent Initialization:**
    *   The parent's instance variables are initialized (either at declaration or within the parent constructor).
    *   The code within the parent constructor executes.
4.  **Subclass Instance Variable Initialization:** Once the parent constructor finishes, the **subclass's instance variables** are initialized (either at declaration or implicitly by the subclass constructor before its body).
5.  **Subclass Constructor Execution:** The code within the **subclass constructor body** executes.

**Example Recap:**

In the `Child` and `Parent` example:

*   When `new Child()` is called:
    1.  Memory for `Child` object is allocated.
    2.  `Child()` constructor starts. It doesn't explicitly call `super()`, so `Parent()` is called.
    3.  `Parent()` constructor starts. `parentVar` is initialized to 10. "Parent constructor called." is printed.
    4.  `Parent()` constructor finishes.
    5.  Back in `Child()` constructor. `childVar` is initialized to 20. "Child constructor called." is printed.
    6.  `Child()` constructor finishes.

---

### 5. Analyzing Constructor Calling Order in Multi-level Inheritance

The principle of calling the immediate parent's constructor extends to multiple levels of inheritance. The chain of constructor calls follows a top-down path from the base class to the derived class.

**Flow:**

When an object of the most derived class is created:

1.  The **most derived class's constructor** is called.
2.  This constructor implicitly or explicitly calls the constructor of its **immediate parent class**.
3.  That parent's constructor, in turn, calls its **own immediate parent's constructor**.
4.  This continues up the inheritance hierarchy until the **base class's constructor** is reached.
5.  The **base class constructor** executes first.
6.  Then, the constructor of the class that called it executes.
7.  This process unwinds back down the hierarchy, executing each constructor's body in order until the most derived class's constructor body is executed.

**Example (Java):**

```java
class Grandparent {
    String gpName;

    Grandparent() {
        this.gpName = "Grandpa";
        System.out.println("Grandparent constructor called.");
    }
}

class ParentMulti extends Grandparent {
    String pName;

    ParentMulti() {
        // super(); // Implicitly calls Grandparent()
        this.pName = "Dad";
        System.out.println("ParentMulti constructor called.");
    }
}

class ChildMulti extends ParentMulti {
    String cName;

    ChildMulti() {
        // super(); // Implicitly calls ParentMulti()
        this.cName = "Son";
        System.out.println("ChildMulti constructor called.");
    }

    void displayNames() {
        System.out.println("GP: " + gpName + ", Parent: " + pName + ", Child: " + cName);
    }
}

public class MultiLevelConstructorCall {
    public static void main(String[] args) {
        System.out.println("Creating child object:");
        ChildMulti child = new ChildMulti();
        child.displayNames();
    }
}
```

**Output:**

```
Creating child object:
Grandparent constructor called.
ParentMulti constructor called.
ChildMulti constructor called.
GP: Grandpa, Parent: Dad, Child: Son
```

**Execution Trace:**

1.  `new ChildMulti()` is called.
2.  `ChildMulti()` constructor starts. It implicitly calls `super()`.
3.  `ParentMulti()` constructor starts. It implicitly calls `super()`.
4.  `Grandparent()` constructor starts. `gpName` is initialized. "Grandparent constructor called." is printed.
5.  `Grandparent()` finishes.
6.  Back in `ParentMulti()`. `pName` is initialized. "ParentMulti constructor called." is printed.
7.  `ParentMulti()` finishes.
8.  Back in `ChildMulti()`. `cName` is initialized. "ChildMulti constructor called." is printed.
9.  `ChildMulti()` finishes.

---

### 6. Differentiating Constructor Overloading and Constructor Chaining

While both involve multiple constructors, their purposes are distinct:

| Feature             | Constructor Overloading                                    | Constructor Chaining                                                              |
| :------------------ | :--------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| **Purpose**         | To provide multiple ways to create an object.              | To ensure proper initialization of all members in an inheritance hierarchy.       |
| **Invocation**      | Called directly based on the arguments provided during object creation. | **Implicitly (by compiler)** or **explicitly (`super()`)** from another constructor. |
| **Target Class**    | Constructors within the **same class**.                    | Constructors between **parent and child classes** (or within the same class using `this()`). |
| **`super()` Usage** | Not directly involved in the mechanism itself.             | Essential for calling parent constructors.                                        |
| **`this()` Usage**  | Can be used to call overloaded constructors within the same class. | Can be used to call other constructors within the same class (before `super()`). |
| **Example**         | `MyClass()`, `MyClass(int x)`, `MyClass(String s)`       | `Child() { super(); ... }`                                                        |

**Example (Java - Demonstrating both):**

```java
class Box {
    double width, height, depth;

    // Overloaded Constructor 1 (no-arg)
    Box() {
        // Chain to another constructor in the same class if needed
        this(1, 1, 1); // Calls Box(double, double, double)
        System.out.println("Box no-arg constructor.");
    }

    // Overloaded Constructor 2 (three args)
    Box(double dim) {
        this(dim, dim, dim); // Calls Box(double, double, double)
        System.out.println("Box single-dim constructor.");
    }

    // Overloaded Constructor 3 (three args)
    Box(double width, double height, double depth) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        System.out.println("Box three-dim constructor.");
    }
}

class ColoredBox extends Box {
    String color;

    // Overloaded Constructor 1 (no-arg)
    ColoredBox() {
        // Implicitly calls Box() which chains to Box(double, double, double)
        this.color = "Red";
        System.out.println("ColoredBox no-arg constructor.");
    }

    // Overloaded Constructor 2 (with color and dimensions)
    ColoredBox(String color, double width, double height, double depth) {
        super(width, height, depth); // Explicitly call Box constructor
        this.color = color;
        System.out.println("ColoredBox with color and dims constructor.");
    }

    void display() {
        System.out.println("Color: " + color + ", Dimensions: " + width + "x" + height + "x" + depth);
    }
}

public class OverloadingChaining {
    public static void main(String[] args) {
        System.out.println("--- Creating Box objects ---");
        Box b1 = new Box(); // Calls Box() -> this(1,1,1) -> Box(3-arg)
        Box b2 = new Box(5); // Calls Box(5) -> this(5,5,5) -> Box(3-arg)

        System.out.println("\n--- Creating ColoredBox objects ---");
        ColoredBox cb1 = new ColoredBox(); // Calls ColoredBox() -> super() (Box()) -> this(1,1,1) -> Box(3-arg)
        cb1.display();

        ColoredBox cb2 = new ColoredBox("Blue", 10, 20, 30); // Calls ColoredBox(..) -> super(..) -> Box(3-arg)
        cb2.display();
    }
}
```

**Key Takeaway:** Constructor chaining is fundamental to object initialization in inheritance, ensuring that parent class members are correctly set up before the subclass's own initialization.

---

### Important Points to Remember:

*   **`super()` as the First Statement:** Any explicit call to a parent constructor using `super()` must be the very first statement in the subclass constructor.
*   **Implicit `super()`:** If no `super()` or `this()` call is made in a subclass constructor, the compiler automatically inserts `super();`.
*   **Parent No-Argument Constructor:** The automatic `super()` call requires the parent class to have a visible no-argument constructor.
*   **Constructor Chain:** When creating an object, the constructors are called in a chain, starting from the most base class up to the most derived class.
*   **Instance Variable Initialization Order:** Instance variables are initialized *before* the constructor body of their respective classes executes.
*   **`this()` vs. `super()`:**
    *   `this()` calls another constructor within the **same class**.
    *   `super()` calls a constructor of the **immediate parent class**.
    *   Both `this()` and `super()` must be the first statement in their respective constructors. You cannot have both `this()` and `super()` in the same constructor.
*   **Private Constructors:** Private constructors cannot be called directly by subclasses.
*   **No Return Value:** Constructors do not have a return type, not even `void`.

---

### Practice Questions/Exercises:

1.  **Question:** What is the primary purpose of constructor chaining in Object-Oriented Programming?
    **Answer:** To ensure that all members of an object, including those inherited from parent classes, are properly initialized before the object is used.

2.  **Question:** In Java, if a subclass constructor does not explicitly call a parent constructor, what happens?
    **Answer:** The Java compiler automatically inserts a call to the parent's no-argument (default) constructor as the first statement.

3.  **Question:** Consider the following Java code. What will be the output?

    ```java
    class A {
        A() { System.out.print("1 "); }
    }
    class B extends A {
        B() { System.out.print("2 "); }
    }
    class C extends B {
        C() { System.out.print("3 "); }
    }
    public class TestConstructors {
        public static void main(String[] args) {
            C c = new C();
        }
    }
    ```
    **Answer:** `1 2 3 `
    **Explanation:** When `new C()` is called, `C()` constructor is invoked. It implicitly calls `super()` (which is `B()`). `B()` implicitly calls `super()` (which is `A()`). `A()` prints "1 ". Then `B()` prints "2 ". Finally, `C()` prints "3 ".

4.  **Question:** Can you call a parent constructor using `super()` from a subclass constructor at any point, or must it be the first statement? Explain why.
    **Answer:** It must be the first statement. This is because the parent class's members must be initialized before the subclass can initialize its own members or execute its own constructor logic.

5.  **Question:** What is the difference between constructor overloading and constructor chaining? Provide a simple code snippet to illustrate chaining.
    **Answer:** Constructor overloading provides multiple ways to create an object within the same class using different parameter lists. Constructor chaining is the process of calling a parent class's constructor from a child class's constructor to ensure proper initialization across the inheritance hierarchy.

    **Chaining Example:**
    ```java
    class Parent {
        Parent() { System.out.println("Parent init"); }
    }
    class Child extends Parent {
        Child() {
            super(); // Chaining to Parent constructor
            System.out.println("Child init");
        }
    }
    // Output: Parent init, Child init
    ```

6.  **Question:** What happens if a parent class has only parameterized constructors and no no-argument constructor, and the subclass constructor does not explicitly call a parent constructor?
    **Answer:** A compile-time error will occur because the compiler attempts to insert an implicit `super()` call, but there is no accessible no-argument constructor in the parent class to invoke. The subclass constructor must explicitly call one of the parent's available parameterized constructors.

---
