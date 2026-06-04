---
title: "DC Analysis - transfer characteristics"
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 1: Differential Amplifiers:  Differential amplifier configurations using BJT"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe562"
status: "completed"
scrapedAt: "2026-05-23T17:49:36.606Z"
---
# LINEAR INTEGRATED CIRCUITS

## Module 1: Differential Amplifiers

### Topic: DC Analysis - Transfer Characteristics of BJT Differential Amplifier Configurations

---

### **1. Introduction to Differential Amplifiers (K2)**

*   **Definition:** A differential amplifier is a type of electronic amplifier that amplifies the difference between two input voltages while rejecting any voltage common to both inputs.
*   **Importance:** Differential amplifiers are fundamental building blocks in many analog integrated circuits, especially operational amplifiers (op-amps). They are crucial for rejecting common-mode noise, which is a significant advantage in signal processing.
*   **Basic Structure (BJT):** The simplest BJT differential amplifier consists of two matched transistors, typically BJTs, with their emitters connected together to a common emitter resistor ($R_E$). The bases of the transistors serve as the inputs, and the collectors are connected to separate load resistors ($R_C$) for each transistor, with the output taken differentially between the collectors or differentially from one collector to the other.

    *   **Referenced in:** Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 4. This chapter introduces the differential amplifier as the basic stage of an op-amp.
    *   **Referenced in:** Sedra A. S. and K. Smith, "Microelectronic Circuits," Chapter 10, discusses the basic differential amplifier configuration and its properties.

---

### **2. DC Analysis of the BJT Differential Amplifier (K2)**

The DC analysis determines the quiescent operating point (Q-point) of the differential amplifier. This involves setting up DC bias conditions and calculating the DC collector currents, voltages, and transistor operating regions.

#### **2.1. The Basic Differential Amplifier Configuration**

Consider the most basic differential amplifier circuit with two matched BJT transistors ($Q_1, Q_2$), common emitter resistor ($R_E$), and collector resistors ($R_C$). The inputs are $v_{i1}$ and $v_{i2}$, and the outputs are taken from the collectors $v_{c1}$ and $v_{c2}$.

```
      Vcc
       |
      R_C1
       |
    .-|------- v_c1
    | C1
v_i1 -| B1     Q1
    | E1
    '-|-------
       |
       Re
       |
    .-|-------
    | E2     Q2
v_i2 -| B2     | C2
    | C2
    '-|-------
       |
      R_C2
       |
      Vcc
```

*   **Assumptions for DC Analysis:**
    *   The two transistors ($Q_1$, $Q_2$) are perfectly matched.
    *   The collector resistors ($R_{C1}$, $R_{C2}$) are equal and denoted as $R_C$.
    *   The bias voltage $V_{CC}$ is constant.
    *   The transistor parameters ($V_{BE(on)}$, $\beta$) are known.

#### **2.2. Case 1: Differential Input is Zero ($v_{i1} = v_{i2} = 0$) or Common-Mode Input**

When $v_{i1} = v_{i2}$, the circuit behaves as a common-mode amplifier.

*   **Symmetry:** Due to the matched transistors, the collector currents will be equal: $I_{C1} = I_{C2} = I_C$.
*   **Emitter Current:** The total emitter current is $I_E = I_{E1} + I_{E2}$. Since $I_C \approx I_E$, we have $I_E \approx 2I_C$.
*   **Emitter Voltage:** The voltage at the common emitter node ($v_E$) can be determined by considering the emitter resistor $R_E$.
    *   $v_E = I_E \cdot R_E = (2I_C) \cdot R_E$
*   **Collector Voltage:** The collector voltage for each transistor is:
    *   $v_{C1} = V_{CC} - I_{C1} \cdot R_C = V_{CC} - I_C \cdot R_C$
    *   $v_{C2} = V_{CC} - I_{C2} \cdot R_C = V_{CC} - I_C \cdot R_C$
*   **Q-Point Calculation:** To find the specific value of $I_C$, we can use the BJT current equation at the collector and the emitter voltage relationship.
    *   For $Q_1$: $I_{C1} = I_S \cdot e^{(v_{BE1} / V_T)}$
    *   For $Q_2$: $I_{C2} = I_S \cdot e^{(v_{BE2} / V_T)}$
    *   Since $v_{i1} = v_{i2}$, the base-emitter voltages are equal: $v_{BE1} = v_{BE2} = v_B - v_E$.
    *   $v_B = v_{i1}$ (when input is applied to the base).
    *   $v_{BE1} = v_{i1} - v_E = v_{i1} - (2I_C \cdot R_E)$
    *   $I_C = I_S \cdot e^{(v_{i1} - 2I_C R_E) / V_T}$
    *   If we assume $I_C$ is large enough such that $v_{BE} > V_{BE(on)}$ (typically 0.7V), then $I_C \approx \beta I_B$. However, for DC analysis without external base resistors, it's more common to solve for $I_C$ directly from the diode equation or assume a desired bias current.
    *   **Common-Mode Rejection:** When $v_{i1} = v_{i2}$, the common-mode gain is low, especially if $R_E$ is large. This is a key feature of the differential amplifier.

