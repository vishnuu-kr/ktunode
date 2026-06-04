---
title: "Dynamic formulae (Modified Hiley formulae only) – Numerical Problems"
subject: "FOUNDATION ENGINEERING"
module: "Module 4: Pile foundations: Uses and classification of piles "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e44"
status: "completed"
scrapedAt: "2026-05-20T18:48:43.177Z"
---
# FOUNDATION ENGINEERING: Module 4 - Pile Foundations

## Topic: Dynamic Formulae (Modified Hiley Formula) - Numerical Problems

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the principle behind dynamic formulae for estimating pile capacity.
*   Apply the Modified Hiley Formula to calculate the ultimate bearing capacity of a pile under a drop hammer.
*   Interpret the various components and parameters within the Modified Hiley Formula.
*   Solve numerical problems involving the Modified Hiley Formula.

---

### 1. Introduction to Dynamic Formulae

**1.1 What are Dynamic Formulae?**

*   Dynamic formulae are empirical relationships used to estimate the ultimate bearing capacity of a pile based on the energy delivered by a pile-driving hammer and the resulting penetration of the pile into the soil.
*   They are useful for quickly estimating pile capacity during the driving process, particularly in the absence of detailed soil investigation data or during preliminary design.
*   These formulae are derived from the principles of energy transfer and momentum.

**1.2 Principle of Operation:**

*   A hammer of known weight strikes the pile head.
*   The kinetic energy of the hammer is transferred to the pile.
*   This energy is used to overcome the resistance of the soil (skin friction and end bearing) and cause the pile to penetrate the soil.
*   The amount of penetration per blow (set) is measured.
*   The dynamic formula relates the hammer energy, pile properties, and soil resistance to the observed set.

**1.3 Limitations of Dynamic Formulae:**

*   **Empirical Nature:** They are based on correlations and may not accurately reflect the complex soil-pile interaction, especially in varying soil conditions.
*   **Assumptions:** They often make simplifying assumptions about the distribution of energy and resistance.
*   **Hammer Efficiency:** The efficiency of energy transfer from the hammer to the pile can vary significantly.
*   **Soil Behavior:** They don't account for time-dependent effects like thixotropy or pore water pressure dissipation.
*   **Pile Driving Method:** Different hammer types and driving methods can lead to different results.
*   **Static Load Test is Preferred:** Dynamic formulae provide an *estimate*. A static load test is the most reliable method for determining ultimate pile capacity.

---

### 2. The Modified Hiley Formula

The Modified Hiley Formula is a widely used dynamic formula that attempts to account for more factors than simpler formulae. It is generally considered more accurate for a wider range of conditions.

**2.1 Formula:**

The Modified Hiley Formula for the ultimate bearing capacity ($Q_u$) is given by:

$Q_u = \frac{E_h \eta_h \eta_s \eta_p \eta_{b}}{c + s}$

Where:

*   $Q_u$: Ultimate bearing capacity of the pile (kN)
*   $E_h$: Energy delivered by the hammer per blow (kNm). This is calculated as $E_h = W_h \times h$, where $W_h$ is the weight of the hammer (in kN) and $h$ is the height of fall (in meters).
*   $\eta_h$: Hammer efficiency factor. This accounts for energy lost in the hammer itself (e.g., due to recoil).
*   $\eta_s$: Efficiency of the pile cap or dolly. This accounts for energy lost between the hammer and the pile.
*   $\eta_p$: Efficiency of the pile. This accounts for energy lost due to the pile's internal stresses and vibrations.
*   $\eta_b$: Efficiency of the driving cap or helmet. This accounts for energy lost in the driving cap.
*   $c$: Coefficient of restitution (depends on the materials of the hammer and pile head).
*   $s$: Permanent set or penetration of the pile per blow (mm).

**2.2 Components and Their Typical Values/Considerations:**

*   **$E_h$ (Hammer Energy):**
    *   $W_h$: Weight of the falling mass (hammer).
    *   $h$: Height of fall of the hammer.
    *   **Important:** Ensure consistent units (kN for weight, meters for height).

*   **Efficiency Factors ($\eta_h, \eta_s, \eta_p, \eta_b$):**
    *   These factors are crucial for making the formula more realistic. They are often determined from experience and empirical data.
    *   **$\eta_h$ (Hammer Efficiency):**
        *   Drop Hammers: Typically 0.7 to 0.9. Lower values for older or less efficient hammers.
        *   Diesel Hammers: Can be higher, often around 0.8 to 1.0.
    *   **$\eta_s$ (Pile Cap/Dolly Efficiency):**
        *   Accounts for energy loss between the hammer striking the dolly and the dolly transferring it to the pile.
        *   Can be around 0.9 to 1.0 for well-designed cap/dolly systems.
    *   **$\eta_p$ (Pile Efficiency):**
        *   Accounts for energy dissipated within the pile due to elastic compression and vibrations.
        *   Typically around 0.9 to 1.0 for concrete piles. Lower for steel or timber.
    *   **$\eta_b$ (Driving Cap/Helmet Efficiency):**
        *   Similar to $\eta_s$, accounts for energy loss at the pile head if a helmet is used.
        *   Can be around 0.9 to 1.0.

    *   **Combined Efficiency ($\eta$):** Sometimes, these efficiencies are combined into a single factor: $\eta = \eta_h \times \eta_s \times \eta_p \times \eta_b$. This combined factor often ranges from 0.3 to 0.7.

