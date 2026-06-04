---
title: "Band gap References- Supply Independent Biasing,"
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 3: Two Stage Operational Amplifiers"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff429"
status: "completed"
scrapedAt: "2026-05-23T18:08:13.111Z"
---
# Mixed Signal Circuits - Module 3: Two Stage Operational Amplifiers

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## Topic: Bandgap References - Supply Independent Biasing

This topic explores the fundamental principles and design considerations for creating voltage references that are largely independent of power supply variations, a critical component in many mixed-signal integrated circuits.

---

### 1. Introduction to Voltage References and their Importance

*   **What is a Voltage Reference?** A voltage reference is an electronic circuit designed to produce a stable, constant output voltage that is insensitive to changes in input voltage, temperature, and load current.
*   **Why are Voltage References Important in Mixed-Signal Circuits?**
    *   **Analog-to-Digital Converters (ADCs):** ADCs require a stable reference voltage for accurate quantization of analog signals. Variations in the reference voltage directly translate to errors in the digital output. (Relates to CO5)
    *   **Digital-to-Analog Converters (DACs):** Similar to ADCs, DACs rely on a stable reference voltage to define the full-scale output range.
    *   **Bias Generation:** Many analog circuits, including amplifiers and current mirrors within op-amps, require stable bias voltages and currents. A good voltage reference enables stable bias generation. (Relates to CO2, CO3)
    *   **Comparators:** Comparators need a stable reference threshold for reliable operation.
    *   **Crystal Oscillators:** Frequency stability of oscillators can be influenced by supply variations, and a stable reference can help in controlling this.
    *   **Precision Measurements:** Any circuit requiring precise voltage levels will necessitate a voltage reference.

---

### 2. The Need for Supply-Independent Biasing

*   **Problem with Direct Supply Connection:** Directly connecting bias circuits to the power supply (Vdd) makes them highly susceptible to supply voltage fluctuations. This is undesirable as it leads to unstable circuit operation.
*   **Goal of Supply-Independent Biasing:** To create bias voltages and currents that remain constant even when the supply voltage (Vdd) or its variations are present.
*   **Relationship to Op-Amp Design:** Stable biasing is crucial for the performance of the amplifier stages within a two-stage op-amp. Without it, parameters like gain, slew rate, and output swing would vary with the supply, rendering the op-amp unreliable. (Directly relates to CO3)

---

### 3. The Bandgap Voltage Reference (BGR) Concept

The Bandgap Reference (BGR) is a widely used technique to generate a voltage reference that is inherently stable over temperature and supply variations. It leverages the properties of semiconductor junctions.

#### 3.1 Key Principles of BGR

