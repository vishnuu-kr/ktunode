---
title: "Type Conversion and Casting"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe67d"
status: "completed"
scrapedAt: "2026-05-23T17:51:23.694Z"
---
# Object Oriented Programming: Module 2 - Core Java Fundamentals

## Topic: Type Conversion and Casting

This topic delves into how Java handles the conversion between different data types and the explicit mechanisms used to achieve this. Understanding type conversion and casting is crucial for writing robust and efficient Java programs, as it directly relates to how data is manipulated and stored. This aligns with **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.**

---

### 1. Understanding Data Types in Java

Before diving into conversion, it's essential to recall Java's data types:

*   **Primitive Data Types:** These are the fundamental building blocks of Java. They store actual values.
    *   **Integral Types:** `byte`, `short`, `int`, `long` (store whole numbers)
    *   **Floating-Point Types:** `float`, `double` (store numbers with decimal points)
    *   **Character Type:** `char` (stores a single character)
    *   **Boolean Type:** `boolean` (stores `true` or `false`)

*   **Reference Data Types:** These refer to objects. Examples include `String`, arrays, and custom classes.

---

### 2. Type Conversion (Implicit Conversion / Widening Conversion)

Type conversion, also known as type promotion or widening conversion, occurs automatically when a value of a smaller data type is converted to a larger data type. Java performs this conversion without any loss of information.

**Key Concepts:**

*   **Widening Conversion:** The process of converting a smaller data type to a larger data type.
*   **Automatic:** Java compiler handles this conversion without explicit instruction.
*   **Safe:** No loss of data or precision.

**Hierarchy of Primitive Data Types (Widening):**

The following hierarchy illustrates the widening conversion path:

`byte` -> `short` -> `int` -> `long` -> `float` -> `double`

*   `char` can also be widened to `int`, `long`, `float`, or `double`.

**Examples:**

```java
// Widening Conversion Example 1
byte myByte = 10;
int myInt = myByte; // Implicit conversion from byte to int
System.out.println("Byte value: " + myByte);
System.out.println("Int value: " + myInt); // Output: Int value: 10

// Widening Conversion Example 2
int num = 50;
double dbl = num; // Implicit conversion from int to double
System.out.println("Int value: " + num);
System.out.println("Double value: " + dbl); // Output: Double value: 50.0

// Widening Conversion Example 3 (char to int)
char myChar = 'A';
int asciiValue = myChar; // Implicit conversion from char to int
System.out.println("Char value: " + myChar);
System.out.println("ASCII value: " + asciiValue); // Output: ASCII value: 65
```

**Reference from Textbooks:**

*   **Java: The Complete Reference (Schildt, 8/e):** Chapter 4 discusses primitive types and their conversions, highlighting that widening conversions are safe and performed automatically.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Chapter 3 covers primitive types and illustrates implicit type conversions, emphasizing their safety.

---

### 3. Casting (Explicit Conversion / Narrowing Conversion)

Casting is the process of explicitly converting a value from a larger data type to a smaller data type. This is also known as narrowing conversion.

**Key Concepts:**

*   **Narrowing Conversion:** The process of converting a larger data type to a smaller data type.
*   **Explicit:** Requires a cast operator (`(target_type)`) to be used.
*   **Potentially Unsafe:** Can lead to loss of data or precision. The programmer is responsible for ensuring the conversion is meaningful.

**Hierarchy of Primitive Data Types (Narrowing):**

The reverse of the widening hierarchy applies:

`double` -> `float` -> `long` -> `int` -> `short` -> `byte`

*   `int` can also be narrowed to `char`.

**Syntax:**

```java
(target_data_type) value_to_be_converted;
```

**Examples:**

```java
// Narrowing Conversion Example 1 (double to int)
double largeDouble = 9.78;
int smallInt = (int) largeDouble; // Explicit conversion from double to int
System.out.println("Double value: " + largeDouble);
System.out.println("Int value: " + smallInt); // Output: Int value: 9 (decimal part is truncated)

// Narrowing Conversion Example 2 (long to byte)
long bigLong = 200;
byte smallByte = (byte) bigLong; // Explicit conversion from long to byte
System.out.println("Long value: " + bigLong);
System.out.println("Byte value: " + smallByte); // Output: Byte value: -56 (overflow occurs, behavior is system-dependent for overflow)

// Narrowing Conversion Example 3 (int to char)
int asciiCode = 66;
char character = (char) asciiCode; // Explicit conversion from int to char
System.out.println("ASCII code: " + asciiCode);
System.out.println("Character: " + character); // Output: Character: B
```

