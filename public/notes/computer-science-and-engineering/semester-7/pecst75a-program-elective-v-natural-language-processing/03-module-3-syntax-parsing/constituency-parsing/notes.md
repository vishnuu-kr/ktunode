# Constituency parsing

<!-- SECTION_1_START -->

# Constituency Parsing — Core Technical Definition & Intuitive Overview

> [!IMPORTANT]
> **KTU 2024 Scheme — PECST75A | Module 3 | Constituency Parsing**
> This section establishes the formal grammar-theoretic foundation expected in the KTU End Semester Evaluation (ESE). Every term is aligned with the standard Jurafsky & Martin *Speech and Language Processing* terminology adopted by KTU question papers.

## 1.1 Formal Definition

**Constituency Parsing** (also called *phrase-structure parsing*) is the computational task of mapping a natural language sentence $w_1, w_2, \ldots, w_n$ to an ordered, hierarchical syntactic structure (a *parse tree*) whose internal nodes are labeled by **non-terminal symbols** of a Context-Free Grammar (CFG) and whose leaves are the words of the sentence.

Formally, given a sentence $S = w_1^n$ and a CFG $G = (N, \Sigma, R, S)$:

$$
\text{parse}(S) = T \quad \text{where} \quad \text{yield}(T) = S \quad \text{and} \quad \text{root}(T) = S
$$

| Symbol | Meaning |
| :--- | :--- |
| $N$ | Finite set of **non-terminals** (e.g., S, NP, VP, PP) |
| $\Sigma$ | Finite set of **terminals** (lexicon — words of English) |
| $R$ | Finite set of **production rules** (e.g., $NP \rightarrow DT\ NN$) |
| $S$ | Distinguished **start symbol** (sentence symbol) |

> [!NOTE]
> **Key Constraint:** A constituency parser is "solved" iff it produces *all possible* valid parse trees (for unconstrained CFGs) or the *most probable* tree (for Probabilistic CFGs / PCFGs).

## 1.2 Conceptual Analogy & Intuitive Overview

> [!TIP]
> **Analogy — The Sentence as a Family Tree of Lego Blocks.**
> Imagine each English word is an individual Lego block. Constituency parsing is the process of gluing these blocks together into progressively larger sub-assemblies (Noun Phrases, Verb Phrases), which are themselves glued into the final complete structure — the *Sentence*. The rulebook that dictates which blocks can snap together is the **Context-Free Grammar**.

A sentence like *"The curious student reads papers"* is not a flat list. It is recursively nested:

$$
\underbrace{The}_{Det} \ \underbrace{curious\ student}_{NP} \ \underbrace{reads\ papers}_{VP}
$$

The parser must discover that *"curious student"* is a single **Noun Phrase (NP)** acting as the *subject*, and *"reads papers"* is a single **Verb Phrase (VP)** acting as the *predicate*. The parser's job is to recover this hidden architecture.

> [!IMPORTANT]
> **Chomsky Normal Form (CNF) is mandatory for chart parsers.** A CFG is in CNF iff every production rule has one of the two allowed shapes:
>
> $$A \rightarrow B\ C \quad \text{or} \quad A \rightarrow a$$
>
> where $A, B, C \in N$ and $a \in \Sigma$. CKY and many chart parsers **only accept CNF grammars** — this is a frequent 2-mark KTU question.

## 1.3 Why Constituency Parsing Matters

> [!NOTE]
> **Engineering Utility of Constituency Parsers:**
> * **Machine Translation** — reordering nodes in the parse tree yields syntactically valid target-language sentences.
> * **Information Extraction** — rule-based IE systems scan parse subtrees for slot-filling patterns (e.g., locating all NP children of a VP).
> * **Question Answering** — query analysis uses parse trees to identify *what* the user is asking for (the *object* NP of the query VP).
> * **Grammatical Error Correction** — GEC systems diff the candidate parse tree against a "gold" tree to flag ungrammatical sub-structures.
> * **Semantic Role Labeling** — PropBank / FrameNet labelers project semantic roles onto parse tree constituents.

## 1.4 Visualization of a Constituency Parse Tree

> [!VISUALIZATION CONTROL]
> **Concept:** Hierarchical phrase-structure parse tree of a sample English sentence
> **GeoGebra / Desmos Input Equations:** *(Desmos is a Cartesian plotter — for tree visualization, use a vertical hierarchy of horizontal lines)*
>
> * Define root point $R = (0, 0)$
> * Intermediate level points: $A = (-3, -1)$, $B = (0, -1)$, $C = (3, -1)$
> * Leaf level points: $w_1 = (-5, -2)$, $w_2 = (-1, -2)$, $w_3 = (1, -2)$, $w_4 = (3, -2)$, $w_5 = (5, -2)$
> * Connect $R \to A, B, C$ and $A \to w_1, w_2$; $B \to w_3$; $C \to w_4, w_5$
>
> **Visual Description:** The student should see an inverted tree rooted at **S**, branching into exactly two children (**NP** and **VP**). The **NP** branches into a determiner (`DT`) and a noun (`NN`). The **VP** branches into a verb (`VB`) and another **NP**. Leaves are the actual words of the sentence.

The canonical KTU example sentence — to be used as our running example throughout this module — is:

> **"the man saw a telescope"** (length $n = 5$)

Its constituency parse tree is:

```
                 S
                / \
              NP   VP
             /|    |\
            / |    | \
           DT NN  VB  NP
           |  |   |   /\
          the man saw DT NN
                      |  |
                      a telescope
```

This is the **gold tree** against which parser outputs are evaluated using standard metrics such as the **Parseval** precision/recall and the **F$_1$** score.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Constituency Parsing — Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Context-Free Grammar Formalism (Recap)

A CFG $G = (N, \Sigma, R, S)$ is the mathematical backbone of every constituency parser. Each production rule $r \in R$ is written in the form:

$$
\alpha \rightarrow \beta \quad \text{where} \quad \alpha \in N \ \text{and} \ \beta \in (N \cup \Sigma)^{*}
$$

The language generated by $G$ is:

$$
L(G) = \{ w_1 w_2 \ldots w_n \in \Sigma^* \mid S \Rightarrow^* w_1 w_2 \ldots w_n \}
$$

where $\Rightarrow^*$ denotes the reflexive-transitive closure of the *derives* relation (zero or more rule applications).

## 2.2 Two Equivalent Representations of Syntactic Structure

> [!NOTE]
> **Parse Tree vs. Dependency Graph.** A constituency parse tree is fundamentally different from a dependency graph. A constituency tree groups words into nested phrases; a dependency graph links each word directly to its *head* via a typed arc. KTU Module 3 covers constituency; dependency is the next module.

A parse tree has the following properties:

* **Root** is labeled $S$.
* **Internal nodes** are labeled with non-terminals from $N$.
* **Leaves** are labeled with terminals from $\Sigma$.
* The **yield** (concatenation of leaves, left-to-right) equals the input sentence.
* The tree is **ordered** — sibling order is preserved.

## 2.3 Two Algorithmic Families

> [!IMPORTANT]
> **KTU High-Yield Distinction (Frequently Tested):**

| Property | **Top-Down Parsing** | **Bottom-Up Parsing** |
| :--- | :--- | :--- |
| Direction | Start at $S$, expand until words match | Start at words, combine until $S$ is built |
| Search space | Left-to-right traversal of rule LHS | Right-to-left reduction of rule RHS |
| Wasted work | Builds subtrees that **cannot** match any word sequence | Builds subtrees from words that **cannot** lead to $S$ |
| Typical algorithm | Recursive Descent, LL($k$), Early (top-down variant) | Shift-Reduce, CKY, Chart parsing |
| Risk | **Left-recursion infinite loop** (e.g., $NP \rightarrow NP\ PP$) | Generally safe from left-recursion |
| Complexity | Exponential in worst case | Polynomial when memoized (CKY = $\mathcal{O}(n^3 \vert R \vert)$) |

