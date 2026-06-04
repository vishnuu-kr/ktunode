---
title: "proving total correctness of programs in VCC."
subject: "FORMAL METHODS IN SOFTWARE ENGINEERING"
module: "Module 4: Program Verification:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c084"
status: "completed"
scrapedAt: "2026-05-20T17:06:06.133Z"
---
# Formal Methods in Software Engineering

## Module 4: Program Verification

### Topic: Proving Total Correctness of Programs in VCC

---

### 1. Introduction to Total Correctness and VCC

**Total Correctness** means that a program not only produces the correct output for all valid inputs (partial correctness) but also **always terminates** for all valid inputs.

**VCC (Verifying Concurrent C)** is a tool that assists in proving the total correctness of C programs. It leverages annotations (like preconditions, postconditions, and loop invariants) written within the C code itself to guide the verification process. VCC translates these annotations and the C code into a logical specification that is then checked by an automated theorem prover (like Boogie).

---

### 2. Key Concepts and Definitions

*   **Precondition ($P$):** A condition that must be true *before* a program or a function is executed. It describes the state of the program or its inputs.
*   **Postcondition ($Q$):** A condition that must be true *after* a program or a function has successfully completed its execution. It describes the desired state of the program or its outputs.
*   **Loop Invariant ($I$):** A condition that remains true *before*, *during*, and *after* each iteration of a loop. It's crucial for proving both partial correctness and termination.
*   **Termination:** The guarantee that a program will eventually finish its execution and not run indefinitely.
*   **VCC Annotations:** Special keywords and syntax used in C code to express logical properties. Common annotations include:
    *   `requires P;`: Specifies a precondition.
    *   `ensures Q;`: Specifies a postcondition.
    *   `invariant I;`: Specifies a loop invariant.
    *   `assert E;`: Asserts that an expression $E$ is true at a specific program point.
    *   `assume E;`: Instructs the prover to assume that $E$ is true.
    *   `old(expr)`: Refers to the value of `expr` at the point where the enclosing `ensures` clause was entered (e.g., before the function call).
    *   `\result`: Refers to the return value of a function.

---

### 3. Proving Total Correctness in VCC

Proving total correctness in VCC involves demonstrating that:

1.  **Partial Correctness:** For any input satisfying the precondition, if the program terminates, it will satisfy the postcondition.
2.  **Termination:** The program is guaranteed to terminate for any input satisfying the precondition.

VCC typically relies on the following to achieve this:

#### 3.1. Partial Correctness Proof Strategy

*   **Function Contracts:** Functions are annotated with `requires` (precondition) and `ensures` (postcondition). VCC verifies that:
    *   The body of the function establishes the postcondition assuming the precondition holds.
    *   All calls to other functions satisfy their preconditions.
    *   The return value of called functions, when used in the caller's logic, helps establish the caller's postcondition.
