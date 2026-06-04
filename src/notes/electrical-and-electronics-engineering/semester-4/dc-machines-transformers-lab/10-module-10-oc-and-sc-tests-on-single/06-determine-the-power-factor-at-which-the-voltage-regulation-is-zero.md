---
title: "Determine the power factor at which the voltage regulation is zero"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 10: OC and SC tests on single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360ce"
status: "completed"
scrapedAt: "2026-05-23T16:15:33.113Z"
---
# DC Machines & Transformers Lab - Module 10: OC and SC Tests on Single-Phase Transformer

## Topic: Determine the Power Factor at Which Voltage Regulation is Zero

### 1. Introduction to Voltage Regulation

**Voltage regulation** of a transformer is a measure of the change in secondary terminal voltage from no-load to full-load at a constant primary voltage and specified power factor. It is typically expressed as a percentage.

*   **Definition:**
    $$ \text{Voltage Regulation} (\%) = \frac{V_{\text{NL}} - V_{\text{FL}}}{V_{\text{FL}}} \times 100 $$
    where:
    *   $V_{\text{NL}}$ = Secondary terminal voltage at no-load.
    *   $V_{\text{FL}}$ = Secondary terminal voltage at full-load.

*   **Importance:** Voltage regulation is a crucial parameter indicating how well a transformer maintains its output voltage under varying load conditions. Lower voltage regulation is generally desirable.

*   **Factors Affecting Voltage Regulation:**
    *   Internal impedance of the transformer (resistance and reactance).
    *   Load power factor.

### 2. Understanding the Role of Load Power Factor

The voltage regulation of a transformer is highly dependent on the power factor of the load connected to its secondary.

*   **Lagging Power Factor Loads (e.g., inductive loads like motors):**
    *   The voltage drop due to the transformer's leakage reactance is in phase with the secondary terminal voltage.
    *   This leads to a **higher** voltage regulation.
    *   As the lagging power factor angle increases (closer to 90 degrees lagging), the voltage regulation increases.

*   **Leading Power Factor Loads (e.g., capacitive loads):**
    *   The voltage drop due to the transformer's leakage reactance is out of phase with the secondary terminal voltage.
    *   This can lead to a **lower** voltage regulation, and in some cases, the voltage regulation can even be negative (meaning the terminal voltage increases from no-load to full-load).
    *   As the leading power factor angle increases (closer to 90 degrees leading), the voltage regulation decreases.

### 3. Conditions for Zero Voltage Regulation

Zero voltage regulation occurs when the secondary terminal voltage at full load is equal to the secondary terminal voltage at no load ($V_{\text{NL}} = V_{\text{FL}}$). This implies that the voltage drop within the transformer is entirely compensated by the leading reactive component of the load.

*   **Theoretical Condition:** Zero voltage regulation theoretically occurs at a specific **leading power factor**. At this power factor, the voltage drop due to the transformer's internal impedance (especially the reactive component) is exactly counteracted by the voltage rise caused by the leading reactive component of the load.

### 4. Determining Zero Voltage Regulation Power Factor Using OC and SC Tests

While OC (Open Circuit) and SC (Short Circuit) tests are primarily used to determine the equivalent circuit parameters and losses of a transformer, they provide the fundamental data required to *calculate* voltage regulation at any given power factor. We can then use these calculated values to find the power factor at which regulation is zero.

**Steps:**

1.  **Perform Open Circuit (OC) Test:**
    *   **Objective:** To determine the core losses (iron losses) and the shunt branch parameters (magnetizing resistance $R_m$ and leakage reactance $X_m$) of the transformer.
    *   **Procedure:** Primary winding is excited at rated voltage and frequency, while the secondary winding is kept open-circuited.
    *   **Measurements:** Applied voltage ($V_{\text{OC}}$), input current ($I_{\text{OC}}$), and input power ($P_{\text{OC}}$).
    *   **Calculations:**
        *   $P_{\text{OC}}$ represents the core losses.
        *   From $P_{\text{OC}} = V_{\text{OC}} I_{\text{OC}} \cos(\phi_{\text{OC}})$, the no-load power factor can be calculated.
        *   $R_m = V_{\text{OC}}^2 / P_{\text{OC}}$
        *   $X_m = V_{\text{OC}} / (I_{\text{OC}} \sin(\phi_{\text{OC}}))$ (approximately, assuming the current lag is small)

