---
title: "Primitive Roots"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcc1"
status: "completed"
scrapedAt: "2026-05-20T16:53:50.966Z"
---
# FUNDAMENTALS OF CRYPTOGRAPHY: Module 1 - Introduction to Number Theory: Primitive Roots

## Learning Outcomes:

*   Understand the concept of the order of an integer modulo n.
*   Define and identify primitive roots modulo n.
*   Determine whether a given integer is a primitive root modulo n.
*   Calculate the number of primitive roots modulo n.
*   Apply the concept of primitive roots in cryptographic contexts (introduction).

## 1. Order of an Integer Modulo n

*   **Definition:** Let *a* and *n* be integers with *gcd(a, n) = 1*.  The **order** of *a* modulo *n*, denoted as *ord<sub>n</sub>(a)*, is the smallest positive integer *k* such that *a<sup>k</sup> ≡ 1 (mod n)*.

*   **Key Concepts:**
    *   **Euler's Totient Function (φ(n))**:  The number of integers between 1 and *n* that are relatively prime to *n*.  If *n = p<sub>1</sub><sup>e<sub>1</sub></sup> p<sub>2</sub><sup>e<sub>2</sub></sup> ... p<sub>r</sub><sup>e<sub>r</sub></sup>* (prime factorization), then *φ(n) = n(1 - 1/p<sub>1</sub>)(1 - 1/p<sub>2</sub>)...(1 - 1/p<sub>r</sub>)*.
    *   **Euler's Theorem:** If *gcd(a, n) = 1*, then *a<sup>φ(n)</sup> ≡ 1 (mod n)*.
    *   Therefore, *ord<sub>n</sub>(a)* always exists and is a positive integer.
    *   **Divisibility Property:** If *a<sup>k</sup> ≡ 1 (mod n)*, then *ord<sub>n</sub>(a) | k* (i.e., the order of *a* modulo *n* divides *k*).  This is crucial for finding the order.

*   **Example 1:** Find the order of 2 modulo 7.
    *   *gcd(2, 7) = 1*.
    *   Calculate powers of 2 modulo 7:
        *   2<sup>1</sup> ≡ 2 (mod 7)
        *   2<sup>2</sup> ≡ 4 (mod 7)
        *   2<sup>3</sup> ≡ 1 (mod 7)
    *   Therefore, *ord<sub>7</sub>(2) = 3*.

*   **Example 2:** Find the order of 3 modulo 11.
    *   *gcd(3, 11) = 1*.
    *   Calculate powers of 3 modulo 11:
        *   3<sup>1</sup> ≡ 3 (mod 11)
        *   3<sup>2</sup> ≡ 9 (mod 11)
        *   3<sup>3</sup> ≡ 5 (mod 11)
        *   3<sup>4</sup> ≡ 4 (mod 11)
        *   3<sup>5</sup> ≡ 1 (mod 11)
    *   Therefore, *ord<sub>11</sub>(3) = 5*.

## 2. Definition and Identification of Primitive Roots Modulo n

*   **Definition:** An integer *g* is a **primitive root modulo n** if *gcd(g, n) = 1* and *ord<sub>n</sub>(g) = φ(n)*.  In other words, the smallest positive integer *k* such that *g<sup>k</sup> ≡ 1 (mod n)* is *φ(n)*.

*   **Key Concepts:**
    *   A primitive root *g* modulo *n* generates all the integers relatively prime to *n* when raised to successive powers (modulo *n*). That is, the set {*g<sup>1</sup> mod n*, *g<sup>2</sup> mod n*, ..., *g<sup>φ(n)</sup> mod n*} is the same as the set of integers between 1 and *n* that are relatively prime to *n*.
    *   **Existence:** Primitive roots do not exist for all *n*. They exist if and only if *n* is of the form 2, 4, *p<sup>k</sup>*, or 2*p<sup>k</sup>*, where *p* is an odd prime and *k* is a positive integer.
    *   **Generators:** If *g* is a primitive root modulo *n*, then *g* is a generator of the multiplicative group of integers modulo *n*, denoted (ℤ/nℤ)<sup>×</sup>.

*   **Example 1:** Is 2 a primitive root modulo 5?
    *   *gcd(2, 5) = 1*.
    *   *φ(5) = 5 - 1 = 4* (since 5 is prime).
    *   Calculate powers of 2 modulo 5:
        *   2<sup>1</sup> ≡ 2 (mod 5)
        *   2<sup>2</sup> ≡ 4 (mod 5)
        *   2<sup>3</sup> ≡ 3 (mod 5)
        *   2<sup>4</sup> ≡ 1 (mod 5)
    *   Since *ord<sub>5</sub>(2) = 4 = φ(5)*, 2 is a primitive root modulo 5.

