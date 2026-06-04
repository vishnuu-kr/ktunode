---
title: "Substitution method and Master’s Theorem (proof not expected)"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 1: Algorithms – Characteristics"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b549"
status: "completed"
scrapedAt: "2026-05-20T16:45:32.478Z"
---
# DESIGN AND ANALYSIS OF ALGORITHMS: Module 1 - Algorithms – Characteristics

## Topic: Substitution Method and Master’s Theorem

**Learning Outcomes:**

*   Understand the concept of recurrence relations and their importance in algorithm analysis.
*   Learn and apply the Substitution Method to solve recurrence relations.
*   Understand the Master's Theorem and its use in solving recurrence relations.
*   Apply the Master's Theorem to solve a variety of recurrence relations.
*   Recognize the limitations of the Substitution Method and the Master's Theorem.

---

### 1. Introduction to Recurrence Relations

*   **Definition:** A recurrence relation is an equation that defines a sequence based on a rule that gives the next term as a function of the preceding term(s).  In the context of algorithms, recurrence relations describe the running time of recursive algorithms.

*   **Importance in Algorithm Analysis:** Many algorithms, particularly those based on divide-and-conquer strategies, are naturally expressed recursively. Recurrence relations provide a mathematical framework for analyzing their time complexity.

*   **General Form:**  T(n) = aT(n/b) + f(n), where:
    *   `T(n)` represents the time complexity for input size `n`.
    *   `a` is the number of subproblems in the recursion.
    *   `n/b` represents the size of each subproblem.
    *   `f(n)` is the time complexity of the work done outside the recursive calls (e.g., dividing the problem, combining the solutions).

*   **Base Case:** A recurrence relation must have a base case (or base cases) to stop the recursion. The base case specifies the time complexity for a small, constant input size.  Example: `T(1) = O(1)` or `T(0) = O(1)`.

### 2. Substitution Method

*   **Concept:** The substitution method involves two main steps:
    1.  **Guess the form of the solution.**  This often involves intuition or looking at patterns in the recurrence relation.
    2.  **Use mathematical induction to prove that the guess is correct.** This involves substituting the guessed solution into the recurrence relation and showing that it holds.

*   **Steps Involved:**
    1.  **Guess the form of the solution:**  Based on the recurrence, make an educated guess about its asymptotic behavior (e.g., O(n), O(n log n), O(n<sup>2</sup>)).  It's often helpful to start with the simplest guess and refine it if necessary.

    2.  **Inductive Hypothesis:** Assume that the guessed solution holds for all values less than `n`.  That is, assume `T(k) <= c * g(k)` for all `k < n`, where `g(n)` is the function in your guess (e.g., `n log n`, `n^2`), and `c` is a constant we need to find.

    3.  **Inductive Step:** Show that the guess holds for `n`. Substitute the inductive hypothesis into the recurrence relation and manipulate the expression to show that `T(n) <= c * g(n)`.

    4.  **Base Case Verification:**  Ensure that the guessed solution holds for the base case(s) of the recurrence.  This is crucial for the inductive proof to be valid. The constant `c` often needs to be chosen carefully to ensure the base case and inductive step hold.

*   **Key Considerations:**
    *   **Guessing correctly is crucial:**  If the initial guess is wrong, the substitution method will fail. It might require multiple attempts and refinements.
    *   **Choosing the right constant `c`:** The constant `c` plays a vital role in the inductive proof. It must be chosen such that both the base case and the inductive step hold.
    *   **Dealing with Floors and Ceilings:**  Sometimes recurrence relations involve floor or ceiling functions (e.g., `n/2`). When using the substitution method, these can be tricky. Often, you can ignore them for the sake of making a guess and then adjust your guess or the constant `c` to account for them.
    *   **"Subtracting a low-order term":**  Sometimes, you need to subtract a low-order term from the guess to make the inductive step work.  For example, instead of guessing `T(n) = O(n)`, you might guess `T(n) = O(n - b)` for some constant `b`.

