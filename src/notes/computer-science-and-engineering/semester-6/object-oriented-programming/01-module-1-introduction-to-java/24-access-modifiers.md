---
title: "Access Modifiers"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf9a"
status: "completed"
scrapedAt: "2026-05-20T16:56:03.256Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 1: Introduction to Java

## Topic: Access Modifiers

---

### 1. Introduction to Access Modifiers

Access modifiers in Java are keywords used to control the visibility or accessibility of classes, variables, methods, and constructors. They define the scope and reach of these elements within a Java program. Understanding access modifiers is crucial for implementing encapsulation, a core principle of Object-Oriented Programming (OOP).

### 2. Learning Outcomes Covered

*   **Understand the purpose of access modifiers in Java.**
*   **Differentiate between the four access modifiers: `public`, `protected`, `default` (package-private), and `private`.**
*   **Identify the scope of each access modifier.**
*   **Apply appropriate access modifiers to achieve desired levels of data hiding and encapsulation.**
*   **Understand the implications of access modifiers on inheritance and class visibility.**

---

### 3. Key Concepts and Definitions

*   **Encapsulation:** The bundling of data (variables) and methods that operate on the data into a single unit (class). Access modifiers are the mechanism to control access to this data, promoting data hiding.
*   **Visibility/Accessibility:** Refers to where in a program a particular element (class, variable, method) can be accessed from.
*   **Scope:** The region of a program where a particular element is accessible.

---

### 4. The Four Access Modifiers in Java

Java provides four access modifiers, each with a different level of restriction:

#### 4.1. `public`

*   **Visibility:** Accessible from **anywhere**.
*   **Scope:**
    *   Can be accessed by any class in any package.
    *   Can be accessed by subclasses, even if they are in different packages.
*   **Use Case:** For elements that are intended to be part of the public API of a class or package, and should be usable by any part of the application.

**Example:**

```java
// File: com/example/public_demo/PublicClass.java
package com.example.public_demo;

public class PublicClass {
    public String publicMessage = "This is a public message.";

    public void publicMethod() {
        System.out.println("This is a public method.");
    }
}
```

```java
// File: com/example/another_package/AccessPublic.java
package com.example.another_package;

import com.example.public_demo.PublicClass; // Import needed

public class AccessPublic {
    public static void main(String[] args) {
        PublicClass obj = new PublicClass();
        System.out.println(obj.publicMessage); // Accessible
        obj.publicMethod();                  // Accessible
    }
}
```

#### 4.2. `protected`

*   **Visibility:** Accessible within its own package and by subclasses in any package.
*   **Scope:**
    *   Can be accessed by any class within the same package.
    *   Can be accessed by subclasses in different packages.
    *   **Cannot** be accessed by non-subclasses in different packages.
*   **Use Case:** When you want to allow subclasses to access a member but restrict access from unrelated classes, even within the same package.

**Example:**

```java
// File: com/example/protected_demo/ProtectedClass.java
package com.example.protected_demo;

public class ProtectedClass {
    protected String protectedMessage = "This is a protected message.";

    protected void protectedMethod() {
        System.out.println("This is a protected method.");
    }
}
```

```java
// File: com/example/protected_demo/SamePackageAccess.java
package com.example.protected_demo;

public class SamePackageAccess {
    public static void main(String[] args) {
        ProtectedClass obj = new ProtectedClass();
        System.out.println(obj.protectedMessage); // Accessible (same package)
        obj.protectedMethod();                  // Accessible (same package)
    }
}
```

```java
// File: com/example/protected_demo/subclass/SubClass.java
package com.example.protected_demo.subclass;

import com.example.protected_demo.ProtectedClass; // Import needed

public class SubClass extends ProtectedClass {
    public void accessProtected() {
        System.out.println(this.protectedMessage); // Accessible (subclass)
        this.protectedMethod();                  // Accessible (subclass)
    }
}
```

```java
// File: com/example/protected_demo/subclass/AccessProtectedFromDifferentPackage.java
package com.example.protected_demo.subclass;

// Trying to access from a class in a different package, but not a subclass
// This would NOT work directly on an instance of ProtectedClass:
// import com.example.protected_demo.ProtectedClass;
// public class AccessProtectedFromDifferentPackage {
//     public static void main(String[] args) {
//         ProtectedClass obj = new ProtectedClass();
//         // System.out.println(obj.protectedMessage); // ERROR: protected is not visible
//         // obj.protectedMethod();                  // ERROR: protected is not visible
//     }
// }
```

