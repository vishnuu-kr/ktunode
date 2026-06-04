---
title: "Closure and Decision Properties of Regular Languages (with proofs)"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abae"
status: "completed"
scrapedAt: "2026-05-20T16:29:57.158Z"
---
# THEORY OF COMPUTATION: Regular Languages - Closure and Decision Properties (Linz)

## Module 2: Regular Expressions

### Topic: Closure and Decision Properties of Regular Languages (with Proofs)

**Learning Outcomes:**

*   Understand the concept of closure properties and their significance in regular language theory.
*   Identify and prove the closure properties of regular languages under various operations (union, concatenation, Kleene star, intersection, complementation, difference, reversal).
*   Understand and apply decision properties to determine if a regular language satisfies specific conditions (emptiness, finiteness, equality).
*   Prove the decision properties of regular languages.
*   Apply the pumping lemma to prove that a language is *not* regular.

---

## 1. Key Concepts and Definitions

*   **Regular Language:** A language that can be described by a regular expression or accepted by a Finite Automaton (DFA or NFA).

*   **Closure Property:**  A property of a set (in this case, a set of languages) that states that if you perform a certain operation on elements of the set, the result will also be an element of the set. For example, if regular languages are closed under union, then the union of any two regular languages is also a regular language.

*   **Decision Property:** A question about a language that can be answered "yes" or "no" using an algorithm. Decision properties help us determine characteristics of regular languages.

*   **Algorithm:** A well-defined procedure for solving a problem in a finite number of steps.

*   **Finite Automaton (FA):** A mathematical model of computation consisting of states, transitions, and an alphabet. DFAs are deterministic, while NFAs are non-deterministic.

*   **Regular Expression:** A string of symbols that describes a pattern of strings.

*   **Language:** A set of strings over an alphabet.

---

## 2. Closure Properties of Regular Languages

Regular languages are closed under several operations. This means that if you perform these operations on regular languages, the resulting language will *always* be regular.

### 2.1. Union

**Theorem:** If L1 and L2 are regular languages, then L1 ∪ L2 is also a regular language.

**Proof (using Regular Expressions):**

1.  Since L1 and L2 are regular, there exist regular expressions R1 and R2 that describe them, respectively.
2.  The regular expression `R1 + R2` (or `R1 | R2`) describes the language L1 ∪ L2.  This is because the union operator in regular expressions matches either the pattern described by R1 or the pattern described by R2.
3.  Since `R1 + R2` is a valid regular expression, L1 ∪ L2 is regular.

**Proof (using Finite Automata):**

1.  Let M1 = (Q1, Σ, δ1, q01, F1) and M2 = (Q2, Σ, δ2, q02, F2) be DFAs that accept L1 and L2, respectively.
2.  Construct an NFA M = (Q, Σ, δ, q0, F) where:
    *   Q = Q1 ∪ Q2 ∪ {q0}  (q0 is a new start state)
    *   q0 is the new start state.
    *   F = F1 ∪ F2
    *   The transition function δ is defined as:
        *   δ(q0, ε) = {q01, q02}  (ε-transitions from the new start state to the start states of M1 and M2)
        *   δ(q, a) = δ1(q, a) for q ∈ Q1 and a ∈ Σ
        *   δ(q, a) = δ2(q, a) for q ∈ Q2 and a ∈ Σ

3.  The NFA M accepts the language L1 ∪ L2. The NFA starts in q0 and non-deterministically transitions to either the start state of M1 or the start state of M2, effectively simulating either M1 or M2.
4.  Since L1 ∪ L2 can be accepted by an NFA, and NFAs and DFAs are equivalent, L1 ∪ L2 is regular.

**Example:**

*   L1 = {w | w starts with 'a'} (Regular)
*   L2 = {w | w ends with 'b'} (Regular)
*   L1 ∪ L2 = {w | w starts with 'a' or ends with 'b'} (Regular)

### 2.2. Concatenation

**Theorem:** If L1 and L2 are regular languages, then L1L2 (concatenation) is also a regular language.

**Proof (using Regular Expressions):**

1.  Since L1 and L2 are regular, there exist regular expressions R1 and R2 that describe them, respectively.
2.  The regular expression `R1R2` describes the language L1L2.
3.  Since `R1R2` is a valid regular expression, L1L2 is regular.

**Proof (using Finite Automata):**