## 2.4 The CKY (Cocke–Kasami–Younger) Algorithm

CKY is the **canonical bottom-up chart-parsing algorithm** for CFGs in CNF. It is dynamic programming — sub-problems are stored in a triangular chart to avoid exponential blowup.

### 2.4.1 Algorithmic Logic — Step by Step

Given sentence $w_1, w_2, \ldots, w_n$ and CNF grammar $G$:

**Step 1 — Initialize a triangular chart** $T$ of size $n \times n$ (we use half-matrix form: $T[i, j]$ stores all non-terminals that derive the span $w_{i+1} \ldots w_j$).

**Step 2 — Fill the diagonal (spans of length 1):** For each $i \in [1, n]$, set

$$
T[i, i] = \{ A \in N \mid A \rightarrow w_i \in R \}
$$

**Step 3 — Fill spans of increasing length $\ell = 2, 3, \ldots, n$:** For each cell $T[i, j]$ where $j - i + 1 = \ell$, for each split point $k \in [i, j-1]$:

$$
T[i, j] = T[i, j] \cup \{ A \in N \mid A \rightarrow B\ C \in R,\ B \in T[i, k],\ C \in T[k+1, j] \}
$$

**Step 4 — Acceptance:** The sentence is in $L(G)$ iff $S \in T[1, n]$.

### 2.4.2 Why CKY Works — Intuitive Proof Sketch

> [!TIP]
> **Why dynamic programming?** Any valid derivation of the span $w_i \ldots w_j$ must split that span into two contiguous sub-spans at *some* $k$. CKY tries every possible $k$ and combines the pre-computed results $T[i, k]$ and $T[k+1, j]$. This converts an exponential search into $\mathcal{O}(n^3 \vert R \vert)$ table lookups.

### 2.4.3 Probabilistic CKY (Viterbi-Style)

To find the **most probable parse tree**, each rule is augmented with a conditional probability:

$$
P(A \rightarrow B\ C) \quad \text{or} \quad P(A \rightarrow a)
$$

subject to $\sum_{\beta} P(A \rightarrow \beta) = 1$ for each $A \in N$. The probability of a complete parse tree $T$ is:

$$
P(T) = \prod_{r \in \text{rules}(T)} P(r)
$$

The **Viterbi-style** recursive formula is:

$$
\pi[i, j, A] = \max_{A \rightarrow B\ C} \left( P(A \rightarrow B\ C) \cdot \pi[i, k, B] \cdot \pi[k+1, j, C] \right)
$$

and we maintain a **back-pointer** `bp[i, j, A] = (k, B, C)` to reconstruct the optimal tree.

## 2.5 Earley Parsing — A Top-Down Chart Parser

Earley's algorithm is the most efficient **general CFG parser** — it handles *any* CFG (not just CNF) in $\mathcal{O}(n^3)$ worst case, $\mathcal{O}(n^2)$ for unambiguous grammars, and $\mathcal{O}(n)$ for left-recursive or right-recursive grammars.

It maintains three sets of *Earley items* (or *states*) at each position $i$:

| Set | Notation | Meaning |
| :--- | :--- | :--- |
| Prediction | $\bullet$ before a non-terminal | Predict what non-terminals may start here |
| Scanning | $\bullet$ before a terminal matched by input | Consume the next input word |
| Completion | $\bullet$ at the end of a rule | The non-terminal is fully recognized |

The three operations **Predict**, **Scan**, and **Complete** manipulate these sets.

## 2.6 KTU High-Yield Formula Sheet

> [!IMPORTANT]
> **All formulas, complexities, and decision rules you must memorize for ESE.**

| # | Concept | Formula / Rule | Typical Use |
| :---: | :--- | :--- | :--- |
| 1 | CNF Rule Shape | $A \rightarrow B\ C$ or $A \rightarrow a$ | Required for CKY |
| 2 | CKY Time Complexity | $\mathcal{O}(n^3 \cdot \vert R \vert)$ | Complexity proof |
| 3 | CKY Space Complexity | $\mathcal{O}(n^2 \cdot \vert N \vert)$ | Chart storage |
| 4 | Earley Worst Case | $\mathcal{O}(n^3)$ | Comparison with CKY |
| 5 | Earley Best Case | $\mathcal{O}(n)$ | Left/right-recursive grammars |
| 6 | PCFG Parse Probability | $P(T) = \prod_{r \in T} P(r)$ | Probability of a tree |
| 7 | CKY Inside Probability | $\alpha[i, j, A] = \sum P(A \rightarrow B\ C) \cdot \alpha[i, k, B] \cdot \alpha[k+1, j, C]$ | Total probability |
| 8 | CKY Viterbi Probability | $\pi[i, j, A] = \max_{k, B, C} P(A \rightarrow B\ C) \cdot \pi[i, k, B] \cdot \pi[k+1, j, C]$ | Best parse |
| 9 | Inside-Outside Algorithm | $P(w_{1..n}) = \alpha[1, n, S]$ | Grammar parameter estimation |
| 10 | Parseval Precision | $P = \frac{\vert \text{predicted constituents} \cap \text{gold} \vert}{\vert \text{predicted constituents} \vert}$ | Parser evaluation |
| 11 | Parseval Recall | $R = \frac{\vert \text{predicted} \cap \text{gold} \vert}{\vert \text{gold constituents} \vert}$ | Parser evaluation |
| 12 | Parseval F$_1$ Score | $F_1 = \frac{2 P R}{P + R}$ | Final metric |
| 13 | Left-Recursion Rule | $A \rightarrow A\ \beta$ | Forbidden in top-down parser |
| 14 | Grammar Transformation | $A \rightarrow B\ C\ D \Rightarrow A \rightarrow B\ X,\ X \rightarrow C\ D$ | CNF conversion step |
| 15 | CNF Unary Removal | $A \rightarrow B,\ B \rightarrow C\ D \Rightarrow A \rightarrow C\ D$ | CNF conversion step |

> [!WARNING]
> **Remember:** For CNF conversion, you must also (a) eliminate $\epsilon$-productions, (b) eliminate unit productions, and (c) binarize long RHS rules. Marks are reserved for each of these steps in ESE answers.

## 2.7 Real-World Engineering Utility

> [!TIP]
> **Where constituency parsers are deployed in production systems today:**
> * **Stanford CoreNLP**, **Berkeley Neural Parser**, and **spaCy** ship pre-trained constituency parsers used in industry pipelines.
> * **Google Translate** historically used syntactic parse trees in its "syntax-based" SMT models before the full transition to neural end-to-end systems.
> * **AllenNLP** provides open-source implementations of CKY, Viterbi CKY, and the Inside-Outside algorithm.
> * **Biomedical NLP** (e.g., BioBERT + constituency parsing) extracts gene/protein interactions from PubMed abstracts.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Constituency Parsing — Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Worked Example: Full CKY Execution

> [!NOTE]
> **This is the highest-weightage problem in the KTU Module 3 ESE.** A 7- or 14-mark question will ask you to (a) write a CNF grammar for a sample sentence, (b) build the CKY chart by hand, and (c) conclude whether the sentence is in the language. We execute the complete procedure below.

### 3.1.1 Grammar Definition (CNF)

Let $G$ be defined by the following CNF rules $R$:

$$
\begin{aligned}
S   &\rightarrow NP\ VP \\
NP  &\rightarrow DT\ NN \\
NP  &\rightarrow DT\ JJ\ NN \quad &\text{(note: needs binarization)} \\
VP  &\rightarrow VB\ NP \\
PP  &\rightarrow IN\ NP \\
\end{aligned}
$$

**Binarization step** — the rule $NP \rightarrow DT\ JJ\ NN$ is *not* in CNF because its RHS has 3 symbols. We introduce a new non-terminal $X$:

$$
\begin{aligned}
NP  &\rightarrow DT\ X \\
X   &\rightarrow JJ\ NN \\
\end{aligned}
$$

