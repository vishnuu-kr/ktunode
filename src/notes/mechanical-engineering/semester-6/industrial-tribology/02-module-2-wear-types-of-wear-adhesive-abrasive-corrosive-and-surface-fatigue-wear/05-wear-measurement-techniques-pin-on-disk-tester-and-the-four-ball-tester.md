---
title: "Wear measurement techniques: Pin-on-disk Tester and the Four Ball Tester."
subject: "INDUSTRIAL TRIBOLOGY"
module: "Module 2: Wear: Types of wear: adhesive, abrasive, corrosive, and surface fatigue wear."
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463802"
status: "completed"
scrapedAt: "2026-05-20T18:05:02.790Z"
---
# Industrial Tribology - Module 2: Wear

## Topic: Wear Measurement Techniques: Pin-on-Disk Tester and the Four Ball Tester

---

### Learning Outcomes Covered:

*   **Explain Wear Measurement Techniques:** This topic directly addresses this learning outcome by detailing two fundamental methods for quantifying wear. (CO3)

---

### Introduction to Wear Measurement

Wear is the progressive loss of material from a surface due to relative motion between that surface and another contacting surface. Quantifying wear is crucial for evaluating material performance, designing components for longevity, and understanding the mechanisms of material degradation in tribological systems. This module will focus on two widely used laboratory wear testing techniques: the Pin-on-Disk Tester and the Four Ball Tester.

---

### 1. Pin-on-Disk Tester

The Pin-on-Disk (PoD) tester is a versatile and widely used apparatus for simulating sliding wear. It is designed to measure the wear of a stationary pin (or slider) against a rotating disk.

#### 1.1. Principle of Operation:

*   **Setup:** A stationary pin specimen is pressed against the surface of a rotating disk specimen.
*   **Contact:** The normal load ($F_n$) is applied perpendicular to the sliding surfaces. The tangential frictional force ($F_f$) generated during sliding is measured.
*   **Motion:** The disk rotates at a controlled speed, creating relative sliding motion between the pin and the disk.
*   **Wear Measurement:** Wear is typically measured by:
    *   **Mass Loss:** The difference in mass of the pin and/or disk before and after the test.
    *   **Volume Loss:** Calculated from mass loss using the material density.
    *   **Wear Scar Profilometry:** Measuring the cross-sectional area and length of the wear scar on the pin (or disk) using a profilometer. This allows for the calculation of wear volume.
    *   **Wear Track Depth:** Measured directly on the disk.

#### 1.2. Key Parameters and Variables:

*   **Applied Normal Load ($F_n$):** The force pressing the pin against the disk.
*   **Sliding Speed ($v$):** The tangential speed of the disk surface.
*   **Sliding Distance ($d$):** The total distance the surfaces have slid against each other ($d = v \times t$, where $t$ is time).
*   **Contact Geometry:** The shape and size of the pin (e.g., cylindrical, hemispherical) and the disk.
*   **Environment:** Temperature, humidity, presence of lubricants, abrasive particles, or corrosive media.
*   **Material Properties:** Hardness, microstructure, surface roughness of both pin and disk.

#### 1.3. Wear Rate Calculation:

The most common way to express wear is through the **Specific Wear Rate** ($k$).

*   **Specific Wear Rate ($k$) = Volume Loss ($V$) / (Normal Load ($F_n$) × Sliding Distance ($d$))**
    *   Units: typically $mm^3/(N \cdot m)$ or $m^3/(N \cdot m)$.