1. Let M1 = (Q1, Σ, δ1, q01, F1) and M2 = (Q2, Σ, δ2, q02, F2) be NFAs that accept L1 and L2, respectively. We use NFAs because they are simpler to construct for concatenation.
2. Construct an NFA M = (Q, Σ, δ, q0, F) where:
    * Q = Q1 ∪ Q2
    * q0 = q01
    * F = F2
    * The transition function δ is defined as:
        * δ(q, a) = δ1(q, a) for q ∈ Q1 \ F1  and a ∈ Σ
        * δ(q, a) = δ2(q, a) for q ∈ Q2 and a ∈ Σ
        * δ(q, ε) = {q02} for q ∈ F1  (ε-transitions from accepting states of M1 to the start state of M2)

3. The NFA M accepts the language L1L2. It simulates M1 first, and when M1 reaches an accepting state, it non-deterministically transitions to the start state of M2 and then simulates M2.
4. Since L1L2 can be accepted by an NFA, L1L2 is regular.

**Example:**

*   L1 = {a} (Regular)
*   L2 = {b} (Regular)
*   L1L2 = {ab} (Regular)

### 2.3. Kleene Star

**Theorem:** If L is a regular language, then L* (Kleene star) is also a regular language.

**Proof (using Regular Expressions):**

1.  Since L is regular, there exists a regular expression R that describes it.
2.  The regular expression `R*` describes the language L*.
3.  Since `R*` is a valid regular expression, L* is regular.

**Proof (using Finite Automata):**

1.  Let M = (Q, Σ, δ, q0, F) be an NFA that accepts L.
2.  Construct an NFA M' = (Q', Σ, δ', q0', F') where:
    *   Q' = Q ∪ {q0'} (q0' is a new start state)
    *   q0' is the new start state.
    *   F' = F ∪ {q0'} (The new start state is also an accepting state, allowing for the empty string).
    *   The transition function δ' is defined as:
        *   δ'(q0', ε) = {q0} (ε-transition from the new start state to the original start state)
        *   δ'(q, a) = δ(q, a) for q ∈ Q and a ∈ Σ
        *   δ'(q, ε) = {q0} for q ∈ F (ε-transitions from accepting states of M back to the original start state)

3. The NFA M' accepts the language L*.  The new start state allows the empty string to be accepted.  The ε-transitions from the accepting states back to the original start state allow for repetitions of strings in L.
4. Since L* can be accepted by an NFA, L* is regular.

**Example:**

*   L = {a} (Regular)
*   L* = {ε, a, aa, aaa, ...} (Regular)

### 2.4. Intersection

**Theorem:** If L1 and L2 are regular languages, then L1 ∩ L2 is also a regular language.

**Proof (using DFAs and Product Construction):**

1.  Let M1 = (Q1, Σ, δ1, q01, F1) and M2 = (Q2, Σ, δ2, q02, F2) be DFAs that accept L1 and L2, respectively. *Note: This proof works specifically for DFAs*.
2.  Construct a DFA M = (Q, Σ, δ, q0, F) where:
    *   Q = Q1 × Q2 (The Cartesian product of the state sets)
    *   q0 = (q01, q02) (The start state is a pair of start states)
    *   F = F1 × F2 (The accepting states are pairs of accepting states)
    *   The transition function δ is defined as:
        *   δ((q1, q2), a) = (δ1(q1, a), δ2(q2, a))

3. The DFA M accepts the language L1 ∩ L2. M effectively simulates both M1 and M2 in parallel. A string is accepted only if both M1 and M2 accept it.
4.  Since L1 ∩ L2 can be accepted by a DFA, L1 ∩ L2 is regular.

**Alternative Proof (using DeMorgan's Law and Closure under Complement):**

1.  Assume L1 and L2 are regular.
2.  We will show that `L1 ∩ L2 = ¬(¬L1 ∪ ¬L2)`. This uses DeMorgan's Law from set theory.
3.  We will prove below that the complement of a regular language is also regular.
4.  Therefore `¬L1` and `¬L2` are regular.
5.  Since we have proven that the union of two regular languages is regular, `¬L1 ∪ ¬L2` is regular.
6.  Since we have proven that the complement of a regular language is also regular, `¬(¬L1 ∪ ¬L2)` is regular.
7.  Therefore `L1 ∩ L2` is regular.

**Example:**

*   L1 = {w | w contains 'aa'} (Regular)
*   L2 = {w | w contains 'bb'} (Regular)
*   L1 ∩ L2 = {w | w contains 'aa' and 'bb'} (Regular)

### 2.5. Complementation

**Theorem:** If L is a regular language, then ¬L (the complement of L) is also a regular language.

**Proof (using DFAs):**

1.  Let M = (Q, Σ, δ, q0, F) be a DFA that accepts L.
2.  Construct a DFA M' = (Q, Σ, δ, q0, F') where:
    *   Q and Σ and δ and q0 are the same as in M.
    *   F' = Q - F (The accepting states are the non-accepting states of M).

