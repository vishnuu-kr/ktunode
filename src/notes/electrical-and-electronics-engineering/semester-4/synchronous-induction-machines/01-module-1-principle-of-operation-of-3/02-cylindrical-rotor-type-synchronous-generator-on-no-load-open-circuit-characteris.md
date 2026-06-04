---
title: "Cylindrical-rotor type synchronous generator on no-load – open circuit characteristics - Synchronous generator on load – armature reaction – effect of armature reaction - synchronous impedance - Equivalent circuit - phasor diagram – numerical problems"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 1: Principle of Operation of 3"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35dec"
status: "completed"
scrapedAt: "2026-05-23T16:19:07.809Z"
---
# SYNCHRONOUS & INDUCTION MACHINES

## Module 1: Principle of Operation of 3-Phase Synchronous Generators

### Topic: Cylindrical-rotor type synchronous generator on no-load – open circuit characteristics - Synchronous generator on load – armature reaction – effect of armature reaction - synchronous impedance - Equivalent circuit - phasor diagram – numerical problems

---

### **1. Introduction to Synchronous Generators**

Synchronous generators (also known as alternators) are the primary source of electrical energy in most power systems. They convert mechanical energy into electrical energy at a constant frequency determined by their speed and the number of poles. The speed at which they operate is synchronized with the frequency of the power system, hence the name "synchronous."

*   **Key Concept:** The fundamental principle of operation relies on Faraday's Law of Electromagnetic Induction. A relative motion between a magnetic field and a conductor induces an electromotive force (EMF) in the conductor.

*   **Types of Synchronous Generators:**
    *   **Cylindrical Rotor:** Used in high-speed applications (e.g., turbo-generators). The rotor has a smooth cylindrical surface with field windings embedded in slots.
    *   **Salient Pole Rotor:** Used in low-speed applications (e.g., hydro-generators). The rotor has poles projecting outwards from the surface.

*   **Reference:** Bhimbra, P.S. (2021). *Electrical Machinery*. Chapter 13.

*   **Course Outcome Alignment:** CO1 (Describe constructional details and analyze performance under various load conditions). This section lays the foundation by introducing the machine and its basic working. (Knowledge Level: K3)

---

### **2. Cylindrical-Rotor Synchronous Generator on No-Load (Open Circuit)**

When a synchronous generator is running at synchronous speed ($N_s$) with its stator terminals open-circuited, the only voltage present is the internally generated EMF due to the rotation of the field flux.

*   **Operation:**
    *   The rotor field winding is supplied with a DC excitation current ($I_f$).
    *   This DC current creates a magnetic field.
    *   As the rotor rotates at synchronous speed, this magnetic field sweeps across the stator conductors.
    *   According to Faraday's Law, an EMF ($E_a$ or $E_0$) is induced in the stator windings.
    *   Since the stator is open-circuited, there is no armature current, and hence no armature reaction or voltage drop.
    *   The induced EMF is directly proportional to the field excitation current ($I_f$) and the speed of rotation.

*   **Synchronous Speed ($N_s$)**:
    $$N_s = \frac{120f}{P}$$
    where:
    *   $f$ is the frequency of the generated voltage (in Hz).
    *   $P$ is the number of poles.

*   **Generated EMF ($E_a$)**:
    $$E_a = k \Phi \omega_m$$
    where:
    *   $k$ is a machine constant.
    *   $\Phi$ is the flux per pole, which is proportional to the field current ($I_f$).
    *   $\omega_m$ is the mechanical speed in radians per second.
    *   Therefore, $E_a \propto I_f$ for a constant speed.

---

### **3. Open Circuit Characteristic (OCC) / No-Load Characteristic**

The Open Circuit Characteristic (OCC) is a curve plotted between the generated EMF ($E_a$) per phase and the field excitation current ($I_f$) when the generator is run at synchronous speed with the stator terminals open-circuited.

*   **Procedure to Obtain OCC:**
    1.  Connect the stator terminals to an open circuit.
    2.  Drive the synchronous generator at its rated synchronous speed.
    3.  Gradually increase the DC excitation current ($I_f$) to the field winding, starting from zero.
    4.  Measure the generated phase voltage ($E_a$) across the stator terminals at each value of $I_f$.
    5.  Plot $E_a$ (on the y-axis) against $I_f$ (on the x-axis).

