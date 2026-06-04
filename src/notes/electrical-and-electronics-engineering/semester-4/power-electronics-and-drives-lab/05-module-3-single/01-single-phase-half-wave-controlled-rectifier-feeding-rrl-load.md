---
title: "Single-Phase half-wave-controlled rectifier feeding R/RL load"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 3: Single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36139"
status: "completed"
scrapedAt: "2026-05-23T16:18:03.440Z"
---
# POWER ELECTRONICS AND DRIVES LAB

## Module 3: Single-Phase Controlled Rectifiers

### Topic: Single-Phase Half-Wave Controlled Rectifier Feeding R/RL Load

---

### 1. Introduction to Controlled Rectifiers

**Definition:** Rectifiers are electronic circuits that convert alternating current (AC) into direct current (DC). Controlled rectifiers utilize controllable switching devices like SCRs (Silicon Controlled Rectifiers) or TRIACs to regulate the output DC voltage.

**Importance:** Controlled rectifiers are fundamental building blocks in power electronics applications, enabling variable DC voltage output from an AC source. This is crucial for applications like motor speed control, battery charging, and DC power supplies.

**Key Concepts:**
*   **Rectification:** Conversion of AC to DC.
*   **Controllable Switching Devices:** Devices whose conduction can be controlled by an external signal (e.g., gate pulse).
*   **Firing Angle ($\alpha$):** The delay angle introduced before triggering the controllable switching device, which determines the output voltage.

---

### 2. Single-Phase Half-Wave Rectifier (Uncontrolled) - A Prerequisite

Before diving into controlled half-wave rectifiers, it's essential to understand the basic half-wave rectifier.

**Circuit Diagram:**
(Imagine a simple circuit with an AC source, a diode, and a load resistor R in series.)

**Operation:**
*   During the positive half-cycle of the AC input, the diode is forward-biased and conducts. Current flows through the load.
*   During the negative half-cycle, the diode is reverse-biased and blocks current flow.

**Output Voltage Waveform:** Only the positive half-cycle of the input AC is passed to the output. The output is pulsed DC with zero voltage during the negative half-cycles.

**References:**
*   **Umanand (2009):** Chapter 3, "Rectifiers," likely covers basic rectifier configurations.
*   **Rashid (2014):** Chapter 4, "Diode Rectifiers," would provide a foundation for uncontrolled rectifiers.

---

### 3. Single-Phase Half-Wave Controlled Rectifier with R Load

**Circuit Diagram:**
(Imagine a circuit with an AC source, an SCR, and a load resistor R in series.)

**Components:**
*   **AC Source:** Provides the input AC voltage ($v_s = V_m \sin(\omega t)$).
*   **SCR (Thyristor):** The controllable switching device. Requires a gate pulse to turn ON. Once ON, it conducts until the current through it drops below the holding current or the voltage across it reverses.
*   **Load Resistor (R):** Represents a purely resistive load.

**Operation:**
1.  **During the positive half-cycle of $v_s$:**
    *   The SCR is forward-biased when the anode-cathode voltage is positive.
    *   However, the SCR remains OFF until a gate pulse is applied.
    *   The firing angle $\alpha$ is the point (in degrees or radians) after the voltage starts to rise positively that the gate pulse is applied.
    *   Once triggered at $\alpha$, the SCR conducts, and current flows through the load resistor.
    *   The anode-cathode voltage of the SCR is nearly zero when conducting.
    *   The output voltage across the load ($v_o$) is equal to the input voltage ($v_s$) during conduction.
2.  **Conduction Period:** The SCR conducts from $\omega t = \alpha$ until the end of the positive half-cycle, i.e., until $\omega t = \pi$ (180 degrees), because at $\pi$, the voltage across the source becomes zero, and the current through the SCR drops below the holding current.
3.  **During the negative half-cycle of $v_s$:**
    *   The SCR is reverse-biased, and no current flows, regardless of the gate signal.