3.  The DFA M' accepts the language ¬L. M' accepts exactly the strings that M rejects.
4.  Since ¬L can be accepted by a DFA, ¬L is regular.

**Important Note:** This proof *only* works if M is a DFA.  If M is an NFA, simply swapping accepting and non-accepting states will *not* result in an NFA accepting the complement of L. You must first convert the NFA to a DFA.

**Example:**

*   L = {w | w starts with 'a'} (Regular)
*   ¬L = {w | w does not start with 'a'} (Regular)

### 2.6. Difference

**Theorem:** If L1 and L2 are regular languages, then L1 - L2 (set difference) is also a regular language.

**Proof (using Intersection and Complementation):**

1.  L1 - L2 = L1 ∩ ¬L2
2.  Since L1 and L2 are regular, ¬L2 is regular (closure under complementation).
3.  Since L1 and ¬L2 are regular, L1 ∩ ¬L2 is regular (closure under intersection).
4.  Therefore, L1 - L2 is regular.

**Example:**

*   L1 = {w | w starts with 'a'} (Regular)
*   L2 = {w | w = a*} (Regular)
*   L1 - L2 = {w | w starts with 'a' and w is not in a*} (Regular)  e.g., "ab", "abc"

### 2.7. Reversal

**Theorem:** If L is a regular language, then L^R (the reversal of L) is also a regular language.

**Proof (using Regular Expressions):**

1.  Since L is regular, there exists a regular expression R that describes it.
2.  We define the reversal of a regular expression, denoted as R^R, recursively:
    *   ε^R = ε
    *   a^R = a (where a ∈ Σ)
    *   (R1 + R2)^R = R1^R + R2^R
    *   (R1R2)^R = R2^R R1^R
    *   (R*)^R = (R^R)*

3.  It can be shown that L(R^R) = (L(R))^R. That is, the language defined by the reversal of a regular expression is equal to the reversal of the language defined by the original regular expression.

4.  Since R^R is a valid regular expression, L^R is regular.

**Example:**

*   L = {ab, ba} (Regular)
*   L^R = {ba, ab} (Regular)

---

## 3. Decision Properties of Regular Languages

Decision properties are algorithmic questions about regular languages that can be answered "yes" or "no".

### 3.1. Emptiness

**Question:** Is L = ∅ (empty set)?

**Algorithm (using DFA):**

1.  Convert the regular language to a DFA M = (Q, Σ, δ, q0, F).
2.  Starting from the start state q0, perform a graph search (e.g., depth-first search or breadth-first search) to see if any accepting state in F is reachable.
3.  If at least one accepting state is reachable, then L is not empty (L ≠ ∅).  Return "no".
4.  If no accepting state is reachable, then L is empty (L = ∅). Return "yes".

**Justification:** If no accepting state can be reached from the start state, then no string can be accepted by the DFA, and therefore the language is empty.

**Algorithm (using Regular Expressions):**

While not as straightforward, you *can* determine emptiness from the regular expression itself:

1. Simplify the regular expression by removing sections that clearly don't generate any strings.
2. Check if the regular expression can be reduced to only `ε` (empty string) or `∅` (empty set).  If it can be reduced to `∅`, then the language is empty.  If it can be reduced to `ε`, then the language contains the empty string, and therefore is not empty.

**Example:**

*   R = `a*b*` (Not empty, contains at least ε)
*   R = `a∅b` (Empty, equivalent to ∅)
*   R = `(a+b)(c+d)` (Not Empty)

### 3.2. Finiteness

**Question:** Is L finite (contains a finite number of strings)?

**Algorithm (using DFA):**

1.  Convert the regular language to a DFA M = (Q, Σ, δ, q0, F).
2.  Starting from the start state q0, perform a graph search to see if any accepting state in F is reachable.
3.  If no accepting state is reachable, then L is empty and therefore finite. Return "yes".
4.  If at least one accepting state is reachable, check if any *cycle* exists on a path from the start state to an accepting state and from that accepting state back to itself.  A cycle is a path that starts and ends at the same state.
5.  If a cycle exists on a path to an accepting state, then L is infinite. Return "no".
6.  If no cycle exists on any path to any accepting state, then L is finite. Return "yes".

**Justification:** If a cycle exists on a path to an accepting state, then we can traverse that cycle any number of times, generating an infinite number of strings that are accepted by the DFA.  If no such cycle exists, then the longest possible string accepted by the DFA has length |Q| - 1 (because any string longer than this *must* repeat a state, creating a cycle).

