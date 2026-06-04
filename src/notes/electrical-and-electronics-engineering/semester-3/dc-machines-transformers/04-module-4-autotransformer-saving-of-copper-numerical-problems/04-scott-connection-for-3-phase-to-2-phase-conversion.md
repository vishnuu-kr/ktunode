---
title: "Scott connection for 3-phase to 2-phase conversion"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 4: Autotransformer – saving of copper – numerical problems"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b35"
status: "completed"
scrapedAt: "2026-05-23T16:12:28.859Z"
---
# Module 4: Autotransformer – Saving of Copper – Numerical Problems
## Topic: Scott Connection for 3-Phase to 2-Phase Conversion

This topic focuses on a specialized application of transformers, the Scott connection, which is crucial for converting three-phase power into two-phase power. While not directly about autotransformers, it's often discussed in proximity due to its transformer principles and practical applications, aligning with the broader scope of transformers in the syllabus.

---

### 1. Introduction to Polyphase Systems and the Need for Phase Conversion

*   **Polyphase Systems:** Modern power systems predominantly use three-phase AC power due to its efficiency in generation, transmission, and utilization. Advantages include:
    *   Constant power delivery (smoother torque for motors).
    *   Efficient use of conductor material for transmission.
    *   Self-starting capability of three-phase induction motors.
*   **Two-Phase Systems:** While less common than three-phase, two-phase power is still utilized in specific applications, particularly for:
    *   Some older industrial equipment.
    *   Certain types of control systems.
    *   Specific welding equipment.
    *   Specialized motor drives requiring quadrature voltage control.
*   **The Need for Conversion:** When a three-phase supply is available, but a two-phase load needs to be operated, a phase conversion method is necessary. The Scott connection provides an elegant solution for this.

---

### 2. The Scott Connection: Principle and Setup

The Scott connection utilizes two single-phase transformers, specifically designed to achieve the conversion. These transformers are characterized by a specific winding arrangement and tapping points.

#### 2.1. Transformer Requirements:

*   **Main Transformer:** This transformer has a primary winding connected across two phases of the three-phase supply and a secondary winding that provides the voltage for one phase of the two-phase output.
*   **Teaser Transformer:** This transformer has a primary winding connected between the third phase of the three-phase supply and the midpoint of the main transformer's primary winding. Its secondary winding provides the voltage for the second phase of the two-phase output.

#### 2.2. Winding Arrangement:

*   **Primary Sides:**
    *   The primary winding of the **main transformer** is connected to two phases of the three-phase supply (e.g., R and Y).
    *   The primary winding of the **teaser transformer** is connected between the third phase of the three-phase supply (e.g., B) and the **midpoint** of the main transformer's primary winding.
*   **Secondary Sides:**
    *   The secondary windings of both transformers are connected in series to form the two-phase output.
    *   The secondary of the main transformer is typically rated to provide the full voltage of one phase of the two-phase system.
    *   The secondary of the teaser transformer is designed with a specific tapping (usually 86.6% of the main secondary voltage) to ensure the two output phases are in quadrature and have equal magnitudes.

#### 2.3. Voltage and Phase Relationships:

*   Let the three-phase supply voltages be $V_R$, $V_Y$, and $V_B$, with a phase difference of 120 degrees.
*   Let the line voltage be $V_L$.
*   **Main Transformer Primary:** Connected across $V_{RY}$. The voltage across it is $V_L$.
*   **Teaser Transformer Primary:** Connected between phase B and the midpoint of the main primary. This means the voltage across the teaser primary is the phasor difference between $V_B$ and the midpoint voltage.
    *   The voltage at the midpoint of the main transformer's primary is the average of $V_R$ and $V_Y$.
    *   In a balanced three-phase system, $V_R + V_Y + V_B = 0$.
    *   Therefore, $V_R + V_Y = -V_B$.
    *   The midpoint voltage is $\frac{V_R + V_Y}{2} = \frac{-V_B}{2}$.
    *   The voltage across the teaser primary is $V_B - (\frac{-V_B}{2}) = V_B + \frac{V_B}{2} = \frac{3}{2}V_B$.
    *   Since $V_B$ is typically taken as the reference phase for calculation, its magnitude is $V_L/\sqrt{3}$ with a phase angle. The voltage across the teaser primary is $\frac{3}{2} \times \frac{V_L}{\sqrt{3}} = \frac{\sqrt{3}}{2} V_L = 0.866 V_L$.
