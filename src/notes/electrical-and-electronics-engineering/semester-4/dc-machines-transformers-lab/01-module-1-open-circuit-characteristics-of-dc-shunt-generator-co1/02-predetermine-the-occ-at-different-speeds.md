---
title: "Predetermine the OCC at different speeds"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 1: Open circuit characteristics of DC shunt generator (CO1)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360a3"
status: "completed"
scrapedAt: "2026-05-23T16:15:06.434Z"
---
# DC Machines & Transformers Lab: Module 1 - Open Circuit Characteristics of DC Shunt Generator (CO1)

## Topic: Predetermine the OCC at Different Speeds

### 1. Introduction and Objective

This experiment focuses on predetermining the Open Circuit Characteristic (OCC) of a DC shunt generator at various speeds. The OCC, also known as the magnetization characteristic or no-load characteristic, plots the generated EMF ($E_f$) against the field current ($I_f$) when the armature is on open circuit. Understanding the OCC is crucial for predicting the generator's behavior under different operating conditions and for designing appropriate excitation systems.

**Objective:** To obtain the Open Circuit Characteristic (OCC) of a DC shunt generator at different operating speeds and to demonstrate how speed affects the generated EMF.

### 2. Relevant Course Outcomes and Knowledge Level

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**
    *   This experiment directly addresses CO1 by allowing us to analyze the no-load performance of a DC shunt generator, which forms the basis for understanding its behavior under load. The ability to predetermine characteristics at different speeds contributes to a deeper analysis.
*   **Knowledge Level K3 (Application):** We will be applying theoretical concepts to practically predict and analyze the generator's performance.

### 3. Key Concepts and Definitions

*   **DC Shunt Generator:** A DC generator where the field winding is connected in parallel (shunt) with the armature winding.
*   **Open Circuit Characteristic (OCC):** A curve plotted between the generated EMF ($E_f$) on the armature and the field current ($I_f$) when the armature terminals are open-circuited. This characteristic is primarily influenced by the magnetic properties of the machine.
*   **Generated EMF ($E_f$):** The voltage induced in the armature conductors due to the rotation in the magnetic field. For a DC generator, it is given by:
    $E_f = \frac{PN\phi Z}{60A}$
    where:
    *   $P$ = Number of poles
    *   $N$ = Speed of rotation in RPM
    *   $\phi$ = Flux per pole
    *   $Z$ = Total number of armature conductors
    *   $A$ = Number of parallel paths in the armature winding
*   **Field Current ($I_f$):** The current flowing through the field winding, which controls the strength of the magnetic field.
*   **Magnetic Saturation:** As the field current increases, the magnetic flux in the machine also increases. However, due to the magnetic properties of the iron core, the flux does not increase linearly with the field current. Eventually, the iron core becomes saturated, and further increases in field current result in only small increases in flux. This non-linearity is visible in the OCC.
*   **Residual Magnetism:** The ability of the magnetic circuit to retain some magnetism even after the external magnetic field is removed. This is essential for a self-excited shunt generator to start generating voltage. The OCC typically starts from a small value of EMF even at zero field current due to this residual magnetism.
*   **Armature Reaction:** The magnetic effect of the armature current on the main field flux. This is not considered in the OCC as the armature is open-circuited, meaning there is no armature current.
*   **Speed Dependence of Generated EMF:** From the generated EMF equation ($E_f = \frac{PN\phi Z}{60A}$), it's evident that the generated EMF is directly proportional to the speed of rotation ($N$) and the flux per pole ($\phi$). For a given field current, the flux per pole is relatively constant. Therefore, at different speeds, the generated EMF for the same field current will vary proportionally to the speed.

### 4. Theoretical Basis and Predetermination

The OCC at different speeds can be theoretically predetermined using the OCC obtained at a base speed. The fundamental relationship is:

$E_{f} \propto N$

This means that for a given field current ($I_f$), the generated EMF ($E_f$) at a new speed ($N'$) can be calculated from the EMF ($E_{f,base}$) obtained at a base speed ($N_{base}$) as follows:

$\frac{E_{f}'}{E_{f,base}} = \frac{N'}{N_{base}}$

Therefore, the predetermined OCC at speed $N'$ is given by:

$E_{f}' = E_{f,base} \times \frac{N'}{N_{base}}$

This allows us to predict the generator's output voltage at various speeds by simply scaling the OCC obtained at a reference speed.

### 5. Experimental Setup and Procedure

**5.1. Apparatus Required:**

*   DC Shunt Generator (rated voltage and power)
*   DC Shunt Motor (to drive the generator)
*   Rheostats (for controlling motor speed and generator field current)
*   Voltmeter (to measure generated EMF, range to cover expected EMF)
*   Ammeter (to measure field current)
*   Tachometer or Speedometer (to measure the speed of the generator shaft)
*   Connecting Wires
*   Patching Cords

**5.2. Circuit Diagram:**

