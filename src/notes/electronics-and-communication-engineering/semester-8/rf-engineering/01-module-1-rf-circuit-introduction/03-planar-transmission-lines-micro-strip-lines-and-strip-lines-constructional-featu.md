---
title: "Planar Transmission Lines – Micro strip lines and Strip lines – Constructional Features"
subject: "RF ENGINEERING"
module: "Module 1: RF circuit introduction "
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff5dd"
status: "completed"
scrapedAt: "2026-05-23T18:56:51.283Z"
---
# RF Engineering: Module 1: RF Circuit Introduction

## Topic: Planar Transmission Lines – Microstrip Lines and Striplines – Constructional Features

**Learning Outcomes:**

*   Understand the fundamental principles of planar transmission lines.
*   Differentiate between microstrip lines and striplines.
*   Analyze the constructional features of microstrip lines and striplines.
*   Identify the advantages and disadvantages of each type of planar transmission line.

**Course Outcomes Alignment:**

*   **CO1 (K2):** This topic provides the foundational knowledge of how RF signals are guided and propagated, which is essential for understanding RF networks.
*   **CO2 (K2):** Understanding transmission line behavior is crucial for interpreting measurements made with RF components and network analyzers.

---

### 1. Introduction to Transmission Lines in RF Circuits

At radio frequencies (RF) and microwave frequencies, the physical dimensions of circuits become comparable to the wavelength of the signals. In such cases, conventional lumped-element circuit theory is no longer sufficient. Instead, distributed-element circuit theory is required, where the propagation of electromagnetic waves along conducting structures is considered. Transmission lines are the fundamental structures used to guide and propagate these RF signals.

**Key Concepts:**

*   **Distributed Elements:** Circuit components whose physical size is significant compared to the wavelength of the signal.
*   **Wavelength ($\lambda$):** The spatial period of the wave, defined as the distance over which the wave's shape repeats. $\lambda = c/f$, where $c$ is the speed of light and $f$ is the frequency.
*   **Characteristic Impedance ($Z_0$):** The ratio of the voltage to the current in a traveling wave on a lossless transmission line. It's a property of the line's geometry and the dielectric material.
*   **Propagation Constant ($\gamma$):** Describes how a wave's amplitude and phase change as it propagates along the line. $\gamma = \alpha + j\beta$, where $\alpha$ is the attenuation constant and $\beta$ is the phase constant.
*   **VSWR (Voltage Standing Wave Ratio):** A measure of the mismatch between the transmission line's characteristic impedance and the load impedance.

**Reference:**
*   Pozar, D. M. (2011). *Microwave and RF design of wireless systems*. Chapter 2 introduces the fundamental concepts of transmission line theory.
*   Ludwig, R., & Reinhold, R. (2000). *RF Circuit Design: Theory & Applications*. Chapter 2 covers basic transmission line theory and parameters.

---

### 2. Planar Transmission Lines

Planar transmission lines are a class of transmission lines that are constructed on flat substrates, making them highly suitable for integration with planar circuit technologies like Printed Circuit Boards (PCBs) and Monolithic Microwave Integrated Circuits (MMICs). This planarity allows for ease of fabrication, miniaturization, and integration with other components.

**Key Concepts:**

*   **Planar Structure:** A structure where the conducting elements are primarily on the surface of a dielectric substrate.
*   **Integration:** The ability to combine multiple circuit functions on a single substrate.
*   **Miniaturization:** Reducing the physical size of RF circuits.

---

### 3. Microstrip Lines

A microstrip line is a fundamental planar transmission line consisting of a single conductor strip on one side of a dielectric substrate, with a ground plane on the opposite side.

**3.1 Constructional Features:**

*   **Conductor Strip:** A metallic trace (usually copper) with a defined width ($w$) and thickness ($t$). The width of the strip is a critical parameter in determining its characteristic impedance.
*   **Dielectric Substrate:** A non-conductive material with a specific dielectric constant ($\epsilon_r$) and thickness ($h$). Common substrates include FR-4, Rogers, and alumina. The dielectric constant significantly influences the wave propagation characteristics.
*   **Ground Plane:** A continuous metallic layer on the opposite side of the substrate from the conductor strip. This plane acts as the return path for the current and defines the electromagnetic field boundary.

**Diagram (Conceptual):**

```
      ------------------------------------  (Conductor Strip, width 'w')
      ====================================  (Dielectric Substrate, thickness 'h', dielectric constant epsilon_r)
      ------------------------------------  (Ground Plane)
```

**3.2 Electromagnetic Field Distribution:**

The electromagnetic fields in a microstrip line are not purely transverse electromagnetic (TEM) waves because the wave propagates through two different media: the dielectric substrate and the air above the strip. This results in a **quasi-TEM** mode of propagation.

*   **Electric Field:** Primarily confined within the dielectric substrate, extending from the conductor strip to the ground plane. It also fringes into the air above the strip.
*   **Magnetic Field:** Circulates around the conductor strip.

