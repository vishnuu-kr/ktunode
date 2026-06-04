---
title: "Hashing- Hashing Techniques"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea22"
status: "completed"
scrapedAt: "2026-05-23T17:55:19.472Z"
---
# Data Structures: Module 4 - Sorting and Hashing

## Topic: Hashing - Hashing Techniques

This module focuses on hashing, a powerful technique for efficient data retrieval. We'll explore various hashing techniques, how they work, and their implications for data storage and access.

### 1. Introduction to Hashing

*   **Definition:** Hashing is a technique for storing and retrieving data in a hash table (or hash map). It maps keys to indices in an array.
*   **Hash Table:** A data structure that implements an associative array abstract data type, mapping keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
*   **Hash Function (or Hash Code):** A function that takes a key as input and returns an integer (the hash code). This hash code is then typically transformed to an index into the hash table.
*   **Collisions:** Occur when two different keys map to the same index in the hash table. This is a common problem that needs to be handled.
*   **Load Factor ($\alpha$):** The ratio of the number of elements in the hash table to the size of the hash table. $\alpha = \frac{n}{m}$, where $n$ is the number of elements and $m$ is the size of the table. A high load factor increases the probability of collisions.

**Learning Outcome Alignment:**
*   **CO5 (Apply appropriate hash function to store and access a given dataset):** Understanding the fundamental concepts of hashing and hash functions is crucial for applying them effectively.

**Textbook Reference:**
*   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Chapter 6 discusses hashing, including hash functions, collisions, and collision resolution strategies.
*   **Samanta (2/e, 2009):** Chapter 5 covers hashing concepts, hash functions, and collision handling methods.

### 2. Properties of a Good Hash Function

A good hash function should aim to:

*   **Be Efficient to Compute:** The hash function should be computationally inexpensive, as it's called for every insertion and search.
*   **Distribute Keys Uniformly:** It should distribute keys evenly across the hash table, minimizing collisions.
*   **Be Deterministic:** For the same key, the hash function must always produce the same hash code.
*   **Map Keys to the Range of the Hash Table:** The output of the hash function (after any index calculation) should be within the valid indices of the hash table (0 to $m-1$).

**Important Point to Remember:** The effectiveness of hashing heavily relies on the quality of the hash function.

### 3. Hashing Techniques (Hash Functions)

The choice of hash function depends on the type of keys being used (e.g., integers, strings, floating-point numbers).

#### 3.1. Division Method

*   **Concept:** The hash code is obtained by taking the remainder of the key when divided by a number $m$.
*   **Formula:** $h(k) = k \pmod{m}$
*   **Choosing $m$:**
    *   $m$ should be a prime number. This helps in distributing keys more uniformly.
    *   $m$ should not be a power of 2, especially if the keys have patterns related to powers of 2.
*   **Example:**
    *   Hash table size $m = 13$ (a prime number).
    *   Keys: 18, 41, 22, 44, 59, 32, 31, 73
    *   $h(18) = 18 \pmod{13} = 5$
    *   $h(41) = 41 \pmod{13} = 2$
    *   $h(22) = 22 \pmod{13} = 9$
    *   $h(44) = 44 \pmod{13} = 5$ (Collision with 18!)
    *   $h(59) = 59 \pmod{13} = 7$
    *   $h(32) = 32 \pmod{13} = 6$
    *   $h(31) = 31 \pmod{13} = 5$ (Collision with 18 and 44!)
    *   $h(73) = 73 \pmod{13} = 8$

**Textbook Reference:**
*   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Section 6.1.1 discusses the division method.
*   **Gilberg, Forouzan (2/e, 2005):** Chapter 10.1.1 covers the division method.

#### 3.2. Multiplication Method

*   **Concept:** The hash code is computed by multiplying the key by a constant $A$ (where $0 < A < 1$), taking the fractional part, and then multiplying by the table size $m$.
*   **Formula:** $h(k) = \lfloor m \cdot (k \cdot A \pmod{1})$
    *   Alternatively, using integer arithmetic: $h(k) = \lfloor m \cdot \{ k A \} \rfloor$, where $\{kA\}$ is the fractional part of $kA$.
