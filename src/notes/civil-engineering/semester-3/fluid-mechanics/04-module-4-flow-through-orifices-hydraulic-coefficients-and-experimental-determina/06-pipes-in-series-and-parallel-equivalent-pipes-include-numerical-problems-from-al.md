---
title: "pipes in series and parallel - equivalent pipes (include numerical problems from all sections)"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810705"
status: "completed"
scrapedAt: "2026-05-20T18:40:43.660Z"
---
# Fluid Mechanics: Module 4 - Flow Through Orifices & Pipes

## Topic: Pipes in Series and Parallel - Equivalent Pipes

This module explores the behavior of fluid flow through pipe systems, focusing on the concept of equivalent pipes, which simplifies the analysis of complex pipe networks.

---

### **Learning Outcomes**

By the end of this topic, you should be able to:

*   Understand and explain the concept of pipes in series and parallel.
*   Define and calculate the equivalent length and equivalent diameter for pipes in series and parallel.
*   Analyze and solve problems involving fluid flow through pipes in series and parallel using the concept of equivalent pipes.
*   Determine the discharge or head loss in composite pipe systems.

---

### **1. Pipes in Series**

Pipes in series are connected end-to-end, meaning the fluid flows sequentially through each pipe. The total head loss in a series system is the sum of the head losses in each individual pipe.

#### **1.1 Key Concepts and Definitions**

*   **Series Connection:** Pipes connected in such a way that the fluid must pass through each pipe consecutively.
*   **Total Discharge:** The discharge through all pipes in series is the same. $Q_{total} = Q_1 = Q_2 = Q_3 = ...$
*   **Total Head Loss:** The sum of the head losses in each individual pipe. $h_{f,total} = h_{f1} + h_{f2} + h_{f3} + ...$
*   **Darcy-Weisbach Equation:** The fundamental equation for calculating head loss due to friction in pipes:
    $h_f = f \frac{L}{D} \frac{V^2}{2g}$
    Where:
    *   $h_f$ = head loss due to friction (m)
    *   $f$ = Darcy friction factor (dimensionless)
    *   $L$ = length of the pipe (m)
    *   $D$ = diameter of the pipe (m)
    *   $V$ = average velocity of fluid (m/s)
    *   $g$ = acceleration due to gravity (m/s²)

#### **1.2 Equivalent Pipe for Pipes in Series**

An equivalent pipe is a hypothetical single pipe that offers the same total head loss for the same discharge as the original composite pipe system. For pipes in series, we can find an equivalent pipe with a length $L_{eq}$ and diameter $D_{eq}$ such that:

$h_{f,total} = f_{eq} \frac{L_{eq}}{D_{eq}} \frac{V_{eq}^2}{2g}$

where $Q_{eq} = Q_1 = Q_2 = ...$ and $V_{eq} = Q_{eq} / A_{eq} = Q_{eq} / (\pi D_{eq}^2 / 4)$.

#### **1.3 Calculating Equivalent Length ($L_{eq}$)**

If we assume a common friction factor $f$ and a common discharge $Q$ for all pipes in series (often a reasonable assumption if the pipes are of similar material and condition), and we want to find an equivalent pipe of a *specific diameter* $D_{eq}$, then:

$h_{f,total} = \sum_{i=1}^{n} h_{fi} = \sum_{i=1}^{n} f_i \frac{L_i}{D_i} \frac{V_i^2}{2g}$

Since $Q = V \frac{\pi D^2}{4}$, we have $V = \frac{4Q}{\pi D^2}$. Substituting this into the Darcy-Weisbach equation:

$h_{fi} = f_i \frac{L_i}{D_i} \frac{(4Q / \pi D_i^2)^2}{2g} = f_i \frac{L_i}{D_i} \frac{16Q^2}{\pi^2 D_i^4 2g} = \frac{8 f_i L_i Q^2}{\pi^2 g D_i^5}$

Now, for the equivalent pipe:

$h_{f,eq} = \frac{8 f_{eq} L_{eq} Q_{eq}^2}{\pi^2 g D_{eq}^5}$

