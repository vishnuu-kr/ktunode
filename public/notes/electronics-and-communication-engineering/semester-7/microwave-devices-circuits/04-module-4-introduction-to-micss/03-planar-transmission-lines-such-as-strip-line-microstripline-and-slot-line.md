---
title: "Planar transmission lines such as strip line, microstripline, and slot line."
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 4: Introduction to MICSs:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff4a4"
status: "completed"
scrapedAt: "2026-05-23T18:08:00.256Z"
---
Here are comprehensive study notes for the topic "Planar transmission lines such as stripline, microstripline, and slot line" from Module 4 of MICROWAVE DEVICES & CIRCUITS.

---

# MICROWAVE DEVICES & CIRCUITS: Module 4 - Introduction to MICs

## Topic: Planar Transmission Lines

This module introduces the fundamental concepts of Microwave Integrated Circuits (MICs) and the transmission lines that form their building blocks. Planar transmission lines are crucial for interconnecting components and guiding electromagnetic waves in MICs due to their ease of fabrication using photolithographic techniques. We will explore three primary types: stripline, microstripline, and slot line.

---

### **1. Introduction to Planar Transmission Lines**

**1.1 Importance in MICs**

*   **Miniaturization & Integration:** Planar transmission lines enable the compact and integrated design of microwave circuits, replacing bulky coaxial cables and waveguides. (Pozar, Ch 6; Collin, Ch 3)
*   **Fabrication:** They are compatible with printed circuit board (PCB) technology, allowing for cost-effective and repeatable manufacturing.
*   **Performance:** They offer controllable characteristic impedance and low loss, essential for efficient microwave signal transmission.

**1.2 Key Characteristics**

*   **Characteristic Impedance ($Z_0$):** The ratio of voltage to current for a propagating wave. It's a critical design parameter for matching circuits and minimizing reflections.
*   **Effective Dielectric Constant ($\epsilon_{eff}$):** Represents the average dielectric constant experienced by the electromagnetic wave in a non-uniform dielectric medium. It influences the phase velocity and wavelength.
*   **Propagation Constant ($\gamma$):** $\gamma = \alpha + j\beta$, where $\alpha$ is the attenuation constant (loss) and $\beta$ is the phase constant (determines phase velocity and wavelength).
*   **Dispersion:** The phenomenon where the phase velocity (and hence wavelength) depends on frequency. This is a significant factor in planar transmission lines.

---

### **2. Microstripline**

**2.1 Structure and Description**

*   **Definition:** A microstripline consists of a thin metallic strip conductor on one side of a dielectric substrate, with a ground plane on the other side.
*   **Cross-section:**

    ```
      <----- w ----->
    ------------------  (Conductor Strip)
    ==================  (Dielectric Substrate, thickness h, permittivity epsilon_r)
    ------------------  (Ground Plane)
    ```

*   **Components:**
    *   **Conductor Strip:** Typically copper, width `w`.
    *   **Dielectric Substrate:** Typically a low-loss material like Teflon-fiberglass (RT/duroid), alumina, or quartz, thickness `h`, relative permittivity `$\epsilon_r$`.
    *   **Ground Plane:** Continuous metallic layer.

**2.2 Electromagnetic Wave Propagation**

*   **Hybrid Mode:** Microstriplines support a hybrid mode, meaning both electric and magnetic field components exist in all three dimensions. However, for thin substrates and low frequencies, it's often approximated as a TEM mode.
*   **Field Distribution:** The fields are primarily confined between the conductor strip and the ground plane, but fringing fields extend into the air above the strip and into the dielectric below. This non-uniform dielectric environment (air and substrate) leads to dispersion.

**2.3 Design Equations and Parameters (Approximations)**

