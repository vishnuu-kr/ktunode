---
title: "Context-Free Grammars, Constituency Parsing, Ambiguity, CYK Parsing"
subject: "NATURAL LANGUAGE PROCESSING"
module: "Module 2: Annotating Linguistic Structures"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9e1"
status: "completed"
scrapedAt: "2026-05-20T17:25:29.141Z"
---
# Natural Language Processing - Module 2: Annotating Linguistic Structures

## Topic: Context-Free Grammars, Constituency Parsing, Ambiguity, CYK Parsing

---

### **Learning Outcomes:**

*   Understand the formal definition of a Context-Free Grammar (CFG) and its components.
*   Explain the concept of constituency parsing and its goal.
*   Identify and explain different types of ambiguity in natural language.
*   Understand the principles and algorithm of the CYK parsing method.
*   Apply CFGs to represent syntactic structures of sentences.
*   Be able to parse sentences using the CYK algorithm.

---

### **1. Context-Free Grammars (CFGs)**

**Definition:** A Context-Free Grammar (CFG) is a formal grammar that describes the syntax of a language. It consists of a set of rules that define how to construct valid strings in the language. The name "context-free" means that the application of a production rule depends only on the left-hand side of the rule, not on the context surrounding it.

**Components of a CFG:**

*   **Terminal Symbols ($T$):** A finite set of symbols that represent the actual words or tokens in the language (e.g., "the", "cat", "sits").
*   **Non-terminal Symbols ($N$):** A finite set of symbols that represent syntactic categories or phrases (e.g., S (Sentence), NP (Noun Phrase), VP (Verb Phrase)).
*   **Production Rules ($P$):** A finite set of rules of the form $A \rightarrow \beta$, where $A$ is a non-terminal symbol and $\beta$ is a string of zero or more terminal or non-terminal symbols.
*   **Start Symbol ($S$):** A special non-terminal symbol that represents the root of the parse tree (usually 'S' for Sentence).

**Formal Definition:** A CFG $G$ is a 4-tuple $(T, N, P, S)$

**Example CFG for Simple English Sentences:**

Let's define a CFG for very simple sentences:

*   **Terminals ($T$):** {"the", "cat", "dog", "sat", "on", "mat", "a"}
*   **Non-terminals ($N$):** {S, NP, VP, PP, DET, NOUN, VERB, PREP}
*   **Start Symbol ($S$):** S
*   **Production Rules ($P$):**
    *   $S \rightarrow NP VP$
    *   $NP \rightarrow DET NOUN$
    *   $NP \rightarrow NP PP$
    *   $VP \rightarrow VERB$
    *   $VP \rightarrow VERB NP$
    *   $VP \rightarrow VERB PP$
    *   $PP \rightarrow PREP NP$
    *   $DET \rightarrow \text{"the"}$
    *   $DET \rightarrow \text{"a"}$
    *   $NOUN \rightarrow \text{"cat"}$
    *   $NOUN \rightarrow \text{"dog"}$
    *   $NOUN \rightarrow \text{"mat"}$
    *   $VERB \rightarrow \text{"sat"}$
    *   $PREP \rightarrow \text{"on"}$

**Derivation:**

A derivation is a sequence of applications of production rules, starting from the start symbol, to generate a string of terminal symbols.

**Example Derivation:** "the cat sat on the mat"

$S$
$\Rightarrow NP VP$ (using $S \rightarrow NP VP$)
$\Rightarrow DET NOUN VP$ (using $NP \rightarrow DET NOUN$)
$\Rightarrow \text{"the"} NOUN VP$ (using $DET \rightarrow \text{"the"}$)
$\Rightarrow \text{"the"} \text{"cat"} VP$ (using $NOUN \rightarrow \text{"cat"}$)
$\Rightarrow \text{"the"} \text{"cat"} VERB PP$ (using $VP \rightarrow VERB PP$)
$\Rightarrow \text{"the"} \text{"cat"} \text{"sat"} PP$ (using $VERB \rightarrow \text{"sat"}$)
$\Rightarrow \text{"the"} \text{"cat"} \text{"sat"} PREP NP$ (using $PP \rightarrow PREP NP$)
$\Rightarrow \text{"the"} \text{"cat"} \text{"sat"} \text{"on"} NP$ (using $PREP \rightarrow \text{"on"}$)
$\Rightarrow \text{"the"} \text{"cat"} \text{"sat"} \text{"on"} DET NOUN$ (using $NP \rightarrow DET NOUN$)
$\Rightarrow \text{"the"} \text{"cat"} \text{"sat"} \text{"on"} \text{"the"} NOUN$ (using $DET \rightarrow \text{"the"}$)
$\Rightarrow \text{"the"} \text{"cat"} \text{"sat"} \text{"on"} \text{"the"} \text{"mat"}$ (using $NOUN \rightarrow \text{"mat"}$)

---

### **2. Constituency Parsing**

**Goal:** Constituency parsing, also known as phrase-structure parsing, is the process of analyzing a sentence to determine its constituent structure according to a given grammar (typically a CFG). It aims to identify the hierarchical grouping of words into phrases.

**Output:** The output of constituency parsing is a **parse tree** (or syntactic tree), which visually represents the grammatical structure of a sentence.

