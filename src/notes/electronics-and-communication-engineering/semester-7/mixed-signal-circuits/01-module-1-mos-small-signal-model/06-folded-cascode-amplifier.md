---
title: "Folded cascode Amplifier."
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 1: MOS small signal model:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff41f"
status: "completed"
scrapedAt: "2026-05-23T18:08:06.603Z"
---
# MIXED SIGNAL CIRCUITS - Module 1: MOS Small Signal Model

## Topic: Folded Cascode Amplifier

---

### **1. Introduction to Folded Cascode Amplifiers**

The folded cascode amplifier is a versatile and widely used single-stage amplifier topology in mixed-signal circuit design. It offers high gain, good output impedance, and a wide output swing, making it a suitable candidate for various applications. This topology addresses some of the limitations of the traditional cascode amplifier, particularly in terms of output swing.

**Relation to Course Outcomes:**
*   **CO1 (Single Stage Amplifiers):** The folded cascode is a prime example of a single-stage amplifier with specific load characteristics. Understanding its operation directly contributes to this outcome.
*   **CO2 (Current Mirrors):** The folded cascode relies heavily on the performance of current mirrors for biasing and as active loads.

**Key Concepts:**
*   **Cascode Structure:** A fundamental building block where a common-source transistor is stacked on top of a common-gate transistor. This configuration enhances output impedance and gain.
*   **Folding:** The key innovation in the folded cascode is the "folding" of the signal path, allowing the input and output nodes to be at different voltage levels, thereby improving output swing.
*   **Biasing:** Proper biasing of all transistors is crucial for the amplifier's performance.
*   **Active Load:** The folded cascode typically uses current mirrors as active loads to achieve high gain.

**Textbook References:**
*   **Razavi (2/e):** Chapter 5 (CMOS Amplifiers) discusses various amplifier topologies, including the cascode and its variations.
*   **Baker et al.:** Chapter 6 (Common-Source, Common-Gate, and Cascode Amplifiers) provides a foundational understanding of these structures.
*   **Sedra & Smith (6/e):** Chapter 7 (MOS Amplifiers) covers amplifier circuits, including cascode configurations.

---

### **2. Folded Cascode Amplifier Architecture**

The folded cascode amplifier consists of an input differential pair, which is then "folded" by current sources to drive the cascode transistors.

**Basic Structure:**

*   **Input Differential Pair:** Typically a PMOS or NMOS differential pair ($M_1$, $M_2$).
*   **Tail Current Source:** Biases the differential pair.
*   **Folding Current Sources:** These current sources (e.g., $I_{bias1}$, $I_{bias2}$) divert the signal current from the drain of the differential pair towards the cascode transistors.
*   **Cascode Transistors:** These transistors ($M_3$, $M_4$) provide high output impedance and increase gain.
*   **Active Load:** Typically implemented using current mirrors. In a common folded cascode, this would be a PMOS cascode current mirror or a resistive load. For higher gain, an active load using current mirrors is preferred.

**Diagram (Illustrative Example - NMOS Input Pair):**

```
        VDD
         |
      +----+
      |    |
     M5   M6  (Cascode Transistors)
      |    |
    ----- -----
    |   | |   |
    Ibias1 Ibias2 (Folding Current Sources)
    |   | |   |
 M1:D M2:D |   |
    |   | |   |
 M1:G M2:G ----|---- Output Node
    |   |     |
 M1:S M2:S   M7 (Load Transistor)
    |   |     |
   Tail ---+   |
    |     |   |
   M8   M9   M10 (Current Mirrors for Load)
    |     |   |
   GND   GND  GND
```

*   **$M_1, M_2$:** NMOS differential pair.
*   **$M_8$:** Tail current source for the differential pair.
*   **$I_{bias1}, I_{bias2}$:** Folding current sources (often implemented as simple PMOS transistors with appropriate gate biasing).
*   **$M_3, M_4$ (not explicitly shown as separate from load in simple diagram, but conceptually present):** Cascode transistors (in this PMOS input example, these would be PMOS transistors).
*   **$M_5, M_6$:** The actual transistors forming the cascode structure on the PMOS side (or NMOS side if PMOS input pair is used).
*   **$M_7, M_9, M_{10}$:** Transistors forming the active load, often a cascode current mirror.

**Important Note on Input Type:**
The choice of PMOS or NMOS for the input differential pair dictates the polarity of the folding current sources and the type of transistors used for the cascode and load.

