---
title: "Simplification of Context-Free Languages (Linz)"
subject: "THEORY OF COMPUTATION"
module: "Module 3: Pushdown Automata (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abc0"
status: "completed"
scrapedAt: "2026-05-20T16:30:10.261Z"
---
# THEORY OF COMPUTATION: Module 3 - Pushdown Automata (Linz)

## Topic: Simplification of Context-Free Languages (Linz)

**Learning Outcomes:**

*   Understand and apply techniques for simplifying Context-Free Grammars (CFGs).
*   Remove useless symbols from a CFG.
*   Remove λ-productions from a CFG.
*   Remove unit productions from a CFG.
*   Convert a CFG to Chomsky Normal Form (CNF).

---

### 1. Introduction to CFG Simplification

*   **Goal:** Transform a given CFG into an equivalent, but simpler, CFG without changing the language it generates. This improves efficiency in parsing and other applications.
*   **Equivalence:** Two CFGs are equivalent if they generate the same language (i.e., L(G1) = L(G2)).
*   **Why Simplify?**
    *   Easier parsing algorithms.
    *   Reduced ambiguity.
    *   Improved efficiency in compiler design.
    *   Foundation for converting to standard forms like Chomsky Normal Form (CNF).

---

### 2. Useless Symbols

*   **Definition:** A symbol (terminal or non-terminal) is *useless* if it cannot be used in any derivation of a terminal string.  There are two types of useless symbols:
    *   **Non-generating symbols:** A symbol that cannot derive any terminal string.
    *   **Unreachable symbols:** A symbol that cannot be reached from the start symbol.

*   **Removing Useless Symbols: Step-by-Step Process**

    **Step 1: Remove Non-Generating Symbols**

    1.  **Identify generating symbols:**  A symbol A is *generating* if A =>* w, where w is a string of terminals.
    2.  **Initial set:** Begin with all terminal symbols and all non-terminals that directly derive terminal strings.
    3.  **Iterative Process:** Add any non-terminal *A* if there exists a production *A -> α* where all symbols in *α* are already in the set of generating symbols.
    4.  **Repeat** until no new symbols are added.
    5.  **Remove:** Remove any non-terminal *not* in the final set of generating symbols, along with all productions that contain those symbols.

    **Step 2: Remove Unreachable Symbols**

    1.  **Identify reachable symbols:** A symbol is *reachable* if it can be derived from the start symbol.
    2.  **Initial set:** The start symbol.
    3.  **Iterative Process:** Add any symbol (terminal or non-terminal) that appears in a production *A -> α*, where A is in the current set of reachable symbols.
    4.  **Repeat** until no new symbols are added.
    5.  **Remove:** Remove any symbol (terminal or non-terminal) *not* in the final set of reachable symbols, along with any productions that contain them.

*   **Important Note:** Perform these steps in the *correct order*. Remove non-generating symbols **first**, and then remove unreachable symbols.

*   **Example:**

    Consider the CFG:
    ```
    S -> aA | b | C
    A -> a
    C -> d
    D -> e
    ```

    1.  **Remove Non-Generating Symbols:**
        *   Generating symbols (initial): `a, b, d`
        *   `A -> a`  => `A` is generating.
        *   `S -> aA | b` => `S` is generating.
        *   `C -> d` => `C` is generating.
        *   `D -> e` => `D` is generating.
        *   Final generating symbols: `a, b, d, S, A, C, D`
        *   Therefore, the CFG is
        ```
        S -> aA | b | C
        A -> a
        C -> d
        D -> e
        ```

    2.  **Remove Unreachable Symbols:**
        *   Reachable symbols (initial): `S`
        *   `S -> aA | b | C` => `a, A, b, C` are reachable.
        *   `A -> a` => `a` is already reachable
        *   `C -> d` => `d` is reachable
        *   Final reachable symbols: `S, a, A, b, C, d`
        *   Remove: D and its production.

    The simplified grammar is:
    ```
    S -> aA | b | C
    A -> a
    C -> d
    ```

---

### 3. Removing λ-Productions

*   **Definition:** A λ-production (or epsilon production) is a production of the form *A -> λ*, where λ represents the empty string.