*   **Example 1:**

    *   **Recurrence:** `T(n) = 2T(n/2) + n`, `T(1) = 1`

    *   **Guess:** `T(n) = O(n log n)`

    *   **Inductive Hypothesis:**  Assume `T(k) <= c * k * log<sub>2</sub>(k)` for all `k < n`.

    *   **Inductive Step:**
        ```
        T(n) = 2T(n/2) + n
             <= 2 * c * (n/2) * log2(n/2) + n   (by inductive hypothesis)
             = c * n * (log2(n) - log2(2)) + n
             = c * n * log2(n) - c * n + n
             = c * n * log2(n) + (1 - c) * n

        We want T(n) <= c * n * log2(n)
        So, (1 - c) * n <= 0
        Which means c >= 1
        ```

    *   **Base Case:** `T(1) = 1 <= c * 1 * log2(1) = 0` This base case fails. We need to adjust our base case definition to work with n=2.
        Let's redefine T(2) = 2T(1) + 2 = 2(1) + 2 = 4. We need to show that T(2) <= c * 2 * log2(2) = 2c.  So we need 4 <= 2c, which means c >= 2.  Let's choose c = 2.

    *   **Conclusion:** `T(n) = O(n log n)` if c >= 2

*   **Example 2:**

    *   **Recurrence:** `T(n) = T(n/2) + 1`,  `T(1) = 1`

    *   **Guess:** `T(n) = O(log n)`

    *   **Inductive Hypothesis:**  Assume `T(k) <= c * log<sub>2</sub>(k)` for all `k < n`.

    *   **Inductive Step:**
        ```
        T(n) = T(n/2) + 1
             <= c * log2(n/2) + 1  (by inductive hypothesis)
             = c * (log2(n) - log2(2)) + 1
             = c * log2(n) - c + 1

        We want T(n) <= c * log2(n)
        So, -c + 1 <= 0
        Which means c >= 1
        ```

    *   **Base Case:** T(1) = 1 <= c * log2(1) = 0. This base case fails again.  Let's define T(2) = T(1) + 1 = 1 + 1 = 2.  We need to show that T(2) <= c * log2(2) = c.  So we need 2 <= c.  Let's choose c = 2.

    *   **Conclusion:** `T(n) = O(log n)` if c >= 2

### 3. Master's Theorem

*   **Concept:** The Master's Theorem provides a "cookbook" method for solving recurrence relations of the form:

    `T(n) = aT(n/b) + f(n)`

    where:
    *   `a >= 1` is the number of subproblems.
    *   `b > 1` is the factor by which the subproblem size decreases.
    *   `f(n)` is a asymptotically positive function representing the cost of work done outside the recursive calls.

*   **Three Cases:** The Master's Theorem compares `f(n)` with `n<sup>log<sub>b</sub>a</sup>` and provides different solutions based on their relative growth rates.  The theorem requires checking for "polynomial" differences in growth rates.

    *   **Case 1:** If `f(n) = O(n<sup>log<sub>b</sub>a - ε</sup>)` for some constant `ε > 0`, then `T(n) = Θ(n<sup>log<sub>b</sub>a</sup>)`.  In this case, the cost of the subproblems dominates.

    *   **Case 2:** If `f(n) = Θ(n<sup>log<sub>b</sub>a</sup>)`, then `T(n) = Θ(n<sup>log<sub>b</sub>a</sup> log n)`. In this case, the cost of the subproblems and the cost of the work done outside the recursive calls are asymptotically the same.

    *   **Case 3:** If `f(n) = Ω(n<sup>log<sub>b</sub>a + ε</sup>)` for some constant `ε > 0`, and if `af(n/b) <= cf(n)` for some constant `c < 1` and sufficiently large `n` (the regularity condition), then `T(n) = Θ(f(n))`.  In this case, the cost of the work done outside the recursive calls dominates.

*   **Important Notes:**

    *   The Master's Theorem **does not apply** to all recurrence relations. It only applies to recurrences in the specific form described above.
    *   The regularity condition in Case 3 is often overlooked but is crucial for the theorem to be valid.
    *   The theorem requires polynomial differences in growth rates.  For example, it doesn't directly handle cases where `f(n)` grows as `n<sup>log<sub>b</sub>a</sup> log log n`.

