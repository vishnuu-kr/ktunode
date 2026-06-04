---
title: "source transformation"
subject: "CIRCUITS & NETWORKS"
module: "Module 1: Mesh analysis and nodal analysis ( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ab6"
status: "completed"
scrapedAt: "2026-05-23T16:11:17.558Z"
---
# CIRCUITS & NETWORKS: Module 1 (Review) - Source Transformation

This module provides a review of fundamental circuit analysis techniques, focusing on mesh and nodal analysis. A key tool within these methods is **Source Transformation**, which allows us to simplify circuits by converting voltage sources to current sources and vice-versa. This technique is crucial for reducing the complexity of a circuit, making it easier to apply mesh or nodal analysis.

---

## **1. Introduction to Source Transformation**

Source transformation is a circuit simplification technique that allows us to replace a **voltage source in series with an impedance** with an **equivalent current source in parallel with the same impedance**, and vice-versa. The key to this transformation is that the equivalent source must deliver the same voltage and current to the *rest of the circuit*.

**Why is Source Transformation Useful?**

*   **Simplifies Circuit Analysis:** It can reduce the number of loops or nodes in a circuit, making mesh or nodal analysis more manageable.
*   **Converts Between Analysis Methods:** It facilitates switching between mesh analysis (which often involves voltage sources) and nodal analysis (which often involves current sources).
*   **Helps Solve Complex Networks:** For problems involving many sources or complex configurations, source transformation can break down the complexity.

**Relevant Course Outcome:**

*   **CO1:** Apply circuit theorems to solve complex DC and AC electric networks (Knowledge Level: K3) - Source transformation is a fundamental theorem that enables the simplification of networks for analysis.

---

## **2. Key Concepts and Definitions**

*   **Voltage Source:** An element that maintains a constant voltage across its terminals, regardless of the current flowing through it (ideal) or whose voltage varies with current (non-ideal).
*   **Current Source:** An element that maintains a constant current flowing through it, regardless of the voltage across its terminals (ideal) or whose current varies with voltage (non-ideal).
*   **Series Combination:** Components connected end-to-end, so the same current flows through them.
*   **Parallel Combination:** Components connected across the same two nodes, so they experience the same voltage.
*   **Norton Equivalent Circuit:** A current source in parallel with an impedance.
*   **Thevenin Equivalent Circuit:** A voltage source in series with an impedance.

---

## **3. Voltage Source to Current Source Transformation**

A voltage source $V_s$ in series with an impedance $Z_s$ can be replaced by an ideal current source $I_s$ in parallel with the same impedance $Z_s$, provided that:

*   The current source magnitude is $I_s = V_s / Z_s$.
*   The current source polarity is in the same direction as the voltage drop across the series impedance.

**Diagrammatic Representation:**

```
        +----[Zs]----+
        |            |
       Vs            RL
        |            |
        +------------+

        Equivalent to:

        +----||----+
        |     [Zs] |
        Is-------->|
        |          |
        +----------+
```

**Conditions for Transformation:**

*   **Non-zero Source Voltage:** $V_s \neq 0$.
*   **Non-zero Series Impedance:** $Z_s \neq 0$. If $Z_s = 0$, it's a short circuit, and transformation is not directly applicable in this manner without considering other circuit elements.

**How to Determine the Polarity of the Current Source:**

The current source direction points from the negative terminal of the voltage source towards the positive terminal, assuming the voltage polarity is defined with the positive terminal at the top.

**Example 1.1 (DC Circuit):**

Consider a 12V voltage source in series with a 3Ω resistor. This can be transformed into a current source.

*   **Current Source Magnitude:** $I_s = V_s / R_s = 12V / 3Ω = 4A$.
*   **Polarity:** If the voltage source has its positive terminal on top, the current source will be directed upwards.

**Example 1.2 (AC Circuit):**

Consider a 10V RMS voltage source with a phase angle of $30^\circ$ in series with a $(2 + j4)Ω$ impedance.

*   **Current Source Magnitude (RMS):** $|I_s| = |V_s| / |Z_s| = 10V / \sqrt{2^2 + 4^2} = 10V / \sqrt{20} \approx 2.236A$.
*   **Current Source Phase Angle:** $\angle I_s = \angle V_s - \angle Z_s$.
    *   $\angle V_s = 30^\circ$.
    *   $\angle Z_s = \arctan(4/2) = \arctan(2) \approx 63.4^\circ$.
    *   $\angle I_s = 30^\circ - 63.4^\circ = -33.4^\circ$.
