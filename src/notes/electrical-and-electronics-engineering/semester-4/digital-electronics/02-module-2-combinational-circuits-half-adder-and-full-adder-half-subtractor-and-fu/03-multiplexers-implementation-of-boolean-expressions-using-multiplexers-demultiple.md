---
title: "Multiplexers – implementation of boolean expressions using multiplexers – demultiplexers."
subject: "DIGITAL ELECTRONICS"
module: "Module 2: Combinational circuits – half adder and full adder, half subtractor and full subtractor – 4"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e4f"
status: "completed"
scrapedAt: "2026-05-23T16:15:52.113Z"
---
# DIGITAL ELECTRONICS - Module 2: Combinational Circuits (Part 4)

---

## Topic: Multiplexers (MUX) and Demultiplexers (DEMUX)

---

### 1. Introduction to Multiplexers (MUX)

Multiplexers are combinational logic circuits that select one of several input signals and forward it to a single output line. They are often referred to as **data selectors**.

**Key Concept:** A MUX acts like a digitally controlled switch.

#### 1.1. Functionality of a Multiplexer

*   A MUX has multiple data input lines, one or more select input lines, and a single output line.
*   The select lines determine which data input is connected to the output.
*   If there are $n$ select lines, then $2^n$ data input lines can be accommodated.

#### 1.2. Structure of a Multiplexer

*   **Data Inputs:** The lines that carry the data signals.
*   **Select Inputs:** These lines control which data input is routed to the output.
*   **Enable Input (Optional):** An active-high or active-low input that enables or disables the MUX operation. If disabled, the output is typically a logic 0 or high impedance.
*   **Output:** The single line that carries the selected data input.

#### 1.3. Truth Table and Logic Diagram (Example: 2-to-1 MUX)

A 2-to-1 MUX has two data inputs ($I_0$, $I_1$), one select input ($S$), and one output ($Y$).

| S | $I_0$ | $I_1$ | Y |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

**Boolean Expression:** $Y = (\overline{S} \cdot I_0) + (S \cdot I_1)$

**Logic Diagram:**

```
      +---------+
I0 ---|         |
      |   MUX   |--- Y
I1 ---|  2-to-1 |
      |         |
S  ---|---------|
      +---------+
```

#### 1.4. Truth Table and Logic Diagram (Example: 4-to-1 MUX)

A 4-to-1 MUX has four data inputs ($I_0, I_1, I_2, I_3$), two select inputs ($S_1, S_0$), and one output ($Y$). The binary combination of $S_1S_0$ determines which input is selected:

| $S_1$ | $S_0$ | Selected Input | Y |
|---|---|---|---|
| 0 | 0 | $I_0$ | $I_0$ |
| 0 | 1 | $I_1$ | $I_1$ |
| 1 | 0 | $I_2$ | $I_2$ |
| 1 | 1 | $I_3$ | $I_3$ |

**Boolean Expression:** $Y = (\overline{S_1} \overline{S_0} I_0) + (\overline{S_1} S_0 I_1) + (S_1 \overline{S_0} I_2) + (S_1 S_0 I_3)$

**Logic Diagram:**

```
      +-----------+
I0 ---|           |
I1 ---|           |
      |   MUX     |--- Y
I2 ---|  4-to-1   |
I3 ---|           |
      |           |
S0 ---|-----------|
S1 ---|-----------|
      +-----------+
```

#### 1.5. Common Multiplexers

*   **2-to-1 MUX:** Uses 1 select line, can select from 2 inputs.
*   **4-to-1 MUX:** Uses 2 select lines, can select from 4 inputs.
*   **8-to-1 MUX:** Uses 3 select lines, can select from 8 inputs.
*   **16-to-1 MUX:** Uses 4 select lines, can select from 16 inputs.

**Generalization:** An $N$-to-1 MUX requires $\lceil \log_2 N \rceil$ select lines.

#### 1.6. Applications of Multiplexers

*   **Data Routing/Selection:** Selecting specific data from a group of inputs.
*   **Logic Function Implementation:** As discussed in the next section.
*   **Communication Systems:** Routing signals in time-division multiplexing (TDM).
*   **Computer Systems:** Program counter multiplexing, data path selection.

---

### 2. Implementation of Boolean Expressions using Multiplexers