*   **Shape of the OCC:**
    *   **Linear Region:** At low values of $I_f$, the magnetic circuit is unsaturated. The flux $\Phi$ is directly proportional to $I_f$, so $E_a$ is directly proportional to $I_f$. The curve is linear.
    *   **Knee:** As $I_f$ increases, the magnetic material (especially in the stator core) starts to saturate. The flux no longer increases linearly with $I_f$.
    *   **Saturated Region:** At high values of $I_f$, the magnetic circuit is heavily saturated. A further increase in $I_f$ produces only a small increase in flux and hence in $E_a$. The curve becomes flatter.

*   **Importance of OCC:**
    *   It determines the relationship between field excitation and generated voltage.
    *   It is used to determine synchronous impedance and its components ($R_a$ and $X_s$).
    *   It is crucial for predicting generator performance under various conditions.

*   **Reference:** Bhimbra, P.S. (2021). *Electrical Machinery*. Chapter 13.
    *   Kothari & Nagrath (2017). *Electric Machines*. Chapter 11.

*   **Course Outcome Alignment:** CO1 (Describe constructional details and analyze performance under various load conditions). The OCC is fundamental to understanding how the generator's output voltage is controlled. (Knowledge Level: K3)

---

### **4. Synchronous Generator on Load**

When the synchronous generator is connected to an external load, an armature current ($I_a$) flows in the stator windings. This armature current interacts with the main magnetic field produced by the rotor, leading to several effects.

*   **Key Components on Load:**
    *   **Field Flux:** Created by the DC excitation current in the rotor.
    *   **Armature EMF ($E_a$):** The EMF generated due to the rotation of the field flux in the stator conductors. This is the voltage that would be present if there were no armature resistance or leakage reactance.
    *   **Armature Current ($I_a$):** The current flowing in the stator windings due to the load connected.
    *   **Armature Reaction:** The magnetic effect of the armature current on the main field flux.
    *   **Armature Resistance Drop ($I_aR_a$):** The voltage drop due to the resistance of the stator windings.
    *   **Armature Leakage Reactance Drop ($jI_aX_l$):** The voltage drop due to the leakage flux that links with the stator coils but not with the main flux path.
    *   **Terminal Voltage ($V_t$):** The actual voltage measured across the stator terminals.

---

### **5. Armature Reaction**

Armature reaction is the effect of the magnetic field produced by the armature (stator) currents on the main magnetic field produced by the rotor field winding.

*   **Nature of Armature Reaction:**
    *   The armature current in a 3-phase winding creates its own rotating magnetic field (MMF).
    *   This armature field rotates at synchronous speed relative to the stator conductors.
    *   It interacts with the main rotor field.

*   **Effect of Armature Reaction on Main Field:** The nature of the armature reaction depends on the power factor of the load.
    *   **Unity Power Factor Load:** The armature MMF is spatially 90 electrical degrees behind the EMF, and it demagnetizes the field in quadrature (90 degrees ahead in space) and magnetizes it in phase (0 degrees). This is known as **cross-magnetization**.
    *   **Leading Power Factor Load:** The armature MMF leads the EMF by more than 90 degrees. It magnetizes the main field. This is called **magnetizing armature reaction**.
    *   **Lagging Power Factor Load:** The armature MMF lags the EMF by more than 90 degrees. It demagnetizes the main field. This is called **demagnetizing armature reaction**.

*   **Representation of Armature Reaction:** Armature reaction can be represented by an equivalent fictitious MMF or a fictitious flux, or more practically, by an equivalent fictitious reactance called **synchronous reactance** ($X_s$).

*   **Reference:** Say, M.G. (2002). *Performance & Design of AC Machines*. Chapter 9.
    *   Gupta, J.B. (2022). *Theory & Performance of Electrical Machines*. Chapter 16.

*   **Course Outcome Alignment:** CO1 (Describe constructional details and analyze performance under various load conditions). Understanding armature reaction is crucial for analyzing performance. (Knowledge Level: K3)

---

### **6. Synchronous Impedance ($Z_s$) and Synchronous Reactance ($X_s$)**

To represent the effects of armature reaction and armature winding resistance, the concept of synchronous impedance is introduced.

*   **Synchronous Impedance ($Z_s$):** It is the total impedance per phase of the armature winding, taking into account armature resistance and the effect of armature reaction.
    $$Z_s = R_a + jX_s$$
    where:
    *   $R_a$ is the effective armature resistance per phase.
    *   $X_s$ is the synchronous reactance per phase.

