---
title: "Casting and Autoboxing"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf87"
status: "completed"
scrapedAt: "2026-05-20T16:55:49.206Z"
---
# Object-Oriented Programming: Introduction to Java

## Module 1: Casting and Autoboxing

This module introduces two fundamental concepts in Java programming that bridge the gap between primitive data types and their object-oriented counterparts: **Casting** and **Autoboxing**. Understanding these mechanisms is crucial for writing efficient, flexible, and robust Java code.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the concept of type casting in Java.
*   Differentiate between widening (implicit) and narrowing (explicit) casting.
*   Apply widening casting to convert primitive types to larger primitive types.
*   Apply narrowing casting to convert primitive types to smaller primitive types, understanding potential data loss.
*   Explain the purpose and mechanism of autoboxing and unboxing in Java.
*   Utilize autoboxing and unboxing in practical programming scenarios.

---

### 1. Type Casting

Type casting is the process of converting a value of one data type to another. In Java, casting is primarily used when dealing with primitive data types and sometimes when converting between related object types.

#### 1.1 Widening Casting (Implicit Conversion)

*   **Definition:** Widening casting, also known as **implicit conversion**, occurs when you convert a smaller primitive data type to a larger primitive data type.
*   **Mechanism:** Java automatically performs this conversion because there is no risk of data loss. The larger data type can accommodate the entire range of values from the smaller data type.
*   **Syntax:** No explicit syntax is required; it happens automatically.

*   **Key Concepts:**
    *   **Smaller to Larger:** The source type has a smaller range of values than the destination type.
    *   **No Data Loss:** The conversion is safe and preserves the original value.
    *   **Implicit:** Java handles this conversion without the programmer needing to specify it.

*   **Example:**
    ```java
    // Widening Casting Example

    // int to long
    int myInt = 100;
    long myLong = myInt; // Implicit conversion from int to long
    System.out.println("int value: " + myInt);
    System.out.println("long value: " + myLong); // Output: 100

    // float to double
    float myFloat = 3.14f;
    double myDouble = myFloat; // Implicit conversion from float to double
    System.out.println("float value: " + myFloat);
    System.out.println("double value: " + myDouble); // Output: 3.14
    ```

