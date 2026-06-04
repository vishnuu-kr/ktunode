---
title: "Strings"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java  "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf89"
status: "completed"
scrapedAt: "2026-05-20T16:55:50.662Z"
---
# OBJECT ORIENTED PROGRAMMING

## Module 1: Introduction to Java

### Topic: Strings

---

### 1. Understanding Strings in Java

*   **What is a String?**
    *   A sequence of characters.
    *   In Java, strings are objects, not primitive data types.
    *   They are instances of the `java.lang.String` class.
    *   Strings are immutable, meaning their content cannot be changed after they are created.

*   **Creating Strings**
    *   **String Literals:** The simplest way to create a string. The Java compiler creates a `String` object for each literal.
        ```java
        String greeting = "Hello, World!";
        String name = "Alice";
        ```
        *   **Important Point:** String literals are interned. This means that if multiple string literals have the same value, they refer to the same object in memory, saving memory.

    *   **Using the `new` Keyword:** Explicitly creating a `String` object.
        ```java
        String message = new String("This is a message.");
        String anotherMessage = new String("This is a message.");
        ```
        *   **Important Point:** Using `new` creates a new object each time, even if the string content is the same. This bypasses string interning.

*   **String Pool:**
    *   A special area in Java's memory where string literals are stored.
    *   When you create a string literal, Java checks if a string with that value already exists in the pool. If it does, the reference is returned; otherwise, a new string object is created and added to the pool.

---

### 2. String Immutability

*   **Concept:** Once a `String` object is created, its content cannot be modified. Any operation that appears to modify a string actually creates a new `String` object with the modified content.

*   **Example:**
    ```java
    String str1 = "Java";
    String str2 = str1.concat(" is fun"); // str1 remains "Java", str2 becomes "Java is fun"
    str1 = str1 + " programming"; // str1 now refers to a new string object "Java programming"
    ```
    *   The original `str1` object ("Java") is still in memory unless no other references point to it, in which case it can be garbage collected.

*   **Why Immutability?**
    *   **Security:** Prevents accidental modification of strings used for critical purposes (e.g., passwords, file paths).
    *   **Concurrency:** Immutable objects are inherently thread-safe. Multiple threads can access them without the need for synchronization.
    *   **Hashing:** Hashing relies on consistent object states. If strings were mutable, their hash codes could change, breaking data structures like `HashMap`.

---

### 3. String Operations and Methods

The `String` class provides a rich set of methods for manipulating and querying strings.

*   **Getting String Length:**
    *   `length()`: Returns the number of characters in the string.
    ```java
    String text = "Programming";
    int len = text.length(); // len will be 11
    ```

*   **Accessing Characters:**
    *   `charAt(int index)`: Returns the character at the specified index. Indices are 0-based.
    ```java
    String greeting = "Hello";
    char firstChar = greeting.charAt(0); // firstChar will be 'H'
    char lastChar = greeting.charAt(greeting.length() - 1); // lastChar will be 'o'
    ```
    *   `getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)`: Copies characters from the string to a character array.

*   **String Comparison:**
    *   `equals(Object anObject)`: Compares the content of two strings. Returns `true` if the strings have the same sequence of characters, `false` otherwise. This is the preferred way to compare string content.
    ```java
    String s1 = "apple";
    String s2 = new String("apple");
    System.out.println(s1.equals(s2)); // Output: true
    ```
    *   `equalsIgnoreCase(String anotherString)`: Compares string content ignoring case.
    ```java
    String strA = "Java";
    String strB = "java";
    System.out.println(strA.equalsIgnoreCase(strB)); // Output: true
    ```
    *   `==` Operator: Compares the references (memory addresses) of two string objects.
    ```java
    String literal1 = "hello";
    String literal2 = "hello";
    String obj1 = new String("hello");

    System.out.println(literal1 == literal2); // Output: true (due to string interning)
    System.out.println(literal1 == obj1);   // Output: false (obj1 is a different object)
    ```
    *   `compareTo(String anotherString)`: Compares two strings lexicographically.
        *   Returns 0 if strings are equal.
        *   Returns a negative value if the calling string comes before the argument string.
        *   Returns a positive value if the calling string comes after the argument string.
    ```java
    String word1 = "apple";
    String word2 = "banana";
    System.out.println(word1.compareTo(word2)); // Output: a negative number
    ```
    *   `compareToIgnoreCase(String str)`: Similar to `compareTo` but ignores case.