**Important Considerations for Narrowing Conversions:**

*   **Truncation:** When converting floating-point types to integral types, the fractional part is truncated (cut off), not rounded.
*   **Overflow/Underflow:** When converting a value that is outside the range of the target data type, the value will wrap around, leading to unexpected results. This is a common source of bugs.

**Reference from Textbooks:**

*   **Java: The Complete Reference (Schildt, 8/e):** Chapter 4 also covers narrowing conversions, emphasizing the use of the cast operator and the potential for data loss.
*   **Fundamentals of Software Engineering (Mall, 4th Ed.):** While not directly focused on type casting, the principles of data integrity and handling potential errors in data representation are relevant to understanding the risks of narrowing conversions.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Chapter 3 discusses explicit type conversions (casting) and provides examples of how to use the cast operator, along with warnings about data loss.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 4. Casting Between Objects (Reference Type Casting)

Casting is also used with reference types (objects) to convert an object of one type to another. This is only possible if the object is truly an instance of the target type or a subclass of it.

**Key Concepts:**

*   **Upcasting:** Converting a subclass object to a superclass reference. This is an implicit (widening) conversion and is always safe.
*   **Downcasting:** Converting a superclass reference to a subclass reference. This is an explicit (narrowing) conversion and can be unsafe if the object is not actually an instance of the target subclass.

**Syntax:**

```java
(TargetClassName) reference_variable;
```

**Examples:**

Let's consider a simple inheritance hierarchy:

```java
class Animal {
    void eat() {
        System.out.println("Animal is eating.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking.");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("Cat is meowing.");
    }
}

public class CastingExample {
    public static void main(String[] args) {
        // Upcasting (Implicit)
        Dog myDog = new Dog();
        Animal myAnimal = myDog; // Upcasting: Dog to Animal

        myAnimal.eat(); // Calls Animal's eat() method

        // Downcasting (Explicit)
        // Need to check the actual type before downcasting to avoid ClassCastException
        if (myAnimal instanceof Dog) {
            Dog anotherDog = (Dog) myAnimal; // Downcasting: Animal to Dog
            anotherDog.bark(); // Calls Dog's bark() method
        }

        Cat myCat = new Cat();
        Animal anotherAnimal = myCat;

        if (anotherAnimal instanceof Dog) {
            // This block will not execute because anotherAnimal is a Cat
            Dog yetAnotherDog = (Dog) anotherAnimal;
            yetAnotherDog.bark();
        } else {
            System.out.println("Cannot downcast to Dog."); // Output: Cannot downcast to Dog.
        }
    }
}
```

**Potential Issues with Downcasting:**

*   **`ClassCastException`:** If you try to downcast an object to a type that it is not an instance of, a `ClassCastException` will be thrown at runtime.
*   **`instanceof` Operator:** It's best practice to use the `instanceof` operator to check the actual type of an object before attempting to downcast it.

**Reference from Textbooks:**

*   **Java: The Complete Reference (Schildt, 8/e):** Chapter 11 on inheritance and Chapter 14 on polymorphism discuss upcasting and downcasting as fundamental concepts.
*   **Java How to Program (Deitel & Deitel, 11th Ed.):** Chapter 10 covers inheritance and polymorphism, with detailed explanations and examples of upcasting and downcasting.
*   **Introduction to Java Programming (Liang, 7/e):** Chapter 9 on inheritance and polymorphism also covers reference type casting.

---

### 5. Important Points to Remember

*   **Widening Conversions:** Automatic, safe, no data loss. `byte` -> `short` -> `int` -> `long` -> `float` -> `double`. `char` can also widen.
*   **Narrowing Conversions:** Explicit, requires cast operator `(target_type)`, potential for data loss (truncation, overflow).
*   **Floating-Point to Integer Conversion:** Truncation occurs, not rounding.
*   **Object Casting:**
    *   **Upcasting:** Subclass to Superclass (implicit, safe).
    *   **Downcasting:** Superclass to Subclass (explicit, unsafe).
    *   Use `instanceof` operator to prevent `ClassCastException`.
*   **String to Primitive Conversion:** This is not direct casting. You need to use wrapper class methods like `Integer.parseInt()`, `Double.parseDouble()`, etc.

**Example of String to Primitive Conversion:**

