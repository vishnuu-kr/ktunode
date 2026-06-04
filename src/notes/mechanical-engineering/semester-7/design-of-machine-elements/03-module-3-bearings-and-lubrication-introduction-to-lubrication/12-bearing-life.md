---
title: "Bearing life"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 3: Bearings and Lubrication: Introduction to lubrication"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d79"
status: "completed"
scrapedAt: "2026-05-20T18:11:06.879Z"
---
# DESIGN OF MACHINE ELEMENTS

## Module 3: Bearings and Lubrication: Introduction to Lubrication

### Topic: Bearing Life

**Learning Outcomes:**

*   Understand the fundamental concepts of bearing life.
*   Identify factors influencing bearing life.
*   Differentiate between static and dynamic load ratings.
*   Apply relevant equations and methodologies for calculating basic rating life.
*   Understand the concept of life adjustment factors and their application.
*   Discuss methods for improving bearing life.

---

### 1. Introduction to Bearing Life

Bearing life is a critical parameter in the design and selection of bearings for various machine elements. It represents the expected duration or number of revolutions a bearing can operate reliably under specified conditions before failure. Understanding bearing life is essential for ensuring the longevity, performance, and cost-effectiveness of machinery.

**Key Concepts:**

*   **Bearing Failure:** Bearing failure can manifest in several ways, including:
    *   **Surface Fatigue (Spalling/Pitting):** The most common mode of failure, characterized by material flaking from the raceways or rolling elements due to repeated stress cycles.
    *   **Wear:** Gradual removal of material from the contacting surfaces due to friction, abrasion, or corrosion.
    *   **Deformation:** Permanent change in shape of bearing components.
    *   **Corrosion:** Degradation of material due to chemical reactions.
    *   **Cage Failure:** Breakage or deformation of the retainer.
*   **Reliability:** The probability that a bearing will operate without failure within a given period or number of revolutions.
*   **Rating Life (L10 Life):** The life that 90% of a large group of apparently identical bearings can expect to achieve or exceed under specified operating conditions. This is the standard basis for bearing life calculations.

**Relation to Course Outcomes:**

This topic directly contributes to **CO3: Develop of Sliding contact bearing for industrial applications** and **CO4: Choose a suitable Rolling contact bearing from manufacturer’s Catalogue for a specific application**. Understanding bearing life is fundamental for selecting appropriate bearings and predicting their performance in real-world applications.

---

### 2. Factors Affecting Bearing Life

Several factors significantly influence the life of a rolling contact bearing. These can be broadly categorized as:

**a) Load:**

*   **Magnitude of Load:** Higher loads induce greater stresses on the bearing components, leading to a shorter life.
*   **Type of Load:** Radial, axial, or combined loads affect the stress distribution and contact mechanics.
*   **Load Fluctuations:** Dynamic or shock loads can cause higher stress peaks, reducing life.
*   **Load Distribution:** Uneven load distribution can lead to premature failure in highly stressed areas.

**b) Speed:**

*   **Rotational Speed:** Higher speeds can lead to increased operating temperatures, lubricant degradation, and centrifugal forces, all of which can impact bearing life. However, for a given load, higher speeds might also mean reaching the L10 life in a shorter *time*, but the *number of revolutions* is the primary metric for life.

**c) Lubrication:**

*   **Type of Lubricant:** Grease or oil, and their specific properties (viscosity, additives).
*   **Lubricant Quality:** Contamination or degradation of lubricant significantly reduces life.
*   **Lubrication Method:** Proper lubrication is crucial for film formation and preventing direct metal-to-metal contact.
*   **Lubricant Viscosity:** The viscosity must be appropriate for the operating speed and temperature to ensure adequate film thickness.

**d) Material Properties:**

*   **Material of Rolling Elements and Raceways:** The hardness, toughness, and fatigue strength of the bearing steel are critical. High-quality bearing steels (e.g., AISI 52100) are typically used.
*   **Surface Finish:** Smooth surfaces reduce friction and wear.