*   **Characteristic Impedance ($Z_0$):**
    *   The calculation of $Z_0$ is complex due to the mixed dielectric environment. Approximate formulas exist.
    *   **Key Insight:** $Z_0$ depends on the width-to-height ratio (`w/h`) and the relative permittivity of the substrate (`$\epsilon_r$`).
    *   **Common Approximations (e.g., from Pozar, Ch 6):**
        *   For **wide strips ($w/h \ge 1$)**: $Z_0 \approx \frac{60}{\sqrt{\epsilon_{eff}}} \ln \left( \frac{8h}{w} + \frac{w}{4h} \right)$
        *   For **narrow strips ($w/h \le 1$)**: $Z_0 \approx \frac{60}{\sqrt{\epsilon_{eff}}} \ln \left( \frac{4h}{w} + 1.393 \right)$
    *   **Effective Dielectric Constant ($\epsilon_{eff}$):**
        *   $\epsilon_{eff}$ is a function of `$\epsilon_r$` and `w/h`. It varies between 1 (air) and `$\epsilon_r$`.
        *   **Approximation (e.g., from Pozar, Ch 6):**
            *   For $w/h \ge 1$: $\epsilon_{eff} \approx \frac{\epsilon_r + 1}{2} + \frac{\epsilon_r - 1}{2} \left( 1 + 12\frac{h}{w} \right)^{-1/2}$
            *   For $w/h \le 1$: $\epsilon_{eff} \approx \frac{\epsilon_r + 1}{2} + \frac{\epsilon_r - 1}{2} \left( 1 + 12\frac{h}{w} \right)^{-1/2}$ (The same formula is often used with adjustments for different ranges).
    *   **Dispersion:** As frequency increases, the fields become more tightly coupled to the dielectric, and $\epsilon_{eff}$ tends to increase, causing the phase velocity to decrease. This leads to frequency-dependent behavior.

**2.4 Advantages and Disadvantages**

*   **Advantages:**
    *   Easy fabrication using standard PCB techniques.
    *   High characteristic impedance can be achieved for narrow strips.
    *   Simple to integrate with other planar components.
*   **Disadvantages:**
    *   Significant radiation loss from the open structure, especially at discontinuities and higher frequencies.
    *   Poor isolation between adjacent lines due to fringing fields.
    *   Dispersion can limit bandwidth.
    *   Limited power handling capability compared to stripline.

**2.5 Applications**

*   Interconnects in RF and microwave circuits.
*   Filters, couplers, and antennas.
*   Used in RFICs and MMICs (though often modified).

---

### **3. Stripline**

**3.1 Structure and Description**

*   **Definition:** A stripline consists of a metallic strip conductor embedded within a dielectric material, with ground planes on both sides of the dielectric.
*   **Cross-section:**

    ```
    ------------------  (Ground Plane)
    ==================  (Upper Dielectric Layer, thickness t1, permittivity epsilon_r1)
    ------------------  (Conductor Strip, width w)
    ==================  (Lower Dielectric Layer, thickness t2, permittivity epsilon_r2)
    ------------------  (Ground Plane)
    ```
    *   A common variant is the **Symmetric Stripline** where $t_1 = t_2 = t$ and $\epsilon_{r1} = \epsilon_{r2} = \epsilon_r$.

*   **Components:**
    *   **Conductor Strip:** Metallic strip, width `w`.
    *   **Dielectric Layers:** Typically low-loss dielectrics with thicknesses `t1`, `t2` and relative permittivities `$\epsilon_{r1}$`, `$\epsilon_{r2}$`.
    *   **Ground Planes:** Continuous metallic layers sandwiching the dielectric.

**3.2 Electromagnetic Wave Propagation**

*   **TEM Mode:** The symmetric stripline, due to its enclosed structure and symmetrical dielectric environment, supports a pure TEM (Transverse Electromagnetic) mode, similar to a coaxial cable. This is a significant advantage.
*   **Field Distribution:** The electric and magnetic fields are confined to the space between the conductor strip and the ground planes, and are largely uniform in the dielectric.

**3.3 Design Equations and Parameters (Approximations)**

