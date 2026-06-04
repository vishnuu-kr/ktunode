---
title: "MOS transistor theory and operation"
subject: "VLSI DESIGN"
module: "Module 1: CMOS Fundamentals for Digital VLSI Design :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b2e2"
status: "completed"
scrapedAt: "2026-05-20T16:16:59.871Z"
---
## VLSI DESIGN - Module 1: CMOS Fundamentals - MOS Transistor Theory and Operation

**Learning Outcomes:**

*   Understand the structure and operation of NMOS and PMOS transistors.
*   Explain the different regions of operation of a MOS transistor: Cut-off, Linear (Triode), and Saturation.
*   Describe the I-V characteristics of MOS transistors and the factors affecting them.
*   Define and calculate key parameters such as threshold voltage (Vt), mobility (µ), transconductance (gm), and output resistance (ro).
*   Analyze the effects of channel length modulation and body effect on MOS transistor characteristics.

**1. Introduction to MOS Transistors**

*   **MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor):** A three-terminal voltage-controlled device used as a switch or amplifier in digital and analog circuits.
*   **Two Main Types:**
    *   **NMOS (N-channel MOS):**  Conducts when a sufficiently positive voltage is applied to the gate.
    *   **PMOS (P-channel MOS):** Conducts when a sufficiently negative voltage is applied to the gate.
*   **Terminals:**
    *   **Gate (G):** Controls the current flow between the source and drain.
    *   **Source (S):**  The terminal from which carriers enter the channel.
    *   **Drain (D):**  The terminal from which carriers exit the channel.
    *   **Body/Substrate (B):** The substrate on which the transistor is built. Usually connected to ground (0V) for NMOS and VDD for PMOS.

**2. NMOS Transistor Operation**

*   **Enhancement-Mode NMOS:**  Requires a gate-source voltage (VGS) greater than the threshold voltage (Vt) to create a channel and conduct.

    *   **Cut-off Region (VGS < Vt):**  The transistor is OFF.  No channel exists between source and drain. Ideal current IDS = 0.  In reality, a very small leakage current exists.
    *   **Linear (Triode) Region (VGS > Vt and VDS < VGS - Vt):** The transistor acts like a voltage-controlled resistor.  A conducting channel exists, and the drain current (IDS) increases linearly with VDS.
    *   **Saturation Region (VGS > Vt and VDS >= VGS - Vt):**  The channel is pinched-off near the drain.  IDS becomes relatively independent of VDS. The transistor acts as a current source.

*   **Key Equations for NMOS (Ignoring channel length modulation):**

    *   **Cut-off:**  IDS = 0
    *   **Linear:** IDS = (µnCox(W/L))[(VGS - Vt)VDS - (VDS^2)/2]
    *   **Saturation:** IDS = (1/2)µnCox(W/L)(VGS - Vt)^2

    Where:
    *   µn: Electron mobility
    *   Cox: Gate oxide capacitance per unit area
    *   W: Channel width
    *   L: Channel length
    *   VGS: Gate-Source voltage
    *   VDS: Drain-Source voltage
    *   Vt: Threshold voltage

**3. PMOS Transistor Operation**

*   **Enhancement-Mode PMOS:** Requires a gate-source voltage (VGS) *less* than the threshold voltage (Vt, which is negative in this case) to create a channel and conduct. Note that we typically work with absolute values and treat PMOS voltages as negative numbers. For example, VGS = -3V would be a larger voltage (more negative) than VGS = -1V.

    *   **Cut-off Region (VGS > Vt):**  The transistor is OFF.
    *   **Linear (Triode) Region (VGS < Vt and VDS > VGS - Vt):** The transistor acts like a voltage-controlled resistor. Note that for PMOS, both VGS and VDS are negative voltages.
    *   **Saturation Region (VGS < Vt and VDS <= VGS - Vt):** The channel is pinched-off near the drain.  IDS becomes relatively independent of VDS.

