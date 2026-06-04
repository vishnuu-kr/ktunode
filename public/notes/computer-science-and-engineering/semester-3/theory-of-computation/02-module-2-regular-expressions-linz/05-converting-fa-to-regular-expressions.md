---
title: "Converting FA to Regular Expressions"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aba8"
status: "completed"
scrapedAt: "2026-05-20T16:29:52.781Z"
---
## THEORY OF COMPUTATION: Module 2 - Regular Expressions (Linz) - FA to Regular Expressions Conversion

**Subject:** THEORY OF COMPUTATION
**Module:** Module 2: Regular Expressions (Linz)
**Topic:** Converting FA to Regular Expressions

**Learning Outcomes:** Upon completion of this topic, you will be able to:

*   Understand the relationship between Finite Automata (FA) and Regular Expressions.
*   Apply the state elimination method to convert a FA to an equivalent regular expression.
*   Simplify the resulting regular expression after conversion.
*   Recognize and address corner cases in FA to RE conversion.

---

### 1. Relationship Between FA and Regular Expressions

*   **Fundamental Equivalence:**  FAs and regular expressions have equivalent expressive power. This means any language that can be described by a regular expression can be recognized by a finite automaton, and vice-versa.  This is a cornerstone of regular language theory.
*   **Kleene's Theorem:** Formalizes this equivalence. It states:
    *   If a language is described by a regular expression, then there exists a finite automaton that recognizes the language.
    *   If a language is recognized by a finite automaton, then there exists a regular expression that describes the language.
*   **Implication:** This equivalence allows us to switch between FAs and regular expressions, depending on which representation is more convenient for a particular task (e.g., pattern matching, language description).

### 2. State Elimination Method

The state elimination method is a systematic technique to convert a Finite Automaton (FA) into an equivalent Regular Expression (RE).  It involves iteratively removing states from the FA while updating the transitions with equivalent REs until only a single start and final state remain.  The RE on the transition between these two remaining states is the RE for the entire FA.

**2.1. Preprocessing the FA:**

*   **Unique Start State:**  Ensure the FA has only one start state.  If it has multiple, create a new start state with ε-transitions to the original start states.
*   **Unique Accept State:** Ensure the FA has only one accept state. If it has multiple, create a new accept state with ε-transitions from the original accept states. Importantly, the accept state cannot have any outgoing transitions.
*   **Self Loops:** If a state has multiple transitions to itself labeled with different symbols or expressions, combine them using the union operator (|).  For example, if state *q* has a transition to itself labeled 'a' and another labeled 'b', replace them with a single transition labeled 'a|b'.
*   **Avoid Dangling States:** States with no incoming or outgoing transitions don't affect the language. Remove them.

**2.2. Algorithm Steps:**

1.  **Select a State to Eliminate:** Choose any state that is *not* the start state or the accept state. The order you choose states can affect the complexity of the resulting RE. Strategies include choosing states with fewer incoming or outgoing transitions.

2.  **Eliminate the Selected State:**  For each pair of states *q<sub>i</sub>* and *q<sub>j</sub>* where *q<sub>i</sub>* has a transition to the state *q<sub>k</sub>* being eliminated, and *q<sub>k</sub>* has a transition to *q<sub>j</sub>*, construct a direct transition from *q<sub>i</sub>* to *q<sub>j</sub>* that bypasses *q<sub>k</sub>*.

    *   Let:
        *   *R<sub>ik</sub>*:  Regular expression on the transition from state *q<sub>i</sub>* to *q<sub>k</sub>*.
        *   *R<sub>kk</sub>*:  Regular expression on the transition from state *q<sub>k</sub>* to itself (self-loop). If no self loop, *R<sub>kk</sub>* is considered ε (epsilon).
        *   *R<sub>kj</sub>*:  Regular expression on the transition from state *q<sub>k</sub>* to *q<sub>j</sub>*.
        *   *R<sub>ij</sub>*:  Regular expression on the existing transition from state *q<sub>i</sub>* to *q<sub>j</sub>*.  If no transition, *R<sub>ij</sub>* is considered ∅ (empty set).

    *   The new transition from *q<sub>i</sub>* to *q<sub>j</sub>* will be labeled with the regular expression:

        ** *R<sub>ij</sub>*  |  (*R<sub>ik</sub>* (*R<sub>kk</sub>*)<sup>\*</sup> *R<sub>kj</sub>*)**

    *   This formula essentially says: You can either go directly from *q<sub>i</sub>* to *q<sub>j</sub>* (R<sub>ij</sub>), OR you can go from *q<sub>i</sub>* to *q<sub>k</sub>* (R<sub>ik</sub>), then loop on *q<sub>k</sub>* zero or more times (R<sub>kk</sub>\*), and then go from *q<sub>k</sub>* to *q<sub>j</sub>* (R<sub>kj</sub>).