#### 4.3. `default` (Package-Private)

*   **Visibility:** Accessible only within its own package.
*   **Scope:**
    *   Can be accessed by any class within the same package.
    *   **Cannot** be accessed by classes in different packages.
    *   **Cannot** be accessed by subclasses in different packages (even if they extend the class).
*   **Use Case:** When you want to restrict access to members within a package but don't want to allow access from subclasses in other packages. This is the default if no access modifier is specified.

**Example:**

```java
// File: com/example/default_demo/DefaultClass.java
package com.example.default_demo;

class DefaultClass { // No access modifier specified, so it's default
    String defaultMessage = "This is a default message.";

    void defaultMethod() {
        System.out.println("This is a default method.");
    }
}
```

```java
// File: com/example/default_demo/SamePackageAccess.java
package com.example.default_demo;

public class SamePackageAccess {
    public static void main(String[] args) {
        DefaultClass obj = new DefaultClass();
        System.out.println(obj.defaultMessage); // Accessible (same package)
        obj.defaultMethod();                  // Accessible (same package)
    }
}
```

```java
// File: com/example/different_package/AccessDefault.java
package com.example.different_package;

// import com.example.default_demo.DefaultClass; // This import would fail because DefaultClass is not public

// You cannot even import a default class from a different package.
// The following code block is conceptual and would not compile.

// public class AccessDefault {
//     public static void main(String[] args) {
//         // DefaultClass obj = new DefaultClass(); // ERROR: DefaultClass is not visible
//     }
// }
```

**Important Note on `default` Class Visibility:** If a `class` is declared with `default` access, it can only be accessed by other classes within the same package. You cannot import or access a `default` class from a different package.

#### 4.4. `private`

*   **Visibility:** Accessible only within its own class.
*   **Scope:**
    *   Can only be accessed by other members (methods, constructors, etc.) of the **same class**.
    *   **Cannot** be accessed by subclasses.
    *   **Cannot** be accessed by classes in the same package.
    *   **Cannot** be accessed by classes in different packages.
*   **Use Case:** For members that should be hidden from all external access, even subclasses. This is the most restrictive access modifier and is fundamental to data hiding.

**Example:**

```java
// File: com/example/private_demo/PrivateClass.java
package com.example.private_demo;

public class PrivateClass {
    private String privateMessage = "This is a private message.";

    private void privateMethod() {
        System.out.println("This is a private method.");
    }

    // Public method to access private members
    public void displayPrivateMembers() {
        System.out.println(this.privateMessage); // Accessible within the same class
        this.privateMethod();                   // Accessible within the same class
    }
}
```

```java
// File: com/example/private_demo/AccessPrivate.java
package com.example.private_demo;

public class AccessPrivate {
    public static void main(String[] args) {
        PrivateClass obj = new PrivateClass();
        // System.out.println(obj.privateMessage); // ERROR: private is not accessible
        // obj.privateMethod();                  // ERROR: private is not accessible

        obj.displayPrivateMembers(); // This public method can access private members
    }
}
```

```java
// File: com/example/private_demo/AnotherSamePackageClass.java
package com.example.private_demo;

public class AnotherSamePackageClass {
    public static void main(String[] args) {
        PrivateClass obj = new PrivateClass();
        // System.out.println(obj.privateMessage); // ERROR: private is not accessible
        // obj.privateMethod();                  // ERROR: private is not accessible
    }
}
```

---

### 5. Table Summarizing Access Modifiers

| Modifier     | Within Class | Within Same Package | Within Subclass (Different Package) | Outside Package (Non-subclass) |
| :----------- | :----------- | :------------------ | :---------------------------------- | :----------------------------- |
| `public`     | Yes          | Yes                 | Yes                                 | Yes                            |
| `protected`  | Yes          | Yes                 | Yes                                 | No                             |
| `default`    | Yes          | Yes                 | No                                  | No                             |
| `private`    | Yes          | No                  | No                                  | No                             |