*   **Searching within Strings:**
    *   `indexOf(String str)`: Returns the index of the first occurrence of the specified substring. Returns -1 if the substring is not found.
    ```java
    String sentence = "The quick brown fox jumps over the lazy dog.";
    int index = sentence.indexOf("fox"); // index will be 16
    int notFound = sentence.indexOf("cat"); // notFound will be -1
    ```
    *   `indexOf(String str, int fromIndex)`: Starts searching from a specified index.
    *   `lastIndexOf(String str)`: Returns the index of the last occurrence of the specified substring.
    *   `contains(CharSequence s)`: Returns `true` if the string contains the specified sequence of characters, `false` otherwise.
    ```java
    System.out.println(sentence.contains("quick")); // Output: true
    ```

*   **Modifying Strings (Creating New Strings):**
    *   `concat(String str)`: Appends one string to another.
    ```java
    String part1 = "Hello";
    String part2 = "World";
    String combined = part1.concat(part2); // combined will be "HelloWorld"
    ```
    *   `substring(int beginIndex)`: Returns a substring from `beginIndex` to the end of the string.
    ```java
    String phrase = "Programming";
    String sub = phrase.substring(3); // sub will be "gramming"
    ```
    *   `substring(int beginIndex, int endIndex)`: Returns a substring from `beginIndex` up to (but not including) `endIndex`.
    ```java
    String sub2 = phrase.substring(0, 3); // sub2 will be "Pro"
    ```
    *   `replace(char oldChar, char newChar)`: Replaces all occurrences of `oldChar` with `newChar`.
    ```java
    String oldStr = "Mississippi";
    String newStr = oldStr.replace('s', 'z'); // newStr will be "Mizzizzippi"
    ```
    *   `replace(CharSequence target, CharSequence replacement)`: Replaces all occurrences of `target` with `replacement`.
    *   `replaceAll(String regex, String replacement)`: Replaces all substrings that match the given regular expression.
    *   `replaceFirst(String regex, String replacement)`: Replaces the first substring that matches the given regular expression.
    *   `toLowerCase()`: Converts the string to lowercase.
    *   `toUpperCase()`: Converts the string to uppercase.
    *   `trim()`: Removes leading and trailing whitespace.
    ```java
    String padded = "   Trim me!   ";
    String trimmed = padded.trim(); // trimmed will be "Trim me!"
    ```
    *   `split(String regex)`: Splits the string around matches of the given regular expression. Returns an array of strings.
    ```java
    String data = "apple,banana,cherry";
    String[] fruits = data.split(","); // fruits will be ["apple", "banana", "cherry"]
    ```

*   **String Conversion:**
    *   `toCharArray()`: Converts the string to a character array.
    *   `getBytes()`: Converts the string to a byte array (using default charset).
    *   `valueOf()`: Static method in `String` class to convert other data types (like primitives, objects) to strings.
    ```java
    int number = 123;
    String numStr = String.valueOf(number); // numStr will be "123"
    double pi = 3.14;
    String piStr = String.valueOf(pi);      // piStr will be "3.14"
    ```

---

### 4. `StringBuilder` and `StringBuffer` (Mutable Strings)

*   **Need for Mutability:** Since `String` objects are immutable, repeated concatenation or modification can lead to the creation of many temporary `String` objects, which can be inefficient. `StringBuilder` and `StringBuffer` address this by providing mutable string objects.

*   **`StringBuilder`:**
    *   Non-synchronized: Faster than `StringBuffer` when used in a single-threaded environment.
    *   Methods: `append()`, `insert()`, `delete()`, `replace()`, `reverse()`, `toString()`.
    ```java
    StringBuilder sb = new StringBuilder("Hello");
    sb.append(" ");
    sb.append("World");
    sb.append("!");
    String result = sb.toString(); // result is "Hello World!"
    System.out.println(sb.reverse()); // Prints "!dlroW olleH"
    ```

