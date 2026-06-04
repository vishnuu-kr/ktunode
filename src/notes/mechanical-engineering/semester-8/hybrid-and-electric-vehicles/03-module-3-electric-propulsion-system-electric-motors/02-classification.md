---
title: "classification"
subject: "HYBRID AND ELECTRIC VEHICLES"
module: "Module 3: Electric propulsion system – electric motors"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446444b"
status: "completed"
scrapedAt: "2026-05-20T18:20:58.136Z"
---
# HYBRID AND ELECTRIC VEHICLES: Module 3 - Electric Propulsion System: Electric Motors - Classification

## 1. Introduction to Electric Motors in EVs

Electric motors are the heart of the electric propulsion system in Hybrid Electric Vehicles (HEVs) and Battery Electric Vehicles (BEVs). They convert electrical energy into mechanical energy to drive the vehicle's wheels. The efficiency, power density, speed range, and cost of the electric motor significantly impact the overall performance, range, and affordability of EVs.

**Key Concepts:**

*   **Torque:** The rotational force produced by the motor.
*   **Power:** The rate at which work is done by the motor (Torque x Speed).
*   **Efficiency:** The ratio of mechanical output power to electrical input power.
*   **Power Density:** The power output per unit volume or weight of the motor.
*   **Speed Range:** The operational speed capability of the motor.

**Learning Outcomes Covered:**

*   Describe various motors and drives of Electric vehicles. (CO3: K2)

**References:**

*   Husain, I. (2010). *Electric and Hybrid Vehicles: Design Fundamentals* (2nd ed.). CRC Press. (Chapter 5)
*   Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design* (3rd ed.). CRC Press. (Chapter 4)
*   Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained* (2nd ed.). Wiley-Blackwell. (Chapter 3)

---

## 2. Classification of Electric Motors for EV Applications

Electric motors can be broadly classified based on their operating principle, construction, and power source. For EV applications, the primary focus is on motors that can provide the required torque and speed characteristics efficiently.

### 2.1. DC Motors (Direct Current Motors)

DC motors were among the earliest electric motors used in vehicles. They are characterized by their ability to provide high starting torque and relatively simple control mechanisms. However, they often suffer from lower efficiency, limited speed range, and maintenance issues due to brushes.

**Types of DC Motors:**

*   **Brushed DC Motors:**
    *   **Construction:** Consist of a stator (field winding), rotor (armature winding), commutator, and brushes. The commutator and brushes are essential for reversing the current direction in the armature windings to maintain continuous rotation.
    *   **Sub-types:**
        *   **Series Wound DC Motor:** Field winding is in series with the armature. Offers very high starting torque but poor speed regulation. Historically used in some early EVs.
        *   **Shunt Wound DC Motor:** Field winding is in parallel with the armature. Provides better speed regulation than series-wound but lower starting torque.
        *   **Compound Wound DC Motor:** Combines features of both series and shunt windings. Offers a compromise in performance.
        *   **Permanent Magnet DC (PMDC) Motor:** Field is created by permanent magnets instead of windings. More efficient, compact, and requires less maintenance than wound-field DC motors. Widely used in smaller EVs or auxiliary systems.
    *   **Advantages:** High starting torque, simple speed control (by varying armature voltage or field current).
    *   **Disadvantages:** Brush wear, commutator sparking, lower efficiency, limited speed range, maintenance requirement.
    *   **Example:** Early electric forklifts and some low-speed electric scooters might use brushed DC motors.

*   **Brushless DC (BLDC) Motors:**
    *   **Construction:** The permanent magnets are on the rotor, and the windings are on the stator. The electronic commutation (controlled by a motor controller) replaces the mechanical commutator and brushes.
    *   **Advantages:** Higher efficiency, longer lifespan (no brushes), lower maintenance, better speed control, higher power density, quieter operation.
    *   **Disadvantages:** Requires a sophisticated electronic controller (inverter) for commutation, more complex to manufacture.
    *   **Example:** Increasingly popular in modern EVs, especially for auxiliary systems or smaller EV models due to their efficiency and reliability.

**Important Point to Remember:** While brushed DC motors offer simplicity and high starting torque, the trend in modern EVs is towards BLDC motors due to their superior efficiency, reliability, and reduced maintenance.

