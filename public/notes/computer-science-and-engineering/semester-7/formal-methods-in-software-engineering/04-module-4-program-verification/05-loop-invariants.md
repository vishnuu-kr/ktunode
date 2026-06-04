---
title: "loop invariants"
subject: "FORMAL METHODS IN SOFTWARE ENGINEERING"
module: "Module 4: Program Verification:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c083"
status: "completed"
scrapedAt: "2026-05-20T17:06:05.433Z"
---
# FORMAL METHODS IN SOFTWARE ENGINEERING - Module 4: Program Verification: Loop Invariants

## Introduction

Program verification is the process of proving that a program satisfies its specification. Loop invariants are a fundamental tool in program verification, particularly for proving the correctness of iterative programs. They are properties that hold true before, during, and after the execution of a loop.

## Learning Outcomes

By the end of this module, you should be able to:

*   Understand the concept and importance of loop invariants in program verification.
*   Define and identify loop invariants for various types of loops.
*   Use loop invariants to prove the partial correctness of iterative programs.
*   Understand the relationship between loop invariants, pre-conditions, and post-conditions.
*   Apply techniques for deriving loop invariants.

## Key Concepts and Definitions

### What is a Loop Invariant?

A **loop invariant** is a predicate (a logical statement) that is true at the beginning of each iteration of a loop, and remains true after each iteration. More formally, a predicate $P$ is a loop invariant for a loop if:

1.  **Initialization:** $P$ is true before the first iteration of the loop.
2.  **Maintenance:** If $P$ is true at the beginning of an iteration, and the loop body executes, then $P$ is still true at the beginning of the next iteration.
3.  **Termination:** When the loop terminates, the loop invariant combined with the loop's termination condition implies the post-condition of the program.

### Importance of Loop Invariants in Verification

*   **Partial Correctness:** Loop invariants are crucial for proving **partial correctness**. This means proving that *if* the program terminates, then it produces the correct output.
*   **Reasoning about Iteration:** They provide a structured way to reason about the state of variables throughout the execution of a loop, which can be complex.
*   **Guiding Program Design:** The process of finding a loop invariant can often reveal flaws in the program's logic or suggest a more efficient algorithm.

### Types of Loops

While the concept applies to all loops, we often focus on:

*   **`while` loops:** Where the condition is checked at the beginning of each iteration.
*   **`for` loops:** Often a syntactic sugar for `while` loops, with initialization, condition, and update steps.

## Proving Partial Correctness Using Loop Invariants

To prove the partial correctness of a program segment containing a loop, you need to demonstrate the three properties of a loop invariant:

### 1. Initialization

*   **Goal:** Show that the loop invariant is true before the first execution of the loop body.
*   **How:** This typically involves using the program's pre-condition and the initialization of variables before the loop.

### 2. Maintenance

*   **Goal:** Show that if the loop invariant is true at the start of an iteration, it remains true at the start of the next iteration.
*   **How:** This is the core of the proof. Assume the invariant holds at the beginning of an iteration and use the program's execution (statements within the loop body) and the loop's termination condition to logically deduce that the invariant still holds after the iteration.

### 3. Termination

*   **Goal:** Show that when the loop terminates, the combination of the loop invariant and the termination condition implies the program's post-condition.
*   **How:** Once the loop terminates, its termination condition is false. Use this fact along with the loop invariant to derive the desired post-condition.

## Examples of Loop Invariants

Let's illustrate with some common programming constructs. We'll use a simplified pseudo-code.

### Example 1: Sum of Array Elements

**Program:** Calculate the sum of elements in an array `A` of size `n`.

```
// Pre-condition: A is an array of integers, n >= 0
// Post-condition: sum = A[0] + A[1] + ... + A[n-1]

int sum = 0;
int i = 0;

while (i < n) {
    sum = sum + A[i];
    i = i + 1;
}
// sum holds the total sum
```

**Finding the Loop Invariant:**

As the loop progresses, `i` increases, and `sum` accumulates the values of `A[0]` to `A[i-1]`. A suitable invariant would capture this relationship.

**Proposed Loop Invariant (P):** `sum = (A[0] + A[1] + ... + A[i-1]) AND 0 <= i <= n`

**Proof:**