---

### 6. Access Modifiers and Inheritance

*   **`public` members:** Are inherited by subclasses and remain `public`.
*   **`protected` members:** Are inherited by subclasses and remain `protected`. This allows subclasses to access them.
*   **`default` members:** Are inherited by subclasses. However, their accessibility is still restricted to the original package. A subclass in a different package cannot access `default` members of its superclass.
*   **`private` members:** Are **not** directly accessible by subclasses. They are inherited, but cannot be accessed. They can only be accessed through public or protected methods provided by the superclass.

**Example illustrating `protected` and `default` in inheritance:**

```java
// File: com/example/inheritance_demo/BaseClass.java
package com.example.inheritance_demo;

public class BaseClass {
    public String publicVar = "Public";
    protected String protectedVar = "Protected";
    String defaultVar = "Default"; // default access
    private String privateVar = "Private";

    public void displayBaseMembers() {
        System.out.println("Base Class:");
        System.out.println("  Public: " + publicVar);
        System.out.println("  Protected: " + protectedVar);
        System.out.println("  Default: " + defaultVar);
        System.out.println("  Private: " + privateVar);
    }
}
```

```java
// File: com/example/inheritance_demo/DerivedClass.java
package com.example.inheritance_demo;

public class DerivedClass extends BaseClass {

    public void displayDerivedMembers() {
        System.out.println("Derived Class:");
        System.out.println("  Public: " + publicVar);       // Accessible (inherited public)
        System.out.println("  Protected: " + protectedVar); // Accessible (inherited protected)
        // System.out.println("  Default: " + defaultVar);   // Accessible (inherited default, BUT ONLY IF IN SAME PACKAGE)
                                                            // If DerivedClass was in a different package, this would be an error.
        // System.out.println("  Private: " + privateVar);   // ERROR: private is not accessible
        // If you want to access privateVar, you need a public/protected method in BaseClass to do so.
    }

    public void accessViaBaseMethod() {
        System.out.println("Accessing via BaseClass method:");
        super.displayBaseMembers(); // This is allowed
    }
}
```

```java
// File: com/example/inheritance_demo/AccessInheritance.java
package com.example.inheritance_demo;

public class AccessInheritance {
    public static void main(String[] args) {
        DerivedClass derivedObj = new DerivedClass();
        derivedObj.displayDerivedMembers();
        derivedObj.accessViaBaseMethod();

        System.out.println("\nAccessing BaseClass directly from another class in same package:");
        BaseClass baseObj = new BaseClass();
        System.out.println("  Public: " + baseObj.publicVar);       // Accessible
        System.out.println("  Protected: " + baseObj.protectedVar); // Accessible (same package)
        System.out.println("  Default: " + baseObj.defaultVar);     // Accessible (same package)
        // System.out.println("  Private: " + baseObj.privateVar);   // ERROR: private is not accessible
    }
}
```

---

### 7. Best Practices for Using Access Modifiers

*   **Default to `private`:** Make all variables and methods `private` by default. This is the strongest form of encapsulation.
*   **Expose via `public` methods (Getters/Setters):** If external classes need to access or modify private variables, provide controlled access through public getter and setter methods.
*   **Use `protected` for inheritance:** Use `protected` when you intend for subclasses to have access to members, but not unrelated classes.
*   **Use `default` for package-level encapsulation:** Use `default` (no modifier) when you want to share implementation details within a package but hide them from the outside world.
*   **Use `public` sparingly:** Reserve `public` for members that are truly part of the class's public interface and are meant to be used by any part of the application.
*   **Don't rely on `default` for security:** `default` access is about logical grouping (packages), not security.

---

### 8. Practice Questions and Exercises

**Question 1:**
Which access modifier provides the broadest accessibility?
a) `private`
b) `protected`
c) `default`
d) `public`

**Question 2:**
A member declared with `protected` access can be accessed by:
a) Any class in any package.
b) Classes within the same package only.
c) Classes within the same package and subclasses in any package.
d) Only by the class itself.

**Question 3:**
What is the default access modifier in Java if none is specified?
a) `public`
b) `protected`
c) `default` (package-private)
d) `private`