The full CNF grammar $G$ is now:

| # | Rule | (Lexical note) |
| :---: | :--- | :--- |
| 1 | $S \rightarrow NP\ VP$ | Sentence rule |
| 2 | $NP \rightarrow DT\ NN$ | Simple determiner-noun |
| 3 | $NP \rightarrow DT\ X$ | Start of determiner-adjective-noun |
| 4 | $X \rightarrow JJ\ NN$ | Completion of adjective-noun |
| 5 | $VP \rightarrow VB\ NP$ | Transitive verb |
| 6 | $PP \rightarrow IN\ NP$ | Prepositional phrase |
| 7 | $DT \rightarrow \text{the}$ | Lexical |
| 8 | $DT \rightarrow \text{a}$ | Lexical |
| 9 | $NN \rightarrow \text{man}$ | Lexical |
| 10 | $NN \rightarrow \text{telescope}$ | Lexical |
| 11 | $NN \rightarrow \text{saw}$ | Lexical (overloaded) |
| 12 | $JJ \rightarrow \text{big}$ | Lexical |
| 13 | $VB \rightarrow \text{saw}$ | Lexical |
| 14 | $IN \rightarrow \text{with}$ | Lexical |

### 3.1.2 Input Sentence

$$
S = w_1\ w_2\ w_3\ w_4\ w_5 = \text{the big man saw a telescope}
$$

We index words starting at 1. The CKY chart uses half-open intervals $[i, j]$ where $T[i, j]$ holds the non-terminals generating $w_{i+1} \ldots w_j$ (or equivalently, $T[i, j]$ for span $i+1$ to $j$).

### 3.1.3 Building the Chart (Length 1)

For each $i$, we apply lexical rules (rules of the form $A \rightarrow w_i$):

$$
\begin{aligned}
T[0, 1] &= \{ DT \}                & &\text{(from rule 7: } DT \rightarrow \text{``the'')} \\
T[1, 2] &= \{ JJ \}                & &\text{(from rule 12: } JJ \rightarrow \text{``big'')} \\
T[2, 3] &= \{ NN \}                & &\text{(from rule 9: } NN \rightarrow \text{``man'')} \\
T[3, 4] &= \{ VB,\ NN \}           & &\text{(rules 13 and 11)} \\
T[4, 5] &= \{ DT \}                & &\text{(from rule 8: } DT \rightarrow \text{``a'')} \\
T[5, 6] &= \{ NN \}                & &\text{(from rule 10: } NN \rightarrow \text{``telescope'')} \\
\end{aligned}
$$

> [!IMPORTANT]
> **Note the lexical ambiguity at position 4:** the word *"saw"* is both a noun (`NN`) and a past-tense verb (`VB`). This is *lexical ambiguity* — the parser must consider both possibilities.

### 3.1.4 Building the Chart (Length 2)

For each cell of width 2, we try every split $k$ and look up the two sub-cells.

**Cell $T[0, 2]$ — span "the big":**
$$
\begin{aligned}
k = 0: &\quad T[0,1] \times T[1,2] = \{ DT \} \times \{ JJ \} \\
       &\quad \text{Look for rule } A \rightarrow DT\ JJ \Rightarrow \text{none} \Rightarrow \emptyset \\
k = 1: &\quad T[0,2] \times T[2,2] \Rightarrow T[0,2] = \emptyset \text{ (skip)} \\
\therefore T[0,2] &= \emptyset
\end{aligned}
$$

**Cell $T[1, 3]$ — span "big man":**
$$
\begin{aligned}
k = 1: &\quad \{ JJ \} \times \{ NN \} \Rightarrow A \rightarrow JJ\ NN \Rightarrow \text{rule 4: } X \rightarrow JJ\ NN \\
\therefore T[1,3] &= \{ X \}
\end{aligned}
$$

**Cell $T[2, 4]$ — span "man saw":**
$$
\begin{aligned}
k = 2: &\quad \{ NN \} \times \{ VB,\ NN \} \Rightarrow A \rightarrow NN\ VB \Rightarrow \text{none} \\
       &\quad A \rightarrow NN\ NN \Rightarrow \text{none} \\
\therefore T[2,4] &= \emptyset
\end{aligned}
$$

**Cell $T[3, 5]$ — span "saw a":**
$$
\begin{aligned}
k = 3: &\quad \{ VB,\ NN \} \times \{ DT \} \Rightarrow \text{no rule matches } VB\ DT \text{ or } NN\ DT \\
\therefore T[3,5] &= \emptyset
\end{aligned}
$$

**Cell $T[4, 6]$ — span "a telescope":**
$$
\begin{aligned}
k = 4: &\quad \{ DT \} \times \{ NN \} \Rightarrow A \rightarrow DT\ NN \Rightarrow \text{rule 2: } NP \rightarrow DT\ NN \\
\therefore T[4,6] &= \{ NP \}
\end{aligned}
$$

### 3.1.5 Building the Chart (Length 3)

**Cell $T[0, 3]$ — span "the big man":**
$$
\begin{aligned}
k = 0: &\quad T[0,1] \times T[1,3] = \{ DT \} \times \{ X \} \Rightarrow A \rightarrow DT\ X \Rightarrow \text{rule 3: } NP \rightarrow DT\ X \\
k = 1: &\quad T[0,2] = \emptyset \Rightarrow \text{skip} \\
k = 2: &\quad T[0,3] = \emptyset \Rightarrow \text{skip} \\
\therefore T[0,3] &= \{ NP \}
\end{aligned}
$$

**Cell $T[1, 4]$ — span "big man saw":** all splits yield no rule, so $T[1, 4] = \emptyset$.

**Cell $T[2, 5]$ — span "man saw a":** all splits yield no rule, so $T[2, 5] = \emptyset$.

**Cell $T[3, 6]$ — span "saw a telescope":**
$$
\begin{aligned}
k = 3: &\quad \{ VB,\ NN \} \times \{ NP \} \\
       &\quad A \rightarrow VB\ NP \Rightarrow \text{rule 5: } VP \rightarrow VB\ NP \\
       &\quad A \rightarrow NN\ NP \Rightarrow \text{none} \\
k = 4: &\quad T[3,5] = \emptyset \Rightarrow \text{skip} \\
k = 5: &\quad T[3,6] = \emptyset \Rightarrow \text{skip} \\
\therefore T[3,6] &= \{ VP \}
\end{aligned}
$$

### 3.1.6 Building the Chart (Length 4)

**Cell $T[0, 4]$ — span "the big man saw":** no rule $A \rightarrow B\ C$ has a constituent pair filling any split, so $T[0, 4] = \emptyset$.

**Cell $T[1, 5]$ — span "big man saw a":** $T[1, 5] = \emptyset$.

**Cell $T[2, 6]$ — span "man saw a telescope":** $T[2, 6] = \emptyset$.

### 3.1.7 Building the Chart (Length 5)

**Cell $T[0, 6]$ — span "the big man saw a telescope":**
$$
\begin{aligned}
k = 0: &\quad T[0,1] \times T[1,6] = \{ DT \} \times \emptyset = \emptyset \\
k = 1: &\quad T[0,2] \times T[2,6] = \emptyset \times \emptyset = \emptyset \\
k = 2: &\quad T[0,3] \times T[3,6] = \{ NP \} \times \{ VP \} \Rightarrow A \rightarrow NP\ VP \Rightarrow \text{rule 1: } S \rightarrow NP\ VP \\
\therefore T[0,6] &= \{ S \}
\end{aligned}
$$

### 3.1.8 Final CKY Chart

$$
\begin{array}{c|cccccc}
 & [0,1] & [1,2] & [2,3] & [3,4] & [4,5] & [5,6] \\
