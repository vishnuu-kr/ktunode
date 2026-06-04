---
title: "Computability (Kozen)"
subject: "THEORY OF COMPUTATION"
module: "Module 4: Turing Machines (Kozen)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abd2"
status: "completed"
scrapedAt: "2026-05-20T16:30:25.817Z"
---
# THEORY OF COMPUTATION - Module 4: Turing Machines (Kozen) - Computability

These notes cover the Computability topic from Module 4 (Turing Machines) of a Theory of Computation course, drawing primarily from material associated with Kozen's approach to the subject.

## Learning Outcomes:

*   Understand the concept of computability and uncomputability.
*   Define and explain the Church-Turing thesis.
*   Identify problems that are demonstrably undecidable.
*   Apply techniques to prove the undecidability of problems (e.g., reduction).
*   Explain the halting problem and its implications.

## 1. Introduction to Computability

*   **What is Computability?**  A problem is *computable* (or *decidable*) if there exists an algorithm (a Turing Machine) that, given any input for the problem, will always halt and produce the correct answer (yes or no for decision problems).  If no such algorithm exists, the problem is *uncomputable* (or *undecidable*).

*   **Decision Problems:** Many computability questions focus on *decision problems*.  These are problems whose answer is either "yes" or "no." Representing problems as decision problems simplifies the discussion of computability.

*   **Function Computability:**  More generally, a function is computable if there exists a Turing Machine that, given any input, halts and produces the correct output value for the function.

## 2. The Church-Turing Thesis

*   **The Thesis (Not a Theorem):**  The Church-Turing Thesis states that *any function that is intuitively computable can be computed by a Turing Machine.* This is a statement about the limits of what can be computed.  It's a *thesis* because "intuitively computable" is not a formal mathematical concept.

*   **Implications:**
    *   It suggests that the Turing Machine model is a universal model of computation.  Anything we can do with other computational devices (e.g., a modern computer) can, in principle, be done with a Turing Machine.
    *   It allows us to equate "computable" with "computable by a Turing Machine."  If we can prove a problem is uncomputable by a Turing Machine, we accept that it's fundamentally uncomputable by any conceivable computational device.

*   **Why is it important?**  The Church-Turing thesis provides a foundation for reasoning about the limits of computation.  We can use it to argue that if a problem is uncomputable for Turing Machines, it is uncomputable by any other computational method.

## 3. Undecidable Problems

*   **Definition:** A problem is *undecidable* if no algorithm (Turing Machine) can correctly determine whether a given input satisfies the problem's criteria. This means there's *no* Turing Machine that always halts and gives the correct "yes" or "no" answer for every possible input.

*   **Examples (to be explained in detail later):**
    *   The Halting Problem
    *   Determining if a Turing Machine accepts a specific input.
    *   Determining if a Turing Machine accepts any input at all.
    *   Rice's Theorem (a powerful general result about undecidability of properties of the languages recognized by Turing Machines).

## 4. Techniques for Proving Undecidability: Reduction

*   **The Core Idea:** Reduction is a technique to prove that a problem *B* is undecidable by showing that if we could decide *B*, we could also decide a problem *A* that is *already known* to be undecidable. This is often done by transforming an instance of problem *A* into an instance of problem *B*.

*   **Reduction (A ≤m B):** We say that problem *A* is *many-one reducible* to problem *B* (denoted *A* ≤m *B*) if there exists a *computable* function *f* such that for any input *w*:

    *   *w* is in *A*  <=>  *f(w)* is in *B*

*   **How it works for proving undecidability:**

    1.  Assume (for contradiction) that *B* is decidable.
    2.  Show how to use a hypothetical decider for *B* to build a decider for *A*.  This is done by computing *f(w)* and then running the decider for *B* on *f(w)*.
    3.  Since *A* is already known to be undecidable, our assumption that *B* is decidable must be false. Therefore, *B* is undecidable.

*   **Example (Simplified):** Suppose we know the problem "Does a Turing Machine halt on empty input?" is undecidable.  To show that "Does a Turing Machine halt on input '101'?" is undecidable, we can create a reduction.

    *   The reduction would take a Turing Machine *M* and transform it into a new Turing Machine *M'*.  *M'* first writes "101" on its tape and then simulates *M* on the empty tape.  Thus, *M'* halts on "101" if and only if *M* halts on the empty tape.

    *   If we could decide whether *M'* halts on "101", we could decide whether *M* halts on the empty tape (which we know is impossible).  Therefore, determining if a Turing Machine halts on input "101" must also be undecidable.

*   **Key to a Good Reduction:** The reduction *f* must be *computable*. That is, there must exist a Turing Machine that can compute *f(w)* for any input *w*. This is crucial for showing that a decider for *B*, combined with the reduction, would lead to a decider for *A*.

## 5. The Halting Problem

