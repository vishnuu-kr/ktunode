---
title: "MPI, system sensitivity, checking devices in MPI."
subject: "NON – DESTRUCTIVE TESTING"
module: "Module 2: Magnetic Particle Testing: Methods of magnetization, magnetization techniques such as head shot technique, cold shot technique, central conductor testing, and magnetization using yokes."
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446388d"
status: "completed"
scrapedAt: "2026-05-20T18:06:11.446Z"
---
## Non-Destructive Testing: Module 2 - Magnetic Particle Testing (MPI)

---

### 1. Introduction to Magnetic Particle Testing (MPI)

Magnetic Particle Testing (MPI) is a non-destructive testing method used to detect surface and slightly subsurface discontinuities in ferromagnetic materials. It relies on the principle of magnetic flux leakage.

**Key Concepts:**

*   **Ferromagnetic Materials:** Materials that can be strongly magnetized, such as iron, nickel, cobalt, and their alloys.
*   **Magnetic Flux:** The lines of force that represent the magnetic field within a material.
*   **Flux Leakage:** When a discontinuity exists in a ferromagnetic material that is magnetized, the magnetic flux lines are forced out of their normal path and leak into the surrounding air.
*   **Indications:** When magnetic particles (iron filings) are applied to the surface, they are attracted to the areas of flux leakage, forming visible indications that reveal the location, size, and shape of the discontinuity.

**How MPI Works:**

1.  **Magnetization:** The part to be inspected is subjected to a magnetic field.
2.  **Particle Application:** Fine, dark or fluorescent magnetic particles are applied to the surface.
3.  **Indication Formation:** Particles cluster at areas of flux leakage caused by discontinuities.
4.  **Inspection:** The clustered particles are observed under adequate lighting conditions to identify indications.
5.  **Demagnetization (if required):** After inspection, the part may need to be demagnetized.

**Course Outcome Alignment:**

*   **CO1 (K2):** This section provides the foundational knowledge of what MPI is and how it works, enabling basic inspection understanding.
*   **CO2 (K2):** It introduces the core principle of magnetism and its application in NDT.

---

### 2. Methods of Magnetization and Magnetization Techniques

Effective MPI relies on proper magnetization of the part to create a strong magnetic field and induce flux leakage at discontinuities. The direction and strength of the magnetic field are crucial for detecting different types of defects.

#### 2.1 Methods of Magnetization

**Key Concept:** The goal is to induce a magnetic field within the material.

*   **Circulation Magnetization:** Creates a magnetic field that flows in a circular path around a conductor, typically through the component itself or a central conductor. This is effective for detecting cracks that are generally perpendicular to the direction of the magnetic field.
*   **Polarization Magnetization:** Creates a magnetic field that flows parallel to the length of the component. This is achieved by applying a magnetic field from an external source, such as a yoke. This is effective for detecting cracks that are generally parallel to the direction of the magnetic field.

#### 2.2 Magnetization Techniques

These techniques apply the methods of magnetization to specific situations.

##### 2.2.1 Head Shot Technique

**Description:** This technique involves passing a strong electric current through a conductor (often a copper bar or cable) placed through the bore or a central opening of the part being inspected. This creates a strong circular magnetic field that flows through the part, perpendicular to the axis of the conductor.

**Application:** Primarily used to detect discontinuities that are oriented radially or circumferentially on the part. Examples include cracks on the inner surface of tubes, cracks on flanges, or cracks on a disc.

**Procedure:**

1.  The part is positioned so that the conductor passes through its central opening.
2.  Electrical contacts are made at the ends of the conductor.
3.  A high-amperage current is passed through the conductor for a brief period.
4.  Magnetic particles are applied during or immediately after the current flow.

**Important Considerations:**

*   Requires a part with a suitable through-hole.
*   High current densities can lead to localized heating, requiring short shot times.
*   The strength of the magnetic field is dependent on the current and the geometry of the part.

**Textbook Reference:** Baldev Raj's "Practical Non-destructive Testing" often details these techniques with diagrams illustrating current flow and field lines.