*   **Synchronous Reactance ($X_s$):** It is the reactance per phase that accounts for both the armature leakage reactance ($X_l$) and the effect of armature reaction.
    $$X_s = X_l + X_{ar}$$
    where:
    *   $X_l$ is the armature leakage reactance per phase (a physical parameter of the winding).
    *   $X_{ar}$ is the reactance representing the effect of armature reaction.

*   **Determining $X_s$ from OCC and SCC:**
    *   **From OCC:** For a given armature current $I_a$ at a specific power factor, we can determine the required field current $I_{f1}$ to produce the terminal voltage $V_t$. We also find the field current $I_{f0}$ needed to produce the same voltage $E_a$ under open-circuit conditions (from OCC). The difference in excitation ($I_{f0} - I_{f1}$) is the excitation required to counteract the armature reaction and voltage drops. This difference is then used with the OCC to find an equivalent EMF $E_{ar}$ due to armature reaction.
    *   **Short Circuit Characteristic (SCC):** When the stator terminals are short-circuited, the armature current $I_a$ flows. The machine is run at synchronous speed. The field current is varied, and the short-circuit armature current ($I_{sc}$) is measured. The SCC is a plot of $I_{sc}$ vs. $I_f$.
        *   Under short-circuit conditions, the terminal voltage $V_t = 0$. The generated EMF $E_a$ is solely used to overcome the synchronous impedance: $E_a = I_{sc} Z_s$.
        *   From the OCC, we find the $E_a$ corresponding to the field current $I_f$ that produces a certain $I_{sc}$ on the SCC.
        *   Then, $Z_s = \frac{E_a}{I_{sc}}$.
        *   $R_a$ is measured separately by applying a DC voltage to the stator windings.
        *   $X_s = \sqrt{Z_s^2 - R_a^2}$.

*   **Reference:** Bhimbra, P.S. (2021). *Electrical Machinery*. Chapter 13.
    *   Kothari & Nagrath (2017). *Electric Machines*. Chapter 11.

*   **Course Outcome Alignment:** CO1 (Describe constructional details and analyze performance under various load conditions). Synchronous impedance is a key parameter for analysis. (Knowledge Level: K3)

---

### **7. Equivalent Circuit of a Synchronous Generator**

The behavior of a synchronous generator can be represented by an equivalent circuit per phase.

*   **Components of the Equivalent Circuit:**
    *   $E_a$: Internally generated EMF per phase.
    *   $R_a$: Effective armature resistance per phase.
    *   $X_l$: Armature leakage reactance per phase.
    *   $X_{ar}$: Reactance representing armature reaction per phase.
    *   $X_s = X_l + X_{ar}$: Synchronous reactance per phase.
    *   $I_a$: Armature current per phase.
    *   $V_t$: Terminal voltage per phase.

*   **Circuit Diagram:**

    ```
        +----[ R_a ]----+----[ jX_l ]----+----[ jX_ar ]----+---- Vt ----+
        |               |                |                |           |
        Ea              Ia               Ia               Ia          Ia
        |               |                |                |           |
        +---------------+----------------+----------------+-----------+
                        |
                        Load
    ```
    This can be simplified by combining the reactances:

    ```
        +----[ R_a ]----+----[ jX_s ]----+---- Vt ----+
        |               |                |           |
        Ea              Ia               Ia          Ia
        |               |                |           |
        +---------------+----------------+-----------+
                        |
                        Load
    ```

*   **Voltage Equation:**
    $$E_a = V_t + I_a(R_a + jX_s)$$
    Or, if $I_a$ is taken as the reference:
    $$E_a = V_t + I_a Z_s$$

*   **Reference:** Kothari & Nagrath (2017). *Electric Machines*. Chapter 11.

*   **Course Outcome Alignment:** CO1 (Describe constructional details and analyze performance under various load conditions). The equivalent circuit is the primary tool for analysis. (Knowledge Level: K3)

---

### **8. Phasor Diagram of a Synchronous Generator**

The phasor diagram graphically represents the relationship between the generated EMF ($E_a$), terminal voltage ($V_t$), armature current ($I_a$), and the various voltage drops and phase angles.

