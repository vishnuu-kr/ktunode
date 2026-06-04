---
title: "Decidable and Undecidable Problems"
subject: "THEORY OF COMPUTATION"
module: "Module 4: Turing Machines (Kozen)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abd7"
status: "completed"
scrapedAt: "2026-05-20T16:30:29.878Z"
---
# THEORY OF COMPUTATION - Module 4: Turing Machines (Kozen) - Decidable and Undecidable Problems

## Introduction

This module delves into the fascinating realm of decidable and undecidable problems related to Turing Machines (TMs). Understanding which problems can be solved algorithmically and which are inherently beyond the reach of computation is crucial in theoretical computer science.

## Learning Outcomes

By the end of this module, you will be able to:

*   Define and differentiate between decidable and undecidable problems.
*   Explain the concept of Turing-recognizability and Turing-decidability.
*   Understand the Church-Turing Thesis.
*   Describe the halting problem and prove its undecidability using diagonalization.
*   Apply reduction techniques to prove the undecidability of other problems related to Turing Machines.
*   Distinguish between decidable and undecidable languages.
*   Identify examples of decidable and undecidable problems.

## 1. Key Concepts and Definitions

*   **Problem:**  A problem is a question or task to be solved. In the context of Turing Machines, it's often phrased as "Does a Turing Machine M satisfy property P?".  Examples include:
    *   Does TM M halt on input w?
    *   Does TM M accept the empty string?
    *   Are two TMs equivalent?

*   **Language:** A set of strings over a given alphabet.  A language can represent a problem.

*   **Algorithm:** A finite, well-defined procedure that takes some input and produces an output (or signals that no output exists).

*   **Decidable Problem (Solvable Problem):** A problem for which an algorithm exists that *always* halts and gives the correct yes/no answer for any input. The algorithm is also called a *decider* for the problem. This means there's a Turing Machine that halts in an accepting state if the answer is "yes" and halts in a rejecting state if the answer is "no".  A language corresponding to a decidable problem is called a **decidable language**.

*   **Undecidable Problem (Unsolvable Problem):** A problem for which *no* algorithm exists that can always correctly determine the answer for every possible input in finite time.  This doesn't mean we can *never* find the answer, but rather that there's no general procedure that always works.  A language corresponding to an undecidable problem is called an **undecidable language**.

*   **Turing-Recognizable Language (Recursively Enumerable Language):** A language L is Turing-recognizable if there exists a Turing Machine that halts and accepts when the input string belongs to L, and either halts and rejects or loops forever when the input string does *not* belong to L. If the machine halts for all inputs, then the language is also *decidable*.

*   **Turing-Decidable Language (Recursive Language):**  A language L is Turing-decidable if there exists a Turing Machine that halts and accepts when the input string belongs to L, and halts and rejects when the input string does *not* belong to L.

*   **Relationship between Turing-Recognizable and Turing-Decidable Languages:** Every Turing-decidable language is Turing-recognizable, but not every Turing-recognizable language is Turing-decidable.  This is a *very* important point.

*   **The Church-Turing Thesis:** States that any effectively computable function can be computed by a Turing Machine. This thesis connects the informal notion of computability with the formal definition of a Turing Machine.  It's a thesis, not a theorem, because "effectively computable" is an intuitive concept, not a mathematically precise one. It suggests that the TM is the ultimate model of computation.

## 2. The Halting Problem

The Halting Problem is a classic example of an undecidable problem. It asks:

**Given a Turing Machine *M* and an input string *w*, will *M* halt (either accept or reject) when run with *w* as input?**

Formally, we can represent the Halting Problem as the language:

`HALT_TM = {<M, w> | M is a Turing Machine and M halts on input w}`

Where `<M, w>` represents the encoding of the Turing Machine *M* and the input string *w*.

### Proof of Undecidability of the Halting Problem (by Contradiction and Diagonalization)