3.  **Remove Eliminated State:** Once you have created the bypassing transitions for all relevant pairs of states, remove state *q<sub>k</sub>* and all its associated transitions.

4.  **Repeat:** Repeat steps 1-3 until only the unique start state and the unique accept state remain.

5.  **Final Regular Expression:** The regular expression on the transition from the start state to the accept state represents the language recognized by the original FA.

**2.3. Example:**

Consider the following FA:

```
    --> (q1) --a--> ((q2))
```

Where q1 is the start state and q2 is the accept state.

1. This FA is already preprocessed. It has a single start state and a single accept state.

2. It has only one state q1 and q2, so there is nothing to eliminate.

3. The final Regular expression will be: `a`.

**2.4. More Complex Example:**

Consider the following FA:

```
    --> (q1) --a--> q2 --b--> ((q3))
          ^       |       ^
          |       ε       |
          --------         --------
```

Where q1 is the start state and q3 is the accept state.

1. **Preprocessing:** Already has unique start and accept states.

2. **Eliminate q2:**

    *   *q<sub>i</sub>* = q1, *q<sub>j</sub>* = q3, *q<sub>k</sub>* = q2
    *   *R<sub>12</sub>* = a
    *   *R<sub>22</sub>* = ε
    *   *R<sub>23</sub>* = b
    *   *R<sub>13</sub>* = ε (implicit, since no direct transition)

    *   New transition from q1 to q3: ε | (aε\*b)  = ε | (ab) = ab  (Note: ε | ab is equivalent to ab, since epsilon doesn't add anything here.)

    The FA now looks like:

    ```
        --> (q1) --ab--> ((q3))
    ```

3. Now only q1 and q3 remain.

4. The final regular expression is `ab`.

### 3. Simplifying the Resulting Regular Expression

After applying the state elimination method, the resulting regular expression can often be quite complex and difficult to understand.  Simplification is crucial. Common simplification techniques include:

*   **Identity Laws:**
    *   `R ε = R` (Concatenation with epsilon)
    *   `ε R = R`
    *   `R ∅ = ∅` (Concatenation with empty set)
    *   `∅ R = ∅`
    *   `R | ∅ = R` (Union with empty set)
    *   `∅ | R = R`
*   **Idempotent Law:** `R | R = R`
*   **Kleene Star Properties:**
    *   `ε* = ε`
    *   `(R*)* = R*`
    *   `R*R* = R*`
    *   `RR* = R*R`
*   **Distributive Laws:**  Applicable in certain cases, but be careful! Regular expression algebra isn't always intuitive.
*   **Algebraic Manipulation:** Look for common patterns and use algebraic identities to reduce complexity. Example: a(b|c) can be simplified to ab | ac

**3.1. Example of Simplification:**

Suppose the state elimination process resulted in the following regular expression: `(a|∅)(ε|b)`.

1.  `(a|∅)` simplifies to `a` (using identity law)
2.  `(ε|b)` remains as is.

So, the expression becomes `a(ε|b)`.

3.  `a(ε|b)` simplifies to `aε | ab = a | ab`. This can be further simplified to `a(ε | b)`. While this might not seem much simpler in this case, it's an example. Sometimes there are many possible equivalent REs.

### 4. Corner Cases and Considerations

*   **Empty Language:** If the FA recognizes the empty language (no strings are accepted), the resulting regular expression will be `∅`.
*   **Epsilon Language:** If the FA only recognizes the empty string (ε), the resulting regular expression will be `ε`.
*   **FA with No Final State:**  This also recognizes the empty language, so the resulting RE is `∅`.
*   **Choice of State Elimination Order:** While the final regular expression will always be equivalent to the FA, the *complexity* of the intermediate expressions (and the final expression before simplification) can be significantly impacted by the order in which you eliminate states.  Choosing states with fewer incoming/outgoing transitions can often lead to simpler expressions.
*   **Multiple paths to the accept state:** This will usually lead to a regular expression containing the union operator (|), indicating that multiple possible patterns are accepted.
*   **Self-loops:**  Crucial for expressing repetitions using the Kleene star operator (\*).

### 5. Practice Questions and Exercises

**Question 1:**

Convert the following FA to a regular expression using the state elimination method:

```
    --> (q1) --a--> q2 --b--> ((q3))
```

Where q1 is the start state and q3 is the accept state.

**Answer:**

1.  **Eliminate q2:**

    *   *R<sub>12</sub>* = a
    *   *R<sub>22</sub>* = ε (no self-loop)
    *   *R<sub>23</sub>* = b
    *   *R<sub>13</sub>* = ∅ (no direct transition)

    *   New transition from q1 to q3: ∅ | (aε\*b) = ∅ | ab = ab

2.  **Result:** The regular expression is `ab`.

**Question 2:**

Convert the following FA to a regular expression using the state elimination method:

```
    --> (q1) --0--> q2 --1--> ((q1))
```

Where q1 is the start and accept state.

**Answer:**

1. Make q1 an initial and final state.  So, we need a new final state. Add ε transition from q1 to the new final state q3.

```
    --> (q1) --0--> q2 --1--> (q1) --ε--> ((q3))
```

2. Eliminate q2

*   *R<sub>12</sub>* = 0
*   *R<sub>22</sub>* = ε (no self-loop)
*   *R<sub>21</sub>* = 1
*   *R<sub>11</sub>* = ε (no direct transition from q1 to q1)

    *   New transition from q1 to q1: ε | (0 ε\* 1) = ε | 01

The FA now looks like:

```
    --> (q1) --ε|01--> (q1) --ε--> ((q3))
```

The Regular Expression is `(01)*`.

**Question 3:**

Simplify the following regular expression: `(a*)*a*`

**Answer:**

`(a*)* = a*` (Kleene star property: `(R*)* = R*`)

So, the expression becomes `a*a*`.

`a*a* = a*` (Kleene star property: `R*R* = R*`)

Therefore, the simplified regular expression is `a*`.

**Question 4:**

What regular expression does the following FA represent?

```
--> (q0) --a--> ((q0))
```

**Answer:**

`a*`

### 6. Important Points to Remember

*   **Equivalence is Key:** The state elimination method provides an *equivalent* regular expression, but not necessarily the *simplest* one without simplification.
*   **Careful with Formulas:** Ensure you apply the correct formula for calculating new transition regular expressions during state elimination.  Double-check the *R<sub>ij</sub>*, *R<sub>ik</sub>*, *R<sub>kk</sub>*, and *R<sub>kj</sub>* values.
*   **Simplification is Essential:**  Always simplify the resulting regular expression after applying the state elimination method to make it more readable and manageable.
*   **Understanding FA Structure:** A good understanding of the FA's structure can help you choose the optimal order for state elimination, leading to a simpler final expression.
*   **Practice, Practice, Practice:**  Converting FAs to regular expressions requires practice. Work through several examples to become comfortable with the method.

By mastering these concepts and techniques, you'll gain a strong understanding of the relationship between finite automata and regular expressions and be able to effectively convert between these formalisms. Good luck!