If we set $h_{f,eq} = h_{f,total}$ and $Q_{eq} = Q$, and assume $f_{eq} = f_i = f$ (constant friction factor for all pipes), we get:

$\frac{8 f L_{eq} Q^2}{\pi^2 g D_{eq}^5} = \sum_{i=1}^{n} \frac{8 f L_i Q^2}{\pi^2 g D_i^5}$

$L_{eq} = \sum_{i=1}^{n} L_i \left( \frac{D_{eq}}{D_i} \right)^5$

**Important Point:** This formula is used to find the *equivalent length* of a pipe with a *specified diameter* $D_{eq}$ that would cause the same head loss as the series of pipes. Often, you might need to iterate to find a common $D_{eq}$ if friction factors vary significantly. However, for simpler problems, $D_{eq}$ is often given or implied.

#### **1.4 Example: Pipes in Series**

A pipe system consists of three pipes in series:
*   Pipe 1: Length $L_1 = 100$ m, Diameter $D_1 = 10$ cm $= 0.1$ m
*   Pipe 2: Length $L_2 = 150$ m, Diameter $D_2 = 8$ cm $= 0.08$ m
*   Pipe 3: Length $L_3 = 200$ m, Diameter $D_3 = 12$ cm $= 0.12$ m

The friction factor $f$ is assumed to be $0.02$ for all pipes. Calculate the equivalent length of a pipe with a diameter $D_{eq} = 10$ cm that would offer the same total head loss.

**Solution:**

We use the formula: $L_{eq} = \sum_{i=1}^{n} L_i \left( \frac{D_{eq}}{D_i} \right)^5$

*   For Pipe 1: $L_1 \left( \frac{D_{eq}}{D_1} \right)^5 = 100 \left( \frac{0.1}{0.1} \right)^5 = 100 \times 1^5 = 100$ m
*   For Pipe 2: $L_2 \left( \frac{D_{eq}}{D_2} \right)^5 = 150 \left( \frac{0.1}{0.08} \right)^5 = 150 \times (1.25)^5 = 150 \times 3.0517578125 \approx 457.76$ m
*   For Pipe 3: $L_3 \left( \frac{D_{eq}}{D_3} \right)^5 = 200 \left( \frac{0.1}{0.12} \right)^5 = 200 \times (0.8333)^5 = 200 \times 0.40187757 \approx 80.38$ m

$L_{eq} = 100 + 457.76 + 80.38 = 638.14$ m

Therefore, a single pipe of 10 cm diameter and 638.14 m length would be equivalent to the given series of pipes in terms of head loss for the same discharge.

---

### **2. Pipes in Parallel**

Pipes in parallel are connected between two common points. The total discharge entering the parallel system is split among the individual pipes, and the head loss through each parallel pipe is the same.

#### **2.1 Key Concepts and Definitions**

*   **Parallel Connection:** Pipes connected between two common junction points such that the flow divides among them and then rejoins.
*   **Total Discharge:** The sum of the discharges through each parallel pipe. $Q_{total} = Q_1 + Q_2 + Q_3 + ...$
*   **Head Loss:** The head loss across each parallel pipe is the same. $h_{f,total} = h_{f1} = h_{f2} = h_{f3} = ...$

#### **2.2 Equivalent Pipe for Pipes in Parallel**

For pipes in parallel, we seek an equivalent pipe with a diameter $D_{eq}$ and length $L_{eq}$ such that for the same head loss ($h_{f,eq} = h_{f,total}$), the discharge through the equivalent pipe is the sum of the discharges through the individual parallel pipes ($Q_{eq} = Q_1 + Q_2 + ...$).

Again, using the Darcy-Weisbach equation, $h_f = \frac{8 f L Q^2}{\pi^2 g D^5}$, we can express discharge as:

$Q = \sqrt{\frac{\pi^2 g D^5 h_f}{8 f L}}$

For the equivalent pipe:

$Q_{eq} = \sqrt{\frac{\pi^2 g D_{eq}^5 h_{eq}}{8 f_{eq} L_{eq}}}$

For pipes in parallel, $h_{eq} = h_{f1} = h_{f2} = ... = h_f$. So, $h_{eq} = h_f$.

