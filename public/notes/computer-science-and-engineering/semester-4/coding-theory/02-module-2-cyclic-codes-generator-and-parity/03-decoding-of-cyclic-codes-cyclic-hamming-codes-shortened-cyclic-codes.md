---
title: "Decoding of Cyclic Codes, Cyclic Hamming Codes, Shortened Cyclic Codes"
subject: "CODING THEORY"
module: "Module 2: Cyclic Codes : Generator and Parity"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b109"
status: "completed"
scrapedAt: "2026-05-20T16:10:28.474Z"
---
## CODING THEORY - Module 2: Cyclic Codes - Decoding of Cyclic Codes, Cyclic Hamming Codes, Shortened Cyclic Codes

These notes cover the decoding of Cyclic Codes, Cyclic Hamming Codes, and Shortened Cyclic Codes, building upon the understanding of generators and parity established in earlier sections of Cyclic Codes.

**Learning Outcomes:**

*   Understand the syndrome decoding process for cyclic codes.
*   Learn about Cyclic Hamming Codes and their specific properties.
*   Understand the concept and application of Shortened Cyclic Codes.
*   Be able to decode Cyclic Hamming Codes.
*   Be able to construct and decode Shortened Cyclic Codes.

---

**1. Decoding of Cyclic Codes**

The general process for decoding cyclic codes involves using the syndrome to detect and correct errors.  Here's a breakdown:

*   **1.1 Syndrome Calculation:**

    *   **Definition:** The syndrome, denoted by *S(x)*, is a polynomial that depends only on the error pattern *E(x)* and the generator polynomial *g(x)*. It is independent of the original message.
    *   **Calculation:**
        *   Let *r(x)* be the received codeword.
        *   Divide *r(x)* by the generator polynomial *g(x)*.
        *   The remainder is the syndrome *S(x) = r(x) mod g(x)*.  This can be calculated using polynomial long division.
    *   **Mathematical Representation:** Since *r(x) = c(x) + e(x)*, where *c(x)* is the valid codeword and *e(x)* is the error polynomial, and *c(x)* is divisible by *g(x)*, then *r(x) mod g(x) = e(x) mod g(x)*. Thus, *S(x) = e(x) mod g(x)*.

*   **1.2 Error Detection:**

    *   If *S(x) = 0*, then *r(x)* is a valid codeword (or *e(x) = 0* meaning no error), meaning the received word is a valid code word or an undetectable error has occured.
    *   If *S(x) ≠ 0*, then an error is detected.

*   **1.3 Error Correction:**

    *   **Syndrome Lookup Table (Error Trapping):**
        *   For small block lengths and error-correcting capabilities, a syndrome lookup table can be created.  This table maps each possible syndrome to its corresponding error pattern.
        *   The table is pre-computed by calculating the syndrome for each possible error pattern of weight *t* or less (where *t* is the error-correcting capability).
        *   Upon receiving a codeword, the syndrome is calculated, and the corresponding error pattern is retrieved from the table.
        *   The error pattern is then subtracted (XORed) from the received codeword to obtain the corrected codeword: *c(x) = r(x) - e(x)*.

    *   **Error Pattern Calculation (Algebraic Decoding):**
        *   For more complex codes, algebraic methods are used to determine the error location and values. This is a more advanced topic beyond the scope of basic introductory notes.
        *   These methods often involve finding the roots of the syndrome polynomial to determine the error locations.

*   **1.4 Corrected Codeword Reconstruction:**

    *   Once the error pattern *e(x)* is determined, subtract it from the received codeword *r(x)* to obtain the corrected codeword *c(x)*.  Since we are working in GF(2), subtraction is equivalent to XOR (addition).
    *   *c(x) = r(x) - e(x) = r(x) + e(x)*

*   **Example:**

    *   Let *g(x) = x<sup>3</sup> + x + 1* be the generator polynomial of a (7,4) cyclic code.
    *   Let the received codeword be *r(x) = x<sup>6</sup> + x<sup>4</sup> + x<sup>2</sup> + x + 1* (binary representation 1010111).
    *   Calculate the syndrome: *S(x) = r(x) mod g(x)*.  Performing polynomial long division yields *S(x) = x<sup>2</sup>*.
    *   Suppose the syndrome lookup table maps *S(x) = x<sup>2</sup>* to the error pattern *e(x) = x<sup>4</sup>* (binary representation 0001000).
    *   The corrected codeword is *c(x) = r(x) + e(x) = (x<sup>6</sup> + x<sup>4</sup> + x<sup>2</sup> + x + 1) + (x<sup>4</sup>) = x<sup>6</sup> + x<sup>2</sup> + x + 1* (binary representation 1000111).
    *   Verify that *c(x)* is divisible by *g(x)*.

*   **Important Points:**
    *   Syndrome calculation is a crucial step in decoding cyclic codes.
    *   The syndrome depends only on the error pattern and generator polynomial.
    *   The complexity of error correction depends on the code's error-correcting capability and the decoding method used.

**2. Cyclic Hamming Codes**