**Question 4:**
If you want to prevent a variable from being accessed or modified by any other class, which access modifier should you use?
a) `public`
b) `protected`
c) `default`
d) `private`

**Question 5:**
Consider the following code snippets. Assuming `PackageA` and `PackageB` are different packages.

**File: `PackageA/MyClass.java`**
```java
package PackageA;

public class MyClass {
    public String publicField = "Public";
    protected String protectedField = "Protected";
    String defaultField = "Default"; // default
    private String privateField = "Private";

    public void displayAll() {
        System.out.println(publicField + " " + protectedField + " " + defaultField + " " + privateField);
    }
}
```

**File: `PackageA/AnotherClassInSamePackage.java`**
```java
package PackageA;

public class AnotherClassInSamePackage {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        System.out.println(obj.publicField);   // Line 1
        System.out.println(obj.protectedField); // Line 2
        System.out.println(obj.defaultField);   // Line 3
        // System.out.println(obj.privateField); // Line 4 - This would be an error
        obj.displayAll(); // OK
    }
}
```

**File: `PackageB/SubClassOfMyClass.java`**
```java
package PackageB;

import PackageA.MyClass;

public class SubClassOfMyClass extends MyClass {
    public void accessFields() {
        System.out.println(publicField);    // Line 5
        System.out.println(protectedField); // Line 6
        // System.out.println(defaultField);   // Line 7 - This would be an error
        // System.out.println(privateField);  // Line 8 - This would be an error
    }
}
```

**File: `PackageB/ClassInDifferentPackage.java`**
```java
package PackageB;

import PackageA.MyClass;

public class ClassInDifferentPackage {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        System.out.println(obj.publicField);    // Line 9
        // System.out.println(obj.protectedField); // Line 10 - This would be an error
        // System.out.println(obj.defaultField);   // Line 11 - This would be an error
        // System.out.println(obj.privateField);  // Line 12 - This would be an error

        SubClassOfMyClass subObj = new SubClassOfMyClass();
        subObj.accessFields(); // This will call Line 5 and Line 6
    }
}
```

**For each of the commented-out lines (Lines 4, 7, 8, 10, 11, 12), explain why it would result in a compilation error and what modifier is causing it.**

---

### 9. Answers to Practice Questions

**Answer 1:**
d) `public`

**Answer 2:**
c) Classes within the same package and subclasses in any package.

**Answer 3:**
c) `default` (package-private)

**Answer 4:**
d) `private`

**Answer 5:**
*   **Line 4:** Error. `privateField` is `private`, meaning it can only be accessed within its own class (`MyClass`).
*   **Line 7:** Error. `defaultField` has default (package-private) access. While `SubClassOfMyClass` extends `MyClass`, it is in a different package (`PackageB`) than `MyClass` (`PackageA`). Default access does not permit access from different packages, even to subclasses.
*   **Line 8:** Error. `privateField` is `private` and cannot be accessed directly by subclasses.
*   **Line 10:** Error. `protectedField` is `protected`. While subclasses can access `protected` members, unrelated classes in a different package cannot access `protected` members of an object directly. They can only access them if they are accessing them through an instance of *themselves* or an instance of a subclass *of the class being accessed*. In this case, `ClassInDifferentPackage` is not a subclass of `MyClass`.
*   **Line 11:** Error. `defaultField` has default (package-private) access and cannot be accessed from a different package.
*   **Line 12:** Error. `privateField` is `private` and cannot be accessed from any other class.

---

### 10. Important Points to Remember

*   **Encapsulation is key:** Use access modifiers to hide implementation details and protect data integrity.
*   **`private` is the most restrictive:** Use it for internal state that should not be exposed.
*   **`public` is the least restrictive:** Use it for the public API of your classes and packages.
*   **`protected` is for inheritance:** Use it when subclasses need access but other classes shouldn't.
*   **`default` (package-private) is for package cohesion:** Use it for members shared only within a package.
*   **The absence of a modifier implies `default` access.**
*   **When overriding a method, the access level of the overriding method cannot be more restrictive than the access level of the overridden method.** (e.g., a `private` method cannot override a `public` method).

---
This concludes the study notes for Access Modifiers in Java. Remember to practice applying these concepts in your own code!
