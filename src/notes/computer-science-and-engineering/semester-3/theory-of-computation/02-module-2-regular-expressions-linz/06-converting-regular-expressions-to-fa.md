---
title: "Converting Regular Expressions to FA"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aba9"
status: "completed"
scrapedAt: "2026-05-20T16:29:53.496Z"
---
## THEORY OF COMPUTATION: Module 2 - Regular Expressions (Linz)

### Topic: Converting Regular Expressions to FA

**Description:** This module explores how to convert Regular Expressions (RE) into Finite Automata (FA). This conversion is a fundamental concept in understanding the equivalence between Regular Expressions and Finite Automata, both of which define Regular Languages. We'll focus on converting REs to Non-deterministic Finite Automata (NFA) first, then consider converting NFAs to Deterministic Finite Automata (DFA).

**Learning Outcomes:**

*   Understand the relationship between Regular Expressions and Finite Automata.
*   Convert a Regular Expression to an equivalent Non-deterministic Finite Automaton (NFA) using Thompson's Construction.
*   Understand the concept of Non-determinism in Finite Automata.
*   Be able to convert an NFA to an equivalent DFA using the subset construction.
*   Understand the importance and applications of these conversions.

**1. Key Concepts and Definitions:**

*   **Regular Expression (RE):** A pattern describing a set of strings. REs are built using basic symbols (characters), concatenation, alternation (union), and Kleene star (repetition).
    *   **Basic REs:**
        *   `ε` (epsilon): Represents the empty string.
        *   `a` (where `a` is a symbol from the alphabet): Represents the string containing the symbol `a`.
    *   **Operations:**
        *   **Concatenation:** `R1R2` - Matches a string formed by concatenating a string matched by `R1` followed by a string matched by `R2`.
        *   **Alternation (Union):** `R1|R2` - Matches a string matched by `R1` or a string matched by `R2`.
        *   **Kleene Star:** `R1*` - Matches zero or more concatenations of strings matched by `R1`.
        *   **Parentheses:** `(R)` - Used for grouping.

*   **Finite Automaton (FA):** A mathematical model of a machine that recognizes a regular language.
    *   **Deterministic Finite Automaton (DFA):** A FA where for each state and input symbol, there is exactly one transition to another state.
    *   **Non-deterministic Finite Automaton (NFA):** A FA where for each state and input symbol, there may be zero, one, or multiple transitions to other states.  It can also have epsilon transitions (transitions without reading an input symbol).

*   **Regular Language:** A language that can be described by a regular expression or recognized by a finite automaton.

*   **Thompson's Construction:** An algorithm for converting a regular expression to an equivalent NFA.

*   **Subset Construction:** An algorithm for converting an NFA to an equivalent DFA.

