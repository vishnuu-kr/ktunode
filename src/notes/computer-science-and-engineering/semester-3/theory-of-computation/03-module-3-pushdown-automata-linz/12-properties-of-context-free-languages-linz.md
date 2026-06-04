---
title: "Properties of Context-Free Languages (Linz)"
subject: "THEORY OF COMPUTATION"
module: "Module 3: Pushdown Automata (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abc6"
status: "completed"
scrapedAt: "2026-05-20T16:30:14.742Z"
---
# THEORY OF COMPUTATION: Module 3 - Pushdown Automata (Linz): Properties of Context-Free Languages

These notes cover the properties of Context-Free Languages (CFLs) as discussed in Linz's textbook within the context of Pushdown Automata (PDAs).

**Learning Outcomes:**

*   Understand closure properties of CFLs.
*   Apply pumping lemma for CFLs to prove that a language is *not* context-free.
*   Understand decision problems related to CFLs and their decidability.
*   Learn about the relationship between CFLs and Deterministic CFLs (DCFLs).

**1. Closure Properties of Context-Free Languages**

CFLs exhibit closure under several operations, meaning that applying these operations to CFLs results in another CFL. However, CFLs are *not* closed under all operations.

*   **Definition:** A language family *L* is closed under an operation *Op* if, when *Op* is applied to languages in *L*, the resulting language is also in *L*.

*   **Closure Properties of CFLs:**

    *   **Union:** CFLs are closed under union.
        *   If *L1* and *L2* are CFLs, then *L1 ∪ L2* is a CFL.
        *   **Proof Sketch:**  If we have CFGs *G1* and *G2* generating *L1* and *L2* respectively, we can create a new CFG *G* with a new start symbol *S* and the following productions:
            *   *S → S1 | S2* where *S1* and *S2* are the start symbols of *G1* and *G2* respectively.  The new grammar G generates either L1 or L2.
        *   **Example:** *L1* = {a<sup>n</sup>b<sup>n</sup> | n ≥ 0}, *L2* = {c<sup>n</sup>d<sup>n</sup> | n ≥ 0}.  *L1 ∪ L2* is a CFL.

    *   **Concatenation:** CFLs are closed under concatenation.
        *   If *L1* and *L2* are CFLs, then *L1L2* is a CFL.
        *   **Proof Sketch:**  Similar to union, construct a new CFG *G* with a new start symbol *S* and the production:
            *   *S → S1S2* where *S1* and *S2* are the start symbols of *G1* and *G2* respectively. The new grammar G generates L1L2.
        *   **Example:** *L1* = {a<sup>n</sup>b<sup>n</sup> | n ≥ 0}, *L2* = {c<sup>n</sup>d<sup>n</sup> | n ≥ 0}.  *L1L2* is a CFL.

    *   **Kleene Star ( * ):** CFLs are closed under the Kleene star.
        *   If *L* is a CFL, then *L** is a CFL.
        *   **Proof Sketch:**  Create a new CFG *G* with a new start symbol *S* and the production:
            *   *S → ε | SS1* where *S1* is the start symbol of *G*. The new grammar G generates L*.
        *   **Example:** *L* = {a<sup>n</sup>b<sup>n</sup> | n ≥ 0}.  *L*** is a CFL.

    *   **Reversal:** CFLs are closed under reversal.
        *   If *L* is a CFL, then *L<sup>R</sup>* (the reversal of *L*) is a CFL.
        *   **Proof Sketch:** Reverse all productions in the grammar generating *L*.
        *   **Example:** If *L* has grammar *S → aSb | ε*, then *L<sup>R</sup>* has grammar *S → bSa | ε*.

    *   **Homomorphism:** CFLs are closed under homomorphism.
        *   A homomorphism *h* is a function that maps symbols from one alphabet to strings over another alphabet: *h: Σ → Δ***.
        *   If *L* is a CFL, then *h(L)* (the language obtained by applying *h* to each string in *L*) is a CFL.  Essentially you are substituting each symbol of the grammar with the appropriate string defined by the homomorphism.
        *   **Example:** Let *L* = {a<sup>n</sup>b<sup>n</sup> | n ≥ 0} and *h(a) = aa*, *h(b) = bb*.  Then *h(L)* = {a<sup>2n</sup>b<sup>2n</sup> | n ≥ 0}, which is also a CFL.

    *   **Inverse Homomorphism:** CFLs are closed under inverse homomorphism.
         *   If *L* is a CFL and *h* is a homomorphism, then *h<sup>-1</sup>(L)* is a CFL.