*   **Characteristic Impedance ($Z_0$):**
    *   The TEM mode allows for more straightforward calculations of $Z_0$.
    *   **Key Insight:** $Z_0$ depends on the width-to-height ratio (`w/h`, where $h = t_1 + t_2$) and the dielectric properties.
    *   **For Symmetric Stripline ($t_1=t_2=t$, $\epsilon_{r1}=\epsilon_{r2}=\epsilon_r$)**:
        *   For **wide strips ($w/h \ge 0.35$)**: $Z_0 \approx \frac{120\pi}{\sqrt{\epsilon_r}} \left( \frac{h}{w + 1.25t} \right)$ (This is a common approximation, variations exist).
        *   For **narrow strips ($w/h < 0.35$)**: $Z_0 \approx \frac{120\pi}{\sqrt{\epsilon_r}} \frac{h}{w}$
    *   **Effective Dielectric Constant ($\epsilon_{eff}$):** For a pure TEM mode, $\epsilon_{eff} = \epsilon_r$.

**3.4 Advantages and Disadvantages**

*   **Advantages:**
    *   Supports pure TEM propagation, leading to no dispersion and constant phase velocity across frequency.
    *   Lower radiation loss compared to microstripline due to its enclosed structure.
    *   Better isolation between adjacent lines.
    *   Higher power handling capability.
*   **Disadvantages:**
    *   More complex fabrication process (requires etching of dielectric layers and plating).
    *   Difficult to mount discrete components directly on the line.
    *   Can be more expensive to manufacture compared to microstriplines.
    *   Generally higher loss due to dielectric loading on the conductor strip. (Bhat & Koul, Ch 2; Pozar, Ch 6)

**3.5 Applications**

*   High-performance microwave circuits where dispersion is critical.
*   Filters, couplers, and transmission lines in complex MICs.
*   Used in applications requiring good isolation and low radiation.

---

### **4. Slot Line**

**4.1 Structure and Description**

*   **Definition:** A slot line consists of a slot (a gap) etched into a conductive metallization on one side of a dielectric substrate, with the other side usually being a continuous ground plane.
*   **Cross-section:**

    ```
    ==================  (Conductor Layer with Slot)
      <--- s --->
    ------------------  (Dielectric Substrate, thickness h, permittivity epsilon_r)
    ==================  (Ground Plane)
    ```
    *   The slot has width `s`.

*   **Components:**
    *   **Conductive Layer:** Typically copper, with a slot etched.
    *   **Dielectric Substrate:** Similar to microstriplines.
    *   **Ground Plane:** Continuous metallic layer.

**4.2 Electromagnetic Wave Propagation**

*   **Hybrid Mode:** Slot lines also support hybrid modes, similar to microstriplines. The fields are concentrated within the slot and fringe into the dielectric and air.
*   **Field Distribution:** The electric field is primarily oriented across the slot, while the magnetic field is largely circumferential around the slot edges.

**4.3 Design Equations and Parameters (Approximations)**

*   **Characteristic Impedance ($Z_0$):**
    *   The calculation of $Z_0$ for slot lines is also complex due to the hybrid mode and asymmetric dielectric environment.
    *   **Key Insight:** $Z_0$ depends on the slot width (`s`), substrate thickness (`h`), and relative permittivity (`$\epsilon_r$`).
    *   **Approximation (e.g., from Pozar, Ch 6):**
        *   For **wide slots ($s/h \ge 1$)**: $Z_0 \approx \frac{120\pi}{\sqrt{\epsilon_{eff}}} \left( \frac{h}{s} + 0.441 \right)^{-1}$
        *   For **narrow slots ($s/h \le 1$)**: $Z_0 \approx \frac{120\pi}{\sqrt{\epsilon_{eff}}} \left( \frac{h}{s} + 0.657 \right)^{-1}$
    *   **Effective Dielectric Constant ($\epsilon_{eff}$):** Similar to microstriplines, $\epsilon_{eff}$ is a function of `$\epsilon_r$` and `s/h`, and lies between 1 and `$\epsilon_r$`.

**4.4 Advantages and Disadvantages**

*   **Advantages:**
    *   Can be easily integrated with microstriplines using transitions.
    *   Has different characteristics from microstriplines, useful for directional couplers.
    *   Can offer good performance in certain applications.
