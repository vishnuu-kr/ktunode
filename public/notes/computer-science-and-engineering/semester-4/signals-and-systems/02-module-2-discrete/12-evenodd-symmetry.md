---
title: "Even/Odd symmetry"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b153"
status: "completed"
scrapedAt: "2026-05-20T16:15:43.403Z"
---
# Signals and Systems: Module 2 - Discrete - Even/Odd Symmetry

## Learning Outcomes:

*   Define even and odd symmetry for discrete-time signals.
*   Determine if a given discrete-time signal is even, odd, or neither.
*   Decompose any discrete-time signal into its even and odd components.
*   Understand and apply the properties of even and odd signals.

## 1. Key Concepts and Definitions:

*   **Discrete-Time Signal:** A signal defined only at discrete points in time, typically represented as x[n], where n is an integer.

*   **Even Signal (Symmetric Signal):** A signal x[n] is considered even if it satisfies the following condition:
    ```
    x[n] = x[-n]  for all n
    ```
    This means the signal is symmetric about the vertical axis (n=0).  The samples at positive 'n' values are mirrored at the corresponding negative 'n' values.

*   **Odd Signal (Anti-Symmetric Signal):** A signal x[n] is considered odd if it satisfies the following condition:
    ```
    x[n] = -x[-n]  for all n
    ```
    This means the signal is anti-symmetric about the vertical axis (n=0). Note that for an odd signal, x[0] must be equal to 0, because x[0] = -x[-0] = -x[0], which implies 2x[0] = 0.

*   **Decomposition into Even and Odd Components:** Any discrete-time signal x[n] can be uniquely represented as the sum of its even component xe[n] and its odd component xo[n]:
    ```
    x[n] = xe[n] + xo[n]
    ```

    *   **Even Component (xe[n]):**
        ```
        xe[n] = (x[n] + x[-n]) / 2
        ```

    *   **Odd Component (xo[n]):**
        ```
        xo[n] = (x[n] - x[-n]) / 2
        ```

## 2. Determining Even/Odd Symmetry:

*   **Procedure:**
    1.  **Calculate x[-n]:**  Replace 'n' with '-n' in the expression for x[n].
    2.  **Compare x[n] and x[-n]:**
        *   If x[n] = x[-n] for all n, then x[n] is even.
        *   If x[n] = -x[-n] for all n, then x[n] is odd.
        *   If neither of the above conditions is met, then x[n] is neither even nor odd.

*   **Important Considerations:**
    *   It is crucial to verify the condition for *all* values of 'n'.
    *   Visual inspection of the signal's graph can be helpful, but is not a substitute for mathematical verification.
    *   A signal can be *neither* even nor odd, but *cannot* be both (except for the trivial case where x[n] = 0 for all n).

## 3. Examples:

*   **Example 1: Even Signal**

    ```
    x[n] = {..., 2, 1, 0, 1, 2, ...}  (with x[0] = 0)
               n =  -2 -1  0  1  2
    ```

    *   x[-n] = {..., 2, 1, 0, 1, 2, ...}  (with x[0] = 0)
               n =   2  1  0 -1 -2

    *   Since x[n] = x[-n], x[n] is even.

*   **Example 2: Odd Signal**

    ```
    x[n] = {..., -2, -1, 0, 1, 2, ...}  (with x[0] = 0)
               n =  -2  -1  0  1  2
    ```

    *   x[-n] = {..., -2, -1, 0, 1, 2, ...}  (with x[0] = 0)
               n =   2   1  0 -1 -2

    *   -x[-n] = {..., 2, 1, 0, -1, -2, ...} (with x[0] = 0)
               n =   2  1  0 -1  -2

    *   Since x[n] = -x[-n], x[n] is odd. Notice x[0] = 0.