##### 2.2.2 Cold Shot Technique

**Description:** Similar to the head shot technique, but instead of passing current through a central conductor, the current is passed through electrical contacts directly attached to the part itself.

**Application:** Used for parts where a central conductor cannot be passed through, or when a specific area needs to be magnetized. It can be used to detect discontinuities oriented circumferentially.

**Procedure:**

1.  Two electrical contacts (probes or pads) are placed on the surface of the part, spaced apart.
2.  A high-amperage current is passed between these contacts.
3.  This creates a magnetic field that flows in a circular path around the points of contact.
4.  Magnetic particles are applied during or immediately after the current flow.

**Important Considerations:**

*   Contact points can cause surface arcing or burning if not managed correctly.
*   Proper contact and pressure are essential for effective current transfer.
*   The magnetic field strength can vary depending on the contact placement and pressure.

**Textbook Reference:** Hull & John's "Non-destructive Testing" may cover this as a variation of current flow methods.

##### 2.2.3 Central Conductor Testing

**Description:** This is a broader category that encompasses techniques where a conductor is passed through the component to induce a magnetic field. The "head shot" is a specific type of central conductor testing.

**Application:** Particularly useful for inspecting cylindrical or hollow components like pipes, tubes, and rings. It effectively magnetizes the material in a circular manner.

**Procedure:**