*   **Disadvantages:**
    *   Higher radiation loss compared to striplines.
    *   Poor isolation between adjacent lines.
    *   Dispersion is present.
    *   Difficult to achieve very low impedance values.
    *   Fabrication requires precise etching of slots. (Liao, Ch 5; Pozar, Ch 6)

**4.5 Applications**

*   Directional couplers (when combined with microstriplines).
*   Transitions between microstriplines and other planar structures.
*   Certain types of filters and antennas.

---

### **5. Comparison of Planar Transmission Lines**

| Feature                 | Microstripline                               | Stripline (Symmetric)                      | Slot Line                                 |
| :---------------------- | :------------------------------------------- | :----------------------------------------- | :---------------------------------------- |
| **Structure**           | Conductor on one side of dielectric, ground on other | Conductor embedded in dielectric, ground on both sides | Slot in conductor on one side, ground on other |
| **Mode of Propagation** | Hybrid (approx. TEM)                         | Pure TEM                                   | Hybrid                                    |
| **Dispersion**          | Present                                      | Absent (for TEM mode)                      | Present                                   |
| **Radiation Loss**      | Moderate to high (open structure)            | Low (enclosed structure)                   | Moderate to high (open structure)         |
| **Isolation**           | Poor                                         | Good                                       | Poor                                      |
| **Fabrication**         | Easy (PCB etching)                           | More complex (etching, plating)            | Moderate (slot etching)                   |
| **Impedance Range**     | Moderate to high                             | Wide range                                 | Moderate to high                          |
| **Power Handling**      | Moderate                                     | High                                       | Moderate                                  |
| **Key Use Cases**       | General interconnects, filters, antennas     | High-frequency, low-dispersion applications | Directional couplers, transitions         |
| **Textbook Reference**  | Pozar Ch 6, Collin Ch 3                      | Pozar Ch 6, Bhat & Koul Ch 2               | Pozar Ch 6, Liao Ch 5                     |

---

### **6. Transitions Between Planar Lines**

*   **Necessity:** MICs often require connecting different types of planar transmission lines (e.g., microstripline to slot line).
*   **Types of Transitions:** Various designs exist, including:
    *   **Microstrip to Slotline:** Typically involves a radiating element or a carefully designed coupling structure.
    *   **Microstrip to Stripline:** Can be achieved using bridging techniques or via grounding connections.
*   **Design Considerations:** Minimizing insertion loss, maximizing bandwidth, and controlling impedance mismatch are crucial. (Konishi, Ch 3)

---

### **7. Course Outcome Alignment**

*   **CO1 (K2): Describe the basic principles of Microwave solid state diodes, transistors, generators and amplifiers.**
    *   This topic directly supports understanding how signals are transmitted between these active components within an MIC environment. The choice of transmission line impacts the performance and integration of these devices.
*   **CO2 (K3): Analyze Microwave Networks using signal flow graphs.**
    *   Planar transmission lines are fundamental components of microwave networks. Understanding their properties ($Z_0$, loss, dispersion) is essential for modeling and analyzing these networks using S-parameters and signal flow graphs.
*   **CO3 (K3): Design microwave filters by different methods.**
    *   Many microwave filters are realized using planar transmission line structures (e.g., coupled microstriplines, stepped impedance microstriplines, slot line filters). The design equations and physical parameters of these lines are critical for filter design.
*   **CO4 (K2): Illustrate the basic concepts of Monolithic Integrated Circuits (MICs).**
    *   This topic is a cornerstone of MICs. It explains the physical structures and guiding mechanisms that allow for the integration of multiple microwave functions onto a single substrate.

---

### **8. Important Points to Remember**

