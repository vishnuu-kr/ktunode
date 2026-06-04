---
title: "Temperature independent references –band gap reference"
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 3: Two Stage Operational Amplifiers"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff42a"
status: "completed"
scrapedAt: "2026-05-23T18:08:13.935Z"
---
# MIXED SIGNAL CIRCUITS - Module 3: Two Stage Operational Amplifiers

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## Topic: Temperature Independent References – Bandgap Reference

**Course Outcomes Alignment:** This topic directly supports **CO3: Apply the knowledge of amplifiers in the design of two-stage OPAMP**, as a stable voltage reference is crucial for setting bias points and determining performance in operational amplifiers. Understanding bandgap references helps in appreciating how key specifications like input offset voltage and common-mode rejection ratio are influenced by the stability of internal references.

**Learning Outcomes for this Topic:**

*   Understand the need for stable voltage references in integrated circuits.
*   Explain the temperature dependency of semiconductor device parameters.
*   Derive the mathematical basis of the bandgap reference principle.
*   Analyze common bandgap reference circuit topologies.
*   Discuss design considerations for achieving a temperature-independent voltage reference.

---

### 1. The Need for Stable Voltage References in Integrated Circuits

**Key Concept:** Integrated circuits (ICs) rely on stable voltage levels to bias active devices (transistors), define operating points, and establish reference voltages for various circuit functions. Fluctuations in these reference voltages due to external factors like temperature changes can significantly degrade the performance and accuracy of the IC.

**Why are References Needed?**

*   **Biasing of Transistors:** Proper biasing of transistors in amplifiers, current mirrors, and other analog building blocks is essential for linear operation. The stability of the bias voltages directly impacts gain, bandwidth, and distortion.
*   **Setting Operating Points:** In applications like data converters, comparators, and operational amplifiers, precise reference voltages are required to define the thresholds for conversion or amplification.
*   **Current Mirror Stability:** Current mirrors, fundamental building blocks in analog ICs, often use a reference voltage to set a reference current.
*   **Operational Amplifier Performance:** For two-stage operational amplifiers, a stable voltage reference is used to set the bias current for the first stage and the output stage, directly affecting parameters like slew rate, output swing, and DC gain.

**Impact of Unstable References:**

*   **Gain Variation:** Amplifier gain can change with temperature if the biasing is unstable.
*   **Offset Voltage Shifts:** In differential amplifiers and operational amplifiers, temperature-dependent reference voltages can lead to significant input offset voltage variations.
*   **Non-linearity:** Biasing instability can push transistors into non-linear operating regions, causing distortion.
*   **Reduced Accuracy:** In applications like ADCs and DACs, unstable references directly translate to reduced conversion accuracy.

**Textbook Reference:**

*   **Razavi, "Design of Analog CMOS Integrated Circuits" (2/e):** Chapter 1 introduces the fundamental building blocks and the importance of stable bias conditions. While not directly on bandgap references, it sets the stage for why such references are critical.

---

### 2. Temperature Dependency of Semiconductor Device Parameters

**Key Concept:** The behavior of semiconductor devices, particularly bipolar junction transistors (BJTs) and diodes, is inherently temperature-dependent. This dependency arises from the fundamental physics of semiconductor materials.

**Key Parameters and Their Temperature Dependence:**

*   **Bandgap Voltage ($E_g$):** The energy required to move an electron from the valence band to the conduction band. It decreases with increasing temperature. For silicon, $E_g \approx 1.12$ eV at 300K, and its temperature coefficient is approximately $-0.305$ mV/K.
*   **Intrinsic Carrier Concentration ($n_i$):** The concentration of free electrons and holes in an intrinsic semiconductor. $n_i$ increases exponentially with temperature.
*   **Mobility ($\mu$):** The ease with which charge carriers move in a semiconductor. Mobility generally decreases with increasing temperature due to increased lattice scattering.
*   **Forward Voltage Drop of PN Junctions ($V_{BE}$ or $V_D$):** The voltage required to forward-bias a PN junction. For BJTs, the $V_{BE}$ of a forward-biased junction decreases with increasing temperature by approximately -2 mV/K. This is a *negative* temperature coefficient (NTC).

