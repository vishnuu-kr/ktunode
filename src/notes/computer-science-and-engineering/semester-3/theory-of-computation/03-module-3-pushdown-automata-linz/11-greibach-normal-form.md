---
title: "Greibach normal form"
subject: "THEORY OF COMPUTATION"
module: "Module 3: Pushdown Automata (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abc5"
status: "completed"
scrapedAt: "2026-05-20T16:30:14.032Z"
---
## THEORY OF COMPUTATION - Module 3: Pushdown Automata (Linz) - Greibach Normal Form

**Learning Outcomes:**

*   Understand the definition of Greibach Normal Form (GNF).
*   Convert a given Context-Free Grammar (CFG) into GNF.
*   Recognize the utility of GNF in simplifying parsing algorithms and proofs related to CFGs.

**1. Introduction to Greibach Normal Form (GNF)**

*   **Definition:** A context-free grammar (CFG) is in Greibach Normal Form (GNF) if every production rule is of the form:

    ```
    A -> aα
    ```

    where:

    *   `A` is a non-terminal symbol.
    *   `a` is a terminal symbol.
    *   `α` is a string of zero or more non-terminal symbols (α ∈ V\* where V is the set of non-terminals). In other words, `α` is a sequence of non-terminals, potentially empty.

*   **Key Idea:**  GNF enforces that every derivation step expands a non-terminal into a terminal symbol immediately followed by a (potentially empty) string of non-terminal symbols.

*   **Importance:**

    *   Simplifies parsing algorithms (e.g., CYK algorithm can be simplified further).
    *   Useful in proving certain properties about CFGs.
    *   Can be used to convert CFGs into equivalent Pushdown Automata (PDA).

**2. Conversion to Greibach Normal Form (GNF)**

*   **General Algorithm Outline:**  The conversion process typically involves several steps to eliminate problematic productions and ensure all productions conform to the GNF structure.

    1.  **Eliminate Null Productions (ε-productions):**  Productions of the form `A -> ε`.
    2.  **Eliminate Unit Productions:** Productions of the form `A -> B`, where A and B are non-terminals.
    3.  **Eliminate Useless Symbols:** Symbols that cannot be reached from the start symbol or that cannot derive any terminal string.
    4.  **Eliminate Left Recursion:** Direct (e.g., `A -> Aα`) and indirect (e.g., `A -> Bα`, `B -> Aβ`) left recursion.
    5.  **Substitute Productions to Achieve GNF:**  This is the core step where we rewrite the productions to match the `A -> aα` format.

