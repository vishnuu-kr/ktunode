---
title: "Procedure Calls"
subject: "COMPILER DESIGN"
module: "Module 4: Code generation: Code Shape "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8ba66"
status: "completed"
scrapedAt: "2026-05-20T16:51:26.757Z"
---
# COMPILER DESIGN - MODULE 4: CODE GENERATION - CODE SHAPE - PROCEDURE CALLS

## Introduction

This module focuses on code generation, specifically the *Code Shape* phase.  This section delves into the complexities of generating code for *Procedure Calls*. A key aspect of compiler design is efficiently managing procedure calls, ensuring proper data transfer, stack management, and control flow. Understanding procedure call mechanisms is critical for producing correct and optimized code.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the different components involved in a procedure call (caller and callee).
*   Explain the roles of the call stack and activation records.
*   Describe different parameter passing mechanisms (call-by-value, call-by-reference, call-by-name, call-by-copy-restore).
*   Generate intermediate code for procedure calls, including argument passing, return value handling, and stack frame management.
*   Discuss the trade-offs associated with different calling conventions.
*   Understand how register allocation impacts procedure call performance.

## 1. Components of a Procedure Call

*   **Caller:** The procedure (function, method) that initiates the call.  The caller prepares the arguments, transfers control to the callee, and handles the return value.

*   **Callee:** The procedure being called. The callee receives the arguments, executes its instructions, and returns a value (if any) to the caller.

*   **Interface:** The agreed-upon protocol for transferring data and control between the caller and the callee. This includes:
    *   Parameter Passing mechanism
    *   Calling Convention (e.g., who saves registers, how return address is passed)

## 2. Call Stack and Activation Records

*   **Call Stack (Execution Stack):** A stack data structure used to store information about active procedures during program execution. Each active procedure has an *activation record* on the stack.

*   **Activation Record (Stack Frame):** A block of memory on the call stack allocated for each procedure call. It holds information specific to that instance of the procedure.  Typical components include:

    *   **Return Address:** The address in the caller procedure to return to after the callee finishes execution.  This is crucial for resuming execution in the correct place.
    *   **Arguments:** The actual values passed from the caller to the callee.
    *   **Local Variables:** Variables declared within the procedure.
    *   **Temporary Variables:** Used for intermediate computations.
    *   **Saved Registers:** Values of registers that the callee needs to preserve for the caller. This prevents the callee from inadvertently modifying registers that the caller is using.
    *   **Dynamic Link (Frame Pointer):** Points to the activation record of the caller procedure.  Used to access variables in the caller's scope (e.g., in languages with nested scopes).
    *   **Static Link (Optional):** Points to the activation record of the lexically enclosing procedure (relevant in languages with nested procedures or closures).

**Diagram:**

```
+-----------------------+
|    Caller's Frame     |
+-----------------------+  <- Caller's Frame Pointer (FP) before call
|       ...             |
+-----------------------+
|  Argument 1          |
|  Argument 2          |
|  ...               |
|  Argument n          |
| Return Address        |  <- Saved on the stack by the caller (or callee)
| Saved Registers       |  <- Saved by the callee (or caller) - depending on the convention
| Dynamic Link (Old FP)|  <- Points to the Caller's FP
| Local Variables       |
| Temporary Variables   |
|       ...             |
+-----------------------+  <- Callee's Frame Pointer (FP)
|    Callee's Frame     |
+-----------------------+
```

*   **Frame Pointer (FP):** A register that points to the base of the current activation record. Used to easily access local variables, arguments, and other components within the frame.

*   **Stack Pointer (SP):** A register that points to the top of the stack.  It changes as activation records are pushed and popped.

**Procedure Call Sequence (Typical):**

1.  **Caller:**
    *   Evaluates arguments.
    *   Pushes arguments onto the stack or places them in registers.
    *   Saves any registers that the caller expects to be preserved.
    *   Pushes the return address onto the stack.
    *   Jumps to the callee's code.