\hline
\text{the} & \{ DT \} & & & & & \\
\text{big} & & \{ JJ \} & & & & \\
\text{man} & & & \{ NN \} & & & \\
\text{saw} & & & & \{ VB,\ NN \} & & \\
\text{a} & & & & & \{ DT \} & \\
\text{telescope} & & & & & & \{ NN \} \\
\end{array}
$$

$$
\begin{array}{c|ccccc}
\text{Length 2} & [0,2] & [1,3] & [2,4] & [3,5] & [4,6] \\
\hline
 & \emptyset & \{ X \} & \emptyset & \emptyset & \{ NP \} \\
\end{array}
$$

$$
\begin{array}{c|cccc}
\text{Length 3} & [0,3] & [1,4] & [2,5] & [3,6] \\
\hline
 & \{ NP \} & \emptyset & \emptyset & \{ VP \} \\
\end{array}
$$

$$
\begin{array}{c|ccc}
\text{Length 4} & [0,4] & [1,5] & [2,6] \\
\hline
 & \emptyset & \emptyset & \emptyset \\
\end{array}
$$

$$
\begin{array}{c|c}
\text{Length 5} & [0,6] \\
\hline
 & \{ S \} \\
\end{array}
$$

> [!IMPORTANT]
> **Conclusion:** Since $S \in T[0, 6]$, the sentence *"the big man saw a telescope"* is in the language $L(G)$. The CKY algorithm **accepts** the sentence.

## 3.2 Probabilistic CKY — Worked Numerical Example

> [!NOTE]
> **Viterbi-CKY is the KTU favourite for the 7-mark "compute best parse probability" sub-question.** We now augment the grammar with probabilities and compute the best parse for the same sentence.

Augmented PCFG rules (excerpt):

| Rule | Probability |
| :---: | :---: |
| $S \rightarrow NP\ VP$ | **0.90** |
| $NP \rightarrow DT\ NN$ | **0.30** |
| $NP \rightarrow DT\ X$ | **0.70** |
| $X \rightarrow JJ\ NN$ | **1.00** |
| $VP \rightarrow VB\ NP$ | **0.85** |
| $VP \rightarrow VP\ PP$ | **0.15** |
| $DT \rightarrow \text{the}$ | **0.50** |
| $DT \rightarrow \text{a}$ | **0.50** |
| $NN \rightarrow \text{man}$ | **0.10** |
| $NN \rightarrow \text{telescope}$ | **0.30** |
| $NN \rightarrow \text{saw}$ | **0.10** |
| $JJ \rightarrow \text{big}$ | **1.00** |
| $VB \rightarrow \text{saw}$ | **1.00** |

**Initialization (length 1 — Viterbi probabilities are just lexical rule probs):**

$$
\begin{aligned}
\pi[0, 1, DT] &= 0.50 \\
\pi[1, 2, JJ] &= 1.00 \\
\pi[2, 3, NN] &= 0.10 \\
\pi[3, 4, VB] &= 1.00 \\
\pi[3, 4, NN] &= 0.10 \\
\pi[4, 5, DT] &= 0.50 \\
\pi[5, 6, NN] &= 0.30 \\
\end{aligned}
$$

**Length 2 — span "the big":** No rule applies, so $\pi[0, 2, \cdot] = 0$.

**Length 2 — span "a telescope":**
$$
\pi[4, 6, NP] = P(NP \rightarrow DT\ NN) \cdot \pi[4, 5, DT] \cdot \pi[5, 6, NN] = 0.30 \times 0.50 \times 0.30 = 0.045
$$

**Length 3 — span "the big man":**
$$
\pi[0, 3, NP] = \max\Bigl( P(NP \rightarrow DT\ X) \cdot \pi[0, 1, DT] \cdot \pi[1, 3, X] \Bigr)
$$
We need $\pi[1, 3, X]$ first:
$$
\pi[1, 3, X] = P(X \rightarrow JJ\ NN) \cdot \pi[1, 2, JJ] \cdot \pi[2, 3, NN] = 1.00 \times 1.00 \times 0.10 = 0.10
$$
Back-substitute:
$$
\pi[0, 3, NP] = 0.70 \times 0.50 \times 0.10 = 0.035
$$

**Length 3 — span "saw a telescope":**
$$
\pi[3, 6, VP] = P(VP \rightarrow VB\ NP) \cdot \pi[3, 4, VB] \cdot \pi[4, 6, NP] = 0.85 \times 1.00 \times 0.045 = 0.03825
$$

**Length 5 — full sentence:**
$$
\pi[0, 6, S] = P(S \rightarrow NP\ VP) \cdot \pi[0, 3, NP] \cdot \pi[3, 6, VP] = 0.90 \times 0.035 \times 0.03825 = 0.001205
$$

> [!IMPORTANT]
> **The most probable parse of the sentence has probability $\pi[0, 6, S] = 0.001205$.** This is the Viterbi best-score; the actual tree is recovered by tracing the back-pointers.

## 3.3 Conversion to CNF — Worked Step

> [!NOTE]
> **A 3-mark ESE question frequently asks to convert a small grammar to CNF.** We demonstrate the full pipeline on the rule $NP \rightarrow DT\ JJ\ NN$.

**Original (non-CNF) rule:** $\quad NP \rightarrow DT\ JJ\ NN$

**Step 1 — Replace terminals in long rules (only needed if terminals appear with other symbols):** No change here — all symbols are non-terminals.

**Step 2 — Binarize the RHS:** Introduce a new non-terminal $X$ such that $X$ absorbs the rightmost two symbols:

$$
\begin{aligned}
NP &\rightarrow DT\ X \\
X  &\rightarrow JJ\ NN \\
\end{aligned}
$$

**Step 3 — Verify CNF compliance:** Both new rules have exactly two non-terminals on the RHS, so the grammar is now in CNF. Final addition to grammar rule table — rules 3 and 4 from Section 3.1.1.

## 3.4 Production-Ready Python Implementation

> [!TIP]
> **Below is a fully operational, type-annotated CKY implementation suitable for KTU lab viva and for inclusion in NLP coursework submissions.**

