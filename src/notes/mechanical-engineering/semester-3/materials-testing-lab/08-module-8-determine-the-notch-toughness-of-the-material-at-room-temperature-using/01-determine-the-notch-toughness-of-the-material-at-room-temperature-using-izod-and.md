---
title: "Determine the notch toughness of the material at room temperature using Izod and Charpy impact testing."
subject: "MATERIALS TESTING LAB"
module: "Module 8: Determine the notch toughness of the material at room temperature using Izod and Charpy impact testing."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e7e"
status: "completed"
scrapedAt: "2026-05-20T17:50:23.752Z"
---
# Materials Testing Lab - Module 8: Notch Toughness Determination

## Topic: Determine the Notch Toughness of the Material at Room Temperature Using Izod and Charpy Impact Testing

---

### 1. Introduction to Notch Toughness and Impact Testing

**What is Notch Toughness?**

*   **Definition:** Notch toughness is a material's resistance to fracture when a notch or flaw is present. It quantifies how much energy a material can absorb before fracturing under a sudden impact load, especially in the presence of stress concentrations introduced by a notch.
*   **Importance:** Real-world components often contain flaws (e.g., scratches, cracks, machining defects) that act as stress concentrators. Notch toughness is crucial for predicting the performance and reliability of materials in applications where sudden loads or the presence of defects are anticipated.
*   **Contrast with Tensile Strength/Ductility:** While tensile tests measure strength and ductility under slow, static loading, impact tests assess behavior under rapid loading and are more sensitive to factors like brittle fracture.

**Why Impact Testing?**

*   **Simulating Service Conditions:** Many engineering applications involve dynamic loading (e.g., impact, vibration). Impact tests provide a more realistic assessment of a material's performance under such conditions.
*   **Detecting Brittle-to-Ductile Transition:** Impact testing is particularly valuable for identifying the ductile-to-brittle transition temperature (DBTT) in materials like steels. This transition is critical for determining safe operating temperatures.
*   **Assessing Sensitivity to Flaws:** The presence of a notch in impact specimens significantly enhances the material's susceptibility to fracture, making it an effective way to evaluate notch toughness.

---

### 2. Key Concepts and Definitions

*   **Impact Load:** A sudden, high-speed application of force to a material specimen.
*   **Notch:** A geometric discontinuity (e.g., a V-shaped or U-shaped groove) intentionally introduced into the specimen to create a region of high stress concentration.
*   **Fracture:** The separation of a material into two or more pieces under stress.
*   **Ductile Fracture:** Fracture characterized by significant plastic deformation before separation. Typically exhibits a fibrous fracture surface.
*   **Brittle Fracture:** Fracture that occurs with little or no plastic deformation. Typically exhibits a granular or cleavage fracture surface.
*   **Energy Absorption:** The amount of energy a material can absorb from the impact before fracturing. This is the primary measure of notch toughness in impact tests.
*   **Pendulum Impact Tester:** The standard apparatus used for both Izod and Charpy tests. It consists of a heavy pendulum (hammer) that is raised to a specific height, swings through, and strikes the notched specimen. The energy absorbed by the specimen is determined by the difference in the pendulum's height before and after impact.
*   **Impact Energy:** The energy absorbed by the specimen during the impact test, typically measured in Joules (J) or foot-pounds (ft-lb).

---

### 3. Izod and Charpy Impact Tests: Principles and Procedures

Both Izod and Charpy tests are standard methods for determining the notch toughness of materials, differing primarily in specimen support and the point of impact.

#### 3.1 Charpy Impact Test

*   **Principle:** A notched specimen is supported as a simple beam with the notch facing away from the direction of impact. The pendulum strikes the specimen at the center of the notch.
*   **Specimen Geometry:** Typically a rectangular cross-section with a V-notch or U-notch. Standard dimensions are defined by ASTM E23.
    *   *Callister (10th Ed.):* Mentions impact testing and the Charpy test as methods to evaluate toughness and the ductile-to-brittle transition. (Chapter 7, Mechanical Properties and Metallography)
    *   *Kuhn & Medlin (Vol. 8):* Provides detailed descriptions of impact testing machines and specimen geometries, including Charpy. (Chapter 11, Impact Testing)