*   **Example 2:** Is 3 a primitive root modulo 7?
    *   *gcd(3, 7) = 1*.
    *   *φ(7) = 7 - 1 = 6* (since 7 is prime).
    *   Calculate powers of 3 modulo 7:
        *   3<sup>1</sup> ≡ 3 (mod 7)
        *   3<sup>2</sup> ≡ 2 (mod 7)
        *   3<sup>3</sup> ≡ 6 (mod 7)
        *   3<sup>4</sup> ≡ 4 (mod 7)
        *   3<sup>5</sup> ≡ 5 (mod 7)
        *   3<sup>6</sup> ≡ 1 (mod 7)
    *   Since *ord<sub>7</sub>(3) = 6 = φ(7)*, 3 is a primitive root modulo 7.

*   **Example 3:** Is 2 a primitive root modulo 7?  We already calculated *ord<sub>7</sub>(2) = 3*.  Since 3 ≠ φ(7) = 6, 2 is *not* a primitive root modulo 7.

## 3. Determining Whether a Given Integer is a Primitive Root Modulo n

*   **Method 1: Exhaustive Search (Not Efficient for Large n)**
    *   Calculate *φ(n)*.
    *   Calculate *g<sup>k</sup> (mod n)* for *k = 1, 2, ..., φ(n)* until you find *g<sup>k</sup> ≡ 1 (mod n)*.
    *   If the smallest such *k* is equal to *φ(n)*, then *g* is a primitive root modulo *n*.
*   **Method 2: Efficient Test (Using Prime Factors of φ(n))**
    *   Calculate *φ(n)*.
    *   Find the prime factorization of *φ(n)*: *φ(n) = p<sub>1</sub><sup>e<sub>1</sub></sup> p<sub>2</sub><sup>e<sub>2</sub></sup> ... p<sub>r</sub><sup>e<sub>r</sub></sup>*.
    *   For each prime factor *p<sub>i</sub>* of *φ(n)*, calculate *g<sup>φ(n)/p<sub>i</sub></sup> (mod n)*.
    *   If *g<sup>φ(n)/p<sub>i</sub></sup> ≢ 1 (mod n)* for all *i*, then *g* is a primitive root modulo *n*. This is because if *ord<sub>n</sub>(g)* divides *φ(n)/p<sub>i</sub>* for some *i*, then *ord<sub>n</sub>(g) < φ(n)*.

*   **Example:** Determine if 2 is a primitive root modulo 11.
    *   *φ(11) = 10*.
    *   Prime factorization of 10: *10 = 2 * 5*.
    *   Calculate 2<sup>10/2</sup> ≡ 2<sup>5</sup> ≡ 32 ≡ 10 (mod 11)
    *   Calculate 2<sup>10/5</sup> ≡ 2<sup>2</sup> ≡ 4 (mod 11)
    *   Since neither result is congruent to 1 (mod 11), 2 is a primitive root modulo 11.

*   **Example:** Determine if 3 is a primitive root modulo 13.
    *   *φ(13) = 12*.
    *   Prime factorization of 12: *12 = 2<sup>2</sup> * 3*. The distinct prime factors are 2 and 3.
    *   Calculate 3<sup>12/2</sup> ≡ 3<sup>6</sup> ≡ 729 ≡ -1 ≡ 12 (mod 13)
    *   Calculate 3<sup>12/3</sup> ≡ 3<sup>4</sup> ≡ 81 ≡ 3 (mod 13)
    *   Since neither result is congruent to 1 (mod 13), 3 is a primitive root modulo 13.

## 4. Calculating the Number of Primitive Roots Modulo n

*   If a primitive root modulo *n* exists, then there are exactly *φ(φ(n))* primitive roots modulo *n*.  This follows directly from the structure of the multiplicative group (ℤ/nℤ)<sup>×</sup>. If g is a primitive root modulo n, then all elements of the form g<sup>k</sup> are also primitive roots modulo n, if and only if gcd(k, φ(n)) = 1. Therefore, the number of such k (and thus primitive roots) is φ(φ(n)).

*   **Example 1:** How many primitive roots exist modulo 11?
    *   We know primitive roots exist modulo 11 (since 11 is prime).
    *   *φ(11) = 10*.
    *   *φ(φ(11)) = φ(10) = φ(2 * 5) = 10(1 - 1/2)(1 - 1/5) = 10 * (1/2) * (4/5) = 4*.
    *   Therefore, there are 4 primitive roots modulo 11.

