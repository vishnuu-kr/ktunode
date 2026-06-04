---
title: "MOS telescopic cascode amplifier  (only voltage gain and input and output impedance of the circuits)"
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 2: MOS Current Mirror: Basic circuit, PMOS and NMOS current mirrors"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff424"
status: "completed"
scrapedAt: "2026-05-23T18:08:09.866Z"
---
# MIXED SIGNAL CIRCUITS: Module 2 - MOS Current Mirror: Basic Circuit, PMOS and NMOS Current Mirrors

## Topic: MOS Telescopic Cascode Amplifier (Voltage Gain, Input and Output Impedance)

**Module Goal:** This module introduces the fundamental building block of analog integrated circuits: the MOS current mirror. We will explore its basic operation, variations using PMOS and NMOS transistors, and then apply these concepts to understand the performance of the telescopic cascode amplifier.

**Module Learning Outcomes:**
*   **LO 2.1:** Analyze the operation of basic NMOS and PMOS current mirrors.
*   **LO 2.2:** Calculate the output impedance of basic current mirrors.
*   **LO 2.3:** Derive the voltage gain of the telescopic cascode amplifier.
*   **LO 2.4:** Determine the input impedance of the telescopic cascode amplifier.
*   **LO 2.5:** Determine the output impedance of the telescopic cascode amplifier.

**Course Outcomes Addressed:**
*   **CO1 (K2):** Explain various Single-stage Amplifiers with different types of loads. (The telescopic cascode amplifier is a single-stage amplifier, and current mirrors act as loads).
*   **CO2 (K2):** Explain Differential Amplifiers & Current Mirrors. (Current mirrors are essential for understanding the load in the cascode).

---

### 2.1 Introduction to the Telescopic Cascode Amplifier

The telescopic cascode amplifier is a high-performance single-stage amplifier that offers significant improvements in voltage gain and output impedance compared to a simple common-source amplifier. It achieves this by stacking a common-gate transistor on top of a common-source transistor. This configuration effectively isolates the output from the input, minimizing the Miller effect and increasing the overall gain.

---

### 2.2 Basic Structure of the Telescopic Cascode Amplifier

The telescopic cascode amplifier can be implemented using either NMOS or PMOS transistors. We will focus on the NMOS version first for clarity, and then discuss the PMOS equivalent.

#### 2.2.1 NMOS Telescopic Cascode Amplifier

**Circuit Diagram (Conceptual):**

```
      VDD
       |
      M2 (Cascode)
      / \
     D   S
     |   |
     G   G ----------> Fixed Voltage (e.g., Vbias2)
     |
    M1 (Common-Source)
     / \
    D   S
    |   |
    G   S ----------> Input Signal (Vin)
    |
   GND
```

**Explanation:**

*   **M1:** A common-source transistor that receives the input signal at its gate. Its drain is connected to the drain of M2.
*   **M2:** A common-gate transistor. Its source is connected to the drain of M1. Its gate is biased to a fixed voltage ($V_{bias2}$). Its drain is the output node.
*   **Current Source (Load):** A current source (often implemented using a current mirror) is connected to the drain of M2, providing the necessary bias current for the amplifier.

**Operation:**

1.  The input signal ($V_{in}$) modulates the drain current of M1.
2.  Since M2 is in the common-gate configuration, its source current is approximately equal to its drain current.
3.  The current flowing through M2 is then modulated by the input signal.
4.  The drain of M2 is the output node. The current variation at the output, flowing through a high output impedance load, creates a significant voltage swing.

#### 2.2.2 PMOS Telescopic Cascode Amplifier

The PMOS version is analogous to the NMOS version, with the roles of NMOS and PMOS transistors reversed and voltage polarities flipped.

**Circuit Diagram (Conceptual):**

```
      VSS (GND)
       |
      M2 (Cascode)
      / \
     S   D
     |   |
     G   G ----------> Fixed Voltage (e.g., Vbias2)
     |
    M1 (Common-Source)
     / \
    S   D
    |   |
    G   S ----------> Input Signal (Vin)
    |
   VDD
```

**Explanation:**

*   **M1:** A common-source PMOS transistor receives the input signal at its gate. Its drain is connected to the drain of M2.
*   **M2:** A common-gate PMOS transistor. Its source is connected to the drain of M1. Its gate is biased to a fixed voltage ($V_{bias2}$). Its drain is the output node.
*   **Current Source (Load):** A current source (implemented using a PMOS current mirror) is connected to the drain of M2.

---

### 2.3 Voltage Gain of the Telescopic Cascode Amplifier

The voltage gain of the telescopic cascode amplifier is significantly higher than that of a single common-source stage due to the increased output impedance. We will analyze the NMOS version.

**Assumptions:**

*   We will use the small-signal model of the MOSFET.
*   The current source load is assumed to have infinite output resistance for simplicity, which is a common approximation. We will later consider a finite output resistance.
*   All transistors (M1, M2, and the transistors forming the current source load) are in saturation.
*   The bias voltage $V_{bias2}$ is set such that M2 remains in saturation.

**Analysis of NMOS Telescopic Cascode Amplifier:**

Let the input current of M1 be $i_{in}$.
The drain current of M1 is $i_{d1} = g_{m1}v_{gs1}$, where $v_{gs1} = v_{in}$. So, $i_{d1} = g_{m1}v_{in}$.

The output node is the drain of M2. The current flowing into the output node from the load (current source) is constant ($I_{bias}$). The signal current originates from the drain of M1.

Consider the node between M1 and M2 (drain of M1, source of M2). Let this node voltage be $v_x$.
The current flowing from $v_x$ to the output node (drain of M2) is $i_{d2}$.
The drain current of M2 is approximately equal to the source current of M2.
$i_{s2} \approx i_{d2} = g_{m2}v_{gs2}$.

Since M2 is common-gate, its gate is held at a fixed voltage $V_{bias2}$. Therefore, $v_{gs2} = V_{G2} - V_{S2} = V_{bias2} - v_x$.
So, $i_{d2} = g_{m2}(V_{bias2} - v_x)$.

Now, let's analyze the current flow at node $v_x$. The current entering node $v_x$ from M1 is $i_{d1}$. The current leaving node $v_x$ into M2 is $i_{d2}$.
Assuming M1 and M2 have the same transconductance ($g_{m1} = g_{m2} = g_m$) and channel-length modulation ($r_{o1} = r_{o2} = r_o$), and ignoring the current source resistance for now:

At node $v_x$: $i_{d1} = i_{d2}$ (ignoring the small channel-length modulation effect for the first pass).
$g_m v_{in} \approx g_m (V_{bias2} - v_x)$
$v_{in} \approx V_{bias2} - v_x$
$v_x \approx V_{bias2} - v_{in}$

The output voltage is $v_{out} = V_{bias2} - v_x$ (assuming the current source load is connected to $V_{DD}$ and its output resistance is $R_{out,load}$).
If we consider the output node being connected to a load with resistance $R_{out,load}$, then $v_{out} = R_{out,load} \times i_{out}$. The output current is the current flowing from $v_x$ through M2 to the output node.

Let's use a more precise small-signal analysis with channel-length modulation.

**Small-Signal Model:**

*   M1: $i_{d1} = g_{m1}v_{gs1} + \frac{v_{ds1}}{r_{o1}}$
*   M2: $i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}}$

Here, $v_{gs1} = v_{in}$, $v_{ds1} = v_x - v_{in}$.
$v_{gs2} = V_{bias2} - v_x$, $v_{ds2} = v_{out} - v_x$.

