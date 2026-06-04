---
title: "Church Turing thesis"
subject: "THEORY OF COMPUTATION"
module: "Module 4: Turing Machines (Kozen)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abd3"
status: "completed"
scrapedAt: "2026-05-20T16:30:26.531Z"
---
# THEORY OF COMPUTATION - Module 4: Turing Machines (Kozen) - Church-Turing Thesis

## I. Introduction

These notes cover the Church-Turing Thesis, a fundamental concept in the theory of computation, specifically within the context of Turing Machines.  We will explore its meaning, implications, and significance.

## II. Learning Outcomes

By the end of this module, you should be able to:

*   **Understand the Church-Turing Thesis:** Explain what the Church-Turing Thesis states and its core principle.
*   **Explain the evidence supporting the Church-Turing Thesis:**  Identify and describe the different computational models that are equivalent to Turing Machines.
*   **Recognize the implications of the Church-Turing Thesis:** Explain what the Church-Turing Thesis means for the limits of computation.
*   **Distinguish the Church-Turing Thesis from a mathematical theorem:** Understand why it's a thesis and not a provable theorem.

## III. Key Concepts and Definitions

*   **Algorithm:** A well-defined, step-by-step procedure for solving a problem or performing a task.  It must be unambiguous, finite, and effective.
*   **Effective Computability:**  A process or method that can be carried out by a human being using only paper and pencil, following a finite set of rules, in a finite amount of time.  This is an informal notion.
*   **Turing Machine (TM):** A theoretical model of computation that consists of an infinite tape, a read/write head, and a finite state control unit.  It operates by reading symbols from the tape, writing symbols onto the tape, and moving the head left or right based on its current state and the symbol read.
*   **Computable Function:** A function for which there exists a Turing Machine that, given the input, halts and produces the correct output.
*   **Decision Problem:** A problem with a yes/no answer.
*   **Decidable Language:** A language (set of strings) for which there exists a Turing Machine that halts on every input, accepting if the input is in the language and rejecting if the input is not in the language.

## IV. The Church-Turing Thesis

### IV.A. What is it?

The Church-Turing Thesis (also known as the Church-Turing Conjecture) states:

*   **"Every effectively computable function is computable by a Turing Machine."**

Alternatively:

*   **"Any computational problem that can be solved by an algorithm can also be solved by a Turing Machine."**

In simpler terms:  Anything we consider to be "computable" in an intuitive sense (by a human with pen and paper, or by any conceivable computer) can be computed by a Turing Machine.

### IV.B. Why is it a Thesis (and not a Theorem)?

The Church-Turing Thesis is a **thesis** or a **conjecture** because it connects a formal concept (Turing Machine computability) with an informal concept (effective computability).

*   **Formal Concept:** Turing Machine computability is precisely defined mathematically. We can rigorously prove that a specific Turing Machine computes a specific function.
*   **Informal Concept:** Effective computability relies on our intuitive understanding of what it means to be "effectively" computable. It's based on the notion of what a human with pen and paper can do.  We cannot mathematically prove something about an informal notion.

Therefore, the Church-Turing Thesis cannot be proven mathematically.  It can only be supported by evidence.

### IV.C. Implications

The Church-Turing Thesis has profound implications:

*   **Limits of Computation:**  If the Church-Turing Thesis is true (and vast evidence suggests it is), then anything that *cannot* be computed by a Turing Machine is fundamentally *uncomputable*. There is no algorithm, no matter how sophisticated or implemented on any future technology, that can solve such a problem.  This defines the absolute limits of what computation can achieve.
*   **Universality of Turing Machines:** Turing Machines are considered a universal model of computation.  Any other model of computation that is at least as powerful as a Turing Machine can simulate a Turing Machine, and vice versa. This means that the Turing Machine captures the essence of computation.
*   **Independence of Hardware:** The Church-Turing Thesis implies that the fundamental limits of computation are independent of the specific hardware or technology used.  A vastly faster computer might solve some problems more quickly, but it won't be able to solve problems that are fundamentally uncomputable.

## V. Evidence Supporting the Church-Turing Thesis

Numerous computational models, developed independently of Turing Machines, have been proven to be equivalent in computational power.  This provides strong evidence for the Church-Turing Thesis.  If a model is equivalent to a Turing Machine, it can compute the same set of functions.  Some examples include:

