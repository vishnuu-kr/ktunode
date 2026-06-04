---
title: "Existence of Primitive Roots for Primes"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcc2"
status: "completed"
scrapedAt: "2026-05-20T16:53:51.669Z"
---
## FUNDAMENTALS OF CRYPTOGRAPHY: Module 1 - Introduction to Number Theory
### Topic: Existence of Primitive Roots for Primes

**Learning Outcomes:**

*   Understand the definition of the order of an integer modulo *n*.
*   Define and identify primitive roots modulo a prime *p*.
*   Prove that a prime *p* has φ(*p*-1) primitive roots.
*   Apply the concept of primitive roots to solve related problems in cryptography.

---

**1. Order of an Integer Modulo n**

*   **Definition:** Let *a* be an integer and *n* a positive integer such that gcd(*a*, *n*) = 1.  The *order* of *a* modulo *n*, denoted ord<sub>*n*</sub>(*a*), is the smallest positive integer *k* such that *a*<sup>*k*</sup> ≡ 1 (mod *n*).

*   **Key Idea:** The order represents the number of times you need to multiply *a* by itself (modulo *n*) to get 1.  If gcd(*a*, *n*) ≠ 1, the order doesn't exist.

*   **Important Theorem:** If *a*<sup>*h*</sup> ≡ 1 (mod *n*), then ord<sub>*n*</sub>(*a*) divides *h*.

    *   **Proof Idea:** Use the division algorithm:  *h* = *q* *ord<sub>*n*</sub>(*a*) + *r*, where 0 ≤ *r* < *ord<sub>*n*</sub>(*a*).  Then *a*<sup>*h*</sup> ≡ *a*<sup>*q* *ord<sub>*n*</sub>(*a*) + *r*</sup> ≡ ( *a*<sup>*ord<sub>*n*</sub>(*a*)</sup> )<sup>*q*</sup> *a*<sup>*r*</sup> ≡ 1<sup>*q*</sup> *a*<sup>*r*</sup> ≡ *a*<sup>*r*</sup> ≡ 1 (mod *n*).  Since *ord<sub>*n*</sub>(*a*) is the *smallest* positive integer such that *a*<sup>*ord<sub>*n*</sub>(*a*)</sup> ≡ 1 (mod *n*), it must be that *r* = 0.  Therefore, *h* = *q* *ord<sub>*n*</sub>(*a*), which means *ord<sub>*n*</sub>(*a*) divides *h*.

*   **Example:** Let *a* = 2 and *n* = 7.  gcd(2, 7) = 1.
    *   2<sup>1</sup> ≡ 2 (mod 7)
    *   2<sup>2</sup> ≡ 4 (mod 7)
    *   2<sup>3</sup> ≡ 1 (mod 7)
    Therefore, ord<sub>7</sub>(2) = 3.

**2. Primitive Roots Modulo a Prime p**

*   **Definition:** Let *p* be a prime number. An integer *g* is a *primitive root modulo p* if ord<sub>*p*</sub>(*g*) = *p* - 1.

*   **Key Idea:** A primitive root generates all the numbers relatively prime to *p* (i.e., all the numbers from 1 to *p*-1) when raised to successive powers modulo *p*.  Specifically, the powers *g*<sup>1</sup>, *g*<sup>2</sup>, *g*<sup>3</sup>, ..., *g*<sup>*p*-1</sup> are all distinct modulo *p* and are congruent to the integers 1, 2, ..., *p*-1 in some order.

*   **Euler's Totient Function:**  φ(*n*) is the number of integers between 1 and *n* (inclusive) that are relatively prime to *n*.  If *p* is prime, then φ(*p*) = *p* - 1.

*   **Example:** Consider *p* = 7.
    *   We know that ord<sub>7</sub>(2) = 3 (from the previous example). Since 3 ≠ 7-1 = 6, 2 is *not* a primitive root modulo 7.
    *   Let's try *g* = 3:
        *   3<sup>1</sup> ≡ 3 (mod 7)
        *   3<sup>2</sup> ≡ 2 (mod 7)
        *   3<sup>3</sup> ≡ 6 (mod 7)
        *   3<sup>4</sup> ≡ 4 (mod 7)
        *   3<sup>5</sup> ≡ 5 (mod 7)
        *   3<sup>6</sup> ≡ 1 (mod 7)
    Since ord<sub>7</sub>(3) = 6 = 7-1, 3 *is* a primitive root modulo 7. Notice that the powers of 3 modulo 7 generate all numbers from 1 to 6.

**3. Existence and Number of Primitive Roots for Primes**

*   **Theorem:** For every prime number *p*, there exists a primitive root modulo *p*.

    *   **Proof (Sketch):** This proof is more involved and relies on properties of polynomial congruences. The core idea is to show that for each divisor *d* of *p*-1, there are φ(*d*) elements of order *d* modulo *p*.  Summing φ(*d*) over all divisors *d* of *p*-1 gives φ(*p*-1) primitive roots.  This part of the proof is omitted for brevity, but the result is extremely important.