*   **NMOS Input Pair:** Requires PMOS transistors for cascode and PMOS current sources for folding. The output node is typically connected to a PMOS load.
*   **PMOS Input Pair:** Requires NMOS transistors for cascode and NMOS current sources for folding. The output node is typically connected to an NMOS load.

**Textbook References:**
*   **Razavi (2/e):** Figure 5.36 illustrates a folded cascode amplifier.
*   **Baker et al.:** Figure 6.31 shows a folded cascode amplifier.
*   **Sedra & Smith (6/e):** Figure 7.43 presents a folded cascode amplifier.

---

### **3. Analysis of Folded Cascode Amplifier (Small-Signal)**

The small-signal analysis is crucial for determining the amplifier's gain, input/output impedances, and bandwidth. We'll use the hybrid-$\pi$ model for MOS transistors.

**Assumptions:**
*   All transistors are in saturation.
*   The circuit is biased properly.
*   We neglect channel-length modulation ($r_o$) initially for simplicity and then reintroduce it.

**Key Parameters to Analyze:**
*   **Voltage Gain ($A_v$)**
*   **Input Resistance ($R_{in}$)**
*   **Output Resistance ($R_{out}$)**

**Let's consider an NMOS input differential pair configuration for analysis (as in Razavi's common example):**

**Circuit Diagram (Simplified for analysis):**

```
        VDD
         |
       -----
       |   |
      M3   M4  (Cascode PMOS)
       |   |
     ----- -----
     |   | |   |
    M5   M6  (Current Sources)
     |   | |   |
  M1:D M2:D   |
     |   | |   |
  M1:G M2:G --o---- Vout
     |   |     |
  M1:S M2:S   M7 (Load PMOS)
     |   |     |
    Tail-----  |
     |       |
    M8       |
     |       |
    GND     GND
```

*   $M_1, M_2$: NMOS input pair
*   $M_8$: Tail current source
*   $M_5, M_6$: PMOS current sources (provide bias current to cascode transistors)
*   $M_3, M_4$: PMOS cascode transistors
*   $M_7$: PMOS load transistor

**Small-Signal Model:**

*   Replace each transistor with its small-signal equivalent circuit.
*   The input voltage is applied differentially to the gates of $M_1$ and $M_2$. Let $v_{in} = v_{g1} - v_{g2}$. For a single-ended analysis, consider $v_{g1} = v_{in}$ and $v_{g2} = 0$.
*   The drains of $M_1$ and $M_2$ are connected to the gates of $M_3$ and $M_4$, respectively.
*   The sources of $M_1$ and $M_2$ are connected to the tail current source $M_8$.
*   The sources of $M_3$ and $M_4$ are connected to the drains of $M_5$ and $M_6$, respectively.
*   The gates of $M_3$ and $M_4$ are driven by the drains of $M_1$ and $M_2$.
*   The sources of $M_5$ and $M_6$ are connected to $V_{DD}$.
*   The drains of $M_3$ and $M_4$ are connected to $V_{DD}$.
*   The load is typically a current mirror formed by $M_7$ and other transistors, or a simple PMOS transistor $M_7$ with its gate biased to provide a constant current. For simplicity here, let's assume $M_7$ acts as a constant current source ($I_{bias2}$ with $r_{o7}$).

**Analysis Steps (Single-Ended):**

1.  **Input Resistance ($R_{in}$):**
    *   $R_{in}$ is determined by the input differential pair.
    *   For a differential input, $R_{in} = 2(r_{o1} || r_{o2} || \frac{1}{g_{m1}} || \frac{1}{g_{m2}})$.
    *   If we consider a single-ended input applied to $M_1$ and $M_2$ biased by a tail current $I_{tail}$, $R_{in}$ at the gate of $M_1$ is approximately $1/g_{m1}$ (assuming symmetric biasing and ideal tail current source).
    *   **Razavi (2/e), Eq. 5.10:** For a differential pair, $R_{in} = 2(r_{o1} || r_{o2} + R_{tail})$, where $R_{tail}$ is the output resistance of the tail current source. If $R_{tail}$ is large, $R_{in} \approx 2(r_{o1} || r_{o2})$.
    *   **Baker et al., Sec. 6.2.1:** Input resistance of a differential pair.
    *   **Sedra & Smith (6/e), Sec. 7.3.2:** Input resistance of a differential amplifier.

