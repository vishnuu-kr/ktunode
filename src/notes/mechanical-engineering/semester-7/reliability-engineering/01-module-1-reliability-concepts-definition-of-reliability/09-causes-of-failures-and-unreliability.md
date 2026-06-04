---
title: "Causes of Failures and Unreliability."
subject: "RELIABILITY ENGINEERING"
module: "Module 1: Reliability Concepts: Definition of reliability"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e44"
status: "completed"
scrapedAt: "2026-05-20T18:17:49.550Z"
---
# Reliability Engineering: Module 1 - Reliability Concepts

## Topic: Causes of Failures and Unreliability

This module introduces the fundamental concepts of reliability engineering, focusing on understanding why systems and components fail and what contributes to their overall unreliability.

---

### 1. Learning Outcomes Covered in This Topic

*   **LO1: Explain various modes of failure and basic concepts of reliability (Knowledge Level: K2)**
    *   This topic directly addresses the understanding of different failure modes.
*   **LO2: Identify methods for reliability prediction according to system characteristics (Knowledge Level: K3)**
    *   Understanding failure causes is a prerequisite for predicting reliability.
*   **LO3: Develop ability in formulating suitable strategies to enhance reliability of a manufacturing system. (Knowledge Level: K3)**
    *   Identifying failure causes is the first step in developing strategies to prevent them.
*   **LO4: Explain relation between reliability, availability and maintainability (Knowledge Level: K2)**
    *   Failure is the inverse of reliability. Understanding failures helps define the scope of maintainability and availability.

---

### 2. Key Concepts and Definitions

*   **Reliability:** The probability that a system or component will perform its intended function without failure for a specified period of time under stated conditions. (Balagurusamy, 2017; Chandrupatla, 2009; Srinath, 2005)

*   **Failure:** The termination of the ability of an item to perform its required function. (Srinath, 2005)

*   **Unreliability:** The probability that a system or component will fail within a specified period of time under stated conditions. It is the complement of reliability, i.e., Unreliability = 1 - Reliability. (Balagurusamy, 2017)

*   **Failure Mode:** The manner or way in which a failure occurs and the part of the item that is affected. (Srinath, 2005)

*   **Failure Cause:** The physical defect or combination of defects that ultimately results in failure. (Srinath, 2005)

*   **Failure Mechanism:** The physical process that leads to the failure, often occurring at a microscopic level. (Ebling, 2004)

---

### 3. Causes of Failures

Failures are rarely due to a single reason. They often result from a complex interplay of various factors. We can broadly categorize these causes as follows:

#### 3.1. Design-Related Failures

These failures originate from shortcomings in the initial design of the product or system.

*   **Inadequate Design Specifications:**
    *   **Description:** Not fully understanding the operating environment, load conditions, or expected usage, leading to specifications that cannot be met.
    *   **Example:** Designing an aircraft component to withstand a certain temperature range, but failing to account for extreme heat spikes encountered during takeoff in a desert environment.
    *   **Reference:** Chandrupatla (2009) emphasizes the importance of robust design that considers all operational and environmental factors.

*   **Incorrect Material Selection:**
    *   **Description:** Choosing materials that are not suitable for the intended application due to factors like strength, corrosion resistance, temperature tolerance, or fatigue properties.
    *   **Example:** Using a plastic that degrades rapidly when exposed to UV radiation for an outdoor product without proper UV stabilizers.
    *   **Reference:** Barlow (1998) highlights material science as a critical foundation for reliability.

*   **Overstress/Understress:**
    *   **Overstress:** Applying loads (mechanical, thermal, electrical) that exceed the design limits of a component.
    *   **Understress:** Applying loads significantly lower than the design limits, which can sometimes lead to premature failure due to lack of "exercising" or proper material conditioning (e.g., certain types of wear).
    *   **Example:** Overstress: A bridge designed for a maximum load of 100 tons, but experiencing failure when a convoy of 150 tons passes over it. Understress: A mechanical seal that fails prematurely due to lack of proper lubrication cycles if the equipment is run at very low speeds for extended periods.
    *   **Reference:** Balagurusamy (2017) discusses stress and strain analysis in the context of component reliability.

*   **Design Flaws/Errors:**
    *   **Description:** Mistakes in calculations, incorrect component sizing, poor interfacing between components, or neglecting critical failure modes during the design phase.
    *   **Example:** A circuit design where a resistor is too close to a heat-generating component, causing the resistor to overheat and fail.
    *   **Reference:** Ebling (2004) provides examples of design errors leading to system failures in electronics.