*   **$c$ (Coefficient of Restitution):**
    *   Represents the ratio of the relative velocity of separation to the relative velocity of approach between the hammer and the pile.
    *   It depends on the materials in contact.
    *   **Typical Values:**
        *   Steel striking steel: 0.2 to 0.5
        *   Steel striking concrete: 0.1 to 0.3
        *   Steel striking timber: 0.1 to 0.2

*   **$s$ (Permanent Set):**
    *   The penetration of the pile into the soil per blow, *after the hammer has rebounded*.
    *   **Units:** Must be in **millimeters (mm)** as per the standard formula.

**2.3 Modified Formula with Combined Efficiency:**

Often, the formula is presented with a combined efficiency factor:

$Q_u = \frac{E_h \times \eta}{c + s}$

Where $\eta = \eta_h \times \eta_s \times \eta_p \times \eta_b$.

---

### 3. Numerical Problems and Examples

**Key Steps for Solving Problems:**

1.  **Identify Given Information:** List all the parameters provided in the problem statement.
2.  **Check Units:** Ensure all units are consistent, especially for weight, height, and set. Convert if necessary.
3.  **Determine/Assume Efficiency Factors:** If not provided, use typical values or as instructed.
4.  **Calculate Hammer Energy ($E_h$):** $E_h = W_h \times h$.
5.  **Convert Set to Meters:** If the set is given in mm, divide by 1000 to convert to meters.
6.  **Apply the Formula:** Substitute the values into the Modified Hiley Formula.
7.  **Calculate $Q_u$:** Perform the calculation to find the ultimate bearing capacity.
8.  **Apply a Factor of Safety (if required):** Usually, a factor of safety (e.g., 2 or 3) is applied to the ultimate bearing capacity to get the safe working load. The problem will specify if this is needed.

**Example 1:**

A concrete pile, 10m long and 0.3m x 0.3m in section, is driven by a drop hammer weighing 20 kN. The height of fall of the hammer is 0.75 m. The coefficient of restitution between the hammer and pile cap is 0.3. The average permanent set of the pile per blow is 5 mm. Assume the following efficiency factors: hammer efficiency ($\eta_h$) = 0.8, pile cap efficiency ($\eta_s$) = 0.95, pile efficiency ($\eta_p$) = 0.9. Calculate the ultimate bearing capacity of the pile using the Modified Hiley Formula.

**Solution:**

**Given:**
*   $W_h = 20$ kN
*   $h = 0.75$ m
*   $c = 0.3$
*   $s = 5$ mm
*   $\eta_h = 0.8$
*   $\eta_s = 0.95$
*   $\eta_p = 0.9$

**Calculations:**

1.  **Hammer Energy ($E_h$):**
    $E_h = W_h \times h = 20 \text{ kN} \times 0.75 \text{ m} = 15 \text{ kNm}$

2.  **Convert Set to Meters:**
    $s = 5 \text{ mm} = \frac{5}{1000} \text{ m} = 0.005 \text{ m}$

3.  **Calculate Combined Efficiency ($\eta$):**
    Assuming no driving cap efficiency is mentioned, $\eta_b = 1.0$.
    $\eta = \eta_h \times \eta_s \times \eta_p \times \eta_b = 0.8 \times 0.95 \times 0.9 \times 1.0 = 0.684$

4.  **Apply Modified Hiley Formula:**
    $Q_u = \frac{E_h \times \eta}{c + s}$
    $Q_u = \frac{15 \text{ kNm} \times 0.684}{0.3 + 0.005 \text{ m}}$
    $Q_u = \frac{10.26}{0.305} \text{ kN}$
    $Q_u \approx 33.64 \text{ kN}$

**Answer:** The ultimate bearing capacity of the pile is approximately 33.64 kN.

**Example 2:**

A concrete pile is driven by a single-acting steam hammer. The weight of the hammer is 30 kN, and the effective energy per blow is 80% of the hammer weight falling from a height of 1.0 m. The coefficient of restitution between the hammer and the pile helmet is 0.2. The pile is driven into the ground with a final set of 8 mm per blow. The efficiency of the pile is 0.9. The driving helmet efficiency is 0.95. Calculate the ultimate bearing capacity.

**Solution:**

**Given:**
*   $W_h = 30$ kN
*   $h = 1.0$ m (effective fall)
*   Energy delivered ($E_h$) = 80% of $W_h \times h$
*   $c = 0.2$
*   $s = 8$ mm
*   $\eta_p = 0.9$
*   $\eta_b = 0.95$ (driving helmet efficiency)

**Calculations:**

