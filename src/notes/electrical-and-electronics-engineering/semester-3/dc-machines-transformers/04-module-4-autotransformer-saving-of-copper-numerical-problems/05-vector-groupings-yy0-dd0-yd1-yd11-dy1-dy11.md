---
title: "Vector groupings – Yy0, Dd0, Yd1, Yd11, Dy1, Dy11"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 4: Autotransformer – saving of copper – numerical problems"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b36"
status: "completed"
scrapedAt: "2026-05-23T16:12:29.571Z"
---
This request appears to have a discrepancy. The provided "Topic" (Vector groupings – Yy0, Dd0, Yd1, Yd11, Dy1, Dy11) and "Description" clearly pertain to **Three-Phase Transformers**, not Autotransformers or DC Machines. The Module Title "Autotransformer – saving of copper – numerical problems" and the "Subject" "DC MACHINES & TRANSFORMERS" seem to be misaligned with the specific topic requested.

I will proceed by generating comprehensive study notes for **Vector Groupings of Three-Phase Transformers**, as this is the actual topic indicated by the description and the specific vector group notations. These notes will be structured to be as comprehensive as possible, incorporating relevant concepts and aligning with the spirit of the course outcomes where applicable, acknowledging that direct mapping to DC machines is not possible.

---

# Module 4: Three-Phase Transformers - Vector Groupings

## Introduction to Three-Phase Transformers

Three-phase transformers are essential in power systems for stepping up or stepping down voltages in three-phase networks. Their efficient operation and interconnection with other three-phase systems depend heavily on the way their primary and secondary windings are connected and phased. This phasing is represented by **Vector Groupings**.

**Key Concept:** Vector grouping describes the relative angular displacement between the line voltages of the primary and secondary windings of a three-phase transformer. It also indicates the winding connections (e.g., Star or Delta).

## Importance of Vector Groupings

Understanding vector groupings is crucial for:

*   **Parallel Operation:** Transformers can only be connected in parallel if they have the same vector grouping. Mismatched vector groups can lead to circulating currents, overheating, and damage. (Ref: Bimbhra, Chapter 12; Kothari & Nagrath, Chapter 5)
*   **Interconnection of Systems:** Different parts of a power system might have different voltage levels and phasing requirements. Vector groupings facilitate the correct interconnection.
*   **Phase Shifting:** Certain vector groups are used for phase shifting applications.
*   **Harmonics:** The vector group can influence the flow of third harmonics.
*   **Zero Sequence Currents:** The winding connections in a vector group affect how zero sequence currents flow.

## Conventions for Denoting Vector Groupings

The standard notation for vector groupings follows a system that indicates:

1.  **Primary Winding Connection:** Represented by a letter (Y for Star, D for Delta, Z for Zigzag).
2.  **Secondary Winding Connection:** Represented by a letter (y for star, d for delta, z for zigzag).
3.  **Angular Displacement:** A number indicating the phase difference between the primary and secondary line voltages, expressed in units of 30 degrees.

**Important Point:** The first letter (primary) and the second letter (secondary) correspond to the terminal markings. The capital letters denote the high voltage (HV) winding and lowercase letters denote the low voltage (LV) winding, generally. The number indicates the phase displacement of the secondary line voltage with respect to the primary line voltage.

## Understanding the Notation Elements

### 1. Winding Connections:

*   **Y (Star) / y (star):**
    *   The ends of the three windings are connected to a common point called the neutral.
    *   Line voltage is $\sqrt{3}$ times the phase voltage.
    *   Line current is equal to the phase current.
    *   A neutral point can be made available.
*   **D (Delta) / d (delta):**
    *   The three windings are connected in a closed loop.
    *   Line voltage is equal to the phase voltage.
    *   Line current is $\sqrt{3}$ times the phase voltage.
    *   No inherent neutral point is available.

### 2. Angular Displacement (The Number):

The number in the vector group notation represents the displacement of the secondary line voltage vector relative to the primary line voltage vector. The displacement is measured in units of 30 electrical degrees.