*   **Loop Invariants:** For loops, a `invariant` annotation is used. VCC verifies that:
    *   The invariant holds *before* the first iteration (if the loop is entered).
    *   The invariant is maintained *across* each iteration (if the loop body is executed).
    *   The postcondition can be derived from the invariant *when the loop terminates* (i.e., when the loop's exit condition is met).
*   **Assertions:** `assert` statements are used to check intermediate conditions. If an `assert` fails, the program is considered incorrect.

#### 3.2. Termination Proof Strategy

VCC, like most verification tools, relies on **variant functions** to prove termination.

*   **Variant Function:** A variant function, often denoted by `\variant`, is a function that maps the program's state to a non-negative integer.
    *   **Decreases with Each Iteration:** The value of the variant function must strictly decrease with each execution of the loop body.
    *   **Bounded Below:** The value of the variant function must always be non-negative.
*   **How it works:** If a variant function exists that strictly decreases with each iteration and is always bounded below (by 0), then the loop must eventually terminate. This is because there are a finite number of values between the initial value of the variant and 0.

**VCC's Approach to Termination:**

*   VCC can automatically detect certain simple termination arguments (e.g., counting down a non-negative integer).
*   For more complex cases, you might need to provide hints or manually express properties that lead to a termination proof. This often involves defining a suitable variant function implicitly or explicitly through annotations.

---

### 4. VCC Annotations in Practice

Let's consider an example: a function to find the maximum of two integers.

```c
/*@
  requires \true; // No specific precondition on inputs a and b themselves,
                 // but the function will operate on them.
  ensures \result == (a > b ? a : b); // The result is the maximum of a and b.
*/
int max(int a, int b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
```

**Explanation:**

*   `requires \true;`: Indicates no specific external conditions are needed for `max` to be called.
*   `ensures \result == (a > b ? a : b);`: This is the postcondition. It states that the return value (`\result`) must be equal to the larger of `a` and `b`.

---

Now, let's consider a loop example: calculating the sum of numbers from 0 to `n`.

```c
/*@
  requires n >= 0;
  ensures \result == n * (n + 1) / 2; // Arithmetic series formula
*/
int sum_up_to(int n) {
  int sum = 0;
  int i = 0;

  /*@
    // Loop invariant:
    // 1. i is between 0 and n (inclusive).
    // 2. sum holds the sum of numbers from 0 to i-1.
    invariant i >= 0 && i <= n + 1;
    invariant sum == (i > 0 ? (i - 1) * i / 2 : 0);

    // Loop variant (for termination):
    // The number of iterations remaining is n - i + 1.
    // This decreases as i increases. It is always >= 0 because i <= n + 1.
    // VCC might infer this or require it explicitly in more complex cases.
    // For this simple loop, VCC can often infer termination.
  */
  while (i <= n) {
    sum = sum + i;
    i = i + 1;
  }

  return sum;
}
```

**Explanation of `sum_up_to`:**

*   **Precondition (`requires n >= 0;`):** The input `n` must be non-negative for the sum to be meaningful in this context.
*   **Postcondition (`ensures \result == n * (n + 1) / 2;`):** After the function finishes, the returned `sum` should be equal to the arithmetic series formula.
*   **Loop Invariant (`invariant i >= 0 && i <= n + 1; invariant sum == (i > 0 ? (i - 1) * i / 2 : 0);`):**
    *   `i >= 0 && i <= n + 1`: `i` starts at 0 and increments, so it will always be non-negative. It goes up to `n+1` when the loop terminates. This bounds `i`.
    *   `sum == (i > 0 ? (i - 1) * i / 2 : 0)`: This crucial invariant states that `sum` at any point before checking the loop condition *and before incrementing `i`* holds the sum of numbers from 0 up to `i-1`.
        *   **Initialization:** Before the loop, `i = 0`, `sum = 0`. The invariant holds: `0 >= 0 && 0 <= n + 1` (true if `n >= -1`, which is implied by `n >= 0`). And `sum == (0 > 0 ? ... : 0)` which is `0 == 0`.
        *   **Maintenance:** Assume the invariant holds at the start of an iteration where `i <= n`.
            *   `sum_new = sum_old + i`
            *   `i_new = i_old + 1`
            *   We need to show `sum_new == (i_new - 1) * i_new / 2`.
            *   Substitute: `(sum_old + i_old) == ((i_old + 1) - 1) * (i_old + 1) / 2`
            *   `sum_old + i_old == i_old * (i_old + 1) / 2`
            *   From the invariant, `sum_old == (i_old > 0 ? (i_old - 1) * i_old / 2 : 0)`.
            *   If `i_old = 0`: `sum_old = 0`. Then `0 + 0 == 0 * (0 + 1) / 2`, which is `0 == 0`.
            *   If `i_old > 0`: `sum_old = (i_old - 1) * i_old / 2`.
                *   `(i_old - 1) * i_old / 2 + i_old == i_old * (i_old + 1) / 2`
                *   Multiply by 2: `(i_old - 1) * i_old + 2 * i_old == i_old * (i_old + 1)`
                *   `i_old^2 - i_old + 2 * i_old == i_old^2 + i_old`
                *   `i_old^2 + i_old == i_old^2 + i_old`. This is true.
        *   **Termination:** When the loop `while (i <= n)` terminates, it means `i > n`. Combined with the invariant `i <= n + 1`, this implies `i == n + 1`.
            *   At this point, the invariant `sum == (i > 0 ? (i - 1) * i / 2 : 0)` holds.
            *   Substitute `i = n + 1`: `sum == ((n + 1) - 1) * (n + 1) / 2`
            *   `sum == n * (n + 1) / 2`. This matches the postcondition.
*   **Termination (Variant):** The expression `n - i + 1` can serve as a variant.
    *   Before loop: `n - 0 + 1 = n + 1` (non-negative since `n >= 0`).
    *   After incrementing `i`: `i` increases by 1. So `n - i + 1` decreases by 1.
    *   When `i` reaches `n+1`, the variant is `n - (n+1) + 1 = 0`. The loop terminates.

---

### 5. Common Pitfalls and Tips

*   **Off-by-One Errors:** Carefully check loop bounds and invariant conditions, especially around termination points.
*   **Incorrect Invariants:** The invariant *must* hold throughout the loop. A common mistake is to write an invariant that describes the state *after* an iteration but not *before*.
*   **Missing Termination Argument:** VCC needs to be convinced that loops will eventually terminate. If it can't prove it automatically, you might need to provide an explicit variant or structural induction.
*   **Integer Overflow:** Be mindful of potential integer overflows, especially in arithmetic operations. VCC might have specific annotations or checks for this.
*   **State Changes:** When proving total correctness, ensure all state changes (variable updates) are accounted for in the invariants and postconditions.
*   **`old()` keyword:** Use `old()` judiciously in postconditions to refer to values before a function call or loop iteration.

---

### 6. Practice Questions and Exercises

**Question 1:**

Consider the following VCC code snippet. What is the missing `ensures` clause to prove total correctness?

```c
/*@
  requires x > 0;
  ensures ??? ;
*/
int square(int x) {
  return x * x;
}
```

**Answer 1:**

```c
/*@
  requires x > 0;
  ensures \result == x * x;
*/
int square(int x) {
  return x * x;
}
```
*Explanation:* The postcondition must state that the returned value (`\result`) is equal to the square of the input `x`.

---

**Question 2:**

Analyze the following loop. Identify a potential loop invariant and a termination variant.

```c
int power(int base, int exp) {
  int res = 1;
  int i = 0;
  /*@
    // ... invariants and variants go here ...
  */
  while (i < exp) {
    res = res * base;
    i = i + 1;
  }
  return res;
}
```

**Answer 2:**

*   **Loop Invariant:**
    *   `i >= 0`: `i` starts at 0 and is only incremented.
    *   `i <= exp`: `i` increments as long as it's less than `exp`. When the loop terminates, `i` will be equal to `exp`.
    *   `res == power(base, i)`: This invariant states that `res` holds `base` raised to the power of the current `i`.
        *   **Initialization:** Before the loop, `i=0`, `res=1`. `power(base, 0)` is `1`. Invariant holds.
        *   **Maintenance:** Assume `res_old == power(base, i_old)` and `i_old < exp`.
            *   `res_new = res_old * base`
            *   `i_new = i_old + 1`
            *   We need `res_new == power(base, i_new)`.
            *   `res_old * base == power(base, i_old + 1)`.
            *   Since `res_old == power(base, i_old)`, this becomes `power(base, i_old) * base == power(base, i_old + 1)`, which is true by the definition of exponentiation.

*   **Termination Variant:**
    *   `exp - i`:
        *   **Bounded Below:** Since `i <= exp` within the loop, `exp - i >= 0`.
        *   **Decreases:** In each iteration, `i` is incremented by 1, so `exp - i` decreases by 1.
        *   **Termination:** When `i` becomes `exp`, `exp - i` becomes 0, and the loop condition `i < exp` is false.

---

**Question 3:**

What is the purpose of the `old()` keyword in VCC? Provide an example.

**Answer 3:**

The `old()` keyword in VCC is used within an `ensures` clause to refer to the value of a variable or expression *before* the execution of the function or loop iteration. It's essential for expressing properties that compare the state before and after an operation.

**Example:**

Consider a function that increments a variable.

```c
/*@
  requires x >= 0;
  ensures x == old(x) + 1; // The new value of x is one greater than its old value.
  // Or if 'x' is passed by pointer:
  // requires x != \null;
  // ensures *x == old(*x) + 1;
*/
void increment(int* x) {
  (*x)++;
}
```

In this example, `old(x)` in the `ensures` clause refers to the value of `x` at the moment the `increment` function was called. This allows us to specify that the function's effect is to increase `x` by one.

---

### 7. Important Points to Remember

*   **Total Correctness = Partial Correctness + Termination.**
*   **VCC uses annotations (`requires`, `ensures`, `invariant`) to guide verification.**
*   **Loop invariants are critical for proving both correctness and termination.** They must hold before, during, and after each iteration.
*   **Termination is typically proven using a variant function that strictly decreases and is bounded below by a non-negative value.**
*   **`old(expr)` is used in `ensures` clauses to refer to values at the start of the scope.**
*   **Verification is an iterative process.** You may need to refine your invariants and preconditions as you work with VCC.

---