2.  **Callee:**
    *   Creates its activation record by:
        *   Saving the old frame pointer (dynamic link) and setting the frame pointer to the current stack pointer.
        *   Allocating space for local variables and temporaries by decrementing the stack pointer.
        *   Saving any registers that the callee will use that the caller expects to be preserved.
    *   Executes its code.

3.  **Callee (Return):**
    *   Places the return value in a designated register or on the stack.
    *   Restores saved registers.
    *   Restores the stack pointer to deallocate the activation record.
    *   Jumps back to the return address.

4.  **Caller (Return):**
    *   Retrieves the return value (if any).
    *   Restores its saved registers (if any).
    *   Adjusts the stack pointer to remove the arguments (if they were pushed by the caller).
    *   Continues execution.

## 3. Parameter Passing Mechanisms

Different ways of passing arguments to a procedure affect how the callee can access and modify the caller's data.

*   **Call-by-Value:**
    *   The caller evaluates the argument expression and passes *a copy* of the value to the callee.
    *   Modifications made to the parameter within the callee do *not* affect the original variable in the caller.
    *   **Advantage:** Protects the caller's data.
    *   **Disadvantage:** Copying large data structures can be inefficient.

    ```c
    void callee(int x) {
      x = x + 1; // Modifies the local copy 'x', not the original.
    }

    int main() {
      int y = 5;
      callee(y);
      printf("%d\n", y); // Output: 5 (y is unchanged)
      return 0;
    }
    ```

*   **Call-by-Reference:**
    *   The caller passes *a pointer* to the memory location of the argument to the callee.
    *   The callee can directly access and modify the original variable in the caller.
    *   **Advantage:** Efficient for passing large data structures (no copying).
    *   **Disadvantage:** Callee can unintentionally modify the caller's data.  Can lead to aliasing issues (multiple ways to refer to the same memory location).

    ```c
    void callee(int *x) {
      *x = *x + 1; // Modifies the value at the address pointed to by 'x'.
    }

    int main() {
      int y = 5;
      callee(&y);
      printf("%d\n", y); // Output: 6 (y is changed)
      return 0;
    }
    ```

*   **Call-by-Name (Rarely Used):**
    *   The argument expression itself (unevaluated) is passed to the callee.
    *   Every time the parameter is used within the callee, the expression is re-evaluated in the caller's environment.
    *   This is like macro expansion.
    *   **Advantage:** Can be useful for lazy evaluation.
    *   **Disadvantage:** Can be very inefficient (repeated evaluation).  Makes reasoning about the code very difficult.

    ```algol60
    procedure callee(name x);  // 'name' indicates call-by-name
    begin
        x := x + 1;  // Expression 'y' is evaluated each time x is used.
    end;

    integer y;
    y := 5;
    callee(y);
    print(y); //Output will depend on if the callee is able to access main's scope.
    ```

*   **Call-by-Copy-Restore (Call-by-Value-Result):**
    *   The caller copies the argument's value to the callee.
    *   The callee works on the copy.
    *   When the callee returns, the final value of the copy is copied back to the original argument in the caller.
    *   **Advantage:** Prevents unintended modification during execution.
    *   **Disadvantage:**  Still involves copying and can lead to issues if there are multiple pointers to the same variable (aliasing).

    ```c++
    void callee(int& x) {  // C++ references can behave like copy-restore
      x = x + 1;          // Modification happens on a copy initially.
    }

    int main() {
      int y = 5;
      callee(y);
      printf("%d\n", y); // Output: 6
      return 0;
    }
    ```

## 4. Intermediate Code Generation for Procedure Calls

Generating intermediate code involves creating instructions to perform the actions described above. Here's a simplified example using a hypothetical intermediate representation:

**Example:**

```c
int add(int a, int b) {
  return a + b;
}

int main() {
  int x = 5;
  int y = 10;
  int z = add(x, y);
  return 0;
}
```