**Mathematical Description (Simplified):**

The forward current ($I_F$) through a diode or a BJT's base-emitter junction is related to the forward voltage ($V_F$) by:

$I_F = I_S \left( e^{\frac{qV_F}{nkT}} - 1 \right)$

where:
*   $I_S$ is the saturation current.
*   $q$ is the elementary charge.
*   $n$ is the ideality factor (typically 1 for diodes, 1-2 for BJTs).
*   $k$ is Boltzmann's constant.
*   $T$ is the absolute temperature.

The saturation current ($I_S$) is strongly dependent on $T^3$ and $e^{-\frac{E_g}{kT}}$. This exponential dependence means that even small changes in temperature can cause significant variations in $I_S$.

**The "Negative" Temperature Coefficient (NTC):**

The primary reason for the temperature dependence of many semiconductor circuits is the negative temperature coefficient of the forward voltage drop of PN junctions. As temperature increases, the junction can be forward-biased with a lower voltage to achieve the same current.

**Textbook Reference:**

*   **Sedra & Smith, "Microelectronic Circuits" (6/e):** Chapter 4 discusses the characteristics of diodes and BJTs, including their temperature dependence. They provide detailed derivations of how $V_{BE}$ and $I_S$ vary with temperature.
*   **Razavi, "Fundamentals of Microelectronics" (Wiley student Edition):** Chapter 3 and 4 cover PN junction diodes and Bipolar Junction Transistors, respectively, with a focus on their DC characteristics and temperature effects.

---

### 3. The Mathematical Basis of the Bandgap Reference Principle

**Key Concept:** A bandgap reference circuit aims to generate a voltage that is largely independent of temperature by summing or combining signals that have opposite temperature coefficients. Specifically, it exploits the negative temperature coefficient (NTC) of a forward-biased PN junction and combines it with a signal that has a positive temperature coefficient (PTC).

**The Core Idea:**

The $V_{BE}$ of a BJT exhibits a strong negative temperature coefficient (NTC) of approximately -2 mV/K. If we can generate a voltage with a proportional positive temperature coefficient (PTC), their sum can be made temperature-independent.

**Generating a PTC Voltage:**

A voltage with a PTC can be generated by taking the difference in $V_{BE}$ between two BJTs operating at different current densities. This difference is proportional to $\ln(\frac{I_{C1}}{I_{C2}})$. Since the current ratios can be designed to be constant (using current mirrors), this difference voltage is proportional to $\ln(\text{constant})$, which is zero and thus temperature-independent. However, to get a PTC, we need to relate this to a *current* that has a PTC.

Consider two BJTs operating at different current densities. Let them be biased with currents $I_{C1}$ and $I_{C2}$.

*   $V_{BE1} = V_{T} \ln(\frac{I_{C1}}{I_S}) = \frac{kT}{q} \ln(\frac{I_{C1}}{I_S})$
*   $V_{BE2} = V_{T} \ln(\frac{I_{C2}}{I_S}) = \frac{kT}{q} \ln(\frac{I_{C2}}{I_S})$

where $V_T = \frac{kT}{q}$ is the thermal voltage, which is proportional to temperature.

Now consider the difference in their $V_{BE}$ values:

$V_{BE1} - V_{BE2} = V_{T} \ln(\frac{I_{C1}}{I_{C2}})$

If $I_{C1}$ and $I_{C2}$ are kept constant by current mirrors (which themselves might have some temperature dependence, but less severe than $V_{BE}$), the term $\ln(\frac{I_{C1}}{I_{C2}})$ is a constant. Therefore, the difference voltage $(V_{BE1} - V_{BE2})$ is proportional to $V_T$, which is proportional to temperature (PTC).

Let's denote this PTC voltage as $V_{PTC}$.

$V_{PTC} = V_{BE1} - V_{BE2} = \frac{kT}{q} \ln(\frac{I_{C1}}{I_{C2}})$