*   **Applying the Master's Theorem: A Step-by-Step Guide**

    1.  **Identify `a`, `b`, and `f(n)`:**  Match the given recurrence relation to the form `T(n) = aT(n/b) + f(n)`.
    2.  **Calculate `n<sup>log<sub>b</sub>a</sup>`:** Compute this value.
    3.  **Compare `f(n)` with `n<sup>log<sub>b</sub>a</sup>`:** Determine which of the three cases applies based on the asymptotic comparison.
    4.  **Verify the Regularity Condition (Case 3 only):** If Case 3 appears to apply, check if the regularity condition `af(n/b) <= cf(n)` holds for some constant `c < 1` and sufficiently large `n`.
    5.  **Apply the appropriate solution:**  Use the corresponding solution from the Master's Theorem based on the applicable case.

*   **Example 1:**

    *   **Recurrence:** `T(n) = 2T(n/2) + n`
    *   `a = 2`, `b = 2`, `f(n) = n`
    *   `n<sup>log<sub>b</sub>a</sup> = n<sup>log<sub>2</sub>2</sup> = n`
    *   `f(n) = Θ(n<sup>log<sub>b</sub>a</sup>)`  (Case 2)
    *   **Solution:** `T(n) = Θ(n log n)`

*   **Example 2:**

    *   **Recurrence:** `T(n) = 4T(n/2) + n`
    *   `a = 4`, `b = 2`, `f(n) = n`
    *   `n<sup>log<sub>b</sub>a</sup> = n<sup>log<sub>2</sub>4</sup> = n<sup>2</sup>`
    *   `f(n) = O(n<sup>2 - 1</sup>)`  (Case 1, with ε = 1)
    *   **Solution:** `T(n) = Θ(n<sup>2</sup>)`

*   **Example 3:**

    *   **Recurrence:** `T(n) = 2T(n/2) + n<sup>2</sup>`
    *   `a = 2`, `b = 2`, `f(n) = n<sup>2</sup>`
    *   `n<sup>log<sub>b</sub>a</sup> = n<sup>log<sub>2</sub>2</sup> = n`
    *   `f(n) = Ω(n<sup>1 + 1</sup>)` (Case 3, with ε = 1)
    *   **Regularity Condition:** `af(n/b) = 2 * (n/2)<sup>2</sup> = n<sup>2</sup>/2 <= c * n<sup>2</sup> = cf(n)` for `c = 1/2 < 1`. The condition holds.
    *   **Solution:** `T(n) = Θ(n<sup>2</sup>)`

*   **Example 4 (Master's Theorem Doesn't Apply):**

    *   **Recurrence:** `T(n) = 2T(n/2) + n log n`
    *   `a = 2`, `b = 2`, `f(n) = n log n`
    *   `n<sup>log<sub>b</sub>a</sup> = n<sup>log<sub>2</sub>2</sup> = n`
    *   `f(n)` is asymptotically larger than `n`, but not *polynomially* larger.  It doesn't fit cleanly into any of the three cases because `f(n) = n log n` grows faster than `n`, but `log n` grows slower than `n<sup>ε</sup>` for any `ε > 0`. Thus the Master's Theorem cannot be directly used.

### 4. Limitations

*   **Substitution Method:**
    *   Requires a good initial guess, which can be difficult.
    *   Can be cumbersome and require clever algebraic manipulations.

*   **Master's Theorem:**
    *   Only applicable to recurrence relations of the form `T(n) = aT(n/b) + f(n)`.
    *   Doesn't handle all possible functions `f(n)`.  Specifically, it requires a polynomial difference in growth rates between `f(n)` and `n<sup>log<sub>b</sub>a</sup>`.
    *   The regularity condition in Case 3 must be verified.

### 5. Practice Questions/Exercises

1.  **Solve the following recurrence relation using the substitution method:**
    *   `T(n) = 2T(n/2) + 1`, `T(1) = 1`

2.  **Solve the following recurrence relation using the Master's Theorem:**
    *   `T(n) = 9T(n/3) + n`
    *   `T(n) = T(2n/3) + 1`
    *   `T(n) = 3T(n/4) + n log n`

3.  **Explain why the Master's Theorem cannot be applied to solve the following recurrence relation:**
    *   `T(n) = 2T(n/2) + n / log n`