*   **Construction Steps (General Case - Lagging Power Factor Load):**
    1.  **Take Terminal Voltage ($V_t$) as Reference:** Draw $V_t$ horizontally.
    2.  **Draw Armature Current ($I_a$):** For a lagging power factor load, $I_a$ lags $V_t$ by the power factor angle ($\phi$). Draw $I_a$ downwards at an angle $\phi$ below $V_t$.
    3.  **Draw Armature Resistance Drop ($I_aR_a$):** This drop is in phase with $I_a$. Draw a phasor $I_aR_a$ in the same direction as $I_a$.
    4.  **Draw Armature Leakage Reactance Drop ($I_aX_l$):** This drop leads $I_a$ by 90 degrees. Draw a phasor $I_aX_l$ perpendicular to $I_a$ and in the direction of current flow (upwards if $I_a$ is downwards).
    5.  **Draw Synchronous Reactance Drop ($I_aX_s$):** This drop leads $I_a$ by 90 degrees. Draw a phasor $I_aX_s$ perpendicular to $I_a$ and in the direction of current flow.
    6.  **Calculate Generated EMF ($E_a$):** The internally generated EMF $E_a$ is the phasor sum of $V_t$, $I_aR_a$, and $I_aX_l$ (or $I_a(R_a + jX_s)$).
        $$E_a = V_t + I_a(R_a + jX_s)$$
        Alternatively, draw $V_t$, then add $I_aR_a$ in phase with $I_a$, and then add $jI_aX_s$ leading $I_a$ by 90 degrees. The resultant phasor is $E_a$.
    7.  **Armature Reaction Phasor:** Armature reaction can be represented as a fictitious flux or MMF, or equivalently, as a reactive voltage drop. A common way to represent it is by a phasor $jI_aX_{ar}$ which is in phase with $E_a$ for a load with power factor angle $\phi$ relative to $E_a$. However, it's more common to combine $X_l$ and $X_{ar}$ into $X_s$. If we want to explicitly show armature reaction:
        *   $E_a = V_t + I_aR_a + jI_aX_l + \text{Effect of Armature Reaction}$
        *   The effect of armature reaction can be modeled as a voltage $E_{ar}$ that adds to $V_t + I_aR_a + jI_aX_l$. This $E_{ar}$ is in phase with $E_a$ for unity PF load, and leads/lags $E_a$ for lagging/leading PF loads.

*   **Phasor Diagrams for Different Power Factors:**

    *   **Lagging Power Factor ($\phi$):** $I_a$ lags $V_t$. $E_a$ is generally larger than $V_t$.
        ```
                 jIaXs
                   ^
                   |
                 IaR_a
                   ^
                   |
          Vt ---->---- Ia
          ^        |
          |        phi
          Ea       v
        ```
        (Simplified phasor diagram showing $E_a = V_t + I_aR_a + jI_aX_s$)

    *   **Unity Power Factor:** $I_a$ is in phase with $V_t$. $E_a$ is slightly larger than $V_t$.
        ```
                 jIaXs
                   ^
                   |
                 IaR_a
                   ^
                   |
          Vt ---->---- Ia (same direction as Vt)
          ^
          |
          Ea
        ```

    *   **Leading Power Factor ($\phi$):** $I_a$ leads $V_t$. $E_a$ can be smaller than $V_t$ (over-excitation) or larger (under-excitation).
        ```
               jIaXs
                 ^
                 |
               IaR_a
                 ^
                 |
          Vt ---->---- Ia
                 ^   |
                 |   phi (leading)
                 Ea  v
        ```
        (Simplified phasor diagram showing $E_a = V_t + I_aR_a + jI_aX_s$. Note that $I_a$ is ahead of $V_t$.)

*   **Reference:** Gupta, J.B. (2022). *Theory & Performance of Electrical Machines*. Chapter 16.
    *   Bhimbra, P.S. (2021). *Electrical Machinery*. Chapter 13.

*   **Course Outcome Alignment:** CO1 (Describe constructional details and analyze performance under various load conditions). Phasor diagrams are essential for analyzing performance under load. (Knowledge Level: K3)

---

### **9. Numerical Problems**

Let's work through a typical problem to illustrate the concepts.

