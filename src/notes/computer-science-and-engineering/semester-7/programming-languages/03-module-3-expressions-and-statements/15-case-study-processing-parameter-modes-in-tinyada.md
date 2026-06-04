---
title: "Case Study: Processing Parameter Modes in TinyAda."
subject: "PROGRAMMING LANGUAGES"
module: "Module 3: Expressions and Statements "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c6a1"
status: "completed"
scrapedAt: "2026-05-20T17:09:45.282Z"
---
# Programming Languages: Module 3 - Expressions and Statements

## Topic: Case Study: Processing Parameter Modes in TinyAda

This case study explores how parameter modes are processed in TinyAda, a simplified subset of Ada. Understanding parameter modes is crucial for writing correct and efficient code, especially when dealing with function and procedure calls.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the different parameter modes in TinyAda (IN, OUT, IN/OUT).**
*   **Explain how each parameter mode affects the flow of data between caller and callee.**
*   **Analyze the implications of parameter modes on variable aliasing and side effects.**
*   **Trace the execution of TinyAda programs involving procedures with different parameter modes.**
*   **Identify potential issues or bugs related to incorrect parameter mode usage.**

---

### 1. Key Concepts and Definitions

#### 1.1 Parameter Modes in TinyAda

TinyAda, like Ada, supports different ways a parameter can be passed to a subprogram (procedure or function). These are called **parameter modes**. They define the direction and nature of data transfer between the caller (the part of the program that calls the subprogram) and the callee (the subprogram itself).

The primary parameter modes in TinyAda are:

*   **IN:** The parameter is read-only within the subprogram. The caller provides an initial value to the parameter. Any changes made to the parameter inside the subprogram are **not** reflected in the caller's variable. This is the default mode if none is specified.

    *   **Analogy:** Like giving someone a printed document to read. They can read it, but they can't change the original document you gave them.

*   **OUT:** The parameter is write-only within the subprogram. The subprogram can assign a value to this parameter, and this value is then returned to the caller. The initial value of an OUT parameter in the caller is irrelevant and undefined within the subprogram.

    *   **Analogy:** Like giving someone an empty box to fill. They can put things *in* the box, and you'll receive the filled box. What was in the box initially doesn't matter to them.

*   **IN/OUT:** The parameter is both read and write within the subprogram. The caller provides an initial value, and the subprogram can read this value and also modify it. The modified value is then returned to the caller.

    *   **Analogy:** Like giving someone a whiteboard and a marker. They can read what's already written, erase it, and write new things. You'll see the updated content on the whiteboard.

#### 1.2 Subprograms in TinyAda

*   **Procedures:** Perform actions and can modify parameters using OUT or IN/OUT modes. They do not return a value directly (though they can "return" values via OUT parameters).
*   **Functions:** Primarily used for computation and return a single value of a specific type. They typically only use IN parameters, as modifying caller variables directly via functions is generally discouraged for clarity and predictability.

#### 1.3 Data Transfer Mechanism (Simplified for TinyAda)

TinyAda, for simplicity, often uses a **pass-by-copy** or **pass-by-reference** mechanism depending on the context and implementation. However, conceptually, the parameter modes define the *behavior* and the *intent* of the data flow:

*   **IN:** A copy of the caller's variable's value is made and passed to the subprogram. The subprogram works on this copy.
*   **OUT:** The subprogram's variable (which is effectively a new location) is assigned a value. When the subprogram finishes, this value is copied back to the caller's variable.
*   **IN/OUT:** A copy of the caller's variable's value is made. The subprogram can read this copy and modify it. When the subprogram finishes, the modified copy's value is copied back to the caller's variable.

**Important Note:** In a more complex language like full Ada, the mechanism can be more nuanced (e.g., pass-by-reference for larger data types to avoid performance overhead). For TinyAda, focus on the *semantic* meaning of the modes.

---

### 2. Processing Parameter Modes - Step-by-Step

Let's consider a procedure `Swap` that swaps the values of two variables.

