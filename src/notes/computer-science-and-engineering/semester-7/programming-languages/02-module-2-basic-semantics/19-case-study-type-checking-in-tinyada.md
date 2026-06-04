---
title: "Case Study: Type Checking in TinyAda."
subject: "PROGRAMMING LANGUAGES"
module: "Module 2: Basic Semantics"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c691"
status: "completed"
scrapedAt: "2026-05-20T17:09:34.417Z"
---
# Programming Languages: Module 2: Basic Semantics

## Topic: Case Study: Type Checking in TinyAda

### Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   Understand the fundamental principles of type checking in programming languages.
*   Identify and explain different strategies for type checking (static vs. dynamic).
*   Analyze how type checking is implemented in a simplified language like TinyAda.
*   Recognize common type errors and how they are detected.
*   Appreciate the role of type systems in program correctness and safety.

---

### 1. Introduction to Type Checking

**What is Type Checking?**

Type checking is the process of verifying and enforcing the constraints of types within a program. It ensures that operations are performed on data of the correct type, preventing runtime errors and promoting program correctness.

**Why is Type Checking Important?**

*   **Error Detection:** Catches many common programming errors early in the development cycle (especially with static type checking).
*   **Program Correctness:** Guarantees that operations are semantically valid (e.g., you can't add a string to an integer directly in most statically typed languages).
*   **Readability and Maintainability:** Explicit types make code easier to understand and modify.
*   **Performance:** Static type information can be used by compilers to generate more efficient code.
*   **Security:** Prevents certain types of vulnerabilities by ensuring data is handled appropriately.

---

### 2. Static vs. Dynamic Type Checking

There are two primary approaches to type checking:

#### 2.1 Static Type Checking

*   **Definition:** Type checking is performed *before* the program is executed, typically during compilation.
*   **Mechanism:** The compiler analyzes the source code to determine the types of all variables and expressions. If any type inconsistencies are found, the compilation fails.
*   **Advantages:**
    *   **Early Error Detection:** Catches type errors at compile-time, saving debugging time.
    *   **Performance:** The compiler can optimize code based on known types.
    *   **Reliability:** Leads to more robust programs as many errors are eliminated before runtime.
*   **Disadvantages:**
    *   **Less Flexibility:** Can sometimes feel restrictive, requiring explicit type declarations or more complex type inference mechanisms.
    *   **Longer Compilation Times:** The analysis can add to the compilation process.
*   **Examples of Statically Typed Languages:** Java, C++, C#, Swift, Haskell, Rust, Go.

#### 2.2 Dynamic Type Checking

*   **Definition:** Type checking is performed *during* program execution (runtime).
*   **Mechanism:** The interpreter or runtime system checks the types of values when an operation is performed. If a type mismatch occurs, a runtime error (e.g., TypeError, Exception) is raised.
*   **Advantages:**
    *   **Flexibility:** Allows for more dynamic code structures and easier prototyping.
    *   **Faster Development/Prototyping:** Less boilerplate code for type declarations.
*   **Disadvantages:**
    *   **Late Error Detection:** Type errors are only discovered when the problematic code path is executed.
    *   **Performance Overhead:** Runtime type checks can introduce overhead.
    *   **Potential for Runtime Crashes:** Uncaught type errors can terminate the program.
*   **Examples of Dynamically Typed Languages:** Python, JavaScript, Ruby, PHP, Lisp.

---

### 3. Type Checking in TinyAda: A Case Study

TinyAda is a simplified, hypothetical programming language designed to illustrate fundamental programming language concepts, including type checking.

#### 3.1 TinyAda's Type System

TinyAda has a simple, static type system with the following basic types:

*   `Integer`: For whole numbers.
*   `Boolean`: For truth values (`TRUE`, `FALSE`).
*   `String`: For sequences of characters.

It also supports user-defined types, such as:

*   **Arrays:** Collections of elements of the same type.
*   **Records (Structures):** Collections of fields, each with its own type.

#### 3.2 Type Checking Rules in TinyAda

The TinyAda compiler enforces the following type checking rules:

1.  **Assignment Compatibility:**
    *   A value can only be assigned to a variable if its type is compatible with the variable's declared type.
    *   Example:
        ```ada
        Var1 : Integer := 10;
        Var2 : Integer;
        Var2 := Var1; -- OK
        ```
        ```ada
        Var1 : Integer := 10;
        VarBool : Boolean := TRUE;
        VarBool := Var1; -- ERROR: Type mismatch (Integer cannot be assigned to Boolean)
        ```

2.  **Operator Type Compatibility:**
    *   Operators have specific type requirements for their operands.
    *   **Arithmetic Operators (`+`, `-`, `*`, `/`):** Require both operands to be `Integer`.
    *   **Relational Operators (`=`, `/=`, `<`, `>`, `<=`, `>=`):** Can compare `Integer` values or `String` values (lexicographical comparison).
    *   **Logical Operators (`AND`, `OR`, `NOT`):** Require `Boolean` operands.
    *   Example:
        ```ada
        Num1 : Integer := 5;
        Num2 : Integer := 3;
        Result : Integer;
        Result := Num1 + Num2; -- OK

        Str1 : String := "hello";
        Str2 : String := "world";
        Concat : String;
        Concat := Str1 & Str2; -- Assuming '&' is string concatenation in TinyAda
        ```
        ```ada
        Num1 : Integer := 5;
        Str1 : String := "hello";
        Sum : Integer;
        Sum := Num1 + Str1; -- ERROR: Type mismatch (+ expects two Integers)
        ```
        ```ada
        Flag1 : Boolean := TRUE;
        Flag2 : Boolean := FALSE;
        AndResult : Boolean;
        AndResult := Flag1 AND Flag2; -- OK

        AndResult := Num1 AND Flag1; -- ERROR: Type mismatch (AND expects Boolean operands)
        ```

3.  **Function/Procedure Call Type Compatibility:**
    *   When calling a function or procedure, the types of arguments passed must match the types of the parameters declared in the function/procedure signature.
    *   Example:
        ```ada
        -- Procedure declaration
        PROCEDURE PrintInteger(Value : Integer) IS
        BEGIN
            -- ... prints Value ...
        END;

        MyNum : Integer := 42;
        PrintInteger(MyNum); -- OK
        ```
        ```ada
        -- Procedure declaration
        PROCEDURE PrintInteger(Value : Integer) IS
        BEGIN
            -- ... prints Value ...
        END;

        MyBool : Boolean := TRUE;
        PrintInteger(MyBool); -- ERROR: Type mismatch (Boolean cannot be passed to Integer parameter)
        ```

4.  **Array Indexing Type:**
    *   Array indices must be of type `Integer`.
    *   Example:
        ```ada
        MyArray : array (1..5) of Integer;
        Index : Integer := 3;
        MyArray(Index) := 100; -- OK
        ```
        ```ada
        MyArray : array (1..5) of Integer;
        BadIndex : Boolean := TRUE;
        MyArray(BadIndex) := 100; -- ERROR: Type mismatch (Boolean cannot be used as array index)
        ```

5.  **Record Field Access Type:**
    *   Field access requires the expression before the dot to be of a record type, and the field name must exist in that record type. The type of the accessed field is that field's declared type.
    *   Example:
        ```ada
        TYPE Address IS RECORD
            Street : String;
            City : String;
        END RECORD;

        HomeAddress : Address;
        HomeAddress.City := "Metropolis"; -- OK
        ```
        ```ada
        MyNum : Integer := 5;
        MyNum.Value := 10; -- ERROR: Not a record type, cannot access fields.

        HomeAddress : Address;
        HomeAddress.ZipCode := "12345"; -- ERROR: Field "ZipCode" does not exist in Address type.
        ```

#### 3.3 How the TinyAda Compiler Detects Type Errors

The TinyAda compiler performs a **static analysis** of the program. It builds an **Abstract Syntax Tree (AST)** representing the program's structure. During a **semantic analysis** phase, it traverses the AST and:

1.  **Symbol Table:** Maintains a symbol table that stores information about declared identifiers (variables, functions, types), including their types.
2.  **Type Inference/Resolution:** For each expression and statement, it determines the types of all sub-expressions.
3.  **Rule Enforcement:** It checks if the determined types adhere to the predefined type checking rules (assignment, operator, function call, etc.).
4.  **Error Reporting:** If a violation is found, it reports a type error message with the location in the source code.

**Example of Compilation Error:**

Consider this TinyAda code:

```ada
PROGRAM SimpleExample IS
    Num1 : Integer := 10;
    Flag : Boolean := TRUE;
BEGIN
    IF Num1 THEN -- Line 5
        -- ...
    END IF;
END SimpleExample;
```

The TinyAda compiler would process this as follows:

1.  **AST Construction:** Parses the code into an AST.
2.  **Semantic Analysis:**
    *   `Num1` is identified as an `Integer`.
    *   `Flag` is identified as a `Boolean`.
    *   When analyzing the `IF` statement on Line 5, the compiler sees `IF Num1 THEN`.
    *   It checks the type of `Num1`. It's `Integer`.
    *   It checks the type required by the `IF` condition. It requires `Boolean`.
    *   **Type Mismatch Detected:** An `Integer` cannot be used where a `Boolean` is expected.
3.  **Error Message:** The compiler would likely produce an error similar to:
    `Error: Type mismatch. Expected Boolean, found Integer at line 5.`

---

### 4. Key Concepts and Definitions Recap

*   **Type:** A classification of data that defines the values it can hold and the operations that can be performed on it.
*   **Type System:** The set of rules that govern how types are defined, manipulated, and checked in a programming language.
*   **Static Type Checking:** Type checking performed at compile-time.
*   **Dynamic Type Checking:** Type checking performed at run-time.
*   **Type Error:** A violation of the type checking rules, indicating that an operation is being applied to an inappropriate type.
*   **Abstract Syntax Tree (AST):** A tree representation of the abstract syntactic structure of source code.
*   **Symbol Table:** A data structure used by compilers and interpreters to store information about identifiers (e.g., variables, functions, types) encountered during parsing and semantic analysis.

---

### 5. Practice Questions and Exercises

**Question 1:**
Which of the following is a primary advantage of static type checking?
a) Greater flexibility during runtime.
b) Faster development cycles for simple scripts.
c) Detection of type errors at compile-time.
d) Reduced need for explicit type declarations.