1.  **Hammer Energy ($E_h$):**
    $E_h = 0.80 \times (W_h \times h) = 0.80 \times (30 \text{ kN} \times 1.0 \text{ m}) = 24 \text{ kNm}$
    *(Note: Here, the hammer efficiency $\eta_h$ is implicitly included in the 'effective energy'.)*

2.  **Convert Set to Meters:**
    $s = 8 \text{ mm} = \frac{8}{1000} \text{ m} = 0.008 \text{ m}$

3.  **Calculate Combined Efficiency ($\eta$):**
    We have $\eta_p$ and $\eta_b$. We can assume $\eta_h = 1.0$ since the "effective energy" is given, and $\eta_s = 1.0$ as no pile cap is mentioned.
    $\eta = \eta_h \times \eta_s \times \eta_p \times \eta_b = 1.0 \times 1.0 \times 0.9 \times 0.95 = 0.855$

4.  **Apply Modified Hiley Formula:**
    $Q_u = \frac{E_h \times \eta}{c + s}$
    $Q_u = \frac{24 \text{ kNm} \times 0.855}{0.2 + 0.008 \text{ m}}$
    $Q_u = \frac{20.52}{0.208} \text{ kN}$
    $Q_u \approx 98.65 \text{ kN}$

**Answer:** The ultimate bearing capacity of the pile is approximately 98.65 kN.

---

### 4. Practice Questions

**Question 1:**

A concrete pile is driven with a hammer weighing 25 kN falling from a height of 0.8 m. The coefficient of restitution between the hammer and the pile head is 0.25. The final set of the pile is 6 mm per blow.
Assume:
*   Hammer efficiency ($\eta_h$) = 0.85
*   Pile cap efficiency ($\eta_s$) = 0.9
*   Pile efficiency ($\eta_p$) = 0.92
*   Driving cap efficiency ($\eta_b$) = 1.0 (no driving cap used)

Calculate the ultimate bearing capacity of the pile using the Modified Hiley Formula.

**Answer 1:**
*   $E_h = 25 \text{ kN} \times 0.8 \text{ m} = 20 \text{ kNm}$
*   $s = 6 \text{ mm} = 0.006 \text{ m}$
*   $\eta = 0.85 \times 0.9 \times 0.92 \times 1.0 = 0.7044$
*   $Q_u = \frac{20 \text{ kNm} \times 0.7044}{0.25 + 0.006 \text{ m}} = \frac{14.088}{0.256} \approx 55.03 \text{ kN}$

**Question 2:**

A 12 kN drop hammer falls from a height of 0.6 m onto a concrete pile. The coefficient of restitution between the hammer and the pile is 0.2. The average penetration per blow is 4 mm. The overall efficiency of the hammer and pile system is taken as 0.4. Calculate the ultimate bearing capacity of the pile.

**Answer 2:**
*   $E_h = 12 \text{ kN} \times 0.6 \text{ m} = 7.2 \text{ kNm}$
*   $s = 4 \text{ mm} = 0.004 \text{ m}$
*   $\eta = 0.4$ (combined efficiency given)
*   $Q_u = \frac{7.2 \text{ kNm} \times 0.4}{0.2 + 0.004 \text{ m}} = \frac{2.88}{0.204} \approx 14.12 \text{ kN}$

**Question 3:**

A concrete pile is driven by a hammer weighing 40 kN with a fall of 0.5 m. The pile penetrates 5 mm per blow. The coefficient of restitution is 0.3. The efficiencies are: hammer 0.8, pile cap 0.95, pile 0.9. Calculate the ultimate bearing capacity. What would be the safe working load if a factor of safety of 2.5 is applied?

**Answer 3:**
*   $E_h = 40 \text{ kN} \times 0.5 \text{ m} = 20 \text{ kNm}$
*   $s = 5 \text{ mm} = 0.005 \text{ m}$
*   $\eta = 0.8 \times 0.95 \times 0.9 = 0.684$
*   $Q_u = \frac{20 \text{ kNm} \times 0.684}{0.3 + 0.005 \text{ m}} = \frac{13.68}{0.305} \approx 44.85 \text{ kN}$
*   Safe Working Load = $Q_u / \text{FOS} = 44.85 \text{ kN} / 2.5 \approx 17.94 \text{ kN}$

---

### 5. Important Points to Remember

*   **Units are Crucial:** Always ensure consistency, especially converting millimeters for 'set' to meters.
*   **Understand Each Parameter:** Know what each efficiency factor, coefficient of restitution, and energy term represents.
*   **Combined Efficiency:** Be aware that sometimes a single combined efficiency factor is provided, simplifying calculations.
*   **Factor of Safety:** Dynamic formulae estimate *ultimate* capacity. A factor of safety is almost always applied for *safe working loads*.
*   **Empirical Nature:** Remember these are estimates. Static load tests are the definitive method for pile capacity determination.
*   **Context:** The accuracy of dynamic formulae depends heavily on the soil type, pile material, and hammer type.

---
This concludes the study notes for Dynamic Formulae (Modified Hiley Formula) in Pile Foundations. Practice these problems to build your understanding.