*   **Procedure:**
    1.  Select a notched specimen of the appropriate standard dimensions.
    2.  Place the specimen on the supports of the pendulum impact tester, ensuring the notch is oriented correctly (facing away from the pendulum).
    3.  Raise the pendulum to a known initial height, storing a specific amount of potential energy.
    4.  Release the pendulum. It swings down and strikes the specimen.
    5.  The pendulum continues its swing, and the maximum height it reaches is recorded.
    6.  The energy absorbed by the specimen is calculated as the difference between the initial potential energy and the potential energy after impact.
        *   *Energy Absorbed = Initial Potential Energy - Final Potential Energy*
        *   *Initial Potential Energy = m * g * h_initial*
        *   *Final Potential Energy = m * g * h_final*
        (where m = mass of pendulum, g = acceleration due to gravity, h_initial = initial height, h_final = final height)
*   **Diagram:**
    ```
         <--------------------- Swing Path --------------->
    
              O (Pivot Point)
              |
              |
              |
              v
           ------- (Pendulum Hammer)
           |     |
           |     |
           -------
             / \
            /   \
           /     \
          /       \  <-- Notched Specimen
         +---------+
         | Notch   |
         +---------+
       / |       | \
      /  |       |  \
     /   +-------+   \  <-- Supports (Simple Beam)
    ```
    *   **Notch orientation:** Notch faces away from the hammer.
    *   **Support:** Specimen rests on two supports.

#### 3.2 Izod Impact Test

*   **Principle:** A notched specimen is clamped vertically at one end, with the notch facing the direction of impact. The pendulum strikes the specimen near the free (unclamped) end.
*   **Specimen Geometry:** Similar to Charpy, but typically with a V-notch and often with a notch at the center of the specimen. Standard dimensions are defined by ASTM E23.
    *   *Kuhn & Medlin (Vol. 8):* Details the Izod test as an alternative to Charpy. (Chapter 11, Impact Testing)
*   **Procedure:**
    1.  Select a notched specimen of the appropriate standard dimensions.
    2.  Clamp the specimen vertically in the vise of the impact tester, ensuring the notch is positioned correctly.
    3.  Raise the pendulum to a known initial height.
    4.  Release the pendulum. It swings down and strikes the specimen.
    5.  The pendulum continues its swing, and the maximum height it reaches is recorded.
    6.  The energy absorbed is calculated similarly to the Charpy test.
*   **Diagram:**
    ```
          ^
          |
          |
          |  <-- Clamped End (Vise)
       +-------+
       |       |
       |       |
       | Notch | <-- Impact Point
       |       |
       |       |
       +-------+
          |
          |
          v
     ------- (Pendulum Hammer)
     |     |
     |     |
     -------
    
    (Specimen is held vertically)
    ```
    *   **Notch orientation:** Notch faces the hammer.
    *   **Support:** One end is clamped.

#### 3.3 Differences and Considerations

| Feature          | Charpy Impact Test                         | Izod Impact Test                           |
| :--------------- | :----------------------------------------- | :----------------------------------------- |
| **Specimen Support** | Simple beam (supported at both ends)       | Cantilever beam (clamped at one end)       |
| **Impact Location** | Center of the span, opposite to the notch | Near the free end, at the notch            |
| **Energy Measurement** | More representative of bulk material behavior | More sensitive to clamping conditions      |
| **Common Usage** | More widely used for steel testing         | Historically significant, still used       |

**Important Point:** The energy values obtained from Izod and Charpy tests are *not* directly comparable due to differences in specimen support and impact conditions.

---

### 4. Determining Notch Toughness

The primary output of these tests is the impact energy absorbed by the specimen. This value directly represents the material's notch toughness under the specific test conditions (temperature, notch type, specimen geometry).

