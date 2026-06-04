---
title: "Cyclic Codes : Generator and Parity-Check Matrices of Cyclic Codes."
subject: "CODING THEORY"
module: "Module 2: Cyclic Codes : Generator and Parity"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b107"
status: "completed"
scrapedAt: "2026-05-20T16:10:27.039Z"
---
# CODING THEORY - MODULE 2: CYCLIC CODES

## Topic: Cyclic Codes: Generator and Parity-Check Matrices

**Description:** This topic focuses on the construction and properties of generator and parity-check matrices for cyclic codes. Understanding these matrices is crucial for encoding and decoding cyclic codes effectively.

**Learning Outcomes:**

*   Understand the concept of a generator polynomial for cyclic codes.
*   Be able to construct the generator matrix of a cyclic code from its generator polynomial.
*   Understand the concept of a parity-check polynomial for cyclic codes.
*   Be able to construct the parity-check matrix of a cyclic code from its generator polynomial and parity-check polynomial.
*   Be able to use the generator and parity-check matrices for encoding and error detection, respectively.
*   Understand the relationship between the generator polynomial and the parity-check polynomial.

---

### 1. Key Concepts and Definitions

*   **Cyclic Code:** A linear block code where a cyclic shift of any codeword results in another valid codeword. In other words, if `(c0, c1, ..., cn-1)` is a codeword, then `(cn-1, c0, ..., cn-2)` is also a codeword.

*   **Polynomial Representation of a Codeword:** A codeword `(c0, c1, ..., cn-1)` can be represented as a polynomial `c(x) = c0 + c1x + c2x^2 + ... + cn-1x^(n-1)`.

*   **Generator Polynomial g(x):**  For a cyclic code of length `n` and dimension `k`, there exists a unique monic polynomial `g(x)` of degree `n-k` that generates the code.  This means every codeword polynomial `c(x)` in the code can be expressed as `c(x) = s(x)g(x)` for some polynomial `s(x)` of degree at most `k-1`.

    *   `g(x)` is a factor of `xn - 1`.
    *   `g(x)` has the lowest degree among all non-zero code polynomials.

*   **Generator Matrix G:** A k x n matrix whose rows are linearly independent codewords that span the code.  For a cyclic code, the generator matrix can be constructed from the coefficients of the generator polynomial `g(x)`.

*   **Parity-Check Polynomial h(x):** A polynomial such that `g(x)h(x) = xn - 1`. It has degree `k`.

*   **Parity-Check Matrix H:** An (n-k) x n matrix such that `GH^T = 0`.  It can be constructed from the parity-check polynomial `h(x)`. It’s used to detect errors in received codewords. If `r` is the received vector, then `rHT = 0` if and only if `r` is a valid codeword. Otherwise, it indicates an error.

*   **Syndrome:**  The vector `s = rHT`, where `r` is the received vector and `H` is the parity-check matrix.  The syndrome provides information about the error pattern.

### 2. Generator Matrix G

*   **Construction:** Given the generator polynomial `g(x) = g0 + g1x + ... + gn-kx^(n-k)`, the generator matrix `G` can be formed as follows:

    ```
    G = | g0  g1  g2 ... gn-k  0   0  ... 0 |
        | 0   g0  g1 ... gn-k-1 gn-k 0  ... 0 |
        | 0   0   g0 ... gn-k-2 gn-k-1 gn-k ... 0 |
        | ...                                 |
        | 0   0   0  ... g0    g1  g2 ... gn-k|
    ```

    The rows are cyclic shifts of the generator polynomial's coefficients. G is a `k x n` matrix.

*   **Encoding:** To encode a message `m = (m0, m1, ..., mk-1)`, represented as a polynomial `m(x) = m0 + m1x + ... + mk-1x^(k-1)`, we multiply the message vector by the generator matrix:

    `c = mG`

    This is equivalent to `c(x) = m(x)g(x)`.

**Example:**

Let `n = 7`, `k = 4`, and `g(x) = 1 + x + x^3`.  Therefore, `g(x) = 1 + 1x + 0x^2 + 1x^3`.

The generator matrix G is:

```
G = | 1  1  0  1  0  0  0 |
    | 0  1  1  0  1  0  0 |
    | 0  0  1  1  0  1  0 |
    | 0  0  0  1  1  0  1 |
```

To encode the message `m = (1, 0, 1, 1)`, the message polynomial is `m(x) = 1 + x^2 + x^3`.
`c = mG = (1 0 1 1) * G = (1 1 1 0 0 1 1)`

Therefore, the codeword is `c(x) = 1 + x + x^2 + x^5 + x^6`.

### 3. Parity-Check Matrix H

*   **Construction:** Given the parity-check polynomial `h(x) = h0 + h1x + ... + hkx^k`, where `g(x)h(x) = xn - 1`, the parity-check matrix `H` can be formed as follows:

    First, find the coefficients of `h(x)`.  Then, construct the following matrix:

    ```
    H = | hk  hk-1 hk-2 ... h0  0   0  ... 0 |
        | 0   hk  hk-1 ... h1  h0  0  ... 0 |
        | 0   0   hk  ... h2  h1  h0 ... 0 |
        | ...                                 |
        | 0   0   0  ... hk  hk-1 hk-2 ... h0|
    ```

    Then, `H` is a `(n-k) x n` matrix.  For binary codes, `xn - 1 = g(x)h(x)` implies that `h(x) = (xn - 1) / g(x)`.

    A more convenient method is to use:

    `H = [ -AT | I_(n-k) ]` where G = [ I_k | A ] and `-AT` represents the negative transpose of A. In binary arithmetic, `-AT = AT`.