The NTC voltage is simply the $V_{BE}$ of a BJT biased at a suitable current. Let's call this $V_{NTC} = V_{BE}$ (biased at a specific current).

The bandgap voltage ($V_{BG}$) can be expressed as the sum of these two voltages:

$V_{BG} = V_{NTC} + \alpha V_{PTC}$

where $\alpha$ is a scaling factor.

$V_{BG} = V_{BE} + \alpha \frac{kT}{q} \ln(\frac{I_{C1}}{I_{C2}})$

The goal is to choose the bias currents ($I_{C1}$, $I_{C2}$) and the current for the NTC device such that the temperature dependence of $V_{BE}$ cancels out the temperature dependence of $\alpha \frac{kT}{q} \ln(\frac{I_{C1}}{I_{C2}})$.

**Deriving the Reference Voltage:**

A commonly used approach is to create a voltage that is a combination of a base-emitter voltage and a voltage proportional to the thermal voltage.

Consider two BJTs, Q1 and Q2, with emitters connected to ground. Q1 is biased at a current $I_1$, and Q2 is biased at a current $I_2$. Q1's collector current is $I_{C1} = I_1$, and Q2's collector current is $I_{C2} = I_2$. The current mirror formed by Q3 and Q4 replicates $I_{C1}$ to bias a resistor $R_1$, and $I_{C2}$ to bias a resistor $R_2$.

*   $V_{BE1} = V_T \ln(\frac{I_1}{I_S})$ (NTC term)
*   $V_{BE2} = V_T \ln(\frac{I_2}{I_S})$

The voltage across $R_1$ is $V_{R1} = I_{C3} R_1 = I_1 R_1$.
The voltage across $R_2$ is $V_{R2} = I_{C4} R_2 = I_2 R_2$.

Let's consider a circuit where the voltage across $R_2$ is connected in series with $V_{BE1}$, and this sum is fed back to the base of Q2.

Node voltage at base of Q2 = $V_{BE1} + V_{R2} = V_{BE1} + I_2 R_2$.
This node voltage is also equal to $V_{BE2}$ (since they share the same base potential).

$V_{BE2} = V_{BE1} + I_2 R_2$

Substitute the $V_{BE}$ expressions:

$V_T \ln(\frac{I_2}{I_S}) = V_T \ln(\frac{I_1}{I_S}) + I_2 R_2$

$V_T \left[ \ln(\frac{I_2}{I_S}) - \ln(\frac{I_1}{I_S}) \right] = I_2 R_2$

$V_T \ln(\frac{I_2}{I_1}) = I_2 R_2$

$\frac{kT}{q} \ln(\frac{I_2}{I_1}) = I_2 R_2$

This equation relates the currents, temperature, and resistance. It implies that for this specific circuit configuration to achieve the intended biasing, the ratio $I_2/I_1$ must be chosen such that this equation holds at a specific temperature.

The output voltage is often taken across a resistor $R_{out}$ that is biased by a current derived from the $V_{PTC}$ term. A common reference voltage is around 1.2V, which is close to the silicon bandgap voltage.

**The "Standard" Bandgap Reference Structure:**

A more practical approach involves:
1.  Generating a PTC voltage: $\Delta V_{BE} = V_{BE1} - V_{BE2} = \frac{kT}{q} \ln(\frac{I_{C1}}{I_{C2}})$.
2.  Biasing a resistor $R$ with a current that is proportional to the NTC voltage ($V_{BE}$). This current will have a PTC.
3.  Summing the PTC voltage with the voltage across the resistor (which has a PTC derived from the PTC current).

A simplified derivation for the reference voltage ($V_{ref}$):

Let Q1 be biased at a high current density, and Q2 at a lower current density. Let the emitter areas be different to achieve the same current density. Assume Q1 and Q2 have emitter areas $A_1$ and $A_2$ respectively, and are biased with the same current $I$.

*   $V_{BE1} = \frac{kT}{q} \ln(\frac{I}{I_S A_1})$
*   $V_{BE2} = \frac{kT}{q} \ln(\frac{I}{I_S A_2})$

$V_{PTC} = V_{BE1} - V_{BE2} = \frac{kT}{q} \ln(\frac{A_2}{A_1})$