*   **Example 2:** How many primitive roots exist modulo 19?
    *   We know primitive roots exist modulo 19 (since 19 is prime).
    *   *φ(19) = 18*.
    *   *φ(φ(19)) = φ(18) = φ(2 * 3<sup>2</sup>) = 18(1 - 1/2)(1 - 1/3) = 18 * (1/2) * (2/3) = 6*.
    *   Therefore, there are 6 primitive roots modulo 19.

## 5. Application of Primitive Roots in Cryptographic Contexts (Introduction)

*   **Discrete Logarithm Problem (DLP):** Primitive roots are fundamental in many cryptographic algorithms due to the difficulty of the Discrete Logarithm Problem. If *g* is a primitive root modulo *n* and *y ≡ g<sup>x</sup> (mod n)*, finding *x* given *g*, *y*, and *n* is the DLP. The difficulty of solving the DLP forms the basis for the security of algorithms like Diffie-Hellman key exchange and ElGamal encryption.

*   **Diffie-Hellman Key Exchange:**  Two parties agree on a large prime *p* and a primitive root *g* modulo *p*.  Each party chooses a secret integer (*a* or *b*), computes their public key (*g<sup>a</sup> mod p* or *g<sup>b</sup> mod p*), and exchanges these.  They can then compute a shared secret (*g<sup>ab</sup> mod p*) without ever revealing their individual secrets. The security depends on the DLP.

*   **ElGamal Encryption:**  ElGamal uses a large prime *p* and a primitive root *g* modulo *p*.  A user chooses a secret integer *x* and publishes their public key (*p, g, y = g<sup>x</sup> mod p*).  To encrypt a message *m*, the sender chooses a random integer *k* and sends (*c<sub>1</sub> = g<sup>k</sup> mod p*, *c<sub>2</sub> = m * y<sup>k</sup> mod p*). Decryption involves calculating *m = c<sub>2</sub> * (c<sub>1</sub><sup>x</sup>)<sup>-1</sup> mod p*.  The security of ElGamal also relies on the DLP.

## Important Points to Remember:

*   *gcd(a, n) = 1* is required to define *ord<sub>n</sub>(a)*.
*   *ord<sub>n</sub>(a)* always divides *φ(n)*.
*   Primitive roots exist only for integers of the form 2, 4, *p<sup>k</sup>*, or 2*p<sup>k</sup>*, where *p* is an odd prime and *k* is a positive integer.
*   The number of primitive roots modulo *n* (if they exist) is *φ(φ(n))*.
*   Primitive roots are vital for the security of many public-key cryptographic algorithms.

## Practice Questions/Exercises with Answers:

1.  **Find the order of 5 modulo 12.**

    *   *Answer:* *gcd(5, 12) = 1*. Calculate powers of 5 mod 12:
        *   5<sup>1</sup> ≡ 5 (mod 12)
        *   5<sup>2</sup> ≡ 25 ≡ 1 (mod 12)
        *   Therefore, *ord<sub>12</sub>(5) = 2*.

2.  **Determine if 3 is a primitive root modulo 10.**

    *   *Answer:* *gcd(3, 10) = 1*.
        *   *φ(10) = 10(1 - 1/2)(1 - 1/5) = 4*.
        *   Prime factorization of 4: *4 = 2<sup>2</sup>*, so the only prime factor is 2.
        *   3<sup>4/2</sup> ≡ 3<sup>2</sup> ≡ 9 (mod 10).  Since 9 is not congruent to 1 (mod 10), 3 is a primitive root modulo 10.

3.  **How many primitive roots exist modulo 17?**

    *   *Answer:*  Since 17 is prime, primitive roots exist.
        *   *φ(17) = 16*.
        *   *φ(16) = φ(2<sup>4</sup>) = 16(1 - 1/2) = 8*.
        *   Therefore, there are 8 primitive roots modulo 17.

4. **Is 7 a primitive root modulo 15?**

    * *Answer:* First, check gcd(7,15) = 1. Now calculate φ(15) = φ(3*5) = 15(1-1/3)(1-1/5) = 15(2/3)(4/5) = 8.
    The prime factors of 8 are just 2. Thus we just need to check if 7<sup>8/2</sup> ≡ 1 mod 15
    7<sup>4</sup> = (7<sup>2</sup>)<sup>2</sup> = (49)<sup>2</sup> ≡ (4)<sup>2</sup> ≡ 16 ≡ 1 mod 15. Since 7<sup>4</sup> ≡ 1 mod 15 and 4 < 8, we can conclude 7 is NOT a primitive root modulo 15.