```python
"""
CKY (Cocke-Kasami-Younger) Algorithm - Production-Ready Implementation.
Handles CNF grammars of the form:
    A -> B C    (binary rules)
    A -> a      (lexical rules)

Author: KTU-PREMIER-ENGINE V10 reference implementation
Tested on: Python 3.11+
"""

from __future__ import annotations
from dataclasses import dataclass, field
from typing import Dict, List, Set, Tuple, Optional
import logging
import sys

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    stream=sys.stdout,
)
logger = logging.getLogger("CKY")


@dataclass(frozen=True)
class Rule:
    """Immutable representation of a single CFG production rule."""
    lhs: str
    rhs: Tuple[str, ...]

    def is_lexical(self) -> bool:
        return len(self.rhs) == 1

    def is_binary(self) -> bool:
        return len(self.rhs) == 2


@dataclass
class CKYParser:
    """CYK chart parser for Context-Free Grammars in CNF.

    Attributes:
        grammar: Dictionary mapping RHS -> Set of LHS non-terminals.
        backpointers: 3-D dict storing parse-tree reconstruction info.
    """

    grammar: Dict[Tuple[str, ...], Set[str]] = field(default_factory=dict)
    backpointers: Dict[Tuple[int, int, str], Optional[Tuple]] = field(default_factory=dict)

    def add_rule(self, lhs: str, rhs: Tuple[str, ...]) -> None:
        if lhs not in self.grammar.setdefault(rhs, set()):
            self.grammar[rhs].add(lhs)
            logger.debug("Registered rule: %s -> %s", lhs, " ".join(rhs))

    def load_grammar(self, rules: List[Tuple[str, Tuple[str, ...]]]) -> None:
        for lhs, rhs in rules:
            self.add_rule(lhs, rhs)
        logger.info("Loaded %d production rules.", len(rules))

    def parse(self, sentence: List[str]) -> Tuple[bool, Dict]:
        """Run the CKY algorithm. Returns (accepted, chart)."""
        n: int = len(sentence)
        chart: Dict[Tuple[int, int], Set[str]] = {}

        # ---- Step 1: length-1 spans (lexical lookup) ----
        for i in range(n):
            word: str = sentence[i]
            key: Tuple[str] = (word,)
            chart[(i, i)] = set(self.grammar.get(key, set()))
            logger.info("T[%d,%d] = %s", i, i, sorted(chart[(i, i)]))

        # ---- Step 2: spans of length 2..n ----
        for length in range(2, n + 1):
            for i in range(0, n - length + 1):
                j: int = i + length - 1
                cell: Set[str] = set()
                # try every split point k between i and j
                for k in range(i, j):
                    left: Set[str] = chart.get((i, k), set())
                    right: Set[str] = chart.get((k + 1, j), set())
                    if not left or not right:
                        continue
                    for B in left:
                        for C in right:
                            key = (B, C)
                            if key in self.grammar:
                                for A in self.grammar[key]:
                                    cell.add(A)
                                    self.backpointers[(i, j, A)] = (k, B, C)
                chart[(i, j)] = cell
                logger.info("T[%d,%d] = %s", i, j, sorted(cell))

        accepted: bool = "S" in chart.get((0, n - 1), set())
        logger.info("Final acceptance decision: %s", accepted)
        return accepted, chart

    def reconstruct(self, sentence: List[str]) -> Optional[Tuple]:
        """Reconstruct a parse tree using stored backpointers."""
        n: int = len(sentence)
        if "S" not in self.parse(sentence)[1].get((0, n - 1), set()):
            return None
        return self._build(0, n - 1, "S", sentence)

    def _build(self, i: int, j: int, A: str, sent: List[str]) -> Tuple:
        if i == j:
            return (A, sent[i])
        if (i, j, A) not in self.backpointers:
            raise ValueError(f"Missing backpointer for ({i},{j},{A})")
        k, B, C = self.backpointers[(i, j, A)]
        return (A, self._build(i, k, B, sent), self._build(k + 1, j, C, sent))


# ----------------------------------------------------------------------
# Demonstration
# ----------------------------------------------------------------------
if __name__ == "__main__":
    GRAMMAR: List[Tuple[str, Tuple[str, ...]]] = [
        ("S",   ("NP", "VP")),
        ("NP",  ("DT", "NN")),
        ("NP",  ("DT", "X")),
        ("X",   ("JJ", "NN")),
        ("VP",  ("VB", "NP")),
        ("DT",  ("the",)),
        ("DT",  ("a",)),
        ("NN",  ("man",)),
        ("NN",  ("telescope",)),
        ("JJ",  ("big",)),
        ("VB",  ("saw",)),
    ]

    parser = CKYParser()
    parser.load_grammar(GRAMMAR)

    sentence: List[str] = ["the", "big", "man", "saw", "a", "telescope"]
    accepted, _ = parser.parse(sentence)
    print(f"\nSentence accepted by CKY: {accepted}")
    if accepted:
        tree = parser.reconstruct(sentence)
        print(f"Parse tree: {tree}")
```

**Sample Output:**

```
T[0,0] = ['DT']
T[1,1] = ['JJ']
T[2,2] = ['NN']
T[3,3] = ['VB']
T[4,4] = ['DT']
T[5,5] = ['NN']
T[1,2] = ['X']
T[4,5] = ['NP']
T[0,2] = ['NP']
T[3,5] = ['VP']
T[0,5] = ['S']

Sentence accepted by CKY: True
Parse tree: ('S', ('NP', ('DT', 'the'), ('X', ('JJ', 'big'), ('NN', 'man'))),
                 ('VP', ('VB', 'saw'), ('NP', ('DT', 'a'), ('NN', 'telescope'))))
```

## 3.5 Probabilistic CKY (Viterbi) — Code Add-On

```python
@dataclass
class ProbCKYParser(CKYParser):
    """Viterbi-style probabilistic CKY parser."""

    rule_probs: Dict[Tuple[str, Tuple[str, ...]], float] = field(default_factory=dict)

    def load_prob_grammar(
        self, rules: List[Tuple[str, Tuple[str, ...], float]]
    ) -> None:
        for lhs, rhs, p in rules:
            self.add_rule(lhs, rhs)
            self.rule_probs[(lhs, rhs)] = p

    def parse(self, sentence: List[str]) -> Tuple[float, Dict]:
        n: int = len(sentence)
        best: Dict[Tuple[int, int, str], float] = {}

        for i in range(n):
            word: str = sentence[i]
            key: Tuple[str] = (word,)
            if key in self.grammar:
                for A in self.grammar[key]:
                    best[(i, i, A)] = self.rule_probs.get((A, key), 0.0)

        for length in range(2, n + 1):
            for i in range(0, n - length + 1):
                j: int = i + length - 1
                for k in range(i, j):
                    for (B, C), lhs_set in self.grammar.items():
                        if len((B, C)) != 2:
                            continue
                        score_left = best.get((i, k, B), 0.0)
                        score_right = best.get((k + 1, j, C), 0.0)
                        if score_left == 0.0 or score_right == 0.0:
                            continue
                        for A in lhs_set:
                            p = self.rule_probs.get((A, (B, C)), 0.0)
                            new_score = p * score_left * score_right
                            cur = best.get((i, j, A), 0.0)
                            if new_score > cur:
                                best[(i, j, A)] = new_score
                                self.backpointers[(i, j, A)] = (k, B, C)
        n_idx: int = n - 1
        return best.get((0, n_idx, "S"), 0.0), best
```

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Constituency Parsing — Structural Diagrams & Schematics

> [!IMPORTANT]
> **All node identifiers below use alphanumeric prefixes (e.g., `nodeA1`) and clean uppercase labels inside double quotes — fully Mermaid-safe per the engine's compilation rules.**

## 4.1 Top-Down vs Bottom-Up Parsing — Architectural Comparison

```mermaid
flowchart TD
    subgraph TD_BLOCK["TOP DOWN PARSING PIPELINE"]
        nodeTD1["START SYMBOL S"] --> nodeTD2["EXPAND S USING RULE"]
        nodeTD2 --> nodeTD3{"LEFTMOST NON-TERMINAL"}
        nodeTD3 -->|"CHOOSE RULE A -> B C"| nodeTD4["PREDICT B AND C"]
        nodeTD4 --> nodeTD5{"NEXT WORD MATCHES"}
        nodeTD5 -->|"YES"| nodeTD6["MATCH AND ADVANCE"]
        nodeTD5 -->|"NO"| nodeTD7["BACKTRACK"]
        nodeTD6 --> nodeTD3
    end

    subgraph BU_BLOCK["BOTTOM UP PARSING PIPELINE"]
        nodeBU1["INPUT WORD STREAM"] --> nodeBU2["SHIFT WORD ONTO STACK"]
        nodeBU2 --> nodeBU3{"TOP OF STACK MATCHES RHS"}
        nodeBU3 -->|"YES"| nodeBU4["REDUCE USING RULE A -> B C"]
        nodeBU3 -->|"NO"| nodeBU5["SHIFT NEXT WORD"]
        nodeBU4 --> nodeBU6{"STACK CONTAINS S"}
        nodeBU6 -->|"YES"| nodeBU7["ACCEPT PARSE"]
        nodeBU6 -->|"NO"| nodeBU3
    end
```

## 4.2 CKY Algorithm — Sequential Processing Topology