*   **Why remove λ-productions?** They can complicate parsing and analysis of CFGs.

*   **Procedure:**

    1.  **Identify nullable variables:** A variable *A* is *nullable* if *A =>* λ. The process to find nullable variables is:
        *   **Base case:** Any variable *A* that has a production *A -> λ* is nullable.
        *   **Inductive Step:** If there is a production *A -> B1 B2 ... Bk* and all *B1, B2, ..., Bk* are nullable variables, then *A* is also nullable.
    2.  **For each production *A -> α*, where *α* contains a nullable variable *B*, add a new production *A -> α'*, where *α'* is *α* with *B* removed.**  Do this for *all* possible combinations of removing nullable variables in *α*.
    3.  **Once all new productions are added, remove all productions of the form *A -> λ*.** However, *if the start symbol is nullable, keep a production S -> λ in the grammar.*

*   **Example:**

    Consider the CFG:
    ```
    S -> AB
    A -> aA | λ
    B -> bB | λ
    ```

    1.  **Identify Nullable Variables:**
        *   A and B are nullable (A -> λ and B -> λ)
        *   S -> AB. Since A and B are nullable, S is also nullable.
    2.  **Modify Productions:**
        *   `S -> AB`:  Add `S -> A`, `S -> B`, `S -> λ`.
        *   `A -> aA`: Add `A -> a`.
        *   `B -> bB`: Add `B -> b`.
    3.  **Remove λ-productions:**
        *   Remove `A -> λ`, `B -> λ`, and `S -> λ` but because S is the start symbol we add `S -> λ` back in.

    The simplified grammar is:
    ```
    S -> AB | A | B | λ
    A -> aA | a
    B -> bB | b
    ```

*   **Important Note:** Removing λ-productions may require adding multiple new productions to the grammar to maintain equivalence.

---

### 4. Removing Unit Productions

*   **Definition:** A unit production is a production of the form *A -> B*, where *A* and *B* are non-terminals.

*   **Why remove unit productions?** They can introduce unnecessary steps in derivations.

*   **Procedure:**

    1.  **Identify unit pairs:** A pair of variables *(A, B)* is a unit pair if *A =>* B using only unit productions. This can be calculated by transitive closure:
        *   **Base case:** (A, A) is a unit pair for all non-terminals A.
        *   **Inductive Step:** If (A, B) is a unit pair, and there is a unit production B -> C, then (A, C) is a unit pair.
    2.  **For each unit pair (A, B):**
        *   Find all productions *B -> α*, where *α* is *not* a single non-terminal.
        *   Add the production *A -> α* to the grammar.
    3.  **Remove all unit productions.**

*   **Example:**

    Consider the CFG:
    ```
    S -> A | b
    A -> B
    B -> C
    C -> d
    ```

    1.  **Identify Unit Pairs:**
        *   (S, S), (A, A), (B, B), (C, C) are unit pairs.
        *   A -> B => (A, B) is a unit pair.
        *   B -> C => (B, C) is a unit pair.
        *   A -> B, B -> C => (A, C) is a unit pair.
        *   S -> A => (S, A) is a unit pair.
        *   S -> A, A -> B => (S, B) is a unit pair.
        *   S -> A, A -> B, B -> C => (S, C) is a unit pair.
        *   Unit Pairs: (S,S), (A,A), (B,B), (C,C), (A, B), (B, C), (A, C), (S, A), (S, B), (S, C)
    2.  **Modify Productions:**
        *   (S, A):  Since A -> B, add S -> B.
        *   (S, B):  Since B -> C, add S -> C.
        *   (S, C):  Since C -> d, add S -> d.
        *   (A, B):  Since B -> C, add A -> C.
        *   (A, C):  Since C -> d, add A -> d.
        *   (B, C):  Since C -> d, add B -> d.
    3.  **Remove Unit Productions:** Remove S -> A, A -> B, B -> C.

    The simplified grammar is:
    ```
    S -> b | d | C | B
    A -> d | C
    B -> d
    C -> d
    ```

    Since `C -> d` and `B -> d` and `S -> b | d | C | B` then we have redundant definitions, so these can be combined. We can also remove `A -> C` as useless

    The simplified grammar is:
    ```
    S -> b | d
    A -> d
    B -> d
    C -> d
    ```
    Note: We can simplify this even further and remove A, B, and C, as they don't serve any purpose.