1.  **Initialization:**
    *   Before the loop: `sum = 0`, `i = 0`.
    *   The invariant requires `sum = (A[0] + ... + A[-1])`. The sum of an empty set is 0. So, `sum = 0`. This holds.
    *   The invariant requires `0 <= i <= n`. Since `i = 0` and `n >= 0` (from pre-condition), `0 <= 0 <= n` holds.
    *   Thus, `P` is true before the first iteration.

2.  **Maintenance:**
    *   Assume `P` is true at the start of an iteration: `sum = (A[0] + ... + A[i-1]) AND 0 <= i <= n`.
    *   Inside the loop:
        *   `sum_new = sum + A[i]`
        *   `i_new = i + 1`
    *   We need to show that `sum_new = (A[0] + ... + A[i]) AND 0 <= i_new <= n`.
    *   From the assumption, `sum = (A[0] + ... + A[i-1])`. Substituting this into `sum_new`:
        *   `sum_new = (A[0] + ... + A[i-1]) + A[i] = (A[0] + ... + A[i])`. This part holds.
    *   Now consider the bounds for `i_new`:
        *   From the assumption, `0 <= i <= n`.
        *   Since `i_new = i + 1`, we have `1 <= i_new <= n + 1`.
        *   Also, the loop condition `i < n` must be true for the iteration to execute. If `i < n`, then `i+1 <= n`, so `i_new <= n`.
        *   Therefore, `0 <= i_new <= n`. This part holds.
    *   Thus, `P` is maintained.

3.  **Termination:**
    *   The loop terminates when `i < n` is false, meaning `i >= n`.
    *   We have the invariant: `sum = (A[0] + ... + A[i-1]) AND 0 <= i <= n`.
    *   Combining the invariant with the termination condition `i >= n`:
        *   From `0 <= i <= n` and `i >= n`, we deduce `i = n`.
        *   Substituting `i = n` into the invariant `sum = (A[0] + ... + A[i-1])`:
        *   `sum = (A[0] + ... + A[n-1])`.
    *   This matches the post-condition.
    *   Thus, the program is partially correct.

### Example 2: Finding Maximum Element

**Program:** Find the maximum element in an array `A` of size `n` (assume `n >= 1`).

```
// Pre-condition: A is an array of integers, n >= 1
// Post-condition: max_val = maximum(A[0], A[1], ..., A[n-1])

int max_val = A[0];
int i = 1;

while (i < n) {
    if (A[i] > max_val) {
        max_val = A[i];
    }
    i = i + 1;
}
// max_val holds the maximum value
```

**Finding the Loop Invariant:**

As the loop progresses, `i` iterates through the array, and `max_val` holds the maximum value encountered *so far* (from `A[0]` to `A[i-1]`).

**Proposed Loop Invariant (P):** `max_val = maximum(A[0], A[1], ..., A[i-1]) AND 1 <= i <= n`

**Proof:**

1.  **Initialization:**
    *   Before the loop: `max_val = A[0]`, `i = 1`.
    *   The invariant requires `max_val = maximum(A[0], ..., A[0])`. This means `max_val = A[0]`. This holds.
    *   The invariant requires `1 <= i <= n`. Since `i = 1` and `n >= 1` (from pre-condition), `1 <= 1 <= n` holds.
    *   Thus, `P` is true before the first iteration.

2.  **Maintenance:**
    *   Assume `P` is true at the start of an iteration: `max_val = maximum(A[0], ..., A[i-1]) AND 1 <= i <= n`.
    *   Inside the loop:
        *   If `A[i] > max_val`, then `max_val_new = A[i]`. Otherwise, `max_val_new = max_val`.
        *   `i_new = i + 1`.
    *   We need to show that `max_val_new = maximum(A[0], ..., A[i]) AND 1 <= i_new <= n`.
    *   Consider `max_val_new`:
        *   The definition of `max_val_new` ensures it's either the old `max_val` (maximum of `A[0]` to `A[i-1]`) or `A[i]`.
        *   Therefore, `max_val_new` is the maximum of `A[0]` to `A[i]`. This part holds.
    *   Now consider the bounds for `i_new`:
        *   From the assumption, `1 <= i <= n`.
        *   Since `i_new = i + 1`, we have `2 <= i_new <= n + 1`.
        *   The loop condition `i < n` must be true for the iteration. If `i < n`, then `i + 1 <= n`, so `i_new <= n`.
        *   Therefore, `1 <= i_new <= n`. This part holds.
    *   Thus, `P` is maintained.

