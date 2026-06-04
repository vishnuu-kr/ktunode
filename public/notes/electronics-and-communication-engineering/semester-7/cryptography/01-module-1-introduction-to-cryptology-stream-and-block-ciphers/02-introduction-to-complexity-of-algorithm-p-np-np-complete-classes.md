---
title: "Introduction to Complexity of Algorithm - P, NP, NP-Complete classes."
subject: "CRYPTOGRAPHY"
module: "Module 1: Introduction to cryptology : Stream and block ciphers"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff2b0"
status: "completed"
scrapedAt: "2026-05-23T18:05:32.973Z"
---
# Module 1: Introduction to Cryptology: Stream and Block Ciphers
## Topic: Introduction to Complexity of Algorithm - P, NP, NP-Complete Classes

### Learning Outcomes:

*   Understand the fundamental concepts of computational complexity theory.
*   Differentiate between polynomial time (P), non-deterministic polynomial time (NP), and NP-complete problems.
*   Relate the complexity of algorithms to the security of cryptographic systems.
*   Appreciate why certain problems are considered hard and are used as the basis for modern cryptography.

---

### 1. Introduction to Computational Complexity

Computational complexity theory is a branch of computer science that deals with the resources required to solve computational problems. The primary resources considered are **time** (how many steps an algorithm takes) and **space** (how much memory an algorithm uses).

For cryptography, understanding the complexity of problems is crucial because the security of many cryptographic algorithms relies on the assumption that certain mathematical problems are computationally hard to solve.

**Key Concepts:**

*   **Algorithm:** A well-defined sequence of instructions to solve a problem.
*   **Problem:** A general question to be answered, often with variable inputs.
*   **Instance:** A specific input to a problem.
*   **Time Complexity:** A measure of how the running time of an algorithm grows with the size of its input.
*   **Space Complexity:** A measure of how the memory usage of an algorithm grows with the size of its input.
*   **Input Size (n):** Typically refers to the number of bits required to represent the input.

**How complexity relates to cryptography:**
The security of cryptographic systems is often based on the difficulty of solving a particular mathematical problem. If a problem is computationally "hard," it means that any known algorithm to solve it takes an unreasonably long time (e.g., exponentially longer) with respect to the input size. This makes it infeasible for an attacker to break the cryptosystem within a practical timeframe.

---

### 2. Measuring Complexity: Big-O Notation

We use **Big-O notation** to describe the asymptotic behavior of functions, specifically how the running time or space usage grows as the input size increases.

**Definition:**
A function $f(n)$ is $O(g(n))$ if there exist positive constants $c$ and $n_0$ such that $0 \le f(n) \le c \cdot g(n)$ for all $n \ge n_0$.

**Common Complexity Classes (in terms of time):**

*   $O(1)$: **Constant time.** The time taken is independent of the input size.
*   $O(\log n)$: **Logarithmic time.** The time taken grows very slowly.
*   $O(n)$: **Linear time.** The time taken grows proportionally to the input size.
*   $O(n \log n)$: **Log-linear time.**
*   $O(n^2)$: **Quadratic time.**
*   $O(n^k)$: **Polynomial time.** Where $k$ is a constant.
*   $O(2^n)$: **Exponential time.** The time taken grows very rapidly.

**Important Distinction for Cryptography:**
Cryptographic algorithms are generally designed to be **efficiently computable** (polynomial time). However, the security of the system relies on the assumption that the underlying **hard problem** is **not efficiently solvable** (i.e., it requires exponential time for any known algorithm).

---

### 3. The Complexity Classes: P, NP, and NP-Complete

These classes categorize problems based on the time required to find a solution.

#### 3.1. Class P (Polynomial Time)

**Definition:**
The class **P** consists of all decision problems for which a **polynomial-time deterministic algorithm** exists. A decision problem is a problem whose answer is either "yes" or "no."

*   **Deterministic Algorithm:** An algorithm that follows a single, fixed sequence of steps for a given input.
*   **Polynomial Time:** An algorithm whose running time is bounded by a polynomial function of the input size ($O(n^k)$ for some constant $k$).

**Key Idea:** Problems in P are considered "easy" or "tractable" from a computational perspective.

**Examples:**

*   **Sorting:** Checking if a list is sorted ($O(n)$).
*   **Searching:** Finding an element in a sorted list ($O(\log n)$).
*   **Greatest Common Divisor (GCD):** Using the Euclidean algorithm ($O(\log n)$). *(This is crucial for number theory-based cryptography as discussed in Koblitz).*
*   **Matrix Multiplication:** Standard algorithms take $O(n^3)$ time, but faster algorithms exist.

**Relevance to Cryptography:**
Cryptographic algorithms themselves (encryption, decryption, key generation) must be efficient. Therefore, they are designed to run in polynomial time.

---

#### 3.2. Class NP (Non-deterministic Polynomial Time)