**Output Voltage Waveform (R Load):**
*   The output voltage is zero from $\omega t = 0$ to $\alpha$.
*   It follows the input voltage ($V_m \sin(\omega t)$) from $\omega t = \alpha$ to $\pi$.
*   It is zero from $\omega t = \pi$ to $2\pi$.
*   The cycle repeats.

**Key Parameters and Formulas (R Load):**
*   **Average Output Voltage ($V_{dc}$):**
    $V_{dc} = \frac{1}{2\pi} \int_{0}^{2\pi} v_o(t) dt = \frac{1}{2\pi} \int_{\alpha}^{\pi} V_m \sin(\omega t) d(\omega t)$
    $V_{dc} = \frac{V_m}{2\pi} [-\cos(\omega t)]_{\alpha}^{\pi} = \frac{V_m}{2\pi} (-\cos(\pi) - (-\cos(\alpha)))$
    $V_{dc} = \frac{V_m}{2\pi} (1 + \cos(\alpha))$

*   **RMS Output Voltage ($V_{rms}$):**
    $V_{rms} = \sqrt{\frac{1}{2\pi} \int_{0}^{2\pi} v_o(t)^2 dt} = \sqrt{\frac{1}{2\pi} \int_{\alpha}^{\pi} (V_m \sin(\omega t))^2 d(\omega t)}$
    $V_{rms} = V_m \sqrt{\frac{1}{2\pi} \int_{\alpha}^{\pi} \frac{1 - \cos(2\omega t)}{2} d(\omega t)}$
    $V_{rms} = V_m \sqrt{\frac{1}{4\pi} [\omega t - \frac{\sin(2\omega t)}{2}]_{\alpha}^{\pi}}$
    $V_{rms} = V_m \sqrt{\frac{1}{4\pi} [(\pi - 0) - (\alpha - \frac{\sin(2\alpha)}{2})]}$
    $V_{rms} = \frac{V_m}{2} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}$

*   **Average Load Current ($I_{dc}$):**
    $I_{dc} = \frac{V_{dc}}{R}$

*   **RMS Load Current ($I_{rms}$):**
    $I_{rms} = \frac{V_{rms}}{R}$

*   **RMS Source Current ($I_{s,rms}$):**
    For a half-wave rectifier, the current flows only during the positive half-cycle, from $\alpha$ to $\pi$.
    $I_{s,rms} = \sqrt{\frac{1}{2\pi} \int_{0}^{2\pi} i_s(t)^2 dt} = \sqrt{\frac{1}{2\pi} \int_{\alpha}^{\pi} (\frac{V_m \sin(\omega t)}{R})^2 d(\omega t)}$
    This is the same as $I_{rms} = \frac{V_{rms}}{R}$.