```java
String numStr = "123";
int number = Integer.parseInt(numStr); // Converts String to int
System.out.println("Parsed integer: " + number);

String floatStr = "45.67";
double dValue = Double.parseDouble(floatStr); // Converts String to double
System.out.println("Parsed double: " + dValue);
```

**Reference from Reference Books:**

*   **Programming JAVA a Primer (Balagurusamy E, 5/e):** Chapter 6 covers type conversions and casting with clear examples.
*   **Head First Java (Sierra K., 2/e):** While more conceptual, it explains data types and conversions in an accessible way, highlighting potential pitfalls.

---

### 6. Practice Questions and Exercises

**Question 1:**

Which of the following is an example of widening conversion in Java?

a) `int x = 100; byte b = (byte) x;`
b) `double d = 9.99; int i = (int) d;`
c) `char c = 'A'; int i = c;`
d) `long l = 10000000000L; int i = (int) l;`

**Answer:** c) `char c = 'A'; int i = c;`
*Explanation: Widening conversion occurs when a smaller data type is converted to a larger one. `char` can be implicitly converted to `int`.*

**Question 2:**

Consider the following code snippet:

```java
double salary = 50000.75;
int empSalary = (int) salary;
System.out.println(empSalary);
```

What will be the output?

a) `50000.75`
b) `50000`
c) `50001`
d) An error

**Answer:** b) `50000`
*Explanation: When a `double` is cast to an `int`, the fractional part is truncated (cut off), not rounded.*

**Question 3:**

Explain the difference between implicit and explicit type conversion. Provide an example of each.

**Answer:**

*   **Implicit Type Conversion (Widening):** This happens automatically when a value of a smaller data type is converted to a larger data type. There is no loss of data.
    *   *Example:* `int num = 10; double d = num;` (Here, `int` is implicitly converted to `double`).

*   **Explicit Type Conversion (Narrowing):** This requires the programmer to use a cast operator `(target_type)` to convert a value from a larger data type to a smaller data type. This can lead to data loss.
    *   *Example:* `double price = 25.99; int discountedPrice = (int) price;` (Here, `double` is explicitly cast to `int`, truncating the decimal part).

**Question 4:**

What is the purpose of the `instanceof` operator in Java when performing reference type casting?

**Answer:** The `instanceof` operator is used to check if an object is an instance of a particular class or any of its subclasses. This is crucial before performing a downcast to prevent a `ClassCastException` if the object is not compatible with the target type.

**Question 5:**

Write a program that demonstrates the potential issue of overflow when performing a narrowing conversion from `long` to `byte`.

**Solution:**

```java
public class OverflowExample {
    public static void main(String[] args) {
        long largeValue = 300L; // Value outside the range of byte (-128 to 127)
        byte smallValue = (byte) largeValue;

        System.out.println("Original long value: " + largeValue);
        System.out.println("Converted byte value: " + smallValue);

        long anotherLargeValue = -200L;
        byte anotherSmallValue = (byte) anotherLargeValue;

        System.out.println("Original long value: " + anotherLargeValue);
        System.out.println("Converted byte value: " + anotherSmallValue);
    }
}
```

**Expected Output:**

```
Original long value: 300
Converted byte value: 44
Original long value: -200
Converted byte value: -56
```
*Explanation: When `300L` is converted to `byte`, it wraps around. `300 % 256 = 44`. When `-200L` is converted to `byte`, it also wraps around. The exact behavior is defined by the binary representation and two's complement arithmetic.*

---

### 7. Alignment with Course Outcomes

*   **CO1: Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism and to illustrate it using UML diagrams. (Knowledge Level: K2)**
    *   While this topic doesn't directly cover UML or all OO concepts, the discussion of object casting (upcasting and downcasting) is a direct application of **inheritance** and **polymorphism**, allowing for a deeper understanding of how these concepts work with object references.

*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (Knowledge Level: K3)**
    *   This topic is **central** to CO2. It focuses on the manipulation of **datatypes** through conversion and casting, which are essential for using operators correctly and developing programs that handle data effectively. Understanding these mechanisms is key to writing functional Java code.

*   **CO3: Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Input/ Output Streams with Files. (Knowledge Level: K3)**
    *   The discussion of potential `ClassCastException` in object downcasting directly relates to the **exception handling mechanism**. Recognizing and preventing such exceptions is a core aspect of writing robust programs.

---

This comprehensive study guide covers the essential aspects of type conversion and casting in Java, providing a strong foundation for understanding data manipulation within the context of object-oriented programming.