3.  **Termination:**
    *   The loop terminates when `i < n` is false, meaning `i >= n`.
    *   We have the invariant: `max_val = maximum(A[0], ..., A[i-1]) AND 1 <= i <= n`.
    *   Combining the invariant with the termination condition `i >= n`:
        *   From `1 <= i <= n` and `i >= n`, we deduce `i = n`.
        *   Substituting `i = n` into the invariant `max_val = maximum(A[0], ..., A[i-1])`:
        *   `max_val = maximum(A[0], ..., A[n-1])`.
    *   This matches the post-condition.
    *   Thus, the program is partially correct.

### Example 3: Factorial Calculation (using a `for` loop)

**Program:** Calculate `n!` (assume `n >= 0`).

```
// Pre-condition: n >= 0
// Post-condition: factorial = n!

int factorial = 1;
int i; // Implicitly initialized to 0 or 1 depending on loop structure

// For loop often implies iteration from a start to an end value
for (i = 1; i <= n; i++) {
    factorial = factorial * i;
}
// factorial holds n!
```

**Finding the Loop Invariant:**

As `i` goes from 1 to `n`, `factorial` accumulates the product `1 * 2 * ... * i`.

**Proposed Loop Invariant (P):** `factorial = i! AND 1 <= i <= n + 1`

*Note:* The upper bound of `i` is `n+1` because the loop terminates when `i` becomes `n+1`.

**Proof:**

1.  **Initialization:**
    *   Before the loop: `factorial = 1`, `i` starts at 1.
    *   The invariant requires `factorial = i!`. With `i=1`, `factorial = 1! = 1`. This holds.
    *   The invariant requires `1 <= i <= n + 1`. With `i=1` and `n>=0`, we have `1 <= 1 <= n + 1`. This holds.
    *   Thus, `P` is true before the first iteration.

2.  **Maintenance:**
    *   Assume `P` is true at the start of an iteration: `factorial = i! AND 1 <= i <= n + 1`.
    *   Inside the loop:
        *   `factorial_new = factorial * i`
        *   `i_new = i + 1`
    *   We need to show that `factorial_new = i_new! AND 1 <= i_new <= n + 1`.
    *   Consider `factorial_new`:
        *   From assumption, `factorial = i!`.
        *   `factorial_new = i! * i`. This is not `i_new!`. Let's re-evaluate the invariant.

**Let's Refine the Loop Invariant for the For Loop:**

The loop `for (i = 1; i <= n; i++)` executes when `i` is `1, 2, ..., n`. It terminates when `i` becomes `n+1`.

A better invariant would track the state *after* the multiplication for a given `i`, up to the point where `i` is about to be incremented.

**Revised Proposed Loop Invariant (P):** `factorial = (i-1)! AND 1 <= i <= n + 1`

**Proof (with Revised Invariant):**

1.  **Initialization:**
    *   Before the loop: `factorial = 1`, `i` starts at 1.
    *   The invariant requires `factorial = (i-1)!`. With `i=1`, `factorial = (1-1)! = 0! = 1`. This holds.
    *   The invariant requires `1 <= i <= n + 1`. With `i=1` and `n>=0`, we have `1 <= 1 <= n + 1`. This holds.
    *   Thus, `P` is true before the first iteration.

2.  **Maintenance:**
    *   Assume `P` is true at the start of an iteration: `factorial = (i-1)! AND 1 <= i <= n + 1`.
    *   Inside the loop:
        *   `factorial_new = factorial * i`
        *   `i_new = i + 1`
    *   We need to show that `factorial_new = (i_new - 1)! AND 1 <= i_new <= n + 1`.
    *   Consider `factorial_new`:
        *   From assumption, `factorial = (i-1)!`.
        *   `factorial_new = (i-1)! * i`.
        *   We know that `i! = i * (i-1)!`. So, `factorial_new = i!`.
        *   Also, `i_new - 1 = (i + 1) - 1 = i`.
        *   Therefore, `factorial_new = i! = (i_new - 1)!`. This part holds.
    *   Now consider the bounds for `i_new`:
        *   From the assumption, `1 <= i <= n + 1`.
        *   Since `i_new = i + 1`, we have `2 <= i_new <= n + 2`.
        *   The loop condition `i <= n` must be true for the iteration. If `i <= n`, then `i + 1 <= n + 1`, so `i_new <= n + 1`.
        *   Therefore, `1 <= i_new <= n + 1`. This part holds.
    *   Thus, `P` is maintained.