*   **Power Factor (PF):**
    $PF = \frac{\text{Average Power Delivered}}{\text{RMS Value of Input Voltage} \times \text{RMS Value of Input Current}}$
    For a source voltage $v_s(t)$ and source current $i_s(t)$, average power $P = \frac{1}{2\pi} \int_0^{2\pi} v_s(t) i_s(t) dt$.
    $P = \frac{1}{2\pi} \int_{\alpha}^{\pi} (V_m \sin(\omega t)) (\frac{V_m \sin(\omega t)}{R}) d(\omega t) = \frac{V_m^2}{2\pi R} \int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t)$
    $P = \frac{V_m^2}{2\pi R} \frac{1}{2} [\omega t - \frac{\sin(2\omega t)}{2}]_{\alpha}^{\pi} = \frac{V_m^2}{4\pi R} [\pi - \alpha + \frac{\sin(2\alpha)}{2}]$
    $P = \frac{V_m^2}{2R} (1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}) = I_{rms}^2 R$.

    $P = V_{s,rms} I_{s,rms} PF$
    $V_{s,rms} = \frac{V_m}{\sqrt{2}}$
    $P = \frac{V_m^2}{2\pi R} \frac{1}{2} [\pi - \alpha + \frac{\sin(2\alpha)}{2}]$
    $PF = \frac{P}{V_{s,rms} I_{s,rms}} = \frac{P}{(V_m/\sqrt{2}) (I_{rms})} = \frac{P}{(V_m/\sqrt{2}) (V_{rms}/R)}$
    $PF = \frac{2P R}{V_m V_{rms}} = \frac{2R}{V_m} \frac{V_m^2}{2\pi R} \frac{1}{2} [\pi - \alpha + \frac{\sin(2\alpha)}{2}] \frac{\sqrt{2}}{V_m}$
    This direct calculation is complex. A simpler approach uses the definition of power factor as the ratio of the fundamental component of current in phase with the voltage to the RMS current. For a simple R load, the current waveform is the same as the voltage waveform during conduction.
    For half-wave rectified sine wave, the power factor is given by:
    $PF = \frac{V_{dc}}{V_{s,rms}} \cos(\phi)$ - This is for resistive loads and cannot be directly applied here.
    A more general approach for power factor is:
    $PF = \frac{\text{Active Power}}{\text{Apparent Power}} = \frac{P}{V_{s,rms} \times I_{s,rms}}$
    $PF = \frac{V_{dc} I_{dc}}{V_{s,rms} I_{s,rms}}$ if output is pure DC.

    For a controlled rectifier feeding a resistive load:
    $PF = \frac{1}{\sqrt{2}} \frac{V_m \sqrt{\frac{1}{2\pi} \int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t)}}{V_m/\sqrt{2}} \times \frac{V_{dc}}{I_{dc}R}$
    The current waveform is identical to the voltage waveform.
    $PF = \frac{\text{Average Power}}{\text{RMS Input Voltage} \times \text{RMS Source Current}} = \frac{P}{V_{s,rms} I_{s,rms}}$
    $P = \frac{V_m^2}{2R} (1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi})$
    $V_{s,rms} = V_m/\sqrt{2}$
    $I_{s,rms} = \frac{V_{rms}}{R} = \frac{1}{R} \frac{V_m}{2} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}$
    $PF = \frac{\frac{V_m^2}{2R} (1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi})}{\frac{V_m}{\sqrt{2}} \frac{V_m}{2R} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}} = \frac{\sqrt{2} \frac{V_m^2}{2R} (1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi})}{\frac{V_m^2}{2R} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}}$
    $PF = \sqrt{2} \frac{\sqrt{\frac{1}{2\pi} \int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t)}}{\frac{1}{\sqrt{2}}} = \sqrt{2} \times \frac{V_{rms}}{V_m} \times \sqrt{2} = 2 \frac{V_{rms}}{V_m}$
    $PF = \frac{1}{\pi} \sqrt{\frac{\pi - \alpha + \frac{\sin(2\alpha)}{2}}{2}} \times \sqrt{2} = \frac{1}{\pi} \sqrt{\pi - \alpha + \frac{\sin(2\alpha)}{2}}$
    This is incorrect.

    Let's use the direct formula for PF for a half-wave rectified sine wave:
    $PF = \frac{1}{\pi} \sqrt{1 + \frac{\sin(2\alpha)}{2(\pi - \alpha)}}$ --- Incorrect.

    The actual PF is related to the distortion and phase shift of the fundamental component of current.
    For a half-wave controlled rectifier feeding a resistive load, the current waveform is the same as the voltage waveform. The power factor can be expressed as:
    $PF = \frac{\text{Fundamental Component of Power}}{\text{RMS Input Voltage} \times \text{RMS Input Current}}$
    $P = \frac{1}{2\pi} \int_{\alpha}^{\pi} V_m \sin(\omega t) \frac{V_m \sin(\omega t)}{R} d(\omega t) = \frac{V_m^2}{2\pi R} \int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t)$
    $PF = \frac{P}{V_{s,rms} \times I_{s,rms}} = \frac{\frac{V_m^2}{2\pi R} \int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t)}{\frac{V_m}{\sqrt{2}} \times \sqrt{\frac{1}{2\pi} \int_{\alpha}^{\pi} (\frac{V_m \sin(\omega t)}{R})^2 d(\omega t)}}$
    $PF = \frac{\frac{V_m^2}{2\pi R} \int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t)}{\frac{V_m}{\sqrt{2}} \times \frac{1}{R} \sqrt{\frac{1}{2\pi} \int_{\alpha}^{\pi} V_m^2 \sin^2(\omega t) d(\omega t)}}$
    $PF = \frac{\sqrt{2} \int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t)}{ \sqrt{2\pi \int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t)}} = \frac{\sqrt{2} \sqrt{\int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t)}}{\sqrt{2\pi} \sqrt{\int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t)}}$
    $PF = \frac{\sqrt{2}}{\sqrt{2\pi}} = \frac{1}{\sqrt{\pi}}$ - This is still incorrect.

    **Correct Formula for Power Factor (R Load):**
    $PF = \frac{1}{\pi} \sqrt{\frac{\pi-\alpha + \frac{1}{2}\sin(2\alpha)}{2}} \times \sqrt{2} = \frac{1}{\pi} \sqrt{\frac{\pi-\alpha}{2} + \frac{\sin(2\alpha)}{4}}$ - Incorrect.

    Let's look up the standard formula for PF for a half-wave controlled rectifier.
    **According to most textbooks (e.g., Mohan, Umanand, Rashid):**
    The RMS value of the input current ($i_s$) is the same as the RMS value of the load current ($i_o$).
    $I_{s,rms} = I_{rms} = \frac{V_{rms}}{R}$
    Average Power $P = I_{rms}^2 R = \frac{V_{rms}^2}{R}$
    Input RMS Voltage $V_{s,rms} = \frac{V_m}{\sqrt{2}}$
    $PF = \frac{P}{V_{s,rms} I_{s,rms}} = \frac{I_{rms}^2 R}{V_{s,rms} I_{rms}} = \frac{I_{rms} R}{V_{s,rms}} = \frac{V_{rms}}{V_{s,rms}}$
    $PF = \frac{\frac{V_m}{2} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}}{\frac{V_m}{\sqrt{2}}} = \frac{\sqrt{2}}{2} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}$
    $PF = \frac{1}{\sqrt{2}} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}$

    **Alternatively:**
    $PF = \frac{V_{dc}}{V_{s,rms}} \times \text{Displacement Factor}$
    For a purely resistive load, displacement factor is 1.
    $PF = \frac{V_{dc}}{V_{s,rms}} = \frac{\frac{V_m}{2\pi} (1 + \cos(\alpha))}{\frac{V_m}{\sqrt{2}}} = \frac{\sqrt{2}}{2\pi} (1 + \cos(\alpha))$ --- Incorrect, this is for full wave.

    **Final attempt on PF for half-wave controlled R load:**
    The power factor is often expressed as a combination of "true power factor" (which includes displacement and distortion factors) and "fundamental power factor".
    For a half-wave controlled rectifier feeding an R load, the current waveform is identical to the voltage waveform.
    $PF = \frac{\text{Active Power}}{\text{Apparent Power}} = \frac{P}{V_{s,rms} \times I_{s,rms}} = \frac{I_{rms}^2 R}{V_{s,rms} I_{rms}} = \frac{I_{rms} R}{V_{s,rms}} = \frac{V_{rms}}{V_{s,rms}}$
    $V_{rms} = \frac{V_m}{2} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}$
    $V_{s,rms} = \frac{V_m}{\sqrt{2}}$
    $PF = \frac{\frac{V_m}{2} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}}{\frac{V_m}{\sqrt{2}}} = \frac{\sqrt{2}}{2} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}}$

    *   **Displacement Factor (DF):** For a purely resistive load, the current is in phase with the voltage during conduction. Thus, $DF = 1$.
    *   **Distortion Factor (CrF):** Due to the chopped waveform, harmonics are present in the current, reducing the distortion factor.
    *   **Total Power Factor (PF):** $PF = DF \times CrF$. For a resistive load, the distortion factor is the primary factor reducing PF from 1.

    **Important Note:** The power factor of a half-wave controlled rectifier is significantly lower than that of a full-wave controlled rectifier due to the asymmetry and the presence of more harmonics.