**Problem Statement:**
A 3-phase, Y-connected cylindrical-rotor synchronous generator has the following parameters:
*   Rated voltage: 400 V (line-to-line)
*   Rated frequency: 50 Hz
*   Armature resistance per phase ($R_a$): 0.2 $\Omega$
*   Synchronous reactance per phase ($X_s$): 3.0 $\Omega$
*   Field current for rated voltage on open circuit: 5 A

The generator is driven at synchronous speed and is supplying a load of 100 kW at a lagging power factor of 0.8.

**Calculate:**
a) Rated phase voltage.
b) Rated armature current per phase.
c) The value of generated EMF per phase ($E_a$).
d) The excitation current ($I_f$) required for this load condition, assuming the OCC is linear up to the required excitation.

**Solution:**

a) **Rated Phase Voltage ($V_t$)**:
For a Y-connected generator, the phase voltage is the line voltage divided by $\sqrt{3}$.
$V_t = \frac{400}{\sqrt{3}} \approx 230.94$ V

b) **Rated Armature Current per Phase ($I_a$)**:
The total 3-phase apparent power $S = \sqrt{3} V_L I_L = 3 V_t I_a$.
The real power $P = 100$ kW = 100,000 W.
Power factor (PF) = 0.8 (lagging).
$P = S \times PF$
$S = \frac{P}{PF} = \frac{100000}{0.8} = 125000$ VA = 125 kVA.

Now, find $I_a$ using the 3-phase apparent power formula:
$S = \sqrt{3} V_L I_L = \sqrt{3} V_t I_a$ (for Y-connected, $V_L$ and $I_L$ are line values, but here we use $V_t$ and $I_a$ as phase values)
$125000 = \sqrt{3} \times 400 \times I_a$
$I_a = \frac{125000}{\sqrt{3} \times 400} \approx 180.4$ A

Alternatively, using phase voltage:
$S = 3 V_t I_a$
$125000 = 3 \times 230.94 \times I_a$
$I_a = \frac{125000}{3 \times 230.94} \approx 180.4$ A

c) **Generated EMF per Phase ($E_a$)**:
We use the voltage equation: $E_a = V_t + I_a(R_a + jX_s)$.
Let $V_t$ be the reference phasor: $V_t = 230.94 + j0$ V.
The load has a lagging power factor of 0.8. The angle $\phi$ is $\cos^{-1}(0.8) \approx 36.87^\circ$.
Since it's lagging, $I_a$ lags $V_t$ by $36.87^\circ$.
$I_a = 180.4 \angle -36.87^\circ$ A
$I_a = 180.4 (\cos(-36.87^\circ) + j\sin(-36.87^\circ))$
$I_a = 180.4 (0.8 - j0.6) = 144.32 - j108.24$ A

Now, calculate the drop $I_a(R_a + jX_s)$:
$Z_s = R_a + jX_s = 0.2 + j3.0$ $\Omega$
$I_a Z_s = (144.32 - j108.24)(0.2 + j3.0)$
$I_a Z_s = (144.32 \times 0.2) + (144.32 \times j3.0) - (j108.24 \times 0.2) - (j108.24 \times j3.0)$
$I_a Z_s = 28.864 + j432.96 - j21.648 - (-324.72)$
$I_a Z_s = 28.864 + 324.72 + j(432.96 - 21.648)$
$I_a Z_s = 353.584 + j411.312$ V

Now, add this drop to $V_t$:
$E_a = V_t + I_a Z_s = (230.94 + j0) + (353.584 + j411.312)$
$E_a = 584.524 + j411.312$ V

The magnitude of $E_a$ is $|E_a| = \sqrt{584.524^2 + 411.312^2}$
$|E_a| \approx \sqrt{341668.7 + 169177.9}$
$|E_a| \approx \sqrt{510846.6} \approx 714.7$ V

The angle of $E_a$ is $\tan^{-1}\left(\frac{411.312}{584.524}\right) \approx \tan^{-1}(0.7036) \approx 35.15^\circ$.
So, $E_a \approx 714.7 \angle 35.15^\circ$ V.

The generated EMF per phase is approximately 714.7 V.

d) **Excitation Current ($I_f$)**:
The problem states that 5 A of field current produces rated voltage (230.94 V) on open circuit. Assuming the OCC is linear, the generated EMF ($E_a$) is proportional to the field current ($I_f$).
$\frac{E_a}{I_{f\_required}} = \frac{V_{t\_rated}}{I_{f\_rated\_OCC}}$
$\frac{714.7}{I_{f\_required}} = \frac{230.94}{5}$