#### 3.2. Manufacturing and Production Failures

These failures occur due to errors or inconsistencies during the manufacturing process.

*   **Poor Workmanship:**
    *   **Description:** Errors made by operators during assembly, soldering, welding, machining, etc.
    *   **Example:** A poorly soldered joint on a circuit board that leads to intermittent connections and eventual failure.
    *   **Reference:** Chandrupatla (2009) stresses the importance of quality control in manufacturing.

*   **Defective Materials/Components:**
    *   **Description:** Using raw materials or sourced components that are themselves defective or do not meet specifications.
    *   **Example:** Using a batch of bearings that were manufactured with microscopic flaws, leading to premature wear and seizure.
    *   **Reference:** Srinath (2005) discusses the impact of component quality on system reliability.

*   **Process Variations:**
    *   **Description:** Inconsistent application of manufacturing processes, leading to variations in the final product.
    *   **Example:** Variations in the heat treatment process of metal parts, resulting in some parts being too brittle and others too soft.
    *   **Reference:** Balagurusamy (2017) touches upon process capability and its influence on product quality and reliability.

*   **Improper Assembly:**
    *   **Description:** Components not being fitted correctly, improper torque applied to fasteners, or missing components.
    *   **Example:** An engine part failing because it was not torqued to the specified value, leading to looseness and excessive vibration.

#### 3.3. Environmental Factors

Failures caused by external conditions that the product or system is exposed to.

*   **Temperature Extremes:**
    *   **Description:** Operating or storing a product in temperatures significantly above or below its design limits.
    *   **Example:** A battery losing capacity rapidly at high ambient temperatures. Electronic components failing due to thermal runaway.
    *   **Reference:** Lewis (2012) details the impact of temperature on various failure mechanisms.

*   **Humidity and Moisture:**
    *   **Description:** Exposure to high humidity or direct water ingress, leading to corrosion, short circuits, or material degradation.
    *   **Example:** Corrosion of electrical contacts in humid environments causing poor conductivity. Swelling of plastic components in moist conditions.
    *   **Reference:** Naikan (2008) discusses the effects of environmental factors on component life.

*   **Vibration and Shock:**
    *   **Description:** Mechanical stresses induced by vibrations or sudden shocks.
    *   **Example:** Vibration causing fatigue failure in structural components. Shock causing damage to delicate internal parts of electronic devices.
    *   **Reference:** Srinath (2005) covers fatigue and shock loading in reliability analysis.

*   **Corrosion:**
    *   **Description:** Degradation of materials due to chemical or electrochemical reactions with the environment.
    *   **Example:** Rusting of steel components exposed to salt spray.
    *   **Reference:** Chandrupatla (2009) includes material properties like corrosion resistance in design considerations.

*   **Contamination:**
    *   **Description:** Presence of unwanted substances like dust, dirt, oil, or chemicals.
    *   **Example:** Dust accumulating on heat sinks, reducing their effectiveness and causing overheating. Dirt particles getting into moving parts, causing premature wear.

#### 3.4. Operational and Usage Failures

Failures resulting from how the product is used and maintained during its operational life.

*   **Operator Error:**
    *   **Description:** Incorrect operation by the user that leads to damage or malfunction.
    *   **Example:** Operating a machine outside its intended parameters or sequence. Forcing a component into place incorrectly.
    *   **Reference:** Ebling (2004) highlights human factors as a significant contributor to system failures.

*   **Improper Maintenance:**
    *   **Description:** Lack of scheduled maintenance, incorrect maintenance procedures, or using wrong replacement parts.
    *   **Example:** Failing to change lubricant at specified intervals, leading to excessive wear. Using a non-genuine part that does not meet specifications.
    *   **Reference:** Naikan (2008) discusses the role of maintenance strategies in achieving reliability.

*   **Misuse:**
    *   **Description:** Using the product for purposes or in ways it was not designed for.
    *   **Example:** Using a consumer-grade tool for heavy industrial applications.
    *   **Reference:** Balagurusamy (2017) assumes normal operating conditions and usage patterns for reliability calculations.

*   **Wear-Out:**
    *   **Description:** Gradual degradation of a component or system due to repeated use over its expected lifespan. This is a natural aging process.
    *   **Example:** A bearing failing after millions of rotations due to wear on its surfaces. A tire wearing out after a certain mileage.
    *   **Reference:** Srinath (2005) and Lewis (2012) extensively cover wear mechanisms and their modeling.

#### 3.5. Other Causes

