# the sum of digits of a positive number **.

<!-- SECTION_1_START -->
# The Sum of Digits of a Positive Number

## 1.1 Formal Academic Definition

In computational mathematics and algorithmic problem-solving, the **sum of digits** of a positive integer is defined as the additive accumulation of every individual decimal digit that constitutes the number, processed from the least significant digit (rightmost) to the most significant digit (leftmost), until the number is fully decomposed into a **zero** state.

Formally, for a positive integer $N$ represented in base-10 as:
$$N = d_k d_{k-1} d_{k-2} \ldots d_2 d_1 d_0$$
where each $d_i \in \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$ is a decimal digit, the digit sum $S(N)$ is given by:
$$S(N) = \sum_{i=0}^{k} d_i = d_0 + d_1 + d_2 + \ldots + d_k$$

In Python, this operation is performed by repeatedly applying the **modulo operator** (`% 10`) to extract the rightmost digit and the **integer division operator** (`// 10`) to discard the rightmost digit, controlled by an iterative loop structure (typically a `while` loop).

> [!IMPORTANT]
> **KTU 2024 Syllabus Mapping (UCEST105 / Module 3):** This topic falls under **"Selection and Iteration using Python"** and directly tests Course Outcomes **CO2** (Apply algorithmic logic using Python control structures) and **CO3** (Implement iterative solutions to numerical problems).

## 1.2 Conceptual Analogy / Intuition

Imagine you have a packet of **chocolates numbered 5274**, and you want to count the total numeric value carried by all the digits. You cannot just "see" the total — you must **peel off** one chocolate at a time from the right end of the packet.

- The **last chocolate** has the number $4$ written on it. You take it aside: *running total = 4*.
- The next chocolate shows $7$. You add it: *running total = 4 + 7 = 11*.
- Next is $2$: *running total = 11 + 2 = 13*.
- Finally $5$: *running total = 13 + 5 = 18*.

The packet is now empty (the number has become $0$). The **sum of digits is 18**.

In Python, *peeling off the last digit* = `n % 10`, and *discarding the last digit* = `n // 10`. The "chocolate packet becoming empty" condition is `n == 0`, which stops the loop.

> [!NOTE]
> **Geometric Intuition:** If you think of the number $N$ as a *tape of digits*, the algorithm slides a window of width 1 from the right edge to the left edge, accumulating values. Each slide takes a **constant time** operation, so for a $k$-digit number, the time complexity is **O(k)** or equivalently **O(log₁₀ N)**.

## 1.3 Physical Constants and Standard Metrics