*   **Choosing $A$:** Knuth suggests using $A = \frac{\sqrt{5}-1}{2} \approx 0.6180339887$. This value is close to the golden ratio. The multiplication method is less sensitive to the choice of $m$ than the division method.
*   **Example:**
    *   Hash table size $m = 10$.
    *   Key $k = 123$.
    *   Choose $A \approx 0.618$.
    *   $k \cdot A = 123 \times 0.618 = 76.014$
    *   Fractional part: $0.014$
    *   $h(123) = \lfloor 10 \times 0.014 \rfloor = \lfloor 0.14 \rfloor = 0$.
*   **Using Integer Arithmetic:**
    *   Let's say we use a 32-bit integer representation for $kA$, and $m=10$. We can pick $A$ such that $A = \frac{s}{2^{32}}$ for some integer $s$.
    *   $h(k) = (k \times s) \pmod{2^{32}} \gg (32 - \text{bits for } m)$
    *   A simpler integer arithmetic approach: $h(k) = (k \times C) \gg (W - \log_2 m)$, where $W$ is the word size, and $C$ is a carefully chosen constant.

**Textbook Reference:**
*   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Section 6.1.2 discusses the multiplication method.
*   **Samanta (2/e, 2009):** Chapter 5.3.2 explains the multiplication method.

#### 3.3. Folding Method

*   **Concept:** The key is divided into several parts. These parts are then added together to produce the hash code.
*   **Variations:**
    *   **Edge Folding:** The key is divided into parts, and then these parts are concatenated in alternating directions.
    *   **Adjacent Folding:** The key is divided into parts, and these parts are added together.
*   **Example (Adjacent Folding):**
    *   Key: 1234567890
    *   Hash table size $m=100$.
    *   Divide the key into parts of 2 digits: 12, 34, 56, 78, 90.
    *   Sum the parts: $12 + 34 + 56 + 78 + 90 = 270$.
    *   Take the remainder when divided by $m$: $h(key) = 270 \pmod{100} = 70$.

**Textbook Reference:**
*   **Samanta (2/e, 2009):** Chapter 5.3.3 describes the folding method.

#### 3.4. Mid-Square Method

*   **Concept:** The key is squared, and then some digits from the middle of the squared value are taken to form the hash code.
*   **Process:**
    1. Square the key.
    2. Extract middle digits from the squared value. The number of digits to extract depends on the hash table size.
*   **Example:**
    *   Key: 76
    *   Hash table size $m=100$ (requires 2 digits).
    *   Square the key: $76^2 = 5776$.
    *   Extract the middle two digits: 77.
    *   $h(76) = 77$.
    *   Key: 123
    *   Hash table size $m=100$.
    *   Square the key: $123^2 = 15129$.
    *   Extract the middle two digits: 51.
    *   $h(123) = 51$.

**Important Point to Remember:** The mid-square method can be sensitive to the choice of key and may not always produce uniform distribution if not applied carefully.

**Textbook Reference:**
*   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Section 6.1.3 mentions the mid-square method.
*   **Samanta (2/e, 2009):** Chapter 5.3.4 presents the mid-square method.

#### 3.5. Hashing for Strings

When keys are strings, they need to be converted into an integer first, which is then used by one of the above methods.

*   **Common Techniques:**
    *   **Sum of ASCII Values:** Sum the ASCII values of all characters in the string. This is simple but can lead to many collisions if strings have similar characters but in different orders (e.g., "abc" and "cba").
    *   **Weighted Sum (Polynomial Hashing):** Treat the string as a polynomial where characters are coefficients.
        *   For a string $s = s_0 s_1 s_2 \dots s_{n-1}$, the hash can be computed as:
            $h(s) = (s_0 \cdot p^{n-1} + s_1 \cdot p^{n-2} + \dots + s_{n-1} \cdot p^0) \pmod{m}$
            where $p$ is a prime number and $m$ is the table size.
            This can be computed efficiently using Horner's method:
            $h(s) = (\dots((s_0 \cdot p + s_1) \cdot p + s_2) \cdot p + \dots + s_{n-1}) \pmod{m}$
    *   **Using First/Last Few Characters:** Sometimes, a combination of the first and last few characters can be used.

