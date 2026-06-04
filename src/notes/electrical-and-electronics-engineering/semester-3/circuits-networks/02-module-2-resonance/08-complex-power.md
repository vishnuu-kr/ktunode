---
title: "complex power"
subject: "CIRCUITS & NETWORKS"
module: "Module 2: Resonance"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ac6"
status: "completed"
scrapedAt: "2026-05-23T16:11:28.695Z"
---
# CIRCUITS & NETWORKS - Module 2: Resonance - Topic: Complex Power

This document provides comprehensive study notes on Complex Power within the context of Module 2: Resonance in Circuits & Networks. It aims to cover the learning outcomes relevant to this topic, drawing upon the provided textbooks and aligning with the course outcomes.

## 1. Introduction to Power in AC Circuits

In AC circuits, power is not as straightforward as in DC circuits. Due to the presence of reactive components (inductors and capacitors), voltage and current may not be in phase. This leads to different types of power that need to be understood for a complete analysis.

### 1.1. Instantaneous Power ($p(t)$)

The power delivered to any circuit element at any instant of time is the product of the instantaneous voltage across it and the instantaneous current through it.

*   **Definition:** $p(t) = v(t) \cdot i(t)$
*   **Characteristics:**
    *   It's a time-varying quantity in AC circuits.
    *   Represents the instantaneous rate at which energy is transferred.

### 1.2. Average Power (P) / Real Power

This is the average value of the instantaneous power over one complete cycle. It represents the power that is actually dissipated as heat (in resistors) or converted into useful work.

*   **Definition:** $P = \frac{1}{T} \int_{0}^{T} p(t) dt$
*   **For sinusoidal steady-state:** If $v(t) = V_m \cos(\omega t + \theta_v)$ and $i(t) = I_m \cos(\omega t + \theta_i)$, then
    *   $P = V_{rms} I_{rms} \cos(\theta_v - \theta_i)$
    *   Where $V_{rms} = \frac{V_m}{\sqrt{2}}$ and $I_{rms} = \frac{I_m}{\sqrt{2}}$ are the RMS values of voltage and current.
    *   $\theta_v - \theta_i$ is the phase difference between voltage and current.
*   **In terms of resistance:** $P = I_{rms}^2 R = \frac{V_{rms}^2}{R}$ (for a resistor R)
*   **Units:** Watts (W)
*   **Relevance:** This is the power that contributes to the useful work done by the circuit.

### 1.3. Reactive Power (Q)

This is the power that oscillates between the source and the reactive components (inductors and capacitors). It represents the energy stored and released by these components.

*   **Definition:** $Q = V_{rms} I_{rms} \sin(\theta_v - \theta_i)$
*   **For inductive loads:** $Q$ is positive (voltage leads current). Inductors *consume* reactive power.
*   **For capacitive loads:** $Q$ is negative (voltage lags current). Capacitors *supply* reactive power.
*   **Units:** Volt-Ampere Reactive (VAR)
*   **Relevance:** Necessary for the operation of inductive devices like motors and transformers, but does not perform useful work.

---

## 2. Complex Power (S)

Complex power is a fundamental concept that combines both real and reactive power into a single complex quantity. It simplifies the analysis of AC circuits and provides a convenient way to represent power.

### 2.1. Definition and Components

Complex power, denoted by $S$, is defined as:

*   **In terms of RMS values:** $S = V_{rms} I_{rms}^*$
    *   Where $I_{rms}^*$ is the complex conjugate of the RMS current.
*   **In terms of phasors:** $S = V_{rms} \angle \theta_v \cdot (I_{rms} \angle \theta_i)^* = V_{rms} \angle \theta_v \cdot I_{rms} \angle -\theta_i = V_{rms} I_{rms} \angle (\theta_v - \theta_i)$
*   **Cartesian form:** $S = P + jQ$
    *   The real part of $S$ is the **Average Power (P)**.
    *   The imaginary part of $S$ is the **Reactive Power (Q)**.

### 2.2. Apparent Power (|S|)

The magnitude of the complex power is called the apparent power. It represents the total power that the circuit appears to be drawing from the source.

*   **Definition:** $|S| = \sqrt{P^2 + Q^2}$
*   **In terms of RMS values:** $|S| = V_{rms} I_{rms}$
*   **Units:** Volt-Amperes (VA)
*   **Relevance:** This is the value often used to rate electrical equipment (e.g., transformers, generators) because it represents the total current and voltage the equipment must handle, regardless of the power factor.

### 2.3. Power Factor (PF)