$Q_{total} = \sum_{i=1}^{n} Q_i = \sum_{i=1}^{n} \sqrt{\frac{\pi^2 g D_i^5 h_f}{8 f_i L_i}}$

Assuming the same friction factor $f$ and the same length $L$ for all parallel pipes:

$Q_{total} = \sum_{i=1}^{n} \sqrt{\frac{\pi^2 g D_i^5 h_f}{8 f L}} = \sqrt{\frac{\pi^2 g h_f}{8 f L}} \sum_{i=1}^{n} D_i^{5/2}$

For the equivalent pipe:

$Q_{eq} = \sqrt{\frac{\pi^2 g D_{eq}^5 h_f}{8 f L_{eq}}}$

Equating $Q_{eq}$ and $Q_{total}$:

$\sqrt{\frac{\pi^2 g D_{eq}^5 h_f}{8 f L_{eq}}} = \sqrt{\frac{\pi^2 g h_f}{8 f L}} \sum_{i=1}^{n} D_i^{5/2}$

$\frac{D_{eq}^{5/2}}{\sqrt{L_{eq}}} = \frac{1}{\sqrt{L}} \sum_{i=1}^{n} D_i^{5/2}$

**Case 1: Parallel pipes of the same length but different diameters.**
If $L_{eq} = L$, then:
$D_{eq}^{5/2} = \sum_{i=1}^{n} D_i^{5/2}$
$D_{eq} = \left( \sum_{i=1}^{n} D_i^{5/2} \right)^{2/5}$

**Case 2: Parallel pipes of the same diameter but different lengths.**
If $D_{eq} = D_i = D$, then:
$\frac{D^{5/2}}{\sqrt{L_{eq}}} = \sum_{i=1}^{n} \frac{D^{5/2}}{\sqrt{L_i}}$
$\frac{1}{\sqrt{L_{eq}}} = \sum_{i=1}^{n} \frac{1}{\sqrt{L_i}}$
$\sqrt{L_{eq}} = \frac{1}{\sum_{i=1}^{n} \frac{1}{\sqrt{L_i}}}$
$L_{eq} = \left( \frac{1}{\sum_{i=1}^{n} \frac{1}{\sqrt{L_i}}} \right)^2$

**Case 3: Parallel pipes of different lengths and diameters.**
If we want to find an equivalent pipe of a *specified diameter* $D_{eq}$ and *specified length* $L_{eq}$, and we assume a common friction factor $f$ and head loss $h_f$, then:

$Q_{eq} = \frac{\pi D_{eq}^2}{4} V_{eq} = \frac{\pi D_{eq}^2}{4} \sqrt{\frac{8 f L_{eq} V_{eq}^2}{f L_{eq}}} = \frac{\pi D_{eq}^2}{4} \sqrt{\frac{2 g h_f}{f L_{eq}/D_{eq}}}$
$Q_{eq} = \frac{\pi D_{eq}^2}{4} \sqrt{\frac{2 g h_f D_{eq}}{f L_{eq}}}$

$Q_i = \frac{\pi D_i^2}{4} V_i = \frac{\pi D_i^2}{4} \sqrt{\frac{2 g h_f D_i}{f L_i}}$

$Q_{total} = \sum Q_i$

This implies: $\frac{D_{eq}^{5/2}}{\sqrt{L_{eq}}} = \sum_{i=1}^{n} \frac{D_i^{5/2}}{\sqrt{L_i}}$ (assuming common $f$).

This equation allows us to relate $L_{eq}$ and $D_{eq}$ for parallel pipes. Often, one of them is specified, and the other is calculated.

#### **2.3 Example: Pipes in Parallel**

Two pipes are connected in parallel between two points.
*   Pipe A: Length $L_A = 100$ m, Diameter $D_A = 10$ cm $= 0.1$ m
*   Pipe B: Length $L_B = 120$ m, Diameter $D_B = 15$ cm $= 0.15$ m

The friction factor $f$ is assumed to be $0.02$ for both pipes. If the total discharge is 0.1 m³/s, find the head loss and the discharge through each pipe. Also, find the equivalent length of a pipe with diameter $D_{eq} = 12$ cm that would be equivalent to this parallel combination.