*   **Theorem:** If *p* is a prime number, then there are exactly φ(*p*-1) primitive roots modulo *p*.

    *   **Key Idea:**  This theorem quantifies *how many* primitive roots exist for a given prime.  The value φ(*p*-1) can vary greatly depending on the prime *p*.

*   **Example:** For *p* = 7, *p*-1 = 6.  φ(6) = 2 (the numbers relatively prime to 6 between 1 and 6 are 1 and 5). Therefore, there are 2 primitive roots modulo 7. We already found that 3 is a primitive root. Let's check if 5 is also a primitive root:
        *   5<sup>1</sup> ≡ 5 (mod 7)
        *   5<sup>2</sup> ≡ 4 (mod 7)
        *   5<sup>3</sup> ≡ 6 (mod 7)
        *   5<sup>4</sup> ≡ 2 (mod 7)
        *   5<sup>5</sup> ≡ 3 (mod 7)
        *   5<sup>6</sup> ≡ 1 (mod 7)
    Since ord<sub>7</sub>(5) = 6, 5 is also a primitive root modulo 7.

**4. Application in Cryptography**

*   **Diffie-Hellman Key Exchange:**  Primitive roots are crucial for the Diffie-Hellman key exchange protocol.  The security of Diffie-Hellman relies on the difficulty of the discrete logarithm problem, which is harder to solve when a primitive root is used as the generator.

    *   In Diffie-Hellman, a large prime *p* and a primitive root *g* modulo *p* are publicly known.  Two parties, Alice and Bob, choose secret integers *a* and *b* respectively. Alice computes *A* = *g*<sup>*a*</sup> mod *p* and sends it to Bob. Bob computes *B* = *g*<sup>*b*</sup> mod *p* and sends it to Alice.  Alice computes the shared secret key *K* = *B*<sup>*a*</sup> mod *p* and Bob computes *K* = *A*<sup>*b*</sup> mod *p*.  Both Alice and Bob now have the same secret key, *K*.  An eavesdropper knowing *p*, *g*, *A*, and *B* would have to solve the discrete logarithm problem (e.g., finding *a* given *g*<sup>*a*</sup> mod *p*) to find the secret key.

*   **Other Cryptographic Schemes:**  Primitive roots are also used in other cryptographic schemes such as ElGamal encryption.

**5. Practice Questions/Exercises**

1.  Find the order of 5 modulo 11.
2.  Determine if 2 is a primitive root modulo 11.
3.  Determine if 3 is a primitive root modulo 17. How many primitive roots modulo 17 exist?
4.  Find all primitive roots modulo 13.
5.  Explain why the existence of primitive roots is important in the Diffie-Hellman key exchange.

**Answers to Practice Questions:**

1.  *Order of 5 modulo 11:*
    *   5<sup>1</sup> ≡ 5 (mod 11)
    *   5<sup>2</sup> ≡ 3 (mod 11)
    *   5<sup>3</sup> ≡ 4 (mod 11)
    *   5<sup>4</sup> ≡ 9 (mod 11)
    *   5<sup>5</sup> ≡ 1 (mod 11)
    Therefore, ord<sub>11</sub>(5) = 5.

2.  *Is 2 a primitive root modulo 11?*
    Since ord<sub>11</sub>(5) = 5 and 5 ≠ 11-1 = 10, 5 is not a primitive root modulo 11. Let's check 2:
    * 2<sup>1</sup> ≡ 2 (mod 11)
    * 2<sup>2</sup> ≡ 4 (mod 11)
    * 2<sup>3</sup> ≡ 8 (mod 11)
    * 2<sup>4</sup> ≡ 5 (mod 11)
    * 2<sup>5</sup> ≡ 10 (mod 11)
    * 2<sup>6</sup> ≡ 9 (mod 11)
    * 2<sup>7</sup> ≡ 7 (mod 11)
    * 2<sup>8</sup> ≡ 3 (mod 11)
    * 2<sup>9</sup> ≡ 6 (mod 11)
    * 2<sup>10</sup> ≡ 1 (mod 11)
    Since ord<sub>11</sub>(2) = 10 = 11-1, 2 *is* a primitive root modulo 11.

3.  *Is 3 a primitive root modulo 17?  How many primitive roots modulo 17 exist?*

    Let's check 3 first:
    * 3<sup>1</sup> ≡ 3 (mod 17)
    * 3<sup>2</sup> ≡ 9 (mod 17)
    * 3<sup>3</sup> ≡ 10 (mod 17)
    * 3<sup>4</sup> ≡ 13 (mod 17)
    * 3<sup>5</sup> ≡ 5 (mod 17)
    * 3<sup>6</sup> ≡ 15 (mod 17)
    * 3<sup>7</sup> ≡ 11 (mod 17)
    * 3<sup>8</sup> ≡ 16 (mod 17)
    * 3<sup>9</sup> ≡ 14 (mod 17)
    * 3<sup>10</sup> ≡ 8 (mod 17)
    * 3<sup>11</sup> ≡ 7 (mod 17)
    * 3<sup>12</sup> ≡ 4 (mod 17)
    * 3<sup>13</sup> ≡ 12 (mod 17)
    * 3<sup>14</sup> ≡ 2 (mod 17)
    * 3<sup>15</sup> ≡ 6 (mod 17)
    * 3<sup>16</sup> ≡ 1 (mod 17)
    Since ord<sub>17</sub>(3) = 16 = 17-1, 3 *is* a primitive root modulo 17.

    The number of primitive roots modulo 17 is φ(17-1) = φ(16) = φ(2<sup>4</sup>) = 16(1-1/2) = 16(1/2) = 8.

