---
title: "Aim: To conduct ratio test of the given CT and PT."
subject: "POWER SYSTEM LAB"
module: "Module 16: Testing of CT and PT"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3680a"
status: "completed"
scrapedAt: "2026-05-23T16:31:27.172Z"
---
# POWER SYSTEM LAB: Module 16 - Testing of CT and PT

## Topic: Ratio Test of CT and PT

### Aim: To conduct the ratio test of the given Current Transformer (CT) and Potential Transformer (PT).

---

### 1. Introduction and Background

Current Transformers (CTs) and Potential Transformers (PTs) are **instrument transformers** used in power systems to step down high voltage and high current values to safe and measurable levels for protection relays, metering instruments, and control systems. Accurate transformation is crucial for the correct operation of these devices. The **ratio test** is a fundamental test performed to verify that the CT and PT accurately transform the current and voltage according to their specified ratios.

**Importance of Instrument Transformers:**

*   **Safety:** Protects personnel and equipment from high voltages and currents.
*   **Measurement:** Enables accurate measurement of electrical quantities (voltage, current, power, energy).
*   **Protection:** Provides signals to protective relays for fault detection and isolation.
*   **Control:** Facilitates the operation of control systems.

---

### 2. Understanding Current Transformers (CTs)

#### 2.1. Definition and Function

A Current Transformer (CT) is a type of transformer that is used to **measure high AC currents** by means of measuring instruments. It produces a current in its secondary winding that is **proportional to the current** flowing in its primary winding.

#### 2.2. CT Classification and Types

*   **By Construction:** Wound type, Bar type, Window type (Toroidal).
*   **By Application:** Measuring CTs, Protection CTs.
*   **By Insulation:** Oil-immersed, Resin-cast.

#### 2.3. CT Ratio

The **nominal ratio** of a CT is the ratio of the primary current to the secondary current under rated conditions.
$$ \text{Nominal Ratio} = \frac{\text{Primary Rated Current}}{\text{Secondary Rated Current}} $$

**Example:** A CT with a rating of 100/5 A has a nominal ratio of 100/5 = 20:1. This means that for every 100 Amperes flowing in the primary, 5 Amperes will flow in the secondary.

#### 2.4. CT Ratio Error

**Ratio error** is the difference between the actual ratio of primary to secondary current and the nominal ratio, expressed as a percentage.

$$ \text{Ratio Error} (\%) = \frac{I_s \times N_p - I_p}{I_p} \times 100 $$

Where:
*   $I_p$: Actual primary current
*   $I_s$: Actual secondary current
*   $N_p$: Nominal primary current
*   $I_s \times N_p$: This term represents the primary current equivalent of the secondary current.

Alternatively, and more practically in the lab context for ratio testing:
$$ \text{Ratio Error} (\%) = \frac{\text{Nominal Ratio} - \frac{I_p}{I_s}}{\text{Nominal Ratio}} \times 100 $$

**Important Note:** The ratio error of a CT is highly dependent on the burden connected to its secondary and the operating current.

---

### 3. Understanding Potential Transformers (PTs)

#### 3.1. Definition and Function

A Potential Transformer (PT), also known as a Voltage Transformer (VT), is a type of transformer used to **measure high AC voltages** by means of measuring instruments. It produces a voltage in its secondary winding that is **proportional to the voltage** applied to its primary winding.

#### 3.2. PT Classification and Types

*   **By Construction:** Wound type, Capacitor Voltage Transformer (CVT).
*   **By Insulation:** Oil-immersed, Resin-cast.
*   **By Application:** Measuring PTs, Protection PTs.

#### 3.3. PT Ratio

The **nominal ratio** of a PT is the ratio of the primary voltage to the secondary voltage under rated conditions.
$$ \text{Nominal Ratio} = \frac{\text{Primary Rated Voltage}}{\text{Secondary Rated Voltage}} $$

**Example:** A PT with a rating of 11kV/110V has a nominal ratio of 11000/110 = 100:1. This means that for every 11 kV applied to the primary, 110 V will appear across the secondary.