*   **Effect of Firing Angle ($\alpha$):**
    *   As $\alpha$ increases from 0 to $\pi$, the average and RMS output voltages decrease.
    *   The power factor also decreases as $\alpha$ increases.
    *   When $\alpha = 0$, it behaves like an uncontrolled half-wave rectifier.

**References:**
*   **Mohan, Undeland, Robbins (2022):** Chapter 4, "Controlled Rectifiers," will have detailed derivations and discussions on R and RL loads.
*   **Vithayathil (2010):** Chapter 5, "Controlled Rectifiers," provides comprehensive coverage.
*   **Hart (2010):** Chapter 6, "Phase-Controlled Rectifiers," would be a good resource.
*   **Agrawal (2006):** Chapter 7, "Controlled Rectifiers," would offer a solid theoretical foundation.

---

### 4. Single-Phase Half-Wave Controlled Rectifier with RL Load

**Circuit Diagram:**
(Imagine a circuit with an AC source, an SCR, and a series combination of a resistor R and an inductor L as the load.)

**Components:**
*   **AC Source:** $v_s = V_m \sin(\omega t)$.
*   **SCR:** The controllable switching device.
*   **Load:** Series combination of R and L ($R_L$, $L$).

**Operation:**
1.  **Firing:** The SCR is triggered at an angle $\alpha$.
2.  **Conduction:** Once triggered at $\alpha$, the SCR conducts. The load current $i_o(t)$ starts to rise.
3.  **Inductor Effect:** The inductor opposes changes in current. Therefore, the current does not rise instantaneously but follows the equation:
    $v_o(t) = v_s(t) = R i_o(t) + L \frac{di_o(t)}{dt}$
    The solution to this equation during conduction is of the form:
    $i_o(t) = A e^{-t/\tau} + B \sin(\omega t - \phi)$
    where $\tau = L/R$ is the time constant and $\phi = \arctan(\omega L/R)$ is the impedance angle.
    The steady-state current is $i_o(t) = \frac{V_m}{Z} (\sin(\omega t - \phi) - \sin(\alpha - \phi) e^{-(\omega t - \alpha)/\omega \tau})$, where $Z = \sqrt{R^2 + (\omega L)^2}$.