*   The clock analogy is commonly used. The primary voltage is considered to be at the 12 o'clock position.
*   The number 'n' signifies that the secondary line voltage lags the primary line voltage by $n \times 30^\circ$.

**Example:**

*   **Yy0:** The primary is Star, the secondary is star. The number '0' means there is no phase displacement between the primary and secondary line voltages. The secondary voltage is in phase with the primary voltage. (Lagging by $0 \times 30^\circ = 0^\circ$)

### 3. Common Examples of Vector Groupings:

Let's delve into the specific vector groupings mentioned:

#### a) Yy0

*   **Primary Connection:** Star (Y)
*   **Secondary Connection:** Star (y)
*   **Angular Displacement:** 0 (meaning $0^\circ$ phase shift)

*   **Diagrammatic Representation (Simplified):**
    *   Primary: Windings A, B, C connected to A', B', C'. Neutral O.
    *   Secondary: Windings a, b, c connected to a', b', c'. Neutral o.
    *   Line voltages $V_{AB}$ and $v_{ab}$ are in phase.

*   **Characteristics:**
    *   The line voltages on the primary and secondary sides are in phase.
    *   Can provide a neutral point on both sides.
    *   Suitable for applications where a neutral is required on both high and low voltage sides.
    *   **Third Harmonic Currents:** If the neutral points are connected, third harmonic currents can flow in the neutral wire, which might be desirable to reduce harmonics in the line voltages.
*   **Reference:** Bimbhra, Chapter 12; Kothari & Nagrath, Chapter 5.
*   **Course Outcome Alignment:** CO5 (Describe the constructional details and operation of 3-phase transformers) - Understanding winding connections and phase relationships.

#### b) Dd0

*   **Primary Connection:** Delta (D)
*   **Secondary Connection:** Delta (d)
*   **Angular Displacement:** 0 (meaning $0^\circ$ phase shift)

*   **Diagrammatic Representation (Simplified):**
    *   Primary: Windings A-a', B-b', C-c' connected in closed delta.
    *   Secondary: Windings a-a', b-b', c-c' connected in closed delta.
    *   Line voltages $V_{AB}$ and $v_{ab}$ are in phase.

*   **Characteristics:**
    *   The line voltages on the primary and secondary sides are in phase.
    *   **No Neutral Point:** Neither side has an inherent neutral.
    *   **Third Harmonic Currents:** Does not inherently suppress third harmonic currents. If the primary or secondary delta is closed, third harmonic currents will circulate within the delta.
    *   Often used for industrial loads where a neutral is not required.
*   **Reference:** Bimbhra, Chapter 12; Kothari & Nagrath, Chapter 5.
*   **Course Outcome Alignment:** CO5 (Describe the constructional details and operation of 3-phase transformers) - Understanding winding connections and phase relationships.

#### c) Yd1

*   **Primary Connection:** Star (Y)
*   **Secondary Connection:** Delta (d)
*   **Angular Displacement:** 1 (meaning $1 \times 30^\circ = 30^\circ$ lag)

*   **Diagrammatic Representation (Simplified):**
    *   Primary: Star connection.
    *   Secondary: Delta connection.
    *   Line voltage $v_{ab}$ (secondary) lags line voltage $V_{AB}$ (primary) by $30^\circ$.

*   **Characteristics:**
    *   Combines the advantages of both Star and Delta connections. The Star side provides a neutral point, which is useful for grounding or supplying single-phase loads. The Delta side helps to suppress third harmonic currents and balance the phase voltages on the primary side when the load is unbalanced.
    *   The phase difference of $30^\circ$ is important for system interconnections and load balancing.
    *   Commonly used for step-down transformers in distribution systems.
*   **Reference:** Bimbhra, Chapter 12; Kothari & Nagrath, Chapter 5.
*   **Course Outcome Alignment:** CO5 (Describe the constructional details and operation of 3-phase transformers) - Understanding winding connections and phase relationships, and CO4 (Analyse the performance of 1-phase transformer and auto-transformer under various load conditions) - the principles extend to understanding the interconnectedness of windings in polyphase systems.

#### d) Yd11