*   **Secondary Voltages:**
    *   If the secondary winding of the main transformer has $N_2$ turns and the primary has $N_1$ turns, the secondary voltage $V_{2\phi1}$ is approximately $V_L \frac{N_2}{N_1}$.
    *   The secondary winding of the teaser transformer is designed with a tapping such that its induced voltage, $V_{2\phi2}$, is $0.866 \times V_{2\phi1}$ and is in quadrature with $V_{2\phi1}$.

#### 2.4. Vector Diagram:

*   A vector diagram is crucial for understanding the phase relationships.
*   Represent the three-phase line voltages ($V_{RY}$, $V_{YB}$, $V_{BR}$) or phase voltages ($V_R$, $V_Y$, $V_B$) as phasors.
*   Show the connection of the main transformer primary across two phases.
*   Illustrate the connection of the teaser transformer primary to the third phase and the midpoint of the main primary.
*   Show the output secondary voltages and their quadrature relationship.

**Example:**
Consider a 3-phase supply with line voltage $V_L$.
*   Main transformer primary across R-Y. Voltage $V_{RY} = V_L$.
*   Teaser transformer primary connected to B and the midpoint of R-Y. The voltage across teaser primary is $\frac{\sqrt{3}}{2}V_L$ and leads $V_B$ by 90 degrees (or lags depending on polarity and connection).
*   If the main transformer has a turns ratio $a = N_1/N_2$, the secondary voltage $V_{2\phi1} = V_L/a$.
*   The teaser transformer has a primary voltage of $0.866 V_L$. To get a secondary voltage $V_{2\phi2}$ equal in magnitude to $V_{2\phi1}$, its turns ratio $a' = (0.866V_L) / (V_L/a) = 0.866a$. This means the teaser transformer's primary winding needs to have 86.6% of the turns of the main transformer's primary winding, or its secondary is tapped at 86.6% of its full secondary voltage.
*   The two output voltages, $V_{2\phi1}$ and $V_{2\phi2}$, will be equal in magnitude and 90 degrees apart.

---

### 3. Operation and Load Sharing

*   When a balanced two-phase load is connected to the Scott transformers, the currents in the three-phase supply lines are not necessarily equal in magnitude, especially under unbalanced load conditions.
*   The main transformer carries currents related to the two-phase load connected to its secondary, plus a component from the teaser transformer's operation.
*   The teaser transformer carries currents related to the two-phase load and the voltage difference it compensates for.
*   **Balanced Load:** For a balanced two-phase load, the currents drawn from the three-phase supply are generally unbalanced, but the power drawn from the three-phase system is equal to the power delivered to the two-phase load (neglecting losses).

---

### 4. Advantages and Disadvantages of Scott Connection

#### 4.1. Advantages:

*   **Efficient Conversion:** Provides a direct and efficient way to convert three-phase to two-phase power.
*   **Balanced Output:** Produces a balanced two-phase output with voltages of equal magnitude and in quadrature, provided the three-phase input is balanced.
*   **Flexibility:** Can be used for both step-up and step-down applications by appropriate design of the transformers.
*   **Standard Components:** Uses two standard single-phase transformers, which are readily available.

#### 4.2. Disadvantages:

*   **Unbalanced Supply Currents:** The currents drawn from the three-phase supply are typically unbalanced, which can lead to some inefficiencies and require careful consideration for system protection.
*   **Specialized Design:** The teaser transformer requires a specific winding tapping or a different primary winding design, making it a specialized component.
*   **Not Economical for Small Loads:** For very small phase conversion needs, other methods might be more economical.

---

### 5. Applications

