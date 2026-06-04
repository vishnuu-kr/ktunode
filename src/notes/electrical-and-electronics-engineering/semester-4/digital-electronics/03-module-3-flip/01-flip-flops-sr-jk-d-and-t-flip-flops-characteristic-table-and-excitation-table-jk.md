---
title: "Flip-Flops – SR, JK, D and T flip-flops – characteristic table and excitation table – JK Master Slave Flip-flop – Conversion of flip- flops – SR to JK and JK to SR only."
subject: "DIGITAL ELECTRONICS"
module: "Module 3: Flip"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e51"
status: "completed"
scrapedAt: "2026-05-23T16:15:52.855Z"
---
# Digital Electronics: Module 3 - Flip-Flops

## Introduction to Flip-Flops

Flip-flops are fundamental building blocks of sequential logic circuits. They are bistable multivibrators, meaning they have two stable states, and can store one bit of information. This ability to store information makes them crucial for memory elements, registers, counters, and state machines.

**Key Concept:** Flip-flops are memory elements that hold a binary value (0 or 1) until they are changed by an input signal.

**Reference:** Floyd T.L., *Digital Fundamentals*, Chapter 6.

---

## 1. SR Flip-Flop

The SR flip-flop is the simplest type of flip-flop. It has two inputs, S (Set) and R (Reset), and two outputs, Q and its complement $\bar{Q}$.

### 1.1 Basic Structure and Operation

An SR flip-flop can be constructed using NAND or NOR gates.

**NOR Gate Implementation:**

*   **Circuit Diagram:** (Visualize a circuit with two cross-coupled NOR gates, one with inputs S and $\bar{Q}$, the other with inputs R and Q. The outputs Q and $\bar{Q}$ are fed back.)
*   **Operation:**
    *   **S = 0, R = 0:** No change. The flip-flop remains in its current state.
    *   **S = 1, R = 0:** Set state. $Q = 1$, $\bar{Q} = 0$.
    *   **S = 0, R = 1:** Reset state. $Q = 0$, $\bar{Q} = 1$.
    *   **S = 1, R = 1:** Invalid or forbidden state. Both Q and $\bar{Q}$ become 0, which violates the basic requirement of a flip-flop. This state should be avoided.

**NAND Gate Implementation:**

*   **Circuit Diagram:** (Visualize a circuit with two cross-coupled NAND gates, one with inputs S and Q, the other with inputs R and $\bar{Q}$. The outputs Q and $\bar{Q}$ are fed back.)
*   **Operation:**
    *   **S = 0, R = 0:** Invalid or forbidden state. Both Q and $\bar{Q}$ become 1.
    *   **S = 1, R = 0:** Reset state. $Q = 0$, $\bar{Q} = 1$.
    *   **S = 0, R = 1:** Set state. $Q = 1$, $\bar{Q} = 0$.
    *   **S = 1, R = 1:** No change. The flip-flop remains in its current state.

**Important Point:** The NOR implementation is generally preferred because the Set (S=1, R=0) and Reset (S=0, R=1) conditions are active-low in a NAND-based SR latch, which is less intuitive.

### 1.2 SR Flip-Flop Characteristic Table

The characteristic table describes the next state ($Q_{n+1}$) based on the current state ($Q_n$) and the inputs (S, R).

| S   | R   | $Q_{n+1}$ | Description   |
| :-- | :-- | :-------- | :------------ |
| 0   | 0   | $Q_n$     | No change     |
| 0   | 1   | 0         | Reset         |
| 1   | 0   | 1         | Set           |
| 1   | 1   | X         | Invalid/Forbidden |

*   $Q_n$: Current state of the output Q.
*   $Q_{n+1}$: Next state of the output Q after the inputs are applied.
*   X: Don't care (in this context, represents an unpredictable state).

**Reference:** Malvino & Leach, *Digital Principles and Applications*, Chapter 8.

### 1.3 SR Flip-Flop Excitation Table

The excitation table shows the required input conditions (S, R) to transition from a current state ($Q_n$) to a desired next state ($Q_{n+1}$).

| $Q_n$ | $Q_{n+1}$ | S   | R   |
| :---- | :-------- | :-- | :-- |
| 0     | 0         | 0   | X   |
| 0     | 1         | 1   | 0   |
| 1     | 0         | 0   | 1   |
| 1     | 1         | X   | 0   |

