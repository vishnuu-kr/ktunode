---
title: "Weir and barrage- Causes of failure of weirs on permeable soils - Bligh’s theory and Khosla’s theory"
subject: "DESIGN OF HYDRAULIC STRUCTURES"
module: "Module 1: Diversion head works"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811703"
status: "completed"
scrapedAt: "2026-05-20T18:57:41.252Z"
---
# DESIGN OF HYDRAULIC STRUCTURES - Module 1: Diversion Head Works

## Topic: Weir and Barrage - Causes of Failure of Weirs on Permeable Soils - Bligh’s Theory and Khosla’s Theory

---

### **1. Introduction to Diversion Head Works**

*   **Purpose:** To divert a portion of river water into an irrigation canal.
*   **Key Components:**
    *   **Weir or Barrage:** A structure across the river to raise the water level.
    *   **Canal Regulator:** Controls the flow of water into the canal.
    *   **Under Sluices:** Gates to scour sediment from the river bed in front of the weir.
    *   **End Sluices:** Gates to protect the flanks and scour sediment downstream.

---

### **2. Weirs and Barrages**

#### **2.1. Weirs**

*   **Definition:** A solid barrier constructed across a river to raise the water level upstream, facilitating diversion into a canal.
*   **Key Characteristic:** Generally has no gates for controlling river discharge. Water flows over the crest of the weir.
*   **Types:**
    *   **Weirs on Impervious Foundation:** Constructed on rock or hard stratum. Simpler in design, less prone to seepage issues.
    *   **Weirs on Permeable Foundation:** Constructed on permeable soil (sand, gravel). Requires careful consideration of seepage and uplift pressures.

#### **2.2. Barrages**

*   **Definition:** A diversion structure across a river with gates to control the flow and regulate the water level upstream.
*   **Key Characteristic:** Employs gates, allowing it to control both the water level and the river discharge. This allows for the passage of large floods without overtopping.
*   **Advantages over Weirs:**
    *   Better control over water levels.
    *   Ability to pass larger floods.
    *   Can be designed with reduced head over the crest.
    *   Better sediment exclusion by controlling the flow entering the canal.

---

### **3. Causes of Failure of Weirs on Permeable Soils**

Weirs on permeable foundations are susceptible to failure due to the flow of water through the soil beneath the structure. This seepage can lead to:

*   **Piping (or Tunneling):**
    *   **Mechanism:** Water seeps from the upstream side to the downstream side through the permeable soil. As it emerges at the downstream end, it carries soil particles with it, creating a subsurface tunnel or pipe. This process continues, widening the tunnel and undermining the downstream edge of the weir.
    *   **Consequence:** Eventually, the downstream foundation collapses, leading to the failure of the entire structure.
*   **Uplift Pressure:**
    *   **Mechanism:** Seepage of water under the weir creates hydrostatic pressure on the base of the structure, pushing it upwards. This uplift pressure counteracts the weight of the weir.
    *   **Consequence:** If the uplift pressure exceeds the weight of the structure (and any anchoring), it can cause the weir to float or topple.
*   **Scour:**
    *   **Mechanism:** High velocity of water flowing under the weir, especially where the seepage emerges at the downstream end, can erode the soil bed.
    *   **Consequence:** This scour can undermine the downstream foundation and contribute to piping.
*   **Structural Failure:**
    *   **Mechanism:** Due to excessive uplift pressures, differential settlement, or inadequate structural design.
    *   **Consequence:** Cracking, collapse of the weir body.

---

### **4. Theories for Seepage Analysis under Hydraulic Structures on Permeable Soils**

These theories help predict the seepage patterns, uplift pressures, and exit gradient to ensure the stability of the structure.

#### **4.1. Bligh’s Creepage Theory (or Theory of Horizontal and Vertical Percolation)**