**3.3 Design Considerations:**

*   **Characteristic Impedance ($Z_0$):** Primarily determined by the ratio of the conductor strip width ($w$) to the substrate thickness ($h$), and the dielectric constant ($\epsilon_r$) of the substrate.
    *   Wider strips generally lead to lower characteristic impedance.
    *   Thinner substrates generally lead to lower characteristic impedance.
    *   Higher dielectric constants generally lead to lower characteristic impedance.
*   **Insertion Loss:** Caused by conductor resistance and dielectric losses. Thicker substrates and wider strips can reduce conductor loss at the expense of mode purity.
*   **Dispersion:** The phase velocity is dependent on frequency, meaning that different frequency components of a signal travel at different speeds. This is more pronounced at higher frequencies and for narrower substrates relative to the strip width.

**3.4 Advantages:**

*   **Ease of Fabrication:** Compatible with standard PCB manufacturing processes.
*   **Integration:** Easily integrated with other planar circuit components.
*   **Lower Cost:** Generally less expensive to manufacture compared to striplines.
*   **Single-Sided Processing:** Can be implemented on a single layer of the substrate.

**3.5 Disadvantages:**

*   **Field Fringe:** Significant electromagnetic fields radiate into the surrounding air, leading to:
    *   **Radiation Loss:** Especially at higher frequencies or sharp bends.
    *   **Crosstalk:** Interference between adjacent microstrip lines.
    *   **Sensitivity to Enclosures:** Performance can be affected by nearby metallic structures.
*   **Lower Power Handling:** Compared to striplines due to field fringing.
*   **Dispersion:** Non-TEM nature leads to frequency-dependent propagation characteristics.

**Textbook References:**
*   Ludwig & Reinhold (2000), Chapter 3, provides detailed formulas and design curves for microstrip lines.
*   Pozar (2011), Chapter 6, discusses microstrip line theory and design considerations.
*   Carr (2001), Chapter 3, offers practical insights into designing with microstrip lines.

---

### 4. Striplines

A stripline is another planar transmission line where a conductor strip is embedded within a dielectric material, sandwiched between two ground planes.

**4.1 Constructional Features:**

*   **Conductor Strip:** A metallic trace with a defined width ($w$) and thickness ($t$), typically located in the center of the dielectric substrate.
*   **Dielectric Substrate:** The dielectric material fills the space between the two ground planes. The thickness of the dielectric ($h$) and the width of the strip ($w$) are key design parameters.
*   **Ground Planes:** Two parallel metallic planes sandwiching the dielectric and the conductor strip. These planes provide the return path for the current.

**Diagram (Conceptual):**

```
      ------------------------------------  (Top Ground Plane)
      ====================================  (Dielectric Substrate, thickness 'h1')
      ------------------------------------  (Conductor Strip, width 'w')
      ====================================  (Dielectric Substrate, thickness 'h2')
      ------------------------------------  (Bottom Ground Plane)
```
*Note: Often, $h1 = h2$ for symmetrical striplines.*

**4.2 Electromagnetic Field Distribution:**

In an ideal stripline, the electromagnetic fields are confined within the dielectric material between the two ground planes. This results in a **pure TEM** mode of propagation, similar to a two-wire transmission line or coaxial cable.

*   **Electric Field:** Primarily directed from the conductor strip to the adjacent ground planes.
*   **Magnetic Field:** Circulates around the conductor strip.

**4.3 Design Considerations:**

*   **Characteristic Impedance ($Z_0$):** Determined by the width of the conductor strip ($w$), the dielectric thickness ($h$), the dielectric constant ($\epsilon_r$), and the thickness of the strip ($t$).
    *   Wider strips generally lead to lower characteristic impedance.
    *   Thicker dielectric generally leads to higher characteristic impedance.
    *   Higher dielectric constants generally lead to lower characteristic impedance.
*   **Insertion Loss:** Primarily due to conductor resistance and dielectric losses within the substrate. Striplines generally offer lower conductor loss compared to microstrip lines due to the more concentrated current distribution.
*   **Dispersion:** Ideally, striplines exhibit no dispersion as they support a true TEM mode. However, minor dispersion can occur due to the finite conductivity of the conductors and the finite thickness of the strip.

**4.4 Advantages:**

*   **Pure TEM Mode:** Results in broadband, low-dispersion performance.
*   **Field Confinement:** Electromagnetic fields are primarily confined within the dielectric, leading to:
    *   **Lower Radiation Loss:** Minimizes signal leakage.
    *   **Reduced Crosstalk:** Less interference between adjacent lines.
    *   **Immunity to External Environment:** Less sensitive to enclosures or nearby metallic objects.
*   **Higher Power Handling:** Due to better field confinement.
*   **Lower Loss:** Generally lower conductor and dielectric losses compared to microstrip lines for similar geometries.