This is a crucial application where MUXes are used to implement complex combinational logic functions.

**Key Concept:** A MUX can be used to implement any Boolean function of $n$ variables by using a $(2^n)$-to-1 MUX. The $n$ variables are used as the select inputs, and the data inputs are driven by logic levels or other variables according to the function's truth table.

#### 2.1. Steps for Implementation

1.  **Identify the Boolean Function:** Start with the desired Boolean function, typically represented by its truth table.
2.  **Determine the MUX Size:** If the function has $n$ variables, use a $(2^n)$-to-1 MUX. The $n$ variables will be used as the select inputs.
3.  **Assign Select Inputs:** Assign the $n$ variables to the select lines of the MUX. A common practice is to assign the most significant variable to the most significant select line (e.g., $A$ to $S_2$, $B$ to $S_1$, $C$ to $S_0$ for a 3-variable function $f(A, B, C)$).
4.  **Map Truth Table to MUX Inputs:** For each row in the truth table, the value of the output $Y$ (or $f$) will determine how the corresponding data input of the MUX is connected.

#### 2.2. Mapping Strategy for MUX Inputs

For a function with $n$ variables $V_n, V_{n-1}, \dots, V_1$, using a $(2^n)$-to-1 MUX where select lines are $S_{n-1}, S_{n-2}, \dots, S_0$:

*   **If the output $Y$ is logic 0 for a particular select combination:** Connect the corresponding data input to logic 0 (GND).
*   **If the output $Y$ is logic 1 for a particular select combination:** Connect the corresponding data input to logic 1 (VCC).
*   **If the output $Y$ follows the pattern of one of the remaining variables (or its complement):** Connect the corresponding data input to that variable (or its complement).

Let's consider an example to clarify this.

#### 2.3. Example: Implementing $f(A, B, C) = \Sigma m(1, 3, 6, 7)$ using an 8-to-1 MUX

**1. Boolean Function:** $f(A, B, C) = \Sigma m(1, 3, 6, 7)$

**2. Truth Table:**

| A | B | C | f |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |  ($m_1$)
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |  ($m_3$)
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |  ($m_6$)
| 1 | 1 | 1 | 1 |  ($m_7$)

**3. MUX Size:** 3 variables (A, B, C) => $2^3 = 8$. We need an 8-to-1 MUX.

**4. Assign Select Inputs:** Let $A$ be the most significant bit (MSB) and $C$ be the least significant bit (LSB).
   *   $S_2 \leftarrow A$
   *   $S_1 \leftarrow B$
   *   $S_0 \leftarrow C$

**5. Map Truth Table to MUX Inputs:** The 8 data inputs ($I_0$ to $I_7$) correspond to the minterms 0 to 7.

*   **$I_0$ (A=0, B=0, C=0):** $f=0$. Connect $I_0$ to **0**.
*   **$I_1$ (A=0, B=0, C=1):** $f=1$. Connect $I_1$ to **1**.
*   **$I_2$ (A=0, B=1, C=0):** $f=0$. Connect $I_2$ to **0**.
*   **$I_3$ (A=0, B=1, C=1):** $f=1$. Connect $I_3$ to **1**.
*   **$I_4$ (A=1, B=0, C=0):** $f=0$. Connect $I_4$ to **0**.
*   **$I_5$ (A=1, B=0, C=1):** $f=0$. Connect $I_5$ to **0**.
*   **$I_6$ (A=1, B=1, C=0):** $f=1$. Connect $I_6$ to **1**.
*   **$I_7$ (A=1, B=1, C=1):** $f=1$. Connect $I_7$ to **1**.

**Implementation for this example:** All data inputs are connected directly to logic 0 or 1.

**Let's consider another example where variables are needed for data inputs.**

#### 2.4. Example: Implementing $f(A, B, C) = \Sigma m(1, 2, 5, 6)$ using an 8-to-1 MUX

**1. Truth Table:**

| A | B | C | f |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |  ($m_1$)
| 0 | 1 | 0 | 1 |  ($m_2$)
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |  ($m_5$)
| 1 | 1 | 0 | 1 |  ($m_6$)
| 1 | 1 | 1 | 0 |