**Key Concepts:**

*   **Constituent:** A group of words that function as a single unit in the grammatical structure of a sentence.
*   **Parse Tree:** A tree structure where:
    *   Leaf nodes are terminal symbols (words).
    *   Internal nodes are non-terminal symbols (syntactic categories like NP, VP).
    *   The root node is the start symbol (usually S).
    *   The children of a node represent the constituents that make up that node.

**Example Parse Tree (for "the cat sat on the mat"):**

```
      S
     / \
    NP  VP
   /|\  /|\
 DET NOUN VERB PP
 |   |    |   /|\
"the" "cat" "sat" PREP NP
               |   /|\
              "on" DET NOUN
                   |   |
                  "the" "mat"
```

**Types of Parsers:**

*   **Top-down Parsers:** Start from the start symbol and try to derive the sentence.
*   **Bottom-up Parsers:** Start from the words of the sentence and try to build up to the start symbol.

---

### **3. Ambiguity in Natural Language**

**Definition:** Ambiguity occurs when a sentence or part of a sentence can be interpreted in more than one way. This is a major challenge in NLP.

**Types of Ambiguity:**

*   **Lexical Ambiguity:** A word has multiple meanings.
    *   **Example:** "I saw her **duck**." (Did I see a bird, or did I see her perform the action of ducking?)
    *   **Represented by:** Different leaf nodes with the same word but different possible POS tags or semantic roles. In parsing, it can lead to different NP interpretations if a word can belong to multiple categories.

*   **Syntactic (or Structural) Ambiguity:** A sentence can be parsed in multiple ways, leading to different grammatical structures. This is where CFGs and constituency parsing are crucial.
    *   **Example 1 (Attachment Ambiguity):** "I saw the man with the **telescope**."
        *   **Interpretation 1:** I used a telescope to see the man. (PP "with the telescope" attaches to VP)
        *   **Interpretation 2:** The man I saw had a telescope. (PP "with the telescope" attaches to NP "the man")
    *   **Example 2 (Coordination Ambiguity):** "old men and women"
        *   **Interpretation 1:** Old men and (old) women. (Adjective "old" applies to both "men" and "women")
        *   **Interpretation 2:** Old men and (young/adult) women. (Adjective "old" applies only to "men")
    *   **Example 3 (Scope Ambiguity):** "Every student didn't pass the exam."
        *   **Interpretation 1:** Not every student passed the exam. ($\neg \forall x, \text{Pass}(x)$)
        *   **Interpretation 2:** No student passed the exam. ($\forall x, \neg \text{Pass}(x)$)
    *   **Represented by:** The existence of multiple valid parse trees for the same sentence.

*   **Semantic Ambiguity:** A sentence has multiple meanings due to the way words are combined, even if the syntactic structure is clear.
    *   **Example:** "The chicken is ready to eat."
        *   **Interpretation 1:** The chicken is prepared for consumption.
        *   **Interpretation 2:** The chicken is prepared to consume something.
    *   **Represented by:** Multiple possible semantic interpretations, often linked to lexical or syntactic ambiguities.

*   **Pragmatic Ambiguity:** The meaning of a sentence depends on the context of its use.
    *   **Example:** "Can you pass the salt?"
        *   **Literal meaning:** Is it possible for you to pass the salt?
        *   **Intended meaning:** Please pass the salt.
    *   **Represented by:** Contextual factors influencing meaning.

**Importance for NLP:** Handling ambiguity is fundamental for accurate language understanding. Parsers need to be able to generate all possible interpretations or select the most plausible one.

---

### **4. CYK Parsing**

**What is CYK?** The Cocke-Younger-Kasami (CYK) algorithm is a dynamic programming algorithm used for parsing strings of a language generated by a CFG. It is a **bottom-up parser**.

**Requirement for CYK:** The CFG must be in **Chomsky Normal Form (CNF)**.

**Chomsky Normal Form (CNF):** A CFG is in CNF if all its production rules are of one of the following two forms:
1.  $A \rightarrow BC$ (A non-terminal derives two non-terminals)
2.  $A \rightarrow a$ (A non-terminal derives a single terminal)

**How to Convert a CFG to CNF:**
1.  **Eliminate $\epsilon$-productions:** Rules of the form $A \rightarrow \epsilon$.
2.  **Eliminate unit productions:** Rules of the form $A \rightarrow B$.
3.  **Convert remaining rules:**
    *   $A \rightarrow X_1 X_2 \ldots X_n$ (where $n > 2$): Break into $A \rightarrow X_1 Y_1$, $Y_1 \rightarrow X_2 Y_2, \ldots, Y_{n-2} \rightarrow X_{n-1} X_n$.
    *   $A \rightarrow \text{terminal}$: Ensure terminals are only on the right side of single non-terminal productions. If a rule is $A \rightarrow w_1 w_2$, introduce new non-terminals for each terminal: $A \rightarrow X_1 X_2$, $X_1 \rightarrow w_1$, $X_2 \rightarrow w_2$.

**CYK Algorithm Steps:**

Given a sentence $w = w_1w_2\ldots w_n$ and a CFG in CNF:

1.  **Initialization:** Create a table (or matrix) $P$ of size $n \times n$.
2.  **Fill the first row:** For each word $w_i$ in the sentence (from $i=1$ to $n$), and for each non-terminal $A$ such that $A \rightarrow w_i$ is a rule in the grammar, add $A$ to $P[i, 1]$.
    *   $P[i, 1]$ represents the set of non-terminals that can generate the substring $w_i$.
3.  **Fill the rest of the table:** Iterate through substring lengths $l$ from 2 to $n$. For each starting position $i$ from 1 to $n-l+1$:
    *   Let the substring be $w_i \ldots w_{i+l-1}$.
    *   For each split point $k$ from 1 to $l-1$:
        *   Consider the two sub-problems: $w_i \ldots w_{i+k-1}$ and $w_{i+k} \ldots w_{i+l-1}$.
        *   For every rule $A \rightarrow BC$ in the grammar:
            *   If $B$ is in $P[i, k]$ and $C$ is in $P[i+k, l-k]$, then add $A$ to $P[i, l]$.
    *   $P[i, l]$ represents the set of non-terminals that can generate the substring $w_i \ldots w_{i+l-1}$.
4.  **Check for successful parse:** After filling the table, check if the start symbol $S$ is in $P[1, n]$. If it is, the sentence is parsable by the grammar.

**CYK Table Structure:**

The table $P$ is typically indexed as $P[i, j]$, where $i$ is the starting position of the substring in the sentence, and $j$ is the length of the substring.
*   $P[i, j]$ = set of non-terminals that can generate the substring $w_i \ldots w_{i+j-1}$.

**Example CYK Parsing:**

Let's use the following CFG in CNF:

*   $S \rightarrow AB$
*   $A \rightarrow BC$
*   $A \rightarrow \text{"the"}$
*   $B \rightarrow \text{"cat"}$
*   $B \rightarrow \text{"sat"}$
*   $C \rightarrow \text{"on"}$

Sentence: "the cat sat" ($n=3$)

**Initialization ($l=1$):**

*   $w_1 = \text{"the"}$: $P[1, 1] = \{A\}$ (since $A \rightarrow \text{"the"}$)
*   $w_2 = \text{"cat"}$: $P[2, 1] = \{B\}$ (since $B \rightarrow \text{"cat"}$)
*   $w_3 = \text{"sat"}$: $P[3, 1] = \{B\}$ (since $B \rightarrow \text{"sat"}$)

**Table:**

| i\j | 1    | 2     | 3     |
| :-- | :--- | :---- | :---- |
| 1   | {A}  |       |       |
| 2   | {B}  |       |       |
| 3   | {B}  |       |       |

**Filling for $l=2$:**

*   **Substring $w_1w_2$ ("the cat"):**
    *   $i=1, l=2$. Substring $w_1w_2$. Split point $k=1$.
    *   Left part: $w_1$ ($P[1, 1] = \{A\}$). Right part: $w_2$ ($P[2, 1] = \{B\}$).
    *   Check rules $X \rightarrow YZ$:
        *   Is there a rule $X \rightarrow AB$? No.
        *   Are there rules $A \rightarrow BC$? No, wait, the rule is $S \rightarrow AB$.
        *   For rule $S \rightarrow AB$: If $A \in P[1, 1]$ and $B \in P[2, 1]$, add $S$ to $P[1, 2]$.
        *   $A \in \{A\}$ is true. $B \in \{B\}$ is true. So, $S \in P[1, 2]$.
    *   $P[1, 2] = \{S\}$

*   **Substring $w_2w_3$ ("cat sat"):**
    *   $i=2, l=2$. Substring $w_2w_3$. Split point $k=1$.
    *   Left part: $w_2$ ($P[2, 1] = \{B\}$). Right part: $w_3$ ($P[3, 1] = \{B\}$).
    *   Check rules $X \rightarrow YZ$:
        *   For rule $A \rightarrow BC$: If $B \in P[2, 1]$ and $C \in P[3, 1]$, add $A$ to $P[2, 2]$.
        *   $B \in \{B\}$ is true. But $C$ is not in $P[3, 1]$ (which is $\{B\}$). So this rule doesn't apply.
        *   We need a rule $A \rightarrow BB$ to apply here. Let's assume such a rule exists for demonstration, or we need to convert our grammar to CNF more carefully.
        *   *Correction:* The grammar must be in CNF. Let's assume the grammar is modified slightly for this example.

Let's use a simpler CNF grammar and sentence.
Grammar (CNF):
*   $S \rightarrow NP VP$
*   $NP \rightarrow DET N$
*   $VP \rightarrow V$
*   $DET \rightarrow \text{"the"}$
*   $N \rightarrow \text{"cat"}$
*   $V \rightarrow \text{"sat"}$

Sentence: "the cat sat" ($n=3$)

**Initialization ($l=1$):**
*   $w_1 = \text{"the"}$: $P[1, 1] = \{DET\}$
*   $w_2 = \text{"cat"}$: $P[2, 1] = \{N\}$
*   $w_3 = \text{"sat"}$: $P[3, 1] = \{V\}$

**Table:**

| i\j | 1    | 2     | 3     |
| :-- | :--- | :---- | :---- |
| 1   | {DET}|       |       |
| 2   | {N}  |       |       |
| 3   | {V}  |       |       |

