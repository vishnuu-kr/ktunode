---
title: "Case Study: Computing the Values of Static Expressions in TinyAda."
subject: "PROGRAMMING LANGUAGES"
module: "Module 3: Expressions and Statements "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c698"
status: "completed"
scrapedAt: "2026-05-20T17:09:38.714Z"
---
# Programming Languages: Module 3 - Expressions and Statements

## Topic: Case Study: Computing the Values of Static Expressions in TinyAda

### Learning Outcomes:

*   Understand the concept of static expressions and their evaluation.
*   Identify the types of expressions that can be evaluated statically in TinyAda.
*   Learn how TinyAda's compiler evaluates these static expressions.
*   Recognize the benefits and limitations of static expression evaluation.
*   Be able to apply the rules of static expression evaluation to TinyAda code.

---

### 1. Introduction to Static Expressions

#### 1.1 What are Expressions?

*   **Definition:** An expression is a combination of **variables**, **constants**, **operators**, and **function calls** that evaluates to a single value.
*   In programming, expressions form the core of computations and data manipulation.
*   **Examples:**
    *   `a + b` (arithmetic expression)
    *   `x > 5` (relational expression)
    *   `flag AND (counter < 10)` (logical expression)

#### 1.2 What are Static Expressions?

*   **Definition:** A static expression is an expression whose value can be *fully determined at compile time*.
*   This means the compiler can calculate the result of the expression without needing to execute the program at runtime.
*   **Key Characteristics:**
    *   Composed solely of constants, literals, and operators.
    *   May involve calls to functions that are guaranteed to return a constant value at compile time (e.g., built-in functions like `MAX`, `MIN`).
    *   Cannot involve variables whose values are not known at compile time, or runtime operations.

#### 1.3 The "TinyAda" Context

*   **TinyAda:** A simplified subset of the Ada programming language designed for educational purposes.
*   **Purpose of Static Expression Evaluation in TinyAda:**
    *   **Efficiency:** Pre-computing values at compile time reduces runtime overhead.
    *   **Compile-time Checks:** Allows the compiler to perform checks and detect potential errors early.
    *   **Optimization:** Enables compiler optimizations such as constant folding.

---

### 2. Static Expressions in TinyAda

TinyAda, being a subset of Ada, supports static expressions in specific contexts. The primary areas where static expressions are encountered and evaluated are:

#### 2.1 Literals and Constants

*   **Literals:** Fixed values directly written in the code (e.g., `10`, `3.14`, `'A'`, `"Hello"`).
*   **Constants:** Variables declared with the `constant` keyword. Their values must be initialized with a static expression and cannot be changed.

    ```tinyada
    -- Example of constants in TinyAda
    MAX_ITERATIONS : constant Integer := 100;
    PI             : constant Float := 3.14159;
    INITIAL_FLAG   : constant Boolean := TRUE;
    ```

#### 2.2 Operators

TinyAda supports standard arithmetic, relational, and logical operators. These operators can be used within static expressions if all operands are compile-time known.

*   **Arithmetic Operators:** `+`, `-`, `*`, `/` (integer division), `rem` (remainder), `mod` (modulo).
*   **Relational Operators:** `=`, `/=`, `<`, `<=`, `>`, `>=`.
*   **Logical Operators:** `AND`, `OR`, `NOT`.

#### 2.3 Allowed Operations in Static Expressions

The following operations are generally permitted within TinyAda's static expressions:

*   **Basic Arithmetic Operations:** Addition, subtraction, multiplication, division (integer), remainder, modulo.
*   **Boolean Operations:** Logical AND, OR, NOT.
*   **Comparison Operations:** Equality, inequality, less than, less than or equal to, greater than, greater than or equal to.
*   **Type Conversions:** If the source and target types are known at compile time and the conversion is valid.
*   **Attribute References:** References to predefined attributes that are known at compile time (e.g., `Integer'First`, `Boolean'False`).
*   **Array Indexing:** If the index expression is itself a static expression and the array is defined with static bounds.
*   **Record Component Selection:** Accessing fields of records that are themselves static.

#### 2.4 What is NOT allowed in Static Expressions?