*   **Planar transmission lines are the foundation of MICs.**
*   **Microstripline:** Open, hybrid mode, dispersion, radiation loss, easy fabrication.
*   **Stripline:** Enclosed, TEM mode, no dispersion, low radiation, complex fabrication.
*   **Slot Line:** Open, hybrid mode, dispersion, used for coupling and transitions.
*   **$\epsilon_{eff}$ is crucial for determining phase velocity and wavelength in hybrid modes.**
*   **Fabrication process complexity influences cost and practicality.**
*   **Dispersion limits bandwidth in microstriplines and slot lines.**
*   **Loss mechanisms (dielectric, conductor, radiation) are important considerations.**

---

### **9. Practice Questions and Exercises**

**Question 1:**
A microstripline with a width $w = 1$ mm and substrate thickness $h = 0.5$ mm on a substrate with $\epsilon_r = 2.2$ (e.g., RT/duroid 5880). Calculate its approximate characteristic impedance ($Z_0$) and effective dielectric constant ($\epsilon_{eff}$) at microwave frequencies. Use the provided approximations.

**Answer:**
Given: $w = 1$ mm, $h = 0.5$ mm, $\epsilon_r = 2.2$.
Ratio: $w/h = 1/0.5 = 2$. Since $w/h > 1$, we use the formulas for wide strips.

*   **$\epsilon_{eff}$ calculation:**
    $\epsilon_{eff} \approx \frac{\epsilon_r + 1}{2} + \frac{\epsilon_r - 1}{2} \left( 1 + 12\frac{h}{w} \right)^{-1/2}$
    $\epsilon_{eff} \approx \frac{2.2 + 1}{2} + \frac{2.2 - 1}{2} \left( 1 + 12 \times \frac{0.5}{1} \right)^{-1/2}$
    $\epsilon_{eff} \approx \frac{3.2}{2} + \frac{1.2}{2} (1 + 6)^{-1/2}$
    $\epsilon_{eff} \approx 1.6 + 0.6 \times (7)^{-1/2}$
    $\epsilon_{eff} \approx 1.6 + 0.6 \times 0.378$
    $\epsilon_{eff} \approx 1.6 + 0.227$
    $\epsilon_{eff} \approx 1.827$

*   **$Z_0$ calculation:**
    $Z_0 \approx \frac{60}{\sqrt{\epsilon_{eff}}} \ln \left( \frac{8h}{w} + \frac{w}{4h} \right)$
    $Z_0 \approx \frac{60}{\sqrt{1.827}} \ln \left( \frac{8 \times 0.5}{1} + \frac{1}{4 \times 0.5} \right)$
    $Z_0 \approx \frac{60}{1.352} \ln \left( 4 + \frac{1}{2} \right)$
    $Z_0 \approx 44.38 \ln (4.5)$
    $Z_0 \approx 44.38 \times 1.504$
    $Z_0 \approx 66.74 \ \Omega$

**Question 2:**
List three key differences between microstripline and stripline in terms of their electromagnetic wave propagation characteristics and fabrication.

**Answer:**
1.  **Mode of Propagation:** Microstriplines support a hybrid mode, while symmetric striplines support a pure TEM mode.
2.  **Dispersion:** Microstriplines exhibit dispersion (phase velocity depends on frequency), whereas striplines do not (for the TEM mode).
3.  **Fabrication:** Microstriplines are easier to fabricate using standard PCB techniques, while striplines require more complex processes like etching dielectric layers and plating due to their enclosed structure.

**Question 3:**
Explain the primary reason why striplines have lower radiation loss compared to microstriplines.

**Answer:**
Striplines have lower radiation loss because they are enclosed structures, sandwiched between two ground planes. This confinement of electromagnetic fields within the dielectric and between the conductors significantly reduces the tendency for energy to radiate away from the line, unlike the open structure of a microstripline where fields fringe into the surrounding air.

**Question 4:**
What is the main application where slot lines are often used in conjunction with microstriplines?

**Answer:**
The primary application where slot lines are often used with microstriplines is in the design of **directional couplers**. The different field configurations and propagation characteristics of microstriplines and slot lines allow for efficient power coupling between them when placed in close proximity.

---

This concludes the study notes for Planar Transmission Lines. Ensure you refer to the textbooks for more detailed derivations and graphical representations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