*   **Proponent:** R.G. Bligh.
*   **Key Concept:** Seepage occurs along the path of the impervious floor of the structure. This path is composed of horizontal and vertical portions.
*   **Creepage Length (L):** The total length along the impervious floor, measured along the line of contact between the soil and the underside of the floor, from the upstream cut-off to the downstream cut-off.
    *   For horizontal lengths, the creep is considered to be horizontal.
    *   For vertical lengths (cut-offs), the creep is considered to be vertical.
    *   **Formula:** $L = \sum (\text{horizontal lengths}) + \sum (\text{vertical lengths})$
*   **Exit Gradient (G_e):** The hydraulic gradient at the point where the seepage water emerges on the downstream side. This is the most critical factor in preventing piping.
    *   **Formula:** $G_e = H / L$
        *   Where $H$ is the difference in head between the upstream and downstream water levels.
*   **Critical Gradient (G_c):** The maximum hydraulic gradient at which the soil can withstand seepage without being eroded. This depends on the soil's properties (effective size and specific gravity).
    *   Bligh suggested that for silts and fine sands, $G_c$ is around 1/17 to 1/20. For coarser sands and gravels, it's around 1/5 to 1/7.
*   **Factor of Safety against Piping (F):**
    *   **Formula:** $F = G_c / G_e$
    *   **Requirement:** Bligh recommended a minimum factor of safety of 4 for fine sand and 5 for fine silt.
*   **Length of Impervious Floor (b):**
    *   **Formula:** $b = H / (G_c \times F)$
*   **Depth of Vertical Cut-offs (d):**
    *   **Upstream Cut-off:** Depth $d_u$ is determined by the condition that its creep length, when added to the horizontal length of the floor, is sufficient to prevent piping.
        *   Creepage length from upstream cut-off = $d_u$.
        *   Total creep = $d_u + \sum (\text{horizontal lengths})$.
        *   For piping to be prevented: $d_u + \sum (\text{horizontal lengths}) \ge H / (G_c \times F)$.
    *   **Downstream Cut-off:** Depth $d_d$ is determined by the condition that its creep length, when added to the horizontal length of the floor, is sufficient to prevent piping.
        *   Creepage length from downstream cut-off = $d_d$.
        *   Total creep = $\sum (\text{horizontal lengths}) + d_d$.
        *   For piping to be prevented: $\sum (\text{horizontal lengths}) + d_d \ge H / (G_c \times F)$.
    *   **Bligh’s Rule for Cut-offs:**
        *   If the downstream weir edge is at the exit point, the downstream cut-off is not needed for creep considerations (but may be for scour).
        *   If a downstream cut-off is provided, it is usually made deeper than the upstream one to reduce the uplift pressure at the downstream edge. Bligh suggested making $d_d \approx 2d_u$.
*   **Limitations of Bligh’s Theory:**
    *   **Assumes creep occurs only along the floor and cut-offs:** Ignores vertical seepage through the soil below the floor, which is significant.
    *   **Assumes equal exit gradient along the entire downstream face:** In reality, the gradient is not uniform.
    *   **Concept of creep length is empirical:** Lacks a strong theoretical basis.
    *   **Does not account for uplift pressure directly:** It indirectly controls uplift by limiting the exit gradient.
    *   **Critical gradient is empirical and varies:** Not precise.

#### **4.2. Khosla’s Theory of Sub-Soil Flow**

*   **Proponent:** Dr. A.N. Khosla.
*   **Key Concept:** Treats seepage as a two-dimensional, irrotational, and steady flow of an incompressible fluid through a porous medium. It utilizes the **principle of superposition** and **conformal mapping** from fluid mechanics.
*   **Key Departures from Bligh's Theory:**
    *   **Considers vertical seepage:** Accounts for the flow of water downwards through the soil below the impervious floor, not just along its boundary.
    *   **Analyzes uplift pressure directly:** Calculates the pressure distribution beneath the structure.
    *   **Considers the effect of curvature:** Recognizes that the flow lines curve as they emerge on the downstream side.
    *   **Introduces the concept of "Influence Factor" and "Form Factor."**