#### **2.3. Case 2: Differential Input is Non-Zero ($v_{id} = v_{i1} - v_{i2} \neq 0$)**

Let $v_{i1} \neq v_{i2}$. We can express the inputs as:
*   $v_{i1} = v_{cm} + v_{id}/2$
*   $v_{i2} = v_{cm} - v_{id}/2$
where $v_{cm} = (v_{i1} + v_{i2})/2$ is the common-mode voltage and $v_{id} = v_{i1} - v_{i2}$ is the differential-mode voltage.

*   **Base-Emitter Voltages:**
    *   $v_{BE1} = v_{i1} - v_E$
    *   $v_{BE2} = v_{i2} - v_E$
*   **Emitter Current:** The total emitter current $I_E = I_{E1} + I_{E2} \approx I_{C1} + I_{C2}$.
    *   $I_{C1} = I_S e^{(v_{BE1}/V_T)}$
    *   $I_{C2} = I_S e^{(v_{BE2}/V_T)}$
    *   $I_E = I_S \left(e^{(v_{BE1}/V_T)} + e^{(v_{BE2}/V_T)}\right)$
    *   $v_E = I_E R_E = I_S R_E \left(e^{(v_{BE1}/V_T)} + e^{(v_{BE2}/V_T)}\right)$
*   **Substituting $v_{BE}$:**
    *   $v_E = I_S R_E \left(e^{(v_{i1} - v_E)/V_T} + e^{(v_{i2} - v_E)/V_T}\right)$
    *   $v_E = I_S R_E \left(e^{v_{i1}/V_T}e^{-v_E/V_T} + e^{v_{i2}/V_T}e^{-v_E/V_T}\right)$
    *   $e^{v_E/V_T} = I_S R_E \left(e^{v_{i1}/V_T} + e^{v_{i2}/V_T}\right)$
    *   $e^{v_E/V_T} = I_S R_E \left(e^{(v_{cm} + v_{id}/2)/V_T} + e^{(v_{cm} - v_{id}/2)/V_T}\right)$
    *   $e^{v_E/V_T} = I_S R_E e^{v_{cm}/V_T} \left(e^{v_{id}/2V_T} + e^{-v_{id}/2V_T}\right)$
    *   $e^{v_E/V_T} = I_S R_E e^{v_{cm}/V_T} \cdot 2 \cosh(v_{id}/2V_T)$
*   **Simplification for Small Differential Inputs ($v_{id} \ll 2V_T$)**:
    *   When $v_{id}$ is small, $\cosh(x) \approx 1 + x^2/2$. For very small inputs, $\cosh(v_{id}/2V_T) \approx 1$.
    *   $e^{v_E/V_T} \approx I_S R_E e^{v_{cm}/V_T} \cdot 2$
    *   $v_E \approx V_T \ln(2 I_S R_E e^{v_{cm}/V_T})$
    *   This shows that $v_E$ is primarily dependent on the common-mode input $v_{cm}$ and is relatively insensitive to small differential inputs.
*   **Collector Currents for Small Differential Inputs:**
    *   $I_{C1} = I_S e^{(v_{i1} - v_E)/V_T} = I_S e^{v_{i1}/V_T} e^{-v_E/V_T}$
    *   $I_{C2} = I_S e^{(v_{i2} - v_E)/V_T} = I_S e^{v_{i2}/V_T} e^{-v_E/V_T}$
    *   $I_{C1} = I_S e^{(v_{cm} + v_{id}/2)/V_T} e^{-v_E/V_T}$
    *   $I_{C2} = I_S e^{(v_{cm} - v_{id}/2)/V_T} e^{-v_E/V_T}$
    *   $I_{C1} = I_S e^{v_{cm}/V_T} e^{-v_E/V_T} e^{v_{id}/2V_T}$
    *   $I_{C2} = I_S e^{v_{cm}/V_T} e^{-v_E/V_T} e^{-v_{id}/2V_T}$
    *   Let $I_0 = I_S e^{v_{cm}/V_T} e^{-v_E/V_T}$. This is the collector current when $v_{id} = 0$.
    *   $I_{C1} \approx I_0 (1 + v_{id}/2V_T)$
    *   $I_{C2} \approx I_0 (1 - v_{id}/2V_T)$
    *   **Differential Output Voltage:**
        *   $v_{od} = v_{c2} - v_{c1} = (V_{CC} - I_{C2}R_C) - (V_{CC} - I_{C1}R_C)$
        *   $

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
