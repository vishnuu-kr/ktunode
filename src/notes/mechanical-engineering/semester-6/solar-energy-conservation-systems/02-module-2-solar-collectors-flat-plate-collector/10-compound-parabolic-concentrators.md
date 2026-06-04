---
title: "compound parabolic concentrators"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 2: Solar collectors: Flat plate collector"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bc2"
status: "completed"
scrapedAt: "2026-05-20T18:08:13.557Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS

## Module 2: Solar Collectors: Flat Plate Collector

### Topic: Compound Parabolic Concentrators (CPCs)

---

**Introduction:**

Compound Parabolic Concentrators (CPCs) are a type of non-imaging concentrating solar collector. Unlike imaging concentrators that focus sunlight to a point or line, CPCs concentrate sunlight onto an absorber of a specific shape, achieving high optical efficiency over a wide acceptance angle. This characteristic makes them suitable for applications requiring moderate to high temperatures, where tracking the sun is either undesirable or too complex.

---

### 1. Learning Outcomes Covered:

*   **Understanding CPCs:** Define CPCs, their fundamental principles of operation, and their classification.
*   **Design and Geometry:** Explain the geometrical design of CPCs and the relationship between their acceptance angle, concentration ratio, and geometry.
*   **Performance Characteristics:** Discuss the optical and thermal performance of CPCs, including heat losses and efficiency.
*   **Applications:** Identify various applications where CPCs are effectively utilized.
*   **Comparison with other collectors:** Differentiate CPCs from flat-plate collectors and other concentrating collectors.

---

### 2. Key Concepts and Definitions:

*   **Concentrating Collector:** A solar collector that uses reflective surfaces to concentrate solar radiation onto a smaller absorber area, thereby increasing the energy flux density.
*   **Non-imaging Concentrator:** A concentrator that does not form a sharp image of the sun. Its primary goal is to maximize the collection of radiation within a defined acceptance angle, irrespective of the image quality.
*   **Compound Parabolic Concentrator (CPC):** A non-imaging collector characterized by two parabolic reflector surfaces that direct all incoming solar rays within a specified acceptance angle onto a predetermined absorber shape.
*   **Acceptance Angle ($\pm \theta_a$):** The angular range of incident solar radiation for which the CPC can effectively concentrate radiation onto the absorber. Rays entering within this angle are reflected onto the absorber; rays outside are not.
*   **Concentration Ratio (C):** The ratio of the aperture area (the total area receiving solar radiation) to the absorber area. For CPCs, $C = A_{aperture} / A_{absorber}$.
*   **Optical Efficiency ($\eta_{opt}$):** The fraction of incident solar radiation that reaches the absorber surface after accounting for reflection losses, transmission losses (if any), and shadowing.
*   **Thermal Efficiency ($\eta_{th}$):** The fraction of absorbed solar energy that is converted into useful heat, considering heat losses to the environment.
*   **Heat Loss Mechanisms:** Conduction, convection, and radiation from the absorber surface to the surroundings.
*   **Trough Collector:** A type of concentrating collector that uses a parabolic trough to focus sunlight onto a linear absorber tube.

---

### 3. Design and Geometry of CPCs:

CPCs are designed based on the **Tiegeman's theorem** or the **law of reflection**. The core principle is that any ray entering the aperture within the acceptance angle must be reflected by the parabolic sides onto the absorber.

*   **Basic Geometry:**
    *   A CPC consists of two parabolic reflector segments.
    *   The focal point of one parabola is at the edge of the absorber, and the focal point of the other parabola is at the opposite edge of the absorber.
    *   The absorber is typically a flat plate, a tube, or a shape that fills the gap between the two parabolic segments at the bottom.

*   **Relationship between Acceptance Angle and Concentration Ratio:**
    *   For a CPC with a flat absorber, the relationship between the maximum acceptance angle ($\theta_a$) and the concentration ratio (C) is given by:
        $$ C = \frac{1}{\sin(\theta_a)} $$
    *   This implies that as the acceptance angle decreases, the concentration ratio increases.

*   **Practical Implications:**
    *   A wider acceptance angle means the collector requires less frequent tracking or can operate effectively with a stationary orientation, making it suitable for non-tracking or single-axis tracking systems.
    *   A higher concentration ratio leads to higher fluid temperatures but necessitates more precise tracking to keep the sun within the acceptance angle.

*   **Types of Absorbers:**
    *   **Flat Plate Absorber:** A flat surface positioned at the base of the CPC.
    *   **Tubular Absorber:** A cylindrical tube positioned at the base.
    *   **Truncated CPCs:** To reduce the cost and material, the parabolic reflectors can be truncated at a certain point, resulting in a smaller concentration ratio but still providing a useful acceptance angle. The truncation affects the achievable concentration ratio.

---

### 4. Performance Characteristics:

*   **Optical Performance:**
    *   **High optical efficiency:** CPCs generally exhibit high optical efficiencies because they are designed to minimize optical losses.
    *   **Wide acceptance angle:** This allows them to collect diffuse radiation and function effectively even with slight deviations from perfect sun tracking.
    *   **Reflection losses:** Dependent on the reflectivity of the reflector material. Highly reflective materials like polished aluminum or silvered glass are used.
    *   **Interception losses:** Occur if the sun's rays are outside the acceptance angle or due to shadowing by the absorber.