*   The specific wear rate is often assumed to be constant for a given test condition (Archard's Law of Wear is based on this assumption).
*   The **wear volume ($V$)** can be calculated from the wear scar geometry, e.g., for a cylindrical pin with a wear scar of depth $h$ and diameter $w$, $V \approx (\pi/4) w^2 h$.

#### 1.4. Advantages:

*   **Versatility:** Can be used to simulate various sliding wear conditions (dry, lubricated, abrasive, etc.).
*   **Simplicity:** Relatively straightforward to set up and operate.
*   **Control:** Allows for precise control of load, speed, and sliding distance.
*   **Material Characterization:** Effective for comparing the wear resistance of different materials or surface treatments.

#### 1.5. Limitations:

*   **Simulating Real Contact:** The actual contact mechanics can differ from real machine elements (e.g., gears, bearings).
*   **Edge Effects:** Wear on the pin can be non-uniform due to edge effects.
*   **Sub-surface Phenomena:** May not fully replicate complex sub-surface stress states found in real applications.

#### 1.6. Relevance to Textbook Content:

*   **Stachowiak & Batchelor:** Discusses various wear testing machines, including the pin-on-disk, and the principles of wear measurement. They emphasize the importance of controlling test parameters to achieve representative results. (Chapter 12)
*   **Bhushan:** Covers the fundamental principles of wear testing, classification of wear testers, and the data analysis methods for wear rate determination. He highlights the pin-on-disk as a standard test. (Chapter 4)
*   **Williams:** Explains the tribological testing methodologies and the interpretation of results from contact mechanics. The PoD is presented as a tool for studying friction and wear behavior. (Chapter 5)
*   **Hutchings:** Details experimental techniques for measuring wear and friction, focusing on the parameters that influence wear and the interpretation of wear scar morphology. (Chapter 3)

---

### 2. Four Ball Tester

The Four Ball Tester is primarily used to evaluate the lubrication properties of oils and greases and to assess the wear resistance of materials under combined rolling and sliding conditions, particularly in contact with lubricants.

#### 2.1. Principle of Operation:

*   **Setup:** Consists of four hardened steel balls. Three balls are placed in a cup, which is filled with the lubricant to be tested. The fourth ball (the "top ball") is rotated against the other three stationary balls.
*   **Contact:** The three lower balls are held stationary by a ball cage, allowing them to rotate freely with the top ball. The normal load ($F_n$) is applied to the top ball through a lever system.
*   **Motion:** The top ball rotates at a controlled speed. The three lower balls are subjected to a combination of rolling and sliding motion against the top ball.
*   **Wear Measurement:** Wear is typically measured by:
    *   **Ball Wear Scar Diameter:** The diameter of the wear scar formed on the lower balls after a specified test duration and load.
    *   **Wear Volume:** Calculated from the wear scar diameter. The formula for wear volume ($V$) of a spherical ball with a scar diameter $d_s$ is $V = \frac{\pi}{6} d_s^3$ (or using a more precise formula based on spherical cap geometry).
    *   **Load-Wear Index (LWI) / Mean Wear Scar Diameter (MWSD):** Standardized methods are used to express the wear resistance of lubricants, often involving measuring wear scars at different loads.

#### 2.2. Key Parameters and Variables:

*   **Applied Normal Load ($F_n$):** The force applied to the top ball.
*   **Rotating Speed ($N$):** The rotational speed of the top ball.
*   **Test Duration ($t$):** The time for which the test is conducted.
*   **Temperature:** The temperature of the lubricant and the contact zone.
*   **Lubricant Properties:** Viscosity, additives, base oil type.
*   **Ball Material:** Typically hardened steel (e.g., AISI 52100 bearing steel).

#### 2.3. Wear Rate/Index Calculation:

*   **Mean Wear Scar Diameter (MWSD):** An average of the diameters of the wear scars on the three lower balls.
*   **Load-Wear Index (LWI):** A measure of a lubricant's ability to prevent wear under load. It is calculated based on wear scar measurements at different loads using standardized procedures (e.g., ASTM D2270, ASTM D2782).
*   **Specific Wear Rate ($k$)** can also be estimated, though the mixed rolling-sliding contact makes a direct application of Archard's Law more complex.

#### 2.4. Advantages:

*   **Lubricant Evaluation:** Excellent for screening and comparing the anti-wear and extreme pressure (EP) properties of lubricants.
*   **Combined Rolling-Sliding:** Simulates a common type of contact found in bearings and gears.
*   **Reproducibility:** Can provide relatively reproducible results for lubricant testing.
*   **Small Samples:** Requires only small quantities of lubricant.

#### 2.5. Limitations:

*   **Limited to Lubricated Conditions:** Primarily designed for testing with lubricants.
*   **Specific Geometry:** The contact is specific to four balls; results may not directly translate to all bearing types.
*   **High Stress Concentration:** The ball-on-ball contact can lead to very high Hertzian stresses.
*   **Limited Information on Friction:** While friction can be measured, it's not the primary focus compared to wear.

#### 2.6. Relevance to Textbook Content:

*   **Stachowiak & Batchelor:** Describes the Four Ball Tester as a machine for evaluating lubricant performance and understanding the behavior of materials under mixed rolling-sliding. (Chapter 12)
*   **Bhushan:** Discusses tribological testing of lubricants, including the role of the Four Ball Tester in assessing anti-wear properties and the concept of the Load-Wear Index. (Chapter 7)
*   **Williams:** Mentions the Four Ball Tester in the context of lubrication testing and evaluating material performance in lubricated sliding. (Chapter 5)
*   **Hutchings:** Explains how to measure wear scars from the Four Ball test and the interpretation of results in the context of lubricant tribology. (Chapter 3)
*   **Davis:** Touches upon lubricant testing methods and their importance in providing wear resistance for components. (Chapter 3)
*   **Lansdown:** Provides extensive detail on lubricant testing methods, including the Four Ball test, and how it relates to lubricant selection for various applications. (Chapter 4)

---

### Important Points to Remember:

*   **Test Reproducibility:** Wear test results are highly sensitive to test parameters, specimen preparation, and environmental conditions. Always follow standardized procedures for reproducible results.
*   **Correlation with Real-World Performance:** Laboratory tests are simplifications of complex real-world tribological systems. While useful for comparison, direct correlation of wear rates from lab tests to actual component life can be challenging.
*   **Wear Mechanisms:** The measured wear is a result of various wear mechanisms (adhesion, abrasion, fatigue, corrosion). The type of tester and test conditions can preferentially promote certain mechanisms.
*   **Specific Wear Rate (k):** This is a fundamental parameter for quantifying wear, assuming Archard's law is applicable.
*   **Lubricant Testing:** The Four Ball Tester is a key instrument for assessing the quality and performance of lubricants.

---

### Practice Questions:

**Question 1:**
Which of the following parameters is NOT typically varied or controlled in a Pin-on-Disk test?
a) Normal load
b) Sliding speed
c) Lubricant viscosity
d) Sliding distance