**Example:**

*   R = `a*` (Infinite)
*   R = `a{5}` (Finite - exactly one string: aaaaa)
*   R = `(a+b){0,3}` (Finite - only strings of length 0-3)

### 3.3. Membership

**Question:**  Is string w ∈ L?

**Algorithm (using DFA):**

1.  Convert the regular language to a DFA M = (Q, Σ, δ, q0, F).
2.  Simulate the DFA M on the input string w, starting at the start state q0.
3.  After reading the entire string w, check the current state of the DFA.
4.  If the current state is an accepting state (in F), then w ∈ L. Return "yes".
5.  If the current state is not an accepting state, then w ∉ L. Return "no".

**Algorithm (using Regular Expressions):**

Most regular expression libraries have a built-in function to test membership (e.g., `re.match` in Python).  This effectively converts the regular expression to an equivalent FA and runs the string through it.

**Example:**

*   L = {w | w starts with 'a'}
*   w = "abc"  =>  w ∈ L (Yes)
*   w = "bcd"  =>  w ∈ L (No)

### 3.4. Equality

**Question:** Is L1 = L2? (Are two regular languages equal?)

**Algorithm:**

1.  L1 = L2 if and only if (L1 - L2) ∪ (L2 - L1) = ∅.  This is because (L1 - L2) ∪ (L2 - L1) is the *symmetric difference* of L1 and L2. If the symmetric difference is empty, then L1 and L2 are identical.
2.  Compute L1 - L2 (which is L1 ∩ ¬L2) and L2 - L1 (which is L2 ∩ ¬L1). These can be done because regular languages are closed under complementation, intersection and set difference.
3.  Compute (L1 - L2) ∪ (L2 - L1).  This can be done because regular languages are closed under union.
4.  Use the emptiness test to determine if (L1 - L2) ∪ (L2 - L1) = ∅.
5.  If (L1 - L2) ∪ (L2 - L1) = ∅, then L1 = L2. Return "yes".
6.  Otherwise, L1 ≠ L2. Return "no".

**Example:**

*   L1 = `a*`
*   L2 = `(a*)*`
*   L1 = L2 (Yes, because `(a*)*` is equivalent to `a*`)

*   L1 = `ab`
*   L2 = `ba`
*   L1 = L2 (No)

---

## 4. The Pumping Lemma for Regular Languages

The Pumping Lemma is a powerful tool for proving that a language is *not* regular. It is *not* used to prove that a language *is* regular.

**Theorem (Pumping Lemma):**

If L is a regular language, then there exists a constant p ≥ 1 (the "pumping length") such that for any string w ∈ L with |w| ≥ p, w can be divided into three substrings, w = xyz, satisfying the following conditions:

1.  |y| > 0 (The middle substring y must be non-empty)
2.  |xy| ≤ p (The combined length of the first two substrings xy must be no longer than the pumping length)
3.  For all i ≥ 0, xy^iz ∈ L (We can "pump" the middle substring y any number of times (including 0), and the resulting string will still be in L)

**How to use the Pumping Lemma to prove a language L is *not* regular:**

1.  **Assume for contradiction** that L *is* regular.
2.  **State that the Pumping Lemma applies** to L. This means there exists some pumping length *p*.
3.  **Choose a string w ∈ L** such that |w| ≥ p.  The string *w* should be chosen strategically to make the pumping argument work.
4.  **Consider *all* possible ways** to divide *w* into *xyz* such that |y| > 0 and |xy| ≤ p. This is the most crucial and often the most difficult step.
5.  **For *each* possible way to divide *w* into *xyz*, show that there exists an i ≥ 0 such that xy^iz ∉ L.**  Choose a value of *i* (often 0 or 2) that will violate the language's defining properties.
6.  **Conclude that the Pumping Lemma is contradicted.** Since we assumed L was regular, and this led to a contradiction of the Pumping Lemma, our initial assumption must be false. Therefore, L is *not* regular.

**Example:**

Prove that L = {a^n b^n | n ≥ 0} is not regular.