**e) Operating Temperature:**

*   **High Temperatures:** Can lead to lubricant breakdown, thermal expansion, and reduced material strength.
*   **Low Temperatures:** Can affect lubricant viscosity and introduce issues with start-up.

**f) Contamination:**

*   **Dirt and Debris:** Abrasive particles entering the bearing can cause wear, pitting, and premature failure.
*   **Moisture:** Can lead to corrosion.

**g) Alignment:**

*   **Misalignment:** Angular or parallel misalignment can lead to uneven load distribution and stress concentrations, reducing life.

**h) Installation:**

*   **Improper Mounting:** Can induce residual stresses or misalignment.

**Referencing Textbooks:**

*   **Bhandari (5th Ed.):** Chapters on rolling contact bearings will extensively discuss these factors and their impact on life.
*   **Norton (5th Ed.):** Similar coverage of bearing types and factors influencing their performance and life.
*   **Mahadevan & Reddy (4th Ed.) / PSG Design Data:** These handbooks often provide charts, tables, and formulas related to these influencing factors.

---

### 3. Static Load Rating ($C_0$) and Dynamic Load Rating ($C$)

**a) Static Load Rating ($C_0$):**

*   **Definition:** The static load rating is the load that produces a specified permanent deformation at the center of the most heavily loaded rolling element and its corresponding raceway. For ball bearings, this deformation is typically 0.0001 times the ball diameter. For roller bearings, it's often 0.0001 times the roller diameter or a specific allowable contact stress.
*   **Significance:** This rating is important for applications where the bearing is subjected to significant loads while stationary or rotating at very low speeds. It ensures that the bearing does not suffer permanent damage or deformation that would prevent it from operating correctly when motion is restored.
*   **Units:** Typically expressed in Newtons (N) or kilonewtons (kN).
*   **Reference:** Manufacturers' catalogs provide static load ratings for their bearings.

**b) Dynamic Load Rating ($C$):**

*   **Definition:** The dynamic load rating is the constant, radial load (for radial bearings) or axial load (for thrust bearings) that a single row of ball bearings can theoretically endure for one million revolutions of the inner ring. For roller bearings, it's the load that a single row of rollers can endure for one million revolutions.
*   **Significance:** This is the most common rating used for calculating bearing life under dynamic operating conditions. It's based on the fatigue life of the material under repeated stress cycles.
*   **Units:** Typically expressed in Newtons (N) or kilonewtons (kN).
*   **Types:**
    *   **Basic Dynamic Radial Load Rating ($C$):** For radial bearings, used when the load is predominantly radial.
    *   **Basic Dynamic Thrust Load Rating ($C_a$):** For thrust bearings, used when the load is predominantly axial.
*   **Reference:** Manufacturers' catalogs provide basic dynamic load ratings.

**Important Point to Remember:** The dynamic load rating is a statistical value related to the fatigue life of the bearing material. It's not a load that will cause immediate failure.

---

### 4. Bearing Life Calculation

The life of a rolling contact bearing is typically expressed in terms of **revolutions** or **operating hours**. The most common method for calculating bearing life is based on the work done by Lundberg and Palmgren.

**a) Basic Rating Life ($L_{10}$):**

The basic rating life ($L_{10}$) for ball bearings is given by:

$L_{10} = (\frac{C}{P})^{p}$

And for roller bearings:

$L_{10} = (\frac{C}{P})^{p'}$

Where:

*   $L_{10}$: Basic rating life in millions of revolutions.
*   $C$: Basic dynamic load rating (N or kN).
*   $P$: Equivalent dynamic bearing load (N or kN). This is the hypothetical radial load that would produce the same effect on the bearing life as the actual combined radial and axial loads. The calculation of $P$ depends on the ratio of applied axial load ($F_a$) to radial load ($F_r$) and the bearing type.
*   $p$: Exponent for ball bearings, $p = 3$.
*   $p'$: Exponent for roller bearings, $p' = 10/3 \approx 3.33$.

**b) Calculating Equivalent Dynamic Bearing Load ($P$):**