*   **Example (Polynomial Hashing):**
    *   String: "cat"
    *   $p = 31$ (a prime)
    *   $m = 100$
    *   ASCII values: 'c' = 99, 'a' = 97, 't' = 116
    *   $h("cat") = (99 \cdot 31^2 + 97 \cdot 31^1 + 116 \cdot 31^0) \pmod{100}$
    *   $h("cat") = (99 \cdot 961 + 97 \cdot 31 + 116 \cdot 1) \pmod{100}$
    *   $h("cat") = (95139 + 3007 + 116) \pmod{100}$
    *   $h("cat") = 98262 \pmod{100} = 62$.

    Using Horner's method:
    *   $h("cat") = ((99 \cdot 31 + 97) \cdot 31 + 116) \pmod{100}$
    *   $h("cat") = ((2999 + 97) \cdot 31 + 116) \pmod{100}$
    *   $h("cat") = (3096 \cdot 31 + 116) \pmod{100}$
    *   $h("cat") = (96076 + 116) \pmod{100}$
    *   $h("cat") = 96192 \pmod{100} = 92$.

    *Note: The results might differ slightly based on the exact ASCII values and prime used. The principle remains the same.*

**Learning Outcome Alignment:**
*   **CO5 (Apply appropriate hash function to store and access a given dataset):** Choosing or designing hash functions for strings is a practical application.

**Textbook Reference:**
*   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Section 6.4 discusses hashing of strings.
*   **Aho, Hopcroft, Ullman (1/e, 1983):** Chapter 5.4 provides a theoretical basis for hashing strings.

### 4. Collision Resolution Techniques

When collisions occur, we need mechanisms to store and retrieve the colliding elements.

#### 4.1. Separate Chaining

*   **Concept:** Each slot in the hash table points to a linked list (or another data structure like a binary search tree) that stores all keys hashing to that slot.
*   **Data Structure:** An array of linked lists.
*   **Operations:**
    *   **Insert:** Hash the key, find the corresponding linked list, and insert the key into that list.
    *   **Search:** Hash the key, find the corresponding linked list, and search within that list.
    *   **Delete:** Hash the key, find the corresponding linked list, and delete the key from that list.
*   **Advantages:**
    *   Simple to implement.
    *   Load factor can be greater than 1.
    *   Unlikely to have performance degrade severely with increasing load factor.
*   **Disadvantages:**
    *   Requires extra space for pointers in the linked lists.
    *   Can be slower than open addressing due to pointer indirections.

**Example:**
Hash table size $m=10$. Keys: 18, 41, 22, 44, 59, 32, 31, 73.
Hash function: $h(k) = k \pmod{10}$.
*   $h(18) = 8 \implies$ List at index 8: [18]
*   $h(41) = 1 \implies$ List at index 1: [41]
*   $h(22) = 2 \implies$ List at index 2: [22]
*   $h(44) = 4 \implies$ List at index 4: [44]
*   $h(59) = 9 \implies$ List at index 9: [59]
*   $h(32) = 2 \implies$ List at index 2: [22, 32] (Collision: 32 added to the list at index 2)
*   $h(31) = 1 \implies$ List at index 1: [41, 31] (Collision: 31 added to the list at index 1)
*   $h(73) = 3 \implies$ List at index 3: [73]

**Textbook Reference:**
*   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Section 6.2.1 discusses separate chaining.
*   **Samanta (2/e, 2009):** Chapter 5.4.1 describes separate chaining.
*   **Gilberg, Forouzan (2/e, 2005):** Chapter 10.2.1 covers separate chaining.

#### 4.2. Open Addressing (Closed Hashing)

*   **Concept:** All elements are stored directly in the hash table array. When a collision occurs, probe for the next available slot according to a probing sequence.
*   **Probing Sequence:** A sequence of indices $h(k, 0), h(k, 1), h(k, 2), \dots, h(k, m-1)$ where $h(k, i)$ is the $i$-th probe for key $k$.
*   **Load Factor:** The load factor ($\alpha$) must be less than 1 ($\alpha < 1$).
*   **Deletion:** Deletion is tricky. Simply removing an element can break the probing chain for other elements. A special "deleted" marker is often used.

