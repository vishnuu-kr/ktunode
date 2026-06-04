---
title: "Skin Effect & Ferranti Effect – Corona (qualitative study only) – Surge Impedance Loading"
subject: "POWER GENERATION, TRANSMISSION AND PROTECTION"
module: "Module 2: Power Transmission System "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36187"
status: "completed"
scrapedAt: "2026-05-23T16:23:28.338Z"
---
# Module 2: Power Transmission System - Advanced Concepts

This module delves into some important phenomena that affect the performance of power transmission lines, particularly at higher voltages and longer distances. We will explore the Skin Effect, Ferranti Effect, Corona Discharge, and Surge Impedance Loading.

**Relevant Course Outcomes:**

*   **CO2:** Evaluate the electrical performance of any transmission line. (Knowledge Level: K3)
*   **CO3:** Compute various physical characteristics of overhead and underground transmission systems. (Knowledge Level: K3)

**Learning Outcomes for this Topic:**

*   Understand the concept of skin effect and its impact on conductor resistance.
*   Explain the causes and consequences of the Ferranti effect in transmission lines.
*   Qualitatively understand the phenomenon of corona discharge.
*   Define and explain Surge Impedance Loading (SIL).

---

## 1. Skin Effect

The skin effect is a phenomenon where the alternating current (AC) flowing through a conductor tends to concentrate on the surface of the conductor rather than being uniformly distributed throughout its cross-section.

**Key Concepts and Definitions:**

*   **Skin Depth ($\delta$):** The depth within a conductor at which the current density falls to $1/e$ (approximately 36.8%) of its value at the surface. It is a measure of how far the current penetrates into the conductor.
*   **Eddy Currents:** As AC flows, it induces circulating eddy currents within the conductor. These eddy currents create their own magnetic fields which oppose the change in magnetic flux that produced them. This opposition is strongest in the interior of the conductor, pushing the main current towards the surface.
*   **Increased Effective Resistance:** Due to the non-uniform current distribution, the effective cross-sectional area available for current flow is reduced. This leads to an increase in the effective resistance of the conductor compared to its DC resistance.

**Factors Affecting Skin Effect:**

1.  **Frequency of Current:** The higher the frequency, the more pronounced the skin effect. This is because the induced eddy currents become stronger at higher frequencies, leading to a greater repulsion of the current from the conductor's interior.
    *   *Relationship:* $\delta \propto \frac{1}{\sqrt{f}}$ (where $f$ is the frequency)
2.  **Conductor Material Properties:** The skin effect is more significant in materials with higher conductivity and higher magnetic permeability.
    *   *Relationship:* $\delta \propto \frac{1}{\sqrt{\mu_r \sigma}}$ (where $\mu_r$ is the relative permeability and $\sigma$ is the conductivity)
3.  **Conductor Diameter:** Larger diameter conductors experience a more significant skin effect.

**Formula for Skin Depth (Qualitative understanding is sufficient for this topic, but the formula helps illustrate dependence):**

The approximate formula for skin depth is:
$$ \delta \approx \sqrt{\frac{2 \rho}{\omega \mu}} $$
Where:
*   $\rho$ is the resistivity of the conductor ($\rho = 1/\sigma$)
*   $\omega$ is the angular frequency ($\omega = 2\pi f$)
*   $\mu$ is the permeability of the conductor material ($\mu = \mu_r \mu_0$, where $\mu_0$ is the permeability of free space)

**Impact on Transmission Lines:**

*   **Increased AC Resistance:** The AC resistance of a transmission line conductor is higher than its DC resistance due to the skin effect. This leads to increased power loss ($I^2R$ losses) in the transmission line.
*   **Design Considerations:** For high-frequency applications or long transmission lines where power loss is critical, bundled conductors or hollow conductors are used to mitigate the skin effect by increasing the effective surface area available for current flow.

**Example:**

Consider a copper conductor. At standard power frequencies (50 Hz or 60 Hz), the skin depth is a few millimeters. For large conductors used in high-voltage transmission, the skin effect is noticeable and increases the effective resistance. At radio frequencies, the skin depth becomes very small, and current flows only in a thin layer on the surface.

**From Textbooks:**

*   **Wadhwa C. L. (Electrical Power Systems):** Discusses skin effect in detail, explaining its impact on conductor resistance and power losses. It often provides formulas and tables showing the increase in resistance due to skin effect at different frequencies.
*   **Mehta & Mehta (Principles of Power System):** Also covers skin effect as a factor contributing to line resistance, particularly for ACSR (Aluminum Conductor Steel Reinforced) conductors.