**2. MUX Size:** 8-to-1.
**3. Select Inputs:** $S_2 \leftarrow A$, $S_1 \leftarrow B$, $S_0 \leftarrow C$.

**4. Map to MUX Inputs:**

*   **Group by $A$ (MSB):**
    *   When $A=0$ (Select lines $S_2S_1S_0 = 000$ to $011$), the function $f$ depends on $B$ and $C$.
    *   When $A=1$ (Select lines $S_2S_1S_0 = 100$ to $111$), the function $f$ depends on $B$ and $C$.

*   **Consider $A=0$ group (Minterms $m_0$ to $m_3$):**
    | A | B | C | f | $S_2S_1S_0$ | Required for $I_0$ to $I_3$ |
    |---|---|---|---|-----------|-------------------------|
    | 0 | 0 | 0 | 0 | 000       | $I_0 = 0$               |
    | 0 | 0 | 1 | 1 | 001       | $I_1 = 1$               |
    | 0 | 1 | 0 | 1 | 010       | $I_2 = B$ (since B=1)   |
    | 0 | 1 | 1 | 0 | 011       | $I_3 = 0$ (since B=1)   |

    Now, analyze the inputs $I_0$ to $I_3$ based on $B$ and $C$:
    *   For $I_0$ (A=0, B=0, C=0), $f=0$. $I_0$ should be 0.
    *   For $I_1$ (A=0, B=0, C=1), $f=1$. $I_1$ should be 1.
    *   For $I_2$ (A=0, B=1, C=0), $f=1$. This is when $B=1$ and $C=0$. The output follows $B$. So, $I_2 = B$.
    *   For $I_3$ (A=0, B=1, C=1), $f=0$. This is when $B=1$ and $C=1$. The output is 0. If we connect $I_3$ to $B$, $f$ would be 1. If we connect to $\overline{B}$, $f$ would be 0. So, $I_3 = \overline{B}$.

    **Correction:** Let's re-evaluate the mapping strategy for $n$ variables with an $(2^n)$-to-1 MUX, where $n-1$ variables are select lines and one variable is used for the data inputs.

    For $n$ variables $V_n, \dots, V_1$, using an $(2^n)$-to-1 MUX with select lines $S_{n-1}, \dots, S_0$.
    Let $S_{n-1}$ be the most significant variable. The remaining $n-1$ variables ($V_{n-1}, \dots, V_1$) determine the logic for the data inputs.

    **Corrected Strategy for $f(A, B, C)$ using 8-to-1 MUX ($S_2=A, S_1=B, S_0=C$):**

    We examine the truth table by grouping rows based on the select lines $S_2, S_1$ (corresponding to variables $A, B$). The remaining variable $C$ (connected to $S_0$) will determine the output for each data input.

    *   **Data Input $I_0$ (Select $S_2S_1S_0 = 000$):** Corresponds to $A=0, B=0$. The truth table value for $f$ when $A=0, B=0$ is $f(0,0,0)=0$ and $f(0,0,1)=1$. Since $C$ is the LSB and controls the output here, the output follows $C$. So, connect $I_0$ to **$C$**.
    *   **Data Input $I_1$ (Select $S_2S_1S_0 = 001$):** Corresponds to $A=0, B=0$. This is already covered by $I_0$.

    **Let's use the standard method of grouping by the select inputs and observing the pattern of the remaining variable.**

    For an $N$-to-1 MUX with select inputs $S_{k-1}, \dots, S_0$ and data inputs $I_0, \dots, I_{N-1}$, where $N=2^k$.
    If we have a function $f(v_1, v_2, \dots, v_m)$, we use a $(2^{m-1})$-to-1 MUX if we can dedicate one variable to control the output for each data input.

    **Revised Strategy for $f(A, B, C)$ using an 8-to-1 MUX:**
    Let $S_2=A$, $S_1=B$, $S_0=C$.
    For each data input $I_i$, we look at the rows of the truth table where $S_2S_1S_0$ matches the minterm index $i$. The values of $f$ in these rows determine how $I_i$ is connected.

    | Minterm ($i$) | $S_2$ (A) | $S_1$ (B) | $S_0$ (C) | f | Data Input Connection for $I_i$ |
    |---|---|---|---|---|---|
    | 0 | 0 | 0 | 0 | 0 | $I_0 = 0$ |
    | 1 | 0 | 0 | 1 | 1 | $I_1 = 1$ |
    | 2 | 0 | 1 | 0 | 1 | $I_2 = 1$ |
    | 3 | 0 | 1 | 1 | 0 | $I_3 = 0$ |
    | 4 | 1 | 0 | 0 | 0 | $I_4 = 0$ |
    | 5 | 1 | 0 | 1 | 1 | $I_5 = 1$ |
    | 6 | 1 | 1 | 0 | 1 | $I_6 = 1$ |
    | 7 | 1 | 1 | 1 | 0 | $I_7 = 0$ |

    **This example leads to a direct implementation, where all data inputs are either 0 or 1.**

    **The more general approach for $f(A,B,C)$ using $(2^n)$-to-1 MUX requires $m=n$ variables. Let's use the $n-1$ variables as select lines and one variable for data inputs.**

    **Let's implement $f(A, B, C)$ using a 4-to-1 MUX.**
    We have 3 variables, so we need a $2^k \ge 3$. $k=2$ implies a 4-to-1 MUX.
    We need to choose 2 variables for select lines and dedicate the remaining variable to the data inputs.

    **Strategy:** Use $A$ and $B$ as select lines ($S_1=A, S_0=B$), and $C$ will be used for data inputs.

    **Truth Table for $f(A, B, C) = \Sigma m(1, 2, 5, 6)$:**

    | A | B | C | f | $S_1$ | $S_0$ | $I_i$ for $C$ |
    |---|---|---|---|---|---|---|
    | 0 | 0 | 0 | 0 | 0 | 0 | $I_0$ |
    | 0 | 0 | 1 | 1 | 0 | 0 | $I_0$ |
    | 0 | 1 | 0 | 1 | 0 | 1 | $I_1$ |
    | 0 | 1 | 1 | 0 | 0 | 1 | $I_1$ |
    | 1 | 0 | 0 | 0 | 1 | 0 | $I_2$ |
    | 1 | 0 | 1 | 1 | 1 | 0 | $I_2$ |
    | 1 | 1 | 0 | 1 | 1 | 1 | $I_3$ |
    | 1 | 1 | 1 | 0 | 1 | 1 | $I_3$ |

    Now, for each data input $I_i$, we observe the required value based on $C$ when the select lines ($S_1, S_0$) match $i$.

    *   **$I_0$ (Select $S_1S_0 = 00$):**
        *   When $C=0$, $f=0$.
        *   When $C=1$, $f=1$.
        *   The output follows $C$. Connect $I_0$ to **$C$**.

    *   **$I_1$ (Select $S_1S_0 = 01$):**
        *   When $C=0$, $f=1$.
        *   When $C=1$, $f=0$.
        *   The output follows $\overline{C}$. Connect $I_1$ to **$\overline{C}$**.

    *   **$I_2$ (Select $S_1S_0 = 10$):**
        *   When $C=0$, $f=0$.
        *   When $C=1$, $f=1$.
        *   The output follows $C$. Connect $I_2$ to **$C$**.

    *   **$I_3$ (Select $S_1S_0 = 11$):**
        *   When $C=0$, $f=1$.
        *   When $C=1$, $f=0$.
        *   The output follows $\overline{C}$. Connect $I_3$ to **$\overline{C}$**.

    **Final Connections for 4-to-1 MUX implementation of $f(A, B, C) = \Sigma m(1, 2, 5, 6)$:**
    *   Select inputs: $S_1 = A$, $S_0 = B$.
    *   Data inputs: $I_0 = C$, $I_1 = \overline{C}$, $I_2 = C$, $I_3 = \overline{C}$.

    **Important Point:** If you have $m$ variables, you can implement the function using a $(2^k)$-to-1 MUX where $2^k \ge m$. You will use $k$ variables as select lines and dedicate $m-k$ variables to the data inputs. If $m-k > 0$, you group the truth table rows based on the $k$ select variables and observe the pattern of the remaining $m-k$ variables.

    **Textbook Reference:** Floyd T.L. "Digital Fundamentals" (11/e) extensively covers MUX applications in Chapter 7. Malvino & Leach also provide good examples in Chapter 8.

