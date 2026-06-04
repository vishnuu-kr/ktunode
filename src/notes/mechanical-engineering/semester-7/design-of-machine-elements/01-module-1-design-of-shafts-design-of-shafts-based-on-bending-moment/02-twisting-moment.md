---
title: "Twisting Moment"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 1: Design of Shafts: Design of Shafts Based on Bending Moment"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d5a"
status: "completed"
scrapedAt: "2026-05-20T18:10:46.268Z"
---
# DESIGN OF MACHINE ELEMENTS - Module 1: Design of Shafts: Design of Shafts Based on Bending Moment

## Topic: Twisting Moment

This topic focuses on understanding and calculating the twisting moment (also known as torque) acting on a shaft and its significance in shaft design.

---

### 1. Introduction to Shafts and Torque

Shafts are fundamental machine elements used to transmit power and motion. They are typically rotating components that connect various machine parts. The power transmitted by a shaft is usually in the form of torque and angular velocity.

*   **Torque (T):** The twisting moment applied to a shaft. It causes the shaft to rotate.
*   **Angular Velocity ($\omega$):** The rate at which the shaft rotates, usually measured in radians per second (rad/s) or revolutions per minute (rpm).

---

### 2. Relationship between Power, Torque, and Speed

The power transmitted by a shaft is directly related to the torque it carries and its angular velocity. This relationship is crucial for determining the shaft's design requirements.

*   **Power (P):** The rate at which work is done.
*   **Formula for Power Transmission:**
    *   In Watts (W): $P = T \times \omega$ (where T is in N-m and $\omega$ is in rad/s)
    *   In Kilowatts (kW): $P = \frac{T \times N}{9549}$ (where T is in N-m and N is in rpm)
    *   In Horsepower (hp): $P = \frac{T \times N}{5252}$ (where T is in lb-ft and N is in rpm)

    *   **Derivation:**
        *   Work done in one revolution = $T \times 2\pi$ (Torque × angle)
        *   Number of revolutions per second = $N/60$ (if N is in rpm)
        *   Power = Work done per second = $(T \times 2\pi) \times (N/60)$
        *   $P = \frac{T \times 2\pi \times N}{60}$
        *   To convert to kW, divide by 1000: $P_{kW} = \frac{T \times 2\pi \times N}{60 \times 1000} = \frac{T \times N}{9549}$

**Important Point:** Always ensure consistent units when using these formulas.

---

### 3. Sources of Twisting Moment in Shafts

Shafts transmit torque from a power source (like an engine or motor) to a driven machine (like gears, pulleys, or sprockets). The twisting moment arises from the forces applied tangentially to these components.

*   **Pulleys:** A belt-driven pulley transmits torque through the tension difference in the belt.
    *   Let $T_1$ be the tight side belt tension and $T_2$ be the slack side belt tension.
    *   Torque transmitted $T = (T_1 - T_2) \times R$, where R is the pulley radius.
*   **Gears:** Gears transmit torque through the tangential force exerted between meshing teeth.
    *   Torque transmitted $T = F_t \times R$, where $F_t$ is the tangential force and R is the gear pitch radius.
*   **Sprockets:** Similar to gears, sprockets transmit torque via the force exerted by a chain.
*   **Flywheels:** Flywheels store and release rotational energy, hence experiencing varying torques.
*   **Cranks:** Crankshafts in engines experience significant torque variations due to combustion pressures.

---

### 4. Calculation of Twisting Moment from Power Transmission

This is the most direct way to determine the twisting moment if the power and speed are known.

*   **Example 1:** A shaft transmits 10 kW of power at 600 rpm. Calculate the twisting moment.
    *   Given: $P = 10$ kW, $N = 600$ rpm
    *   Using the formula: $P = \frac{T \times N}{9549}$
    *   $10 = \frac{T \times 600}{9549}$
    *   $T = \frac{10 \times 9549}{600} = 159.15$ N-m

