---
title: "Recursive and recursively enumerable languages"
subject: "THEORY OF COMPUTATION"
module: "Module 4: Turing Machines (Kozen)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abcf"
status: "completed"
scrapedAt: "2026-05-20T16:30:23.685Z"
---
## THEORY OF COMPUTATION - MODULE 4: TURING MACHINES (KOZEN) - RECURSIVE AND RECURSIVELY ENUMERABLE LANGUAGES

These notes cover Recursive and Recursively Enumerable (RE) languages within the context of Turing Machines (TMs), as presented in Module 4 of Kozen's Theory of Computation.

**Learning Outcomes:**

*   Define and distinguish between Recursive and Recursively Enumerable languages.
*   Explain the properties of Recursive and Recursively Enumerable languages.
*   Understand the relationship between decidability and recursiveness.
*   Recognize examples of Recursive and Recursively Enumerable languages.
*   Apply the concept of diagonalization in the context of RE languages.
*   Explain the Halting Problem and its undecidability.
*   Understand the closure properties of Recursive and RE languages.

**1. Key Concepts and Definitions:**

*   **Turing Machine (TM):** A mathematical model of computation that consists of an infinite tape, a read/write head, and a finite state control. The TM transitions between states based on the current state and the symbol read from the tape, writing a new symbol to the tape, moving the head left or right, and entering a new state.

*   **Language:** A set of strings over a given alphabet.

*   **Acceptance by Turing Machine:** A TM accepts a string *w* if, starting in the initial state with *w* on the tape, the TM eventually halts in an accepting state.

*   **Rejection by Turing Machine:** A TM rejects a string *w* if, starting in the initial state with *w* on the tape, the TM eventually halts in a rejecting state.

*   **Halting by Turing Machine:** A TM halts on a string *w* if, starting in the initial state with *w* on the tape, the TM eventually enters a halting state (either accepting or rejecting).

*   **Recursive Language (Decidable Language):** A language *L* is recursive if there exists a Turing Machine *M* that *halts* on every input string *w*, and *accepts* *w* if and only if *w* is in *L*.  In other words, *M* decides *L*.  A recursive language is sometimes also referred to as a *decidable language*.

    *   For all *w* in *L*, *M* halts and accepts.
    *   For all *w* not in *L*, *M* halts and rejects.

*   **Recursively Enumerable (RE) Language (Turing-Recognizable Language):** A language *L* is recursively enumerable (RE) if there exists a Turing Machine *M* that *accepts* *w* if and only if *w* is in *L*.  If *w* is not in *L*, *M* may either halt and reject or loop forever.  A recursively enumerable language is sometimes also referred to as a *Turing-recognizable language*.

    *   For all *w* in *L*, *M* halts and accepts.
    *   For all *w* not in *L*, *M* either halts and rejects, or loops forever.

*   **Decidability:** A problem is decidable if there exists an algorithm (Turing Machine) that can determine whether a given input belongs to the problem or not and *always halts*.

*   **Undecidability:** A problem is undecidable if no such algorithm exists. The Halting Problem is a classic example of an undecidable problem.

**2. Properties of Recursive and Recursively Enumerable Languages:**

*   **Relationship between Recursive and RE:**
    *   Every recursive language is also recursively enumerable.  (If you can *decide* a language, you can certainly *recognize* it.)
    *   Not every RE language is recursive.  This is a crucial difference.

*   **Complementation:**
    *   If *L* is recursive, then its complement *L' = Σ* - *L* is also recursive.
    *   If *L* is RE and its complement *L'* is also RE, then *L* is recursive (and *L'* is recursive).  This is a key theorem!
    *   If *L* is RE but not recursive, then its complement *L'* is not RE.

*   **Closure Properties:**  These define what operations you can perform on languages within a certain class, and still remain within that same class.
    *   **Recursive languages are closed under:**
        *   Union
        *   Intersection
        *   Complementation
        *   Concatenation
        *   Kleene Star (Closure)
    *   **RE languages are closed under:**
        *   Union
        *   Intersection
        *   Concatenation
        *   Kleene Star (Closure)
    *   **RE languages are NOT closed under complementation.**

**3. Examples:**

*   **Recursive Language:**
    *   The language of all strings of the form *a<sup>n</sup>b<sup>n</sup>c<sup>n</sup>* where *n* ≥ 0.  A TM can definitively accept or reject any input string.
    *   The language of all palindromes over a given alphabet.

*   **Recursively Enumerable (RE) Language:**
    *   The language of all Turing Machine encodings that accept a specific string, say "11001". A TM can accept if it encounters an encoding that does indeed accept the given string. However, if the machine doesn't accept, the TM may loop forever, making it RE but not necessarily recursive.
    *   The Halting Problem language (see below).