2.  **Perform Short Circuit (SC) Test:**
    *   **Objective:** To determine the copper losses and the series branch parameters (equivalent resistance $R_{eq}$ and leakage reactance $X_{eq}$) of the transformer.
    *   **Procedure:** Secondary winding is short-circuited. A reduced voltage is applied to the primary winding to circulate rated current in the windings.
    *   **Measurements:** Applied voltage ($V_{\text{SC}}$), input current ($I_{\text{SC}}$), and input power ($P_{\text{SC}}$).
    *   **Calculations:**
        *   $P_{\text{SC}}$ represents the total copper losses at rated current.
        *   From $P_{\text{SC}} = V_{\text{SC}} I_{\text{SC}} \cos(\phi_{\text{SC}})$, the short-circuit power factor can be calculated.
        *   $R_{eq} = P_{\text{SC}} / I_{\text{SC}}^2$ (referred to the primary side)
        *   $X_{eq} = \sqrt{(V_{\text{SC}} / I_{\text{SC}})^2 - R_{eq}^2}$ (referred to the primary side)

    *   **Note:** For single-phase transformers, the equivalent circuit is often simplified to a series combination of $R_{eq}$ and $X_{eq}$ for regulation calculations, as the shunt branch parameters ($R_m, X_m$) have a negligible effect on voltage regulation, especially at heavy loads. The OC test data is primarily for determining core losses and efficiency, not directly for voltage regulation at zero.

3.  **Calculate Voltage Regulation at Various Power Factors:**
    The approximate voltage regulation formula derived from the equivalent circuit (considering only series parameters) is:

    For **Lagging Power Factor** (load power factor $\cos\phi$):
    $$ \text{VR}_{\text{lag}} \approx \frac{I_2 R_{eq} \cos\phi + I_2 X_{eq} \sin\phi}{V_2} \times 100\% $$

    For **Leading Power Factor** (load power factor $\cos\phi$):
    $$ \text{VR}_{\text{lead}} \approx \frac{I_2 R_{eq} \cos\phi - I_2 X_{eq} \sin\phi}{V_2} \times 100\% $$

    where:
    *   $I_2$ is the rated secondary current.
    *   $V_2$ is the rated secondary voltage.
    *   $R_{eq}$ and $X_{eq}$ are the equivalent resistance and reactance referred to the secondary side (if derived from primary side tests, they should be multiplied by the square of the turns ratio). For simplicity in labs, often equivalent parameters referred to one side (usually primary) are used with respective currents. Let's assume $R_{eq}$ and $X_{eq}$ are referred to the secondary side.
    *   $\phi$ is the phase angle of the load current with respect to the secondary voltage.

4.  **Determine the Power Factor for Zero Voltage Regulation:**
    Zero voltage regulation occurs when the numerator in the voltage regulation formula is zero.

    *   **For lagging power factor:** $I_2 R_{eq} \cos\phi + I_2 X_{eq} \sin\phi = 0$. This is not possible for a positive $\cos\phi$ and $\sin\phi$ (which is the case for lagging PF). So, zero regulation is not possible at lagging PF.

    *   **For leading power factor:** $I_2 R_{eq} \cos\phi - I_2 X_{eq} \sin\phi = 0$.
        $$ I_2 R_{eq} \cos\phi = I_2 X_{eq} \sin\phi $$
        $$ \frac{\sin\phi}{\cos\phi} = \frac{R_{eq}}{X_{eq}} $$
        $$ \tan\phi = \frac{R_{eq}}{X_{eq}} $$

        Therefore, the power factor at which voltage regulation is zero is:
        $$ \cos\phi = \frac{1}{\sqrt{1 + \tan^2\phi}} = \frac{1}{\sqrt{1 + (R_{eq}/X_{eq})^2}} = \frac{X_{eq}}{\sqrt{R_{eq}^2 + X_{eq}^2}} $$

        This is a **leading power factor**.

### 5. Practical Approach in the Lab

In a typical lab setup for single-phase transformers, you would perform OC and SC tests to obtain $R_{eq}$ and $X_{eq}$ (referred to one side, say primary, as $R_{eq1}$ and $X_{eq1}$). Then, you can calculate the power factor for zero voltage regulation using the derived formula.

**Example Scenario:**

Let's assume after performing OC and SC tests on a single-phase transformer, you find the equivalent impedance referred to the primary side to be:
$R_{eq1} = 0.5 \text{ } \Omega$
$X_{eq1} = 1.5 \text{ } \Omega$

And the transformer ratings are:
Primary Voltage ($V_1$) = 240 V
Secondary Voltage ($V_2$) = 120 V
Apparent Power (S) = 1 kVA

1.  **Calculate the ratio $R_{eq1}/X_{eq1}$:**
    $R_{eq1}/X_{eq1} = 0.5 / 1.5 = 1/3$

2.  **Calculate $\tan\phi$ for zero voltage regulation:**
    $\tan\phi = R_{eq1}/X_{eq1} = 1/3$