**Solution:**

First, we need to find the head loss. Let $h_f$ be the head loss across the parallel pipes.
$Q_A = \frac{\pi D_A^2}{4} V_A$ and $h_f = f \frac{L_A}{D_A} \frac{V_A^2}{2g}$
$V_A = \sqrt{\frac{8 f L_A h_f}{\pi D_A^2}}$ This is incorrect. $V_A = \frac{4 Q_A}{\pi D_A^2}$.
$h_f = f \frac{L_A}{D_A} \frac{(4 Q_A / (\pi D_A^2))^2}{2g} = \frac{8 f L_A Q_A^2}{\pi^2 g D_A^5}$

Similarly, $h_f = \frac{8 f L_B Q_B^2}{\pi^2 g D_B^5}$

Since $h_f$ is the same for both:
$\frac{L_A Q_A^2}{D_A^5} = \frac{L_B Q_B^2}{D_B^5}$
$\frac{100 Q_A^2}{(0.1)^5} = \frac{120 Q_B^2}{(0.15)^5}$
$100 \times 10^5 Q_A^2 = 120 \times 6.561 \times 10^5 Q_B^2$
$10000000 Q_A^2 = 787320000 Q_B^2$
$10 Q_A^2 = 787.32 Q_B^2$
$Q_A = \sqrt{78.732} Q_B \approx 8.87 Q_B$

We also know that $Q_A + Q_B = 0.1$ m³/s.
Substituting $Q_A = 8.87 Q_B$:
$8.87 Q_B + Q_B = 0.1$
$9.87 Q_B = 0.1$
$Q_B = \frac{0.1}{9.87} \approx 0.01013$ m³/s

$Q_A = 0.1 - Q_B = 0.1 - 0.01013 = 0.08987$ m³/s

Now, calculate the head loss using either pipe:
$h_f = \frac{8 f L_A Q_A^2}{\pi^2 g D_A^5} = \frac{8 \times 0.02 \times 100 \times (0.08987)^2}{\pi^2 \times 9.81 \times (0.1)^5}$
$h_f = \frac{0.12926}{0.0009718} \approx 132.99$ m

Alternatively:
$h_f = \frac{8 f L_B Q_B^2}{\pi^2 g D_B^5} = \frac{8 \times 0.02 \times 120 \times (0.01013)^2}{\pi^2 \times 9.81 \times (0.15)^5}$
$h_f = \frac{0.01967}{0.001488} \approx 132.19$ m
(The slight difference is due to rounding). Let's use $h_f \approx 132.5$ m.

Now, find the equivalent length of a pipe with diameter $D_{eq} = 12$ cm $= 0.12$ m.
We use the relation: $\frac{D_{eq}^{5/2}}{\sqrt{L_{eq}}} = \sum_{i=1}^{n} \frac{D_i^{5/2}}{\sqrt{L_i}}$

$\frac{(0.12)^{5/2}}{\sqrt{L_{eq}}} = \frac{(0.1)^{5/2}}{\sqrt{100}} + \frac{(0.15)^{5/2}}{\sqrt{120}}$

$(0.12)^{5/2} = (0.016585)^2 \times \sqrt{0.12} \approx 0.000275 \times 0.3464 \approx 0.0000953$
$(0.1)^{5/2} = (0.0003162)^2 \times \sqrt{0.1} \approx 0.0000001 \times 0.3162 \approx 0.00000003162$
$(0.15)^{5/2} = (0.00577)^2 \times \sqrt{0.15} \approx 0.0000333 \times 0.3873 \approx 0.0000129$

Let's recalculate the terms directly:
$(0.12)^{5/2} = 0.12^{2.5} \approx 0.00009526$
$(0.1)^{5/2} = 0.1^{2.5} \approx 0.000003162$
$(0.15)^{5/2} = 0.15^{2.5} \approx 0.00002335$

$\sqrt{100} = 10$
$\sqrt{120} \approx 10.954$