The calculation of $P$ is crucial and depends on the type of bearing and the magnitude of the applied radial ($F_r$) and axial ($F_a$) loads. For most common cases, the equivalent load $P$ is calculated using factors provided by manufacturers based on empirical data and theoretical analysis.

The general form is often:

$P = X F_r + Y F_a$

Where:

*   $X$: Radial load factor.
*   $Y$: Axial load factor.

The values of $X$ and $Y$ are determined from tables or charts provided by bearing manufacturers (e.g., SKF, NSK, FAG). These tables depend on:

*   The bearing type (deep groove ball bearing, angular contact ball bearing, spherical roller bearing, cylindrical roller bearing, etc.).
*   The ratio of the applied axial load to the basic static load rating ($F_a/C_0$).
*   The ratio of the applied axial load to the applied radial load ($F_a/F_r$).

**Example (Deep Groove Ball Bearing):**

For a deep groove ball bearing, if $F_a/F_r \le e$, then $P = F_r$. If $F_a/F_r > e$, then $P = X F_r + Y F_a$. The value of $e$ is a limiting value that depends on the bearing geometry and is provided by manufacturers.

**c) Life in Hours ($L_h$):**

If the bearing operates at a constant speed $n$ (rpm), the life in hours can be calculated as:

$L_h = \frac{L_{10} \times 10^6}{60 \times n}$

Where:
*   $L_h$: Basic rating life in hours.
*   $L_{10}$: Basic rating life in millions of revolutions.
*   $n$: Rotational speed in revolutions per minute (rpm).

**Referencing Textbooks and Data Books:**

*   **Bhandari (5th Ed.), Norton (5th Ed.):** Will detail the procedures for calculating $P$ and $L_{10}$.
*   **Bhandari's Machine Design Data Book, Mahadevan & Reddy's Design Data Hand Book, PSG Design Data:** These are invaluable for providing tables of $X$, $Y$, and $e$ values for various bearing types and manufacturers' specifications.
*   **Shigley (2003), Juvinall & Marshek (5th Ed.), Spotts & Shoup (8th Ed.):** Offer foundational principles and examples of bearing life calculations.

---

### 5. Life Adjustment Factors ($a_1$)

The basic rating life ($L_{10}$) is calculated under idealized conditions. In real-world applications, various factors can deviate from these ideal conditions, requiring adjustments to the calculated life. The overall reliability can be expressed using a life adjustment factor ($a_1$).

The **Adjusted Life ($L_a$)** is given by:

$L_a = a_1 \times L_{10}$

The life adjustment factor $a_1$ accounts for:

*   **Reliability:** The basic rating life $L_{10}$ corresponds to 90% reliability. If a different reliability level is required, $a_1$ is used to adjust the life. For example, for 95% reliability, $a_1$ is approximately 0.62. For 99% reliability, $a_1$ is approximately 0.22. The relationship between $a_1$ and reliability ($R$) is often given by:
    $a_1 = (log \frac{1}{R})^{1/p}$ (for ball bearings) or $(log \frac{1}{R})^{1/p'}$ (for roller bearings).
*   **Lubrication Conditions:** The quality of lubrication, including viscosity and cleanliness, significantly impacts life. A lubrication factor ($a_{lub}$) is often incorporated, where $a_1$ is replaced by $a_{lub}$ in the life equation. If lubrication is considered poor, $a_{lub}$ might be less than 1.
*   **Material Properties and Manufacturing:** Differences in steel quality, heat treatment, and manufacturing processes can influence life. This is sometimes accounted for by a material factor ($a_{mat}$), though modern bearing standards often incorporate high-quality materials into the basic rating.
*   **Contamination:** The presence of contaminants can drastically reduce bearing life. Special considerations or factors might be applied for contaminated environments.

**Generalized Bearing Life Equation (ISO 281:2003 and later):**

A more advanced and widely accepted method, particularly in European standards (ISO), involves a generalized bearing life equation:

$L = (\frac{C}{P})^p \times Z_W$

Where:

*   $L$: Bearing life in millions of revolutions.
*   $C$: Dynamic load rating.
*   $P$: Equivalent dynamic load.
*   $p$: Exponent (3 for ball, 10/3 for roller).
*   $Z_W$: Life modification factor for reliability and contaminants (this is the key adjustment factor).

The factor $Z_W$ can be expressed as:

$Z_W = Z_1 \times Z_2 \times Z_3$

*   $Z_1$: Reliability factor.
*   $Z_2$: Lubrication factor (related to viscosity ratio $\kappa$).
*   $Z_3$: Contamination factor.

The calculation of these factors involves complex charts and formulas provided by bearing manufacturers and relevant standards (e.g., ISO 281).

**Important Point to Remember:** The choice of reliability directly impacts the calculated life. A higher reliability requirement will result in a shorter calculated life for a given load and bearing.

**Referencing Textbooks and Standards:**

*   **Bhandari (5th Ed.), Norton (5th Ed.):** May introduce basic life adjustment factors.
*   **Shigley (2003), Juvinall & Marshek (5th Ed.), Spotts & Shoup (8th Ed.):** Provide theoretical background.
*   **Klebanov, Barlam, Nystrom (2019):** "Machine Elements: Life and Design" is specifically focused on life calculations and could offer in-depth treatment of adjustment factors.
*   **Manufacturers' Technical Literature:** Crucial for accurate values of $Z_1, Z_2, Z_3$ and the generalized life equation.

---

### 6. Improving Bearing Life

Several design and operational strategies can be employed to enhance the service life of bearings:

*   **Select a Bearing with a Higher Load Rating:** Choose a larger or more robust bearing type if space and cost permit.
*   **Reduce the Applied Load:** Optimize the overall machine design to minimize the loads transmitted to the bearing.
*   **Improve Lubrication:**
    *   Use the correct lubricant type and viscosity.
    *   Ensure adequate lubricant supply and filtration.
    *   Maintain the lubricant in good condition (prevent contamination and degradation).
*   **Control Operating Temperature:**
    *   Provide adequate cooling for the bearing or the system.
    *   Ensure proper ventilation.
*   **Minimize Contamination:**
    *   Use effective seals and shields to prevent the ingress of dirt and moisture.
    *   Maintain a clean operating environment.
*   **Ensure Proper Alignment:**
    *   Accurate shaft and housing alignment during installation is critical.
    *   Use self-aligning bearings if misalignment is unavoidable.
*   **Proper Installation Techniques:**
    *   Follow manufacturer recommendations for mounting and preloading.
*   **Use Higher Quality Bearings:** Select bearings from reputable manufacturers known for their material quality and manufacturing precision.
*   **Reduce Operating Speed (if possible and feasible):** If speed is a critical factor for life reduction, exploring options for lower speeds might be beneficial.

**Referencing Textbooks:**

*   All listed textbooks and handbooks will offer guidance on these practices within their respective chapters on bearings and lubrication.

---

### 7. Practice Questions and Exercises

**Question 1:**

A deep groove ball bearing is subjected to a radial load of 4000 N and an axial load of 2000 N. The basic dynamic radial load rating ($C$) of the bearing is 25,000 N, and its basic static load rating ($C_0$) is 15,000 N. The limiting factor $e$ for this bearing is 0.25. The bearing operates at 800 rpm. Determine the basic rating life of the bearing in millions of revolutions.

**Answer:**

1.  **Calculate the load ratio:**
    $F_a/F_r = 2000 \text{ N} / 4000 \text{ N} = 0.5$

2.  **Compare with limiting factor $e$:**
    Since $F_a/F_r (0.5) > e (0.25)$, we need to use the combined load formula.

3.  **Determine $X$ and $Y$ factors:**
    From bearing tables (e.g., in Bhandari's Data Book or PSG Data), for a deep groove ball bearing with $F_a/F_r = 0.5$, the typical values for $X$ and $Y$ are approximately:
    $X = 0.56$
    $Y = 1.57$
    *(Note: These values are illustrative. Actual values must be obtained from specific bearing manufacturer catalogs or reliable design data books for the particular bearing series).*

4.  **Calculate the equivalent dynamic load ($P$):**
    $P = X F_r + Y F_a$
    $P = (0.56 \times 4000 \text{ N}) + (1.57 \times 2000 \text{ N})$
    $P = 2240 \text{ N} + 3140 \text{ N}$
    $P = 5380 \text{ N}$

5.  **Calculate the basic rating life ($L_{10}$) in millions of revolutions:**
    For ball bearings, $p = 3$.
    $L_{10} = (C/P)^p$
    $L_{10} = (25000 \text{ N} / 5380 \text{ N})^3$
    $L_{10} = (4.647)^3$
    $L_{10} \approx 100.3$ million revolutions.

**Question 2:**

Calculate the life of the bearing from Question 1 in operating hours, assuming the bearing operates at 800 rpm.

**Answer:**

$L_h = \frac{L_{10} \times 10^6}{60 \times n}$
$L_h = \frac{100.3 \times 10^6}{60 \times 800}$
$L_h = \frac{100.3 \times 10^6}{48000}$
$L_h \approx 2090$ hours.

**Question 3:**

What is the primary difference between the static load rating and the dynamic load rating of a bearing? When is each rating most relevant in bearing selection?

**Answer:**

*   **Static Load Rating ($C_0$):** Represents the load that causes a specific amount of permanent deformation at the contact points. It is relevant when the bearing is stationary or operating at very low speeds, to prevent brinelling (permanent indentation).
*   **Dynamic Load Rating ($C$):** Represents the load that a bearing can withstand for one million revolutions based on material fatigue. It is relevant for bearings operating at normal speeds where fatigue is the primary failure mode.

**Question 4 (Conceptual):**

List four key factors that can significantly reduce the actual operating life of a bearing compared to its basic rating life. For each factor, briefly explain why it reduces life.

**Answer:**

1.  **Contamination (Dirt/Debris):** Acts as an abrasive, causing wear and premature pitting on raceways and rolling elements, leading to fatigue crack initiation.
2.  **Poor Lubrication:** Inadequate lubricant film thickness due to incorrect viscosity, insufficient supply, or lubricant degradation leads to increased friction, wear, and potential seizure.
3.  **Misalignment:** Causes uneven load distribution across the rolling elements and raceways, leading to localized stress concentrations and premature fatigue failure.
4.  **Excessive Operating Temperature:** Can cause lubricant breakdown, thermal expansion leading to tight fits, and reduced material strength, all of which can shorten bearing life.

---

### 8. Summary and Key Points to Remember

*   **Bearing life** is a statistical measure of reliability under load.
*   The **L10 life** is the life achieved or exceeded by 90% of bearings.
*   **Dynamic Load Rating (C)** is used for fatigue-based life calculations.
*   **Static Load Rating (C0)** is used to prevent permanent deformation under stationary loads.
*   The **equivalent dynamic load (P)** must be calculated considering both radial and axial loads using $X$ and $Y$ factors from manufacturer data.
*   The basic rating life ($L_{10}$) is calculated using $L_{10} = (C/P)^p$, where $p=3$ for ball bearings and $p \approx 3.33$ for roller bearings.
*   **Life adjustment factors ($a_1$, $Z_W$)** are crucial for accounting for reliability, lubrication, and contamination in real-world applications.
*   Proper **lubrication, cleanliness, alignment, and installation** are paramount for achieving maximum bearing life.
*   Always refer to **manufacturer's catalogs and data books** for specific load ratings and correction factors.

---

This concludes the study notes for Bearing Life. Ensure you practice the calculations and understand the qualitative factors influencing bearing performance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