*   **Non-Closure Properties of CFLs:**

    *   **Intersection:** CFLs are *not* closed under intersection.
        *   If *L1* and *L2* are CFLs, *L1 ∩ L2* is *not necessarily* a CFL.
        *   **Example:**  *L1* = {a<sup>n</sup>b<sup>n</sup>c<sup>m</sup> | n, m ≥ 0} and *L2* = {a<sup>n</sup>b<sup>m</sup>c<sup>m</sup> | n, m ≥ 0}.  Both are CFLs, but *L1 ∩ L2* = {a<sup>n</sup>b<sup>n</sup>c<sup>n</sup> | n ≥ 0}, which is *not* a CFL.

    *   **Complementation:** CFLs are *not* closed under complementation.
        *   If *L* is a CFL, *L'* (the complement of *L*) is *not necessarily* a CFL.
        *   **Relationship to Intersection:**  Since CFLs *are* closed under union and  (L1 ∩ L2) = (L1' ∪ L2')', if CFLs were closed under complementation, they would also be closed under intersection (DeMorgan's Law). We know they aren't closed under intersection, therefore they cannot be closed under complementation.

    *   **Difference:** CFLs are *not* closed under set difference.
        *   Since L1 - L2 = L1 ∩ L2', and CFLs are not closed under intersection or complementation, it follows that they are not closed under difference either.

**2. Pumping Lemma for Context-Free Languages**

The Pumping Lemma for CFLs is a powerful tool for proving that a language is *not* context-free. It states that any sufficiently long string in a CFL can be "pumped" (repeated) in certain positions while still remaining in the language.

*   **Statement:**  For any CFL *L*, there exists a constant *p* (the pumping length) such that for any string *w ∈ L* with *|w| ≥ p*, we can write *w = uvxyz*, where:

    1.  *|vxy| ≤ p*
    2.  *|vy| ≥ 1*  (v and y cannot both be empty)
    3.  For all *i ≥ 0*, *uv<sup>i</sup>xy<sup>i</sup>z ∈ L*

*   **How to use the Pumping Lemma to prove a language L is NOT context-free:**

    1.  **Assume L is context-free.**
    2.  **The Adversary chooses *p***:  The pumping length *p* is unknown, but it exists if the language is CFL. You, as the proof-maker, do not get to choose *p*.
    3.  **You choose *w ∈ L* such that *|w| ≥ p***.  You strategically choose *w* to cause problems in the following steps.  The choice of *w* is critical.
    4.  **Adversary splits *w = uvxyz* according to the pumping lemma conditions:** The adversary gets to choose how to split *w* into *uvxyz*, subject to the pumping lemma conditions (specifically, *|vxy| ≤ p* and *|vy| ≥ 1*). You *cannot* control this split. This is often the hardest part of the proof.
    5.  **You show that *uv<sup>i</sup>xy<sup>i</sup>z ∉ L* for some *i ≥ 0***. This is the key step.  You must find *at least one* value of *i* that breaks the language definition.  Common choices for *i* are 0 and 2.
    6.  **Conclusion:** Since the pumping lemma conditions cannot be met for all possible splits of *w*, our initial assumption that *L* is a CFL must be false. Therefore, *L* is not a CFL.

*   **Example:** Prove that *L* = {a<sup>n</sup>b<sup>n</sup>c<sup>n</sup> | n ≥ 0} is not a CFL.

    1.  Assume *L* is a CFL.
    2.  The adversary chooses *p*.
    3.  Choose *w = a<sup>p</sup>b<sup>p</sup>c<sup>p</sup>*.  Note: *|w| = 3p ≥ p*.
    4.  The adversary splits *w = uvxyz* such that *|vxy| ≤ p* and *|vy| ≥ 1*.  Consider the different possibilities for *vxy*:

        *   **Case 1: *vxy* contains only a's.**  Then *uv<sup>2</sup>xy<sup>2</sup>z* will have more a's than b's and c's, so it's not in *L*.
        *   **Case 2: *vxy* contains only b's.**  Then *uv<sup>2</sup>xy<sup>2</sup>z* will have more b's than a's and c's, so it's not in *L*.
        *   **Case 3: *vxy* contains only c's.**  Then *uv<sup>2</sup>xy<sup>2</sup>z* will have more c's than a's and b's, so it's not in *L*.
        *   **Case 4: *vxy* contains a's and b's.** Then *uv<sup>2</sup>xy<sup>2</sup>z* will disrupt the order of a's, b's, and c's, so it's not in *L*. For example, it could be aabbbbcc.
        *   **Case 5: *vxy* contains b's and c's.** Then *uv<sup>2</sup>xy<sup>2</sup>z* will disrupt the order of a's, b's, and c's, so it's not in *L*.
    5.  In all cases, *uv<sup>2</sup>xy<sup>2</sup>z ∉ L*.
    6.  Therefore, *L* is not a CFL.

