---
title: "Determination of B-H curve, μ-H curve and μ-B curve of a magnetic specimen."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 12: Determination of B"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35cf9"
status: "completed"
scrapedAt: "2026-05-23T16:12:01.312Z"
---
# CIRCUITS AND MEASUREMENTS LAB - Module 12: Determination of B

## Topic: Determination of B-H Curve, $\mu$-H Curve and $\mu$-B Curve of a Magnetic Specimen

---

### 1. Introduction and Objectives

This module focuses on understanding and experimentally determining the magnetic properties of a ferromagnetic material. Specifically, we aim to plot and analyze the relationship between magnetic field strength (H) and magnetic flux density (B), as well as the relationship between permeability ($\mu$) and H, and permeability ($\mu$) and B. This is crucial for designing and understanding magnetic components in electrical devices like transformers, motors, and inductors.

**Learning Outcomes:**

*   Understand the fundamental concepts of magnetism and magnetic circuits.
*   Learn the experimental setup and procedure for determining the B-H curve of a magnetic specimen.
*   Understand the concept of magnetic permeability and its variations.
*   Be able to plot and interpret the B-H, $\mu$-H, and $\mu$-B curves.
*   Relate the obtained curves to the behavior of magnetic materials in practical applications.
*   Apply knowledge gained to analyze magnetic characteristics of electrical devices (aligns with **CO5**).

---

### 2. Key Concepts and Definitions

#### 2.1. Magnetism and Magnetic Circuits

*   **Magnetic Field (H):** The magnetizing force, often called the magnetic field intensity. It is the force per unit pole. In SI units, it is measured in Amperes per meter (A/m). In the context of a solenoid, $H = nI$, where $n$ is the number of turns per unit length and $I$ is the current.
*   **Magnetic Flux ($\Phi$):** The total magnetic field lines passing through a given area. Measured in Webers (Wb).
*   **Magnetic Flux Density (B):** The magnetic flux per unit area. It represents the strength of the magnetic field. In SI units, it is measured in Teslas (T), where $1 \, T = 1 \, Wb/m^2$.
*   **Magnetic Permeability ($\mu$):** A measure of a material's ability to support the formation of a magnetic field within itself. It is the ratio of magnetic flux density to magnetic field strength: $\mu = B/H$.
    *   **Permeability of Free Space ($\mu_0$):** The permeability of a vacuum, a fundamental constant equal to $4\pi \times 10^{-7} \, H/m$.
    *   **Relative Permeability ($\mu_r$):** The ratio of the permeability of a material to the permeability of free space: $\mu_r = \mu/\mu_0$. Relative permeability is a dimensionless quantity.
*   **Magnetic Circuit:** An analogy to an electric circuit, where magnetic flux is analogous to current, magnetomotive force (MMF) is analogous to voltage, and reluctance is analogous to resistance.
    *   **Magnetomotive Force (MMF):** The driving force for magnetic flux in a magnetic circuit, analogous to electromotive force (EMF) in an electric circuit. It is typically produced by a coil carrying current: $MMF = NI$, where $N$ is the number of turns and $I$ is the current.
    *   **Reluctance ($\mathcal{R}$):** The opposition to magnetic flux in a magnetic circuit, analogous to electrical resistance. $\mathcal{R} = l/(\mu A)$, where $l$ is the length of the magnetic path, $\mu$ is the permeability of the material, and $A$ is the cross-sectional area.
*   **Ferromagnetic Materials:** Materials like iron, nickel, and cobalt that exhibit strong magnetic effects. They are characterized by high permeability and their magnetic properties are non-linear, meaning B and H are not directly proportional over a wide range.

#### 2.2. Hysteresis

