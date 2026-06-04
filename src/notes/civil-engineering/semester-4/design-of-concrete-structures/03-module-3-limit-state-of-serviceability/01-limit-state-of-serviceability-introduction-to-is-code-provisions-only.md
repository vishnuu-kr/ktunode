---
title: "Limit State of Serviceability - Introduction to IS code provisions only"
subject: "DESIGN OF CONCRETE STRUCTURES"
module: "Module 3: Limit State of Serviceability "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109c8"
status: "completed"
scrapedAt: "2026-05-20T18:43:47.072Z"
---
# DESIGN OF CONCRETE STRUCTURES - Module 3: Limit State of Serviceability

## Topic: Limit State of Serviceability - Introduction to IS Code Provisions

This module introduces the concept of serviceability in concrete structures, focusing on the provisions outlined in the Indian Standard (IS) codes. Serviceability refers to the ability of a structure to perform its intended function satisfactorily under service loads without detrimental effects to its users or the environment.

---

### 1. Introduction to Limit State of Serviceability

*   **Definition:** The limit state of serviceability is concerned with the performance of the structure under service loads. It ensures that the structure remains fit for its intended use throughout its intended life.
*   **Service Loads:** These are the loads that are expected to occur during the normal use of the structure. They typically include dead loads, live loads, wind loads, and earthquake loads, but at their characteristic values, not factored for ultimate strength.
*   **Objective:** To ensure the structure:
    *   Does not undergo excessive deflection.
    *   Does not develop excessive cracking.
    *   Does not vibrate uncomfortably.
    *   Maintains adequate durability.
    *   Provides comfortable and safe environment for users.
*   **Importance:** While the limit state of collapse ensures safety, serviceability ensures usability and occupant comfort. A structure that is safe but uncomfortable or unusable due to excessive deflection or vibration is considered a failure from a serviceability perspective.

---

### 2. Relevant IS Codes and Clauses

The primary IS codes governing the design of concrete structures in India are:

*   **IS 456:2000 (Plain and Reinforced Concrete - Code of Practice):** This is the foundational code.
    *   **Chapter 5 (Durability):** While primarily focused on durability, it has direct implications for serviceability by specifying cover requirements, concrete grades, and exposure conditions which affect cracking and overall performance.
    *   **Chapter 7 (Workmanship):** While not directly about limit states, good workmanship is crucial for achieving desired serviceability.
    *   **Chapter 11 (Beams and Slabs):** Contains provisions related to deflection control and crack width limitations.
    *   **Chapter 12 (Columns):** Also includes deflection control for columns.
    *   **Chapter 13 (Foundations):** Indirectly relates to serviceability through settlement.
    *   **Chapter 14 (Water Tanks):** Has specific requirements for crack control in water-retaining structures.
    *   **Chapter 15 (Prestressed Concrete):** Deals with serviceability in prestressed concrete members.
*   **SP 16: Design Aids for IS 456:** Provides design charts and tables which can simplify the application of IS 456 provisions, including those for serviceability.
*   **IS 13920: Ductile Design and Detailing of Reinforced Concrete Structures Subjected to Seismic Forces - Code of Practice:** While focused on seismic design, it also incorporates serviceability aspects, particularly concerning crack control and detailing to prevent damage during moderate seismic events.

**Key Point:** The serviceability requirements are generally checked under characteristic loads, not the ultimate limit state factored loads.

---

### 3. Key Serviceability Requirements as per IS 456:2000

IS 456:2000 primarily addresses two major aspects of serviceability:

#### 3.1. Control of Deflections

*   **Objective:** To prevent excessive sagging or hogging of structural members which can lead to:
    *   Damage to finishes (plaster, partitions, etc.).
    *   Impairment of function (e.g., water pooling on roofs).
    *   Psychological discomfort to users.
*   **Provisions:** IS 456:2000 specifies **span-to-depth ratios** as a primary method for controlling deflections. These ratios are provided in **Table 4 (Maximum permissible limits for vertical deflection)** and **Table 5 (Maximum span to overall depth ratios for beams and slabs)**.
*   **Table 4 (Maximum permissible limits for vertical deflection):**
    *   **For members not supporting or attached to elements likely to be damaged by large deflections:**
        *   Span/250
    *   **For members supporting or attached to elements likely to be damaged by large deflections (e.g., glass panels, brittle partitions):**
        *   Span/350 or 20 mm, whichever is less.
    *   **For cantilever members:**
        *   Span/150 or 20 mm, whichever is less.
