---
title: "Homomorphisms"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Languages "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f17"
status: "completed"
scrapedAt: "2026-05-23T16:19:30.906Z"
---
# THEORY OF COMPUTATION

## Module 2: Regular Languages

### Topic: Homomorphisms

---

### 1. Introduction to Homomorphisms

**Definition:** A homomorphism on an alphabet $\Sigma$ is a function $h: \Sigma^* \to \Delta^*$ where $\Delta$ is another alphabet, such that for any strings $x, y \in \Sigma^*$:

$h(xy) = h(x)h(y)$

This means a homomorphism is a string-preserving substitution. It replaces each symbol in $\Sigma$ with a string in $\Delta^*$ and concatenates these replacements for the entire string.

**Key Properties:**

*   **Identity:** $h(\epsilon) = \epsilon$ (The homomorphism of the empty string is the empty string).
*   **Concatenation Preservation:** As stated in the definition, $h(xy) = h(x)h(y)$.
*   **Inductive Definition:** A homomorphism $h: \Sigma^* \to \Delta^*$ can be defined by specifying $h(a)$ for each $a \in \Sigma$. Then, for any string $w = a_1 a_2 \dots a_n$, $h(w) = h(a_1)h(a_2)\dots h(a_n)$.

**Relevance to Regular Languages:** Homomorphisms are important because they preserve regularity. If $L$ is a regular language over alphabet $\Sigma$, and $h$ is a homomorphism from $\Sigma^*$ to $\Delta^*$, then the image of $L$ under $h$, denoted as $h(L) = \{h(w) \mid w \in L\}$, is also a regular language over $\Delta$.

This property is crucial for understanding the closure properties of regular languages and for constructing automata for related languages.

**Textbook Reference:**

*   **Kozen, "Automata and Computability" (1999):** Kozen discusses homomorphisms as a form of mapping between alphabets and their preservation of formal language properties. Look for sections on "Homomorphisms" or "Mappings of Alphabets."
*   **Hopcroft, Motwani, Ullman, "Introduction to Automata Theory, Languages, and Computation" (2007):** This book also covers homomorphisms as a way to transform strings and languages, often in the context of closure properties.
*   **Sipser, "Introduction to Theory of Computation" (2013):** Sipser also defines and uses homomorphisms to show closure properties and relate different types of automata.

---

### 2. Defining a Homomorphism

A homomorphism is completely determined by its action on the individual symbols of the source alphabet.

**Formal Definition:**

Let $\Sigma$ and $\Delta$ be alphabets. A function $h: \Sigma \to \Delta^*$ is a homomorphism. This function is extended to strings by defining:

1.  $h(\epsilon) = \epsilon$
2.  $h(wa) = h(w)h(a)$ for any string $w \in \Sigma^*$ and symbol $a \in \Sigma$.

This definition is equivalent to the string concatenation preservation property.

---

### 3. Examples of Homomorphisms

**Example 1: Symbol Replacement**

Let $\Sigma = \{a, b\}$ and $\Delta = \{0, 1\}$.
Define a homomorphism $h: \Sigma^* \to \Delta^*$ as follows:
$h(a) = 01$
$h(b) = 10$

Let's see how $h$ acts on some strings:

*   $h(\epsilon) = \epsilon$
*   $h(a) = 01$
*   $h(b) = 10$
*   $h(ab) = h(a)h(b) = (01)(10) = 0110$
*   $h(ba) = h(b)h(a) = (10)(01) = 1001$
*   $h(aba) = h(a)h(b)h(a) = (01)(10)(01) = 011001$

**Example 2: Erasing Symbols (E-উৎপাদন)**

Let $\Sigma = \{a, b, c\}$ and $\Delta = \{a, b\}$.
Define a homomorphism $h: \Sigma^* \to \Delta^*$ as follows:
$h(a) = a$
$h(b) = b$
$h(c) = \epsilon$

This homomorphism effectively deletes all occurrences of the symbol 'c'.

*   $h(abc) = h(a)h(b)h(c) = a \cdot b \cdot \epsilon = ab$
*   $h(cacb) = h(c)h(a)h(c)h(b) = \epsilon \cdot a \cdot \epsilon \cdot b = ab$

