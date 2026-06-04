---
title: "Encoding of Cyclic Codes, Syndrome Computation and Error Detection"
subject: "CODING THEORY"
module: "Module 2: Cyclic Codes : Generator and Parity"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b108"
status: "completed"
scrapedAt: "2026-05-20T16:10:27.759Z"
---
# CODING THEORY: Module 2 - Cyclic Codes: Generator and Parity
## Topic: Encoding of Cyclic Codes, Syndrome Computation and Error Detection

**Learning Outcomes:**

*   Understand the encoding process of cyclic codes.
*   Learn how to compute the syndrome of a received codeword.
*   Understand how the syndrome is used for error detection.

### 1. Introduction to Cyclic Codes

*   **Definition:** Cyclic codes are a subclass of linear block codes with an important property: if a codeword `(c0, c1, ..., cn-1)` is a valid codeword, then any cyclic shift of that codeword `(cn-1, c0, ..., cn-2)` is also a valid codeword.
*   **Polynomial Representation:** A codeword `(c0, c1, ..., cn-1)` can be represented as a polynomial `c(x) = c0 + c1x + c2x^2 + ... + cn-1x^(n-1)`.  Cyclic shifts translate to multiplying the polynomial by *x* modulo *x<sup>n</sup> - 1*.
*   **Generator Polynomial (g(x)):**  A cyclic code is uniquely defined by its generator polynomial, `g(x)`, which is a monic polynomial of degree `n-k` (where *n* is the block length and *k* is the message length) and divides `x^n - 1`.  Every codeword `c(x)` is a multiple of `g(x)`.
*   **Key Parameters:**
    *   *n*: Block length
    *   *k*: Message length
    *   *n - k*: Number of parity check bits
    *   *g(x)*: Generator polynomial
    *   *h(x)*: Parity check polynomial

### 2. Encoding of Cyclic Codes

*   **Goal:**  Transform a message `m(x)` of degree less than *k* into a codeword `c(x)` of degree less than *n*.

*   **Encoding Procedure:**

    1.  **Multiply the message polynomial by *x<sup>n-k</sup>*:**  This shifts the message bits to the higher-order coefficients, creating space for the parity bits in the lower-order coefficients.
        `x^(n-k) * m(x)`
    2.  **Divide *x<sup>n-k</sup>m(x)* by the generator polynomial *g(x)*:** This yields a quotient `q(x)` and a remainder `r(x)`.
        `x^(n-k)m(x) = q(x)g(x) + r(x)` where degree(r(x)) < degree(g(x)) = n-k
    3.  **Set the codeword equal to *x<sup>n-k</sup>m(x) - r(x)*:**  Since `r(x)` is the remainder, subtracting it from `x^(n-k)m(x)` makes the result divisible by `g(x)`, thus a valid codeword.  In binary arithmetic, subtraction is equivalent to addition (XOR).
        `c(x) = x^(n-k)m(x) + r(x)`
    4.  **Check:** Verify that `c(x)` is divisible by `g(x)`.

*   **Systematic Encoding:** The encoding procedure described above produces a systematic code, meaning the message bits are directly present within the codeword.  The codeword is of the form `c(x) = r(x) + x^(n-k)m(x)`. The first *n-k* bits are the parity check bits `r(x)` and the last *k* bits are the message bits `m(x)`.
*   **Advantages of Systematic Codes:** Simpler decoding since the original message can be easily extracted from the codeword.

*   **Encoding Circuit:** The encoding procedure can be implemented using a linear feedback shift register (LFSR) circuit. The structure of the LFSR is determined by the coefficients of the generator polynomial `g(x)`.

**Example:**

Let's consider a (7, 4) cyclic code with generator polynomial `g(x) = x^3 + x + 1`.  Suppose the message is `m = (1 0 1 1)`.