*   **Table 5 (Maximum span to overall depth ratios for beams and slabs):** These ratios are for **simply supported beams and slabs** and are modified based on:
    *   **Type of support:** Simply supported, Cantilever, Continuous.
    *   **Span of the beam/slab.**
    *   **Amount of tension reinforcement (percentage of area of steel).**
    *   **Amount of compression reinforcement (percentage of area of steel).**
*   **Calculation of Deflection:**
    *   Deflection is calculated based on the bending stiffness (EI) of the member and the applied loads.
    *   **Effective Moment of Inertia ($I_e$):** For cracked sections, the effective moment of inertia is used to account for the reduction in stiffness due to cracking. The formula for $I_e$ is given in IS 456:2000 (Clause 23.2.2).
        $$I_e = (\frac{I_{cr}}{1.15}) \times [1 + (\frac{\phi_c}{\alpha_e})^2] \ge I_{cr}$$
        Where:
        *   $I_{cr}$ = Moment of inertia of the cracked section.
        *   $\phi_c$ = Creep coefficient.
        *   $\alpha_e = E_s / E_c$ = Modular ratio.
    *   **Long-term deflection:** Deflection due to creep and shrinkage needs to be considered for long-term loads. The code specifies multiplying short-term deflection by a factor (often related to the creep coefficient).
*   **Alternative Method (Span-to-Depth Ratios):** The simplest and most common method is to ensure the actual span-to-depth ratio does not exceed the permissible limits given in Table 5. If these limits are satisfied, the deflection is generally considered to be within acceptable limits.

**Example:** A simply supported concrete beam with a span of 5m.
*   **Basic span-to-depth ratio for simply supported beam:** 20 (from Table 5).
*   **Modified ratio:** Let's assume the reinforcement percentage requires a reduction factor of 1.2.
    *   Permissible span/depth ratio = $20 \times 1.2 = 24$.
*   **Required depth:** If the span is 5000 mm, the minimum required depth $d$ would be:
    *   $5000 / d \le 24$
    *   $d \ge 5000 / 24 \approx 208.3$ mm.
    *   If the overall depth is considered, the ratio might be slightly different based on the actual depth.

**Important Point:** The span-to-depth ratios in IS 456 are **empirical guidelines**. If these are satisfied, explicit deflection calculations are often not required, unless specified for specific elements or conditions.

#### 3.2. Control of Cracking

*   **Objective:** To prevent cracking that is visually objectionable, impairs durability, or affects the structural integrity under service loads.
*   **Types of Cracking:**
    *   **Flexural Cracking:** Occurs on the tension face of a beam or slab due to bending.
    *   **Shear Cracking:** Occurs at an angle due to shear forces.
    *   **Bond Splitting Cracking:** Occurs due to poor bond between concrete and reinforcement.
    *   **Drying Shrinkage Cracking:** Occurs due to differential shrinkage of concrete.
    *   **Temperature Cracking:** Occurs due to thermal stresses.
*   **Provisions for Crack Control:**
    *   **Reinforcement Spacing:** IS 456:2000 specifies maximum spacing for reinforcement to ensure proper distribution of stress and minimize crack width.
        *   **Slabs:** Maximum spacing for main reinforcement is generally 3 times the effective depth or 300 mm, whichever is less. For distribution reinforcement, it's 5 times the effective depth or 450 mm, whichever is less. (Clause 24.3.2)
        *   **Beams:** Maximum spacing for tension reinforcement is the smaller of 3 times the effective depth or 300 mm. (Clause 26.5.1.2)
    *   **Diameter of Reinforcement:** Using smaller diameter bars more frequently is generally better for crack control than using fewer large diameter bars for the same total area of steel.
    *   **Type of Reinforcement:** High yield strength deformed bars (HYSD bars) generally exhibit better bond characteristics and can lead to reduced crack widths compared to mild steel bars.
    *   **Concrete Cover:** Adequate concrete cover (Clause 26.4) is essential for durability and protecting reinforcement from corrosion, which can indirectly lead to cracking.
    *   **Special Cases:** For specific structures like water tanks or buildings in aggressive environments, stricter crack width limits might be imposed, requiring more detailed analysis and design.

**Example:** In a simply supported slab of 4m span with 10mm diameter bars as main reinforcement.
*   Let effective depth ($d$) be 120 mm.
*   Permissible spacing (main reinforcement): $3 \times 120 = 360$ mm or $300$ mm, whichever is less. So, maximum spacing is 300 mm.
*   If 10mm bars are used, the area of one bar is $A_b = \pi/4 \times (10)^2 = 78.5 \text{ mm}^2$.
*   To achieve the required steel area, say 500 mm$^2$, the number of bars required is $500 / 78.5 \approx 6.38$. So, 7 bars are needed.
*   The spacing would be approximately (width of slab - cover - stirrup area) / (number of bars - 1). For a 1m width, and assuming nominal cover and stirrup, the spacing will be well within the 300 mm limit.