*   **Variables:** Unless their values are definitively known and fixed at compile time (which is essentially treating them as constants).
*   **Runtime Function Calls:** Functions whose return value depends on runtime conditions or inputs.
*   **Input/Output Operations:** Any operation that interacts with the external environment.
*   **Exceptions:** Raising or handling exceptions.
*   **Uninitialized Variables:** Attempting to use a variable whose value is not yet assigned.

---

### 3. Compiler Evaluation of Static Expressions

The TinyAda compiler plays a crucial role in identifying and evaluating static expressions. This process is also known as **constant folding**.

#### 3.1 The Process

1.  **Identification:** The compiler parses the TinyAda code and identifies constructs that *could* be static expressions. This includes literals, constants, operators, and attribute references.
2.  **Operand Evaluation:** For each operator encountered, the compiler attempts to evaluate its operands.
    *   If an operand is a literal, its value is directly used.
    *   If an operand is a constant, the compiler retrieves its pre-defined value.
    *   If an operand is another static expression, it is recursively evaluated.
3.  **Operation Execution:** Once all operands are determined to be compile-time known values, the compiler performs the operation specified by the operator.
4.  **Result Storage:** The computed value of the static expression is then stored. This might involve:
    *   Replacing the expression directly with its computed value in the intermediate code.
    *   Associating the computed value with a constant declaration.

#### 3.2 Example: Constant Folding

Consider the following TinyAda code:

```tinyada
with Text_IO; use Text_IO;

procedure Static_Eval_Example is
   A : constant Integer := 10;
   B : constant Integer := 5;
   C : Integer := A + B * 2; -- This is a static expression
begin
   Put_Line("Result of C: ");
   -- Put_Line(Integer'Image(C)); -- Assume C will be printed later
end Static_Eval_Example;
```

**Compiler's Action:**

1.  The compiler sees `C : Integer := A + B * 2;`.
2.  It identifies `A` and `B` as constants with known values `10` and `5` respectively.
3.  It sees the expression `A + B * 2`.
4.  It evaluates `B * 2`: `5 * 2 = 10`.
5.  It evaluates `A + 10`: `10 + 10 = 20`.
6.  The compiler effectively computes `C`'s value as `20` at compile time. The generated code might effectively be `C := 20;`.

#### 3.3 Error Detection

Static expression evaluation allows the compiler to catch errors that would otherwise only appear at runtime.

*   **Division by Zero:**
    ```tinyada
    MAX_VAL : constant Integer := 10;
    ZERO    : constant Integer := 0;
    RESULT  : Integer := MAX_VAL / ZERO; -- Compile-time error!
    ```
    The compiler will detect `ZERO` is `0` and flag this as a division by zero error *before* the program runs.