**Important Point to Remember:** Skin effect increases the effective AC resistance of a conductor, leading to higher $I^2R$ losses. It is more pronounced at higher frequencies and with larger diameter conductors.

---

## 2. Ferranti Effect

The Ferranti effect is a phenomenon observed in long, lightly loaded, or unloaded overhead transmission lines where the voltage at the receiving end is higher than the voltage at the sending end.

**Key Concepts and Definitions:**

*   **Capacitive Effect:** Transmission lines possess distributed capacitance between conductors and between conductors and ground. When the line is lightly loaded or unloaded, there is very little current flowing through the line.
*   **Charging Current:** Due to the distributed capacitance, a charging current flows along the line, even when no load is connected. This charging current leads the voltage.
*   **Inductive Reactance ($X_L$) and Capacitive Reactance ($X_C$):** Transmission lines have inductance and capacitance, which give rise to inductive and capacitive reactances, respectively.
*   **Line Parameters:** A transmission line can be represented by its resistance (R), inductance (L), conductance (G), and capacitance (C) distributed along its length.
*   **Over-compensation:** In a lightly loaded line, the capacitance effect tends to dominate over the inductance effect. The charging current drawn by the line's capacitance leads the voltage.

**Explanation of the Phenomenon:**

For a transmission line, the voltage at the receiving end ($V_R$) can be approximated using the following relationship (ignoring resistance and conductance for simplicity in qualitative understanding):

$$ V_S \approx V_R + j I_R X_L $$
$$ I_C = j \omega C V_R $$ (Charging current leads the voltage across the capacitor)

When the line is lightly loaded, the load current ($I_R$) is small. The total current flowing through the line inductance is the sum of the load current and the charging current. The charging current ($I_C$) is primarily determined by the capacitance and the receiving-end voltage ($V_R$). Since $I_C$ leads $V_R$, and it flows through the line inductance, it causes a voltage rise at the sending end relative to the receiving end.

In simpler terms:
1.  The transmission line acts like a transmission line with distributed inductance and capacitance.
2.  When the line is lightly loaded, the charging current drawn by the line's capacitance is significant relative to the load current.
3.  This charging current, flowing through the line's inductance, causes a voltage rise along the line.
4.  Consequently, the voltage at the receiving end is higher than the voltage at the sending end.

**Mathematical Insight (Qualitative):**

Consider a lossless line. The relationship between sending-end voltage ($V_S$) and receiving-end voltage ($V_R$) is:
$$ V_S = V_R \cosh(\gamma l) $$
Where $\gamma$ is the propagation constant and $l$ is the line length. For long lines, $\gamma l$ is significant.
The characteristic impedance ($Z_0$) is given by $Z_0 = \sqrt{L/C}$.
The surge impedance loading (discussed later) is $Z_0$.

For a lightly loaded or unloaded line, the receiving end current is small. The voltage at the sending end will be higher than the receiving end voltage if the line is electrically long and the capacitance is significant.

**Consequences:**

*   **Voltage Regulation Issues:** The voltage at the receiving end can exceed the normal operating limits, potentially damaging connected equipment.
*   **Increased Reactive Power:** The charging current draws reactive power from the sending end.

**Mitigation:**

*   **Reactors:** Shunt reactors are connected at the receiving end of long transmission lines to absorb the excess reactive power and counteract the Ferranti effect, thus regulating the voltage.
*   **Line Loading:** Operating the line at or above its Surge Impedance Loading (SIL) also helps to mitigate the Ferranti effect.

**Example:**

A 300 km long, 132 kV transmission line, when lightly loaded, might experience a voltage rise of 5-10% at the receiving end compared to the sending end.

**From Textbooks:**

*   **Wadhwa C. L. (Electrical Power Systems):** Provides a detailed analysis of the Ferranti effect, often using phasor diagrams and line equations to illustrate the voltage rise. It discusses the role of line capacitance and inductance.
*   **Mehta & Mehta (Principles of Power System):** Explains the Ferranti effect as a consequence of line capacitance, particularly in long lines and lightly loaded conditions. It highlights the need for voltage regulation.

**Important Point to Remember:** Ferranti effect is a voltage rise at the receiving end of a lightly loaded long transmission line due to its capacitance.

---

## 3. Corona Discharge (Qualitative Study)

Corona is a phenomenon of partial electrical breakdown of the air surrounding a high-voltage conductor. It is characterized by a faint bluish glow, a hissing sound, and the production of ozone.

**Key Concepts and Definitions:**