*   **Important Notes on the Pumping Lemma:**

    *   The Pumping Lemma can only be used to prove that a language is *not* context-free. It cannot be used to prove that a language *is* context-free.
    *   The choice of *w* is crucial.  Choose a *w* that exposes the limitations of a context-free grammar for the language.
    *   You must consider all possible ways the adversary can split *w* into *uvxyz* that satisfy the conditions of the pumping lemma.
    *   It's often easiest to show that *uv<sup>0</sup>xy<sup>0</sup>z ∈ L*  (i.e., *uxz* is not in L) or that *uv<sup>2</sup>xy<sup>2</sup>z ∉ L*.

**3. Decision Problems for CFLs**

Decision problems ask whether a certain property holds for a given input. For CFLs, several decision problems are decidable (meaning there exists an algorithm that can always answer "yes" or "no" correctly) while others are undecidable.

*   **Membership Problem:**  Given a CFL *L* and a string *w*, is *w ∈ L*?
    *   **Decidable.**  We can convert the CFG generating *L* to Chomsky Normal Form (CNF).  Then, use the CYK (Cocke-Younger-Kasami) algorithm to determine if *w* can be derived from the grammar.
    *   **Complexity:**  The CYK algorithm runs in O(*|w|<sup>3</sup> * |G|*) time, where *|w|* is the length of the string and *|G|* is the size of the grammar.

*   **Emptiness Problem:**  Given a CFL *L*, is *L = ∅*? (Is the language empty?)
    *   **Decidable.**  Start with the non-terminals in the grammar. Mark those that can derive a terminal symbol. Recursively mark non-terminals that can derive a string containing a marked non-terminal. If the start symbol is marked, the language is not empty; otherwise, it is empty.
    *   **Example:**  S -> AB, A -> a, B -> C, C -> b.  A and C can derive terminals. B can derive C, so B can be marked. S can derive A and B, so S is marked. The language is not empty.

*   **Finiteness Problem:**  Given a CFL *L*, is *L* finite?
    *   **Decidable.**  Determine if there is a derivation of the form *A =>+ xAy* for some non-terminal *A* and strings *x,y*.  In other words, check if there's a non-terminal that can recursively derive itself in a non-trivial way. If there is, the language is infinite; otherwise, it is finite.

*   **Other Problems (Undecidable):**

    *   **Equivalence Problem:** Given two CFLs *L1* and *L2*, is *L1 = L2*?  **Undecidable.**
    *   **Intersection Problem:** Given two CFLs *L1* and *L2*, is *L1 ∩ L2 = ∅*? **Undecidable.**
    *   **Universality Problem:** Given a CFL *L* over alphabet Σ, is *L = Σ***?  **Undecidable.**
    *   **Containment Problem:** Given two CFLs *L1* and *L2*, is *L1 ⊆ L2*? **Undecidable.**

*   **Important Note:** The undecidability of many problems related to CFLs stems from the fact that they are not closed under intersection and complementation.  The emptiness problem for the intersection of two CFLs is equivalent to checking if the intersection is empty, which is undecidable.

**4. Deterministic Context-Free Languages (DCFLs)**

Deterministic Context-Free Languages (DCFLs) are a proper subset of CFLs, recognized by Deterministic Pushdown Automata (DPDAs).  A DPDA is a PDA where, for each state and input symbol (or ε), there is at most one possible transition.

*   **Properties of DCFLs:**

    *   **Closure Properties:**
        *   DCFLs are closed under complementation.  If *L* is a DCFL, then *L'* is a DCFL. This is because DPDAs are deterministic, so we can deterministically simulate acceptance and rejection.
        *   DCFLs are closed under inverse homomorphism.
        *   DCFLs are *not* closed under union, concatenation, or Kleene star.  For example, *L1* = {a<sup>n</sup>b<sup>n</sup> | n ≥ 0} and *L2* = {a<sup>n</sup>c<sup>n</sup> | n ≥ 0} are DCFLs, but *L1 ∪ L2* is not.
    *   **DPDAs and LR(k) Grammars:**  DCFLs can be generated by LR(k) grammars, which are used in many parser generators.
    *   **Relationship to CFLs:**  DCFLs ⊂ CFLs.  There are CFLs that are not DCFLs.  For example, any ambiguous CFL is not a DCFL. Palindromes of odd length are another example.

