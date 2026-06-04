---
title: "Foundations (Linz, Hopcroft)"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Foundations (Linz, Hopcroft)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab94"
status: "completed"
scrapedAt: "2026-05-20T16:29:39.143Z"
---
# Theory of Computation: Module 1 - Foundations (Linz, Hopcroft)

**Topic:** Foundations (Linz, Hopcroft)

**Learning Outcomes:** (These need to be defined. Assuming the most common outcomes for Foundations, these are used.)

*   Understand the fundamental concepts of formal languages, grammars, and automata.
*   Define and differentiate between alphabets, strings, and languages.
*   Explain the Chomsky Hierarchy of formal languages and their corresponding automata.
*   Describe the basic operations on languages (union, concatenation, Kleene star).
*   Represent and manipulate regular expressions.
*   Construct finite automata (DFA and NFA) to recognize regular languages.
*   Convert between regular expressions and finite automata.
*   Minimize deterministic finite automata (DFA).

## 1. Basic Concepts

*   **Alphabet (Σ):**
    *   A finite, non-empty set of symbols.
    *   Example: Σ = {0, 1} (binary alphabet), Σ = {a, b, c}
    *   Important: Alphabet can contain symbols that are not strictly "characters" or "numbers".

*   **String (w):**
    *   A finite sequence of symbols chosen from an alphabet.
    *   Example: If Σ = {0, 1}, then "0101", "111", "0", and "" are all strings over Σ.
    *   **Empty String (ε or λ):** A string with no symbols.  Its length is 0.
    *   **Length of a String (|w|):** The number of symbols in the string.  |0101| = 4, |ε| = 0.

*   **Language (L):**
    *   A set of strings formed from symbols of the alphabet.
    *   Important: A language is a *set* of strings.  It can be finite or infinite.
    *   Example: If Σ = {0, 1}, then:
        *   L = {0, 1, 00, 11, 01, 10} (a finite language)
        *   L = {w | w contains an equal number of 0s and 1s} (an infinite language)
        *   L = Σ\* (the language containing all possible strings over Σ, including ε).
        *   L = Ø (the empty language - a language with no strings)
        *   L = {ε} (a language containing only the empty string. NOT the same as the empty language)

*   **Σ\***:  The set of all possible strings (including the empty string) that can be formed using the symbols in the alphabet Σ. This is also sometimes called the Kleene Closure of Sigma.

*   **Σ+**:  Similar to Σ\*, but it does *not* include the empty string (ε).  It's defined as Σ\* - {ε}.  Also called the Positive Closure of Sigma.

## 2. Operations on Languages

Let L1 and L2 be languages over alphabet Σ.

*   **Union (L1 ∪ L2):** The set of all strings that are in L1 or L2 (or both).
    *   L1 ∪ L2 = {w | w ∈ L1 or w ∈ L2}
    *   Example: L1 = {0, 1}, L2 = {1, 11},  L1 ∪ L2 = {0, 1, 11}

*   **Concatenation (L1L2):** The set of all strings formed by concatenating a string from L1 with a string from L2.
    *   L1L2 = {w1w2 | w1 ∈ L1 and w2 ∈ L2}
    *   Example: L1 = {0, 1}, L2 = {1, 11},  L1L2 = {01, 011, 11, 111}

*   **Kleene Star (L\*):** The set of all strings formed by concatenating zero or more strings from L.
    *   L\* = {ε} ∪ L ∪ LL ∪ LLL ∪ ...
    *   Example: L = {0, 1}, L\* = {ε, 0, 1, 00, 01, 10, 11, 000, ...}  (All possible binary strings)

*   **Positive Closure (L+):** Similar to Kleene Star, but it concatenates one or more strings from L.
    *   L+ = L ∪ LL ∪ LLL ∪ ...  (L\* - {ε} if ε is not already in L)
    *   Example: L = {0, 1}, L+ = {0, 1, 00, 01, 10, 11, 000, ...} (All possible binary strings EXCEPT the empty string.)

*   **Reverse (LR):** The set of strings formed by reversing each string in L.
    *   LR = {wR | w ∈ L} where wR is the reverse of string w.
    *   Example: L = {01, 110}, LR = {10, 011}

## 3. Formal Grammars

*   **Definition:** A formal grammar is a set of rules for generating strings in a language.  It is a quadruple G = (V, T, P, S), where:
    *   **V:** A finite set of variables or non-terminal symbols.  These represent categories or placeholders in the grammar.
    *   **T:** A finite set of terminal symbols (the alphabet of the language).  These are the actual symbols that appear in the strings of the language. V and T are disjoint.
    *   **P:** A finite set of production rules.  Each rule has the form A → α, where A ∈ V and α ∈ (V ∪ T)\*.  This means A is a non-terminal, and α is a string of terminals and/or non-terminals. This represents how a non-terminal can be replaced.
    *   **S:** The start symbol (S ∈ V).  This is where the derivation process begins.