*   **Lambda Calculus:** A formal system in mathematical logic and computer science for expressing computation based on function abstraction and application.
*   **Recursive Functions:** A class of number-theoretic functions defined by composition, primitive recursion, and minimization.
*   **Post Systems:** A string rewriting system that can be used to define formal languages and solve computational problems.
*   **Register Machines:**  Abstract machines with a finite number of registers that can hold integers. They can perform arithmetic operations and conditional jumps.
*   **Modern Programming Languages (C, Java, Python, etc.):**  While these languages are implemented on real-world computers with finite memory, their theoretical counterparts (with unbounded memory) are Turing-complete.

The fact that so many different formalisms, developed independently, have been shown to be equivalent to Turing Machines in their computational power lends considerable weight to the Church-Turing Thesis. Each model is capable of simulating the others, and all have the same fundamental limitations as Turing Machines.

## VI. Examples

### VI.A. Examples Supporting Computability

Consider the following:

*   **Sorting a List of Numbers:**  We can write an algorithm to sort a list of numbers.  Since we can write an algorithm, we believe (and can demonstrate) that a Turing Machine can also sort a list of numbers.
*   **Calculating Factorial:**  We can write an algorithm to calculate the factorial of a non-negative integer. A Turing Machine can also be constructed to perform this calculation.
*   **Searching for a String in a Text File:** Common operation that's easily implementable with an algorithm, and therefore, a Turing Machine.

### VI.B. Example of Uncomputability (Halting Problem)

The most famous example of an uncomputable problem is the **Halting Problem**.  The Halting Problem asks:

*   Given a Turing Machine *M* and an input *w*, will *M* halt (stop) when run on *w*?

It has been proven that there is no Turing Machine that can correctly solve the Halting Problem for all possible Turing Machines *M* and inputs *w*.  Therefore, by the Church-Turing Thesis, the Halting Problem is fundamentally uncomputable. There exists no algorithm that can determine if an arbitrary program will halt or run forever.

## VII. Practice Questions/Exercises

**Question 1:** Explain the Church-Turing Thesis in your own words.

**Answer:** The Church-Turing Thesis states that any problem that can be solved by a step-by-step process (an algorithm) can also be solved by a Turing Machine.  It connects the intuitive notion of "computability" with the formal model of the Turing Machine.

**Question 2:** Why is the Church-Turing Thesis not considered a theorem?

**Answer:**  The Church-Turing Thesis is not a theorem because it relates a formal mathematical concept (Turing Machine computability) to an informal, intuitive concept (effective computability). Since effective computability is not rigorously defined, we cannot prove the relationship mathematically.

**Question 3:** Give an example of a computational model that is equivalent to a Turing Machine.

**Answer:** The Lambda Calculus is an example of a computational model that is equivalent to a Turing Machine.

**Question 4:** What are the implications of the Church-Turing Thesis regarding the limits of computation?

**Answer:** The Church-Turing Thesis implies that anything that cannot be computed by a Turing Machine is fundamentally uncomputable.  This means there are absolute limits to what computation can achieve, regardless of advances in technology.

**Question 5:**  A new programming language is invented that is extremely fast and efficient. Could this new language solve the Halting Problem?  Explain why or why not, referencing the Church-Turing Thesis.

**Answer:** No, this new programming language, no matter how fast or efficient, cannot solve the Halting Problem. The Halting Problem is known to be uncomputable by a Turing Machine. The Church-Turing Thesis states that anything computable can be computed by a Turing Machine.  Therefore, if a problem is uncomputable by a Turing Machine, it is uncomputable by *any* conceivable computational device, including this new programming language. The speed and efficiency of the language are irrelevant to the *fundamental computability* of the problem.

## VIII. Important Points to Remember

*   The Church-Turing Thesis is a cornerstone of theoretical computer science.
*   It defines the limits of what can be computed.
*   It is supported by vast evidence from various computational models.
*   It is a thesis, not a provable theorem.
*   It has significant implications for understanding the power and limitations of computation.
*   The halting problem is an example of an uncomputable problem, demonstrating the boundaries set by the Church-Turing Thesis.