*   **Example 3: Neither Even Nor Odd**

    ```
    x[n] = {..., 1, 2, 3, 4, 5, ...}  (arbitrary signal)
               n =  -2 -1  0  1  2
    ```

    *   x[-n] = {..., 5, 4, 3, 2, 1, ...}
               n =   2  1  0 -1 -2

    *   Clearly, x[n] ≠ x[-n] and x[n] ≠ -x[-n].  Therefore, x[n] is neither even nor odd.

*   **Example 4: x[n] = n^2**

    *   x[-n] = (-n)^2 = n^2 = x[n].  Therefore, x[n] is even.

*   **Example 5: x[n] = n^3**

    *   x[-n] = (-n)^3 = -n^3 = -x[n]. Therefore, x[n] is odd.

## 4. Decomposition into Even and Odd Components:

*   **Procedure:**
    1.  **Calculate x[-n]:**  Replace 'n' with '-n' in the expression for x[n].
    2.  **Calculate xe[n]:** Use the formula xe[n] = (x[n] + x[-n]) / 2.
    3.  **Calculate xo[n]:** Use the formula xo[n] = (x[n] - x[-n]) / 2.
    4.  **Verify:** Ensure that xe[n] is even and xo[n] is odd. Also, verify that xe[n] + xo[n] = x[n].

*   **Example:**

    ```
    x[n] = {..., 1, 2, 3, 4, 5, ...}  (for n = -2, -1, 0, 1, 2 respectively)
    ```

    1.  x[-n] = {..., 5, 4, 3, 2, 1, ...} (for n = -2, -1, 0, 1, 2 respectively)

    2.  xe[n] = (x[n] + x[-n]) / 2 = {..., (1+5)/2, (2+4)/2, (3+3)/2, (4+2)/2, (5+1)/2, ...} = {..., 3, 3, 3, 3, 3, ...}

    3.  xo[n] = (x[n] - x[-n]) / 2 = {..., (1-5)/2, (2-4)/2, (3-3)/2, (4-2)/2, (5-1)/2, ...} = {..., -2, -1, 0, 1, 2, ...}

    4.  Verification:

        *   xe[n] = {..., 3, 3, 3, 3, 3, ...} is even because xe[n] = xe[-n].
        *   xo[n] = {..., -2, -1, 0, 1, 2, ...} is odd because xo[n] = -xo[-n] and xo[0]=0.
        *   xe[n] + xo[n] = {..., 3-2, 3-1, 3+0, 3+1, 3+2, ...} = {..., 1, 2, 3, 4, 5, ...} = x[n].

## 5. Properties of Even and Odd Signals:

*   **Sum:**
    *   Even + Even = Even
    *   Odd + Odd = Odd
    *   Even + Odd = Neither (unless one is zero)

*   **Product:**
    *   Even * Even = Even
    *   Odd * Odd = Even
    *   Even * Odd = Odd

*   **Scaling:**
    *   a * Even = Even (where 'a' is a constant)
    *   a * Odd = Odd (where 'a' is a constant)

*   **Time Shift:**
    *   A time-shifted even signal is generally *neither* even nor odd.
    *   A time-shifted odd signal is generally *neither* even nor odd.
    *   Exception:  If a time-shifted version of an even signal is also even, then the shift must be a multiple of the signal's period if the signal is periodic, or 0 if it is aperiodic. Similar exception applies to odd signals.

*   **Convolution:**
      * Even *convolve* Even = Even
      * Odd *convolve* Odd = Even
      * Even *convolve* Odd = Odd

## 6. Practice Questions/Exercises:

1.  **Determine whether the following signals are even, odd, or neither:**

    *   a)  x[n] = n * cos(πn)
    *   b)  x[n] = sin(2πn)
    *   c)  x[n] = u[n] - u[-n] (where u[n] is the unit step function)
    *   d)  x[n] = 2^|n|
    *   e) x[n] = n^2 u[n]

2.  **Find the even and odd components of the following signal:**

    *   x[n] = {1, 2, 3, 4} for n = 0, 1, 2, 3 respectively. Assume x[n] = 0 for n < 0 and n > 3.