---

### 2.2. AC Motors (Alternating Current Motors)

AC motors are the dominant choice for modern EVs due to their robustness, efficiency, and ability to operate over a wide speed range without the need for brushes. They require AC power, which is provided by an inverter that converts DC battery power into AC.

**Types of AC Motors:**

*   **Induction Motors (Asynchronous Motors):**
    *   **Construction:** Consist of a stator with windings and a rotor. The rotor can be either a "squirrel cage" rotor (most common, consisting of conductive bars short-circuited at the ends) or a wound rotor (with windings connected to slip rings). The rotating magnetic field in the stator induces current in the rotor, creating torque. The rotor rotates at a speed slightly less than the synchronous speed of the stator field, hence "asynchronous."
    *   **Types of Induction Motors:**
        *   **Squirrel Cage Induction Motor (SCIM):** Simple, robust, and cost-effective. Widely used in EVs.
        *   **Wound Rotor Induction Motor (WRIM):** Offers better speed and torque control, but is more complex and expensive. Less common in EVs.
    *   **Advantages:** Robust construction, reliable, relatively low cost, good efficiency, maintenance-free (no brushes).
    *   **Disadvantages:** Lower starting torque compared to synchronous motors, slip is inherent, control requires sophisticated variable frequency drives (VFDs).
    *   **Example:** Many mainstream EVs, including some models from Tesla (historically, though later models shifted), Nissan Leaf, and Chevrolet Bolt, have used AC induction motors due to their balance of cost, performance, and reliability.

*   **Synchronous Motors:**
    *   **Construction:** The rotor rotates at the same speed as the rotating magnetic field of the stator (synchronous speed). The rotor can be excited by permanent magnets or DC current (supplied via slip rings or brushless excitation).
    *   **Types of Synchronous Motors:**
        *   **Permanent Magnet Synchronous Motor (PMSM):** The rotor has permanent magnets embedded or surface-mounted. This results in high torque density, high efficiency, and excellent performance across the speed range.
        *   **Synchronous Reluctance Motor (SynRM):** The rotor has no magnets or windings, but is designed with salient poles to align with the stator's rotating magnetic field. Offers high efficiency and potentially lower cost than PMSMs, but typically has lower power density and torque.
        *   **Brushless DC (BLDC) Motor:** As mentioned earlier, BLDC motors are often considered a type of AC synchronous motor that is electronically commutated.
    *   **Advantages (PMSM):** Very high efficiency, high torque density, excellent speed control, no rotor losses (due to no induced currents), compact size.
    *   **Disadvantages (PMSM):** Higher cost due to rare-earth magnets, potential for demagnetization at high temperatures, requires precise position sensing for control.
    *   **Advantages (SynRM):** No magnets (lower cost, no supply chain dependency on rare earths), high efficiency.
    *   **Disadvantages (SynRM):** Lower torque density, requires complex control strategies, can be noisy.
    *   **Example:** Many modern EVs, including those from Tesla (e.g., Model 3 Long Range), BMW, and others, increasingly utilize PMSMs due to their superior efficiency and performance, especially for achieving longer ranges.

**Important Point to Remember:** PMSMs are currently the preferred choice for many high-performance and long-range EVs due to their exceptional efficiency and power density. AC induction motors remain a strong contender due to their cost-effectiveness and robustness.

---

### 2.3. Switched Reluctance Motors (SRMs)

*   **Construction:** Both stator and rotor are salient-pole structures (have protrusions) and are made of ferromagnetic material. The stator has windings, while the rotor has no windings or magnets. Torque is produced by the tendency of the rotor to align itself with the magnetic field produced by energized stator poles, minimizing reluctance.
*   **Advantages:** Very robust construction, fault tolerant (can operate even if some stator windings fail), no magnets required (lower cost, no rare-earth dependence), high-temperature capability.
*   **Disadvantages:** High torque ripple, acoustic noise, requires sophisticated electronic control for commutation and torque control, lower power density compared to PMSMs.
*   **Example:** While not as widespread as induction or PMSMs, SRMs are being explored and used in some niche EV applications or by manufacturers looking for magnet-free solutions.

---

## 3. Key Performance Indicators for EV Motors

