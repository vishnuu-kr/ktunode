---
title: "Dielectric measurements- Dissipation Factor and Capacitance, Insulation Resistance, Conductivity, Dielectric System Response-Partial discharge measuring technique- Requirements on a partial discharge measuring system - Measuring systems for apparent charge – Partial discharge measurements on high-voltage transformers, high-voltage cables, high-voltage gas-insulated substations."
subject: "HIGH VOLTAGE ENGINEERING"
module: "Module 2: High Voltage Measurement Techniques "
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f365fd"
status: "completed"
scrapedAt: "2026-05-23T16:28:06.273Z"
---
# High Voltage Engineering - Module 2: High Voltage Measurement Techniques

---

## Topic: Dielectric Measurements

This section focuses on evaluating the quality and performance of insulating materials and systems under high voltage stress.

### 1. Dissipation Factor and Capacitance Measurement

**Key Concepts:**

*   **Dielectric Loss:** Energy dissipated as heat within an insulating material when subjected to an alternating electric field. This is a primary indicator of insulation degradation.
*   **Dissipation Factor (tan δ):** The ratio of the dielectric loss current (in-phase component with the applied voltage) to the charging current (quadrature component). It's a dimensionless quantity and a measure of the "lossiness" of the dielectric.
    *   **Definition:** tan δ = (Conductance * Capacitance) / (Angular frequency * Capacitance) = G / (ωC)
*   **Power Factor (cos φ):** The cosine of the phase angle between the applied voltage and the total current. For good insulators, tan δ is small, and thus cos φ ≈ 1 and sin φ ≈ tan δ. So, Power Factor is often used interchangeably with dissipation factor for practical purposes.
*   **Capacitance (C):** The ability of the insulation system to store electrical energy. It's also a critical parameter for characterizing the insulation.
*   **Loss Angle (δ):** The angle between the applied voltage and the total current.
*   **Charging Current (I<sub>c</sub>):** The current required to charge the capacitance of the dielectric. It leads the voltage by 90°.
*   **Loss Current (I<sub>d</sub>):** The current component that flows due to dielectric losses. It is in phase with the applied voltage.
*   **Total Current (I<sub>t</sub>):** The vector sum of charging current and loss current.
    *   I<sub>t</sub> = √(I<sub>c</sub>² + I<sub>d</sub>²)

**Measurement Techniques:**

*   **Schering Bridge:** The most common AC bridge method for measuring dissipation factor and capacitance.
    *   **Principle:** It balances the unknown impedance of the dielectric sample against known impedance arms.
    *   **Setup:** Consists of four arms:
        *   Arm 1: Known capacitance (C₁)
        *   Arm 2: Variable resistance (R₂)
        *   Arm 3: Known capacitance (C₃) and series resistor (R₃) in parallel
        *   Arm 4: Unknown capacitance (Cₓ) and parallel resistor (Rₓ)
    *   **Balance Condition:** When the bridge is balanced (no voltage across the detector), the impedance of the unknown arm is determined from the known values.
    *   **Formulas at Balance:**
        *   Cₓ = C₁ * (R₂ / R₃)
        *   tan δₓ = ω * R₂ * C₃
    *   **Applications:** Used for testing insulators in transformers, cables, bushings, etc., at power frequencies.
    *   **Referencing:** Wadhwa (2011) provides a detailed explanation of the Schering bridge and its phasor diagram. Kuchler (2018) also discusses bridge methods in the context of material characterization.

**Importance & Applications:**

*   Detects moisture ingress, contamination, or degradation in insulation.
*   Provides a quantitative measure of insulation health.
*   Essential for routine testing and condition monitoring of high-voltage equipment.

**Examples:**

*   Measuring the dissipation factor of transformer oil. An increasing value over time indicates oil degradation or moisture contamination.
*   Testing the capacitance of a high-voltage cable to ensure its integrity.

### 2. Insulation Resistance Measurement

**Key Concepts:**

*   **Insulation Resistance (R<sub>iso</sub>):** The DC resistance of the insulation material. It represents the leakage current flowing through the insulation.
*   **Leakage Current (I<sub>leak</sub>):** The small DC current that flows through the dielectric under a DC voltage stress.
*   **DC Voltage Test:** Applying a DC voltage and measuring the resulting leakage current.
    *   **Definition:** R<sub>iso</sub> = V<sub>DC</sub> / I<sub>leak</sub>