*   **Hysteresis:** The lagging of magnetic flux density (B) behind the magnetizing force (H) in a ferromagnetic material when subjected to a cyclic magnetization. This phenomenon is due to the irreversible changes in the magnetic domains within the material.
*   **B-H Curve (Magnetization Curve):** A graph showing the relationship between magnetic flux density (B) and magnetic field strength (H) for a magnetic material.
    *   **Initial Magnetization Curve:** The curve obtained when a demagnetized ferromagnetic material is magnetized for the first time.
    *   **Hysteresis Loop:** The characteristic loop obtained when a ferromagnetic material is subjected to a complete cycle of magnetization (increasing H, decreasing H, reversing H, and returning to the original H).
        *   **Saturation:** The state where further increases in H do not significantly increase B.
        *   **Remanence ($B_r$):** The residual magnetic flux density remaining in the material when the external magnetizing force (H) is reduced to zero.
        *   **Coercivity ($H_c$):** The magnitude of the magnetizing force (H) required to reduce the magnetic flux density (B) to zero after the material has been saturated.
        *   **Area of the Hysteresis Loop:** Represents the energy loss per unit volume of the material during one cycle of magnetization. Hard magnetic materials have wider loops and higher energy losses, while soft magnetic materials have narrower loops and lower energy losses.

---

### 3. Experimental Setup

A typical experimental setup for determining the B-H, $\mu$-H, and $\mu$-B curves involves a toroidally wound specimen of the magnetic material.

**Components:**

1.  **Toroidal Specimen:** A ring-shaped core made of the magnetic material to be tested. This shape is preferred to avoid air gaps and ensure uniform magnetic flux distribution.
2.  **Primary Winding (Magnetizing Winding):** Wound on the toroidal core. A variable DC voltage source (or a variable DC current source) is connected to this winding to control the magnetizing force (H).
3.  **Secondary Winding (Search Coil):** Also wound on the toroidal core, but physically separate from the primary winding. This coil is used to detect the change in magnetic flux.
4.  **DC Power Supply:** A variable voltage DC power supply to provide current to the primary winding.
5.  **Ammeter:** To measure the current ($I_p$) flowing through the primary winding.
6.  **Variable Resistor (Rheostat):** Connected in series with the primary winding to vary the current.
7.  **Ballistic Galvanometer (or Digital Integrator/Data Acquisition System):** Connected to the secondary winding to measure the charge passed through it when the flux changes. A ballistic galvanometer deflects proportionally to the total charge passed.
8.  **Standard Resistance Box:** Used in conjunction with the ballistic galvanometer to calibrate it.
9.  **Connecting Wires and Switches.**

**Circuit Diagram:**

```
                      +-----------------+
                      | DC Power Supply |
                      +-------+---------+
                              |
                              |
                      +-------+-------+
                      | Variable      |
                      | Resistor      |
                      +-------+-------+
                              |
                              |
                      +-------+-------+    +-----------------+
                      | Ammeter (Ip)  |----| Primary Winding |
                      +-------+-------+    | (N1 turns)      |
                                           | ON Toroidal     |
                                           | Specimen        |
                                           +--------+--------+
                                                    |
                                                    |
                                           +--------+--------+
                                           | Secondary Winding|
                                           | (N2 turns)      |
                                           +--------+--------+
                                                    |
                                                    |
                                     +--------------+--------------+
                                     |                             |
                            +--------+--------+      +--------+--------+
                            | Standard        |------| Ballistic       |
                            | Resistance Box  |      | Galvanometer    |
                            +-----------------+      +--------+--------+
```

---

### 4. Experimental Procedure

The experiment involves varying the current in the primary winding and observing the corresponding magnetic flux in the specimen.

**Steps:**

