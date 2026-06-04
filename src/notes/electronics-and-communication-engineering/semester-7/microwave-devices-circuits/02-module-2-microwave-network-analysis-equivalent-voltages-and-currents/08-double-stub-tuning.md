---
title: "Double stub tuning."
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 2: Microwave Network Analysis – Equivalent voltages and currents"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff499"
status: "completed"
scrapedAt: "2026-05-23T18:07:52.853Z"
---
# MICROWAVE DEVICES & CIRCUITS

## Module 2: Microwave Network Analysis – Equivalent Voltages and Currents

### Topic: Double Stub Tuning

---

### 1. Introduction to Impedance Matching

At microwave frequencies, reflections caused by impedance mismatches can significantly degrade the performance of a circuit. These reflections lead to:
*   **Reduced power transfer:** Less power is delivered to the load.
*   **Standing waves:** High voltage and current points can lead to component failure.
*   **Reduced gain and increased noise:** For active devices.
*   **Distortion:** In communication systems.

**Impedance matching** is the process of ensuring that the impedance of a source matches the impedance of the load, or that the impedance looking into a section of a transmission line matches the characteristic impedance of the line. This is achieved by inserting matching networks.

---

### 2. Stub Tuning: An Overview

**Stubs** are short lengths of transmission lines (usually short-circuited or open-circuited at one end) that are connected in parallel or series with the main transmission line. They act as reactive elements and can be used to cancel out the unwanted reflections from an impedance mismatch.

*   **Types of Stubs:**
    *   **Series Stub:** Connected in series with the transmission line.
    *   **Shunt Stub:** Connected in parallel (across) the transmission line. At microwave frequencies, shunt stubs are more commonly used due to ease of implementation in microstrip and stripline circuits.

*   **How Stubs Work:** A stub provides a reactive impedance. By varying the length and position of the stubs, we can create a reactive impedance that is the complex conjugate of the unwanted reflection coefficient, thus achieving a match.

---

### 3. Double Stub Tuning

Double stub tuning is a widely used method for achieving impedance matching using two shunt stubs. It offers more flexibility and a wider range of matching capabilities compared to single stub tuning.

**Key Concept:** The goal is to transform an arbitrary load impedance $Z_L$ to the characteristic impedance $Z_0$ (usually 50 ohms) of the transmission line. This is done by placing two shunt stubs at specific distances from the load.

#### 3.1. Setup and Components

*   **Transmission Line:** The main transmission line with characteristic impedance $Z_0$.
*   **Load Impedance ($Z_L$):** The impedance to be matched.
*   **Two Shunt Stubs:** Connected in parallel to the main transmission line.
    *   Each stub is typically short-circuited at the far end.
    *   Stub 1 is placed at a distance $d_1$ from the load.
    *   Stub 2 is placed at a distance $d_2$ from Stub 1 (or $d_1 + d_2$ from the load).

#### 3.2. The Matching Process (Conceptual)

The impedance transformation occurs as follows:

1.  **Load to Stub 1:** The load impedance $Z_L$ is transformed by the transmission line section of length $d_1$ to an impedance $Z_1$ as seen by Stub 1.
2.  **Stub 1 Adjustment:** Stub 1, connected in parallel at distance $d_1$, is adjusted to present a reactive impedance that cancels the reactive part of $Z_1$. This leaves a purely resistive impedance at the point of connection of Stub 1. Let this resistive impedance be $R_1$.
3.  **Stub 1 to Stub 2:** The purely resistive impedance $R_1$ is then transformed by the transmission line section of length $d_2$ to an impedance $Z_2$ as seen by Stub 2.
4.  **Stub 2 Adjustment:** Stub 2, connected in parallel at distance $d_2$, is adjusted to present a reactive impedance that cancels the reactive part of $Z_2$. Since $Z_2$ is now purely resistive (as Stub 1 made the impedance purely resistive at its connection point, and the transmission line section $d_2$ only transforms resistance to a different resistance), Stub 2 can be adjusted to make the impedance looking into Stub 2 as the characteristic impedance $Z_0$.

#### 3.3. Using the Smith Chart for Double Stub Tuning