2.  **Output Resistance ($R_{out}$):**
    *   The output node is at the drain of $M_3$ (or $M_4$ for the other side).
    *   The output resistance is the impedance seen looking into the drain of $M_3$, with the gate of $M_3$ driven by $M_1$'s drain, and the source of $M_3$ connected to the drain of $M_5$.
    *   $R_{out} \approx (1+g_{m3}r_{o3})(r_{o5} || r_{o1}) + r_{o3}$.
    *   **Simplified expression (Neglecting $r_{o1}$ and assuming $g_{m3}r_{o3} \gg 1$):** $R_{out} \approx g_{m3}r_{o3}r_{o5}$.
    *   This is the cascode effect, significantly increasing the output impedance compared to a simple common-source amplifier.
    *   **Razavi (2/e), Eq. 5.38:** For a cascode, $R_{out} \approx g_{m,cascode} r_{o,cascode} r_{o,common\_source}$.
    *   **Baker et al., Sec. 6.3.2:** Output resistance of a cascode.
    *   **Sedra & Smith (6/e), Sec. 7.4.2:** Output resistance of a cascode.

3.  **Voltage Gain ($A_v$):**
    *   $A_v = \frac{v_{out}}{v_{in}}$
    *   $v_{out} = -i_{d3} R_{load}$
    *   $i_{d3} \approx g_{m3} v_{gs3} + g_{mb3} v_{bs3}$
    *   $v_{gs3}$ is the voltage at the drain of $M_1$.
    *   The current flowing through $M_1$ is $i_{d1} = g_{m1} v_{gs1}$. This current is diverted by $M_5$. The remaining current flows through $M_3$.
    *   **Key Insight:** The differential voltage at the gate of $M_1$ ($v_{gs1}$) causes a current $g_{m1}v_{gs1}$ to flow. This current is steered by $M_5$ and the cascode $M_3$.
    *   Consider the current flowing into the cascode transistor $M_3$. The drain current of $M_1$ is $i_{d1} = g_{m1}v_{gs1}$. This current is split between the path through $M_3$ and the path through $M_5$. However, in a folded cascode, the current sources $M_5$ and $M_6$ essentially "fold" the signal path.
    *   Let's analyze the current path. A small change in $v_{gs1}$ on $M_1$ changes its drain current by $\Delta I = g_{m1}v_{gs1}$. This change in current flows through $M_5$.
    *   The drain current of $M_3$ is approximately the current from $M_5$ minus the current due to the output resistance of $M_5$.
    *   The voltage at the drain of $M_1$ (gate of $M_3$) is $v_{d1}$. The current through $M_3$ is $i_{d3} = g_{m3} v_{gs3} = g_{m3} v_{d1}$.
    *   The current through the load $M_7$ is $I_{bias2}$.
    *   $v_{out} = -i_{d3} R_{out\_load}$, where $R_{out\_load}$ is the resistance seen at the drain of $M_3$, connected to $V_{DD}$. In our simplified case, it's $R_{out}$ of the cascode path connected to $M_7$.
    *   **Simplified gain:** For a single-ended input $v_{in}$ on $M_1$, the drain current of $M_1$ is $g_{m1}v_{in}$. This current flows into the cascode transistor $M_3$.
    *   $v_{out} = - (g_{m1}v_{in}) \times R_{out} || R_{load}$.
    *   $A_v = \frac{v_{out}}{v_{in}} \approx -g_{m1} (R_{out} || R_{load})$.
    *   Where $R_{out}$ is the output resistance of the cascode branch and $R_{load}$ is the output resistance of the load branch. If the load is another cascode current mirror, its output resistance will be high.
    *   **A more precise analysis (referencing textbooks for derivation):**
        *   Gain contribution from the input pair: $g_{m1}$ (driving the cascode gate).
        *   Gain contribution from the cascode: $g_{m3}r_{o3}r_{o5}$.
        *   Load resistance: The output node is connected to the drain of $M_3$, which is connected to the source of $M_5$ (through the current source biasing). This is where the "folding" occurs. The output resistance is the cascode output resistance.
        *   The load is typically a current mirror with high output impedance.
        *   **High-level gain expression:** $A_v \approx - g_{m,input\_pair} \times R_{out\_cascode} \times R_{out\_load}$.
        *   **Razavi (2/e), Eq. 5.39:** $A_v \approx -g_{m1} (g_{m3}r_{o3}r_{o5})$. This assumes the load resistance is very high.
        *   **Baker et al., Sec. 6.3.2:** Gain of a cascode amplifier.
        *   **Sedra & Smith (6/e), Sec. 7.4.2:** Gain of a cascode amplifier.