**Definition:**
The class **NP** consists of all decision problems for which a potential solution can be **verified in polynomial time** by a **deterministic algorithm**. Alternatively, it's the set of decision problems solvable in polynomial time by a **non-deterministic Turing machine**.

*   **Non-deterministic Turing Machine:** A theoretical computing model that can "guess" the correct path to a solution. If there is *any* sequence of guesses that leads to a correct "yes" answer in polynomial time, then the problem is in NP.
*   **Verification:** Given an input and a proposed "certificate" (a potential solution), can we check if the certificate is correct in polynomial time?

**Key Idea:** Problems in NP are not necessarily easy to solve, but if a "yes" answer is given, we can quickly check if it's valid.

**Examples:**

*   **Satisfiability Problem (SAT):** Given a Boolean formula, does there exist an assignment of truth values to its variables that makes the formula true?
    *   **Verification:** If someone gives you an assignment of truth values, you can plug them into the formula and evaluate it in polynomial time to see if it's true.
*   **Traveling Salesperson Problem (TSP) (Decision Version):** Given a list of cities and distances between them, and a total distance $K$, does there exist a tour that visits each city exactly once and returns to the starting city with a total distance less than or equal to $K$?
    *   **Verification:** If someone provides a tour (a sequence of cities), you can sum the distances along that tour and check if it's $\le K$ in polynomial time.
*   **Integer Factorization (Decision Version):** Given an integer $N$ and an integer $k$, does $N$ have a prime factor less than or equal to $k$?
    *   **Verification:** If someone provides a prime factor $p \le k$, you can check if $p$ divides $N$ (i.e., $N \pmod p = 0$) in polynomial time.

**Important Note:** If a problem is in P, it is also in NP. This is because if you can solve a problem deterministically in polynomial time, you can certainly verify a solution in polynomial time (you just solve it yourself!).

---

#### 3.3. NP-Complete (NP-C)

**Definition:**
A decision problem is **NP-Complete** if it satisfies two conditions:

1.  **It is in NP:** There exists a polynomial-time verification algorithm for the problem.
2.  **It is NP-hard:** Every other problem in NP can be reduced to this problem in polynomial time.

*   **NP-hard:** A problem $H$ is NP-hard if for any problem $L$ in NP, there is a polynomial-time reduction from $L$ to $H$. This means if you could solve $H$ in polynomial time, you could solve *any* problem in NP in polynomial time.
*   **Reduction:** A process of transforming an instance of one problem into an instance of another problem, such that solving the second problem provides the solution to the first. A polynomial-time reduction means the transformation itself takes polynomial time.

**Key Idea:** NP-Complete problems are the "hardest" problems in NP. If you find a polynomial-time algorithm for *any* NP-Complete problem, then you have found a polynomial-time algorithm for *all* problems in NP. This would imply **P = NP**.

**The P vs. NP Problem:**
This is one of the most significant unsolved problems in computer science. It is widely believed that **P ≠ NP**, meaning that there are problems in NP that cannot be solved in polynomial time. Most NP-Complete problems are thought to require exponential time in the worst case.

**Examples of NP-Complete Problems:**

*   Satisfiability Problem (SAT)
*   Traveling Salesperson Problem (TSP)
*   Subset Sum Problem: Given a set of integers, does any subset sum to a target value?
*   Graph Coloring: Can a graph be colored with $k$ colors such that no two adjacent vertices have the same color?

**Relevance to Cryptography:**
Many problems that form the basis of modern cryptography (especially public-key cryptography) are believed to be NP-hard, or at least computationally hard in practice, even though they may not be formally proven NP-Complete.

*   **Integer Factorization:** While not proven NP-Complete, the problem of factoring a large composite number into its prime factors is widely believed to be hard. The security of RSA relies on this assumption. *(Relates to Koblitz, Koshy).*
*   **Discrete Logarithm Problem (DLP):** Finding $x$ given $g$, $y$, and a prime $p$ such that $g^x \equiv y \pmod p$. This is the basis for Diffie-Hellman key exchange and ElGamal encryption. *(Relates to Koblitz).*
*   **Elliptic Curve Discrete Logarithm Problem (ECDLP):** The analogous problem on elliptic curves. *(Relates to Hankerson, Menezes, Vanstone).*

These problems are generally not decision problems but rather search or computation problems. However, their hardness is a key factor in their cryptographic use. The idea is that an attacker would need to solve these hard problems to break the cryptosystem.

---

### 4. Algorithms and Cryptographic Security

**CO1: Apply the principles of number theory and abstract algebra in cryptology.**
The complexity classes P, NP, and NP-Complete provide the theoretical framework for understanding why certain number-theoretic problems (like factoring and DLP) are suitable for cryptographic applications. These problems are often chosen precisely because they are believed to be computationally hard (i.e., not in P).

**CO2: Design and analyze various symmetric ciphers (Knowledge Level: K3)**
While NP-completeness is more directly related to the hardness of mathematical problems underpinning public-key cryptography, understanding complexity is still relevant for symmetric ciphers. Symmetric ciphers aim to be efficient (polynomial time). However, cryptanalysis of symmetric ciphers often involves searching for keys or exploiting structural weaknesses. If a brute-force search for a key is required, its complexity is exponential in the key length. The "hardness" here refers to the infeasibility of brute-force attacks within practical timeframes.