#### 3.4. PT Ratio Error

**Ratio error** in a PT is the difference between the actual ratio of primary to secondary voltage and the nominal ratio, expressed as a percentage.

$$ \text{Ratio Error} (\%) = \frac{V_s \times N_p - V_p}{V_p} \times 100 $$

Where:
*   $V_p$: Actual primary voltage
*   $V_s$: Actual secondary voltage
*   $N_p$: Nominal primary voltage
*   $V_s \times N_p$: This term represents the primary voltage equivalent of the secondary voltage.

Alternatively, and more practically in the lab context for ratio testing:
$$ \text{Ratio Error} (\%) = \frac{\text{Nominal Ratio} - \frac{V_p}{V_s}}{\text{Nominal Ratio}} \times 100 $$

**Important Note:** The ratio error of a PT is influenced by the burden connected to its secondary and the operating voltage.

---

### 4. Theory of the Ratio Test

The ratio test aims to directly measure the primary and secondary currents (for CTs) or voltages (for PTs) at various operating levels and then calculate the actual ratio and the ratio error. This allows us to verify if the instrument transformer is performing according to its specifications.

#### 4.1. Principle for CT Ratio Test

The test involves applying a known primary current ($I_p$) and measuring the resulting secondary current ($I_s$). The ratio error is then calculated using the measured values and the CT's nominal ratio.

#### 4.2. Principle for PT Ratio Test

The test involves applying a known primary voltage ($V_p$) and measuring the resulting secondary voltage ($V_s$). The ratio error is then calculated using the measured values and the PT's nominal ratio.

---

### 5. Experimental Setup and Procedure

This section outlines a common procedure for conducting the ratio test in a Power System Lab. Specific equipment and exact connections may vary based on the lab's availability.

#### 5.1. Required Equipment

*   **For CT Ratio Test:**
    *   Variable AC Voltage Source (Variac)
    *   AC Ammeter (for primary current measurement, e.g., 0-10A or 0-20A range)
    *   AC Ammeter (for secondary current measurement, e.g., 0-1A or 0-5A range, depending on CT rating)
    *   The CT to be tested
    *   Connecting wires
    *   Load resistors (to simulate burden, though for basic ratio test, can be omitted or minimal)

*   **For PT Ratio Test:**
    *   Variable AC Voltage Source (Variac)
    *   AC Voltmeter (for primary voltage measurement, e.g., 0-150V, 0-300V range)
    *   AC Voltmeter (for secondary voltage measurement, e.g., 0-150V range)
    *   The PT to be tested
    *   Connecting wires
    *   Load resistors (to simulate burden, though for basic ratio test, can be omitted or minimal)

#### 5.2. Connection Diagram (Conceptual)

**CT Ratio Test:**

```
        +-----------------+
        | Variable AC     |
        | Voltage Source  |
        +--------+--------+
                 |
        +--------+--------+
        | AC Ammeter      |  (Measures Ip)
        +--------+--------+
                 |
        +--------+--------+
        | CT Primary      |
        |  (e.g., Wound)  |
        +--------+--------+
                 |
        +--------+--------+
        | CT Secondary    |  <------> Load (Optional)
        +--------+--------+
                 |
        +--------+--------+
        | AC Ammeter      |  (Measures Is)
        +--------+--------+
                 |
        +--------+--------+
        | Return Path     |
        +-----------------+
```

**PT Ratio Test:**

```
        +-----------------+
        | Variable AC     |
        | Voltage Source  |
        +--------+--------+
                 |
        +--------+--------+
        | AC Voltmeter    |  (Measures Vp)
        +--------+--------+
                 |
        +--------+--------+
        | PT Primary      |
        |  (e.g., Wound)  |
        +--------+--------+
                 |
        +--------+--------+
        | PT Secondary    |  <------> Load (Optional)
        +--------+--------+
                 |
        +--------+--------+
        | AC Voltmeter    |  (Measures Vs)
        +--------+--------+
                 |
        +--------+--------+
        | Return Path     |
        +-----------------+
```