**Measurement Techniques:**

*   **Megohmmeter (Megger):** A portable instrument that generates a high DC voltage and measures the resistance.
    *   **Principle:** It often uses a generator (hand-cranked or battery-powered) to produce a constant DC voltage and a sensitive galvanometer or electronic circuit to measure the small leakage current.
    *   **Advantages:** Simple, portable, and suitable for field testing.
*   **Guard Ring Method:** Used in conjunction with megohmmeters or other DC resistance measurement techniques to isolate surface leakage current from volume leakage current. A guard electrode is placed around the measurement electrode and connected to a point at the same potential as the measurement electrode, effectively diverting surface leakage.

**Importance & Applications:**

*   Assesses the general condition of insulation. A low insulation resistance indicates a fault or contamination.
*   Used for testing the insulation of generators, motors, transformers, and cables.
*   Typically performed at the time of commissioning and during maintenance.

**Examples:**

*   Measuring the insulation resistance of a generator winding to ensure no moisture has entered.
*   Checking the insulation resistance of a switchgear cubicle.

### 3. Conductivity Measurement

**Key Concepts:**

*   **Volume Conductivity (σ):** The reciprocal of volume resistivity. It quantifies the ease with which charge carriers can move through the bulk of the insulating material.
    *   **Definition:** σ = 1 / ρ = (1 / R<sub>iso</sub>) * (A / L)
    *   Where:
        *   ρ is volume resistivity
        *   A is the electrode area
        *   L is the distance between electrodes
*   **Surface Conductivity (σ<sub>s</sub>):** The reciprocal of surface resistivity. It quantifies the ease with which charge carriers can move along the surface of the insulating material.
    *   **Definition:** σ<sub>s</sub> = 1 / ρ<sub>s</sub>
*   **Relationship to Dissipation Factor:** Conductivity is directly related to dielectric losses. Higher conductivity leads to higher dielectric loss.

**Measurement Techniques:**

*   **DC Methods:** Similar to insulation resistance measurements, by applying a DC voltage and measuring leakage current, and then calculating conductivity using geometric factors.
*   **AC Methods:** Using bridge techniques (like the Schering bridge) where capacitance and dissipation factor are measured, and conductivity can be derived from the dissipation factor at a specific frequency.
    *   **Formula:** σ = ω * ε₀ * ε<sub>r</sub> * tan δ
    *   Where:
        *   ω is the angular frequency
        *   ε₀ is the permittivity of free space
        *   ε<sub>r</sub> is the relative permittivity (dielectric constant) of the material

**Importance & Applications:**

*   Provides a more fundamental understanding of the electrical conduction mechanism within the dielectric.
*   Useful for material characterization and quality control.
*   Can indicate the presence of impurities or ionic conduction.

**Examples:**

*   Measuring the conductivity of a new batch of insulating polymer to ensure it meets specifications.
*   Monitoring the conductivity of insulating fluids to detect degradation products.

### 4. Dielectric System Response

**Key Concepts:**

*   **Dielectric Response:** How the dielectric material reacts to the applied electric field over time, especially when subjected to a step voltage or AC voltage.
*   **Polarization:** The alignment of molecular dipoles or the displacement of charges within the dielectric when an electric field is applied.
*   **Relaxation Processes:** The time-dependent processes by which the dielectric material achieves equilibrium polarization. These are characterized by relaxation times.
*   **Dielectric Spectroscopy:** A technique that measures the dielectric properties (capacitance, dissipation factor) over a range of frequencies. This reveals information about various polarization mechanisms and relaxation processes within the material.
*   **Dielectric Absorption Current:** The current that flows into the dielectric when a DC voltage is applied. It decays over time as polarization occurs.
*   **Resistive Current:** The steady-state leakage current that flows after polarization has reached its maximum.

**Measurement Techniques:**