3. **What is the value of x[0] for a discrete-time odd signal?**

4. **If y[n] = x[n] * h[n], where * represents convolution, and x[n] is even and h[n] is odd, is y[n] even, odd, or neither?**

## 7. Answers to Practice Questions:

1.  *   a) **Odd:**
        *   x[-n] = (-n) * cos(π(-n)) = -n * cos(-πn) = -n * cos(πn) = -x[n]
    *   b) **Odd:**
        *   x[-n] = sin(2π(-n)) = sin(-2πn) = -sin(2πn) = -x[n]
    *   c) **Odd:**
        *   x[-n] = u[-n] - u[n] = -(u[n] - u[-n]) = -x[n]. Note that u[0] = 1 in this case.
    *   d) **Even:**
        *   x[-n] = 2^|-n| = 2^|n| = x[n]
    *   e) **Neither:**
        * x[-n] = (-n)^2 u[-n] = n^2 u[-n].  This is not equal to x[n] or -x[n].

2.  *   First, determine the signal values and their indices: x[0] = 1, x[1] = 2, x[2] = 3, x[3] = 4.  x[n] = 0 otherwise.

    *   Then, calculate x[-n]. Since the signal is defined for n=0 to n=3 and is 0 otherwise:
        x[-3] = 0, x[-2] = 0, x[-1] = 0, x[0] = 1, x[1] = 2, x[2] = 3, x[3] = 4.

        Now, define x[-n] assuming x[n] is zero outside of the 0-3 interval:
         x[-3] = 0, x[-2] = 0, x[-1] = 0, x[0] = 1, x[-1] = 0 , x[-2] = 0, x[-3]= 0.

    * We need to determine the range of n for xe[n] and xo[n]

        xe[0] = (x[0]+x[0])/2 = 1
        xo[0] = (x[0]-x[0])/2 = 0

        xe[1] = (x[1]+x[-1])/2 = (2+0)/2 = 1
        xo[1] = (x[1]-x[-1])/2 = (2-0)/2 = 1

        xe[2] = (x[2]+x[-2])/2 = (3+0)/2 = 1.5
        xo[2] = (x[2]-x[-2])/2 = (3-0)/2 = 1.5

        xe[3] = (x[3]+x[-3])/2 = (4+0)/2 = 2
        xo[3] = (x[3]-x[-3])/2 = (4-0)/2 = 2

        xe[-1] = (x[-1]+x[1])/2 = (0+2)/2 = 1
        xo[-1] = (x[-1]-x[1])/2 = (0-2)/2 = -1

        xe[-2] = (x[-2]+x[2])/2 = (0+3)/2 = 1.5
        xo[-2] = (x[-2]-x[2])/2 = (0-3)/2 = -1.5

        xe[-3] = (x[-3]+x[3])/2 = (0+4)/2 = 2
        xo[-3] = (x[-3]-x[3])/2 = (0-4)/2 = -2

        Therefore:
        xe[n] = {2, 1.5, 1, 1, 1.5, 2} for n = -3, -2, -1, 0, 1, 2, 3 respectively
        xo[n] = {-2, -1.5, -1, 0, 1, 1.5, 2} for n = -3, -2, -1, 0, 1, 2, 3 respectively

3.  **x[0] = 0** for a discrete-time odd signal.

4.  **Odd**.  Since y[n] is the convolution of an even signal x[n] and an odd signal h[n], y[n] will be an odd signal.

## 8. Important Points to Remember:

*   Always verify the even/odd conditions mathematically for *all* values of 'n'.
*   x[0] must be 0 for an odd signal.
*   Any signal can be decomposed into its even and odd components.  This decomposition is unique.
*   Understand and apply the properties of even and odd signals to simplify signal processing tasks.
* Visual inspection, while helpful, cannot replace mathematical proof.