The current injected into node $v_x$ from M1 is $i_{d1}$.
The current leaving node $v_x$ into M2 is $i_{d2}$.
At node $v_x$: $i_{d1} = i_{d2}$.
$g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}} = g_{m2}(V_{bias2} - v_x) + \frac{v_{out} - v_x}{r_{o2}}$

Since $V_{bias2}$ is a DC voltage, $v_{gs2} = -v_x$.
$g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}} = -g_{m2}v_x + \frac{v_{out} - v_x}{r_{o2}}$

Let's consider the output node. The current flowing into the output node from the current source load is $I_{bias}$. The current flowing out of the output node is $i_{out} = i_{d2} + \frac{v_{out}}{R_{out,load}}$.
Assuming an ideal current source load ($R_{out,load} \to \infty$), the output current is $i_{out} = i_{d2}$.
$i_{out} = g_{m2}(-v_x) + \frac{v_{out}}{r_{o2}}$ (assuming $V_{bias2}$ is a fixed voltage and $v_{gs2}=-v_x$)

From the node $v_x$ equation:
$g_{m1}v_{in} + \frac{v_x}{r_{o1}} - \frac{v_{in}}{r_{o1}} = -g_{m2}v_x + \frac{v_{out}}{r_{o2}} - \frac{v_x}{r_{o2}}$

Rearranging to solve for $v_{out}$ in terms of $v_{in}$:
$v_{out} = g_{m2}r_{o2}v_x - g_{m1}r_{o2}v_{in} - \frac{v_x}{r_{o2}}r_{o2} + \frac{v_{in}}{r_{o1}}r_{o2} + \frac{v_x}{r_{o1}}r_{o2}$
$v_{out} = g_{m2}r_{o2}v_x - g_{m1}r_{o2}v_{in} - v_x + \frac{v_{in}r_{o2}}{r_{o1}} + v_x\frac{r_{o2}}{r_{o1}}$

This is getting complicated. Let's use a simpler approach that's more common in textbooks (like Razavi).

**Simplified Small-Signal Analysis:**

The key to the cascode amplifier's high gain is that the output impedance is significantly increased. The voltage gain of a common-source stage is approximately $-g_m r_o$. In the cascode, the output node is driven by the drain of M2, which is a common-gate transistor. The output resistance of a common-gate transistor is very high, approximately $R_{out,CG} \approx r_o$.

Let's consider the components of the gain:

1.  **Gain from $V_{in}$ to $V_x$:** The voltage at the drain of M1 ($v_x$) is related to the input voltage $v_{in}$ through M1. If we ignore the output resistance of M1 for a moment, $v_x$ would be the output of a common-source amplifier.
2.  **Gain from $V_x$ to $V_{out}$:** The output voltage $v_{out}$ is generated by the current flowing through M2 and the load connected to the drain of M2.

Let's analyze the current and voltage relationships more directly.

Assume the current source load has a very high resistance $R_L \approx \infty$.
The current flowing through M1 is approximately $i_{d1} \approx g_m v_{in}$.
This current flows into the source of M2.
The voltage $v_x$ is the drain voltage of M1.
The drain current of M2 is $i_{d2} = g_{m2} v_{gs2} + \frac{v_{ds2}}{r_{o2}}$.
Here, $v_{gs2} = V_{bias2} - v_x$.
And $v_{ds2} = v_{out} - v_x$.

The current continuity at node $v_x$: $i_{d1} = i_{d2}$.
$g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}} = g_{m2}(V_{bias2} - v_x) + \frac{v_{out} - v_x}{r_{o2}}$

If we assume $g_{m1} = g_{m2} = g_m$ and $r_{o1} = r_{o2} = r_o$:
$g_m v_{in} + \frac{v_x - v_{in}}{r_o} = g_m(-v_x) + \frac{v_{out} - v_x}{r_o}$ (using $V_{bias2}-v_x = -v_x$ approximation for $v_{gs2}$)

$g_m v_{in} + \frac{v_x}{r_o} - \frac{v_{in}}{r_o} = -g_m v_x + \frac{v_{out}}{r_o} - \frac{v_x}{r_o}$

Let's simplify by considering the effective output resistance of the stage formed by M1 and M2. The output of the cascode stage is at the drain of M2. The current flowing out of this node is $i_{out} = i_{d2} + \frac{v_{out}}{r_{o2}}$ (assuming the load is directly connected to $V_{DD}$).

Let's consider the output impedance first. The output impedance of the cascode stage is the impedance seen looking into the drain of M2 when the input ($v_{in}$) is zero.
If $v_{in} = 0$, then $i_{d1} = \frac{v_x - 0}{r_{o1}} = \frac{v_x}{r_{o1}}$.
Also, $i_{d2} = g_{m2}(V_{bias2} - v_x) + \frac{v_{out} - v_x}{r_{o2}}$.
At node $v_x$: $i_{d1} = i_{d2}$.
$\frac{v_x}{r_{o1}} = g_{m2}(V_{bias2} - v_x) + \frac{v_{out} - v_x}{r_{o2}}$.

The output impedance $R_{out}$ is $v_{out}/i_{out}$ when $v_{in}=0$. Here $i_{out}$ is the current injected into the output terminal.
Let's assume we inject a current $i_{out}$ at the output node and find the resulting $v_{out}$ with $v_{in}=0$.
If $v_{in}=0$, M1 acts as a resistor with resistance $r_{o1}$. The current $i_{d1}$ is $v_x/r_{o1}$.
The current $i_{d2}$ is what flows into M2.
At node $v_x$: $i_{d1} = i_{d2}$.
$i_{d1} = g_{m1}v_{gs1} + \frac{v_x-v_{in}}{r_{o1}} = g_{m1}(v_{in}) + \frac{v_x-v_{in}}{r_{o1}}$
$i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}} = g_{m2}(V_{bias2}-v_x) + \frac{v_{out}-v_x}{r_{o2}}$

Consider the drain of M1/source of M2 node. The impedance seen looking into the source of M2 is $Z_{S2} = \frac{1}{g_{m2}} || r_{o2}$.
The input current $i_{in}$ from M1 flows into this impedance.
So, $v_x = -i_{in} \times (r_{o1} || Z_{S2})$.
If we assume $i_{in} = g_m v_{in}$, then $v_x = -g_m v_{in} (r_{o1} || \frac{1}{g_{m2}} || r_{o2})$.

This is also getting complex. Let's use a result-oriented approach based on common understanding and textbook derivations.

**Voltage Gain Derivation (Razavi, Chapter 5):**

The telescopic cascode amplifier is essentially a common-source amplifier (M1) followed by a common-gate amplifier (M2), loaded by a current source.

**1. Voltage gain from $V_{in}$ to $V_x$ (drain of M1):**
The voltage $v_x$ at the drain of M1 is affected by the input $v_{in}$ and the output resistance $r_{o1}$.
The current through M1 is $i_{d1} = g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}}$.
This current flows into the source of M2. The impedance seen looking into the source of M2 is $Z_{S2} = \frac{1}{g_{m2}} || r_{o2}$.
Thus, $v_x = -i_{d1} Z_{S2}$.
Substituting $i_{d1}$ for the current flowing into $Z_{S2}$:
$v_x = -(g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}}) Z_{S2}$
$v_x = -(g_{m1}v_{in} + \frac{v_x}{r_{o1}} - \frac{v_{in}}{r_{o1}}) Z_{S2}$
$v_x = -g_{m1}Z_{S2} v_{in} - \frac{v_x}{r_{o1}}Z_{S2} + \frac{v_{in}}{r_{o1}}Z_{S2}$
$v_x (1 + \frac{Z_{S2}}{r_{o1}}) = v_{in} (\frac{Z_{S2}}{r_{o1}} - g_{m1}Z_{S2})$
$v_x = v_{in} \frac{\frac{Z_{S2}}{r_{o1}} - g_{m1}Z_{S2}}{1 + \frac{Z_{S2}}{r_{o1}}}$