*   **Derivation:** A sequence of steps that starts with the start symbol and applies production rules to generate a string in the language.  We use the symbol => to denote a derivation step.
    *   Example: Let G = ({S}, {a, b}, {S → aSb, S → ε}, S).  A derivation of the string "aabb" is:
        *   S => aSb => aaSbb => aaaSbbb => aabb

*   **Language Generated by a Grammar (L(G)):** The set of all strings consisting of only terminal symbols that can be derived from the start symbol.
    *   L(G) = {w ∈ T\* | S =>\* w} where =>\* means "derives in zero or more steps."

## 4. The Chomsky Hierarchy

This is a classification of formal languages based on the complexity of their grammars and the power of the automata needed to recognize them.

*   **Type-0: Recursively Enumerable Languages (Unrestricted Grammars):**
    *   Grammars: No restrictions on the production rules (A → α where A ∈ V and α ∈ (V ∪ T)\*).
    *   Automata: Turing Machines
    *   Most general type of language.

*   **Type-1: Context-Sensitive Languages (Context-Sensitive Grammars):**
    *   Grammars: Production rules of the form αAβ → αγβ, where A ∈ V, α, β ∈ (V ∪ T)\*, and γ ∈ (V ∪ T)+ (γ cannot be empty).  Essentially, A can be replaced by γ only in the context of α and β.
    *   Automata: Linear Bounded Automata (LBA)
    *   The length of the string on the right-hand side of a production rule must be greater than or equal to the length of the left-hand side (except for the empty string production).

*   **Type-2: Context-Free Languages (Context-Free Grammars):**
    *   Grammars: Production rules of the form A → α, where A ∈ V and α ∈ (V ∪ T)\*. The left-hand side is a single non-terminal.
    *   Automata: Pushdown Automata (PDA)
    *   Widely used in programming language syntax.

*   **Type-3: Regular Languages (Regular Grammars):**
    *   Grammars: Production rules of the form A → aB or A → a, or A → Ba or A → a, where A, B ∈ V and a ∈ T.
    *   Automata: Finite Automata (DFA and NFA)
    *   Simplest type of language in the hierarchy.

**Key Relationships:**

*   Every regular language is context-free.
*   Every context-free language is context-sensitive.
*   Every context-sensitive language is recursively enumerable.
*   The reverse of these statements is NOT necessarily true.

## 5. Regular Expressions (RE)

*   **Definition:** A notation for describing patterns of strings. Regular expressions are used to define regular languages.

*   **Basic Regular Expressions:**
    *   `ε` (Epsilon): Represents the empty string.
    *   `a` (where a ∈ Σ): Represents the single character 'a'.

*   **Operations:**
    *   **Concatenation:**  If R1 and R2 are regular expressions, then `R1R2` represents the concatenation of the languages defined by R1 and R2.
    *   **Union (Alternation):** If R1 and R2 are regular expressions, then `R1 | R2` (or sometimes `R1 + R2`) represents the union of the languages defined by R1 and R2.
    *   **Kleene Star:** If R is a regular expression, then `R*` represents the Kleene star of the language defined by R.

*   **Precedence (Highest to Lowest):**
    *   Kleene Star (*)
    *   Concatenation
    *   Union (|)

*   **Examples:**
    *   `a*`: Represents the language {ε, a, aa, aaa, ...} (zero or more 'a's)
    *   `a|b`: Represents the language {a, b}
    *   `ab`: Represents the language {ab}
    *   `(a|b)*`: Represents the language of all strings over {a, b}
    *   `a(b|c)*`: Represents strings that start with 'a' followed by any combination of 'b's and 'c's.

## 6. Finite Automata (FA)

*   **Definition:** A mathematical model of a simple machine that can recognize regular languages.  There are two main types: Deterministic Finite Automata (DFA) and Non-deterministic Finite Automata (NFA).

*   **Deterministic Finite Automaton (DFA):**
    *   A DFA is a 5-tuple M = (Q, Σ, δ, q0, F), where:
        *   **Q:** A finite set of states.
        *   **Σ:** A finite input alphabet.
        *   **δ:** A transition function: Q x Σ → Q.  For each state and input symbol, there is exactly one next state.
        *   **q0:** The start state (q0 ∈ Q).
        *   **F:** A set of accepting states (F ⊆ Q).

*   **Non-deterministic Finite Automaton (NFA):**
    *   An NFA is a 5-tuple M = (Q, Σ, δ, q0, F), where:
        *   **Q:** A finite set of states.
        *   **Σ:** A finite input alphabet.
        *   **δ:** A transition function: Q x Σ → P(Q) (where P(Q) is the power set of Q).  For each state and input symbol, there can be zero, one, or multiple next states.  Also, transitions on the empty string (ε-transitions) are allowed.
        *   **q0:** The start state (q0 ∈ Q).
        *   **F:** A set of accepting states (F ⊆ Q).

