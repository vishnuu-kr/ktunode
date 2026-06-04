---
title: "Properties of Regular Languages (Linz)"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abad"
status: "completed"
scrapedAt: "2026-05-20T16:29:56.383Z"
---
# THEORY OF COMPUTATION: Module 2 - Regular Expressions (Linz) - Properties of Regular Languages

## Introduction

This module explores the properties of regular languages. Understanding these properties is crucial for manipulating, simplifying, and reasoning about regular expressions and finite automata.  This builds upon the previous modules focusing on the definition of regular languages and their relationship to regular expressions and finite automata. We'll be following the content presented in Peter Linz's "An Introduction to Formal Languages and Automata."

## Learning Outcomes

Upon completion of this module, you should be able to:

*   Understand and apply closure properties of regular languages.
*   Prove that a language is not regular using the Pumping Lemma.
*   Determine equivalence of regular languages.
*   Minimize the number of states in a DFA.
*   Understand decision properties of regular languages.

## 1. Closure Properties of Regular Languages

Regular languages are "closed" under certain operations, meaning that if you perform these operations on regular languages, the result will *always* be another regular language. This is a fundamental and powerful property.

*   **Definition: Closure** A class of languages is closed under an operation if, when the operation is applied to languages in the class, the result is also in the class.

*   **Why Closure Matters:** Closure properties allow us to build more complex regular languages from simpler ones. They also allow us to reason about the properties of more complex regular languages based on the properties of their simpler components.

### 1.1. Common Closure Properties

Here's a list of the most common and important closure properties:

*   **Union (∪):** If L1 and L2 are regular languages, then L1 ∪ L2 is also a regular language.
    *   *Proof Idea:* Given DFAs (or NFAs) for L1 and L2, construct an NFA that simulates either DFA.  This NFA accepts a string if either the DFA for L1 or the DFA for L2 accepts the string.
    *   *Example:*  L1 = {a<sup>n</sup> | n is even}, L2 = {b<sup>n</sup> | n is odd}. L1 ∪ L2 is regular (it can be described by a regular expression like `(aa)*|(b(bb)*)`).

*   **Intersection (∩):** If L1 and L2 are regular languages, then L1 ∩ L2 is also a regular language.
    *   *Proof Idea:* Given DFAs for L1 and L2, construct a DFA whose states are pairs of states from the original DFAs. The new DFA simulates both DFAs simultaneously.  The new DFA accepts if *both* original DFAs accept. This is the *product construction*.
    *   *Example:*  L1 = {strings containing "ab"}, L2 = {strings containing "ba"}. L1 ∩ L2 is regular (it can be described by a regular expression).

*   **Complement (¬):** If L is a regular language, then its complement ¬L (Σ* - L) is also a regular language.
    *   *Proof Idea:* Given a DFA for L, create a new DFA by simply swapping accepting and non-accepting states.
    *   *Example:* If L = {strings containing "a"}, then ¬L = {strings containing no "a"}.

*   **Difference (-):** If L1 and L2 are regular languages, then L1 - L2 is also a regular language. (L1 - L2 = {w | w ∈ L1 and w ∉ L2}).
    *   *Proof Idea:*  L1 - L2 = L1 ∩ ¬L2. Since intersection and complement are closed for regular languages, the difference is also closed.
    *   *Example:* L1 = {strings containing "ab"}, L2 = {strings containing "aba"}. L1 - L2 = {strings containing "ab" but not "aba"}.

*   **Reversal (<sup>R</sup>):** If L is a regular language, then its reversal L<sup>R</sup> is also a regular language. (L<sup>R</sup> = {w<sup>R</sup> | w ∈ L}, where w<sup>R</sup> is the reverse of string w).
    *   *Proof Idea:* Given an NFA for L, reverse all the transitions and swap the initial and final states.
    *   *Example:* If L = {ab, cba}, then L<sup>R</sup> = {ba, abc}.

*   **Concatenation (•):** If L1 and L2 are regular languages, then L1 • L2 is also a regular language.
    *   *Proof Idea:* Given NFAs for L1 and L2, connect the accepting states of L1 to the initial state of L2 with ε-transitions.
    *   *Example:* L1 = {a, b}, L2 = {c, d}. L1 • L2 = {ac, ad, bc, bd}.

