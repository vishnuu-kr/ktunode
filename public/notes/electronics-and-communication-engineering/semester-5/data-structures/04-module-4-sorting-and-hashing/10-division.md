---
title: "Division"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea26"
status: "completed"
scrapedAt: "2026-05-23T17:55:22.505Z"
---
# Data Structures - Module 4: Sorting and Hashing - Topic: Division Method

## Module Overview

This module delves into fundamental techniques for organizing and retrieving data efficiently. We'll explore various sorting algorithms, understanding their mechanisms and performance characteristics. Subsequently, we'll introduce hashing, a powerful technique for direct data access.

## Topic: The Division Method of Hashing

### 1. Introduction to Hashing

Hashing is a technique used to map data from a large range of keys to a smaller range of hash table indices. This allows for near-constant time average complexity for insertion, deletion, and search operations.

*   **Key Concept:** A **hash function** takes a key as input and produces an index (or "hash code") within the bounds of a hash table.
*   **Hash Table:** An array-based data structure where elements are stored based on their hash values.
*   **Collisions:** Occur when two different keys map to the same hash table index. Handling collisions is a crucial aspect of hashing.

### 2. The Division Method

The division method is one of the simplest and most commonly used hash function techniques.

*   **Core Principle:** It involves using the remainder of the division of the key by a chosen number `m`.

    *   **Formula:** `h(key) = key % m`

*   **Choosing `m`:** The choice of `m` is critical for the performance of the division method.

    *   **`m` should ideally be a prime number:** This helps distribute keys more uniformly across the hash table, reducing the likelihood of collisions.
        *   **Why prime?** If `m` has a small factor `d`, and many keys are multiples of `d`, then `key % m` will likely fall into a limited set of values. Using a prime `m` mitigates this.
        *   *(Reference: Horowitz, Sahni, and Freed, Chapter 9)*
    *   **Avoid powers of 2 for `m`:** If `m` is a power of 2, say `m = 2^k`, then `key % m` essentially extracts the `k` least significant bits of the key. If keys have patterns in their lower bits, this can lead to poor distribution.
    *   **Good choices for `m`:** Generally, primes that are not too close to powers of 2 are preferred. Examples include 101, 199, 997, etc.

*   **Example:**
    Let's say we have keys: 12, 44, 13, 88, 23, 94, 11, 39, 20, 16
    And we want to store them in a hash table of size `m = 11`.

    Using the division method `h(key) = key % 11`:

    | Key | `key % 11` | Hash Index |
    | :-- | :--------- | :--------- |
    | 12  | 12 % 11    | 1          |
    | 44  | 44 % 11    | 0          |
    | 13  | 13 % 11    | 2          |
    | 88  | 88 % 11    | 0          |  **Collision with key 44**
    | 23  | 23 % 11    | 1          |  **Collision with key 12**
    | 94  | 94 % 11    | 6          |
    | 11  | 11 % 11    | 0          |  **Collision with keys 44 and 88**
    | 39  | 39 % 11    | 6          |  **Collision with key 94**
    | 20  | 20 % 11    | 9          |
    | 16  | 16 % 11    | 5          |

    The hash table would look like this (assuming a simple collision resolution like separate chaining is used):

    *   Index 0: [44, 88, 11]
    *   Index 1: [12, 23]
    *   Index 2: [13]
    *   Index 5: [16]
    *   Index 6: [94, 39]
    *   Index 9: [20]

### 3. Collision Resolution (Brief Mention as it's a related concept)

While this topic focuses on the division method itself, it's important to note that the effectiveness of the division method is closely tied to how collisions are handled. Common collision resolution techniques include:

*   **Separate Chaining:** Each hash table slot points to a linked list (or another data structure) of all keys that hash to that slot.
*   **Open Addressing:** When a collision occurs, the algorithm probes for another available slot in the hash table. Techniques include:
    *   Linear Probing
    *   Quadratic Probing
    *   Double Hashing

### 4. Performance Analysis (Connecting to CO1 & CO4)

The performance of the division method (and hashing in general) is highly dependent on the quality of the hash function and the collision resolution strategy.

*   **Average Case:** With a good hash function and a low load factor (number of elements / table size), the average time complexity for insertion, deletion, and search is **O(1)**.
    *   *(Reference: Samanta, Chapter 7)*
*   **Worst Case:** In the worst case, where all keys hash to the same slot, the performance degrades to that of the underlying collision resolution structure (e.g., O(n) for a linked list in separate chaining).
*   **Load Factor (`α`)**: `α = n / m`, where `n` is the number of elements and `m` is the hash table size. A low load factor (typically < 0.75 for open addressing, or even higher for separate chaining) generally leads to better performance.

### 5. Practical Considerations and Best Practices

*   **Key Type:** The division method is most suitable for integer keys. For other data types (strings, floating-point numbers), the keys must first be converted into integers.
    *   *(Reference: Gilberg & Forouzan, Chapter 8)*
*   **Choosing `m`:** Always consider making `m` a prime number. If you know the expected range of keys, you can choose a prime `m` larger than the maximum expected key value, but this can lead to a large, sparse hash table. Often, `m` is chosen to be a prime number slightly less than the desired table size.
*   **Dynamic Resizing:** As the number of elements grows, the load factor increases, potentially degrading performance. Hash tables often support dynamic resizing (increasing `m` and rehashing all elements) to maintain good performance.