1.  `m(x) = 1 + x^2 + x^3`
2.  `n = 7`, `k = 4`, `n - k = 3`
3.  `x^(n-k)m(x) = x^3(1 + x^2 + x^3) = x^3 + x^5 + x^6`
4.  Divide `x^3 + x^5 + x^6` by `x^3 + x + 1`:  (Using polynomial long division)
    ```
              x^3 + x + 1
        --------------------
    x^3+x+1 | x^6 + x^5 + x^3
              x^6 +   x^4 + x^3
              --------------------
                    x^5 + x^4
                    x^5 +   x^3 + x^2
                    --------------------
                          x^4 + x^3 + x^2
                          x^4 +   x^2 + x
                          --------------------
                                x^3 + x
                                x^3 + x + 1
                                --------------------
                                      1
    ```
    Therefore,  `q(x) = x^3 + x + 1` and `r(x) = 1`.
5.  `c(x) = x^(n-k)m(x) + r(x) = (x^3 + x^5 + x^6) + 1 = 1 + x^3 + x^5 + x^6`
6.  The codeword is `c = (1 0 0 1 0 1 1)`.  The first three bits (1 0 0) are the parity check bits, and the last four bits (1 0 1 1) are the message bits.

**Practice Question 1:**

Encode the message `m = (0 1 1 0)` using the same (7, 4) cyclic code with `g(x) = x^3 + x + 1`. Show all steps.

**Answer 1:**

1. `m(x) = x + x^2`
2. `x^(n-k)m(x) = x^3(x + x^2) = x^4 + x^5`
3. Divide `x^4 + x^5` by `x^3 + x + 1`:
    ```
               x^2 + x + 1
        --------------------
    x^3+x+1 | x^5 + x^4
              x^5 +   x^3 + x^2
              --------------------
                    x^4 + x^3 + x^2
                    x^4 +   x^2 + x
                    --------------------
                          x^3 + x
                          x^3 + x + 1
                          --------------------
                                1
    ```
    Therefore, `q(x) = x^2 + x + 1` and `r(x) = 1`
4. `c(x) = x^(n-k)m(x) + r(x) = (x^4 + x^5) + 1 = 1 + x^4 + x^5`
5. The codeword is `c = (1 0 0 0 1 1 0)`.

### 3. Syndrome Computation

*   **Purpose:** To detect the presence of errors in a received word `r(x)`.
*   **Principle:** A received word `r(x)` is divided by the generator polynomial `g(x)`. If the remainder is zero, then the received word is assumed to be a valid codeword (or has an undetectable error). If the remainder is non-zero, then an error has occurred. The remainder is called the *syndrome*.

*   **Syndrome Calculation:**
    `s(x) = r(x) mod g(x)`
    *   If `s(x) = 0`, the received word is a valid codeword (or an undetectable error has occurred).
    *   If `s(x) ≠ 0`, the received word contains errors.
*   **Relationship to Parity Check Polynomial *h(x)*:**
    *   Recall that *g(x)h(x) = x<sup>n</sup> - 1*. The parity check polynomial can also be used to compute the syndrome, but using a slightly different approach.
    *   The parity check matrix *H* is derived from *h(x)*. The syndrome can be calculated as:  `s = rH^T`, where `r` is the received vector.

*   **Error Vector:** The received word `r(x)` can be expressed as the sum of the transmitted codeword `c(x)` and an error vector `e(x)`:
    `r(x) = c(x) + e(x)`
*   **Syndrome and Error Vector:**
    `s(x) = r(x) mod g(x) = (c(x) + e(x)) mod g(x) = e(x) mod g(x)`
    *   The syndrome depends only on the error pattern `e(x)` and not on the transmitted codeword `c(x)`.

**Example:**

Consider the (7, 4) code with `g(x) = x^3 + x + 1`. Let's say the transmitted codeword was `c(x) = 1 + x^3 + x^5 + x^6`, and the received word is `r(x) = 1 + x^3 + x^4 + x^6`. The error is in the x<sup>4</sup> term.