#### 5.3. Procedure Steps

**For CT Ratio Test:**

1.  **Identify CT Specifications:** Note down the primary and secondary rated current and the nominal ratio (e.g., 100/5 A).
2.  **Connect the Circuit:** Wire the circuit as per the connection diagram. Ensure the primary winding is connected in series with the variable AC voltage source and the primary ammeter. The secondary winding should be connected to the secondary ammeter. **Crucially, ensure the secondary circuit is never left open during operation.**
3.  **Set Initial Conditions:** Set the variac to its minimum voltage position.
4.  **Gradually Increase Primary Current:** Slowly increase the voltage from the variac to raise the primary current.
5.  **Take Readings:** At pre-determined primary current levels (e.g., 25%, 50%, 75%, 100%, 125% of rated primary current), record the values of the primary current ($I_p$) and the secondary current ($I_s$).
6.  **Repeat for Different Conditions (Optional but Recommended):** If possible, repeat the test with a different burden connected to the secondary to observe the effect.
7.  **Turn Off:** After taking all readings, reduce the variac to zero and switch off the supply.

**For PT Ratio Test:**

1.  **Identify PT Specifications:** Note down the primary and secondary rated voltage and the nominal ratio (e.g., 11kV/110V).
2.  **Connect the Circuit:** Wire the circuit as per the connection diagram. Ensure the primary winding is connected in parallel with the variable AC voltage source and the primary voltmeter. The secondary winding should be connected to the secondary voltmeter. **Ensure the secondary circuit is properly loaded (if required by the PT rating) or connected to a voltmeter.**
3.  **Set Initial Conditions:** Set the variac to its minimum voltage position.
4.  **Gradually Increase Primary Voltage:** Slowly increase the voltage from the variac to raise the primary voltage.
5.  **Take Readings:** At pre-determined primary voltage levels (e.g., 50%, 75%, 100%, 110% of rated primary voltage), record the values of the primary voltage ($V_p$) and the secondary voltage ($V_s$).
6.  **Repeat for Different Conditions (Optional but Recommended):** Repeat the test with different burdens connected to the secondary.
7.  **Turn Off:** After taking all readings, reduce the variac to zero and switch off the supply.

---

### 6. Data Analysis and Calculations

#### 6.1. CT Ratio Test Calculations

For each set of readings ($I_p$, $I_s$):

1.  **Calculate Actual Ratio:**
    $$ \text{Actual Ratio} = \frac{I_p}{I_s} $$

2.  **Calculate Ratio Error (%):**
    $$ \text{Ratio Error} (\%) = \frac{\text{Nominal Ratio} - \frac{I_p}{I_s}}{\text{Nominal Ratio}} \times 100 $$

    *Alternatively:*
    $$ \text{Ratio Error} (\%) = \frac{I_s \times (\text{Primary Rated Current}) - I_p}{I_p} \times 100 $$
    (Using the rated primary current for the nominal ratio calculation)

#### 6.2. PT Ratio Test Calculations

For each set of readings ($V_p$, $V_s$):

1.  **Calculate Actual Ratio:**
    $$ \text{Actual Ratio} = \frac{V_p}{V_s} $$

2.  **Calculate Ratio Error (%):**
    $$ \text{Ratio Error} (\%) = \frac{\text{Nominal Ratio} - \frac{V_p}{V_s}}{\text{Nominal Ratio}} \times 100 $$

    *Alternatively:*
    $$ \text{Ratio Error} (\%) = \frac{V_s \times (\text{Primary Rated Voltage}) - V_p}{V_p} \times 100 $$
    (Using the rated primary voltage for the nominal ratio calculation)

#### 6.3. Expected Results and Standards

*   The ratio error should be within the limits specified by relevant standards (e.g., IEC 61869-1, IEC 61869-2 for CTs; IEC 61869-1, IEC 61869-3 for PTs).
*   For measuring instruments, the ratio error is typically smaller than for protection instruments.
*   The ratio error should ideally be close to zero, but small deviations are expected due to internal impedance and flux distribution.

