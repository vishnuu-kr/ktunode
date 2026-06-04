---
title: "Case Study: Initial Static Semantic Analysis of TinyAda."
subject: "PROGRAMMING LANGUAGES"
module: "Module 2: Basic Semantics"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c687"
status: "completed"
scrapedAt: "2026-05-20T17:09:27.347Z"
---
# PROGRAMMING LANGUAGES: Module 2: Basic Semantics

## Topic: Case Study: Initial Static Semantic Analysis of TinyAda

### Learning Outcomes:

This case study aims to equip you with the ability to:

*   Understand the purpose and process of static semantic analysis.
*   Identify and analyze common static semantic errors in a simplified language like TinyAda.
*   Apply type checking rules to ensure program correctness.
*   Recognize the role of symbol tables in static semantic analysis.
*   Trace the flow of information during the analysis of a TinyAda program.

---

### 1. Introduction to Static Semantic Analysis

#### 1.1 What is Static Semantic Analysis?

*   **Definition:** Static semantic analysis is the phase of compilation that checks for "meaning" errors in a program that are not caught by syntactic analysis (parsing). It ensures that a program adheres to the language's semantic rules, which dictate how valid programs should behave.
*   **When it happens:** It typically occurs after parsing (syntax analysis) and before code generation.
*   **Goal:** To detect and report errors *before* the program is executed, preventing runtime failures due to semantic inconsistencies.
*   **Contrast with Dynamic Semantics:**
    *   **Static Semantics:** Checked *before* execution (e.g., by the compiler).
    *   **Dynamic Semantics:** Concerned with the *meaning and execution* of a program. Errors here manifest during runtime (e.g., division by zero).

#### 1.2 Why is Static Semantic Analysis Important?

*   **Early Error Detection:** Catches bugs early in the development cycle, saving time and effort.
*   **Program Correctness:** Ensures that programs are logically sound and adhere to language specifications.
*   **Compiler Efficiency:** By catching errors early, it prevents the compiler from attempting to generate code for invalid programs.
*   **Language Design:** Helps in designing languages with clear and consistent semantic rules.

---

### 2. TinyAda: A Simplified Language

TinyAda is a hypothetical, minimalistic programming language designed for educational purposes to illustrate compiler concepts. Its features are deliberately limited to focus on core semantic analysis principles.

#### 2.1 Key Features of TinyAda (for this case study)

*   **Variable Declarations:** Variables must be declared before use and have a specific type.
*   **Data Types:** Limited to `INTEGER` and `BOOLEAN`.
*   **Assignments:** Variables can be assigned values of compatible types.
*   **Arithmetic Operations:** Supported for `INTEGER` types (e.g., `+`, `-`, `*`, `/`).
*   **Relational Operations:** Supported for `INTEGER` types (e.g., `<`, `>`, `<=`, `>=`).
*   **Logical Operations:** Supported for `BOOLEAN` types (e.g., `AND`, `OR`, `NOT`).
*   **Conditional Statements:** `IF THEN ELSE` structure.
*   **Procedures:** Simple procedures without parameters (for this initial analysis).

#### 2.2 Example TinyAda Program Snippet

```tinyada
PROGRAM SampleProgram;

VAR
  count : INTEGER;
  is_valid : BOOLEAN;

BEGIN
  count := 10;
  is_valid := TRUE;

  IF count > 5 THEN
    count := count + 2;
    is_valid := FALSE;
  ELSE
    count := count - 1;
  END IF;

  -- Another assignment example
  -- count := is_valid; -- This would be a semantic error
END PROGRAM SampleProgram.
```

---

### 3. The Role of Symbol Tables

#### 3.1 What is a Symbol Table?

*   **Definition:** A symbol table is a data structure used by a compiler to store information about identifiers (names) encountered in the source program.
*   **Information Stored:** For each identifier, it typically stores:
    *   **Name:** The identifier itself (e.g., `count`, `is_valid`).
    *   **Type:** The data type of the identifier (e.g., `INTEGER`, `BOOLEAN`).
    *   **Scope:** Where the identifier is valid and accessible (e.g., global, local to a procedure).
    *   **Kind:** What the identifier represents (e.g., variable, procedure, type).
    *   **Other attributes:** Such as memory location, size, etc.

#### 3.2 How Symbol Tables are Used in Static Semantic Analysis