**2. Regular Expressions to NFA (Thompson's Construction):**

Thompson's construction provides a systematic way to build an NFA for any regular expression. The construction is defined recursively based on the structure of the regular expression.

*   **Base Cases:**
    *   **RE: `ε` (Epsilon):**
        *   NFA: Two states, `q1` (start) and `q2` (accept).  An epsilon transition from `q1` to `q2`.
        ```
        (q1) --ε--> ((q2))
        ```

    *   **RE: `a` (Single Symbol):**
        *   NFA: Two states, `q1` (start) and `q2` (accept). A transition on symbol `a` from `q1` to `q2`.
        ```
        (q1) --a--> ((q2))
        ```

*   **Inductive Cases:**
    *   **RE: `R1R2` (Concatenation):**
        *   Construct NFAs for `R1` and `R2` separately (let them be `N1` and `N2`).
        *   Add an epsilon transition from the accept state of `N1` to the start state of `N2`.  The start state of `N1` becomes the start state of the combined NFA.  The accept state of `N2` becomes the accept state of the combined NFA.
        ```
        (N1 start) --> ... --> ((N1 accept)) --ε--> (N2 start) --> ... --> ((N2 accept))
        ```

    *   **RE: `R1|R2` (Alternation/Union):**
        *   Construct NFAs for `R1` and `R2` separately (`N1` and `N2`).
        *   Introduce a new start state `q_start` and a new accept state `q_accept`.
        *   Add epsilon transitions from `q_start` to the start states of `N1` and `N2`.
        *   Add epsilon transitions from the accept states of `N1` and `N2` to `q_accept`.  `q_start` becomes the start state, and `q_accept` becomes the accept state.

        ```
                       ε
        (q_start) --> (N1 start) --> ... --> ((N1 accept)) --ε--> (q_accept)
           ε          ∨
                    (N2 start) --> ... --> ((N2 accept)) --ε-->
        ```

    *   **RE: `R1*` (Kleene Star):**
        *   Construct an NFA for `R1` (`N1`).
        *   Introduce a new start state `q_start` and a new accept state `q_accept`.
        *   Add an epsilon transition from `q_start` to the start state of `N1` and to `q_accept` (for zero repetitions).
        *   Add an epsilon transition from the accept state of `N1` to the start state of `N1` (for multiple repetitions) and to `q_accept`.
        *   `q_start` becomes the start state, and `q_accept` becomes the accept state.

        ```
              ε        ε
        (q_start) --> (N1 start) --> ... --> ((N1 accept)) --ε--> (N1 start)
           ε          ∧                              |      ε
                      |                              --------> (q_accept)
                      ---------------------------------------
        ```

**3. Example: Converting RE `(a|b)*ab` to an NFA:**

1.  **`a`:**  `(q1) --a--> ((q2))`
2.  **`b`:**  `(q3) --b--> ((q4))`
3.  **`a|b`:**
    ```
                   ε
    (q5) --> (q1) --a--> ((q2)) --ε--> (q8)
       ε          ∨
                (q3) --b--> ((q4)) --ε-->
    ((q8))
    ```
4.  **(a|b)*:**
    ```
          ε        ε
    (q9) --> (q5) --> (q1) --a--> ((q2)) --ε--> (q8)
       ε          ∨                              |      ε
                  (q3) --b--> ((q4)) --ε-->     --------> ((q10))
                  ∧                              |
                  ---------------------------------------
    ((q8)) --ε--> (q5)
    ```
5.  **(a|b)*a:**

    Concatenate the NFA for `(a|b)*` with the NFA for `a`.
    ```
          ε        ε
    (q9) --> (q5) --> (q1) --a--> ((q2)) --ε--> (q8)
       ε          ∨                              |      ε
                  (q3) --b--> ((q4)) --ε-->     --------> ((q10)) --ε--> (q11) --a--> ((q12))
                  ∧                              |
                  ---------------------------------------
    ((q8)) --ε--> (q5)
    ```
6.  **(a|b)*ab:** Concatenate the NFA for `(a|b)*a` with the NFA for `b`.
    ```
          ε        ε
    (q9) --> (q5) --> (q1) --a--> ((q2)) --ε--> (q8)
       ε          ∨                              |      ε
                  (q3) --b--> ((q4)) --ε-->     --------> ((q10)) --ε--> (q11) --a--> ((q12)) --ε--> (q13) --b--> ((q14))
                  ∧                              |
                  ---------------------------------------
    ((q8)) --ε--> (q5)
    ```

**4. NFA to DFA (Subset Construction):**

The subset construction algorithm converts an NFA to an equivalent DFA.

1.  **Start State:** The start state of the DFA is the epsilon closure of the start state of the NFA.  The *epsilon closure* of a state is the set of all states reachable from that state by following only epsilon transitions.

2.  **Transitions:** For each state (set of NFA states) in the DFA and for each input symbol in the alphabet, compute the set of NFA states reachable from the set of NFA states by reading that symbol, and then take the epsilon closure of that set. This resulting epsilon closure is the new state in the DFA.

3.  **Accept States:** Any state in the DFA that contains an accept state of the original NFA is an accept state in the DFA.

4.  **Repeat Step 2** until no new DFA states are created.

**Example: Converting the NFA created above (for (a|b)*ab) to a DFA (Simplified):**

Let's assume we've already built the full NFA as shown in the previous example. For brevity, we won't show all states in the visual NFA here. Let q9 be the start state.

1.  **Initial State:**  DFA start state = Epsilon closure(q9) = {q9, q5, q1, q3} (This set will be one DFA state)
2.  **Transitions from {q9, q5, q1, q3}:**
    *   **On 'a':** From q9, q5, q1, q3, the 'a' transitions lead to q2. Epsilon closure(q2) = {q2, q8, q10, q11}. This becomes a new DFA state.
    *   **On 'b':** From q9, q5, q1, q3, the 'b' transitions lead to q4. Epsilon closure(q4) = {q4, q8, q10, q11}. This becomes another new DFA state.
3.  **Transitions from {q2, q8, q10, q11}:**
    *   **On 'a':**  From q2, q8, q10, q11, the 'a' transitions lead to q12. Epsilon closure(q12) = {q12}.
    *   **On 'b':**  From q2, q8, q10, q11, there are no outgoing 'b' transitions. It goes to ∅.
4.  **Transitions from {q4, q8, q10, q11}:**
    *   **On 'a':** Same as state {q2, q8, q10, q11}. Epsilon closure(q12) = {q12}.
    *   **On 'b':** From q4, q8, q10, q11, the 'b' transitions lead to q13. Epsilon closure(q13) = {q13}.
5.  **Transitions from {q12}:**
    *   **On 'a':** ∅
    *   **On 'b':** Leads to state {q14}.
6.  **Transitions from {q13}:**
   * **On 'a':** ∅
   * **On 'b':** Leads to ∅.

And you'd continue this until no new states are created. Accept states are those containing the NFA's original accept states (q2, q4, q12, q14, etc. depending on what was the end state after Thompson's construction).

**5. Importance and Applications:**

*   **Compiler Design:** Regular expressions are extensively used in lexical analysis (scanning) of compilers to identify tokens like keywords, identifiers, and operators.
*   **Text Processing:** Tools like `grep`, `sed`, and `awk` rely heavily on regular expressions for pattern matching and text manipulation.
*   **Network Security:** Regular expressions are used in firewalls and intrusion detection systems to identify malicious patterns in network traffic.
*   **Data Validation:** Used to validate input data formats, such as email addresses and phone numbers.
*   **Bioinformatics:** Pattern matching in DNA and protein sequences.

**6. Practice Questions/Exercises:**

1.  **Convert the regular expression `(a|b)*b` to an NFA using Thompson's construction.**

    **Answer:** (Detailed construction omitted for brevity, but follow the steps outlined above to arrive at the NFA).

2.  **Convert the regular expression `a(b|a)*` to an NFA using Thompson's construction.**

    **Answer:** (Detailed construction omitted for brevity, but follow the steps outlined above to arrive at the NFA).

3.  **Consider the NFA with the following transitions:**

    *   `q0 --a--> q1`
    *   `q0 --b--> q2`
    *   `q1 --a--> q1`
    *   `q1 --b--> q3`
    *   `q2 --b--> q2`
    *   `q2 --a--> q3`
    *   `q3 --a--> q3`
    *   `q3 --b--> q3`

    `q0` is the start state, and `q3` is the accept state. What regular expression does this NFA represent?

    **Answer:** `(a|b)(a|b)(a|b)*` or simplified,  `(a|b){2}(a|b)*`

4.  **Convert the regular expression `a*b` to an NFA using Thompson's construction. Then, partially convert the NFA to a DFA using the subset construction (show the first two DFA states and their transitions).**

    **Answer:**
    *NFA (Simplified): (q0) --a--> (q0) --b--> ((q1))* (Epsilon transitions may be present based on Thompson's Construction.)

    *DFA Conversion (Partial):

    1. Start State: Epsilon Closure(q0) = {q0} (assuming q0 is the start state after Thompson's construction, adjust based on your NFA)

    2. Transitions from {q0}:
        * On 'a': {q0} (assuming q0 can transition to itself on 'a')
        * On 'b': {q1} (assuming q1 is the accept state after the 'b' transition from q0)

    3. Transitions from {q1}:
        * On 'a': ∅ (assuming there's no 'a' transition)
        * On 'b': ∅ (assuming there's no 'b' transition)

   State {q0} is the starting state and state {q1} will be accepting. This can be represented by DFA: {q0} ----a----> {q0} --b->  ((q1)), q1 accepts.

**7. Important Points to Remember:**

*   Thompson's construction provides a guaranteed method for converting *any* regular expression to an NFA.
*   The subset construction guarantees a DFA equivalent to a given NFA.
*   The resulting DFA might have more states than the original NFA. This is often unavoidable.
*   Understanding epsilon closures is critical for both Thompson's construction and subset construction.
*   While theoretically equivalent, NFAs can be more concise than DFAs for certain regular expressions.

By understanding these concepts and practicing the conversion algorithms, you'll be well-equipped to work with regular expressions and finite automata in various theoretical and practical applications.
