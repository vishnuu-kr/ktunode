---
title: "Introduction to Failure Modes and Theories of Failure"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 1: Introduction to Failure Modes and Theories of Failure"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463dcc"
status: "completed"
scrapedAt: "2026-05-20T18:12:21.680Z"
---
# FAILURE ANALYSIS AND DESIGN - Module 1: Introduction to Failure Modes and Theories of Failure

## Topic: Introduction to Failure Modes and Theories of Failure

---

### 1. Introduction to Failure Analysis

**Definition:** Failure analysis is the process of investigating the cause of material or component failure to understand why it failed, to prevent recurrence, and to improve future designs. It involves a systematic approach to examining the failed component and its operating environment.

**Why is Failure Analysis Important?**

*   **Safety:** Prevents catastrophic failures that can lead to injury or loss of life.
*   **Reliability:** Improves the dependability and lifespan of products and systems.
*   **Cost Reduction:** Minimizes downtime, warranty claims, and recalls.
*   **Design Improvement:** Provides valuable feedback for optimizing future designs.
*   **Understanding Material Behavior:** Deepens our knowledge of how materials behave under various stress and environmental conditions.

**Key Aspects of Failure Analysis:**

*   **Understanding the Loadings:** What forces, pressures, temperatures, etc., were applied to the component?
*   **Understanding the Material:** What are the properties of the material used?
*   **Understanding the Environment:** What were the operating conditions (temperature, humidity, corrosive agents)?
*   **Examining the Failed Component:** Visual inspection, microscopic examination, chemical analysis, mechanical testing.
*   **Determining the Failure Mechanism:** Identifying how the failure occurred (e.g., fracture, wear, corrosion).

---

### 2. Failure Modes

**Definition:** A failure mode is a specific way in which a component or system fails to perform its intended function.

**Common Failure Modes:**

*   **Fracture:** The separation of a material into two or more pieces due to applied stress.
    *   **Ductile Fracture:** Characterized by significant plastic deformation before fracture, often with a "cup and cone" appearance.
        *   *Example:* A metal wire being stretched until it breaks. (Refer to **Collins, Chapter 2**)
    *   **Brittle Fracture:** Occurs with little or no plastic deformation, often with a flat fracture surface and rapid propagation.
        *   *Example:* Glass shattering, or the brittle fracture of a steel component at low temperatures. (Refer to **Kumar, Chapter 4** on brittle fracture mechanisms)
*   **Fatigue:** Failure that occurs due to repeated or cyclic loading, even if the applied stress is below the material's yield strength.
    *   *Example:* A metal paperclip breaking after being bent back and forth multiple times. (Refer to **Jones, Chapter 4** on fatigue mechanisms)
*   **Creep:** Time-dependent plastic deformation that occurs under constant stress, usually at elevated temperatures.
    *   *Example:* A turbine blade deforming over time due to high operating temperatures and centrifugal forces. (Refer to **Collins, Chapter 3** on creep)
*   **Wear:** The gradual removal of material from surfaces due to mechanical interaction.
    *   **Abrasive Wear:** Occurs when hard particles or rough surfaces scrape against a softer surface.
        *   *Example:* Sand eroding a metal component. (Refer to **ASM Handbook, Vol. 11, Chapter 8** on wear mechanisms)
    *   **Adhesive Wear:** Occurs when surfaces in contact bond and then break, transferring material.
        *   *Example:* Galling on metal surfaces under high contact pressures. (Refer to **ASM Handbook, Vol. 11, Chapter 8**)
    *   **Fatigue Wear (Surface Fatigue):** Caused by repeated contact stresses, leading to crack initiation and propagation on the surface.
        *   *Example:* Spalling on gears or bearings. (Refer to **Jones, Chapter 4** on contact fatigue)
*   **Corrosion:** The degradation of a material due to chemical or electrochemical reactions with its environment.
    *   *Example:* Rusting of iron or steel. (Refer to **Collins, Chapter 6** on corrosion)