The power factor is the cosine of the phase difference between voltage and current. It indicates how effectively the apparent power is converted into real power.

*   **Definition:** $PF = \cos(\theta_v - \theta_i)$
*   **Relationship with Complex Power:** $P = |S| \cdot PF$ and $Q = |S| \cdot \sin(\theta_v - \theta_i)$
*   **Range:** $0 \le PF \le 1$
*   **Leading vs. Lagging:**
    *   **Lagging PF:** When current lags voltage (inductive load). Usually specified as "lagging".
    *   **Leading PF:** When current leads voltage (capacitive load). Usually specified as "leading".
*   **Ideal PF:** A power factor of 1 (unity) means the voltage and current are in phase, and all the apparent power is real power.

---

## 3. Power in AC Circuits with Different Loads

The nature of the load dictates the reactive power and the power factor.

### 3.1. Resistive Load (R)

*   **Characteristics:** Voltage and current are in phase ($\theta_v - \theta_i = 0^\circ$).
*   **Complex Power:** $S = V_{rms} I_{rms} \angle 0^\circ = V_{rms} I_{rms} = P$.
    *   $Q = 0$ (no reactive power).
    *   $PF = \cos(0^\circ) = 1$ (unity power factor).
*   **Example:** A purely resistive load like a heating element.

### 3.2. Inductive Load (L)

*   **Characteristics:** Current lags voltage ($\theta_v - \theta_i = 90^\circ$ for a pure inductor). Inductors store energy in their magnetic field.
*   **Complex Power:** $S = V_{rms} I_{rms} \angle 90^\circ = j V_{rms} I_{rms}$.
    *   $P = 0$ (in a pure inductor, no power is dissipated).
    *   $Q = V_{rms} I_{rms}$ (positive reactive power).
    *   $PF = \cos(90^\circ) = 0$ (lagging).
*   **Example:** An electric motor, a solenoid.

### 3.3. Capacitive Load (C)

*   **Characteristics:** Current leads voltage ($\theta_v - \theta_i = -90^\circ$ for a pure capacitor). Capacitors store energy in their electric field.
*   **Complex Power:** $S = V_{rms} I_{rms} \angle -90^\circ = -j V_{rms} I_{rms}$.
    *   $P = 0$ (in a pure capacitor, no power is dissipated).
    *   $Q = -V_{rms} I_{rms}$ (negative reactive power).
    *   $PF = \cos(-90^\circ) = 0$ (leading).
*   **Example:** A capacitor bank.

### 3.4. R-L Load (Series or Parallel)

*   **Characteristics:** Current lags voltage. The phase angle $\theta_v - \theta_i$ will be between $0^\circ$ and $90^\circ$.
*   **Complex Power:** $S = P + jQ$, where $P > 0$ and $Q > 0$.
    *   $PF = \cos(\theta)$ (lagging).

### 3.5. R-C Load (Series or Parallel)

*   **Characteristics:** Current leads voltage. The phase angle $\theta_v - \theta_i$ will be between $-90^\circ$ and $0^\circ$.
*   **Complex Power:** $S = P + jQ$, where $P > 0$ and $Q < 0$.
    *   $PF = \cos(\theta)$ (leading).

### 3.6. R-L-C Load (Series or Parallel)

The nature of the load (inductive, capacitive, or resistive) depends on the relative values of resistance, inductance, and capacitance, and the frequency of operation.

*   **Inductive Load:** If the inductive reactance ($X_L = \omega L$) is greater than the capacitive reactance ($X_C = \frac{1}{\omega C}$), the net reactance is inductive, current lags voltage, and $Q$ is positive.
*   **Capacitive Load:** If $X_C > X_L$, the net reactance is capacitive, current leads voltage, and $Q$ is negative.
*   **Resistive Load:** If $X_L = X_C$ (at resonance), the net reactance is zero, voltage and current are in phase, and $Q=0$. The load behaves purely resistive. This is a key concept in the topic of Resonance.

---

## 4. Power Triangle

The relationship between apparent power ($|S|$), real power ($P$), and reactive power ($Q$) can be represented graphically by the **power triangle**.

*   **Construction:**
    *   The **real power (P)** is represented by the adjacent side (horizontal).
    *   The **reactive power (Q)** is represented by the opposite side (vertical).
        *   $Q > 0$ (inductive) is plotted upwards.
        *   $Q < 0$ (capacitive) is plotted downwards.
    *   The **apparent power (|S|)** is the hypotenuse.
    *   The angle between $P$ and $|S|$ is the phase angle $\theta = \theta_v - \theta_i$.