1.  **Assume for contradiction that `HALT_TM` is decidable.**  This means there exists a Turing Machine *H* that decides `HALT_TM`. *H* takes as input `<M, w>` and:
    *   Halts and accepts if M halts on w.
    *   Halts and rejects if M does not halt on w.

2.  **Construct a new Turing Machine *D* that uses *H* as a subroutine.** *D* takes as input `<M>`, the encoding of a Turing Machine. *D* does the following:
    *   Runs *H* on input `<M, <M>>`.  This means *D* uses *H* to determine if *M* halts when given its *own* encoding as input.
    *   If *H* accepts (meaning *M* halts on `<M>`), then *D* enters an infinite loop.
    *   If *H* rejects (meaning *M* does not halt on `<M>`), then *D* halts and accepts.

    In pseudocode:

    ```
    D(M):
      if H(M, M) accepts:
        loop forever
      else:
        accept
    ```

3.  **Now, consider what happens when we run *D* on its own encoding, `<D>`.**

    *   **Case 1: *D* halts on `<D>` (i.e., D(<D>) halts).** If *D* halts on `<D>`, then by the definition of *D*, *H* must have rejected `<D, <D>>`.  This means that *D* does not halt on `<D>`.  This is a contradiction.

    *   **Case 2: *D* does not halt on `<D>` (i.e., D(<D>) loops forever).** If *D* does not halt on `<D>`, then by the definition of *D*, *H* must have accepted `<D, <D>>`.  This means that *D* halts on `<D>`. This is a contradiction.

4.  **Since both cases lead to a contradiction, our initial assumption that `HALT_TM` is decidable must be false.**  Therefore, the Halting Problem is undecidable.

**Important Points:**

*   The proof relies on the fact that Turing Machines can accept their own encoding as input.
*   The diagonalization argument creates a self-referential paradox. *D* is defined in terms of its own behavior, leading to the contradiction.

## 3. Reduction Techniques

Reduction is a powerful technique for proving the undecidability of problems. The basic idea is:

*   **If problem A is known to be undecidable, and you can reduce problem A to problem B, then problem B must also be undecidable.**

A reduction from problem A to problem B (written A ≤m B) means that if you have an algorithm for solving B, you could use it to solve A.  More formally:

*   There exists a computable function *f* that transforms an instance of problem A (*x*) into an instance of problem B (*f(x)*) such that the answer to A on *x* is "yes" if and only if the answer to B on *f(x)* is "yes."

**Why does this work?**

If B were decidable, we could decide A by first transforming A into an instance of B using *f*, and then using the decider for B. Since A is undecidable, B must also be undecidable.

**Common Undecidable Problems to Reduce From:**

*   `HALT_TM` (The Halting Problem)
*   `A_TM = {<M, w> | M is a Turing Machine and M accepts w}` (The Acceptance Problem)
*   `E_TM = {<M> | M is a Turing Machine and L(M) = ∅}` (Emptiness Problem - Does TM M accept any strings?)
*   `EQ_TM = {<M1, M2> | M1 and M2 are Turing Machines and L(M1) = L(M2)}` (Equivalence Problem - Do TMs M1 and M2 accept the same language?)

### Example: Proving that `E_TM` is Undecidable (Reduction from `HALT_TM`)

We want to show that `HALT_TM` ≤m `E_TM`.  This means we need to show that if we could decide `E_TM`, we could decide `HALT_TM`.

