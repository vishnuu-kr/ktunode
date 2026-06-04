---
title: "Buckingham’s equation for dynamic load"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d8b"
status: "completed"
scrapedAt: "2026-05-20T18:11:18.685Z"
---
# DESIGN OF MACHINE ELEMENTS - Module 4: Design of Gears: Nomenclature: Spur

## Topic: Buckingham’s Equation for Dynamic Load

---

### 1. Introduction to Gear Loads

When gears transmit power, the teeth are subjected to various types of loads:

*   **Tangential Load ($W_t$):** This is the primary load responsible for transmitting power. It acts tangentially at the pitch circle.
*   **Separating Load ($W_s$):** This load acts radially, tending to separate the teeth.
*   **Axial Load ($W_a$):** For helical gears, this load acts along the gear axis.

In addition to the static tangential load, several dynamic factors influence the actual load experienced by gear teeth under operating conditions. These dynamic loads can be significantly higher than the static load, leading to increased stress and potential failure.

---

### 2. Need for Dynamic Load Analysis

The static load analysis alone is insufficient for designing gears because it doesn't account for:

*   **Impact due to manufacturing errors:** Imperfections in tooth profile, pitch, and alignment can cause sudden impacts during meshing.
*   **Elastic deformation:** Both the gear teeth and the shaft can deform under load, affecting the contact pattern and introducing dynamic effects.
*   **Backlash:** The clearance between mating teeth can lead to sudden load transfer.
*   **Centrifugal force:** Rotating gears experience centrifugal forces that can influence the dynamic load.
*   **Vibrations:** The entire gear system can vibrate, adding dynamic components to the tooth load.

**Buckingham's equation** is a widely used empirical formula to estimate the dynamic load on gear teeth, considering these dynamic effects. It's particularly useful for spur and helical gears.

---

### 3. Buckingham's Dynamic Load Equation

Buckingham's equation provides an estimate of the additional dynamic load ($W_d$) superimposed on the static tangential load ($W_t$). The total tangential load ($W_{total}$) is then calculated as:

$W_{total} = W_t + W_d$

The equation for dynamic load is given by:

$$W_d = \frac{21CV}{21 + \sqrt{CV}}$$

Where:

*   $W_d$ = Dynamic load (in N or lb)
*   $C$ = Gear-tooth factor, reflecting the elastic properties and geometry of the teeth (in N/mm or lb/in).
*   $V$ = Velocity factor, accounting for the effect of tangential velocity at the pitch circle (dimensionless).

**Important Note:** This equation is often used to determine the effective load, which is then used in bending stress calculations for the gear teeth.

---

### 4. Components of Buckingham's Equation

Let's break down the components $C$ and $V$:

#### 4.1. Gear-Tooth Factor ($C$)

The gear-tooth factor ($C$) is an empirical constant that depends on the material of the gears, the manufacturing accuracy, and the tooth system. It represents the stiffness of the gear teeth.

*   **Higher values of $C$** indicate stiffer teeth, which can withstand higher dynamic loads.
*   **Lower values of $C$** indicate softer teeth or less accurate manufacturing, leading to higher dynamic loads for a given static load.

**Typical values of $C$ can be found in design handbooks and textbooks (e.g., Bhandari, Norton, PSG Data Book).** The values are usually provided for specific materials, heat treatments, and manufacturing tolerances.

**Example values for $C$ (approximate, refer to handbooks for precise values):**

| Material and Condition                                 | $C$ (N/mm) (approx.) |
| :----------------------------------------------------- | :------------------- |
| Cast Iron, rough machining                             | 500 - 800            |
| Cast Iron, good machining                              | 800 - 1200           |
| Steel, forged, rough machining                         | 800 - 1200           |
| Steel, forged, good machining                          | 1200 - 2000          |
| Steel, heat-treated, precision hobbed/ground           | 2000 - 3500          |
| Phosphor Bronze, good machining                        | 1000 - 1500          |
| Hardened and Ground Gears (high accuracy)              | 2500 - 4000          |

**How to determine $C$ from Textbooks:**
*   **Bhandari (Design of Machine Elements):** Chapter on Gears, section on dynamic load. Bhandari often provides tables with values of $C$ based on material, heat treatment, and manufacturing precision.
*   **Norton (Machine Design – An Integrated Approach):** Similar sections will detail how $C$ is chosen based on the AGMA (American Gear Manufacturers Association) standards or other empirical data.
*   **PSG Design Data Book:** This book is invaluable for practical design values. It will have tables listing $C$ for various materials and manufacturing accuracies.

#### 4.2. Velocity Factor ($V$)