**Filling for $l=2$:**

*   **Substring $w_1w_2$ ("the cat"):**
    *   $i=1, l=2$. Substring $w_1w_2$. Split point $k=1$.
    *   Left part: $w_1$ ($P[1, 1] = \{DET\}$). Right part: $w_2$ ($P[2, 1] = \{N\}$).
    *   Check rule $NP \rightarrow DET N$:
        *   $DET \in P[1, 1]$ and $N \in P[2, 1]$ are true.
        *   Add $NP$ to $P[1, 2]$.
    *   $P[1, 2] = \{NP\}$

*   **Substring $w_2w_3$ ("cat sat"):**
    *   $i=2, l=2$. Substring $w_2w_3$. Split point $k=1$.
    *   Left part: $w_2$ ($P[2, 1] = \{N\}$). Right part: $w_3$ ($P[3, 1] = \{V\}$).
    *   Check rule $S \rightarrow NP VP$: No direct match for $N$ and $V$.
    *   Check rule $VP \rightarrow V$: Does not fit.
    *   There are no rules of the form $X \rightarrow N V$ or $X \rightarrow V N$. For this grammar, $P[2, 2]$ will be empty.

**Table after $l=2$:**

| i\j | 1    | 2     | 3     |
| :-- | :--- | :---- | :---- |
| 1   | {DET}| {NP}  |       |
| 2   | {N}  | {}    |       |
| 3   | {V}  |       |       |

**Filling for $l=3$:**

*   **Substring $w_1w_2w_3$ ("the cat sat"):**
    *   $i=1, l=3$. Substring $w_1w_3$. Split points $k=1, 2$.
    *   **Split at $k=1$:**
        *   Left part: $w_1$ ($P[1, 1] = \{DET\}$). Right part: $w_2w_3$ ($P[2, 2] = \{\}$).
        *   No rules $X \rightarrow DET Y$ or $X \rightarrow Y DET$ apply if $Y$ is empty.
    *   **Split at $k=2$:**
        *   Left part: $w_1w_2$ ($P[1, 2] = \{NP\}$). Right part: $w_3$ ($P[3, 1] = \{V\}$).
        *   Check rule $S \rightarrow NP VP$: We need a rule $VP \rightarrow V$.
        *   $NP \in P[1, 2]$ is true.
        *   Can $V$ derive $V$? Yes, via the rule $VP \rightarrow V$.
        *   So, if $NP \in P[1, 2]$ and $VP \in P[3, 1]$ (where $VP$ can be derived from $V$ via $VP \rightarrow V$), add $S$ to $P[1, 3]$.
        *   In a strict CYK implementation, we'd pre-compute the "can derive" relationship or ensure all non-terminals are present on the right-hand side for length 1. With the given CNF, $V$ is terminal. We need a rule like $VP \rightarrow V$.
        *   *Refinement:* The CYK algorithm checks for $B \in P[i, k]$ and $C \in P[i+k, l-k]$. If our rule is $S \rightarrow NP VP$, then $B$ must be $NP$ and $C$ must be $VP$. $P[3, 1]$ contains $V$. To make this work, we'd need a rule $VP \rightarrow V$ and then check if $VP \in P[3, 1]$. In this case, $P[3, 1]$ has $V$, not $VP$.

**Let's adjust the CNF grammar and rules to make it a complete example:**

Grammar (CNF):
*   $S \rightarrow NP VP$
*   $NP \rightarrow DET N$
*   $VP \rightarrow V$
*   $DET \rightarrow \text{"the"}$
*   $N \rightarrow \text{"cat"}$
*   $V \rightarrow \text{"sat"}$

Sentence: "the cat sat"

**Table:**

| i\j | 1     | 2     | 3     |
| :-- | :---- | :---- | :---- |
| 1   | {DET} | {NP}  | {S}   |
| 2   | {N}   | {}    |       |
| 3   | {V}   |       |       |

**Re-evaluation of $l=3$, $i=1$, $k=2$:**

*   Left part: $w_1w_2$ ($P[1, 2] = \{NP\}$).
*   Right part: $w_3$ ($P[3, 1] = \{V\}$).
*   We are looking for a rule $X \rightarrow Y Z$.
*   Consider rule $S \rightarrow NP VP$. Here $Y=NP$, $Z=VP$.
*   We have $NP \in P[1, 2]$.
*   We need to see if $VP$ can generate $w_3$. $P[3, 1]$ contains $V$.
*   If there's a rule $VP \rightarrow V$, and $V \in P[3, 1]$, then $VP$ can generate $w_3$.
*   If $NP \in P[1, 2]$ and $VP \in P[3, 1]$ (where $VP$ can be derived from $V$), then $S \in P[1, 3]$.
*   **Crucial Point for CYK:** $P[i, j]$ should store the set of non-terminals that can *directly* generate the substring of length $j$ starting at $i$. The rule $S \rightarrow NP VP$ requires $NP$ and $VP$. $P[1, 2]$ has $NP$. $P[3, 1]$ has $V$. To match $S \rightarrow NP VP$, we need $VP$ to be in $P[3, 1]$. This is only possible if there's a rule $VP \rightarrow V$.
*   If the grammar is strictly in CNF, $V$ is a terminal. The rule $VP \rightarrow V$ is NOT in CNF unless $VP$ is also a terminal, which is not the case.
*   **Correct CNF Application:** For $S \rightarrow NP VP$, we check if $NP \in P[1, 2]$ and $VP \in P[3, 1]$. Since $P[3, 1]$ contains $V$, not $VP$, $S \rightarrow NP VP$ cannot be applied directly.