*   **Yielding:** Permanent deformation of a material beyond its elastic limit. While not always considered a "failure" in the catastrophic sense, it can render a component unusable for its intended purpose.

---

### 3. Theories of Failure

**Purpose of Theories of Failure:** To predict when a material will yield or fracture under complex loading conditions (e.g., multi-axial stress states). They provide a criterion for relating the stress state in a component to the material's known properties (usually determined from uniaxial tensile tests).

**Key Concepts:**

*   **Stress State:** The distribution of stresses acting on a body at a particular point. This can be represented by a stress tensor.
*   **Principal Stresses ($\sigma_1, \sigma_2, \sigma_3$):** The normal stresses acting on planes where the shear stresses are zero. These are the maximum and minimum normal stresses at a point.
*   **Yield Strength ($\sigma_y$):** The stress at which a material begins to deform plastically.
*   **Ultimate Tensile Strength (UTS):** The maximum stress a material can withstand before necking.
*   **Shear Yield Strength ($\tau_y$):** The shear stress at which a material begins to yield in shear.

**Common Theories of Failure:**

1.  **Maximum Shear Stress Theory (Tresca Criterion):**
    *   **Concept:** Yielding occurs when the maximum shear stress in the component reaches the maximum shear stress that causes yielding in a uniaxial tensile test.
    *   **Criterion:** $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2}$
    *   **Failure Condition:** $\sigma_1 - \sigma_3 = \sigma_y$ (for plane stress, where $\sigma_3 = 0$, this is $\sigma_1 = \sigma_y$; for general 3D stress, $\sigma_1 - \sigma_3 \ge \sigma_y$).
    *   **For Shear:** The shear stress causing yielding in a uniaxial tensile test is $\tau_y = \sigma_y / 2$. So, the failure condition is $\tau_{max} \ge \tau_y$.
    *   **Applicability:** Conservative for ductile materials, particularly good for predicting yielding in pure shear. (Refer to **Collins, Chapter 5** for detailed derivation and application)
    *   *Example:* A shaft subjected to torsion.

2.  **Distortion Energy Theory (Von Mises Criterion):**
    *   **Concept:** Yielding occurs when the distortion energy per unit volume reaches the distortion energy per unit volume at the yield point in a uniaxial tensile test. This theory considers the effect of all three principal stresses.
    *   **Criterion:** The von Mises stress ($\sigma_v$) is a scalar value that represents the equivalent stress causing yielding.
        $$ \sigma_v = \sqrt{\frac{1}{2}[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]} $$
    *   **Failure Condition:** $\sigma_v \ge \sigma_y$
    *   **Applicability:** Generally considered more accurate than the Tresca criterion for ductile materials under general stress states. It predicts yielding more closely to experimental results. (Refer to **Collins, Chapter 5** for detailed derivation and application)
    *   *Example:* A pressure vessel with internal pressure.

3.  **Maximum Normal Stress Theory (Rankine Criterion):**
    *   **Concept:** Failure (yielding or fracture) occurs when the maximum principal stress reaches the ultimate tensile strength of the material.
    *   **Criterion:** $\sigma_1 = \text{UTS}$ (for tensile failure) or $\sigma_3 = \text{UCS}$ (for compressive failure, where UCS is the ultimate compressive strength).
    *   **Failure Condition:** $\sigma_{max} \ge \sigma_{UTS}$ or $\sigma_{min} \le -\sigma_{UCS}$
    *   **Applicability:** Primarily applicable to brittle materials, as they tend to fail by fracture under tensile stress without significant yielding. Not suitable for ductile materials. (Refer to **Kumar, Chapter 4** for brittle fracture criteria)
    *   *Example:* Failure of cast iron components.

4.  **Maximum Shear Strain Energy Theory:** (Often used interchangeably with Von Mises for yielding)