3.  **Termination:**
    *   The loop terminates when `i <= n` is false, meaning `i > n`. Since `i` increments by 1, this means `i` becomes `n+1`. So, the loop termination condition is `i = n + 1`.
    *   We have the invariant: `factorial = (i-1)! AND 1 <= i <= n + 1`.
    *   Combining the invariant with the termination condition `i = n + 1`:
        *   Substitute `i = n + 1` into the invariant: `factorial = ((n + 1) - 1)! = n!`.
    *   This matches the post-condition.
    *   Thus, the program is partially correct.

## Deriving Loop Invariants

Deriving loop invariants is often the most challenging part of program verification. Here are some common strategies:

1.  **Look at the Post-condition:** The invariant is often a generalization of the post-condition that holds true throughout the loop's execution. It usually includes the variables that will hold the final result.
2.  **Consider the Loop's Progress:** How do the variables change in each iteration? The invariant should reflect the accumulated progress.
3.  **Work Backwards from the Post-condition:**
    *   Start with the post-condition.
    *   Consider the statements in the loop body. "Undo" the last statement to see what must have been true before it to satisfy the invariant.
    *   Continue this process backward until you reach the initialization.
4.  **Use "Definitional" Invariants:** Some invariants are directly related to the definition of what the loop is supposed to achieve. For example, in a search loop, the invariant might be that the target element is *not* in the portion of the array already processed.
5.  **Quantifier Introduction/Elimination:** For loops operating on collections or ranges, quantifiers (like "for all," "exists") can be useful in formulating invariants.

**Example: Deriving Invariant for Sum of Array Elements**

*   **Post-condition:** `sum = A[0] + A[1] + ... + A[n-1]`
*   **Loop variable:** `i` goes from 0 to `n`.
*   **Accumulator:** `sum` accumulates values.
*   Let's consider the state when `i` has reached some value. What should `sum` hold? It should hold the sum of elements processed *up to* `i-1`.
*   So, a potential invariant is: `sum = A[0] + ... + A[i-1]`.
*   What about the range of `i`? The loop starts with `i=0` and ends when `i` is no longer less than `n`. So, `0 <= i <= n` is a good bound.
*   Combining these, we get `sum = (A[0] + ... + A[i-1]) AND 0 <= i <= n`.

## Relationship between Pre-condition, Post-condition, and Invariant

*   **Pre-condition (PC):** The condition that must be true before the loop starts.
*   **Loop Invariant (P):** The property that holds true at the beginning of each iteration.
*   **Post-condition (PT):** The condition that must be true after the loop terminates.
*   **Termination Condition (T):** The condition that becomes false when the loop terminates.

The proof relies on these implications:

1.  `PC ⇒ P` (Initialization: Pre-condition implies the invariant before the first iteration)
2.  `P ∧ condition ⇒ P'` (Maintenance: If invariant holds and loop condition is true, invariant holds for the next iteration)
3.  `P ∧ ¬condition ⇒ PT` (Termination: If invariant holds and loop condition is false, post-condition holds)

## Important Points to Remember

*   **Loop Invariants are Essential for Partial Correctness:** Without them, proving correctness of loops is very difficult.
*   **The Invariant is a Strengthened Pre-condition:** It is stronger than the initial pre-condition because it also accounts for the effects of previous loop iterations.
*   **Deriving Invariants is an Art:** It requires practice and understanding of the program's logic.
*   **Multiple Invariants May Exist:** For a given loop, there might be several valid loop invariants. The chosen invariant should be strong enough to prove the post-condition.
*   **Bounds on Loop Variables are Crucial:** Always include assertions about the range of loop control variables in your invariant.
*   **Termination is Separate but Related:** While invariants prove that *if* the loop terminates, the result is correct, proving termination itself is a separate but important aspect of full program correctness. This often involves finding a *variant function* (a quantity that decreases with each iteration and is bounded below).

## Practice Questions and Exercises

**Exercise 1:**

Consider the following program to compute $x^y$ (where $y \geq 0$):

