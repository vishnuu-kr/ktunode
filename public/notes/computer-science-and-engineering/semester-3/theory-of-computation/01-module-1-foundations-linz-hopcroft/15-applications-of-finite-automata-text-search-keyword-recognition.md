---
title: "Applications of finite automata - text search, keyword recognition"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Foundations (Linz, Hopcroft)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aba2"
status: "completed"
scrapedAt: "2026-05-20T16:29:49.192Z"
---
# THEORY OF COMPUTATION - Module 1: Foundations (Linz, Hopcroft)
## Topic: Applications of Finite Automata - Text Search, Keyword Recognition

**Learning Outcomes:**

*   Understand how finite automata can be used for text search.
*   Understand how finite automata can be used for keyword recognition.
*   Design finite automata for specific text search and keyword recognition tasks.
*   Analyze the limitations and advantages of using finite automata for these applications.

---

**1. Introduction: Finite Automata (FA) Recap**

*   **Definition:** A finite automaton (FA) is a mathematical model of a machine that recognizes patterns in strings. It consists of:
    *   A finite set of states.
    *   A finite set of input symbols (alphabet).
    *   A transition function that maps a state and an input symbol to a next state.
    *   A start state.
    *   A set of accepting (final) states.

*   **Types of FA:**
    *   **Deterministic Finite Automaton (DFA):** For each state and input symbol, there is exactly one transition.
    *   **Non-deterministic Finite Automaton (NFA):** For each state and input symbol, there can be zero, one, or multiple transitions.  Can have ε-transitions (transitions without consuming an input symbol).

*   **Key Idea:**  Finite automata process input strings one symbol at a time, transitioning between states according to the transition function.  If, after processing the entire string, the automaton ends up in an accepting state, the string is *accepted* by the automaton; otherwise, it is *rejected*.

**2. Text Search with Finite Automata**

*   **Concept:** Using a finite automaton to efficiently find occurrences of a particular pattern (a keyword or string) within a larger text.

*   **How it Works:**  We design an FA that *accepts* any string ending with the target pattern.  The text to be searched is then fed to the FA, symbol by symbol.  Each time the FA reaches an accepting state, it means that the target pattern has just been found at the current position in the text.

*   **Building the Automaton:** The key is to create transitions that:
    *   Ensure the automaton stays in a "start" state until the *beginning* of the target pattern is detected.
    *   Transition sequentially through states representing the successive symbols of the target pattern.
    *   Reach an accepting state when the *entire* target pattern has been recognized.
    *   Handle cases where the pattern might partially overlap with itself.

*   **Example: Searching for the pattern "aba"**

    *   States:  Let's represent the stages of recognizing "aba" as states:
        *   `q0`: Start state (represents having seen nothing yet)
        *   `q1`: Represents having seen "a"
        *   `q2`: Represents having seen "ab"
        *   `q3`: Represents having seen "aba" (Accepting State)

    *   Alphabet: {a, b}

    *   Transitions:
        *   `q0, a -> q1` (Start seeing the pattern)
        *   `q0, b -> q0` (Any other character restarts the search)
        *   `q1, a -> q1`  (Overlapping "a" again. This is a crucial detail)
        *   `q1, b -> q2` (Continues the pattern)
        *   `q2, a -> q3` (Completes the pattern)
        *   `q2, b -> q0` (Pattern broken, start over)
        *   `q3, a -> q1` (Pattern found, could be overlapping "a" in next search)
        *   `q3, b -> q0` (Pattern found, start search again)

    *   Start State: `q0`
    *   Accepting State: `q3`

    *   **Diagram:**  (Difficult to represent perfectly in text, but conceptually, imagine a state diagram with these transitions)

*   **Algorithm:**

    1.  Construct the DFA for the pattern to search for.
    2.  Read the text to be searched, one character at a time.
    3.  For each character, use the DFA's transition function to update the current state.
    4.  If the current state is an accepting state, report that the pattern has been found.
    5.  Continue until the end of the text.

*   **Advantages:**
    *   Efficient: FA processing is very fast.
    *   Real-time: Can process text as it arrives (e.g., from a network stream).
    *   Well-defined: Simple and easy to understand.

*   **Limitations:**
    *   Complex Patterns: Designing FAs for very complex patterns can be cumbersome. Regular Expressions are a more natural choice here.
    *   Memory Usage: For very long patterns, the size of the DFA can become significant (though this is often manageable).

**3. Keyword Recognition with Finite Automata**

*   **Concept:** Identifying specific keywords within a stream of text or code.  This is a fundamental step in lexical analysis (scanning) performed by compilers and interpreters.

*   **How it Works:**  Similar to text search, we create an FA for each keyword we want to recognize.  However, keyword recognition often involves dealing with multiple keywords simultaneously.

*   **Building the Automaton (Multiple Keywords):**

    *   **Option 1: Separate Automata:**  Create a separate FA for each keyword.  Run each automaton on the input text in parallel.  This is simple but can be less efficient if many keywords share prefixes.

    *   **Option 2: Combined Automaton:** Create a single, larger FA that recognizes *all* the keywords.  This is generally more efficient but requires more careful design.