Let a resistor $R$ be connected to the base of Q2, and this resistor is biased by a current $I_{bias}$ which is proportional to $V_{BE1}$.

$I_{bias} = \frac{V_{BE1}}{R_{bias}}$

The voltage across this resistor is $V_R = I_{bias} R = \frac{V_{BE1}}{R_{bias}} R$. This voltage has a PTC.

The output reference voltage is often designed as:

$V_{ref} = V_{BE1} + K \cdot V_{PTC} = V_{BE1} + K \frac{kT}{q} \ln(\frac{A_2}{A_1})$

where $K$ is a scaling factor (often achieved by resistors).

To make the reference voltage temperature-independent, the derivative of $V_{ref}$ with respect to temperature must be zero.

$\frac{dV_{ref}}{dT} = \frac{dV_{BE1}}{dT} + K \frac{d}{dT} (\frac{kT}{q} \ln(\frac{A_2}{A_1}))$

We know $\frac{dV_{BE}}{dT} \approx -2$ mV/K.
And $\frac{d}{dT} (\frac{kT}{q} \ln(\frac{A_2}{A_1})) = \frac{1}{q} \ln(\frac{A_2}{A_1})$.

So, $-2 \text{ mV/K} + K \frac{1}{q} \ln(\frac{A_2}{A_1}) = 0$.

This implies $K \frac{1}{q} \ln(\frac{A_2}{A_1}) = 2 \text{ mV/K}$.

This equation shows that by choosing the ratio of emitter areas ($A_2/A_1$) and the scaling factor $K$ (which is controlled by resistor ratios), we can cancel out the temperature dependence. The resulting voltage will be close to the silicon bandgap voltage (around 1.2V).

**Textbook Reference:**

*   **Razavi, "Design of Analog CMOS Integrated Circuits" (2/e):** Chapter 12 covers voltage references, including detailed analysis of bandgap references and their operation. He presents several common circuit topologies.
*   **Baker, Li, Boyce, "CMOS: Circuits Design, Layout and Simulation" (2000):** Chapter 14 discusses the design of voltage regulators and references, including bandgap references and their design equations.
*   **Sedra & Smith, "Microelectronic Circuits" (6/e):** While the primary focus is on op-amps, they do discuss fundamental concepts relevant to references. Chapter 11 on current mirrors is crucial for understanding how the bias currents are generated.

---

### 4. Common Bandgap Reference Circuit Topologies

**Key Concept:** Various circuit configurations exist to implement the bandgap reference principle, each with its own advantages and disadvantages in terms of performance, power consumption, and area.

**Common Topologies:**

**a) Brokaw Bandgap Reference (Simplified Concept):**
This is a classic and widely used topology. It uses the difference between two $V_{BE}$s to generate a PTC voltage and combines it with a $V_{BE}$ term.

**Circuit Elements:**

*   **Two BJTs (Q1, Q2):** Q1 has a larger emitter area than Q2. They are biased with the same current $I$ using a current mirror.
*   **Current Mirror (Q3, Q4):** Biases Q1 and Q2 with current $I$.
*   **Resistor (R1):** Connected to the collector of Q1. Voltage across R1 = $I \cdot R_1$.
*   **Resistor (R2):** Connected to the collector of Q2. Voltage across R2 = $I \cdot R_2$.
*   **Output Node:** The reference voltage is often taken from the collector of Q2, or a scaled version thereof.

**Operation:**

1.  Q1 and Q2 are biased with the same current $I$.
2.  $V_{BE1} = \frac{kT}{q} \ln(\frac{I}{I_S A_1})$
3.  $V_{BE2} = \frac{kT}{q} \ln(\frac{I}{I_S A_2})$
4.  $V_{PTC} = V_{BE2} - V_{BE1} = \frac{kT}{q} \ln(\frac{A_1}{A_2})$ (Assuming $A_1 > A_2$).
5.  The voltage across R2 is $V_{R2} = I \cdot R_2$.
6.  The reference voltage is taken at the collector of Q2. Node voltage $V_C2 = V_{BE2} + V_{R1}$. However, this is not the standard Brokaw.