*   **Sabotage:** Intentional damage or interference with the system.
*   **Acts of God:** Natural disasters like earthquakes, floods, lightning strikes.

---

### 4. Modes of Failure (CO1: K2)

Understanding the *how* of failure is as crucial as understanding the *why*. Failure modes describe the specific way in which a system or component ceases to perform its intended function.

*   **Breakage/Fracture:**
    *   **Description:** A component rupturing or splitting into two or more pieces.
    *   **Example:** A shaft breaking under excessive torsional load. A weld fracturing due to stress concentration.
    *   **Causes:** Overstress (tensile, compressive, shear, torsional), fatigue, brittle fracture, impact.

*   **Wear:**
    *   **Description:** Gradual loss of material from a surface due to mechanical action, such as rubbing or sliding.
    *   **Example:** Wear of gear teeth, bearing surfaces, cutting tools.
    *   **Causes:** Abrasive wear, adhesive wear, fatigue wear, fretting wear.

*   **Corrosion:**
    *   **Description:** Deterioration of a material due to chemical or electrochemical reactions with its environment.
    *   **Example:** Rusting of iron, pitting of stainless steel, galvanic corrosion between dissimilar metals.
    *   **Causes:** Exposure to moisture, chemicals, salts, galvanic potential differences.

*   **Deformation:**
    *   **Description:** Permanent change in shape or size of a component.
    *   **Example:** A metal sheet buckling under compressive load, a shaft bending.
    *   **Causes:** Overstress (exceeding yield strength), creep (deformation under sustained load at elevated temperatures).

*   **Electrical Failure:**
    *   **Description:** Malfunctions in electrical or electronic components.
    *   **Example:** Open circuit (complete loss of conductivity), short circuit (unintended low-resistance path), degradation of insulation, component burnout.
    *   **Causes:** Overheating, overvoltage, electrical breakdown, poor connections, contamination.

*   **Leakage:**
    *   **Description:** Unintended passage of fluid (liquid or gas) through a seal or enclosure.
    *   **Example:** A pipe fitting leaking oil, a seal on a hydraulic cylinder failing.
    *   **Causes:** Seal degradation, improper seal installation, excessive pressure, surface imperfections.

*   **Fatigue:**
    *   **Description:** Progressive and localized structural damage that occurs when a material is subjected to cyclic loading.
    *   **Example:** A metal component failing after repeated bending cycles, even if the peak stress is below the yield strength.
    *   **Causes:** Cyclic stress, stress concentrations, material defects.

*   **Creep:**
    *   **Description:** Gradual deformation of a material under constant stress, particularly at elevated temperatures.
    *   **Example:** Turbine blades slowly deforming over time in a high-temperature engine.
    *   **Causes:** Sustained stress at high temperatures.

---

### 5. Unreliability and its Contributors

Unreliability is the direct consequence of failures occurring. Factors that cause failures inherently increase unreliability.

*   **Design Complexity:** More components and interconnections generally mean more potential failure points. (Ebling, 2004)
*   **Operating Environment:** Harsh environments (high temperature, humidity, vibration, corrosive substances) increase the likelihood of failures. (Lewis, 2012)
*   **Manufacturing Quality:** Inconsistent manufacturing processes or poor quality control lead to a higher probability of defective products. (Chandrupatla, 2009)
*   **Usage Patterns:** Severe or improper usage can significantly reduce the life and increase the failure rate of a product. (Balagurusamy, 2017)
*   **Maintenance Practices:** Neglecting or improperly performing maintenance directly contributes to unreliability. (Naikan, 2008)
*   **Component Age:** As components age, wear-out mechanisms become more prevalent, increasing unreliability (the "wear-out" region of the bathtub curve). (Srinath, 2005)

---

### 6. Importance of Identifying Failure Causes and Modes

Understanding the root causes and modes of failure is fundamental for:

*   **Reliability Prediction (CO2: K3):** Accurate prediction requires understanding the probability of specific failures occurring.
*   **Design Improvement (CO3: K3):** Identifying design-related failures allows engineers to redesign for robustness and prevent future issues.
*   **Manufacturing Process Control (CO3: K3):** Knowing manufacturing-related failures helps in implementing quality control measures.
*   **Developing Maintenance Strategies (CO3: K3):** Understanding wear-out and other failure modes informs preventive maintenance schedules.
*   **Root Cause Analysis (RCA):** Systematically investigating failures to identify underlying causes and implement corrective actions.
*   **Failure Mode and Effects Analysis (FMEA):** A structured approach to identify potential failure modes in a system and their consequences.
*   **Establishing Realistic Warranties and Service Life:** Based on predicted failure rates.