*   **Error Detection:**  If `r` is the received vector, calculate the syndrome `s = rHT`.

    *   If `s = 0`, the received vector is a valid codeword (or no detectable error).
    *   If `s != 0`, the received vector contains an error.

**Example:**

Continuing with the previous example: `n = 7`, `k = 4`, `g(x) = 1 + x + x^3`.  We need to find `h(x)` such that `g(x)h(x) = x^7 - 1`.  Since we are dealing with binary polynomials, `-1` is equivalent to `+1`.  Thus we are looking for `g(x)h(x) = x^7 + 1`.

Using polynomial division: `(x^7 + 1) / (x^3 + x + 1) = x^4 + x^2 + x + 1`.

Therefore, `h(x) = 1 + x + x^2 + x^4`.

The parity-check matrix H is:

```
H = | 1  1  1  0  1  0  0 |
    | 0  1  1  1  0  1  0 |
    | 0  0  1  1  1  0  1 |
```

Now consider the received codeword `r = (1 1 1 0 0 1 0)`.  Calculating the syndrome:

`s = rHT = (1 1 1 0 0 1 0) * H^T = (0 1 0)`

Since `s != 0`, an error is detected.

### 4. Relationship between g(x) and h(x)

*   The generator polynomial `g(x)` and the parity-check polynomial `h(x)` are related by:

    `g(x)h(x) = xn - 1` (or `xn + 1` in binary fields).

*   Given `g(x)`, you can find `h(x)` by polynomial division: `h(x) = (xn - 1) / g(x)`.

*   The roots of `g(x)` are zeros of the code.  If α is a root of `g(x)`, then `g(α) = 0`.  Similarly, if α is a root of `h(x)`, then `h(α) = 0`.

### 5. Practice Questions and Exercises

**Question 1:**

For a cyclic code with `n = 7` and generator polynomial `g(x) = 1 + x^2 + x^3`, find:

*   (a) The generator matrix `G`.
*   (b) The parity-check polynomial `h(x)`.
*   (c) The parity-check matrix `H`.
*   (d) Encode the message `m = (1, 0, 0, 1)`.
*   (e) Determine if the received vector `r = (1 1 0 1 0 1 0)` contains an error.

**Answer 1:**

*   (a) `g(x) = 1 + 0x + 1x^2 + 1x^3`.  Therefore:

    ```
    G = | 1  0  1  1  0  0  0 |
        | 0  1  0  1  1  0  0 |
        | 0  0  1  0  1  1  0 |
        | 0  0  0  1  0  1  1 |
    ```

*   (b)  `h(x) = (x^7 + 1) / (x^3 + x^2 + 1) = x^4 + x^3 + x + 1`.  Therefore, `h(x) = 1 + x + x^3 + x^4`.

*   (c)

    ```
    H = | 1  1  0  1  1  0  0 |
        | 0  1  1  0  1  1  0 |
        | 0  0  1  1  0  1  1 |
    ```

*   (d) `m(x) = 1 + x^3`. `c = mG = (1 0 0 1) * G = (1 0 1 0 1 1 1)`.  Therefore, `c = (1, 0, 1, 0, 1, 1, 1)`.

*   (e) `s = rHT = (1 1 0 1 0 1 0) * H^T = (0 0 0)`. Since `s = 0`, the received vector does *not* contain a detectable error.

**Question 2:**

What are the degrees of `g(x)` and `h(x)` for a cyclic code of length `n` and dimension `k`?

**Answer 2:**

*   Degree of `g(x)`: `n - k`
*   Degree of `h(x)`: `k`

**Question 3:**

Why is the generator polynomial g(x) a factor of xn - 1?

**Answer 3:**

The generator polynomial `g(x)` must be a factor of `xn - 1` (or `xn + 1` in binary) to ensure that the cyclic shifts of codewords generated by `g(x)` remain within the code.  This relationship ensures the cyclic property is maintained, as multiplying by x represents a cyclic shift and `xn - 1` is equivalent to zero, meaning after *n* cyclic shifts you are back where you started within the vector space.

### 6. Important Points to Remember

*   The generator polynomial `g(x)` is a crucial element in defining and constructing cyclic codes.
*   The generator matrix `G` provides a systematic way to encode messages into codewords.
*   The parity-check matrix `H` provides a mechanism for error detection.
*   The relationship `g(x)h(x) = xn - 1` is fundamental to understanding the connection between the generator and parity-check polynomials.
*   The syndrome `s = rHT` is the key to detecting errors in received codewords.  A zero syndrome indicates a valid codeword (or an undetectable error).
*   Cyclic codes are widely used in various applications, including data storage, communication systems, and cryptography, due to their efficient encoding and decoding algorithms.