$I_{f\_required} = \frac{714.7 \times 5}{230.94} \approx \frac{3573.5}{230.94} \approx 15.47$ A

The excitation current required is approximately 15.47 A.

---

### **10. Summary of Important Points**

*   Synchronous generators convert mechanical energy to AC electrical energy at a fixed frequency and speed.
*   The Open Circuit Characteristic (OCC) shows the relationship between generated EMF ($E_a$) and field current ($I_f$) at no load. It exhibits saturation due to the magnetic circuit.
*   Armature reaction is the magnetic effect of armature current on the main field flux, which can be magnetizing, demagnetizing, or cross-magnetizing depending on the load power factor.
*   Synchronous impedance ($Z_s = R_a + jX_s$) accounts for armature resistance and armature reaction. Synchronous reactance ($X_s$) includes leakage reactance ($X_l$) and armature reaction reactance ($X_{ar}$).
*   The equivalent circuit of a synchronous generator includes $E_a$, $R_a$, $X_l$, and $X_s$.
*   The voltage equation is $E_a = V_t + I_a(R_a + jX_s)$.
*   Phasor diagrams are essential for visualizing and calculating the relationships between voltages and currents under load conditions for different power factors.
*   For lagging PF, $E_a > V_t$. For unity PF, $E_a$ is slightly larger than $V_t$. For leading PF, $E_a$ can be less than, equal to, or greater than $V_t$, depending on the excitation.

---

### **11. Practice Questions**

1.  **Define:**
    a) Synchronous speed.
    b) Open Circuit Characteristic (OCC).
    c) Armature reaction.
    d) Synchronous impedance.

2.  A 3-phase, Y-connected synchronous generator is operated at synchronous speed. The open-circuit terminal voltage per phase is plotted against field current in the OCC. When driven at synchronous speed with terminals short-circuited, the armature current per phase is measured for different field currents in the Short Circuit Characteristic (SCC).
    *   If at a field current of 4 A, the open-circuit voltage is 240 V, and the short-circuit current is 60 A.
    *   The armature resistance per phase is 0.1 $\Omega$.
    *   Calculate the synchronous impedance and synchronous reactance per phase.

3.  A cylindrical-rotor synchronous generator is connected to a load.
    *   Draw the phasor diagram for a lagging power factor load.
    *   Explain the significance of each phasor in the diagram.

4.  A 1000 kVA, 11 kV, 3-phase, Y-connected synchronous generator has an armature resistance of 0.05 $\Omega$/phase and a synchronous reactance of 2.5 $\Omega$/phase. It is supplying 800 kW at a lagging power factor of 0.8. Calculate:
    a) The line current.
    b) The phase voltage.
    c) The generated EMF per phase.

---

### **12. Answers to Practice Questions**

1.  **Definitions:**
    a) **Synchronous speed:** The speed at which the rotor of a synchronous machine rotates, and which is synchronized with the frequency of the AC power supply. It is given by $N_s = \frac{120f}{P}$ rpm.
    b) **Open Circuit Characteristic (OCC):** A curve plotting the generated EMF per phase ($E_a$) against the field excitation current ($I_f$) when the synchronous machine is operated at synchronous speed with its armature terminals open-circuited.
    c) **Armature reaction:** The magnetic effect of the armature (stator) currents on the main magnetic field produced by the rotor field winding. It can alter the flux distribution and magnitude.
    d) **Synchronous impedance:** The impedance per phase of a synchronous machine armature circuit, accounting for armature resistance and the effect of armature reaction. It is given by $Z_s = R_a + jX_s$.

2.  **Calculation of $Z_s$ and $X_s$:**
    *   From the given data:
        *   $E_a$ at 4 A field current = 240 V.
        *   $I_{sc}$ at 4 A field current = 60 A.
        *   $R_a = 0.1$ $\Omega$.
    *   Under short-circuit conditions, $E_a = I_{sc} Z_s$.
    *   Therefore, $Z_s = \frac{E_a}{I_{sc}} = \frac{240 \text{ V}}{60 \text{ A}} = 4.0$ $\Omega$.
    *   The synchronous impedance per phase is 4.0 $\Omega$.
    *   Now, calculate synchronous reactance:
        $Z_s^2 = R_a^2 + X_s^2$
        $(4.0)^2 = (0.1)^2 + X_s^2$
        $16.0 = 0.01 + X_s^2$
        $X_s^2 = 16.0 - 0.01 = 15.99$
        $X_s = \sqrt{15.99} \approx 3.999$ $\Omega$.
    *   The synchronous reactance per phase is approximately 4.0 $\Omega$.