**How to Present Results:**

*   **Impact Energy Value:** Report the absorbed energy in Joules (J) or ft-lb.
*   **Fracture Appearance:** Observe and describe the fracture surface.
    *   **Ductile fracture:** Fibrous, dull, grey appearance.
    *   **Brittle fracture:** Granular, crystalline, shiny appearance.
    *   **Mixed fracture:** A combination of both.
*   **Ductile-to-Brittle Transition Temperature (DBTT):** By testing specimens at various temperatures, a plot of impact energy versus temperature can be generated. The DBTT is the temperature at which the material transitions from brittle to ductile behavior.
    *   *Callister (10th Ed.):* Discusses the DBTT phenomenon in BCC metals like iron and its importance in structural applications. (Chapter 7, Mechanical Properties and Metallography)
    *   *Gere & Goodno (9th Ed.):* May touch upon fracture mechanics and how impact energy relates to crack propagation resistance under dynamic loading. (Chapter 12, Fracture Mechanics)

**Example:**
A Charpy test on a steel specimen at room temperature yields an absorbed energy of 45 J. This indicates the material's notch toughness under these conditions. If another specimen tested at a lower temperature yields 10 J and shows a brittle fracture, while one at a higher temperature yields 70 J and shows a ductile fracture, this suggests the DBTT lies somewhere between these temperatures.

---

### 5. Material Behavior and Microstructure (Relating to CO2)

The notch toughness of a material is strongly influenced by its microstructure.

*   **Grain Size:** Finer grains generally increase notch toughness, as grain boundaries act as barriers to crack propagation.
    *   *Callister (10th Ed.):* Explains how grain boundaries impede dislocation motion (strength) and crack propagation (toughness). (Chapter 7, Mechanical Properties and Metallography)
*   **Crystal Structure:** Materials with BCC crystal structures (like iron at room temperature) exhibit a DBTT, whereas FCC metals (like aluminum, copper) generally do not show a significant DBTT and retain ductility at low temperatures.
    *   *Callister (10th Ed.):* Explains the dislocation movement mechanisms in FCC vs. BCC structures and their temperature dependence. (Chapter 6, Crystal Structure and Imperfections)
*   **Presence of Inclusions/Defects:** Non-metallic inclusions (e.g., oxides, sulfides) can act as crack initiation sites, reducing notch toughness.
*   **Heat Treatment:** Annealing, normalizing, quenching, and tempering can significantly alter the microstructure (e.g., grain size, phase composition) and thus the notch toughness.
    *   *Callister (10th Ed.):* Details how heat treatments affect mechanical properties like toughness. (Chapter 9, Mechanical Properties and Metallography)
    *   *Shackelford (8th Ed.):* Discusses the relationship between microstructure, processing, and mechanical properties. (Chapter 12, Mechanical Behavior)

**Example:** A quenched and tempered steel will likely have higher notch toughness than an as-cast or annealed steel due to a finer microstructure and potentially tempered martensite or bainite phases.

---

### 6. Factors Affecting Notch Toughness and Test Results

*   **Temperature:** As discussed, temperature is the most critical factor, especially for BCC metals.
*   **Strain Rate:** Impact tests involve high strain rates. Materials can behave differently at high strain rates compared to static loading.
*   **Notch Geometry:** The root radius, depth, and type (V vs. U) of the notch significantly influence stress concentration and thus fracture behavior.
*   **Specimen Size and Dimensions:** Standardized dimensions are crucial for comparability.
*   **Pre-existing Flaws:** The size, shape, and location of any pre-existing flaws in a component are critical for its service performance.

---

### 7. Aligning with Course Outcomes

*   **CO1: Evaluate the mechanical properties of different materials under various loading conditions. (K3)**
    *   This module directly addresses this by using impact testing to evaluate notch toughness (a mechanical property) under dynamic/impact loading conditions.
*   **CO2: Relate material microstructure to its mechanical behaviour. (K4)**
    *   Understanding how grain size, crystal structure, and inclusions influence impact energy and DBTT directly links microstructure to toughness.