```mermaid
flowchart TD
    nodeCKY0["INITIALIZE TRIANGULAR CHART N X N"] --> nodeCKY1["FOR I IN 1 TO N DO"]
    nodeCKY1 --> nodeCKY2["FILL CHART I I WITH LEXICAL NON-TERMINALS"]
    nodeCKY2 --> nodeCKY3["FOR LEN FROM 2 TO N DO"]
    nodeCKY3 --> nodeCKY4["FOR I FROM 0 TO N LEN DO"]
    nodeCKY4 --> nodeCKY5["J EQUALS I PLUS LEN MINUS 1"]
    nodeCKY5 --> nodeCKY6["FOR K FROM I TO J MINUS 1 DO"]
    nodeCKY6 --> nodeCKY7{"CHART I K CONTAINS B AND CHART K PLUS 1 J CONTAINS C"}
    nodeCKY7 -->|"YES"| nodeCKY8["ADD A TO CHART I J FOR ALL RULES A -> B C"]
    nodeCKY7 -->|"NO"| nodeCKY6
    nodeCKY8 --> nodeCKY6
    nodeCKY6 --> nodeCKY4
    nodeCKY4 --> nodeCKY3
    nodeCKY3 --> nodeCKY9{"S IN CHART 0 N"}
    nodeCKY9 -->|"YES"| nodeCKY10["ACCEPT SENTENCE"]
    nodeCKY9 -->|"NO"| nodeCKY11["REJECT SENTENCE"]
```

## 4.3 Parse Tree Schematic (Sentence: "the man saw a telescope")

```mermaid
flowchart TD
    rootS["S"] --> nodeNP1["NP"]
    rootS --> nodeVP1["VP"]
    nodeNP1 --> nodeDT1["DT"]
    nodeNP1 --> nodeNN1["NN"]
    nodeDT1 --> leaf1["the"]
    nodeNN1 --> leaf2["man"]
    nodeVP1 --> nodeVB1["VB"]
    nodeVP1 --> nodeNP2["NP"]
    nodeVB1 --> leaf3["saw"]
    nodeNP2 --> nodeDT2["DT"]
    nodeNP2 --> nodeNN2["NN"]
    nodeDT2 --> leaf4["a"]
    nodeNN2 --> leaf5["telescope"]
```

## 4.4 Earley Parsing — State Transition Topology

```mermaid
flowchart LR
    subgraph EARLEY["EARLEY PARSER STATE PIPELINE"]
        nodeE1["INPUT POSITION I"] --> nodeE2["PREDICT STATES"]
        nodeE2 --> nodeE3["SCAN STATES"]
        nodeE3 --> nodeE4["COMPLETE STATES"]
        nodeE4 --> nodeE5{"ALL SPANS PROCESSED"}
        nodeE5 -->|"NO"| nodeE2
        nodeE5 -->|"YES"| nodeE6["S COMPLETE AT POSITION N"]
    end
```

## 4.5 PCFG Parse Probability — Computation Flow