**Question 2:**
In TinyAda, what type of error would occur if you tried to assign a `String` value to an `Integer` variable?

**Question 3:**
Consider the following TinyAda code snippet. Identify any potential type errors and explain why they are errors.

```ada
PROGRAM TypeCheckTest IS
    Count : Integer := 0;
    Message : String := "Processing...";
    IsValid : Boolean := TRUE;
BEGIN
    Count := Count + 1; -- (A)
    IF Message THEN   -- (B)
        IsValid := FALSE;
    END IF;
    Count := Count * 5; -- (C)
    IF IsValid AND Count > 10 THEN -- (D)
        -- ...
    END IF;
END TypeCheckTest;
```

**Question 4:**
Describe the role of the symbol table in the type checking process of a compiler like the one for TinyAda.

---

### 6. Answers to Practice Questions

**Answer 1:**
The correct answer is **c) Detection of type errors at compile-time.**
*   a) is an advantage of dynamic typing.
*   b) is often an advantage of dynamic typing.
*   d) is generally not true; static typing often requires *more* explicit declarations or sophisticated type inference.

**Answer 2:**
This would result in a **Type Mismatch Error**. The `String` type is not compatible with the `Integer` type for assignment.

**Answer 3:**
Let's analyze each marked line:

*   **(A) `Count := Count + 1;`**: This is **correct**. `Count` is an `Integer`, and `+` with `1` (an `Integer` literal) is a valid operation for `Integer` types in TinyAda.
*   **(B) `IF Message THEN`**: This is a **Type Error**. The `IF` statement in TinyAda expects a `Boolean` expression. `Message` is a `String`. You cannot use a `String` directly as a condition.
*   **(C) `Count := Count * 5;`**: This is **correct**. `Count` is `Integer`, and `5` is an `Integer` literal. Multiplication is a valid operation for `Integer` types.
*   **(D) `IF IsValid AND Count > 10 THEN`**: This is **correct**.
    *   `IsValid` is `Boolean`.
    *   `Count > 10` compares an `Integer` (`Count`) with an `Integer` literal (`10`), resulting in a `Boolean` value.
    *   The `AND` operator takes two `Boolean` operands, which are provided correctly by `IsValid` and the result of `Count > 10`.

**Summary of Errors:** The primary type error is on line (B).

**Answer 4:**
The symbol table is crucial for static type checking because it acts as a **repository of information about the identifiers** (variables, functions, types, etc.) declared in the program. During semantic analysis, when the compiler encounters an identifier, it looks it up in the symbol table. This lookup reveals the identifier's associated type. This type information is then used to verify the correctness of operations, assignments, and calls involving that identifier, ensuring they conform to TinyAda's type rules. Without the symbol table, the compiler would not know the types of variables and thus could not perform type checking.

---

### 8. Important Points to Remember

*   **Type checking is fundamental to ensuring program safety and correctness.**
*   **Static typing catches errors *before* runtime, which is generally preferred for larger, more critical applications.**
*   **Dynamic typing offers flexibility but defers error detection to runtime, potentially leading to unexpected program failures.**
*   **TinyAda's type system enforces rules for assignment, operators, and function/procedure calls.**
*   **Compilers use techniques like AST traversal and symbol tables to implement static type checking.**
*   **Understanding type checking is key to understanding how programming languages manage data and prevent errors.**