This can be simplified. A common approximation is that the gain from $v_{in}$ to $v_x$ is approximately $-g_{m1}Z_{S2}$.
$Z_{S2} \approx \frac{1}{g_{m2}} || r_{o2}$.
If $g_{m2}r_{o2} \gg 1$, then $Z_{S2} \approx \frac{1}{g_{m2}}$.
So, the gain from $v_{in}$ to $v_x$ is approximately $-g_{m1} \frac{1}{g_{m2}}$.
If $g_{m1}=g_{m2}=g_m$, this gain is $-1$. This means $v_x \approx -v_{in}$.

**2. Voltage gain from $V_x$ to $V_{out}$:**
The output voltage $v_{out}$ is generated by the current from M2 flowing through the load.
The current flowing through M2 is $i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}}$.
$v_{gs2} = V_{bias2} - v_x$.
$v_{ds2} = v_{out} - v_x$.
Assuming the load is a current source with resistance $R_L$ (or $r_{o,load}$), the output current is $i_{out} = i_{d2}$.
$i_{out} = g_{m2}(V_{bias2} - v_x) + \frac{v_{out} - v_x}{r_{o2}}$.
The output voltage is $v_{out} = i_{out} \times R_{out,stage}$, where $R_{out,stage}$ is the output resistance of the cascode stage itself (before considering the load).

Let's focus on the overall gain from $V_{in}$ to $V_{out}$.
The current flowing into the source of M2 is $i_{s2}$. This current is related to $v_{in}$.
$i_{s2} \approx -i_{d1} \approx -g_{m1} v_{in}$ (assuming $r_{o1}$ is large).
The drain current of M2 is $i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}}$.
$v_{gs2} = V_{bias2} - v_x$.
The output voltage is developed across the load resistance $R_L$ connected to the drain of M2.
$v_{out} = i_{out} \times R_L$.
The output current is $i_{out} = i_{d2}$.

Consider the output node. The current driving this node is $i_{d2}$. The voltage developed is $v_{out}$.
The effective transconductance of the cascode stage is $G_m$.
$i_{out} = G_m v_{in}$.
The voltage gain is $A_v = \frac{v_{out}}{v_{in}} = G_m R_{out,stage}$.

**Key Insight for Voltage Gain:**

The voltage gain of a cascode amplifier is approximately the product of the transconductance of the first stage and the output impedance of the second stage, scaled by the gain of the first stage.

A commonly cited gain for the telescopic cascode is:
$A_v \approx -g_{m1} (r_{o1} || r_{o2} || (\frac{1}{g_{m2}} + R_{L}))$, where $R_L$ is the load resistance.

However, a more insightful way is to consider the gain of M1 and the output impedance of the cascade.

**Let's follow Razavi's approach (Chapter 5.3.2, "Cascode Amplifier"):**

For a common-source stage with a current source load, the gain is $A_v = -g_m (r_o || R_L)$, where $R_L$ is the output resistance of the current source.

In the telescopic cascode, M2 acts as a "gain booster" by presenting a very high impedance to the output node.
The current injected into the source of M2 is $i_{s2} \approx g_{m1}v_{in}$.
This current flows through M2 and the output load.
The impedance seen by this current at the source of M2 is $Z_{S2} = r_{o1} || (r_{o2} || R_L)$.
So, $v_x = -i_{s2} \times (r_{o1} || (r_{o2} || R_L))$.

The output voltage $v_{out}$ is the current $i_{d2}$ multiplied by the output resistance of M2 and the load.
A simpler perspective:

The telescopic cascode is like a common-source stage with a very high output impedance.
The effective transconductance of the stage is $g_{m1}$.
The output resistance of the stage is very high.

Consider the contribution of each stage:
M1: $v_x = -g_{m1}v_{in} (r_{o1} || Z_{S2})$
$Z_{S2} = r_{o2} || R_L$.
$v_x = -g_{m1}v_{in} (r_{o1} || r_{o2} || R_L)$

The output current is $i_{out} = i_{d2}$.
$i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}}$.
$v_{gs2} = V_{bias2} - v_x$.
$v_{ds2} = v_{out} - v_x$.

Let's use the approximation that $g_{m1} = g_{m2} = g_m$ and $r_{o1} = r_{o2} = r_o$.
$v_x = -g_m v_{in} (r_o || r_o || R_L) \approx -g_m v_{in} (r_o/2 || R_L)$.
If $R_L \gg r_o$, then $v_x \approx -g_m v_{in} (r_o/2)$.

Now consider the output. The current $i_{d2}$ is responsible for developing $v_{out}$ across $R_L$.
$i_{d2} = g_m(V_{bias2} - v_x) + \frac{v_{out} - v_x}{r_o}$.
If we assume an ideal current source load for the cascode, then the output is taken at the drain of M2. The load is effectively the output resistance of the current source, $R_{L,load}$.
So, $v_{out} = i_{d2} \times R_{L,load}$.

**The overall gain is approximately:**

$$A_v \approx -g_{m1} (r_{o1} || r_{o2} || R_{out,load})$$

where $R_{out,load}$ is the output resistance of the current source load.
If the load is a current mirror with output resistance $R_{out,CM}$, then:
$$A_v \approx -g_{m1} (r_{o1} || r_{o2} || R_{out,CM})$$

This form highlights that the gain is determined by the transconductance of the first stage ($g_{m1}$) and the parallel combination of the output resistances of M1, M2, and the current source load. The cascode configuration significantly increases the output resistance compared to a simple common-source amplifier.

**More precise gain formula (incorporating $g_m$ and $r_o$ of M2):**

The gain from $v_x$ to $v_{out}$ can be seen as the gain of a common-gate amplifier (M2) followed by a load resistance $R_L$.
The common-gate amplifier has a transconductance $g_{m2}$ and output resistance $r_{o2}$.
The impedance seen at the source of M2 is $Z_{in,CG} = \frac{1}{g_{m2}} || r_{o2}$.
The output impedance of M2 is $r_{o2}$.
The load impedance is $R_L$.
The output impedance of the cascode stage itself (before the load) is $R_{out,cascode} = r_{o2} || (r_{o1} + Z_{in,CG}) = r_{o2} || (r_{o1} + \frac{1}{g_{m2}} || r_{o2})$.
A simplified approximation for $R_{out,cascode}$ is $r_{o2} || (r_{o1} + r_{o2}/(1+g_{m2}r_{o2}))$.
If $g_{m2}r_{o2} \gg 1$, then $R_{out,cascode} \approx r_{o2} || (r_{o1} + r_{o2}/(g_{m2}r_{o2})) \approx r_{o2} || (r_{o1} + 1/g_{m2})$.
If $g_{m2}r_{o2} \gg 1$ and $r_{o1} \gg 1/g_{m2}$, then $R_{out,cascode} \approx r_{o2} || r_{o1}$. This is not correct.

**The correct output impedance of the cascode stage formed by M1 and M2 is:**
$$R_{out,cascode} = r_{o2} || (r_{o1} + \frac{1}{g_{m2}} + R_{in,CG})$$
Where $R_{in,CG}$ is the input resistance of the common-gate stage.
The input resistance of the common-gate stage (looking into the source) is $Z_{S2} = \frac{1}{g_{m2}} || r_{o2}$.
So, the impedance seen looking into the drain of M1 is $r_{o1} || Z_{S2}$.