*   **Electric Furnaces:** Some older electric arc furnaces used two-phase power.
*   **Specialized Motors:** Certain types of motors that require two-phase control.
*   **Industrial Equipment:** Running older two-phase machinery from a modern three-phase supply.
*   **Phase Balancing:** Can sometimes be used to balance loads in certain networks.

---

### 6. Numerical Problems

Numerical problems on Scott connection typically involve calculating:
*   Required turns ratios for the transformers.
*   Line currents drawn from the three-phase supply.
*   Load currents in the two-phase output.
*   Transformer ratings.

**Key Formulas and Concepts for Calculations:**

*   **Turns Ratio (Main Transformer):** $a_m = \frac{N_{1m}}{N_{2m}} = \frac{V_{RY}}{V_{2\phi1}}$
*   **Turns Ratio (Teaser Transformer):** $a_t = \frac{N_{1t}}{N_{2t}} = \frac{0.866 V_L}{V_{2\phi2}}$
*   For equal voltage magnitudes on the two-phase output: $V_{2\phi1} = V_{2\phi2}$.
*   This implies $a_m = \frac{V_L}{V_{2\phi1}}$ and $a_t = \frac{0.866 V_L}{V_{2\phi1}}$.
*   Therefore, $a_t = 0.866 a_m$. This means the teaser transformer's primary winding has 86.6% of the turns of the main transformer's primary winding, OR the teaser transformer's secondary is tapped at the 86.6% point.

**Example Problem 1 (Kothari & Nagrath, Bimbhra):**

A Scott connection is used to convert 3-phase, 11 kV, 50 Hz supply to 2-phase, 11 kV. Determine the required turns ratio of the main and teaser transformers.

**Solution:**

Given:
*   3-phase line voltage, $V_L = 11$ kV
*   2-phase output voltage, $V_{2\phi1} = V_{2\phi2} = 11$ kV

**Main Transformer:**
The primary is connected across two phases of the 3-phase supply, so the primary voltage is the line voltage $V_L = 11$ kV.
The secondary voltage is $V_{2\phi1} = 11$ kV.
Turns ratio, $a_m = \frac{\text{Primary Voltage}}{\text{Secondary Voltage}} = \frac{11 \text{ kV}}{11 \text{ kV}} = 1$.
So, $N_{1m}/N_{2m} = 1$.

**Teaser Transformer:**
The primary voltage is $0.866 V_L = 0.866 \times 11 \text{ kV} = 9.526$ kV.
The secondary voltage is $V_{2\phi2} = 11$ kV.
Turns ratio, $a_t = \frac{\text{Primary Voltage}}{\text{Secondary Voltage}} = \frac{0.866 V_L}{V_{2\phi2}} = \frac{9.526 \text{ kV}}{11 \text{ kV}} = 0.866$.
So, $N_{1t}/N_{2t} = 0.866$.

**Conclusion:** The main transformer has a turns ratio of 1:1. The teaser transformer has a turns ratio of approximately 0.866:1 (or its secondary is tapped at 86.6% of the full winding to achieve the required voltage).

**Example Problem 2 (Gupta):**

A Scott connection is used to supply a two-phase load from a three-phase system. The three-phase supply voltage is 415 V (line). The two-phase load is such that the voltages across the two phases of the Scott connection are 415 V and 415 V, and they are in quadrature. If the main transformer is wound for 415 V on the primary and 415 V on the secondary, and the teaser transformer has its primary connected to the third line and the midpoint of the main transformer's primary, and its secondary provides the other phase of the two-phase output, find the tapping required on the teaser transformer's primary winding.

**Solution:**

Given:
*   3-phase line voltage, $V_L = 415$ V
*   2-phase output voltages, $V_{2\phi1} = V_{2\phi2} = 415$ V

**Main Transformer:**
Primary voltage = $V_L = 415$ V (across two phases).
Secondary voltage = $V_{2\phi1} = 415$ V.
Turns ratio $a_m = 415/415 = 1$.

**Teaser Transformer:**
The voltage across the teaser primary is $0.866 V_L = 0.866 \times 415$ V $= 359.59$ V.
The required secondary voltage is $V_{2\phi2} = 415$ V.