*   **Example: Recognizing the keywords "if", "then", and "else"**

    *   States:  A combined automaton would need states to represent the partial recognition of each keyword:
        *   `q0`: Start state
        *   `q1`: Represents having seen "i"
        *   `q2`: Represents having seen "if" (Accepting state for "if")
        *   `q3`: Represents having seen "t"
        *   `q4`: Represents having seen "th"
        *   `q5`: Represents having seen "the"
        *   `q6`: Represents having seen "then" (Accepting state for "then")
        *   `q7`: Represents having seen "e"
        *   `q8`: Represents having seen "el"
        *   `q9`: Represents having seen "els"
        *   `q10`: Represents having seen "else" (Accepting state for "else")

    *   Alphabet: {a, b, c, ..., z}  (all lowercase letters for simplicity)

    *   Transitions: (Simplified for clarity; many implicit transitions back to q0 exist for other characters)
        *   `q0, i -> q1`
        *   `q0, t -> q3`
        *   `q0, e -> q7`
        *   `q1, f -> q2`
        *   `q3, h -> q4`
        *   `q4, e -> q5`
        *   `q5, n -> q6`
        *   `q7, l -> q8`
        *   `q8, s -> q9`
        *   `q9, e -> q10`

    *   Start State: `q0`
    *   Accepting States: `q2` ("if"), `q6` ("then"), `q10` ("else")

*   **Algorithm:**

    1.  Construct the DFA (or DFAs) for the keywords.
    2.  Read the input text.
    3.  Update the current state (or states) based on the current input symbol.
    4.  If an accepting state is reached, a keyword has been recognized.
    5.  Handle overlapping keywords appropriately (e.g., prioritize the longest match).
    6.  Continue until the end of the input.

*   **Important Considerations:**
    *   **Longest Match Rule:** When multiple keywords could be recognized at a given point, the longest matching keyword is usually preferred.  This requires tracking the longest matching state encountered so far.
    *   **Tokenization:**  Keyword recognition is often part of a larger process called tokenization, where the input text is divided into a sequence of meaningful units called *tokens* (e.g., keywords, identifiers, operators, literals).

**4. Limitations and Alternatives**

*   **Complexity:** While simple to implement for basic patterns and keywords, FAs can become complex and difficult to manage for more sophisticated patterns, especially those requiring context-free grammars.

*   **Regular Expressions:** Regular expressions provide a higher-level, more expressive notation for specifying patterns. Regular expressions can be converted to NFAs, which can then be converted to DFAs (though the DFA can be significantly larger).  Tools like `grep` and programming language regular expression libraries use this approach.

*   **Parsing:**  For more complex languages (like programming languages), keyword recognition is typically handled as part of the parsing process, which involves recognizing the grammatical structure of the language using more powerful formalisms (e.g., context-free grammars and parser generators like Yacc/Bison).

**5. Practice Questions and Exercises**

1.  **Design a DFA to search for the pattern "abab" in a text.**  Draw the state diagram.

    *   **Answer:**

        *   States: q0, q1, q2, q3, q4 (q4 is the accepting state)
        *   Alphabet: {a, b}
        *   Transitions:
            *   q0, a -> q1
            *   q0, b -> q0
            *   q1, a -> q1
            *   q1, b -> q2
            *   q2, a -> q3
            *   q2, b -> q0
            *   q3, a -> q1
            *   q3, b -> q4
            *   q4, a -> q1
            *   q4, b -> q0
        *   Start State: q0
        *   Accepting State: q4

2.  **Design a DFA to recognize the keywords "cat" and "car".**  Draw the state diagram.

    *   **Answer:**

        *   States: q0, q1, q2, q3, q4 (q3 and q4 are accepting states)
        *   Alphabet: {a, c, r, t}
        *   Transitions:
            *   q0, c -> q1
            *   q1, a -> q2
            *   q2, t -> q3
            *   q2, r -> q4
            *   q0, x -> q0 (for any x not in {c})
            *   q1, x -> q0 (for any x not in {a})
            *   q2, x -> q0 (for any x not in {t, r})

        *   Start State: q0
        *   Accepting States: q3 (cat), q4 (car)

3.  **Explain the limitations of using finite automata for searching for complex, nested patterns (e.g., balanced parentheses).**

    *   **Answer:** Finite automata have limited memory. They can only remember a finite amount of information about the input they have seen so far.  Nested patterns like balanced parentheses require remembering the depth of the nesting, which can be arbitrarily large. Therefore, finite automata are not powerful enough to recognize these patterns. Context-free grammars and pushdown automata are needed.

**6. Important Points to Remember**

*   Finite automata are powerful tools for simple text search and keyword recognition.
*   DFAs are generally more efficient for implementation than NFAs (but NFAs can be easier to design).
*   Regular expressions offer a more expressive alternative for complex patterns, but are ultimately based on finite automata.
*   Keyword recognition is a fundamental part of lexical analysis in compilers.
*   Consider the trade-offs between simplicity, efficiency, and expressiveness when choosing between finite automata, regular expressions, and more advanced parsing techniques.