*   **Importance of DCFLs:** DCFLs are crucial in compiler construction. Many programming languages are designed to be DCFLs (or close to DCFLs) so that they can be efficiently parsed by deterministic parsers.

**5. Practice Questions**

1.  **Prove that the language L = {ww | w ∈ {a, b}*} is not a CFL using the pumping lemma.**

    *   **Answer:**
        1.  Assume L is a CFL.
        2.  Adversary chooses p.
        3.  Choose w = a<sup>p</sup>b<sup>p</sup>a<sup>p</sup>b<sup>p</sup>. |w| = 4p ≥ p.
        4.  Adversary splits w = uvxyz with |vxy| ≤ p and |vy| ≥ 1.
            *   **Case 1: vxy is entirely within the first a<sup>p</sup>.** Then, pumping changes the number of leading a's without changing the second half of the string. uv<sup>2</sup>xy<sup>2</sup>z will no longer be in the form ww.
            *   **Case 2: vxy spans the first a<sup>p</sup> and first b<sup>p</sup>.** Pumping distorts the first half to contain more a's or b's compared to the second half. Thus, uv<sup>2</sup>xy<sup>2</sup>z is not of the form ww.
            *   **Case 3: vxy is entirely within the first b<sup>p</sup>.**  Same reasoning as Case 1.
            *   **Case 4: vxy spans the first b<sup>p</sup> and second a<sup>p</sup>.** Pumping distorts the first half to contain more b's or the second half to contain less a's/b's compared to what they should, based on ww.
            *   **Case 5: vxy is entirely within the second a<sup>p</sup>.** Same reasoning as Case 1.
            *   **Case 6: vxy spans the second a<sup>p</sup> and second b<sup>p</sup>.** Same reasoning as Case 2.
            *   **Case 7: vxy is entirely within the second b<sup>p</sup>.** Same reasoning as Case 1.
            *   **Case 8: vxy is across the middle split between the first b<sup>p</sup> and the second a<sup>p</sup>.** Because |vxy| <=p, it can only span the split. If we pump down (i=0), w = uxz is not ww. This is because the substring removed includes characters on both sides of the exact middle of w.
        5.  In all cases, uv<sup>i</sup>xy<sup>i</sup>z is not in L for some *i*.
        6.  Therefore, L is not a CFL.

2.  **Are DCFLs closed under intersection with regular languages? Prove your answer.**

    *   **Answer:** Yes, DCFLs are closed under intersection with regular languages.

        *   **Proof:** Let *L* be a DCFL and *R* be a regular language. Let *M1* be a DPDA recognizing *L* and *M2* be a DFA recognizing *R*.  We can construct a new DPDA *M* that simulates *M1* and *M2* in parallel.

            *   The state of *M* is a pair *(q1, q2)*, where *q1* is the state of *M1* and *q2* is the state of *M2*.
            *   The transition function of *M* updates both the DPDA and DFA states based on the input symbol.  *M* also simulates the stack operations of *M1*.
            *   *M* accepts if both *M1* and *M2* accept.

        *   Since *M1* is deterministic and *M2* is deterministic, *M* is also deterministic. Thus, *M* recognizes *L ∩ R*, and *L ∩ R* is a DCFL.

3.  **Give an example of a CFL that is not a DCFL.**

    *   **Answer:**  The language of palindromes over {a, b}* of odd length: {w | w = w<sup>R</sup> and |w| is odd}

4.  **Is the language {a<sup>n</sup>b<sup>m</sup> | n > m} a CFL?**

    *   **Answer:** Yes. A CFG for this language is:
        *   S -> aB
        *   B -> aB | aC
        *   C -> aCb | e
        * another approach would be to add extra As when needed. S -> AB. A -> aA | a. B -> aBb | e

5.  **True or False:  If L1 and L2 are CFLs, then (L1 ∩ L2)' is always a CFL.**

    *   **Answer:** False.  CFLs are not closed under intersection, and they are not closed under complementation. Thus, the complement of an intersection of two CFLs is not necessarily a CFL.

**6. Important Points to Remember**

*   The Pumping Lemma is a powerful tool for proving languages are *not* CFLs.
*   CFLs have specific closure properties (union, concatenation, Kleene star, reversal, homomorphism, inverse homomorphism). Understand which operations preserve the context-free property.
*   CFLs are *not* closed under intersection, complementation, or set difference.
*   Know the decidability status of key problems related to CFLs (membership, emptiness, finiteness).
*   DCFLs are a subset of CFLs, and they have different closure properties. DCFLs are important for parsing.
*   Pay careful attention to the interaction between "you" and the "adversary" when using the pumping lemma.
