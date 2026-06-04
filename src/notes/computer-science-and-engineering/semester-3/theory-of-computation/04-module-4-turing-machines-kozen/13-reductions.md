---
title: "Reductions"
subject: "THEORY OF COMPUTATION"
module: "Module 4: Turing Machines (Kozen)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abd6"
status: "completed"
scrapedAt: "2026-05-20T16:30:29.163Z"
---
# Theory of Computation - Module 4: Turing Machines (Kozen) - Reductions

## Introduction

Reductions are a crucial tool in the theory of computation, especially when dealing with Turing Machines and the decidability/recognizability of languages. They allow us to relate the difficulty of solving one problem to the difficulty of solving another. If we can *reduce* problem A to problem B, it means that if we can solve B, we can also solve A. This relationship is incredibly valuable for proving undecidability and intractability.

## Learning Outcomes

By the end of this topic, you should be able to:

1.  **Define the concept of a reduction (mapping reduction or computable function reduction).**
2.  **Explain how reductions are used to prove undecidability.**
3.  **Apply reductions to prove the undecidability of specific languages.**
4.  **Differentiate between various types of reductions (e.g., mapping reduction, Turing reduction).**
5.  **Understand the implications of reductions on the complexity of problems.**

## 1. Definition of a Reduction (Mapping Reduction)

*   **Informal Definition:** A reduction from language A to language B (written as A ≤<sub>m</sub> B) means that we can transform any instance of problem A into an instance of problem B in such a way that the answer to B tells us the answer to A.

*   **Formal Definition (Mapping Reduction or Computable Function Reduction):**  A language A is mapping reducible (also called many-one reducible) to a language B, denoted A ≤<sub>m</sub> B, if there exists a computable function f: Σ<sup>*</sup> → Σ<sup>*</sup> such that for all w ∈ Σ<sup>*</sup>:

    w ∈ A  iff  f(w) ∈ B

    *   **Computable Function (f):**  A function that a Turing Machine can compute and halt on every input.
    *   **Σ<sup>*</sup>:** The set of all strings over the alphabet Σ.

*   **Key Idea:** The computable function `f` acts as the *reducer*. It transforms instances of problem A into instances of problem B.  The "iff" (if and only if) condition is crucial: `w` belongs to `A` if and only if `f(w)` belongs to `B`. This ensures the transformation preserves the "yes" or "no" answer.

*   **Visual Representation:**

    ```
    Language A  ------ f (computable function) ------> Language B
       w (input)                                     f(w) (transformed input)

    w ∈ A     <=>     f(w) ∈ B
    ```

*   **Important Note:** The transformation `f` must be computable by a Turing Machine. This guarantees that the reduction process itself is effective.

## 2. How Reductions are Used to Prove Undecidability

*   **The Core Principle:** Reductions are powerful tools for proving that certain problems are undecidable (i.e., no Turing Machine can decide them). The proof relies on the following:

    1.  **Start with a Known Undecidable Problem:**  Typically, we begin with the Halting Problem (HALT<sub>TM</sub>) or another known undecidable language. HALT<sub>TM</sub> = { <M, w> | M is a TM that halts on input w }.

    2.  **Assume the Target Language is Decidable:**  Suppose we want to prove that language L is undecidable.  We *assume*, for the sake of contradiction, that L is decidable.  This means there exists a TM, `D_L`, that decides L (halts and accepts if the input is in L, halts and rejects if the input is not in L).

    3.  **Construct a Reduction:** Design a computable function `f` such that:  `<M, w>` ∈ HALT<sub>TM</sub>  iff  `f(<M, w>)` ∈ L.  This `f` essentially transforms instances of the Halting Problem into instances of language L.

    4.  **Build a Decider for the Undecidable Problem:** Using the assumed decider `D_L` for language L, and the computable function `f`, construct a new Turing Machine that decides HALT<sub>TM</sub>. This new machine would do the following:
        *   On input `<M, w>`:
            *   Compute `f(<M, w>)`.
            *   Run `D_L` on `f(<M, w>)`.
            *   Accept if `D_L` accepts; reject if `D_L` rejects.

    5.  **Contradiction:** If we successfully built a decider for HALT<sub>TM</sub>, it contradicts the fact that HALT<sub>TM</sub> is undecidable.  Therefore, our initial assumption that L is decidable must be false.

    6.  **Conclusion:** Language L is undecidable.