*   **Primary Connection:** Star (Y)
*   **Secondary Connection:** Delta (d)
*   **Angular Displacement:** 11 (meaning $11 \times 30^\circ = 330^\circ$ lag, which is equivalent to a $30^\circ$ lead)

*   **Diagrammatic Representation (Simplified):**
    *   Primary: Star connection.
    *   Secondary: Delta connection.
    *   Line voltage $v_{ab}$ (secondary) lags line voltage $V_{AB}$ (primary) by $330^\circ$ (or leads by $30^\circ$).

*   **Characteristics:**
    *   Similar to Yd1, it provides a neutral on the primary side and a delta on the secondary.
    *   The key difference is the phase displacement. $V_{ab}$ leads $V_{AB}$ by $30^\circ$.
    *   Used in applications where this specific phase relationship is required, for example, in power factor correction schemes or specific network configurations.
*   **Reference:** Bimbhra, Chapter 12; Kothari & Nagrath, Chapter 5.
*   **Course Outcome Alignment:** CO5 (Describe the constructional details and operation of 3-phase transformers).

#### e) Dy1

*   **Primary Connection:** Delta (D)
*   **Secondary Connection:** Star (y)
*   **Angular Displacement:** 1 (meaning $1 \times 30^\circ = 30^\circ$ lag)

*   **Diagrammatic Representation (Simplified):**
    *   Primary: Delta connection.
    *   Secondary: Star connection.
    *   Line voltage $v_{ab}$ (secondary) lags line voltage $V_{AB}$ (primary) by $30^\circ$.

*   **Characteristics:**
    *   The primary side is Delta, which suppresses third harmonic currents and provides a robust connection.
    *   The secondary side is Star, providing a neutral point.
    *   Commonly used for step-up transformers in power generation plants to supply power to transmission lines. The neutral on the secondary side is often grounded for system stability and fault protection.
*   **Reference:** Bimbhra, Chapter 12; Kothari & Nagrath, Chapter 5.
*   **Course Outcome Alignment:** CO5 (Describe the constructional details and operation of 3-phase transformers).

#### f) Dy11

*   **Primary Connection:** Delta (D)
*   **Secondary Connection:** Star (y)
*   **Angular Displacement:** 11 (meaning $11 \times 30^\circ = 330^\circ$ lag, or $30^\circ$ lead)

*   **Diagrammatic Representation (Simplified):**
    *   Primary: Delta connection.
    *   Secondary: Star connection.
    *   Line voltage $v_{ab}$ (secondary) lags line voltage $V_{AB}$ (primary) by $330^\circ$ (or leads by $30^\circ$).

*   **Characteristics:**
    *   Similar to Dy1, but with the secondary voltage leading the primary voltage by $30^\circ$.
    *   Used when a $30^\circ$ leading phase shift is required from the primary to the secondary.
*   **Reference:** Bimbhra, Chapter 12; Kothari & Nagrath, Chapter 5.
*   **Course Outcome Alignment:** CO5 (Describe the constructional details and operation of 3-phase transformers).

## Summary of Vector Groupings and Key Features

| Vector Group | Primary Connection | Secondary Connection | Phase Displacement (Secondary Lagging Primary) | Neutral Available | Third Harmonic Suppression | Typical Use                                       |
| :----------- | :----------------- | :------------------- | :--------------------------------------------- | :---------------- | :------------------------- | :------------------------------------------------ |
| **Yy0**      | Star (Y)           | Star (y)             | $0^\circ$                                      | Both sides        | No (can be transmitted)    | Interconnecting systems, grounding capability     |
| **Dd0**      | Delta (D)          | Delta (d)            | $0^\circ$                                      | Neither side      | Yes (circulates in delta)  | Industrial applications, no neutral required      |
| **Yd1**      | Star (Y)           | Delta (d)            | $30^\circ$ lag                                 | HV side           | Yes (secondary delta)      | Step-down distribution transformers             |
| **Yd11**     | Star (Y)           | Delta (d)            | $30^\circ$ lead ($330^\circ$ lag)              | HV side           | Yes (secondary delta)      | Specific system requirements, phase shifting      |
| **Dy1**      | Delta (D)          | Star (y)             | $30^\circ$ lag                                 | LV side           | Yes (primary delta)        | Step-up generation transformers, grounded neutral |
| **Dy11**     | Delta (D)          | Star (y)             | $30^\circ$ lead ($330^\circ$ lag)              | LV side           | Yes (primary delta)        | Specific system requirements, phase shifting      |