*   **CO3: Analyse the effect of design features on the performance of mechanical components. (K4)**
    *   The presence of notches (a design feature) is central to this test. Understanding notch toughness helps analyze how flaws or sharp corners in a design could lead to failure under impact.
*   **CO4: Utilize experimental techniques to determine material properties. (K3)**
    *   This module is entirely focused on the practical application and understanding of the Izod and Charpy impact testing experimental techniques.
*   **CO5: Apply fundamental engineering principles to analyse the behaviour of structures under load. (K3)**
    *   Understanding fracture mechanics principles and how impact energy relates to crack propagation helps in analyzing the behavior of structures subjected to sudden loads or containing flaws.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the primary difference between the Charpy and Izod impact tests in terms of specimen support and impact location?

**Answer:**
In the Charpy test, the specimen is supported as a simple beam, and the pendulum strikes the center of the notch on the side opposite the supports. In the Izod test, the specimen is clamped at one end (cantilever beam), and the pendulum strikes the specimen near the free end, adjacent to the notch.

**Question 2:**
Why is it important to evaluate the notch toughness of a material, particularly for applications involving dynamic loading?

**Answer:**
Notch toughness is crucial because real-world components often contain flaws or stress concentrators (like notches). Dynamic loading (impact) can cause rapid crack propagation from these flaws. Notch toughness quantifies a material's resistance to fracture under such conditions, ensuring reliability and preventing catastrophic failure, especially in situations where brittle fracture is a concern.

**Question 3:**
A steel specimen tested using the Charpy impact test at room temperature absorbed 30 J of energy and showed a ductile fracture. Another specimen of the same steel tested at -50°C absorbed 8 J and showed a brittle fracture. What can you infer about the material's behavior and its Ductile-to-Brittle Transition Temperature (DBTT)?

**Answer:**
This indicates that the material exhibits a ductile-to-brittle transition. The DBTT for this steel lies somewhere between -50°C and room temperature. At higher temperatures (room temperature in this case), it behaves in a ductile manner and absorbs more energy. At lower temperatures (-50°C), it becomes brittle and absorbs significantly less energy.

**Question 4:**
How does a finer grain size generally affect the notch toughness of a metallic material? Explain the underlying mechanism.

**Answer:**
A finer grain size generally increases notch toughness. The mechanism involves grain boundaries acting as barriers to crack propagation. When a crack encounters a grain boundary, it must change direction, which requires additional energy. In finer-grained materials, there are more grain boundaries per unit volume, providing more obstacles to hinder the crack's path, thus increasing the energy absorption capacity.

**Question 5:**
Given the choice between Izod and Charpy tests for evaluating the general toughness of a structural steel intended for bridge construction, which would you typically prefer and why?

**Answer:**
The Charpy impact test is generally preferred for evaluating structural steels like those used in bridges. The Charpy test, with its simple beam support, is considered more representative of the bulk material's response and is less influenced by clamping stresses compared to the Izod test. Furthermore, Charpy results are more commonly reported and used in engineering codes and standards for materials used in critical applications where temperature variations are expected.

---

### 9. Important Points to Remember

*   **Notch Toughness vs. Tensile Properties:** Impact tests measure resistance to fracture under rapid loading and with stress concentrations, which is different from properties measured under static tensile loading.
*   **Izod vs. Charpy:** The tests differ in specimen support and impact location, leading to non-comparable energy values. Charpy is more common for structural steels.
*   **DBTT:** Crucial for materials like steel, indicating the temperature below which brittle fracture becomes a significant risk.
*   **Microstructure Matters:** Grain size, crystal structure, and inclusions are key microstructural features influencing notch toughness.
*   **Temperature Dependence:** The significant impact of temperature on toughness, especially for BCC metals, is a fundamental concept.
*   **Standardization:** Adherence to ASTM or similar standards for specimen dimensions and test procedures is vital for reliable and comparable results.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
