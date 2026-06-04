---
title: "Post Correspondence Problem and the proofs for their undecidability."
subject: "THEORY OF COMPUTATION"
module: "Module 4: Turing Machines (Kozen)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abd9"
status: "completed"
scrapedAt: "2026-05-20T16:30:31.292Z"
---
# THEORY OF COMPUTATION - MODULE 4: TURING MACHINES (KOZEN) - POST CORRESPONDENCE PROBLEM

## Topic: Post Correspondence Problem and Undecidability Proofs

### Learning Outcomes:

*   Understand the definition of the Post Correspondence Problem (PCP).
*   Recognize the significance of PCP as an undecidable problem.
*   Grasp the high-level idea behind the undecidability proof of PCP.
*   Understand how PCP is used to prove the undecidability of other problems.
*   Apply the PCP to simple examples and determine if a solution exists.

### 1. Key Concepts and Definitions

*   **Post Correspondence Problem (PCP):** Given a finite set of *pairs* of strings, *P* = {(*x*<sub>1</sub>, *y*<sub>1</sub>), (*x*<sub>2</sub>, *y*<sub>2</sub>), ..., (*x*<sub>k</sub>, *y*<sub>k</sub>)}, over some alphabet Σ. A solution to the PCP is a sequence of indices *i*<sub>1</sub>, *i*<sub>2</sub>, ..., *i*<sub>m</sub>, where 1 ≤ *i*<sub>j</sub> ≤ *k* for all *j*, such that:

    *x*<sub>*i*1</sub>*x*<sub>*i*2</sub>...*x*<sub>*im*</sub> = *y*<sub>*i*1</sub>*y*<sub>*i*2</sub>...*y*<sub>*im*</sub>

    In simpler terms, we are looking for a sequence of pairs such that concatenating the top strings and concatenating the bottom strings results in the same string.

*   **Instance of PCP:** A specific set of pairs of strings, *P*.

*   **Solution to PCP:** A sequence of indices that satisfy the condition above.

*   **Undecidable Problem:** A problem for which no Turing Machine can decide (i.e., halt and correctly output "yes" or "no" for all possible inputs).

*   **Modified Post Correspondence Problem (MPCP):** A variant of the PCP where the solution must start with the first pair (1). This problem is often used in undecidability proofs.

*   **Alphabet (Σ):** A finite set of symbols used to construct strings.

*   **String:** A finite sequence of symbols from an alphabet.

### 2. Significance of PCP

*   PCP is a classic example of an **undecidable problem**. This means there's no general algorithm (Turing Machine) that can determine whether an arbitrary instance of PCP has a solution or not.

*   PCP is crucial for proving the undecidability of other problems via **reductions**.  If we can show that solving another problem *A* implies solving PCP, then *A* must also be undecidable.  This is because if *A* were decidable, we could use the decision procedure for *A* to solve PCP, which is impossible.

### 3. High-Level Idea Behind Undecidability Proof (Sketch)

The proof of PCP's undecidability is somewhat complex, typically showing a reduction from the Acceptance Problem for Turing Machines (ATM). The general idea is as follows:

1.  **Encoding Turing Machine Computations:**  The pairs of strings in the PCP instance are constructed in a way that "simulate" the computation of a Turing Machine *M* on input *w*. The strings in the pairs encode the state of the machine, the tape contents, and the moves made by the Turing Machine.

2.  **Encoding States and Transitions:** Each pair often corresponds to either:
    *   A transition of the Turing Machine.  For example, if the Turing Machine's transition function allows it to change from state 'q' reading 'a' to state 'p' writing 'b' and moving right, then there will be corresponding pairs of strings that simulate this.
    *   Copying the tape contents to the next configuration.

3.  **Simulating a Complete Computation:**  A solution to the PCP problem will correspond to a valid, complete computation of the Turing Machine *M* on input *w*. If the machine accepts *w*, then a solution exists. If the machine doesn't accept *w*, no solution exists.

4.  **Ensuring the Solution Mirrors the Computation:**  The design of the PCP instance is such that the concatenation of the top strings represents the computation of *M* on *w*, and the concatenation of the bottom strings also represents the same computation. A solution to the PCP means the top and bottom strings match, indicating a valid computation.

5.  **Relating PCP to ATM:** Since determining whether the Turing Machine *M* accepts *w* is undecidable (ATM), and finding a solution to the PCP is equivalent to determining if *M* accepts *w*, PCP must also be undecidable.

The full proof involves detailed construction of the PCP instance based on the Turing Machine *M* and its input *w*.

### 4. Using PCP to Prove Undecidability of Other Problems (Reductions)

The core idea is:

*   **Assume the problem *A* is decidable.**  This means there exists a Turing Machine *D<sub>A</sub>* that can decide *A*.

*   **Show how to use *D<sub>A</sub>* to solve PCP.** This involves constructing a Turing Machine that takes a PCP instance as input, transforms it into an instance of problem *A*, runs *D<sub>A</sub>* on the transformed instance, and then uses the result to determine whether the original PCP instance has a solution.

*   **Contradiction:** Since PCP is undecidable, our assumption that problem *A* is decidable must be false. Therefore, problem *A* is undecidable.

**Example (Hypothetical):**