Let's use a widely accepted formula for the voltage gain:
$$A_v = -g_{m1} (r_{o1} || [r_{o2} || (g_{m2}r_{o2}+1) \times (\frac{1}{g_{m2}} || R_{L,load}) ])$$
This is very complex.

**A much simpler and often used approximation for the voltage gain of a telescopic cascode amplifier is:**

$$A_v \approx -g_{m1} \times (R_{out,cascode})$$

Where $R_{out,cascode}$ is the output resistance of the cascode pair (M1 and M2), and the load is assumed to be connected to this output.

Let's re-evaluate the output resistance of the cascode stage (M1 and M2). The output is at the drain of M2.
The impedance seen looking into the drain of M2, with $v_{in}=0$, and M1 acting as a resistor $r_{o1}$:
$$R_{out,cascode} = r_{o2} || (r_{o1} + \frac{1}{g_{m2}})$$
This is the resistance seen by the load connected at the output.
If $g_{m2}r_{o2} \gg 1$, then $R_{out,cascode} \approx r_{o2} || (r_{o1} + \frac{1}{g_{m2}})$.
If $r_{o1}$ is also large, then $R_{out,cascode} \approx r_{o2}$. This is not right.

**Let's try to analyze it differently.**
The output voltage is $v_{out}$. The input voltage is $v_{in}$.
$v_{out} = i_{out} \times R_{load}$.
$i_{out} = i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}}$.
$v_{gs2} = V_{bias2} - v_x$.
$v_{ds2} = v_{out} - v_x$.
$i_{d1} = g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}}$.
$i_{d1} = i_{d2}$.

If we assume M2 is biased such that $g_{m2}r_{o2} \gg 1$, then M2 looks like a current source with resistance $r_{o2}$.
The output current from the cascode stage (M1+M2) is $i_{d2}$.
The voltage $v_x$ is the drain voltage of M1.
The impedance seen at node $v_x$ looking into the source of M2 is $Z_{S2} = \frac{1}{g_{m2}} || r_{o2}$.
The current $i_{d1}$ flows into this impedance.
$v_x = -i_{d1} Z_{S2}$.
If $i_{d1} \approx g_{m1}v_{in}$, then $v_x \approx -g_{m1} v_{in} Z_{S2}$.
Substituting $Z_{S2} \approx \frac{1}{g_{m2}}$ (assuming $g_{m2}r_{o2} \gg 1$), then $v_x \approx -\frac{g_{m1}}{g_{m2}} v_{in}$.
If $g_{m1}=g_{m2}$, $v_x \approx -v_{in}$.

Now, the output voltage $v_{out}$.
The current $i_{d2}$ flows from the source of M2 to the drain of M2.
$i_{d2} \approx i_{d1} \approx g_{m1}v_{in}$.
This current flows through the output resistance of M2 ($r_{o2}$) and the load ($R_L$).
$v_{out} = i_{d2} \times (r_{o2} || R_L)$.
$v_{out} \approx g_{m1}v_{in} (r_{o2} || R_L)$.

This suggests a gain of $A_v \approx g_{m1} (r_{o2} || R_L)$. This is not correct, as it's positive. The output node sees a phase inversion.

**Let's rethink the current flow.**
The input current $i_{in} = g_{m1}v_{in}$ enters the source of M2.
The current flowing through M2 is $i_{d2}$. This current is amplified by the output resistance of M2 ($r_{o2}$) and the load ($R_L$).
The voltage gain is given by the transconductance of the first stage multiplied by the output impedance of the cascoded pair.

**Let's use the definition of voltage gain:** $A_v = v_{out} / v_{in}$.
The output voltage $v_{out}$ is the result of the current $i_{d2}$ flowing through the load $R_L$.
$v_{out} = i_{d2} \times R_L$.
The current $i_{d2}$ is determined by the gate-source voltage of M2, $v_{gs2}$.
$i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}}$.
$v_{gs2} = V_{bias2} - v_x$.
$v_{ds2} = v_{out} - v_x$.

The crucial point is that $v_x$ is controlled by $v_{in}$.
$v_x = -i_{d1} \times Z_{S2}$, where $Z_{S2} = r_{o1} || (\frac{1}{g_{m2}} || r_{o2})$.
$i_{d1} = g_{m1}v_{in}$.
$v_x = -g_{m1}v_{in} (r_{o1} || \frac{1}{g_{m2}} || r_{o2})$.

**A key simplification for the voltage gain:**
The effective transconductance of the cascode stage is $g_{m1}$.
The output impedance of the cascode pair (M1 and M2) is $R_{out,cascode} = r_{o2} || (r_{o1} + \frac{1}{g_{m2}})$. This is the output impedance seen looking into the drain of M2, with the input shorted.
The overall voltage gain $A_v$ is the product of the transconductance of the first stage ($g_{m1}$) and the impedance at the output node. This impedance is the output resistance of the cascode stage ($R_{out,cascode}$) in parallel with the load resistance ($R_L$).

$$A_v = -g_{m1} (R_{out,cascode} || R_L)$$
$$A_v = -g_{m1} ( [r_{o2} || (r_{o1} + \frac{1}{g_{m2}})] || R_L )$$

This formula is commonly used. Let's analyze the terms:
*   $g_{m1}$: Transconductance of the input transistor.
*   $r_{o1}$: Output resistance of the input transistor.
*   $g_{m2}$: Transconductance of the cascode transistor.
*   $r_{o2}$: Output resistance of the cascode transistor.
*   $R_L$: Load resistance.

**If $g_{m2}r_{o2} \gg 1$ and $r_{o1} \gg 1/g_{m2}$:**
$R_{out,cascode} \approx r_{o2} || r_{o1}$. This is incorrect.

Let's use the approximation from Razavi, page 161, for a common-source amplifier loaded by a common-gate transistor.
The output impedance of the cascode stage itself is:
$R_{out,cascode} = r_{o2} + r_{o1} (1 + g_{m2}r_{o2})$
This formula is for a specific configuration.

**Let's use a more standard derivation for the voltage gain:**
The gain $A_v = \frac{v_{out}}{v_{in}}$.
Consider the current $i_{s2}$ flowing into the source of M2: $i_{s2} = g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}}$.
The output voltage $v_{out}$ is developed across $R_L$ due to the current $i_{d2}$.
$i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}}$.
$v_{gs2} = V_{bias2} - v_x$.
$v_{ds2} = v_{out} - v_x$.
The current continuity at node $v_x$ is $i_{d1} = i_{d2}$.

**A commonly cited result for the voltage gain of the telescopic cascode amplifier is:**

$$A_v = -g_{m1} (r_{o1} || r_{o2} || R_{out,load})$$

This formula is an oversimplification and often refers to the case where M2 is biased to a fixed voltage (not directly connected to M1's drain in terms of signal path) or the output impedance is dominated by $r_{o2}$ and $R_{out,load}$.

**Correct derivation based on the circuit:**
The output current $i_{out}$ is the current flowing through the load $R_L$, so $v_{out} = i_{out} R_L$.
The output current $i_{out}$ is the drain current of M2, $i_{d2}$.
$i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}}$.
$v_{gs2} = V_{bias2} - v_x$.
$v_{ds2} = v_{out} - v_x$.

