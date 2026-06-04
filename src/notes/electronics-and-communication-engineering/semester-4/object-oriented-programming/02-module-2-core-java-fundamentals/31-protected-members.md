---
title: "protected Members"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe694"
status: "completed"
scrapedAt: "2026-05-23T17:51:39.885Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 2: Core Java Fundamentals

### Topic: protected Members

---

### 1. Introduction to Access Modifiers in Java

Access modifiers in Java control the visibility and accessibility of classes, methods, and variables. They are crucial for implementing encapsulation, a core principle of Object-Oriented Programming (OOP), which involves bundling data (attributes) and methods that operate on the data within a single unit (class) and restricting direct access to some of the object's components.

Java provides four access specifiers:

*   **`public`**: Accessible from anywhere.
*   **`private`**: Accessible only within the same class.
*   **`protected`**: Accessible within the same package and by subclasses (even if they are in different packages).
*   **Default (no keyword)**: Accessible only within the same package.

This topic focuses on the `protected` access modifier.

---

### 2. Understanding `protected` Members

The `protected` access modifier provides a level of access that is more restrictive than `public` but less restrictive than `private` or default access.

**Definition:**

A `protected` member (variable, method, or constructor) of a class is accessible:

1.  **Within the same class:** Just like `private` members.
2.  **Within the same package:** Just like default access members.
3.  **By subclasses of the class, even if the subclass is in a different package:** This is the key differentiator of `protected`.

**Key Concepts:**

*   **Encapsulation and controlled access:** `protected` allows classes to expose certain members for use by their derived classes without making them universally accessible. This helps in maintaining data integrity and allowing controlled extension of functionality.
*   **Inheritance and access:** The `protected` modifier is heavily tied to the concept of inheritance. It enables child classes to access and utilize members of their parent classes that are not intended for general public use.
*   **Package-based access:** Like default access, `protected` members are accessible to all classes within the same package.

---

### 3. How `protected` Works with Inheritance and Packages

Let's break down the accessibility rules for `protected` members:

**Scenario 1: Access within the same class**

```java
package com.example.packageA;

class BaseClass {
    protected int protectedVar;

    protected void protectedMethod() {
        System.out.println("This is a protected method in BaseClass.");
        protectedVar = 10; // Accessible within the same class
    }
}

public class Main {
    public static void main(String[] args) {
        BaseClass obj = new BaseClass();
        obj.protectedMethod(); // Accessible from Main within the same class
        System.out.println(obj.protectedVar);
    }
}
```

**Explanation:** `protectedVar` and `protectedMethod` are directly accessible within `BaseClass` itself.

**Scenario 2: Access within the same package**

```java
package com.example.packageA; // Same package as BaseClass

public class AnotherClassInSamePackage {
    public static void main(String[] args) {
        BaseClass obj = new BaseClass();
        obj.protectedMethod(); // Accessible from another class in the same package
        System.out.println(obj.protectedVar);
    }
}
```

**Explanation:** `AnotherClassInSamePackage` can access `protectedVar` and `protectedMethod` because they are in the same package (`com.example.packageA`).

**Scenario 3: Access by a subclass in a different package**

Let's consider our `BaseClass` from `package com.example.packageA`.

```java
// File: com/example/packageB/SubClass.java
package com.example.packageB;

import com.example.packageA.BaseClass; // Import BaseClass

public class SubClass extends BaseClass {
    public void accessProtectedMembers() {
        // Accessing protected members from BaseClass (parent class)
        super.protectedMethod(); // Accessible by the subclass
        System.out.println(super.protectedVar); // Accessible by the subclass
    }

    public static void main(String[] args) {
        SubClass subObj = new SubClass();
        subObj.accessProtectedMembers();
    }
}
```

**Explanation:**
*   `SubClass` successfully calls `super.protectedMethod()` and accesses `super.protectedVar`. This is because `SubClass` is a subclass of `BaseClass` and `protected` members are accessible to subclasses, regardless of the package.

**Scenario 4: Access by a non-subclass in a different package**

```java
// File: com/example/packageB/DifferentClassInDifferentPackage.java
package com.example.packageB;

import com.example.packageA.BaseClass; // Import BaseClass

public class DifferentClassInDifferentPackage {
    public static void main(String[] args) {
        BaseClass obj = new BaseClass();
        // The following lines will cause a compile-time error:
        // obj.protectedMethod(); // Not accessible by a non-subclass in a different package
        // System.out.println(obj.protectedVar); // Not accessible by a non-subclass in a different package
    }
}
```

**Explanation:** `DifferentClassInDifferentPackage` cannot access `protectedVar` or `protectedMethod` of `BaseClass` because it is neither in the same package nor a subclass of `BaseClass`. This demonstrates the restriction compared to `public`.

---

### 4. Referencing Textbooks and Course Outcomes

This topic directly relates to the core concepts of OOP as covered in the provided textbooks:

*   **Java: The Complete Reference by Herbert Schildt (8/e, 2011.):** Schildt often discusses access control and encapsulation in detail. The `protected` keyword is presented as a mechanism to allow controlled access for derived classes and within packages. (Chapter on Packages and Interfaces, Chapter on Inheritance).
*   **Java How to Program, Early Objects by Paul Deitel, Harvey Deitel (11th Edition, 2018.):** Deitel & Deitel emphasize encapsulation and inheritance. They would explain `protected` as a way to permit access to subclasses and other classes within the same package, facilitating the extension of base class functionality. (Chapter on Classes and Objects, Chapter on Inheritance).
*   **Introduction to Java Programming by Y. Daniel Liang (7/e, 2013.):** Liang would explain access modifiers in the context of class design and inheritance, highlighting how `protected` balances accessibility for subclasses with privacy from unrelated classes. (Chapter on Classes, Chapter on Inheritance).

**Alignment with Course Outcomes:**

*   **CO1: Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism and to illustrate it using UML diagrams. (Knowledge Level: K2)**
    *   `protected` members are a key aspect of data hiding (encapsulation) and inheritance. Understanding `protected` helps in illustrating how class members are managed across inheritance hierarchies and across package boundaries, which is essential for summarizing OOP concepts.
*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (Knowledge Level: K3)**
    *   When developing programs that involve inheritance and distinct packages, developers need to choose the appropriate access modifiers. Understanding `protected` allows them to effectively manage the visibility of class members and write robust, well-structured code.

---

### 5. Important Points to Remember

*   `protected` members are accessible within the **same class**, within the **same package**, and by **subclasses in different packages**.
*   `protected` members are **NOT** accessible by non-subclasses in **different packages**.
*   When comparing with default access, `protected` extends accessibility to subclasses in different packages.
*   When comparing with `public`, `protected` restricts access to only subclasses and classes within the same package, not all classes universally.
*   `protected` is often used for members that are part of the design of a class hierarchy and are intended to be used or extended by subclasses, but not by arbitrary external code.

---

### 6. Examples and Use Cases

**Example 1: Database Connection Pool (Conceptual)**

Imagine a `DatabaseConnection` class with `protected` methods like `getConnectionInternal()` and `releaseConnectionInternal()`.

*   A `DatabaseConnectionManager` class within the same package could access these `protected` methods to manage connections.
*   A specialized `CachingConnection` subclass (possibly in a different package) could extend `DatabaseConnection` and override or use `protected` methods to implement caching logic without exposing the low-level connection management to the outside world.

**Example 2: GUI Component Framework**

A base GUI component class might have `protected` methods for internal rendering or event handling that subclasses (like `Button`, `TextField`) are expected to use or override.

---

### 7. Practice Questions and Exercises

**Question 1:**

Consider the following Java code:

```java
// File: com/example/parent/Parent.java
package com.example.parent;

public class Parent {
    protected String message = "Hello from Parent";

    protected void displayMessage() {
        System.out.println(message);
    }
}

// File: com/example/child/Child.java
package com.example.child;

import com.example.parent.Parent;

public class Child extends Parent {
    public void showMessage() {
        // Accessing protected members of Parent
        super.displayMessage();
        System.out.println("Message accessed from Child: " + super.message);
    }

    public static void main(String[] args) {
        Child c = new Child();
        c.showMessage();
    }
}

// File: com/example/other/OtherClass.java
package com.example.other;

import com.example.parent.Parent;

public class OtherClass {
    public static void main(String[] args) {
        Parent p = new Parent();
        // Can OtherClass access message and displayMessage()?
        // p.displayMessage(); // Uncomment to test
        // System.out.println(p.message); // Uncomment to test
    }
}
```

**Identify which parts of the code will compile successfully and which will fail with a compile-time error. Explain your reasoning.**

**Answer 1:**

*   **`com/example/child/Child.java`**: This file will compile successfully.
    *   The `Child` class is a subclass of `Parent` and is in the `com.example.child` package.
    *   `protected` members (`message` and `displayMessage()`) of `Parent` are accessible to its subclass `Child`, even though they are in different packages. The `super.displayMessage()` and `super.message` accesses are valid.

*   **`com/example/other/OtherClass.java`**: The lines accessing `p.displayMessage()` and `p.message` will cause compile-time errors.
    *   `OtherClass` is in the `com.example.other` package, which is different from `com.example.parent`.
    *   `OtherClass` is **not** a subclass of `Parent`.
    *   Therefore, `protected` members of `Parent` are not accessible to `OtherClass`.

**Question 2:**

What is the primary advantage of using the `protected` access modifier compared to `default` access?

**Answer 2:**

The primary advantage of `protected` over `default` is that `protected` members are accessible to subclasses in **different packages**, whereas `default` members are only accessible within the same package. This allows for controlled extension of class functionality across package boundaries.

**Question 3:**

Can a `protected` member be accessed by a class within the same package that is not a subclass of the class defining the `protected` member?

**Answer 3:**

Yes. `protected` members are accessible by any class within the same package, regardless of whether it is a subclass or not. This is the same accessibility as `default` members.

---

This concludes the notes on `protected` members in Java. Remember to practice writing code that utilizes `protected` members in different package and inheritance scenarios to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
