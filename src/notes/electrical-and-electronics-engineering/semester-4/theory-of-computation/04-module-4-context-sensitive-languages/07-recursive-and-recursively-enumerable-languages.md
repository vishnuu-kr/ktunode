---
title: "Recursive and Recursively Enumerable Languages."
subject: "THEORY OF COMPUTATION"
module: "Module 4: Context Sensitive Languages "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f2a"
status: "completed"
scrapedAt: "2026-05-23T16:19:44.051Z"
---
# THEORY OF COMPUTATION - Module 4: Context Sensitive Languages

## Topic: Recursive and Recursively Enumerable Languages

---

### 1. Introduction to Recursive and Recursively Enumerable Languages

This section introduces two important classes of formal languages within the Chomsky hierarchy: Recursive Languages (also known as Decidable Languages) and Recursively Enumerable Languages (also known as Recognizable Languages). Understanding these classes is crucial for classifying formal languages (CO1) and for grasping the fundamental limits of computation, particularly the concept of decidability (CO5).

---

### 2. Turing Machines: The Foundation

Before delving into the language classes, we must revisit Turing Machines (TMs), as they are the computational model that defines these languages.

*   **Turing Machine (TM):** A theoretical model of computation consisting of an infinite tape, a read/write head, and a finite set of states. The TM operates based on a transition function that dictates its next move based on its current state and the symbol read from the tape.

    *   **Key Components:**
        *   **Finite set of states (Q):** The set of internal configurations of the TM.
        *   **Finite input alphabet ($\Sigma$):** The set of symbols that can appear in the input string.
        *   **Finite tape alphabet ($\Gamma$):** The set of symbols that can appear on the tape, where $\Sigma \subseteq \Gamma$.
        *   **Blank symbol ($B \in \Gamma$):** A special symbol used to fill empty cells on the tape.
        *   **Start state ($q_0 \in Q$):** The initial state of the TM.
        *   **Halt state(s) ($q_{halt} \in Q$):** States where the TM terminates its computation.
        *   **Transition function ($\delta: Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}$):** For a given state and tape symbol, it specifies the next state, the symbol to write on the tape, and the direction to move the tape head (Left or Right).

    *   **Operation:**
        *   A TM starts in the start state with the input string on the tape, surrounded by blanks. The tape head is positioned at the beginning of the input string.
        *   The TM follows the transition function.
        *   The TM halts if it enters a halt state.
        *   The TM may also enter an infinite loop, never halting.

    *   **Reference:** Kozen, Chapter 11 (Turing Machines); Hopcroft, Motwani, Ullman, Chapter 6 (Turing Machines); Sipser, Chapter 3 (Turing Machines).

---

### 3. Recursively Enumerable Languages (RE) / Recognizable Languages

This class of languages is defined by Turing Machines that *recognize* them.

*   **Definition (Recognizable Language):** A language $L$ is recursively enumerable if there exists a Turing Machine $M$ such that for any string $w$:
    *   If $w \in L$, then $M$ halts in an accepting state.
    *   If $w \notin L$, then $M$ either halts in a rejecting state or loops forever.

*   **Key Idea:** A TM *recognizes* a language if it accepts all strings in the language. For strings not in the language, the TM is not required to halt.

*   **Relationship to TM Acceptance:** If a TM $M$ accepts a string $w$, it means $M$ eventually enters an accepting state when started with $w$ on its tape. This implies a finite sequence of transitions.

*   **Alternative Definition (using Enumeration):** A language $L$ is recursively enumerable if there exists an algorithm (which can be implemented by a Turing Machine) that *enumerates* all strings in $L$. This means the enumerator prints out strings, one by one, with no duplicates, such that eventually every string in $L$ is printed.

    *   **Important Note:** If the language is infinite, the enumerator will run forever. However, for any string in the language, it *will* eventually be printed.