#### 2.5. Implementing Universal Logic Gates using MUX

A 2-to-1 MUX can implement any of the six basic universal logic gates (AND, OR, NOT, NAND, NOR, XOR):

*   **NOT gate:** $Y = \overline{A}$
    *   Use a 2-to-1 MUX.
    *   $S = A$, $I_0 = 0$, $I_1 = 1$. Incorrect.
    *   **Correct Implementation:** $S = A$, $I_0 = 0$, $I_1 = \overline{A}$ (where $\overline{A}$ is available or generated).
    *   **Alternative:** $S = A$, $I_0 = 1$, $I_1 = 0$. This implements $Y = \overline{S} \cdot 1 + S \cdot 0 = \overline{A}$. So, NOT gate implemented with $S=A, I_0=1, I_1=0$.

*   **AND gate:** $Y = AB$ (2-input AND)
    *   Use a 2-to-1 MUX.
    *   $S = B$, $I_0 = 0$, $I_1 = A$. Then $Y = \overline{B} \cdot 0 + B \cdot A = BA = AB$.

*   **OR gate:** $Y = A+B$ (2-input OR)
    *   Use a 2-to-1 MUX.
    *   $S = B$, $I_0 = A$, $I_1 = 1$. Then $Y = \overline{B} \cdot A + B \cdot 1 = \overline{B}A + B$. This is NOT $A+B$.
    *   **Correct Implementation:** $S = B$, $I_0 = A$, $I_1 = 1$. Then $Y = \overline{B} \cdot A + B \cdot 1 = \overline{B}A + B$. This is equivalent to $A+B$ using boolean algebra: $A+B = A + \overline{A}B$ (no, this is wrong).
    *   Using $Y = (\overline{S} \cdot I_0) + (S \cdot I_1)$:
        *   To implement $A+B$ with $S=B$: $Y = (\overline{B} \cdot I_0) + (B \cdot I_1)$.
        *   If $I_0=A, I_1=1$: $Y = \overline{B}A + B$. This is $A+B$ by consensus theorem if $B \cdot A = BA$, but that's not helpful.
        *   Let's use the truth table:
            | B | A | A+B |
            |---|---|-----|
            | 0 | 0 | 0   |
            | 0 | 1 | 1   |
            | 1 | 0 | 1   |
            | 1 | 1 | 1   |
        *   If $S=B$:
            *   $S=0$ (B=0): Output should be A. So $I_0 = A$.
            *   $S=1$ (B=1): Output should be 1. So $I_1 = 1$.
        *   Thus, for $Y=A+B$ with $S=B$: $I_0 = A$, $I_1 = 1$.