1.  A conductive rod or cable is inserted through the bore of the component.
2.  Current is passed through the conductor, generating a magnetic field that flows circumferentially around the conductor and through the component wall.
3.  Magnetic particles are applied to detect defects oriented longitudinally (parallel to the conductor's axis).

**Important Considerations:**

*   The conductor should ideally fill a significant portion of the bore to maximize magnetic field concentration.
*   The surface of the conductor should be clean to ensure good electrical contact.
*   The technique is most effective for detecting longitudinal flaws.

**Course Outcome Alignment:**

*   **CO1 (K2):** Understanding these techniques allows for selecting the appropriate method for a given component and defect type.
*   **CO2 (K2):** These techniques directly demonstrate the application of electromagnetic principles for NDT.

##### 2.2.4 Magnetization Using Yokes

**Description:** Yokes are portable electromagnetic devices that generate a magnetic field when energized. They are typically used to magnetize larger or irregularly shaped parts.

**Types of Yokes:**

*   **AC Yokes:** Produce an alternating magnetic field. They are particularly sensitive to surface and near-surface defects.
*   **DC Yokes:** Produce a direct magnetic field (or rectified AC, often referred to as "permanent magnet yokes" with an electromagnet) and are more effective for detecting slightly subsurface defects due to their deeper magnetic field penetration.

**Application:** Widely used for inspecting welds, complex shapes, and areas that cannot be easily accessed by other methods. They are effective for detecting both longitudinal and transverse cracks depending on the orientation of the yoke.

**Procedure:**

1.  The yoke is placed on the surface of the part, straddling the area of interest.
2.  The yoke is energized, creating a magnetic field that flows from one pole of the yoke to the other, through the part.
3.  Magnetic particles are applied while the yoke is energized.
4.  The yoke is then moved to different positions to inspect the entire area.

**Important Considerations:**

*   Proper pole placement is crucial to create the desired magnetic field direction.
*   The distance between the yoke poles and the surface affects the magnetic field strength.
*   AC yokes are generally preferred for surface crack detection, while DC yokes are better for slightly subsurface defects.

**Textbook Reference:** Ravi Prakash's "Non Destructive testing Techniques" likely details the use of yokes and their advantages for different applications. Baldev Raj also covers portable NDT equipment extensively.

**Course Outcome Alignment:**

*   **CO1 (K2):** This provides a practical application of magnetization principles for field inspections.
*   **CO4 (K2):** Yoke testing is an advanced and widely used technique in various industries.

---

### 3. MPI System Sensitivity

The sensitivity of an MPI system refers to its ability to detect discontinuities of a certain size and depth. A highly sensitive system can detect smaller and shallower flaws.

**Factors Affecting MPI Sensitivity:**

*   **Magnetic Field Strength and Direction:** The field must be strong enough and oriented correctly to produce leakage flux at the discontinuity.
*   **Type and Quantity of Magnetic Particles:** Particle characteristics (size, shape, magnetic properties) and concentration affect visibility.
*   **Particle Type (Wet vs. Dry):** Wet particles are generally more sensitive to fine surface cracks, while dry particles can be more effective for slightly subsurface defects and in dusty environments.
*   **Illumination:** Adequate lighting is essential for visualizing the indications.
*   **Surface Condition of the Part:** Rough or dirty surfaces can obscure indications.
*   **Operator Skill and Experience:** The ability to properly magnetize, apply particles, and interpret indications is critical.
*   **Particle Suspension Medium (for wet method):** The vehicle (water or oil) and additives can influence particle mobility and adherence.

**Measuring and Ensuring Sensitivity:**

*   **Reference Standards:** Calibrated test blocks with known artificial defects (e.g., artificial cracks, scratches) are used to verify system sensitivity.
*   **Sensitivity Checks:** Regular checks using these reference standards are performed to ensure the system is performing as expected.

**Textbook Reference:** Both Baldev Raj and Hull & John will likely discuss factors influencing sensitivity and methods for its verification.

**Course Outcome Alignment:**

*   **CO1 (K2):** Understanding sensitivity is vital for performing inspections according to established procedures and knowing the limitations of the method.

---

### 4. Checking Devices in MPI

Checking devices are tools used to ensure the proper functioning and sensitivity of the MPI system.

**Key Checking Devices:**

*   **Field Indicator:** A small piece of ferromagnetic material with known artificial defects. When placed in the magnetic field, it indicates the presence and direction of the field and can be used to assess the sensitivity of the system. Examples include:
    *   **Hollow steel balls:** When energized, fine particles will cluster on their surface if the magnetic field is adequate.
    *   **Artificial defect shims/foils:** These have precisely manufactured flaws that allow for a direct assessment of the system's ability to detect specific flaw sizes.
*   **Reference Standards (Calibration Blocks):** As mentioned in the sensitivity section, these are critical for verifying that the MPI equipment and consumables are capable of detecting discontinuities of a specified size. Examples include:
    *   **ASTM E709 standard blocks:** These often feature stepped notches or artificial cracks of varying depths and widths.
    *   **Specific industry-standard blocks:** Different industries may have their own preferred reference standards.
*   **Gaussmeter:** A device used to measure the strength of the magnetic field (magnetic flux density). This helps ensure that the field is within the acceptable range for the material and discontinuity type being sought.
*   **UV Light Meter (for fluorescent MPI):** Used to ensure the correct intensity of ultraviolet light is present for effective visualization of fluorescent particles.
*   **Timer:** For controlling the duration of current flow in head shot and cold shot techniques to prevent overheating.

**Procedure for Checking Devices:**

1.  **Field Indicator/Reference Standard Check:**
    *   Magnetize the area where the indicator/standard will be placed.
    *   Apply magnetic particles.
    *   Observe the particle accumulation on the indicator/standard. The indications should be clear and well-defined, meeting the criteria for the specific reference standard being used.
    *   Perform this check at the beginning of each inspection session, after any equipment changes, and periodically during the inspection.
2.  **Gaussmeter Check:**
    *   Place the gaussmeter probe near the area being magnetized or on the surface of the part.
    *   Energize the magnetization unit.
    *   Read the magnetic flux density value and compare it to the acceptable range specified in the inspection procedure.
3.  **UV Light Meter Check:**
    *   Measure the UV light intensity at the surface of the part to ensure it meets the minimum requirements (e.g., 1000 µW/cm²).

**Textbook Reference:** Baldev Raj's "Practical Non-destructive testing" would be a primary source for details on specific checking devices and their usage.

**Course Outcome Alignment:**

*   **CO1 (K2):** Understanding and using checking devices is fundamental to carrying out MPI inspections according to established procedures and ensuring quality.
*   **CO4 (K2):** Familiarity with these specialized devices enhances knowledge of advanced NDT practices.

---

### 5. Practice Questions and Answers

**Question 1:** What is the fundamental principle behind Magnetic Particle Testing?

**Answer:** MPI works on the principle of magnetic flux leakage. When a ferromagnetic material is magnetized, any discontinuity (like a crack) that interrupts the magnetic flux path will cause the flux lines to leak out of the material's surface. Magnetic particles are attracted to these leakage fields, forming visible indications of the defect.

**Question 2:** Explain the difference between the head shot technique and the cold shot technique.

**Answer:**
*   **Head Shot Technique:** Current is passed through a conductor placed *through* the central bore of the component, creating a circular magnetic field. It's ideal for detecting longitudinal flaws in hollow cylinders.
*   **Cold Shot Technique:** Current is passed directly between electrical contacts placed on the *surface* of the component, creating a circular magnetic field localized around the contact points. It's used for parts without a through-hole or for magnetizing specific areas, primarily detecting circumferential flaws.

**Question 3:** Why is it important to perform sensitivity checks in MPI?

**Answer:** Sensitivity checks are crucial to ensure that the MPI system (equipment, magnetic particles, and procedures) is capable of detecting flaws of a specific minimum size and depth, as required by the inspection standard or procedure. This guarantees the reliability and effectiveness of the inspection.

**Question 4:** What are the common types of checking devices used in MPI, and what is their purpose?

**Answer:** Common checking devices include:
*   **Field Indicators/Reference Standards:** To verify the system's sensitivity by detecting known artificial defects.
*   **Gaussmeters:** To measure and confirm the strength of the applied magnetic field.
*   **UV Light Meters:** To ensure adequate UV light intensity for fluorescent MPI.
Their purpose is to confirm that the MPI setup is functioning correctly and is sensitive enough to detect the intended flaws.

**Question 5:** Which type of yoke is generally more sensitive to near-surface defects, and why?

**Answer:** AC yokes are generally more sensitive to near-surface defects. This is because the alternating current induces eddy currents within the material, which tend to concentrate the magnetic field closer to the surface, making them effective at detecting surface and slightly subsurface cracks. DC yokes, with their deeper field penetration, are better for slightly deeper subsurface flaws.

---

### 6. Important Points to Remember

*   **MPI is only applicable to ferromagnetic materials.**
*   **The direction of the magnetic field is critical.** Defects are best detected when they are perpendicular to the direction of the magnetic field.
*   **Proper magnetization is key.** Too weak a field may not reveal defects, while too strong a field can cause particle clumping and mask indications.
*   **Magnetic particles must be of the correct type and concentration.**
*   **Adequate lighting is essential** for visual inspection.
*   **Regular use of checking devices** is mandatory for ensuring system reliability.
*   **Surface preparation** is important; clean and smooth surfaces yield better results.
*   **Demagnetization** is often required after inspection to prevent residual magnetism, which can interfere with subsequent operations or handling.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. Further Reading and References

*   **Baldev Raj, "Practical Non-destructive testing" (Alpha Science International, 2008):** Provides practical insights and detailed explanations of various NDT methods, including MPI.
*   **Hull V and V John, "Non - destructive testing" (McMillan, 2012):** A comprehensive textbook covering fundamental principles and applications of NDT.
*   **Ravi Prakash, "Non Destructive testing Techniques" (New Academic Science, 2009):** Offers a good overview of NDT techniques with practical considerations.
*   **Elena Lysenko, Alexander Rogachev, Oldrich Stary, "Recent developments in the field of non-destructive testing, safety and material science" (Springer, 2022):** For advanced concepts and modern advancements.
*   **Songling Huang & Shen Wang, "New Technologies in electromagnetic non-destructive Testing" (Springer, 2016):** Focuses on electromagnetic methods, including MPI advancements.
*   **Carosena Meola, "Recent Advances in Non -Destructive Inspection" (Nova Science publishers, 2010):** Another resource for understanding modern trends in NDT.

---

**End of Module Notes**