*   **Two Complementary Temperature Coefficients:** The BGR circuit combines two voltages with opposite temperature dependencies:
    *   **Voltages with Negative Temperature Coefficient (NTC):** Typically derived from the forward voltage drop of a PN junction (like a BJT's base-emitter junction). As temperature increases, the forward voltage drop decreases (e.g., $V_{BE}$ of a BJT decreases by about 2mV/°C).
    *   **Voltages with Positive Temperature Coefficient (PTC):** Typically derived from a voltage proportional to absolute temperature (PTAT). This voltage increases linearly with absolute temperature.

*   **Summation for Temperature Compensation:** By summing these two complementary voltages with appropriate weighting, a resulting voltage can be achieved that has a near-zero temperature coefficient.

#### 3.2 The "Bang-Bang" Behavior of Semiconductor Junctions (PTAT Voltage)

*   **BJT $V_{BE}$:** The base-emitter voltage ($V_{BE}$) of a bipolar junction transistor (BJT) is approximately given by:
    $V_{BE} = \frac{kT}{q} \ln(\frac{I_C}{I_S})$
    where:
    *   $k$ is Boltzmann's constant
    *   $T$ is absolute temperature
    *   $q$ is the elementary charge
    *   $I_C$ is the collector current
    *   $I_S$ is the saturation current

*   **Generating PTAT:** To create a voltage proportional to absolute temperature (PTAT), we can exploit the relationship between $V_{BE}$ and temperature. Consider two BJTs operating at different current densities.
    *   Let BJT1 have a current density $J_1$ and BJT2 have a current density $J_2$.
    *   $V_{BE1} = \frac{kT}{q} \ln(\frac{I_{C1}}{I_{S1}})$
    *   $V_{BE2} = \frac{kT}{q} \ln(\frac{I_{C2}}{I_{S2}})$

    If we force the collector currents $I_{C1}$ and $I_{C2}$ to be proportional to the saturation currents $I_{S1}$ and $I_{S2}$ respectively, and the emitter areas are different, we can generate a PTAT voltage. A more common approach is to use two BJTs with the *same* current but *different* emitter areas.
    *   Let $A_1$ and $A_2$ be the emitter areas of two BJTs, where $A_2 = N \cdot A_1$ ($N > 1$).
    *   Assume both BJTs are biased with the same collector current $I_C$.
    *   $V_{BE1} = V_T \ln(\frac{I_C}{I_{S1}})$
    *   $V_{BE2} = V_T \ln(\frac{I_C}{I_{S2}})$
    *   $I_S$ is proportional to emitter area. So, $I_{S2} = N \cdot I_{S1}$.
    *   $V_{BE1} - V_{BE2} = V_T \ln(\frac{I_C}{I_{S1}}) - V_T \ln(\frac{I_C}{I_{S2}})$
    *   $V_{BE1} - V_{BE2} = V_T \ln(\frac{I_C}{I_{S1}} \cdot \frac{I_{S2}}{I_C})$
    *   $V_{BE1} - V_{BE2} = V_T \ln(\frac{I_{S2}}{I_{S1}})$
    *   $V_{BE1} - V_{BE2} = V_T \ln(N)$
    *   Since $V_T = \frac{kT}{q}$, the difference $V_{BE1} - V_{BE2}$ is proportional to absolute temperature ($V_T$). This difference is a PTAT voltage.

*   **Reference:** Sedra & Smith, 6/e, Chapter 10.3.3 (Bandgap Voltage Reference) discusses this principle extensively.

#### 3.3 Generating a Compensating Voltage

*   **BJT $V_{BE}$ as the NTC Component:** The $V_{BE}$ voltage of a BJT exhibits a negative temperature coefficient.
*   **Combining PTAT and NTC:** A common way to achieve a temperature-compensated voltage is to sum a PTAT voltage with a scaled version of the $V_{BE}$ voltage.
    $V_{REF} = V_{PTAT} + \alpha \cdot V_{BE}$
    where $\alpha$ is a scaling factor.
    For $V_{REF}$ to be temperature-independent, its derivative with respect to temperature must be zero:
    $\frac{dV_{REF}}{dT} = \frac{dV_{PTAT}}{dT} + \alpha \cdot \frac{dV_{BE}}{dT} = 0$
    Since $\frac{dV_{PTAT}}{dT} \approx \frac{k}{q}$ (or $V_T/T$) and $\frac{dV_{BE}}{dT} \approx -2mV/°C$ (or approximately $-1.7mV/°C$ for typical bias currents), we can solve for $\alpha$:
    $\alpha = -\frac{dV_{PTAT}/dT}{dV_{BE}/dT}$
    Typically, the PTAT voltage derived from $V_{BE1}-V_{BE2}$ is around 100-200mV at room temperature. The $V_{BE}$ is around 700mV. To get a reference voltage around 1.2-1.3V, we need to scale $V_{BE}$ and add it to the PTAT voltage.
    A common approach is to generate a reference voltage of approximately $V_{REF} \approx V_{BE} + N \cdot V_T \ln(M)$, where $N$ and $M$ are scaling factors derived from emitter area ratios and current mirrors.

*   **Example of a Basic BGR Circuit (Conceptual):**
    1.  Two BJTs with different emitter areas ($A_1, A_2$) are biased by identical currents.
    2.  The difference in their $V_{BE}$ ($V_{BE1} - V_{BE2}$) is a PTAT voltage.
    3.  This PTAT voltage is amplified (scaled) using resistors and a current mirror.
    4.  A BJT's $V_{BE}$ (with an NTC) is used as the second component.
    5.  Resistors are used to scale and sum the PTAT and NTC voltages to achieve a temperature-compensated output.

    *   **Reference:** Razavi, "Design of Analog CMOS Integrated Circuits," 2/e, Chapter 10 (Voltage References) provides excellent examples of BGR circuits.

#### 3.4 Supply Independence of BGRs

While BGRs are designed for temperature stability, they also exhibit good supply independence.

*   **How Supply Variations Affect BGRs:**
    *   **PTAT Component:** The PTAT voltage generation ($V_{BE1} - V_{BE2}$) relies on the difference of $V_{BE}$ terms, each of which is proportional to $V_T$. As long as the collector currents for the BJTs remain relatively constant, the PTAT voltage will be largely supply independent.
    *   **NTC Component:** The $V_{BE}$ voltage itself is generally less sensitive to supply variations than a directly biased voltage, especially when generated through specific circuit topologies.
    *   **Biasing Current:** The crucial factor for supply independence is ensuring the currents used to bias the BJTs in the PTAT generation stage remain constant despite supply variations. This is often achieved using a **Widlar current source** or a **Wilson current mirror** biased by a current that itself is derived from a stable reference, or by cleverly using feedback.

*   **Achieving Supply Independence:**
    *   **Current Mirror Biasing:** The currents for the PTAT generation circuit and the $V_{BE}$ device are typically set by current mirrors. If the reference current for these mirrors is stable, the bias currents will also be stable.
    *   **Feedback for Stability:** The overall BGR circuit can be designed with negative feedback loops to ensure the output voltage remains stable against supply changes.
    *   **Common-Base Amplifier Structure:** Some BGR designs use a common-base amplifier configuration to buffer the output and provide current gain, which can contribute to supply independence.

*   **Example of Supply Independent Biasing for BGR:**
    Consider a simple BJT current source feeding the PTAT generation resistors. If this current source is powered directly from Vdd, it will vary with Vdd. To make it supply-independent, we can derive the bias current from the BGR output itself, or from a dedicated voltage reference earlier in the chain. A common technique involves using a current mirror whose reference current is generated by a PTAT voltage divided by a resistor, which is then fed back to bias the PTAT generation stage.

    *   **Reference:** Baker, Li, Boyce, "CMOS: Circuits Design, Layout and Simulation," Chapter 14 (Basic Analog Circuits) discusses current mirrors and their applications, relevant to stable biasing.

---

### 4. Practical Implementation Aspects and Circuit Topologies

#### 4.1 CMOS Implementation of BGRs

While BJTs are often used for their inherent $V_{BE}$ properties, CMOS implementations are also common in mixed-signal ICs.

*   **CMOS BGRs:** These often mimic the BJT BGR principles by generating PTAT and NTC voltages using MOS transistors.
    *   **PTAT in CMOS:** Achieved by exploiting the difference in $V_{GS}$ of MOS transistors operating at different current densities or with different gate-oxide areas. For example, using two transistors with the same drain current but different widths ($W$) can yield a PTAT-like difference in $V_{GS}$. Or, by using a parasitic BJT formed in the CMOS process.
    *   **NTC in CMOS:** The $V_{GS}$ of a MOS transistor operating in saturation does exhibit a temperature dependency, though it's different from BJT $V_{BE}$. It generally has a negative temperature coefficient.

*   **Reference:** Allen & Holbery, "CMOS Analog Circuit Design," 3/e, Chapter 11 (Voltage and Current References) provides detailed CMOS BGR designs.

#### 4.2 Basic Circuit Topologies

*   **Widlar BJT Current Source:** A classic current source that uses a single resistor to achieve a large output impedance and thus a stable current, even with a low supply voltage. This can be used for biasing the BGR core.
    *   **Formula:** $I_{out} \approx V_T / R_E$ (for a specific configuration).
    *   **Reference:** Sedra & Smith, 6/e, Chapter 9.3.2 (The Widlar Current Source).

*   **Wilson Current Mirror:** A higher performance current mirror than the basic one, offering better output impedance and current matching. Useful for the current mirrors within the BGR to ensure accurate current replication.
    *   **Reference:** Sedra & Smith, 6/e, Chapter 9.3.1 (The Wilson Current Mirror).

*   **Basic BGR Structure (Conceptual Example):**
    1.  **Current Generation:** A stable current is generated (e.g., using a Widlar source).
    2.  **PTAT Generation:** This current is split to bias two BJTs with different emitter areas ($A_1, A_2$), generating $V_{BE1}$ and $V_{BE2}$. The difference $V_{BE1} - V_{BE2}$ is PTAT.
    3.  **Resistor Network:** Resistors are used to scale the PTAT voltage and sum it with a scaled $V_{BE}$ (NTC component).
    4.  **Output Buffer/Amplifier:** The combined voltage is often buffered by an op-amp or a common-base amplifier to provide a low output impedance.

#### 4.3 Supply Independent Biasing Techniques within BGRs

*   **Self-Biasing:** The BGR output voltage itself can be used as a reference to bias its own current generation circuits. This creates a feedback loop for supply stabilization.
*   **Cascaded References:** A simple voltage reference might be used to bias a more complex, supply-independent BGR.
*   **Current Mirrors with Supply-Insensitive Bias:** Designing current mirrors whose reference current is not directly taken from Vdd but from a stable internal node or a PTAT-derived current.

---

### 5. Bandgap References and Op-Amp Design (Relating to CO3)

*   **Stable Bias for Op-Amp Stages:** The output of a BGR (e.g., ~1.25V) is often used to generate the stable bias voltages and currents required for the input differential pair and the output stage of a two-stage op-amp.
*   **Current Mirrors in Op-Amps:** Current mirrors are fundamental building blocks of two-stage op-amps (e.g., for active loads or biasing). A stable reference current derived from a BGR ensures that these current mirrors operate consistently, regardless of supply variations. (Relates to CO2, CO3)
*   **Input Stage Biasing:** A stable bias current for the input differential pair ensures consistent transconductance ($g_m$) and thus stable voltage gain.
*   **Output Stage Biasing:** Stable bias currents for the Class AB output stage ensure proper quiescent currents and efficient operation.
*   **Reference Voltage for Compensation:** In some frequency compensation techniques (e.g., Miller compensation), a stable reference voltage might be used indirectly to set compensation parameters.

---

### 6. Practice Questions and Exercises

**Q1. What are the two fundamental voltage components that are combined in a Bandgap Reference to achieve temperature compensation?**

**Q2. Explain why supply-independent biasing is crucial for the reliable operation of operational amplifiers.**

**Q3. A BJT has $V_{BE} \approx 700mV$ at room temperature and a negative temperature coefficient of approximately -2mV/°C. A PTAT voltage is generated with a positive temperature coefficient of +0.1mV/°C. What is the required scaling factor ($\alpha$) for the $V_{BE}$ term if it is added to the PTAT voltage to create a temperature-independent reference voltage $V_{REF} = V_{PTAT} + \alpha \cdot V_{BE}$?**

**Q4. Describe how a PTAT voltage can be generated using two BJTs with different emitter areas operating at the same current.**

**Q5. How can the supply voltage variations affect the output of a simple current mirror that is directly powered from the supply?**

**Q6. Name one advantage of using a Wilson current mirror over a basic current mirror in a precision circuit like a Bandgap Reference.**

---

### 7. Answers to Practice Questions

**A1.** The two fundamental voltage components are:
    1.  A voltage with a **negative temperature coefficient (NTC)**, typically derived from the forward voltage drop of a PN junction (e.g., BJT $V_{BE}$).
    2.  A voltage with a **positive temperature coefficient (PTAT)**, which is proportional to absolute temperature.

**A2.** Supply-independent biasing ensures that the bias voltages and currents within the op-amp stages remain constant. This leads to stable parameters such as:
    *   **Voltage Gain:** Prevents variations in the transconductance of transistors.
    *   **Slew Rate:** Ensures consistent charging/discharging of internal compensation capacitors.
    *   **Output Swing:** Maintains the operating points of the output stage.
    *   **Input Offset Voltage/Current:** Minimizes their dependence on the supply.
    Without stable biasing, the op-amp's performance would fluctuate with changes in the power supply, making it unreliable for many applications. (Relates to CO3)

**A3.** To achieve a temperature-independent reference voltage, the total temperature coefficient must be zero:
    $\frac{dV_{REF}}{dT} = \frac{dV_{PTAT}}{dT} + \alpha \cdot \frac{dV_{BE}}{dT} = 0$
    Given:
    $\frac{dV_{PTAT}}{dT} = +0.1mV/°C$
    $\frac{dV_{BE}}{dT} = -2mV/°C$
    Substituting these values:
    $0.1mV/°C + \alpha \cdot (-2mV/°C) = 0$
    $0.1 = 2\alpha$
    $\alpha = \frac{0.1}{2} = 0.05$
    So, the scaling factor $\alpha$ for the $V_{BE}$ term is **0.05**.

**A4.** A PTAT voltage can be generated by using two BJTs with different emitter areas ($A_1$ and $A_2$, where $A_2 = N \cdot A_1$) but biasing them with the *same* collector current ($I_C$). The difference in their base-emitter voltages ($V_{BE1} - V_{BE2}$) is given by $V_T \ln(N)$, which is proportional to absolute temperature.

**A5.** A simple current mirror directly powered from the supply will have its output current vary with the supply voltage. This is because the bias current fed into the mirror, and thus the output current, is typically determined by a resistor connected to the supply. As the supply voltage changes, the current through this resistor changes, leading to a variation in the output current of the mirror.

**A6.** An advantage of using a Wilson current mirror over a basic current mirror in a precision circuit like a Bandgap Reference is its **significantly higher output impedance**. This higher output impedance leads to a more accurate current mirroring and reduces the impact of load variations or imperfections in the mirror's output stage on the mirrored current. It also provides better rejection of output node voltage changes.

---

### 8. Important Points to Remember

*   **BGR Core Idea:** Combine voltages with opposite temperature coefficients (NTC and PTAT) to achieve temperature stability.
*   **PTAT Generation:** Usually done using the difference in $V_{BE}$ of BJTs with different emitter areas operating at the same current.
*   **NTC Component:** The BJT $V_{BE}$ itself serves as the primary NTC voltage.
*   **Supply Independence:** Achieved by ensuring the *bias currents* for the BGR circuit are stable, often through feedback or well-designed current sources.
*   **Op-Amp Application:** BGRs provide stable references for biasing critical nodes in multi-stage op-amps, enhancing their overall performance and reliability.
*   **CMOS vs. BJT:** While BJT BGRs are common due to inherent properties, CMOS implementations are also prevalent, mimicking BJT behavior using MOS transistors or parasitic BJTs.
*   **Key Building Blocks:** Understanding current mirrors (basic, Widlar, Wilson) and voltage sources is essential for implementing and analyzing BGRs and their application in op-amps. (Relates to CO2, CO3)

---

### 9. Alignment with Course Outcomes

*   **CO1: Explain various Single stage Amplifiers with different types of loads (Knowledge Level: K2)**
    *   While not directly covered here, the stable biasing provided by BGRs is crucial for the consistent operation of single-stage amplifiers, which are often the building blocks of op-amps.
*   **CO2: Explain Differential Amplifiers & Current Mirrors (Knowledge Level: K2)**
    *   BGRs heavily rely on current mirrors for biasing and signal manipulation. Understanding current mirror characteristics is essential for BGR design and for the op-amps that use BGRs.
*   **CO3: Apply the knowledge of amplifiers in the design of two stage OPAMP (Knowledge Level: K3)**
    *   This topic directly supports CO3 by explaining how BGRs provide the stable voltage and current references necessary for proper biasing of both the differential input stage and the second gain stage of a two-stage op-amp, ensuring consistent gain, slew rate, and output swing.
*   **CO4: Illustrate the concept of frequency compensation in OPAMP (Knowledge Level: K2)**
    *   Stable biasing from a BGR can indirectly influence frequency compensation by ensuring the operating points of transistors remain constant, which affects parasitic capacitances and other parameters relevant to compensation.
*   **CO5: Describe the specifications and architectures of data converter circuits (Knowledge Level: K2)**
    *   Accurate voltage references (like BGRs) are fundamental for the performance of ADCs and DACs, as they define the quantization levels and full-scale range.

---

This concludes the study notes for Bandgap References and Supply Independent Biasing within the context of two-stage operational amplifiers.