*   **XOR gate:** $Y = A \oplus B$
    *   Use a 2-to-1 MUX.
    *   $S = B$, $I_0 = A$, $I_1 = \overline{A}$. Then $Y = \overline{B} \cdot A + B \cdot \overline{A} = A \oplus B$.

---

### 3. Introduction to Demultiplexers (DEMUX)

Demultiplexers are combinational logic circuits that perform the reverse operation of a multiplexer. They take a single input signal and route it to one of several output lines.

**Key Concept:** A DEMUX acts like a digitally controlled switch that directs a single input to one of many outputs.

#### 3.1. Functionality of a Demultiplexer

*   A DEMUX has a single data input line, one or more select input lines, and multiple output lines.
*   The select lines determine which output line receives the data input.
*   If there are $n$ select lines, then $2^n$ output lines can be controlled.

#### 3.2. Structure of a Demultiplexer

*   **Data Input:** The single line that carries the data signal to be routed.
*   **Select Inputs:** These lines control which output line is activated.
*   **Enable Input (Optional):** Similar to MUX, enables or disables the DEMUX. If disabled, all outputs are typically inactive (logic 0 or high impedance).
*   **Output Lines:** Multiple lines, where only one is active at a time, determined by the select inputs.

#### 3.3. Truth Table and Logic Diagram (Example: 1-to-2 DEMUX)

A 1-to-2 DEMUX has one data input ($D$), one select input ($S$), and two output lines ($Y_0$, $Y_1$).

| S | D | $Y_0$ | $Y_1$ |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 |

**Boolean Expressions:**
*   $Y_0 = \overline{S} \cdot D$
*   $Y_1 = S \cdot D$

**Logic Diagram:**