The Smith Chart is an invaluable tool for visualizing and performing double stub tuning.

**Steps using the Smith Chart:**

1.  **Normalize the Load Impedance:** Normalize $Z_L$ with respect to $Z_0$.
    $z_L = \frac{Z_L}{Z_0}$

2.  **Locate $z_L$:** Plot the normalized load impedance $z_L$ on the Smith Chart.

3.  **Move to the First Stub Position:** Rotate the point $z_L$ along a constant VSWR circle (or constant radius circle in the normalized chart) by an angle corresponding to the electrical length of the transmission line section $d_1$.
    *   Electrical length $\theta_1 = \beta d_1$, where $\beta$ is the phase constant.
    *   The impedance at this point is $z_1$.

4.  **Stub 1 - Cancelling Reactance:** For a shunt stub, we can only add susceptance (admittance) in parallel. Therefore, at the position of Stub 1, we want to transform $z_1$ to a purely resistive value.
    *   Convert $z_1$ to its admittance $y_1 = \frac{1}{z_1}$.
    *   Locate $y_1$ on the Smith Chart.
    *   We need to add a susceptance $b_1$ (from the stub) to $y_1 = g_1 + jb_{y1}$ such that the total admittance is $y_{1'} = g_1 + j(b_{y1} + b_1)$. For a purely resistive impedance $r_1'$ at the stub, the admittance is $y_{1'} = \frac{1}{r_1'}$. This means the imaginary part must be zero: $b_{y1} + b_1 = 0$, so $b_1 = -b_{y1}$.
    *   We find a stub length $l_1$ that provides a susceptance $b_1$ such that $y_{1'} = g_1$. We move along the constant conductance circle ($g_1$) until we hit a stub locus curve.

5.  **Move to the Second Stub Position:** From the point $y_{1'}$ (which corresponds to $z_1' = 1/y_{1'}$ on the chart), rotate along a constant VSWR circle (radius $|y_{1'}|$) by an angle corresponding to the electrical length of the transmission line section $d_2$.
    *   Electrical length $\theta_2 = \beta d_2$.
    *   The admittance at this point is $y_2$.

6.  **Stub 2 - Achieving Match:** We need to add a susceptance $b_2$ to $y_2 = g_2 + jb_{y2}$ such that the total admittance is $y_{2'} = g_2 + j(b_{y2} + b_2)$, and this must be equal to the characteristic admittance $y_0 = 1$ (for $Z_0$ normalization).
    *   So, $y_{2'} = 1 + j0$.
    *   This requires $g_2 = 1$ and $b_{y2} + b_2 = 0$, or $b_2 = -b_{y2}$.
    *   We find a stub length $l_2$ that provides a susceptance $b_2$ such that $g_2=1$ and $b_{y2} + b_2 = 0$. We move along the constant susceptance curve from $y_2$ until we hit the $g=1$ circle.

#### 3.4. Constraints on Double Stub Tuning

A significant limitation of the double stub tuner is that not all arbitrary impedances can be matched. This is because the distance between the stubs, $d_2$, is fixed relative to $d_1$ (or the total length $d_1+d_2$ is fixed, but more practically, the spacing between the stubs is fixed due to the tuner's physical construction).

*   **The "Untunable" Region:** Due to the fixed spacing between the stubs, there are certain normalized impedances that cannot be matched.
    *   After the first stub is used to make the impedance purely resistive ($z_1' = r_1'$), the transmission line section $d_2$ transforms this resistance.
    *   The possible values of $r_1'$ are restricted by the stub placement and the fact that the first stub must be able to cancel the reactance.
    *   When the purely resistive impedance $r_1'$ is transformed by distance $d_2$, it lands on a specific circle of constant resistance on the Smith Chart.
    *   The second stub must be able to change the admittance from this transformed resistance to $y_0 = 1$. This is possible if the transformed resistance lies on the $g=1$ circle (i.e., $r_{transformed} = 1$).
    *   The fixed spacing $d_2$ dictates which constant resistance circles can be transformed onto the $g=1$ circle.

**Simplified Explanation of Untunable Region:**
Consider the first stub placed at a distance $d_1$. After matching with the first stub, the impedance becomes purely resistive $r'_1$. Now, this $r'_1$ is transformed by a length $d_2$ of transmission line. The second stub is placed at the end of this $d_2$ section. The second stub can only add susceptance. To achieve a match, the impedance seen by the second stub must be such that when susceptance is added, the admittance becomes $1+j0$. This means the impedance seen by the second stub must be purely resistive and equal to $Z_0$ (i.e., $z=1$).
The issue is that the transmission line section of length $d_2$ transforms the resistance $r'_1$ into a new resistance $r_{transformed}$. The value of $r_{transformed}$ depends on $r'_1$ and $d_2$. The second stub can only change the reactive part of the admittance at its location. It cannot change the resistive part. Therefore, for a match to be possible, the transformed resistance $r_{transformed}$ must be equal to $Z_0$ (i.e., $r_{transformed}=1$).
The range of achievable purely resistive impedances $r'_1$ after the first stub, and the fixed distance $d_2$, restrict the possible values of $r_{transformed}$. If $r_{transformed}$ does not equal 1, then a match cannot be achieved with the second stub alone.

**Pozar (4/e), Chapter 6, Section 6.3.3 (Impedance Matching):** Pozar discusses stub tuners and emphasizes that the spacing between stubs is critical. He shows that the double-stub tuner can match any load whose normalized impedance lies on circles that pass through the point $1+j0$ on the Smith Chart after the first stub and subsequent transformation by $d_2$.

**Collin (2/e), Chapter 5, Section 5.4 (Impedance Matching Techniques):** Collin provides a detailed mathematical analysis of stub tuners, including the conditions for matching and the derivation of the untunable region.

#### 3.5. Example of Double Stub Tuning (Smith Chart Practice)

**Problem:** Match a load impedance $Z_L = (50 + j100)\ \Omega$ to a 50 $\Omega$ transmission line using a double stub tuner with short-circuited stubs. The stubs are spaced $d_1 = 0.1\lambda$ and $d_2 = 0.15\lambda$ from the load.

**Solution using Smith Chart:**

1.  **Normalize Load:** $z_L = \frac{50 + j100}{50} = 1 + j2$.

2.  **Plot $z_L$:** Locate $1+j2$ on the Smith Chart.

3.  **First Stub Position ($d_1 = 0.1\lambda$):**
    *   The impedance $z_L$ is on a constant VSWR circle. Find its radius.
    *   Rotate from $z_L$ by an electrical length of $0.1\lambda$ (which corresponds to $0.1 \times 360^\circ = 36^\circ$ in terms of angle on the Smith Chart) in the direction of increasing wavelength (counter-clockwise).
    *   Let the new impedance be $z_1$.
    *   Convert $z_1$ to admittance $y_1 = 1/z_1$. Locate $y_1$ on the Smith Chart.
    *   We need to add a susceptance $b_1$ to cancel the imaginary part of $y_1$. Find a stub length $l_1$ that provides this susceptance. This involves moving along the constant conductance circle of $y_1$ to a point where the susceptance can be provided by a stub.
        *   Alternatively, convert $z_1$ to $y_1 = g_1 + jb_{y1}$. We need to add $-b_{y1}$ susceptance. Look up stub length $l_1$ from the stub charts (or calculate) to get a susceptance of $-b_{y1}$. The admittance at the stub location becomes $y_{1'} = g_1$.

4.  **Second Stub Position ($d_2 = 0.15\lambda$):**
    *   From the point $y_{1'} = g_1$ (which corresponds to $z_1' = 1/g_1$), rotate along the constant VSWR circle (radius $|y_{1'}|$) by an electrical length of $0.15\lambda$ (which corresponds to $0.15 \times 360^\circ = 54^\circ$ counter-clockwise).
    *   Let the new admittance be $y_2 = g_2 + jb_{y2}$.
    *   We need to add a susceptance $b_2$ such that $b_{y2} + b_2 = 0$ and $g_2$ is matched. For a match, we need $y_{2'} = 1+j0$. This means $g_2$ must be 1, and $b_2 = -b_{y2}$.
    *   If $g_2 \neq 1$, the impedance is in the untunable region for these stub positions.
    *   If $g_2 = 1$, then we need to find a stub length $l_2$ that provides a susceptance $b_2 = -b_{y2}$. This involves moving from $y_2$ along a constant conductance circle ($g_2=1$) to the point $1+j0$.

**Crucial Note on Stub Placement and Untunable Region:**
The example above assumes specific $d_1$ and $d_2$. In a practical double stub tuner, the distance between the stubs ($d_2$ in this case) is fixed, and we only adjust the stub lengths $l_1$ and $l_2$. The first stub is placed at a fixed distance $d$ from the load, and the second stub at $d+d_{s}$ (where $d_s$ is the stub spacing). We then only adjust $l_1$ and $l_2$.

**The "Standard" Double Stub Tuner Problem:**
A more common problem statement is: "Given a load $Z_L$, match it using a double stub tuner with short-circuited stubs spaced $d_s$ apart, placed at distances $d_1$ and $d_1+d_s$ from the load."
In this scenario, we would plot $z_L$, rotate by $d_1$ to get $z_1$. Convert to $y_1 = g_1 + jb_{y1}$. We choose a stub length $l_1$ to provide susceptance $b_1$ such that the resultant admittance is $y_{1'} = g_1 + j(b_{y1} + b_1)$. This $y_{1'}$ must be such that when transformed by $d_s$, it can be matched by the second stub.
The key is that the first stub can be used to set the *conductance* at its location. The possible values of conductance are restricted.
For a fixed stub spacing $d_s$, the second stub can match any impedance whose admittance $y_2$, after transformation by $d_s$, lies on the $g=1$ circle.

**Refined Smith Chart Procedure for Fixed Stub Spacing ($d_s$):**

1.  **Normalize Load:** $z_L = Z_L/Z_0$. Plot on Smith Chart.
2.  **Convert to Admittance:** $y_L = 1/z_L$. Plot on Smith Chart.
3.  **Choose Stub Spacing:** Let the stub spacing be $d_s$. This is a fixed value.
4.  **Select First Stub Position ($d_1$):** We need to choose $d_1$ such that after the first stub transforms the load to $y_{1'} = g_1$, and this $y_{1'}$ is transformed by $d_s$ to $y_2$, $y_2$ is on the $g=1$ circle.
    *   This means that after transforming $y_{1'} = g_1 + j0$ by $d_s$, the resulting admittance $y_2$ must have a real part of 1.
    *   Let $y_{1'} = g_1$. Transform this by $d_s$ to $y_2$. $y_2 = y_{1'} \times (\text{transformation due to } d_s)$.
    *   The problem then becomes selecting a $g_1$ (which is achieved by the first stub) such that after transforming $g_1$ by $d_s$, the admittance $y_2$ lands on the $g=1$ circle.
    *   We can achieve *any* conductance $g_1 \ge 1$ with a single stub (from $y_L$ to $y_{1'} = g_1 + j0$).
    *   The range of conductances $g_1$ that can be transformed by $d_s$ to the $g=1$ circle is the "tunable" region.

**Key Insight:** The first stub can be adjusted to achieve a certain conductance $g_1$ at its location. The transmission line section of length $d_s$ transforms this conductance $g_1$ to a new impedance. The second stub then needs to match this. The untunable region arises because the transformation through $d_s$ from a pure resistance $g_1$ does not always result in a resistance of 1.

**Example:** Let stub spacing $d_s = 0.15\lambda$. Load $z_L = 1+j2$.
1.  $y_L = \frac{1}{1+j2} = \frac{1-j2}{5} = 0.2 - j0.4$.
2.  We need to select a stub length $l_1$ (which sets $g_1$) such that when $g_1$ is transformed by $d_s=0.15\lambda$, it lands on the $g=1$ circle.
3.  The first stub is placed at some distance $d_1$. We need to choose $d_1$ and $l_1$ such that the impedance $z_1$ after $d_1$ is transformed by $l_1$ to $z_1' = r'_1$. Then this $r'_1$ is transformed by $d_s$ to $z_2$. Finally, $z_2$ is matched by $l_2$.

**A more practical approach:**
The fixed spacing $d_s$ means the second stub can only transform an admittance $y_2$ to $1+j0$ if $y_2$ lies on the $g=1$ circle. So, we need to find a position $d_1$ and a stub length $l_1$ that makes the admittance $y_{1'}$ at the first stub such that when transformed by $d_s$, it lands on the $g=1$ circle.

*   **Stub 1:** Can change $y_L$ to any $y_{1'} = g_1 \pm jb_1$ such that $y_{1'}$ is on a stub locus curve starting from $y_L$.
*   **Transmission line $d_s$:** Transforms $y_{1'}$ to $y_2$.
*   **Stub 2:** Can match $y_2$ if $y_2$ is on the $g=1$ circle.

Therefore, we need to find a point $y_{1'}$ on the stub locus from $y_L$ such that when $y_{1'}$ is transformed by $d_s$, it lands on the $g=1$ circle.

**Practice:**
If stub spacing $d_s = 0.15\lambda$, and $z_L = 1+j2$.
1.  $y_L = 0.2 - j0.4$.
2.  The second stub is $0.15\lambda$ away. This means the admittance before the second stub ($y_2$) must be on the $g=1$ circle.
3.  We need to find an admittance $y_{1'} = g_1 + jb_{y1}$ that can be reached from $y_L$ by a stub, such that when transformed by $0.15\lambda$, it lands on $g=1$.
4.  Work backwards: Take points on the $g=1$ circle and transform them backwards by $0.15\lambda$. These are the required $y_2$ values. Check if any of these $y_2$ values can be reached from $y_L$ by a stub.

**This backwards approach is complex without specialized tools.** A simpler way is to understand the untunable region.

**Pozar, Chapter 6.3.3:** Illustrates the untunable region on the Smith Chart for double stub tuners. The region is defined by the stub spacing.

#### 3.6. Advantages of Double Stub Tuning

*   **More Versatile:** Can match a wider range of impedances compared to single stub tuning.
*   **Easier Adjustment:** Both stubs are typically adjustable in length, allowing for fine-tuning.
*   **Commonly Used:** Practical for many applications.

#### 3.7. Disadvantages of Double Stub Tuning

*   **Untunable Region:** Certain impedance values cannot be matched due to the fixed spacing between stubs.
*   **Insertion Loss:** Stubs add some length to the transmission line, leading to minor power loss.
*   **Bandwidth Limitation:** Like all matching networks, stub tuners are inherently narrowband.

---

### 4. Equivalent Voltages and Currents in Matching Networks

When discussing impedance matching using stubs or other networks, it's important to remember that we are dealing with traveling waves and standing waves on transmission lines. The concept of "equivalent voltages and currents" refers to the phasor quantities of these waves.

*   **Voltage Wave:** $V(z) = V_0^+ e^{-j\beta z} + V_0^- e^{j\beta z}$, where $V_0^+$ is the forward voltage amplitude and $V_0^-$ is the backward voltage amplitude.
*   **Current Wave:** $I(z) = I_0^+ e^{-j\beta z} - I_0^- e^{j\beta z}$, where $I_0^+ = V_0^+/Z_0$ and $I_0^- = -V_0^-/Z_0$.

At the load, $Z_L = V_L/I_L$. The reflection coefficient is $\Gamma_L = V_0^-/V_0^+ = (Z_L - Z_0)/(Z_L + Z_0)$.

The matching network is designed to ensure that the reflection coefficient at the input of the network (looking towards the load) is zero, meaning the impedance seen is $Z_0$.

**Example:** Consider a short-circuited stub of length $l$.
The impedance looking into a short-circuited stub is purely reactive:
$Z_{stub} = jZ_0 \tan(\beta l)$

When connected in shunt, the admittance is:
$Y_{stub} = \frac{1}{jZ_0 \tan(\beta l)} = -j\frac{1}{Z_0 \tan(\beta l)} = -jB_{stub}$

This stub provides a susceptance that can be varied from 0 to infinity by changing $l$.

---

### 5. Course Outcome Alignment

*   **CO1 (Describe principles of Microwave solid state diodes, transistors, generators and amplifiers):** While this topic doesn't directly cover active devices, understanding impedance matching is fundamental to ensuring efficient power transfer to/from these components. A good match is crucial for optimal gain, output power, and noise figure.
*   **CO2 (Analyse Microwave Networks using signal flow graphs):** Signal flow graphs are a method for analyzing complex networks. While we've primarily used the Smith Chart here, the concept of cascading networks (load, transmission line sections, stubs) can be represented in signal flow graphs, where each component has associated reflection and transmission coefficients. Impedance matching aims to eliminate reflections, which is directly related to the reflection coefficients in a signal flow graph analysis.
*   **CO3 (Design microwave filters by different methods):** Impedance matching is a prerequisite for designing filters. Filters are often realized using reactive elements (like stubs or lumped components) that are tuned to create passbands and stopbands. The process of connecting these filter elements to transmission lines involves impedance matching to avoid reflections and ensure the filter behaves as designed. Stubs themselves can act as filtering elements.
*   **CO4 (Illustrate basic concepts of Monolithic Integrated Circuits):** MICs and MMICs often employ integrated matching networks. Understanding stub tuning and its principles is essential for designing compact and efficient matching circuits within these monolithic structures.

---

### 6. Important Points to Remember

*   **Purpose of Matching:** To maximize power transfer and minimize reflections.
*   **Stubs:** Reactive elements made from short/open-circuited transmission lines. Shunt stubs are common.
*   **Double Stub Tuner:** Uses two shunt stubs for matching.
*   **Smith Chart:** The primary tool for designing stub tuners.
*   **Untunable Region:** A limitation of double stub tuners due to fixed stub spacing.
*   **Admittance Form:** Shunt stubs are most easily analyzed in terms of admittance.
*   **VSWR:** Minimizing VSWR is equivalent to achieving impedance matching.

---

### 7. Practice Questions and Exercises

**Question 1:**
A load impedance of $Z_L = (75 + j50)\ \Omega$ is connected to a $Z_0 = 50\ \Omega$ lossless transmission line. Design a double stub matching network using short-circuited stubs. Assume the stub spacing is $0.1\lambda$. Use the Smith Chart.

**Answer 1:**
1.  **Normalize:** $z_L = (75+j50)/50 = 1.5 + j1$.
2.  **Admittance:** $y_L = 1/z_L = 1/(1.5+j1) = (1.5-j1)/(1.5^2+1^2) = (1.5-j1)/3.25 \approx 0.462 - j0.308$. Plot this on the Smith Chart.
3.  **Stub Spacing:** $d_s = 0.1\lambda$.
4.  **Untunable Region Consideration:** We need to find a point $y_{1'} = g_1$ (after the first stub makes it purely conductive) such that when transformed by $0.15\lambda$, it lands on the $g=1$ circle.
    *   Let's work backwards from the $g=1$ circle. Choose a point on $g=1$, say $y_{2a} = 1+j1$.
    *   Transform this backwards by $0.1\lambda$ (clockwise rotation by $36^\circ$). $y_{2a}' = (1+j1) \times e^{-j36^\circ}$. Or, using the Smith Chart, locate $1+j1$, then rotate clockwise by $36^\circ$. This gives a new admittance $y_a$.
    *   Repeat for other points on $g=1$ (e.g., $1+j0$, $1-j1$) to get other possible admittances $y_b, y_c$ that the first stub must be able to transform to.
    *   Now, check if $y_L$ can be transformed by a stub to any of these $y_a, y_b, y_c$.
    *   *Alternative Method (Forward):*
        *   Locate $y_L = 0.462 - j0.308$.
        *   We need to find a stub length $l_1$ to move to a point $y_{1'} = g_1 + j0$ such that when this $g_1$ is transformed by $d_s=0.1\lambda$, it lands on the $g=1$ circle.
        *   Let's try to select a suitable $g_1$. The possible values of $g_1$ are limited by the stub locus from $y_L$.
        *   From $y_L$, we can reach various conductances $g_1 \ge 0.462$ by adjusting $l_1$.
        *   If we select $g_1=1$, we need to find the stub length $l_1$ to go from $y_L = 0.462 - j0.308$ to $y_{1'} = 1+j0$. The required susceptance is $+0.308$. Find the stub length for this susceptance.
        *   Now, transform $g_1=1$ by $d_s = 0.1\lambda$. This transforms the admittance $1+j0$ to some $y_2$.
        *   If $y_2$ is on the $g=1$ circle, then this choice of $g_1=1$ is valid, and the second stub length $l_2$ is zero (or a length to adjust any small reactance).
        *   Transforming $y_{1'}=1$ by $0.1\lambda$ (counter-clockwise rotation by $36^\circ$): $y_2 = 1 \times e^{j36^\circ} = \cos(36^\circ) + j\sin(36^\circ) \approx 0.809 + j0.588$.
        *   Since the real part of $y_2$ is not 1, $g_1=1$ is not a matchable conductance in this configuration.

    *   **The Actual Double Stub Procedure:**
        *   Plot $y_L = 0.462 - j0.308$.
        *   The second stub is $0.1\lambda$ away. This means the admittance seen by the second stub, $y_2$, must be on the $g=1$ circle.
        *   Work backwards: Take a point on the $g=1$ circle, e.g., $y=1+j0$. Transform it backwards by $0.1\lambda$ (clockwise rotation by $36^\circ$). This gives $y_{2b} = (1+j0)e^{-j36^\circ} = 0.809 - j0.588$.
        *   Check if $y_L$ can be transformed by a stub to $y_{2b}$. $y_L = 0.462 - j0.308$. The required stub admittance is $y_{stub} = y_{2b} - y_L = (0.809 - j0.588) - (0.462 - j0.308) = 0.347 - j0.280$.
        *   Can a stub provide this admittance? A short-circuited stub provides $y_{stub} = -jB_{stub}$. So, the required admittance must be purely imaginary. Since our calculated $y_{stub}$ has a real part of 0.347, this chosen point on the $g=1$ circle ($1+j0$) is not reachable.
        *   Try another point on $g=1$, say $y=1+j1$. Transform backwards by $0.1\lambda$: $y_{2a} = (1+j1)e^{-j36^\circ} = (1+j1)(0.809-j0.588) = (0.809+0.588) + j(0.809-0.588) = 1.397 + j0.221$.
        *   Required stub admittance: $y_{stub} = y_{2a} - y_L = (1.397 + j0.221) - (0.462 - j0.308) = 0.935 + j0.529$. Again, not purely imaginary.

    *   **Conclusion for this problem:** This load might be in the untunable region for a $0.1\lambda$ stub spacing. To properly solve this, one would need to systematically find the stub locus from $y_L$ and the transformed $g=1$ circle backwards from the second stub position. The intersection of these two loci would give the required $y_{1'}$.

**Question 2:**
What are the primary limitations of double stub tuning?
**Answer 2:**
The primary limitation is the "untunable region." Due to the fixed spacing between the two stubs, certain impedance values cannot be matched. This is because the transmission line section between the stubs transforms the impedance presented by the first stub, and the second stub can only add susceptance, not change the conductance. If the transformed impedance is not such that it can be matched to $Z_0$ by adding susceptance, the match fails.

**Question 3:**
Explain why shunt stubs are more commonly used in microwave integrated circuits than series stubs.
**Answer 3:**
In microstrip and stripline circuits, it is much easier to connect a stub in parallel (shunt) across the main line. A series stub would require breaking the main transmission line and inserting the stub, which is physically more complex to implement and often introduces more discontinuities and losses. Shunt stubs can be connected at a via or a gap in the ground plane (for microstrip), making them more practical for planar circuits.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. References

*   **Pozar, David M. Microwave Engineering. 4th ed., Wiley India, 2012.** (Chapter 6: Impedance Matching and Tuning)
*   **Collin, Robert E. Foundations of Microwave Engineering. 2nd ed., Wiley India, 2012.** (Chapter 5: Impedance Matching)
*   **Liao, Samuel Y. Microwave Devices and Circuits. 3rd ed., Pearson.** (Chapter 3: Impedance Matching and Tuning)

---