*   **Equivalent Current Source:** $2.236 \angle -33.4^\circ A$ RMS, in parallel with $(2 + j4)Ω$.

---

## **4. Current Source to Voltage Source Transformation**

An ideal current source $I_s$ in parallel with an impedance $Z_p$ can be replaced by an ideal voltage source $V_s$ in series with the same impedance $Z_p$, provided that:

*   The voltage source magnitude is $V_s = I_s \times Z_p$.
*   The voltage source polarity is in the same direction as the current flow through the parallel impedance.

**Diagrammatic Representation:**

```
        +----||----+
        |    [Zp]  |
        Is-------->|
        |          |
        +----------+

        Equivalent to:

        +----[Zp]----+
        |            |
       Vs            RL
        |            |
        +------------+
```

**Conditions for Transformation:**

*   **Non-zero Source Current:** $I_s \neq 0$.
*   **Non-zero Parallel Impedance:** $Z_p \neq 0$. If $Z_p = 0$, it's a short circuit, and transformation is not directly applicable in this manner.

**How to Determine the Polarity of the Voltage Source:**

The voltage source polarity has its positive terminal in the direction of the current source's flow.

**Example 1.3 (DC Circuit):**

Consider a 5A current source in parallel with a 2Ω resistor. This can be transformed into a voltage source.

*   **Voltage Source Magnitude:** $V_s = I_s \times R_p = 5A \times 2Ω = 10V$.
*   **Polarity:** If the current source is directed upwards, the equivalent voltage source will have its positive terminal on top.

**Example 1.4 (AC Circuit):**

Consider a 2A RMS current source with a phase angle of $45^\circ$ in parallel with a $(1 - j3)Ω$ impedance.

*   **Voltage Source Magnitude (RMS):** $|V_s| = |I_s| \times |Z_p| = 2A \times \sqrt{1^2 + (-3)^2} = 2A \times \sqrt{10} \approx 6.325A$.
*   **Voltage Source Phase Angle:** $\angle V_s = \angle I_s + \angle Z_p$.
    *   $\angle I_s = 45^\circ$.
    *   $\angle Z_p = \arctan(-3/1) = \arctan(-3) \approx -71.6^\circ$.
    *   $\angle V_s = 45^\circ + (-71.6^\circ) = -26.6^\circ$.
*   **Equivalent Voltage Source:** $6.325 \angle -26.6^\circ A$ RMS, in series with $(1 - j3)Ω$.

---

## **5. Application in Circuit Analysis (Review)**

Source transformation is particularly useful when:

*   **Simplifying circuits before applying Mesh Analysis:** Transforming current sources in parallel with impedances into voltage sources in series simplifies loop equations.
*   **Simplifying circuits before applying Nodal Analysis:** Transforming voltage sources in series with impedances into current sources in parallel simplifies node equations.
*   **When a circuit has a mix of voltage and current sources.**

**Considerations for Multiple Sources:**

When a circuit has multiple sources, you can apply source transformations sequentially to simplify the circuit until only one source remains, or until it is in a form amenable to mesh or nodal analysis.

**Important Point to Remember:**

*   **You cannot transform a voltage source in parallel with an impedance or a current source in series with an impedance.** These combinations represent non-ideal sources and require Thevenin/Norton equivalent circuits for simplification.

**Example 1.5: Simplifying a DC Circuit using Source Transformation**

Consider the following circuit and find the current through the 5Ω resistor.

```
      +----[2Ω]----+----[5Ω]----+
      |            |            |
     10V          4A         2Ω
      |            |            |
      +------------+------------+
```

**Step 1: Transform the voltage source.**
The 10V source in series with 2Ω can be transformed into a current source of $10V/2Ω = 5A$ in parallel with 2Ω. The current direction is upwards (from negative to positive terminal of the voltage source).

```
      +----||----+----[5Ω]----+
      |     [2Ω] |            |
      5A----->|           2Ω
      |        |            |
      +--------+------------+
```

**Step 2: Combine parallel resistors.**
The 2Ω resistor (from the transformed source) is in parallel with the 2Ω resistor in the circuit. The equivalent resistance is $(2Ω \times 2Ω) / (2Ω + 2Ω) = 4Ω / 4Ω = 1Ω$.

```
      +----||----+----[5Ω]----+
      |     [1Ω] |            |
      5A----->|           (combined 2Ω || 2Ω)
      |        |            |
      +--------+------------+
```