5.  **Mohr's Failure Criterion:**
    *   **Concept:** A generalized criterion that accounts for both shear and normal stresses and can be applied to both ductile and brittle materials by considering their tensile and compressive strengths. It uses a series of Mohr's circles representing failure states.
    *   **Applicability:** A powerful and versatile criterion that can model various failure mechanisms based on experimental data. (Refer to **Collins, Chapter 5** for more advanced theories)

**Important Note on Theories of Failure:**

*   **Yielding vs. Fracture:** Some theories predict yielding (e.g., Von Mises, Tresca), while others predict fracture (e.g., Rankine). The choice depends on the material and the expected failure mode.
*   **Material Properties:** Accurate material properties (yield strength, UTS, shear strength) are crucial for applying these theories.
*   **Stress State:** Determining the principal stresses for a given loading condition is essential.

---

### 4. Learning Outcomes Alignment and Key Concepts

This introductory module covers the foundational knowledge for understanding how and why materials fail, setting the stage for more advanced analysis.

*   **CO1: Understand the different theories of failure and material behaviour under various loading conditions.**
    *   **Key Concepts:** Yielding, fracture, ductile vs. brittle behavior, stress states, principal stresses, Tresca criterion, Von Mises criterion, Rankine criterion.
    *   **How Covered:** Section 3 provides detailed explanations of these theories and their applications to predict material behavior under different stress states.

*   **CO2: Remember the factors affecting fatigue loading, S-N-P curves, and endurance diagrams for life prediction.**
    *   **Key Concepts:** Fatigue, cyclic loading, stress amplitude, mean stress, stress concentration, S-N curves, fatigue limit, endurance limit, S-N-P curves (probabilistic), Endurance diagram (Goodman, Soderberg).
    *   **How Covered:** While this module *introduces* failure modes like fatigue, a deep dive into S-N-P curves and endurance diagrams is typically covered in later modules (likely Module 2 or 3). However, the *concept* of fatigue as a failure mode driven by cyclic stress is established here.

*   **CO3: Apply principles of fracture mechanics to analyse and design against crack initiation and propagation.**
    *   **Key Concepts:** Crack initiation, crack propagation, fracture toughness ($K_{IC}$), stress intensity factor ($K_I$), crack tip opening displacement (CTOD), Griffith theory, linear elastic fracture mechanics (LEFM).
    *   **How Covered:** Similar to CO2, a full application of fracture mechanics is beyond this introductory module. However, the *concept* of fracture as a failure mode (especially brittle fracture) and the idea that pre-existing flaws can lead to failure are introduced. **Kumar's** textbook is a primary reference for fracture mechanics.

*   **CO4: Understand advanced failure mechanisms, including contact fatigue, high-temperature effects, and corrosion, and their impact on material properties and design.**
    *   **Key Concepts:** Contact fatigue (surface fatigue, spalling), creep, fatigue at elevated temperatures, environmental degradation, corrosion mechanisms.
    *   **How Covered:** Section 2 briefly introduces wear (including contact fatigue) and corrosion as failure modes. High-temperature effects like creep are also mentioned. **Jones** and **Collins** provide broader coverage of these mechanisms.

---

### 5. Practice Questions and Exercises

**Question 1:**

A component is subjected to a plane stress state with principal stresses $\sigma_1 = 150$ MPa, $\sigma_2 = 50$ MPa, and $\sigma_3 = 0$ MPa. The material has a yield strength ($\sigma_y$) of 250 MPa.

(a) Using the Maximum Shear Stress Theory (Tresca Criterion), determine if the component will yield.
(b) Using the Distortion Energy Theory (Von Mises Criterion), determine if the component will yield.
(c) Which theory is more conservative?

**Answer 1:**

(a) **Tresca Criterion:**
    The maximum shear stress is $\tau_{max} = \frac{\sigma_1 - \sigma_3}{2} = \frac{150 \text{ MPa} - 0 \text{ MPa}}{2} = 75 \text{ MPa}$.
    The shear yield strength is $\tau_y = \frac{\sigma_y}{2} = \frac{250 \text{ MPa}}{2} = 125 \text{ MPa}$.
    Since $\tau_{max} (75 \text{ MPa}) < \tau_y (125 \text{ MPa})$, the component will **not yield** according to the Tresca Criterion.