**Let's take a different example that perfectly fits CNF:**

Grammar (CNF):
*   $S \rightarrow AA$
*   $A \rightarrow AB$
*   $A \rightarrow \text{"a"}$
*   $B \rightarrow \text{"b"}$

Sentence: "a a b" ($n=3$)

**Initialization ($l=1$):**
*   $w_1 = \text{"a"}$: $P[1, 1] = \{A\}$
*   $w_2 = \text{"a"}$: $P[2, 1] = \{A\}$
*   $w_3 = \text{"b"}$: $P[3, 1] = \{B\}$

**Table:**

| i\j | 1    | 2    | 3    |
| :-- | :--- | :--- | :--- |
| 1   | {A}  |      |      |
| 2   | {A}  |      |      |
| 3   | {B}  |      |      |

**Filling for $l=2$:**

*   **Substring $w_1w_2$ ("a a"):**
    *   $i=1, l=2$. Split $k=1$. Left: $P[1, 1] = \{A\}$. Right: $P[2, 1] = \{A\}$.
    *   Rule $A \rightarrow AB$: We need $A \in P[1, 1]$ and $B \in P[2, 1]$. $A \in \{A\}$, but $B \notin \{A\}$. No.
    *   Rule $S \rightarrow AA$: We need $A \in P[1, 1]$ and $A \in P[2, 1]$. Both true. Add $S$ to $P[1, 2]$.
    *   $P[1, 2] = \{S\}$

*   **Substring $w_2w_3$ ("a b"):**
    *   $i=2, l=2$. Split $k=1$. Left: $P[2, 1] = \{A\}$. Right: $P[3, 1] = \{B\}$.
    *   Rule $A \rightarrow AB$: We need $A \in P[2, 1]$ and $B \in P[3, 1]$. Both true. Add $A$ to $P[2, 2]$.
    *   $P[2, 2] = \{A\}$

**Table after $l=2$:**

| i\j | 1    | 2    | 3    |
| :-- | :--- | :--- | :--- |
| 1   | {A}  | {S}  |      |
| 2   | {A}  | {A}  |      |
| 3   | {B}  |      |      |

**Filling for $l=3$:**

*   **Substring $w_1w_2w_3$ ("a a b"):**
    *   $i=1, l=3$. Split $k=1, 2$.
    *   **Split at $k=1$:**
        *   Left: $P[1, 1] = \{A\}$. Right: $P[2, 2] = \{A\}$.
        *   Rule $S \rightarrow AA$: We need $A \in P[1, 1]$ and $A \in P[2, 2]$. Both true. Add $S$ to $P[1, 3]$.
        *   Rule $A \rightarrow AB$: We need $A \in P[1, 1]$ and $B \in P[2, 2]$. $A \in \{A\}$, but $B \notin \{A\}$. No.
        *   So, $S \in P[1, 3]$ from this split.
    *   **Split at $k=2$:**
        *   Left: $P[1, 2] = \{S\}$. Right: $P[3, 1] = \{B\}$.
        *   Rule $S \rightarrow AA$: We need $A \in P[1, 2]$ and $A \in P[3, 1]$. $A \notin \{S\}$, and $A \notin \{B\}$. No.
        *   Rule $A \rightarrow AB$: We need $A \in P[1, 2]$ and $B \in P[3, 1]$. $A \notin \{S\}$, but $B \in \{B\}$. No.

**Table after $l=3$:**

| i\j | 1    | 2    | 3    |
| :-- | :--- | :--- | :--- |
| 1   | {A}  | {S}  | {S}  |
| 2   | {A}  | {A}  |      |
| 3   | {B}  |      |      |

**Result:** $S \in P[1, 3]$. Therefore, the sentence "a a b" is parsable by this grammar.

**Reconstructing the Parse Tree:** This is done by storing back-pointers in the table, indicating which rule and split point yielded each entry.

**Advantages of CYK:**
*   Guaranteed to find a parse if one exists for a CNF grammar.
*   Efficient for grammars in CNF, with a time complexity of $O(n^3 \cdot |G|)$, where $n$ is the sentence length and $|G|$ is the size of the grammar.

**Disadvantages of CYK:**
*   Requires the grammar to be in Chomsky Normal Form, which can be a complex conversion.
*   Not directly suitable for grammars that are not in CNF.

---

### **5. Practice Questions and Exercises**

**Question 1:**
Define the four components of a Context-Free Grammar.

**Answer 1:**
A CFG is defined by four components:
1.  **Terminal Symbols ($T$):** The basic building blocks of the language (words/tokens).
2.  **Non-terminal Symbols ($N$):** Syntactic categories or phrases that can be rewritten.
3.  **Production Rules ($P$):** Rules of the form $A \rightarrow \beta$ that specify how non-terminals can be rewritten.
4.  **Start Symbol ($S$):** A distinguished non-terminal from which all derivations begin.