*   **`StringBuffer`:**
    *   Synchronized: Thread-safe, but slower than `StringBuilder` due to synchronization overhead.
    *   Use `StringBuffer` when your string manipulation might be accessed by multiple threads concurrently.
    *   Methods are similar to `StringBuilder`.

*   **Key Differences:**
    *   **Thread Safety:** `StringBuffer` is thread-safe, `StringBuilder` is not.
    *   **Performance:** `StringBuilder` is generally faster than `StringBuffer`.

---

### 5. Format Specifiers and `String.format()`

*   **`String.format()`:** A powerful method for creating formatted strings. Similar to `printf` in C.
    *   **Syntax:** `String.format(String format, Object... args)`
    *   **Format Specifiers:**
        *   `%s`: String
        *   `%d`: Decimal integer
        *   `%f`: Floating-point number
        *   `%c`: Character
        *   `%n`: Platform-specific line separator

*   **Example:**
    ```java
    String name = "Bob";
    int age = 30;
    double salary = 50000.75;

    String formattedString = String.format("Employee: %s, Age: %d, Salary: $%.2f", name, age, salary);
    System.out.println(formattedString);
    // Output: Employee: Bob, Age: 30, Salary: $50000.75
    ```

---

### 6. Learning Outcomes Covered:

*   **Understanding Strings:** Covered by explaining what strings are, how they are created (literals vs. `new`), and the concept of string interning and the string pool.
*   **String Immutability:** Explained the concept of immutability, its implications, and why it's important.
*   **String Operations and Methods:** Detailed coverage of various `String` class methods for length, character access, comparison, searching, modification, conversion, and splitting.
*   **`StringBuilder` and `StringBuffer`:** Explained the need for mutable strings and the differences between `StringBuilder` and `StringBuffer`, along with their common methods.
*   **String Formatting:** Introduced `String.format()` and common format specifiers.

---

### 7. Practice Questions/Exercises

1.  **String Creation:**
    *   Declare a string variable `city` and initialize it with the value "New York" using a string literal.
    *   Declare another string variable `state` and initialize it with the value "New York" using the `new` keyword.
    *   Compare `city` and `state` using `==` and `.equals()`. Explain the results.

2.  **String Manipulation:**
    *   Given the string `s = "Java Programming is powerful."`, perform the following operations:
        *   Print the length of the string.
        *   Print the character at index 5.
        *   Find and print the index of the word "Programming".
        *   Create a new string `subString` containing "Programming is".
        *   Create a new string `upperCaseString` containing the original string in uppercase.
        *   Create a new string `replacedString` where all occurrences of "is" are replaced with "was".

3.  **Mutability vs. Immutability:**
    *   Write a code snippet that demonstrates the immutability of `String` by trying to change a character. Explain why your attempt doesn't change the original string.
    *   Use `StringBuilder` to build the string "Learning Java is fun." efficiently.

4.  **String Comparison:**
    *   Compare `string1 = "Apple"` and `string2 = "apple"` using `equals()`, `equalsIgnoreCase()`, and `compareTo()`. Explain the output of each.

5.  **Formatting:**
    *   Use `String.format()` to create a string that displays a student's name, their score (integer), and their GPA (double with two decimal places). For example: "Student: Alice, Score: 85, GPA: 3.75".

---

### 8. Answers to Practice Questions/Exercises

1.  **String Creation:**
    ```java
    String city = "New York"; // String literal
    String state = new String("New York"); // Using new keyword

    System.out.println("city == state: " + (city == state)); // Output: city == state: false
    System.out.println("city.equals(state): " + city.equals(state)); // Output: city.equals(state): true
    ```
    *   **Explanation:** `city == state` is `false` because `city` refers to an object in the string pool (due to literal), while `state` refers to a new object created on the heap, even though they have the same content. `.equals()` compares the actual content of the strings, which is the same, hence `true`.