1.  **Assume we have a decider for `E_TM` (let's call it `E`).** `E(<M>)` accepts if L(M) = ∅, and rejects if L(M) ≠ ∅.

2.  **Given an instance of `HALT_TM`, `<M, w>`, construct a new Turing Machine `M'` as follows:**

    *   `M'` takes an input `x`.
    *   `M'` first simulates *M* on input *w*.
    *   If *M* halts (either accepts or rejects), then `M'` accepts *x*.  (Note: `M'` accepts *x* *regardless* of what *x* is.)
    *   If *M* does not halt on *w*, then `M'` never accepts anything.

    In pseudocode:

    ```
    M'(x):
      Simulate M(w)
      if M(w) halts:
        accept x
      else:
        loop forever
    ```

3.  **Now, consider the language of `M'` (L(M')):**

    *   If *M* halts on *w*, then `M'` accepts *all* strings (L(M') = Σ*, where Σ is the alphabet). Thus, L(M') is not empty.
    *   If *M* does not halt on *w*, then `M'` accepts *no* strings (L(M') = ∅).

4.  **Use the decider for `E_TM` to determine if `M'` accepts any strings:** Run `E(<M'>)`.

    *   If `E(<M'>)` accepts (meaning L(M') = ∅), then we know that *M* does not halt on *w*.  Therefore, we reject `<M, w>` (i.e., M does not halt on w).
    *   If `E(<M'>)` rejects (meaning L(M') ≠ ∅), then we know that *M* halts on *w*. Therefore, we accept `<M, w>` (i.e., M halts on w).

5.  **We have now constructed a decider for `HALT_TM` using a decider for `E_TM`.** Since `HALT_TM` is undecidable, `E_TM` must also be undecidable.

**Key Points about Reductions:**

*   You must show how to transform an instance of the known undecidable problem into an instance of the problem you are trying to prove undecidable.
*   The transformation must be computable (you must be able to build a Turing Machine that performs the transformation).
*   The transformation must preserve the "yes/no" answer.

## 4. Examples of Decidable and Undecidable Problems

**Decidable Problems:**

*   Acceptance problem for DFAs:  Given a DFA *A* and a string *w*, does *A* accept *w*?
*   Emptiness problem for DFAs: Given a DFA *A*, is L(A) empty?
*   Equivalence problem for DFAs: Given two DFAs *A* and *B*, is L(A) = L(B)?
*   All regularity related problems on Finite Automata (DFAs and NFAs)
*   Membership problem for Context-Free Languages: Given a CFG *G* and a string *w*, is *w* in L(G)?  (Using CYK Algorithm)
*   Emptiness Problem for CFLs (checking if L(G) is empty).
*   Determining if a regular expression generates a specific string.

**Undecidable Problems:**

*   The Halting Problem (`HALT_TM`)
*   The Acceptance Problem for Turing Machines (`A_TM`)
*   The Emptiness Problem for Turing Machines (`E_TM`)
*   The Equivalence Problem for Turing Machines (`EQ_TM`)
*   Rice's Theorem (See below)
*   The Post Correspondence Problem (PCP) (Not covered in this module, but important to know it's undecidable)
*   Does a CFG generate all possible strings (L(G) = Σ* ?).
*   Ambiguity of CFGs (Is a given CFG ambiguous?)
*   Determining if two CFGs generate the same language.

## 5. Rice's Theorem

Rice's Theorem is a powerful and general result that states:

**Any *non-trivial* property of the language recognized by a Turing Machine is undecidable.**

*   **Property:** A property of a language is simply a set of languages.
*   **Non-trivial Property:** A property is non-trivial if:
    *   There exists at least one Turing Machine that recognizes a language that satisfies the property.
    *   There exists at least one Turing Machine that recognizes a language that does *not* satisfy the property.

**Implications of Rice's Theorem:**

Rice's Theorem greatly simplifies proving the undecidability of many problems. If you can show that a problem is a non-trivial property of the *language* recognized by a TM, you can immediately conclude that the problem is undecidable.

**Examples where Rice's Theorem applies:**

*   Determining if a Turing Machine's language is regular.
*   Determining if a Turing Machine's language is finite.
*   Determining if a Turing Machine's language contains a specific string.

**Examples where Rice's Theorem *does not* apply:**

*   Determining if a Turing Machine halts on a specific input.  This is a property of the *Turing Machine itself*, not the *language* it recognizes.

## 6. Practice Questions/Exercises

**Question 1:**

Explain the difference between a Turing-recognizable language and a Turing-decidable language.  Give an example of a language that is Turing-recognizable but not Turing-decidable.

**Answer:**

A Turing-recognizable language is one for which a Turing Machine exists that halts and accepts if the input string is in the language, and either halts and rejects or loops forever if the input string is not in the language. A Turing-decidable language is one for which a Turing Machine exists that *always* halts, accepting if the input string is in the language and rejecting if the input string is not in the language.

The Halting Problem language, `HALT_TM`, is Turing-recognizable but not Turing-decidable. A TM can be built that simulates another TM M on input w and accepts if M halts. However, if M loops, this TM will also loop, and not reject.  Since `HALT_TM` is not decidable as shown by the diagonalization proof, it is an example of a language that can be recognized but not decided.

**Question 2:**

Prove that the language `L = {<M> | M is a Turing Machine and L(M) contains the string "01"}` is undecidable using Rice's Theorem.

**Answer:**

We need to show that this property (containing the string "01") is a non-trivial property of the language recognized by a Turing Machine.

*   **Is it a property of the language?**  Yes, `L` is defined based on the *language* recognized by the TM (specifically, whether that language contains the string "01").

*   **Is it non-trivial?**
    *   **Does there exist a TM M1 such that L(M1) contains "01"?** Yes, we can easily create a TM that accepts only the string "01" (or any language that includes "01").
    *   **Does there exist a TM M2 such that L(M2) does *not* contain "01"?** Yes, we can create a TM that accepts the empty language (∅), which obviously does not contain "01".  We can also construct a machine that only accepts strings consisting solely of "1"s, thus not containing "01."

Since the property is a non-trivial property of the language recognized by a Turing Machine, Rice's Theorem applies, and `L` is undecidable.

**Question 3:**

Explain the concept of reduction and how it is used to prove the undecidability of problems. Give an example (different from `E_TM`).

**Answer:**

Reduction is a technique used to prove that a problem B is undecidable by showing that if we could solve B, we could also solve a known undecidable problem A. We denote this by A ≤m B. This is achieved by creating a computable function that transforms instances of A into instances of B, preserving the "yes/no" answer. If B were decidable, we could solve A (which is impossible since A is undecidable).  Therefore, B must also be undecidable.

Example:

Let's prove that `REGULAR_TM = {<M> | M is a TM and L(M) is regular}` is undecidable, by reducing `A_TM` to `REGULAR_TM`.

1.  Assume we have a decider for `REGULAR_TM`.

2.  Given an instance `<M, w>` of `A_TM` (M is a TM, w is a string), construct a new Turing Machine `M'` as follows:

    `M'(x)`:
      1. If x has the form 0<sup>n</sup>1<sup>n</sup>, accept.
      2. Else, simulate M on w.
          a. If M accepts w, then accept x.
          b. If M does not accept w, reject x.

3. Observe what L(M') is:
    * If M accepts w, then L(M') = Σ*, which *is* regular.
    * If M does not accept w, then L(M') = {0<sup>n</sup>1<sup>n</sup> | n >= 0 }, which is *not* regular.

4. Now run the supposed decider for `REGULAR_TM` on `<M'>`.
    * If it accepts, then we know L(M') is regular, meaning M accepts w, so we ACCEPT <M, w>
    * If it rejects, then we know L(M') is not regular, meaning M does not accept w, so we REJECT <M, w>

We have now constructed a decider for A_TM (which we know is undecidable) assuming a decider for REGULAR_TM exists, therefore `REGULAR_TM` must also be undecidable.

## 7. Important Points to Remember

*   The Halting Problem is the cornerstone of undecidability proofs related to Turing Machines.
*   Understanding the concept of reduction is crucial for proving the undecidability of new problems.
*   Rice's Theorem provides a powerful shortcut for proving the undecidability of properties related to the *language* recognized by a TM.  However, remember that it applies only to non-trivial properties of the *language*.
*   The Church-Turing Thesis suggests that Turing Machines represent the ultimate limit of computation.
*   Be careful not to confuse Turing-recognizability and Turing-decidability. A language can be recognized but not decided.
*   Many seemingly simple problems about Turing Machines are, in fact, undecidable. This has profound implications for the limits of what computers can do.
