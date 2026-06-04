---
title: "Emitter Follower Amplifier"
subject: "ANALOG ELECTRONICS LAB"
module: "Module 4: Emitter Follower Amplifier"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d4d"
status: "completed"
scrapedAt: "2026-05-23T16:11:04.257Z"
---
# ANALOG ELECTRONICS LAB: Module 4 - Emitter Follower Amplifier

## Topic: Emitter Follower Amplifier

---

### 1. Introduction to Emitter Follower Amplifier

The emitter follower, also known as a common-collector amplifier, is a fundamental amplifier configuration in Bipolar Junction Transistors (BJTs). It is characterized by its unity voltage gain, high input impedance, and low output impedance, making it an excellent buffer or impedance matching stage.

**Key Concept:** The output voltage follows the input voltage very closely, hence the name "emitter follower."

**Reference:**
*   **Paynter, R. T. (n.d.). *Introductory Electronic Devices and Circuits*. Pearson Education.** - Often covers basic amplifier configurations and their characteristics.
*   **Boylestad, R. L., & Nashelsky, L. (n.d.). *Electronic Devices and Circuit Theory*. Pearson Education.** - A classic text that provides in-depth analysis of BJT amplifier circuits, including the emitter follower.
*   **Neaman, D. A. (n.d.). *Electronic Circuits: Analysis and Design*. McGraw Hill Companies.** - Offers a more analytical approach to amplifier design and analysis.

---

### 2. Circuit Configuration and Operation

The emitter follower circuit is typically configured with the emitter terminal as the output. The collector is usually connected directly to the positive power supply ($V_{CC}$) or through a coupling capacitor. The base is the input terminal, and the emitter is the output terminal. A resistor ($R_E$) is connected from the emitter to ground (or to a negative supply if a split supply is used).

**Basic Circuit Diagram:**

```
      V_CC
       |
       Rc (Collector Resistor - optional in emitter follower)
       |
       B ----> Input Signal (v_in)
      / \
     /   \
    C-----E ----> Output Signal (v_out)
    |     |
    |     R_E
    |     |
   GND   GND
```

**Important Note:** In a pure emitter follower, $R_C$ is often omitted or has a very small value, as its primary function is not voltage gain. The output is taken across $R_E$.

**How it Works:**
*   When an AC input signal ($v_{in}$) is applied to the base, it causes a change in the base-emitter voltage ($v_{be}$).
*   Since the BJT amplifies the base current, a small change in $v_{be}$ results in a larger change in emitter current ($i_e$).
*   This amplified emitter current flows through the emitter resistor ($R_E$).
*   The output voltage ($v_{out}$) is the voltage across $R_E$, which is $i_e \times R_E$.
*   Due to the inherent feedback in the circuit (output voltage is fed back to the emitter), the voltage at the emitter closely follows the voltage at the base.

---

### 3. Key Characteristics and Analysis

**3.1. Voltage Gain ($A_v$)**

The voltage gain of an emitter follower is approximately unity ($A_v \approx 1$).