This is also known as an **erasing homomorphism** if the image of at least one symbol is $\epsilon$.

**Example 3: Renaming Symbols**

Let $\Sigma = \{0, 1\}$ and $\Delta = \{x, y\}$.
Define a homomorphism $h: \Sigma^* \to \Delta^*$ as follows:
$h(0) = x$
$h(1) = y$

This homomorphism simply renames the symbols.

*   $h(010) = h(0)h(1)h(0) = xyx$

---

### 4. Homomorphisms and Regular Languages (Closure Property)

A fundamental result concerning homomorphisms is that they preserve regularity.

**Theorem:** If $L$ is a regular language over alphabet $\Sigma$, and $h: \Sigma^* \to \Delta^*$ is a homomorphism, then the language $h(L) = \{h(w) \mid w \in L\}$ is also a regular language over $\Delta$.

**Proof Idea (using Finite Automata):**

Since $L$ is regular, there exists a Deterministic Finite Automaton (DFA) $M = (Q, \Sigma, \delta, q_0, F)$ that accepts $L$. We can construct a DFA $M'$ that accepts $h(L)$.

The states of $M'$ will be the same as the states of $M$: $Q' = Q$.
The input alphabet of $M'$ will be $\Delta$.
The initial state of $M'$ will be the same as $M$: $q'_0 = q_0$.
The final states of $M'$ will be the same as $M$: $F' = F$.

The transition function $\delta'$ of $M'$ needs to be defined for inputs from $\Delta^*$. For a state $q \in Q$ and an input string $x \in \Delta^*$, $\delta'(q, x)$ is the state reached from $q$ after processing $x$.

The key is to define $\delta'$ using the homomorphism $h$. For any state $q \in Q$ and symbol $a \in \Delta$, we want to find the state reached by processing $h^{-1}(a)$. This is a bit tricky because $h^{-1}(a)$ might not be a single symbol or might not even exist.

A more constructive approach is to define a Nondeterministic Finite Automaton (NFA) $M'$ that accepts $h(L)$.

Let $M = (Q, \Sigma, \delta, q_0, F)$ be a DFA accepting $L$. We construct an NFA $M' = (Q', \Delta, \delta', q'_0, F')$ for $h(L)$.

*   $Q' = Q$ (States are the same)
*   $\Delta$ is the input alphabet for $M'$
*   $q'_0 = q_0$ (Initial state is the same)
*   $F' = F$ (Final states are the same)