**Standard Brokaw Structure:**

*   Q1 and Q2 are biased with current $I$ from a current mirror.
*   Q1 has a larger emitter area.
*   $V_{BE1}$ and $V_{BE2}$ are the base-emitter voltages.
*   The collector of Q1 is connected to the base of Q2 through resistor $R_1$.
*   The collector of Q2 is connected to ground through resistor $R_2$.
*   The output voltage $V_{ref}$ is taken at the junction of $R_1$ and the collector of Q1.

$V_{BE2} = V_{BE1} + I \cdot R_1$
$V_T \ln(\frac{I}{I_S A_2}) = V_T \ln(\frac{I}{I_S A_1}) + I \cdot R_1$
$V_T \ln(\frac{A_1}{A_2}) = I \cdot R_1$

The output voltage $V_{ref}$ is at the collector of Q2.
$V_{ref} = V_{BE2} + I \cdot R_2$

We need to select $A_1, A_2, I, R_1, R_2$ such that the temperature derivative of $V_{ref}$ is zero.

**b) McGregor Bandgap Reference:**
This topology is similar to the Brokaw but uses different resistor placement and biasing.

**c) CMOS Implementations:**
While the principle is derived from BJTs, bandgap references can be implemented in CMOS using parasitic bipolar transistors inherent in the CMOS process, or by using specialized bipolar transistors fabricated alongside CMOS.

*   **Parasitic BJTs:** Many CMOS processes have buried or substrate BJTs that can be utilized.
*   **BiCMOS Process:** Dedicated bipolar transistors are available for higher performance.

**CMOS Bandgap Structure Example (Conceptual):**

A PMOS current mirror sets a bias current. This current is used to bias a resistor. The voltage across this resistor (PTC) is added to the $V_{BE}$ of a parasitic BJT (NTC). The output is taken from the collector of the BJT or a scaled version.

**Important Considerations for Topologies:**

*   **PTC Voltage Generation:** How the difference in $V_{BE}$s is created.
*   **NTC Voltage Source:** Which device provides the $V_{BE}$ component.
*   **Resistor Values:** Crucial for setting the correct ratios and canceling temperature dependence. Resistors can be large, impacting chip area.
*   **Current Mirror Accuracy:** The accuracy of the current mirrors affects the PTC voltage generation.
*   **Output Voltage Scaling:** How the raw bandgap voltage is scaled to the desired reference voltage.
*   **Startup Circuit:** Bandgap references are bistable and need a startup circuit to ensure they settle to the desired operating point.
*   **PSRR (Power Supply Rejection Ratio):** How well the output voltage rejects variations in the supply voltage.

**Textbook Reference:**

*   **Razavi, "Design of Analog CMOS Integrated Circuits" (2/e):** Chapter 12 provides detailed schematics and analyses of various bandgap reference topologies, including the Brokaw cell and CMOS implementations.
*   **Allen & Holbery, "CMOS Analog Circuit Design" (3/e):** Chapter 13 discusses voltage references, including bandgap references, and their design in CMOS technology.

---

### 5. Design Considerations for Achieving a Temperature-Independent Voltage Reference

**Key Concept:** Achieving a truly temperature-independent reference requires careful selection of component values, consideration of process variations, and minimization of parasitic effects.

**Key Design Factors:**

*   **Choice of Bipolar Transistors:**
    *   **Emitter Area Ratio:** Crucial for generating the correct PTC voltage. Often requires a ratio of 10:1 or higher.
    *   **Current Density:** Operating at moderate current densities to avoid self-heating and high-field effects.
*   **Resistor Design:**
    *   **Temperature Coefficient of Resistors (TCR):** Standard resistors in IC processes can have their own temperature dependence. Choosing polysilicon resistors with low TCR is preferred.
    *   **Matching:** Resistors used in current mirrors and scaling should be well-matched.
    *   **Area vs. Value:** High-value resistors can consume significant area.