3.  **Calculate the power factor $\cos\phi$:**
    $\cos\phi = \frac{1}{\sqrt{1 + (1/3)^2}} = \frac{1}{\sqrt{1 + 1/9}} = \frac{1}{\sqrt{10/9}} = \frac{3}{\sqrt{10}}$
    $\cos\phi \approx 0.9487$

    Since $\tan\phi$ is positive and we are looking for a power factor that *cancels* the inductive drop, this is a **leading power factor**.

    So, the power factor at which the voltage regulation is zero is approximately **0.9487 leading**.

### 6. Linking to Course Outcomes

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3)**
    While this module is on transformers, the concept of voltage regulation is analogous to the terminal voltage behavior of DC generators under load. Understanding voltage regulation in transformers (how terminal voltage changes with load and power factor) builds on the ability to analyze performance characteristics from test data.

*   **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)**
    Similar to CO1, understanding how external factors (like load power factor for transformers) influence performance parameters (voltage regulation) is a transferable skill to analyzing motor characteristics.

*   **CO3: Investigate the losses and efficiency in DC machines by conducting no-load tests (Knowledge Level: K3)**
    OC and SC tests for transformers are analogous to no-load and short-circuit tests on DC machines for determining losses and parameters. This outcome reinforces the understanding of how tests provide data for performance analysis.

*   **CO4: Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests (Knowledge Level: K3)**
    This is directly relevant. OC and SC tests are the foundation for examining transformer performance, including calculating voltage regulation and efficiency. Determining the zero voltage regulation power factor is a specific performance analysis derived from these tests.

*   **CO5: Determine the voltage regulation and efficiency of 3-phase transformer by conducting no-load tests. (Knowledge Level: K3)**
    This outcome specifically mentions voltage regulation. The principles learned here for single-phase transformers are extended to 3-phase systems, with the understanding that AC voltage regulation is a fundamental performance metric.

### 7. Important Points to Remember

*   **Zero voltage regulation is only possible at a leading power factor.**
*   The SC test provides the series parameters ($R_{eq}, X_{eq}$) crucial for voltage regulation calculations.
*   The formula for voltage regulation is an approximation and assumes a simplified equivalent circuit.
*   The OC test primarily determines core losses and is less directly used for voltage regulation calculation compared to the SC test, but it's essential for efficiency calculations.
*   The power factor at which voltage regulation is zero is given by $\cos\phi = X_{eq} / \sqrt{R_{eq}^2 + X_{eq}^2}$ (leading).

### 8. Practice Questions and Exercises

**Q1:** What is the condition for zero voltage regulation in a single-phase transformer?
**Answer:** Zero voltage regulation occurs at a specific leading power factor where the voltage drop due to the transformer's internal impedance is compensated by the voltage rise due to the leading reactive component of the load.

**Q2:** If the equivalent resistance and leakage reactance of a single-phase transformer referred to the primary side are $R_{eq1} = 0.2 \Omega$ and $X_{eq1} = 0.8 \Omega$ respectively, calculate the power factor at which the voltage regulation is zero.
**Answer:**
We use the formula $\tan\phi = R_{eq1} / X_{eq1}$ for zero voltage regulation at leading PF.
$\tan\phi = 0.2 / 0.8 = 1/4 = 0.25$
$\cos\phi = \frac{1}{\sqrt{1 + \tan^2\phi}} = \frac{1}{\sqrt{1 + (0.25)^2}} = \frac{1}{\sqrt{1 + 0.0625}} = \frac{1}{\sqrt{1.0625}} \approx \frac{1}{1.0308} \approx 0.9701$
The power factor is **0.9701 leading**.

**Q3:** Explain why zero voltage regulation cannot occur at a lagging power factor.
**Answer:** At a lagging power factor, the voltage drop due to the transformer's internal impedance is in phase with the load current and adds to the voltage drop across the transformer's internal impedance. Therefore, the terminal voltage will always be less than the no-load voltage, resulting in positive voltage regulation.

**Q4:** Which test is most crucial for determining the series parameters required for voltage regulation calculations?
**Answer:** The Short Circuit (SC) Test.

**Q5:** How does the magnitude of leakage reactance ($X_{eq}$) influence the power factor for zero voltage regulation?
**Answer:** A higher leakage reactance ($X_{eq}$) relative to the resistance ($R_{eq}$) will result in a leading power factor closer to unity for zero voltage regulation. This is because the inductive drop needs to be overcome by a stronger leading reactive component from the load. Conversely, if $X_{eq}$ is small compared to $R_{eq}$, a more strongly leading power factor would be required.