To achieve the 2-phase output with equal voltages, the teaser transformer secondary should produce 415 V. The primary voltage available is 359.59 V.
Let the full primary winding of the teaser transformer be $N_{1t}$ and the secondary winding be $N_{2t}$.
We need $V_{2\phi2} = \frac{N_{2t}}{N_{1t}} \times (0.866 V_L)$.
Since $V_{2\phi2} = V_{2\phi1} = 415$ V, and we want $V_{2\phi1} = \frac{N_{2m}}{N_{1m}} V_L$, where $N_{2m}/N_{1m} = 1$.
So, we require $V_{2\phi2} = V_{2\phi1} = 415$ V.

The teaser transformer primary voltage is $0.866 V_L = 359.59$ V.
If the secondary winding is designed to produce 415 V when its primary is 415 V (i.e., a 1:1 turns ratio on the secondary), then its primary winding needs to be designed such that it can deliver 415 V. However, the available voltage is 359.59 V.
Therefore, to get 415 V from a primary voltage of 359.59 V, the turns ratio $N_{1t}/N_{2t}$ must be such that $\frac{N_{2t}}{N_{1t}} \times 359.59 = 415$.
$\frac{N_{2t}}{N_{1t}} = \frac{415}{359.59} \approx 1.154$.

Alternatively, if the teaser transformer has a secondary winding designed to match the main transformer's secondary output voltage (415 V), then its primary winding must be tapped.
The main transformer's primary winding has $N_{1m}$ turns and its secondary has $N_{2m}$ turns, with $N_{1m}=N_{2m}$.
The teaser transformer's secondary winding should be $N_{2t}$ such that it produces 415 V.
The voltage available across the teaser primary is $V_{1t} = 0.866 V_L = 359.59$ V.
To get 415 V from the secondary, the ratio of secondary to primary turns for the teaser transformer must be $\frac{N_{2t}}{N_{1t\_tapped}} = \frac{415}{359.59}$.
If the teaser transformer is designed with a full primary winding $N_{1t}$ to produce 415 V from 415 V (i.e., $N_{1t}=N_{2t}$), then the available voltage is 359.59 V.
So, the tapping on the primary should be such that the voltage produced is 415 V.
Voltage produced per turn on primary is $\frac{359.59}{N_{1t}}$ (assuming $N_{1t}$ is the full primary).
We need to tap $N_{1t\_tapped}$ turns to get $V_{2\phi2} = \frac{N_{2t}}{N_{1t\_tapped}} \times 359.59$.
If $N_{2t} = N_{1t}$ (main transformer primary winding rating is 415V), then $\frac{N_{1t}}{N_{1t\_tapped}} \times 359.59 = 415$.
$N_{1t\_tapped} = N_{1t} \times \frac{359.59}{415} = N_{1t} \times 0.866$.
This means the tapping on the teaser transformer's primary winding should be at **86.6%** of its full winding.

---

### 7. Practice Questions