*   **Key Takeaway:**  If A ≤<sub>m</sub> B and A is undecidable, then B is also undecidable. In other words, if we can reduce a known undecidable problem to a new problem, the new problem must also be undecidable.

## 3. Applying Reductions to Prove Undecidability: Examples

**Example 1: Proving ATM is Undecidable (Given HALT<sub>TM</sub> is Undecidable)**

*   **Language ATM:**  ATM = { <M, w> | M is a TM and M accepts w }.  We want to show ATM is undecidable.

*   **Known Undecidable Language:**  HALT<sub>TM</sub> = { <M, w> | M is a TM that halts on input w }.

*   **Assumption:** Assume ATM is decidable.  Let `D_ATM` be a TM that decides ATM.

*   **Reduction (f):**  Construct a computable function `f` such that  `<M, w>` ∈ HALT<sub>TM</sub>  iff  `f(<M, w>)` ∈ ATM.

    *   The function `f(<M, w>)` will output a new Turing Machine `<M'>` and input `w'` such that:  `M'` accepts `w'` if and only if `M` halts on `w`.

    *   Here's how `M'` works, given input `x` (which will be `w` during the reduction):

        1.  Run `M` on `w`.
        2.  If `M` halts on `w`, accept `x`.
        3.  If `M` does *not* halt on `w`, `M'` will never reach the accept state.

        Therefore, `f(<M, w>) = <M', w>`

*   **Decider for HALT<sub>TM</sub>:** Construct a TM to decide HALT<sub>TM</sub> using `D_ATM` and `f`:

    1.  On input `<M, w>`:
    2.  Compute `f(<M, w>) = <M', w>`.
    3.  Run `D_ATM` on `<M', w>`.
    4.  If `D_ATM` accepts, accept.  If `D_ATM` rejects, reject.

*   **Contradiction:**  If `M` halts on `w`, then `M'` accepts `w`.  `D_ATM` will accept `<M', w>`, and our constructed decider will accept `<M, w>`.  If `M` does *not* halt on `w`, then `M'` never halts on `w`, so `M'` does not accept `w`.  `D_ATM` will reject `<M', w>`, and our constructed decider will reject `<M, w>`.  This means we have a decider for HALT<sub>TM</sub>, which is a contradiction.

*   **Conclusion:**  ATM is undecidable.

**Example 2:  Proving E<sub>TM</sub> is Undecidable**

*   **Language E<sub>TM</sub>:** E<sub>TM</sub> = { <M> | M is a TM and L(M) = ∅ } (the language of all Turing Machines that accept no strings).

