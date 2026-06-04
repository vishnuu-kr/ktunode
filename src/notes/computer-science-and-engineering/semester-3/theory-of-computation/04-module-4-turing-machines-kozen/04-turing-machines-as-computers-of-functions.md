---
title: "Turing machines as computers of functions"
subject: "THEORY OF COMPUTATION"
module: "Module 4: Turing Machines (Kozen)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abcd"
status: "completed"
scrapedAt: "2026-05-20T16:30:18.973Z"
---
## THEORY OF COMPUTATION: Module 4 - Turing Machines (Kozen) - Turing Machines as Computers of Functions

**Module Description:** This module explores Turing Machines (TMs), focusing on their power and limitations. This specific topic focuses on how TMs can be viewed as computational models for calculating functions, not just accepting languages.

**Topic Description:** Turing machines as computers of functions.

**Learning Outcomes:** Upon completion of this section, you should be able to:

1.  **Define** a Turing machine as a computer of a function.
2.  **Design** Turing machines to compute simple arithmetic and logical functions.
3.  **Explain** the concept of partial and total functions in the context of Turing machine computability.
4.  **Distinguish** between computable and non-computable functions (introduction).
5.  **Understand** different encodings used for input and output of functions on TMs.
6.  **Describe** the importance of the blank symbol in representing input/output and TM operation.

---

### 1. Defining a Turing Machine as a Computer of a Function

*   **Definition:** A Turing Machine *computes* a function  `f: Σ* → Σ*`  if, for every input string  `w ∈ Σ*`, if the TM is started in the initial configuration with  `w`  on the tape, it halts with  `f(w)`  on the tape.

*   **Formal Definition:**  Let `M = (Q, Σ, Γ, δ, q0, qaccept, qreject)` be a Turing Machine.
    *   `fM: Σ* → Σ*` is the partial function computed by `M`.
    *   For any `w ∈ Σ*`, if `M` started in configuration `(q0, ⌴w⌴, 0)` eventually halts in a configuration `(qaccept, ⌴x⌴, i)`, then `fM(w) = x`. (⌴ represents the blank symbol)
    *   If `M` started in configuration `(q0, ⌴w⌴, 0)` halts in `qreject` or loops forever, then `fM(w)` is undefined (denoted by `↑`).  This signifies that the function `f` is undefined for input `w`.

*   **Key Points:**
    *   The input `w` is initially placed on the tape, surrounded by blank symbols.
    *   The tape head starts at the leftmost symbol of the input.
    *   The machine halts in the *accept* state if it successfully computes the function. The result `f(w)` will be left on the tape, surrounded by blank symbols, when it halts.
    *   If the machine halts in the *reject* state, or enters an infinite loop, the function is considered undefined for that input.
    *   The blanks serve to isolate the input and output from any residual symbols left during computation.

### 2. Designing Turing Machines to Compute Simple Functions

*   **Example 1: Incrementing a Binary Number**

    *   **Function:** `f(x) = x + 1`, where `x` is a binary string.  e.g., `f(101) = 110`.

    *   **Informal Description:**
        1.  Move to the right end of the input string.
        2.  Repeatedly change 1s to 0s and move left until either a 0 is found or the beginning of the tape is reached.
        3.  If a 0 is found, change it to 1 and halt.
        4.  If the beginning of the tape is reached, change the leftmost 1 to a 0 and write a 1 to the left of the tape.

    *   **Conceptual TM Design (High Level):**
        *   States: `q_start, q_right, q_add, q_carry, q_halt`
        *   Transitions: (Illustrative)
            *   `q_start, 0 -> q_right, 0, R`
            *   `q_start, 1 -> q_right, 1, R`
            *   `q_right, 0 -> q_right, 0, R`
            *   `q_right, 1 -> q_right, 1, R`
            *   `q_right, ⌴ -> q_add, ⌴, L`
            *   `q_add, 0 -> q_halt, 1, R`
            *   `q_add, 1 -> q_carry, 0, L`
            *   `q_carry, 0 -> q_halt, 1, R`
            *   `q_carry, 1 -> q_carry, 0, L`
            *   `q_carry, ⌴ -> q_halt, 1, R`