*   **Step Voltage Response:** Applying a DC voltage step and monitoring the current as a function of time. The decay of this current can be analyzed to determine relaxation times and activation energies.
*   **Dielectric Spectroscopy:** Using impedance analyzers or specialized bridge circuits to measure capacitance and dissipation factor over a wide frequency range (from mHz to GHz). This allows for the identification of different dielectric relaxation phenomena.
*   **Referencing:** Kuffel, Zaengl, & Kuffel (2005) extensively discuss dielectric response phenomena and their relation to material structure and behavior.

**Importance & Applications:**

*   Provides detailed information about the molecular structure and dynamics of insulating materials.
*   Helps in understanding aging mechanisms and predicting the lifetime of insulation.
*   Crucial for selecting appropriate insulating materials for specific applications.

**Examples:**

*   Analyzing the dielectric response of a solid insulator to understand the contribution of different relaxation processes to its dielectric loss at various temperatures and frequencies.
*   Using dielectric spectroscopy to identify the presence of specific additives or impurities that affect the dielectric behavior.

---

## Topic: Partial Discharge (PD) Measurement Techniques

Partial discharges are localized electrical discharges that occur in the vicinity of a high-voltage component when the electric field strength exceeds the breakdown strength of the insulating material. These discharges can lead to progressive degradation of the insulation and eventual failure of the equipment.

### 5. Partial Discharge Measuring Technique

**Key Concepts:**

*   **Partial Discharge (PD):** A localized dielectric breakdown that does not completely bridge the electrodes.
*   **PD Activity:** The occurrence of partial discharges.
*   **PD Magnitude (Apparent Charge, q):** The apparent charge transferred during a PD event. It's measured in picocoulombs (pC) or nanocoulombs (nC). This is the most common parameter measured.
*   **PD Location:** The physical position along the conductor where the PD originates.
*   **PD Phase Angle (α):** The phase of the applied voltage at which a PD event occurs.
*   **PD Pulse:** The short-duration, high-frequency current pulse generated by a PD event.
*   **PD Source:** The point of origin of the PD within the insulation system.
*   **PD Detector:** The instrument used to detect and measure PD pulses.

**Mechanism of PD:**

1.  **Initiation:** A sufficiently high electric field exists in a void or at a surface within the insulation.
2.  **Breakdown:** A discharge occurs across the void or along the surface, creating charge carriers.
3.  **Charge Transfer:** These charge carriers are accelerated by the electric field, causing further ionization and creating a current pulse.
4.  **Decay:** The PD pulse is very short (nanoseconds) and decays rapidly as the void is de-energized or the charge carriers are neutralized.

**Types of PD:**

*   **Internal PD:** Occurs within voids or inclusions within solid insulation.
*   **Surface PD (or Flashover):** Occurs along the surface of solid insulation.
*   **Corona Discharge:** Occurs in gaseous insulation surrounding sharp electrode edges or conductors.

**Measurement Principles:**

PD pulses are typically measured by detecting the small electrical signals they induce in the power circuit. These signals can be:

*   **Charge Pulses:** Detected by a measuring impedance (resistor or capacitor) placed in series with the test object. The voltage across this impedance is proportional to the charge transferred.
*   **Electromagnetic Pulses:** Detected by antennas or inductive loops placed near the PD source.
*   **Acoustic Emission:** PD events produce ultrasonic waves that can be detected by acoustic sensors.

### 6. Requirements on a Partial Discharge Measuring System

A PD measuring system must be highly sensitive, selective, and capable of accurate measurement under high voltage and high noise conditions.

**Key Requirements:**

*   **High Sensitivity:** To detect very small PD magnitudes (typically as low as 0.1 pC). This requires low intrinsic noise levels in the measuring circuit.
*   **Wide Bandwidth:** To accurately capture the fast PD pulses (nanosecond duration), the measuring circuit needs a wide frequency response.
*   **Accurate Calibration:** The system must be calibrated using standard PD calibrators to ensure accurate measurement of apparent charge.
*   **Noise Rejection:** The system must be able to distinguish PD signals from external electromagnetic interference (EMI) and electrical noise generated by the HV test circuit itself. This is often achieved through:
    *   **Filtering:** Using appropriate band-pass filters to isolate the PD frequency spectrum.
    *   **Shielding:** Enclosing the test setup and measuring equipment in shielded enclosures.
    *   **Differential Measurement:** Using techniques to cancel out common-mode noise.
    *   **Phase-Resolved PD (PRPD) Analysis:** This technique displays PD pulses based on their magnitude and phase angle, which helps in identifying true PD signals from random noise.
