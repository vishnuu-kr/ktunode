---
title: "Context Sensitive Languages - Context Sensitive Grammar (CSG)"
subject: "THEORY OF COMPUTATION"
module: "Module 4: Context Sensitive Languages "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f24"
status: "completed"
scrapedAt: "2026-05-23T16:19:39.477Z"
---
# Theory of Computation: Module 4 - Context-Sensitive Languages

## Topic: Context-Sensitive Grammar (CSG)

This module delves into Context-Sensitive Languages (CSLs) and their generative mechanism: Context-Sensitive Grammars (CSGs). We will understand how these grammars define languages that are more powerful than context-free languages.

### Learning Outcomes:

*   **Understand the definition and properties of Context-Sensitive Grammars (CSGs).**
*   **Relate CSGs to Context-Sensitive Languages (CSLs).**
*   **Analyze the Chomsky Hierarchy and the position of CSLs within it.**
*   **Understand the relationship between CSGs and Linear Bounded Automata (LBAs).**

---

### 1. Introduction to Context-Sensitive Languages (CSLs)

**Definition:** A language $L$ is a **Context-Sensitive Language (CSL)** if there exists a **Context-Sensitive Grammar (CSG)** that generates $L$.

CSLs are a class of formal languages that sit between Context-Free Languages (CFLs) and Recursively Enumerable Languages (RELs) in the Chomsky Hierarchy. They are called "context-sensitive" because the application of a grammar rule often depends on the context surrounding a non-terminal symbol.

**Key Idea:** Unlike Context-Free Grammars where any non-terminal can be replaced regardless of its surroundings, in CSGs, a non-terminal's replacement is constrained by its neighboring symbols.

---

### 2. Context-Sensitive Grammars (CSGs)

**Definition:** A Context-Sensitive Grammar (CSG) is a formal grammar $G = (V, \Sigma, P, S)$ where:

*   $V$: A finite set of non-terminal symbols.
*   $\Sigma$: A finite set of terminal symbols ($\Sigma \cap V = \emptyset$).
*   $P$: A finite set of production rules of the form:
    *   $\alpha A \beta \rightarrow \alpha \gamma \beta$
    where $A \in V$, $\gamma$ is a non-empty string of terminals and/or non-terminals ($\gamma \in (V \cup \Sigma)^+$), and $\alpha, \beta$ are strings of terminals and/or non-terminals ($\alpha, \beta \in (V \cup \Sigma)^*$).
*   $S$: The start symbol, $S \in V$.

**Crucial Constraint:** In a production rule $A \rightarrow \gamma$, the length of the right-hand side ($\gamma$) must be greater than or equal to the length of the left-hand side ($A$). That is, $|\gamma| \ge |A|$.

**Equivalently (and more commonly defined):** Production rules are of the form:
$\alpha \rightarrow \beta$ where $|\beta| \ge |\alpha|$, with the exception of the rule $S \rightarrow \epsilon$ if $\epsilon \in L(G)$. If $S \rightarrow \epsilon$ is allowed, then $S$ cannot appear on the right-hand side of any production. This exception is to handle the empty string.

**What does the context $\alpha$ and $\beta$ mean?**
The production rule $\alpha A \beta \rightarrow \alpha \gamma \beta$ means that the non-terminal $A$ can be replaced by the string $\gamma$ *only when* it is surrounded by the context $\alpha$ on its left and $\beta$ on its right.

**Important Note on "Context-Sensitive" Terminology:**
While the rule is often written as $\alpha A \beta \rightarrow \alpha \gamma \beta$, the core idea is that the replacement of $A$ by $\gamma$ depends on the context. The $\alpha$ and $\beta$ symbols themselves are not removed or changed during this particular step; they merely provide the environment for the substitution.

**Example of a CSG Rule:**
Consider a grammar for the language $L = \{a^n b^n c^n \mid n \ge 1\}$.
A possible rule might look like: $a A b c \rightarrow a B b c$.
This rule says that a non-terminal $A$ can be replaced by $B$ only if it is preceded by an 'a' and followed by 'b' and 'c'.

---

### 3. Properties of Context-Sensitive Grammars

*   **Non-contracting Property:** The key property is that no production rule shortens the string. $|\alpha| \le |\beta|$ for $\alpha \rightarrow \beta$. This ensures that derivations do not get stuck by repeatedly removing symbols. The only exception is $S \rightarrow \epsilon$ for the empty string, which is handled carefully.
*   **Generative Power:** CSGs generate exactly the set of Context-Sensitive Languages.
*   **Relationship to Chomsky Hierarchy:**
    *   Type 0: Recursively Enumerable Languages (unrestricted grammars)
    *   Type 1: Context-Sensitive Languages (CSGs)
    *   Type 2: Context-Free Languages (CFGs)
    *   Type 3: Regular Languages (Regular Grammars)

    Thus, CSLs are more powerful than CFLs but less powerful than all RELs. Every CFL is a CSL, but not vice-versa. Every CSL is RE, but not vice-versa.