```
// Pre-condition: x is an integer, y >= 0
// Post-condition: result = x^y

int result = 1;
int count = 0;

while (count < y) {
    result = result * x;
    count = count + 1;
}
// result holds x^y
```

Identify a suitable loop invariant and sketch its proof of initialization, maintenance, and termination.

---

**Exercise 2:**

Consider the following program that attempts to find the index of the first occurrence of a value `target` in an array `A` of size `n`. If `target` is not found, it should return -1.

```
// Pre-condition: A is an array of integers, n >= 0
// Post-condition: (index = first i such that A[i] == target) OR (index == -1 AND target not in A)

int index = -1;
int i = 0;

while (i < n) {
    if (A[i] == target) {
        index = i;
        // Break out of loop - assume break exists
        break;
    }
    i = i + 1;
}
// index holds the result
```

Identify a suitable loop invariant for this program.

---

**Exercise 3:**

Consider a program that calculates the sum of squares of the first `n` natural numbers: $1^2 + 2^2 + \dots + n^2$.

```
// Pre-condition: n >= 0
// Post-condition: sum_sq = 1^2 + 2^2 + ... + n^2

int sum_sq = 0;
int i = 1;

while (i <= n) {
    sum_sq = sum_sq + (i * i);
    i = i + 1;
}
// sum_sq holds the sum of squares
```

Identify a suitable loop invariant and sketch its proof.

---

## Answers to Exercises

**Answer 1:**

**Proposed Loop Invariant (P):** `result = x^count AND 0 <= count <= y`

**Proof Sketch:**

1.  **Initialization:**
    *   Before loop: `result = 1`, `count = 0`.
    *   Invariant: `result = x^count` becomes `1 = x^0` (True). `0 <= count <= y` becomes `0 <= 0 <= y` (True, given pre-condition $y \geq 0$).
    *   `P` holds.

2.  **Maintenance:**
    *   Assume `P` holds: `result = x^count AND 0 <= count <= y`.
    *   Loop body: `result_new = result * x`, `count_new = count + 1`.
    *   Need to show: `result_new = x^count_new AND 0 <= count_new <= y`.
    *   `result_new = (x^count) * x = x^(count+1) = x^count_new`. (Holds).
    *   If loop executes, `count < y`. So `count + 1 <= y`, which means `count_new <= y`. Since `count >= 0`, `count_new = count + 1 >= 1`. So `0 <= count_new <= y`. (Holds).
    *   `P` is maintained.

3.  **Termination:**
    *   Loop terminates when `count < y` is false, i.e., `count >= y`.
    *   Invariant: `result = x^count AND 0 <= count <= y`.
    *   From `0 <= count <= y` and `count >= y`, we get `count = y`.
    *   Substitute `count = y` into `result = x^count`: `result = x^y`.
    *   This matches the post-condition.

**Answer 2:**

This program has a `break` statement, which complicates the standard invariant proof. However, we can adapt. The core idea is that `index` remains `-1` until `target` is found.

**Proposed Loop Invariant (P):** `(index == -1 AND target is NOT in A[0...i-1]) OR (index is the smallest k < i such that A[k] == target)` AND `0 <= i <= n`.

**Proof Sketch:**

1.  **Initialization:**
    *   Before loop: `index = -1`, `i = 0`.
    *   Invariant: `index == -1` (True). `target is NOT in A[0...-1]` (True, empty prefix). `0 <= i <= n` becomes `0 <= 0 <= n` (True).
    *   `P` holds.

2.  **Maintenance:**
    *   Assume `P` holds: `(index == -1 AND target not in A[0...i-1]) OR (index is smallest k < i s.t. A[k] == target)` AND `0 <= i <= n`.
    *   Loop body:
        *   Case 1: `A[i] == target`.
            *   `index_new = i`. `break`.
            *   The invariant is still conceptually true for `i`, but the loop exits. The post-condition relies on the value of `index` *at the point of break*. If this is the first occurrence, `index_new` is indeed the first index.
        *   Case 2: `A[i] != target`.
            *   `index` remains unchanged. `index_new = index`.
            *   `i_new = i + 1`.
            *   Need to show: `(index_new == -1 AND target not in A[0...i]) OR (index_new is smallest k < i_new s.t. A[k] == target)` AND `0 <= i_new <= n`.
            *   If `target` was not in `A[0...i-1]` and `A[i] != target`, then `target` is not in `A[0...i]`. `index_new` is still `-1`. This part of the invariant holds.
            *   If `index` was already set (meaning `target` was found at `index < i`), then `index_new` equals that `index`. The condition `index is the smallest k < i s.t. A[k] == target` means `index_new` is the smallest `k < i`. Since `A[i] != target`, `index_new` is also the smallest `k < i_new` such that `A[k] == target`. This part of the invariant holds.
            *   `0 <= i_new <= n` becomes `0 <= i+1 <= n`. This holds if `i < n`, which is the loop condition.
    *   `P` is maintained.