*   **Detailed Steps and Explanation:**

    *   **Step 1: Eliminate Null Productions (ε-productions)**

        *   **Method:**  For each production `A -> ε`, identify all productions where `A` appears on the right-hand side.  For each of these productions, create a new production with `A` removed.  For example, if we have `B -> CAD`, and `A -> ε`, we add `B -> CD` to the grammar. If `A` is the only symbol, then we have `B -> D` which is fine.
        *   **Important Considerations:**

            *   If the start symbol `S` derives ε, keep `S -> ε`, but it can only be present in the original `S`.
            *   Make sure to repeat the process after adding new productions, as they might also contain nullable variables.
        *   **Example:**
            ```
            Original:
            S -> AB
            A -> a | ε
            B -> b

            After Null Elimination:
            S -> AB | B
            A -> a
            B -> b
            ```

    *   **Step 2: Eliminate Unit Productions**

        *   **Method:** A unit production is of the form `A -> B`. For each non-terminal `A`, find all non-terminals `B` such that `A =>* B` using only unit productions.  Then, for each production `B -> α` (where `α` is *not* a single non-terminal), add the production `A -> α` to the grammar.  Finally, remove all the original unit productions.
        *   **Example:**
            ```
            Original:
            S -> A
            A -> B | a
            B -> C
            C -> b

            After Unit Elimination:
            S -> B | a  // S -> A, A -> B | a, so S -> B | a
            A -> B | a
            B -> C | b  //B -> C, C -> b so B -> b
            C -> b

            After further unit elimination:
            S -> C | a
            A -> C | a
            B -> C | b
            C -> b

            After final unit elimination:
            S -> b | a
            A -> b | a
            B -> b
            C -> b
            ```

    *   **Step 3: Eliminate Useless Symbols**

        *   **Method:**

            1.  **Reachability:** Remove symbols that are not reachable from the start symbol.
            2.  **Generativity:** Remove symbols that cannot derive a string of terminals.
        *   **Example:**
            ```
            Original:
            S -> aA | bB
            A -> cA | d
            B -> eB | f
            C -> g

            After eliminating non-generating symbols:
            S -> aA | bB
            A -> cA | d
            B -> eB | f

            After eliminating unreachable symbols:
            S -> aA | bB
            A -> cA | d
            B -> eB | f
            ```
            In this example, no symbols were eliminated because all are reachable and generate strings.

    *   **Step 4: Eliminate Left Recursion**

        *   **Direct Left Recursion:**  `A -> Aα | β` can be replaced by:

            ```
            A -> βA'
            A' -> αA' | ε
            ```
            However, to get to GNF we will need to rewrite this further. So, it's better to use the general algorithm below.

        *   **General Algorithm for Left Recursion Elimination (for *all* left recursion, direct or indirect):**

            1.  Order the non-terminals: `A1, A2, ..., An`.
            2.  For `i = 1` to `n`:
                3.  For `j = 1` to `i-1`:
                    *   Replace each production `Ai -> Ajγ` with `Ai -> δ1γ | δ2γ | ... | δkγ`, where `Aj -> δ1 | δ2 | ... | δk` are all current productions of `Aj`.
                4.  Eliminate direct left recursion in `Ai` productions (as shown above).

        *   **Example:**
            ```
            Original:
            A -> Aa | b

            After Left Recursion Elimination:
            A -> bA'
            A' -> aA' | ε
            ```

            To get to GNF, more steps are required.

    *   **Step 5: Substitute Productions to Achieve GNF**

        *   **Method:**  After eliminating ε-productions, unit productions, useless symbols, and left recursion, we focus on getting the productions into the form `A -> aα`.
        *   **Techniques:**

            1.  **Introduce New Non-terminals:** If you have a production like `A -> BC`, where `B` and `C` are non-terminals, and the production of `B` is `B -> aD | bE`, then replace `A -> BC` with `A -> (aD)C | (bE)C`, and create auxiliary productions, if necessary, to move non-terminals to the right.
            2.  **Substitution:**  Systematically replace non-terminals at the beginning of the right-hand side with their productions that start with a terminal. Keep doing this until all productions are in GNF.

*   **Complete Conversion Example:**

    ```
    Original Grammar:
    S -> AB
    A -> aA | b
    B -> cB | d

    1. Eliminate Null Productions: (None)
    2. Eliminate Unit Productions: (None)
    3. Eliminate Useless Symbols: (None)
    4. Eliminate Left Recursion in A:
       A -> bA'
       A' -> aA' | ε
    5. Eliminate Left Recursion in B:
       B -> dB'
       B' -> cB' | ε

    Grammar After Eliminating Left Recursion:
    S -> AB
    A -> bA'
    A' -> aA' | ε
    B -> dB'
    B' -> cB' | ε

    6. Eliminate Nulls
       S -> AB | A
       A -> bA'
       A' -> aA'
       B -> dB'
       B' -> cB'

   7. Achieve GNF:
      Introduce auxiliary non-terminals.  Let's replace the non-terminals with terminal-starting productions where possible

      S -> (bA')B | (bA') | A
      A -> bA'
      A' -> aA'
      B -> dB'
      B' -> cB'

      S -> bA'B | bA' | bA'
      A -> bA'
      A' -> aA'
      B -> dB'
      B' -> cB'

      S -> bA'B | bA'
      A -> bA'
      A' -> aA'
      B -> dB'
      B' -> cB'

      This is not in GNF since A' starts with an 'a'. Introduce new production
      We need to create a dummy nonterminal Xa that evaluates to 'a'
      Xa -> a
      Substitute it into the rule for A'

      S -> bA'B | bA'
      A -> bA'
      A' -> Xa A'  //Xa -> a
      Xa -> a
      B -> dB'
      B' -> cB'

      Now, introduce a dummy nonterminal Xb that evaluates to 'b'
      Xb -> b

      Introduce a dummy nonterminal Xc that evaluates to 'c'
      Xc -> c

      Introduce a dummy nonterminal Xd that evaluates to 'd'
      Xd -> d

      Replace productions with Xb, Xa, Xc, Xd.

      S -> Xb A'B | Xb A'
      A -> Xb A'
      A' -> Xa A'
      Xa -> a
      B -> Xd B'
      B' -> Xc B'
      Xb -> b
      Xc -> c
      Xd -> d

      This is still not complete.
      So, more steps are required
      Because we have Xb -> b, we can make S -> bA'B | bA' and A -> bA'

      S -> bA'B | bA'
      A -> bA'
      A' -> aA'
      B -> dB'
      B' -> cB'
      S,A,A', B, B' are nonterminals

      So A'B, A' are string of zero or more nonterminals

      The grammar in GNF is
      S -> bA'B | bA'
      A -> bA'
      A' -> aA'
      B -> dB'
      B' -> cB'

    ```