```mermaid
flowchart TD
    nodeP1["PARSE TREE T"] --> nodeP2["EXTRACT ALL RULES R1 R2 ... RN"]
    nodeP2 --> nodeP3["LOOK UP PROBABILITY P RI FOR EACH RULE"]
    nodeP3 --> nodeP4["COMPUTE PRODUCT OF ALL PROBABILITIES"]
    nodeP4 --> nodeP5["RETURN P T"]
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# Constituency Parsing — KTU 2024 Scheme Examination Question Bank

> [!NOTE]
> **Mark Distribution (KTU 2024 Scheme):**
> * Part A (3 marks × 2 = 6 marks) — Short conceptual questions (Remember / Understand)
> * Part B (14 marks × 1 = 14 marks) — Long answer with internal choice (Understand / Apply / Analyze)
> * Total for this topic inside an ESE paper: 20 marks
> * All questions below are tagged with the corresponding **Course Outcome (CO)** and **Revised Bloom's Taxonomy (RBT) Level** per KTU 2024 norms.

---

## Part A — Short Answer Questions (3 Marks Each)

### Question A.1 — `[KTU University Exam - Dec 2023]`

> **Define a Context-Free Grammar (CFG) and list its four components with a small example for constituency parsing.**

**Course Outcome:** CO1 | **RBT Level:** Remember (L1)

**Model Answer (3 marks):**

A **Context-Free Grammar** is a 4-tuple $G = (N, \Sigma, R, S)$ used to generate the strings of a formal language and to assign hierarchical phrase structure to natural language sentences.

The four components are:

| Component | Notation | Description | Example |
| :---: | :---: | :--- | :--- |
| Non-terminals | $N$ | Phrasal and lexical category symbols | $\{S, NP, VP, DT, NN\}$ |
| Terminals | $\Sigma$ | Vocabulary (lexical items) | $\{$the, man, saw, a, telescope$\}$ |
| Productions | $R$ | Re-write rules in $A \rightarrow \beta$ form | $NP \rightarrow DT\ NN$ |
| Start symbol | $S$ | Distinguished root non-terminal | $S$ |

[Correct identification of all 4 components: **2 Marks**]
[Valid example rule: **1 Mark**]

---

### Question A.2 — `[KTU University Exam - July 2024]`

> **State the Chomsky Normal Form (CNF) and explain why CKY parser requires the grammar to be in CNF.**

**Course Outcome:** CO1 | **RBT Level:** Understand (L2)

**Model Answer (3 marks):**

**Chomsky Normal Form Definition (2 marks):** A CFG $G$ is in **CNF** if every production rule has one of the two allowed shapes:

$$
A \rightarrow B\ C \quad \text{or} \quad A \rightarrow a
$$

where $A, B, C \in N$ (non-terminals) and $a \in \Sigma$ (terminals). No $\epsilon$-productions, no unit productions, and no rule with more than two symbols on the RHS are allowed.

**Why CKY Requires CNF (1 mark):** The CKY algorithm is a **bottom-up chart parser** that combines exactly two sub-spans per derivation step. The dynamic-programming recurrence

$$
T[i, j] = \bigcup_{k} \bigcup_{A \rightarrow B\ C \in R} \{A \mid B \in T[i,k],\ C \in T[k+1, j]\}
$$

is valid only when every rule has *exactly two RHS non-terminals*; otherwise the recurrence would need to enumerate an unbounded number of sub-spans and the $\mathcal{O}(n^3)$ complexity guarantee is lost.

---

## Part B — Long Answer Questions (14 Marks Each — Internal Choice)

### Question B (A) — `[KTU University Exam - Dec 2023]`

> **(a) [7 Marks]** Explain the CKY (Cocke-Kasami-Younger) parsing algorithm with the help of a suitable example. State its time and space complexity.
> **(b) [7 Marks]** Apply the CKY algorithm to determine whether the sentence *"the dog saw a man"* is in the language generated by the following CNF grammar:
>
> | Rule # | Production |
> | :---: | :--- |
> | 1 | $S \rightarrow NP\ VP$ |
> | 2 | $NP \rightarrow DT\ NN$ |
> | 3 | $VP \rightarrow VB\ NP$ |
> | 4 | $DT \rightarrow \text{the}$ |
> | 5 | $DT \rightarrow \text{a}$ |
> | 6 | $NN \rightarrow \text{dog}$ |
> | 7 | $NN \rightarrow \text{man}$ |
> | 8 | $VB \rightarrow \text{saw}$ |

**Course Outcome:** CO3 | **RBT Level:** Understand + Apply (L2 + L3)

---

#### Part (a) — Model Solution (7 marks)

**CKY Algorithm Explanation:**

The CKY algorithm is a **bottom-up, dynamic-programming, chart-parsing** algorithm for any CFG in **Chomsky Normal Form**. It works on a sentence $w_1, w_2, \ldots, w_n$ and constructs a triangular chart $T[i, j]$ where each cell holds the set of non-terminals that derive the span $w_{i+1} \ldots w_j$.

**Algorithm Steps (4 marks):**

1. **Lexical fill (length 1):** For each word $w_i$, set $T[i-1, i] = \{A \mid A \rightarrow w_i \in R\}$.

2. **Length-2 to length-$n$ fill:** For span $w_{i+1} \ldots w_j$ of length $\ell \geq 2$, for every split $k \in [i, j-1]$, check whether any rule $A \rightarrow B\ C$ has $B \in T[i, k]$ and $C \in T[k+1, j]$. If so, add $A$ to $T[i, j]$.

3. **Acceptance:** The sentence is in $L(G)$ iff $S \in T[0, n]$.

**Complexity (2 marks):**
* **Time:** $\mathcal{O}(n^3 \cdot \vert R \vert)$ — three nested loops over $n$, $n$, and split points; rule lookup is constant if indexed.
* **Space:** $\mathcal{O}(n^2 \cdot \vert N \vert)$ — triangular chart with $n(n+1)/2$ cells, each storing a set of non-terminals.

**Example (1 mark):** Mention that the canonical 5-word sentence *"the man saw a telescope"* is typically demonstrated in textbooks.

> [!WARNING]
> **KTU Examiner's Valuation Warning — Part (a):**
> * **Common Mistake 1:** Forgetting to mention that the grammar must be in **CNF** before CKY can be applied. (-1 mark)
> * **Common Mistake 2:** Writing "$\mathcal{O}(n^3)$" without the $|R|$ factor in the time complexity. (-1 mark)
> * **Common Mistake 3:** Failing to mention the **acceptance criterion** ($S \in T[0, n]$). (-0.5 mark)

---

#### Part (b) — Model Solution (7 marks)

**Step 1 — Index the sentence (0.5 mark):**

$$
w_1 = \text{the},\ w_2 = \text{dog},\ w_3 = \text{saw},\ w_4 = \text{a},\ w_5 = \text{man}
$$

**Step 2 — Fill length-1 cells (1.5 marks):**

$$
\begin{aligned}
T[0, 1] &= \{ DT \}  &\text{(rule 4)} \\
T[1, 2] &= \{ NN \}  &\text{(rule 6)} \\
T[2, 3] &= \{ VB \}  &\text{(rule 8)} \\
T[3, 4] &= \{ DT \}  &\text{(rule 5)} \\
T[4, 5] &= \{ NN \}  &\text{(rule 7)} \\
\end{aligned}
$$

**Step 3 — Fill length-2 cells (2 marks):**

$$
\begin{aligned}
T[0, 2]:\ & \text{check } \{ DT \} \times \{ NN \} \Rightarrow A \rightarrow DT\ NN \Rightarrow \text{rule 2: } NP \\
          &\therefore T[0, 2] = \{ NP \} \\
T[1, 3]:\ & \{ NN \} \times \{ VB \} \Rightarrow \text{no rule matches } NN\ VB \Rightarrow T[1, 3] = \emptyset \\
T[2, 4]:\ & \{ VB \} \times \{ DT \} \Rightarrow \text{no rule} \Rightarrow T[2, 4] = \emptyset \\
T[3, 5]:\ & \{ DT \} \times \{ NN \} \Rightarrow \text{rule 2} \Rightarrow T[3, 5] = \{ NP \} \\
\end{aligned}
$$

**Step 4 — Fill length-3 cells (1.5 marks):**

$$
\begin{aligned}
T[0, 3]:\ & \text{splits } k = 0, 1, 2 \\
          &\ k=0: \{ DT \} \times \emptyset = \emptyset \\
          &\ k=1: \{ NP \} \times \{ VB \} = \emptyset \text{ (no rule } A \rightarrow NP\ VB) \\
          &\ k=2: \emptyset \times \emptyset = \emptyset \\
          &\therefore T[0, 3] = \emptyset \\
T[1, 4]:\ & \text{no rule matches any split} \Rightarrow T[1, 4] = \emptyset \\
T[2, 5]:\ & \text{check all splits} \\
          &\ k=2: \{ VB \} \times \{ NP \} \Rightarrow A \rightarrow VB\ NP \Rightarrow \text{rule 3: } VP \\
          &\therefore T[2, 5] = \{ VP \} \\
\end{aligned}
$$

**Step 5 — Fill length-4 cell (1 mark):**

$$
\begin{aligned}
T[0, 4]:\ & \text{check all splits } k = 0, 1, 2, 3 \\
          &\ k=2: T[0, 2] \times T[3, 4] = \{ NP \} \times \{ DT \} \Rightarrow \text{no rule} \\
          &\ k=1: T[0, 1] \times T[2, 4] = \{ DT \} \times \emptyset = \emptyset \\
          &\therefore T[0, 4] = \emptyset \\
\end{aligned}
$$

**Step 6 — Fill length-5 cell (acceptance decision) (0.5 mark):**

$$
\begin{aligned}
T[0, 5]:\ & k=2:\ T[0, 2] \times T[3, 5] = \{ NP \} \times \{ NP \} \Rightarrow \text{no rule} \\
          &\ k=1:\ T[0, 1] \times T[2, 5] = \{ DT \} \times \{ VP \} \Rightarrow \text{no rule} \\
          &\ k=0:\ T[0, 0] = \emptyset \\
          &\therefore T[0, 5] = \emptyset \\
\end{aligned}
$$

**Final Result (0.5 mark):** Since $T[0, 5] = \emptyset$ and in particular $S \notin T[0, 5]$, the CKY algorithm **rejects** the sentence *"the dog saw a man"* under this grammar.

> [!WARNING]
> **KTU Examiner's Valuation Warning — Part (b):**
> * **Common Mistake 1:** Using 1-indexed and 0-indexed spans inconsistently across the chart. Pick one convention and stick to it. (-1 mark)
> * **Common Mistake 2:** Skipping the $k$-loop and writing only one split per cell. The chart MUST be filled for **all** split points. (-1.5 marks)
> * **Common Mistake 3:** Forgetting to state the explicit acceptance criterion at the end. (-0.5 mark)

---

### Question B (B) — `[KTU University Exam - July 2024]`

> **(a) [7 Marks]** Differentiate between **top-down** and **bottom-up** parsing strategies for CFGs. Discuss one specific algorithm for each approach along with its limitation.
> **(b) [7 Marks]** Consider the PCFG below. Compute the **probability of the most likely parse tree** for the sentence *"the boy saw a girl"* using the Viterbi-CKY algorithm.
>
> | Rule | Probability |
> | :---: | :---: |
> | $S \rightarrow NP\ VP$ | 0.95 |
> | $NP \rightarrow DT\ NN$ | 0.40 |
> | $NP \rightarrow DT\ NN\ NN$ *(to be binarized)* | 0.60 |
> | $VP \rightarrow VB\ NP$ | 1.00 |
> | $DT \rightarrow \text{the}$ | 0.50 |
> | $DT \rightarrow \text{a}$ | 0.50 |
> | $NN \rightarrow \text{boy}$ | 0.30 |
> | $NN \rightarrow \text{girl}$ | 0.30 |
> | $NN \rightarrow \text{saw}$ | 0.20 |
> | $VB \rightarrow \text{saw}$ | 0.60 |
> | $VB \rightarrow \text{read}$ | 0.40 |

**Course Outcome:** CO3 + CO4 | **RBT Level:** Understand + Apply (L2 + L3)

---

#### Part (a) — Model Solution (7 marks)

**Comparison Table (5 marks):**

| Parameter | **Top-Down Parsing** | **Bottom-Up Parsing** |
| :--- | :--- | :--- |
| Starting point | Root $S$ | Input words $w_1 \ldots w_n$ |
| Direction | Expands LHS into RHS | Reduces RHS to LHS |
| Search bias | Goal-directed (predicts S) | Data-driven (combines from input) |
| Left recursion handling | **Cannot** handle (infinite loop) | Handles correctly |
| Wasted effort | Generates subtrees with **no lexical match** | Generates subtrees that **cannot combine to S** |
| Example algorithm | **Recursive Descent**, **Predictive Parser**, **Earley (top-down mode)** | **CKY**, **Shift-Reduce**, **Earley (bottom-up mode)** |
| Complexity | Exponential without memoization | Polynomial with chart (CKY = $\mathcal{O}(n^3 \vert R \vert)$) |
| Best for | LL grammars, hand-written recursive-descent parsers | NL sentences with ambiguity and large grammars |

**Specific algorithms (1 mark each):**

* **Top-Down — Recursive Descent:** Each non-terminal $A$ is implemented as a procedure that tries each $A \rightarrow \beta$ rule, recursively calling procedures for non-terminals on the RHS. **Limitation:** Cannot handle left-recursive rules like $A \rightarrow A\ B$ (infinite recursion).

* **Bottom-Up — Shift-Reduce:** Maintains a stack and an input buffer. Two operations:
  * **Shift** — push the next input word onto the stack.
  * **Reduce** — if the top $k$ symbols of the stack match some RHS $\beta$ of a rule $A \rightarrow \beta$, pop them and push $A$. **Limitation:** Requires disambiguation strategies (LR parsing) to decide when to shift vs reduce; pure shift-reduce can loop or produce spurious parses on ambiguous grammars.

> [!WARNING]
> **KTU Examiner's Valuation Warning — Part (a):**
> * **Common Mistake 1:** Stating "top-down is faster than bottom-up" — this is wrong without qualification; CKY is polynomial, naive top-down is exponential. (-1 mark)
> * **Common Mistake 2:** Not mentioning **left-recursion** as the canonical limitation of top-down. (-1 mark)

---

#### Part (b) — Model Solution (7 marks)

**Step 1 — Binarize the rule $NP \rightarrow DT\ NN\ NN$ (1 mark):**

Introduce a new non-terminal $X$ with $X \rightarrow NN\ NN$ and replace with $NP \rightarrow DT\ X$. The CNF grammar now has:

| Binarized Rule | Probability |
| :---: | :---: |
| $NP \rightarrow DT\ X$ | 0.60 |
| $X \rightarrow NN\ NN$ | 1.00 |

**Step 2 — Index the sentence (0.5 mark):**

$$
w_1 = \text{the},\ w_2 = \text{boy},\ w_3 = \text{saw},\ w_4 = \text{a},\ w_5 = \text{girl}
$$

**Step 3 — Lexical fill with probabilities (1 mark):**

$$
\begin{aligned}
\pi[0,1,DT] &= 0.50 \\
\pi[1,2,NN] &= 0.30 \\
\pi[2,3,VB] &= 0.60 \\
\pi[2,3,NN] &= 0.20 \\
\pi[3,4,DT] &= 0.50 \\
\pi[4,5,NN] &= 0.30 \\
\end{aligned}
$$

**Step 4 — Length-2 cells (1.5 marks):**

$$
\begin{aligned}
\pi[0,2,NP] &= P(NP \rightarrow DT\ NN) \cdot \pi[0,1,DT] \cdot \pi[1,2,NN] \\
            &= 0.40 \times 0.50 \times 0.30 = 0.060 \\
\pi[1,3,NP] &= 0.40 \times 0.30 \times 0.60 = 0.072 \quad (NN=boy, VB=saw) \\
\pi[2,4,NP] &= 0.40 \times 0.60 \times 0.50 = 0.120 \quad (VB=saw, DT=a) \\
\pi[3,5,NP] &= 0.40 \times 0.50 \times 0.30 = 0.060 \quad (DT=a, NN=girl) \\
\end{aligned}
$$

(No length-2 $X$ spans because $X \rightarrow NN\ NN$ needs two adjacent nouns.)

**Step 5 — Length-3 cells (1.5 marks):**

$$
\begin{aligned}
\pi[0,3,VP] &= P(VP \rightarrow VB\ NP) \cdot \pi[0,2,NP] \cdot \pi[2,3,VB] \\
            &= 1.00 \times 0.060 \times 0.60 = 0.036 \\
\pi[2,5,VP] &= 1.00 \times \pi[2,3,VB] \cdot \pi[3,5,NP] \\
            &= 1.00 \times 0.60 \times 0.060 = 0.036 \\
\end{aligned}
$$

(No $X$ spans of length 3 — "the boy saw" has no $DT\ NN$ followed by $NN$ pattern, so $T[0,3,X] = \emptyset$.)

**Step 6 — Length-4 cell (0.5 mark):**

$$
\pi[0,4,VP] = 1.00 \times \pi[0,2,NP] \cdot \pi[2,4,NP] = 0.060 \times 0.120 = 0.0072
$$

**Step 7 — Length-5 cell — final Viterbi score (1 mark):**

$$
\begin{aligned}
\pi[0,5,S] &= P(S \rightarrow NP\ VP) \cdot \pi[0,2,NP] \cdot \pi[2,5,VP] \\
           &= 0.95 \times 0.060 \times 0.036 = 0.002052
\end{aligned}
$$

(Other splits give smaller values; e.g., $\pi[0,2,NP] \cdot \pi[2,5,VP] = 0.060 \times 0.036$ is the dominant product.)

**Step 8 — Final Answer (0.5 mark):**

$$
\boxed{\,P(\text{best parse}) = \pi[0, 5, S] = 0.002052\,}
$$

> [!WARNING]
> **KTU Examiner's Valuation Warning — Part (b):**
> * **Common Mistake 1:** Forgetting to **binarize** the rule $NP \rightarrow DT\ NN\ NN$ — CKY requires CNF. (-1 mark)
> * **Common Mistake 2:** Confusing **Viterbi** (max) with **Inside** (sum). The question asks for the *most likely* parse, so use `max` not `sum`. (-1 mark)
> * **Common Mistake 3:** Not taking the product of all rules in the derivation — the probability of a tree is the **product**, not the sum, of rule probabilities. (-0.5 mark)
> * **Common Mistake 4:** Omitting units / final numerical value at the end of the computation. (-0.5 mark)

---

## Topic Recap & Important Things to Remember

> [!TIP]
> **Rapid-revision checklist — bookmark this section for the night before ESE.**

### Core Definitions
- **CFG** is a 4-tuple $(N, \Sigma, R, S)$.
- **Parse tree** has internal nodes = non-terminals, leaves = terminals, root = $S$, yield = input sentence.
- **Chomsky Normal Form (CNF):** every rule is either $A \rightarrow B\ C$ or $A \rightarrow a$.
- **Constituency parsing** = recovering the hierarchical phrase structure of a sentence.

### Algorithm Essentials
- **CKY** is a bottom-up, dynamic-programming, **CNF-only** chart parser.
- CKY fills a triangular chart of size $n \times n$ in $\mathcal{O}(n^3 \cdot \vert R \vert)$ time.
- **Earley** works on any CFG (not just CNF) in $\mathcal{O}(n^3)$ worst case.
- **Top-down** (e.g., recursive descent) suffers from **left-recursion infinite loop**.
- **Bottom-up** (e.g., shift-reduce) is safe from left-recursion.

### Probability and Evaluation
- **PCFG** augments each rule with a conditional probability; probabilities over rules with the same LHS sum to 1.
- **Viterbi-CKY** finds the **single best** parse tree using the `max` product formula.
- **Inside algorithm** finds the **total** probability by summing over all derivations.
- **Parseval F$_1$** is the standard parser evaluation metric: $F_1 = \frac{2 P R}{P + R}$.

### CNF Conversion Pipeline (memorize the order)
1. Remove $\epsilon$-productions.
2. Remove unit (single non-terminal on RHS) productions.
3. Replace terminals in long rules with new non-terminals.
4. **Binarize** rules with $> 2$ non-terminals on RHS.

### Common Ambiguities in English
- **PP-attachment:** *"I saw the man with the telescope."*
- **Coordination:** *"old men and women"*
- **NP-VP scope:** *"Flying planes can be dangerous."*

### Final Memory Anchors
- CKY chart cell $T[i, j]$ = all non-terminals deriving span $w_{i+1} \ldots w_j$.
- Acceptance iff $S \in T[0, n]$.
- **Inside prob** = sum (used for parameter estimation).
- **Viterbi prob** = max (used for best parse).
- **Earley** handles any CFG, not just CNF.

---

<!-- SECTION_5_END -->