*   **Example 2:** A motor delivers 5 hp to a shaft rotating at 1200 rpm. Determine the torque in the shaft.
    *   Given: $P = 5$ hp, $N = 1200$ rpm
    *   Using the formula: $P = \frac{T \times N}{5252}$ (if T is in lb-ft) or convert hp to kW first.
    *   Let's convert hp to kW: 1 hp ≈ 0.746 kW. So, $P = 5 \times 0.746 = 3.73$ kW.
    *   $3.73 = \frac{T \times 1200}{9549}$
    *   $T = \frac{3.73 \times 9549}{1200} = 29.56$ N-m.
    *   Alternatively, using the hp formula with lb-ft: $5 = \frac{T_{lb-ft} \times 1200}{5252}$.
    *   $T_{lb-ft} = \frac{5 \times 5252}{1200} = 21.88$ lb-ft.
    *   Conversion: 1 lb-ft ≈ 1.356 N-m. So, $21.88 \times 1.356 \approx 29.69$ N-m (slight difference due to rounding).

---

### 5. Types of Torques on Shafts

Shafts often experience not only pure torsion but also bending. When both occur, they create combined stresses.

*   **Pure Torsional Moment (T):** Only twisting is present. This occurs in shafts that transmit power without any transverse loads. Example: A shaft connecting two gears, where the gears are mounted on bearings and there are no other forces acting on the shaft.

*   **Pure Bending Moment (M):** Only bending is present. This is less common in power-transmitting shafts but can occur in shafts supporting loads without transmitting torque. Example: A shaft of a pulley where the belt forces are balanced such that no net torque is produced.

*   **Combined Turning Moment and Bending Moment:** This is the most common scenario for power-transmitting shafts. The bending moment arises from forces like the weight of gears, pulleys, or the resultant of belt tensions.
    *   Example: A shaft driven by a motor via a flexible coupling and driving a pulley. The motor torque causes torsion, while the weight of the pulley and the belt forces cause bending.

---

### 6. Calculating Twisting Moment from Forces

When the torque is not directly given in terms of power, it needs to be calculated from the forces and their leverages.

*   **Example 3:** A shaft carries a pulley of diameter 300 mm. The belt tensions are 1000 N on the tight side and 400 N on the slack side. The pulley transmits power to the shaft. Calculate the twisting moment.
    *   Given: Pulley diameter = 300 mm, Radius $R = 150$ mm = 0.15 m.
    *   Tight side tension $T_1 = 1000$ N, Slack side tension $T_2 = 400$ N.
    *   The net tangential force causing torque is $F_{net} = T_1 - T_2$.
    *   $F_{net} = 1000 - 400 = 600$ N.
    *   Torque $T = F_{net} \times R = 600 \times 0.15 = 90$ N-m.

*   **Example 4:** A gear with a pitch diameter of 200 mm is driven by another gear, imparting a tangential force of 500 N on its teeth. Calculate the torque transmitted by the shaft carrying this gear.
    *   Given: Pitch diameter = 200 mm, Pitch radius $R = 100$ mm = 0.1 m.
    *   Tangential force $F_t = 500$ N.
    *   Torque $T = F_t \times R = 500 \times 0.1 = 50$ N-m.

---

### 7. Importance of Twisting Moment in Shaft Design

The twisting moment is a primary factor in shaft design because it induces **torsional shear stress** in the shaft.

*   **Torsional Shear Stress ($\tau$):** When a shaft is subjected to torque, the material experiences shear stress. This stress is maximum at the outer surface of the shaft and zero at the center.
    *   **Formula for Torsional Shear Stress:** $\tau = \frac{16T}{\pi d^3}$ for a solid circular shaft of diameter 'd'.
    *   **Formula for Torsional Shear Stress:** $\tau = \frac{16T}{\pi (d_o^4 - d_i^4)}$ for a hollow circular shaft with outer diameter $d_o$ and inner diameter $d_i$.
    *   In terms of polar section modulus ($Z_p$): $\tau = \frac{T}{Z_p}$.
        *   For solid shaft, $Z_p = \frac{\pi d^3}{16}$.
        *   For hollow shaft, $Z_p = \frac{\pi (d_o^4 - d_i^4)}{16 d_o}$.

*   **Design Consideration:** The calculated torsional shear stress must be less than the allowable shear stress of the shaft material. This ensures that the shaft does not fail under torsion.