*   **Example 2: Copying a String (assuming string in {a, b}*)**

    *   **Function:** `f(w) = ww`, where `w ∈ {a, b}*` (Concatenate `w` with itself)

    *   **Informal Description:**
        1.  Mark the leftmost symbol of the input string.
        2.  Copy it to the end of the input string.
        3.  Restore the marked symbol on the input string.
        4.  Move to the next unmarked symbol and repeat from step 2.
        5.  If all input symbols are marked, then erase the markers and halt.

    *   **Conceptual TM Design (High Level):**
        *   States: `q_start, q_mark_left, q_copy_right, q_back_left, q_check_done, q_clean_up, q_halt`
        *   Tape Symbols: `{a, b, X, Y, ⌴}` (X and Y are used as markers for copied 'a' and 'b' respectively)
        *   Transitions: (Conceptual - actual transitions would be more detailed.)
            *   `q_start, a -> q_mark_left, X, R`
            *   `q_start, b -> q_mark_left, Y, R`
            *   `q_mark_left, a -> q_mark_left, a, R` (Find end of first string)
            *   `q_mark_left, b -> q_mark_left, b, R` (Find end of first string)
            *   `q_mark_left, X -> q_mark_left, X, R` (skip marker if needed)
            *   `q_mark_left, Y -> q_mark_left, Y, R` (skip marker if needed)
            *   `q_mark_left, ⌴ -> q_copy_right, a, L` (copy the value to the end)
            *   etc.

### 3. Partial and Total Functions

*   **Partial Function:** A function `f: Σ* → Σ*` is *partial* if it is not defined for all possible inputs in `Σ*`.  In other words, there exists at least one `w ∈ Σ*` such that `f(w)` is undefined.  A TM that loops or rejects for some inputs computes a partial function.

*   **Total Function:** A function `f: Σ* → Σ*` is *total* if it is defined for all possible inputs in `Σ*`. A TM that halts (in either the accept or reject state) for all inputs computes a total function.

*   **Turing-Computable Function (Recursive Function):**  A function `f: Σ* → Σ*` is *Turing-computable* or *recursive* if there exists a Turing Machine `M` such that `fM(w) = f(w)` for all `w ∈ Σ*` for which `f(w)` is defined.

*   **Totally Turing-Computable Function (Total Recursive Function):** A function `f: Σ* → Σ*` is *totally Turing-computable* or *total recursive* if it is Turing-computable and total.  This means there exists a Turing Machine `M` that halts and produces the correct output for *every* possible input `w ∈ Σ*`.

*   **Key Distinction:**  The halting behavior of the TM determines whether the computed function is partial or total.

### 4. Computable vs. Non-Computable Functions (Introduction)

*   **Computable Function:** A function for which an algorithm exists that can compute its output for any given input.  Turing machines provide a formal model for what we consider "computable."

*   **Non-Computable Function:** A function for which no algorithm exists to compute its output for every possible input.

*   **Example (Introduction):** The Halting Problem is a classic example of a non-computable function.  It is impossible to create a Turing Machine that, given the description of another Turing Machine and its input, can determine whether the second Turing Machine will halt or loop forever. We will explore this in more detail later in the course.

*   **Important Note:** The existence of non-computable functions highlights the limitations of computation. Not every problem can be solved by a computer, no matter how powerful.

### 5. Encodings for Input and Output

*   **Importance of Encoding:** When using Turing Machines to compute functions, the format of the input and output must be clearly defined.  Encoding provides a way to represent data (numbers, lists, etc.) as strings that a TM can process.