*   **Kleene Star (*):** If L is a regular language, then L* is also a regular language.
    *   *Proof Idea:* Given an NFA for L, add ε-transitions from accepting states back to the initial state. Also, make the initial state accepting to include the empty string.
    *   *Example:* If L = {a}, then L* = {ε, a, aa, aaa, ...}.

*   **Homomorphism:** A homomorphism is a function h: Σ → Γ* that maps each symbol in the alphabet Σ to a string over the alphabet Γ. If L is a regular language over Σ, then h(L) is regular over Γ.
    *   *Proof Idea:* Replace each symbol in a regular expression for L with its corresponding string according to h.
    *   *Example:* Let Σ = {a, b}, Γ = {0, 1}, and h(a) = 01, h(b) = 10. If L = {ab, ba}, then h(L) = {0110, 1001}.

### 1.2. Using Closure Properties

Closure properties are often used to:

*   **Prove regularity:** To show that a language is regular, you can express it in terms of regular languages and operations that preserve regularity (e.g., union, intersection, complement).

*   **Prove non-regularity:**  If you know a language L1 is regular and you can show that L1 ∩ L2 is *not* regular, then L2 must also be non-regular. This often relies on the Pumping Lemma.

## 2. The Pumping Lemma for Regular Languages

The Pumping Lemma is a powerful tool for proving that a language is *not* regular. It states a property that *all* regular languages must satisfy. If a language violates this property, it is not regular.

*   **Theorem (Pumping Lemma):** For any regular language L, there exists a constant p (the "pumping length") such that any string w in L with length |w| ≥ p can be divided into three substrings x, y, and z, such that:
    1.  w = xyz
    2.  |y| > 0  (y is not the empty string)
    3.  |xy| ≤ p (the length of xy is no more than p)
    4.  For all i ≥ 0, xy<sup>i</sup>z ∈ L (we can "pump" y any number of times, including zero, and the resulting string will still be in L)