The circuit diagram typically involves connecting the DC shunt motor to a variable DC supply (e.g., through a rheostat for speed control). The armature of the DC shunt generator is connected to a voltmeter, and its field winding is connected to a variable DC supply (or directly to the generator's own armature terminals for self-excitation, but for predetermination at different speeds, an external variable DC supply is preferred for better control of field current). A rheostat is connected in series with the field winding to vary the field current. The generator's armature terminals are kept open.

```
        +-----------------+
        |                 |
    DC  | DC Shunt Motor  |
  Supply| (Variable)      |--------> Shaft --------> Generator Shaft
        |                 |
        +--------+--------+
                 |
                 (Rheostat R_m for Speed Control)
```

```
        +-----------------------+
        |                       |
    DC  | DC Shunt Generator    |
  Supply|                       |
        |                       |
        +----------+------------+
                   |
             (Field Winding)
                   |
             (Rheostat R_f for Field Control)
                   |
                   +-----------> Field Terminals (F1, F2)
                   |
             Armature Terminals (A1, A2)
                   |
             +-----------+
             | Voltmeter | (Ef)
             +-----------+
             |
             (Armature is open circuited)
```

**For Predetermination at Different Speeds:**

1.  **Obtain OCC at Base Speed ($N_{base}$):**
    *   Start with the generator field rheostat ($R_f$) at its maximum resistance (minimum field current).
    *   Start the DC shunt motor and adjust its speed to a constant, desired base speed ($N_{base}$) using the motor's speed control rheostat ($R_m$). Record this speed using the tachometer.
    *   Gradually decrease the resistance of the field rheostat ($R_f$) to increase the field current ($I_f$).
    *   For each step of increasing field current, record the corresponding generated EMF ($E_f$) from the voltmeter.
    *   Continue increasing $I_f$ until the rated voltage is reached or the field current becomes too high.
    *   **Crucially, maintain the speed ($N_{base}$) constant throughout this process.**

2.  **Predetermine OCC at a New Speed ($N'$):**
    *   After obtaining the OCC at $N_{base}$, change the speed of the DC shunt motor to a new desired speed ($N'$). This is done by adjusting the motor's speed control rheostat ($R_m$). Record this new speed ($N'$) using the tachometer. **Ensure $N'$ is different from $N_{base}$ (e.g., higher or lower).**
    *   With the new speed $N'$ maintained constant, repeat the process of varying the field current ($I_f$) from minimum to maximum.
    *   For each value of $I_f$, record the measured generated EMF ($E_f'$).

3.  **Theoretical Predetermination:**
    *   Using the data from step 1 ($E_{f,base}$ vs $I_f$ at $N_{base}$), calculate the theoretical generated EMFs ($E_{f}'_{theoretical}$) at speed $N'$ for each corresponding field current using the formula:
        $E_{f}'_{theoretical} = E_{f,base} \times \frac{N'}{N_{base}}$
    *   Plot the theoretical pre-determined OCC ($E_{f}'_{theoretical}$ vs $I_f$) at speed $N'$.

4.  **Comparison:**
    *   Plot the experimentally obtained OCC at speed $N'$ ($E_f'$ vs $I_f$) alongside the theoretical pre-determined OCC.
    *   Compare the two curves. They should be very close, confirming the speed-EMF relationship.

**5.3. Repeat for Other Speeds:**

Repeat steps 2-4 for other desired speeds (e.g., $N''$, $N'''$) to obtain multiple pre-determined OCCs.

### 6. Expected Results and Graph

**Table of Readings (Example):**

| Field Current ($I_f$) [A] | Speed 1 ($N_1$) [RPM] | $E_{f1}$ (Measured) [V] | $E_{f1}$ (Theoretical, $N_1/N_{base}$) [V] | Speed 2 ($N_2$) [RPM] | $E_{f2}$ (Measured) [V] | $E_{f2}$ (Theoretical, $N_2/N_{base}$) [V] |
| :------------------------ | :-------------------- | :---------------------- | :------------------------------------------ | :-------------------- | :---------------------- | :------------------------------------------ |
| 0.2                       | 1000                  | 30                      | 30                                          | 800                   | 24                      | 24                                          |
| 0.4                       | 1000                  | 80                      | 80                                          | 800                   | 64                      | 64                                          |
| 0.6                       | 1000                  | 130                     | 130                                         | 800                   | 104                     | 104                                         |
| 0.8                       | 1000                  | 170                     | 170                                         | 800                   | 136                     | 136                                         |
| 1.0                       | 1000                  | 195                     | 195                                         | 800                   | 156                     | 156                                         |
| 1.2                       | 1000                  | 210                     | 210                                         | 800                   | 168                     | 168                                         |

**Graph:**

The graph should have:
*   Y-axis: Generated EMF ($E_f$) [Volts]
*   X-axis: Field Current ($I_f$) [Amperes]

The graph will show multiple curves:
1.  The experimentally obtained OCC at the base speed ($N_{base}$).
2.  The experimentally obtained OCC at a different speed ($N'$).
3.  The theoretically pre-determined OCC at speed $N'$.

**Expected Shape of OCC:**

*   Initially, the curve is almost linear, as the magnetic reluctance of the air gap is dominant, and flux is roughly proportional to the field ampere-turns.
*   As the field current increases, the iron parts of the magnetic circuit begin to saturate. The reluctance increases, and the flux per pole grows less rapidly than the field current. This causes the curve to bend over.
*   The curve starts from a small positive EMF at zero field current due to residual magnetism.

### 7. Discussion and Analysis

*   **Comparison of Experimental and Theoretical Curves:** Analyze the closeness of the experimentally obtained OCC at $N'$ and the theoretically pre-determined OCC at $N'$. Any deviations can be attributed to:
    *   Inaccuracies in speed measurement.
    *   Variations in motor speed during the measurement of OCC at $N_{base}$ and $N'$.
    *   Changes in the magnetic properties of the generator core due to temperature variations or prior magnetization history.
    *   Inaccuracies in the voltmeter or ammeter readings.
*   **Effect of Speed:** Discuss how the generated EMF at any given field current is higher at higher speeds and lower at lower speeds, as predicted by the formula $E_f \propto N$. The shape of the characteristic (saturation) remains the same, but the magnitude of voltage is scaled by the speed ratio.
*   **Significance of OCC:** Explain why the OCC is important. It helps in:
    *   Predicting the voltage regulation of the generator.
    *   Determining the critical resistance of the field winding for self-excitation.
    *   Understanding the behavior of the generator under various excitation conditions.
    *   Designing excitation systems.
*   **Self-Excitation Condition:** Relate the OCC to the condition for self-excitation. For a self-excited shunt generator to start generating voltage, the slope of the OCC (which represents $dE_f/dI_f$) must be greater than the slope of the external resistance line (field resistance line, $R_f$) at the point of intersection. If the field resistance line is steeper than the initial part of the OCC, the generator may not build up voltage.

### 8. Important Points to Remember

*   **Constant Speed is Crucial:** For each OCC, the armature speed must be kept constant. Any variation in speed during the measurement of a single OCC will lead to erroneous results.
*   **Field Current Variation:** Always increase the field current gradually to avoid sudden changes in flux and potential damage to the equipment.
*   **Residual Magnetism:** The initial voltage at zero field current is due to residual magnetism. Ensure the generator has not been recently demagnetized.
*   **Armature Open:** The armature terminals MUST be open-circuited throughout the experiment to obtain the OCC.
*   **Direction of Rotation:** Maintain the same direction of rotation when measuring OCC at different speeds.
*   **Self-Excitation vs. Separate Excitation:** While this experiment often uses separate excitation (external DC supply to the field) for better control over field current at different speeds, it's good to remember how self-excitation works and the role of OCC in it. For pre-determining at *different* speeds, separate excitation is often preferred over trying to control the speed of a self-excited generator precisely.
*   **P.S. Bimbhra and Kothari & Nagrath:** Both books provide detailed theoretical background on DC generators, including the concept of OCC and its dependence on speed. Refer to Chapter X (e.g., Chapter 6 in Bimbhra, Chapter 5 in Kothari & Nagrath) for "DC Generators" which will cover OCC and its properties. They will emphasize the $E_f \propto N$ relationship for a fixed field current and magnetic circuit.

### 9. Practice Questions and Answers

**Question 1:** The Open Circuit Characteristic (OCC) of a DC shunt generator is a plot between:
    a) Armature voltage and armature current
    b) Generated EMF and field current
    c) Field flux and field current
    d) Terminal voltage and load current

**Answer:** b) Generated EMF and field current

**Question 2:** How does the generated EMF of a DC generator change if the speed of rotation is doubled, while the field flux remains constant?
    a) It halves.
    b) It doubles.
    c) It remains the same.
    d) It quadruples.

**Answer:** b) It doubles. (From $E_f \propto N$)

**Question 3:** What is the primary reason for the bending over of the OCC at higher field currents?
    a) Armature reaction
    b) Saturation of the magnetic circuit
    c) Increased armature resistance
    d) Voltage regulation

**Answer:** b) Saturation of the magnetic circuit

**Question 4:** If an OCC is obtained at 1200 RPM and the generated EMF at a certain field current is 100V, what would be the generated EMF at the same field current if the speed is reduced to 900 RPM?

**Answer:**
    Let $E_{f1} = 100V$ at $N_1 = 1200$ RPM.
    We need to find $E_{f2}$ at $N_2 = 900$ RPM.
    Using the relationship $E_f \propto N$:
    $\frac{E_{f2}}{E_{f1}} = \frac{N_2}{N_1}$
    $E_{f2} = E_{f1} \times \frac{N_2}{N_1}$
    $E_{f2} = 100V \times \frac{900 \text{ RPM}}{1200 \text{ RPM}}$
    $E_{f2} = 100V \times \frac{3}{4}$
    $E_{f2} = 75V$

**Question 5:** What is the main advantage of predetermining the OCC at different speeds?
    a) To save on electricity bills.
    b) To avoid performing the experiment at multiple speeds.
    c) To understand how magnetic saturation changes with speed.
    d) To accurately predict the generator's output voltage at various speeds.

**Answer:** d) To accurately predict the generator's output voltage at various speeds.