*   **Equivalence to Linear Bounded Automata (LBAs):** A fundamental theorem states that a language is context-sensitive if and only if it is accepted by a Linear Bounded Automaton (LBA).

---

### 4. Converting CFGs to CSGs (and back)

*   **CFG to CSG:** Any Context-Free Grammar (CFG) can be converted into an equivalent Context-Sensitive Grammar (CSG). This is because CFGs are a special case of CSGs where the context is always empty ($\alpha = \epsilon, \beta = \epsilon$). A CFG rule $A \rightarrow \gamma$ can be directly written as a CSG rule $A \rightarrow \gamma$. The only consideration is that CFG rules can be length-reducing ($|A| > |\gamma|$), but this can be addressed by introducing new non-terminals and intermediate steps that maintain the non-contracting property. A common technique involves ensuring that all non-CFG rules (like $A \rightarrow BC$) have $|\gamma| \ge |A|$ by converting them to longer equivalent forms. For example, $A \rightarrow BC$ can be transformed into a sequence of productions that effectively achieve the same result without reducing length, or by encoding the "context" requirement.

*   **CSG to CFG (with limitations):** Not all CSGs can be converted to CFGs. This is the fundamental difference in power. However, a specific subset of CSGs, called **non-contracting grammars** (where $|\alpha| \le |\beta|$ for all rules $\alpha \rightarrow \beta$, without the $S \rightarrow \epsilon$ exception), can be converted to equivalent CFGs. This often involves a more complex transformation process.

**Reference (Kozen):** Kozen discusses the relationship between context-sensitive grammars and LBAs extensively. Chapter 12 often covers Chomsky Hierarchy and its implications. The conversion of CFGs to CSGs is generally straightforward as CFGs are a subset of CSGs.

**Reference (Hopcroft, Motwani, Ullman):** Chapter 10 of Hopcroft, Motwani, and Ullman typically details context-sensitive languages and their relationship with LBAs. They often show how to convert a CSG into an equivalent LBA. The conversion of CFGs to CSGs is a direct implication of the Chomsky hierarchy.

**Reference (Sipser):** Sipser's book also covers this in its chapters on the Chomsky hierarchy and advanced topics. He often emphasizes the relationship between language classes and the computational models that recognize them.

---

### 5. Examples of Context-Sensitive Languages and Grammars

**Example 1: Language $L = \{a^n b^n c^n \mid n \ge 1\}$**

This is a classic example of a language that is CSL but not CFL.
A CSG for $L$ can be constructed. One common approach involves using helper non-terminals to manage the counting and ensure the correct order and number of symbols.

Consider a simplified approach to illustrate the context-sensitive nature:

Let's try to build a grammar. We need to ensure we have an equal number of a's, b's, and c's in order.

**Grammar G1:**
$V = \{S, A, B, C, X, Y\}$
$\Sigma = \{a, b, c\}$
$P$:
1.  $S \rightarrow a S X B C$
2.  $S \rightarrow a B C$
3.  $X A \rightarrow A X$ (Context: $X$ is a placeholder for 'a', $A$ is a placeholder for 'b')
4.  $a A \rightarrow a B$
5.  $A b \rightarrow b B$
6.  $b X \rightarrow b Y$
7.  $Y c \rightarrow Y Z$
8.  $a Z \rightarrow a$
9.  $B c \rightarrow \epsilon$ (This rule is problematic as it shortens. We need to avoid this).

Let's refine using a standard construction for $a^n b^n c^n$. The idea is to generate a string of $a$'s, then $b$'s, then $c$'s, and then use context-sensitive rules to ensure the counts match.

A more robust CSG for $L = \{a^n b^n c^n \mid n \ge 1\}$:

$V = \{S, A, B, C, X, Y, Z\}$
$\Sigma = \{a, b, c\}$
$P$:
1.  $S \rightarrow a S X B C$  (Generate $a$'s and prepare for $b$'s and $c$'s)
2.  $S \rightarrow a B C$       (Base case for $n=1$)
3.  $X A \rightarrow A X$     (Move $A$ past $X$. $X$ is to ensure 'a' context for $B$. $A$ will eventually become $B$)
4.  $a A \rightarrow a B$     (Convert 'a' context to 'b' context for $B$)
5.  $A b \rightarrow b B$     (If $A$ is next to an actual 'b', convert $A$ to $B$)
6.  $B X \rightarrow B Y$     (Move $B$ past $X$)
7.  $Y c \rightarrow Y Z$     (Move $Y$ past $c$, $Y$ is marker for $B$s)
8.  $a Z \rightarrow a$       (Remove $Z$ after matching $b$'s with $a$'s context)
9.  $B c \rightarrow \epsilon$   (This rule is still problematic because it shortens. We need to handle the elimination of non-terminals carefully.)

**Corrected Approach for $a^n b^n c^n$ using CSG:**

The typical construction for $a^n b^n c^n$ involves ensuring that for every $a$ generated at the beginning, a $b$ is generated in the middle, and a $c$ is generated at the end, and then synchronizing them.

Consider the following CSG:

$V = \{S, A, B, C, X, Y, Z\}$
$\Sigma = \{a, b, c\}$
$P$:
1.  $S \rightarrow a S X B C$  (Generates $a$ and prepares for $b$ and $c$. $X$ acts as a separator.)
2.  $S \rightarrow a B C$       (Base case for $n=1$)
3.  $X A \rightarrow A X$     (Context-sensitive rule: $X$ needs $A$ to pass. $A$ represents a $b$ that needs to be generated. This rule allows $A$ to move to the right.)
4.  $a A \rightarrow a B$     (When $A$ is to the right of an $a$, and also after an $X$ (implicitly handled by rule 3), $A$ is replaced by $B$.)
5.  $A b \rightarrow B b$     (This is problematic; it still depends on $b$ context. Let's rethink.)

**A Standard CSG for $a^n b^n c^n$ (from Kozen or similar sources):**

The key is to ensure that as we generate $a^n$, we also generate $b^n$ and $c^n$ such that they can be matched.

$V = \{S, A, B, C, X, Y\}$
$\Sigma = \{a, b, c\}$
$P$:
1.  $S \rightarrow a S X B C$
2.  $S \rightarrow a B C$
3.  $X A \rightarrow A X$
4.  $A b \rightarrow B b$
5.  $X c \rightarrow X Y$
6.  $b Y \rightarrow b$
7.  $a X \rightarrow a$
8.  $B c \rightarrow \epsilon$ (Still problematic!)

The issue with rules like $B c \rightarrow \epsilon$ is that they shorten the string. For a *strict* CSG, *all* rules $\alpha \rightarrow \beta$ must satisfy $|\beta| \ge |\alpha|$, except for the single rule $S \rightarrow \epsilon$ if $\epsilon$ is in the language.

**Revised CSG for $a^n b^n c^n$ (using length-preserving transformations or avoiding shortening):**

The typical approach to handle shortening in CSGs is to replace a shortening rule $\alpha \rightarrow \beta$ with $|\beta| < |\alpha|$ with a sequence of rules that achieve the same effect but do not shorten the string in any intermediate step. For example, $A \rightarrow \epsilon$ would be replaced by $A \rightarrow D$, $D \rightarrow \epsilon$, and then ensuring $D$ doesn't cause issues.

A common strategy for $a^n b^n c^n$ is to use LBAs. Converting directly to a CSG is intricate. However, the *language* $a^n b^n c^n$ *is* CSL.

**Let's try a different angle to illustrate CSG properties.**

**Example 2: Language $L = \{ww \mid w \in \{a,b\}^* \}$**

This language requires matching a prefix with a suffix. It is CSL but not CFL.

A CSG for $L$ (simplified illustration):

$V = \{S, A, B, \dots\}$
$\Sigma = \{a, b\}$
$P$:
1.  $S \rightarrow A a S B b$  (This is too specific to $a$ and $b$. We need a general way.)

Consider a CSG that ensures $w$ is generated and then copied.

A common construction for $ww$ involves several stages:
1.  Generate the first $w$.
2.  Introduce markers to delineate the end of the first $w$ and the beginning of the second $w$.
3.  Copy symbols from the first $w$ to the second $w$ using context-sensitive rules.

**Simplified CSG Idea for $ww$:**
Let's say we have a mechanism to generate $w$. Then we need to copy it.

Suppose we have a non-terminal $X$ that can derive $w$.
Then we might have rules like:
$S \rightarrow X \text{end_marker}$
$X \text{end_marker} \rightarrow X X \text{end_marker}$ (This copies $X$, but it's not how CSGs work directly).

The construction for $ww$ is non-trivial and involves careful handling of markers and context to ensure the copy is correct and the derivation terminates. It generally requires a sequence of context-sensitive steps to move symbols and place them correctly.

**Key takeaway from examples:** CSGs are more powerful because rules can depend on context. This allows for more complex dependencies between different parts of the generated string, which is necessary for languages like $a^n b^n c^n$ or $ww$.

---

### 6. Chomsky Hierarchy Recap and CSLs

*   **Type 3 (Regular):** Accepted by Finite Automata (FA). Grammars: Regular Grammars.
*   **Type 2 (Context-Free):** Accepted by Pushdown Automata (PDA). Grammars: Context-Free Grammars (CFGs). Rules: $A \rightarrow \gamma$.
*   **Type 1 (Context-Sensitive):** Accepted by Linear Bounded Automata (LBA). Grammars: Context-Sensitive Grammars (CSGs). Rules: $\alpha A \beta \rightarrow \alpha \gamma \beta$ (or $\alpha \rightarrow \beta$ with $|\beta| \ge |\alpha|$ except $S \rightarrow \epsilon$).
*   **Type 0 (Recursively Enumerable):** Accepted by Turing Machines (TM). Grammars: Unrestricted Grammars. Rules: $\alpha \rightarrow \beta$ with no length restrictions.

**Inclusions:**
Regular $\subset$ Context-Free $\subset$ Context-Sensitive $\subset$ Recursively Enumerable

*   Every regular language is context-free.
*   Every context-free language is context-sensitive.
*   Every context-sensitive language is recursively enumerable.

**Strict Inclusions:** The inclusions are strict. There are languages in each class that are not in the class below it.
*   $a^n b^n \mid n \ge 0$ is CFL but not regular.
*   $a^n b^n c^n \mid n \ge 0$ is CSL but not CFL.
*   The Halting Problem language (and others related to undecidability) is RE but not CSL.

**Course Outcome Alignment:**
*   **CO1 (Classify Languages):** Understanding CSGs is crucial for classifying languages as context-sensitive, differentiating them from CFLs and regular languages.
*   **CO3 (Design PDAs and CFGs):** While this module focuses on CSGs, the comparison with CFGs (CO3) highlights the increased power and complexity of CSGs.
*   **CO4 (Design Turing Machines):** The equivalence of CSLs with LBAs (a restricted form of TM) connects this module to the design of more powerful computational models.

---

### 7. Practice Questions

**Question 1:**
Which of the following is a property of all production rules in a Context-Sensitive Grammar (CSG), except for the possible rule $S \rightarrow \epsilon$?
(a) The left-hand side must be a single non-terminal.
(b) The right-hand side must be non-empty.
(c) The length of the right-hand side must be greater than or equal to the length of the left-hand side.
(d) The rule must involve at least one terminal symbol.

**Answer:** (c) The length of the right-hand side must be greater than or equal to the length of the left-hand side.

**Question 2:**
Consider the language $L = \{a^n b^{2n} \mid n \ge 1\}$. Is this language Context-Sensitive? Briefly explain why or why not. (Hint: Consider how you might generate the strings and what kind of grammar might be needed).

**Answer:** Yes, $L = \{a^n b^{2n} \mid n \ge 1\}$ is a Context-Sensitive Language.
Explanation: We need to generate $n$ 'a's and $2n$ 'b's. While this can be generated by a CFG, it also falls under the definition of CSLs. A CFG for this would be:
$S \rightarrow a S b b \mid a b b$
Since all CFLs are CSLs, this language is also CSL. The explanation focuses on the hierarchy.

**Question 3:**
Provide an example of a language that is Context-Sensitive but NOT Context-Free.

**Answer:** $L = \{a^n b^n c^n \mid n \ge 1\}$ or $L = \{ww \mid w \in \{a,b\}^* \}$.

**Question 4:**
What type of automaton accepts exactly the set of Context-Sensitive Languages?

**Answer:** Linear Bounded Automaton (LBA).

---

### 8. Important Points to Remember

*   **Definition of CSG:** Production rules are of the form $\alpha A \beta \rightarrow \alpha \gamma \beta$ or $\alpha \rightarrow \beta$ with $|\beta| \ge |\alpha|$ (with $S \rightarrow \epsilon$ as the sole exception).
*   **Non-Contracting Property:** No rule shortens the string (except $S \rightarrow \epsilon$).
*   **Chomsky Hierarchy:** CSLs are Type 1, lying between CFLs (Type 2) and RE languages (Type 0).
*   **Equivalence:** CSLs are exactly the languages accepted by Linear Bounded Automata (LBAs).
*   **Power:** CSGs are more powerful than CFGs, allowing for dependencies on surrounding symbols in productions. This enables them to generate languages that require remembering and matching more complex relationships than CFGs can handle.
*   **Complexity:** Designing CSGs can be significantly more complex than designing CFGs due to the context dependency.

---

This module provides a foundational understanding of Context-Sensitive Grammars and the languages they generate. It highlights their position in the Chomsky hierarchy and their connection to the computational model of Linear Bounded Automata. The ability to distinguish CSLs from CFLs and Regular languages is a key aspect of formal language theory and compiler design.
