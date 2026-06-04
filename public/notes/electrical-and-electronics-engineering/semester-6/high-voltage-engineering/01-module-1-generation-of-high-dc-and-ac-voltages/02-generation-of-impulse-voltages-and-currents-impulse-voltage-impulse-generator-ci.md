---
title: "Generation of Impulse Voltages and Currents- Impulse voltage- Impulse generator circuits- Multistage impulse generator circuit- Construction of impulse generator- Triggering of impulse generator-Impulse current generation."
subject: "HIGH VOLTAGE ENGINEERING"
module: "Module 1: Generation of High DC and AC Voltages"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f365fa"
status: "completed"
scrapedAt: "2026-05-23T16:28:03.141Z"
---
# High Voltage Engineering: Module 1 - Generation of High DC and AC Voltages

## Topic: Generation of Impulse Voltages and Currents

This module focuses on the generation of transient high voltages and currents, which are crucial for testing the dielectric strength of electrical insulation under atmospheric or switching surge conditions.

---

### 1. Impulse Voltage

**Definition:** An impulse voltage is a voltage that rises rapidly to a maximum value and then decays gradually. It is characterized by its shape, magnitude, and polarity.

**Key Characteristics of Impulse Voltages (as per Wadhwa, Chapter 5):**

*   **Peak Value ($V_p$):** The maximum voltage reached during the impulse.
*   **Front Time ($t_f$):** The time taken for the voltage to rise from 10% to 90% of its peak value.
*   **Virtual Front Time ($t_f'$):** For a standard impulse, the time taken to rise from 0% to 100% of the peak value, assuming a linear rise.
*   **Time to Half Value ($t_h$):** The time taken for the voltage to decay from its peak value to 50% of its peak value.
*   **Rate of Rise:** The derivative of voltage with respect to time, which is critical in causing insulation breakdown.
*   **Oscillatory Nature:** Impulses can be oscillatory (damped oscillations) or non-oscillatory (damped aperiodic).

**Types of Impulse Voltages:**

*   **Standard Lightning Impulse (1.2/50 $\mu$s):** Represents the voltage surge caused by a lightning strike.
    *   Front time ($t_f$): 1.2 $\mu$s (time from 10% to 90% of peak).
    *   Time to half value ($t_h$): 50 $\mu$s (time from peak to 50% of peak).
    *   **Significance (CO1, K1):** Used to test the ability of insulation to withstand lightning surges.
*   **Standard Switching Impulse (250/2500 $\mu$s):** Represents the voltage surges caused by switching operations in high voltage power systems.
    *   Front time ($t_f$): 250 $\mu$s (time from 10% to 90% of peak).
    *   Time to half value ($t_h$): 2500 $\mu$s (time from peak to 50% of peak).
    *   **Significance (CO1, K1):** Used to test insulation under switching surge conditions, which are often slower but can have higher peak values than lightning impulses.
*   **Other Impulses:** Various other impulse shapes (e.g., chopped waves) are used for specific testing purposes.

**Why are Impulse Voltages Generated? (CO1, K1)**

*   **Insulation Testing:** To determine the ability of insulating materials and equipment to withstand transient overvoltages that occur due to lightning strikes or switching operations in power systems.
*   **Dielectric Strength Evaluation:** To assess the breakdown strength of gases, liquids, and solids under transient stress.
*   **Equipment Design:** To ensure that electrical apparatus (transformers, switchgear, power lines) can withstand these transient stresses without failure.

---

### 2. Impulse Generator Circuits

Impulse generators are essentially circuits designed to store energy and discharge it rapidly into a load (the test object) in the form of a high-voltage impulse. The most common type is the **Marx Circuit**.

**Key Components of a Basic Impulse Generator (as per Kuchler, Chapter 5):**

*   **Charging Rectifier:** Converts AC to DC for charging the capacitors.
*   **Charging Resistor:** Limits the charging current to protect the rectifier.
*   **Series of Impulse Capacitors ($C_s$):** Store the electrical energy.
*   **Spark Gaps (Triggers/Interrupters):** Used to connect the capacitors in series during the discharge phase.
*   **Wave-shaping Resistors:**
    *   **Series Resistor ($R_s$):** Controls the charging rate and the front time of the impulse.
    *   **Shunt Resistor ($R_{sh}$ or Load Resistor):** Forms the load and shapes the tail of the impulse.

**Basic Working Principle of a Marx Circuit:**

1.  **Charging Stage:** The impulse capacitors ($C_s$) are connected in parallel to a charging DC voltage source through charging resistors. Each capacitor charges to the source voltage.
2.  **Discharge Stage:** When the charging is complete, the spark gaps are triggered. The first spark gap breaks down, connecting the first capacitor to the second. This triggers the second gap, connecting the second and third capacitors, and so on. All capacitors discharge in series, multiplying the voltage. The series combination of capacitors is connected across the load through the shunt resistor.

**Ideal Marx Circuit:** For an ideal Marx circuit (ignoring stray capacitances and resistances), the output voltage is approximately N times the charging voltage, where N is the number of stages.

**Limitations of Ideal Marx Circuit and Real-World Considerations:**

*   **Stray Capacitances:** The capacitance between different components and ground can affect the impulse shape and introduce oscillations.
*   **Spark Gap Breakdown Time:** The variation in breakdown time of spark gaps can lead to uneven charging and a distorted output waveform.
*   **Switching Losses:** Energy dissipation in spark gaps and resistors.

---

### 3. Multistage Impulse Generator Circuit (Marx Circuit)

The Marx generator is the most widely used circuit for generating high impulse voltages.

**Circuit Diagram of a Multistage Impulse Generator (Wadhwa, Figure 5.2):**

```
       HV DC Source
           |
           Rg
           |
      +----C1-----R1----|----o Test Object (RL)
      |    |      |     |
   ---|----C2-----R2----|----o
   g1 |    |      |     |
      |----C3-----R3----|----o
   g2 |    |      |     |
      ...  ...    ...   ...
   gn-1|----Cn-----Rn----|----o
      |    |      |     |
   ---|----o------o-----o------ Ground
      g2   g3     g4    g5
      ^    ^      ^     ^
      |    |      |     |
    Triggering gaps
```

*   **$C_i$:** Impulse capacitors (typically oil-impregnated paper or plastic film capacitors).
*   **$R_i$:** Charging resistors (high value to limit charging current, e.g., 10 k$\Omega$ - 1 M$\Omega$).
*   **$g_i$:** Spark gaps (trigatrons or triggered spark gaps are common).
*   **$R_s$:** Series resistor (wave-shaping resistor, part of the total resistance in series with the load during discharge).
*   **$R_{sh}$:** Shunt resistor (load resistor, also known as the wave-tail resistor).

**Operation of the Multistage Marx Generator (CO1, K1):**

1.  **Charging:** The HV DC source charges all capacitors $C_1, C_2, ..., C_n$ in parallel through resistors $R_1, R_2, ..., R_n$. Each capacitor charges to the source voltage $V_c$.
2.  **Triggering:** A trigger pulse is applied to the first spark gap ($g_1$). This causes $g_1$ to break down.
3.  **Series Discharge:** The breakdown of $g_1$ connects $C_1$ to $C_2$. The voltage across $C_2$ rises, causing $g_2$ to break down. This process continues sequentially through all gaps ($g_2, g_3, ..., g_{n-1}$), connecting all capacitors in series.
4.  **Output:** The total voltage across the series combination of capacitors is approximately $n \times V_c$. This high voltage is then applied to the test object (represented by $R_L$ for a standard lightning impulse, where $R_L$ is typically 1000 $\Omega$).

**Wave Shaping with $R_s$ and $R_{sh}$ (CO1, K1):**

*   **Front Time Control:** The series resistor ($R_s$) in combination with the total capacitance of the generator and stray capacitances determines the front time. A higher $R_s$ leads to a longer front time.
*   **Tail Time Control:** The shunt resistor ($R_{sh}$) connected across the test object and the generator determines the tail time. A higher $R_{sh}$ leads to a longer tail time.

**Example: Generating a 1.2/50 $\mu$s Impulse:**

To generate a standard lightning impulse, the values of $R_s$ and $R_{sh}$ are chosen such that the circuit, along with the test object's impedance, produces the desired 1.2/50 $\mu$s waveform.

**Considerations for Different Impulse Shapes (CO1, K1):**

*   **Switching Impulses:** For slower switching impulses, larger values of $R_s$ and $R_{sh}$ are typically used.
*   **Chopped Waves:** By deliberately causing a breakdown in the test object or using a divergent electrode gap, a chopped impulse can be generated.

---

### 4. Construction of Impulse Generator

The construction of a multistage impulse generator involves careful design to ensure reliable operation and accurate waveform generation.

**Key Constructional Aspects (as per Naidu & Kamaraju, Chapter 3):**

*   **Capacitor Design:**
    *   High voltage, low inductance capacitors are crucial.
    *   Typically cylindrical or rectangular in shape.
    *   Dielectric materials: Kraft paper, polypropylene film, or a combination.
    *   Impregnation: Mineral oil or askarel for improved dielectric strength and cooling.
    *   Construction: Interleaved foil and dielectric, or film-wound.
*   **Spark Gap Construction:**
    *   **Electrodes:** Spherical, hemispherically capped cylindrical, or ring electrodes are used to ensure uniform electric field distribution and prevent corona.
    *   **Gapping:** The distance between electrodes is critical for breakdown voltage. It's adjustable for tuning the generator.
    *   **Triggering Mechanism:** For controlled breakdown, trigatrons or triggered spark gaps are employed.
    *   **Cooling:** Spark gaps can experience significant heating during rapid firing, requiring cooling systems (e.g., forced air).
*   **Insulation:**
    *   Generators are housed in insulating structures (e.g., porcelain bushings, oil-filled tanks, or air-insulated structures for smaller units).
    *   Careful consideration of insulation distances to prevent flashover and corona.
*   **Base Structure:**
    *   A robust and non-metallic base is required to prevent grounding issues.
*   **Charging System:**
    *   Typically a cascade transformer or a series of smaller transformers followed by rectifiers.
    *   Charging resistors are often non-inductive wire-wound resistors or metallized ceramic rods.
*   **Connections:**
    *   Low-inductance connections between stages (e.g., thick copper strips or tubes) are essential for fast discharge.

**Example of Construction:** A typical multi-stage impulse generator might have stages mounted vertically on an insulating column. Each stage consists of a capacitor, charging resistor, and a spark gap. These stages are connected in series by low-inductance conductors.

---

### 5. Triggering of Impulse Generator

Controlled triggering is vital for the sequential breakdown of spark gaps in a Marx circuit, ensuring the proper series connection of capacitors and the generation of the desired impulse shape.

**Methods of Triggering (CO1, K1):**

1.  **Third Electrode Triggering (Trigatron):**
    *   A third electrode is introduced into the spark gap.
    *   A high-voltage pulse is applied to this third electrode, creating a plasma in the gap and initiating breakdown.
    *   The breakdown voltage of the main gap can be reduced by the presence of the ionized plasma.
    *   **Advantages:** Relatively simple and effective.
    *   **Disadvantages:** Requires a separate triggering circuit for each gap.

2.  **Pre-ionization Triggering:**
    *   The gap is pre-ionized by a corona discharge or a small spark created by a separate trigger electrode or a UV source.
    *   This reduces the breakdown strength of the gap, making it more susceptible to breakdown at a lower voltage.

3.  **Uniform Field Gaps with Overvoltage:**
    *   The gaps are designed to operate very close to their breakdown voltage.
    *   A small overvoltage pulse applied to the entire series of gaps can trigger them all simultaneously. This method is less common for precise sequential triggering.

4.  **Synchronous Triggering:**
    *   In some applications, a single trigger pulse is applied to the first gap, and the subsequent gaps trigger due to the voltage rise across them.
    *   However, for precise control, especially with many stages or when specific timing is required, individually triggered gaps are preferred.

**Triggering Circuit for a Marx Generator (CO1, K1):**

A typical triggering circuit involves a trigger generator (e.g., a pulse generator) that produces a high-voltage pulse. This pulse is then coupled to the trigger electrodes of the spark gaps, usually via a pulse transformer or a set of charging resistors and bypass capacitors.

**Example (CO1, K1):** A common method for triggering a Marx generator involves a single high-voltage pulse generator connected through a damping resistor and a coupling capacitor to the trigger electrode of the first gap. This pulse is then coupled through each stage to trigger subsequent gaps. Alternatively, individual trigger generators can be used for each gap for more precise control.

**Important Point:** The timing and reliability of the trigger pulse are critical. Jitter in the trigger pulse can lead to variations in the output impulse.

---

### 6. Impulse Current Generation

Generating impulse currents is essential for testing devices like surge arresters, which are designed to protect equipment from overvoltages by conducting fault currents.

**Nature of Impulse Currents:**

*   Similar to impulse voltages, impulse currents are transient in nature.
*   They are characterized by their peak value, front time, and time to half value.
*   **Standard Impulse Current Waves:**
    *   **10/350 $\mu$s:** Used to simulate the current let-through by a surge arrester during a lightning discharge.
    *   **8/20 $\mu$s:** Used to simulate switching surge currents or the response of a surge protective device.

**Impulse Current Generator Circuits (CO1, K1):**

Impulse current generators are often based on the same principles as impulse voltage generators, but with modifications to emphasize current flow.

1.  **Modified Marx Circuit:**
    *   The Marx circuit can be adapted to generate impulse currents. Instead of a high impedance load (like insulation testing), a low impedance load (e.g., a surge arrester) is connected.
    *   The energy stored in the capacitors is discharged through the low impedance load, resulting in a high current.
    *   The wave-shaping components ($R_s$, $R_{sh}$) are chosen to produce the desired current waveform.

2.  **Simple RC Circuit (for controlled current pulses):**
    *   A capacitor ($C$) is charged to a DC voltage ($V$).
    *   A low-inductance switch (e.g., ignitron, thyratron, or spark gap) is used to discharge the capacitor through a series resistor ($R$) which represents the load impedance.
    *   The current waveform is an exponentially decaying sinusoid or a simple exponential decay, depending on the circuit parameters.

**Circuit Diagram for Impulse Current Generation (CO1, K1):**

```
       HV DC Source
           |
           Rg
           |
      +----C-----R_charge----|----o Load (R_L, e.g., Surge Arrester)
      |    |                |
   ---|----o----------------|----o------ Ground
      g
```

*   **C:** Impulse capacitor.
*   **$R_{charge}$:** Charging resistor.
*   **g:** Triggered spark gap or high-current switch.
*   **$R_L$:** Load impedance (e.g., surge arrester).

**Operation:** The capacitor $C$ is charged to a voltage $V$. Upon triggering the switch $g$, the capacitor discharges through the load $R_L$, generating an impulse current. The values of $C$, the total series resistance (including switch resistance and $R_L$), and the inductance of the circuit determine the current waveform.

**Example (CO1, K1):** To generate a 10/350 $\mu$s impulse current, a surge arrester is connected to a capacitor bank. The Marx circuit is charged and then discharged through the arrester. The values of $C$, $R_s$, and $R_{sh}$ are carefully selected to achieve the characteristic 10/350 $\mu$s waveform through the arrester.

---

### Learning Outcome Alignment and Knowledge Levels:

*   **CO1: Identify different high voltage and current waveform generation circuits.** (K1)
    *   Covered extensively in sections 2, 3, and 6. Understanding the basic principles and circuit configurations of Marx generators and their application to impulse voltage and current generation directly addresses this outcome.
*   **CO2: Implement different sensing & measurement techniques for high voltage and current measurement.** (K3)
    *   While this topic focuses on generation, it's implied that to *generate* and *test*, you need to measure. The notes implicitly point to the need for measurement (e.g., to verify the 1.2/50 $\mu$s waveform). Further study in subsequent modules would cover actual measurement techniques.
*   **CO3: Describe insulation coordination and surge protector design.** (K2)
    *   The *necessity* of generating impulse voltages and currents stems directly from insulation coordination and surge protection design. Understanding these generation techniques provides the fundamental basis for designing systems to withstand or manage these transients. The context of impulse current generation for surge arresters is a direct link.
*   **CO4: Implement different testing methods for equipments and applications of HV systems.** (K3)
    *   The generation of impulse voltages and currents is the *means* by which many HV testing methods are implemented (e.g., lightning impulse tests, switching impulse tests). This topic provides the foundation for understanding these test procedures.
*   **CO5: Explain the various technologies for lightning protection.** (K2)
    *   Lightning protection relies heavily on understanding and simulating lightning surges. The generation of standard lightning impulses (1.2/50 $\mu$s) is directly related to testing and validating lightning protection systems and equipment.

---

### Important Points to Remember:

*   **Impulse Voltage:** Defined by peak value, front time, and tail time. Standard waveforms are 1.2/50 $\mu$s (lightning) and 250/2500 $\mu$s (switching).
*   **Marx Circuit:** The backbone of impulse voltage generation, using series capacitors and spark gaps to multiply voltage.
*   **Wave Shaping:** Achieved using series ($R_s$) and shunt ($R_{sh}$) resistors.
*   **Triggering:** Crucial for controlled, sequential breakdown of spark gaps in Marx generators.
*   **Impulse Current:** Generated for testing surge protection devices, often using modified Marx circuits or RC circuits with low-impedance loads.
*   **Low Inductance:** Essential for all components in impulse generators to achieve fast voltage/current rise times.

---

### Practice Questions:

1.  **(CO1, K1)** Define an impulse voltage and state its characteristic parameters. What are the standard front and tail times for a lightning impulse?
    *   **Answer:** An impulse voltage is a voltage that rises rapidly to a maximum value and then decays gradually. Its characteristic parameters are peak value, front time (10%-90% of peak), and time to half value (time from peak to 50% of peak). Standard front and tail times for a lightning impulse are 1.2 $\mu$s and 50 $\mu$s, respectively.

2.  **(CO1, K1)** Briefly explain the working principle of a multistage impulse generator (Marx circuit). How is the output voltage multiplied?
    *   **Answer:** In a Marx circuit, capacitors are charged in parallel to a DC voltage. Upon triggering, spark gaps cause the capacitors to discharge in series, effectively multiplying the DC charging voltage by the number of stages.

3.  **(CO1, K1)** What is the role of the series resistor ($R_s$) and the shunt resistor ($R_{sh}$) in an impulse generator?
    *   **Answer:** The series resistor ($R_s$) primarily influences the front time of the impulse, while the shunt resistor ($R_{sh}$) controls the tail time.

4.  **(CO1, K1)** Name two common methods used for triggering impulse generators.
    *   **Answer:** Third electrode triggering (Trigatron) and pre-ionization triggering are two common methods.

5.  **(CO1, K1)** For what purpose are impulse currents generated? What is a common waveform used for testing surge arresters against lightning?
    *   **Answer:** Impulse currents are generated to test the performance of devices like surge arresters. A common waveform for testing surge arresters against lightning is the 10/350 $\mu$s waveform.

6.  **(CO3, K2)** Why is it important to generate impulse voltages for insulation coordination?
    *   **Answer:** Impulse voltages simulate the transient overvoltages that occur due to lightning or switching operations in power systems. Generating these voltages allows engineers to test the insulation's ability to withstand these stresses, ensuring that the insulation levels of different components are coordinated to prevent damage and maintain system reliability.

7.  **(CO1, K1)** A single-stage impulse generator with a capacitor of 0.1 $\mu$F is charged to 100 kV. If it discharges into a load of 1000 $\Omega$, what is the approximate shape of the voltage output? (Assume negligible series resistance and stray inductance).
    *   **Hint:** Consider the damping of the circuit $R_L C$. If $R_L C$ is large, it's aperiodically damped.
    *   **Answer:** The time constant of the circuit is $\tau = R_L C = 1000 \Omega \times 0.1 \mu\text{F} = 1000 \times 0.1 \times 10^{-6} \text{ s} = 10^{-4} \text{ s} = 100 \mu\text{s}$. Since the impulse front time is typically much smaller than this time constant (e.g., 1.2 $\mu$s), the discharge will be aperiodically damped, resulting in a slow decay of voltage. The peak voltage will be 100 kV. The tail time will be significantly longer than 50 $\mu$s.

---

**References:**

*   Wadhwa, C. L. *High Voltage Engineering*. New Age International, 2011. (Chapter 5 on Impulse Generators)
*   Kuchler, Andreas. *High Voltage Engineering Fundamentals – Technology Applications*. Springer, 2018. (Chapter 5 on Impulse Voltage Generation)
*   Naidu, M. S., and Kamaraju, V. *High Voltage Engineering*. Tata Mc Graw Hill, 2004. (Chapter 3 on High Voltage Testing Techniques - Impulse Testing)
*   Kuffel, E., Zaengl, S., and Kuffel, J. *High Voltage Engineering Fundamentals*. Elsevier India P Ltd, 2005. (Relevant chapters on impulse voltage generation)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