*   **Examples:**
    *   **$L_{TM} = \{ \langle M \rangle w \mid M \text{ is a TM and } M \text{ accepts } w \}$** (The Halting Problem is related to this, but this specific language is RE).
        *   **Intuition:** We can design a TM that simulates TM $M$ on input $w$. If $M$ accepts, our simulating TM halts and accepts. If $M$ rejects, our simulating TM halts and rejects. If $M$ loops, our simulating TM also loops. This TM recognizes $L_{TM}$.
    *   **All Turing-recognizable languages:** $L = \{ w \mid w \in L \}$, where $L$ is recognized by some TM.

*   **Key Theorem:** A language is recursively enumerable if and only if it is the domain of some partial recursive function.

*   **Reference:** Kozen, Chapter 11; Hopcroft, Motwani, Ullman, Chapter 5 (The Halting Problem - related to undecidability of RE languages); Sipser, Chapter 5 (Recursively Enumerable Languages).

---

### 4. Recursive Languages (R) / Decidable Languages / Recursive Enumerable Languages (in a stricter sense)

This class of languages is defined by Turing Machines that *decide* them.

*   **Definition (Decidable Language):** A language $L$ is decidable (or recursive) if there exists a Turing Machine $M$ that decides $L$. A TM $M$ decides $L$ if for any string $w$:
    *   If $w \in L$, then $M$ halts in an accepting state.
    *   If $w \notin L$, then $M$ halts in a rejecting state.
    *   **Crucially, $M$ *always* halts.**

*   **Key Idea:** A TM *decides* a language if it halts on *all* inputs, either accepting or rejecting. There is no possibility of looping. This is a stricter requirement than recognition.

*   **Relationship to TM Deciding:** If a TM $M$ decides a language $L$, it means for any string $w$, $M$ will always terminate in either an accepting or rejecting state.

*   **Alternative Definition (via Characteristic Function):** A language $L \subseteq \Sigma^*$ is decidable if its characteristic function $f_L: \Sigma^* \rightarrow \{0, 1\}$ is a computable function.
    *   $f_L(w) = 1$ if $w \in L$
    *   $f_L(w) = 0$ if $w \notin L$

*   **Examples:**
    *   **$L_{empty} = \{ \langle M \rangle \mid M \text{ is a TM and } L(M) = \emptyset \}$** (The language of TMs that accept no strings).
        *   **Intuition:** We can construct a TM that, given the description of a TM $\langle M \rangle$, simulates $M$ on all possible strings. If $M$ accepts any string, we reject $\langle M \rangle$. If $M$ never accepts any string (i.e., it rejects all strings or loops on all strings), we accept $\langle M \rangle$. The challenge here is that proving $L(M)$ is empty requires proving something about *all* possible inputs to $M$, which is equivalent to the Halting Problem in its general form. However, a TM can be constructed to *try* to find a string that $M$ accepts. If it finds one, it rejects $\langle M \rangle$. If it searches forever and never finds one, it might loop. The question is whether the TM for $L_{empty}$ *always* halts. The actual decidability of $L_{empty}$ is a subtle point, and it turns out *not* to be decidable. This is a classic example of an undecidable language.
    *   **$L_{finite} = \{ \langle M \rangle \mid M \text{ is a TM and } L(M) \text{ is finite} \}$** (The language of TMs that accept a finite number of strings).
        *   **Intuition:** Similar to the empty language, we need to check if $M$ accepts infinitely many strings. We can try to find strings that $M$ accepts. If we find infinitely many, we reject. If we find finitely many and confirm that $M$ does not accept any *new* strings after a certain point, we accept. This is also undecidable.
    *   **All regular languages:** Every regular language is decidable. A finite automaton (which recognizes regular languages) always halts.
    *   **All context-free languages:** Every context-free language is decidable. A pushdown automaton can be simulated by a TM, and there exist algorithms (like the CYK algorithm for Chomsky Normal Form grammars) that decide membership in context-free languages.