**4. Decidability and Recursiveness:**

*   A problem is decidable if and only if the language corresponding to the problem is recursive.
*   Decidability means there exists an algorithm (TM) that *always* gives a "yes" or "no" answer and always halts.

**5. Diagonalization (in the context of RE languages):**

*   Diagonalization is a technique used to prove that certain languages are not RE or not recursive. The fundamental idea is to create a TM that contradicts all other possible TMs.
*   The classical diagonalization proof related to RE languages is used to show the undecidability of the Halting Problem.

**6. The Halting Problem:**

*   **Definition:** The Halting Problem asks: "Given a Turing Machine *M* and an input string *w*, will *M* halt when run on *w*?".
*   **Language:** The Halting Problem can be represented as a language: HALT = {⟨*M*, *w*⟩ | *M* is a TM that halts on input *w*}, where ⟨*M*, *w*⟩ represents an encoding of *M* and *w*.
*   **Undecidability:** The Halting Problem is *undecidable*.  There is no Turing Machine that can correctly determine whether any arbitrary TM will halt on any arbitrary input.
*   **Significance:** The undecidability of the Halting Problem has far-reaching consequences, as it implies that many other problems are also undecidable.
*   **Halting Problem is RE:** The Halting problem is RE. You can simulate the Turing machine M on w. If it halts, accept.

**7. Important Points to Remember:**

*   Recursive languages are a subset of RE languages.
*   If a language is recursive, its complement is also recursive.
*   If a language is RE and its complement is also RE, then the language is recursive.
*   The Halting Problem is a classic example of an undecidable RE language.
*   Undecidability means there is *no* algorithm that can always solve the problem correctly and halt.
*   Closure properties are fundamental for understanding how language classes behave under different operations.

**8. Practice Questions/Exercises:**

**Question 1:** True or False: All recursively enumerable languages are recursive.

**Answer:** False

**Question 2:** If a language *L* is recursive, what can you say about its complement *L'*?

**Answer:** *L'* is also recursive.

**Question 3:** If a language *L* is RE, and its complement *L'* is also RE, what can you say about *L*?

**Answer:** *L* is recursive.

**Question 4:** Is the Halting Problem decidable? Explain your answer.

**Answer:** No, the Halting Problem is undecidable. This means there is no Turing Machine that can, for any arbitrary Turing Machine *M* and input *w*, determine whether *M* will halt when run on *w*.

**Question 5:** Prove that a language *L* is recursive if and only if both *L* and its complement *L'* are recursively enumerable.

**Answer:**
*   **If L is recursive, then both L and L' are RE:**
    If L is recursive, there exists a Turing Machine M that halts and accepts w if w is in L, and halts and rejects w if w is not in L. Since every recursive language is also recursively enumerable, L is RE. Furthermore, the complement of L, L', is also recursive. This is because we can construct a Turing Machine M' from M by simply swapping the accepting and rejecting states. M' will then halt and accept w if w is in L' and halt and reject w if w is not in L'. Again, since every recursive language is also recursively enumerable, L' is RE.

*   **If both L and L' are RE, then L is recursive:**
    If both L and L' are RE, then there exist Turing Machines M1 that accepts w if w is in L and M2 that accepts w if w is in L'. We can construct a Turing Machine M that simulates both M1 and M2 in parallel. If M1 accepts w, then M halts and accepts w. If M2 accepts w, then M halts and rejects w. Since every string w is either in L or in L', either M1 or M2 must eventually accept w, which means that M must eventually halt. Therefore, M is a Turing Machine that halts for every w and accepts w if w is in L and rejects w if w is not in L. This means that L is recursive.

**Question 6:** Give an example of a language that is RE but not recursive.

**Answer:** The Halting Problem language (HALT) is a classic example.

**Question 7:** Are RE languages closed under complementation?

**Answer:** No, RE languages are not closed under complementation.  The complement of the Halting Problem is not RE.

**Question 8:**  Given the language `L = {<M> | M is a TM that accepts the empty string "" }`, is this language recursive or RE?  Justify your answer (briefly).

**Answer:**  `L` is RE. You can build a TM that simulates the given TM `M` on the empty string. If `M` accepts, then your TM accepts. If `M` rejects or loops, your TM will also reject or loop.  Therefore you can recognize `L`, but there is no guarantee that it will always halt, hence not recursive. You cannot guarantee to reject if `M` does not accept the empty string. `L` is a canonical example of an RE but not recursive language.

This detailed explanation and practice questions should provide a comprehensive understanding of recursive and recursively enumerable languages within the context of Turing Machines, as covered in Kozen's Theory of Computation. Good luck studying!