*   **Declaration Checking:** Verifies that identifiers are declared before they are used.
*   **Type Checking:** Enables the compiler to look up the types of variables involved in operations and assignments to ensure compatibility.
*   **Scope Management:** Helps in resolving identifier references by checking their scope.
*   **Semantic Error Detection:** Many semantic errors are detected by querying and manipulating the symbol table.

#### 3.3 Example of Symbol Table Entries for TinyAda Snippet

When the compiler processes the `VAR` section:

| Identifier | Type    | Scope  | Kind    |
| :--------- | :------ | :----- | :------ |
| `count`    | `INTEGER` | Global | Variable |
| `is_valid` | `BOOLEAN` | Global | Variable |

---

### 4. Key Static Semantic Checks in TinyAda

#### 4.1 Type Checking

*   **Purpose:** To ensure that operations and assignments are performed on operands of compatible types.
*   **General Rules:**
    *   Arithmetic operations (`+`, `-`, `*`, `/`) require both operands to be `INTEGER`. The result is `INTEGER`.
    *   Relational operations (`<`, `>`, `<=`, `>=`) require both operands to be `INTEGER`. The result is `BOOLEAN`.
    *   Logical operations (`AND`, `OR`, `NOT`) require operands to be `BOOLEAN`. The result is `BOOLEAN`.
    *   Assignment (`:=`) requires the type of the right-hand side (RHS) to be compatible with the type of the left-hand side (LHS). In TinyAda, this means the types must be identical.

#### 4.2 Declaration Before Use

*   **Rule:** Every identifier used in the program must have been declared in a `VAR` section before its first use.
*   **Checking Process:** When an identifier is encountered, the compiler checks if it exists in the symbol table for the current scope.

#### 4.3 Statement Structure Checks

*   **`IF` Statement:**
    *   The `THEN` keyword must follow the condition.
    *   The `ELSE` keyword (if present) must be followed by a statement list.
    *   The `END IF` statement must properly terminate the `IF` block.
    *   The condition in an `IF` statement must evaluate to a `BOOLEAN`.

#### 4.4 Assignment Compatibility

*   **Rule:** The type of the expression on the RHS of an assignment must match the type of the variable on the LHS.

---

### 5. Performing Static Semantic Analysis on TinyAda Snippet

Let's trace the analysis of the `SampleProgram` snippet:

```tinyada
PROGRAM SampleProgram;

VAR
  count : INTEGER;         -- Symbol table: count (INTEGER, Var)
  is_valid : BOOLEAN;      -- Symbol table: is_valid (BOOLEAN, Var)

BEGIN
  count := 10;             -- Check: RHS (10 - INTEGER literal) compatible with LHS (count - INTEGER). OK.
  is_valid := TRUE;        -- Check: RHS (TRUE - BOOLEAN literal) compatible with LHS (is_valid - BOOLEAN). OK.

  IF count > 5 THEN         -- Check: count (INTEGER), 5 (INTEGER). Relational op '>' requires INTEGER operands. OK.
                           -- Check: result of '>' is BOOLEAN, which is expected for IF condition. OK.
    count := count + 2;    -- Check: LHS (count - INTEGER). RHS (count + 2):
                           --        count (INTEGER), 2 (INTEGER). Arithmetic op '+' requires INTEGER operands. OK.
                           --        Result of '+' is INTEGER. Check: INTEGER RHS compatible with INTEGER LHS. OK.
    is_valid := FALSE;     -- Check: LHS (is_valid - BOOLEAN). RHS (FALSE - BOOLEAN literal). OK.
  ELSE
    count := count - 1;    -- Check: LHS (count - INTEGER). RHS (count - 1):
                           --        count (INTEGER), 1 (INTEGER). Arithmetic op '-' requires INTEGER operands. OK.
                           --        Result of '-' is INTEGER. Check: INTEGER RHS compatible with INTEGER LHS. OK.
  END IF;

  -- Another assignment example
  -- count := is_valid;   -- Semantic Error: Type mismatch. LHS is INTEGER, RHS is BOOLEAN.
END PROGRAM SampleProgram.
```

#### 5.1 Detecting Semantic Errors

**Error Scenario 1: Undeclared Variable**

```tinyada
VAR
  x : INTEGER;
BEGIN
  y := 5; -- Semantic Error: Undeclared identifier 'y'
END PROGRAM ...
```

*   **Analysis:** When `y := 5;` is encountered, the compiler looks up `y` in the symbol table. If `y` is not found, an "Undeclared identifier" error is reported.