**3. Utility of Greibach Normal Form (GNF)**

*   **Parsing Simplification:** GNF can simplify parsing algorithms.  For example, in top-down parsing, GNF ensures that at each step, you know exactly one terminal symbol to match.  This eliminates backtracking in some cases.
*   **Proof Techniques:** GNF is used in proofs relating to CFGs, especially when the proof requires inductive arguments on the length of derivations.  The structure of GNF productions simplifies these inductive steps.
*   **Pushdown Automata Construction:**  Converting a CFG to GNF often facilitates the construction of a corresponding PDA.  The structure of GNF rules maps directly to the push and pop operations of the PDA.

**4. Important Points to Remember**

*   The conversion to GNF is a multi-step process.  Don't skip any steps.
*   The order of the steps matters.  Eliminating ε-productions and unit productions *before* eliminating left recursion simplifies the process.
*   The resulting grammar in GNF might be larger and more complex than the original grammar.
*   GNF is not always the most *efficient* representation for all applications, but it's a *standard* form that provides certain analytical advantages.
*   Not all CFGs can be converted into GNF if they generate the empty string but if we remove the epsilon production and convert the grammar in GNF, the converted grammar will generate the same language without the empty string.

**5. Practice Questions/Exercises**

1.  **Convert the following grammar to GNF:**

    ```
    S -> ASA | b
    A -> B | S
    B -> c
    ```

    **Solution:**

    1.  **Eliminate Unit Productions:**
        *   `S -> ASA | b`
        *   `A -> B | S -> c | ASA | b`
        *   `B -> c`

        So, after unit production elimination:
        *   `S -> ASA | b`
        *   `A -> c | ASA | b`
        *   `B -> c`

    2. **Eliminate Left Recursion:**
         `A -> ASA | c | b` has left recursion.

         New rules:
         `A -> cA' | bA'`
         `A' -> ASA' | ε`

         We need to eliminate nullable symbol in A' later on

         So, after eliminating left recursion:

        *   `S -> ASA | b`
        *   `A -> cA' | bA'`
        *   `A' -> ASA' | ε`
        *   `B -> c`

    3. **Eliminate Nulls:**
        *   `S -> ASA | b`
        *   `A -> cA' | bA'`
        *   `A' -> ASA' | AS`
        *   `B -> c`

        After eliminating nulls:

        *   `S -> ASA | b`
        *   `A -> cA' | bA'`
        *   `A' -> ASA' | AS`
        *   `B -> c`

    4. Convert to GNF:
        *   `S -> ASA | b`
        *   `A -> cA' | bA'`
        *   `A' -> ASA' | AS`
        *   `B -> c`
           Introduce Xb = b and Xc = c
        *   `S -> ASA | Xb`
        *   `A -> Xc A' | Xb A'`
        *   `A' -> ASA' | AS`
        *   `B -> Xc`
        *   `Xb -> b`
        *   `Xc -> c`
           Final GNF grammar:
        *   `S -> ASA | b`
        *   `A -> cA' | bA'`
        *   `A' -> ASA' | AS`
        *   `B -> c`

2.  **Why is GNF useful in parsing?**

    **Answer:** GNF ensures that every production begins with a terminal symbol.  This property simplifies parsing because at each step, the parser knows exactly which terminal symbol to expect next.  This can reduce or eliminate backtracking in some parsing algorithms.

3.  **Explain the difference between direct and indirect left recursion and how to eliminate them.**

    **Answer:**

    *   **Direct Left Recursion:** A production of the form `A -> Aα` directly refers to itself on the right-hand side.
    *   **Indirect Left Recursion:** A sequence of productions that eventually leads back to the original non-terminal as the leftmost symbol.  For example: `A -> Bα`, `B -> Cβ`, `C -> Aγ`.

    **Elimination:** Direct left recursion is eliminated by introducing a new non-terminal. Indirect left recursion is eliminated by ordering the nonterminals and using a substitution procedure before eliminating any direct left recursion.

These detailed notes and practice questions should provide a solid understanding of Greibach Normal Form and its role in the theory of computation.  Remember to practice converting CFGs to GNF to solidify your understanding!