*   **Thermal Performance:**
    *   **Heat Loss:** The absorber in a CPC is typically enclosed to minimize heat losses. This enclosure can be a glass cover, often with selective coatings on the absorber surface.
    *   **Heat loss mechanisms:**
        *   **Convection:** From the absorber to the glass cover and then to the ambient air.
        *   **Radiation:** From the absorber to the glass cover and from the glass cover to the environment.
    *   **Overall Heat Loss Coefficient (U):** This parameter quantifies the total heat loss per unit area per unit temperature difference between the absorber and the ambient.
    *   **Thermal Efficiency ($\eta_{th}$):** Can be expressed as:
        $$ \eta_{th} = \frac{Q_u}{I_s A_a} = \frac{m c_p (T_{out} - T_{in})}{I_s A_a} $$
        where:
        *   $Q_u$ is the useful heat collected.
        *   $I_s$ is the incident solar radiation on the aperture.
        *   $A_a$ is the aperture area.
        *   $m$ is the mass flow rate of the fluid.
        *   $c_p$ is the specific heat of the fluid.
        *   $T_{out}$ and $T_{in}$ are the outlet and inlet fluid temperatures.

*   **Efficiency Equation:**
    The overall efficiency of a CPC can be expressed as:
    $$ \eta = \eta_{opt} - U \frac{(T_{abs} - T_{amb})}{I_s} $$
    where:
    *   $\eta$ is the overall efficiency.
    *   $T_{abs}$ is the average absorber temperature.
    *   $T_{amb}$ is the ambient temperature.

*   **Important Point to Remember:** CPCs are designed to provide higher fluid temperatures than flat-plate collectors due to the concentration of solar energy, but they also experience higher heat losses per unit absorber area. The balance between these factors determines their efficiency at different operating temperatures.

---

### 5. Applications of CPCs:

CPCs are versatile and suitable for a range of applications:

*   **Low to Medium Temperature Applications:**
    *   **Solar Water Heating:** Providing hot water for domestic or industrial use.
    *   **Space Heating and Cooling:** Integrating with absorption cooling systems or direct heating.
    *   **Drying Processes:** Agricultural products, industrial materials.

*   **Higher Temperature Applications:**
    *   **Process Heat:** For various industrial processes.
    *   **Electricity Generation:** When coupled with small turbines or thermoelectric generators.

*   **Specific Advantages:**
    *   **No or limited tracking:** Simplifies the system, reduces maintenance, and lowers cost compared to parabolic troughs or heliostats.
    *   **Effective with diffuse radiation:** Can utilize a portion of diffuse radiation, making them suitable for cloudy or partially cloudy conditions.

---

### 6. Comparison with Other Solar Collectors:

| Feature              | Flat Plate Collector (FPC)                                  | Compound Parabolic Concentrator (CPC)                         | Parabolic Trough Collector (PTC)                                |
| :------------------- | :---------------------------------------------------------- | :------------------------------------------------------------ | :-------------------------------------------------------------- |
| **Concentration**    | No concentration (C=1)                                      | Moderate concentration (e.g., C = 2-5 for flat absorber)      | High concentration (e.g., C = 10-50)                            |
| **Tracking**         | No tracking required (stationary)                           | No or single-axis tracking (wide acceptance angle)            | Single-axis tracking required                                   |
| **Temperature Range**| Low to medium temperatures (up to ~80-100°C)                | Medium to high temperatures (up to ~150-200°C)                | High temperatures (up to ~400°C or more)                        |
| **Absorber Type**    | Flat absorber plate                                         | Flat plate, tubular absorber, or custom shapes                | Tubular absorber                                                |
| **Optical Efficiency**| High                                                        | Very high for rays within acceptance angle                    | High, but sensitive to tracking accuracy                        |
| **Heat Losses**      | Lower per unit aperture area                                | Higher per unit absorber area due to concentration            | Very high per unit absorber area                                |
| **Complexity**       | Simple                                                      | Moderately simple                                             | More complex                                                    |
| **Cost**             | Relatively low                                              | Moderate                                                      | Higher                                                          |
| **Suitability**      | Hot water, low-temp heating                                 | Hot water, industrial process heat, some PV applications      | High-temp industrial heat, steam generation, CSP                |
| **Diffuse Radiation**| Collects direct and diffuse radiation                       | Collects direct radiation efficiently; can collect some diffuse | Primarily collects direct radiation; sensitive to diffuse         |

**Reference:** Sukhatme, S. P., & Sukhatme, J. S. (2017). *Solar Energy* (4th ed.). McGraw Hill Education (India) Private Limited. (Chapter on Concentrating Collectors)

**Reference:** Goswami, D. Y., Kreith, F., & Kreider, J. F. (2015). *Principles of Solar Engineering* (3rd ed.). CRC Press. (Chapter on Solar Collectors)

---

### 7. Aligning with Course Outcomes:

*   **CO1: Understand the basic concepts of solar radiation, the sun-earth relationship, and the effects of the atmosphere on solar energy. (Knowledge Level: K2)**
    *   **Relevance:** While this topic focuses on collectors, understanding how solar radiation is captured and concentrated is implicitly linked to the nature of solar radiation (direct vs. diffuse) and how CPCs are designed to handle it. The efficiency equations depend on incident solar radiation ($I_s$).
*   **CO2: Able to recall the various types of solar collectors and their theoretical principles, including flat plate collectors and concentrating collectors. (Knowledge Level: K1)**
    *   **Relevance:** This topic directly addresses concentrating collectors, specifically CPCs. Students will learn their theoretical principles, design, and how they differ from flat-plate collectors.
*   **CO3: Apply thermal analysis techniques to different solar collectors and implement design principles for both standalone and grid-connected PV systems. (Knowledge Level: K3)**
    *   **Relevance:** The notes cover the thermal efficiency equation for CPCs, which is a fundamental aspect of thermal analysis. Understanding the factors affecting heat loss and optical efficiency allows for the application of these principles in designing solar thermal systems that might incorporate CPCs. Although the topic is primarily thermal collectors, CPCs are also used in hybrid PV/Thermal systems or for concentrating PV cells, which ties into PV system design principles.
*   **CO4: Understand the methods for calculating plant economy, including life cycle cost, payback period, and the relevance of economic feasibility evaluations for energy technologies. (Knowledge Level: K2)**
    *   **Relevance:** Although not explicitly detailed in these notes, the economic viability of CPCs would be assessed using these methods. Their higher initial cost compared to FPCs needs to be weighed against their higher operating temperatures and efficiency for specific applications. The complexity and maintenance requirements also impact the life cycle cost.

---

### 8. Practice Questions and Exercises:

**Question 1:**
Define a Compound Parabolic Concentrator (CPC) and explain its primary advantage over a flat-plate collector.
**Answer:** A CPC is a non-imaging solar collector that uses two parabolic reflector segments to concentrate solar radiation within a specific acceptance angle onto an absorber. Its primary advantage over a flat-plate collector is its ability to achieve moderate concentration ratios, leading to higher fluid temperatures, while still maintaining a relatively wide acceptance angle, reducing the need for precise sun tracking.

**Question 2:**
What is the relationship between the maximum acceptance angle ($\theta_a$) and the concentration ratio (C) for a CPC with a flat absorber?
**Answer:** The relationship is given by $C = 1 / \sin(\theta_a)$. This means that a smaller acceptance angle allows for a higher concentration ratio.

**Question 3:**
List two key applications where Compound Parabolic Concentrators are particularly well-suited.
**Answer:**
1.  Solar water heating for domestic or industrial use.
2.  Industrial process heat at medium temperature ranges.

**Question 4:**
Consider a CPC with a concentration ratio of 3. Calculate its maximum acceptance angle. If the reflector material has a reflectivity of 90%, what is the maximum optical efficiency due to reflection losses?
**Answer:**
*   **Acceptance Angle Calculation:**
    Given $C = 3$ and $C = 1 / \sin(\theta_a)$, we have:
    $3 = 1 / \sin(\theta_a)$
    $\sin(\theta_a) = 1/3$
    $\theta_a = \arcsin(1/3) \approx 19.47$ degrees.
    So, the maximum acceptance angle is approximately $\pm 19.47^\circ$.

*   **Optical Efficiency Calculation:**
    The reflectivity of the reflector material is 90% (or 0.9). Assuming no other optical losses, the optical efficiency ($\eta_{opt}$) due to reflection is equal to the reflectivity:
    $\eta_{opt} = 0.9$ or 90%.

**Question 5:**
Compare the heat loss characteristics of a CPC with a flat-plate collector when both are operating at the same absorber temperature and ambient temperature. Explain why this difference exists.
**Answer:** A CPC, due to its concentration, has a smaller absorber area for a given aperture area compared to a flat-plate collector. While the overall heat loss from the collector *system* (aperture area basis) might be comparable, the heat loss *per unit absorber area* is significantly higher in a CPC. This is because the concentrated radiation heats the smaller absorber to higher temperatures, increasing the driving force for heat loss via convection and radiation from the absorber surface. The enclosure around the absorber in a CPC is critical to managing these higher losses.

---

### 9. Important Points to Remember:

*   **Non-imaging vs. Imaging:** CPCs are non-imaging concentrators, focusing radiation onto an absorber of specific shape rather than forming a sharp image.
*   **Acceptance Angle & Concentration:** There's an inverse relationship: wider acceptance angle = lower concentration, and vice versa.
*   **Applications:** Ideal for moderate temperature applications where precise tracking is difficult or undesirable.
*   **Efficiency Trade-off:** Higher concentration leads to higher potential temperatures but also higher heat losses per unit absorber area.
*   **Truncation:** Practical CPCs are often truncated to reduce costs, sacrificing some concentration and acceptance angle.
*   **Reflector Material:** High reflectivity is crucial for good optical efficiency.

---

This concludes the study notes for Compound Parabolic Concentrators. Remember to refer to the specified textbooks for more in-depth theoretical derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
