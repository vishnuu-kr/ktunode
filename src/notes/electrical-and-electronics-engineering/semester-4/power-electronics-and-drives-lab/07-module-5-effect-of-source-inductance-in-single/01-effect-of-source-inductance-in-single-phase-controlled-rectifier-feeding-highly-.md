---
title: "Effect of source inductance in single-phase controlled rectifier feeding highly inductive loads"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 5: Effect of source inductance in single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f3613d"
status: "completed"
scrapedAt: "2026-05-23T16:18:05.036Z"
---
# POWER ELECTRONICS AND DRIVES LAB - Module 5: Effect of Source Inductance in Single-Phase Controlled Rectifiers

## Topic: Effect of Source Inductance in Single-Phase Controlled Rectifier Feeding Highly Inductive Loads

This module focuses on understanding how the presence of inductance in the AC source, commonly encountered in practical power systems, affects the performance of single-phase controlled rectifiers when feeding loads that are predominantly inductive.

---

### 1. Introduction to Single-Phase Controlled Rectifiers

**Definition:** A controlled rectifier is a circuit that converts AC voltage to DC voltage using controllable switching devices like thyristors (SCRs) or TRIACs. The output voltage can be controlled by adjusting the firing angle (delay angle) of these devices.

**Basic Operation:**
*   In a half-wave or full-wave rectifier, the output voltage is directly dependent on the input AC voltage waveform.
*   In a controlled rectifier, the conduction of the switching devices is initiated at a specific point in each AC cycle, determined by the firing angle ($\alpha$). This allows for regulation of the average DC output voltage.

**Feeding Highly Inductive Loads:**
*   A highly inductive load, characterized by a large inductance (L), tends to maintain a constant current flow.
*   When feeding an inductive load, the current waveform is smoother and less prone to rapid changes compared to a resistive load.
*   In the absence of source inductance, the current commutates instantaneously from one device to another once the voltage across the new device becomes positive and it is fired.

**Course Outcome Alignment:**
*   **CO2:** Understand the features of phase-controlled rectifiers and analyze their operation. This topic directly addresses the analysis of controlled rectifier operation under specific conditions. (Knowledge Level: K4)

**Textbook References:**
*   **Mohan, Undeland, Robbins (2022), Chapter 3:** Discusses the basic operation of controlled rectifiers.
*   **Rashid (2014), Chapter 5:** Covers rectifiers and their control methods.
*   **Hart (2010), Chapter 4:** Explains the fundamentals of AC-DC conversion.

---

### 2. The Concept of Source Inductance ($L_s$)

**Definition:** Source inductance ($L_s$) represents the inductance present in the AC supply lines, transformer windings, and connecting wires. In real-world scenarios, it is rarely zero.

**Impact on Rectifier Operation:**
*   **Current Commutation:** The presence of source inductance significantly impacts the process of current commutation, which is the transfer of current from one conducting switching device to another.
*   **Voltage Drop:** Source inductance causes a voltage drop in the AC source during periods of current change.
*   **Overlap Phenomenon:** This is the most significant effect of source inductance. Instead of instantaneous commutation, there is a period where both the incoming and outgoing switching devices conduct simultaneously. This period is known as "overlap" or "commutation overlap."

**Course Outcome Alignment:**
*   **CO2:** Understand the features of phase-controlled rectifiers and analyze their operation. Understanding the impact of source inductance is crucial for a complete analysis. (Knowledge Level: K4)

**Textbook References:**
*   **Umanand (2009), Chapter 4:** Discusses the effect of source impedance on rectifier performance.
*   **Agrawal (2006), Chapter 5:** Explains the role of source inductance in commutation.
*   **Krein (2017), Chapter 7:** Addresses commutation processes in power converters.

---

### 3. Effect of Source Inductance in Single-Phase Full-Wave Controlled Rectifiers

We will primarily focus on the single-phase full-wave bridge rectifier with thyristors, as it is a common configuration. The load is assumed to be highly inductive, meaning the load current ($I_d$) is nearly constant.

**3.1. Rectifier Operation Without Source Inductance (Ideal Case)**

*   **Firing Angle ($\alpha$):** The thyristors (e.g., T1 and T2 for positive half-cycle, T3 and T4 for negative half-cycle) are fired at an angle $\alpha$ after the voltage polarity becomes positive.
*   **Current Commutation:** When the firing pulse is applied to the next pair of thyristors, the current immediately transfers from the previously conducting pair to the new pair.
*   **Output Voltage Waveform:** The output DC voltage waveform consists of segments of the AC input voltage, delayed by $\alpha$.

**3.2. Rectifier Operation With Source Inductance ($L_s$)**

When $L_s$ is present, the instantaneous transfer of current is no longer possible.

**Key Concepts:**