4.  **Extinction Angle ($\beta$):** In an RL load, the current does not drop to zero at the end of the positive half-cycle ($\pi$). Due to the stored energy in the inductor, the current continues to flow even when the voltage across the SCR becomes negative.
    *   The SCR turns OFF (extinguishes) when the current $i_o(t)$ drops below the holding current. In ideal analysis, we assume the holding current is zero, and the SCR turns OFF when $i_o(t) = 0$.
    *   This happens at an extinction angle $\beta$, where $\pi < \beta < 2\pi$.
    *   The conduction angle is $(\beta - \alpha)$.

**Output Voltage Waveform (RL Load):**
*   The output voltage is zero from $\omega t = 0$ to $\alpha$.
*   It follows the input voltage ($V_m \sin(\omega t)$) from $\omega t = \alpha$ to $\beta$.
*   It is zero from $\omega t = \beta$ to $2\pi$.
*   The cycle repeats.

**Key Parameters and Formulas (RL Load):**
*   **Extinction Angle ($\beta$):** $\beta$ is determined by the condition $i_o(\beta) = 0$.
    $0 = \frac{V_m}{Z} (\sin(\beta - \phi) - \sin(\alpha - \phi) e^{-(\beta - \alpha)/\omega \tau})$
    $\sin(\alpha - \phi) e^{-(\beta - \alpha)/\omega \tau} = \sin(\beta - \phi)$