1.  **Setup:** Connect the circuit as shown in the diagram. Ensure the toroidal specimen is placed correctly and all connections are secure.
2.  **Demagnetization (Optional but Recommended):** If the specimen is already magnetized, it's good practice to demagnetize it first. This can be done by applying a large AC current to the primary winding and gradually reducing it to zero. However, for this specific experiment focusing on the initial magnetization and part of the hysteresis loop, starting from a demagnetized state is usually assumed or achieved by setting the initial current to zero.
3.  **Initial State:** Set the rheostat to its maximum resistance, so the current in the primary winding is zero.
4.  **Increasing Magnetization:**
    *   Gradually decrease the resistance of the rheostat to increase the current ($I_p$) in the primary winding in small steps.
    *   For each step of $I_p$:
        *   Allow the current to stabilize.
        *   **Record $I_p$.**
        *   **Observe the ballistic galvanometer deflection.** When the current is increased (or changed), the flux in the core changes, inducing a voltage in the secondary winding. This induced voltage drives a charge through the ballistic galvanometer.
        *   **Discharge the secondary coil through the ballistic galvanometer and standard resistance box:** Introduce a known resistance $R_s$ (from the resistance box) in series with the secondary winding and the ballistic galvanometer. Discharge the secondary coil by momentarily shorting it through the galvanometer. Record the deflection ($\theta$).
        *   **Calibration:** Before or after taking readings, calibrate the ballistic galvanometer. Introduce a known flux change in the secondary coil by varying the current in the primary coil by a known amount ($\Delta I_{cal}$). The change in flux is $\Delta \Phi_{cal} = \mu_0 N_1 A \Delta H_{cal} = \mu_0 N_1 A (N_1 \Delta I_{cal} / l)$. (This calibration method might vary slightly depending on the practical lab setup; often, a known inductor is used for calibration). A more common calibration is done by inserting a known standard resistance $R_s$ and measuring the charge $q_{cal}$ produced by a known flux linkage change $\Delta \lambda_{cal} = N_2 \Delta \Phi_{cal}$. The ballistic galvanometer deflection $\theta_{cal}$ is proportional to $q_{cal} = \Delta \lambda_{cal} / R_{total}$, where $R_{total} = R_{secondary} + R_s$.
        *   **Calculate Flux Density (B):**
            *   The induced EMF in the secondary winding is $e_2 = -N_2 \frac{d\Phi}{dt}$.
            *   The charge passed through the galvanometer is $q = \int i_2 dt = \int \frac{e_2}{R_{total}} dt = \int \frac{-N_2}{R_{total}} \frac{d\Phi}{dt} dt = \frac{-N_2 \Delta \Phi}{R_{total}}$.
            *   The deflection $\theta$ of the ballistic galvanometer is proportional to the charge $q$: $\theta = k \cdot q$, where $k$ is the galvanometer constant.
            *   So, $\Delta \Phi = -\frac{\theta \cdot R_{total}}{k \cdot N_2}$.
            *   The flux density change is $\Delta B = \frac{\Delta \Phi}{A}$, where $A$ is the cross-sectional area of the toroidal core.
            *   Therefore, $\Delta B = -\frac{\theta \cdot R_{total}}{k \cdot N_2 \cdot A}$.
            *   To find the actual value of $B$ at each step, we sum the incremental changes in $B$ starting from zero: $B_{step_i} = B_{step_{i-1}} + \Delta B_{step_i}$. Assuming the initial state is $B=0$.
        *   **Calculate Magnetic Field Strength (H):**
            *   $H = nI_p = \frac{N_1 I_p}{l}$, where $N_1$ is the number of turns in the primary winding and $l$ is the mean circumference of the toroidal core (magnetic path length).
            *   $l = 2\pi r_m$, where $r_m$ is the mean radius of the torus.
        *   **Record values of $H$ and $B$ at each step.**
5.  **Decreasing Magnetization:**
    *   After reaching saturation, decrease the primary current ($I_p$) in steps, moving back towards zero.
    *   For each step, record $I_p$ and measure the galvanometer deflection as before.
    *   Calculate the corresponding $\Delta B$ values. Since the flux is decreasing, $\Delta B$ will be negative, and the galvanometer deflection will be in the opposite direction. Ensure proper sign conventions are used.
    *   Calculate the values of $B$ by subtracting the incremental changes from the saturation value: $B_{step_i} = B_{saturation} - (\text{sum of positive } \Delta B \text{ values up to saturation}) + (\text{sum of } \Delta B \text{ values from saturation downwards})$.