*   **Using the Pumping Lemma to Prove Non-Regularity:**
    1.  **Assume L is regular.**
    2.  **Let p be the pumping length guaranteed by the Pumping Lemma.**  (The Pumping Lemma says *there exists* a p, so you don't get to choose it. The adversary (who wants to show that L is *not* regular) *does* get to choose p).
    3.  **Choose a string w ∈ L such that |w| ≥ p.** This is often the most critical step and requires careful consideration. You are the adversary here.
    4.  **Consider all possible ways to divide w into xyz such that |y| > 0 and |xy| ≤ p.**  This is where you argue that *no matter how* you break down w into x, y, and z that satisfy these constraints, you can find some i ≥ 0 such that xy<sup>i</sup>z is *not* in L.  Essentially, you are showing that the conditions of the pumping lemma cannot all be satisfied simultaneously.
    5.  **Show that for each possible division, there exists an i ≥ 0 such that xy<sup>i</sup>z ∉ L.**  This is the "pumping" step. Usually, i=0 or i=2 is a good choice.
    6.  **Conclude that L is not regular.**  Since you have shown that the Pumping Lemma does *not* hold for L, L cannot be regular.

*   **Important Notes:**
    *   The Pumping Lemma is only useful for proving that a language is *not* regular. It cannot be used to prove that a language *is* regular.
    *   The order of quantifiers is critical. The Pumping Lemma states:  For all regular languages L, *there exists* p, such that for all w, *for all* possible breakdowns of w into xyz, *there exists* i such that xy<sup>i</sup>z ∈ L. To show it does not hold, the order is reversed: *there exists* w, such that *for all* p, *there exists* a breakdown of w into xyz, *for all* i, xy<sup>i</sup>z ∉ L.
    *   The choice of 'w' is crucial. Choose a 'w' that reflects the property that makes the language potentially non-regular.
    *   Consider all valid breakdowns of 'w' into 'xyz' that satisfy the length constraints. This can sometimes require a case analysis.

*   **Example: Proving L = {a<sup>n</sup>b<sup>n</sup> | n ≥ 0} is not regular**

    1.  Assume L is regular.
    2.  Let p be the pumping length.
    3.  Choose w = a<sup>p</sup>b<sup>p</sup>.  Clearly, w ∈ L and |w| = 2p ≥ p.
    4.  Consider all possible divisions of w into xyz such that |y| > 0 and |xy| ≤ p. Since |xy| ≤ p and w = a<sup>p</sup>b<sup>p</sup>, xy must consist entirely of 'a's. Therefore:
        *   x = a<sup>k</sup> for some k ≥ 0
        *   y = a<sup>j</sup> for some j > 0 (since |y| > 0)
        *   z = a<sup>p-k-j</sup>b<sup>p</sup>
        Note that k + j ≤ p because |xy| <= p.
    5.  Let i = 0.  Then xy<sup>0</sup>z = xz = a<sup>k</sup>a<sup>p-k-j</sup>b<sup>p</sup> = a<sup>p-j</sup>b<sup>p</sup>. Since j > 0, p - j < p.  Therefore, xy<sup>0</sup>z = a<sup>p-j</sup>b<sup>p</sup> ∉ L because the number of 'a's is not equal to the number of 'b's.
    6.  Since we found a string w and a division of w into xyz such that xy<sup>0</sup>z ∉ L, L is not regular by the Pumping Lemma.

*   **Example: Proving L = {ww | w ∈ {a, b}*} is not regular.**

    1. Assume L is regular.
    2. Let p be the pumping length.
    3. Choose w = a<sup>p</sup>ba<sup>p</sup>b.  Clearly, w ∈ L and |w| = 2p + 2 ≥ p.
    4. Consider all possible divisions of w into xyz such that |y| > 0 and |xy| ≤ p. Since |xy| ≤ p and w = a<sup>p</sup>ba<sup>p</sup>b, xy must consist entirely of 'a's from the first half of the string. Therefore:
        *   x = a<sup>k</sup> for some k ≥ 0
        *   y = a<sup>j</sup> for some j > 0 (since |y| > 0)
        *   z = a<sup>p-k-j</sup>ba<sup>p</sup>b
        Note that k + j ≤ p because |xy| <= p.
    5.  Let i = 2. Then xy<sup>2</sup>z = xa<sup>2j</sup>z = a<sup>k</sup>a<sup>2j</sup>a<sup>p-k-j</sup>ba<sup>p</sup>b = a<sup>p+j</sup>ba<sup>p</sup>b. Since j > 0, the first 'a' section is now longer than the second 'a' section. Hence, a<sup>p+j</sup>ba<sup>p</sup>b ∉ L.
    6. Since we found a string w and a division of w into xyz such that xy<sup>2</sup>z ∉ L, L is not regular by the Pumping Lemma.

## 3. Equivalence of Regular Languages

Two regular languages L1 and L2 are equivalent if they contain the same strings, i.e., L1 = L2.

*   **Methods for Determining Equivalence:**
    *   **Convert to DFAs:**  Convert both L1 and L2 to DFAs. Then, minimize the DFAs (see section 4). Two languages are equivalent if and only if their minimized DFAs are isomorphic (have the same structure).
    *   **Prove Equivalence by Containment:** Show that L1 ⊆ L2 and L2 ⊆ L1. To show L1 ⊆ L2, you need to prove that every string in L1 is also in L2. This can be done through induction or other proof techniques.  This can be difficult in practice.
    *   **Show that (L1 ∩ ¬L2) ∪ (¬L1 ∩ L2) = ∅:** This expresses the symmetric difference. If the symmetric difference is empty, then L1 and L2 are equivalent.  This can also be a complicated approach to implement.

*   **Example:**  L1 = (a|b)*a(a|b)* and L2 = (a|b)*. L1 and L2 are *not* equivalent because L2 contains the empty string (ε), while L1 does not.

*   **Example:**  L1 = a(ba)*b  and L2 = (ab)*ab. L1 and L2 are *not* equivalent because "aba" is in L2 but not in L1.

## 4. Minimization of DFAs

Minimizing a DFA involves reducing the number of states while preserving the language accepted by the DFA. A minimal DFA has the fewest possible states for accepting a given regular language.

*   **Why Minimize?**
    *   **Efficiency:** Smaller DFAs require less memory and potentially less computation.
    *   **Uniqueness:**  The minimal DFA for a regular language is unique (up to state renaming), which is useful for comparing languages.

*   **Algorithm for DFA Minimization (Table-Filling Algorithm):**
    1.  **Remove unreachable states:** States that cannot be reached from the initial state can be safely removed without changing the language.
    2.  **Fill in the Distinguishability Table:** Create a table where each cell (p, q) represents a pair of states (p and q).  Mark the following cells:
        *   Mark all pairs (p, q) where p is an accepting state and q is a non-accepting state (or vice-versa).  These states are *distinguishable*.
    3.  **Iterate until no new entries are added:** For each unmarked pair (p, q), consider all symbols 'a' in the alphabet. Compute the states reached from p and q on input 'a', say p' = δ(p, a) and q' = δ(q, a). If the pair (p', q') is marked (i.e., p' and q' are distinguishable), then mark the pair (p, q). This means that if the states you transition to *are* distinguishable, then the current states are also distinguishable.
    4.  **Merge indistinguishable states:** After the iteration completes, all unmarked pairs of states are equivalent (indistinguishable). Merge each set of equivalent states into a single state in the minimal DFA.
    5.  **Update Transitions:** For each merged state, its transitions are determined by the transitions of the original states it contains.  Since the states were indistinguishable, the transition function will be consistent.
    6.  **Create the minimized DFA:** Construct the new DFA with the merged states and updated transitions.

*   **Example:** Consider a DFA with states {A, B, C, D, E}, where A is the start state and E is the accepting state. The transition table is:

    | State | Input 'a' | Input 'b' |
    |-------|-----------|-----------|
    | A     | B         | C         |
    | B     | A         | D         |
    | C     | E         | D         |
    | D     | E         | D         |
    | E     | E         | E         |

    1.  **Remove unreachable states:**  All states are reachable.
    2.  **Initial Distinguishability Table:**
        *   (A, E), (B, E), (C, E), (D, E) are marked because E is an accepting state and the others are not.
    3.  **Iteration 1:**
        *   Consider (A, B): δ(A, a) = B, δ(B, a) = A. (B, A) is not marked. δ(A, b) = C, δ(B, b) = D. (C, D) is not marked. Therefore, (A, B) remains unmarked.
        *   Consider (A, C): δ(A, a) = B, δ(C, a) = E. (B, E) is marked. Therefore, (A, C) is marked.
        *   Consider (A, D): δ(A, a) = B, δ(D, a) = E. (B, E) is marked. Therefore, (A, D) is marked.
        *   Consider (B, C): δ(B, a) = A, δ(C, a) = E. (A, E) is marked. Therefore, (B, C) is marked.
        *   Consider (B, D): δ(B, a) = A, δ(D, a) = E. (A, E) is marked. Therefore, (B, D) is marked.
        *   Consider (C, D): δ(C, a) = E, δ(D, a) = E. (E, E) is not marked. δ(C, b) = D, δ(D, b) = D. (D, D) is not marked.  Therefore (C, D) remains unmarked.
    4.  **Iteration 2:**  Marking (A, B) relies on the status of (C, D), which is still unmarked.  No further cells are marked.
    5.  **Merge indistinguishable states:** The only unmarked pair is (A, B) and (C, D).  We merge A and B into a new state AB, and C and D into a new state CD.
    6.  **Update transitions:**  From AB, on 'a' we go to BA (which is AB). On 'b' we go to CD. From CD, on 'a' we go to E. On 'b' we go to DD (which is CD).
    7.  **Minimized DFA:** The minimized DFA has states {AB, CD, E}, where AB is the start state and E is the accepting state. The transition table is:

        | State | Input 'a' | Input 'b' |
        |-------|-----------|-----------|
        | AB    | AB        | CD        |
        | CD    | E         | CD        |
        | E     | E         | E         |

## 5. Decision Properties of Regular Languages

Decision properties are algorithms that answer questions about regular languages. Because we can effectively represent regular languages (using DFAs, NFAs, or regular expressions), we can solve many problems algorithmically.

*   **Emptiness:** Is L = ∅?
    *   *Algorithm:* Convert L to a DFA. Check if there is any path from the start state to an accepting state. If there is no path, L is empty.

*   **Membership:** Is w ∈ L?
    *   *Algorithm:* Convert L to a DFA. Simulate the DFA on input w. If the DFA ends in an accepting state, then w ∈ L.

*   **Finiteness:** Is L a finite language?
    *   *Algorithm:* Convert L to a DFA. Remove all unreachable states. Check for cycles containing accepting states. If there are no such cycles, L is finite.

*   **Equality:** Is L1 = L2? (See Section 3, Equivalence of Regular Languages)

*   **Containment:** Is L1 ⊆ L2?
    *   *Algorithm:* Check if L1 - L2 = ∅ (L1 ∩ ¬L2 = ∅).  We already know how to check for emptiness.

## Practice Questions/Exercises

1.  **Prove that the language L = {0<sup>i</sup>1<sup>j</sup> | i > j} is not regular using the Pumping Lemma.**
    *   *Answer:*
        1.  Assume L is regular.
        2.  Let p be the pumping length.
        3.  Choose w = 0<sup>p+1</sup>1<sup>p</sup>.  |w| = 2p + 1 ≥ p and w ∈ L.
        4.  Consider all divisions of w into xyz such that |y| > 0 and |xy| ≤ p.  Thus, xy consists only of 0s.
            *   x = 0<sup>k</sup> for some k ≥ 0
            *   y = 0<sup>j</sup> for some j > 0
            *   z = 0<sup>p+1-k-j</sup>1<sup>p</sup>
        5.  Let i = 0.  Then xy<sup>0</sup>z = xz = 0<sup>p+1-j</sup>1<sup>p</sup>. Since j > 0, p + 1 - j < p + 1, so the number of 0s is less than p+1. Therefore, 0<sup>p+1-j</sup>1<sup>p</sup> ∉ L.
        6.  Therefore, L is not regular.

2.  **Given two regular expressions R1 = (a|b)*ab(a|b)* and R2 = (a|b)*ba(a|b)*, describe a regular expression for the language L = L(R1) ∩ L(R2).**
    *   *Answer:* L is the set of strings that contain both "ab" and "ba" as substrings. A possible regular expression is `(a|b)*(ab|ba)(a|b)*`. This expression may not be the simplest, but it describes the required language. Other regular expressions are possible and valid if they describe the same language.

3.  **Minimize the following DFA, where A is the start state and D is the accepting state:**

    | State | Input '0' | Input '1' |
    |-------|-----------|-----------|
    | A     | B         | C         |
    | B     | A         | D         |
    | C     | D         | A         |
    | D     | C         | B         |

    *   *Answer:*

        1.  **Initial Distinguishability Table:** (A, D), (B, D), (C, D) are marked.
        2.  **Iteration 1:**
            *   (A, B): δ(A, 0) = B, δ(B, 0) = A.  (B, A) is not marked.  δ(A, 1) = C, δ(B, 1) = D. (C, D) is marked. Therefore, (A, B) is marked.
            *   (A, C): δ(A, 0) = B, δ(C, 0) = D. (B, D) is marked. Therefore, (A, C) is marked.
            *   (B, C): δ(B, 0) = A, δ(C, 0) = D. (A, D) is marked. Therefore, (B, C) is marked.

        3. **No new markings are possible.**
        4. **States are A, B, C, and D are all distinguishable** - therefore this DFA is already minimal.

4.  **Explain how you would determine if a regular language L is infinite, given a DFA representing L.**
    *   *Answer:* Convert L to a DFA. Remove all unreachable states. Check for cycles containing accepting states. If there are no such cycles, L is finite. This is because an infinite language needs a way to repeat a part of the string indefinitely and still be in the language, which cycles containing accepting states allow.

## Important Points to Remember

*   Closure properties are essential for understanding how regular languages behave under various operations.
*   The Pumping Lemma is a *negative* tool; it can only prove that a language is *not* regular. Be careful with the order of quantifiers when applying it.
*   Minimizing DFAs is important for efficiency and for determining equivalence of languages.
*   Decision properties allow us to algorithmically answer key questions about regular languages.