- **Base of the number system used:** $\mathbf{10}$ (decimal / denary system)
- **Range of any single digit:** $\mathbf{0 \leq d_i \leq 9}$
- **Time complexity:** $\mathbf{O(\log_{10} N)}$ — proportional to the number of digits
- **Space complexity:** $\mathbf{O(1)$ — only a fixed number of integer variables used, independent of input size

> [!TIP]
> The **single-letter variable convention** `$d$` represents a digit, while `$S$` represents the cumulative sum. The subscript `$i$` is the position index of the digit from the right (units place = $i = 0$).

---

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Operational Logic Breakdown

The digit-sum algorithm is a classic example of an **iterative decomposition** problem. The complete logical flow is broken down below:

- **Step 1 — Initialization Phase**
  - A variable `n` is bound to the input positive integer.
  - A variable `digit_sum` (or simply `s`) is initialized to **0**. This acts as the running accumulator (a *neutral element* for addition).

- **Step 2 — Selection (Loop Entry Validation)**
  - A **pre-test loop** (in KTU's preferred style, a `while` loop) is selected because we do *not* know in advance how many digits the number contains. The termination condition is `n != 0`.
  - This implicitly handles a boundary case: if $N = 0$, the loop never executes and the sum is correctly returned as $0$.

- **Step 3 — Digit Extraction (The Modulo Operation)**
  - `last_digit = n % 10` is executed. The modulo operator in Python returns the *remainder* of the Euclidean division. For example, `5274 % 10 == 4`.
  - **Why `% 10` works:** In base-10, every number can be written as $N = 10 \cdot q + r$, where $r \in [0, 9]$. The modulo extracts exactly $r$.

- **Step 4 — Accumulation**
  - `digit_sum = digit_sum + last_digit` adds the newly extracted digit to the running total.

- **Step 5 — Truncation (The Integer Division Operation)**
  - `n = n // 10` discards the last digit by performing *floor division*. For example, `5274 // 10 == 527`. After this, $n$ has one fewer digit.

- **Step 6 — Loop Continuation Test**
  - The `while` condition `n != 0` is re-evaluated. If false, control exits the loop.

- **Step 7 — Return / Output**
  - The final value of `digit_sum` is printed or returned.

## 2.2 KTU Formula Sheet / Cheat Sheet

| Concept | Mathematical Form | Python Operator / Code | Result Type | Time Complexity |
| :--- | :--- | :--- | :--- | :--- |
| Extract last digit | $d_0 = N \bmod 10$ | `last_digit = n % 10` | `int` in $[0, 9]$ | $O(1)$ |
| Remove last digit | $N \leftarrow \lfloor N / 10 \rfloor$ | `n = n // 10` | `int` (one digit less) | $O(1)$ |
| Loop condition | $N \neq 0$ | `while n != 0:` | Boolean | — |
| Accumulator init | $S \leftarrow 0$ | `digit_sum = 0` | `int` | $O(1)$ |
| Sum update | $S \leftarrow S + d_i$ | `digit_sum += last_digit` | `int` | $O(1)$ |
| Total iterations | $k = \lfloor \log_{10} N \rfloor + 1$ | Implicit via loop count | — | $O(\log_{10} N)$ |
| Final result | $S(N) = \sum_{i=0}^{k} d_i$ | `return digit_sum` | `int` $\geq 0$ | — |
| Edge case $N=0$ | $S(0) = 0$ | Loop skipped, returns 0 | `int` | $O(1)$ |

> [!IMPORTANT]
> Always use the **walrus operator alternative** is NOT preferred at beginner level for KTU 2024. Stick to the classic `while n != 0:` syntax. Also remember: in Python, `%` for negative numbers behaves differently from C/C++ — but since we restrict to **positive numbers**, this is not a concern here.

## 2.3 Real-World Utility in Engineering & Computer Science

The digit-sum operation, although elementary, is the **building block** of many production-grade algorithms:

- **Luhn Algorithm (Credit Card Validation):** Every credit card number is validated by computing a *modified* digit sum where alternate digits are doubled. The Python `sum_of_digits` routine is the inner core of this check, used in **payment gateways, banking systems, and e-commerce platforms** like PayPal, Stripe, and Razorpay.
- **Digital Root Computation:** Repeatedly summing digits until a single digit is obtained gives the *digital root*, which is heavily used in **data integrity checks, hash table distribution, and number theory**.
- **Checksum Algorithms:** ISBN-10 and ISBN-13 book barcodes use digit-sum variants for **library catalog validation and inventory systems**.
- **Cryptography & Steganography:** Digit manipulation forms the basis of simple cipher schemes and is a **pedagogical step toward RSA, AES, and hash functions**.
- **Embedded Systems & IoT:** In resource-constrained microcontrollers (Arduino, ESP32), digit-summing a sensor reading converts analog streams into checksum-friendly integers for **low-bandwidth transmission**.

---

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivation & Symbolic Implementation

## 3.1 Worked Numerical Example (Trace Table Method)

Let $N = 5274$. We will trace the algorithm step-by-step to derive the final answer.

| Iteration | Current $n$ | $n \% 10$ (last digit) | $S$ (running sum) | $n // 10$ (new $n$) | Loop condition `n != 0` |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 (init) | $5274$ | — | $0$ | — | True |
| 1 | $5274$ | $4$ | $0 + 4 = 4$ | $527$ | True |
| 2 | $527$ | $7$ | $4 + 7 = 11$ | $52$ | True |
| 3 | $52$ | $2$ | $11 + 2 = 13$ | $5$ | True |
| 4 | $5$ | $5$ | $13 + 5 = 18$ | $0$ | **False — exit** |

**Final Answer:** $S(5274) = 4 + 7 + 2 + 5 = 18$.

### Algebraic Verification

$$
\begin{aligned}
S(5274) &= 5 + 2 + 7 + 4 \\
&= 5 + 2 + 7 + 4 \\
&= 18
\end{aligned}
$$

The iterative trace matches the direct algebraic computation. ✓

## 3.2 Full Python Implementation (Production-Grade, KTU-Board Ready)

Below is a fully operational, type-hinted Python function with exhaustive input validation, exact error logging, and absolute boundary checks. This is the **model answer format** expected at the KTU board examination.

```python
# ============================================================
# Program : Sum of digits of a positive number
# Course  : ALGORITHMIC THINKING WITH PYTHON (UCEST105)
# Module  : 3 - Selection and Iteration using Python
# ============================================================

def sum_of_digits(n: int) -> int:
    """
    Compute the sum of all decimal digits of a non-negative integer n.

    Parameters
    ----------
    n : int
        A non-negative integer whose digits are to be summed.

    Returns
    -------
    int
        The sum of the decimal digits of n. Returns 0 if n == 0.

    Raises
    ------
    TypeError
        If n is not an integer.
    ValueError
        If n is a negative integer.
    """
    # ---- Step 1: Type validation (defensive boundary check) ----
    if not isinstance(n, int):
        raise TypeError(f"Input must be an integer, got {type(n).__name__}")

    # ---- Step 2: Sign validation (selection structure: if-elif) ----
    if n < 0:
        raise ValueError(f"Input must be a non-negative integer, got {n}")
    elif n == 0:
        # Edge case: 0 has exactly one digit which is 0 itself
        return 0

    # ---- Step 3: Iterative decomposition using while loop ----
    digit_sum: int = 0
    original_n: int = n  # preserved for logging purposes

    while n != 0:
        last_digit: int = n % 10        # extract rightmost digit
        digit_sum += last_digit          # accumulate
        n = n // 10                      # truncate the rightmost digit

    print(f"Sum of digits of {original_n} = {digit_sum}")
    return digit_sum


# ============================================================
# Driver code block (board-style demonstration)
# ============================================================
if __name__ == "__main__":
    test_cases = [0, 5, 42, 5274, 1000, 999999, 123456789]

    print("=" * 50)
    print(" SUM-OF-DIGITS DEMONSTRATION ")
    print("=" * 50)

    for value in test_cases:
        result = sum_of_digits(value)
        print(f"  Input: {value:>9}  -->  Digit Sum: {result}")
    print("=" * 50)
```

### Sample Output

```
==================================================
 SUM-OF-DIGITS DEMONSTRATION 
==================================================
Sum of digits of 0 = 0
  Input:         0  -->  Digit Sum: 0
Sum of digits of 5 = 5
  Input:         5  -->  Digit Sum: 5
Sum of digits of 42 = 6
  Input:        42  -->  Digit Sum: 6
Sum of digits of 5274 = 18
  Input:      5274  -->  Digit Sum: 18
Sum of digits of 1000 = 1
  Input:      1000  -->  Digit Sum: 1
Sum of digits of 999999 = 54
  Input:     999999  -->  Digit Sum: 54
Sum of digits of 123456789 = 45
  Input:  123456789  -->  Digit Sum: 45
==================================================
```

## 3.3 Alternative `for`-Loop Version (Using `str` Conversion)

A second, **idiomatic Python** approach converts the number to a string and iterates over each character. Although elegant, the KTU 2024 syllabus expects the *mathematical* `while`-loop approach using `% 10` and `// 10`.

```python
def sum_of_digits_string(n: int) -> int:
    """Idiomatic version: converts n to a string and sums int(d) for each char."""
    if n < 0:
        raise ValueError("Input must be a non-negative integer")
    return sum(int(ch) for ch in str(n))
```

> [!NOTE]
> The string-based version has the same time complexity $O(\log_{10} N)$ but uses more memory. In **board examinations**, always prefer the `while` + `% 10` + `// 10` version because it directly demonstrates your understanding of *selection* and *iteration* — the core Module 3 learning outcomes.

---

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Algorithm Flowchart (Mermaid State Diagram)

The following Mermaid `flowchart` represents the complete control-flow of the digit-sum algorithm, including the **pre-loop selection** that handles the $N = 0$ edge case and the **validation block** for negative inputs.

```mermaid
flowchart TD
    A(["START"]) --> B["Read input n"]
    B --> C{"Is n a non-negative integer?"}
    C -- "No, negative" --> D["Raise ValueError / Print error"]
    D --> Z(["END"])
    C -- "Yes" --> E{"Is n == 0?"}
    E -- "Yes" --> F["Return 0"]
    F --> Z
    E -- "No" --> G["Initialize digit_sum = 0"]
    G --> H{"Is n != 0?"}
    H -- "No" --> I["Return digit_sum"]
    I --> Z
    H -- "Yes" --> J["last_digit = n % 10"]
    J --> K["digit_sum = digit_sum + last_digit"]
    K --> L["n = n // 10"]
    L --> H
```

## 4.2 Sequential Processing Topology (Decoupled Modular View)

For a clearer view of the **decomposition strategy**, the algorithm can be visualised as a *three-stage processing pipeline*:

```mermaid
flowchart LR
    subgraph STAGE1["STAGE 1: INITIALIZATION"]
        A1["Receive integer N"] --> A2["Validate N >= 0"]
        A2 --> A3["Set S = 0"]
    end

    subgraph STAGE2["STAGE 2: ITERATIVE EXTRACTION"]
        B1["Apply n % 10"] --> B2["Append digit to S"]
        B2 --> B3["Apply n // 10"]
        B3 --> B4{"n reduced to 0?"}
        B4 -- "No" --> B1
        B4 -- "Yes" --> B5["Halt iteration"]
    end

    subgraph STAGE3["STAGE 3: OUTPUT"]
        C1["Display S"] --> C2["Return S"]
    end

    A3 --> B1
    B5 --> C1
```

> [!TIP]
> **Reading the diagram:** Each "modular segment" is a *decoupled logical block* in the data flow. This is the same pattern used in real-world **ETL pipelines** (Extract-Transform-Load) in data engineering — *extract a unit, transform/aggregate, then truncate and repeat*.

## 4.3 Step-by-Step Trace (Visual Schematic for $N = 5274$)

```mermaid
flowchart LR
    N0["N = 5274, S = 0"] -- "% 10 = 4, S = 4, N = 527" --> N1["N = 527, S = 4"]
    N1 -- "% 10 = 7, S = 11, N = 52" --> N2["N = 52, S = 11"]
    N2 -- "% 10 = 2, S = 13, N = 5" --> N3["N = 5, S = 13"]
    N3 -- "% 10 = 5, S = 18, N = 0" --> N4["N = 0, S = 18"]
    N4 -- "Condition n != 0 is FALSE" --> END(["EXIT: Return 18"])
```

---

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### **Question 1** `[KTU University Exam - July 2024]`
**CO2, RBT Level: Remember**

*Explain the role of the modulo operator `%` and the integer-division operator `//` in computing the sum of digits of a number. Why is a `while` loop preferred over a `for` loop in this context?*

**Model Answer (3 marks):**

1. **[1 Mark]** The expression `n % 10` uses the **modulo operator** `%` to return the remainder when $n$ is divided by 10. This remainder is precisely the **rightmost decimal digit** of $n$ (e.g., $5274 \% 10 = 4$), because every integer can be written as $N = 10q + r$ where $0 \leq r \leq 9$.

2. **[1 Mark]** The expression `n // 10` uses **integer (floor) division** to discard the rightmost digit of $n$ (e.g., $5274 // 10 = 527$). Together, `% 10` and `// 10` form a *digit-extraction-and-truncation pair*.

3. **[1 Mark]** A `while` loop is preferred because the **number of digits in $n$ is not known in advance**. The loop must continue *as long as `n != 0`*. A `for` loop would require a pre-determined range like `range(len(str(n)))`, which defeats the algorithmic intent and is less efficient.

---

### **Question 2** `[KTU University Exam - Dec 2023]`
**CO2, RBT Level: Understand**

*Given the input $N = 1000$, trace the algorithm and state the final sum of digits. Also explain why the result is not $0$ even though the last three digits are $0$.*

**Model Answer (3 marks):**

1. **[1.5 Marks]** The trace for $N = 1000$ is as follows:
   - Iteration 1: $n=1000$, $n \% 10 = 0$, $S = 0$, $n = 100$
   - Iteration 2: $n=100$, $n \% 10 = 0$, $S = 0$, $n = 10$
   - Iteration 3: $n=10$, $n \% 10 = 0$, $S = 0$, $n = 1$
   - Iteration 4: $n=1$, $n \% 10 = 1$, $S = 1$, $n = 0$ → exit

2. **[1 Mark]** **Final Answer:** $S(1000) = 1$.

3. **[0.5 Marks]** The result is $1$ (not $0$) because although the trailing three digits are zeros, the **leading digit $1$ contributes $1$ to the sum**. The algorithm does *not* skip leading zeros — it adds every digit, including zeros, to the accumulator.

---

## 5.2 Part B — Long Answer Questions (14 Marks Each, Internal Choice)

> **KTU Pattern:** Each Part-B question has an **internal choice** (either-or). Both alternatives must be answered at the **same cognitive depth**. Below, both options are fully solved with valuation-key markings.

---

### **Question A (14 Marks)** `[KTU University Exam - July 2024]`
**CO2, CO3 — RBT Levels: Understand (Part a) + Apply (Part b)**

**Write a complete Python program to:**

**(a)** Read a positive integer $N$ from the user. Validate that $N$ is a non-negative integer; if not, print an appropriate error message and terminate. **[7 Marks]**

**(b)** Compute and display the sum of digits of $N$ using a `while` loop with the `% 10` and `// 10` operators. Show the step-by-step trace for $N = 6789$. **[7 Marks]**

---

#### **Solution A (a) — Input Validation [7 Marks]**

```python
# Part (a): Input validation using selection (if-elif-else)

n_input: str = input("Enter a positive integer: ")

# Step 1: Check whether the string represents a valid non-negative integer
if n_input.strip().lstrip('-').isdigit():
    n = int(n_input)
    # Step 2: Selection block for sign validation
    if n < 0:
        print("Error: Input is negative. Please enter a non-negative integer.")
    elif n == 0:
        print("The sum of digits of 0 is 0.")
    else:
        print(f"Valid input received: n = {n}")
else:
    print("Error: Input is not a valid integer.")
```

**Valuation Key — Part (a):**

- **['Reading input from the user': 2 Marks]** — `input()` statement with prompt.
- **['Selection structure to validate the integer': 3 Marks]** — `if-elif-else` block checking sign.
- **['Error message printed on invalid input': 1 Mark]** — Clear error printed.
- **['Clean termination and code formatting': 1 Mark]** — Proper indentation, no syntax errors.

---

#### **Solution A (b) — Sum of Digits Computation + Trace [7 Marks]**

```python
# Part (b): Sum-of-digits using a while loop
# Assumes n is a validated non-negative integer from Part (a)

n: int = 6789
digit_sum: int = 0
original: int = n

print(f"{'Iter':<6}{'n':<8}{'n % 10':<10}{'digit_sum':<12}{'n // 10':<10}")
print("-" * 46)

iteration: int = 1
while n != 0:
    last_digit: int = n % 10
    digit_sum += last_digit
    n = n // 10
    print(f"{iteration:<6}{n*10 + last_digit:<8}{last_digit:<10}{digit_sum:<12}{n:<10}")
    iteration += 1

print(f"\nFinal sum of digits of {original} = {digit_sum}")
```

**Trace Table for $N = 6789$ (to be drawn on the answer sheet):**

| Iter | $n$ (before) | $n \% 10$ | $S$ (after) | $n // 10$ (new $n$) |
| :---: | :---: | :---: | :---: | :---: |
| 1 | 6789 | 9 | 9 | 678 |
| 2 | 678 | 8 | 17 | 67 |
| 3 | 67 | 7 | 24 | 6 |
| 4 | 6 | 6 | 30 | 0 → **exit** |

**Valuation Key — Part (b):**

- **['Initializing accumulator to 0': 1 Mark]**
- **['Writing the while loop with correct condition n != 0': 2 Marks]**
- **['Correct application of % 10 and // 10 inside the loop': 2 Marks]**
- **['Trace table filled correctly': 1 Mark]**
- **['Final answer S(6789) = 30 stated explicitly': 1 Mark]**

---

### **Question B (14 Marks)** `[KTU University Exam - Dec 2023]`
**CO2, CO3 — RBT Levels: Apply (Part a) + Analyze (Part b)**

**Write a Python program to:**

**(a)** Read a positive integer $N$ and compute its **sum of digits using a `for` loop over the string representation** of the number. Display the result. Test the program with $N = 12345$. **[7 Marks]**

**(b)** Modify the program to also compute the **sum of digits of each number from 1 to N** and display the **grand total**. For example, if $N = 5$, the grand total is $1+2+3+4+5 = 15$. **[7 Marks]**

---

#### **Solution B (a) — String-Based Sum of Digits [7 Marks]**

```python
# Part (a): Sum of digits using a for loop on the string representation

n: int = int(input("Enter a positive integer: "))

if n < 0:
    print("Error: Negative input not allowed.")
else:
    digit_sum: int = 0
    for ch in str(n):                    # iterate over each character
        digit_sum += int(ch)              # convert char to int and add
    print(f"Sum of digits of {n} = {digit_sum}")
```

**Output trace for $N = 12345$:**

| Character `$ch$` | `int(ch)` | Running `$S$` |
| :---: | :---: | :---: |
| `'1'` | 1 | 1 |
| `'2'` | 2 | 3 |
| `'3'` | 3 | 6 |
| `'4'` | 4 | 10 |
| `'5'` | 5 | **15** |

**Final Answer:** $S(12345) = 1 + 2 + 3 + 4 + 5 = 15$.

**Valuation Key — Part (a):**

- **['Correct conversion of int to str': 1 Mark]**
- **['For loop iterating over each character': 2 Marks]**
- **['Correct int(ch) conversion and accumulation': 2 Marks]**
- **['Final output statement and correct answer 15': 2 Marks]**

---

#### **Solution B (b) — Grand Total Using Nested Loop [7 Marks]**

```python
# Part (b): Sum of digits for every number from 1 to N

N: int = int(input("Enter a positive integer N: "))

if N < 1:
    print("Error: N must be >= 1.")
else:
    grand_total: int = 0
    print(f"{'Number':<10}{'Digit Sum':<15}")
    print("-" * 25)

    for current in range(1, N + 1):       # outer loop: 1 to N
        local_sum: int = 0
        temp: int = current
        while temp != 0:                   # inner loop: digit extraction
            local_sum += temp % 10
            temp //= 10
        grand_total += local_sum
        print(f"{current:<10}{local_sum:<15}")

    print("-" * 25)
    print(f"Grand total of digit-sums from 1 to {N} = {grand_total}")
```

**Sample Output for $N = 5$:**

| Number | Digit Sum |
| :---: | :---: |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |

**Grand Total:** $1 + 2 + 3 + 4 + 5 = 15$.

**Valuation Key — Part (b):**

- **['Outer for loop range(1, N+1)': 1 Mark]**
- **['Inner while loop with % 10 and // 10': 3 Marks]**
- **['Correct accumulation into grand_total': 1 Mark]**
- **['Formatted output and final answer for N=5': 2 Marks]**

---

> [!WARNING]
> **KTU Examiner's Valuation Pitfall Callout:**
>
> 1. **Do NOT forget to initialize `digit_sum = 0` outside the loop.** A common mistake is initializing it inside the `while` loop, which causes the sum to be reset to $0$ on every iteration. This is a **2-mark deduction** in the valuation key.
>
> 2. **Do NOT use `n / 10` (true division) instead of `n // 10` (integer division).** The expression `5274 / 10` produces the float $527.4$, which will cause an *infinite loop* because $n$ will never become exactly $0$. This is a **critical logical error** carrying a **3-mark deduction**.
>
> 3. **Do NOT confuse the `==` operator (equality) with `=` (assignment)** inside the `while` condition. Writing `while n = 0:` is a `SyntaxError` and will be marked **zero** for the entire loop block.
>
> 4. **Always handle the $N = 0$ edge case explicitly.** Even though the `while n != 0` loop naturally handles it, the board examiner expects a *brief mention* in your algorithm description. Omitting this loses **1 mark** under "boundary cases handled".
>
> 5. **For the `for`-loop version (Question B-a), ensure `int(ch)` is used** — many students write `digit_sum += ch`, which raises a `TypeError` because you cannot add a `str` to an `int`. This is a **2-mark deduction**.

---

## 5.3 Topic Recap & Important Things to Remember

- **Core Concept:** The sum of digits of $N$ is the additive accumulation of each decimal digit, obtained by repeatedly applying `% 10` and `// 10` until $N$ becomes $0$.
- **Key Operators:** `n % 10` (extract last digit) and `n // 10` (remove last digit). Never use `/ 10` in this context.
- **Loop Choice:** Prefer `while n != 0:` because the number of digits is *not known in advance*. The `for` loop with `str(n)` is an alternative, but not the board-preferred style.
- **Initialization is Mandatory:** Always set `digit_sum = 0` *before* the loop begins, not inside it.
- **Edge Cases to Mention in Exam:**
  - $N = 0 \Rightarrow$ Sum is $0$ (loop never executes).
  - $N = 1000 \Rightarrow$ Sum is $1$ (leading zero does not affect result, but the leading digit $1$ does).
  - Negative input $\Rightarrow$ Should be rejected with a `ValueError` or error message.
- **Time Complexity:** $O(\log_{10} N)$ because the loop runs once per digit.
- **Space Complexity:** $O(1)$ because only a fixed number of integer variables are used.
- **Algorithmic Family:** This problem belongs to the **digit-manipulation family**, alongside *reverse a number*, *palindrome check*, *Armstrong number check*, and *counting digits*. All use the same `% 10` / `// 10` idiom.
- **Real-World Use:** Forms the inner core of the **Luhn algorithm** (credit-card validation), ISBN checksum, and digital root computations.
- **Trace Table Skill:** The KTU board examination always awards partial credit (typically 2 marks) for a *correctly drawn trace table*. Always include one for any iterative numerical problem.
- **Python-Specific Tip:** `int()` conversion is required when iterating over `str(n)` to convert each character back to a digit; otherwise a `TypeError` will occur on addition.
- **Common Mistake:** Using `while n > 0:` *works* but fails the *exact* KTU preferred condition `while n != 0:`. Both are functionally equivalent for positive integers, but the examiner expects `!= 0` for theoretical consistency.

<!-- SECTION_5_END -->