*   **Common Encodings:**

    *   **Unary Encoding:**  A number `n` is represented by `n` repetitions of a single symbol (e.g., '1').  So, 3 would be represented as '111'.  Simple but inefficient for large numbers.
    *   **Binary Encoding:**  A number `n` is represented by its binary representation. More efficient than unary.
    *   **Tuples/Lists:** Multiple inputs or outputs can be represented by concatenating encodings of individual elements, using special separator symbols to distinguish them.  For example, `f(x, y) = x + y` could take the input `101#11` (binary encoding of 5 and 3, with '#' as the separator).
    *   **Special Symbols:** Symbols like `#`, `,`, `.`  are often used to separate elements in the input or output.

*   **Encoding Example:** Let's say we want to compute `f(x, y) = x * y` where x and y are natural numbers. We might encode the input as `unary(x)#unary(y)`.  For example, if x = 2 and y = 3, the input would be `11#111`.  The output should then be the unary encoding of 6, i.e., `111111`.

*   **Choosing the Right Encoding:** The choice of encoding can significantly affect the complexity of designing the Turing Machine. A good encoding should be concise and easy for the TM to process.

### 6. The Role of the Blank Symbol

*   **Boundary Marker:**  The blank symbol `⌴` acts as a clear boundary marker between the input string, the output string, and the empty portions of the tape.

*   **Clean Slate:**  The TM begins with the input surrounded by blanks, providing a "clean slate" for computation. After the computation, the desired output should be the only non-blank string remaining on the tape when the machine halts.

*   **Intermediate Calculations:** The TM can use the blank portions of the tape to store intermediate results during the calculation.

*   **Importance for Definition:** The formal definition relies heavily on the presence of blanks to specify precisely what constitutes the input and output of the computation. Without blanks, it would be difficult to determine where the function's result starts and ends.

---

### Practice Questions/Exercises

1.  **Design a Turing Machine (at a high level) that computes the function `f(x) = 2x` where x is a binary number.**
    *   *Answer:*  The TM should effectively shift the input binary number one position to the left (append a '0' to the end). States needed: `q_start, q_right, q_append_zero, q_halt`. The TM would move to the right end, write a '0', then move back to the beginning of the tape before halting.

2.  **Design a TM (at a high level) that computes `f(x, y) = x - y` where x and y are unary numbers, and the input is given as `x#y`.  If x < y, the TM should output 0.**
    *   *Answer:* The TM needs to repeatedly erase a '1' from both the x and y portions of the tape until one of them is empty. If y becomes empty first, the remaining '1's from x are the answer.  If x becomes empty first, the answer is 0 (which can be represented by an empty tape or a single '0').

3.  **Explain the difference between a partial function and a total function, and how this relates to the halting behavior of a Turing Machine.**
    *   *Answer:* A total function is defined for all possible inputs, whereas a partial function is only defined for some inputs.  If a TM always halts (in an accept or reject state) for any input, it computes a total function.  If a TM loops or rejects for some inputs, it computes a partial function.

4.  **Why is encoding important when using Turing Machines to compute functions?**
    *   *Answer:*  Encoding provides a way to represent complex data (numbers, lists, etc.) as strings that a TM can process. Without encoding, a TM would only be able to work directly with the tape symbols themselves. Proper encoding simplifies design and can improve efficiency.

5.  **What is the role of the blank symbol in the context of Turing machines as function computers? Give at least three important uses.**
     *   *Answer:* The blank symbol serves as (1) a boundary marker between input, output and unused tape space, (2) allows the machine to have a "clean slate" for computation, isolating input and output, and (3) allowing the TM to use the surrounding blank portions of the tape to store intermediate calculations.

---

### Important Points to Remember

*   A Turing Machine can be viewed as a computer that calculates a function by transforming an input string on the tape into an output string.
*   The halting behavior of a Turing Machine determines whether it computes a total or partial function.
*   Encoding is crucial for representing data in a format that the Turing Machine can understand.
*   The blank symbol is essential for defining the input and output, as well as for providing workspace for the Turing Machine.
*   The concept of computable and non-computable functions establishes the limits of computation.  The Halting Problem is a foundational example of a non-computable problem.