```
        +---------+
D ----> |         |----> Y0
        |  DEMUX  |
S ----> |  1-to-2 |----> Y1
        |         |
        +---------+
```

#### 3.4. Truth Table and Logic Diagram (Example: 1-to-4 DEMUX)

A 1-to-4 DEMUX has one data input ($D$), two select inputs ($S_1$, $S_0$), and four output lines ($Y_0$, $Y_1$, $Y_2$, $Y_3$).

| $S_1$ | $S_0$ | Selected Output | $Y_0$ | $Y_1$ | $Y_2$ | $Y_3$ |
|---|---|---|---|---|---|---|
| 0 | 0 | $Y_0$ | $D$ | 0 | 0 | 0 |
| 0 | 1 | $Y_1$ | 0 | $D$ | 0 | 0 |
| 1 | 0 | $Y_2$ | 0 | 0 | $D$ | 0 |
| 1 | 1 | $Y_3$ | 0 | 0 | 0 | $D$ |

**Boolean Expressions:**
*   $Y_0 = \overline{S_1} \overline{S_0} D$
*   $Y_1 = \overline{S_1} S_0 D$
*   $Y_2 = S_1 \overline{S_0} D$
*   $Y_3 = S_1 S_0 D$

**Logic Diagram:**

```
        +-----------+
D ----> |           |----> Y0
        |  DEMUX    |----> Y1
        |  1-to-4   |----> Y2
S0 ---->|           |----> Y3
S1 ---->|           |
        +-----------+
```

#### 3.5. Common Demultiplexers

*   **1-to-2 DEMUX:** Uses 1 select line, can route to 2 outputs.
*   **1-to-4 DEMUX:** Uses 2 select lines, can route to 4 outputs.
*   **1-to-8 DEMUX:** Uses 3 select lines, can route to 8 outputs.
*   **1-to-16 DEMUX:** Uses 4 select lines, can route to 16 outputs.

**Generalization:** An $N$-output DEMUX requires $\lceil \log_2 N \rceil$ select lines.

#### 3.6. Applications of Demultiplexers

*   **Data Distribution:** Distributing a single data stream to multiple destinations.
*   **Address Decoding:** In memory systems, DEMUXes are used to select a specific memory location based on an address.
*   **Communication Systems:** Routing signals in time-division multiplexing (TDM).
*   **Digital Displays:** Driving multiple segments or digits of a display.

#### 3.7. Connecting MUX and DEMUX in a System

A common application is combining MUX and DEMUX for serial-to-parallel and parallel-to-serial data conversion.

*   **Serial-to-Parallel Conversion:** A serial data stream is fed into the input of a MUX. The select lines are controlled by a counter or decoder to sequentially select each bit of the serial data and present it to the output of the MUX, effectively making it appear in parallel.
*   **Parallel-to-Serial Conversion:** Parallel data bits are fed into the inputs of a DEMUX. The select lines are controlled to sequentially enable each output line, sending the parallel data out serially.

---

### 4. Practice Questions

**Q1. A $2^n$-to-1 multiplexer has:**
    (a) $n$ select lines and $2^n$ data inputs.
    (b) $2^n$ select lines and $n$ data inputs.
    (c) $n$ data inputs and $2^n$ select lines.
    (d) $2^n$ data inputs and $n$ select lines.

**Q2. What is the size of the multiplexer required to implement a Boolean function of 4 variables?**
    (a) 4-to-1 MUX
    (b) 8-to-1 MUX
    (c) 16-to-1 MUX
    (d) 32-to-1 MUX

**Q3. Implement the Boolean function $f(A, B) = A + \overline{B}$ using a 2-to-1 multiplexer. Specify the select inputs and data inputs.**

**Q4. A 1-to-4 demultiplexer has:**
    (a) 1 select line and 4 data inputs.
    (b) 4 select lines and 1 data input.
    (c) 2 select lines and 1 data input.
    (d) 2 data inputs and 4 select lines.

**Q5. If the select lines of a 1-to-8 demultiplexer are $S_2, S_1, S_0$ and the data input is D, write the Boolean expression for the output $Y_3$.**

**Q6. Implement the function $f(A, B, C) = \Sigma m(0, 2, 4, 6)$ using a 4-to-1 multiplexer. Assume $A$ and $B$ are select inputs ($S_1=A, S_0=B$).**