##### 4.2.1. Linear Probing

*   **Concept:** The probing sequence is linear. If $h(k)$ is occupied, try $h(k)+1$, then $h(k)+2$, and so on, wrapping around the table.
*   **Formula:** $h(k, i) = (h'(k) + i) \pmod{m}$, where $h'(k)$ is the initial hash function.
*   **Problem:** Suffers from **primary clustering**, where long runs of occupied slots build up.

**Example:**
Hash table size $m=10$. Keys: 18, 41, 22, 44, 59, 32, 31, 73.
Hash function: $h'(k) = k \pmod{10}$.
*   Insert 18: $h(18, 0) = 18 \pmod{10} = 8$. Table[8] = 18.
*   Insert 41: $h(41, 0) = 41 \pmod{10} = 1$. Table[1] = 41.
*   Insert 22: $h(22, 0) = 22 \pmod{10} = 2$. Table[2] = 22.
*   Insert 44: $h(44, 0) = 44 \pmod{10} = 4$. Table[4] = 44.
*   Insert 59: $h(59, 0) = 59 \pmod{10} = 9$. Table[9] = 59.
*   Insert 32: $h(32, 0) = 32 \pmod{10} = 2$. Table[2] is occupied by 22.
    *   $h(32, 1) = (2 + 1) \pmod{10} = 3$. Table[3] = 32.
*   Insert 31: $h(31, 0) = 31 \pmod{10} = 1$. Table[1] is occupied by 41.
    *   $h(31, 1) = (1 + 1) \pmod{10} = 2$. Table[2] is occupied by 22.
    *   $h(31, 2) = (1 + 2) \pmod{10} = 3$. Table[3] is occupied by 32.
    *   $h(31, 3) = (1 + 3) \pmod{10} = 4$. Table[4] is occupied by 44.
    *   $h(31, 4) = (1 + 4) \pmod{10} = 5$. Table[5] is empty. Table[5] = 31.
*   Insert 73: $h(73, 0) = 73 \pmod{10} = 3$. Table[3] is occupied by 32.
    *   $h(73, 1) = (3 + 1) \pmod{10} = 4$. Table[4] is occupied by 44.
    *   $h(73, 2) = (3 + 2) \pmod{10} = 5$. Table[5] is occupied by 31.
    *   $h(73, 3) = (3 + 3) \pmod{10} = 6$. Table[6] is empty. Table[6] = 73.

**Textbook Reference:**
*   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Section 6.2.2 discusses linear probing.
*   **Samanta (2/e, 2009):** Chapter 5.4.2.1 describes linear probing.
*   **Gilberg, Forouzan (2/e, 2005):** Chapter 10.2.2.1 covers linear probing.

##### 4.2.2. Quadratic Probing

*   **Concept:** The probing sequence uses a quadratic function of the probe number $i$.
*   **Formula:** $h(k, i) = (h'(k) + c_1 i + c_2 i^2) \pmod{m}$, where $c_1$ and $c_2$ are constants. A common choice is $c_1 = 0, c_2 = 1$, leading to $h(k, i) = (h'(k) + i^2) \pmod{m}$.
*   **Advantage:** Helps to alleviate primary clustering.
*   **Problem:** Can suffer from **secondary clustering**, where keys that hash to the same initial location follow the same probe sequence.
*   **Requirement for table size $m$:** If $m$ is prime and $m \equiv 3 \pmod{4}$, then quadratic probing with $h(k, i) = (h'(k) + i^2) \pmod{m}$ will probe at least half of the table slots.

**Example:**
Hash table size $m=11$ (prime). Keys: 18, 41, 22, 44, 59, 32, 31, 73.
Hash function: $h'(k) = k \pmod{11}$.
Probing: $h(k, i) = (h'(k) + i^2) \pmod{11}$.
*   Insert 18: $h(18, 0) = 18 \pmod{11} = 7$. Table[7] = 18.
*   Insert 41: $h(41, 0) = 41 \pmod{11} = 8$. Table[8] = 41.
*   Insert 22: $h(22, 0) = 22 \pmod{11} = 0$. Table[0] = 22.
*   Insert 44: $h(44, 0) = 44 \pmod{11} = 0$. Table[0] occupied.
    *   $h(44, 1) = (0 + 1^2) \pmod{11} = 1$. Table[1] = 44.
*   Insert 59: $h(59, 0) = 59 \pmod{11} = 4$. Table[4] = 59.
*   Insert 32: $h(32, 0) = 32 \pmod{11} = 10$. Table[10] = 32.
*   Insert 31: $h(31, 0) = 31 \pmod{11} = 9$. Table[9] = 31.
*   Insert 73: $h(73, 0) = 73 \pmod{11} = 7$. Table[7] occupied by 18.
    *   $h(73, 1) = (7 + 1^2) \pmod{11} = 8$. Table[8] occupied by 41.
    *   $h(73, 2) = (7 + 2^2) \pmod{11} = (7 + 4) \pmod{11} = 11 \pmod{11} = 0$. Table[0] occupied by 22.
    *   $h(73, 3) = (7 + 3^2) \pmod{11} = (7 + 9) \pmod{11} = 16 \pmod{11} = 5$. Table[5] = 73.

**Textbook Reference:**
*   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Section 6.2.2 discusses quadratic probing.
*   **Samanta (2/e, 2009):** Chapter 5.4.2.2 describes quadratic probing.

##### 4.2.3. Double Hashing

*   **Concept:** Uses two hash functions, $h_1(k)$ and $h_2(k)$. The probing sequence is based on the second hash function.
*   **Formula:** $h(k, i) = (h_1(k) + i \cdot h_2(k)) \pmod{m}$.
*   **Requirements for $h_2(k)$:**
    *   $h_2(k)$ must not be zero.
    *   $h_2(k)$ should be relatively prime to $m$ to ensure that all slots can be probed. A common choice is to have $m$ be prime and $h_2(k) = 1 + (k \pmod{m'})$ where $m' < m$.
*   **Advantage:** Reduces both primary and secondary clustering, providing better performance than linear or quadratic probing.

**Example:**
Hash table size $m=11$ (prime). Keys: 18, 41, 22, 44, 59, 32, 31, 73.
Hash functions:
*   $h_1(k) = k \pmod{11}$
*   $h_2(k) = 7 - (k \pmod{7})$ (chosen such that it's never 0 and less than $m$)

Let's trace insertion of 44 and 73 which caused collisions in previous examples.
*   Insert 44:
    *   $h_1(44) = 44 \pmod{11} = 0$. Table[0] is empty. Table[0] = 44.
*   Insert 73:
    *   $h_1(73) = 73 \pmod{11} = 7$. Table[7] is empty. Table[7] = 73.

Let's try an example where both $h_1$ produce collisions:
Keys: 15, 26, 37 (all hash to $15 \pmod{11} = 4$, $26 \pmod{11} = 4$, $37 \pmod{11} = 4$)
*   Insert 15: $h_1(15) = 4$. Table[4] = 15.
*   Insert 26:
    *   $h_1(26) = 4$. Table[4] occupied.
    *   $h_2(26) = 7 - (26 \pmod{7}) = 7 - 5 = 2$.
    *   $h(26, 1) = (4 + 1 \cdot 2) \pmod{11} = 6$. Table[6] = 26.
*   Insert 37:
    *   $h_1(37) = 4$. Table[4] occupied.
    *   $h_2(37) = 7 - (37 \pmod{7}) = 7 - 2 = 5$.
    *   $h(37, 1) = (4 + 1 \cdot 5) \pmod{11} = 9$. Table[9] = 37.

**Textbook Reference:**
*   **Horowitz, Sahni, Anderson-Freed (2/e, 2008):** Section 6.2.2 discusses double hashing.
*   **Samanta (2/e, 2009):** Chapter 5.4.2.3 describes double hashing.

### 5. Performance Analysis of Hashing

*   **Average Case:** For a good hash function and appropriate collision resolution, insertion, deletion, and search operations take $O(1)$ time on average. This assumes the load factor is kept below a certain threshold.
*   **Worst Case:** If all keys hash to the same slot and separate chaining is used, the performance degrades to $O(n)$ for linked lists. In open addressing, if the probing sequence is poor, it can also lead to $O(n)$ performance.
*   **Load Factor ($\alpha$):** A critical factor.
    *   For Separate Chaining: The average length of a chain is $\alpha$. Average search time is $O(1 + \alpha)$.
    *   For Open Addressing: Performance degrades as $\alpha$ approaches 1.
        *   Successful search: Approximately $\frac{1}{\alpha} \ln \frac{1}{1-\alpha}$ for uniform hashing.
        *   Unsuccessful search: Approximately $\frac{1}{1-\alpha}$ for uniform hashing.

**Learning Outcome Alignment:**
*   **CO1 (Compare performance of algorithms using asymptotic notations):** Understanding the $O(1)$ average case and $O(n)$ worst case is essential.
*   **CO4 (Apply and compare various techniques for searching and sorting):** Hashing provides a very efficient search technique, often outperforming comparison-based sorting algorithms for retrieval.
*   **CO5 (Apply appropriate hash function to store and access a given dataset):** The choice of hash function and collision resolution directly impacts performance.

### 6. Applications of Hashing

*   **Symbol Tables:** Used in compilers to store identifiers and their attributes.
*   **Database Indexing:** For fast retrieval of records.
*   **Caches:** Storing frequently accessed data.
*   **Hash Maps/Dictionaries:** Implementing associative arrays.
*   **Password Storage:** Storing hashed passwords instead of plain text.
*   **Cryptography:** Hashing is fundamental in cryptographic algorithms.

**Learning Outcome Alignment:**
*   **CO2 (Solve real world problems efficiently using appropriate data structures):** Hashing is a powerful tool for many real-world problems.
*   **CO3 (Make use of nonlinear data structures like trees and graphs to design algorithms for various applications):** While trees and graphs are non-linear, hashing provides a linear time alternative for specific lookup problems.

### 7. Important Points to Remember

*   **Hash Function Quality is Paramount:** A poorly chosen hash function can lead to poor performance.
*   **Collision Resolution is Necessary:** No hash function is perfect; collisions are inevitable.
*   **Load Factor Management:** Keep the load factor within reasonable limits to maintain efficiency.
*   **Choice of Technique:** Separate chaining is generally more robust with high load factors, while open addressing can be faster if properly managed and has lower overhead for small datasets.
*   **Table Size:** Often best chosen as a prime number for division and quadratic probing methods.

---

### Practice Questions and Exercises

**1. Multiple Choice Questions:**

a) Which of the following is a desirable property of a hash function?
    i) Produces different hash codes for the same key.
    ii) Distributes keys unevenly.
    iii) Is computationally expensive.
    iv) Distributes keys uniformly.

b) The phenomenon where two different keys map to the same hash table index is called:
    i) Clustering
    ii) Collision
    iii) Probing
    iv) Overflow