*   **Diagram:**

    ```
              |S| (Apparent Power, VA)
             /|
            / |
           /  | Q (Reactive Power, VAR)
          /   |
         /    |
        +-----
        P (Real Power, W)
    ```

*   **Key Relationships from the Triangle:**
    *   $|S|^2 = P^2 + Q^2$
    *   $P = |S| \cos \theta$
    *   $Q = |S| \sin \theta$
    *   $Q = P \tan \theta$
    *   $PF = \cos \theta = \frac{P}{|S|}$

---

## 5. Power in AC Networks (Generalization)

The concept of complex power extends to networks with multiple components.

### 5.1. Power Delivered by a Source

If a source provides voltage $V$ and draws current $I$, the complex power delivered by the source is $S_{source} = V I^*$.

### 5.2. Power Absorbed by a Load

For a single load with voltage $V_L$ across it and current $I_L$ flowing through it, the complex power absorbed by the load is $S_{load} = V_L I_L^*$.

### 5.3. The Principle of Conservation of Power

In any AC circuit, the sum of complex powers delivered by all sources equals the sum of complex powers absorbed by all loads.

*   **Kirchhoff's Voltage Law (KVL) and Current Law (KCL) in terms of phasors:** These laws hold for phasor voltages and currents.
*   **Conservation of Complex Power:** $\sum_{sources} S_{source} = \sum_{loads} S_{load}$
    *   This is a powerful tool for analyzing complex AC networks.
    *   It implies that $\sum P = 0$ and $\sum Q = 0$ for the entire circuit (i.e., total real power delivered equals total real power absorbed, and total reactive power delivered equals total reactive power absorbed).

### 5.4. Power for Two-Port Networks

While this module focuses on resonance, it's worth noting that complex power can be analyzed for two-port networks. The input complex power is $S_{in} = V_1 I_1$, and the output complex power is $S_{out} = V_2 I_2$. For passive two-port networks, the sum of complex powers at the ports is often zero (excluding power dissipated in internal resistances).

---

## 6. Importance of Complex Power and Power Factor Correction

### 6.1. Efficiency of Power Delivery

*   **High PF (close to 1):** Means most of the apparent power is real power. This leads to efficient utilization of electrical energy. For a given amount of real power ($P$), a higher PF means lower apparent power ($|S| = P/PF$), and therefore lower RMS current ($I_{rms} = |S|/V_{rms}$).
*   **Low PF:** Means a significant portion of the apparent power is reactive power. This results in higher RMS currents for the same amount of real power. High currents lead to:
    *   Increased $I^2R$ losses in transmission lines and transformers.
    *   Larger conductors and equipment required, increasing capital costs.
    *   Reduced capacity of power systems.

### 6.2. Power Factor Correction (PFC)

This is the process of improving the power factor by adding reactive components (usually capacitors) to counteract the lagging reactive power of inductive loads.

*   **Objective:** To bring the power factor closer to unity.
*   **Method:** Capacitors are connected in parallel with inductive loads. Capacitors supply leading reactive power, which cancels out some of the lagging reactive power drawn by the inductive load.
*   **Effect:**
    *   Reduces the total RMS current drawn from the source.
    *   Decreases $I^2R$ losses.
    *   Increases the system's capacity.
    *   Potentially reduces electricity bills, as utilities often penalize customers with low power factors.

---

## 7. Connection to Resonance

Complex power is intimately related to resonance in RLC circuits.

*   **At Resonance:** In a series RLC circuit, the inductive reactance ($X_L$) equals the capacitive reactance ($X_C$).
    *   $X_L = X_C \implies \omega L = \frac{1}{\omega C}$
    *   The total impedance becomes purely resistive ($Z = R$).
    *   The phase angle $\theta = \theta_v - \theta_i = 0^\circ$.
    *   The power factor is unity ($PF = \cos(0^\circ) = 1$).
    *   The complex power absorbed is $S = P = V_{rms} I_{rms} = I_{rms}^2 R$. The reactive power $Q$ is zero.

*   **Before/After Resonance:**
    *   **Below Resonance:** $X_C > X_L$, the circuit behaves capacitively, current leads voltage, $PF$ is leading, and $Q < 0$.
    *   **Above Resonance:** $X_L > X_C$, the circuit behaves inductively, current lags voltage, $PF$ is lagging, and $Q > 0$.

*   **Resonance and Reactive Power:** Resonance represents a state where the reactive power exchanged between the inductor and capacitor is maximized, but the net reactive power drawn from the source is zero. The entire power drawn from the source is real power.

---