3.  **Phasor Diagram for Lagging Power Factor Load:**
    *   **(Diagram Description):** Draw $V_t$ horizontally as the reference. Draw $I_a$ lagging $V_t$ by the power factor angle $\phi$. From the end of $V_t$, draw $I_aR_a$ in phase with $I_a$. From the end of $I_aR_a$, draw $jI_aX_s$ leading $I_a$ by 90 degrees. The phasor sum of $V_t$, $I_aR_a$, and $jI_aX_s$ gives $E_a$.
    *   **Significance of Phasors:**
        *   $V_t$: Terminal voltage per phase.
        *   $I_a$: Armature current per phase.
        *   $\phi$: Power factor angle by which $I_a$ lags $V_t$.
        *   $I_aR_a$: Voltage drop due to armature resistance. It is in phase with $I_a$.
        *   $jI_aX_s$: Voltage drop due to synchronous reactance. It leads $I_a$ by 90 degrees and represents the combined effect of leakage reactance and armature reaction.
        *   $E_a$: The internally generated EMF per phase, which is the vector sum of $V_t$, $I_aR_a$, and $jI_aX_s$. It is the driving voltage for the armature current.

4.  **Generator Calculations:**
    *   Rated apparent power $S_{rated} = 1000$ kVA = $10^6$ VA.
    *   Line voltage $V_L = 11$ kV.
    *   Armature resistance $R_a = 0.05$ $\Omega$/phase.
    *   Synchronous reactance $X_s = 2.5$ $\Omega$/phase.
    *   Load real power $P = 800$ kW.
    *   Load power factor PF = 0.8 lagging.

    a) **Line Current ($I_L$)**:
    The real power $P = \sqrt{3} V_L I_L \cos \phi$.
    $800 \times 10^3 = \sqrt{3} \times 11 \times 10^3 \times I_L \times 0.8$
    $I_L = \frac{800 \times 10^3}{\sqrt{3} \times 11 \times 10^3 \times 0.8} \approx \frac{800}{13.698} \approx 58.4$ A.

    b) **Phase Voltage ($V_t$)**:
    The generator is Y-connected.
    $V_t = \frac{V_L}{\sqrt{3}} = \frac{11 \times 10^3}{\sqrt{3}} \approx 6350.9$ V.

    c) **Generated EMF per Phase ($E_a$)**:
    The phase current $I_a$ for a Y-connected machine is equal to the line current $I_L$. So, $I_a = 58.4$ A.
    The power factor angle $\phi = \cos^{-1}(0.8) = 36.87^\circ$ lagging.
    Let $V_t = 6350.9 \angle 0^\circ$ V.
    Then $I_a = 58.4 \angle -36.87^\circ$ A.
    $I_a = 58.4 (\cos(-36.87^\circ) + j\sin(-36.87^\circ)) = 58.4 (0.8 - j0.6) = 46.72 - j35.04$ A.

    The synchronous impedance per phase is $Z_s = R_a + jX_s = 0.05 + j2.5$ $\Omega$.
    The voltage drop is $I_a Z_s = (46.72 - j35.04)(0.05 + j2.5)$
    $I_a Z_s = (46.72 \times 0.05) + (46.72 \times j2.5) - (j35.04 \times 0.05) - (j35.04 \times j2.5)$
    $I_a Z_s = 2.336 + j116.8 - j1.752 - (-87.6)$
    $I_a Z_s = 2.336 + 87.6 + j(116.8 - 1.752)$
    $I_a Z_s = 89.936 + j115.048$ V.

    Now, calculate $E_a = V_t + I_a Z_s$.
    $E_a = (6350.9 + j0) + (89.936 + j115.048)$
    $E_a = 6440.836 + j115.048$ V.

    The magnitude of $E_a$ is $|E_a| = \sqrt{6440.836^2 + 115.048^2}$
    $|E_a| \approx \sqrt{41484530 + 13236} \approx \sqrt{41497766} \approx 6441.9$ V.
    The generated EMF per phase is approximately 6441.9 V.

---
---