---

### 5. Answers to Practice Questions

**A1. (a)** A $2^n$-to-1 multiplexer has $n$ select lines to choose from $2^n$ data inputs.

**A2. (c)** For a function of 4 variables, we need $2^4 = 16$ possible input combinations, hence a 16-to-1 multiplexer is required.

**A3. Implementing $f(A, B) = A + \overline{B}$ using a 2-to-1 MUX:**
    *   We have 2 variables, so we use a 2-to-1 MUX.
    *   Let $S$ be the select line and $I_0, I_1$ be the data inputs.
    *   We can assign one variable to the select line (e.g., $S = B$). The other variable ($A$) and its complement will be used for the data inputs.
    *   Boolean expression: $Y = (\overline{S} \cdot I_0) + (S \cdot I_1)$
    *   Substitute $S = B$: $Y = (\overline{B} \cdot I_0) + (B \cdot I_1)$
    *   We want $Y = A + \overline{B}$.
    *   Let's match the terms:
        *   $(\overline{B} \cdot I_0)$ should contribute to the $\overline{B}$ part. If $I_0 = A$, then we get $\overline{B}A$.
        *   $(B \cdot I_1)$ should contribute to the $B$ part. If $I_1 = 1$, then we get $B$.
    *   So, $Y = (\overline{B} \cdot A) + (B \cdot 1) = A\overline{B} + B$.
    *   Is $A\overline{B} + B$ equal to $A + \overline{B}$? No.
    *   Let's try assigning $S = \overline{B}$.
    *   $Y = (S \cdot I_0) + (\overline{S} \cdot I_1)$ (if select is inverted). Assuming standard $Y = (\overline{S} \cdot I_0) + (S \cdot I_1)$.
    *   Let $S = \overline{B}$. Then $\overline{S} = B$.
    *   $Y = (B \cdot I_0) + (\overline{B} \cdot I_1)$.
    *   We want $A + \overline{B}$.
    *   If $I_0 = 1$, we get $B$.
    *   If $I_1 = A$, we get $\overline{B}A$.
    *   So, $Y = (B \cdot 1) + (\overline{B} \cdot A) = B + A\overline{B}$. This is not $A + \overline{B}$.

    *   Let's use the truth table for $f(A, B) = A + \overline{B}$:
        | A | B | $\overline{B}$ | $A + \overline{B}$ |
        |---|---|---|---|
        | 0 | 0 | 1 | 1 |
        | 0 | 1 | 0 | 0 |
        | 1 | 0 | 1 | 1 |
        | 1 | 1 | 0 | 1 |

    *   **Option 1: $S = A$**
        *   $Y = (\overline{A} \cdot I_0) + (A \cdot I_1)$
        *   For $A=0$ (select $S=0$), output is $f$. From truth table, when $A=0$, $f$ is 1 for B=0 and 0 for B=1. This means $f = \overline{B}$ when $A=0$. So, $I_0 = \overline{B}$.
        *   For $A=1$ (select $S=1$), output is $f$. From truth table, when $A=1$, $f$ is 1 for B=0 and 1 for B=1. This means $f = 1$ when $A=1$. So, $I_1 = 1$.
        *   **Connections:** $S = A$, $I_0 = \overline{B}$, $I_1 = 1$.

    *   **Option 2: $S = B$**
        *   $Y = (\overline{B} \cdot I_0) + (B \cdot I_1)$
        *   For $B=0$ (select $S=0$), output is $f$. From truth table, when $B=0$, $f$ is 1 for A=0 and 1 for A=1. This means $f = 1$ when $B=0$. So, $I_0 = 1$.
        *   For $B=1$ (select $S=1$), output is $f$. From truth table, when $B=1$, $f$ is 0 for A=0 and 1 for A=1. This means $f = A$ when $B=1$. So, $I_1 = A$.
        *   **Connections:** $S = B$, $I_0 = 1$, $I_1 = A$.

    Both options are valid. Let's present Option 1:
    *   **Select Input:** $S = A$
    *   **Data Inputs:** $I_0 = \overline{B}$, $I_1 = 1$

**A4. (c)** A 1-to-4 demultiplexer needs $2^n=4$ outputs, so $n=2$ select lines. It has one data input.