The transition function $\delta': Q' \times \Delta^* \to \mathcal{P}(Q')$ is defined as follows:
For any state $q \in Q$ and symbol $b \in \Delta$:
$\delta'(q, b) = \bigcup_{a \in \Sigma \text{ such that } h(a) \text{ starts with } b} \delta(q, a)$

This definition needs refinement to handle multi-symbol outputs of $h$. The standard construction is more involved. A more direct way to prove this is using the fact that regular languages are closed under homomorphism.

**Alternative Proof Approach (using Regular Expressions):**

If $L$ is a regular language, it can be represented by a regular expression $R$. The language $h(L)$ can be represented by the regular expression $h(R)$, where $h$ is applied to the symbols in $R$. The operation of applying a homomorphism to a regular expression preserves its regularity. Specifically:

*   $h(\epsilon) = \epsilon$
*   $h(\emptyset) = \emptyset$
*   If $R_1$ and $R_2$ are regular expressions, then $h(R_1 R_2) = h(R_1)h(R_2)$, $h(R_1 + R_2) = h(R_1) + h(R_2)$, and $h((R_1)^*) = (h(R_1))^*$.
*   For a symbol $a \in \Sigma$, $h(a)$ is a string in $\Delta^*$. This string $h(a)$ can be considered a regular expression.

If $R$ is a regular expression over $\Sigma$, let $h(R)$ be the expression obtained by applying $h$ to each symbol in $R$ and preserving the structure of operations. For example, if $R = a^*b$, then $h(R) = (h(a))^*h(b)$. The resulting expression $h(R)$ is a regular expression over $\Delta$, and it accepts $h(L)$.

**Example:**

Let $L = \{a^n b^n \mid n \ge 0\}$ over $\Sigma = \{a, b\}$. This is NOT a regular language.
Let $h: \Sigma^* \to \{0\}^*$ be $h(a) = 0$ and $h(b) = 0$.
Then $h(L) = \{0^n 0^n \mid n \ge 0\} = \{0^{2n} \mid n \ge 0\}$.
This language $h(L)$ is regular, it can be accepted by a DFA.
This example illustrates that applying a homomorphism can transform a non-regular language into a regular one.

**Crucial Point:** The theorem states that if $L$ is *regular*, then $h(L)$ is *regular*.

---

### 5. Inverse Homomorphisms

While homomorphisms preserve regularity, their inverse operations might not.

**Definition:** For a homomorphism $h: \Sigma^* \to \Delta^*$ and a language $L \subseteq \Delta^*$, the **inverse homomorphism** of $L$ with respect to $h$ is defined as:

$h^{-1}(L) = \{w \in \Sigma^* \mid h(w) \in L\}$

This means we are looking for all strings in $\Sigma^*$ whose homomorphic image is in $L$.

**Theorem:** If $L$ is a regular language over alphabet $\Delta$, and $h: \Sigma^* \to \Delta^*$ is a homomorphism, then the inverse homomorphism $h^{-1}(L)$ is also a regular language over $\Sigma$.

**Proof Idea (using Finite Automata):**

Let $M = (Q, \Delta, \delta, q_0, F)$ be a DFA that accepts $L$. We construct a DFA $M' = (Q', \Sigma, \delta', q'_0, F')$ that accepts $h^{-1}(L)$.

*   $Q' = Q$ (The states of the new automaton will be the same as the original DFA's states.)
*   $\Sigma$ is the input alphabet for $M'$.
*   $q'_0 = q_0$ (The initial state is the same.)
*   $F' = F$ (The final states are the same.)

The transition function $\delta': Q' \times \Sigma \to Q'$ is defined as follows:
For any state $q \in Q$ and symbol $a \in \Sigma$, we need to determine which state $\delta'(q, a)$ leads to. This new state should represent the state reached in the original DFA $M$ after processing the string $h(a)$.
So, for each $a \in \Sigma$, we define:

$\delta'(q, a) = \delta(q, h(a))$

This works because $h(a)$ is a string over $\Delta$. The DFA $M$ can process this string $h(a)$ from state $q$. The state reached, $\delta(q, h(a))$, is the state that $M'$ should transition to from $q$ upon reading the symbol $a$.

**Example:**

Let $\Sigma = \{a, b\}$ and $\Delta = \{0, 1\}$.
Let $h: \Sigma^* \to \Delta^*$ be defined by $h(a) = 0$ and $h(b) = 01$.
Let $L = \{00, 010\}$ over $\Delta$. $L$ is a regular language.
We want to find $h^{-1}(L)$ over $\Sigma$.

$h^{-1}(L) = \{w \in \{a, b\}^* \mid h(w) \in \{00, 010\}\}$

Let's analyze the possible homomorphic images:
*   $h(a) = 0$
*   $h(b) = 01$
*   $h(aa) = h(a)h(a) = 00$ (So, $aa \in h^{-1}(L)$)
*   $h(ab) = h(a)h(b) = 001$ (Not in L)
*   $h(ba) = h(b)h(a) = 010$ (So, $ba \in h^{-1}(L)$)
*   $h(bb) = h(b)h(b) = 0101$ (Not in L)
*   $h(aaa) = 000$ (Not in L)
*   $h(aab) = 0001$ (Not in L)
*   $h(aba) = 0010$ (Not in L)
*   $h(abb) = 00101$ (Not in L)
*   $h(baa) = 0100$ (Not in L)
*   $h(bab) = 01001$ (Not in L)
*   $h(bba) = 01010$ (Not in L)
*   $h(bbb) = 010101$ (Not in L)

So, $h^{-1}(L) = \{aa, ba\}$. This is a regular language.

**Constructing the DFA for $h^{-1}(L)$:**

Let $L = \{00, 010\}$ be accepted by DFA $M$:
States: $Q = \{q_0, q_1, q_2, q_3\}$
Alphabet: $\Delta = \{0, 1\}$
Start State: $q_0$
Final States: $F = \{q_2, q_3\}$