6.  **Reversing Magnetization (Optional for full hysteresis loop):**
    *   Continue decreasing $I_p$ into negative values (reversing the polarity of the DC supply or reversing the connections) to observe the negative H values.
    *   Take readings as the current is increased in the negative direction back towards zero.
    *   Continue taking readings as the current is increased in the positive direction again to complete the loop.
7.  **Calculate Permeability:**
    *   **Permeability ($\mu$):** For each pair of $(H, B)$ values, calculate $\mu = B/H$. Be cautious when $H$ is close to zero, as the ratio can be very large and sensitive to small errors.
    *   **Relative Permeability ($\mu_r$):** Calculate $\mu_r = \mu / \mu_0$.
8.  **Plotting:**
    *   Plot the **B-H curve** with B on the y-axis and H on the x-axis.
    *   Plot the **$\mu$-H curve** with $\mu$ (or $\mu_r$) on the y-axis and H on the x-axis.
    *   Plot the **$\mu$-B curve** with $\mu$ (or $\mu_r$) on the y-axis and B on the x-axis.

---

### 5. Calculations and Analysis

**Assumptions and Parameters:**

*   $N_1$: Number of turns in the primary winding.
*   $N_2$: Number of turns in the secondary winding.
*   $A$: Cross-sectional area of the toroidal core ($m^2$).
*   $l$: Mean circumference of the toroidal core (magnetic path length, $m$).
*   $r_m$: Mean radius of the toroidal core ($m$).
*   $R_{total}$: Total resistance in the secondary circuit during galvanometer discharge ($R_{secondary} + R_{s}$).
*   $k$: Ballistic galvanometer constant (usually provided or determined by calibration).
*   $\mu_0 = 4\pi \times 10^{-7} \, H/m$.

**Formulas:**

*   **Magnetic Field Strength:** $H = \frac{N_1 I_p}{l}$ (A/m)
*   **Incremental Flux Density Change:** $\Delta B = \frac{\theta R_{total}}{k N_2 A}$ (T) (for a positive deflection $\theta$)
*   **Flux Density:** $B_i = B_{i-1} + \Delta B_i$ (T) (starting with $B_0 = 0$)
*   **Permeability:** $\mu = \frac{B}{H}$ (H/m)
*   **Relative Permeability:** $\mu_r = \frac{\mu}{\mu_0}$

**Calibration Example:**

Suppose during calibration, changing $I_p$ by $\Delta I_{cal} = 0.1 \, A$ causes a galvanometer deflection $\theta_{cal} = 20$ divisions. The calibration resistance is $R_{s\_cal} = 1000 \, \Omega$. The secondary winding has $N_2 = 100$ turns, and the core area is $A = 0.001 \, m^2$. Assume the resistance of the secondary winding is $R_{secondary} = 50 \, \Omega$.
Then $R_{total\_cal} = R_{secondary} + R_{s\_cal} = 100 + 1000 = 1100 \, \Omega$.
The change in flux linkage is $\Delta \lambda_{cal} = N_2 \Delta \Phi_{cal} = R_{total\_cal} \cdot q_{cal} = R_{total\_cal} \cdot \frac{\theta_{cal}}{k}$.
Also, $\Delta \Phi_{cal} = \mu_0 N_1 A \Delta H_{cal} = \mu_0 N_1 A \frac{N_1 \Delta I_{cal}}{l}$.
$\Delta \lambda_{cal} = N_2 \Delta \Phi_{cal} = N_2 \mu_0 N_1 A \frac{N_1 \Delta I_{cal}}{l}$.