**A5. Boolean expression for $Y_3$ of a 1-to-8 DEMUX:**
    *   The outputs are selected by $S_2S_1S_0$.
    *   $Y_3$ corresponds to the select input combination $S_2S_1S_0 = 111$.
    *   The data input $D$ is routed to $Y_3$ when $S_2=1, S_1=1, S_0=1$.
    *   The Boolean expression for $Y_3$ is $Y_3 = S_2 S_1 S_0 D$.

**A6. Implementing $f(A, B, C) = \Sigma m(0, 2, 4, 6)$ using a 4-to-1 MUX ($S_1=A, S_0=B$):**

    *   **Truth Table:**
        | A | B | C | f | $S_1$ | $S_0$ | $I_i$ for $C$ |
        |---|---|---|---|---|---|---|
        | 0 | 0 | 0 | 0 | 0 | 0 | $I_0$ |
        | 0 | 0 | 1 | 0 | 0 | 0 | $I_0$ |
        | 0 | 1 | 0 | 1 | 0 | 1 | $I_1$ |
        | 0 | 1 | 1 | 0 | 0 | 1 | $I_1$ |
        | 1 | 0 | 0 | 0 | 1 | 0 | $I_2$ |
        | 1 | 0 | 1 | 0 | 1 | 0 | $I_2$ |
        | 1 | 1 | 0 | 1 | 1 | 1 | $I_3$ |
        | 1 | 1 | 1 | 0 | 1 | 1 | $I_3$ |

    *   **Mapping to Data Inputs (based on $C$):**
        *   **$I_0$ (Select $S_1S_0 = 00$):**
            *   When $C=0$, $f=0$.
            *   When $C=1$, $f=0$.
            *   The output is always 0, regardless of $C$. Connect $I_0$ to **0**.

        *   **$I_1$ (Select $S_1S_0 = 01$):**
            *   When $C=0$, $f=1$.
            *   When $C=1$, $f=0$.
            *   The output follows $\overline{C}$. Connect $I_1$ to **$\overline{C}$**.

        *   **$I_2$ (Select $S_1S_0 = 10$):**
            *   When $C=0$, $f=0$.
            *   When $C=1$, $f=0$.
            *   The output is always 0, regardless of $C$. Connect $I_2$ to **0**.

        *   **$I_3$ (Select $S_1S_0 = 11$):**
            *   When $C=0$, $f=1$.
            *   When $C=1$, $f=0$.
            *   The output follows $\overline{C}$. Connect $I_3$ to **$\overline{C}$**.

    *   **Final Connections:**
        *   Select inputs: $S_1 = A$, $S_0 = B$.
        *   Data inputs: $I_0 = 0$, $I_1 = \overline{C}$, $I_2 = 0$, $I_3 = \overline{C}$.

---

### 6. Important Points to Remember

*   **MUX as Data Selector:** Chooses one input based on select lines.
*   **DEMUX as Data Distributor:** Routes one input to one output based on select lines.
*   **Number of Select Lines:** For $N$ data inputs (MUX) or $N$ outputs (DEMUX), you need $\lceil \log_2 N \rceil$ select lines.
*   **Implementation of Boolean Functions with MUX:** Any Boolean function of $m$ variables can be implemented using a $(2^k)$-to-1 MUX, where $k$ select lines are used for $k$ variables, and the remaining $m-k$ variables are used to derive the logic for the data inputs.
*   **Data Input Logic for MUX Implementation:**
    *   If the output is constant 0, connect data input to 0.
    *   If the output is constant 1, connect data input to 1.
    *   If the output matches the $i$-th variable (e.g., $C$), connect data input to that variable ($C$).
    *   If the output matches the complement of the $i$-th variable (e.g., $\overline{C}$), connect data input to that variable's complement ($\overline{C}$).
*   **MUX/DEMUX Sizes:** Common sizes are 2:1, 4:1, 8:1, 16:1 for MUXes and 1:2, 1:4, 1:8, 1:16 for DEMUXes.
*   **Enable Pin:** Crucial for controlling the overall operation of MUX/DEMUX chips.

---

This concludes the notes on Multiplexers and Demultiplexers. Understanding these devices is fundamental to designing and analyzing many digital systems.
