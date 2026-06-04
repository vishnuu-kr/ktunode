---
title: "Equivalence with FA - Conversion in both directions"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abac"
status: "completed"
scrapedAt: "2026-05-20T16:29:55.670Z"
---
# THEORY OF COMPUTATION - Module 2: Regular Expressions (Linz)
## Topic: Equivalence with FA - Conversion in both directions

**Learning Outcomes:**

*   Understand the equivalence between Regular Expressions (REs) and Finite Automata (FAs).
*   Be able to convert an RE to an equivalent Nondeterministic Finite Automaton (NFA).
*   Be able to convert a Deterministic Finite Automaton (DFA) to an equivalent RE.
*   Understand the significance of this equivalence in the context of formal language theory.

---

**I. Key Concepts and Definitions**

*   **Regular Expression (RE):**  A formula built from a set of basic expressions using operators like concatenation, alternation (union), and Kleene star. REs define regular languages.

*   **Finite Automaton (FA):** A mathematical model of a machine with a finite number of states and transitions between those states, determined by input symbols. FAs can be deterministic (DFA) or nondeterministic (NFA).  FAs accept regular languages.

*   **Deterministic Finite Automaton (DFA):**  For each state and input symbol, there is exactly one transition to another state.

*   **Nondeterministic Finite Automaton (NFA):**  For each state and input symbol, there can be zero, one, or multiple transitions to other states.  Includes epsilon transitions (transitions without consuming an input symbol).

*   **Equivalence:** Two formalisms (e.g., REs and FAs) are *equivalent* if they define or recognize the same set of strings (i.e., the same language).  In this case, any regular language can be described by both a regular expression and a finite automaton.

*   **Regular Language:** A language that can be defined by a regular expression or accepted by a finite automaton.

---

**II. Equivalence Between Regular Expressions and Finite Automata**

The fundamental theorem is that Regular Expressions and Finite Automata are equivalent: *A language is regular if and only if it can be described by a regular expression or accepted by a finite automaton.*

This implies two important conversion procedures:

1.  **RE to FA (specifically NFA):**  Any regular expression can be converted into an equivalent NFA.
2.  **FA (specifically DFA) to RE:** Any deterministic finite automaton can be converted into an equivalent regular expression.

---