The velocity factor ($V$) accounts for the impact due to the velocity of the teeth at the pitch line. It is calculated based on the tangential velocity ($v$) of the gear teeth at the pitch circle.

$$V = \frac{6}{6 + v}$$

Where:

*   $v$ = Tangential velocity of the gear teeth at the pitch circle, in meters per second (m/s).

**Calculating Tangential Velocity ($v$):**

$v = \frac{\pi D N}{60 \times 1000}$

Where:

*   $D$ = Pitch diameter of the gear (in meters)
*   $N$ = Rotational speed of the gear (in rpm)

**Important Notes on $v$:**
*   Ensure consistent units. If pitch diameter is in mm, convert it to meters.
*   The velocity is typically calculated for the driving gear or the smaller of the two gears, as it generally experiences higher tangential velocities for a given power transmission.

**Range of $V$:**
*   When $v = 0$ m/s (i.e., for static loads), $V = \frac{6}{6+0} = 1$. This means $W_d = 0$ and $W_{total} = W_t$.
*   As $v$ increases, $V$ decreases, reducing the calculated dynamic load. This implies that at very high speeds, the velocity factor mitigates some of the impact. However, in reality, other dynamic effects can become dominant at high speeds.

---

### 5. Calculating Total Tangential Load

Once $W_d$ is calculated using Buckingham's equation, the total tangential load is:

$W_{total} = W_t + W_d$

This $W_{total}$ is then used in the bending stress calculations for the gear tooth.

---

### 6. Limitations of Buckingham's Equation

While useful, Buckingham's equation has limitations:

*   **Empirical nature:** It is based on empirical data and may not be universally accurate for all gear geometries, materials, and operating conditions.
*   **Simplification:** It simplifies complex dynamic phenomena into a single velocity factor and a gear-tooth factor.
*   **Manufacturing accuracy:** The accuracy of the result heavily depends on the correct selection of the gear-tooth factor ($C$), which is tied to manufacturing precision. Modern gear manufacturing can achieve much higher accuracies than when the equation was initially formulated.
*   **Lubrication:** It doesn't explicitly consider the effect of lubrication.
*   **Misalignment:** It doesn't directly account for significant gear misalignment.

**Modern approaches** (like Lewis, AGMA, ISO standards) often refine these calculations or use more sophisticated methods to account for dynamic loads. However, Buckingham's equation remains a fundamental concept for understanding dynamic load estimation in gear design.

---

### 7. Design Procedure using Buckingham's Equation

1.  **Determine the static tangential load ($W_t$)**:
    $W_t = \frac{P}{v}$ (where $P$ is power in Watts and $v$ is velocity in m/s, yielding $W_t$ in Newtons)
    Or $W_t = \frac{2T}{D}$ (where $T$ is torque and $D$ is pitch diameter)

2.  **Calculate the tangential velocity ($v$) at the pitch circle**:
    $v = \frac{\pi D N}{60 \times 1000}$ m/s

3.  **Calculate the velocity factor ($V$)**:
    $V = \frac{6}{6 + v}$

4.  **Select the gear-tooth factor ($C$)**:
    Choose $C$ from tables in Bhandari, PSG Data Book, or other relevant handbooks based on gear material, heat treatment, and manufacturing accuracy.

5.  **Calculate the dynamic load ($W_d$) using Buckingham's equation**:
    $W_d = \frac{21CV}{21 + \sqrt{CV}}$

6.  **Calculate the total tangential load ($W_{total}$)**:
    $W_{total} = W_t + W_d$

7.  **Use $W_{total}$ for subsequent stress analysis (bending and surface stress)**.

---

### 8. Examples and Practice Questions

**Example 1:**

A spur gear transmits 10 kW of power at a pitch line velocity of 5 m/s. The gear is made of steel with good machining and has a gear-tooth factor $C = 1500$ N/mm. Calculate the dynamic load using Buckingham's equation.

**Solution:**

1.  **Static tangential load ($W_t$)**:
    $W_t = \frac{P}{v} = \frac{10 \times 1000 \text{ W}}{5 \text{ m/s}} = 2000 \text{ N}$

2.  **Velocity factor ($V$)**:
    The velocity $v = 5$ m/s is already given.
    $V = \frac{6}{6 + v} = \frac{6}{6 + 5} = \frac{6}{11} \approx 0.545$

3.  **Gear-tooth factor ($C$)**:
    $C = 1500$ N/mm

4.  **Buckingham's equation for dynamic load ($W_d$)**:
    $W_d = \frac{21CV}{21 + \sqrt{CV}}$
    $CV = 1500 \text{ N/mm} \times 0.545 = 817.5$
    $W_d = \frac{21 \times 817.5}{21 + \sqrt{817.5}}$
    $W_d = \frac{17167.5}{21 + 28.59} = \frac{17167.5}{49.59} \approx 346.2$ N