*   **Reduction from ATM to E<sub>TM</sub>:**  Assume E<sub>TM</sub> is decidable, and `D_ETM` decides E<sub>TM</sub>.  We reduce ATM to E<sub>TM</sub>, meaning we create `f` such that `<M, w>` ∈ ATM iff `f(<M, w>)` ∈ E<sub>TM</sub>.  In this case, `f` will transform `M` and `w` into a new Turing Machine `M'` such that:  `L(M') = ∅` iff `M` does not accept `w`.

    *   The function `f(<M, w>)` outputs a new Turing Machine `<M'>` such that: `L(M')` is empty if and only if `M` does not accept `w`.

    *   `M'` is constructed to do the following on any input `x`:

        1.  Erase the input `x`.
        2.  Write `w` on the tape.
        3.  Run `M` on `w`.
        4.  If `M` accepts `w`, accept `x`.
        5.  If `M` rejects `w`, reject `x` (this can be reached). If `M` doesn't halt, it will neither accept nor reject.

        In essence, `L(M')` is either Σ<sup>*</sup> (if `M` accepts `w`) or ∅ (if `M` doesn't accept `w`).

        Therefore, `f(<M, w>) = <M'>`

*   **Decider for ATM:**  Construct a TM to decide ATM using `D_ETM` and `f`:

    1.  On input `<M, w>`:
    2.  Compute `f(<M, w>) = <M'>`.
    3.  Run `D_ETM` on `<M'>`.
    4.  If `D_ETM` rejects, accept.  If `D_ETM` accepts, reject.  (Note the *reversal* here – we want to accept if M's language is *not* empty, and reject if M's language is empty.)

*   **Contradiction:**  If `M` accepts `w`, then `L(M')` = Σ<sup>*</sup> (not empty).  `D_ETM` will reject `<M'>`, and our constructed decider will accept `<M, w>`.  If `M` does *not* accept `w`, then `L(M')` = ∅.  `D_ETM` will accept `<M'>`, and our constructed decider will reject `<M, w>`. This means we have a decider for ATM, which is a contradiction.

*   **Conclusion:** E<sub>TM</sub> is undecidable.

## 4. Differentiating Between Types of Reductions

*   **Mapping Reduction (Many-One Reduction):** The type of reduction we've been discussing.  It maps instances of one problem to instances of another problem using a computable function. It maps an element of language A either to an element of language B, or to an element that is NOT in B. A ≤<sub>m</sub> B means A reduces to B via a mapping reduction.

*   **Turing Reduction (Cook Reduction):**  A more general type of reduction. In a Turing reduction, we can use a hypothetical "oracle" for problem B to solve problem A.  Essentially, we're allowed to call a subroutine that magically solves B as many times as we want, and use those answers to solve A. A ≤<sub>T</sub> B means A Turing-reduces to B.

*   **Key Differences:**

    *   **Mapping Reduction:**  A single transformation via a computable function.  Provides a *direct* relationship between instances.
    *   **Turing Reduction:**  More flexible.  Allows multiple calls to an oracle for the target problem.  The relationship between instances is less direct.

*   **Implication:** If A ≤<sub>m</sub> B, then A ≤<sub>T</sub> B.  A mapping reduction is a special case of a Turing reduction.

*   **Relevance:** While mapping reductions are commonly used to prove undecidability, Turing reductions are more prevalent in complexity theory.

## 5. Implications of Reductions on Complexity of Problems

*   **Undecidability:** As we've seen, reductions are fundamental for proving that problems are undecidable.

*   **NP-Completeness:** In complexity theory (dealing with time and space requirements), reductions play a central role in defining NP-completeness.  A problem is NP-complete if:

    1.  It's in NP (Non-deterministic Polynomial time).
    2.  Every problem in NP can be reduced to it in polynomial time (polynomial-time reduction).

*   **Implications for Complexity Classes:**

    *   If A ≤<sub>P</sub> B (A is polynomial-time reducible to B) and B is in P (Polynomial time), then A is in P.
    *   If A ≤<sub>P</sub> B and A is not in P, then B is not in P.

    In essence, reductions allow us to transfer information about the complexity of one problem to another. If a polynomial-time algorithm exists for problem B, and A is polynomially reducible to B, then problem A is solvable in polynomial time as well.

## Important Points to Remember

*   **Direction of the Reduction:** A ≤<sub>m</sub> B means we reduce A to B.  Think of it as: "If I can solve B, I can solve A."
*   **Computability:** The reduction function `f` *must* be computable by a Turing Machine.
*   **Equivalence:**  w ∈ A iff f(w) ∈ B must *always* hold.
*   **Contradiction:**  When proving undecidability, you are aiming to create a decider for a known undecidable problem, which leads to a contradiction.
*   **Mapping vs. Turing:** Mapping reductions are simpler and commonly used for undecidability. Turing reductions are more general.

## Practice Questions/Exercises

**Question 1:**

Given the language `ALL<sub>TM</sub> = { <M> | M is a TM and M accepts all strings }`. Show that `ALL<sub>TM</sub>` is undecidable by reducing from `E<sub>TM</sub>`.

**Answer:**

1.  **Assume `ALL<sub>TM</sub>` is decidable:**  Let `D_ALLTM` be a TM that decides `ALL<sub>TM</sub>`.

2.  **Reduction (`f`):**  We want to construct a computable function `f` such that:  `<M>` ∈ `E<sub>TM</sub>` iff `f(<M>)` ∈ `ALL<sub>TM</sub>`.  The function `f` takes a TM `M` and transforms it into a new TM `M'` such that `M'` accepts all strings if and only if `M` accepts no strings.

    *   `f(<M>) = <M'>`, where `M'` does the following on input `x`:

        1. Run `M` on `x`.
        2. If `M` rejects `x`, accept `x`.
        3. If `M` accepts `x`, reject `x`.
        4. If `M` loops on `x`, then `M'` also loops.

    *  If `L(M)` is empty, then `M` rejects all inputs or loops. In that case, `M'` accepts every input that `M` rejects and loops if `M` loops.  Thus, `L(M')` = Σ<sup>*</sup>, so `<M'>` ∈ `ALL<sub>TM</sub>`.

    * If `L(M)` is not empty, then there is at least one input that `M` accepts.  Then `M'` rejects that input. Thus, `L(M')` != Σ<sup>*</sup>, so `<M'>` ∉ `ALL<sub>TM</sub>`.

3.  **Decider for `E<sub>TM</sub>`:**  Construct a TM to decide `E<sub>TM</sub>` using `D_ALLTM` and `f`:

    1.  On input `<M>`:
    2.  Compute `f(<M>) = <M'>`.
    3.  Run `D_ALLTM` on `<M'>`.
    4.  If `D_ALLTM` accepts, accept.  If `D_ALLTM` rejects, reject.

4.  **Contradiction:**  This decider for `E<sub>TM</sub>` contradicts the fact that `E<sub>TM</sub>` is undecidable.

5.  **Conclusion:**  `ALL<sub>TM</sub>` is undecidable.

**Question 2:**

Explain the significance of the "iff" condition (w ∈ A iff f(w) ∈ B) in the definition of a mapping reduction.  What happens if we only have "if" or "only if"?

**Answer:**

The "iff" (if and only if) condition (w ∈ A iff f(w) ∈ B) is crucial because it guarantees that the transformation `f` *perfectly* preserves the membership of a string in the languages A and B.  It establishes a *bijective* relationship with respect to membership.

*   **If we only have "if" (w ∈ A if f(w) ∈ B):**  This means that if f(w) is in B, then w is in A.  However, it doesn't tell us what happens if w is in A. It is possible that f(w) could be outside of B, breaking the reduction. This only allows us to prove recognizability, not undecidability.

*   **If we only have "only if" (w ∈ A only if f(w) ∈ B):** This means that if w is in A, then f(w) is in B. However, it doesn't tell us what happens if w is NOT in A. It is possible that f(w) could still be inside B, again breaking the reduction. This does not allow us to prove undecidability either.

Without the "iff", we cannot reliably determine whether an instance of problem A is in the language A based on the membership of its transformed instance in language B. This invalidates the reduction, making it useless for proving undecidability (or other properties related to decidability).

**Question 3:**

Suppose you are given two languages A and B, and you want to prove that B is undecidable.  What is the general strategy for choosing a language A and constructing the reduction?

**Answer:**

Here's the general strategy:

1.  **Choose Language A:**  Select a language `A` that is *known* to be undecidable.  The Halting Problem (`HALT<sub>TM</sub>`) and ATM are common choices. Sometimes you need to pick a more specific known undecidable language based on what kind of relationship you can create to language `B`.

2.  **Understanding Language B:**  Carefully analyze the definition of language `B`. What constitutes membership in `B`? What are the strings or objects that are accepted by `B`?

3.  **Construct the Reduction (`f`):** The most crucial and often difficult part. Design a computable function `f` such that `w ∈ A iff f(w) ∈ B`.  Consider the following when constructing `f`:

    *   **Transformation:** How can you transform an instance `w` of problem A into an instance `f(w)` that is related to language B? What elements of the instances of A can be manipulated?
    *   **Preservation of Membership:** How can you ensure that the transformation preserves the membership relationship? That is, `f(w)` should be in B if and only if `w` is in A.
    *   **Computability:** The function `f` must be computable by a Turing Machine. The steps of the transformation must be definable and executable by a TM.

4.  **Think about the Contradiction:** Before finalizing your reduction, think about how the assumed decider for `B` (the `D_B`) will be used, together with `f`, to create a decider for `A` (which is impossible, since A is undecidable).  This will help you refine your reduction and ensure it leads to the desired contradiction. Look for ways that a decider for `B` would "break" the known properties of `A`.

The key is to find a connection between the known undecidable language A and the target language B, then construct a function that makes the connection formal and provable.

These notes provide a solid foundation for understanding reductions in the context of Turing Machines. By studying these materials and working through the practice problems, you'll be well-equipped to tackle more complex problems in the theory of computation. Good luck!