Cyclic Hamming Codes are a special class of cyclic codes that are *perfect* single-error-correcting codes.  A perfect code achieves the tightest possible packing of codewords in the code space.

*   **2.1 Properties:**

    *   For any positive integer *m ≥ 2*, a Cyclic Hamming Code exists with the following parameters:
        *   Block length: *n = 2<sup>m</sup> - 1*
        *   Number of message bits: *k = 2<sup>m</sup> - 1 - m*
        *   Number of parity check bits: *r = m*
        *   Minimum distance: *d<sub>min</sub> = 3* (which guarantees single-error correction)
    *   The generator polynomial *g(x)* of a Cyclic Hamming Code is the minimal polynomial of a primitive element *α* in GF(2<sup>m</sup>).  A primitive element is a generator of the multiplicative group of GF(2<sup>m</sup>).  In other words, the powers of *α* generate all non-zero elements of the field.
    *   The parity check polynomial is given by *h(x) = (x<sup>n</sup> - 1) / g(x)*.

*   **2.2 Decoding of Cyclic Hamming Codes:**

    *   **Syndrome Calculation:** Same as in general cyclic code decoding: *S(x) = r(x) mod g(x)*.  Since we're using GF(2), addition and subtraction are equivalent to XOR.
    *   **Error Location:**
        *   In Hamming codes, the syndrome *S(x)* (when evaluated as a binary vector) directly corresponds to the binary representation of the error location.
        *   Specifically, if *S(x) = α<sup>i</sup>*, then the error is located at position *i*.  Remember that *α* is a primitive element in GF(2<sup>m</sup>).
        *   If *S(x) = 0*, no error is detected.
    *   **Error Correction:**
        *   Flip the bit at the error location.
        *   *c(x) = r(x) + x<sup>i</sup>*  (where *i* is the error location derived from the syndrome).

*   **2.3 Example:**

    *   Consider a (7,4) Cyclic Hamming Code, where *m = 3*.  *n = 2<sup>3</sup> - 1 = 7* and *k = 2<sup>3</sup> - 1 - 3 = 4*.
    *   Let *g(x) = x<sup>3</sup> + x + 1* (which is the minimal polynomial of a primitive element in GF(2<sup>3</sup>)).
    *   Let the received codeword be *r(x) = x<sup>5</sup> + x<sup>3</sup> + x + 1* (binary: 0101011).
    *   Calculate the syndrome: *S(x) = r(x) mod g(x) = x<sup>2</sup> + 1*.  (Binary: 0000101).
    *   To find the error location, we need to express *S(x)* as a power of *α*. This requires a precomputed table of powers of *α* (where *α* is a root of *g(x)*).

        | Power of α | Polynomial Representation | Binary Representation |
        |------------|-------------------------|-----------------------|
        | α<sup>0</sup>   | 1                       | 001                   |
        | α<sup>1</sup>   | x                       | 010                   |
        | α<sup>2</sup>   | x<sup>2</sup>                      | 100                   |
        | α<sup>3</sup>   | x + 1                   | 011                   |
        | α<sup>4</sup>   | x<sup>2</sup> + x                  | 110                   |
        | α<sup>5</sup>   | x<sup>2</sup> + x + 1              | 111                   |
        | α<sup>6</sup>   | x<sup>2</sup> + 1                  | 101                   |

    *   From the table, we see that *S(x) = x<sup>2</sup> + 1 = α<sup>6</sup>*. Therefore, the error is at location 6.
    *   Correct the error: *c(x) = r(x) + x<sup>6</sup> = (x<sup>5</sup> + x<sup>3</sup> + x + 1) + (x<sup>6</sup>) = x<sup>6</sup> + x<sup>5</sup> + x<sup>3</sup> + x + 1* (binary: 1101011).

*   **Important Points:**
    *   Cyclic Hamming Codes are single-error correcting codes.
    *   The syndrome in Hamming codes directly indicates the error location.
    *   Understanding finite field arithmetic and primitive elements is helpful in understanding Hamming code construction.

**3. Shortened Cyclic Codes**

Shortened Cyclic Codes are created by taking a (n, k) cyclic code and discarding a certain number of message bits, resulting in a (n-s, k-s) code, where 's' is the number of bits discarded.

*   **3.1 Concept:**

    *   A shortened cyclic code is derived from a longer cyclic code by systematically setting the *s* most significant message bits to zero *before* encoding.
    *   These *s* leading zeros are then discarded after encoding, resulting in a shorter codeword.
    *   Shortened cyclic codes are *not* cyclic, but they retain the good error-correcting properties of the original cyclic code.
    *   The minimum distance *d<sub>min</sub>* of the shortened code is *at least* as good as that of the original code.

*   **3.2 Construction:**

    *   Start with a (n, k) cyclic code defined by generator polynomial *g(x)*.
    *   To create an (n-s, k-s) shortened code, take *k-s* message bits, and prepend *s* zero bits, forming a *k*-bit message *m'(x)*.
    *   Encode *m'(x)* using the generator polynomial *g(x)* to produce an *n*-bit codeword *c'(x)*.
    *   Truncate *c'(x)* by removing the *s* most significant bits. The remaining *n-s* bits form the shortened codeword *c(x)*.