*   **Invalid Operations:**
    ```tinyada
    VAL1 : constant Integer := 5;
    VAL2 : constant Float := 2.0;
    -- MIXED_OP : Float := VAL1 + VAL2; -- May be a compile-time error depending on strictness
    ```
    (Note: TinyAda's type system would likely enforce stricter rules, but conceptually, incompatible types in static operations can be caught.)

---

### 4. Benefits and Limitations of Static Expression Evaluation

#### 4.1 Benefits

*   **Performance Improvement:**
    *   Reduces the amount of computation that needs to be performed when the program is running.
    *   Enables optimizations like constant propagation (replacing uses of a constant with its value) and dead code elimination (removing code that is never executed based on static conditions).
*   **Early Error Detection:**
    *   Catches certain types of errors (like division by zero, out-of-bounds array access if bounds are static) during compilation, saving debugging time.
*   **Code Readability and Maintainability:**
    *   Using named constants makes code clearer and easier to modify. Changes to a constant's value only need to be made in one place.
*   **Resource Management:**
    *   Can be used to determine sizes of data structures or memory allocations at compile time, which can be more efficient.

#### 4.2 Limitations

*   **Limited Scope:** Only expressions whose values are *entirely* determined by constants and compile-time known operations can be evaluated statically.
*   **Not for Dynamic Behavior:** Cannot handle computations that depend on user input, random numbers, or runtime conditions.
*   **Complexity for the Compiler:** While beneficial, implementing static evaluation requires the compiler to have a sophisticated understanding of the language's semantics and to perform a significant amount of analysis.
*   **Potential for "Magic Numbers":** Over-reliance on literals in static expressions without using constants can lead to less readable code. It's best practice to use `constant` declarations for any meaningful literal.

---

### 5. Practice Questions and Exercises

**Instructions:** For each question, determine if the expression is static and, if so, what its computed value would be.

**Question 1:**

```tinyada
-- In TinyAda
Procedure Test_Static is
   X : constant Integer := 50;
   Y : constant Integer := 10;
   Z : Integer := (X / 5) - Y;
begin
   -- ...
end Test_Static;
```
Is `Z` initialized with a static expression? If yes, what is its value?

**Question 2:**

```tinyada
-- In TinyAda
Procedure Another_Test is
   Input_Value : Integer := Get_User_Input(); -- Assume Get_User_Input is a placeholder for runtime input
   MAX_LIMIT : constant Integer := 100;
   Result    : Boolean := (Input_Value > MAX_LIMIT);
begin
   -- ...
end Another_Test;
```
Is `Result` initialized with a static expression? Explain why or why not.

**Question 3:**

```tinyada
-- In TinyAda
Procedure Boolean_Ops is
   Flag1 : constant Boolean := TRUE;
   Flag2 : constant Boolean := FALSE;
   Status : Boolean := Flag1 AND (NOT Flag2) OR Flag1;
begin
   -- ...
end Boolean_Ops;
```
Is `Status` initialized with a static expression? If yes, what is its value?

**Question 4:**

```tinyada
-- In TinyAda
Procedure Array_Index is
   type My_Array is array (1 .. 5) of Integer;
   Data : My_Array := (10, 20, 30, 40, 50);
   Idx  : constant Integer := 3;
   Value: Integer := Data(Idx + 1); -- Assuming '+' is the only operator
begin
   -- ...
end Array_Index;
```
Is the initialization of `Value` a static expression? If yes, what is its value?

---

### 6. Answers to Practice Questions

**Answer 1:**

Yes, `Z` is initialized with a static expression.
*   `X` is `50`.
*   `Y` is `10`.
*   The expression is `(X / 5) - Y`.
*   Evaluation:
    *   `X / 5` becomes `50 / 5 = 10`.
    *   `(10) - Y` becomes `10 - 10 = 0`.
*   **Value of Z: `0`**

**Answer 2:**

No, `Result` is not initialized with a static expression.
*   The value of `Input_Value` depends on the outcome of `Get_User_Input()`, which is a runtime operation.
*   Since one of the operands (`Input_Value`) is not known at compile time, the entire expression `(Input_Value > MAX_LIMIT)` cannot be evaluated statically.

**Answer 3:**

Yes, `Status` is initialized with a static expression.
*   `Flag1` is `TRUE`.
*   `Flag2` is `FALSE`.
*   The expression is `Flag1 AND (NOT Flag2) OR Flag1`.
*   Evaluation:
    *   `NOT Flag2` becomes `NOT FALSE`, which is `TRUE`.
    *   `Flag1 AND (TRUE)` becomes `TRUE AND TRUE`, which is `TRUE`.
    *   `(TRUE) OR Flag1` becomes `TRUE OR TRUE`, which is `TRUE`.
*   **Value of Status: `TRUE`**

**Answer 4:**

Yes, the initialization of `Value` is a static expression.
*   `Idx` is `3`.
*   The index expression is `Idx + 1`.
*   Evaluation:
    *   `Idx + 1` becomes `3 + 1 = 4`.
*   The compiler knows that `Data` is an array indexed from 1 to 5. It can then determine the value at index `4`. Assuming `Data` is defined as shown and initialized in order, `Data(4)` would be `40`.
*   **Value of Value: `40`**

---

### 7. Important Points to Remember

*   **Compile-Time vs. Run-Time:** The core distinction of static expressions is that their values are determined *during compilation*, not when the program is executing.
*   **Constants are Key:** The `constant` keyword is fundamental for creating values that can be used in static expressions.
*   **Predictability:** Static expressions must be predictable and independent of any runtime variables or operations.
*   **Compiler's Role:** The TinyAda compiler is responsible for identifying, evaluating, and often optimizing static expressions through techniques like constant folding.
*   **Error Prevention:** Static evaluation is a powerful mechanism for the compiler to catch potential runtime errors early in the development cycle.
*   **Efficiency Boost:** By pre-computing values, static expressions contribute directly to more efficient and faster-executing programs.

---
This concludes the study notes for the case study on computing static expression values in TinyAda. Remember to practice applying these concepts to various code snippets to solidify your understanding.