---

### 7. Practice Questions and Answers

**Question 1:** A CT with a nominal ratio of 150/5 A is tested. When the primary current is 100 A, the secondary current is measured as 3.2 A. Calculate the ratio error.

**Answer:**
*   Nominal Ratio = 150/5 = 30:1
*   Actual Ratio = $I_p / I_s = 100 A / 3.2 A = 31.25:1$
*   Ratio Error (%) = $((30 - 31.25) / 30) \times 100 = (-1.25 / 30) \times 100 = -4.17\%$

**Question 2:** A PT with a nominal ratio of 33kV/110V is tested. When the primary voltage is 30 kV, the secondary voltage is measured as 98 V. Calculate the ratio error.

**Answer:**
*   Nominal Ratio = 33000V / 110V = 300:1
*   Actual Ratio = $V_p / V_s = 30000 V / 98 V = 306.12:1$
*   Ratio Error (%) = $((300 - 306.12) / 300) \times 100 = (-6.12 / 300) \times 100 = -2.04\%$

**Question 3:** What are the potential hazards if the secondary circuit of a CT is left open during operation?

**Answer:** If the secondary circuit of a CT is left open while the primary current is flowing, the CT acts like a regular transformer with its primary connected to a high current and its secondary open-circuited. This leads to:
    1.  **Extremely High Voltage:** The leakage flux induces a very high voltage across the open secondary terminals. This can be hazardous to personnel and can damage the insulation of the CT and connected equipment.
    2.  **Saturation:** The CT core will likely saturate, leading to a distorted secondary waveform.
    3.  **Heating:** The high induced voltage and currents in the winding can cause excessive heating and potential damage to the CT.

---

### 8. Learning Outcomes Addressed

This experiment directly addresses the following learning outcomes:

*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software.** (Knowledge Level: K3)
    *   While this experiment is practical and not directly software-based, understanding the ratio error of instrument transformers is fundamental for developing accurate mathematical models of power systems for protection and metering functions. For instance, when modeling a relaying scheme, the accuracy of the CT/PT ratio is a critical parameter. This experiment provides the empirical data and understanding of potential deviations that would be incorporated into such models.

*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance.** (Knowledge Level: K3)
    *   This is the primary outcome addressed. The ratio test is a standard test performed on CTs and PTs to verify their performance. By conducting the test, students learn to set up the experiment, take measurements, analyze the data, and compare the results with theoretical expectations and standards, thereby analyzing the component's performance.

---

### 9. Important Points to Remember

*   **CT Secondary must NEVER be open-circuited:** Always ensure a closed path (either a burden or a short circuit, though shorting is not ideal for continuous operation) for the CT secondary.
*   **PT Secondary should not be short-circuited:** Short-circuiting a PT secondary can lead to very high primary currents, potentially damaging the PT and the source.
*   **Burden:** The ratio error is dependent on the burden connected to the secondary winding. The test should ideally be performed with rated burden.
*   **Accuracy Class:** CTs and PTs are designed for specific accuracy classes depending on their application (measuring vs. protection).
*   **Nominal Ratio:** Always use the rated primary and secondary values to calculate the nominal ratio.
*   **Units:** Ensure consistency in units during calculations (kV, V, A).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. References and Further Reading

*   **Power System Engineering** by D.P. Kothari and I.J. Nagrath (McGraw Hill Education) - *Relevant chapters on Transformers and Instrumentation.*
*   **Electrical Power Systems** by V.K. Mehta and Rohit Mehta (S. Chand Publishing) - *Sections on instrument transformers.*
*   **IEC 61869 Series Standards** (Specifically IEC 61869-1, IEC 61869-2, IEC 61869-3) - *For detailed specifications and testing procedures for instrument transformers.*
*   **Laboratory Manuals:** University/College Power System Lab Manuals.

---