*   **Key Differences between DFA and NFA:**
    *   **Deterministic vs. Non-deterministic:**  In a DFA, for each state and input symbol, there's exactly one next state.  In an NFA, there can be multiple next states, or no next state.
    *   **ε-transitions:** NFAs can have transitions on the empty string (ε), meaning the automaton can change state without reading any input. DFAs do not have ε-transitions.
    *   **Transition Function:** The range of the transition function is different.  DFA: Q, NFA: P(Q).
    *   **Power:**  DFAs and NFAs have the same computational power; they both recognize regular languages.  However, NFAs can sometimes be more concise and easier to design.

*   **Acceptance of a String:**
    *   **DFA:** A string w is accepted by a DFA if, starting from the start state, after reading the entire string w, the DFA ends up in an accepting state.
    *   **NFA:** A string w is accepted by an NFA if there exists at least one path, starting from the start state, that leads to an accepting state after reading the entire string w.

## 7. Equivalence of Regular Expressions and Finite Automata

*   **Kleene's Theorem:** A language is regular if and only if it can be described by a regular expression, or recognized by a finite automaton (DFA or NFA).

*   **Conversion: Regular Expression to NFA (Thompson's Construction):**  A systematic way to build an NFA from a regular expression.
    *   For `ε`, create an NFA with two states and an ε-transition between them.
    *   For `a`, create an NFA with two states and an 'a' transition between them.
    *   For `R1 | R2`, create a new start state with ε-transitions to the start states of the NFAs for R1 and R2. Create a new accepting state with ε-transitions from the accepting states of the NFAs for R1 and R2.
    *   For `R1R2`, connect the accepting state of the NFA for R1 to the start state of the NFA for R2 with an ε-transition.
    *   For `R*`, create a new start state and a new accepting state. Add ε-transitions from the new start state to the original start state, from the original accepting state to the new accepting state, from the new start state to the new accepting state, and from the original accepting state to the original start state.

*   **Conversion: NFA to DFA (Subset Construction):** A method for converting an NFA to an equivalent DFA.
    *   The states of the DFA are sets of states from the NFA (subsets of the NFA's state set).
    *   The start state of the DFA is the ε-closure of the NFA's start state (the set of all states reachable from the NFA's start state by following only ε-transitions).
    *   The transition function of the DFA is defined as follows:  δ'(S, a) = ε-closure(∪ δ(q, a) for all q in S), where S is a state in the DFA (a set of NFA states), 'a' is an input symbol, and δ(q, a) is the set of NFA states reachable from state q on input 'a'.
    *   The accepting states of the DFA are all states that contain at least one accepting state from the NFA.

## 8. Minimization of DFAs

*   **Motivation:** Given a DFA, find an equivalent DFA with the minimum number of states. This is useful for efficiency and optimization.

*   **Algorithm (Table-Filling Algorithm):**
    1.  **Initialization:** Create a table of all pairs of states (p, q) where p ≠ q. Mark all pairs (p, q) where p ∈ F and q ∉ F (or vice versa) as distinguishable.
    2.  **Iteration:** For each unmarked pair (p, q), consider all input symbols 'a' in Σ. Calculate the next states δ(p, a) and δ(q, a).  If the pair (δ(p, a), δ(q, a)) is marked as distinguishable, then mark (p, q) as distinguishable.
    3.  **Repeat:** Repeat step 2 until no new pairs are marked as distinguishable.
    4.  **Merge:** All pairs (p, q) that remain unmarked are equivalent. Merge these states into a single state in the minimized DFA.

*   **Result:** The resulting DFA is the minimal DFA equivalent to the original DFA.

## Practice Questions and Exercises

1.  **Alphabet and Strings:**
    *   Let Σ = {a, b}.  List all strings of length 3 or less over Σ.
    *   What is the length of the string "abbaba"?
    *   What is Σ\* for Σ = {0}?
    *   What is Σ+ for Σ = {1,2}?

2.  **Language Operations:**
    *   Let L1 = {0, 11} and L2 = {1, 00}. Compute L1 ∪ L2, L1L2, and L1\*.
    *   Let L = {ab, ba}. What is L2 (L concatenated with itself)?
    *   If L = {a, aa}, what is L+? What is L*?

3.  **Regular Expressions:**
    *   Write a regular expression for the language of all strings over {0, 1} that start with 0 and end with 1.
    *   Write a regular expression for the language of all strings over {a, b} that contain the substring "abb".
    *   Describe the language represented by the regular expression `(a|b)*abb(a|b)*`.
    *   Convert the regular expression `(a|b)*a` to an NFA using Thompson's construction.

4.  **Finite Automata:**
    *   Draw a DFA that accepts the language of all binary strings (over {0, 1}) that contain an even number of 0s.
    *   Draw an NFA that accepts the language of all strings over {a, b} that end in "ab".
    *   Convert the NFA from the previous question to a DFA using the subset construction.
    *   Minimize the following DFA: (Assume the states are A, B, C, D, E with A being the start state and E being the accept state. Transitions are as follows:
            *   A on 0 -> B, A on 1 -> C
            *   B on 0 -> A, B on 1 -> D
            *   C on 0 -> D, C on 1 -> A
            *   D on 0 -> C, D on 1 -> B
            *   E on 0 -> E, E on 1 -> E

5.  **Chomsky Hierarchy:**
    *   Which type of language is {anbn | n >= 0}?  Why?
    *   Give an example of a language that is context-free but not regular.
    *   What type of automaton is required to recognize a context-sensitive language?

## Answers to Practice Questions

1.  **Alphabet and Strings:**
    *   {ε, a, b, aa, ab, ba, bb, aaa, aab, aba, abb, baa, bab, bba, bbb}
    *   6
    *   {ε, 0, 00, 000, 0000, ...}
    *   {1,2,11,12,21,22,111,112,121,122,211,212,221,222,...}

2.  **Language Operations:**
    *   L1 ∪ L2 = {0, 11, 1, 00}
    *   L1L2 = {01, 000, 111, 1100}
    *   L1\* = {ε, 0, 11, 00, 011, 110, 1111, ...} (all strings formed by concatenating 0s and 11s)
    *   L2 = {abab, abba, baab, baba}
    *   L+ = {a, aa, aa, aaa, aaaa, ...} = {a, aa, aaa, aaaa,...}.   L* = {ε, a, aa, aaa, aaaa, ...}

3.  **Regular Expressions:**
    *   `0(0|1)*1`
    *   `(a|b)*abb(a|b)*`
    *   The language of all strings over {a, b} that contain the substring "abb".
    *   (Diagram not possible in text - Use Thompson's construction steps from notes)

4.  **Finite Automata:**
    *   (Diagram not possible in text - A standard DFA design problem)
    *   (Diagram not possible in text - A standard NFA design problem)
    *   (Diagram not possible in text - Follow the subset construction algorithm. The resulting DFA is often larger than the original NFA.)
    *   **Minimization of DFA:**
        1.  Initialization: Distinguish {A,B,C,D} from {E} (since E is the only accepting state)
        2.  Iteration:
            * Look at pairs (A,B), (A,C), (A,D), (B,C), (B,D), (C,D):
            * Consider pair (A,B): δ(A,0) = B, δ(B,0) = A.  (B,A) which are already being evaluated. δ(A,1) = C, δ(B,1) = D. (C,D)
            * Consider pair (C,D): δ(C,0) = D, δ(D,0) = C. δ(C,1) = A, δ(D,1) = B. Pair (A,B)
            * So (A,B) and (C,D) depend on each other.  Are they distinguishable?
        3. Consider pair (A,C): δ(A,0) = B, δ(C,0) = D. Pair (B,D). Look at (B,D).
        4.  Iteration:
            *  Consider pair (B,D): δ(B,0) = A, δ(D,0) = C. Pair (A,C). Consider pair (A,C): δ(A,1) = C, δ(C,1) = A, Pair (C,A)
        We notice there is a loop. States (A,B), (C,D) are indistinguishable.

        Therefore we can merge A, B into a single state (let's call it AB) and C,D into a single state (let's call it CD). The minimized DFA will have three states AB, CD, E with AB being the start state and E being the accept state. Transitions are as follows:

        *   AB on 0 -> AB, AB on 1 -> CD
        *   CD on 0 -> CD, CD on 1 -> AB
        *   E on 0 -> E, E on 1 -> E

5.  **Chomsky Hierarchy:**
    *   Context-free. It can be generated by a context-free grammar: S → aSb | ε. It is not regular, provable using the Pumping Lemma.
    *   {anbn | n >= 0} is a classic example. Another example is any language involving balanced parentheses.
    *   Linear Bounded Automaton (LBA).

## Important Points to Remember

*   The empty string (ε) is a string of length 0.  It is different from the empty language (Ø).
*   Regular expressions, NFAs, and DFAs are equivalent ways to represent regular languages.
*   The Chomsky hierarchy provides a way to classify languages based on their complexity and the power of the automata needed to recognize them.
*   The subset construction allows you to convert any NFA into an equivalent DFA.
*   The minimization algorithm helps you find the smallest possible DFA for a given regular language.
*   Always remember the definitions and relationships between alphabets, strings, and languages.
*   Practice constructing regular expressions and finite automata to solidify your understanding.