---

### 5. Chomsky Normal Form (CNF)

*   **Definition:** A CFG is in Chomsky Normal Form (CNF) if all productions are in one of the following forms:
    *   *A -> BC*, where *A, B, C* are non-terminals.
    *   *A -> a*, where *A* is a non-terminal and *a* is a terminal.
    *   *S -> λ*, where S is the start symbol and λ represents the empty string (if λ is in the language).

*   **Significance:** CNF provides a standard form for CFGs, which is useful in many algorithms, including the CYK parsing algorithm.

*   **Conversion Procedure:**  Convert to CNF in the following order.
    1. Remove Null productions.
    2. Remove Unit productions.
    3. Remove Useless symbols.
    4. Introduce new non-terminals to handle productions violating CNF.
    5. Replace terminals that appear on the right side of production with a non-terminal.

*   **Steps to Convert to CNF (after removing useless symbols, λ-productions, and unit productions):**

    1.  **Introduce new non-terminals for terminals:**
        *   For each terminal symbol *a* that appears in a production of the form *A -> αaβ*, where *α* and *β* are strings of terminals and non-terminals, introduce a new non-terminal *Na* and the production *Na -> a*.  Then, replace *a* in the original production with *Na*:  *A -> αNaβ*.
    2.  **Break up productions with more than two non-terminals on the right-hand side:**
        *   For each production *A -> B1 B2 ... Bk*, where *k > 2*, introduce new non-terminals *C1, C2, ..., Ck-2* and replace the production with the following set of productions:
            *   *A -> B1 C1*
            *   *C1 -> B2 C2*
            *   ...
            *   *Ck-2 -> Bk-1 Bk*

*   **Example:**

    Convert the following CFG to CNF:
    ```
    S -> aAB
    A -> aB
    B -> b
    ```

    1. **Remove Null, Unit and Useless (already done)**

    2. **Introduce new non-terminals for terminals:**
        *   `S -> aAB`: Add `Na -> a`. Replace with `S -> NaAB`
        *   `A -> aB`:  Replace with `A -> NaB`
        *   `B -> b`: Add `Nb -> b` and replace with `B -> Nb`.
        The grammar is now:
        ```
        S -> NaAB
        A -> NaB
        B -> Nb
        Na -> a
        Nb -> b
        ```

    3. **Break up productions with more than two non-terminals on the right-hand side:**
        *   `S -> NaAB`: Introduce `C1`.  Replace with `S -> NaC1`, `C1 -> AB`.
        The grammar is now:
        ```
        S -> NaC1
        C1 -> AB
        A -> NaB
        B -> Nb
        Na -> a
        Nb -> b
        ```
    4. The final CNF is:
        ```
        S -> NaC1
        C1 -> AB
        A -> NaB
        B -> Nb
        Na -> a
        Nb -> b
        ```

---

### 6. Practice Questions & Exercises

**Question 1:**

Simplify the following CFG by removing useless symbols:

```
S -> AB | C
A -> a
B -> b
C -> dE
D -> c
E -> e
```

**Answer 1:**

1.  **Remove Non-Generating Symbols:**
    *   Generating symbols (initial): `a, b, c, d, e`
    *   `A -> a` => `A` is generating
    *   `B -> b` => `B` is generating
    *   `S -> AB` => `S` is generating
    *   `E -> e` => `E` is generating
    *   `D -> c` => `D` is generating
    *   `C -> dE` => `C` is generating
    *   Final generating symbols: `a, b, c, d, e, S, A, B, C, D, E`

2.  **Remove Unreachable Symbols:**
    *   Reachable symbols (initial): `S`
    *   `S -> AB | C` => `A, B, C` are reachable.
    *   `A -> a` => `a` is reachable.
    *   `B -> b` => `b` is reachable.
    *   `C -> dE` => `d, E` are reachable.
    *   `E -> e` => `e` is reachable.
    *   Final reachable symbols: `S, A, B, C, a, b, d, E, e`
    *   Remove: `D` and its production.