Transitions:
$\delta(q_0, 0) = q_1$
$\delta(q_0, 1) = \text{dead state (or error)}$
$\delta(q_1, 0) = q_2$
$\delta(q_1, 1) = \text{dead state}$
$\delta(q_2, 0) = \text{dead state}$
$\delta(q_2, 1) = \text{dead state}$
$\delta(q_3, 0) = q_1$  (This transition is for processing the '0' after '01' in '010')
$\delta(q_3, 1) = \text{dead state}$ (Mistake in manual DFA construction for L. Let's correct L and its DFA)

Let's use a simpler example for L.
Let $L = \{00\}$ over $\Delta = \{0, 1\}$. DFA $M$ for $L$:
States: $\{q_0, q_1, q_2\}$
Alphabet: $\{0, 1\}$
Start State: $q_0$
Final States: $\{q_2\}$
Transitions:
$\delta(q_0, 0) = q_1$
$\delta(q_0, 1) = \text{dead state}$
$\delta(q_1, 0) = q_2$
$\delta(q_1, 1) = \text{dead state}$
$\delta(q_2, 0) = \text{dead state}$
$\delta(q_2, 1) = \text{dead state}$

Homomorphism: $h(a) = 0$, $h(b) = 01$.

Now, construct DFA $M'$ for $h^{-1}(L)$:
States: $\{q_0, q_1, q_2\}$ (same as $M$)
Alphabet: $\{a, b\}$
Start State: $q_0$
Final States: $\{q_2\}$ (same as $M$)

Transitions using $\delta'(q, \text{symbol}) = \delta(q, h(\text{symbol}))$:

*   For symbol 'a':
    $\delta'(q_0, a) = \delta(q_0, h(a)) = \delta(q_0, 0) = q_1$
    $\delta'(q_1, a) = \delta(q_1, h(a)) = \delta(q_1, 0) = q_2$
    $\delta'(q_2, a) = \delta(q_2, h(a)) = \delta(q_2, 0) = \text{dead state}$

*   For symbol 'b':
    $\delta'(q_0, b) = \delta(q_0, h(b)) = \delta(q_0, 01)$
    To calculate $\delta(q_0, 01)$:
    $\delta(q_0, 0) = q_1$
    $\delta(q_1, 1) = \text{dead state}$
    So, $\delta'(q_0, b) = \text{dead state}$

    $\delta'(q_1, b) = \delta(q_1, h(b)) = \delta(q_1, 01)$
    To calculate $\delta(q_1, 01)$:
    $\delta(q_1, 0) = q_2$
    $\delta(q_2, 1) = \text{dead state}$
    So, $\delta'(q_1, b) = \text{dead state}$

    $\delta'(q_2, b) = \delta(q_2, h(b)) = \delta(q_2, 01)$
    To calculate $\delta(q_2, 01)$:
    $\delta(q_2, 0) = \text{dead state}$
    So, $\delta'(q_2, b) = \text{dead state}$

The DFA $M'$ has transitions:
$\delta'(q_0, a) = q_1$
$\delta'(q_1, a) = q_2$
$\delta'(q_0, b) = \text{dead}$
$\delta'(q_1, b) = \text{dead}$
$\delta'(q_2, a) = \text{dead}$
$\delta'(q_2, b) = \text{dead}$

This DFA accepts strings ending in 'aa'.
Let's check:
$h^{-1}(L) = \{w \in \{a, b\}^* \mid h(w) = 00\}$
$h(a) = 0$
$h(aa) = h(a)h(a) = 00$. So $aa \in h^{-1}(L)$.
$h(ba) = h(b)h(a) = 010$. Not 00.
$h(ab) = h(a)h(b) = 001$. Not 00.

It seems my initial example of $h^{-1}(L)$ calculation was for a different $L$. Let's stick to $L=\{00\}$.

$h^{-1}(\{00\}) = \{w \mid h(w) = 00\}$
Since $h(a)=0$ and $h(b)=01$, the only way to get 00 is by concatenating two $h(a)$s.
So, $h^{-1}(\{00\}) = \{aa\}$.

The DFA we constructed accepts $\{aa\}$. The calculation is correct.

**Important Note:** If $L$ is NOT regular, $h^{-1}(L)$ may or may not be regular. The theorem only guarantees regularity if $L$ itself is regular.

---

### 6. Applications and Connections to Course Outcomes

*   **CO1: Classify a given formal language into Regular, Context-Free, Context Sensitive, Recursive or Recursively Enumerable.**
    *   Homomorphisms are key in proving closure properties of regular languages. If we can show that a language $L$ can be obtained from a regular language $R$ by a homomorphism ($L = h(R)$) or that $L$ is the inverse image of a regular language under a homomorphism ($L = h^{-1}(R)$), then $L$ is regular. This helps in classifying languages.

*   **CO2: Design finite state automata, regular grammar, and regular representations for regular languages.**
    *   The proofs that $h(L)$ and $h^{-1}(L)$ are regular provide constructive methods (via DFA transformations) to design automata for these related languages. This directly supports CO2.

*   **CO3 & CO4: (Context-Free and Turing Machines)**
    *   While homomorphisms primarily operate on regular languages, the concept can be extended. For example, homomorphisms on context-free languages result in context-free languages. However, the focus of this module is regular languages, so these outcomes are indirectly supported by understanding the limitations and scope of homomorphism properties.

---

### 7. Practice Questions and Exercises

**Question 1:**
Let $\Sigma = \{a, b\}$ and $\Delta = \{x, y, z\}$.
Define a homomorphism $h: \Sigma^* \to \Delta^*$ as follows:
$h(a) = xy$
$h(b) = yz$

What is $h(aba)$?
(a) $xyxyz$
(b) $xyyz$
(c) $xyyzxy$
(d) $xyzxyz$

**Answer 1:**
$h(aba) = h(a)h(b)h(a) = (xy)(yz)(xy) = xyxyzxy$.
Correct Answer: (c)

**Question 2:**
Let $L = \{w \in \{a, b\}^* \mid w \text{ contains an even number of } a\text{'s}\}$. Is $L$ regular? If yes, provide a regular expression. Now, consider a homomorphism $h: \{a, b\}^* \to \{0\}^*$ defined by $h(a) = 0$ and $h(b) = 0$. What is $h(L)$? Is $h(L)$ regular?

**Answer 2:**
*   $L$ is regular. A regular expression for $L$ is $(b^*ab^*ab^*)^*b^*$.
    *   States: $q_{even}$ (even number of 'a's), $q_{odd}$ (odd number of 'a's).
    *   Start state: $q_{even}$.
    *   Accepting state: $q_{even}$.
    *   Transitions:
        *   $\delta(q_{even}, a) = q_{odd}$
        *   $\delta(q_{even}, b) = q_{even}$
        *   $\delta(q_{odd}, a) = q_{even}$
        *   $\delta(q_{odd}, b) = q_{odd}$

*   $h(a) = 0$, $h(b) = 0$.
*   For any string $w \in \{a, b\}^*$, $h(w)$ will be a string of zeros.
    *   If $w$ has $n$ 'a's and $m$ 'b's, then $h(w)$ consists of $n$ repetitions of $h(a)$ and $m$ repetitions of $h(b)$.
    *   $h(w) = \underbrace{00\dots0}_{n \text{ times}} \underbrace{00\dots0}_{m \text{ times}} = 0^{n+m}$.
*   $h(L) = \{h(w) \mid w \in L\}$.
    *   If $w \in L$, it has an even number of 'a's. Let $w$ have $n$ 'a's where $n$ is even.
    *   $h(w) = 0^{n+m}$.
    *   Consider $w = \epsilon$. $n=0$ (even). $h(\epsilon) = \epsilon$. $h(L)$ contains $\epsilon$.
    *   Consider $w = bb$. $n=0$ (even). $h(bb) = 00$. $h(L)$ contains $00$.
    *   Consider $w = abba$. $n=2$ (even). $h(abba) = 0000$. $h(L)$ contains $0000$.
*   In fact, any string of zeros is in $h(L)$. If $0^k \in h(L)$, then there exists $w \in L$ such that $h(w) = 0^k$. This means $w$ has $n+m=k$ symbols. Since $w \in L$, $n$ must be even. We can construct such a $w$. For example, if $k$ is even, we can take $w = b^k$, which has 0 'a's (even), so $w \in L$ and $h(w) = 0^k$. If $k$ is odd, we can take $w = a b^{k-1}$. This $w$ has 1 'a' (odd), so it's not in $L$.
    Let's re-examine.
    If $w \in L$, then $w$ has an even number of $a$'s.
    $h(w)$ is a string of zeros of length equal to the length of $w$.
    Let $w = aabaa$. $w \in L$ (4 'a's). $h(w) = 00000$. Length is 5.
    Let $w = bb$. $w \in L$ (0 'a's). $h(w) = 00$. Length is 2.
    So, $h(L) = \{0^k \mid k \text{ is the length of some string in } L\}$.
    The lengths of strings in $L$ can be any non-negative integer. For any length $k \ge 0$, the string $b^k$ has 0 'a's, so $b^k \in L$. Therefore, $h(b^k) = 0^k \in h(L)$.
    So, $h(L) = \{0^k \mid k \ge 0\} = (0)^*$.

*   Yes, $h(L)$ is regular. Its regular expression is $0^*$.

**Question 3:**
Let $\Sigma = \{a, b\}$ and $\Delta = \{0\}$.
Let $h: \Sigma^* \to \Delta^*$ be defined by $h(a) = 0$ and $h(b) = \epsilon$.
Let $L = \{00, 000\}$ over $\Delta$. Is $L$ regular? Find $h^{-1}(L)$. Is $h^{-1}(L)$ regular?

**Answer 3:**
*   $L = \{0^2, 0^3\}$. This is a finite language, and all finite languages are regular. A regular expression is $00 + 000$.

*   $h^{-1}(L) = \{w \in \{a, b\}^* \mid h(w) \in \{00, 000\}\}$.
    Since $h(b) = \epsilon$, $h$ effectively removes all 'b's.
    $h(w)$ is a string of '0's, where the number of '0's is the number of 'a's in $w$.
    So, we are looking for strings $w$ with either 2 'a's or 3 'a's, and any number of 'b's.
    *   Case 1: $h(w) = 00$. This means $w$ must contain exactly two 'a's. The 'b's can appear anywhere.
        Examples: $aa$, $aba$, $baa$, $abbbaa$.
        The set of strings with exactly two 'a's is $\{b^*ab^*ab^*\}$.
    *   Case 2: $h(w) = 000$. This means $w$ must contain exactly three 'a's. The 'b's can appear anywhere.
        Examples: $aaa$, $aaba$, $babab$.
        The set of strings with exactly three 'a's is $\{b^*ab^*ab^*ab^*\}$.

*   $h^{-1}(L) = \{w \mid w \text{ has exactly 2 'a's}\} \cup \{w \mid w \text{ has exactly 3 'a's}\}$.
    $h^{-1}(L) = \{b^*ab^*ab^*\} \cup \{b^*ab^*ab^*ab^*\}$.

*   Yes, $h^{-1}(L)$ is regular because it is a union of two regular languages.

---

### 8. Important Points to Remember

*   **Homomorphism Definition:** A function $h: \Sigma^* \to \Delta^*$ such that $h(xy) = h(x)h(y)$ for all $x, y \in \Sigma^*$. It's defined by specifying $h(a)$ for each $a \in \Sigma$.
*   **Closure Property:** Homomorphisms preserve regularity. If $L$ is regular, then $h(L)$ is regular.
*   **Inverse Homomorphism Property:** The inverse image of a regular language under a homomorphism is regular. If $L$ is regular over $\Delta$, then $h^{-1}(L)$ is regular over $\Sigma$.
*   **Erasing Homomorphism:** A homomorphism $h$ where $h(a) = \epsilon$ for at least one symbol $a \in \Sigma$. Erasing homomorphisms can reduce the complexity of a language's representation but maintain regularity if the original language was regular.
*   **Applications:** Understanding these properties allows us to classify languages and construct automata for related languages, contributing to the broader understanding of formal language theory and its applications in areas like compiler design and pattern matching.

---
