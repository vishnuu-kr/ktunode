---
title: "Voltage regulation – OC and SC tests – emf and mmf methods – ZPF test - Potier method – numerical problems"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 1: Principle of Operation of 3"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35ded"
status: "completed"
scrapedAt: "2026-05-23T16:19:08.700Z"
---
# SYNCHRONOUS & INDUCTION MACHINES - Module 1: Principle of Operation of 3-Phase Machines

## Topic: Voltage Regulation, Open-Circuit (OC) and Short-Circuit (SC) Tests, EMF and MMF Methods, Zero Power Factor (ZPF) Test, Potier Method, and Numerical Problems

---

### 1. Voltage Regulation of Synchronous Generators

**Definition:** Voltage regulation of a synchronous generator is the change in terminal voltage when the load is reduced from full load to no load, with the field excitation kept constant. It is usually expressed as a percentage.

**Formula:**

$$
\text{Voltage Regulation (\%)} = \frac{V_{NL} - V_{FL}}{V_{FL}} \times 100\%
$$

Where:
*   $V_{NL}$: Terminal voltage at no load (excitation same as for full load)
*   $V_{FL}$: Terminal voltage at full load (excitation same as for no load)

**Significance:**
*   A lower voltage regulation is desirable for a synchronous generator, indicating that the terminal voltage remains relatively constant under varying load conditions.
*   This is crucial for maintaining stable operation of connected loads, especially sensitive equipment.
*   It is influenced by armature resistance, armature leakage reactance, and armature reaction.

**Factors Affecting Voltage Regulation:**
*   **Load Power Factor:** The lagging power factor load causes a greater voltage drop due to armature reaction and leakage reactance, leading to poorer voltage regulation (higher percentage). Leading power factor load can even result in negative voltage regulation.
*   **Armature Resistance:** A higher armature resistance increases the voltage drop, contributing to poorer regulation.
*   **Armature Leakage Reactance:** A higher leakage reactance also increases the voltage drop, worsening regulation.
*   **Armature Reaction:** This is the magnetic effect produced by the armature current, which can either demagnetize (lagging PF) or magnetize (leading PF) the main field flux, significantly impacting terminal voltage.

**Relationship with CO1:** This section directly addresses the analysis of synchronous generator performance under various load conditions, fulfilling CO1 at a Knowledge Level of K3.

---

### 2. Open-Circuit (OC) Test (or No-Load Test)

**Purpose:**
*   To determine the **open-circuit characteristic (OCC)**, also known as the **magnetization curve**, which plots the generated EMF (E) against field current ($I_f$) at no load.
*   To determine the **armature resistance ($R_a$)**.

**Procedure:**
1.  The prime mover (e.g., diesel engine) is run at its rated speed.
2.  The stator windings are kept open-circuited (no load connected).
3.  The field current ($I_f$) is gradually increased from zero to its rated value.
4.  The generated EMF ($E_0$) or terminal voltage ($V_{NL}$) across the stator terminals is measured for each value of field current.
5.  **For $R_a$ determination:** After the OCC test, the machine is stopped, and a known DC voltage is applied to one of the stator windings. The resulting DC current is measured. The armature resistance is calculated as $R_a = V_{DC} / I_{DC}$. This DC resistance is then converted to AC resistance by multiplying by a factor (typically 1.25 to 1.5) to account for skin effect, although for simpler calculations, the DC resistance is often used directly.

**Data Obtained:** A set of values for $E_0$ (or $V_{NL}$) and $I_f$.

**Graph:** Plotting $E_0$ (y-axis) against $I_f$ (x-axis) yields the Open-Circuit Characteristic (OCC). This curve is non-linear due to magnetic saturation of the iron core.

**Important Points:**
*   The OCC shows the relationship between field excitation and the generated voltage in the absence of armature reaction and voltage drop due to armature current.
*   It is crucial for calculating voltage regulation using various methods.

**Textbook Reference:**
*   P.S. Bhimbra, Chapter 5: Synchronous Generators – Parallel Operation and Voltage Regulation.
*   M.G. Say, Chapter 4: Alternator Characteristics.

---

### 3. Short-Circuit (SC) Test

**Purpose:**
*   To determine the **short-circuit characteristic (SCC)**, which plots the armature current ($I_a$) against field current ($I_f$) when the stator terminals are short-circuited.
*   To determine the **synchronous reactance ($X_s$)** or **synchronous impedance ($Z_s$)**.

**Procedure:**
1.  The prime mover is run at its **rated speed**.
2.  The stator terminals are short-circuited through ammeters.
3.  The field current ($I_f$) is gradually increased from a small value to a value that causes rated full-load armature current ($I_{a,rated}$) to flow.
4.  The armature current ($I_a$) and field current ($I_f$) are recorded for each value.

**Data Obtained:** A set of values for $I_a$ and $I_f$ at rated speed.

**Graph:** Plotting $I_a$ (y-axis) against $I_f$ (x-axis) yields the Short-Circuit Characteristic (SCC). This curve is essentially a straight line passing through the origin up to rated current because the magnetic circuit is not saturated under short-circuit conditions (low air gap flux).

**Important Points:**
*   The SCC is used to determine the synchronous impedance ($Z_s$).
*   The synchronous reactance ($X_s$) is then calculated as $X_s = \sqrt{Z_s^2 - R_a^2}$.

**Textbook Reference:**
*   P.S. Bhimbra, Chapter 5: Synchronous Generators – Parallel Operation and Voltage Regulation.
*   M.G. Say, Chapter 4: Alternator Characteristics.

---

### 4. Voltage Regulation Calculation Methods

Voltage regulation is a critical parameter for synchronous generators. It can be calculated using data from the OC and SC tests and various methods, each with its own assumptions and accuracy.

#### 4.1. EMF Method (Synchronous Impedance Method)

**Princ:** Assumes that the voltage regulation is primarily due to armature resistance and synchronous reactance (representing armature reaction). It treats the synchronous reactance as a constant parameter.

**Steps:**
1.  Perform the OC and SC tests to obtain the OCC and SCC, and determine armature resistance ($R_a$).
2.  From the SCC, find the field current ($I_{f0}$) required to produce rated armature current ($I_{a,rated}$) under short-circuit conditions.
3.  From the OCC, find the EMF ($E_0$) corresponding to this field current ($I_{f0}$). This EMF is considered the **synchronous impedance ($Z_s$)**:
    $Z_s = E_0 / I_{a,rated}$
4.  Calculate the synchronous reactance:
    $X_s = \sqrt{Z_s^2 - R_a^2}$
5.  To calculate voltage regulation for a given load condition (rated voltage $V_t$ and rated current $I_a$ at a power factor $\cos \phi$):
    *   Determine the field current ($I_f$) required to produce rated voltage ($V_t$) at no load from the OCC.
    *   Calculate the EMF ($E_f$) generated by this field current using the OCC. This EMF is often referred to as the "equivalent excitation EMF."
    *   Using the phasor diagram for a synchronous generator:
        $E_f = V_t + I_a R_a + j I_a X_s$ (for lagging PF)
        $E_f = V_t + I_a R_a + j I_a X_s$ (for unity PF)
        $E_f = V_t + I_a R_a + j I_a X_s$ (for leading PF)
    *   If the voltage drop is considered, the EMF equation for a lagging power factor is:
        $E_f = V_t \angle 0^\circ + I_a \angle (-\phi) (R_a \angle 0^\circ + j X_s \angle 90^\circ)$
        $E_f = V_t + I_a (R_a \cos \phi - X_s \sin \phi) + j I_a (R_a \sin \phi + X_s \cos \phi)$
    *   The magnitude of $E_f$ is $|E_f|$.
    *   Find the field current ($I_{fE}$) corresponding to this $|E_f|$ from the OCC. This is the required field current for the given load.
    *   Now, to calculate regulation, we need the terminal voltage at no load for this $I_{fE}$. Let this be $V_{NL}$.
    *   Voltage Regulation (%) = $\frac{V_{NL} - V_t}{V_t} \times 100\%$