A more direct calibration might involve measuring the charge $q_{cal}$ corresponding to a known flux change. If we know the galvanometer sensitivity $S$ in terms of charge per division ($C/div$), then $q_{cal} = S \times \theta_{cal}$.
Then $q_{cal} = \frac{N_2 \Delta \Phi_{cal}}{R_{total\_cal}}$.
$\Delta \Phi_{cal} = \frac{q_{cal} R_{total\_cal}}{N_2}$.
We need to relate this to a known $\Delta H$.
$\Delta H_{cal} = \frac{N_1 \Delta I_{cal}}{l}$.
$\Delta B_{cal} = \mu_0 \Delta H_{cal}$ if it were a linear material.
For a practical calibration, it's often easier to discharge the secondary through the galvanometer and resistance box for a known change in primary current. Let's say a change in primary current $\Delta I_p$ causes a deflection $\theta$.
$\Delta B = \frac{\theta R_{total}}{k N_2 A}$.
To find $k$, we need a known $\Delta B$ for a known $\theta$. If we use a standard solenoid for calibration, we can calculate $\Delta H = n \Delta I$. If the material were linear with permeability $\mu$, $\Delta B = \mu \Delta H$.
However, in the lab, the galvanometer is usually calibrated by passing a known charge through it. If we know the galvanometer constant $k$ (e.g., in $C/div$), then $q = k \theta$.
The charge $q$ is related to flux change by $q = N_2 \Delta \Phi / R_{total}$.
So, $\Delta \Phi = q R_{total} / N_2$.
$\Delta B = \Delta \Phi / A = q R_{total} / (N_2 A) = (k \theta) R_{total} / (N_2 A)$.
This requires knowing $k$ or calibrating it. A common method is to discharge a known capacitor through the galvanometer.

**Important Point to Remember:** The sign convention for $\Delta B$ depends on the direction of change of current and the winding direction. When $I_p$ increases from 0, $\Delta B$ is positive. When $I_p$ decreases from saturation, $\Delta B$ is negative.

---

### 6. Interpretation of Curves

#### 6.1. B-H Curve

*   **Initial Magnetization:** Starts from the origin (0,0). The initial slope is the permeability of free space (or air gap if present). As H increases, B rises non-linearly.
*   **Saturation:** The curve flattens out, indicating that the magnetic material is saturated, and further increases in H produce only small increases in B.
*   **Hysteresis Loop:** Shows the lag of B behind H. The area of the loop represents energy loss.
    *   **Soft Magnetic Materials (e.g., soft iron):** Narrow hysteresis loop, low coercivity, low remanence. Suitable for applications where rapid changes in magnetization are required and low power loss is desired (e.g., transformer cores, AC inductors).
    *   **Hard Magnetic Materials (e.g., Alnico, Ferrites):** Wide hysteresis loop, high coercivity, high remanence. Suitable for permanent magnets.

#### 6.2. $\mu$-H Curve

*   **Initial Permeability:** At very low H, $\mu$ is relatively low.
*   **Maximum Permeability:** As H increases, $\mu$ increases, reaching a maximum value at a certain H. This is the point of maximum responsiveness of the material to the magnetic field.
*   **Permeability at Saturation:** As H approaches saturation, $\mu$ drops sharply and approaches $\mu_0$.
*   The $\mu$-H curve provides direct information about how the material's ability to concentrate magnetic flux changes with the applied magnetic field strength.

#### 6.3. $\mu$-B Curve

*   This curve is similar in shape to the $\mu$-H curve but plotted against B.
*   It shows how permeability changes as the flux density within the material increases.
*   $\mu$ is high when B is in the middle range of the B-H curve and decreases as B approaches zero (remanence) or saturation.

---

### 7. Practical Applications and Importance

*   **Transformer Design:** The B-H curve dictates the core material selection for transformers. Soft magnetic materials with low hysteresis loss are used for efficiency. The saturation flux density determines the maximum flux the core can handle before saturation occurs, influencing the transformer's operating voltage and size.
*   **Inductor Design:** Similar to transformers, the B-H curve is critical for selecting core materials for inductors, especially in power applications.
*   **Motor and Generator Design:** The magnetic properties of the materials used in the rotors and stators affect their performance, efficiency, and size.
*   **Magnetic Recording Media:** Materials with specific hysteresis loop characteristics are used for data storage.
*   **Electromagnets:** The B-H curve of the core material determines the strength of the electromagnet for a given magnetizing current.
*   **Understanding Magnetic Losses:** The hysteresis loop area quantifies the energy lost as heat in the core during each magnetization cycle, which is a crucial factor in the efficiency of AC magnetic devices.

---