*   **Key Theorem:** A language is recursive if and only if it is the range of some total recursive function.

*   **Reference:** Kozen, Chapter 12 (Decidability); Hopcroft, Motwani, Ullman, Chapter 4 (Decidability); Sipser, Chapter 4 (Decidability).

---

### 5. The Relationship Between Recursive and Recursively Enumerable Languages

This is a crucial aspect for language classification (CO1).

*   **Theorem:** Every recursive language is recursively enumerable.
    *   **Proof Sketch:** If a language $L$ is recursive, there exists a decider TM $M_{decider}$ for $L$. This decider $M_{decider}$ always halts. If $w \in L$, $M_{decider}$ accepts. If $w \notin L$, $M_{decider}$ rejects. The decider $M_{decider}$ itself acts as a recognizer for $L$ because it accepts all strings in $L$ and either rejects (which counts as not accepting) or loops for strings not in $L$. Since it always halts, it certainly won't loop on strings not in $L$.

*   **Theorem:** A language $L$ is recursive if and only if both $L$ and its complement $\bar{L}$ are recursively enumerable.
    *   **Proof Sketch (if L is recursive $\Rightarrow$ L and $\bar{L}$ are RE):** If $L$ is recursive, there's a decider $M$ for $L$. $M$ accepts $w$ if $w \in L$ and rejects $w$ if $w \notin L$. This $M$ recognizes $L$. For $\bar{L}$, we can construct a TM $M'$ that first runs $M$. If $M$ accepts, $M'$ rejects. If $M$ rejects, $M'$ accepts. Since $M$ always halts, $M'$ will also always halt and correctly decide membership for $\bar{L}$. Thus, $\bar{L}$ is also recognized (and in fact, decided).
    *   **Proof Sketch (if L and $\bar{L}$ are RE $\Rightarrow$ L is recursive):** If $L$ is RE, there's a TM $M_1$ that accepts $w$ if $w \in L$ and may loop if $w \notin L$. If $\bar{L}$ is RE, there's a TM $M_2$ that accepts $w$ if $w \notin L$ and may loop if $w \in L$. We can construct a decider for $L$ as follows: Given an input $w$, run $M_1$ and $M_2$ simultaneously (e.g., interleaving their steps). If $M_1$ accepts, then $w \in L$, so our new TM accepts and halts. If $M_2$ accepts, then $w \notin L$, so our new TM rejects and halts. Since $w$ must be either in $L$ or $\bar{L}$, one of $M_1$ or $M_2$ must eventually accept, ensuring our new TM always halts.

*   **Implication:** There exist recursively enumerable languages that are *not* recursive. These are the languages whose complements are not recursively enumerable.

*   **The Halting Problem ($Halt_{TM}$):** This is a classic example of a language that is RE but not recursive.
    *   $Halt_{TM} = \{ \langle M \rangle w \mid M \text{ is a TM and } M \text{ accepts } w \}$
    *   We know $Halt_{TM}$ is RE (as shown earlier).
    *   It can be proven that $Halt_{TM}$ is *not* recursive (i.e., undecidable). This means there is no TM that can always determine whether an arbitrary TM will accept an arbitrary input.

*   **Reference:** Kozen, Chapter 11 & 12; Hopcroft, Motwani, Ullman, Chapter 5; Sipser, Chapter 4 & 5.

---

### 6. The Chomsky Hierarchy and Language Classes

This topic directly addresses CO1.

*   **Chomsky Hierarchy:** A classification of formal languages based on the complexity of the grammars required to generate them, or equivalently, the complexity of the automata needed to recognize them.