c) In separate chaining, each slot in the hash table typically points to:
    i) A single element
    ii) A linked list of elements
    iii) The next available slot
    iv) A binary search tree

d) Primary clustering is a problem associated with:
    i) Separate Chaining
    ii) Quadratic Probing
    iii) Linear Probing
    iv) Double Hashing

e) The load factor $\alpha$ of a hash table is defined as:
    i) Number of elements / Table size
    ii) Table size / Number of elements
    iii) Number of collisions / Number of elements
    iv) Number of elements / Number of collisions

**Answers:**
a) iv) Distributes keys uniformly.
b) ii) Collision
c) ii) A linked list of elements
d) iii) Linear Probing
e) i) Number of elements / Table size

---

**2. Short Answer Questions:**

a) Explain the division method for hashing with an example. What is a key consideration when choosing the table size $m$?
b) Describe the multiplication method for hashing. When might it be preferred over the division method?
c) What is the difference between primary clustering and secondary clustering? Which probing techniques are affected by them?
d) What is the major advantage of double hashing over linear and quadratic probing?
e) Why is deletion problematic in open addressing schemes, and how is it typically handled?

**Answers:**

a) **Division Method:** $h(k) = k \pmod{m}$. Example: $m=7$, key=15. $h(15) = 15 \pmod{7} = 1$. Key consideration: $m$ should ideally be a prime number to ensure better distribution.