*   **Commutation Inductance ($L_c$):** In a bridge rectifier, the source inductance in series with the conducting thyristors is effectively the commutation inductance. For a bridge rectifier, $L_c = L_s$.
*   **Overlap Angle ($\mu$):** This is the duration (in terms of angle) during which two thyristors (one incoming and one outgoing) conduct simultaneously.
*   **Commutation Voltage Drop:** During the overlap period, the source voltage is effectively short-circuited by the two conducting thyristors. The source inductance resists the change in current, leading to a voltage drop across $L_s$.

**Analysis of a Single-Phase Full-Wave Bridge Rectifier with $L_s$ and Highly Inductive Load:**

Consider the positive half-cycle where thyristors T1 and T2 are conducting. Suppose T3 and T4 are to be fired at angle $\alpha$.

1.  **Before $\alpha$:** T1 and T2 are conducting. The AC voltage is positive.
2.  **At $\alpha$:** The firing pulse is applied to T3 and T4. The voltage across T3 and T4 becomes positive.
3.  **Overlap Interval ($\alpha$ to $\alpha + \mu$):**
    *   T1 and T2 are still conducting (due to the inductive load current).
    *   T3 and T4 are now forward biased and conducting.
    *   **Crucially, T1 and T3 (or T2 and T4) conduct simultaneously.**
    *   The loop now involves the AC source, $L_s$, T1, and T3 (for example).
    *   The current through T1 ($i_1$) is decreasing, while the current through T3 ($i_3$) is increasing.
    *   The voltage equation for this loop can be written as:
        $v_{ac} = L_s \frac{di_1}{dt} - L_s \frac{di_3}{dt} + V_{D1} + V_{D3}$
        Assuming ideal diodes and thyristors ($V_D \approx 0$), and that the current through the inductive load is nearly constant ($I_d$), the current from the source $i_s$ is split between T1 and T3.
        More accurately, consider the current commutation process. When T3 is fired, the current commutation happens from T1 to T3.
        The voltage across T1 drops to zero, and the voltage across T3 starts to rise.
        The voltage equation in the commutation loop (e.g., AC source $\rightarrow$ $L_s$ $\rightarrow$ T1 $\rightarrow$ T3 $\rightarrow$ AC source) is:
        $v_{ac} = 2L_s \frac{di_c}{dt}$
        where $i_c$ is the current being transferred. Assuming $i_c(t) = I_d \sin(\omega t)$ where $t$ starts from $\alpha$.
        The commutation starts at $\alpha$ and ends at $\alpha + \mu$.
        The current through T1 decreases from $I_d$ to 0. The current through T3 increases from 0 to $I_d$.
        The voltage across the AC source during overlap is effectively being used to increase the current through the commutating inductance.
        The integral of $v_{ac}$ over the overlap period $\mu$ relates to $L_s$ and the change in current:
        $\int_{\alpha}^{\alpha+\mu} v_{ac} dt = L_s [i(\alpha+\mu) - i(\alpha)]$ (simplified for one phase leg)
        For a full bridge, it's $2L_s$.
        A more detailed analysis for the overlap angle $\mu$ gives:
        $\cos(\alpha) - \cos(\alpha+\mu) = \frac{2 \omega L_s I_d}{V_m}$
        where $V_m$ is the peak AC voltage, and $\omega$ is the angular frequency.

4.  **After $\alpha + \mu$:** Commutation is complete. The current has transferred from T1 to T3. Now T2 and T3 are conducting.
5.  **Load Current Flow:** During the overlap period, the output DC voltage is not the instantaneous AC voltage but is affected by the voltage drop across $L_s$. The average DC output voltage is reduced.

**Impact of $L_s$ on Performance:**

*   **Reduced Average DC Output Voltage:** The overlap period effectively "short-circuits" the AC source, leading to a lower average DC output voltage compared to the case without $L_s$.
    $V_{dc} = \frac{V_m}{\pi} [\cos \alpha - \cos(\alpha + \mu)]$
    (This is the voltage generated during the conduction period, but the overall average is lower due to overlap)
    A more accurate expression for the average DC voltage for a full-wave bridge with overlap is:
    $V_{dc} = \frac{V_m}{\pi} [\cos \alpha - \cos(\alpha + \mu)]$ (This formula represents the contribution of the conducting segments to the DC output)
    However, the *reduction* from the ideal case is $\Delta V_{dc} = \frac{2 \omega L_s I_d}{\pi}$.
    So, $V_{dc, actual} = V_{dc, ideal} - \Delta V_{dc}$
    $V_{dc, ideal} = \frac{V_m}{\pi} (1 + \cos \alpha)$
    $V_{dc, actual} = \frac{V_m}{\pi} (1 + \cos \alpha) - \frac{2 \omega L_s I_d}{\pi}$