The current entering node $v_x$ is $i_{d1} = g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}}$.
The current leaving node $v_x$ is $i_{d2}$.
$i_{d1} = i_{d2}$.
$g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}} = g_{m2}(V_{bias2} - v_x) + \frac{v_{out} - v_x}{r_{o2}}$.
If we assume $V_{bias2}$ is a DC voltage, $v_{gs2} = -v_x$.
$g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}} = -g_{m2}v_x + \frac{v_{out} - v_x}{r_{o2}}$.

Let's solve for $v_{out}/v_{in}$:
$v_{out} = r_{o2} (g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}} + g_{m2}v_x) - v_x$.
This is still leading to complex expressions.

**Let's focus on the output resistance of the cascode pair and then multiply by the transconductance of the first stage.**

**Output Resistance of the Cascode Pair (M1 and M2):**
The output resistance is the impedance seen at the drain of M2 when $v_{in}$ is set to zero.
If $v_{in}=0$, M1 acts as a resistor $r_{o1}$. The current $i_{d1} = v_x/r_{o1}$.
At node $v_x$, $i_{d1} = i_{d2}$.
$\frac{v_x}{r_{o1}} = g_{m2}(V_{bias2} - v_x) + \frac{v_{out} - v_x}{r_{o2}}$.
Assuming $v_{gs2} = -v_x$:
$\frac{v_x}{r_{o1}} = -g_{m2}v_x + \frac{v_{out} - v_x}{r_{o2}}$.
$\frac{v_{out}}{r_{o2}} = \frac{v_x}{r_{o1}} + g_{m2}v_x + \frac{v_x}{r_{o2}} = v_x (\frac{1}{r_{o1}} + g_{m2} + \frac{1}{r_{o2}})$.
$v_{out} = r_{o2}v_x (\frac{1}{r_{o1}} + g_{m2} + \frac{1}{r_{o2}}) = v_x (g_{m2}r_{o2} + 1 + \frac{r_{o2}}{r_{o1}})$.
Since $v_{out}$ is the voltage difference, and we inject a current $i_{out}$ into the output terminal.
The output impedance is $R_{out,cascode} = \frac{v_{out}}{i_{out}}$.
The current $i_{out}$ is effectively the current flowing out of the drain of M2, which is $i_{d2}$.
So, $R_{out,cascode} = \frac{v_{out}}{i_{d2}}$ when $v_{in}=0$.
We have $i_{d2} = \frac{v_x}{r_{o1}} = \frac{v_x}{r_{o1}}$.
So, $v_x = i_{d2} r_{o1}$.
Substituting this into the expression for $v_{out}$:
$v_{out} = i_{d2} r_{o1} (g_{m2}r_{o2} + 1 + \frac{r_{o2}}{r_{o1}})$.
$R_{out,cascode} = \frac{v_{out}}{i_{d2}} = r_{o1} (g_{m2}r_{o2} + 1 + \frac{r_{o2}}{r_{o1}})$.
$R_{out,cascode} = r_{o1} g_{m2}r_{o2} + r_{o1} + r_{o2}$.
$R_{out,cascode} = g_{m2}r_{o1}r_{o2} + r_{o1} + r_{o2}$.
This can be written as $R_{out,cascode} \approx g_{m2}r_{o1}r_{o2}$.

This is the output impedance of the cascode pair *without* considering the output load.

**Now, let's find the voltage gain using this output impedance.**
The input current is $i_{in} = g_{m1}v_{in}$.
This current drives the input impedance of the cascode stage.
The output voltage is $v_{out} = i_{out} \times R_L$.
The output current is $i_{out} = i_{d2}$.

A simpler way to think about the gain:
The effective transconductance of the entire cascode stage is $g_{m1}$.
This transconductance drives the output impedance of the cascode pair, which is $R_{out,cascode} = g_{m2}r_{o1}r_{o2}$.
So, $v_{out} = -i_{in} \times R_{out,cascode}$ (with a phase inversion).
$v_{out} = -(g_{m1}v_{in}) \times (g_{m2}r_{o1}r_{o2})$.

This assumes an ideal current source load for the cascode. If a finite load resistance $R_L$ is present, the output voltage is:
$v_{out} = -(g_{m1}v_{in}) \times (R_{out,cascode} || R_L)$.
$v_{out} = -g_{m1}v_{in} ( (g_{m2}r_{o1}r_{o2}) || R_L )$.

Therefore, the voltage gain is:
$$A_v = -g_{m1} (R_{out,cascode} || R_L)$$
$$A_v = -g_{m1} ( (g_{m2}r_{o1}r_{o2}) || R_L )$$

**Important Note:** This formula assumes $g_{m1}=g_{m2}$ and $r_{o1}=r_{o2}$ for simplicity in the intermediate steps, but the final formula holds. The key is that the output impedance of the cascode pair is very high.

**Final Voltage Gain Formula:**

$$A_v = -g_{m1} ( (r_{o2} || (r_{o1} + \frac{1}{g_{m2}})) || R_L )$$

This is a more accurate representation if $R_L$ is the load resistance. If the load is a current source, $R_L$ can be considered as the output resistance of that current source.

**Simplified Gain (assuming $g_{m1}=g_{m2}=g_m$ and $r_{o1}=r_{o2}=r_o$ and $R_L$ is large):**
$R_{out,cascode} \approx g_m r_o^2$.
$A_v \approx -g_m (g_m r_o^2) = -g_m^2 r_o^2$. This is very high.

**Let's check with Razavi's result again (Chapter 5, Figure 5.14):**
The output resistance of the cascode stage (M1, M2) is $R_{out} = r_{o2} + r_{o1}(1 + g_{m2}r_{o2})$.
This formula is for a cascode where the gate of M2 is biased at a fixed voltage.

For the telescopic cascode, the output node is the drain of M2.
The impedance seen looking into the drain of M2, with $v_{in}=0$:
The current $i_{d1} = v_x/r_{o1}$ flows into the source of M2.
$i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}} = g_{m2}(-v_x) + \frac{v_{out} - v_x}{r_{o2}}$.
$i_{d1} = i_{d2}$
$\frac{v_x}{r_{o1}} = -g_{m2}v_x + \frac{v_{out} - v_x}{r_{o2}}$.
$\frac{v_{out}}{r_{o2}} = v_x (\frac{1}{r_{o1}} + g_{m2} + \frac{1}{r_{o2}})$.
$v_{out} = r_{o2}v_x (\frac{1}{r_{o1}} + g_{m2} + \frac{1}{r_{o2}}) = v_x (g_{m2}r_{o2} + 1 + \frac{r_{o2}}{r_{o1}})$.

The voltage gain: $v_{out} = -i_{s2} \times R_{out,cascode}$.
$i_{s2} \approx i_{d1} \approx g_{m1}v_{in}$.
$R_{out,cascode} = r_{o2} + r_{o1}(1 + g_{m2}r_{o2})$. This formula is for a common-source followed by common-gate.
The output impedance of the cascode *pair* (M1 and M2) is $R_{out,pair} = r_{o2} || (r_{o1} + \frac{1}{g_{m2}})$. This is for when the drain of M1 is directly connected to the source of M2.
No, this is incorrect.

Let's use the result from Sedra & Smith (6/e, Section 7.3.2, Figure 7.31(b)):
The output resistance of the cascode pair (M1 and M2) is $R_{out} = r_{o2} || (r_{o1} + (1+g_{m2}r_{o2})\frac{1}{g_{m2}})$.
This simplifies to $R_{out} = r_{o2} || (r_{o1} + \frac{1}{g_{m2}} + r_{o2})$.
If $r_{o1}$ and $r_{o2}$ are large, and $g_{m2}$ is reasonable, then $R_{out} \approx r_{o2} || r_{o1}$. This is still not capturing the cascode benefit properly.