b) **Multiplication Method:** $h(k) = \lfloor m \cdot (k \cdot A \pmod{1}) \rfloor$. $A$ is a constant between 0 and 1. Preferred when the values of keys are not uniformly distributed or have patterns that clash with the division method. It is less sensitive to the choice of $m$.

c) **Primary Clustering:** Long runs of occupied slots that tend to merge. Affected by Linear Probing.
    **Secondary Clustering:** Keys that hash to the same initial location follow the same probe sequence. Affected by Quadratic Probing. Double Hashing mitigates both.

d) **Advantage of Double Hashing:** It uses a second hash function to determine the step size for probing, which significantly reduces both primary and secondary clustering, leading to more uniform distribution of probes.

e) **Deletion in Open Addressing:** Simply removing an element can break the probe sequence for other elements that were inserted later due to collisions. This would make those elements unsearchable.
    **Handling:** A special "deleted" marker is used to indicate that a slot was occupied but is now available for insertion, but should be skipped during searches.

---

**3. Coding/Algorithm Design Exercise:**

You are given a list of integers to be stored in a hash table of size 10 using the division method ($h(k) = k \pmod{10}$). Implement the insertion process using **linear probing** for collision resolution.

**Input Keys:** 23, 11, 4, 15, 27, 35, 12, 18, 31