| Type of Language | Grammar Type | Automaton Type | Expressive Power | Examples | Relation to TM |
| :--------------- | :----------- | :------------- | :--------------- | :------- | :------------- |
| **Type 3**       | Regular      | Finite Automaton (DFA/NFA) | Weakest          | `a*b*`   | Decidable      |
| **Type 2**       | Context-Free | Pushdown Automaton (PDA) | Stronger         | $a^n b^n$ | Decidable      |
| **Type 1**       | Context-Sensitive | Linear Bounded Automaton (LBA) | Stronger         | $a^n b^n c^n$ | Decidable      |
| **Type 0**       | Recursively Enumerable (RE) | Turing Machine (TM) | Strongest        | $L_{TM}$ (related) | RE (Recognizable) |
| **Recursive**    | (Defined by TM deciders) | Turing Machine (TM) that *always halts* | Stronger than CFG, weaker than RE (in terms of complement) | All Regular, All CFG, $a^n b^n c^n$ | Decidable      |

*   **Key Observations:**
    *   All Regular Languages are Decidable.
    *   All Context-Free Languages are Decidable.
    *   All Context-Sensitive Languages are Decidable.
    *   All Decidable Languages are Recursively Enumerable.
    *   There exist Recursively Enumerable languages that are not Decidable.
    *   There exist Context-Sensitive languages that are not Context-Free.
    *   There exist Context-Free languages that are not Regular.

*   **CO1 Alignment:** This hierarchy directly helps in classifying languages. For example, if a language is generated by a context-free grammar and is also recognized by a TM that always halts, it's both CFG and Recursive. If it's recognized by a TM that might loop, it's RE.

---

### 7. Key Concepts and Definitions Summary

*   **Recursive Language (Decidable):** A language $L$ for which there exists a Turing Machine that halts on *all* inputs, accepting strings in $L$ and rejecting strings not in $L$.
*   **Recursively Enumerable Language (Recognizable):** A language $L$ for which there exists a Turing Machine that halts and accepts strings in $L$, but may loop on strings not in $L$.
*   **Decider TM:** A TM that halts on all inputs.
*   **Recognizer TM:** A TM that halts and accepts strings in the language, but may loop on strings outside the language.
*   **Computable Function:** A function for which there exists an algorithm (a TM that always halts) to compute it.
*   **Undecidable Language:** A language for which no decider TM exists.
*   **Unrecognizable Language:** A language for which no recognizer TM exists (this is rarer; most languages encountered in theory are either RE or not RE, and if not RE, then its complement is RE).
*   **Complement of a language ($\bar{L}$):** The set of all strings not in $L$.

---

### 8. Important Points to Remember

*   **Decidability implies Recognizability:** If a language is decidable, it is also recognizable. The reverse is not true.
*   **Decidability and Complements:** A language is decidable if and only if both the language and its complement are recognizable.
*   **The Halting Problem is Undecidable:** This is a cornerstone of computability theory. It means there's no general algorithm to solve it.
*   **Power of Turing Machines:** TMs are the most powerful model of computation. They can recognize all RE languages and decide all Recursive languages.
*   **Language Hierarchy:** Remember the nesting: Regular $\subset$ Context-Free $\subset$ Context-Sensitive $\subset$ Recursive $\subset$ Recursively Enumerable. However, Recursive languages are a special subset of RE languages that have the "always halts" property.

---

### 9. Practice Questions and Exercises

**Instructions:** For each question, classify the given language as Regular, Context-Free, Context-Sensitive, Recursive, or Recursively Enumerable. Justify your classification by referring to the properties of the TMs or automata that would recognize/decide them.

1.  **$L_1 = \{ 0^n 1^n \mid n \ge 0 \}$**
    *   **Answer:** This language is context-free and is also decidable. A PDA can recognize it. A TM can simulate the PDA and halt on all inputs, thus it's recursive.

2.  **$L_2 = \{ w \mid w \text{ is a palindrome, e.g., } w = w^R \}$**
    *   **Answer:** This language is context-free and also decidable. A PDA can recognize it by pushing the first half of the string onto the stack and then comparing the second half. A TM can simulate this PDA and halt on all inputs, making it recursive.