*   **Dielectric Strength of Air:** Air, like other dielectrics, has a limit to the electric field strength it can withstand before it breaks down and becomes conductive. This limit is known as the dielectric strength of air.
*   **Critical Disruption Voltage:** The minimum voltage at which corona discharge begins.
*   **Irregular Discharge:** Corona is an irregular discharge that occurs in regions of very high electric field gradients, typically around the surface of the conductors.

**Causes of Corona:**

*   **Non-uniform Electric Field:** Corona occurs when the electric field strength at the surface of the conductor exceeds the dielectric strength of air. This typically happens at points or edges where the radius of curvature is small, leading to a highly concentrated electric field. For transmission lines, this is more pronounced on smaller diameter conductors or sharp imperfections on their surface.
*   **High Voltage:** Corona discharge is an effect of high voltages. As voltage increases, the electric field around the conductors intensifies.

**Appearance:**

*   **Glow:** A faint purplish or bluish glow around the conductors.
*   **Sound:** A characteristic hissing or crackling sound.
*   **Ozone Production:** Corona discharge ionizes the air and can produce ozone ($O_3$), which has a distinct smell.

**Factors Affecting Corona:**

1.  **Conductor Diameter:** Larger diameter conductors have a lower electric field gradient at their surface for a given voltage, thus reducing the likelihood of corona.
2.  **Conductor Surface Condition:** Rough surfaces, sharp edges, or dirt on the conductor can create localized points of high electric field, initiating corona. Smooth, polished conductors are less prone to corona.
3.  **Spacing Between Conductors:** Closer spacing of conductors leads to a higher electric field between them, increasing the possibility of corona.
4.  **Atmospheric Conditions:**
    *   **Air Density:** Higher air density (at lower altitudes and lower temperatures) increases the dielectric strength of air, making corona less likely. Conversely, at higher altitudes, the air is less dense, and corona can occur at lower voltages.
    *   **Humidity:** High humidity can increase corona effects.
    *   **Precipitation:** Rain, snow, or fog significantly increases corona due to water droplets or ice formations on the conductors, which act as sharp points and reduce the effective dielectric strength.

**Consequences of Corona:**

*   **Power Loss:** Corona discharge dissipates energy in the form of heat, light, and sound, leading to a loss of electrical power in the transmission line. This is known as corona loss.
*   **Radio Interference (RI):** The ionization of air during corona discharge produces electromagnetic waves that can interfere with radio reception in the vicinity of the transmission line.
*   **Audible Noise (AN):** The hissing sound produced by corona can be a nuisance in populated areas.
*   **Ozone Production:** Ozone can cause corrosion of conductor materials over time.
*   **Voltage Regulation:** Corona loss is voltage-dependent and increases significantly with increasing voltage, affecting the overall voltage regulation of the line.

**Mitigation Techniques:**

*   **Use of Bundle Conductors:** Using multiple conductors bundled together (e.g., two, three, or four conductors per phase) effectively increases the overall diameter of the conductor bundle and reduces the electric field gradient at the surface, thereby minimizing corona.
*   **Larger Conductor Diameter:** Using conductors with larger cross-sectional areas also helps.
*   **Smooth Conductors:** Using smooth, clean conductors.
*   **Proper Spacing:** Maintaining adequate spacing between conductors.

**Example:**

On a clear day, a 400 kV transmission line might have a visible corona glow on some conductors if they are not bundled, especially at the points of highest voltage. During a rainstorm, the corona effect would be much more pronounced, with a louder sound and more significant power loss.

**From Textbooks:**

*   **Wadhwa C. L. (Electrical Power Systems):** Provides a thorough qualitative and quantitative study of corona, including factors affecting it, methods for calculating corona loss, and its impact on transmission line performance.
*   **Mehta & Mehta (Principles of Power System):** Covers corona as a significant factor in high-voltage transmission, discussing its causes, effects, and mitigation methods like using bundle conductors.
*   **Badri Ram and D.N. Viswakarma (Power System Protection and Switchgear):** While this book focuses on protection, it might touch upon corona as a factor leading to transient phenomena or influencing insulation design, which is relevant to protection.

**Important Point to Remember:** Corona is a partial breakdown of air around conductors due to high electric field gradients, leading to power loss, radio interference, and noise. It is more severe in adverse weather conditions and on conductors with smaller diameters or rough surfaces.

---

## 4. Surge Impedance Loading (SIL)

Surge Impedance Loading (SIL) is the power delivered to a transmission line when the line is terminated with its characteristic impedance. At SIL, the line behaves like a purely resistive load, and there are no reflections of voltage or current waves.

**Key Concepts and Definitions:**