*   **Formal Definition:** The Halting Problem is the problem of determining, given the description of a Turing Machine *M* and an input string *w*, whether *M* will halt (stop) when run on input *w*.

    *   More formally, let `HALT = {<M, w> | M is a Turing Machine that halts on input w}`

*   **The Halting Problem is Undecidable:** There is no Turing Machine that can solve the Halting Problem for all possible inputs.

*   **Proof by Contradiction:**

    1.  **Assume HALT is decidable:**  Assume there exists a Turing Machine *H* that decides HALT.  That is, *H(<M, w>)* halts and outputs "yes" if *M* halts on *w*, and *H(<M, w>)* halts and outputs "no" if *M* does not halt on *w*.

    2.  **Construct a new Turing Machine D:**  We will build a new Turing Machine *D* that uses *H* as a subroutine:

        ```
        D(<M>):
            Run H(<M, <M>>)  // M's description as input to itself
            If H(<M, <M>>) accepts (i.e., M halts on <M>):
                Enter an infinite loop
            Else:
                Halt
        ```

    3.  **Consider what happens when D is run on its own description:**

        *   **Case 1: D(<D>) halts.** If *D(<D>)* halts, then, by the definition of *D*, *H(<D, <D>>)* must have rejected (said that *D* does *not* halt on *<D>*). But this contradicts our assumption that *D* halts on *<D>*.

        *   **Case 2: D(<D>) does not halt.** If *D(<D>)* does not halt, then, by the definition of *D*, *H(<D, <D>>)* must have accepted (said that *D* *does* halt on *<D>*). But this contradicts our assumption that *D* does not halt on *<D>*.

    4.  **Conclusion:** Since both cases lead to contradictions, our initial assumption that *H* exists (i.e., HALT is decidable) must be false. Therefore, the Halting Problem is undecidable.

*   **Implications of the Halting Problem:**
    *   It shows a fundamental limit to what computers can do. There are some things that no algorithm can ever accomplish.
    *   It is a basis for proving the undecidability of many other problems using reduction.

## 6. Rice's Theorem

*   **General Statement:** Rice's Theorem states that *any nontrivial property of the language recognized by a Turing Machine is undecidable.*

*   **Key Terms:**
    *   **Property:** A property is a set of languages.  A Turing Machine *M* "has" a property *P* if the language *L(M)* recognized by *M* belongs to *P*.
    *   **Trivial Property:** A property is trivial if it is either the empty set (no language has the property) or the set of all languages (every language has the property).
    *   **Nontrivial Property:** A property is nontrivial if it is neither trivial. That is, there exists at least one Turing Machine that has the property and at least one Turing Machine that doesn't.

*   **Formal Statement:**  Let *P* be a nontrivial property of the language recognized by a Turing Machine.  Then the problem of determining, given a Turing Machine *M*, whether *L(M)* has property *P* is undecidable.