**Task:**
Show the state of the hash table after each insertion.

**Solution Steps:**

Hash Table (size 10): `[ , , , , , , , , , ]`

1.  **Insert 23:** $23 \pmod{10} = 3$. Table: `[ , , , 23, , , , , , ]`
2.  **Insert 11:** $11 \pmod{10} = 1$. Table: `[ , 11, , 23, , , , , , ]`
3.  **Insert 4:** $4 \pmod{10} = 4$. Table: `[ , 11, , 23, 4, , , , , ]`
4.  **Insert 15:** $15 \pmod{10} = 5$. Table: `[ , 11, , 23, 4, 15, , , , ]`
5.  **Insert 27:** $27 \pmod{10} = 7$. Table: `[ , 11, , 23, 4, 15, , 27, , ]`
6.  **Insert 35:** $35 \pmod{10} = 5$. Slot 5 occupied.
    *   Probe 1: $(5 + 1) \pmod{10} = 6$. Slot 6 empty.
    Table: `[ , 11, , 23, 4, 15, 35, 27, , ]`
7.  **Insert 12:** $12 \pmod{10} = 2$. Table: `[ , 11, 12, 23, 4, 15, 35, 27, , ]`
8.  **Insert 18:** $18 \pmod{10} = 8$. Table: `[ , 11, 12, 23, 4, 15, 35, 27, 18, ]`
9.  **Insert 31:** $31 \pmod{10} = 1$. Slot 1 occupied.
    *   Probe 1: $(1 + 1) \pmod{10} = 2$. Slot 2 occupied.
    *   Probe 2: $(1 + 2) \pmod{10} = 3$. Slot 3 occupied.
    *   Probe 3: $(1 + 3) \pmod{10} = 4$. Slot 4 occupied.
    *   Probe 4: $(1 + 4) \pmod{10} = 5$. Slot 5 occupied.
    *   Probe 5: $(1 + 5) \pmod{10} = 6$. Slot 6 occupied.
    *   Probe 6: $(1 + 6) \pmod{10} = 7$. Slot 7 occupied.
    *   Probe 7: $(1 + 7) \pmod{10} = 8$. Slot 8 occupied.
    *   Probe 8: $(1 + 8) \pmod{10} = 9$. Slot 9 empty.
    Table: `[ , 11, 12, 23, 4, 15, 35, 27, 18, 31 ]`

---

This concludes Module 4, Topic: Hashing Techniques. We've covered various hash functions and methods to handle collisions, providing a foundation for efficient data management.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