*   **Phase-Resolved Capability:** The system should be able to record the phase angle of the applied voltage at which PD occurs. This is crucial for identifying PD patterns associated with different types of defects.
*   **Data Acquisition and Analysis:** The system should facilitate the recording, storage, and analysis of PD data, often presented as PRPD patterns, histograms, or trend plots.
*   **Compliance with Standards:** The system must comply with relevant international standards (e.g., IEC 60270) for PD measurements.

### 7. Measuring Systems for Apparent Charge

The most common method for measuring PD is by detecting the apparent charge transferred during a PD event.

**Common Measuring Circuit Configurations:**

*   **Capacitive Coupler Method (Indirect Measurement):**
    *   **Setup:** A coupling capacitor (C<sub>c</sub>) is connected in series with the high-voltage circuit. The measuring impedance (Z<sub>m</sub>) (usually a resistor or a combination of resistor and capacitor) is connected across the coupling capacitor.
    *   **Principle:** When a PD occurs in the test object (X), it generates a current pulse. This pulse flows through the series combination of the test object's capacitance (C<sub>x</sub>), the HV bushing capacitance (C<sub>b</sub>), and the coupling capacitor (C<sub>c</sub>). The measuring impedance Z<sub>m</sub> detects the voltage pulse proportional to the charge transferred.
    *   **Measurement:** The voltage across Z<sub>m</sub> (V<sub>m</sub>) is amplified and processed.
    *   **Apparent Charge Calculation:** q = V<sub>m</sub> * (C<sub>c</sub> + C<sub>m</sub>) / C<sub>c</sub>, where C<sub>m</sub> is the capacitance of the measuring impedance.
    *   **Referencing:** Wadhwa (2011) and Naidu & Kamaraju (2004) explain this basic circuit in detail.

*   **Series Impedance Method (Direct Measurement):**
    *   **Setup:** A measuring impedance (Z<sub>m</sub>) is placed in series with the test object.
    *   **Principle:** The PD current pulse directly flows through Z<sub>m</sub>, and the voltage pulse across it is measured.
    *   **Challenges:** The measuring impedance itself becomes part of the HV circuit, which can affect the voltage distribution and PD inception voltage. It also requires proper insulation of the measuring instrument from ground.

*   **Integrator Method:**
    *   **Setup:** An integrating circuit is used, where the output voltage is proportional to the integral of the current pulse.
    *   **Principle:** For a current pulse, its integral is the charge transferred.

*   **Inductive Coupler Method:**
    *   **Setup:** A current transformer (CT) is used to pick up the high-frequency PD pulses.
    *   **Principle:** The CT senses the rate of change of current during a PD event. The output voltage is proportional to the dI/dt, which can be integrated to get the charge.
    *   **Advantages:** Provides electrical isolation and can be placed at a distance from the HV circuit.

**Calibration:**

*   **PD Calibrator:** A calibrated variable capacitor or pulse generator is used to inject known charge pulses into the measuring circuit to calibrate the PD measurement system. This ensures that the displayed pC values are accurate.

### 8. Partial Discharge Measurements on High-Voltage Equipment

**8.1 High-Voltage Transformers:**

*   **Locations of PD:**
    *   **Internal voids:** In solid insulation (e.g., paper insulation on windings).
    *   **Incipient faults:** Within the oil-paper insulation system, especially in areas of high electric stress.
    *   **Bushing bushings:** Around the surfaces or within the solid insulation of bushings.
    *   **Tap changers:** In the vicinity of moving contacts and insulation.
    *   **Lead clearances:** In air gaps where insulation is insufficient.
*   **Measurement Techniques:**
    *   **Coupling Capacitor Method:** Commonly used. The coupling capacitor is installed in the transformer's neutral earthing path or on the bushing terminal.
    *   **Radio Interference Voltage (RIV) Measurement:** Measures the electromagnetic interference generated by PD, often at radio frequencies.
    *   **Acoustic Emission Monitoring:** Sensors are attached to the transformer tank to detect ultrasonic waves from PD.