*   **Key Concepts Introduced:**
    *   **Exit Gradient (G_e):** The hydraulic gradient at the point of exit of seepage water on the downstream side. This is still critical for preventing piping.
        *   **Khosla’s principle for exit gradient:** The maximum exit gradient occurs at the downstream edge of the impervious floor. For safe design, this gradient should not exceed the critical gradient of the soil.
    *   **Uplift Pressure:** The upward hydrostatic pressure exerted by the seepage water on the base of the structure.
    *   **Effective Pressure:** The pressure available for supporting the structure, which is the difference between the overburden pressure and the uplift pressure.
*   **Methods of Analysis:**
    *   **Analytical Solution:** For simple cases (e.g., rectangular floors with straight cut-offs), the flow can be analyzed using potential function and stream function.
    *   **Graphical Solution (Hydro-geometrical plane):** Developed by Khosla and his colleagues, using methods like **Curved ફિલ્ટર (Curved Filter)** or **Graphical Solution based on Conformal Mapping** to determine equipotential lines and stream lines.
    *   **Electrical Analogy:** Used to simulate the flow net.
*   **Key Findings and Corrections (Khosla's Corrections):**
    *   **Correction for Curvature:** Khosla showed that the equipotential gradient at the downstream end is not uniform and is affected by the curvature of the stream lines.
        *   **Correction for intermediate piles:** When a pile is located *between* the upstream and downstream edges of the floor, the uplift pressures on the floor are reduced.
        *   **Correction for outer piles:** When a pile is located at the *end* of the floor, the uplift pressure at that end is reduced, but the pressure on the floor beyond the pile is also affected.
        *   The effect of the slope of the downstream cutoff is also accounted for.
    *   **Upward Force (Uplift):** The total upward force is the integral of the uplift pressure along the base of the structure.
    *   **Downward Force:** The weight of the structure.
    *   **Net Stability:** The structure is stable if the downward forces (including effective weight and any anchoring) are greater than the upward force (uplift).
*   **Design Principles based on Khosla's Theory:**
    *   **Piping Control:** Ensure the exit gradient ($G_e$) is less than the critical gradient ($G_c$). The factor of safety against piping is $F = G_c / G_e$.
    *   **Uplift Pressure Control:** Ensure the uplift pressure is not so high that it causes flotation or structural damage. The structural design must account for the net downward force (weight minus uplift).
    *   **Depth of Cut-offs:**
        *   **Upstream Cut-off:** Primarily to reduce the head at the upstream end and thus reduce uplift pressure. Its depth is determined by considering the effect on the uplift pressure at the upstream edge.
        *   **Downstream Cut-off:** Primarily to reduce the exit gradient and prevent piping. Its depth is determined by ensuring the exit gradient at the downstream toe is within safe limits.
*   **Advantages of Khosla's Theory:**
    *   More rational and theoretically sound.
    *   Accounts for crucial factors like vertical seepage and curvature effects.
    *   Provides a more accurate estimation of uplift pressures.
    *   More adaptable to complex geometries.
*   **Disadvantages of Khosla's Theory:**
    *   More complex to apply than Bligh's theory.
    *   Requires specialized graphical or analytical tools.

---

### **5. Practice Questions and Exercises**

**Question 1 (Bligh's Theory):**
A weir is to be constructed on a permeable foundation. The head of water is 5m. The soil has a critical gradient of 1/25. A factor of safety of 5 against piping is required. Calculate:
a) The required creep length.
b) The length of the impervious floor if the downstream cut-off is to be at the downstream edge of the floor.
c) The depth of the upstream cut-off if it is placed at the upstream edge of the floor.
d) What would be the exit gradient if an upstream cut-off of 3m depth and a downstream cut-off of 6m depth are provided, and the floor length is 30m? (Assume no cut-off at upstream edge).