**Intermediate Code (Simplified):**

```
// main function
main:
  x = 5          // Assign 5 to variable x
  y = 10         // Assign 10 to variable y
  param x        // Push x as the first argument
  param y        // Push y as the second argument
  call add, 2    // Call function add with 2 arguments
  z = return_val  // Assign the return value to z
  return 0       // Return from main

// add function
add:
  a = param 0    // Retrieve the first parameter (a)
  b = param 1    // Retrieve the second parameter (b)
  temp = a + b   // Calculate a + b
  return temp    // Return the result
```

**Explanation:**

*   `param`:  Instruction to prepare arguments for the call.
*   `call`:  Instruction to jump to the callee.  The number of arguments is specified.
*   `return`: Instruction to return from the callee, placing the return value in a designated location (e.g., a register or memory location).
*   `return_val`: Represents the location where the return value is stored.

More complex intermediate representations might use explicit stack manipulation instructions or register allocation information.

## 5. Calling Conventions

A calling convention defines how arguments are passed, how registers are saved, and how the return value is handled.  It's a crucial agreement between the caller and callee to ensure correct execution. Common aspects of a calling convention:

*   **Argument Passing:**
    *   **Register-based:** Arguments are passed in registers (faster).  Limited by the number of available registers.
    *   **Stack-based:** Arguments are pushed onto the stack (more flexible, can handle any number of arguments).
    *   **Mixed:** Some arguments in registers, others on the stack.

*   **Register Saving:**
    *   **Caller-saved (Callers Saves):**  The caller is responsible for saving any registers it wants to preserve before the call.  The callee can freely modify these registers.
    *   **Callee-saved (Callee Saves):** The callee is responsible for saving any registers it uses that the caller might be relying on.  The callee restores these registers before returning.

*   **Stack Management:**
    *   Who is responsible for cleaning up the stack after the call (removing the arguments)?
        *   **Caller clean-up:** The caller adjusts the stack pointer after the call.  Simple for the callee, but the caller must know the number of arguments passed. (e.g. cdecl calling convention)
        *   **Callee clean-up:** The callee adjusts the stack pointer before returning. More complex for the callee, but the caller doesn't need to know the number of arguments (e.g., stdcall calling convention).

*   **Return Value:**  How the return value is passed back to the caller (e.g., in a specific register or on the stack).

**Examples of Calling Conventions:**

*   **cdecl:** (Common in C/C++)
    *   Arguments are passed on the stack, from right to left.
    *   Caller-saved registers.
    *   Caller cleans up the stack.
    *   Return value in a register (e.g., `eax` on x86).

*   **stdcall:** (Used in Windows API)
    *   Arguments are passed on the stack, from right to left.
    *   Callee-saved registers.
    *   Callee cleans up the stack.
    *   Return value in a register (e.g., `eax` on x86).

*   **fastcall:** (Optimized for speed)
    *   A few arguments are passed in registers (e.g., `ecx`, `edx` on x86).
    *   Remaining arguments on the stack.
    *   Caller or callee may clean up the stack, depending on the specific implementation.
    *   Return value in a register.

**Trade-offs:**

*   **Speed:** Register-based calling conventions are typically faster.
*   **Flexibility:** Stack-based calling conventions are more flexible for handling variable numbers of arguments.
*   **Code Size:** Caller clean-up can lead to larger code size (each call site must adjust the stack). Callee clean-up centralizes the stack adjustment.

## 6. Register Allocation and Procedure Calls

Register allocation is the process of assigning program variables to registers. Effective register allocation is crucial for performance. Procedure calls introduce challenges because of the need to save and restore registers.

*   **Register Spilling:** If there are more variables than available registers, some variables must be stored in memory (spilled to memory).
*   **Interference:** When a variable is live (its value may be used later) across a procedure call, it must be saved and restored to prevent the callee from overwriting its value.
*   **Graph Coloring:** Register allocation algorithms (like graph coloring) consider the liveness of variables and try to minimize register spilling while respecting calling conventions.