5.  **Total tangential load ($W_{total}$)**:
    $W_{total} = W_t + W_d = 2000 \text{ N} + 346.2 \text{ N} = 2346.2 \text{ N}$

**Practice Question 1:**

A pinion and gear pair transmits 15 kW power at a pitch line velocity of 4 m/s. The pinion is made of hardened and ground steel with a gear-tooth factor $C = 3000$ N/mm. Calculate the dynamic load using Buckingham's equation.

**Answer:**
1.  $W_t = \frac{15000 \text{ W}}{4 \text{ m/s}} = 3750 \text{ N}$
2.  $V = \frac{6}{6 + 4} = \frac{6}{10} = 0.6$
3.  $C = 3000$ N/mm
4.  $CV = 3000 \times 0.6 = 1800$
5.  $W_d = \frac{21 \times 1800}{21 + \sqrt{1800}} = \frac{37800}{21 + 42.43} = \frac{37800}{63.43} \approx 595.9$ N
6.  $W_{total} = 3750 \text{ N} + 595.9 \text{ N} = 4345.9 \text{ N}$

**Practice Question 2:**

A cast iron spur gear transmits 5 kW power. The pitch diameter is 200 mm and the speed is 300 rpm. The gear is machined to good accuracy, with $C = 1000$ N/mm. Calculate the dynamic load.

**Solution:**

1.  **Calculate Pitch Line Velocity ($v$)**:
    $D = 200 \text{ mm} = 0.2 \text{ m}$
    $N = 300 \text{ rpm}$
    $v = \frac{\pi D N}{60} = \frac{\pi \times 0.2 \times 300}{60} = \pi \text{ m/s} \approx 3.14 \text{ m/s}$

2.  **Calculate Static Tangential Load ($W_t$)**:
    $P = 5 \text{ kW} = 5000 \text{ W}$
    $W_t = \frac{P}{v} = \frac{5000 \text{ W}}{3.14 \text{ m/s}} \approx 1592 \text{ N}$

3.  **Calculate Velocity Factor ($V$)**:
    $V = \frac{6}{6 + v} = \frac{6}{6 + 3.14} = \frac{6}{9.14} \approx 0.656$

4.  **Gear-tooth factor ($C$)**:
    $C = 1000$ N/mm

5.  **Buckingham's equation for dynamic load ($W_d$)**:
    $CV = 1000 \text{ N/mm} \times 0.656 = 656$
    $W_d = \frac{21CV}{21 + \sqrt{CV}} = \frac{21 \times 656}{21 + \sqrt{656}}$
    $W_d = \frac{13776}{21 + 25.61} = \frac{13776}{46.61} \approx 295.5$ N

6.  **Total tangential load ($W_{total}$)**:
    $W_{total} = W_t + W_d = 1592 \text{ N} + 295.5 \text{ N} = 1887.5 \text{ N}$

---

### 9. Important Points to Remember

*   Buckingham's equation is an empirical method to estimate dynamic load, adding to the static load.
*   The formula $W_d = \frac{21CV}{21 + \sqrt{CV}}$ requires accurate determination of $C$ and $v$.
*   $C$ is the gear-tooth factor, dependent on material, accuracy, and tooth form. Refer to handbooks for values.
*   $v$ is the tangential velocity at the pitch line, calculated from pitch diameter and speed.
*   The velocity factor $V = \frac{6}{6+v}$ accounts for impact due to speed.
*   The total load for stress analysis is $W_{total} = W_t + W_d$.
*   While Buckingham's equation is fundamental, modern design standards might offer more refined methods.

---

### 10. Alignment with Course Outcomes

*   **CO1, CO5, CO6:** Understanding and applying Buckingham's equation is crucial for designing gear drives (spur, helical, bevel). It directly impacts the load calculations used in determining the stresses on gear teeth, which is a core part of selecting appropriate gears and ensuring their reliable operation. The calculation of tangential velocity ($v$) and its relation to power transmission ties into modeling suitable transmission systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 11. References

*   **Bhandari, V. B. (2020).** *Design of Machine Elements.* McGraw Hill Education (India). (Likely contains detailed tables for $C$ and worked examples).
*   **Norton, R. L. (2018).** *Machine Design – An Integrated Approach.* Pearson Education. (Provides context on dynamic loading and empirical formulas).
*   **PSG Design Data Book.** (Essential for practical values of $C$ for various materials and manufacturing conditions).

This comprehensive set of notes covers the core aspects of Buckingham's equation for dynamic load in gear design, providing the theoretical background, practical application, and crucial context for engineering students.