1.  Calculate the syndrome: `s(x) = r(x) mod g(x) = (1 + x^3 + x^4 + x^6) mod (x^3 + x + 1)`

    ```
              x^3 + 1
        --------------------
    x^3+x+1 | x^6 + x^4 + x^3 + 1
              x^6 +   x^4 + x^3
              --------------------
                               1
              0
    ```

    Therefore, the division is not perfect and the correct remainder calculation is shown below:

    ```
                 x^3 + 1
        --------------------
    x^3+x+1 | x^6 + 0x^5 + x^4 + x^3 + 0x^2 +0x + 1
              x^6 +   0x^5 + x^4 + x^3
              --------------------
                                 0x^2+0x + 1
                               1
    ```
      Therefore, `s(x) = 1`. Since `s(x) != 0` an error is detected.

2.  The error vector is `e(x) = r(x) - c(x) = (1 + x^3 + x^4 + x^6) - (1 + x^3 + x^5 + x^6) = x^4 + x^5`.
3. `s(x) = e(x) mod g(x) = (x^4+x^5) mod (x^3 + x + 1)`

    ```
       x^2 + x + 1
        --------------------
    x^3+x+1 | x^5 + x^4
              x^5 +   x^3 + x^2
              --------------------
                    x^4 + x^3 + x^2
                    x^4 +   x^2 + x
                    --------------------
                          x^3 + x
                          x^3 + x + 1
                          --------------------
                                1
    ```
So the remainder is 1 and therefore `s(x) =1`.

**Practice Question 2:**

For the same (7, 4) code with `g(x) = x^3 + x + 1`, suppose the received word is `r = (1 1 0 0 1 0 1)`. Compute the syndrome `s(x)`. Is an error detected?

**Answer 2:**

1. `r(x) = 1 + x + x^4 + x^6`
2. `s(x) = r(x) mod g(x) = (1 + x + x^4 + x^6) mod (x^3 + x + 1)`

```
            x^3 + x + 1
    -------------------------
x^3+x+1 |  x^6 + 0x^5 + x^4 + 0x^3 + x + 1
          x^6 + 0x^5 + x^4 + x^3
          --------------------------
                            x^3 + x + 1
                            x^3 + x + 1
                            -------------
                            0
```

Then s(x) = 0. No errors are detected.
### 4. Error Detection

*   **Syndrome as Error Detector:** A non-zero syndrome indicates that the received word contains at least one error.
*   **Limitations:**
    *   **Undetectable Errors:** If the error pattern `e(x)` is a multiple of `g(x)`, then `s(x) = e(x) mod g(x) = 0`, and the error will go undetected.  The code's ability to detect errors depends on its minimum distance *d<sub>min</sub>*. A code with minimum distance *d<sub>min</sub>* can detect up to *d<sub>min</sub> - 1* errors.
    *   **Error Correction:**  Syndrome computation, as described so far, only detects errors.  More sophisticated decoding techniques are needed to *correct* errors.
*   **Error Detection Probability:** The probability of detecting errors depends on the error characteristics of the channel and the properties of the code (specifically, its minimum distance).

**Important Points to Remember:**

*   Cyclic codes are defined by their generator polynomial *g(x)*.
*   Encoding involves multiplying the message by *x<sup>n-k</sup>*, dividing by *g(x)* to get the remainder, and then adding the remainder to the shifted message.
*   Syndrome computation involves dividing the received word by *g(x)*.  A non-zero syndrome indicates an error.
*   Error detection is limited by the code's minimum distance. Codes can only *detect* up to d<sub>min</sub>-1 number of errors.
*   Undetectable errors occur when the error polynomial is a multiple of the generator polynomial.

**Practice Question 3:**

For the (7,4) code and g(x) above, will an error pattern e(x) = x + x<sup>3</sup> + x<sup>4</sup> be detectable?

**Answer 3:**

1. We must determine if `s(x) = e(x) mod g(x) = (x + x^3 + x^4) mod (x^3 + x + 1)` is zero or non-zero.

    ```
            x + 1
    --------------------
x^3+x+1 | x^4 + x^3 + x
        x^4 +   x^2 + x
        --------------
        x^3 + x^2
        x^3 +   x + 1
        ---------------
        x^2 + x + 1
    ```

So s(x) = x<sup>2</sup> + x + 1, is non-zero, therefore the error is detectable.