*   **Interpretation:**
    *   PD activity in transformers is a serious indicator of insulation deterioration and potential failure.
    *   The magnitude, phase distribution, and trend of PDs help diagnose the type and severity of the defect.
    *   A rapid increase in PD activity or a shift in the PD phase distribution can indicate an impending failure.

**8.2 High-Voltage Cables:**

*   **Locations of PD:**
    *   **Manufacturing defects:** Voids, contaminants, or delamination within the insulation layer (e.g., XLPE, EPR).
    *   **Water trees:** Degradation of the insulation material due to the presence of water and electric stress.
    *   **Surface discharge:** At cable terminations and joints.
    *   **Shielding defects:** In the semiconducting layers.
*   **Measurement Techniques:**
    *   **Capacitive Coupler Method:** Commonly used at cable testing stations.
    *   **Resistive Coupler Method:** Also used.
    *   **Diagnostic Tools:** Partial discharge testing is a standard non-destructive diagnostic test for power cables.
*   **Interpretation:**
    *   PD measurements are critical for assessing the condition of aged cables and for quality control of new cables.
    *   PD levels in new cables should be very low (typically < 5 pC).
    *   Increasing PD activity in service indicates insulation degradation and the need for replacement or repair.

**8.3 High-Voltage Gas-Insulated Substations (GIS):**

*   **Locations of PD:**
    *   **Manufacturing defects:** Voids in epoxy resin spacers, metallic burrs on conductors, poor sealing.
    *   **Installation defects:** Contamination (metal particles, dust) trapped in SF₆ gas, improper assembly.
    *   **Aging effects:** Degradation of epoxy spacers.
*   **Measurement Techniques:**
    *   **Built-in Coupling Capacitors:** GIS equipment often has permanent diagnostic couplings (e.g., on circuit breaker bases) to allow continuous PD monitoring.
    *   **External Coupling Capacitors:** Can be connected to the GIS terminals during testing.
    *   **Electromagnetic Interference (EMI) Sensing:** Using current transformers or antennas to detect PD pulses.
    *   **Acoustic Monitoring:** For detecting PD events within enclosures.
*   **Interpretation:**
    *   PD in GIS is a critical indicator of insulation integrity.
    *   Metallic particles are a common cause of PD in GIS and can lead to cascade discharges.
    *   PRPD analysis is essential for identifying the type of defect (e.g., void discharge, surface discharge, metallic particle discharge).
    *   PD measurements are used for factory acceptance testing, site acceptance testing, and condition monitoring of GIS.

**Referencing:**

*   **Wadhwa (2011):** Covers basic PD measurement techniques and their application to power transformers.
*   **Kuchler (2018):** Provides advanced concepts in PD diagnostics, including noise reduction and interpretation for various equipment.
*   **Naidu & Kamaraju (2004):** Explains the fundamental principles of PD detection and measurement circuits.
*   **Kuffel, Zaengl, & Kuffel (2005):** Offers a comprehensive treatment of PD phenomena, measurement standards, and advanced diagnostic techniques for different HV equipment.

---

## Practice Questions and Answers

**Question 1 (Dissipation Factor):** A Schering bridge is used to measure the dissipation factor of a capacitor. At balance, the known capacitance C₁ = 0.1 µF, the variable resistor R₂ = 10 kΩ, and the series resistor R₃ in arm 3 is set to 100 Ω with C₃ = 0.01 µF. Calculate the capacitance of the unknown capacitor (Cₓ) and its dissipation factor (tan δₓ) assuming the bridge operates at 50 Hz.

**Answer 1:**
Given:
C₁ = 0.1 µF
R₂ = 10 kΩ = 10,000 Ω
R₃ = 100 Ω
C₃ = 0.01 µF
Frequency (f) = 50 Hz

Capacitance of the unknown capacitor (Cₓ):
Cₓ = C₁ * (R₂ / R₃)
Cₓ = 0.1 µF * (10,000 Ω / 100 Ω)
Cₓ = 0.1 µF * 100
**Cₓ = 10 µF**

Dissipation Factor (tan δₓ):
tan δₓ = ω * R₂ * C₃
ω = 2 * π * f = 2 * π * 50 = 100π rad/s
tan δₓ = (100π rad/s) * (10,000 Ω) * (0.01 µF)
tan δₓ = (100π) * (10,000) * (0.01 * 10⁻⁶ F)
tan δₓ = 100π * 100 * 10⁻⁶
tan δₓ = π * 10⁻²
**tan δₓ ≈ 0.0314**