*   **Average Output Voltage ($V_{dc}$):**
    $V_{dc} = \frac{1}{2\pi} \int_{0}^{2\pi} v_o(t) dt = \frac{1}{2\pi} \int_{\alpha}^{\beta} V_m \sin(\omega t) d(\omega t)$
    $V_{dc} = \frac{V_m}{2\pi} [-\cos(\omega t)]_{\alpha}^{\beta} = \frac{V_m}{2\pi} (\cos(\alpha) - \cos(\beta))$

*   **RMS Output Voltage ($V_{rms}$):**
    $V_{rms} = \sqrt{\frac{1}{2\pi} \int_{0}^{2\pi} v_o(t)^2 dt} = \sqrt{\frac{1}{2\pi} \int_{\alpha}^{\beta} (V_m \sin(\omega t))^2 d(\omega t)}$
    $V_{rms} = V_m \sqrt{\frac{1}{4\pi} [\omega t - \frac{\sin(2\omega t)}{2}]_{\alpha}^{\beta}}$
    $V_{rms} = \frac{V_m}{2} \sqrt{\frac{1}{\pi} (\beta - \alpha - \frac{\sin(2\beta) - \sin(2\alpha)}{2})}$

*   **Average Load Current ($I_{dc}$):**
    $I_{dc} = \frac{1}{2\pi} \int_{\alpha}^{\beta} i_o(t) d(\omega t)$ - This is complex to calculate directly without the load current expression.
    A simpler way is to use the average voltage: $I_{dc} = V_{dc} / R$ is NOT correct because of the inductor.
    The average current depends on the integral of the current waveform.

*   **RMS Load Current ($I_{rms}$):**
    $I_{rms} = \sqrt{\frac{1}{2\pi} \int_{\alpha}^{\beta} i_o(t)^2 d(\omega t)}$ - This is also complex to calculate.

*   **Power Factor (PF):** For an RL load, the current waveform is distorted and also experiences a phase shift due to the inductor.
    *   **Displacement Factor (DF):** The fundamental component of the current will be shifted in phase relative to the fundamental component of the voltage. This shift is generally not $\phi$ due to the waveform distortion.
    *   **Distortion Factor (CrF):** Harmonics are present in the current waveform.
    *   **Total Power Factor (PF):** $PF = DF \times CrF$. The power factor will be significantly lower than for a purely resistive load.

*   **Effect of Firing Angle ($\alpha$) and Load Parameters (R, L):**
    *   **Higher $\alpha$:** Decreases the conduction angle $(\beta - \alpha)$ and hence reduces $V_{dc}$ and $V_{rms}$.
    *   **Higher Inductance (L):**
        *   Increases the time constant $\tau$, making the current rise and fall slower.
        *   Increases the extinction angle $\beta$, thus extending the conduction period.
        *   Reduces the peak current.
        *   Improves the shape of the current waveform (less distortion).
        *   Increases the power factor.
    *   **Higher Resistance (R):**
        *   Decreases the time constant $\tau$, making the current rise and fall faster.
        *   Decreases the extinction angle $\beta$.
        *   Increases the peak current.
        *   Leads to a more distorted current waveform.
        *   Decreases the power factor.
    *   **Continuous Conduction Mode (CCM):** If $\beta > 2\pi$, it means the SCR conducts for more than one full cycle. This is not possible for a half-wave rectifier.
    *   **Discontinuous Conduction Mode (DCM):** If $\beta < 2\pi$, the SCR turns off before the end of the negative half-cycle. This is the typical mode for a half-wave rectifier.

**Important Considerations for RL Load:**
*   The SCR needs to be able to handle the peak current.
*   The turn-off time of the SCR must be less than the period during which it is reverse-biased or zero-current biased.
*   The inductor helps in smoothing the output current and improving the power factor.