**Error Scenario 2: Type Mismatch in Assignment**

```tinyada
VAR
  a : INTEGER;
  b : BOOLEAN;
BEGIN
  a := b; -- Semantic Error: Type mismatch in assignment
END PROGRAM ...
```

*   **Analysis:** When `a := b;` is processed:
    1.  Look up `a` in the symbol table: `a` is `INTEGER`.
    2.  Look up `b` in the symbol table: `b` is `BOOLEAN`.
    3.  Check assignment compatibility: `INTEGER` (LHS) vs. `BOOLEAN` (RHS). They are not compatible. A "Type mismatch" error is reported.

**Error Scenario 3: Type Mismatch in Operation**

```tinyada
VAR
  x : INTEGER;
  y : BOOLEAN;
BEGIN
  x := x + y; -- Semantic Error: Type mismatch in arithmetic operation
END PROGRAM ...
```

*   **Analysis:** When `x := x + y;` is processed:
    1.  Look up `x` in symbol table: `INTEGER`.
    2.  Look up `y` in symbol table: `BOOLEAN`.
    3.  Check operation `x + y`: The `+` operator expects two `INTEGER` operands. `y` is `BOOLEAN`. A "Type mismatch in arithmetic operation" error is reported.

---

### 6. Practice Questions and Exercises

**Question 1:**
Consider the following TinyAda code snippet. Identify all potential static semantic errors and explain the reason for each error.

```tinyada
PROGRAM TestSemantics;

VAR
  score : INTEGER;
  passed : BOOLEAN;
  grade : INTEGER;

BEGIN
  score := 75;
  passed := TRUE;
  grade := score;

  IF score > 80 THEN
    passed := FALSE;
    score := score * 1.5; -- Error 1
  ELSE
    score := score - 10;
  END IF;

  IF passed = 10 THEN -- Error 2
    grade := grade + 5;
  END IF;

  -- Another statement
  -- score := passed; -- Error 3

END PROGRAM TestSemantics.
```

**Question 2:**
For the code snippet in Question 1, what would be the entries in the symbol table after processing the `VAR` section?

---

### 7. Answers to Practice Questions

**Answer 1:**

*   **Error 1: `score := score * 1.5;`**
    *   **Reason:** Type Mismatch in Arithmetic Operation. The `*` operator expects two `INTEGER` operands. `score` is `INTEGER`, but `1.5` is a real literal (or if assumed as a type that TinyAda doesn't support, it would also be a type mismatch). TinyAda as described only supports `INTEGER` and `BOOLEAN`. If TinyAda had a `REAL` type, it would still be a mismatch as `score` is `INTEGER`.

*   **Error 2: `IF passed = 10 THEN`**
    *   **Reason:** Type Mismatch in Relational Operation. The relational operator `=` when used with a variable like `passed` (which is `BOOLEAN`) expects its operands to be of comparable types. `passed` is `BOOLEAN`, but `10` is an `INTEGER` literal. In TinyAda, you cannot compare a `BOOLEAN` directly to an `INTEGER`. The condition for an `IF` statement must evaluate to a `BOOLEAN`.

*   **Error 3: `score := passed;` (Commented out, but would cause an error if uncommented)**
    *   **Reason:** Type Mismatch in Assignment. The left-hand side (`score`) is declared as `INTEGER`, but the right-hand side (`passed`) is `BOOLEAN`. These types are not compatible for assignment in TinyAda.

**Answer 2:**

The entries in the symbol table after processing the `VAR` section would be:

| Identifier | Type    | Scope  | Kind    |
| :--------- | :------ | :----- | :------ |
| `score`    | `INTEGER` | Global | Variable |
| `passed`   | `BOOLEAN` | Global | Variable |
| `grade`    | `INTEGER` | Global | Variable |

---

### 8. Important Points to Remember

*   **Static semantics** deal with the meaning and correctness of a program *before* execution.
*   **Symbol tables** are crucial for tracking identifiers, their types, and scopes.
*   **Type checking** ensures that operations and assignments are performed on compatible data types.
*   Common static semantic errors include **undeclared identifiers**, **type mismatches** in operations and assignments, and incorrect statement structures.
*   The analysis process involves **traversing the parse tree** and **querying the symbol table**.
*   TinyAda, despite its simplicity, demonstrates fundamental semantic analysis concepts applicable to more complex languages.