Suppose we want to show a problem *B* (e.g., determining if a context-free grammar generates all strings) is undecidable.

1.  **Assume *B* is decidable.** There is a Turing Machine *D<sub>B</sub>* that decides *B*.

2.  **Reduce PCP to *B*.** We construct a Turing Machine that:
    *   Takes a PCP instance *P* as input.
    *   Transforms *P* into a context-free grammar *G* such that *G* generates all strings if and only if *P* has a solution.  This step is the most difficult and requires a careful construction of *G*.
    *   Runs *D<sub>B</sub>* on *G*.
    *   If *D<sub>B</sub>* accepts (i.e., *G* generates all strings), then the PCP instance *P* has a solution.  If *D<sub>B</sub>* rejects, then *P* has no solution.

3.  **Contradiction:** We now have a Turing Machine that can decide PCP, which is a contradiction.  Therefore, *B* must be undecidable.

### 5. Applying PCP - Examples

**Example 1:**

P = { (a, aa), (ab, b), (b, a) }

Does this PCP instance have a solution?

*   Let's try the sequence 1, 2, 3:
    *   Top: a * ab * b = aabb
    *   Bottom: aa * b * a = aaba
    *   Not a solution.

*   Let's try the sequence 1, 3, 2, 3:
    *   Top: a * b * ab * b = ababb
    *   Bottom: aa * a * b * a = aaaba
    *   Not a solution.

*   Let's try the sequence 1, 3, 2, 3, 1
    *   Top: a * b * ab * b * a = ababba
    *   Bottom: aa * a * b * a * aa = aaabaaa
    *   Not a solution

*   Let's try the sequence 2, 1, 1, 3
    *   Top: ab * a * a * b = abaab
    *   Bottom: b * aa * aa * a = baaaa
    *   Not a solution.

*   Let's try the sequence 2,1,1,3
    *   Top: ab, a, a, b
    *   Bot: b, aa, aa, a

*   Let's try the sequence 1, 2, 3, 1, 2:
    *   Top: a * ab * b * a * ab = aab bab
    *   Bot: aa * b * a * aa * b = aa b a aab

*Let's try the sequence 1, 2, 3, 1:

    *   Top: a, ab, b, a
    *   Bot: aa, b, a, aa

*Let's try 1,2,3:

    *Top: a, ab, b
    *Bot: aa, b, a

*Let's try 1, 2, 3, 2, 2, 3, 1, 1, 3:

    *Top: a, ab, b, ab, ab, b, a, a, b = aabababbab
    *Bot: aa, b, a, b, b, a, aa, aa, a = aabbaabaaa

**It can be time-consuming and not always easy to find the solution by hand.** This is precisely the problem that is algorithmically undecidable.

**Example 2:**

P = { (b, bab<sup>2</sup>), (ba<sup>2</sup>b, b), (b<sup>3</sup>, a) }

It can be tricky and time-consuming to solve by hand, especially as the number of pairs or the length of the strings increases.

**Key Takeaway:** PCP is difficult to solve by inspection, highlighting the computational limitations and confirming the absence of an efficient, general-purpose algorithm.
### 6. Practice Questions / Exercises

1.  **Define the Post Correspondence Problem (PCP).**
    *   **Answer:** See definition in Section 1.

2.  **Explain why PCP is considered an undecidable problem.**
    *   **Answer:** There is no Turing Machine that can decide for any arbitrary PCP instance whether a solution exists. The halting problem of Turing Machines is used in its undecidability proof.

3.  **P = { (a, ab), (ba, a), (b, bb) }. Does this PCP instance have a solution?**
    *   **Answer:** Yes.  The sequence 2, 1, 1, 3 provides a solution:
        *   Top: ba * a * a * b = baaab
        *   Bottom: a * ab * ab * bb = baaab

4.  **Explain the importance of PCP in proving the undecidability of other problems.**
    *   **Answer:** PCP serves as a foundational undecidable problem.  We can show that another problem is undecidable by reducing PCP to it. This means demonstrating that a decision procedure for the second problem could be used to solve PCP, which is impossible, therefore the second problem must also be undecidable.

5.  **What is the Modified Post Correspondence Problem (MPCP)? What constraint does it add?**
    *   **Answer:** MPCP is a variant of PCP where any solution *must* start with the first pair (index 1).  This added constraint makes MPCP particularly useful for certain undecidability proofs.

6.  **P = {(1,101), (10,00), (011,11)}. Does this PCP have a solution?**
    *   **Answer:** No Solution.

### 7. Important Points to Remember

*   PCP is an undecidable problem.
*   PCP instances consist of pairs of strings.
*   A solution to PCP is a sequence of indices that results in matching strings when concatenated.
*   PCP is used in reductions to prove the undecidability of other problems.
*   MPCP (Modified PCP) is a variant where the solution must begin with the first pair.  Understanding this is useful as a tool for proving the undecidability of certain problems.
* While not covered in depth in this module the concept of reductions between problems is a very important topic to grasp.

This detailed set of study notes covers the Post Correspondence Problem (PCP), focusing on its definition, significance, undecidability, and applications. It includes key concepts, examples, practice questions, and highlighted important points to aid understanding and retention of the material. Good luck with your studying!