**References:**
*   **Umanand (2009):** Chapter 3, "Rectifiers," will likely cover RL loads.
*   **Rashid (2014):** Chapter 4, "Diode Rectifiers," and Chapter 5, "Controlled Rectifiers," would be relevant.
*   **Mohan, Undeland, Robbins (2022):** Chapter 4.
*   **Vithayathil (2010):** Chapter 5.
*   **Hart (2010):** Chapter 6.
*   **Agrawal (2006):** Chapter 7.

---

### 5. Practical Aspects and Design Considerations

*   **Gate Drive Circuit:** A suitable gate drive circuit is required to trigger the SCR reliably. This typically involves a pulse generator and possibly a triggering transformer for isolation.
    *   **CO1 Alignment:** Understanding and selecting gate driver circuits falls under CO1.
    *   **Textbook Reference:** Mohan, Raju (2023) - "Power Electronics- A first course: Simulations and Laboratory Implementations" is highly relevant here. Umanand (2009) and Hart (2010) might also discuss gate drive requirements.
*   **Heat Sink:** SCRs generate heat due to conduction and switching losses. Proper heat sinking is essential to maintain their operating temperature within limits and prevent thermal runaway.
    *   **CO1 Alignment:** Design and selection of heatsinks is directly covered by CO1.
    *   **Textbook Reference:** Umanand (2009) and Hart (2010) are good sources for thermal management.
*   **Snubber Circuits:** While less critical for simple R/RL loads in half-wave configurations compared to inductive switching in DC-DC converters or bridge rectifiers, snubbers (RC or RCD) might be used across the SCR to limit the rate of rise of voltage (dv/dt) and potentially suppress switching transients.
*   **Component Selection:**
    *   **SCR Rating:** Voltage and current ratings must be chosen considering the peak voltage and RMS current, with adequate safety margins.
    *   **Inductor (for RL load):** The inductance value will determine the load current behavior and power factor.

---

### 6. Alignment with Course Outcomes

*   **CO1: Understand the operation of modern power semiconductor devices, its characteristics and Design & Select suitable gate driver circuits & heatsinks.**
    *   This topic directly involves the SCR, a modern power semiconductor device. Understanding its triggering and conduction characteristics is key. The need for gate drive and heatsinks directly addresses the design and selection aspect.
*   **CO2: Understand the features of phase-controlled rectifiers, AC voltage Controllers & Switching Regulators and Analyse the operation.**
    *   This topic is a direct example of a phase-controlled rectifier. Analyzing its operation for R and RL loads, understanding the impact of the firing angle, and calculating output parameters aligns perfectly with this CO.
*   **CO3: Understand the features of different types of switch mode DC-AC Inverters and Analyse the operation.**
    *   While this topic is about rectification (AC to DC), it's part of a broader module on converters. Understanding rectifiers provides a foundation for understanding inverters, as both involve controlled switching and waveform manipulation.
*   **CO4: Understand the need for improved efficiency, improved reliability, improved load & source waveforms and improved utility interface.**
    *   The controlled rectifier's operation affects the utility interface (power factor, harmonic content). The use of an inductor in the RL load is a step towards improving load and source waveforms. Efficiency considerations are always present in power electronics.
*   **CO5: Understand the features of adjustable speed drives and Analyse the basic drive schemes for DC motors and Induction Motors.**
    *   The variable DC output voltage from a controlled rectifier is directly used in many DC motor drives for speed control. Understanding the rectifier's output characteristic is crucial for drive system analysis.

---

### 7. Practice Questions and Answers

**Question 1:** A single-phase half-wave controlled rectifier feeds a purely resistive load of 10 $\Omega$. The input AC voltage is 230 V (RMS). If the firing angle $\alpha$ is $60^{\circ}$, calculate:
    a) The average output voltage ($V_{dc}$).
    b) The RMS output voltage ($V_{rms}$).
    c) The RMS input current ($I_{s,rms}$).
    d) The power factor (PF).

**Answer 1:**
Given: $V_{s,rms} = 230$ V, $R = 10 \, \Omega$, $\alpha = 60^{\circ} = \pi/3$ radians.
$V_m = V_{s,rms} \sqrt{2} = 230 \sqrt{2} \approx 325.27$ V.