## Important Points to Remember

*   **Clock Analogy:** The number $n$ means the secondary voltage (e.g., $v_{ab}$) lags the primary voltage (e.g., $V_{AB}$) by $n \times 30^\circ$.
*   **Parallel Operation:** For parallel operation, transformers must have the **same vector group**.
*   **Neutral Availability:** A Star (Y) connected winding provides a neutral point, which is essential for grounding or for supplying single-phase loads. Delta (D) connected windings do not have an inherent neutral.
*   **Third Harmonics:** Delta-connected windings (either primary or secondary) help to suppress third harmonic currents by providing a closed path for them to circulate within the delta, thus preventing them from appearing in the line voltages.
*   **Applications:** The choice of vector group depends on the specific requirements of the power system, such as the need for a neutral, the permissible phase shift, and the management of harmonics.

## Practice Questions

1.  **What is the significance of the number '1' in the vector group Yd1?**
    *   **Answer:** The number '1' signifies that the secondary line voltage ($v_{ab}$) lags the primary line voltage ($V_{AB}$) by $1 \times 30^\circ = 30^\circ$ electrical degrees.

2.  **If two transformers are to be connected in parallel, and one is Yy0 and the other is Dy1, what will happen?**
    *   **Answer:** Connecting a Yy0 transformer in parallel with a Dy1 transformer is incorrect. The Dy1 transformer has a $30^\circ$ phase displacement between its primary and secondary voltages, while the Yy0 has $0^\circ$. This mismatch will cause large circulating currents between the transformers, leading to overheating, damage, and potential system instability.

3.  **Which vector group is commonly used for step-up transformers in power generation and why?**
    *   **Answer:** Dy1 or Dy11 are commonly used for step-up transformers. The primary Delta (D) connection suppresses third harmonics, and the secondary Star (y) connection provides a neutral point which is typically grounded for system stability and fault protection.

4.  **Explain the role of the delta connection in suppressing third harmonics in three-phase transformers.**
    *   **Answer:** The third harmonic voltage is in phase for all three phases. In a Delta connection, these three in-phase third harmonic voltages add up to create a circulating current within the delta winding, effectively preventing the third harmonic from appearing in the line voltages.

5.  **Consider a Yd11 transformer. If the primary line voltage $V_{AB}$ is taken as reference ($V_{AB} = V_m \angle 0^\circ$), what would be the phase of the secondary line voltage $v_{ab}$?**
    *   **Answer:** In Yd11, the secondary line voltage lags the primary line voltage by $11 \times 30^\circ = 330^\circ$ (or leads by $30^\circ$). If $V_{AB}$ is at $0^\circ$, then $v_{ab}$ would be at $-330^\circ$ or $+30^\circ$. Conventionally, we refer to the lag. So, $v_{ab}$ lags $V_{AB}$ by $330^\circ$, which is equivalent to $v_{ab}$ leading $V_{AB}$ by $30^\circ$. Therefore, the phase of $v_{ab}$ would be $+30^\circ$.

## Relation to Course Outcomes

*   **CO5: Describe the constructional details and operation of 3-phase transformers.**
    *   This topic directly addresses the operational aspects of 3-phase transformers by explaining how winding connections and phasing affect their behavior. Understanding vector groups is fundamental to describing their operation in a power system. (Knowledge Level: K2)
*   **CO4: Analyse the performance of 1-phase transformer and auto-transformer under various load conditions.**
    *   While this topic focuses on 3-phase transformers, the principles of voltage and current relationships in different winding configurations (Star and Delta) are transferable and relevant to understanding polyphase systems. The concept of phase displacement is a key aspect of performance analysis in interconnected systems. (Knowledge Level: K3)
*   **CO1, CO2, CO3:** These outcomes relate to DC Machines and are not directly addressed by this specific topic on transformer vector groups.