3.  **Termination:**
    *   Loop terminates when `i >= n` or `break` is encountered.
    *   If `break` is encountered, `index` is set to the first `i` where `A[i] == target`. The post-condition is met.
    *   If loop finishes because `i == n`: The invariant states `(index == -1 AND target is NOT in A[0...n-1])` (since `index` was never updated from its initial `-1` and no `break` occurred). This matches the post-condition for when `target` is not found.

**Answer 3:**

**Proposed Loop Invariant (P):** `sum_sq = 1^2 + 2^2 + ... + (i-1)^2 AND 1 <= i <= n + 1`

**Proof Sketch:**

1.  **Initialization:**
    *   Before loop: `sum_sq = 0`, `i = 1`.
    *   Invariant: `sum_sq = 1^2 + ... + (i-1)^2` becomes `0 = 1^2 + ... + (0)^2`. This is usually interpreted as `0 = 0` (sum of empty set). Or, more formally, `sum_sq = (i-1)^2 + ... + 1^2`. For `i=1`, `sum_sq = (1-1)^2 + ... + 1^2` implies an empty sum if we consider terms down to `1^2`. A clearer way for this loop: `sum_sq` accumulates terms *up to `i-1`*. So, before the loop `i=1`, `sum_sq` should be sum up to `0`. `sum_sq = 0`.
    *   Let's rephrase the invariant to be more precise with the loop structure:
        **Revised Proposed Loop Invariant (P):** `sum_sq = \sum_{k=1}^{i-1} k^2 AND 1 <= i <= n + 1`
    *   Initialization with revised invariant:
        *   Before loop: `sum_sq = 0`, `i = 1`.
        *   Invariant requires `sum_sq = \sum_{k=1}^{1-1} k^2 = \sum_{k=1}^{0} k^2 = 0`. This holds.
        *   Invariant requires `1 <= i <= n + 1`. `1 <= 1 <= n + 1`. This holds.
    *   `P` holds.

2.  **Maintenance:**
    *   Assume `P` holds: `sum_sq = \sum_{k=1}^{i-1} k^2 AND 1 <= i <= n + 1`.
    *   Loop body: `sum_sq_new = sum_sq + (i * i)`, `i_new = i + 1`.
    *   Need to show: `sum_sq_new = \sum_{k=1}^{i_new-1} k^2 AND 1 <= i_new <= n + 1`.
    *   `sum_sq_new = (\sum_{k=1}^{i-1} k^2) + (i * i) = \sum_{k=1}^{i} k^2`.
    *   Since `i_new - 1 = (i + 1) - 1 = i`, we have `sum_sq_new = \sum_{k=1}^{i_new-1} k^2`. (Holds).
    *   If loop executes, `i <= n`. So `i + 1 <= n + 1`, which means `i_new <= n + 1`. Since `i >= 1`, `i_new = i+1 >= 2`. So `1 <= i_new <= n + 1`. (Holds).
    *   `P` is maintained.

3.  **Termination:**
    *   Loop terminates when `i <= n` is false, i.e., `i > n`. Since `i` increments by 1, this means `i` becomes `n+1`. So, the loop termination condition is `i = n + 1`.
    *   Invariant: `sum_sq = \sum_{k=1}^{i-1} k^2 AND 1 <= i <= n + 1`.
    *   Combine invariant with `i = n + 1`:
        *   `sum_sq = \sum_{k=1}^{(n+1)-1} k^2 = \sum_{k=1}^{n} k^2`.
    *   This matches the post-condition.

---
This concludes the study notes on loop invariants for Module 4. Remember to practice deriving invariants for various loops to master this crucial verification technique.