*   **Current Mirror Design:**
    *   **Channel Length Modulation:** Can introduce errors in current replication. Cascode current mirrors can improve this.
    *   **Offset Matching:** Mismatches in transistor sizes and threshold voltages in the current mirror can affect the PTC voltage.
*   **Output Voltage Scaling:**
    *   Using voltage dividers (resistors) to scale the combined PTC and NTC voltage to the desired output. The ratio of these resistors is critical.
*   **Startup Circuit:**
    *   Bandgap references can have two stable states: one where the circuit is off, and one where it's on. A startup circuit (e.g., using a weak current source or a Schmitt trigger) is needed to push the circuit into the desired state.
*   **Power Supply Rejection Ratio (PSRR):**
    *   Design techniques like cascoded current mirrors and filtering can improve PSRR.
*   **Noise:**
    *   Bandgap references can be noisy due to the thermal noise of resistors and flicker noise of transistors. Filtering or using larger devices can mitigate this.
*   **Process Variations:**
    *   Variations in doping concentrations, oxide thicknesses, and lithography can affect transistor parameters and resistor values. Monte Carlo simulations and design centering are important.
*   **Startup Behavior:**
    *   The reference needs to start up reliably when power is applied.
*   **Power Consumption:**
    *   Balancing performance (stability, noise) with power consumption is a trade-off.

**Example Design Strategy:**

1.  **Choose output voltage:** e.g., 1.2V.
2.  **Select BJT configuration:** Use two BJTs, one with a larger emitter area.
3.  **Determine $V_{BE}$ and $V_{PTC}$:** Typically aim for $V_{BE} \approx 700$ mV and $V_{PTC} \approx 100-200$ mV.
4.  **Calculate current $I$:** Choose a current that is sufficient for the BJTs to operate in the forward active region without excessive power. A current in the $\mu$A to mA range is typical.
5.  **Select Resistor $R_1$ (for $V_{PTC}$):** $R_1 = \frac{V_{PTC}}{I}$ (if $V_{PTC}$ is generated across $R_1$).
6.  **Select resistor $R_{out}$ (for scaling/output):** The output voltage is typically $V_{ref} = V_{BE} + V_{PTC\_scaled}$.
    *   If $V_{ref} = V_{BE} + K \cdot V_{PTC}$, then $K$ is determined by resistor ratios.
    *   To get 1.2V from a 700mV $V_{BE}$ and 100mV $V_{PTC}$, we need $1.2 = 0.7 + K \cdot 0.1$, so $K=5$.
7.  **Startup Circuit Design:** Incorporate a robust startup circuit.

**Textbook Reference:**

*   **Razavi, "Design of Analog CMOS Integrated Circuits" (2/e):** Chapter 12 delves into design considerations, trade-offs, and practical aspects of bandgap references.
*   **Meyer Gray, Hurst, Lewis, "Analysis and Design of Analog Integrated Circuits" (5/e):** Chapter 12 on temperature compensation and references would provide valuable insights into design considerations and stability.

---

### Practice Questions and Answers

**Question 1:**
Explain why a stable voltage reference is essential for the proper operation of a two-stage operational amplifier. What specific parameters of the op-amp can be affected by an unstable reference voltage?

**Answer 1:**
A stable voltage reference is essential for setting the bias currents and operating points of transistors within the operational amplifier. This stability is crucial for maintaining consistent performance across varying environmental conditions, especially temperature. Parameters affected by an unstable reference include:
*   **Input Offset Voltage ($V_{OS}$):** Variations in bias currents due to unstable references can lead to mismatches in the input differential pair, causing a significant shift in $V_{OS}$.
*   **DC Gain ($A_{VO}$):** The DC gain is proportional to the transconductance ($g_m$) of the input transistors and the output resistance of the stages. If the bias currents change, $g_m$ changes, thus affecting the DC gain.
*   **Slew Rate (SR):** Slew rate is often limited by the charging/discharging of an internal compensation capacitor by a bias current. An unstable reference leads to a temperature-dependent slew rate.
*   **Output Voltage Swing:** The maximum and minimum achievable output voltages are determined by the supply rails and the bias currents. Changes in bias currents will alter the output swing.
*   **Common-Mode Rejection Ratio (CMRR):** CMRR is dependent on the matching of the differential input stage and the tail current source. An unstable tail current reference can degrade CMRR.