### 6. Alignment with Course Outcomes

*   **CO1: Compare performance of algorithms using asymptotic notations (Knowledge Level: K2)**
    *   Understanding the O(1) average case and O(n) worst-case complexity of hashing with the division method directly addresses this outcome. We compare hashing to other searching methods (like binary search, O(log n)).
*   **CO4: Apply and compare various techniques for searching and sorting. (Knowledge Level: K3)**
    *   Hashing provides an alternative searching mechanism. Comparing its O(1) average search time to O(log n) for binary search or O(n) for linear search highlights its strengths.
*   **CO5: Apply appropriate hash function to store and access a given dataset (Knowledge Level: K3)**
    *   This entire topic is about applying the division method as a hash function. Choosing `m` appropriately and understanding its implications for data distribution are key aspects.

## Practice Questions and Exercises

**Question 1:**
Given a set of keys {50, 700, 76, 85, 92, 10, 20, 30} and a hash table of size `m = 7`. Using the division method, calculate the hash index for each key. Identify any collisions.

**Answer 1:**
`m = 7` (which is prime, a good choice)
Hash function: `h(key) = key % 7`

| Key | `key % 7` | Hash Index |
| :-- | :--------- | :--------- |
| 50  | 50 % 7     | 1          |
| 700 | 700 % 7    | 0          |
| 76  | 76 % 7     | 6          |
| 85  | 85 % 7     | 1          | **Collision with key 50**
| 92  | 92 % 7     | 1          | **Collision with keys 50 and 85**
| 10  | 10 % 7     | 3          |
| 20  | 20 % 7     | 6          | **Collision with key 76**
| 30  | 30 % 7     | 2          |

Collisions occur at indices 1 and 6.

---

**Question 2:**
Why is it generally recommended to choose a prime number for `m` when using the division method for hashing?

**Answer 2:**
Choosing a prime number for `m` helps to distribute the keys more uniformly across the hash table. If `m` has factors, keys that share common factors with `m` might cluster together in the hash table, leading to more collisions. Using a prime `m` minimizes the chance of such clustering and improves the overall efficiency of the hash table.

---

**Question 3:**
Consider the keys {10, 20, 30, 40, 50} and `m = 10`.
a) Calculate the hash indices using the division method `h(key) = key % m`.
b) Discuss the potential problem with choosing `m = 10` (a power of 2) in this scenario.

**Answer 3:**
a)
`m = 10`
Hash function: `h(key) = key % 10`

| Key | `key % 10` | Hash Index |
| :-- | :--------- | :--------- |
| 10  | 10 % 10    | 0          |
| 20  | 20 % 10    | 0          | **Collision**
| 30  | 30 % 10    | 0          | **Collision**
| 40  | 40 % 10    | 0          | **Collision**
| 50  | 50 % 10    | 0          | **Collision**

b) The problem with choosing `m = 10` is that it is a power of 2. In this specific case, all keys are multiples of 10. The division method `key % 10` effectively returns the last digit of the key. Since all these keys end in 0, they all hash to index 0, resulting in maximum collisions. This demonstrates how choosing a non-prime number (especially a power of 2) can lead to poor distribution if the keys have certain patterns.

---

**Question 4 (Conceptual):**
If you were to hash strings using the division method, what preliminary step would you need to perform on the strings?

**Answer 4:**
Before applying the division method to strings, each string must be converted into an integer. This can be done in several ways, for example:
1.  Summing the ASCII values of all characters in the string.
2.  Treating the string as a number in a base system (e.g., base 26 for English alphabet) and computing its integer value.
3.  Using polynomial hashing, where each character's value is multiplied by a power of a chosen base and summed.
Once an integer representation is obtained, the division method `h(integer_key) = integer_key % m` can be applied.

*(Reference: Brass, Chapter 5 on Hash Tables)*

## Important Points to Remember

*   The division method `h(key) = key % m` is a simple yet effective hashing technique.
*   The choice of `m` is crucial. **Prime numbers are generally preferred for `m`** to ensure better key distribution and fewer collisions.
*   Avoid choosing `m` as a power of 2 if your keys have patterns in their lower-order bits.
*   Hashing performance is a combination of the hash function quality and the collision resolution strategy.
*   The average time complexity for hashing operations (with a good function and low load factor) is O(1).
*   The division method is most directly applicable to integer keys. Non-integer keys require a conversion to an integer representation first.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## Further Reading / References Used

*   **Fundamentals of Data Structures in C by Ellis Horowitz, Sartaj Sahni and Susan Anderson-Freed:** Provides a foundational understanding of hashing and hash functions in Chapter 9.
*   **Classic Data Structures by Samanta D:** Discusses various hashing techniques and collision resolution methods in Chapter 7, offering practical examples.
*   **Data Structures: A Pseudocode Approach with C by Richard F. Gilberg, Behrouz A. Forouzan:** Offers clear explanations and pseudocode for hashing, including the division method, in Chapter 8.
*   **Advanced Data Structures by Peter Brass:** Explores hash table implementations and advanced hashing concepts, useful for understanding practical trade-offs.

This concludes the notes on the Division Method for Hashing. Understanding this method is a crucial step towards mastering the concepts of hashing in Data Structures.