**III. Conversion from Regular Expression to NFA (Thompson's Construction)**

Thompson's Construction is a systematic method for converting any regular expression into an equivalent NFA. The process involves recursively building NFAs for basic REs and combining them using specific rules for the RE operators.

*   **Base Cases:**

    *   **`a` (where `a` is an alphabet symbol):**
        ```
        ----> (q1) --a--> (q2) ---->
              initial    final
        ```

    *   **`ε` (epsilon):**
        ```
        ----> (q1) --ε--> (q2) ---->
              initial    final
        ```

    *   **`∅` (empty set):**
        ```
        ----> (q1) ---->
              initial  (no final state or accepting transition)
        ```  Note: this machine accepts nothing

*   **Recursive Steps:**

    *   **`R1 | R2` (Union/Alternation):**

        1.  Construct NFAs for `R1` and `R2` (let them be `N(R1)` and `N(R2)` respectively).  Assume `N(R1)` has initial state `s1` and final state `f1`, and `N(R2)` has initial state `s2` and final state `f2`.
        2.  Create a new start state `s`.
        3.  Add epsilon transitions from `s` to `s1` and `s2`.
        4.  Create a new final state `f`.
        5.  Add epsilon transitions from `f1` to `f` and `f2` to `f`.

        ```
             ---> (s) --ε--> (s1) --N(R1)--> (f1) --ε--> (f) --->
                   |         ...            ...        |
                   --ε--> (s2) --N(R2)--> (f2) --ε-->
                     ...            ...
        ```

    *   **`R1 R2` (Concatenation):**

        1.  Construct NFAs for `R1` and `R2` (let them be `N(R1)` and `N(R2)` respectively).
        2.  Add an epsilon transition from the final state `f1` of `N(R1)` to the initial state `s2` of `N(R2)`.  Merge these states.
        3.  The initial state is `s1` and the final state is `f2`.

        ```
             ---> (s1) --N(R1)--> (f1) --ε--> (s2) --N(R2)--> (f2) --->
                   ...            ...         ...            ...
                     R1                         R2
        ```

    *   **`R*` (Kleene Star):**

        1.  Construct the NFA for `R` (let it be `N(R)` with initial state `s1` and final state `f1`).
        2.  Create a new start state `s`.
        3.  Create a new final state `f`.
        4.  Add an epsilon transition from `s` to `s1`.
        5.  Add an epsilon transition from `s` to `f` (allows for zero occurrences of R).
        6.  Add an epsilon transition from `f1` to `s1` (allows for multiple occurrences of R).
        7.  Add an epsilon transition from `f1` to `f`.

        ```
             ---> (s) --ε--> (s1) --N(R)--> (f1) --ε--> (s1) --N(R)--> (f1) --ε--> (f) --->
                   |         ...            ...        ^         ...            ...        |
                   --ε---------------------------------|------------------------------------
        ```

**Example:** Convert the regular expression `(a|b)*a` to an NFA using Thompson's Construction.

1.  **`a`:**  `----> (q1) --a--> (q2) ---->`
2.  **`b`:**  `----> (q3) --b--> (q4) ---->`
3.  **`a|b`:** (Union of the above two)

    ```
         ---> (q5) --ε--> (q1) --a--> (q2) --ε--> (q6) --->
               |         ...            ...        |
               --ε--> (q3) --b--> (q4) --ε-->
                   ...            ...
    ```

4.  **`(a|b)*`:** (Kleene star of the above)

    ```
        ---> (q7) --ε--> (q5) --ε--> (q1) --a--> (q2) --ε--> (q6) --ε--> (q5) ... --> (q6) --ε--> (q8) --->
              |         ...            ...        |         ^
              --ε---------------------------------|--------
        ...--> (q3) --b--> (q4) --ε-->
            ...
    ```

5. **`(a|b)*a`** (Concatenation)

   ```
       ---> (q7) --ε--> (q5) --ε--> (q1) --a--> (q2) --ε--> (q6) --ε--> (q5) ... --> (q6) --ε--> (q8) --ε--> (q9) --a--> (q10) --->
             |         ...            ...        |         ^
             --ε---------------------------------|--------
       ...--> (q3) --b--> (q4) --ε-->
           ...
   ```

   We simplify the epsilon transitions as much as possible for readability after building the composite machine. This resultant machine would then accept any string that ends in an 'a'.

---

**IV. Conversion from DFA to Regular Expression**

There are several algorithms for converting a DFA to an equivalent regular expression. Here's one method using state elimination:

1.  **Add a new start state and a new final state:**

    *   Create a new start state `s` with an epsilon transition to the original start state of the DFA.
    *   Create a new accepting state `f`.  Add epsilon transitions from all the original accepting states to the new accepting state `f`.

2.  **Iteratively eliminate intermediate states:**

    *   Choose a state `qi` (other than the new start and final states) to eliminate.
    *   For each pair of states `qj` and `qk` (where `qj` is a predecessor of `qi` and `qk` is a successor of `qi`), modify the transition from `qj` to `qk` to bypass `qi`.

        *   Let:
            *   `R(qj, qi)` be the regular expression representing the transitions from `qj` to `qi`.
            *   `R(qi, qi)` be the regular expression representing the loop from `qi` to itself.
            *   `R(qi, qk)` be the regular expression representing the transitions from `qi` to `qk`.
            *   `R(qj, qk)` be the existing regular expression representing transitions from `qj` to `qk`.  (Initially, this might be `∅` if no such direct transition exists).

        *   The updated transition from `qj` to `qk` becomes:  `R(qj, qk) | (R(qj, qi) (R(qi, qi))* R(qi, qk))`

        *   In essence, we are adding a path from `qj` to `qk` that goes *through* the eliminated state `qi`.

    *   Remove state `qi` and all its incoming and outgoing transitions.

3.  **Repeat step 2 until only the new start state and the new final state remain.**  The regular expression on the transition from the new start state to the new final state is the equivalent regular expression for the original DFA.

**Example:** Convert the following DFA to a regular expression:

```
     --0--> (q2)
    /       ^
(q1)      / 1
    \     /
     --1--> (q3) --0,1--> (q3)   Accepting State = q3
```

1.  **Add new start and final states:**

```
      ε
 ---> (s) --ε--> (q1) --0--> (q2)
                  /       ^
                  / 1      / 1
                 /       /
                 --1--> (q3) --0,1--> (q3) --ε--> (f) --->
```

2.  **Eliminate q2:**

The only incoming transition to q2 is from q1 (on '0'). The only outgoing transition is back to itself (none in this example but can use this approach.)
After eliminating q2 the updated machine is.
```
      ε
 ---> (s) --ε--> (q1) --0--> q2 --ε--> (q1)
                  /       ^
                  / 1      / 1
                 /       /
                 --1--> (q3) --0,1--> (q3) --ε--> (f) --->
```
Since there is no transition from q2 back to q1, the machine remains the same.

2.  **Eliminate q1:**
q1 has a transition to itself. The transition from (s) to (q3) becomes:  `1 0*`.

```
      ε
 ---> (s) --10*--> (q3) --0,1--> (q3) --ε--> (f) --->
```

3. **Eliminate q3:** q3 has a loop to itself of (0|1)*. This means `q3` can reach the final state `f` via the loop.

Therefore `10*(0|1)* ε = 10*(0|1)*`

4. **The equivalent regular expression is:** `10*(0|1)*`

---

**V. Significance of Equivalence**

*   **Provides Interchangeability:** REs and FAs can be used interchangeably to describe regular languages.
*   **Offers Different Perspectives:** REs provide a concise, algebraic way to define patterns, while FAs provide a computational model for recognizing those patterns.
*   **Facilitates Algorithm Design:**  The conversion between REs and FAs enables the design of efficient algorithms for pattern matching, lexical analysis, and other computational tasks. For example, we can convert a complex RE to an NFA and then (optionally) to a DFA, and then use the DFA for fast string searching.
*   **Underpins Formal Language Theory:**  This equivalence is a fundamental concept in formal language theory, establishing the connection between declarative (REs) and operational (FAs) representations of languages.

---

**VI. Important Points to Remember**

*   Thompson's Construction always produces an NFA, even if the regular expression defines a language recognizable by a DFA.  The resulting NFA may have epsilon transitions.
*   The state elimination method for converting a DFA to a regular expression might not always produce the most *minimal* regular expression.  Simplification may be needed.
*   The construction of NFAs from REs can lead to NFAs with many epsilon transitions, which can be computationally expensive to simulate directly. This is why the NFA is usually converted to a DFA.
*   The reverse conversion (DFA to RE) demonstrates that the computational power of DFAs is completely captured by the algebraic properties of regular expressions.
*   Understanding the algorithms and their underlying principles is crucial for applying these concepts in practice.

---

**VII. Practice Questions/Exercises**

1.  **Convert the regular expression `a(b|c)*` to an NFA using Thompson's Construction.** Provide the state diagram.
2.  **Convert the following DFA to a regular expression using the state elimination method:**

    ```
           1
      ----> (q1) --0--> (q2) --1--> (q3) ---->
            ^      /        ^
            |     /         |
            -----/----------
            /
          0
    Accepting State: q3
    ```

3.  **Explain the significance of the equivalence between regular expressions and finite automata in the context of compiler design.**
4.  **Discuss the advantages and disadvantages of using NFAs versus DFAs for pattern matching.**

---

**VIII. Answers to Practice Questions/Exercises**

1.  **NFA for `a(b|c)*`:**

    *   Start with NFAs for `a`, `b`, and `c`.
    *   Combine `b` and `c` using the union construction.
    *   Apply the Kleene star construction to `(b|c)`.
    *   Concatenate `a` with `(b|c)*`.

    (Diagram omitted for brevity, but should follow the steps outlined in Thompson's construction section)

2.  **RE for the DFA:**

    *   Add new start state `s` and final state `f`.
    *   **Eliminate q2:** `R(q1, q2) = 0`, `R(q2, q2) = φ`, `R(q2, q3) = 1`, so  `R(q1, q3) = 01`
    *   **Eliminate q1:** `R(s, q1) = ε`, `R(q1, q1) = φ`, `R(q1, q3) = 01` so  `R(s, q3) = 01`
    *   **Eliminate q3**:  `R(q3, q3) = φ` therefore `R(s, f) = 01`, so the resultant regular expression would be `01`.

3.  **Significance in Compiler Design:** The equivalence is crucial for lexical analysis in compilers. Regular expressions are used to define the tokens (keywords, identifiers, operators) of the programming language. These REs are then converted to DFAs (or NFAs that are later converted to DFAs) which are used to efficiently scan the source code and identify the tokens. This allows the compiler to break down the source code into meaningful units.

4.  **Advantages/Disadvantages of NFAs vs. DFAs for Pattern Matching:**

    *   **NFAs:**
        *   **Advantage:**  Often easier to construct from REs. Can be more compact than DFAs for some patterns.
        *   **Disadvantage:**  Slower to simulate directly (due to nondeterminism and epsilon transitions). Requires backtracking or parallel exploration of possible paths.
    *   **DFAs:**
        *   **Advantage:**  Fastest to simulate (deterministic transitions). Requires no backtracking.
        *   **Disadvantage:**  Can be exponentially larger than the equivalent NFA for some patterns (state explosion).  Construction from REs is generally more complex.

Therefore, in practice, NFAs are often constructed from REs *and then* converted to DFAs for efficient execution. The initial construction is easier with NFAs, and the final execution is faster with DFAs.