*   **Key Equations for PMOS (Ignoring channel length modulation):**

    *   **Cut-off:** IDS = 0
    *   **Linear:** IDS = (µpCox(W/L))[(VGS - Vt)VDS - (VDS^2)/2]
    *   **Saturation:** IDS = (1/2)µpCox(W/L)(VGS - Vt)^2

    Where:
    *   µp: Hole mobility
    *   Cox: Gate oxide capacitance per unit area
    *   W: Channel width
    *   L: Channel length
    *   VGS: Gate-Source voltage (negative for PMOS)
    *   VDS: Drain-Source voltage (negative for PMOS)
    *   Vt: Threshold voltage (negative for PMOS)

**Important Note:**  The equations for PMOS look the same as NMOS, but the *signs* of VGS, VDS, and Vt are crucial.  Remember to treat them as negative voltages when calculating IDS. Also, the absolute value of VDS is used to determine region of operation. For example, if VGS=-2V and Vt = -1V and VDS=-0.5V, then |VDS| < |VGS-Vt| indicating the linear region.

**4. I-V Characteristics**

*   The I-V characteristics show the relationship between drain current (IDS) and drain-source voltage (VDS) for different values of gate-source voltage (VGS).
*   **Key observations:**
    *   In the linear region, IDS increases almost linearly with VDS.
    *   In the saturation region, IDS is relatively constant with VDS.
    *   For a given VDS, IDS increases as VGS increases (for NMOS) and decreases as VGS increases (for PMOS - remember VGS is negative).
*   **Graphical representation:**  Draw typical IDS vs. VDS curves for NMOS and PMOS for different VGS values, clearly indicating the linear and saturation regions.

**5. Key Parameters**

*   **Threshold Voltage (Vt):** The minimum gate-source voltage required to create a conducting channel between the source and drain. Affected by:
    *   **Body Effect:** Vt increases as the source-body voltage (VSB) increases for NMOS.  Vt decreases as VSB decreases for PMOS. This effect occurs because the reverse bias between the source-body junction affects the depletion region width, effectively changing the charge required to form the channel.  The equation is Vt = Vt0 + γ(√(VSB + 2Φf) - √(2Φf)) where Vt0 is the threshold voltage for VSB = 0, γ is the body effect coefficient, and Φf is the surface potential.
    *   **Temperature:**  Vt decreases as temperature increases.
    *   **Process Variations:**  Manufacturing variations can affect Vt.

*   **Mobility (µ):** A measure of how easily charge carriers (electrons or holes) move through the channel.  Affected by:
    *   **Temperature:** Mobility decreases as temperature increases.
    *   **Electric Field:**  High electric fields can reduce mobility.
    *   **Doping Concentration:** Higher doping can reduce mobility.

*   **Transconductance (gm):**  A measure of the transistor's ability to amplify a signal.  It represents the change in drain current (IDS) for a small change in gate-source voltage (VGS).  gm = ∂IDS/∂VGS.  In saturation, gm ≈ µnCox(W/L)(VGS - Vt) for NMOS.

*   **Output Resistance (ro):**  Represents the change in drain-source voltage (VDS) for a small change in drain current (IDS) in the saturation region.  ro = ∂VDS/∂IDS.  Ideal transistors have infinite ro. However, due to channel length modulation, ro is finite. ro = 1/(λIDS), where λ is the channel length modulation parameter.

**6. Channel Length Modulation**

*   **Effect:** As VDS increases in the saturation region, the pinch-off point moves closer to the source, effectively shortening the channel length (L). This causes IDS to increase slightly with VDS, making the I-V curves non-ideal.
*   **Impact:** Introduces a finite output resistance (ro), which affects the gain of amplifiers.
*   **Equation for Saturation Region (with Channel Length Modulation):**
    *   IDS = (1/2)µnCox(W/L)(VGS - Vt)^2 (1 + λVDS) for NMOS.
    *   IDS = (1/2)µpCox(W/L)(VGS - Vt)^2 (1 + λVDS) for PMOS.