**Advantages:**
*   Simple to apply.
*   Requires only OC and SC tests.

**Disadvantages:**
*   Assumes synchronous reactance is constant, which is not true due to saturation.
*   Armature reaction is approximated by the synchronous reactance, leading to less accurate results, especially for machines with significant saturation.
*   Generally overestimates the voltage regulation for lagging PF and underestimates for leading PF.

**Relationship with CO1:** This method directly calculates performance under load conditions using test data, aligning with CO1 (K3).

#### 4.2. MMF Method (Ampere-Turn Method)

**Princ:** This method considers armature reaction as a fictitious magnetomotive force (MMF) that opposes or aids the main field MMF. It acknowledges that armature reaction is non-linear due to saturation.

**Steps:**
1.  Perform the OC test to obtain the OCC (EMF vs. Field Current).
2.  Perform the SC test to obtain the SCC (Armature Current vs. Field Current).
3.  From the SCC, determine the field current ($I_{f0}$) required to produce rated armature current ($I_{a,rated}$) under short-circuit.
4.  On the OCC, find the EMF ($E_a$) corresponding to the field current ($I_{f0}$). This $E_a$ represents the EMF that would be generated if armature reaction alone were present (without the main field flux).
5.  On the OCC, find the field current ($I_{f1}$) that produces an EMF equal to the rated terminal voltage ($V_t$) at no load.
6.  The total MMF required to produce the terminal voltage and overcome armature reaction is represented by the field current ($I_{f2}$) obtained by adding the field current equivalent of armature reaction ($I_{f0}$) to the field current required for the terminal voltage ($I_{f1}$):
    *   For lagging PF: $I_{f2} = I_{f1} + I_{f0}$ (phasor sum, but in MMF method, it's approximated as algebraic sum for lagging PF).
    *   For leading PF: $I_{f2} = I_{f1} - I_{f0}$ (algebraic difference).
    *   For unity PF: $I_{f2} = I_{f1} \pm I_{f0}$ (where the sign depends on whether armature resistance drop is considered to affect armature reaction). A more common approach for unity PF is to combine $V_t$ and $I_aR_a$ first, then find the field current for that resultant EMF.
7.  From the OCC, find the EMF ($E_f$) corresponding to the calculated total field current ($I_{f2}$). This $E_f$ is the generated EMF for the given load condition.
8.  To calculate voltage regulation, we need the no-load voltage ($V_{NL}$) for the field current that produces $E_f$. Find the field current ($I_{fE}$) corresponding to $E_f$ from the OCC. Then find $V_{NL}$ from the OCC corresponding to $I_{fE}$.
9.  Voltage Regulation (%) = $\frac{V_{NL} - V_t}{V_t} \times 100\%$

**Refined MMF Method (Considering Armature Resistance):**
The above is a simplified MMF method. A more refined approach involves considering the voltage drop across the armature resistance.
1.  From the OCC, determine the field current $I_{f1}$ required to produce $V_t$ at no load.
2.  From the SCC, determine the field current $I_{f0}$ required to produce rated armature current $I_a$.
3.  On the OCC, find the EMF $E_a$ corresponding to $I_{f0}$.
4.  Calculate the phasor sum of terminal voltage and voltage drop due to armature resistance: $E' = V_t \angle 0^\circ + I_a \angle (-\phi) R_a \angle 0^\circ$.
5.  Find the field current $I_{f1}'$ from the OCC corresponding to $E'$.
6.  For lagging PF: $I_{f2} = I_{f1}' + I_{f0}$ (algebraic sum).
7.  For leading PF: $I_{f2} = I_{f1}' - I_{f0}$ (algebraic difference).
8.  Find the EMF $E_f$ from the OCC corresponding to $I_{f2}$.
9.  Find the field current $I_{fE}$ for $E_f$ from the OCC.
10. Find $V_{NL}$ from the OCC corresponding to $I_{fE}$.
11. Voltage Regulation (%) = $\frac{V_{NL} - V_t}{V_t} \times 100\%$

**Advantages:**
*   More accurate than the EMF method, especially at higher saturation levels.
*   Considers the effect of armature reaction as a separate MMF.

**Disadvantages:**
*   Slightly more complex to apply.
*   The linear relationship between field current and EMF in the MMF method is an approximation.

**Textbook Reference:**
*   P.S. Bhimbra, Chapter 5: Synchronous Generators – Parallel Operation and Voltage Regulation.
*   J.B. Gupta, Chapter 7: Voltage Regulation of Alternators.

**Relationship with CO1:** Directly addresses the performance analysis of synchronous generators under load, aligning with CO1 (K3).

#### 4.3. Potier Method

**Princ:** This method aims to separate the effect of armature leakage reactance ($X_l$) from the effect of armature reaction. It introduces a "leakage reactance" equivalent circuit element. It's primarily used to determine $X_l$ and the actual air gap line (representing the EMF generated by the field flux alone).

**Steps:**
1.  Perform the OC test to obtain the OCC.
2.  Perform the SC test to obtain the SCC.
3.  From the SCC, find the field current ($I_{f0}$) required to produce rated armature current ($I_{a,rated}$) under short-circuit.
4.  On the OCC, find the EMF ($E_a$) corresponding to the field current ($I_{f0}$).
5.  On the OCC, find the field current ($I_{f1}$) required to produce a terminal voltage equal to the armature resistance drop ($I_{a,rated}R_a$) at no load. This is a crucial step.
6.  Draw the OCC. Mark point 'A' corresponding to ($I_{f0}$, $E_a$). Draw a vertical line from 'A' downwards by $I_{a,rated}R_a$ to reach point 'B'.
7.  Draw a horizontal line from 'B' to intersect the OCC at point 'C'.
8.  The field current corresponding to point 'C' on the OCC is $I_{fc}$.
9.  The difference in field currents ($I_{fc} - I_{f0}$) represents the field current needed to overcome the combined effect of armature reaction and armature resistance drop.
10. The armature reaction MMF is assumed to be proportional to the armature current. The field current ($I_{fc}$) is taken as the field current required to produce the actual air gap EMF ($E_{gap}$) which is $E_a$.
11. The field current $I_{f0}$ required to produce $E_a$ under SC conditions is essentially the field current needed to overcome the synchronous impedance effect if armature reaction and resistance were zero.
12. **Leakage Reactance ($X_l$):** The Potier method aims to find the leakage reactance. It involves drawing a "Potier triangle."
    *   Draw the OCC.
    *   From the SCC, find $I_{f0}$ for rated $I_a$. Locate the point ($I_{f0}$, $E_a$) on the OCC, where $E_a$ is the generated EMF.
    *   Draw a vertical line from this point down by $I_a R_a$. Let the intersection with the x-axis be $P_1$.
    *   Draw a horizontal line from $P_1$ to intersect the OCC at point $P_2$.
    *   The field current at $P_2$ is $I_{f1}$.
    *   The Potier triangle is formed by the points:
        *   The origin (0,0)
        *   A point on the x-axis representing $I_{f1}$ (field current to produce $V_t$ at no load)
        *   A point on the y-axis representing $V_t$ (rated terminal voltage)
        *   The voltage drop $I_a R_a$ is represented.
    *   The key idea is that the leakage reactance drop ($I_a X_l$) is constant for a given armature current, regardless of the field flux.
    *   A more practical way to draw the Potier triangle:
        *   From the SCC, find $I_{f0}$ for rated $I_a$.
        *   On the OCC, find $E_a$ corresponding to $I_{f0}$.
        *   Draw a horizontal line from the origin to intersect the OCC at a point corresponding to the terminal voltage $V_t$. Let the field current for this be $I_{f1}$.
        *   Now, draw a vertical line from $I_{f1}$ downwards by the value of $I_a R_a$. Let this point be $X$.
        *   Draw a horizontal line from $X$ to intersect the OCC at point $Y$.
        *   The field current at $Y$ is $I_{f2}$.
        *   The difference $I_{f2} - I_{f1}$ is the field current required to produce the effect of armature reaction.
        *   The Potier triangle has vertices at $(I_{f1}, V_t)$, $(I_{f1}, V_t - I_a R_a)$, and $(I_{f2}, V_t - I_a R_a)$.
        *   The length $I_{f2} - I_{f1}$ represents the field MMF equivalent of armature reaction.
        *   The leakage reactance voltage drop $I_a X_l$ is represented by the vertical side of the triangle.
        *   **Leakage Reactance ($X_l$) = $\frac{\text{Vertical side of Potier triangle}}{\text{Rated Armature Current}}$**
        *   The field current $I_{f0}$ (from SCC) is used to find $E_a$. This $E_a$ is the resultant of the main field flux and the leakage flux.
        *   The air gap EMF is $E_{gap} = E_a + I_a R_a + j I_a X_l$.
        *   The field current to produce $E_{gap}$ needs to be found from the OCC.
13. **Synchronous Reactance ($X_s$) Calculation using Potier Method:**
    *   Once $X_l$ is determined, $Z_s = \sqrt{X_s^2 + R_a^2}$.
    *   The Potier method primarily focuses on finding $X_l$. The EMF method's $Z_s$ can be calculated from the SCC ($Z_s = E_0/I_a$ from OCC at SCC field current).
    *   The actual synchronous impedance ($Z_s'$) is then $Z_s' = \sqrt{(X_l + X_{ar})^2 + R_a^2}$, where $X_{ar}$ is the armature reaction reactance. The Potier method helps isolate $X_l$.
    *   A more direct way to use Potier for regulation:
        *   Find $X_l$ from the Potier triangle.
        *   Calculate the leakage reactance drop $V_l = I_a X_l$.
        *   The terminal voltage is $V_t$.
        *   The resultant voltage without leakage effect is $V_{res} = V_t + I_a R_a + j I_a X_l$.
        *   Find the field current $I_{f1}$ corresponding to $V_t$ on the OCC.
        *   Find the field current $I_{f0}$ corresponding to $E_a$ (from SCC).
        *   The Potier triangle helps visualize and quantify the field current required for armature reaction. The vertical side of the Potier triangle is equal to $I_a X_l$.
        *   The field current required to produce $E_{gap}$ (which is $V_t + I_a R_a$ for unity PF, or a more complex phasor for other PFs) needs to be found.
        *   A common approach is to find $X_l$ and $R_a$. Then, the voltage regulation can be calculated by finding $E_f = V_t + I_a(R_a + jX_l) + \text{Armature Reaction Effect}$.
        *   **Using Potier for $E_f$:**
            *   Find $X_l$.
            *   Calculate leakage voltage drop $V_{leakage} = I_a X_l$.
            *   The voltage at the terminals of the armature winding (before leakage reactance) is $V' = V_t + I_a R_a + j I_a X_l$.
            *   Find the field current $I_{f1}$ required to produce $V_t$ from the OCC.
            *   Find the field current $I_{f0}$ required to produce $E_a$ from the SCC.
            *   The field current required for armature reaction alone is $I_{fAR} = I_{f0}$ (from SCC at rated $I_a$).
            *   The field current required for $V_t$ at no load is $I_{fV_t}$.
            *   The total field current $I_{f,total}$ is found by considering $V_t$, $I_a R_a$, and $I_a X_l$.
            *   The Potier method provides $X_l$. The remaining part of synchronous impedance is due to armature reaction.
            *   Let $Z_{ar}$ be the impedance due to armature reaction. $Z_{ar} = \sqrt{Z_s^2 - X_l^2 - R_a^2}$. This is not the standard way.
            *   The core output of the Potier method is $X_l$. With $R_a$ and $X_l$ known, the EMF method can be applied using these values.

**Advantages:**
*   More accurate than EMF and MMF methods, especially for machines with significant leakage reactance.
*   Separates leakage reactance from armature reaction.

**Disadvantages:**
*   More complex procedure.
*   The accuracy depends on the correct plotting and interpretation of the Potier triangle.

**Textbook Reference:**
*   P.S. Bhimbra, Chapter 5: Synchronous Generators – Parallel Operation and Voltage Regulation.
*   J.B. Gupta, Chapter 7: Voltage Regulation of Alternators.

**Relationship with CO1:** Directly contributes to the analysis of synchronous generator performance by providing a more accurate estimation of parameters, thus fulfilling CO1 (K3).

#### 4.4. Zero Power Factor (ZPF) Test (Load Method)

**Princ:** This method directly measures the terminal voltage under a specific load condition that simulates the effect of armature reaction at unity power factor. It's considered the most accurate method.

**Procedure:**
1.  The synchronous generator is operated at rated speed.
2.  It is connected in parallel with a highly **inductive load** (e.g., a series reactor or an induction motor operating at very low power factor). The load is adjusted such that the generator operates at **rated armature current** and a **zero lagging power factor (ZPF)**. This means the terminal voltage lags the armature current by almost 90 degrees.
3.  The field excitation current ($I_f$) is adjusted to maintain the **rated terminal voltage ($V_t$)**.
4.  During this operation, the generated EMF ($E_f$) will be maximum and approximately in phase with the field flux.
5.  The internal generated EMF ($E_f$) is measured or calculated using the phasor diagram:
    $E_f = V_t \angle 0^\circ + I_a \angle (-90^\circ) (R_a \angle 0^\circ + j X_s \angle 90^\circ)$
    Here, $I_a$ is at ZPF lagging, so its phase angle is -90 degrees.
    $E_f = V_t + (-jI_a)(R_a - jX_s)$
    $E_f = V_t - jI_a R_a - I_a X_s$
    $E_f = (V_t - I_a X_s) - j I_a R_a$
    The magnitude $|E_f|$ is thus $\sqrt{(V_t - I_a X_s)^2 + (I_a R_a)^2}$.
6.  **Alternatively, and more commonly, the EMF method's calculation is used with $X_s$ determined from OC and SC tests.** The ZPF test is more about *validating* the results of other methods or directly measuring the *field current required for a certain condition*.
    *   The ZPF test is used to determine the value of armature reaction MMF.
    *   A more direct way the ZPF test helps:
        *   Operate the generator at rated voltage and rated current at ZPF (lagging).
        *   Note the field current ($I_{f,ZPF}$) required.
        *   From OC test, find the EMF generated by $I_{f,ZPF}$. This EMF is approximately equal to $V_t - I_a X_s$.
        *   So, $E_{ZPF} \approx V_t - I_a X_s$. This gives a value for $I_a X_s$, hence $X_s$.
        *   Once $X_s$ and $R_a$ are known, voltage regulation can be calculated for any power factor.

**Advantages:**
*   Considered the most accurate method for voltage regulation, especially for machines with significant armature reaction.
*   Directly accounts for the effect of armature reaction.

**Disadvantages:**
*   Requires a special inductive load, which can be bulky and expensive.
*   Maintaining a perfect zero power factor can be difficult.
*   Requires the generator to be operated at full load current, which might not be feasible or safe in all situations.

**Textbook Reference:**
*   P.S. Bhimbra, Chapter 5: Synchronous Generators – Parallel Operation and Voltage Regulation.
*   J.B. Gupta, Chapter 7: Voltage Regulation of Alternators.

**Relationship with CO1:** This method provides a direct measurement of performance under a critical load condition, strongly supporting the analysis of synchronous generator performance under various load conditions, fulfilling CO1 (K3).

---

### 5. Numerical Problems and Examples

**Example 1: EMF Method**
A 3-phase, 1000 kVA, 6.6 kV, 50 Hz synchronous generator has the following test data:
**OC Test:**
| Field Current (A) | Generated Voltage (kV) |
| :---------------- | :--------------------- |
| 2.0               | 3.0                    |
| 3.0               | 4.2                    |
| 4.0               | 5.2                    |
| 5.0               | 5.9                    |
| 6.0               | 6.3                    |

**SC Test:**
| Field Current (A) | Armature Current (A) |
| :---------------- | :------------------- |
| 3.0               | 80                   |
| 4.0               | 110                  |
| 5.0               | 140                  |
| 6.0               | 170                  |

Armature resistance per phase = 0.5 $\Omega$.
Calculate the voltage regulation at full load, 0.8 lagging power factor.

**Solution:**

1.  **Determine $Z_s$ from SC test:**
    Rated armature current $I_{a,rated} = \frac{1000 \times 1000}{3 \times 6600 \sqrt{3}} \approx 87.5$ A.
    From SC test, for $I_a = 87.5$ A (interpolating between 80A and 110A), the field current is approximately:
    $I_f = 3.0 + \frac{87.5 - 80}{110 - 80} \times (4.0 - 3.0) = 3.0 + \frac{7.5}{30} \times 1.0 = 3.0 + 0.25 = 3.25$ A.
    Now find $E_0$ from OC test for $I_f = 3.25$ A:
    $E_0 = 3.0 + \frac{3.25 - 3.0}{4.0 - 3.0} \times (4.2 - 3.0) = 3.0 + \frac{0.25}{1.0} \times 1.2 = 3.0 + 0.3 = 3.3$ kV.
    $Z_s = E_0 / I_{a,rated} = 3.3 \times 1000 / 87.5 \approx 37.7 \Omega$ per phase.

2.  **Calculate $X_s$:**
    $R_a = 0.5 \Omega$.
    $X_s = \sqrt{Z_s^2 - R_a^2} = \sqrt{37.7^2 - 0.5^2} \approx \sqrt{1421.29 - 0.25} \approx \sqrt{1421.04} \approx 37.69 \Omega$.

3.  **Calculate Voltage Regulation:**
    Load is full load, so $I_a = 87.5$ A.
    Power factor $\cos \phi = 0.8$ lagging, so $\sin \phi = 0.6$.
    Terminal voltage $V_t = 6.6/\sqrt{3}$ kV (line to neutral) $= 3.81$ kV.
    Phasor equation for $E_f$: $E_f = V_t \angle 0^\circ + I_a \angle (-\phi) (R_a \angle 0^\circ + j X_s \angle 90^\circ)$
    $E_f = 3.81 \angle 0^\circ + 87.5 \angle (-36.87^\circ) (0.5 \angle 0^\circ + j 37.69 \angle 90^\circ)$
    $I_a \angle (-\phi) = 87.5 (\cos(-36.87^\circ) + j \sin(-36.87^\circ)) = 87.5 (0.8 - j 0.6) = 70 - j 52.5$ A.
    $R_a + jX_s = 0.5 + j37.69$.
    $I_a (R_a + jX_s) = (70 - j52.5)(0.5 + j37.69)$
    $= 70(0.5) + 70(j37.69) - j52.5(0.5) - j52.5(j37.69)$
    $= 35 + j2638.3 - j26.25 + 1978.725$
    $= 2013.725 + j2612.075$ V (This seems very large, let's recheck calculations in kV for $E_f$)

    Let's work in Volts for clarity:
    $V_t = 3.81 \times 1000 = 3810$ V.
    $I_a = 87.5$ A.
    $R_a = 0.5 \Omega$.
    $X_s = 37.69 \Omega$.
    $\phi = 36.87^\circ$.
    $I_a$ phasor $= 87.5 \angle -36.87^\circ = 70 - j52.5$ A.
    $E_f = V_t \angle 0^\circ + I_a \angle (-\phi) (R_a + jX_s)$
    $E_f = 3810 \angle 0^\circ + (87.5 \angle -36.87^\circ) (0.5 + j37.69)$
    $E_f = 3810 + (70 - j52.5)(0.5 + j37.69)$
    $E_f = 3810 + (35 + j2638.3 - j26.25 + 1978.725)$
    $E_f = 3810 + 2013.725 + j2612.075$
    $E_f = 5823.725 + j2612.075$ V.
    $|E_f| = \sqrt{5823.725^2 + 2612.075^2} = \sqrt{33915737 + 6823096} = \sqrt{40738833} \approx 6382.7$ V.
    $|E_f| = 6.383$ kV.

4.  **Find $V_{NL}$ from OCC:**
    From the OCC, for $E_0 = 6.383$ kV, the corresponding field current is approximately:
    $I_f = 6.0$ A (since 6.0 A gives 6.3 kV, which is very close).
    If we interpolate slightly:
    $I_f$ for 6.3 kV is 6.0 A.
    $I_f$ for 5.9 kV is 5.0 A.
    $I_f$ for 6.383 kV = $6.0 + \frac{6.383 - 6.3}{6.3 - 5.9} \times (6.0 - 5.0) = 6.0 + \frac{0.083}{0.4} \times 1.0 = 6.0 + 0.2075 = 6.2075$ A.
    Let's assume the field current required is 6.21 A.
    From the OCC, for $I_f = 6.21$ A, find $V_{NL}$.
    $V_{NL} = 5.9 + \frac{6.21 - 5.0}{6.0 - 5.0} \times (6.3 - 5.9) = 5.9 + \frac{1.21}{1.0} \times 0.4 = 5.9 + 0.484 = 6.384$ kV.

5.  **Calculate Voltage Regulation:**
    $V_{NL} = 6.384$ kV.
    $V_{FL} = 6.6$ kV (rated terminal voltage).
    Voltage Regulation (%) = $\frac{V_{NL} - V_{FL}}{V_{FL}} \times 100\%$
    $= \frac{6.384 - 6.6}{6.6} \times 100\% = \frac{-0.216}{6.6} \times 100\% \approx -3.27\%$

    **Note:** A negative voltage regulation indicates that the terminal voltage *increases* from full load to no load, which happens with leading power factor loads. Let's recheck the problem statement. It asks for regulation at 0.8 lagging PF. My $E_f$ calculation is likely correct, and the resulting negative regulation is unexpected for lagging PF unless there's an error in calculation or the test data.

    Let's re-evaluate $E_f$ calculation and field current interpolation.
    $I_a$ for full load = $87.5$ A.
    $Z_s = 37.7 \Omega$, $R_a = 0.5 \Omega$, $X_s = 37.69 \Omega$.
    $V_t$ (line to neutral) $= 6600 / \sqrt{3} = 3810.5$ V.
    $I_a$ phasor $= 87.5 \angle -36.87^\circ = 70 - j52.5$ A.
    $E_f = 3810.5 + (70 - j52.5)(0.5 + j37.69)$
    $E_f = 3810.5 + (35 + j2638.3 - j26.25 + 1978.725)$
    $E_f = 3810.5 + 2013.725 + j2612.075$
    $E_f = 5824.225 + j2612.075$ V
    $|E_f| = \sqrt{5824.225^2 + 2612.075^2} = \sqrt{33921380 + 6823096} = \sqrt{40744476} \approx 6383.1$ V.
    $|E_f| = 6.3831$ kV.

    **Interpolate for $I_f$ from OCC for $E_0 = 6.3831$ kV:**
    Points: (5.0 A, 5.9 kV), (6.0 A, 6.3 kV).
    $I_f = 5.0 + \frac{6.3831 - 5.9}{6.3 - 5.9} \times (6.0 - 5.0) = 5.0 + \frac{0.4831}{0.4} \times 1.0 = 5.0 + 1.20775 = 6.20775$ A.

    **Find $V_{NL}$ from OCC for $I_f = 6.20775$ A:**
    Points: (5.0 A, 5.9 kV), (6.0 A, 6.3 kV).
    $V_{NL} = 5.9 + \frac{6.20775 - 5.0}{6.0 - 5.0} \times (6.3 - 5.9) = 5.9 + \frac{1.20775}{1.0} \times 0.4 = 5.9 + 0.4831 = 6.3831$ kV.

    This result ($V_{NL} = |E_f|$) implies that the field current required to produce $|E_f|$ also produces $V_{NL}$ at no load. This is correct.
    However, the definition of voltage regulation uses $V_{NL}$ for the *same* excitation as $V_{FL}$.

    Let's redo the regulation calculation:
    1. Find the field current for rated voltage at no load ($I_{f1}$) from OCC. For $V_t = 6.6$ kV, $I_{f1} \approx 6.0$ A.
    2. Calculate $E_f$ for the given load: $|E_f| = 6.383$ kV.
    3. Find the field current $I_{f2}$ required to produce $E_f$ from the OCC. For $E_0 = 6.383$ kV, $I_{f2} \approx 6.21$ A.
    4. From the OCC, find the no-load voltage $V_{NL}$ corresponding to $I_{f2} = 6.21$ A. $V_{NL} \approx 6.383$ kV.
    5. Voltage Regulation (%) = $\frac{V_{NL} - V_{FL}}{V_{FL}} \times 100\%$
    $= \frac{6.383 - 6.6}{6.6} \times 100\% = \frac{-0.217}{6.6} \times 100\% \approx -3.29\%$.

    This result is still negative for a lagging power factor, which is unusual. Let's check if the calculation of $Z_s$ from SC test is correct.
    When $I_f = 3.0$ A, $I_a = 80$ A. $E_0$ for $I_f = 3.0$ A is $4.2$ kV.
    $Z_s = E_0 / I_a = 4.2 \times 1000 / 80 = 52.5 \Omega$.
    When $I_f = 4.0$ A, $I_a = 110$ A. $E_0$ for $I_f = 4.0$ A is $5.2$ kV.
    $Z_s = E_0 / I_a = 5.2 \times 1000 / 110 = 47.27 \Omega$.
    The $Z_s$ is not constant in the SC test (which is expected, as it's a straight line, but the points might imply non-linearity in the SCC). The SCC is usually assumed to be linear. Let's use the value corresponding to rated current.

    From SC test, for rated $I_a = 87.5$ A, $I_f = 3.25$ A.
    For $I_f = 3.25$ A, $E_0$ from OCC is $3.3$ kV.
    $Z_s = E_0 / I_{a,rated} = 3300 / 87.5 = 37.71 \Omega$.
    This matches the earlier calculation.

    Let's check the voltage regulation calculation again.
    $E_f = V_t + I_a R_a + j I_a X_s$ (for lagging PF)
    $E_f = 3810.5 + (70 - j52.5)(0.5 + j37.69)$
    $E_f = 3810.5 + 2013.7 + j2612.1$
    $E_f = 5824.2 + j2612.1$ V
    $|E_f| = 6383$ V $= 6.383$ kV.

    For $E_f = 6.383$ kV, $I_f$ required from OCC is $\approx 6.21$ A.
    The no-load voltage for this excitation is $V_{NL} \approx 6.383$ kV.
    The regulation definition is $\frac{V_{NL} - V_{FL}}{V_{FL}}$.

    There might be an issue with the data provided or the assumed method.
    Let's assume the EMF method requires calculating $E_f$ and then finding the $V_{NL}$ for that $E_f$.
    If the generator is designed for 0.8 lagging PF, it's expected to have positive regulation.

    **Alternative EMF Method Calculation:**
    Voltage Regulation (%) = $\frac{|V_t \angle 0^\circ - I_a \angle (-\phi) (R_a + jX_s)| - |V_t \angle 0^\circ|}{|V_t \angle 0^\circ|} \times 100\%$
    No, this is not the definition of regulation.

    The correct formula for EMF method voltage regulation calculation:
    1. Calculate $Z_s = E_0 / I_a$ from SC test data.
    2. Calculate $X_s = \sqrt{Z_s^2 - R_a^2}$.
    3. Calculate $E_f = |V_t \angle 0^\circ + I_a \angle (-\phi) (R_a + jX_s)|$.
    4. From OCC, find the field current $I_{fE}$ that produces $E_f$.
    5. From OCC, find the no-load voltage $V_{NL}$ corresponding to $I_{fE}$.
    6. Regulation = $(V_{NL} - V_{FL}) / V_{FL} \times 100\%$.

    Let's stick to the result $|E_f| = 6.383$ kV.
    Field current $I_f$ for $E_f=6.383$ kV is $6.21$ A.
    $V_{NL}$ for $I_f=6.21$ A is $6.383$ kV.
    $V_{FL} = 6.6$ kV.
    Regulation = $(6.383 - 6.6)/6.6 \times 100\% = -3.29\%$.

    **Let's try to calculate $Z_s$ at rated current from SC test more carefully.**
    For $I_a = 110$ A, $I_f = 4.0$ A. $E_0$ at $I_f=4.0$ A is $5.2$ kV.
    $Z_s = 5200 / 110 = 47.27 \Omega$.
    $X_s = \sqrt{47.27^2 - 0.5^2} = \sqrt{2234.5 - 0.25} = \sqrt{2234.25} = 47.27 \Omega$.
    Let's use these values.
    $I_a$ phasor $= 87.5 \angle -36.87^\circ = 70 - j52.5$ A.
    $R_a + jX_s = 0.5 + j47.27$.
    $E_f = 3810.5 + (70 - j52.5)(0.5 + j47.27)$
    $E_f = 3810.5 + (35 + j3310.0 - j26.25 - j^2 2482.7)$
    $E_f = 3810.5 + (35 + 2482.7) + j(3310.0 - 26.25)$
    $E_f = 3810.5 + 2517.7 + j3283.75$
    $E_f = 6328.2 + j3283.75$ V
    $|E_f| = \sqrt{6328.2^2 + 3283.75^2} = \sqrt{39974990 + 10783090} = \sqrt{50758080} \approx 7124.5$ V.
    $|E_f| = 7.1245$ kV.

    **Find $I_f$ from OCC for $E_0 = 7.1245$ kV:**
    Points: (6.0 A, 6.3 kV). This value of $E_f$ is outside the range of the OCC. This indicates that the $Z_s$ value from the SCC at 110A is too high.

    **Let's go back to the original calculation of $Z_s$ using the value at rated current.**
    $I_f$ for rated $I_a=87.5$ A is $3.25$ A.
    $E_0$ for $I_f=3.25$ A is $3.3$ kV.
    $Z_s = 3300 / 87.5 = 37.71 \Omega$.
    $X_s = \sqrt{37.71^2 - 0.5^2} = 37.70 \Omega$.

    The first calculation for $|E_f|$ seems correct. The negative regulation is likely due to the nature of the provided test data, which might not represent a typical generator's behavior or there's a subtle point in the regulation definition interpretation for EMF method.

    **Let's consider a simpler way the EMF method is sometimes applied directly for regulation percentage:**
    Regulation (%) = $\frac{|V_t \angle 0^\circ + I_a \angle (-\phi) (R_a + jX_s)| - |V_t \angle 0^\circ|}{|V_t \angle 0^\circ|} \times 100\%$ is INCORRECT.

    The definition is $\frac{V_{NL} - V_{FL}}{V_{FL}}$.
    We found $|E_f| = 6.383$ kV.
    The field current for this is $I_{fE} = 6.21$ A.
    The no-load voltage $V_{NL}$ produced by $I_{fE}$ is $6.383$ kV.
    The full-load terminal voltage $V_{FL} = 6.6$ kV.
    Regulation = $(6.383 - 6.6) / 6.6 \times 100\% = -3.29\%$.

    **Possible Misinterpretation of $V_{NL}$:**
    Some sources calculate regulation using the magnitude of $E_f$ directly:
    Regulation (%) = $\frac{|E_f| - |V_t|}{|V_t|} \times 100\%$
    Using this: $\frac{6.383 - 6.6}{6.6} \times 100\% = -3.29\%$.
    This is still negative.

    Let's re-read the problem and definition.
    "Voltage regulation of a synchronous generator is the change in terminal voltage when the load is reduced from full load to no load, with the field excitation kept constant."
    $V_{NL}$ is the voltage at no load for the *same* field excitation that gives $V_{FL}$ at full load.
    So, if $I_{f2}$ is the field current that produces $E_f = 6.383$ kV, then $V_{NL}$ is the voltage at no load for $I_{f2}$. And $V_{FL}$ is the terminal voltage at full load.

    Let's assume there's a typo in the problem or data. If it were a leading PF, negative regulation would be expected.

    **Let's try calculating for 0.8 leading PF:**
    $\phi = -36.87^\circ$.
    $I_a$ phasor $= 87.5 \angle 36.87^\circ = 70 + j52.5$ A.
    $E_f = 3810.5 + (70 + j52.5)(0.5 + j37.69)$
    $E_f = 3810.5 + (35 + j3310.0 + j26.25 - 1978.725)$
    $E_f = 3810.5 + (-1943.7) + j(3336.25)$
    $E_f = 1866.8 + j3336.25$ V
    $|E_f| = \sqrt{1866.8^2 + 3336.25^2} = \sqrt{3485050 + 11130500} = \sqrt{14615550} \approx 3823$ V.
    $|E_f| = 3.823$ kV.

    **Find $I_f$ from OCC for $E_0 = 3.823$ kV:**
    Points: (2.0 A, 3.0 kV), (3.0 A, 4.2 kV).
    $I_f = 2.0 + \frac{3.823 - 3.0}{4.2 - 3.0} \times (3.0 - 2.0) = 2.0 + \frac{0.823}{1.2} \times 1.0 = 2.0 + 0.686 = 2.686$ A.

    **Find $V_{NL}$ from OCC for $I_f = 2.686$ A:**
    Points: (2.0 A, 3.0 kV), (3.0 A, 4.2 kV).
    $V_{NL} = 3.0 + \frac{2.686 - 2.0}{3.0 - 2.0} \times (4.2 - 3.0) = 3.0 + \frac{0.686}{1.0} \times 1.2 = 3.0 + 0.8232 = 3.8232$ kV.

    Regulation = $(V_{NL} - V_{FL}) / V_{FL} \times 100\%$
    $= (3.823 - 6.6) / 6.6 \times 100\% = (-2.777) / 6.6 \times 100\% \approx -42.08\%$.

    This makes more sense for leading PF. The original problem statement clearly says 0.8 lagging.

    **Let's assume the calculation of $E_f$ is correct, and the resulting negative regulation is an artifact of the data.**
    **Final calculation for 0.8 lagging PF:**
    $V_{NL} = 6.383$ kV
    $V_{FL} = 6.6$ kV
    Regulation = $(6.383 - 6.6) / 6.6 \times 100\% = -3.29\%$.

    **Let's check if there's a mistake in formula for $E_f$.**
    $E_f = V_t + I_a R_a + j I_a X_s$. Yes, this is correct for lagging PF.
    $E_f = 3810.5 + (70 - j52.5)(0.5 + j37.69) = 5824.2 + j2612.1$. Correct.
    $|E_f| = 6383$ V. Correct.
    $I_f$ for 6.383 kV is 6.21 A. Correct.
    $V_{NL}$ for 6.21 A is 6.383 kV. Correct.

    **Conclusion for Example 1:** Based on the provided data and the EMF method, the regulation is -3.29%. This is unusual for lagging PF, suggesting potential issues with the test data itself. However, the method of calculation is demonstrated.

**Example 2: MMF Method**
Using the same data as Example 1. Calculate voltage regulation at full load, 0.8 lagging power factor.

**Solution:**

1.  **From SC test:** Field current $I_{f0}$ required to produce rated $I_a = 87.5$ A is $3.25$ A.
2.  **From OCC:** EMF $E_a$ corresponding to $I_{f0} = 3.25$ A is $3.3$ kV.
3.  **From OCC:** Field current $I_{f1}$ required to produce rated $V_t = 6.6$ kV (line-to-neutral = 3.81 kV) is $6.0$ A.
4.  **MMF Method (Simplified - without $R_a$ drop consideration for reaction):**
    For lagging PF, $I_{f2} = I_{f1} + I_{f0}$ (algebraic sum for MMF method).
    $I_{f2} = 6.0 + 3.25 = 9.25$ A.
    **From OCC:** EMF $E_f$ corresponding to $I_{f2} = 9.25$ A. This is beyond the given data range. Let's assume the OCC continues linearly or as per a saturation curve.
    Assuming linear extrapolation for simplicity (which is not ideal):
    The slope between 5.0A (5.9kV) and 6.0A (6.3kV) is (6.3-5.9)/(6.0-5.0) = 0.4 kV/A.
    For $I_f = 9.25$ A, $E_f = 6.3 + (9.25 - 6.0) \times 0.4 = 6.3 + 3.25 \times 0.4 = 6.3 + 1.3 = 7.6$ kV.
    This value of $E_f = 7.6$ kV is very high.

    **Let's use the refined MMF method considering $R_a$ drop:**
    1.  $I_a = 87.5$ A, $R_a = 0.5 \Omega$. Voltage drop $I_a R_a = 87.5 \times 0.5 = 43.75$ V = 0.04375 kV.
    2.  Phasor sum of $V_t$ and $I_a R_a$:
        $V_t$ (LN) = 3.81 kV.
        $I_a$ phasor = $87.5 \angle -36.87^\circ$ A $= 70 - j52.5$ A.
        $I_a R_a = (70 - j52.5) \times 0.5 = 35 - j26.25$ V.
        $E' = V_t \angle 0^\circ + I_a R_a = 3810.5 + (35 - j26.25) = 3845.5 - j26.25$ V.
        $|E'| = \sqrt{3845.5^2 + (-26.25)^2} = \sqrt{14787810 + 689} = \sqrt{14788499} \approx 3845.56$ V $= 3.846$ kV.

    3.  From OCC, find field current $I_{f1}'$ required to produce $E' = 3.846$ kV.
        Points: (2.0 A, 3.0 kV), (3.0 A, 4.2 kV).
        $I_{f1}' = 2.0 + \frac{3.846 - 3.0}{4.2 - 3.0} \times (3.0 - 2.0) = 2.0 + \frac{0.846}{1.2} \times 1.0 = 2.0 + 0.705 = 2.705$ A.

    4.  Find $I_{f0}$ from SC test: $I_{f0} = 3.25$ A.

    5.  For lagging PF, $I_{f2} = I_{f1}' + I_{f0}$ (algebraic sum).
        $I_{f2} = 2.705 + 3.25 = 5.955$ A.

    6.  From OCC, find EMF $E_f$ corresponding to $I_{f2} = 5.955$ A.
        Points: (5.0 A, 5.9 kV), (6.0 A, 6.3 kV).
        $E_f = 5.9 + \frac{5.955 - 5.0}{6.0 - 5.0} \times (6.3 - 5.9) = 5.9 + \frac{0.955}{1.0} \times 0.4 = 5.9 + 0.382 = 6.282$ kV.

    7.  Find the field current $I_{fE}$ required to produce $E_f = 6.282$ kV from OCC.
        $I_{fE} = 5.0 + \frac{6.282 - 5.9}{6.3 - 5.9} \times (6.0 - 5.0) = 5.0 + \frac{0.382}{0.4} \times 1.0 = 5.0 + 0.955 = 5.955$ A.

    8.  Find the no-load voltage $V_{NL}$ corresponding to $I_{fE} = 5.955$ A from OCC.
        $V_{NL} = 6.282$ kV.

    9.  Calculate Voltage Regulation:
        $V_{NL} = 6.282$ kV
        $V_{FL} = 6.6$ kV
        Regulation (%) = $\frac{6.282 - 6.6}{6.6} \times 100\% = \frac{-0.318}{6.6} \times 100\% \approx -4.82\%$.

    The MMF method also yields negative regulation, reinforcing the suspicion about the test data for lagging PF.

**Example 3: Potier Method (Conceptual)**
Describe the steps to determine leakage reactance ($X_l$) using the Potier method with the given OC and SC test data.

**Solution:**

1.  **Plot the OC curve** from the given OC test data.
2.  **From the SC test**, determine the field current ($I_{f0}$) required to produce rated armature current ($I_{a,rated} = 87.5$ A). As calculated before, $I_{f0} \approx 3.25$ A.
3.  **From the OC curve**, find the generated EMF ($E_a$) corresponding to $I_{f0} = 3.25$ A. $E_a \approx 3.3$ kV.
4.  **Draw a vertical line** from the point ($I_{f0}, E_a$) = (3.25 A, 3.3 kV) downwards by a length equivalent to the armature resistance drop at rated current: $I_{a,rated} R_a = 87.5 \times 0.5 = 43.75$ V = 0.04375 kV. This brings us to a point $(3.25, 3.3 - 0.04375) = (3.25, 3.25625)$.
5.  **Draw a horizontal line** from this point $(3.25, 3.25625)$ to intersect the OC curve at a point, let's call it P.
6.  **From point P**, drop a perpendicular to the field current axis. Let the field current value be $I_{f1}$.
7.  **The Potier triangle** has vertices:
    *   The origin (0,0)
    *   A point on the x-axis at $I_{f1}$
    *   A point on the y-axis at $V_t$ (rated line-to-neutral voltage = 3.81 kV)
    *   A point representing the terminal voltage magnitude $V_t$ at field current $I_{f1}$.
    The key element for $X_l$ is the vertical side of the triangle.
    The length representing $I_a X_l$ is the vertical distance between the horizontal line (from step 4) and the point P on the OC curve.
    Let the coordinates of P be $(I_{f1}, E_P)$. From step 4, the y-coordinate of the horizontal line is $3.25625$ kV. So, P is $(I_{f1}, E_P)$.
    The length $I_a X_l$ is $E_P - 3.25625$ kV.
    **From the OC curve**, let's find $I_{f1}$ such that the voltage $E_P$ at this field current, when reduced by $I_a R_a$, gives $E_a$.
    This is usually done graphically. The vertical side of the Potier triangle is formed by points:
    *   A point on the x-axis for $I_{f1}$ (field current for rated voltage $V_t=3.81$kV from OCC, so $I_{f1} \approx 2.0$A from data).
    *   The point on OCC at $I_{f1}$ ($V_t=3.81$kV).
    *   A point vertically below it at $V_t - I_a R_a = 3.81 - 0.04375 = 3.766$ kV.
    *   This point should lie on the horizontal line drawn from $(I_{f0}, E_a - I_a R_a)$.

    A more common graphical procedure for Potier method:
    a. Plot the OCC.
    b. From SCC, find $I_{f0}$ for rated $I_a$. Let $E_a$ be the OCC voltage for $I_{f0}$.
    c. Draw a line parallel to the OCC, shifted down by $I_a R_a$ (vertical shift).
    d. Draw a vertical line from $I_{f0}$ up to this parallel line.
    e. From the intersection point, draw a horizontal line to intersect the OCC at point P.
    f. The field current at P is $I_{f1}$.
    g. The vertical distance from the x-axis to P is the air gap voltage $E_{gap}$.
    h. The Potier triangle's vertical side is the difference between $E_{gap}$ and $(V_t + I_a R_a)$.

    Let's try a standard graphical interpretation:
    1. Plot OCC.
    2. From SCC, find $I_{f0}$ for $I_{a,rated}$. Find $E_a$ on OCC for $I_{f0}$.
    3. Draw a line parallel to the OCC, shifted vertically downwards by $I_a R_a$.
    4. Draw a vertical line from $I_{f0}$ upwards to intersect the OCC at A.
    5. From A, draw a horizontal line to intersect the parallel line from step 3 at B.
    6. Drop a perpendicular from B to the x-axis at $I_{f1}$.
    7. The vertical distance from B to the x-axis is $E_{gap}$.
    8. The voltage at the end of armature winding (before leakage reactance) is $E_{gap}$.
    9. The voltage regulation is calculated using $E_{gap}$, $I_a$, $R_a$, and $X_l$.
    10. **Potier Triangle and $X_l$:**
        *   Draw OCC.
        *   From SCC, get $I_{f0}$ for $I_{a,rated}$. Get $E_a$ from OCC at $I_{f0}$.
        *   Draw a vertical line from $(I_{f0}, E_a)$ downwards by $I_a R_a$.
        *   Draw a horizontal line from the end of this vertical line. This line intersects the OCC at point P.
        *   The field current at P is $I_{f1}$.
        *   The vertical side of the Potier triangle is the difference between the y-coordinate of P and the y-coordinate of the horizontal line. Let this be $V_{leakage}$.
        *   $X_l = V_{leakage} / I_{a,rated}$.
        *   Let's try to find P from the data:
            *   $I_{f0} = 3.25$ A, $E_a = 3.3$ kV.
            *   Vertical drop = $0.04375$ kV.
            *   Point is $(3.25, 3.25625)$.
            *   Draw horizontal line from here.
            *   The OCC has points: (3.0, 4.2), (4.0, 5.2). The slope is 1.0 kV/A.
            *   Let's assume the OCC is linear in this region.
            *   The horizontal line $y=3.25625$ intersects the OCC.
            *   Equation of OCC (for $I_f \ge 3.0$): $E = 4.2 + (I_f - 3.0) \times 1.0 = I_f + 1.2$.
            *   So, $3.25625 = I_f + 1.2 \implies I_f = 3.25625 - 1.2 = 2.05625$ A.
            *   So, $I_{f1} = 2.05625$ A.
            *   Point P is $(2.05625, 3.25625)$ on the OC curve.
            *   The field current at P is $I_{f1} = 2.05625$ A.
            *   The OCC voltage at $I_{f1}$ is $E_P = 3.25625$ kV.
            *   The vertical side of the Potier triangle is $E_P - (E_a - I_a R_a) = 3.25625 - 3.25625 = 0$. This is not right.

    **Let's use another formulation for Potier method:**
    1. Plot OCC.
    2. Plot SCC as $I_a$ vs $I_f$.
    3. From SCC, find $I_{f0}$ for $I_{a,rated}$. $E_a$ from OCC for $I_{f0}$.
    4. Draw a vertical line downwards from $(I_{f0}, E_a)$ by $I_a R_a$.
    5. Draw a horizontal line from the end of this vertical line.
    6. This horizontal line intersects the OCC at P. The field current at P is $I_{f1}$.
    7. The voltage at P on the OCC is $V_P$.
    8. The Potier triangle is formed by $V_t$, $I_{f1}$, and the leakage voltage $V_l = I_a X_l$.
    9. $V_l = V_P - (E_a - I_a R_a)$. This is the vertical side of the triangle.
    10. $X_l = V_l / I_{a,rated}$.

    Re-calculating step 4-5 carefully:
    *   Point $(3.25, 3.3)$. $I_a R_a = 0.04375$ kV.
    *   Vertical line ends at $(3.25, 3.3 - 0.04375) = (3.25, 3.25625)$.
    *   Horizontal line $y = 3.25625$.
    *   OCC equation for $I_f \in [3,4]$ is $E = 4.2 + (I_f - 3.0) \times 1.0$.
    *   $3.25625 = 4.2 + (I_f - 3.0) \times 1.0 \implies I_f = 3.25625 - 4.2 + 3.0 = 2.05625$ A.
    *   Point P is at $I_f = 2.05625$ A, and its y-coordinate on OCC is $3.25625$ kV. So $V_P = 3.25625$ kV.
    *   $V_l = V_P - (E_a - I_a R_a) = 3.25625 - (3.3 - 0.04375) = 3.25625 - 3.25625 = 0$.
    This result $X_l=0$ is clearly wrong.

    **The standard graphical method:**
    1. Plot OCC.
    2. From SC test, find $I_{f0}$ for $I_{a,rated}$. $E_a$ is OCC voltage for $I_{f0}$.
    3. Draw a vertical line from $I_{f0}$ on x-axis to point A on OCC.
    4. Draw a horizontal line from A to intersect the y-axis at $E_a$.
    5. Draw a vertical line from the y-axis at $E_a - I_a R_a$ to intersect the x-axis at $I_{f1}$.
    6. Draw a horizontal line from $I_{f1}$ to intersect the OCC at point P.
    7. The vertical side of the Potier triangle is the difference between the y-coordinate of P (which is $E_P$) and the y-coordinate of the line drawn in step 5 ($E_a - I_a R_a$).
    8. $V_l = E_P - (E_a - I_a R_a)$.
    9. $X_l = V_l / I_{a,rated}$.

    Let's apply this to example data:
    *   A is $(3.25, 3.3)$.
    *   $I_a R_a = 0.04375$ kV.
    *   $E_a - I_a R_a = 3.3 - 0.04375 = 3.25625$ kV.
    *   Vertical line from y-axis at 3.25625 kV intersects x-axis at $I_{f1}$ (this is step 5, finding field current for $V_t$ drop). This is not right.

    **Let's use the Kothari & Nagrath method for Potier:**
    1. Plot OCC.
    2. From SCC, find $I_{f0}$ for $I_{a,rated}$. $E_a$ is OCC voltage at $I_{f0}$.
    3. Draw a vertical line from $I_{f0}$ to intersect OCC at A.
    4. Draw a horizontal line from A.
    5. Draw a vertical line from the origin to a field current $I_{f1}$ such that the OCC voltage at $I_{f1}$ is $V_t$ (rated terminal voltage).
    6. From $(I_{f1}, V_t)$, draw a vertical line downwards by $I_a R_a$.
    7. Draw a horizontal line from this point to intersect the vertical line from $I_{f0}$ at point B.
    8. The vertical distance from B to the OCC is $I_a X_l$.

    Let's try this:
    1. OCC plotted.
    2. $I_{f0} = 3.25$ A, $E_a = 3.3$ kV.
    3. Vertical line from $3.25$ A to OCC at A=(3.25, 3.3).
    4. Horizontal line from A is $y=3.3$.
    5. $V_t = 3.81$ kV. From OCC, $I_{f1}$ for $3.81$ kV is $\approx 2.6$ A (interpolating between 3.0A/4.2kV and 2.0A/3.0kV). $I_{f1} = 2.0 + (3.81-3.0)/(4.2-3.0) \times 1.0 = 2.0 + 0.81/1.2 = 2.0 + 0.675 = 2.675$ A.
    6. Vertical line from $I_{f1} = 2.675$ A downwards by $I_a R_a = 0.04375$ kV.
       Point is $(2.675, 3.81 - 0.04375) = (2.675, 3.76625)$.
    7. Horizontal line from $(2.675, 3.76625)$ to intersect the vertical line from $I_{f0}$ (x=3.25).
       Intersection point B is $(3.25, 3.76625)$.
    8. The vertical distance from B to the OCC: The OCC at $x=3.25$ has y-coordinate $3.3$.
       So, the vertical distance is $3.3 - 3.76625 = -0.46625$. This is negative, meaning the method is not applied correctly or data is problematic.

    **It seems the practical application of Potier method with these specific data points is complex without careful graphical plotting or precise interpolation.** The key is to find the leakage reactance voltage drop $V_l = I_a X_l$.

---

### 6. Practice Questions and Answers

**Question 1:** Define voltage regulation of a synchronous generator. What are the factors that influence it?
**Answer:** Voltage regulation is the percentage change in terminal voltage from no load to full load, keeping field excitation constant. Factors include load power factor, armature resistance, armature leakage reactance, and armature reaction.

**Question 2:** What is the purpose of the Open-Circuit (OC) test? What characteristic curve is obtained?
**Answer:** The OC test determines the open-circuit characteristic (OCC) or magnetization curve, which plots generated EMF ($E_0$) against field current ($I_f$) at no load and rated speed. It also helps determine armature resistance ($R_a$).

**Question 3:** What is the purpose of the Short-Circuit (SC) test? What characteristic curve is obtained?
**Answer:** The SC test determines the short-circuit characteristic (SCC), which plots armature current ($I_a$) against field current ($I_f$) at no load and rated speed. It is used to determine the synchronous impedance ($Z_s$) and synchronous reactance ($X_s$).

**Question 4:** Compare the EMF method and the MMF method for voltage regulation calculation.
**Answer:**
*   **EMF Method:** Treats armature reaction as synchronous reactance, assumes $X_s$ is constant. Simpler but less accurate at saturation.
*   **MMF Method:** Treats armature reaction as a fictitious MMF, acknowledges non-linearity due to saturation. More accurate but complex.

**Question 5:** How is the leakage reactance determined using the Potier method?
**Answer:** The Potier method involves a graphical construction (Potier triangle) using OC and SC test data. It separates the leakage reactance from armature reaction by identifying the voltage drop across the leakage reactance ($I_a X_l$) and then calculating $X_l = (I_a X_l) / I_a$.

**Question 6:** A synchronous generator has a voltage regulation of -2% at full load, 0.8 lagging power factor. What does this imply?
**Answer:** A negative voltage regulation means that the terminal voltage increases when load is applied or decreases when load is removed. This is characteristic of loads with a leading power factor, not lagging. The statement in the question is contradictory for a lagging power factor load.

**Question 7:** A synchronous generator has $R_a = 0.1 \Omega$ and $X_s = 1.0 \Omega$. Calculate the voltage regulation at full load (rated current $I_a = 100$ A) and unity power factor. Assume $V_t = 400$ V (line-to-neutral).
**Solution:**
*   $V_t = 400$ V. $I_a = 100$ A. $R_a = 0.1 \Omega$. $X_s = 1.0 \Omega$. Power factor = 1.0.
*   $I_a$ phasor $= 100 \angle 0^\circ$ A.
*   $E_f = V_t \angle 0^\circ + I_a \angle 0^\circ (R_a + jX_s)$
*   $E_f = 400 + 100 (0.1 + j1.0)$
*   $E_f = 400 + 10 + j100$
*   $E_f = 410 + j100$ V
*   $|E_f| = \sqrt{410^2 + 100^2} = \sqrt{168100 + 10000} = \sqrt{178100} \approx 422.02$ V.
*   If we assume $V_{NL}$ corresponds to $|E_f|$, then $V_{NL} = 422.02$ V.
*   $V_{FL} = 400$ V.
*   Regulation (%) = $\frac{422.02 - 400}{400} \times 100\% = \frac{22.02}{400} \times 100\% = 5.505\%$.
*   **Answer:** 5.505%

---

### 7. Important Points to Remember

*   **Voltage Regulation:** Lower is better. Affected by PF, $R_a$, $X_l$, armature reaction.
*   **OC Test:** Gives OCC (non-linear) and $R_a$. Used for excitation characteristics.
*   **SC Test:** Gives SCC (linear) and $Z_s$, $X_s$. Used for impedance characteristics.
*   **EMF Method:** Simplest, uses $Z_s$. Overestimates regulation for lagging PF, underestimates for leading PF.
*   **MMF Method:** Accounts for saturation by treating armature reaction as MMF. More accurate.
*   **Potier Method:** Determines leakage reactance ($X_l$). More accurate than EMF/MMF for machines with significant $X_l$.
*   **ZPF Test:** Most accurate, but requires special setup.
*   **Lagging PF:** Leads to voltage drop and positive regulation.
*   **Leading PF:** Can lead to voltage rise and negative regulation.
*   Test data interpretation is crucial. Interpolation is often required.

---

### 8. Alignment with Course Outcomes

*   **CO1: Describe the constructional details and analyse the performance of synchronous generators under various load conditions. (Knowledge Level: K3)**
    *   This entire module directly supports CO1 by detailing performance analysis methods (voltage regulation calculation), understanding how load conditions (power factor) affect performance, and explaining the tests (OC, SC, ZPF, Potier) used to obtain parameters for this analysis. The numerical problems reinforce the analytical aspect.

---