---

**Question 2:**
Consider the following CFG:
$S \rightarrow NP VP$
$NP \rightarrow DET N$
$VP \rightarrow V$
$DET \rightarrow \text{"a"}$
$N \rightarrow \text{"dog"}$
$V \rightarrow \text{"barks"}$

Derive the sentence "a dog barks" using this grammar.

**Answer 2:**
$S$
$\Rightarrow NP VP$ (using $S \rightarrow NP VP$)
$\Rightarrow DET N VP$ (using $NP \rightarrow DET N$)
$\Rightarrow \text{"a"} N VP$ (using $DET \rightarrow \text{"a"}$)
$\Rightarrow \text{"a"} \text{"dog"} VP$ (using $N \rightarrow \text{"dog"}$)
$\Rightarrow \text{"a"} \text{"dog"} V$ (using $VP \rightarrow V$)
$\Rightarrow \text{"a"} \text{"dog"} \text{"barks"}$ (using $V \rightarrow \text{"barks"}$)

---

**Question 3:**
Provide an example of syntactic ambiguity and explain the two different interpretations.

**Answer 3:**
**Example:** "The students read the book on the table."

**Interpretations:**
1.  **The book is on the table:** The prepositional phrase "on the table" modifies "the book".
    *   Parse structure: `[The students] [read [the book [on the table]]]`
2.  **The students are on the table:** The prepositional phrase "on the table" modifies "read" (or the action of reading).
    *   Parse structure: `[The students] [read [the book] [on the table]]`

---

**Question 4:**
Is the following sentence syntactically ambiguous? If so, explain why.
"I saw the girl with the binoculars."

**Answer 4:**
Yes, the sentence is syntactically ambiguous.

*   **Interpretation 1:** The binoculars were used by "me" to see the girl. The PP "with the binoculars" attaches to the VP "saw the girl".
    *   `[I] [saw [the girl [with the binoculars]]]`
*   **Interpretation 2:** The girl whom "I" saw was in possession of binoculars. The PP "with the binoculars" attaches to the NP "the girl".
    *   `[I] [saw [the girl [with the binoculars]]]`

---

**Question 5:**
Consider the following grammar (already in CNF):
*   $S \rightarrow AA$
*   $A \rightarrow BB$
*   $B \rightarrow \text{"a"}$

Parse the sentence "a a a" using the CYK algorithm. Show the CYK table.

**Answer 5:**

Sentence: "a a a" ($n=3$)

**Grammar (CNF):**
*   $S \rightarrow AA$
*   $A \rightarrow BB$
*   $B \rightarrow \text{"a"}$

**Initialization ($l=1$):**
*   $w_1 = \text{"a"}$: $P[1, 1] = \{B\}$
*   $w_2 = \text{"a"}$: $P[2, 1] = \{B\}$
*   $w_3 = \text{"a"}$: $P[3, 1] = \{B\}$

**Table:**

| i\j | 1    | 2    | 3    |
| :-- | :--- | :--- | :--- |
| 1   | {B}  |      |      |
| 2   | {B}  |      |      |
| 3   | {B}  |      |      |

**Filling for $l=2$:**

*   **Substring $w_1w_2$ ("a a"):**
    *   $i=1, l=2$. Split $k=1$. Left: $P[1, 1] = \{B\}$. Right: $P[2, 1] = \{B\}$.
    *   Rule $A \rightarrow BB$: We need $B \in P[1, 1]$ and $B \in P[2, 1]$. Both true. Add $A$ to $P[1, 2]$.
    *   $P[1, 2] = \{A\}$

*   **Substring $w_2w_3$ ("a a"):**
    *   $i=2, l=2$. Split $k=1$. Left: $P[2, 1] = \{B\}$. Right: $P[3, 1] = \{B\}$.
    *   Rule $A \rightarrow BB$: We need $B \in P[2, 1]$ and $B \in P[3, 1]$. Both true. Add $A$ to $P[2, 2]$.
    *   $P[2, 2] = \{A\}$

**Table after $l=2$:**

| i\j | 1    | 2    | 3    |
| :-- | :--- | :--- | :--- |
| 1   | {B}  | {A}  |      |
| 2   | {B}  | {A}  |      |
| 3   | {B}  |      |      |

**Filling for $l=3$:**

*   **Substring $w_1w_2w_3$ ("a a a"):**
    *   $i=1, l=3$. Split $k=1, 2$.
    *   **Split at $k=1$:**
        *   Left: $P[1, 1] = \{B\}$. Right: $P[2, 2] = \{A\}$.
        *   Rule $S \rightarrow AA$: We need $A \in P[1, 1]$ and $A \in P[2, 2]$. $A \notin \{B\}$, but $A \in \{A\}$. No.
        *   Rule $A \rightarrow BB$: We need $B \in P[1, 1]$ and $B \in P[2, 2]$. $B \in \{B\}$, but $B \notin \{A\}$. No.
    *   **Split at $k=2$:**
        *   Left: $P[1, 2] = \{A\}$. Right: $P[3, 1] = \{B\}$.
        *   Rule $S \rightarrow AA$: We need $A \in P[1, 2]$ and $A \in P[3, 1]$. $A \in \{A\}$, but $A \notin \{B\}$. No.
        *   Rule $A \rightarrow BB$: We need $B \in P[1, 2]$ and $B \in P[3, 1]$. $B \notin \{A\}$, but $B \in \{B\}$. No.
        *   Wait, let's recheck the rules and splits carefully.
        *   We are looking for non-terminals that can derive the substring $w_i...w_{i+j-1}$.