1.  **Understanding the Concept:** Explain why the teaser transformer in a Scott connection has a primary voltage magnitude of $0.866 V_L$ and how this ensures a balanced two-phase output.
2.  **Calculation:** A 3-phase supply of 11 kV is converted to 2-phase supply of 11 kV using a Scott connection. If the main transformer has a turns ratio of 1:1, what should be the turns ratio of the teaser transformer, assuming its primary is connected to the third phase and the midpoint of the main transformer's primary?
3.  **Design Aspect:** If a Scott connection is used to convert a 3-phase supply of $V_L$ to a 2-phase supply of $V_L$ using transformers of identical ratings (i.e., same primary and secondary voltage ratings), how would the primary windings of the main and teaser transformers be connected, and what tapping would be required on the teaser transformer?
4.  **Load Analysis:** A Scott connection supplies a two-phase load of 100 kVA, 11 kV. Calculate the line currents drawn from the three-phase supply. Assume ideal transformers. (Hint: You'll need to first determine the 3-phase supply voltage and then calculate the currents based on the power and voltage.)

---

### 8. Answers to Practice Questions

1.  **Explanation:** In a balanced three-phase system, the phasor sum of the three phase voltages is zero ($V_R + V_Y + V_B = 0$). The main transformer's primary is connected across two phases (e.g., R and Y). The voltage across it is $V_{RY} = V_L$. The teaser transformer's primary is connected between phase B and the midpoint of the main transformer's primary. The voltage at the midpoint of the main primary is $(V_R + V_Y)/2$. Since $V_R + V_Y = -V_B$, the midpoint voltage is $-V_B/2$. The voltage across the teaser primary is $V_B - (-V_B/2) = 1.5 V_B$. Since $V_B = V_L/\sqrt{3}$ in magnitude and lags $V_{RY}$ by 120 degrees (for a standard phase sequence), the magnitude of $1.5 V_B$ is $1.5 \times (V_L/\sqrt{3}) = (\sqrt{3}/2)V_L = 0.866 V_L$. This voltage is also in quadrature with the voltage across the main transformer's primary. By designing the secondary of the teaser transformer with an appropriate turns ratio (or tapping), its output voltage can be made equal in magnitude and in quadrature with the main transformer's secondary output, resulting in a balanced two-phase supply.
2.  **Calculation:**
    *   Main Transformer: Primary Voltage = 11 kV, Secondary Voltage = 11 kV. Turns Ratio $a_m = 11 \text{ kV} / 11 \text{ kV} = 1$.
    *   Teaser Transformer: Primary Voltage = $0.866 \times 11 \text{ kV} = 9.526$ kV. Secondary Voltage = 11 kV.
    *   Turns Ratio $a_t = \text{Primary Voltage} / \text{Secondary Voltage} = 9.526 \text{ kV} / 11 \text{ kV} = 0.866$.
    *   So, the turns ratio of the teaser transformer is 0.866:1. This means its primary winding has 86.6% of the turns of its secondary winding.
3.  **Design Aspect:**
    *   If the transformers are of identical ratings, their primary and secondary voltage ratings are the same, say $V_{rated}$.
    *   The main transformer's primary is connected across two phases of the $V_L$ supply. So, $V_{rated}$ must be at least $V_L$.
    *   The teaser transformer's primary needs to be connected to a voltage of $0.866 V_L$. If its rated primary voltage is $V_{rated}$, and $0.866 V_L < V_{rated}$, then the primary winding of the teaser transformer should be tapped at the 86.6% point of its full winding to achieve the required input voltage.
    *   The secondary windings are designed to produce the desired output voltage.
4.  **Load Analysis:**
    *   The two-phase load is 100 kVA, 11 kV. This means each phase of the two-phase output delivers $100 \text{ kVA} / 2 = 50$ kVA at 11 kV.
    *   So, $V_{2\phi1} = 11$ kV and $V_{2\phi2} = 11$ kV.
    *   The Scott connection converts 3-phase to 2-phase. The power delivered to the 2-phase load (neglecting losses) is the power drawn from the 3-phase supply.
    *   Total power to the load = 100 kVA.
    *   The 3-phase supply voltage is given as 11 kV (line voltage).
    *   For the main transformer, primary voltage $V_{RY} = 11$ kV. Secondary voltage $V_{2\phi1} = 11$ kV. So, $a_m = 11/11 = 1$.
    *   For the teaser transformer, primary voltage $V_{1t} = 0.866 \times 11 \text{ kV} = 9.526$ kV. Secondary voltage $V_{2\phi2} = 11$ kV. So, $a_t = 9.526/11 = 0.866$.
    *   Let's find the current in each phase of the 2-phase load. For a 50 kVA, 11 kV load:
        *   $I_{2\phi1} = 50 \text{ kVA} / 11 \text{ kV} = 4.545$ A.
        *   $I_{2\phi2} = 50 \text{ kVA} / 11 \text{ kV} = 4.545$ A.
    *   Now, we need to find the currents drawn from the 3-phase supply. This requires analyzing the transformer currents.
        *   Currents in the main transformer:
            *   Primary current $I_{1m} = I_{2\phi1} / a_m = 4.545 \text{ A}$. This current will be along the R-Y line.
            *   Current in the secondary of the teaser transformer contributes to $I_{2\phi2}$.
        *   Currents in the teaser transformer:
            *   The current in the secondary of the teaser transformer, $I_{2t}$, is related to $I_{2\phi2}$ and the required phase shift.
            *   The primary current of the teaser transformer, $I_{1t}$, is related to $I_{2t}$ and its turns ratio.
    *   A simpler way to calculate line currents is using power. The total power drawn from the 3-phase supply is $P_{3\phi} = \sqrt{3} V_L I_L \cos\phi$. Assuming ideal transformers and a unity power factor load for simplicity (or that the kVA is the apparent power):
        *   Total apparent power $S_{3\phi} = 100$ kVA.
        *   $S_{3\phi} = \sqrt{3} V_L I_L$
        *   $100 \times 10^3 = \sqrt{3} \times 11 \times 10^3 \times I_L$
        *   $I_L = \frac{100 \times 10^3}{\sqrt{3} \times 11 \times 10^3} = \frac{100}{11\sqrt{3}} \approx \frac{100}{19.05} \approx 5.25$ A.
    *   **Important Note:** The currents drawn from the three lines of the 3-phase supply are generally not equal in magnitude in a Scott connection, even for a balanced 2-phase load. The calculation above gives an approximate average line current if all lines carried the same current. For precise calculations of individual line currents, one must analyze the currents in each winding using phasor diagrams and Kirchhoff's laws.
    *   **More Precise Current Calculation:**
        *   Let phase R, Y, B be the supply phases. Main transformer primary across R-Y. Teaser transformer primary between B and midpoint of R-Y.
        *   Let $V_R, V_Y, V_B$ be the phase voltages. $V_{RY} = V_R - V_Y$.
        *   Let $V_{2\phi1}$ be the voltage from the main secondary, and $V_{2\phi2}$ from the teaser secondary.
        *   Assume the load is connected such that $I_{2\phi1}$ is in phase with $V_{2\phi1}$, and $I_{2\phi2}$ lags $V_{2\phi2}$ by 90 degrees (or some power factor). For simplicity, let's assume unity power factor for the 2-phase load.
        *   $I_{2\phi1} = 4.545 \angle 0^\circ$ A (assuming $V_{2\phi1}$ as reference).
        *   $I_{2\phi2} = 4.545 \angle -90^\circ$ A (since it should be in quadrature with $V_{2\phi2}$, and $V_{2\phi2}$ lags $V_{2\phi1}$ by 90 degrees).
        *   Primary current of main transformer: $I_{1m} = I_{2\phi1} / a_m = 4.545 \angle 0^\circ$ A. This flows in the R-Y line.
        *   Primary current of teaser transformer: $I_{1t} = I_{2t} / a_t$. The current $I_{2t}$ in the teaser secondary will be related to $I_{2\phi2}$.
        *   The currents in the three lines are:
            *   $I_R = I_{1m} + (\text{component from teaser primary})$
            *   $I_Y = -I_{1m} + (\text{component from teaser primary})$
            *   $I_B = (\text{component from teaser primary})$
        *   **A common simplification for calculating line currents is to consider the power transfer:**
            *   Apparent power in phase 1 of 2-phase output: $S_{2\phi1} = V_{2\phi1} I_{2\phi1}^* = 11 \text{ kV} \times 4.545 \angle 0^\circ \text{ A}^* = 50 \text{ kVA}$.
            *   Apparent power in phase 2 of 2-phase output: $S_{2\phi2} = V_{2\phi2} I_{2\phi2}^* = 11 \text{ kV} \angle -90^\circ \times 4.545 \angle -90^\circ \text{ A}^* = 11 \angle -90^\circ \times 4.545 \angle +90^\circ = 50 \text{ kVA}$.
            *   Total apparent power = $50 + 50 = 100$ kVA.
            *   Let $I_{RY}$ be the current in the main primary, $I_{B-mid}$ be the current in the teaser primary.
            *   $I_{RY} = I_{2\phi1} / a_m = 4.545 \angle 0^\circ$ A.
            *   $I_{mid-B}$ is the current from the teaser primary. Its magnitude is $I_{2\phi2}/a_t = 4.545 / 0.866 = 5.248$ A. This current is in phase with the voltage across the teaser primary ($0.866 V_L$).
            *   The line currents are the vector sum of these primary currents distributed to the respective lines.
            *   $I_R = I_{RY} + \frac{1}{2} I_{mid-B}$
            *   $I_Y = -I_{RY} + \frac{1}{2} I_{mid-B}$
            *   $I_B = -I_{mid-B}$ (This is an approximation for the distribution of teaser primary current).
            *   **The most direct method for line current magnitude is using total apparent power:**
                *   $S_{3\phi} = \sqrt{3} V_L I_L$
                *   $100 \text{ kVA} = \sqrt{3} \times 11 \text{ kV} \times I_L$
                *   $I_L = \frac{100 \text{ kVA}}{\sqrt{3} \times 11 \text{ kV}} = \frac{100 \times 10^3}{1.732 \times 11 \times 10^3} \approx 5.25$ A.
                *   However, the line currents will not be equal. The current in the phase connected to the midpoint of the main transformer (phase B in this case) will be different from the currents in the other two phases.
                *   The current drawn by the teaser transformer primary is approximately $I_{teaser\_pri} \approx \frac{S_{2\phi2}}{0.866V_L} = \frac{50 \text{ kVA}}{0.866 \times 11 \text{ kV}} \approx 4.167$ A. This current flows in the B line from the supply perspective, and also into the midpoint of the main primary.
                *   The current drawn by the main transformer primary is $I_{main\_pri} = \frac{S_{2\phi1}}{V_L} = \frac{50 \text{ kVA}}{11 \text{ kV}} \approx 4.545$ A. This current flows equally in phases R and Y (as it's AC, and it's split).
                *   Therefore, $I_R \approx 4.545/2 \approx 2.27$ A, $I_Y \approx 4.545/2 \approx 2.27$ A. And $I_B \approx 4.167$ A.
                *   **Correction:** The division of current from the main transformer primary is more complex. The current $I_{RY}$ of magnitude 4.545 A flows in the R-Y winding. The current drawn from the B phase for the teaser primary is $I_{mid-B}$ of magnitude 5.248 A (if $a_t=0.866$).
                *   The line currents are:
                    *   $I_R = I_{RY} / 2$ (This is incorrect)
                    *   **Correct approach from textbooks:**
                        *   $I_{2\phi1} = 4.545 \angle 0^\circ$ A
                        *   $I_{2\phi2} = 4.545 \angle -90^\circ$ A
                        *   $I_{main\_pri} = I_{2\phi1}/a_m = 4.545 \angle 0^\circ$ A. This current flows in the R-Y winding.
                        *   $I_{teaser\_pri} = I_{2\phi2}/a_t = 4.545 \angle -90^\circ / 0.866 \approx 5.248 \angle -90^\circ$ A. This current flows in the connection from B to midpoint.
                        *   The line currents are formed by these primary currents.
                        *   $I_R = I_{main\_pri} + \frac{1}{2}I_{teaser\_pri}$ (vector sum)
                        *   $I_Y = -I_{main\_pri} + \frac{1}{2}I_{teaser\_pri}$ (vector sum)
                        *   $I_B = -I_{teaser\_pri}$ (vector sum)
                        *   $V_R = 11/\sqrt{3} \angle 120^\circ$, $V_Y = 11/\sqrt{3} \angle 0^\circ$, $V_B = 11/\sqrt{3} \angle -120^\circ$ if we consider phase voltages. Let's use line voltages.
                        *   Let $V_{RY} = 11 \angle 0^\circ$. Then $V_{YB} = 11 \angle -120^\circ$, $V_{BR} = 11 \angle 120^\circ$.
                        *   Main primary across R-Y, $V_{RY} = 11 \angle 0^\circ$. $I_{RY} = 4.545 \angle 0^\circ$ A.
                        *   Teaser primary voltage is between B and midpoint of R-Y. $V_{mid} = (V_R + V_Y)/2$. Let $V_R = 11/\sqrt{3} \angle 90^\circ$, $V_Y = 11/\sqrt{3} \angle -30^\circ$, $V_B = 11/\sqrt{3} \angle -150^\circ$.
                        *   Then $V_{RY} = V_R - V_Y = 11/\sqrt{3} \angle 90^\circ - 11/\sqrt{3} \angle -30^\circ = 11/\sqrt{3} (\cos 90 + j\sin 90 - (\cos(-30) + j\sin(-30))) = 11/\sqrt{3} (j - (0.866 - j0.5)) = 11/\sqrt{3} (1.5j - 0.866) = 11(\frac{1.5}{\sqrt{3}}j - \frac{0.866}{\sqrt{3}}) = 11(0.866j - 0.5)$. This is not $11 \angle 0^\circ$.
                        *   Let's use line voltages and the fact that the teaser primary voltage magnitude is $0.866 V_L$.
                        *   $I_{main\_pri}$ leads $V_{RY}$ by 90 degrees if the load is purely inductive, or is in phase if purely resistive. Let's assume unity PF for the load $V_{2\phi1}$ and $V_{2\phi2}$.
                        *   $I_{RY} = 4.545 \angle \phi_1$. $I_{2\phi1} = 4.545 \angle \phi_1$.
                        *   $I_{teaser\_pri} = 5.248 \angle (\phi_2 - 90^\circ)$. $I_{2\phi2} = 4.545 \angle \phi_2$.
                        *   For simplicity, let's assume the 2-phase load has unity power factor, meaning $I_{2\phi1}$ and $I_{2\phi2}$ are in phase with their respective voltages.
                        *   $V_{2\phi1}$ is in phase with $V_{RY}$. So $I_{2\phi1}$ is in phase with $V_{RY}$.
                        *   $V_{2\phi2}$ lags $V_{RY}$ by 90 degrees. So $I_{2\phi2}$ lags $V_{RY}$ by 90 degrees.
                        *   $I_{RY} = I_{2\phi1} / a_m = 4.545 \angle 0^\circ$ A.
                        *   $I_{teaser\_pri} = I_{2\phi2} / a_t = 4.545 \angle -90^\circ / 0.866 \approx 5.248 \angle -90^\circ$ A.
                        *   $I_R = I_{RY} + \frac{1}{2}I_{teaser\_pri}$
                        *   $I_Y = -I_{RY} + \frac{1}{2}I_{teaser\_pri}$
                        *   $I_B = -I_{teaser\_pri}$
                        *   $I_R = 4.545 \angle 0^\circ + \frac{1}{2}(5.248 \angle -90^\circ) = 4.545 + j 2.624 = 5.08 \angle 29.0^\circ$ A.
                        *   $I_Y = -4.545 \angle 0^\circ + \frac{1}{2}(5.248 \angle -90^\circ) = -4.545 + j 2.624 = 5.248 \angle 150.9^\circ$ A.
                        *   $I_B = -5.248 \angle -90^\circ = 5.248 \angle 90^\circ$ A.
                        *   Magnitudes: $|I_R| \approx 5.08$ A, $|I_Y| \approx 5.25$ A, $|I_B| \approx 5.25$ A.
                        *   So, the line currents are approximately 5.08 A, 5.25 A, and 5.25 A. The current in the phase connected to the teaser transformer's primary is usually larger.

---

### 9. Important Points to Remember

*   The Scott connection converts 3-phase to 2-phase power using two single-phase transformers.
*   The teaser transformer's primary winding is connected to the third phase and the midpoint of the main transformer's primary.
*   The voltage across the teaser transformer's primary is $0.866$ times the line voltage.
*   To achieve a balanced 2-phase output with equal voltage magnitudes, the teaser transformer's secondary output voltage must be equal to the main transformer's secondary output voltage, and their relative phase difference must be 90 degrees.
*   This necessitates a specific turns ratio (or tapping) for the teaser transformer, typically $0.866$ times the main transformer's turns ratio if the secondaries are equal.
*   The currents drawn from the three-phase supply are generally unbalanced.
*   The power drawn from the 3-phase side equals the power delivered to the 2-phase load (ideally).

---