**7. Body Effect**

*   **Effect:** The threshold voltage (Vt) varies with the voltage difference between the source and the bulk/body (VSB).
*   **Cause:** The reverse bias between the source and the bulk affects the depletion region charge, which in turn influences the gate voltage needed to create an inversion layer (channel).
*   **NMOS:** Vt increases as VSB increases.
*   **PMOS:** Vt (magnitude) increases as VSB increases.
*   **Equation:** Vt = Vt0 + γ(√(VSB + 2Φf) - √(2Φf)) where Vt0 is the threshold voltage for VSB = 0, γ is the body effect coefficient, and Φf is the surface potential.

**8. Important Points to Remember**

*   Understand the differences between NMOS and PMOS operation. Pay attention to the polarity of voltages.
*   Know the different regions of operation and the corresponding equations.
*   Understand the effects of channel length modulation and body effect on transistor characteristics.
*   Memorize the key parameters and their relationships.
*   Pay attention to units.  Voltage in Volts (V), Current in Amperes (A), Length and Width in meters (m), Capacitance in Farads (F).

**9. Practice Questions/Exercises**

1.  **Question:** An NMOS transistor has the following parameters: Vt = 0.7V, µnCox = 100 µA/V², W/L = 10. Calculate the drain current (IDS) in the saturation region if VGS = 1.2V and VDS = 2V (ignore channel length modulation).
    *   **Answer:**
        *   VGS > Vt (1.2V > 0.7V) so transistor is not in cutoff.
        *   VDS > VGS - Vt (2V > 1.2V - 0.7V = 0.5V) so transistor is in saturation.
        *   IDS = (1/2) * µnCox * (W/L) * (VGS - Vt)²
        *   IDS = (1/2) * (100 µA/V²) * 10 * (1.2V - 0.7V)²
        *   IDS = 500 µA * (0.5V)²
        *   IDS = 125 µA

2.  **Question:** Explain the effect of increasing the channel length (L) of an NMOS transistor on its drain current (IDS) in the saturation region.
    *   **Answer:**  Increasing the channel length (L) will decrease the drain current (IDS) in the saturation region. This is because IDS is inversely proportional to L (IDS ∝ 1/L).  A longer channel offers more resistance to current flow.

3.  **Question:** How does the body effect influence the threshold voltage (Vt) of an NMOS transistor? Explain with an equation.
    *   **Answer:** The body effect increases the threshold voltage (Vt) of an NMOS transistor as the source-body voltage (VSB) increases. The equation is Vt = Vt0 + γ(√(VSB + 2Φf) - √(2Φf)). Where Vt0 is the threshold voltage for VSB = 0, γ is the body effect coefficient, and Φf is the surface potential.  The reverse bias between the source and the bulk affects the depletion region charge, requiring a higher gate voltage to form a channel.

4.  **Question:**  A PMOS transistor has Vt = -0.8V, VGS = -1.5V, and VDS = -2V. Is it in the linear or saturation region?
    *   **Answer:**
        *   Since VGS < Vt (-1.5V < -0.8V), the transistor is on (not in cutoff).
        *   Calculate VGS - Vt = -1.5V - (-0.8V) = -0.7V
        *   Compare |VDS| with |VGS - Vt| --> |-2V| > |-0.7V|, therefore the PMOS transistor is in the saturation region.

5.  **Question:** Define transconductance (gm) and explain its importance in analog circuit design.
    *   **Answer:** Transconductance (gm) is a measure of the transistor's ability to convert a gate voltage change into a drain current change. It is defined as gm = ∂IDS/∂VGS. In analog circuit design, gm is a crucial parameter because it determines the gain of amplifiers. A higher gm implies a larger change in output current for a given input voltage change, resulting in higher amplification.