**Example Calculation:**
Consider an NMOS folded cascode with:
*   $g_{m1} = 10$ mS
*   $g_{m3} = 8$ mS
*   $r_{o1} = 50$ k$\Omega$
*   $r_{o3} = 40$ k$\Omega$
*   $r_{o5} = 60$ k$\Omega$ (for current source $M_5$)

*   **$R_{in}$ (simplified):** $1/g_{m1} = 1/10 \text{ mS} = 100 \Omega$. (If we consider $r_{o1}$, $R_{in} \approx 1/g_{m1} || r_{o1} \approx 100 || 50k \Omega \approx 100 \Omega$).
*   **$R_{out}$ (simplified, output resistance of cascode branch):** $g_{m3}r_{o3}r_{o5} = 8 \text{ mS} \times 40 \text{ k}\Omega \times 60 \text{ k}\Omega = 19.2 \text{ M}\Omega$.
*   **$A_v$ (simplified, assuming high load resistance):** $-g_{m1} R_{out} = -10 \text{ mS} \times 19.2 \text{ M}\Omega = -192$.

**Important Points for Analysis:**
*   The input resistance is dominated by the input pair.
*   The output resistance is significantly boosted by the cascode transistors.
*   The gain is high due to the cascoded structure and active load.
*   The folding current sources ($M_5, M_6$) are critical for biasing and signal steering. Their output resistance contributes to the cascode output impedance.

---

### **4. Folded Cascode Amplifier with Active Load**

For higher gain and to meet the requirement of a single-ended output from a differential input, the load is typically an active load, often a cascode current mirror.

**Active Load Implementation:**

Consider an NMOS input folded cascode. The load could be a PMOS cascode current mirror.

```
        VDD
         |
       -----
       |   |
      M3   M4  (Cascode PMOS)
       |   |
     ----- -----
     |   | |   |
    M5   M6  (Current Sources)
     |   | |   |
  M1:D M2:D   |
     |   | |   |
  M1:G M2:G --o---- Vout
     |   |     |
  M1:S M2:S   M7 (PMOS Load Transistor)
     |   |     |     |
    Tail-----  M9-----
     |       |     |
    M8       M10----
     |       |
    GND     GND
```

*   $M_7, M_9, M_{10}$ form a current mirror providing the load current.
*   $M_7$ acts as the primary load element at the output node.
*   $M_9$ and $M_{10}$ are used to set the gate voltage of $M_7$ to establish the desired bias current and provide a cascode effect for the load.

**Analysis of Active Load:**

*   The output resistance seen by the drain of $M_3$ is the output resistance of the cascode structure formed by $M_3$ and the current source $M_5$, combined with the load.
*   The load resistance is primarily the output resistance of the cascode current mirror.
*   **Output Resistance of a Cascode Current Mirror:** Similar to the cascode amplifier's output resistance, it's high, approximately $g_{m,cascode\_load} r_{o,cascode\_load} r_{o,load\_device}$.
*   **Total Output Resistance ($R_{out}$):** The output resistance of the folded cascode amplifier is the parallel combination of the output resistance of the signal cascode branch (e.g., $M_3, M_5$) and the output resistance of the load branch (e.g., $M_7, M_9, M_{10}$). Since both branches are cascode structures, they will have very high output resistances.
    *   $R_{out} \approx R_{out, signal} || R_{out, load}$
    *   $R_{out, signal} \approx g_{m3}r_{o3}r_{o5}$
    *   $R_{out, load} \approx g_{m9}r_{o9}r_{o7}$ (assuming $M_9$ is the cascode device for the load $M_7$).

*   **Voltage Gain ($A_v$):**
    *   $A_v = -g_{m1} \times (R_{out\_signal} || R_{out\_load})$
    *   Since $R_{out\_signal}$ and $R_{out\_load}$ are both very high, their parallel combination is also very high.
    *   $A_v \approx -g_{m1} R_{out}$, where $R_{out}$ is the very high output impedance of the cascode structure.
    *   **Razavi (2/e):** Discusses the gain of cascode amplifiers and how active loads contribute to high output impedance and gain.
    *   **Baker et al.:** Sec. 6.3.3 on cascode current sources.