*   **Hierarchy for Widening Casting (Primitive Types):**
    ```
    byte -> short -> int -> long -> float -> double
    char -> int -> long -> float -> double
    ```
    *(Note: `char` can be widened to `int` and subsequent types, but not directly to `short` or `byte` in a way that preserves the character's numerical value without explicit narrowing.)*

#### 1.2 Narrowing Casting (Explicit Conversion)

*   **Definition:** Narrowing casting, also known as **explicit conversion**, occurs when you convert a larger primitive data type to a smaller primitive data type.
*   **Mechanism:** This conversion requires explicit syntax because there is a risk of data loss or value truncation. The programmer must explicitly tell Java to perform the conversion.
*   **Syntax:** Use parentheses `()` around the target data type before the variable or value to be converted.

*   **Key Concepts:**
    *   **Larger to Smaller:** The source type has a larger range of values than the destination type.
    *   **Potential Data Loss:** Values might be truncated or overflow, leading to incorrect results.
    *   **Explicit:** The programmer must explicitly request the conversion.

*   **Example:**
    ```java
    // Narrowing Casting Example

    // double to int
    double myDouble = 9.78d;
    int myInt = (int) myDouble; // Explicit conversion from double to int
    System.out.println("double value: " + myDouble);
    System.out.println("int value: " + myInt); // Output: 9 (decimal part is lost)

    // long to byte
    long myLong = 257;
    byte myByte = (byte) myLong; // Explicit conversion from long to byte
    System.out.println("long value: " + myLong);
    System.out.println("byte value: " + myByte); // Output: 1 (due to overflow, 257 % 256 = 1)

    // int to char
    int asciiValue = 65;
    char myChar = (char) asciiValue; // Explicit conversion from int to char
    System.out.println("int value: " + asciiValue);
    System.out.println("char value: " + myChar); // Output: A
    ```

*   **Hierarchy for Narrowing Casting (Primitive Types):**
    The reverse of widening is generally true, but with potential issues:
    ```
    double -> float -> long -> int -> short -> byte
    ```
    *(Remember `char` to smaller types also involves potential data loss.)*

#### 1.3 Important Notes on Casting:

*   **Object Casting:** Casting is also used with objects to convert an object of one class to another class, provided there is a relationship (inheritance) between them. This is more complex and involves checking the object's actual type at runtime.
*   **Illegal Casting:** You cannot cast between unrelated primitive types (e.g., `boolean` to `int`).
*   **Arithmetic Operations:** When performing arithmetic operations between different primitive types, Java automatically promotes the smaller types to the larger type (widening) before the operation.

---

### 2. Autoboxing and Unboxing

Autoboxing and unboxing are features introduced in Java 5 that simplify the conversion between primitive types and their corresponding wrapper classes.

#### 2.1 Wrapper Classes

*   **Definition:** Wrapper classes are classes that wrap primitive data types. Each primitive type in Java has a corresponding wrapper class.
*   **Purpose:**
    *   Allow primitive types to be used in contexts that require objects (e.g., collections like `ArrayList`).
    *   Provide useful methods for primitive types (e.g., parsing strings to integers).

*   **Common Wrapper Classes:**

    | Primitive Type | Wrapper Class |
    | :------------- | :------------ |
    | `byte`         | `Byte`        |
    | `short`        | `Short`       |
    | `int`          | `Integer`     |
    | `long`         | `Long`        |
    | `float`        | `Float`       |
    | `double`       | `Double`      |
    | `char`         | `Character`   |
    | `boolean`      | `Boolean`     |

#### 2.2 Autoboxing

*   **Definition:** Autoboxing is the automatic conversion of a primitive data type to its corresponding wrapper class object.
*   **Mechanism:** When a primitive type value is needed in a context that expects an object of its wrapper class, Java automatically creates the wrapper object.
*   **Syntax:** No explicit syntax is required; it happens automatically.

*   **Example:**
    ```java
    // Autoboxing Example

    // Primitive to Wrapper Class
    int primitiveInt = 75;
    Integer wrapperInteger = primitiveInt; // Autoboxing: int to Integer
    System.out.println("Primitive int: " + primitiveInt);
    System.out.println("Wrapper Integer: " + wrapperInteger); // Output: 75

    // Adding to a List (which requires objects)
    import java.util.ArrayList;
    import java.util.List;

    List<Integer> numbers = new ArrayList<>();
    numbers.add(10); // Autoboxing: int to Integer
    numbers.add(20); // Autoboxing: int to Integer
    System.out.println("List of integers: " + numbers); // Output: [10, 20]
    ```

#### 2.3 Unboxing

*   **Definition:** Unboxing is the automatic conversion of a wrapper class object back to its corresponding primitive data type.
*   **Mechanism:** When a wrapper class object is used in a context that expects a primitive type, Java automatically extracts the primitive value from the wrapper object.
*   **Syntax:** No explicit syntax is required; it happens automatically.

*   **Example:**
    ```java
    // Unboxing Example

    // Wrapper Class to Primitive
    Integer wrapperInt = new Integer(100); // Explicitly creating a wrapper object (older style)
    int primitiveValue = wrapperInt; // Unboxing: Integer to int
    System.out.println("Wrapper Integer: " + wrapperInt);
    System.out.println("Primitive int: " + primitiveValue); // Output: 100

    // Performing arithmetic operation
    int sum = primitiveValue + 50; // Unboxing happens implicitly if wrapperInt was used
    System.out.println("Sum: " + sum); // Output: 150
    ```

#### 2.4 Important Notes on Autoboxing/Unboxing:

*   **NullPointerException:** Unboxing a `null` wrapper object will result in a `NullPointerException`.
    ```java
    Integer nullWrapper = null;
    // int primitive = nullWrapper; // This would cause a NullPointerException
    ```
*   **Performance:** While convenient, frequent autoboxing/unboxing can have a slight performance overhead compared to working directly with primitive types, especially in performance-critical loops.
*   **Value Caching:** For certain values within a specific range (e.g., `Integer` between -128 and 127), Java caches the wrapper objects. This means that if you use the `==` operator for comparison, it might compare object references instead of values, leading to unexpected results. It's generally safer to use `.equals()` when comparing wrapper objects.

    ```java
    Integer a = 100;
    Integer b = 100;
    System.out.println(a == b); // true (due to caching)

    Integer c = 200;
    Integer d = 200;
    System.out.println(c == d); // false (objects are different instances)

    // Safer comparison:
    System.out.println(a.equals(b)); // true
    System.out.println(c.equals(d)); // true
    ```

---

### Practice Questions and Exercises:

**Section 1: Casting**

1.  **Question:** Which of the following is an example of widening casting in Java?
    a) `int i = (int) 10.5;`
    b) `long l = 50000;`
    c) `char c = (char) 97;`
    d) `byte b = (byte) 300;`