**Important Point:** The provisions for reinforcement spacing and diameter in IS 456 are generally intended to limit crack widths under service loads to acceptable levels without requiring explicit crack width calculations for typical structures.

---

### 4. Other Serviceability Considerations (Briefly Mentioned)

While IS 456:2000 primarily focuses on deflection and cracking, other serviceability aspects are important:

*   **Vibration:** Excessive vibrations can cause discomfort to occupants and potentially damage non-structural elements. Design considerations for vibration control are typically found in specialized codes or guidelines.
*   **Durability:** Long-term performance is also a serviceability aspect. Provisions for concrete cover, grade of concrete, and water-cement ratio are crucial for durability and preventing deterioration that can compromise serviceability.
*   **Fire Resistance:** The ability of a structure to withstand fire for a specified period is a serviceability requirement related to safety and occupancy. IS 1642:1960 specifies fire resistance requirements.
*   **Punching Shear:** In flat slabs and footings, punching shear is a critical limit state that needs to be checked under service loads.

---

### 5. Practice Questions and Exercises

**Question 1:**
According to IS 456:2000, what is the maximum permissible limit for vertical deflection for a beam supporting glass panels, expressed as a fraction of the span?

**Question 2:**
A simply supported reinforced concrete beam has a span of 6 meters. If the basic span-to-depth ratio for a simply supported beam is 20 as per IS 456:2000, and the modification factor for tension reinforcement is 1.2, what is the minimum permissible effective depth of the beam to satisfy serviceability requirements for deflection?

**Question 3:**
List any three provisions from IS 456:2000 that help in controlling cracking in concrete members.

**Question 4:**
What is the primary difference in the load conditions considered for the Limit State of Collapse versus the Limit State of Serviceability?

**Question 5:**
What are the two main serviceability limit states that are explicitly addressed with detailed provisions in IS 456:2000?

---

### 6. Answers to Practice Questions

**Answer 1:**
According to IS 456:2000, for members supporting or attached to elements likely to be damaged by large deflections, the maximum permissible limit for vertical deflection is Span/350 or 20 mm, whichever is less. Thus, the limit expressed as a fraction of the span is **Span/350**.

**Answer 2:**
*   Permissible span-to-depth ratio = Basic ratio × Modification factor
*   Permissible span-to-depth ratio = $20 \times 1.2 = 24$
*   Span = 6 meters = 6000 mm
*   Let the effective depth be $d$.
*   Span/d $\le$ Permissible ratio
*   $6000 / d \le 24$
*   $d \ge 6000 / 24$
*   $d \ge 250$ mm
*   The minimum permissible effective depth is **250 mm**.

**Answer 3:**
Three provisions from IS 456:2000 that help in controlling cracking are:
1.  **Maximum spacing of reinforcement:** Limiting the spacing of tension reinforcement in beams and slabs (e.g., lesser of 3d or 300 mm for beams).
2.  **Use of smaller diameter bars:** Using more bars of smaller diameter instead of fewer bars of larger diameter for the same area of steel.
3.  **Adequate concrete cover:** Providing sufficient concrete cover to protect reinforcement and manage stress distribution.
4.  **Type of reinforcement:** Employing HYSD bars with better bond characteristics.

**Answer 4:**
*   **Limit State of Collapse:** Checked under **factored loads** (loads multiplied by partial safety factors) to ensure the structure does not fail catastrophically.
*   **Limit State of Serviceability:** Checked under **characteristic loads** (unfactored service loads) to ensure the structure remains functional and comfortable during its normal use.

**Answer 5:**
The two main serviceability limit states explicitly addressed with detailed provisions in IS 456:2000 are:
1.  **Control of Deflections**
2.  **Control of Cracking**

---

### Important Points to Remember:

*   **Serviceability** ensures usability and comfort, complementing the safety provided by the Limit State of Collapse.
*   Serviceability checks are performed under **characteristic (unfactored) loads**.
*   **IS 456:2000** is the primary code for concrete structures in India, with **Chapter 11 (Beams and Slabs)** and **Chapter 12 (Columns)** containing key deflection control provisions.
*   **Span-to-depth ratios** are the most common method to control deflections without explicit calculations.
*   Crack control is achieved through **proper detailing** of reinforcement, including spacing, diameter, and type of bars.
*   The serviceability requirements are crucial for the **long-term performance and acceptance** of a structure.
*   While IS 456 focuses on deflection and cracking, other serviceability aspects like vibration, durability, and fire resistance are also important and covered in other codes.