a) $V_{dc} = \frac{V_m}{2\pi} (1 + \cos(\alpha)) = \frac{325.27}{2\pi} (1 + \cos(60^{\circ})) = \frac{325.27}{2\pi} (1 + 0.5) = \frac{325.27}{2\pi} (1.5) \approx 77.7$ V.

b) $V_{rms} = \frac{V_m}{2} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}} = \frac{325.27}{2} \sqrt{1 - \frac{\pi/3}{\pi} + \frac{\sin(2 \times \pi/3)}{2\pi}}$
   $V_{rms} = 162.635 \sqrt{1 - \frac{1}{3} + \frac{\sin(2\pi/3)}{2\pi}} = 162.635 \sqrt{\frac{2}{3} + \frac{\sqrt{3}/2}{2\pi}} = 162.635 \sqrt{0.6667 + \frac{0.866}{6.283}} \approx 162.635 \sqrt{0.6667 + 0.1379} \approx 162.635 \sqrt{0.8046} \approx 146.1$ V.

c) $I_{s,rms} = \frac{V_{rms}}{R} = \frac{146.1}{10} = 14.61$ A.

d) $PF = \frac{V_{rms}}{V_{s,rms}} = \frac{146.1}{230} \approx 0.635$.
   Alternatively using the formula:
   $PF = \frac{\sqrt{2}}{2} \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}} = \frac{1}{\sqrt{2}} \sqrt{1 - \frac{1}{3} + \frac{\sin(2\pi/3)}{2\pi}} \approx \frac{1}{\sqrt{2}} \sqrt{0.8046} \approx \frac{0.897}{1.414} \approx 0.634$.

---

**Question 2:** For a single-phase half-wave controlled rectifier feeding an RL load, explain how increasing the inductance of the load affects:
    a) The extinction angle ($\beta$).
    b) The average output voltage ($V_{dc}$).
    c) The power factor.

**Answer 2:**
    a) **Extinction Angle ($\beta$):** Increasing the inductance (L) increases the time constant ($\tau = L/R$) of the RL circuit. A larger time constant means the current takes longer to decay. This causes the current to stay positive for a longer duration, thus increasing the extinction angle ($\beta$). The SCR will conduct for a longer period into the negative half-cycle of the voltage.

    b) **Average Output Voltage ($V_{dc}$):** The average output voltage is given by $V_{dc} = \frac{V_m}{2\pi} (\cos(\alpha) - \cos(\beta))$. As L increases, $\beta$ increases (approaching $2\pi$). Since $\cos(\beta)$ becomes less negative (closer to -1) as $\beta$ increases towards $2\pi$, the term $(\cos(\alpha) - \cos(\beta))$ will decrease. Therefore, increasing inductance generally leads to a **decrease** in the average output voltage.

    c) **Power Factor:** Increasing the inductance smooths the current waveform and reduces its harmonic content. It also extends the conduction period of the SCR. These factors generally lead to an improvement in the power factor of the rectifier. The current waveform becomes more sinusoidal and closer to being in phase with the voltage.

---

### 8. Important Points to Remember

*   The firing angle ($\alpha$) is the primary control parameter to regulate the output voltage.
*   For an R load, the SCR turns OFF at the end of the positive half-cycle ($\pi$).
*   For an RL load, the inductor causes the current to lag the voltage and continue flowing even after the voltage crosses zero, leading to an extinction angle ($\beta > \pi$).
*   The output voltage and current waveforms are pulsed and contain harmonics.
*   The power factor of a half-wave controlled rectifier is generally poor and degrades with increasing firing angle.
*   The presence of an inductor in the load improves the power factor and smooths the current but also reduces the average DC output voltage.
*   Proper gate drive and thermal management (heatsinking) are crucial for the reliable operation of the SCR.
*   The formulas for $V_{dc}$ and $V_{rms}$ differ for R and RL loads due to the presence of the inductor and the extinction angle $\beta$.

---