*   **Increased Ripple in Output Voltage/Current:** Although the load is highly inductive and smooths the current, the overlap introduces variations in the voltage applied to the load during commutation, potentially affecting the smoothness.
*   **Reduced Power Factor:** The phase shift between the fundamental component of the source current and the source voltage increases due to the reactive voltage drop across $L_s$ during overlap. This leads to a lower displacement power factor.
*   **Increased RMS Current:** The presence of $L_s$ can affect the RMS value of the source current.
*   **Commutation Failure:** In severe cases, especially at light loads or with very inductive source, commutation failure can occur, where a thyristor fails to turn off properly.

**Course Outcome Alignment:**
*   **CO2:** Understand the features of phase-controlled rectifiers and analyze their operation. This section delves deep into the analysis of a crucial aspect. (Knowledge Level: K4)
*   **CO4:** Understand the need for improved efficiency, improved reliability, improved load & source waveforms and improved utility interface. The reduced power factor and increased ripple are directly related to these aspects. (Knowledge Level: K3)

**Textbook References:**
*   **Mohan, Undeland, Robbins (2022), Chapter 3:** Detailed analysis of commutations with source inductance.
*   **Rashid (2014), Chapter 5:** Explains the overlap angle and its effect on output voltage.
*   **Vithayathil (2010), Chapter 7:** Discusses the impact of source inductance on thyristor converters.
*   **Hart (2010), Chapter 4:** Provides mathematical derivations for the overlap angle.
*   **Krein (2017), Chapter 7:** Offers comprehensive treatment of commutation phenomena.

---

### 4. Effect of Source Inductance in Single-Phase Controlled Rectifiers with Different Load Conditions

While this topic specifically mentions "highly inductive loads," it's important to contrast it with other load types to appreciate the context.

*   **Resistive Load:** If the load were purely resistive, the current would be zero when the voltage across the rectifier becomes zero (zero crossing). The presence of $L_s$ would cause overlap even at the zero crossings of the AC voltage, delaying the turn-off of devices and affecting the output waveform significantly, potentially leading to continuous conduction in a way that is not desired.
*   **Highly Inductive Load:** As discussed, the load current is nearly constant. This constant current magnitude drives the overlap process. The overlap angle $\mu$ is dependent on the load current $I_d$. Higher $I_d$ means a larger $\mu$.
*   **RL Load with Freewheeling Diode:** The presence of a freewheeling diode provides a path for the inductive current to flow when the main rectifying devices are off. This generally leads to smoother output and can mitigate some adverse effects of source inductance, but the overlap phenomenon during commutation of the main devices still occurs.

**Course Outcome Alignment:**
*   **CO2:** Understand the features of phase-controlled rectifiers and analyze their operation. Understanding how load characteristics interact with source inductance is key. (Knowledge Level: K4)

---

### 5. Practical Considerations and Mitigation Techniques

*   **Transformer Design:** Designing transformers with lower leakage inductance can reduce the effect of source inductance.
*   **Supply Filtering:** Adding series inductors at the source can sometimes be used to shape the current or reduce harmonic content, but this effectively adds to the source inductance problem if not carefully considered.
*   **Higher Firing Angles:** Operating at higher firing angles ($\alpha$) generally reduces the overlap angle $\mu$ for a given load current and source inductance. However, this also means a lower DC output voltage.
*   **Line Commutated Converters (LCC) vs. Force Commutated Converters:** Controlled rectifiers are line-commutated. The commutation relies on the AC source voltage. Force-commutated converters use auxiliary circuits to turn off devices, making them less dependent on source conditions.
*   **Power Factor Correction:** Techniques like using AC voltage controllers (TRIACs) in conjunction with controlled rectifiers or active filters can be employed to improve the power factor.

**Course Outcome Alignment:**
*   **CO4:** Understand the need for improved efficiency, improved reliability, improved load & source waveforms and improved utility interface. Mitigation techniques directly address these needs. (Knowledge Level: K3)

---

### 6. Important Points to Remember

*   Source inductance ($L_s$) causes **commutation overlap ($\mu$)**, where multiple devices conduct simultaneously.
*   Overlap occurs because $L_s$ resists the rapid change of current.
*   The overlap angle ($\mu$) is dependent on the source inductance ($L_s$), firing angle ($\alpha$), AC voltage ($V_m$), and load current ($I_d$).
*   **$ \cos(\alpha) - \cos(\alpha+\mu) = \frac{2 \omega L_s I_d}{V_m} $** (for a full-wave bridge)
*   Source inductance leads to a **reduced average DC output voltage**.
*   It also causes a **deterioration in power factor**.
*   The presence of $L_s$ is unavoidable in practical systems and must be accounted for in design.

---

### 7. Practice Questions

**Question 1:**
In a single-phase full-wave bridge controlled rectifier feeding a highly inductive load, what phenomenon is primarily caused by the presence of source inductance?
    a) Increased output voltage
    b) Reduced ripple
    c) Commutation overlap
    d) Improved power factor