---

### 8. Types of Shafts based on Torque and Bending

While this module focuses on bending moment, it's crucial to remember that shafts often experience both. The torque calculation is fundamental to determining the combined stresses.

*   **Solid Shafts:** Simpler to manufacture, but heavier and may not be material-efficient for large diameters.
*   **Hollow Shafts:** Lighter for a given strength, better torsional stiffness-to-weight ratio, and can accommodate other components internally.

---

### 9. Practice Questions and Exercises

**Question 1:** A shaft transmits 15 kW of power at 500 rpm. Calculate the twisting moment in N-m.

**Answer:**
Given $P = 15$ kW, $N = 500$ rpm.
$P = \frac{T \times N}{9549}$
$15 = \frac{T \times 500}{9549}$
$T = \frac{15 \times 9549}{500} = 286.47$ N-m

**Question 2:** A shaft is subjected to a torque of 500 N-m. If the shaft is solid and has a diameter of 50 mm, calculate the maximum torsional shear stress.

**Answer:**
Given $T = 500$ N-m, $d = 50$ mm = 0.05 m.
$\tau = \frac{16T}{\pi d^3}$
$\tau = \frac{16 \times 500}{\pi \times (0.05)^3}$
$\tau = \frac{8000}{\pi \times 0.000125} = \frac{8000}{0.0003927} \approx 20,371,791$ Pa $\approx 20.37$ MPa.

**Question 3:** A pulley on a shaft has a diameter of 400 mm. The belt tensions are 800 N and 300 N on the tight and slack sides respectively. Calculate the torque transmitted by the shaft.

**Answer:**
Given Pulley diameter = 400 mm, Radius $R = 200$ mm = 0.2 m.
$T_1 = 800$ N, $T_2 = 300$ N.
Net tangential force $F_{net} = T_1 - T_2 = 800 - 300 = 500$ N.
Torque $T = F_{net} \times R = 500 \times 0.2 = 100$ N-m.

---

### 10. Important Points to Remember

*   The twisting moment (torque) is the fundamental measure of the twisting effect on a shaft.
*   Power transmission is directly linked to torque and angular speed. Always use consistent units.
*   Torque is generated by tangential forces acting at a distance from the shaft's axis.
*   Torque induces torsional shear stress in the shaft, which is critical for design.
*   Many shafts experience both bending and torsion simultaneously, requiring a combined stress analysis.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 11. References

*   **Design of Machine Elements by V B Bhandari (McGraw Hill Education (India), 5th Edition, 2020):** Chapter on Shafts will cover the fundamentals of torque calculation and its effects.
*   **Machine Design – An Integrated Approach by R. L. Norton (Pearson Education, 5th Edition, 2018):** Provides a comprehensive approach to shaft design, including torque calculations in the context of power transmission.
*   **Machine Design Data Book by V B Bhandari (McGraw Hill Education (India) Private Limited, 2nd edition 2019):** Useful for formulas, constants, and properties related to shaft materials and stresses.
*   **PSG Design Data by PSG Tech (DPV Printers, Coimbatore, 2022):** Another valuable resource for data and formulas relevant to machine element design, including shafts.
*   **Mechanical Engineering Design by J. E. Shigley (McGraw Hill, 2003):** A classic text that offers in-depth theoretical treatment of stress analysis, including torsion.

---

### 12. Alignment with Course Outcomes (COs)

*   **CO1: Model suitable transmission system for the stated conditions:** Understanding how torque is transmitted through shafts is foundational to modeling transmission systems involving gears, pulleys, etc. (K3)
*   **CO2: Make use of the design procedure for I C engine components:** Crankshafts in IC engines are prime examples of shafts experiencing significant and variable torques. This topic provides the basis for calculating these torques. (K3)
*   **CO5: Model suitable spur or helical gear drive based on the industrial requirements:** Gears transmit torque, and calculating this torque is essential for designing the shafts on which they are mounted. (K3)
*   **CO6: Apply the design procedure for bevel and worm gear drives for specific application:** Similar to spur and helical gears, bevel and worm gears also transmit torque, necessitating the calculation of torsional loads on their shafts. (K3)

---