*   X indicates that the input can be either 0 or 1 without affecting the transition.

**CO Alignment:** This section helps understand the fundamental behavior of sequential circuits, contributing to CO3 (Design sequential logic circuits).

---

## 2. JK Flip-Flop

The JK flip-flop is an improvement over the SR flip-flop. It overcomes the invalid state by allowing both J and K to be high simultaneously.

### 2.1 Basic Structure and Operation

The JK flip-flop has inputs J and K, and outputs Q and $\bar{Q}$. It also typically includes a clock input.

*   **Operation:**
    *   **J = 0, K = 0:** No change. $Q_{n+1} = Q_n$.
    *   **J = 1, K = 0:** Set state. $Q_{n+1} = 1$.
    *   **J = 0, K = 1:** Reset state. $Q_{n+1} = 0$.
    *   **J = 1, K = 1:** Toggle state. The output Q toggles its current state. If $Q_n = 0$, $Q_{n+1} = 1$. If $Q_n = 1$, $Q_{n+1} = 0$.

**Important Point:** The toggle mode (J=1, K=1) makes the JK flip-flop more versatile.

### 2.2 JK Flip-Flop Characteristic Table

| J   | K   | $Q_n$ | $Q_{n+1}$ | Description   |
| :-- | :-- | :---- | :-------- | :------------ |
| 0   | 0   | 0     | 0         | No change     |
| 0   | 0   | 1     | 1         | No change     |
| 1   | 0   | 0     | 1         | Set           |
| 1   | 0   | 1     | 1         | Set           |
| 0   | 1   | 0     | 0         | Reset         |
| 0   | 1   | 1     | 0         | Reset         |
| 1   | 1   | 0     | 1         | Toggle        |
| 1   | 1   | 1     | 0         | Toggle        |

A simplified characteristic equation for the JK flip-flop is $Q_{n+1} = J\bar{Q}_n + \bar{J}Q_n$, which is equivalent to $Q_{n+1} = J \oplus Q_n$ if J and K are considered as a single input that can be 0 or 1.

### 2.3 JK Flip-Flop Excitation Table

| $Q_n$ | $Q_{n+1}$ | J   | K   |
| :---- | :-------- | :-- | :-- |
| 0     | 0         | 0   | X   |
| 0     | 1         | 1   | 0   |
| 1     | 0         | 0   | 1   |
| 1     | 1         | X   | 0   |

**CO Alignment:** Directly supports CO3 (Design sequential logic circuits) by providing the logic for state transitions.

---

## 3. D Flip-Flop

The D flip-flop (Data or Delay flip-flop) is designed to store the value of the input D.

### 3.1 Basic Structure and Operation

The D flip-flop has a single input D and outputs Q and $\bar{Q}$. It is essentially an SR flip-flop with its inputs tied together in a specific way (S is connected to D, R is connected to $\bar{D}$).

*   **Operation:**
    *   When the clock pulse occurs, the value present at the D input is transferred to the Q output.
    *   **D = 0:** $Q_{n+1} = 0$ (Reset).
    *   **D = 1:** $Q_{n+1} = 1$ (Set).

**Important Point:** The D flip-flop eliminates the invalid state of the SR flip-flop and directly stores the input data. This makes it ideal for data storage.

### 3.2 D Flip-Flop Characteristic Table

| D   | $Q_n$ | $Q_{n+1}$ | Description |
| :-- | :---- | :-------- | :---------- |
| 0   | 0     | 0         | Store 0     |
| 0   | 1     | 0         | Store 0     |
| 1   | 0     | 1         | Store 1     |
| 1   | 1     | 1         | Store 1     |

The characteristic equation is simply: $Q_{n+1} = D$.

### 3.3 D Flip-Flop Excitation Table

| $Q_n$ | $Q_{n+1}$ | D   |
| :---- | :-------- | :-- |
| 0     | 0         | 0   |
| 0     | 1         | 1   |
| 1     | 0         | 0   |
| 1     | 1         | 1   |

**Reference:** Mano & Ciletti, *Digital Design*, Chapter 5.

---

## 4. T Flip-Flop

The T flip-flop (Toggle flip-flop) is derived from the JK flip-flop by connecting both J and K inputs together.

### 4.1 Basic Structure and Operation

The T flip-flop has a single input T and outputs Q and $\bar{Q}$.