---

**Question 2:**
Describe the fundamental principle behind a bandgap reference circuit. What two types of temperature-dependent signals are typically combined, and how are they generated?

**Answer 2:**
The fundamental principle of a bandgap reference is to generate a voltage that is largely independent of temperature by combining signals that have opposite temperature coefficients (TCs).

1.  **Negative Temperature Coefficient (NTC) Signal:** This is typically the forward voltage drop of a bipolar junction transistor (BJT) across its base-emitter junction ($V_{BE}$). As temperature increases, $V_{BE}$ decreases (approximately -2 mV/K). This is generated by biasing a BJT with a specific current.

2.  **Positive Temperature Coefficient (PTC) Signal:** This signal is generated by taking the difference between the base-emitter voltages of two BJTs operating at different current densities. Since the thermal voltage ($V_T = kT/q$) is proportional to temperature, the difference voltage $\Delta V_{BE} = V_{BE1} - V_{BE2} = \frac{kT}{q} \ln(\frac{I_{C1}}{I_{C2}})$ has a positive temperature coefficient. The different current densities are achieved by biasing BJTs with different currents or by using BJTs with different emitter areas.

By summing these two signals with appropriate scaling factors, their temperature dependencies can cancel each other out, resulting in a nearly constant output voltage, close to the silicon bandgap voltage (approx. 1.2V).

---

**Question 3:**
Consider a simple bandgap reference circuit where the output voltage $V_{ref}$ is approximated by $V_{ref} = V_{BE} + K \cdot V_T$, where $V_{BE}$ is the base-emitter voltage of a BJT and $V_T = kT/q$ is the thermal voltage. If $V_{BE}$ has a temperature coefficient of $-2$ mV/K and $V_T$ has a temperature coefficient of $+0.085$ mV/K (at 300K), what value of $K$ is required to make $V_{ref}$ temperature-independent?

**Answer 3:**
We are given:
$V_{ref} = V_{BE} + K \cdot V_T$

To make $V_{ref}$ temperature-independent, its derivative with respect to temperature must be zero:
$\frac{dV_{ref}}{dT} = \frac{dV_{BE}}{dT} + K \cdot \frac{dV_T}{dT} = 0$

We are given:
$\frac{dV_{BE}}{dT} = -2$ mV/K
$\frac{dV_T}{dT} = +0.085$ mV/K

Substitute these values into the equation:
$-2 \text{ mV/K} + K \cdot (0.085 \text{ mV/K}) = 0$

$K \cdot (0.085 \text{ mV/K}) = 2 \text{ mV/K}$

$K = \frac{2}{0.085} \approx 23.53$

Therefore, a value of $K \approx 23.53$ is required to make the reference voltage temperature-independent.

---

### Important Points to Remember

*   **NTC vs. PTC:** Bandgap references work by canceling out the negative temperature coefficient of a PN junction voltage with a positive temperature coefficient derived from the thermal voltage.
*   **Silicon Bandgap:** The output voltage of a bandgap reference is approximately equal to the bandgap voltage of silicon, which is about 1.2V at room temperature.
*   **BJT Dependence:** The core components are BJTs, though CMOS implementations use parasitic BJTs or BiCMOS processes.
*   **Resistors are Key:** Resistors play a crucial role in biasing, creating current densities, and scaling voltages. Their own temperature coefficients and matching properties are important.
*   **Startup Circuit:** Bandgap references are bistable, necessitating a startup circuit.
*   **Trade-offs:** Design involves trade-offs between stability, power consumption, area, and noise.
*   **Op-Amp Integration:** A stable bandgap reference is vital for setting stable bias conditions in operational amplifiers, directly impacting their DC accuracy and dynamic performance.

---

This concludes the study notes for Module 3, Topic: Temperature Independent References – Bandgap Reference. These notes provide a foundational understanding of bandgap references and their relevance to the design of operational amplifiers.