2.  **Question:** What will be the output of the following code snippet?
    ```java
    double salary = 55000.75;
    int annualSalary = (int) salary;
    System.out.println(annualSalary);
    ```
    a) `55000.75`
    b) `55000`
    c) `55001`
    d) Compilation Error

3.  **Question:** Explain the risk involved in narrowing casting from a `long` to a `byte`. Provide an example where data loss occurs.

**Section 2: Autoboxing and Unboxing**

4.  **Question:** What is the primary purpose of wrapper classes in Java?

5.  **Question:** What type of conversion is happening in the following line?
    ```java
    Character myChar = 'A';
    ```
    a) Unboxing
    b) Widening Casting
    c) Autoboxing
    d) Narrowing Casting

6.  **Question:** Consider the following code:
    ```java
    Integer num1 = 50;
    Integer num2 = 50;
    System.out.println(num1 == num2);
    ```
    What is the expected output and why?

7.  **Question:** Write a Java code snippet that demonstrates unboxing a `Double` object and using it in an arithmetic operation.

---

### Answers to Practice Questions:

1.  **Answer:** b) `long l = 50000;`
    *   **Explanation:** This is widening casting because a smaller type (`int` literal) is being assigned to a larger type (`long`). The other options involve narrowing casting with explicit type casting.

2.  **Answer:** b) `55000`
    *   **Explanation:** The `double` value `55000.75` is explicitly cast to an `int`. During narrowing casting from `double` to `int`, the decimal part is truncated, resulting in `55000`.

3.  **Answer:**
    *   **Risk:** When casting a `long` to a `byte`, the `byte` data type can only hold values from -128 to 127. If the `long` value is outside this range, an **overflow** occurs. The value is effectively taken modulo 256 (for unsigned interpretation) or handled according to two's complement representation for signed bytes, leading to a loss of the original value.
    *   **Example:**
        ```java
        long largeNumber = 300;
        byte smallNumber = (byte) largeNumber;
        System.out.println("Original long: " + largeNumber); // Output: 300
        System.out.println("Casted byte: " + smallNumber);   // Output: 44 (300 % 256 = 44)
        ```

4.  **Answer:** The primary purpose of wrapper classes is to allow primitive data types to be treated as objects. This is essential for using primitives in object-oriented contexts such as collections (`ArrayList`, `HashMap`), generics, and when needing to use methods associated with the data types.

5.  **Answer:** c) Autoboxing
    *   **Explanation:** The primitive `char` `'A'` is being automatically converted into an `Character` object.

6.  **Answer:** `true`
    *   **Explanation:** For values between -128 and 127 (inclusive), the `Integer` class caches objects. Therefore, `num1` and `num2` both refer to the *same* `Integer` object in memory, and the `==` operator correctly compares their references, returning `true`.

7.  **Answer:**
    ```java
    public class UnboxingExample {
        public static void main(String[] args) {
            // Create a Double wrapper object
            Double priceWrapper = new Double(19.99);

            // Unboxing the Double object to a primitive double
            double pricePrimitive = priceWrapper; // Unboxing happens here

            // Using the primitive double in an arithmetic operation
            double discountedPrice = pricePrimitive * 0.9; // Applying a 10% discount

            System.out.println("Original Price (Wrapper): " + priceWrapper);
            System.out.println("Discounted Price (Primitive): " + discountedPrice);
        }
    }
    ```
    **Expected Output:**
    ```
    Original Price (Wrapper): 19.99
    Discounted Price (Primitive): 17.991
    ```

---

### Important Points to Remember:

*   **Widening Casting:** Always safe, implicit (automatic). Smaller to larger primitive types.
*   **Narrowing Casting:** Potentially unsafe, explicit (requires parentheses). Larger to smaller primitive types, risk of data loss.
*   **Autoboxing:** Primitive to Wrapper Class object, automatic.
*   **Unboxing:** Wrapper Class object to Primitive, automatic.
*   **NullPointerException:** Be cautious when unboxing `null` wrapper objects.
*   **`==` vs. `.equals()`:** Use `.equals()` when comparing wrapper objects for value equality, especially for values outside the cached range, to avoid unexpected behavior due to reference comparison.