When selecting an electric motor for an EV, several performance metrics are critical:

*   **Efficiency Curve:** How efficiently the motor operates across its speed and torque range. Higher efficiency across a wider operating band leads to better vehicle range.
    *   **Example:** A motor with peak efficiency above 95% across a broad operating range is highly desirable.

*   **Torque-Speed Characteristic:** The motor's ability to deliver torque at different speeds.
    *   **Constant Torque Region:** The motor can produce a high torque from zero speed up to a certain base speed. Crucial for acceleration from standstill.
    *   **Constant Power Region:** Beyond the base speed, the torque decreases as speed increases, allowing the motor to maintain constant power output up to its maximum speed. Crucial for cruising at higher speeds.

*   **Power Density:** The amount of power the motor can produce relative to its size (volume) or weight. Higher power density allows for smaller and lighter motor installations, improving vehicle packaging and reducing overall weight.

*   **Cost:** The manufacturing and material cost of the motor.

*   **Reliability and Durability:** The motor's ability to withstand the demanding operating conditions of a vehicle, including temperature variations, vibrations, and load cycles.

---

## 4. Comparison of Motor Types for EV Applications

| Feature          | Brushed DC Motor | Brushless DC (BLDC) Motor | AC Induction Motor (SCIM) | Permanent Magnet Synchronous Motor (PMSM) | Switched Reluctance Motor (SRM) |
| :--------------- | :--------------- | :------------------------ | :------------------------ | :---------------------------------------- | :------------------------------ |
| **Efficiency**   | Moderate         | High                      | High                      | Very High                                 | High                            |
| **Starting Torque** | Very High        | High                      | Moderate                  | High                                      | High                            |
| **Speed Range**  | Limited          | Wide                      | Wide                      | Very Wide                                 | Wide                            |
| **Complexity**   | Low              | Moderate (Controller)     | Moderate (Controller)     | Moderate (Controller, Magnets)            | High (Controller)               |
| **Cost**         | Low              | Moderate                  | Moderate                  | High (Magnets)                            | Moderate (No Magnets)           |
| **Reliability**  | Low (Brushes)    | High                      | Very High                 | High                                      | Very High                       |
| **Maintenance**  | High (Brushes)   | Low                       | Very Low                  | Low                                       | Low                             |
| **Torque Ripple**| Moderate         | Low                       | Low                       | Very Low                                  | High                            |
| **Noise**        | Moderate         | Low                       | Low                       | Very Low                                  | High (Acoustic)                 |
| **Power Density**| Moderate         | High                      | High                      | Very High                                 | Moderate                        |
| **Key Advantage**| Simplicity       | Efficiency, Longevity     | Cost, Robustness          | Peak Efficiency, Performance              | Magnet-free, Robustness         |
| **Key Disadvantage**| Brush Wear       | Controller Complexity     | Lower starting torque     | Magnet Cost                               | Torque Ripple, Noise            |

**References:**

*   Ehsani, M., Gao, Y., Gay, S. E., & Emadi, A. (2018). *Modern Electric, Hybrid Electric and Fuel Cell Vehicles: Fundamentals, Theory and Design* (3rd ed.). CRC Press. (Chapter 4)
*   Larminie, J., & Lowry, J. (2012). *Electric Vehicle Technology Explained* (2nd ed.). Wiley-Blackwell. (Chapter 3)
*   Denton, T. (2020). *Electric and Hybrid Vehicles* (2nd ed.). CBS Publishers & Distributors Pvt. Ltd. (Chapter 3)

---

## 5. Motor Selection Criteria for EVs

The choice of electric motor for an EV depends on several factors:

*   **Vehicle Type:** A small commuter EV might use a more cost-effective AC induction motor or a BLDC motor, while a high-performance sports EV might opt for a PMSM for maximum acceleration and efficiency.
*   **Target Range and Performance:** Higher efficiency motors (like PMSMs) are preferred for achieving longer driving ranges.
*   **Cost Constraints:** AC induction motors and SRMs are generally less expensive than PMSMs.
*   **Packaging and Weight:** Motor size and weight can influence vehicle dynamics and interior space.
*   **Reliability and Maintenance Requirements:** Motors with fewer wearing parts (brushless types) are generally preferred.
*   **Charging Infrastructure and Power Electronics:** The capabilities of the motor controller (inverter) are also a factor.