*   **Characteristic Impedance ($Z_0$):** Also known as surge impedance, it is the ratio of the voltage wave to the current wave propagating along a lossless transmission line. It is a characteristic of the line's physical construction (inductance and capacitance per unit length).
    $$ Z_0 = \sqrt{\frac{L}{C}} $$
    Where:
    *   $L$ is the inductance per unit length.
    *   $C$ is the capacitance per unit length.
    For typical overhead transmission lines, $Z_0$ is usually in the range of 300-500 ohms.
*   **Lossless Line Assumption:** The concept of SIL is most rigorously defined for a lossless line. For practical transmission lines, the resistance and conductance are small and can often be neglected for this calculation.
*   **No Reflections:** When a line is terminated with its characteristic impedance ($Z_0$), the voltage and current waves propagate without any mismatch. This means no power is reflected back towards the source.

**Calculation of SIL:**

SIL is the power transferred when the receiving-end voltage ($V_R$) is applied to the characteristic impedance ($Z_0$).

$$ SIL = \frac{V_R^2}{Z_0} $$

Where:
*   $V_R$ is the rated line-to-neutral voltage of the transmission line.

**Properties of a Transmission Line Operating at SIL:**

*   **No Reactive Power Transfer:** The line draws no reactive power from the source and delivers no reactive power to the load. The reactive power generated by the line's capacitance is exactly absorbed by the line's inductance.
*   **Voltage Profile is Flat:** The voltage remains constant along the entire length of the line. The voltage at the sending end is equal to the voltage at the receiving end ($V_S = V_R$).
*   **No Ferranti Effect:** As there's no voltage rise, the Ferranti effect is eliminated.
*   **No Skin Effect Impact on Reactive Power:** While skin effect increases resistance, it doesn't directly affect the reactive power balance at SIL.

**Significance of SIL:**

*   **Optimal Loading Point:** Operating a transmission line at or near its SIL is generally considered an efficient operating point, as it minimizes reactive power requirements and maintains a flat voltage profile.
*   **Design Consideration:** The SIL provides a benchmark for designing and operating long transmission lines. It helps engineers understand the reactive power compensation requirements.
*   **Mitigation of Ferranti Effect:** As mentioned, operating at or above SIL can help mitigate the Ferranti effect.

**Example:**

Consider a 400 kV (line-to-line) transmission line with a characteristic impedance ($Z_0$) of 400 ohms.
The line-to-neutral voltage ($V_R$) is $400/\sqrt{3} \approx 230.9$ kV = 230,900 V.

$$ SIL = \frac{(230,900)^2}{400} = \frac{53,314,810,000}{400} \approx 133.3 \times 10^6 \text{ Watts} = 133.3 \text{ MW} $$

So, the SIL for this line is approximately 133.3 MW. If this line is loaded with 133.3 MW and no other load, the voltage at both ends will be approximately 400 kV, and the line will not draw or deliver any reactive power.

**From Textbooks:**

*   **Wadhwa C. L. (Electrical Power Systems):** Dedicates a section to SIL, explaining its concept, calculation, and the benefits of operating a line at this loading level. It often relates SIL to voltage regulation and reactive power compensation.
*   **Mehta & Mehta (Principles of Power System):** Introduces SIL as a key parameter for long transmission lines, explaining its relation to the characteristic impedance and the ideal loading condition where voltage remains constant.

**Important Point to Remember:** SIL is the power a transmission line can transmit when terminated with its characteristic impedance, resulting in no reflections, a flat voltage profile, and no reactive power transfer.

---

## Practice Questions

**Instructions:** Answer the following questions based on the concepts learned in this module.

1.  **Skin Effect:** Briefly explain why the AC resistance of a conductor is higher than its DC resistance. What are the main factors influencing the magnitude of the skin effect?
2.  **Ferranti Effect:** Describe the Ferranti effect. What are the primary reasons for its occurrence, and what are its main consequences for a transmission line?
3.  **Corona Discharge:**
    *   (a) What is corona discharge in the context of transmission lines?
    *   (b) List three factors that can increase the severity of corona.
    *   (c) Name two detrimental effects of corona discharge.
4.  **Surge Impedance Loading (SIL):**
    *   (a) Define Surge Impedance Loading (SIL).
    *   (b) What is the relationship between SIL and the characteristic impedance ($Z_0$) of a transmission line?
    *   (c) What is the state of reactive power transfer and voltage profile when a line is operated at SIL?
5.  **Application Scenario:** A 220 kV, 50 Hz transmission line has a characteristic impedance of 350 ohms. Calculate the Surge Impedance Loading (SIL) for this line. If the line is lightly loaded and experiencing a voltage rise at the receiving end, what phenomenon is this, and how could it be mitigated?