**Advantages of Active Load:**
*   **High Output Impedance:** Leads to high voltage gain.
*   **Good Matching:** Current mirrors can be designed to match bias currents effectively.

---

### **5. Designing for Common-Mode Rejection Ratio (CMRR)**

The folded cascode amplifier is a differential amplifier and should ideally reject common-mode signals.

**Factors Affecting CMRR:**
1.  **Tail Current Source Imperfections:** The tail current source ($M_8$) is crucial for common-mode rejection. If its output resistance ($R_{tail}$) is finite, common-mode voltage changes will cause a change in the tail current, leading to a common-mode output voltage.
    *   **CMRR due to tail source:** $CMRR_{tail} \approx g_{m1}R_{tail}$. For high CMRR, $R_{tail}$ must be large. This is achieved using a cascode current source for $M_8$.

2.  **Mismatch in Differential Pair:** Any mismatch between the two sides of the differential pair (e.g., $g_{m1} \neq g_{m2}$) will lead to common-mode gain.
    *   **CMRR due to mismatch:** Higher.

3.  **Load Imperfections:** Mismatches in the load current mirrors can also affect CMRR.

**Analysis of Common-Mode Gain ($A_{cm}$):**
*   For a common-mode input voltage $v_{cm}$ applied to both gates, the tail current source $M_8$ will exhibit a voltage change at its drain due to its finite output resistance $R_{tail}$.
*   If $R_{tail}$ is finite, the tail current will change, and this change will be amplified by the circuit.
*   **Sedra & Smith (6/e), Sec. 7.3.3:** Derives CMRR for a differential amplifier.
*   For a folded cascode, the common-mode gain can be analyzed by considering the voltage changes at the gates of the cascode transistors due to the common-mode input.

**High CMRR Requirement:**
*   **Tail Current Source:** Use a cascode current source for $M_8$ to maximize $R_{tail}$.
*   **Symmetry:** Ensure good matching between the devices in the differential pair and the current mirrors.

**Textbook References:**
*   **Razavi (2/e):** Chapter 5.5 on common-mode rejection.
*   **Sedra & Smith (6/e):** Section 7.3.3 on CMRR.

---

### **6. Output Swing**

The folded cascode is known for its improved output swing compared to the traditional cascode amplifier.

**Factors Limiting Output Swing:**
*   **Drain Voltage of Input Pair ($V_{d1}, V_{d2}$):** The drain of the input pair is connected to the gate of the cascode transistor. This voltage must remain above the threshold voltage for the cascode to operate in saturation. $V_{out} \ge V_{DS,sat,cascode}$.
*   **Source Voltage of Cascode Transistor ($V_{s3}$):** The source of the cascode transistor is connected to the drain of the folding current source.
*   **Output Node Voltage ($V_{out}$):** The output node is at the drain of the cascode transistor. This node is connected to the load.

**Output Swing Calculation:**
*   **Maximum Output Voltage ($V_{out,max}$):**
    *   Occurs when the cascode transistor ($M_3$) is just about to leave saturation.
    *   $V_{out,max} = V_{DD} - V_{DS,sat,M3}$ (if $M_3$ is PMOS, source towards $V_{DD}$).
    *   More precisely, $V_{out,max}$ is limited by the voltage at the drain of the folding current source ($V_{d5}$) and the cascode transistor's saturation condition.
    *   $V_{out,max}$ is often limited by the PMOS current source ($M_5$) leaving saturation: $V_{out,max} \approx V_{DD} - V_{GS5} - V_{DS,sat,M3}$.