```tinyada
-- Example TinyAda Procedure
PROCEDURE Swap (X : IN OUT INTEGER; Y : IN OUT INTEGER) IS
BEGIN
  -- Swap logic
  DECLARE
    Temp : INTEGER := X;
  BEGIN
    X := Y;
    Y := Temp;
  END;
END Swap;

-- Example Caller
DECLARE
  A : INTEGER := 10;
  B : INTEGER := 20;
BEGIN
  PUT_LINE("Before Swap: A = " & INTEGER_TO_STRING(A) & ", B = " & INTEGER_TO_STRING(B));
  Swap(A, B); -- Call the Swap procedure
  PUT_LINE("After Swap: A = " & INTEGER_TO_STRING(A) & ", B = " & INTEGER_TO_STRING(B));
END;
```

**Execution Trace of `Swap(A, B)`:**

1.  **Call:** The `Swap` procedure is called with `A` and `B`.
2.  **Parameter Binding:**
    *   `X` (parameter of `Swap`) is bound to `A`. Since `X` is `IN OUT`, a reference or copy of `A`'s current value (10) is effectively made available to `X`.
    *   `Y` (parameter of `Swap`) is bound to `B`. Since `Y` is `IN OUT`, a reference or copy of `B`'s current value (20) is effectively made available to `Y`.