2.  **String Manipulation:**
    ```java
    String s = "Java Programming is powerful.";

    // Print the length
    System.out.println("Length: " + s.length()); // Output: Length: 29

    // Print the character at index 5
    System.out.println("Char at index 5: " + s.charAt(5)); // Output: Char at index 5: P

    // Find and print the index of "Programming"
    System.out.println("Index of 'Programming': " + s.indexOf("Programming")); // Output: Index of 'Programming': 5

    // Create a new string subString containing "Programming is"
    String subString = s.substring(5, 24); // starts at index 5, ends before index 24
    System.out.println("Substring: " + subString); // Output: Substring: Programming is

    // Create a new string upperCaseString
    String upperCaseString = s.toUpperCase();
    System.out.println("Uppercase: " + upperCaseString); // Output: Uppercase: JAVA PROGRAMMING IS POWERFUL.

    // Create a new string replacedString
    String replacedString = s.replace("is", "was");
    System.out.println("Replaced: " + replacedString); // Output: Replaced: Java Programming was powerful.
    ```

3.  **Mutability vs. Immutability:**
    *   **String Immutability Demonstration:**
        ```java
        String immutableString = "Hello";
        // Attempt to change: This will not compile or change the original string
        // immutableString.charAt(0) = 'J'; // ERROR!
        System.out.println("Original String: " + immutableString); // Output: Original String: Hello
        ```
        *   **Explanation:** `String` objects are immutable. You cannot change the characters of an existing `String` object. Any operation that appears to modify a string actually creates a new `String` object.

    *   **Using `StringBuilder`:**
        ```java
        StringBuilder sb = new StringBuilder();
        sb.append("Learning");
        sb.append(" ");
        sb.append("Java");
        sb.append(" ");
        sb.append("is");
        sb.append(" ");
        sb.append("fun.");
        String mutableResult = sb.toString();
        System.out.println("StringBuilder Result: " + mutableResult); // Output: StringBuilder Result: Learning Java is fun.
        ```

4.  **String Comparison:**
    ```java
    String string1 = "Apple";
    String string2 = "apple";

    System.out.println("string1.equals(string2): " + string1.equals(string2)); // Output: string1.equals(string2): false
    System.out.println("string1.equalsIgnoreCase(string2): " + string1.equalsIgnoreCase(string2)); // Output: string1.equalsIgnoreCase(string2): true
    System.out.println("string1.compareTo(string2): " + string1.compareTo(string2)); // Output: string1.compareTo(string2): -32 (approximately, depends on ASCII values)
    ```
    *   **Explanation:**
        *   `.equals()` is case-sensitive, so "Apple" and "apple" are not equal.
        *   `.equalsIgnoreCase()` ignores case, so they are considered equal.
        *   `.compareTo()` returns a negative value because 'A' (ASCII 65) comes before 'a' (ASCII 97).

5.  **Formatting:**
    ```java
    String studentName = "Alice";
    int studentScore = 85;
    double studentGpa = 3.75;

    String formattedInfo = String.format("Student: %s, Score: %d, GPA: %.2f", studentName, studentScore, studentGpa);
    System.out.println(formattedInfo); // Output: Student: Alice, Score: 85, GPA: 3.75
    ```

---

### 9. Important Points to Remember

*   **Strings are immutable objects in Java.** You cannot change them; you can only create new ones.
*   **Use `equals()` to compare string content**, not the `==` operator (unless you are specifically checking if two string variables reference the *exact same object*).
*   **String literals are interned.** This means identical string literals refer to the same object in memory.
*   **`new String(...)` creates a new object**, bypassing interning.
*   **Use `StringBuilder` for efficient string manipulation** in single-threaded environments.
*   **Use `StringBuffer` for thread-safe string manipulation** in multi-threaded environments.
*   **`String.format()` is useful for creating formatted strings.**
*   **Indices in strings are 0-based.**
*   **`substring(beginIndex, endIndex)` includes `beginIndex` but excludes `endIndex`.**