*   **Examples of Undecidable Problems using Rice's Theorem:**
    *   "Does *L(M)* contain the string '101'?" (nontrivial, some TMs accept languages containing "101", others don't).
    *   "Is *L(M)* regular?" (nontrivial, some TMs recognize regular languages, others don't).
    *   "Is *L(M)* empty?" (nontrivial, some TMs recognize the empty language, others don't).

*   **Non-Examples (Problems NOT Covered by Rice's Theorem):**
    *   "Does Turing Machine *M* halt on input '101'?" (This is a property of the *Turing Machine's behavior*, not a property of the *language* it recognizes).
    *   "Does Turing Machine *M* have 5 states?" (This is a property of the *description* of the Turing Machine, not a property of the language it recognizes).

*   **Importance:** Rice's Theorem provides a powerful and general tool for quickly proving the undecidability of many language-related properties of Turing Machines.  It saves us from having to construct individual reductions for each specific property.

## 7. Examples and Practice Questions

**Example 1:  Showing a problem is undecidable by reduction from the Halting Problem**

*   **Problem:** `ACCEPT = {<M, w> | M is a Turing Machine that accepts input w}`.  Prove that ACCEPT is undecidable.

*   **Proof by Reduction:**

    1.  Assume ACCEPT is decidable. Let *A* be a Turing Machine that decides ACCEPT.

    2.  Reduce HALT to ACCEPT. Given an instance of HALT, <M, w>, we need to construct an instance of ACCEPT, <M', w'>, such that M halts on w if and only if M' accepts w'.

    3.  Construction of M':

        ```
        M'(x):  // Input x (which might or might not be w')
            Simulate M on w  // Important: This simulation is ALWAYS performed, regardless of x
            If M halts:
                Accept x
            Else:
                Loop forever  // Doesn't halt, so x is not accepted
        ```

    4.  Analysis:

        *   If M halts on w, then M' will eventually accept *any* input x.  Therefore, <M', w'> will be in ACCEPT for *any* w' we choose (we can even choose w' = w).

        *   If M does *not* halt on w, then M' will loop forever, and therefore accept nothing. Thus, <M', w'> will *not* be in ACCEPT for any w'.

    5.  The reduction:  The function *f(<M, w>) = <M', w>* is computable (we can construct M' from M and w using a Turing Machine).

    6.  Putting it together:

        ```
        Decider for HALT(<M, w>):
            Construct M' from M and w as described above.
            Run A(<M', w>)  // A is the assumed decider for ACCEPT
            If A(<M', w>) accepts:
                Accept  //  M halted on w
            Else:
                Reject  // M did not halt on w
        ```

    7.  Contradiction:  This would give us a decider for HALT, which we know is impossible. Therefore, our initial assumption that ACCEPT is decidable must be false.

    8.  Conclusion: ACCEPT is undecidable.

**Practice Questions:**

1.  **Is the problem "Does a Turing Machine *M* accept the empty string (ε)?" decidable? Justify your answer using either Rice's Theorem or a reduction from the Halting Problem.**

    *Answer:*

    *Using Rice's Theorem:* Yes, this is a nontrivial property of the language recognized by the TM and is therefore undecidable.  Some Turing Machines accept the empty string (e.g., a TM that immediately halts in the accept state), and some don't (e.g., a TM that loops forever on any input). Since it's a nontrivial property of the language, Rice's Theorem says it's undecidable.

    *Using Reduction from HALT:* Assume the language `ACCEPT_EMPTY = {<M> | M accepts the empty string}` is decidable by a TM *A*. We reduce from HALT: Given <M, w>, construct M' such that M' erases its input, writes 'w' to the tape, then simulates M on 'w'. After M halts, M' then accepts the empty string. Thus, M halts on w iff M' accepts the empty string. We can decide HALT using A by first constructing M' from M and w, then running A on <M'>. If A accepts, then M halts on w, otherwise M doesn't halt on w. Because HALT is undecidable, this reduction proves that ACCEPT_EMPTY is also undecidable.

2.  **Explain why Rice's Theorem does *not* apply to the problem of determining whether a Turing Machine halts on a specific input. What *does* this say about the problem?**

    *Answer:* Rice's Theorem only applies to properties of the *language recognized by* a Turing Machine, i.e., L(M). The halting problem is a property of the *Turing Machine's behavior* on a specific input. Halting relates to the process of computation, not the final language accepted. Even if L(M) is a well-defined language, like Σ* or {}, the Turing machine may or may not halt on a specific input. The Halting Problem being undecidable itself is a more specific statement about the limitations of computation than Rice's theorem.  The Halting Problem is undecidable, but this requires a more specific proof than Rice's Theorem provides.

3.  **Suppose we have a new problem: `IS_USELESS = {<M> | M is a Turing Machine that never enters its accept state}`.  Prove that IS_USELESS is undecidable.**

    *Answer (using Rice's Theorem):* This question is tricky but *IS_USELESS is undecidable by Rice's theorem.* Consider M and M' to be two Turing Machines. M is useless and M' is not.
   For M:
     *  L(M) = The language recognized by M
   For M':
     * L(M') = The language recognized by M'

 Now, we consider two subcases:
 1. M and M' recognize different languages.
 2. M and M' recognize the same language.

 In Case 1, M and M' are able to recognize different languages. In Case 2, M and M' recognize the same languages. Since languages can be different or the same, this makes the property non-trivial, and it is undecidable.

  *Answer (using Reduction from HALT - alternative solution):* Assume IS_USELESS is decidable by a TM *A*. We reduce from HALT: Given <M, w>, construct M' such that M' simulates M on w. If M halts, M' enters its reject state. Regardless of M's initial input, it will only enter the reject state if M halts on w. M halts on w iff M' never enters the accept state. Thus, we can use A to decide HALT by testing whether M' is useless. Because HALT is undecidable, IS_USELESS is undecidable.

## 8. Important Points to Remember

*   The Church-Turing Thesis is a foundational principle, but it's *not* a theorem.
*   Undecidability proofs often rely on *reduction*. Make sure the reduction function itself is computable.
*   The Halting Problem is a key example of an undecidable problem and is frequently used in reductions.
*   Rice's Theorem provides a powerful and general way to prove undecidability for properties of *languages*.
*   Understand the difference between properties of *Turing Machine behavior* and properties of *languages*. Rice's Theorem applies only to properties of *languages*.
*   Think carefully about the "if and only if" (<=>) relationship in a reduction:  *w* is in *A*  <=>  *f(w)* is in *B*.

These notes provide a solid foundation for understanding computability within the context of Turing Machines and Kozen's approach. Remember to practice with examples and exercises to solidify your understanding. Good luck!