*   **Minimum Output Voltage ($V_{out,min}$):**
    *   Occurs when the input pair transistors ($M_1$) are about to leave saturation or when the cascode transistors ($M_3$) are about to leave saturation.
    *   $V_{out,min} = V_{DS,sat,M1} + V_{GS,cascode} + V_{DS,sat,load}$.
    *   A more common limitation is the saturation condition of the cascode transistor.
    *   $V_{out,min} = V_{DS,sat,M1} + V_{GS3} + V_{DS,sat,M3}$ (This isn't quite right, need to be careful with voltage drops).
    *   **Corrected:** $V_{out,min} = V_{DS,sat,M1} + V_{DS,sat,M3}$. This implies the output voltage is the sum of the saturation voltage drops of $M_1$ and $M_3$.
    *   However, the current steering makes it more complex. The voltage at the gate of $M_3$ (drain of $M_1$) must be high enough for $M_3$ to be in saturation.
    *   **Razavi (2/e), Fig. 5.36:** Shows that $V_{out,min} = V_{DS,sat,M1} + V_{DS,sat,M3}$. This assumes a specific biasing.
    *   **Baker et al., Sec. 6.4.2:** Discusses output swing considerations.
    *   **Sedra & Smith (6/e), Sec. 7.4.3:** Discusses output voltage swing.

**Comparison to Traditional Cascode:**
*   In a traditional cascode, the input common-source device's drain is the output node. The output swing is limited by $V_{DD} - V_{DS,sat,common\_source}$ and $V_{DS,sat,cascode} + V_{DS,sat,common\_source}$.
*   In the folded cascode, the input pair is at a different voltage level than the output, allowing for more flexibility in swing.

**To Maximize Swing:**
*   Choose transistors with lower $V_{DS,sat}$ (lower $V_{GS} - V_{th}$).
*   Careful biasing of the folding current sources.

---

### **7. Bandwidth and Frequency Response**

The folded cascode amplifier, like other amplifiers, has a limited bandwidth due to parasitic capacitances.

**Key Capacitances:**
*   Input capacitance at the gate of $M_1/M_2$.
*   Miller capacitance between the input and output of the input pair (not directly applicable as the output of the input pair drives the cascode gate).
*   Capacitance at the drains of $M_1/M_2$ (gates of $M_3/M_4$). This is a significant pole.
*   Capacitance at the output node.
*   Parasitic capacitances of the current sources.

**Dominant Poles:**
*   **First Pole ($p_1$):** Typically at the drains of the input differential pair (gates of the cascode transistors). This pole is caused by the output resistance of the input pair and the capacitance at the drains of $M_1/M_2$.
    *   $p_1 \approx -\frac{1}{R_{out, input\_pair} C_{d1,d2}}$
    *   $R_{out, input\_pair} \approx r_{o1} || r_{o2} + R_{tail}$ (approx.)
    *   $C_{d1,d2}$ includes $C_{gd1} + C_{db1} + C_{gd3} + C_{db3}$ (considering input $M_1$ and cascode $M_3$).

*   **Second Pole ($p_2$):** At the output node. This pole is caused by the output resistance of the amplifier and the capacitance at the output node.
    *   $p_2 \approx -\frac{1}{R_{out} C_{out}}$
    *   $C_{out}$ includes capacitances at the output node, such as $C_{gd3} + C_{db3} + C_{gd7} + C_{db7}$ (where $M_7$ is the load transistor).

**Bandwidth:**
*   The unity-gain bandwidth ($GBW$) is given by $GBW \approx \frac{g_{m1}}{2\pi C_{in}}$ (for unity gain buffer) or related to the dominant pole and bias current.
*   The overall bandwidth is often limited by the first pole ($p_1$), especially if the output resistance is very high.

**Boosting Bandwidth:**
*   **Lowering Input Capacitance:** Use lower $g_m$ input transistors, but this reduces gain.
*   **Lowering Output Resistance:** Difficult to reduce without sacrificing gain.
*   **Reducing Dominant Pole Frequency:** Increase the resistance seen at the pole node or decrease the capacitance.
*   **Cascode Pole Cancellation:** Techniques like feedforward can be used, but are beyond the scope of basic analysis.

**Textbook References:**
*   **Razavi (2/e):** Chapter 5.6 on frequency response.
*   **Baker et al.:** Chapter 6.5 on frequency response.
*   **Sedra & Smith (6/e):** Chapter 7.7 on frequency response.

---

### **8. Biasing the Folded Cascode**

Proper biasing is critical for the folded cascode amplifier to operate correctly and achieve desired performance.

**Key Biasing Currents:**
*   **Tail Current ($I_{tail}$):** Sets the quiescent current for the input differential pair.
*   **Folding Current Sources ($I_{bias1}, I_{bias2}$):** These currents must be set such that the input transistors are in saturation and the cascode transistors are biased appropriately. For symmetrical operation, $I_{bias1} = I_{bias2} = I_{bias}$.
*   **Load Current:** The current in the active load must be set to match the bias current in the cascode branch for maximum output swing and proper operation.

**Biasing Techniques:**
*   **Current Mirrors:** The bias currents are typically generated using current mirrors.
*   **Cascode Current Mirrors:** To achieve high output impedance and better biasing stability, cascode current mirrors are often used for the tail current source and the folding current sources.
*   **Bandgap References:** Often used to generate stable reference currents for the bias circuits.

**Design Considerations:**
*   **Current Mirror Ratio:** The aspect ratios (W/L) of transistors in current mirrors determine the current ratios.
*   **$V_{DS,sat}$ of Biasing Transistors:** Ensure that the transistors used for biasing (especially the folding current sources) are in saturation.
*   **Headroom:** Sufficient voltage headroom is required for the bias transistors.

**Example Biasing Circuit (Simplified):**

```
      VDD
       |
    -----
    |   |
   M11 M12 (Cascode Bias Current Mirror)
    |   |
 ----- -----
 |   | |   |
M13  M14  M15 (Bias Current Sources)
 |   | |   |
M16 --- ---
 |
GND
```
*   $M_{16}$ sets a reference current $I_{ref}$.
*   Current mirrors ($M_{13}, M_{14}, M_{15}$) create the required bias currents ($I_{tail}$, $I_{bias1}$, $I_{bias2}$).
*   Cascode transistors ($M_{11}, M_{12}$) are used to increase the output impedance of the bias current sources, improving stability and CMRR.

**Textbook References:**
*   **Razavi (2/e):** Chapter 5.4 on biasing.
*   **Baker et al.:** Chapter 7 on current mirrors.
*   **Sedra & Smith (6/e):** Chapter 7.6 on Biasing of MOS Amplifiers.

---

### **9. Design Considerations and Trade-offs**

The folded cascode amplifier involves several design trade-offs:

| Parameter           | Improvement Method                                 | Trade-off                                           |
| :------------------ | :------------------------------------------------- | :-------------------------------------------------- |
| **Gain**            | Higher $g_m$ of input pair, cascode $g_m$, larger $r_o$ | Lower speed, higher power, larger area              |
| **Bandwidth**       | Lower capacitance, lower $g_m$ (trade-off with gain) | Reduced gain                                        |
| **Output Swing**    | Lower $V_{DS,sat}$ transistors, careful biasing     | May affect gain or speed                            |
| **Power Consumption** | Lower bias currents                                | Reduced $g_m$, thus reduced gain and speed          |
| **CMRR**            | High output impedance tail source, symmetric design | Increased complexity, potential for common-mode gain |
| **Area**            | Transistor sizing                                  | May affect speed or other parameters                |

**Common Design Goals:**
*   **High Gain:** For amplifiers and buffers.
*   **Good Bandwidth:** For high-speed applications.
*   **Large Output Swing:** For interfacing with subsequent stages or for low-voltage applications.
*   **Low Power Consumption:** For battery-powered devices.
*   **High CMRR:** For noise immunity.

**Example Design Scenario:**
If a high-speed folded cascode is required, one might prioritize lower parasitic capacitances and potentially lower gain to achieve wider bandwidth. If high gain is paramount, then larger transistors with higher $g_m$ and $r_o$ would be used, accepting a lower bandwidth and potentially higher power consumption.

---

### **10. Advantages and Disadvantages**

**Advantages:**
*   **High Voltage Gain:** Due to the cascode structure and active load.
*   **Good Output Swing:** Better than traditional cascode, allowing operation with lower supply voltages.
*   **High Input Impedance:** Determined by the input differential pair.
*   **High Output Impedance:** Provided by the cascode structure.
*   **Single-Ended Output:** From a differential input, simplifying interfacing with subsequent stages.

**Disadvantages:**
*   **Higher Power Consumption:** Compared to simple common-source amplifiers, due to bias currents and cascode transistors.
*   **Complexity:** More transistors than a simple common-source amplifier.
*   **Noise:** Can be a concern due to the number of transistors.
*   **Limited Bandwidth:** Like most high-gain amplifiers, bandwidth can be limited by parasitic capacitances.

---

### **11. Practice Questions and Answers**

**Q1. What is the primary advantage of a folded cascode amplifier over a traditional cascode amplifier in terms of output swing?**
**Answer:** The folded cascode allows the input and output nodes to be at different voltage levels, which generally leads to a wider output voltage swing compared to a traditional cascode where the input and output common-source devices share a common voltage level for their drains.

**Q2. In a folded cascode amplifier using an NMOS input differential pair, what type of transistors are typically used for the cascode devices and the folding current sources?**
**Answer:** PMOS transistors are typically used for the cascode devices and the folding current sources.

**Q3. For high common-mode rejection ratio (CMRR) in a folded cascode amplifier, what aspect of the tail current source is most critical?**
**Answer:** The output resistance ($R_{tail}$) of the tail current source. A high output resistance is crucial. This is typically achieved by using a cascode current source for the tail current.

**Q4. What are the dominant poles that limit the bandwidth of a folded cascode amplifier?**
**Answer:** The dominant poles are typically located at:
    *   The drains of the input differential pair (gates of the cascode transistors).
    *   The output node.

**Q5. If you need to increase the voltage gain of a folded cascode amplifier, what parameters would you primarily adjust?**
**Answer:**
    *   Increase the transconductance ($g_m$) of the input differential pair transistors.
    *   Increase the transconductance ($g_m$) and output resistance ($r_o$) of the cascode transistors.
    *   Increase the output resistance of the active load.

**Q6. Calculate the approximate input resistance of a folded cascode amplifier with an NMOS differential input pair where $g_{m1} = 5$ mS, $r_{o1} = 40$ k$\Omega$, and the tail current source has an output resistance of $R_{tail} = 100$ k$\Omega$. (Assume the input is applied differentially).**
**Answer:**
For a differential input, $R_{in} \approx 2(r_{o1} || r_{o2} + R_{tail})$.
Assuming $r_{o1} = r_{o2} = 40$ k$\Omega$:
$r_{o1} || r_{o2} = \frac{40k \times 40k}{40k + 40k} = 20$ k$\Omega$.
$R_{in} \approx 2(20 \text{ k}\Omega + 100 \text{ k}\Omega) = 2(120 \text{ k}\Omega) = 240$ k$\Omega$.
*(Note: If considering single-ended input and the resistance looking into the gate of $M_1$, it's primarily $1/g_{m1} || r_{o1}$ if the tail source is ideal, which is very low impedance. The question implies differential input resistance.)*

**Q7. If the cascode transistors in a folded cascode amplifier have a transconductance of $g_{m,cascode} = 8$ mS and output resistance of $r_{o,cascode} = 50$ k$\Omega$, and the folding current sources have $r_{o,source} = 70$ k$\Omega$, what is the approximate output resistance of the cascode stage?**
**Answer:**
$R_{out,cascode} \approx g_{m,cascode} \times r_{o,cascode} \times r_{o,source}$
$R_{out,cascode} \approx 8 \text{ mS} \times 50 \text{ k}\Omega \times 70 \text{ k}\Omega$
$R_{out,cascode} \approx 0.008 \times 50000 \times 70000 \Omega$
$R_{out,cascode} \approx 28 \text{ M}\Omega$.

---

### **12. Important Points to Remember**

*   **Folding:** The key characteristic that differentiates it from a standard cascode, enabling different voltage level operation.
*   **NMOS vs. PMOS Input:** The choice affects the polarity of bias currents and devices used.
*   **High Gain:** Achieved through cascoding and active loads.
*   **Good Output Swing:** A significant advantage over traditional cascodes.
*   **CMRR:** Heavily dependent on the quality of the tail current source.
*   **Bandwidth Limitation:** Poles at the input pair drains and output node are critical.
*   **Biasing:** Requires careful design of current mirrors for all bias currents.

---

### **13. Alignment with Course Outcomes**

*   **CO1 (Single Stage Amplifiers):** This entire topic focuses on a specific, important single-stage amplifier topology, its analysis, and design considerations.
*   **CO2 (Differential Amplifiers & Current Mirrors):** The folded cascode is fundamentally a differential amplifier. Its analysis and operation heavily rely on understanding current mirrors for biasing and active loads.
*   **CO3 (Two Stage OPAMP):** While the folded cascode is a single stage, it's often used as the input or gain stage in two-stage op-amps, or as a building block within more complex amplifier designs. Its high gain and output impedance make it a good candidate.
*   **Knowledge Levels (K2):** The notes cover explanations of the structure, operation, advantages, and disadvantages (K2). Analysis steps are described, which supports K2 understanding.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