*   **Operation:**
    *   **T = 0:** No change. $Q_{n+1} = Q_n$.
    *   **T = 1:** Toggle. The output Q flips to its opposite state. If $Q_n = 0$, $Q_{n+1} = 1$. If $Q_n = 1$, $Q_{n+1} = 0$.

**Important Point:** The T flip-flop is used in counters and frequency dividers because of its toggling ability.

### 4.2 T Flip-Flop Characteristic Table

| T   | $Q_n$ | $Q_{n+1}$ | Description |
| :-- | :---- | :-------- | :---------- |
| 0   | 0     | 0         | No change   |
| 0   | 1     | 1         | No change   |
| 1   | 0     | 1         | Toggle      |
| 1   | 1     | 0         | Toggle      |

The characteristic equation is $Q_{n+1} = T \oplus Q_n$.

### 4.3 T Flip-Flop Excitation Table

| $Q_n$ | $Q_{n+1}$ | T   |
| :---- | :-------- | :-- |
| 0     | 0         | 0   |
| 0     | 1         | 1   |
| 1     | 0         | 1   |
| 1     | 1         | 0   |

**CO Alignment:** Crucial for CO3 (Design sequential logic circuits), particularly for designing counters.

---

## Clocked Flip-Flops and Edge-Triggering

Most practical flip-flops are **clocked**, meaning their state changes only when a clock pulse is applied. This synchronization is vital for the reliable operation of sequential circuits.

*   **Level-Triggered:** The output can change any time the enable (clock) input is active.
*   **Edge-Triggered:** The output changes only at the active edge of the clock pulse (either the rising edge or the falling edge). This is the most common type and offers better stability.

**Reference:** Taub & Schilling, *Digital Integrated Electronics*, Chapter 11.

---

## 5. JK Master-Slave Flip-Flop

The JK Master-Slave flip-flop is a clocked JK flip-flop designed to overcome a timing problem called **race-around condition**, which can occur in simple JK flip-flops when J=K=1 and the clock pulse width is long enough.

### 5.1 Structure and Operation

A master-slave flip-flop consists of two stages: a master flip-flop and a slave flip-flop.

1.  **Master Stage:** Enabled when the clock is at one level (e.g., high for a positive-level triggered master). It receives the J and K inputs and its output is Qm and $\bar{Q}m$.
2.  **Slave Stage:** Enabled when the clock is at the opposite level (e.g., low for a negative-level triggered slave). It receives the outputs of the master stage (Qm, $\bar{Q}m$) as its inputs and produces the final output Q and $\bar{Q}$.

*   **Operation:**
    *   When the clock is HIGH (or at its active level), the master flip-flop is enabled, and it captures the J and K inputs. The slave flip-flop is disabled.
    *   When the clock transitions from HIGH to LOW (falling edge for edge-triggered), the master stage is disabled, and its outputs (Qm, $\bar{Q}m$) are transferred to the slave stage. The slave stage then becomes enabled and updates the final outputs Q and $\bar{Q}$.
    *   When the clock is LOW (or at its inactive level), the slave flip-flop is enabled, but the master is disabled, so the output Q holds its state.

**Key Benefit:** The master-slave configuration ensures that the output changes only once per clock cycle, typically at the transition edge, thus preventing the race-around condition.

**Reference:** Floyd T.L., *Digital Fundamentals*, Chapter 6.

---

## 6. Conversion of Flip-Flops

It is possible to convert one type of flip-flop into another by adding appropriate external logic gates. This is often done to utilize the characteristics of a more versatile flip-flop (like JK) to mimic the behavior of another.

### 6.1 SR to JK Flip-Flop Conversion

To convert an SR flip-flop into a JK flip-flop, we need to add logic gates that will provide the J and K inputs to the SR flip-flop based on the desired JK inputs and the current state of the SR flip-flop.