**4.5 Disadvantages:**

*   **More Complex Fabrication:** Requires a multi-layer PCB structure or specialized manufacturing processes.
*   **Higher Cost:** Due to the additional layers and processing steps.
*   **Not Easily Integrated:** Embedding the conductor strip makes it harder to integrate with surface-mounted components.
*   **Double-Sided Processing:** Requires access to both sides of the dielectric for the ground planes.

**Textbook References:**
*   Ludwig & Reinhold (2000), Chapter 4, covers stripline theory, design equations, and applications.
*   Pozar (2011), Chapter 6, also discusses striplines and their properties.
*   Radmanesh (2017), *Advanced RF & microwave circuit design*, provides insights into the design of striplines for specific applications.

---

### 5. Comparison of Microstrip Lines and Striplines

| Feature                 | Microstrip Line                                  | Stripline                                      |
| :---------------------- | :----------------------------------------------- | :--------------------------------------------- |
| **Structure**           | Conductor on substrate, single ground plane      | Conductor embedded in dielectric, two ground planes |
| **EM Field Mode**       | Quasi-TEM                                        | TEM                                            |
| **Field Confinement**   | Partial (fringes into air)                       | High (confined within dielectric)              |
| **Dispersion**          | Present (frequency-dependent)                    | Minimal (ideally none)                         |
| **Radiation Loss**      | Higher                                           | Lower                                          |
| **Crosstalk**           | Higher                                           | Lower                                          |
| **Fabrication**         | Simpler, single-sided processing                 | More complex, multi-layer processing           |
| **Cost**                | Lower                                            | Higher                                         |
| **Integration**         | Easier with surface-mounted components           | More difficult                                 |
| **Power Handling**      | Lower                                            | Higher                                         |
| **Loss**                | Can be higher due to field fringing            | Generally lower                                |
| **Applications**        | RFICs, RF PCBs, antennas, filters                | High-speed digital circuits, interconnects, filters |

**Important Point to Remember:** The choice between microstrip and stripline depends on the specific application requirements, balancing factors like performance (bandwidth, loss, crosstalk), cost, and ease of fabrication.

---

### 6. Practice Questions

1.  **Question:** Describe the basic construction of a microstrip line. What are the key parameters that determine its characteristic impedance?
    **Answer:** A microstrip line consists of a conductor strip on one side of a dielectric substrate with a ground plane on the opposite side. The key parameters determining its characteristic impedance are the width of the conductor strip ($w$), the thickness of the dielectric substrate ($h$), and the dielectric constant ($\epsilon_r$) of the substrate.

2.  **Question:** What is the primary difference in the electromagnetic field mode between microstrip lines and striplines? Explain the implications of this difference.
    **Answer:** Microstrip lines support a quasi-TEM mode due to propagation in two different dielectric media (air and substrate), while striplines support a pure TEM mode because the fields are confined within a single dielectric medium. The pure TEM mode in striplines leads to lower dispersion and reduced radiation losses, making them suitable for broadband applications.

3.  **Question:** List two advantages and two disadvantages of using microstrip lines compared to striplines.
    **Answer:**
    **Advantages of Microstrip:**
    *   Easier and lower-cost fabrication.
    *   Better integration with surface-mounted components.
    **Disadvantages of Microstrip:**
    *   Higher radiation loss and crosstalk due to field fringing.
    *   Presence of dispersion.

4.  **Question:** For a stripline, if you increase the dielectric constant of the substrate while keeping other parameters constant, how will the characteristic impedance change? Explain why.
    **Answer:** The characteristic impedance ($Z_0$) will decrease. The characteristic impedance is inversely proportional to the square root of the dielectric constant. A higher dielectric constant concentrates the electric field more effectively between the conductors, leading to a lower impedance for a given geometry.

5.  **Question:** When would you choose a stripline over a microstrip line for an RF circuit design?
    **Answer:** You would choose a stripline over a microstrip line when:
    *   Broadband performance with minimal dispersion is critical.
    *   Low radiation loss and crosstalk are essential.
    *   Higher power handling is required.
    *   The circuit is not sensitive to fabrication complexity and cost.

---

### 7. Summary of Key Points

*   At RF and microwave frequencies, distributed-element theory is crucial.
*   Planar transmission lines are essential for integrating RF circuits on substrates.
*   **Microstrip lines:** Quasi-TEM mode, field fringing, easier fabrication, higher radiation/crosstalk, dispersion.
*   **Striplines:** TEM mode, field confinement, complex fabrication, lower radiation/crosstalk, minimal dispersion, higher power handling.
*   The choice between microstrip and stripline depends on the trade-offs between performance, cost, and fabrication.

---

This concludes the notes for Module 1, Topic: Planar Transmission Lines – Microstrip Lines and Strip lines – Constructional Features. Refer to the provided textbooks for more in-depth analysis and design equations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