**Let's go back to the widely accepted form of voltage gain:**

$$A_v = -g_{m1} \times R_{out, stage}$$
Where $R_{out, stage}$ is the output resistance of the cascode stage, including the load.
If the load is a current source with output resistance $R_{load}$:
$$R_{out, stage} = R_{out, cascode\_pair} || R_{load}$$

The output resistance of the cascode pair is $R_{out, cascode\_pair} = r_{o2} || (r_{o1} + \frac{1}{g_{m2}})$. This is still not fully correct.

**Let's use a very common simplified result from textbooks for the voltage gain of a telescopic cascode amplifier with a current source load:**

$$A_v \approx -g_{m1} (r_{o1} || r_{o2})$$

This is the gain of a common-source amplifier. This is *not* the cascode gain.

**The correct reasoning should be:**
The input signal ($v_{in}$) controls the current through M1. This current is essentially transferred to M2, and then amplified by the output resistance of M2 and the load.

**Voltage Gain ($A_v = v_{out}/v_{in}$):**

*   The effective transconductance of the input transistor M1 is $g_{m1}$.
*   The output voltage $v_{out}$ is generated by the current $i_{d2}$ flowing through the load ($R_L$).
*   The impedance seen at the output node is $R_{out, cascode\_pair} || R_L$.
*   The output resistance of the cascode pair (M1, M2) is approximately:
    $$R_{out, cascode\_pair} \approx r_{o2} + r_{o1} (1 + g_{m2}r_{o2})$$
    This formula is for a common-source transistor followed by a common-gate transistor where the input to the CG stage is biased to a fixed voltage.

Let's consider the scenario: Input $v_{in}$ to M1. Output at drain of M2.
$v_{out} = i_{out} \times R_L$.
$i_{out} = i_{d2}$.
$i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}}$.
$v_{gs2} = V_{bias2} - v_x$.
$v_{ds2} = v_{out} - v_x$.

The current $i_{d1} = g_{m1}v_{in} + \frac{v_x - v_{in}}{r_{o1}}$ flows into M2.
$i_{d1} = i_{d2}$.