Simplified Grammar:

```
S -> AB | C
A -> a
B -> b
C -> dE
E -> e
```

**Question 2:**

Remove λ-productions from the following CFG:

```
S -> ABA
A -> aA | λ
B -> b | λ
```

**Answer 2:**

1.  **Identify Nullable Variables:** `A, B` are nullable (A -> λ, B -> λ)
    * `S -> ABA`. Thus, S is nullable

2.  **Modify Productions:**
    *   `S -> ABA`: Add `S -> AB`, `S -> BA`, `S -> AA`, `S -> A`, `S -> B`, `S -> λ`.
    *   `A -> aA`: Add `A -> a`.

3.  **Remove λ-productions:** Remove `A -> λ`, `B -> λ`, and add `S -> λ` back in.

Simplified Grammar:

```
S -> ABA | AB | BA | AA | A | B | λ
A -> aA | a
B -> b
```

**Question 3:**

Remove unit productions from the following CFG:

```
S -> A | b
A -> B
B -> C
C -> d
```

**Answer 3:**

1. **Identify Unit Pairs**
    * (S, S), (A, A), (B, B), (C, C)
    * A -> B  => (A, B)
    * B -> C => (B, C)
    * A -> B, B -> C => (A, C)
    * S -> A => (S, A)
    * S -> A, A -> B => (S, B)
    * S -> A, A -> B, B -> C => (S, C)

2. **Modify Productions**
    * (S, A): Since A -> B, add S -> B
    * (S, B): Since B -> C, add S -> C
    * (S, C): Since C -> d, add S -> d
    * (A, B): Since B -> C, add A -> C
    * (A, C): Since C -> d, add A -> d
    * (B, C): Since C -> d, add B -> d

3. **Remove Unit Productions** Remove S -> A, A -> B, B -> C

Simplified Grammar:

```
S -> b | d | C | B
A -> C | d
B -> d
C -> d
```

**Question 4:**

Convert the following CFG to Chomsky Normal Form (CNF):

```
S -> aAbB
A -> aA | a
B -> bB | b
```

**Answer 4:**

1. **Remove Null, Unit, and Useless productions (already done)**

2.  **Introduce new non-terminals for terminals:**
    *   `S -> aAbB`:  `Na -> a`, `Nb -> b`.  `S -> NaANbB`
    *   `A -> aA`: `A -> NaA`
    *   `B -> bB`: `B -> NbB`

    ```
    S -> NaANbB
    A -> NaA | a
    B -> NbB | b
    Na -> a
    Nb -> b
    ```
    Introduce more rules to take care of the terminals in A and B
    ```
    S -> NaANbB
    A -> NaA | Na
    B -> NbB | Nb
    Na -> a
    Nb -> b
    ```

3.  **Break up productions with more than two non-terminals on the right-hand side:**
    *   `S -> NaANbB`: Introduce `C1` and `C2`. `S -> NaC1`, `C1 -> AC2`, `C2 -> NbB`

    ```
    S -> NaC1
    C1 -> AC2
    C2 -> NbB
    A -> NaA | Na
    B -> NbB | Nb
    Na -> a
    Nb -> b
    ```

The final CNF is:

```
S -> NaC1
C1 -> AC2
C2 -> NbB
A -> NaA | Na
B -> NbB | Nb
Na -> a
Nb -> b
```

---

### 7. Important Points to Remember

*   **Order matters:** When simplifying CFGs, the order in which you perform the simplification steps is crucial. The correct order is:
    1.  Remove useless symbols (Non-generating FIRST, then Unreachable)
    2.  Remove λ-productions
    3.  Remove unit productions
*   **Equivalence:** Always ensure that the simplified grammar is equivalent to the original grammar, meaning it generates the same language.
*   **CNF is a specific format:** Ensure all productions adhere to the CNF rules.
*   **Nullable Variables are Critical:**  Correctly identifying nullable variables is crucial for removing lambda productions.
*   **Unit Pairs are Transitive:** Unit pairs are transitive, meaning (A, B) and (B, C) implies (A, C). This is important for removing unit productions.