---

## Answers to Practice Questions

1.  **Skin Effect:** The AC resistance of a conductor is higher than its DC resistance due to the skin effect. Alternating current, as it flows, induces eddy currents within the conductor. These eddy currents create magnetic fields that oppose the further penetration of current into the conductor's core. This forces the current to flow primarily on the outer surface of the conductor, reducing the effective cross-sectional area available for current flow and thus increasing its effective resistance.
    The main factors influencing the magnitude of the skin effect are:
    *   **Frequency of the current:** Higher frequency leads to a greater skin effect.
    *   **Diameter of the conductor:** Larger diameter conductors experience a greater skin effect.
    *   **Magnetic permeability of the conductor material:** Higher permeability increases the skin effect.
    *   **Electrical conductivity of the conductor material:** Higher conductivity increases the skin effect.

2.  **Ferranti Effect:** The Ferranti effect is the phenomenon where the voltage at the receiving end of a long, lightly loaded or unloaded transmission line is higher than the voltage at the sending end. This occurs because the distributed capacitance of the transmission line draws a charging current that leads the voltage. When the line is lightly loaded, this capacitive charging current is significant relative to the load current. The charging current, flowing through the line's inductance, causes a voltage rise along the line, resulting in a higher receiving-end voltage.
    The main consequences are:
    *   **Over-voltage:** The receiving-end voltage can exceed the permissible limits for equipment.
    *   **Increased reactive power demand:** The line draws reactive power due to its capacitance.

3.  **Corona Discharge:**
    *   (a) Corona discharge is the partial electrical breakdown of the air surrounding high-voltage conductors, characterized by a faint glow, hissing sound, and ozone production. It happens when the electric field strength at the conductor surface exceeds the dielectric strength of the air.
    *   (b) Three factors that can increase the severity of corona are:
        *   High frequency.
        *   Rough conductor surface or sharp edges.
        *   Rain, snow, or fog (precipitation).
        *   Smaller conductor diameter.
        *   Closer conductor spacing.
    *   (c) Two detrimental effects of corona discharge are:
        *   **Power loss:** Energy is dissipated as heat, light, and sound.
        *   **Radio Interference (RI):** It generates electromagnetic waves that can interfere with radio communication.
        *   **Audible Noise (AN):** The characteristic hissing sound can be a nuisance.

4.  **Surge Impedance Loading (SIL):**
    *   (a) Surge Impedance Loading (SIL) is the power that a transmission line transmits when it is terminated with its characteristic impedance ($Z_0$). At SIL, the line behaves like a purely resistive load, and there are no reflections of voltage or current waves.
    *   (b) The relationship is: $SIL = \frac{V_R^2}{Z_0}$, where $V_R$ is the rated line-to-neutral voltage and $Z_0$ is the characteristic impedance.
    *   (c) When a line is operated at SIL:
        *   **Reactive power transfer:** The line does not transfer any reactive power (it neither draws nor delivers net reactive power).
        *   **Voltage profile:** The voltage profile along the line is flat; the sending-end voltage equals the receiving-end voltage ($V_S = V_R$).

5.  **Application Scenario:**
    *   **Calculate SIL:**
        *   Line voltage ($V_{LL}$) = 220 kV
        *   Line-to-neutral voltage ($V_R$) = $220 \text{ kV} / \sqrt{3} \approx 127.02 \text{ kV} = 127,020 \text{ V}$
        *   Characteristic Impedance ($Z_0$) = 350 ohms

        $$ SIL = \frac{V_R^2}{Z_0} = \frac{(127,020 \text{ V})^2}{350 \text{ ohms}} = \frac{16,134,080,400}{350} \approx 46,100,230 \text{ Watts} $$
        $$ SIL \approx 46.1 \text{ MW} $$

    *   **Phenomenon and Mitigation:** If the line is lightly loaded and experiencing a voltage rise at the receiving end, this is the **Ferranti Effect**.
        To mitigate the Ferranti Effect, one could:
        *   **Connect shunt reactors** at the receiving end to absorb the excess reactive power.
        *   **Increase the load** on the line to at least its SIL.
        *   **Reduce the line capacitance** (less practical, involves line design changes).
        *   **Use series capacitors** for compensation (though this is more for voltage drop compensation, it can indirectly affect voltage regulation).

---

This concludes Module 2, Topic: Skin Effect & Ferranti Effect – Corona (qualitative study only) – Surge Impedance Loading. These concepts are crucial for understanding the behavior and efficiency of long-distance power transmission.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