*   **3.3 Encoding and Decoding:**

    *   **Encoding:** Prepend *s* zeros to the message, encode using the generator polynomial of the original (n, k) code, and then truncate the *s* leading bits of the encoded message.
    *   **Decoding:**
        *   Append *s* zeros to the received (n-s)-bit word.
        *   Decode using the decoding algorithm for the original (n, k) cyclic code.
        *   If an error is corrected, the original message bits are extracted from the decoded codeword after removing the *s* added zeros.

*   **3.4 Example:**

    *   Consider a (7,4) cyclic code with *g(x) = x<sup>3</sup> + x + 1*.  We want to create a (5,2) shortened code (s = 2).
    *   Let the message for the shortened code be *m = (11)* which becomes *m(x) = x + 1*.
    *   Prepend two zeros: *m'(x) = 0x<sup>3</sup> + 0x<sup>2</sup> + x + 1 = x + 1*  (represented as 0011).  This is now a 4-bit message.
    *   Encode *m'(x)* using *g(x)*.  First, multiply *m'(x)* by *x<sup>(n-k)</sup> = x<sup>3</sup>* to get *x<sup>3</sup>(x + 1) = x<sup>4</sup> + x<sup>3</sup>*. Then, calculate the remainder when divided by *g(x)* to generate the parity bits.
        *   The valid codeword for *m'(x) = x + 1* is *c'(x) = x<sup>4</sup> + x<sup>3</sup> + (x<sup>2</sup> + 1) = x<sup>4</sup> + x<sup>3</sup> + x<sup>2</sup> + 1* which gives the original codeword as *0011101*
    *   The shortened codeword *c(x)* is obtained by removing the two leftmost bits from *c'(x)*, thus *c(x) = 11101*.
    *   **Decoding Example:** Suppose the received shortened codeword is *r(x) = 10101*.
    *   Append two zeros: *r'(x) = 0010101*.
    *   Decode *r'(x)* using the decoder for the (7,4) cyclic code.  Suppose the decoder corrects the error to *c'(x) = 0011101*.
    *   Remove the two leading zeros to obtain the corrected message for the shortened code: *11101*. Finally extract the message by removing the parity check bits *11*.

*   **Important Points:**

    *   Shortened cyclic codes are useful when a shorter block length is required.
    *   They retain the error-correcting capabilities of the original cyclic code, but are not cyclic themselves.
    *   Encoding and decoding involve padding with zeros and then using the encoding/decoding procedures of the parent cyclic code.

---

**Practice Questions/Exercises:**

1.  **Syndrome Decoding:** A (7,4) cyclic code has a generator polynomial *g(x) = x<sup>3</sup> + x + 1*. The received codeword is *r(x) = x<sup>5</sup> + x<sup>2</sup> + x*. Calculate the syndrome *S(x)*. Is an error detected? If a precomputed lookup table indicates *S(x) = x* corresponds to an error at *x<sup>1</sup>*, what is the corrected codeword?

    *   **Answer:**
        *   *S(x) = r(x) mod g(x) = x*
        *   Yes, an error is detected since *S(x) ≠ 0*.
        *   *e(x) = x*.  *c(x) = r(x) + e(x) = (x<sup>5</sup> + x<sup>2</sup> + x) + x = x<sup>5</sup> + x<sup>2</sup>*.

2.  **Cyclic Hamming Code:** Consider a (15, 11) cyclic Hamming code.
    *   What is the value of *m*?
    *   If the syndrome is *S(x) = α<sup>7</sup>*, where is the error located?

    *   **Answer:**
        *   *m = 4* (since *2<sup>m</sup> - 1 = 15*).
        *   The error is located at position 7.

3.  **Shortened Cyclic Code:** A (7,4) cyclic code with *g(x) = x<sup>3</sup> + x + 1* is shortened to a (4,1) code. The message bit is '1'.
    *   What message polynomial *m(x)* is used for the (4,1) code?
    *   What is the message polynomial *m'(x)* used in the longer (7,4) code?
    *   What is the encoded codeword *c'(x)* for m'(x)?
    *   What is the shortened encoded codeword *c(x)* for the (4,1) code?

    *   **Answer:**
        *   *m(x) = 1*
        *   *s = 3*, so *m'(x) = 0x<sup>3</sup> + 0x<sup>2</sup> + 0x + 1 = 1*
        *   *c'(x) = x<sup>3</sup> * m'(x) + remainder(x<sup>3</sup> * m'(x) / g(x)) = x<sup>3</sup> + x + 1*
        *   *c(x)* is *0110* with 's' number of parity bits removed from *c'(x)*.

---

**Important Points to Remember:**

*   Cyclic codes are efficiently encoded and decoded using shift registers.
*   Syndrome decoding is a powerful technique for error detection and correction.
*   Cyclic Hamming codes are perfect single-error-correcting codes with a simple error location mechanism.
*   Shortened cyclic codes provide flexibility in block length while retaining good error-correcting properties.
*   Understanding finite field arithmetic is essential for working with cyclic codes.