$\frac{0.00009526}{\sqrt{L_{eq}}} = \frac{0.000003162}{10} + \frac{0.00002335}{10.954}$
$\frac{0.00009526}{\sqrt{L_{eq}}} = 0.0000003162 + 0.000002132$
$\frac{0.00009526}{\sqrt{L_{eq}}} = 0.0000024482$
$\sqrt{L_{eq}} = \frac{0.00009526}{0.0000024482} \approx 38.90$
$L_{eq} = (38.90)^2 \approx 1513.2$ m

So, an equivalent pipe of 12 cm diameter and 1513.2 m length would provide the same head loss for the same total discharge.

---

### **3. Compound Pipes / Branching Pipes (General Cases)**

In more complex pipe networks, you might encounter combinations of series and parallel arrangements, or branching systems where flow splits and rejoins in more intricate ways. The fundamental principles of continuity (mass conservation) and energy (Bernoulli's equation with head losses) still apply.

*   **Continuity Equation:** Sum of flows entering a junction equals the sum of flows leaving the junction ($\sum Q_{in} = \sum Q_{out}$).
*   **Energy Equation (Extended Bernoulli):** Between any two points in the flow:
    $\frac{P_1}{\rho g} + \frac{V_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{V_2^2}{2g} + z_2 + h_{L,total}$
    Where $h_{L,total}$ includes friction losses and minor losses (e.g., due to fittings, valves, expansions, contractions).

**Equivalent Pipe Concept in Complex Networks:**
For complex networks, finding a single equivalent pipe might not be feasible or directly helpful for all analyses. However, the concept is used to simplify specific parts of the network. For instance, a group of pipes in series can be replaced by a single equivalent pipe to simplify calculations for a larger network.

**Practical Approach for Complex Systems:**
1.  **Identify Junctions and Loops:** Map out the pipe network.
2.  **Apply Continuity at Junctions:** Set up equations for flow balance at each node.
3.  **Apply Energy Equation Across Loops:** The head loss around any closed loop must sum to zero.
4.  **Use Iterative Methods:** For systems with many interconnected pipes, analytical solutions can be complex. Numerical methods like the Hardy Cross method or software-based solvers are often used to find flow rates and head losses.

**Simplified "Equivalent Pipe" Calculations in Networks:**
When simplifying parts of a network, you might:
*   Replace a series of pipes with a single equivalent pipe of the same length but adjusted diameter (or vice-versa).
*   Replace parallel pipes with a single equivalent pipe.

The choice of how to define the "equivalent" pipe (e.g., what diameter or length to keep constant) depends on the problem's specific requirements.

#### **3.1 Example: Combining Series and Parallel**

Consider a system where a main pipe splits into two parallel pipes, and then these parallel pipes recombine and flow through another pipe in series.

*   Main Pipe 1: $L_1 = 100$ m, $D_1 = 20$ cm $= 0.2$ m
*   Parallel Pipe A: $L_A = 150$ m, $D_A = 10$ cm $= 0.1$ m
*   Parallel Pipe B: $L_B = 150$ m, $D_B = 15$ cm $= 0.15$ m
*   Main Pipe 2 (Series): $L_2 = 200$ m, $D_2 = 20$ cm $= 0.2$ m

Assume $f = 0.02$ for all pipes. If the total head loss from the start of Main Pipe 1 to the end of Main Pipe 2 is 30 m, find the total discharge.

**Solution:**

This problem is best solved by first finding the equivalent pipe for the parallel section, and then treating the entire system as a series of three pipes.

**Step 1: Equivalent pipe for parallel section (A and B)**
Let's find an equivalent pipe with the same length ($L_{eq,parallel} = 150$ m) but a new diameter $D_{eq,parallel}$.
Using $\frac{D_{eq}^{5/2}}{\sqrt{L}} = \sum_{i=1}^{n} \frac{D_i^{5/2}}{\sqrt{L_i}}$ (since $L_A = L_B = L$):
$D_{eq,parallel}^{5/2} = D_A^{5/2} + D_B^{5/2}$
$D_{eq,parallel}^{5/2} = (0.1)^{5/2} + (0.15)^{5/2}$
$D_{eq,parallel}^{5/2} = 0.000003162 + 0.00002335 = 0.000026512$
$D_{eq,parallel} = (0.000026512)^{2/5} \approx 0.1175$ m

So, the parallel section can be replaced by a single pipe of $L_{eq,parallel} = 150$ m and $D_{eq,parallel} = 0.1175$ m.

**Step 2: Equivalent pipe for the entire system (Series calculation)**
Now we have a system in series:
*   Pipe 1: $L_1 = 100$ m, $D_1 = 0.2$ m
*   Equivalent Parallel Pipe: $L_{eq,parallel} = 150$ m, $D_{eq,parallel} = 0.1175$ m
*   Pipe 2: $L_2 = 200$ m, $D_2 = 0.2$ m

We need to find the total discharge $Q$ given a total head loss $h_{f,total} = 30$ m.
Since the friction factor $f$ is the same for all, we can use the equivalent length approach for a single diameter. Let's assume we want to find the equivalent length for a diameter $D_{eq\_total} = 0.2$ m.

$L_{eq\_total} = L_1 \left( \frac{D_{eq\_total}}{D_1} \right)^5 + L_{eq,parallel} \left( \frac{D_{eq\_total}}{D_{eq,parallel}} \right)^5 + L_2 \left( \frac{D_{eq\_total}}{D_2} \right)^5$
$L_{eq\_total} = 100 \left( \frac{0.2}{0.2} \right)^5 + 150 \left( \frac{0.2}{0.1175} \right)^5 + 200 \left( \frac{0.2}{0.2} \right)^5$
$L_{eq\_total} = 100 \times 1^5 + 150 \times (1.702)^5 + 200 \times 1^5$
$L_{eq\_total} = 100 + 150 \times 14.69 + 200$
$L_{eq\_total} = 100 + 2203.5 + 200 = 2503.5$ m

Now we have an equivalent pipe of $L_{eq\_total} = 2503.5$ m and $D_{eq\_total} = 0.2$ m, with a total head loss of $h_{f,total} = 30$ m and $f = 0.02$.
We can use the Darcy-Weisbach equation to find the discharge $Q$:

$h_{f,total} = f \frac{L_{eq\_total}}{D_{eq\_total}} \frac{V_{eq\_total}^2}{2g}$
$30 = 0.02 \times \frac{2503.5}{0.2} \times \frac{V_{eq\_total}^2}{2 \times 9.81}$
$30 = 0.02 \times 12517.5 \times \frac{V_{eq\_total}^2}{19.62}$
$30 = 250.35 \times \frac{V_{eq\_total}^2}{19.62}$
$30 = 12.759 \times V_{eq\_total}^2$
$V_{eq\_total}^2 = \frac{30}{12.759} \approx 2.351$
$V_{eq\_total} \approx \sqrt{2.351} \approx 1.533$ m/s

Now, calculate the total discharge:
$Q = A_{eq\_total} \times V_{eq\_total} = \frac{\pi D_{eq\_total}^2}{4} \times V_{eq\_total}$
$Q = \frac{\pi (0.2)^2}{4} \times 1.533 = \frac{\pi \times 0.04}{4} \times 1.533$
$Q = 0.031416 \times 1.533 \approx 0.04817$ m³/s

The total discharge is approximately 0.04817 m³/s.

---

### **Summary of Key Formulas:**

**Pipes in Series:**
*   $Q_{total} = Q_1 = Q_2 = ...$
*   $h_{f,total} = h_{f1} + h_{f2} + ...$
*   Equivalent Length (for a fixed diameter $D_{eq}$ and constant $f$):
    $L_{eq} = \sum_{i=1}^{n} L_i \left( \frac{D_{eq}}{D_i} \right)^5$

**Pipes in Parallel:**
*   $Q_{total} = Q_1 + Q_2 + ...$
*   $h_{f,total} = h_{f1} = h_{f2} = ...$
*   Relationship for equivalent pipe (constant $f$, $L$):
    $D_{eq}^{5/2} = \sum_{i=1}^{n} D_i^{5/2}$ (for same length)
*   Relationship for equivalent pipe (constant $f$, $D$):
    $\frac{1}{\sqrt{L_{eq}}} = \sum_{i=1}^{n} \frac{1}{\sqrt{L_i}}$ (for same diameter)
*   General relation (constant $f$):
    $\frac{D_{eq}^{5/2}}{\sqrt{L_{eq}}} = \sum_{i=1}^{n} \frac{D_i^{5/2}}{\sqrt{L_i}}$

---

### **Practice Questions:**

1.  **Pipes in Series:** Water flows through three pipes in series with the following characteristics:
    *   Pipe 1: $L_1 = 50$ m, $D_1 = 5$ cm, $f_1 = 0.025$
    *   Pipe 2: $L_2 = 80$ m, $D_2 = 7$ cm, $f_2 = 0.022$
    *   Pipe 3: $L_3 = 60$ m, $D_3 = 6$ cm, $f_3 = 0.024$
    If the discharge is $0.01$ m³/s, calculate the total head loss.

2.  **Pipes in Parallel:** Two pipes are connected in parallel between two reservoirs.
    *   Pipe A: $L_A = 200$ m, $D_A = 10$ cm, $f_A = 0.02$
    *   Pipe B: $L_B = 250$ m, $D_B = 12$ cm, $f_B = 0.019$
    If the head loss between the reservoirs is $10$ m, calculate the discharge through each pipe and the total discharge.

3.  **Equivalent Length:** A pipe system consists of 500 m of 15 cm diameter pipe followed by 700 m of 10 cm diameter pipe, connected in series. Assume a constant friction factor $f = 0.02$. Find the equivalent length of a single pipe with a diameter of 12 cm that would have the same head loss.

4.  **Equivalent Diameter:** Two pipes of 10 cm and 15 cm diameter are connected in parallel for a length of 300 m. Assume a constant friction factor $f = 0.02$. Calculate the diameter of a single equivalent pipe of the same length (300 m) that would carry the same total discharge for the same head loss.

5.  **Combined System:** A pipe of 20 cm diameter and 100 m length is followed by a parallel combination of two pipes (Pipe A: 10 cm diameter, 150 m length; Pipe B: 15 cm diameter, 150 m length). This parallel combination is then followed by a pipe of 20 cm diameter and 100 m length. If the friction factor $f=0.02$ for all pipes, calculate the equivalent length of a single pipe of 20 cm diameter that represents the entire system.

---

### **Answers to Practice Questions:**

1.  **Pipes in Series:**
    *   $V_1 = \frac{Q}{A_1} = \frac{0.01}{\pi (0.05)^2 / 4} \approx 5.09$ m/s
    *   $h_{f1} = 0.025 \times \frac{50}{0.05} \times \frac{5.09^2}{2 \times 9.81} \approx 3.27$ m
    *   $V_2 = \frac{Q}{A_2} = \frac{0.01}{\pi (0.07)^2 / 4} \approx 2.60$ m/s
    *   $h_{f2} = 0.022 \times \frac{80}{0.07} \times \frac{2.60^2}{2 \times 9.81} \approx 1.03$ m
    *   $V_3 = \frac{Q}{A_3} = \frac{0.01}{\pi (0.06)^2 / 4} \approx 3.54$ m/s
    *   $h_{f3} = 0.024 \times \frac{60}{0.06} \times \frac{3.54^2}{2 \times 9.81} \approx 1.92$ m
    *   Total head loss $h_{f,total} = 3.27 + 1.03 + 1.92 = 6.22$ m

2.  **Pipes in Parallel:**
    *   $h_f = f \frac{L}{D} \frac{V^2}{2g} \implies V = \sqrt{\frac{2gh_f D}{fL}}$
    *   $Q = A V = \frac{\pi D^2}{4} V = \frac{\pi D^2}{4} \sqrt{\frac{2gh_f D}{fL}} = \sqrt{\frac{\pi^2 D^5 h_f}{8 fL}}$
    *   $Q_A = \sqrt{\frac{\pi^2 (0.1)^5 \times 10}{8 \times 0.02 \times 200}} = \sqrt{\frac{0.00000314 \times 10}{0.032}} \approx \sqrt{0.00098125} \approx 0.0313$ m³/s
    *   $Q_B = \sqrt{\frac{\pi^2 (0.12)^5 \times 10}{8 \times 0.019 \times 250}} = \sqrt{\frac{0.0000135 \times 10}{0.038}} \approx \sqrt{0.00355} \approx 0.0596$ m³/s
    *   Total discharge $Q_{total} = Q_A + Q_B = 0.0313 + 0.0596 = 0.0909$ m³/s

3.  **Equivalent Length:**
    *   $D_{eq} = 12$ cm $= 0.12$ m
    *   $L_{eq} = L_1 \left( \frac{D_{eq}}{D_1} \right)^5 + L_2 \left( \frac{D_{eq}}{D_2} \right)^5$
    *   $L_{eq} = 500 \left( \frac{0.12}{0.15} \right)^5 + 700 \left( \frac{0.12}{0.10} \right)^5$
    *   $L_{eq} = 500 \times (0.8)^5 + 700 \times (1.2)^5$
    *   $L_{eq} = 500 \times 0.32768 + 700 \times 2.48832$
    *   $L_{eq} = 163.84 + 1741.824 = 1905.66$ m

4.  **Equivalent Diameter:**
    *   $L_{eq} = 300$ m
    *   $D_A = 10$ cm $= 0.1$ m, $D_B = 15$ cm $= 0.15$ m
    *   $D_{eq}^{5/2} = D_A^{5/2} + D_B^{5/2}$
    *   $D_{eq}^{5/2} = (0.1)^{5/2} + (0.15)^{5/2} = 0.000003162 + 0.00002335 = 0.000026512$
    *   $D_{eq} = (0.000026512)^{2/5} \approx 0.1175$ m $= 11.75$ cm

5.  **Combined System:**
    *   **Step 1: Equivalent pipe for parallel section (10cm & 15cm, 150m each)**
        *   We found in Question 4 that an equivalent pipe of 11.75 cm diameter and 150 m length is equivalent to this parallel section.
    *   **Step 2: Series calculation with $D_{eq\_total} = 20$ cm**
        *   Pipe 1: $L_1 = 100$ m, $D_1 = 0.2$ m
        *   Equivalent Parallel Pipe: $L_{eq,parallel} = 150$ m, $D_{eq,parallel} = 0.1175$ m
        *   Pipe 2: $L_2 = 100$ m, $D_2 = 0.2$ m
        *   $L_{eq\_total} = L_1 \left( \frac{D_{eq\_total}}{D_1} \right)^5 + L_{eq,parallel} \left( \frac{D_{eq\_total}}{D_{eq,parallel}} \right)^5 + L_2 \left( \frac{D_{eq\_total}}{D_2} \right)^5$
        *   $L_{eq\_total} = 100 \left( \frac{0.2}{0.2} \right)^5 + 150 \left( \frac{0.2}{0.1175} \right)^5 + 100 \left( \frac{0.2}{0.2} \right)^5$
        *   $L_{eq\_total} = 100 \times 1 + 150 \times (1.702)^5 + 100 \times 1$
        *   $L_{eq\_total} = 100 + 150 \times 14.69 + 100$
        *   $L_{eq\_total} = 100 + 2203.5 + 100 = 2403.5$ m

---

### **Important Points to Remember:**

*   **Series:** Flow is the same, head losses add up. Equivalent length is usually calculated for a chosen diameter.
*   **Parallel:** Head losses are the same, flow rates add up. Equivalent diameter or length is calculated based on specific relationships.
*   **Friction Factor (f):** Crucial for accurate calculations. It depends on Reynolds number and pipe roughness. In these examples, a constant $f$ was assumed for simplicity. In real-world scenarios, you'd use Moody charts or Colebrook equation.
*   **Minor Losses:** This module focuses on friction losses. In actual pipe systems, losses due to bends, valves, entrances, exits, etc., also occur and should be accounted for (often using $h_{minor} = K \frac{V^2}{2g}$).
*   **Iterative Solutions:** For complex networks, analytical solutions can be tedious. Numerical methods are often required.
*   **Units:** Be consistent with units throughout your calculations.

---