4.  What are the key differences between the Substitution Method and the Master's Theorem? Which method is generally faster to apply, if applicable?

### 6. Answers to Practice Questions/Exercises

1.  **Substitution Method: `T(n) = 2T(n/2) + 1`, `T(1) = 1`**

    *   **Guess:** `T(n) = O(n)`
    *   **Inductive Hypothesis:** Assume `T(k) <= ck` for all `k < n`.
    *   **Inductive Step:**
        ```
        T(n) = 2T(n/2) + 1
             <= 2c(n/2) + 1
             = cn + 1
        We want cn + 1 <= cn.
        Let's adjust our guess: T(n) <= cn - b.
        T(n) <= 2(c(n/2) - b) + 1
            = cn - 2b + 1
            We want cn - 2b + 1 <= cn - b
            So, -2b + 1 <= -b, or 1 <= b. Let b = 1.
        ```
    *   Adjusted Guess: `T(n) = O(n - 1)`

    *   Base case: T(1) = 1 <= c(1) -1, 2<=c. Let c=2.

    *   Conclusion: T(n) = O(n-1) = O(n).
2.  **Master's Theorem:**

    *   `T(n) = 9T(n/3) + n`
        *   `a = 9`, `b = 3`, `f(n) = n`
        *   `n<sup>log<sub>b</sub>a</sup> = n<sup>log<sub>3</sub>9</sup> = n<sup>2</sup>`
        *   `f(n) = O(n<sup>2-1</sup>)` (Case 1, ε = 1)
        *   **Solution:** `T(n) = Θ(n<sup>2</sup>)`

    *   `T(n) = T(2n/3) + 1`
        *   Cannot directly apply master theorem, requires aT(n/b), not T(cn/b). However, this solves to O(log n).

    *   `T(n) = 3T(n/4) + n log n`
        *   `a = 3`, `b = 4`, `f(n) = n log n`
        *   `n<sup>log<sub>b</sub>a</sup> = n<sup>log<sub>4</sub>3</sup> ≈ n<sup>0.793</sup>`
        *   `f(n) = Ω(n<sup>log<sub>4</sub>3 + ε</sup>)` for some small `ε` (e.g., 0.207).
        *   **Regularity Condition:** `af(n/b) = 3 * (n/4) * log(n/4) = (3/4) * n * (log n - log 4) <= c * n log n = cf(n)` for `c < 1`. This holds for sufficiently large n if we choose `c` > 3/4.
        *   **Solution:** `T(n) = Θ(n log n)`

3.  **`T(n) = 2T(n/2) + n / log n`:** The Master's Theorem cannot be applied directly because `f(n) = n / log n` does not satisfy the polynomial condition for any of the three cases.  It's asymptotically smaller than `n`, but not polynomially smaller (i.e., there's no `ε > 0` such that `n / log n = O(n<sup>1 - ε</sup>)`).

4. **Key Differences and Speed Comparison:**

    * **Substitution Method:** Requires a "guess" for the solution, then uses induction to prove it. More flexible (can handle a wider range of recurrences) but can be tedious and requires intuition.
    * **Master's Theorem:** "Cookbook" approach that provides a direct solution based on comparing the function *f(n)* with *n<sup>log<sub>b</sub>a</sup>*. Less flexible (only applies to recurrences in a specific form), but much faster and easier to apply when it is applicable.

    **Speed:** The Master's Theorem is generally *much* faster when it applies. The substitution method involves a proof by induction which can be time consuming. If the problem fits the Master's Theorem, it should generally be your first attempt.

---

### 7. Important Points to Remember

*   Recurrence relations are crucial for analyzing the time complexity of recursive algorithms.
*   The Substitution Method is a powerful technique for solving recurrence relations, but it requires a good initial guess and can be cumbersome.
*   The Master's Theorem provides a convenient shortcut for solving recurrence relations of a specific form. However, it's essential to understand its limitations and to verify the regularity condition when Case 3 applies.
*   Always check the base case(s) when using the Substitution Method.
*   If the Master's theorem cannot be applied, consider other methods like the recursion tree method.