**Step 3: Transform the remaining current source.**
Now we have a 5A current source in parallel with a 1Ω resistor, and this combination is in series with the 5Ω resistor. Transform the current source into a voltage source.
$V_s = I_s \times R_p = 5A \times 1Ω = 5V$.
The polarity of the voltage source is such that the positive terminal is in the direction of the current flow (upwards).

```
      +----[1Ω]----+----[5Ω]----+
      |            |            |
      5V           (rest of the circuit)
      |            |            |
      +------------+------------+
```

**Step 4: Analyze the simplified circuit.**
We now have a simple series circuit: a 5V voltage source, a 1Ω resistor, and a 5Ω resistor.
Total resistance in the loop: $R_{total} = 1Ω + 5Ω = 6Ω$.
Current flowing through the loop (and thus through the 5Ω resistor): $I = V_s / R_{total} = 5V / 6Ω \approx 0.833A$.

**Answer:** The current through the 5Ω resistor is approximately 0.833A.

---

## **6. Practice Questions/Exercises**

**Question 1.1:**

Transform the voltage source in the circuit below into an equivalent current source and redraw the circuit.

```
      +----[4Ω]----+
      |            |
     24V           RL
      |            |
      +------------+
```

**Answer 1.1:**
The equivalent current source is $24V / 4Ω = 6A$. The current source will be in parallel with the 4Ω resistor. If the positive terminal of the voltage source is at the top, the current source will be directed upwards.

```
      +----||----+
      |     [4Ω] |
      6A----->|
      |          |
      +----------+
```

**Question 1.2:**

Transform the current source in the circuit below into an equivalent voltage source and redraw the circuit.

```
      +----||----+
      |    [10Ω] |
     3A-------->|
      |          |
      +----------+
```

**Answer 1.2:**
The equivalent voltage source is $3A \times 10Ω = 30V$. The voltage source will be in series with the 10Ω resistor. If the current source is directed upwards, the positive terminal of the voltage source will be at the top.

```
      +----[10Ω]----+
      |             |
     30V            RL
      |             |
      +-------------+
```

**Question 1.3:**

Find the current through the 10Ω resistor in the following circuit using source transformation.

```
      +----[5Ω]----+----[10Ω]----+
      |            |             |
     20V          2A           5Ω
      |            |             |
      +------------+-------------+
```

**Answer 1.3:**

1.  **Transform the 20V, 5Ω series combination:**
    *   Current source: $I_s = 20V / 5Ω = 4A$ (upwards).
    *   Parallel impedance: 5Ω.
    The circuit becomes:
    ```
          +----||----+----[10Ω]----+
          |     [5Ω] |             |
          4A----->|           5Ω
          |        |             |
          +--------+-------------+
    ```

2.  **Combine parallel resistors:**
    *   The 5Ω from the transformation is in parallel with the 5Ω in the circuit.
    *   Equivalent parallel resistance: $R_{parallel} = (5Ω \times 5Ω) / (5Ω + 5Ω) = 25Ω / 10Ω = 2.5Ω$.
    The circuit becomes:
    ```
          +----||----+----[10Ω]----+
          |    [2.5Ω]|             |
          4A----->|             (combined 5Ω || 5Ω)
          |        |             |
          +--------+-------------+
    ```

3.  **Transform the 4A, 2.5Ω parallel combination:**
    *   Voltage source: $V_s = 4A \times 2.5Ω = 10V$ (positive terminal upwards).
    *   Series impedance: 2.5Ω.
    The circuit becomes:
    ```
          +----[2.5Ω]----+----[10Ω]----+
          |             |             |
         10V           (rest of the circuit)
          |             |             |
          +-------------+-------------+
    ```

4.  **Analyze the simplified circuit:**
    *   We have a 10V source in series with 2.5Ω and 10Ω.
    *   Total resistance: $R_{total} = 2.5Ω + 10Ω = 12.5Ω$.
    *   Current through the 10Ω resistor: $I = V_s / R_{total} = 10V / 12.5Ω = 0.8A$.

**Answer:** The current through the 10Ω resistor is 0.8A.

---

## **7. Important Points to Remember**

*   **Source transformation is only valid for ideal voltage sources in series with an impedance and ideal current sources in parallel with an impedance.**
*   The impedance ($Z_s$ or $Z_p$) remains the same after transformation.
*   **Crucially, the polarity of the transformed source must be determined correctly** based on the original source's configuration.
*   **Never transform a voltage source in parallel or a current source in series.** These are non-ideal representations and require Thevenin/Norton equivalents.
*   Source transformation is a powerful tool for simplifying circuits to make them easier to analyze using mesh or nodal methods.

---