*   **Derivation (Small-Signal Analysis):**
    *   The output voltage is $v_{out} = i_e \times R_E$.
    *   The emitter current is $i_e = \beta i_b$.
    *   The input voltage is $v_{in} = V_{BB} + v_{ac} + v_{be}$, where $V_{BB}$ is the DC biasing voltage at the base and $v_{ac}$ is the AC input signal. In simpler terms, $v_{in}$ is the AC signal applied to the base.
    *   The voltage at the emitter is $v_{out} = v_{be} + v_{e}$, where $v_e$ is the voltage across $R_E$.
    *   Using small-signal parameters: $v_{out} = i_e R_E$.
    *   Also, $v_{be} = i_b r_{\pi}$, where $r_{\pi}$ is the small-signal input resistance of the BJT.
    *   We know $i_e = i_c + i_b$. For a common-collector configuration, $i_e \approx (\beta + 1)i_b$.
    *   Therefore, $v_{out} = (\beta + 1)i_b R_E$.
    *   The input voltage is effectively $v_{in}$ applied to the base. The voltage at the emitter is related to the input by $v_{out} \approx v_{in}$.
    *   **A more precise expression for voltage gain is:**
        $A_v = \frac{v_{out}}{v_{in}} = \frac{R_E}{R_E + r_e'}$
        where $r_e' = \frac{V_T}{I_E}$ is the intrinsic emitter resistance, and $V_T$ is the thermal voltage ($\approx 25mV$ at room temperature).
    *   Since $R_E$ is usually much larger than $r_e'$, the gain is very close to 1.

*   **Significance:** This near-unity voltage gain means the circuit does not amplify the voltage signal but faithfully reproduces it.

**3.2. Input Impedance ($Z_{in}$)**

The input impedance of an emitter follower is high.

*   **Derivation (Small-Signal Analysis):**
    *   The input impedance seen at the base is $Z_{in(base)} = r_{\pi} + (\beta+1)R_E$.
    *   If there's an external emitter resistor ($R_E$) and an equivalent resistance seen by the emitter ($R_L'$), then the effective resistance at the emitter is $R_{eff(E)} = R_E || R_L'$.
    *   The input impedance seen at the base is $Z_{in(base)} = r_{\pi} + (\beta+1)R_{eff(E)}$.
    *   **To find the input impedance of the entire circuit ($Z_{in}$), we need to consider the source resistance ($R_S$):**
        $Z_{in} = R_S || Z_{in(base)}$
        However, the input impedance of the *stage itself* (what the source "sees") is $Z_{in(stage)} = R_1 || R_2 || Z_{in(base)}$, where $R_1$ and $R_2$ are the biasing resistors. In a simple configuration with no biasing resistors, $Z_{in}$ is just $Z_{in(base)}$.
    *   **A more practical formula for input impedance is:**
        $Z_{in} = r_{\pi} + (\beta+1)(R_E || R_L')$
        where $R_L'$ is the total effective load resistance seen by the emitter.

*   **Significance:** A high input impedance prevents the signal source from being loaded down, ensuring that most of the signal voltage is delivered to the amplifier's input.

**3.3. Output Impedance ($Z_{out}$)**

The output impedance of an emitter follower is low.

*   **Derivation (Small-Signal Analysis):**
    *   The output impedance is determined by the resistance seen looking back into the emitter terminal.
    *   $Z_{out} = r_e' || R_E$
    *   Since $r_e'$ is usually much smaller than $R_E$, the output impedance is approximately equal to $r_e'$.

*   **Significance:** A low output impedance allows the amplifier to drive loads efficiently without significant voltage drop across the amplifier's own output resistance. This is crucial for impedance matching.

**3.4. Current Gain ($A_i$)**

The current gain of an emitter follower is high, approximately equal to $\beta + 1$.

*   **Significance:** It amplifies the input current, which is necessary to drive the output load.

---

### 4. Applications of Emitter Follower

*   **Buffer Stage:** Its primary application is as a buffer to isolate a high-impedance source from a low-impedance load. For example, connecting a high-impedance sensor to a low-impedance amplifier.
*   **Impedance Matching:** It can match a high-impedance source to a low-impedance load, maximizing power transfer.
*   **Driver Stage:** It can be used to drive loads that require significant current, such as audio output stages or relays.
*   **DC Level Shifting:** While not its primary function, it can provide a DC voltage shift due to the DC voltage drop across $R_E$.

---

### 5. Design Considerations and Biasing

**5.1. Choosing $R_E$:**
*   $R_E$ determines the DC emitter current ($I_E$) and influences the output impedance and voltage gain.
*   A larger $R_E$ leads to a larger $I_E$, which reduces $r_e'$ and increases the voltage gain (closer to 1).
*   However, a larger $R_E$ also reduces the maximum available output voltage swing.

**5.2. Choosing Transistor:**
*   Select a transistor with the desired current handling capability and frequency response.
*   The $\beta$ value affects the input impedance.

**5.3. Biasing:**
*   **Fixed Bias:** Simple, but very sensitive to transistor parameters and temperature.
*   **Self-Bias (Voltage Divider Bias):** Most common and provides good stability against variations in $\beta$ and temperature.
*   **Emitter Bias:** Uses a negative supply for $R_E$, offering excellent stability and output swing.

**Example Biasing Circuit (Voltage Divider Bias):**

```
      V_CC
       |
       R_C (optional)
       |
       B ----> Input Signal (v_in)
      / \
     /   \
    C-----E ----> Output Signal (v_out)
    |     |
    R_1   R_E
    |     |
    +-----|----- Ground
    |     R_2
    |     |
   Ground  Ground
```

**Design Steps (for Voltage Divider Bias):**

1.  **Determine DC Emitter Current ($I_E$):** Choose a value based on transistor specifications and desired output swing.
2.  **Calculate $R_E$:** $R_E = \frac{V_E}{I_E}$, where $V_E$ is the desired DC emitter voltage (typically 10-20% of $V_{CC}$ for good stability).
3.  **Set Emitter Voltage ($V_E$):** This sets the DC operating point.
4.  **Set Collector Voltage ($V_C$):** Usually set to be slightly higher than $V_E$ (e.g., $V_C = V_E + 2V_{BE(on)}$). For emitter follower, $V_C$ is often connected to $V_{CC}$ directly or via a small $R_C$.
5.  **Calculate Base Voltage ($V_B$):** $V_B = V_E + V_{BE(on)}$. $V_{BE(on)} \approx 0.7V$.
6.  **Design Voltage Divider:** Choose $R_1$ and $R_2$ to provide $V_B$. The current through the voltage divider should be significantly larger than the base current ($I_B$) to ensure stable biasing. A common rule of thumb is $I_{R2} \approx 10 \times I_B$.
    *   $I_B = I_E / \beta$.
    *   $V_B = I_{R2} \times R_2$.
    *   $V_{CC} - V_B = I_{R1} \times R_1$.
    *   $I_{R1} = I_{R2} + I_{B}$. A simpler approach is to set $R_1 || R_2 \approx R_B$ where $R_B$ is the desired equivalent resistance for the voltage divider.

---

### 6. Practical Implementation and Testing (Relating to Course Outcomes)

**CO1: Use the various electronic instruments and for conducting experiments.**
*   **Oscilloscope:** To observe input and output waveforms, measure amplitude, frequency, and phase shift.
*   **Function Generator:** To provide the input AC signal.
*   **DC Power Supply:** To provide the biasing voltage ($V_{CC}$).
*   **Multimeter:** To measure DC voltages and currents at various points in the circuit.

**CO3: Design and implement amplifier and oscillator circuits using BJT and JFET.**
*   This module directly addresses the "amplifier circuits using BJT" aspect. Students will design an emitter follower circuit based on specifications.

**CO5: Simulate electronic circuits using any circuit simulation software.**
*   **Simulation Tools:** SPICE (LTspice, PSpice, Multisim), etc.
*   Students can design and test the emitter follower virtually before building it on a breadboard. This helps verify design calculations and understand circuit behavior under different conditions.

**Experiment Steps (Typical):**

1.  **Design:** Calculate component values for a desired emitter follower circuit (e.g., target current gain, input impedance, specific output voltage swing).
2.  **Simulation:** Build the circuit in a simulator and verify its characteristics.
3.  **Breadboarding:** Construct the circuit on a breadboard.
4.  **DC Biasing Check:** Measure DC voltages at the base, collector, and emitter to confirm the operating point.
5.  **AC Performance Measurement:**
    *   Apply an AC input signal from the function generator.
    *   Use the oscilloscope to observe the input and output waveforms simultaneously.
    *   Measure the voltage gain ($A_v = V_{out(rms)} / V_{in(rms)}$).
    *   Measure the input impedance (e.g., by observing the voltage drop across a known source resistance).
    *   Measure the output impedance (e.g., by observing the change in output voltage when a load resistor is connected).

---

### 7. Practice Questions and Answers

**Q1. What are the main advantages of an emitter follower compared to a common-emitter amplifier?**

**A1.**
*   **High Input Impedance:** Prevents loading of the signal source.
*   **Low Output Impedance:** Can drive loads efficiently.
*   **Unity Voltage Gain:** Provides a stable, non-amplifying voltage transfer.
*   **Good Current Gain:** Amplifies current.

**Q2. If the emitter resistor ($R_E$) is removed in a typical emitter follower configuration, what will happen to the circuit's operation?**

**A2.**
*   The circuit will still function as an amplifier, but the output will be taken directly from the emitter terminal without the stabilizing effect of $R_E$.
*   The voltage gain will be closer to the intrinsic gain ($A_v \approx \frac{R_L'}{R_L' + r_e'}$), where $R_L'$ is the load resistance. Without $R_E$, $R_L'$ is the external load.
*   The output impedance will be closer to $r_e'$ (and any load impedance) rather than $r_e' || R_E$.
*   The circuit will become much more sensitive to variations in transistor parameters and temperature.
*   The DC operating point will not be stabilized by an emitter resistor.

**Q3. Calculate the voltage gain, input impedance (at the base), and output impedance for an emitter follower with the following parameters:**
*   Transistor: 2N3904 ($V_{BE(on)} \approx 0.7V$, $\beta = 200$)
*   DC Emitter Current ($I_E$): $2mA$
*   Emitter Resistor ($R_E$): $1k\Omega$
*   Load Resistor ($R_L$): $10k\Omega$
*   $V_{CC} = 12V$
*   Biasing Resistors: $R_1 = 47k\Omega$, $R_2 = 10k\Omega$

**A3.**
*   **Intrinsic emitter resistance ($r_e'$):**
    $r_e' = \frac{V_T}{I_E} = \frac{25mV}{2mA} = 12.5\Omega$

*   **Effective emitter resistance ($R_{eff(E)}$):**
    $R_{eff(E)} = R_E || R_L = 1k\Omega || 10k\Omega = \frac{1k \times 10k}{1k + 10k} = \frac{10000}{11} \approx 909.1\Omega$

*   **Voltage Gain ($A_v$):**
    $A_v = \frac{R_{eff(E)}}{R_{eff(E)} + r_e'} = \frac{909.1}{909.1 + 12.5} = \frac{909.1}{921.6} \approx 0.986$

*   **Input impedance at the base ($Z_{in(base)}$):**
    $Z_{in(base)} = r_{\pi} + (\beta+1)R_{eff(E)}$
    First, calculate $r_{\pi}$: $r_{\pi} = \beta \times r_e' = 200 \times 12.5\Omega = 2500\Omega = 2.5k\Omega$
    $Z_{in(base)} = 2500\Omega + (200+1) \times 909.1\Omega = 2500 + 201 \times 909.1 = 2500 + 182729 \approx 185.2k\Omega$

*   **Output impedance ($Z_{out}$):**
    $Z_{out} = r_e' || R_E$ (Looking into the emitter, the source resistance $R_S$ is not considered for the stage's output impedance itself)
    $Z_{out} = 12.5\Omega || 1k\Omega = \frac{12.5 \times 1000}{12.5 + 1000} = \frac{12500}{1012.5} \approx 12.3\Omega$

**Q4. What is the primary role of a voltage divider bias network ($R_1, R_2$) in a typical emitter follower circuit?**

**A4.** The voltage divider network provides a stable DC voltage to the base of the transistor. This stable base voltage, along with the emitter resistor, helps to set and stabilize the DC operating point (quiescent point) of the transistor, making the circuit less sensitive to variations in transistor parameters ($\beta$) and temperature.

---

### 8. Important Points to Remember

*   **Emitter Follower:** Common-collector configuration.
*   **Key Characteristics:** High input impedance, low output impedance, unity voltage gain.
*   **Primary Application:** Buffer stage or impedance matching.
*   **Output is taken from the emitter.**
*   **Voltage Gain ($A_v \approx 1$):** $A_v = \frac{R_E || R_L}{R_E || R_L + r_e'}$
*   **Input Impedance ($Z_{in(base)} \approx (\beta+1)R_{eff(E)}$):** High due to the $(\beta+1)$ multiplication.
*   **Output Impedance ($Z_{out} \approx r_e'$):** Low, making it ideal for driving loads.
*   **Stabilization:** Voltage divider bias is preferred for stable operation.
*   **Safety:** Always verify your circuit design with simulations before connecting to components. Ensure correct polarity of components and power supply.

---

This comprehensive set of notes covers the fundamental aspects of the emitter follower amplifier, its characteristics, design considerations, practical implementation, and aligns with the provided course outcomes.