**Answer 1:**
a) Required creep length = $H / (G_c \times F) = 5 / (1/25 \times 5) = 5 / (1/5) = 25$ m.
b) Length of impervious floor = Required creep length - length of upstream cut-off (which is 0 if at upstream edge) = 25 m.
c) Depth of upstream cut-off ($d_u$): $d_u + \text{horizontal length} \ge \text{Required creep length}$. If the upstream cut-off is at the upstream edge, its vertical length contributes to creep. So, $d_u = 25$ m.
d) Total creep length = $d_u + \sum (\text{horizontal lengths}) + d_d = 3 + 30 + 6 = 39$ m.
Exit gradient = $H / (\text{Total creep length}) = 5 / 39 = 0.128$.
Critical gradient = 1/25 = 0.04.
Since the calculated exit gradient (0.128) is much higher than the critical gradient (0.04), this design would fail due to piping. (Note: The question asks for the exit gradient, not whether it's safe. This highlights the difference in approach).

**Question 2 (Conceptual):**
Explain the main difference between Bligh's theory and Khosla's theory regarding the flow of water under a weir.

**Answer 2:**
The main difference lies in how they model seepage. Bligh's theory considers seepage only along the path of the impervious floor and cut-offs (horizontal and vertical percolation). It ignores vertical flow through the soil below the floor. Khosla's theory, on the other hand, treats seepage as a two-dimensional flow through a porous medium, explicitly accounting for both horizontal and vertical flow paths and the curvature of flow lines. This leads Khosla's theory to provide a more accurate estimation of uplift pressures and exit gradients.

**Question 3 (Khosla's Theory):**
What are the 'corrections' introduced by Khosla in seepage analysis? Briefly explain the purpose of the correction for the 'outer pile'.

**Answer 3:**
Khosla introduced corrections to account for:
1.  **Curvature of flow lines:** The gradient is not uniform at the downstream edge.
2.  **Effect of intermediate piles:** Piles placed between the upstream and downstream edges of the floor reduce uplift pressures.
3.  **Effect of outer piles (end piles):** Piles placed at the ends of the floor reduce uplift pressures and the exit gradient.

The purpose of the **correction for the outer pile** (specifically a downstream outer pile) is to account for the reduction in uplift pressure at the downstream edge of the floor due to the presence of the pile. This pile obstructs the flow, causing a pressure drop, and effectively reduces the hydraulic gradient at the point of exit, thus enhancing safety against piping and reducing uplift forces.

---

### **6. Important Points to Remember**

*   **Weir vs. Barrage:** Weirs have no gates; barrages have gates for flow control.
*   **Permeable Foundations:** The primary concern is seepage, leading to piping and uplift.
*   **Piping:** Subsurface erosion by seepage water, leading to tunnel formation and failure.
*   **Exit Gradient:** The hydraulic gradient where water emerges downstream; must be less than the critical gradient to prevent piping.
*   **Uplift Pressure:** Hydrostatic pressure acting upwards on the base of the structure.
*   **Bligh's Theory:**
    *   Focuses on **creep length**.
    *   Assumes seepage only along the floor and cut-offs.
    *   Ignores vertical flow and curvature effects.
    *   Simpler but less accurate.
*   **Khosla's Theory:**
    *   Based on **two-dimensional flow net analysis**.
    *   Accounts for **vertical seepage and curvature**.
    *   Introduces **corrections** for piles and slopes.
    *   More accurate estimation of **uplift pressure and exit gradient**.
    *   More complex but preferred for critical structures.
*   **Safety against Piping:** Always check $G_e < G_c$. Bligh uses $F = G_c / G_e$. Khosla calculates $G_e$ directly and compares it.
*   **Depth of Cut-offs:** Upstream cut-offs primarily reduce uplift; downstream cut-offs primarily reduce exit gradient.

---