(b) **Von Mises Criterion:**
    The von Mises stress is $\sigma_v = \sqrt{\frac{1}{2}[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2]}$
    $\sigma_v = \sqrt{\frac{1}{2}[(150 - 50)^2 + (50 - 0)^2 + (0 - 150)^2]}$
    $\sigma_v = \sqrt{\frac{1}{2}[100^2 + 50^2 + (-150)^2]}$
    $\sigma_v = \sqrt{\frac{1}{2}[10000 + 2500 + 22500]}$
    $\sigma_v = \sqrt{\frac{1}{2}[35000]}$
    $\sigma_v = \sqrt{17500} \approx 132.29 \text{ MPa}$.
    Since $\sigma_v (132.29 \text{ MPa}) < \sigma_y (250 \text{ MPa})$, the component will **not yield** according to the Von Mises Criterion.

(c) **Conservatism:**
    The Tresca criterion predicted no yielding when the Von Mises criterion also predicted no yielding. However, the Tresca criterion resulted in a larger factor of safety (125/75 = 1.67) compared to Von Mises (250/132.29 = 1.89). This implies that Tresca is more conservative in this case, predicting failure at a lower stress level than Von Mises.

**Question 2:**

Describe the difference between ductile and brittle fracture and provide an example of each.

**Answer 2:**

*   **Ductile Fracture:**
    *   **Description:** Characterized by significant plastic deformation before fracture. It typically involves the formation of voids, void coalescence, and necking. The fracture surface often shows a fibrous or granular appearance, with a "cup and cone" shape in tensile specimens.
    *   **Example:** A metal rod being stretched until it breaks. The metal visibly thins down (necks) before snapping.

*   **Brittle Fracture:**
    *   **Description:** Occurs with little or no plastic deformation. The fracture surfaces are typically flat, often exhibiting cleavage facets or grain boundary separation. Crack propagation is usually rapid and can be catastrophic.
    *   **Example:** Glass shattering when dropped, or the sudden fracture of a steel beam at low temperatures, especially if there are pre-existing flaws.

**Question 3:**

What is the primary purpose of using theories of failure in engineering design?

**Answer 3:**

The primary purpose of using theories of failure is to predict the onset of yielding or fracture in a material under complex stress conditions (multi-axial stresses) by relating these stresses to the material's known properties obtained from simple uniaxial tests. This allows engineers to design components that can safely withstand the applied loads without failing.

---

### 6. Important Points to Remember

*   **Failure is not always catastrophic:** Yielding can also be considered a failure mode if it prevents a component from performing its intended function.
*   **Material properties are crucial:** Accurate data on yield strength, UTS, and fracture toughness are essential for failure analysis.
*   **Operating environment matters:** Temperature, humidity, corrosive agents, and cyclic loading can significantly influence failure mechanisms.
*   **Theories of failure are predictive tools:** They help engineers make informed decisions about material selection and design to prevent failure.
*   **Ductile vs. Brittle:** Understand the fundamental differences in deformation and fracture mechanisms.
*   **Von Mises is generally more accurate for ductile materials than Tresca.**
*   **Rankine is suitable for brittle materials.**
*   **Failure analysis is a multi-disciplinary field:** It often involves mechanics, materials science, metallurgy, and sometimes chemistry.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. References

*   **Jones, D. R. H. (1993).** *Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications*. Pergamon Press.
*   **ASM (Ed.). (2002).** *Failure Analysis and Prevention*. ASM Handbook, Vol. 11. ASM Publications.
*   **Collins, J. A. (2013).** *Failure of Materials in Mechanical Design*. Wiley Interscience Publishers, 2nd Edition.
*   **Kumar, P. (1999).** *Elements of Fracture Mechanics*. Wheeler Publishing.

---