**Impact of Calling Convention:**

The choice of calling convention directly impacts register allocation:

*   **Caller-saved registers:** The register allocator knows that these registers may be modified by the callee and must generate code to save and restore them if they contain live variables.
*   **Callee-saved registers:** The register allocator knows that these registers will be preserved by the callee, so it doesn't need to explicitly save and restore them around the call, *if* those registers are actually saved by the callee.

## Important Points to Remember

*   Understanding the call stack and activation records is fundamental to understanding procedure calls.
*   The choice of parameter passing mechanism impacts how the callee can access and modify the caller's data.
*   Calling conventions define the interface between the caller and callee.
*   Register allocation plays a critical role in optimizing procedure call performance.
*   Careful consideration of calling conventions and register allocation is necessary to generate efficient and correct code.

## Practice Questions/Exercises

**1. Explain the purpose of the return address in an activation record.**

**Answer:** The return address stores the address in the caller function to which the callee function should return after its execution is complete. It allows the program to resume execution in the correct location after the function call.

**2. Describe the difference between call-by-value and call-by-reference.**

**Answer:** In call-by-value, a copy of the argument's value is passed to the callee. Changes made to the parameter within the callee do not affect the original variable in the caller. In call-by-reference, a pointer to the argument's memory location is passed to the callee. Changes made to the parameter within the callee directly affect the original variable in the caller.

**3.  What are the advantages and disadvantages of using registers for parameter passing compared to using the stack?**

**Answer:**

*   **Registers (Advantages):** Faster access, reducing memory traffic.
*   **Registers (Disadvantages):** Limited number of registers, more complex register allocation, can lead to increased register spilling.
*   **Stack (Advantages):**  More flexible (can handle variable number of arguments), simpler implementation.
*   **Stack (Disadvantages):** Slower access compared to registers (memory access).

**4. Explain the difference between caller-saved and callee-saved registers.**

**Answer:** Caller-saved registers are the responsibility of the caller to save before making a function call. If the caller needs the value of a caller-saved register after the call returns, it must save the register's value before the call and restore it after the call. Callee-saved registers are the responsibility of the callee to save before using them and to restore their original values before returning. This allows the caller to rely on the values of callee-saved registers remaining unchanged after the call.

**5. Suppose you have a function `foo` that calls a function `bar`. Using a stack-based calling convention, draw a diagram of the call stack showing the activation records for `foo` and `bar` after `bar` has been called but before `bar` returns.  Label the key components of each activation record (e.g., return address, arguments, local variables, dynamic link).**

**Answer:** (The diagram will be similar to the diagram in section 2 above, showing the activation record for `foo` on the bottom and `bar` on top. Make sure to include all the components listed in section 2).

**6. Consider the following C code:**

```c
int global_var = 10;

int modify(int x) {
  global_var = x + 5;
  return x * 2;
}

int main() {
  int local_var = 20;
  int result = modify(local_var);
  printf("result: %d, global_var: %d, local_var: %d\n", result, global_var, local_var);
  return 0;
}
```

What will be the output of this program?  Explain how the variables are affected by the procedure call and the assignment to `global_var`.

**Answer:**

Output:

```
result: 40, global_var: 25, local_var: 20
```

**Explanation:**

*   `main` initializes `local_var` to 20.
*   `modify(local_var)` is called.  `x` inside `modify` receives a *copy* of `local_var`'s value (20) due to call-by-value.
*   Inside `modify`, `global_var` is updated to `x + 5` which is `20 + 5 = 25`.
*   `modify` returns `x * 2`, which is `20 * 2 = 40`.  This value is assigned to `result` in `main`.
*   `local_var` remains unchanged at 20 because `modify` received a copy of its value.
*   The `printf` statement then outputs the values as shown above.