---

### 7. Examples in Practice

*   **Automotive Industry:**
    *   **Failure Cause:** Design flaw in brake pad material leading to premature wear.
    *   **Failure Mode:** Excessive wear, causing reduced braking efficiency.
    *   **Impact:** Safety hazard, customer dissatisfaction.
    *   **Action:** Redesign the brake pad compound.

*   **Electronics Manufacturing:**
    *   **Failure Cause:** Poor soldering during PCB assembly (workmanship).
    *   **Failure Mode:** Cold solder joint leading to an open circuit.
    *   **Impact:** Device malfunction.
    *   **Action:** Implement stricter soldering process controls and inspection.

*   **Aerospace Engineering:**
    *   **Failure Cause:** Material fatigue due to cyclic stress in a wing component.
    *   **Failure Mode:** Crack propagation leading to fracture.
    *   **Impact:** Catastrophic failure.
    *   **Action:** Select a more fatigue-resistant material or modify the design to reduce stress concentrations.

---

### 8. Important Points to Remember

*   **Reliability is a probability:** It's not an absolute guarantee.
*   **Failures are inevitable:** The goal is to minimize their occurrence and impact.
*   **Root cause analysis is critical:** Don't just fix the symptom; address the underlying cause.
*   **Design for reliability:** Consider potential failure modes and causes from the very beginning.
*   **Quality in manufacturing:** Directly translates to product reliability.
*   **Environment and usage matter:** These factors significantly influence failure rates.
*   **Failure is the opposite of reliability:** Understanding failures is key to improving reliability.

---

### 9. Practice Questions and Exercises

**Question 1 (CO1: K2):**
Define reliability and unreliability. What is the relationship between them?

**Answer:**
*   **Reliability:** The probability that a system or component will perform its intended function without failure for a specified period of time under stated conditions.
*   **Unreliability:** The probability that a system or component will fail within a specified period of time under stated conditions.
*   **Relationship:** Unreliability is the complement of reliability. Unreliability = 1 - Reliability.

**Question 2 (CO1: K2):**
List and briefly describe three distinct modes of failure. Provide an example for each.

**Answer:**
1.  **Breakage/Fracture:** A component ruptures into pieces.
    *   *Example:* A metal shaft breaking under excessive torque.
2.  **Wear:** Gradual loss of material due to mechanical action.
    *   *Example:* Gear teeth wearing down due to constant meshing.
3.  **Corrosion:** Material degradation due to chemical reactions.
    *   *Example:* Rusting of an unprotected steel beam.

**Question 3 (CO1: K2, CO3: K3):**
Identify two potential causes of failure for a smartphone screen and explain how each cause might lead to a specific failure mode.

**Answer:**
1.  **Cause:** Dropping the phone (Operational/Usage Failure - Shock).
    *   **Failure Mode:** Fracture (cracking of the glass).
2.  **Cause:** Manufacturing defect in the glass (Manufacturing Failure).
    *   **Failure Mode:** Micro-cracks that propagate over time, leading to spontaneous shattering or premature cracking under normal stress.

**Question 4 (CO3: K3):**
A company is experiencing high failure rates in its newly manufactured electronic circuit boards. They suspect issues with the soldering process. Based on the causes of failure discussed, what specific manufacturing-related factors could be responsible, and how could they improve reliability?

**Answer:**
Potential manufacturing-related factors include:
*   **Poor Workmanship:** Inconsistent soldering techniques by operators, leading to cold solder joints or insufficient solder.
*   **Process Variations:** Inconsistent temperature profiles during reflow soldering, leading to incomplete wetting or burnt flux.
*   **Defective Materials:** Using a batch of solder paste that has degraded or has improper flux content.

**Improvement Strategies:**
*   **Training and Certification:** Ensure all soldering operators are properly trained and certified.
*   **Process Control:** Implement strict process controls for reflow ovens (temperature profiling, speed) and wave soldering machines.
*   **Automated Inspection:** Use automated optical inspection (AOI) systems to detect soldering defects.
*   **Material Quality Control:** Implement incoming inspection for solder paste and other components.
*   **Failure Analysis:** Conduct thorough failure analysis on returned boards to pinpoint the exact cause and refine corrective actions.

---

This concludes Module 1's coverage of Causes of Failures and Unreliability. The next module will build upon this foundation by exploring reliability metrics and modeling.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