**CO3: Design and analyze various asymmetric ciphers (Knowledge Level: K3)**
This is where complexity is most directly applied. The security of asymmetric cryptosystems like RSA, Diffie-Hellman, and ECC relies on the assumed computational hardness of problems like integer factorization, discrete logarithm, and elliptic curve discrete logarithm. If a polynomial-time algorithm were found for any of these problems, the corresponding cryptosystems would be broken.

**CO4: Apply the mathematical techniques for the cryptanalysis of symmetric and asymmetric ciphers. (Knowledge Level: K3)**
Cryptanalysis often involves trying to find efficient (polynomial-time) algorithms to break a cipher. For example, finding weaknesses that allow for faster-than-brute-force key recovery or plaintext recovery. Understanding complexity classes helps cryptanalysts identify potential attack vectors and assess the strength of cryptographic schemes. If an attack can be framed as solving an NP-complete problem efficiently, it would be a significant breakthrough.

---

### 5. Important Points to Remember

*   **P:** Problems solvable in polynomial time by a deterministic algorithm (considered "easy").
*   **NP:** Problems whose solutions can be *verified* in polynomial time by a deterministic algorithm.
*   **NP-Complete:** The "hardest" problems in NP. If any NP-Complete problem can be solved in polynomial time, then P = NP.
*   **P ≠ NP:** The widely believed conjecture that there are problems solvable in NP that are not solvable in P.
*   **Cryptographic Security:** Relies on the assumption that certain mathematical problems are computationally hard (i.e., require exponential time to solve for all known algorithms). These problems are often related to NP-hard problems or problems that are computationally expensive in practice, even if not formally in NP-Complete.
*   **Efficiency:** Cryptographic algorithms (encryption, decryption) must be efficient (polynomial time).
*   **Hardness:** The underlying mathematical problem that the cipher is based on must be computationally hard.

---

### 6. Practice Questions

1.  **What is the primary difference between class P and class NP?**
    *   **Answer:** Class P contains problems solvable in polynomial time by a deterministic algorithm. Class NP contains problems whose solutions can be *verified* in polynomial time by a deterministic algorithm.

2.  **Explain why the concept of "polynomial time" is important in the context of cryptography.**
    *   **Answer:** Cryptographic algorithms (like encryption and decryption) must be efficient for practical use, meaning they should run in polynomial time. Conversely, the security of many cryptosystems relies on the difficulty of solving an underlying mathematical problem, which is assumed to require exponential time, making it infeasible for attackers.

3.  **If a problem is in P, is it also in NP? Justify your answer.**
    *   **Answer:** Yes. If a problem can be solved in polynomial time by a deterministic algorithm, then any proposed solution can be verified in polynomial time by simply running the deterministic algorithm.

4.  **What are the two conditions for a problem to be NP-Complete?**
    *   **Answer:** A problem is NP-Complete if:
        1.  It is in NP.
        2.  It is NP-hard (meaning every other problem in NP can be reduced to it in polynomial time).

5.  **Give an example of a mathematical problem that is believed to be computationally hard and is used in cryptography. Briefly explain its relevance.**
    *   **Answer:** The **Integer Factorization Problem (IFP)**. The security of the RSA cryptosystem relies on the assumption that it is computationally infeasible to find the prime factors of a very large composite number in polynomial time. Decrypting an RSA message without the private key requires factoring the public modulus, which is believed to be a hard problem.

6.  **Consider the problem of checking if a given number $N$ is prime (Primality Testing). Is this problem in P, NP, or NP-Complete?**
    *   **Answer:** Primality testing is in **P**. The AKS primality test (Agrawal–Kayal–Saxena) proved that primality testing can be performed in polynomial time. This is a significant result because many other number-theoretic problems previously thought to be hard are indeed NP-hard or NP-complete.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. References and Further Reading

*   **A Course in Number Theory and Cryptography by Neal Koblitz:** Provides a solid foundation in number theory, which underpins many hard problems used in cryptography. While it may not delve deeply into P/NP theory, it establishes the context for why these number-theoretic problems are interesting.
*   **Handbook of Applied Cryptography by Menezes, Paul C. V, Scott A. Vanstone:** Discusses the hardness assumptions of various cryptographic primitives and their relation to number-theoretic problems. Chapter 1 provides an introduction to complexity and computational hardness.
*   **Cryptography: Theory and Practice by Douglas R. Stinson:** Chapter 2 of Stinson's book provides a good introduction to computational complexity, including P, NP, and NP-completeness, and discusses their relevance to cryptography.

These notes provide a foundational understanding of computational complexity classes and their critical role in the design and security of cryptographic systems. The hardness of problems in NP-hard or related classes is the bedrock upon which the security of much of modern cryptography is built.