**Answer:** c) Lubricant viscosity. While lubricant can be tested, its viscosity isn't a primary controlled parameter that defines the test itself, unlike load, speed, and distance. The lubricant's effect is studied by varying the lubricant *type*, not its viscosity as a mechanical parameter of the test.

**Question 2:**
What is the primary purpose of the Four Ball Tester?
a) To measure the surface roughness of materials.
b) To evaluate the lubrication properties of oils and greases and wear under combined rolling-sliding.
c) To simulate abrasive wear in slurry conditions.
d) To determine the fatigue life of components under bending.

**Answer:** b) To evaluate the lubrication properties of oils and greases and wear under combined rolling-sliding.

**Question 3:**
Define the Specific Wear Rate and provide its units.

**Answer:**
The Specific Wear Rate ($k$) is defined as the volume of wear per unit normal load and per unit sliding distance.
$k = \frac{\text{Volume Loss}}{\text{Normal Load} \times \text{Sliding Distance}}$
Common units are $mm^3/(N \cdot m)$ or $m^3/(N \cdot m)$.

**Question 4:**
Explain the main difference in the contact conditions simulated by a Pin-on-Disk tester versus a Four Ball tester.

**Answer:**
The **Pin-on-Disk tester** primarily simulates **sliding wear**, where a stationary pin slides against a rotating disk.
The **Four Ball tester** simulates **combined rolling and sliding wear**, primarily under lubricated conditions, with the top ball rolling and sliding against the three lower balls.

**Question 5:**
A Pin-on-Disk test was conducted with a steel pin sliding against a steel disk.
*   Initial pin mass: 10.5 g
*   Final pin mass: 10.3 g
*   Normal Load: 20 N
*   Sliding Speed: 0.5 m/s
*   Test Duration: 10 minutes (600 seconds)
*   Density of steel pin: 7.85 g/cm³ (or 7850 kg/m³)

Calculate the total sliding distance and the specific wear rate of the pin.

**Answer:**
*   **Total Sliding Distance ($d$):**
    $d = \text{Sliding Speed} \times \text{Test Duration}$
    $d = 0.5 \text{ m/s} \times 600 \text{ s} = 300 \text{ m}$

*   **Mass Loss:**
    Mass Loss = Initial Pin Mass - Final Pin Mass
    Mass Loss = 10.5 g - 10.3 g = 0.2 g

*   **Volume Loss ($V$):**
    $V = \frac{\text{Mass Loss}}{\text{Density}}$
    Convert density to g/mm³ for consistency if mass is in g and we want volume in mm³:
    Density = 7850 kg/m³ = $7.85 \times 10^{-6}$ g/mm³
    $V = \frac{0.2 \text{ g}}{7.85 \times 10^{-6} \text{ g/mm}^3} \approx 25477.7 \text{ mm}^3$

    Alternatively, using SI units:
    Mass Loss = 0.0002 kg
    Density = 7850 kg/m³
    $V = \frac{0.0002 \text{ kg}}{7850 \text{ kg/m}^3} \approx 2.5477 \times 10^{-8} \text{ m}^3$

*   **Specific Wear Rate ($k$):**
    Using SI units ($m^3$, N, m):
    $k = \frac{V}{F_n \times d}$
    $k = \frac{2.5477 \times 10^{-8} \text{ m}^3}{20 \text{ N} \times 300 \text{ m}}$
    $k = \frac{2.5477 \times 10^{-8} \text{ m}^3}{6000 \text{ N} \cdot \text{m}}$
    $k \approx 4.246 \times 10^{-12} \text{ m}^3/(N \cdot m)$

    If we want units in $mm^3/(N \cdot m)$, we would convert the volume loss to $mm^3$:
    $V \approx 25477.7 \text{ mm}^3$
    $F_n = 20 \text{ N}$
    $d = 300 \text{ m} = 300,000 \text{ mm}$
    $k = \frac{25477.7 \text{ mm}^3}{20 \text{ N} \times 300,000 \text{ mm}}$
    $k = \frac{25477.7 \text{ mm}^3}{6,000,000 \text{ N} \cdot \text{mm}}$
    $k \approx 0.004246 \text{ mm}^3/(N \cdot mm)$  **(Note: Using N.mm requires careful unit conversion, N.m is more standard)**

    Let's re-calculate $k$ in the more standard $mm^3/(N \cdot m)$:
    $V \approx 25477.7 \text{ mm}^3$
    $F_n = 20 \text{ N}$
    $d = 300 \text{ m}$
    $k = \frac{25477.7 \text{ mm}^3}{20 \text{ N} \times 300 \text{ m}} = \frac{25477.7 \text{ mm}^3}{6000 \text{ N} \cdot \text{m}}$
    $k \approx 4.246 \text{ mm}^3/(N \cdot m)$

---

This concludes Module 2, Topic: Wear Measurement Techniques. The next topic will delve deeper into the specific types of wear mechanisms.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