*   **Requirement:** The SR flip-flop has an invalid state (S=1, R=1), which we need to handle. The JK flip-flop's toggle mode (J=1, K=1) needs to be mapped to a valid SR input.
*   **Logic:**
    *   If J=1 and K=0 (Set), we need S=1, R=0 for the SR flip-flop.
    *   If J=0 and K=1 (Reset), we need S=0, R=1 for the SR flip-flop.
    *   If J=0 and K=0 (No change), we need S=0, R=0 for the SR flip-flop.
    *   If J=1 and K=1 (Toggle), we need to avoid the invalid S=1, R=1 state.
        *   If $Q_n=0$, we want $Q_{n+1}=1$, which requires S=1, R=0.
        *   If $Q_n=1$, we want $Q_{n+1}=0$, which requires S=0, R=1.
        *   This conditional behavior suggests that when J=K=1, the inputs to the SR flip-flop should be determined by the current state $Q_n$. Specifically, if $Q_n=0$, S should be 1 and R should be 0. If $Q_n=1$, S should be 0 and R should be 1. This is achieved by setting $S = J \cdot \bar{Q}_n$ and $R = K \cdot Q_n$.

*   **Circuit Diagram:**
    *   The J input is connected to an AND gate whose inputs are the external J signal and the output $\bar{Q}_n$ of the SR flip-flop.
    *   The K input is connected to an AND gate whose inputs are the external K signal and the output $Q_n$ of the SR flip-flop.
    *   The outputs of these AND gates become the S and R inputs for the SR flip-flop.

*   **Equations:**
    *   $S_{SR} = J \cdot \bar{Q}_{SR}$
    *   $R_{SR} = K \cdot Q_{SR}$

**Example:**
Let's convert an SR flip-flop to a JK flip-flop.
Inputs: J, K. SR Flip-flop outputs: $Q_{SR}$, $\bar{Q}_{SR}$.
We need to derive $S_{SR}$ and $R_{SR}$.

| J   | K   | $Q_{SR}$ | $Q_{SR\_next}$ (Desired JK behavior) | $S_{SR}$ | $R_{SR}$ |
| :-- | :-- | :------- | :------------------------------------ | :------- | :------- |
| 0   | 0   | 0        | 0                                     | 0        | 0        |
| 0   | 0   | 1        | 1                                     | 0        | 0        |
| 1   | 0   | 0        | 1                                     | 1        | 0        |
| 1   | 0   | 1        | 1                                     | 1        | 0        |
| 0   | 1   | 0        | 0                                     | 0        | 1        |
| 0   | 1   | 1        | 0                                     | 0        | 1        |
| 1   | 1   | 0        | 1                                     | 1        | 0        |
| 1   | 1   | 1        | 0                                     | 0        | 1        |

From the table, we can derive:
$S_{SR} = J \cdot \bar{Q}_{SR}$ (If $Q_{SR}=0$, J=1, K=1, then $S_{SR}=1, R_{SR}=0$. If $Q_{SR}=1$, J=1, K=1, then $S_{SR}=0, R_{SR}=1$.)
$R_{SR} = K \cdot Q_{SR}$

This confirms the derived logic.

**CO Alignment:** This directly relates to CO3 (Design sequential logic circuits) and demonstrates understanding of flip-flop interrelationships.

### 6.2 JK to SR Flip-Flop Conversion

To convert a JK flip-flop into an SR flip-flop, we need to add logic gates to ensure that the J and K inputs to the JK flip-flop are controlled such that the invalid state (J=1, K=1) never occurs.

*   **Requirement:** The JK flip-flop has a toggle mode (J=1, K=1) which needs to be avoided. We will use the S and R inputs of the JK flip-flop.
*   **Logic:**
    *   We want the JK flip-flop to behave like an SR flip-flop.
    *   When S=1, R=0, we want $Q_{JK}=1$, so set J=1, K=0.
    *   When S=0, R=1, we want $Q_{JK}=0$, so set J=0, K=1.
    *   When S=0, R=0, we want no change, so set J=0, K=0.
    *   When S=1, R=1 (invalid for SR), we need to ensure that J and K are not both 1. If we set J=1 and K=1, the JK flip-flop toggles, which is not the desired behavior. The simplest way to avoid this is to ensure that if S=1, R=1, then either J or K (or both) are forced to 0.
    *   Let's connect S directly to J. Then, when R=1, we need to force K to 0. This means K should be $R \cdot \bar{J}$ (or $R \cdot \bar{S}$).