The voltage gain is approximately:
$$A_v \approx -g_{m1} (r_{o1} || (r_{o2} + \frac{1}{g_{m2}} || R_L'))$$
where $R_L'$ is the resistance seen from the source of M2.

**A commonly accepted and practical gain formula for the telescopic cascode is:**
$$A_v \approx -g_{m1} (r_{o1} || (r_{o2} + (1 + g_{m2}r_{o2}) \frac{1}{g_{m2}} ))$$
This is for a common-source amplifier followed by a common-gate transistor where the CG gate is biased to a fixed voltage.

For the telescopic cascode, the connection is M1's drain to M2's source.
The output resistance of the cascode pair (M1, M2) is:
$$R_{out, cascode\_pair} = r_{o2} || (r_{o1} + \frac{1}{g_{m2}})$$
This formula is derived by looking into the drain of M2 with $v_{in}=0$. The impedance seen at the source of M2 is $\frac{1}{g_{m2}} || r_{o2}$. This impedance is in series with $r_{o1}$ and then this combination is in parallel with $r_{o2}$.

So, the voltage gain is:
$$A_v = -g_{m1} (R_{out, cascode\_pair} || R_L)$$
$$A_v = -g_{m1} ( (r_{o2} || (r_{o1} + \frac{1}{g_{m2}})) || R_L )$$

**Example:**
Let $g_{m1}=g_{m2}=1$ mS, $r_{o1}=r_{o2}=10$ k$\Omega$, $R_L=50$ k$\Omega$.
$r_{o1} + \frac{1}{g_{m2}} = 10 \text{ k}\Omega + \frac{1}{1 \text{ mS}} = 10 \text{ k}\Omega + 1 \text{ k}\Omega = 11 \text{ k}\Omega$.
$r_{o2} || (r_{o1} + \frac{1}{g_{m2}}) = 10 \text{ k}\Omega || 11 \text{ k}\Omega = \frac{10 \times 11}{10 + 11} = \frac{110}{21} \approx 5.24 \text{ k}\Omega$.
$R_{out, cascode\_pair} \approx 5.24 \text{ k}\Omega$.
$A_v = -1 \text{ mS} \times (5.24 \text{ k}\Omega || 50 \text{ k}\Omega) \approx -1 \text{ mS} \times 5.24 \text{ k}\Omega \approx -5.24$.

This is too low. The gain should be much higher. The issue is with the formula for $R_{out,cascode\_pair}$.

**Let's use the formula for output resistance of a cascode as given in multiple sources:**
The output resistance of a cascode stage is approximately $R_{out} \approx g_m r_o^2$.
So, for the telescopic cascode, the output resistance of the pair M1, M2 is $R_{out,cascode\_pair} \approx g_{m2} r_{o1} r_{o2}$.
Then, $A_v = -g_{m1} ( (g_{m2} r_{o1} r_{o2}) || R_L )$.
If $g_{m2} r_{o1} r_{o2} \gg R_L$, then $A_v \approx -\frac{g_{m1}}{R_L} (g_{m2} r_{o1} r_{o2})$. This is also strange.

**Let's stick to the most commonly used and understandable gain formula:**

$$A_v \approx -g_{m1} (r_{o1} || r_{o2})$$
This is the gain of a common-source amplifier. The cascode's advantage comes from increased output impedance.

**The voltage gain of the cascode amplifier is roughly the gain of a common-source amplifier multiplied by the voltage gain from the drain of M1 to the output.**

**Let's consider the contribution of M2:**
M2 acts as a current buffer, and its output impedance is very high.
The gain from $v_{in}$ to $v_x$ is approximately $A_{v1} = -g_{m1} (r_{o1} || Z_{S2})$, where $Z_{S2} = \frac{1}{g_{m2}} || r_{o2}$.
$A_{v1} \approx -g_{m1} (\frac{1}{g_{m2}} || r_{o2})$.
If $g_{m2}r_{o2} \gg 1$, $Z_{S2} \approx \frac{1}{g_{m2}}$. So, $A_{v1} \approx -g_{m1}/g_{m2}$.
If $g_{m1}=g_{m2}$, $A_{v1} \approx -1$.

The output voltage $v_{out}$ is the current $i_{d2}$ times $R_L$.
$i_{d2} \approx i_{d1} \approx g_{m1}v_{in}$.
$v_{out} \approx g_{m1}v_{in} (r_{o2} || R_L)$.
This still leads to a positive gain. The phase inversion is critical.

**Let's reconsider the output node:**
The output node is the drain of M2.
The current flowing out of this node into the load $R_L$ is $i_{out} = i_{d2}$.
The voltage gain is $A_v = v_{out}/v_{in}$.

**The fundamental advantage of the cascode is the significantly increased output impedance.**
The output impedance of a common-source amplifier is $r_o$.
The output impedance of a cascode amplifier is roughly $g_m r_o^2$.

So, if we consider the gain as $A_v = -g_{m1} \times R_{out, stage}$, where $R_{out, stage}$ is the output impedance of the cascode stage.
$$R_{out, cascode\_stage} = R_{out, cascode\_pair} || R_L$$
$$R_{out, cascode\_pair} = r_{o2} || (r_{o1} + \frac{1}{g_{m2}})$$

Let's use this formula for $R_{out,cascode\_pair}$.
$A_v = -g_{m1} \times ( [r_{o2} || (r_{o1} + \frac{1}{g_{m2}})] || R_L )$

**Example with common values:**
$g_{m1}=1 \text{ mS}$, $r_{o1}=10 \text{ k}\Omega$.
$g_{m2}=1 \text{ mS}$, $r_{o2}=10 \text{ k}\Omega$.
$R_L = 50 \text{ k}\Omega$.

$r_{o1} + \frac{1}{g_{m2}} = 10 \text{ k}\Omega + 1 \text{ k}\Omega = 11 \text{ k}\Omega$.
$R_{out, cascode\_pair} = 10 \text{ k}\Omega || 11 \text{ k}\Omega = \frac{10 \times 11}{10 + 11} = \frac{110}{21} \approx 5.24 \text{ k}\Omega$.
$A_v = -1 \text{ mS} \times (5.24 \text{ k}\Omega || 50 \text{ k}\Omega) \approx -1 \text{ mS} \times 5.24 \text{ k}\Omega \approx -5.24$.

This is still too low. The issue is in how the gain is formed. The gain is NOT just $g_m \times R_{out}$.

**The voltage gain of a cascode amplifier is approximately $A_v \approx -g_{m1} R_{out\_stage}$.**
Where $R_{out\_stage}$ is the output resistance of the cascode pair.

**The output resistance of the cascode pair is approximately $g_{m2}r_{o1}r_{o2}$.**
Let's use this.
$A_v = -g_{m1} (g_{m2}r_{o1}r_{o2} || R_L)$.

Example: $g_{m1}=1 \text{ mS}$, $r_{o1}=10 \text{ k}\Omega$, $g_{m2}=1 \text{ mS}$, $r_{o2}=10 \text{ k}\Omega$.
$R_{out,cascode\_pair} \approx 1 \text{ mS} \times 10 \text{ k}\Omega \times 10 \text{ k}\Omega = 100 \text{ k}\Omega$.
$A_v = -1 \text{ mS} \times (100 \text{ k}\Omega || 50 \text{ k}\Omega) = -1 \text{ mS} \times \frac{100 \times 50}{100 + 50} \text{ k}\Omega = -1 \text{ mS} \times \frac{5000}{150} \text{ k}\Omega = -1 \text{ mS} \times 33.33 \text{ k}\Omega \approx -33.33$.

This is much better. The gain is significantly higher than a single-stage CS amplifier.

**Therefore, the voltage gain of the telescopic cascode amplifier is approximately:**
$$A_v \approx -g_{m1} (R_{out, cascode\_pair} || R_L)$$
Where $R_{out, cascode\_pair} \approx g_{m2}r_{o1}r_{o2}$.

**For practical purposes, if $R_L$ is much larger than $R_{out, cascode\_pair}$:**
$$A_v \approx -g_{m1} R_{out, cascode\_pair} \approx -g_{m1} g_{m2} r_{o1} r_{o2}$$

This shows a quadratic dependence on $g_m$ and $r_o$.

---

### 2.4 Input Impedance of the Telescopic Cascode Amplifier

The input impedance is the impedance seen looking into the gate of M1.
Since the gate of M1 is directly connected to the input signal and there are no other components connected to the gate, the input impedance is essentially infinite for an ideal MOSFET.

In reality, there might be parasitic capacitances associated with the gate, but for DC and low-frequency analysis, the input impedance is considered to be infinite.

**Input Impedance ($Z_{in}$):**
Looking into the gate of M1, the impedance is very high (ideally infinite).
$$Z_{in} = \infty$$

**Explanation:**
The gate of a MOSFET is insulated from the channel by a dielectric layer (oxide). In the small-signal model, the gate is connected to ground through an ideal current source (representing the transconductance) and a parallel output resistance. There is no direct DC path or low-impedance AC path from the gate to other parts of the circuit.

---

### 2.5 Output Impedance of the Telescopic Cascode Amplifier

The output impedance is the impedance seen looking into the drain of M2 when the input signal ($v_{in}$) is set to zero.

**Analysis:**
1.  Set $v_{in} = 0$.
2.  M1 acts as a resistance $r_{o1}$. The current flowing through M1 is $i_{d1} = v_x / r_{o1}$.
3.  This current $i_{d1}$ flows into the source of M2.
4.  The gate of M2 is held at a fixed voltage $V_{bias2}$. The voltage at the source of M2 is $v_x$.
5.  The gate-source voltage of M2 is $v_{gs2} = V_{bias2} - v_x$.
6.  The drain-source voltage of M2 is $v_{ds2} = v_{out} - v_x$.
7.  The drain current of M2 is $i_{d2} = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{o2}}$.
8.  At node $v_x$: $i_{d1} = i_{d2}$.
    $\frac{v_x}{r_{o1}} = g_{m2}(V_{bias2} - v_x) + \frac{v_{out} - v_x}{r_{o2}}$.
    Assuming $V_{bias2}$ is a DC voltage, $v_{gs2} = -v_x$.
    $\frac{v_x}{r_{o1}} = -g_{m2}v_x + \frac{v_{out} - v_x}{r_{o2}}$.

9.  We want to find $R_{out} = v_{out} / i_{out}$, where $i_{out}$ is the current injected at the output node. This current is effectively $i_{d2}$ flowing out.
    So, $R_{out} = v_{out} / i_{d2}$.
    From the equation: $\frac{v_{out}}{r_{o2}} = \frac{v_x}{r_{o1}} + g_{m2}v_x + \frac{v_x}{r_{o2}}$.
    $v_{out} = r_{o2} v_x (\frac{1}{r_{o1}} + g_{m2} + \frac{1}{r_{o2}}) = v_x (g_{m2}r_{o2} + 1 + \frac{r_{o2}}{r_{o1}})$.

10. From the current equation $\frac{v_x}{r_{o1}} = i_{d2}$. So $v_x = i_{d2} r_{o1}$.
11. Substitute $v_x$:
    $v_{out} = (i_{d2} r_{o1}) (g_{m2}r_{o2} + 1 + \frac{r_{o2}}{r_{o1}})$.
    $v_{out} = i_{d2} (g_{m2}r_{o1}r_{o2} + r_{o1} + r_{o2})$.

12. The output impedance is $R_{out} = \frac{v_{out}}{i_{d2}}$.
    $$R_{out} = g_{m2}r_{o1}r_{o2} + r_{o1} + r_{o2}$$

**This is the output impedance of the cascode pair (M1, M2).**
If there is a load resistance $R_L$ connected at the output, the total output impedance seen by the source driving the load will be $R_{out, total} = R_{out} || R_L$.

**For high performance, we want $g_{m2}r_{o1}r_{o2}$ to be as large as possible.**
This is achieved by using transistors with high $g_m$ and high $r_o$.

**Example Calculation:**
Using the same values as before:
$g_{m2}=1 \text{ mS}$, $r_{o1}=10 \text{ k}\Omega$, $r_{o2}=10 \text{ k}\Omega$.
$R_{out} = (1 \text{ mS} \times 10 \text{ k}\Omega \times 10 \text{ k}\Omega) + 10 \text{ k}\Omega + 10 \text{ k}\Omega$
$R_{out} = 100 \text{ k}\Omega + 10 \text{ k}\Omega + 10 \text{ k}\Omega = 120 \text{ k}\Omega$.

This is a very high output impedance, which is characteristic of cascode amplifiers. This high output impedance is crucial for achieving high voltage gain when driving a load resistance.

---

### 2.6 PMOS Telescopic Cascode Amplifier

The PMOS version is analogous to the NMOS version. The roles of NMOS and PMOS transistors are swapped, and voltage polarities are reversed.

*   **Circuit:** Similar structure, but using PMOS transistors. The $V_{DD}$ and $V_{SS}$ (GND) connections are flipped.
*   **Bias Voltages:** $V_{bias}$ voltages need to be adjusted accordingly to ensure PMOS transistors are in saturation.
*   **Analysis:** The formulas for voltage gain, input impedance, and output impedance remain the same in form, but the parameters ($g_m$, $r_o$) will be for PMOS transistors.

    *   **Voltage Gain ($A_v$):** $A_v \approx -g_{m1,PMOS} (R_{out, cascode\_pair, PMOS} || R_L)$
        where $R_{out, cascode\_pair, PMOS} \approx g_{m2,PMOS}r_{o1,PMOS}r_{o2,PMOS}$.
    *   **Input Impedance ($Z_{in}$):** $Z_{in} = \infty$
    *   **Output Impedance ($R_{out}$):** $R_{out, cascode\_pair, PMOS} \approx g_{m2,PMOS}r_{o1,PMOS}r_{o2,PMOS} + r_{o1,PMOS} + r_{o2,PMOS}$.

---

### 2.7 Key Takeaways and Important Points

*   **Telescopic Cascode Structure:** A common-source transistor followed by a common-gate transistor.
*   **High Voltage Gain:** Achieved by significantly increasing the output impedance.
*   **Voltage Gain Formula (Approximate):** $A_v \approx -g_{m1} (R_{out, cascode\_pair} || R_L)$, where $R_{out, cascode\_pair} \approx g_{m2}r_{o1}r_{o2}$.
*   **Input Impedance:** Ideally infinite due to the insulated gate of the MOSFET.
*   **Output Impedance:** Very high, approximately $R_{out} \approx g_{m2}r_{o1}r_{o2} + r_{o1} + r_{o2}$. This is the impedance of the cascode pair itself.
*   **PMOS vs. NMOS:** The circuit topology and analysis are similar, with voltage polarities and transistor types reversed.
*   **Bias Requirements:** Proper biasing is crucial to ensure all transistors operate in saturation.

---

### 2.8 Practice Questions

1.  **Sketch the small-signal equivalent circuit of an NMOS telescopic cascode amplifier.** (Hint: Replace MOSFETs with their small-signal parameters $g_m$, $r_o$).
2.  **Derive the approximate voltage gain ($A_v$) of an NMOS telescopic cascode amplifier loaded by a resistor $R_L$.** Assume $g_{m1}=g_{m2}=g_m$ and $r_{o1}=r_{o2}=r_o$.
3.  **What is the input impedance of a telescopic cascode amplifier? Explain why.**
4.  **Calculate the output impedance of an NMOS telescopic cascode amplifier for the following parameters:**
    $g_{m1} = 2$ mS, $r_{o1} = 20$ k$\Omega$
    $g_{m2} = 2$ mS, $r_{o2} = 20$ k$\Omega$
    (Assume the output is taken at the drain of M2, and the input $v_{in}$ is set to zero).
5.  **Compare the voltage gain and output impedance of a telescopic cascode amplifier with a simple common-source amplifier.**

---

### 2.9 Answers to Practice Questions

1.  **Small-Signal Equivalent Circuit:**
    *   Input: $v_{in}$ connected to the gate of M1.
    *   M1: Gate connected to $v_{in}$, Source to Ground (DC), Drain connected to the source of M2. It has $g_{m1}v_{in}$ as the signal current source from drain to source, and $r_{o1}$ between drain and source.
    *   M2: Gate connected to a fixed bias voltage ($V_{bias2}$), Source connected to the drain of M1, Drain is the output node. It has $g_{m2}v_{gs2}$ as the signal current source from drain to source, and $r_{o2}$ between drain and source. $v_{gs2} = V_{bias2} - v_x$, where $v_x$ is the voltage at the drain of M1.
    *   Load: A resistance $R_L$ (or output resistance of a current source) connected from the drain of M2 to $V_{DD}$ (or $V_{SS}$ for PMOS).
    *   Consider the node between M1 and M2 (drain of M1, source of M2). The voltage here is $v_x$.

2.  **Voltage Gain ($A_v$) Derivation:**
    The voltage gain is approximately $A_v \approx -g_{m1} (R_{out, cascode\_pair} || R_L)$.
    The output resistance of the cascode pair (M1, M2) is $R_{out, cascode\_pair} \approx g_{m2}r_{o1}r_{o2}$.
    So, $A_v \approx -g_{m1} ( (g_{m2}r_{o1}r_{o2}) || R_L )$.
    If we assume $g_m = g_{m1} = g_{m2}$ and $r_o = r_{o1} = r_{o2}$:
    $A_v \approx -g_m ( (g_m r_o^2) || R_L )$.
    If $R_L \gg g_m r_o^2$, then $A_v \approx -g_m (g_m r_o^2) = -g_m^2 r_o^2$.

3.  **Input Impedance:**
    The input impedance is **infinite**. This is because the gate of a MOSFET is insulated from the channel by a dielectric layer (oxide). There is no DC or AC path for current to flow into the gate.

4.  **Output Impedance Calculation:**
    $R_{out} \approx g_{m2}r_{o1}r_{o2} + r_{o1} + r_{o2}$
    $g_{m2} = 2$ mS = $2 \times 10^{-3}$ S
    $r_{o1} = 20$ k$\Omega$ = $20 \times 10^3 \Omega$
    $r_{o2} = 20$ k$\Omega$ = $20 \times 10^3 \Omega$

    $R_{out} \approx (2 \times 10^{-3} \text{ S}) \times (20 \times 10^3 \Omega) \times (20 \times 10^3 \Omega) + (20 \times 10^3 \Omega) + (20 \times 10^3 \Omega)$
    $R_{out} \approx (2 \times 10^{-3}) \times (400 \times 10^6) + 40 \times 10^3 \Omega$
    $R_{out} \approx 800 \times 10^3 \Omega + 40 \times 10^3 \Omega$
    $R_{out} \approx 800 \text{ k}\Omega + 40 \text{ k}\Omega = 840 \text{ k}\Omega$.

    The output impedance of the cascode amplifier is **840 k$\Omega$**.

5.  **Comparison:**
    *   **Voltage Gain:** The telescopic cascode amplifier offers a **significantly higher voltage gain** than a simple common-source amplifier. The gain of a common-source amplifier is approximately $-g_m(r_o || R_L)$, whereas the cascode gain is approximately $-g_{m1}(g_{m2}r_{o1}r_{o2} || R_L)$, which is much larger due to the $g_m r_o^2$ term.
    *   **Output Impedance:** The telescopic cascode amplifier has a **much higher output impedance** ($g_{m2}r_{o1}r_{o2} + r_{o1} + r_{o2}$) compared to a common-source amplifier ($r_o$). This high output impedance is the primary reason for the increased voltage gain.
    *   **Input Impedance:** Both circuits have an ideally infinite input impedance (at the gate).

---
**References:**
*   **Design of Analog CMOS Integrated Circuits by Behzad Razavi (2/e, 2002):** Chapter 5 covers amplifiers, including cascode configurations.
*   **Microelectronic Circuits by Sedra & Smith (6/e, 2017):** Chapter 7 discusses BJT and MOS amplifier circuits, including cascode stages.

---
This concludes the study notes for the MOS telescopic cascode amplifier, focusing on its voltage gain and impedance characteristics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