3.  **$L_3 = \{ w \mid w = w^R \text{ and } |w| \text{ is even} \}$**
    *   **Answer:** This language is also context-free and decidable (recursive). It's a subset of palindromes.

4.  **$L_4 = \{ 0^n 1^n 2^n \mid n \ge 0 \}$**
    *   **Answer:** This language is context-sensitive but not context-free. It is also decidable. A Linear Bounded Automaton (LBA) can recognize it. A TM can simulate the LBA and halt on all inputs, making it recursive.

5.  **$L_5 = \{ \langle M \rangle \mid M \text{ is a TM and } L(M) \neq \emptyset \}$** (The language of TMs that accept at least one string).
    *   **Answer:** This language is Recursively Enumerable but not Recursive (undecidable). A TM can recognize this language by trying to find a string that $M$ accepts. If it finds one, it accepts $\langle M \rangle$. If $M$ accepts nothing, the recognizing TM will loop forever. It cannot be decided because if the recognizing TM loops, it doesn't tell us whether $M$ accepts *any* string or not.

6.  **$L_6 = \{ \langle M \rangle \mid M \text{ is a TM and } L(M) \text{ contains the string } 0101 \}$**
    *   **Answer:** This language is Recursively Enumerable but not Recursive (undecidable). To decide it, we'd need to know if $M$ *ever* accepts "0101". If $M$ accepts "0101", our decider would accept $\langle M \rangle$. If $M$ rejects "0101", our decider would reject $\langle M \rangle$. If $M$ loops on "0101", our decider would loop. The problem is that we don't know if $M$ will eventually accept or loop. If we have a TM that *recognizes* this language, it would simulate $M$ on "0101". If $M$ halts and accepts, the recognizer halts and accepts. If $M$ halts and rejects, the recognizer halts and rejects. If $M$ loops, the recognizer loops. So, this is RE. To be recursive, we would need to guarantee a halt. The undecidability comes from the fact that we can't generally determine if an arbitrary TM will accept a specific input or not if it might loop.

7.  **$L_7 = \{ w \mid w \text{ is a valid C++ program that halts on all inputs} \}$**
    *   **Answer:** This language is Recursively Enumerable but not Recursive (undecidable). This is a consequence of the Halting Problem. Proving a program halts on all inputs is equivalent to solving the Halting Problem, which is undecidable. Thus, no TM can decide this language. However, a TM could potentially recognize it if it could simulate the program and detect halting.

8.  **$L_8 = \{ \langle M \rangle \mid M \text{ is a TM and } L(M) \text{ is regular} \}$**
    *   **Answer:** This language is Recursively Enumerable but not Recursive (undecidable). Proving that an arbitrary TM generates a regular language requires checking its behavior on all possible inputs and states, which is beyond the scope of a decider.

**Self-Assessment Questions:**

1.  What is the fundamental difference between a recursive language and a recursively enumerable language in terms of the Turing Machine model?
    *   **Answer:** Recursive languages are recognized by TMs that *always* halt, while RE languages are recognized by TMs that may loop on inputs not in the language.

2.  If a language $L$ is decidable, is its complement $\bar{L}$ necessarily decidable? If so, why? If not, provide a counterexample.
    *   **Answer:** Yes. If $L$ is decidable by TM $M$, then $\bar{L}$ is decidable by a TM $M'$ that runs $M$. If $M$ accepts, $M'$ rejects. If $M$ rejects, $M'$ accepts. Since $M$ always halts, $M'$ also always halts.

3.  Can you give an example of a language that is RE but not Recursive?
    *   **Answer:** The Halting Problem ($Halt_{TM}$) is a classic example.

4.  What is the relationship between the Chomsky hierarchy and the concepts of decidability and recognizability?
    *   **Answer:** All languages in Types 0, 1, 2, and 3 are recognized by Turing machines (Type 0 being the most general). Languages of Type 1, 2, and 3 are also decidable. Type 0 languages (RE) can be further divided into decidable (Recursive) and undecidable subclasses.

---