**Revisiting $l=3$ calculation for "a a a" with grammar $S \rightarrow AA$, $A \rightarrow BB$, $B \rightarrow \text{"a"}$:**

*   **Substring $w_1w_2w_3$ ("a a a"):**
    *   $i=1, l=3$.
    *   **Split at $k=1$:**
        *   Substring 1: $w_1$ (length 1, start 1). $P[1, 1] = \{B\}$.
        *   Substring 2: $w_2w_3$ (length 2, start 2). $P[2, 2] = \{A\}$.
        *   Consider rules $X \rightarrow YZ$:
            *   $S \rightarrow AA$: Need $A \in P[1, 1]$ (false, it's $B$) and $A \in P[2, 2]$ (true). No match.
            *   $A \rightarrow BB$: Need $B \in P[1, 1]$ (true) and $B \in P[2, 2]$ (false, it's $A$). No match.
    *   **Split at $k=2$:**
        *   Substring 1: $w_1w_2$ (length 2, start 1). $P[1, 2] = \{A\}$.
        *   Substring 2: $w_3$ (length 1, start 3). $P[3, 1] = \{B\}$.
        *   Consider rules $X \rightarrow YZ$:
            *   $S \rightarrow AA$: Need $A \in P[1, 2]$ (true) and $A \in P[3, 1]$ (false, it's $B$). No match.
            *   $A \rightarrow BB$: Need $B \in P[1, 2]$ (false, it's $A$) and $B \in P[3, 1]$ (true). No match.

**Result:** $S$ is NOT in $P[1, 3]$. The sentence "a a a" is NOT parsable by this specific grammar.

**Let's try a grammar that CAN parse "a a a":**
Grammar (CNF):
*   $S \rightarrow AB$
*   $A \rightarrow \text{"a"}$
*   $B \rightarrow \text{"a"}$
*   $S \rightarrow SB$ (This rule is not CNF, needs conversion)

Let's use a simpler CNF that makes sense for "a a a":
Grammar (CNF):
*   $S \rightarrow AA$
*   $A \rightarrow \text{"a"}$

Sentence: "a a a" ($n=3$)

**Initialization ($l=1$):**
*   $w_1 = \text{"a"}$: $P[1, 1] = \{A\}$
*   $w_2 = \text{"a"}$: $P[2, 1] = \{A\}$
*   $w_3 = \text{"a"}$: $P[3, 1] = \{A\}$

**Table:**

| i\j | 1    | 2    | 3    |
| :-- | :--- | :--- | :--- |
| 1   | {A}  |      |      |
| 2   | {A}  |      |      |
| 3   | {A}  |      |      |

**Filling for $l=2$:**

*   **Substring $w_1w_2$ ("a a"):**
    *   $i=1, l=2$. Split $k=1$. Left: $P[1, 1] = \{A\}$. Right: $P[2, 1] = \{A\}$.
    *   Rule $S \rightarrow AA$: Need $A \in P[1, 1]$ and $A \in P[2, 1]$. Both true. Add $S$ to $P[1, 2]$.
    *   $P[1, 2] = \{S\}$

*   **Substring $w_2w_3$ ("a a"):**
    *   $i=2, l=2$. Split $k=1$. Left: $P[2, 1] = \{A\}$. Right: $P[3, 1] = \{A\}$.
    *   Rule $S \rightarrow AA$: Need $A \in P[2, 1]$ and $A \in P[3, 1]$. Both true. Add $S$ to $P[2, 2]$.
    *   $P[2, 2] = \{S\}$

**Table after $l=2$:**

| i\j | 1    | 2    | 3    |
| :-- | :--- | :--- | :--- |
| 1   | {A}  | {S}  |      |
| 2   | {A}  | {S}  |      |
| 3   | {A}  |      |      |

**Filling for $l=3$:**

*   **Substring $w_1w_2w_3$ ("a a a"):**
    *   $i=1, l=3$. Split $k=1, 2$.
    *   **Split at $k=1$:**
        *   Left: $P[1, 1] = \{A\}$. Right: $P[2, 2] = \{S\}$.
        *   Rule $S \rightarrow AA$: Need $A \in P[1, 1]$ (true) and $A \in P[2, 2]$ (false, it's $S$). No.
    *   **Split at $k=2$:**
        *   Left: $P[1, 2] = \{S\}$. Right: $P[3, 1] = \{A\}$.
        *   Rule $S \rightarrow AA$: Need $A \in P[1, 2]$ (false, it's $S$) and $A \in P[3, 1]$ (true). No.

**Result:** $S$ is NOT in $P[1, 3]$. This grammar also doesn't parse "a a a". This highlights the importance of the grammar's rules.

**Let's use a grammar that generates "a a a" properly in CNF:**
Grammar: $S \rightarrow AA$, $A \rightarrow \text{"a"}$.
If we want to generate "a a a", we might need something like $S \rightarrow S A$ which is not CNF.
A grammar that can generate "a a a" could be: $S \rightarrow SS$, $S \rightarrow \text{"a"}$. To get CNF: $S \rightarrow SS$, $S \rightarrow \text{"a"}$. This is not CNF.
A CNF grammar for "a a a" would require multiple 'A' symbols to be multiplied.
Example: $S \rightarrow AA$, $A \rightarrow AB$, $B \rightarrow \text{"a"}$, $A \rightarrow \text{"a"}$.
This still doesn't directly get "a a a".

Let's use the grammar:
$S \rightarrow AA$
$A \rightarrow BA$
$A \rightarrow \text{"a"}$
$B \rightarrow \text{"a"}$

Sentence: "a a a"

**Initialization ($l=1$):**
*   $w_1 = \text{"a"}$: $P[1, 1] = \{A, B\}$
*   $w_2 = \text{"a"}$: $P[2, 1] = \{A, B\}$
*   $w_3 = \text{"a"}$: $P[3, 1] = \{A, B\}$

**Table:**

| i\j | 1      | 2      | 3      |
| :-- | :----- | :----- | :----- |
| 1   | {A, B} |        |        |
| 2   | {A, B} |        |        |
| 3   | {A, B} |        |        |

**Filling for $l=2$:**

*   **Substring $w_1w_2$ ("a a"):**
    *   $i=1, l=2$. Split $k=1$. Left: $P[1, 1] = \{A, B\}$. Right: $P[2, 1] = \{A, B\}$.
    *   Rule $S \rightarrow AA$: Need $A \in P[1, 1]$ (true) and $A \in P[2, 1]$ (true). Add $S$ to $P[1, 2]$.
    *   Rule $A \rightarrow BA$: Need $B \in P[1, 1]$ (true) and $A \in P[2, 1]$ (true). Add $A$ to $P[1, 2]$.
    *   $P[1, 2] = \{S, A\}$

*   **Substring $w_2w_3$ ("a a"):**
    *   $i=2, l=2$. Split $k=1$. Left: $P[2, 1] = \{A, B\}$. Right: $P[3, 1] = \{A, B\}$.
    *   Rule $S \rightarrow AA$: Need $A \in P[2, 1]$ (true) and $A \in P[3, 1]$ (true). Add $S$ to $P[2, 2]$.
    *   Rule $A \rightarrow BA$: Need $B \in P[2, 1]$ (true) and $A \in P[3, 1]$ (true). Add $A$ to $P[2, 2]$.
    *   $P[2, 2] = \{S, A\}$

**Table after $l=2$:**

| i\j | 1      | 2      | 3      |
| :-- | :----- | :----- | :----- |
| 1   | {A, B} | {S, A} |        |
| 2   | {A, B} | {S, A} |        |
| 3   | {A, B} |        |        |

**Filling for $l=3$:**

*   **Substring $w_1w_2w_3$ ("a a a"):**
    *   $i=1, l=3$. Split $k=1, 2$.
    *   **Split at $k=1$:**
        *   Left: $P[1, 1] = \{A, B\}$. Right: $P[2, 2] = \{S, A\}$.
        *   Rule $S \rightarrow AA$: Need $A \in P[1, 1]$ (true) and $A \in P[2, 2]$ (true). Add $S$ to $P[1, 3]$.
        *   Rule $A \rightarrow BA$: Need $B \in P[1, 1]$ (true) and $A \in P[2, 2]$ (true). Add $A$ to $P[1, 3]$.
    *   **Split at $k=2$:**
        *   Left: $P[1, 2] = \{S, A\}$. Right: $P[3, 1] = \{A, B\}$.
        *   Rule $S \rightarrow AA$: Need $A \in P[1, 2]$ (true) and $A \in P[3, 1]$ (true). Add $S$ to $P[1, 3]$.
        *   Rule $A \rightarrow BA$: Need $B \in P[1, 2]$ (false, it's $S$) and $A \in P[3, 1]$ (true). No.

**Final $P[1, 3]$:** $\{S, A\}$
Since $S \in P[1, 3]$, the sentence "a a a" is parsable by this grammar.

**CYK Table:**

| i\j | 1      | 2      | 3      |
| :-- | :----- | :----- | :----- |
| 1   | {A, B} | {S, A} | {S, A} |
| 2   | {A, B} | {S, A} |        |
| 3   | {A, B} |        |        |

---

### **6. Important Points to Remember**

*   **CFGs** provide a formal way to describe the syntax of a language.
*   **Constituency parsing** aims to identify the hierarchical phrase structure of sentences, resulting in parse trees.
*   **Ambiguity** is a major challenge in NLP, with different types like lexical, syntactic, semantic, and pragmatic ambiguity. Syntactic ambiguity is directly addressed by parsing.
*   **CYK algorithm** is a bottom-up dynamic programming parser that requires the grammar to be in **Chomsky Normal Form (CNF)**.
*   The time complexity of CYK is $O(n^3)$ for a fixed grammar.
*   Understanding the Chomsky Normal Form is crucial for applying the CYK algorithm correctly.
*   Parsing algorithms can be used to detect and resolve ambiguity by generating multiple parse trees.