*   **Circuit Diagram:**
    *   The external S input is connected directly to the J input of the JK flip-flop.
    *   The external R input is connected to an AND gate along with the output $\bar{J}$ (which is $\bar{S}$ from the SR to JK conversion logic). The output of this AND gate is connected to the K input of the JK flip-flop. (Alternatively, if we use the JK characteristic equation $Q_{n+1} = J\bar{Q}_n + \bar{J}Q_n$, we want $Q_{n+1}$ to be determined by SR inputs:
        *   $S=1, R=0 \implies Q_{n+1}=1$.
        *   $S=0, R=1 \implies Q_{n+1}=0$.
        *   $S=0, R=0 \implies Q_{n+1}=Q_n$.
        *   $S=1, R=1$ (invalid) is mapped to J=1, K=1 (toggle). To avoid this, we need to ensure J and K are never both 1.
        *   Let's try $J=S$ and $K=R$. This fails when S=1, R=1, as J=1, K=1 causes toggle.
        *   Consider the JK characteristic equation: $Q_{n+1} = J \oplus Q_n$.
        *   From SR flip-flop, $Q_{n+1} = \bar{R} + S \cdot Q_n$.
        *   We want $J \oplus Q_n = \bar{R} + S \cdot Q_n$.
        *   If $Q_n=0$: $J = \bar{R} + S \cdot 0 = \bar{R}$. So $J=1$ if $R=0$, $J=X$ if $R=1$.
        *   If $Q_n=1$: $J \oplus 1 = \bar{R} + S \cdot 1 \implies \bar{J} = \bar{R} + S$.
        *   Let's use the excitation table for SR to JK conversion: $S_{SR} = J\bar{Q}_{SR}$ and $R_{SR} = K Q_{SR}$.
        *   Now we have a JK flip-flop, and we want to feed it S and R signals.
        *   We need to find J and K in terms of S and R.
        *   From SR to JK conversion, we derived $S_{SR} = J\bar{Q}_{SR}$ and $R_{SR} = K Q_{SR}$.
        *   For JK to SR conversion, we want the SR flip-flop to behave like a JK. The JK flip-flop itself is the "target" behaviour.
        *   The conversion of JK to SR involves ensuring that the J and K inputs to the JK flip-flop are never simultaneously 1.
        *   If the external inputs are S and R, we map:
            *   $J_{JK} = S$
            *   $K_{JK} = R$
            *   This fails when S=1, R=1.
        *   To prevent J=1, K=1, we can use logic:
            *   $J = S$
            *   $K = R \cdot \bar{S}$ (if S=1, K must be 0)
        *   This ensures that K is 0 when S is 1, preventing the J=1, K=1 condition. If S=0, K=R, which is correct.

*   **Equations:**
    *   $J_{JK} = S$
    *   $K_{JK} = R \cdot \bar{S}$

**Example:**
Let's convert a JK flip-flop to an SR flip-flop.
Inputs: S, R. JK Flip-flop inputs: J, K. JK Flip-flop outputs: $Q_{JK}$, $\bar{Q}_{JK}$.
We need to derive J and K.

| S   | R   | $Q_{JK}$ | $Q_{JK\_next}$ (Desired SR behavior) | $J_{JK}$ | $K_{JK}$ |
| :-- | :-- | :------- | :------------------------------------ | :------- | :------- |
| 0   | 0   | 0        | 0                                     | 0        | 0        |
| 0   | 0   | 1        | 1                                     | 0        | 0        |
| 1   | 0   | 0        | 1                                     | 1        | 0        |
| 1   | 0   | 1        | 1                                     | 1        | 0        |
| 0   | 1   | 0        | 0                                     | 0        | 1        |
| 0   | 1   | 1        | 0                                     | 0        | 1        |
| 1   | 1   | 0        | Invalid (SR)                          | 1        | 0        | (J=1, K=0 $\implies$ $Q_{next}=1$, NOT invalid)
| 1   | 1   | 1        | Invalid (SR)                          | 1        | 0        | (J=1, K=0 $\implies$ $Q_{next}=1$, not toggle to 0)

This mapping shows that by setting $J=S$ and $K=R \cdot \bar{S}$, we correctly mimic the SR behavior. The invalid state for SR (S=1, R=1) is mapped to J=1, K=0, which is a "Set" operation for the JK flip-flop, resulting in $Q_{JK}=1$. This is a valid transition for a JK flip-flop and avoids the problematic toggle when both S and R are high.

**Reference:** Brown, *Fundamentals of Digital Logic with Verilog Design*, Chapter 4.

---

## Summary of Flip-Flops

| Flip-Flop Type | Inputs | Next State ($Q_{n+1}$) Equation | Toggle State (J=K=1 or T=1) | Comments                                     |
| :------------- | :----- | :------------------------------ | :-------------------------- | :------------------------------------------- |
| SR             | S, R   | $Q_{n+1} = S + Q_n \cdot \bar{R}$ | N/A                         | Has an invalid state (S=1, R=1)              |
| JK             | J, K   | $Q_{n+1} = J \cdot \bar{Q}_n + \bar{J} \cdot Q_n$ | Yes                         | Overcomes invalid state of SR              |
| D              | D      | $Q_{n+1} = D$                   | N/A                         | Stores data directly                         |
| T              | T      | $Q_{n+1} = T \oplus Q_n$        | Yes                         | Used in counters, derived from JK          |

---

## Practice Questions and Answers

**Question 1:**
Complete the characteristic table for a JK flip-flop:

| J   | K   | $Q_n$ | $Q_{n+1}$ |
| :-- | :-- | :---- | :-------- |
| 0   | 0   | 0     |           |
| 0   | 0   | 1     |           |
| 1   | 0   | 0     |           |
| 0   | 1   | 1     |           |
| 1   | 1   | 0     |           |

**Answer 1:**

| J   | K   | $Q_n$ | $Q_{n+1}$ |
| :-- | :-- | :---- | :-------- |
| 0   | 0   | 0     | 0         |
| 0   | 0   | 1     | 1         |
| 1   | 0   | 0     | 1         |
| 0   | 1   | 1     | 0         |
| 1   | 1   | 0     | 1         |

**Question 2:**
What is the primary advantage of a JK flip-flop over an SR flip-flop?

**Answer 2:**
The JK flip-flop overcomes the invalid or forbidden state (S=1, R=1) present in the SR flip-flop. In the JK flip-flop, when both J and K are high (J=1, K=1), it enters a toggle mode where the output flips to its opposite state.

**Question 3:**
How can a T flip-flop be constructed from a JK flip-flop?

**Answer 3:**
A T flip-flop can be constructed from a JK flip-flop by connecting both the J and K inputs together and feeding them with the single T input.

**Question 4:**
Describe the operation of a JK Master-Slave flip-flop when the clock is high and when it transitions to low.

**Answer 4:**
*   **Clock High:** The master stage of the JK Master-Slave flip-flop is enabled and captures the J and K inputs. The slave stage is disabled.
*   **Clock Transition to Low (Falling Edge):** The master stage becomes disabled, and its captured output is transferred to the slave stage. The slave stage then becomes enabled and updates the final Q and $\bar{Q}$ outputs based on the master's output. This ensures the output changes only once per clock cycle.

**Question 5:**
Derive the logic for converting a JK flip-flop to an SR flip-flop.

**Answer 5:**
To convert a JK flip-flop to an SR flip-flop, we need to ensure the JK flip-flop never enters the J=1, K=1 state. By using the following logic:
$J = S$
$K = R \cdot \bar{S}$
We ensure that if S=1 and R=1, then K becomes 0, preventing the toggle condition. This correctly mimics the SR flip-flop's behavior.

**Question 6:**
What is the characteristic equation for a D flip-flop?

**Answer 6:**
$Q_{n+1} = D$

**CO Alignment:** Questions cover all flip-flop types (CO3), their operation, and conversions (CO3).

---

## Important Points to Remember

*   **Flip-flops are memory elements:** They store one bit of information.
*   **Clocking is crucial:** Synchronizes operations in sequential circuits.
*   **Edge-triggering is preferred:** Offers better timing and stability.
*   **SR flip-flop has an invalid state:** J=1, K=1 should be avoided.
*   **JK flip-flop overcomes SR's invalid state:** Offers a toggle mode.
*   **D flip-flop stores data:** Ideal for registers and delay elements.
*   **T flip-flop toggles:** Useful for counters.
*   **Master-Slave configuration:** Prevents race-around conditions.
*   **Flip-flop conversion:** Demonstrates flexibility and understanding of underlying logic.

---

This comprehensive set of notes covers the fundamental aspects of SR, JK, D, and T flip-flops, their characteristic and excitation tables, the JK Master-Slave configuration, and the conversion between SR and JK flip-flops, directly addressing the learning outcomes for Module 3. The inclusion of textbook references, practice questions, and key takeaways aims to provide a thorough understanding aligned with the course objectives.