3.  **Inside `Swap`:**
    *   `Temp` is declared and initialized with the value of `X` (which is effectively `A`'s value, 10). So, `Temp = 10`.
    *   `X` is assigned the value of `Y` (which is effectively `B`'s value, 20). So, `X` becomes 20. Since `X` is `IN OUT`, this change is *intended* to be reflected back to `A`.
    *   `Y` is assigned the value of `Temp` (which is 10). So, `Y` becomes 10. Since `Y` is `IN OUT`, this change is *intended* to be reflected back to `B`.
4.  **Return from `Swap`:**
    *   The modified value of `X` (20) is copied back to `A`.
    *   The modified value of `Y` (10) is copied back to `B`.
5.  **Caller Continues:** The `PUT_LINE` statement in the caller now prints `A = 20, B = 10`.

**Other Scenarios:**

*   **Using `IN` parameter:**

    ```tinyada
    PROCEDURE PrintValue (Val : IN INTEGER) IS
    BEGIN
      PUT_LINE("The value is: " & INTEGER_TO_STRING(Val));
      Val := Val + 5; -- This would be a compile-time error in TinyAda/Ada!
    END PrintValue;

    DECLARE
      MyVar : INTEGER := 15;
    BEGIN
      PrintValue(MyVar);
      PUT_LINE("MyVar after PrintValue: " & INTEGER_TO_STRING(MyVar)); -- Prints 15
    END;
    ```
    *   **Explanation:** `Val` receives a copy of `MyVar` (15). Attempting to modify `Val` inside `PrintValue` would be an error because `IN` parameters are read-only. `MyVar` remains unchanged.

*   **Using `OUT` parameter:**

    ```tinyada
    PROCEDURE CalculateArea (Length : IN FLOAT; Width : IN FLOAT; OUT Area : FLOAT) IS
    BEGIN
      Area := Length * Width;
      -- Length := Length + 10; -- OK, Length is IN
      -- Width := Width + 10;  -- OK, Width is IN
    END CalculateArea;

    DECLARE
      L : FLOAT := 5.0;
      W : FLOAT := 4.0;
      ResultArea : FLOAT; -- Initial value doesn't matter for OUT
    BEGIN
      CalculateArea(L, W, ResultArea);
      PUT_LINE("Area is: " & FLOAT_TO_STRING(ResultArea)); -- Prints 20.0
      -- L and W remain unchanged unless they were IN OUT
    END;
    ```
    *   **Explanation:** `Length` and `Width` are read. `Area` is assigned a value (`L * W`). When `CalculateArea` finishes, the value assigned to `Area` is copied back to `ResultArea`. `L` and `W` are not modified.

---

### 3. Implications of Parameter Modes

#### 3.1 Variable Aliasing

Variable aliasing occurs when two or more different names (variables) refer to the same memory location. This can happen with `IN OUT` and `IN` parameters if the same variable is passed twice to a subprogram that modifies the parameter.

**Example:**

```tinyada
PROCEDURE Modify (X : IN OUT INTEGER; Y : IN OUT INTEGER) IS
BEGIN
  X := X + 1;
  Y := Y + 2;
END Modify;

DECLARE
  Val : INTEGER := 5;
BEGIN
  -- Calling Modify with the same variable for both parameters
  Modify(Val, Val); -- Val is aliased in the call to Modify
  PUT_LINE("Final Val: " & INTEGER_TO_STRING(Val));
END;
```

**Execution Trace:**

1.  **Call:** `Modify(Val, Val)`
2.  **Parameter Binding:**
    *   `X` refers to `Val`.
    *   `Y` also refers to `Val`.
3.  **Inside `Modify`:**
    *   `X := X + 1;`  => `Val := Val + 1;`  (`Val` becomes 6)
    *   `Y := Y + 2;`  => `Val := Val + 2;`  (`Val` becomes 6 + 2 = 8)
4.  **Return:** The value of `Val` is 8.

**Issue:** The order of operations in the callee matters significantly when aliasing occurs. If the lines were swapped, the result would be different:

```tinyada
PROCEDURE Modify (X : IN OUT INTEGER; Y : IN OUT INTEGER) IS
BEGIN
  Y := Y + 2; -- Val becomes 5 + 2 = 7
  X := X + 1; -- Val becomes 7 + 1 = 8
END Modify;
```
In this specific case, the result is the same. However, consider:

```tinyada
PROCEDURE ComplexModify (A : IN OUT INTEGER; B : IN OUT INTEGER) IS
  C : INTEGER := A;
BEGIN
  A := B + 1; -- A gets B's value + 1
  B := C + 2; -- B gets original A's value + 2
END ComplexModify;

DECLARE
  Val : INTEGER := 5;
BEGIN
  ComplexModify(Val, Val); -- Val is aliased
  PUT_LINE("Final Val: " & INTEGER_TO_STRING(Val));
END;
```
**Trace:**
1.  `C := A;` => `C := Val;` (`C = 5`)
2.  `A := B + 1;` => `Val := Val + 1;` (`Val` becomes 6)
3.  `B := C + 2;` => `Val := C + 2;` (`Val` becomes 5 + 2 = 7)
**Result: Val is 7**

**Best Practice:** Avoid aliasing by passing distinct variables to subprograms whenever possible, especially when using `IN OUT` or `OUT` parameters.

#### 3.2 Side Effects

A **side effect** occurs when a subprogram modifies a variable or state outside its local scope (i.e., it changes something in the caller's environment). Parameter modes are the primary mechanism for intentional side effects in TinyAda.

*   **Good Side Effects:** Using `OUT` or `IN OUT` parameters to return computed values or update caller data is a deliberate and often necessary side effect. For example, the `Swap` procedure has the intended side effect of altering the caller's variables.
*   **Bad Side Effects:** Unintended modifications to caller variables. This can happen due to:
    *   Misunderstanding parameter modes (e.g., expecting an `IN` parameter to be read-only but accidentally modifying it in a language that doesn't enforce it strictly).
    *   Aliasing issues.
    *   Global variable modifications (though less common in structured TinyAda examples).

**Importance:** Clear parameter modes (IN, OUT, IN/OUT) help document and manage side effects, making code easier to understand and debug.

---

### 4. Practice Questions and Exercises

**Question 1:**
What is the output of the following TinyAda code snippet?

```tinyada
PROCEDURE Double (Num : IN OUT INTEGER) IS
BEGIN
  Num := Num * 2;
END Double;

DECLARE
  X : INTEGER := 7;
  Y : INTEGER := 3;
BEGIN
  Double(X);
  Double(Y);
  PUT_LINE("X=" & INTEGER_TO_STRING(X) & ", Y=" & INTEGER_TO_STRING(Y));
END;
```

**Answer 1:**
The procedure `Double` takes an `IN OUT` parameter `Num`. When `Double(X)` is called, `X` (which is 7) is passed. Inside `Double`, `Num` becomes `7 * 2 = 14`. This modified value is copied back to `X`. So, `X` becomes 14.
When `Double(Y)` is called, `Y` (which is 3) is passed. Inside `Double`, `Num` becomes `3 * 2 = 6`. This modified value is copied back to `Y`. So, `Y` becomes 6.
The final output will be: `X=14, Y=6`

**Question 2:**
Consider the following procedure and its call. What will be printed?

```tinyada
PROCEDURE Update (InputVal : IN INTEGER; OutputVal : OUT INTEGER) IS
BEGIN
  OutputVal := InputVal + 5;
  -- InputVal := InputVal - 2; -- This line would cause a compile error
END Update;

DECLARE
  Value1 : INTEGER := 10;
  Value2 : INTEGER := 0; -- Initial value is not used by OUT parameter
BEGIN
  Update(Value1, Value2);
  PUT_LINE("Result: " & INTEGER_TO_STRING(Value2));
END;
```

**Answer 2:**
The procedure `Update` takes `InputVal` as `IN` and `OutputVal` as `OUT`.
When `Update(Value1, Value2)` is called:
*   `InputVal` receives a copy of `Value1`'s value, which is 10. `InputVal` is read-only.
*   `OutputVal` is designated to receive a value.
Inside `Update`, `OutputVal := InputVal + 5;` becomes `OutputVal := 10 + 5;`, so `OutputVal` is assigned 15.
When the procedure returns, the value of `OutputVal` (15) is copied back to `Value2`. `Value1` remains unchanged (10).
The output will be: `Result: 15`

**Question 3:**
Explain the potential danger of calling `Swap(Val, Val)` where `Swap` is defined as:
```tinyada
PROCEDURE Swap (X : IN OUT INTEGER; Y : IN OUT INTEGER) IS
BEGIN
  X := X + 1;
  Y := Y - 1;
END Swap;
```
What is the final value of `Val` if its initial value is 10?

**Answer 3:**
The danger is **variable aliasing**. When `Swap(Val, Val)` is called, both parameter `X` and parameter `Y` refer to the same memory location, `Val`.

Execution Trace with `Val = 10`:
1.  `X := X + 1;`  => `Val := Val + 1;`  (`Val` becomes 10 + 1 = 11).
2.  `Y := Y - 1;`  => `Val := Val - 1;`  (`Val` becomes 11 - 1 = 10).

The final value of `Val` will be 10. This might not be the intuitively expected result if one didn't consider the order of operations and aliasing. If the order was reversed:

```tinyada
PROCEDURE Swap (X : IN OUT INTEGER; Y : IN OUT INTEGER) IS
BEGIN
  Y := Y - 1; -- Val becomes 10 - 1 = 9
  X := X + 1; -- Val becomes 9 + 1 = 10
END Swap;
```
The result remains 10 in this specific case, but for more complex operations, the order and the impact of aliasing can lead to unexpected results. The core danger is that the outcome depends on the exact sequence of operations within the called procedure, which can be hard to reason about when variables are aliased.

---

### 5. Important Points to Remember

*   **Parameter modes control data flow:** `IN` (read-only), `OUT` (write-only), `IN OUT` (read/write).
*   **`IN` is the default:** If no mode is specified, `IN` is assumed.
*   **`IN` parameters prevent modifications:** Any changes to an `IN` parameter inside a subprogram are local to the subprogram and do not affect the caller's variable.
*   **`OUT` parameters return values:** The initial value of an `OUT` parameter in the caller is ignored. The subprogram must assign a value to it, which is then passed back to the caller.
*   **`IN OUT` parameters allow two-way communication:** The subprogram can read the initial value and also modify it, with changes reflected back to the caller.
*   **Aliasing:** Be cautious when passing the same variable to multiple `IN OUT` or `OUT` parameters. The behavior can become complex and dependent on the order of operations within the subprogram.
*   **Side Effects:** Parameter modes are the primary way to manage intentional side effects (modifying caller's data). Understanding parameter modes helps in managing and debugging unintended side effects.
*   **Clarity:** Use parameter modes to clearly express the intent of how data is passed into and out of subprograms. This improves code readability and maintainability.

---