1.  **Assume for contradiction** that L is regular.
2.  **State that the Pumping Lemma applies** to L.  Let p be the pumping length.
3.  **Choose w = a^p b^p.** Note that w ∈ L and |w| = 2p ≥ p.
4.  **Consider *all* possible ways to divide w into xyz such that |y| > 0 and |xy| ≤ p:** Since |xy| ≤ p, and the first *p* symbols of *w* are all *a*s, *xy* must consist entirely of *a*s.  Therefore, *y* must be a non-empty string of *a*s, let's say y = a^k for some k > 0. x will be a string of a's (possibly empty), and z will be the rest of the a's and all the b's: z = a^(p-len(x)-k)b^p.
5.  **Show that there exists an i ≥ 0 such that xy^iz ∉ L:**  Choose i = 0.  Then xy^iz = xz = a^(p-k)b^p. Since k > 0, the number of *a*s in xz is less than *p*, while the number of *b*s is *p*. Therefore, the number of *a*s and *b*s are not equal, and xz ∉ L.
6.  **Conclude that the Pumping Lemma is contradicted:** We have shown that for any way of dividing *w* into *xyz* satisfying the conditions of the Pumping Lemma, there exists an i such that xy^iz ∉ L. This contradicts the Pumping Lemma, so our initial assumption that L is regular must be false. Therefore, L is not regular.

---

## 5. Practice Questions/Exercises

1.  **Prove that the language L = {w | w contains an equal number of 'a's and 'b's} is not regular.** (Hint: Use the Pumping Lemma and choose a strategic string w).

2.  **Given the regular languages L1 = a*b and L2 = b*a, construct DFAs for L1 ∪ L2 and L1 ∩ L2.**

3.  **Explain why the complementation proof does not work on NFAs directly. Give a counterexample.**

4.  **Describe an algorithm to determine if a regular language L is universal (L = Σ*).**

5.  **Let L1 be a regular language and L2 be a context-free language.  Is L1 ∩ L2 always context-free? Why or why not?**

---

## 6. Answers to Practice Questions/Exercises

1.  **Proof that L = {w | w contains an equal number of 'a's and 'b's} is not regular:**

    1.  Assume L is regular.
    2.  Let p be the pumping length.
    3.  Choose w = a^p b^p.
    4.  Consider all ways to divide w into xyz such that |y| > 0 and |xy| ≤ p.  As before, y must consist entirely of a's. So, y = a^k for some k > 0.
    5.  Let i = 2. Then xy^2z = a^(p+k)b^p. Since k > 0, the number of a's is greater than the number of b's, so xy^2z ∉ L.
    6.  The Pumping Lemma is contradicted, so L is not regular.

2.  **DFAs for L1 ∪ L2 and L1 ∩ L2 (a*b and b*a):** You would need to draw the state diagrams, which cannot be easily represented in Markdown. The key is to use the product construction for intersection. For union, create an NFA and then convert to a DFA.

3.  **Why the complementation proof doesn't work on NFAs:**

    The complementation proof relies on the fact that a DFA is in *exactly one* state after reading each symbol of the input.  In an NFA, it can be in multiple states simultaneously.  Simply swapping accepting and non-accepting states in an NFA would not accept the complement because the NFA could still "choose" a path that leads to one of the original accepting states, even if other paths are rejected.

    **Counterexample:**

    Let L be the language accepted by the NFA with states {q0, q1}, alphabet {a}, start state q0, accepting state q1, and transitions δ(q0, a) = {q0, q1} and δ(q1, a) = {q1}. This NFA accepts all strings with at least one 'a' (a+).  If you simply swap q0 and q1 to be accepting and non-accepting respectively, the new NFA *still* accepts strings with at least one 'a'.  It does *not* accept the complement, which would be strings with *no* 'a's (the empty string).

4.  **Algorithm to determine if a regular language L is universal (L = Σ*):**

    1.  Compute the complement of L, ¬L.
    2.  Use the emptiness test to determine if ¬L = ∅.
    3.  If ¬L = ∅, then L = Σ* (L is universal).  Return "yes".
    4.  Otherwise, L ≠ Σ* (L is not universal).  Return "no".

5.  **L1 ∩ L2 where L1 is regular and L2 is context-free:**

    Yes, L1 ∩ L2 is always context-free.  Context-free languages are closed under intersection with regular languages.  This is a standard result in formal language theory, often proved using the properties of pushdown automata (PDAs) and finite automata.

---

## 7. Important Points to Remember

*   **Closure properties are fundamental to understanding the capabilities of regular languages.** They allow us to combine regular languages in various ways and still guarantee that the resulting language remains regular.
*   **Decision properties allow us to algorithmically answer important questions about regular languages.**
*   **The Pumping Lemma is *only* used to prove that a language is *not* regular.**  It is a powerful but often tricky tool.
*   **Always remember to specify whether you are working with a DFA or an NFA,** as certain proofs (e.g., complementation) only work directly with DFAs.
*   **Practice is key!** Work through numerous examples to solidify your understanding of closure properties, decision properties, and the Pumping Lemma.