**Answer 1:**
    c) Commutation overlap

**Question 2:**
For a given source inductance ($L_s$) and AC voltage ($V_m$), how does the overlap angle ($\mu$) vary with the load current ($I_d$) for a single-phase full-wave controlled rectifier?
    a) $\mu$ is independent of $I_d$.
    b) $\mu$ decreases as $I_d$ increases.
    c) $\mu$ increases as $I_d$ increases.
    d) $\mu$ varies inversely with $I_d^2$.

**Answer 2:**
    c) $\mu$ increases as $I_d$ increases. (As seen from the equation $\cos(\alpha) - \cos(\alpha+\mu) = \frac{2 \omega L_s I_d}{V_m}$)

**Question 3:**
List two detrimental effects of source inductance on the performance of a single-phase controlled rectifier.

**Answer 3:**
    1. Reduced average DC output voltage.
    2. Deterioration of power factor.
    (Other valid answers include increased ripple and potential commutation failure).

**Question 4:**
Consider a single-phase full-wave bridge controlled rectifier with $V_m = 230 \sqrt{2}$ V, $f = 50$ Hz, $L_s = 1$ mH, and $\alpha = 30^\circ$. Assume the load current is constant at $I_d = 10$ A. Calculate the overlap angle ($\mu$).

**Solution 4:**
Given:
$V_m = 230 \sqrt{2} \approx 325.27$ V
$f = 50$ Hz, so $\omega = 2 \pi f = 2 \pi (50) = 100 \pi$ rad/s $\approx 314.16$ rad/s
$L_s = 1$ mH $= 0.001$ H
$\alpha = 30^\circ$
$I_d = 10$ A

The equation relating these parameters is:
$ \cos(\alpha) - \cos(\alpha+\mu) = \frac{2 \omega L_s I_d}{V_m} $

Calculate the right-hand side (RHS):
$ RHS = \frac{2 \times (100 \pi) \times 0.001 \times 10}{325.27} = \frac{20 \pi}{325.27} \approx \frac{62.832}{325.27} \approx 0.19317 $

Now, we have:
$ \cos(30^\circ) - \cos(30^\circ + \mu) = 0.19317 $
$ \cos(30^\circ) \approx 0.8660 $

$ 0.8660 - \cos(30^\circ + \mu) = 0.19317 $
$ \cos(30^\circ + \mu) = 0.8660 - 0.19317 = 0.67283 $

Now, find the angle whose cosine is 0.67283:
$ 30^\circ + \mu = \cos^{-1}(0.67283) $
$ 30^\circ + \mu \approx 47.68^\circ $

$ \mu = 47.68^\circ - 30^\circ = 17.68^\circ $

**Therefore, the overlap angle is approximately $17.68^\circ$.**

---

### 8. Lab Experiments and Observations (Potential)

*   **Objective:** To experimentally verify the effect of source inductance on the output voltage and waveform of a single-phase controlled rectifier.
*   **Setup:** A single-phase transformer (with selectable or known leakage inductance), a full-wave bridge rectifier circuit with thyristors, a suitable DC load (e.g., a large inductor with a parallel resistor), firing circuit, oscilloscope, and power analyzer.
*   **Procedure:**
    1.  Set up the circuit with a low source inductance (e.g., by using a transformer with low leakage inductance or short connecting wires).
    2.  Operate the rectifier at a fixed firing angle $\alpha$ and observe the output voltage waveform on the oscilloscope. Measure the average DC output voltage.
    3.  Introduce higher source inductance (e.g., by using a transformer with higher leakage inductance, or adding series inductors).
    4.  Repeat step 2 with the same firing angle $\alpha$ and load conditions.
    5.  Observe the change in the output voltage waveform (e.g., the appearance of the overlap region) and measure the new average DC output voltage.
    6.  Compare the measured values with theoretical calculations.
*   **Expected Observations:**
    *   The presence of source inductance will be visible as a "rounding off" or flattening of the voltage waveform segments during commutation.
    *   The measured average DC output voltage will be lower when source inductance is increased.
    *   The ripple content in the output voltage might change.
    *   If a power analyzer is available, the power factor can be measured and will be observed to decrease with increased source inductance.

**Course Outcome Alignment:**
*   **CO2:** Understand the features of phase-controlled rectifiers and analyze the operation. This directly links theoretical analysis to practical observation. (Knowledge Level: K4)
*   **CO4:** Understand the need for improved efficiency, improved load & source waveforms and improved utility interface. Lab observations will demonstrate the impact on these aspects. (Knowledge Level: K3)

---

This comprehensive set of notes covers the key aspects of the effect of source inductance in single-phase controlled rectifiers feeding highly inductive loads, aligning with the provided learning and course outcomes and referencing the specified literature.