4.  *Find all primitive roots modulo 13:*

    φ(13-1) = φ(12) = φ(2<sup>2</sup> * 3) = 12(1-1/2)(1-1/3) = 12(1/2)(2/3) = 4.  Therefore, there are 4 primitive roots. We will brute force:

    *   **2:** 2<sup>12</sup> ≡ 1 mod 13, and no smaller power is congruent to 1, so 2 is a primitive root.
    *   **3:**  3<sup>1</sup> ≡ 3, 3<sup>2</sup> ≡ 9, 3<sup>3</sup> ≡ 1.  Order is 3, so 3 is not a primitive root.
    *   **4:** Since 4 ≡ 2<sup>2</sup>, the order of 4 divides 6 and 4 is not a primitive root.
    *   **5:**
         *  5<sup>1</sup> ≡ 5 (mod 13)
         *  5<sup>2</sup> ≡ 25 ≡ 12 (mod 13)
         *  5<sup>3</sup> ≡ 5*12 ≡ 60 ≡ 8 (mod 13)
         *  5<sup>4</sup> ≡ 5*8 ≡ 40 ≡ 1 (mod 13)
         Order is 4, not a primitive root.
    *   **6:**
         * 6<sup>1</sup> ≡ 6 (mod 13)
         * 6<sup>2</sup> ≡ 36 ≡ 10 (mod 13)
         * 6<sup>3</sup> ≡ 60 ≡ 8 (mod 13)
         * 6<sup>4</sup> ≡ 48 ≡ 9 (mod 13)
         * 6<sup>5</sup> ≡ 54 ≡ 2 (mod 13)
         * 6<sup>6</sup> ≡ 12 (mod 13)
         * 6<sup>7</sup> ≡ 72 ≡ 7 (mod 13)
         * 6<sup>8</sup> ≡ 42 ≡ 3 (mod 13)
         * 6<sup>9</sup> ≡ 18 ≡ 5 (mod 13)
         * 6<sup>10</sup> ≡ 30 ≡ 4 (mod 13)
         * 6<sup>11</sup> ≡ 24 ≡ 11 (mod 13)
         * 6<sup>12</sup> ≡ 66 ≡ 1 (mod 13)
         So 6 *is* a primitive root
    *   **7:**
        *   7<sup>1</sup> ≡ 7 (mod 13)
        *   7<sup>2</sup> ≡ 49 ≡ 10 (mod 13)
        *   7<sup>3</sup> ≡ 70 ≡ 5 (mod 13)
        *   7<sup>4</sup> ≡ 35 ≡ 9 (mod 13)
        *   7<sup>5</sup> ≡ 63 ≡ 11 (mod 13)
        *   7<sup>6</sup> ≡ 77 ≡ 12 (mod 13)
        *   7<sup>7</sup> ≡ 84 ≡ 6 (mod 13)
        *   7<sup>8</sup> ≡ 42 ≡ 3 (mod 13)
        *   7<sup>9</sup> ≡ 21 ≡ 8 (mod 13)
        *   7<sup>10</sup> ≡ 56 ≡ 4 (mod 13)
        *   7<sup>11</sup> ≡ 28 ≡ 2 (mod 13)
        *   7<sup>12</sup> ≡ 14 ≡ 1 (mod 13)
        So 7 *is* a primitive root
    * **8:**  Since 8 ≡ 2<sup>3</sup>, the order of 8 divides 4 and 8 is not a primitive root.

   Continuing in this manner (and using shortcuts based on previous calculations), we find that the primitive roots are: **2, 6, 7, and 11**.

5.  *Why is the existence of primitive roots important in the Diffie-Hellman key exchange?*

    The existence of primitive roots is crucial because it ensures that the generator *g* can generate all elements of the multiplicative group modulo *p*.  This maximizes the potential key space and makes the discrete logarithm problem significantly harder.  If *g* were not a primitive root, the values of *g*<sup>*a*</sup> mod *p* would only cover a subset of the possible values modulo *p*, reducing the effective size of the key space and making the exchange more vulnerable to attack. A larger key space increases the difficulty of brute-forcing the shared secret.

---

**6. Important Points to Remember**

*   **GCD Condition:** The order of *a* modulo *n* is only defined when gcd(*a*, *n*) = 1.
*   **Order Divides:** The order of *a* modulo *n* always divides φ(*n*), and specifically when n is prime *p*, it divides p-1.
*   **Primitive Root Definition:** A primitive root *g* modulo *p* has order *p*-1.
*   **Number of Primitive Roots:** There are φ(*p*-1) primitive roots modulo *p*.
*   **Cryptographic Importance:** Primitive roots are essential for security in cryptographic schemes like Diffie-Hellman. Use of primitive roots increases the key space and thus increases the complexity of finding the secret.