**Question 2 (Insulation Resistance):** A DC voltage of 5 kV is applied to a section of cable. The leakage current measured after 1 minute is 5 µA. Calculate the insulation resistance.

**Answer 2:**
Given:
V<sub>DC</sub> = 5 kV = 5000 V
I<sub>leak</sub> = 5 µA = 5 * 10⁻⁶ A

Insulation Resistance (R<sub>iso</sub>):
R<sub>iso</sub> = V<sub>DC</sub> / I<sub>leak</sub>
R<sub>iso</sub> = 5000 V / (5 * 10⁻⁶ A)
R<sub>iso</sub> = 1000 * 10⁶ Ω
**R<sub>iso</sub> = 1000 MΩ**

**Question 3 (Partial Discharge):** What are the key requirements for a partial discharge measuring system? Briefly explain the purpose of Phase-Resolved Partial Discharge (PRPD) analysis.

**Answer 3:**
Key requirements for a PD measuring system include:
1.  **High Sensitivity:** To detect very low levels of PD (pC range).
2.  **Wide Bandwidth:** To accurately capture fast PD pulses.
3.  **Accurate Calibration:** To quantify the measured charge.
4.  **Noise Rejection:** To distinguish PD signals from interference.
5.  **Phase-Resolved Capability:** To record the phase angle of PD occurrence.
6.  **Data Acquisition and Analysis:** For interpreting PD patterns.
7.  **Compliance with Standards:** Adherence to IEC standards.

**Purpose of PRPD Analysis:**
PRPD analysis displays PD pulses based on their **magnitude (apparent charge)** and the **phase angle of the applied voltage** at which they occur. This pattern (often presented as a scatter plot or 3D plot) is crucial for:
*   **Identifying true PD signals:** PD pulses from defects in HV equipment have characteristic phase distributions that differ from random noise.
*   **Diagnosing defect types:** Different types of defects (e.g., internal voids, surface discharges, corona, metallic particles) exhibit distinct PD patterns in the PRPD plot.
*   **Monitoring insulation degradation:** Changes in the PRPD pattern over time can indicate the progression of insulation damage.

**Question 4 (CO Alignment):** Which of the following dielectric measurements directly assesses the quality of insulation and helps detect degradation due to moisture or contamination?
(a) Insulation Resistance (b) Dissipation Factor (c) Conductivity (d) All of the above.

**Answer 4:**
(d) All of the above.

*   **Insulation Resistance:** Low resistance indicates significant leakage current, often due to moisture or conductive contaminants. (Aligns with CO2, CO4)
*   **Dissipation Factor:** An increased tan δ indicates higher dielectric losses, a common symptom of insulation degradation, moisture, or ionic impurities. (Aligns with CO2, CO4)
*   **Conductivity:** Directly relates to the ease of charge movement, which is enhanced by moisture and impurities. (Aligns with CO2, CO4)

---

## Important Points to Remember:

*   **Dissipation Factor (tan δ) and Power Factor (cos φ)** are crucial AC dielectric parameters for assessing insulation health. A higher tan δ generally means poorer insulation quality.
*   **Insulation Resistance (R<sub>iso</sub>)** is a DC parameter indicating leakage current. A decreasing R<sub>iso</sub> is a sign of insulation deterioration.
*   **Partial Discharges (PD)** are localized breakdowns that are precursors to complete insulation failure. Their detection and analysis are vital for predictive maintenance.
*   **Schering Bridge** is the standard AC bridge for measuring dissipation factor and capacitance.
*   **Megohmmeters** are used for on-site insulation resistance testing.
*   **Phase-Resolved PD (PRPD) analysis** is a powerful tool for diagnosing PD sources.
*   The **magnitude of apparent charge** is the primary metric for PD measurement.
*   PD measurements are essential for **transformers, cables, and GIS** to ensure reliable operation.
*   **Calibration** of PD measurement systems using a PD calibrator is critical for accurate results.
*   **Noise reduction** is a significant challenge in PD measurements.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