**Learning Outcomes Covered:**

*   Explain the general architecture of Electric vehicles. (CO1: K2) - *Understanding motor placement within the architecture.*
*   Describe various motors and drives of Electric vehicles. (CO3: K2) - *This section directly addresses this.*
*   Explain details of power transmission of Electric vehicles and select the appropriate components based on requirement. (CO4: K3) - *Motor selection is a key component selection decision.*

---

## 6. Practice Questions and Answers

**Question 1:**
Which type of DC motor is generally not suitable for primary propulsion in modern EVs due to brush wear and maintenance requirements?
a) Brushless DC (BLDC) Motor
b) Permanent Magnet DC (PMDC) Motor
c) Series Wound DC Motor
d) Shunt Wound DC Motor

**Answer 1:**
c) Series Wound DC Motor. While PMDC motors are DC, the "Brushed" aspect of Series and Shunt wound DC motors makes them less desirable for primary propulsion in modern EVs. Series wound motors, in particular, have poor speed regulation.

**Question 2:**
What is the primary advantage of Permanent Magnet Synchronous Motors (PMSMs) in EV applications?
a) Lower manufacturing cost
b) High efficiency and torque density
c) Simpler control electronics
d) No need for an inverter

**Answer 2:**
b) High efficiency and torque density. PMSMs offer excellent performance characteristics crucial for EV range and acceleration.

**Question 3:**
AC induction motors are often described as "asynchronous." What does this term refer to?
a) The motor speed is synchronized with the supply frequency.
b) The rotor speed is slightly less than the stator's magnetic field speed.
c) The motor can operate on both AC and DC power.
d) The motor's efficiency varies significantly with speed.

**Answer 3:**
b) The rotor speed is slightly less than the stator's magnetic field speed. This difference in speed is called "slip" and is fundamental to how induction motors generate torque.

**Question 4:**
List two key advantages of Brushless DC (BLDC) motors over brushed DC motors for EV propulsion.

**Answer 4:**
1.  **Higher Efficiency:** No energy losses due to brush friction.
2.  **Longer Lifespan and Lower Maintenance:** Absence of brushes and commutator eliminates wear and tear and associated maintenance.
3.  **Higher Power Density:** Can achieve higher power output for a given size.
4.  **Quieter Operation:** Reduced mechanical noise.

**Question 5:**
Consider an EV requiring high starting torque for rapid acceleration from rest and efficient cruising at high speeds. Which motor types would be most suitable, and why?

**Answer 5:**
*   **For High Starting Torque:** Brushed DC motors (especially series-wound) and PMSMs excel here. However, due to reliability concerns with brushed DC, PMSMs are preferred.
*   **For Efficient Cruising at High Speeds:** PMSMs offer excellent efficiency across a wide speed range, including higher speeds. AC induction motors also perform well at higher speeds.

Therefore, a **Permanent Magnet Synchronous Motor (PMSM)** is a very strong candidate as it can provide both high starting torque and high efficiency at cruising speeds. An **AC Induction Motor** is also a viable option, particularly if cost is a major consideration, as it can also deliver good performance across the operating range.

---

## 7. Important Points to Remember

*   **Evolution of EV Motors:** From early DC motors to modern AC synchronous motors (especially PMSMs), there has been a continuous drive towards higher efficiency, better performance, and increased reliability.
*   **Brushless is Better for EVs:** The absence of brushes in BLDC, AC induction, and PMSM motors significantly improves their suitability for EV applications due to higher efficiency, longer lifespan, and reduced maintenance.
*   **Trade-offs Exist:** No single motor type is perfect. Selection involves balancing efficiency, cost, power density, reliability, and control complexity.
*   **Role of the Inverter/Controller:** For AC motors and BLDC motors, the power electronics controller (inverter) is crucial for converting DC battery power to the appropriate AC form and for managing motor speed and torque.
*   **PMSMs Lead the Pack (Currently):** Due to their superior efficiency and torque density, PMSMs are increasingly the motor of choice for many manufacturers aiming for longer EV ranges and better performance.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
