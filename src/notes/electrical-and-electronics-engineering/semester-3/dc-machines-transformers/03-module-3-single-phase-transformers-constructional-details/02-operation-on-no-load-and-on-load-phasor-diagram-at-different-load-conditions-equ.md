---
title: "Operation on no load and on load - phasor diagram at different load conditions - equivalent circuit - voltage regulation – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 3: Single phase transformers – constructional details "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b2f"
status: "completed"
scrapedAt: "2026-05-23T16:12:25.219Z"
---
# DC MACHINES & TRANSFORMERS - Module 3: Single Phase Transformers - Operation and Performance

This module focuses on understanding the fundamental operation and performance characteristics of single-phase transformers under various load conditions. We will delve into their behavior on no-load and on-load, analyze their equivalent circuits, construct phasor diagrams, and learn to calculate voltage regulation.

---

## Module 3: Single Phase Transformers – Constructional Details (Brief Recap)

While this module primarily focuses on operation, a brief recap of construction is essential for understanding the principles.

*   **Core:** Typically made of laminated silicon steel to minimize eddy currents and hysteresis losses.
    *   **Shell type:** Primary and secondary windings surround the core.
    *   **Core type:** Windings surround the core limbs.
*   **Windings:** Primary and secondary windings made of copper, insulated to prevent short circuits.
*   **Bushings:** Provide insulated external connections.
*   **Conservator:** Stores oil, allowing for expansion and contraction due to temperature changes.
*   **Breather:** Removes moisture from the air entering the transformer.
*   **Cooling:** Oil immersed, natural oil, natural air; oil immersed, forced oil, natural air; oil immersed, forced oil, forced air; etc.

---

## 1. Operation on No Load

When a single-phase transformer is connected to an AC voltage source but has no load connected to the secondary winding, it is said to be operating on no load.

*   **Primary Winding:** When the primary winding is excited by an AC voltage $V_1$, a small current $I_0$ flows. This current is known as the **no-load current** or **excitation current**.
*   **Magnetizing Current ($I_m$):** This component of $I_0$ is responsible for establishing the magnetic flux ($\Phi$) in the core. It lags the applied voltage $V_1$ by nearly 90 degrees.
*   **Core Loss Current ($I_w$):** This component of $I_0$ accounts for the power dissipated in the core due to hysteresis and eddy currents. It is in phase with the applied voltage $V_1$.
*   **No-load Current ($I_0$):** $I_0$ is the phasor sum of $I_m$ and $I_w$. It is typically very small, ranging from 2% to 5% of the full-load current.
    *   $I_0 = I_w + jI_m$ (phasor sum)
*   **Induced EMFs:** The applied voltage $V_1$ is almost equal and opposite to the primary induced EMF $E_1$. Similarly, the secondary induced EMF $E_2$ is proportional to the primary induced EMF $E_1$ by the turns ratio.
    *   $E_1 \approx V_1$ (with leakage impedance considered, $E_1$ slightly leads $V_1$)
    *   $E_2 = (N_2/N_1)V_1 = aV_1$, where $a = N_2/N_1$ is the turns ratio.
    *   $E_1 = 4.44 f N_1 \Phi_m$ and $E_2 = 4.44 f N_2 \Phi_m$, where $\Phi_m$ is the maximum flux.
*   **No-load Power Input:** The power input on no-load is essentially the core losses.
    *   $P_0 = V_1 I_0 \cos(\phi_0) = V_1 I_w$

---

### 1.1 No-Load Phasor Diagram

The no-load phasor diagram illustrates the relationship between the applied voltage, induced EMFs, and the no-load current components.

*   **Reference Phasor:** Usually, the flux $\Phi$ is taken as the reference phasor.
*   **Induced EMFs:** $E_1$ and $E_2$ lag the flux by 90 degrees.
*   **Applied Voltage:** $V_1$ is equal and opposite to $E_1$ (neglecting the primary impedance drop).
*   **No-load Current ($I_0$):**
    *   $I_w$ is in phase with $E_1$ (and hence with $V_1$).
    *   $I_m$ lags $E_1$ (and hence $V_1$) by 90 degrees.
    *   $I_0$ is the phasor sum of $I_w$ and $I_m$.
*   **Phase Angle ($\phi_0$):** The angle between $V_1$ and $I_0$ is very small, and $I_0$ lags $V_1$.

**(Diagrammatic Representation):**

```
      ^ V1 (Applied Voltage)
      |
      |----- jIm (Magnetizing Current)
      |     /
      |    /
      |   /  Io (No-load Current)
      |  /
      | / phi_0
      |/
      +-----> Iw (Core Loss Current)
      |
      | E1 (Primary Induced EMF, ~ -V1)
      |
      v Phi (Flux)
```

**Key Points:**

*   $\phi_0$ is very small.
*   $I_0$ is small.
*   $I_w$ is in phase with $V_1$.
*   $I_m$ lags $V_1$ by nearly 90 degrees.

---

## 2. Operation on Load

When a load is connected to the secondary winding of a transformer, a current flows in the secondary. This secondary current then produces its own magnetic flux, which opposes the main flux.

*   **Secondary Current ($I_2$):** When a load is connected, the secondary EMF $E_2$ drives a current $I_2$ through the load impedance.
*   **Ampere-turns:** The secondary current $I_2$ produces an ampere-turn effect $N_2 I_2$ in the opposite direction to the primary ampere-turn effect $N_1 I_1$.
*   **Counteracting Ampere-turns:** To maintain the flux in the core, the primary winding must draw an additional current $I_1'$ (on load) such that $N_1 I_1' = N_2 I_2$. This additional primary current is called the **load component of primary current**.
*   **Total Primary Current ($I_1$):** The total primary current on load is the phasor sum of the no-load current $I_0$ and the load component of primary current $I_1'$.
    *   $I_1 = I_0 + I_1'$ (phasor sum)
*   **Turns Ratio:** $a = N_2/N_1$. The load component of primary current can be represented as $I_2' = a I_2$ and it flows in opposite direction to $N_1 I_1$. Hence, $I_1 = I_0 - I_2'$ (phasor subtraction, where $I_2'$ is primary equivalent of $I_2$).

---

## 3. Phasor Diagram at Different Load Conditions

The phasor diagrams for different load conditions are crucial for understanding the voltage drops and phase relationships. We will consider the simplified model where the resistance and leakage reactance of the windings are neglected first, and then introduce them in the equivalent circuit.

### 3.1 Unity Power Factor Load (Resistive Load)

*   **Load Current ($I_2$):** In phase with the secondary voltage $V_2$.
*   **Primary Equivalent Current ($I_2'$):** $I_2'$ is in phase with $I_2$ and leads $V_1$ by an angle $\alpha$, where $\tan(\alpha) = X_m / R_c$. $I_2'$ is in phase with $V_2$.
*   **Total Primary Current ($I_1$):** Phasor sum of $I_0$ (which lags $V_1$ slightly) and $I_2'$ (which is in phase with $V_1$).
*   **Voltage Regulation:** Good.

**(Diagrammatic Representation - Simplified, neglecting winding impedances):**

```
      ^ V1 (Applied Voltage)
      |
      |----- jIm
      |     /
      |    / Io
      |   /
      |  / phi_0
      | /
      +-----> Iw
      |
      | E1 (Primary Induced EMF)
      |
      +-----> I2' (Primary equivalent of I2, in phase with V1)
      |
      | I1 (Total Primary Current)
      |
      v Phi (Flux)
```

### 3.2 Lagging Power Factor Load (Inductive Load)

*   **Load Current ($I_2$):** Lags the secondary voltage $V_2$ by an angle $\phi_2$.
*   **Primary Equivalent Current ($I_2'$):** Lags $V_1$ by $\phi_2$.
*   **Total Primary Current ($I_1$):** Phasor sum of $I_0$ and $I_2'$. The angle of $I_1$ with respect to $V_1$ will be larger than $\phi_0$.
*   **Voltage Regulation:** Poorer than unity power factor.

**(Diagrammatic Representation - Simplified, neglecting winding impedances):**

```
      ^ V1 (Applied Voltage)
      |
      |----- jIm
      |     /
      |    / Io
      |   /
      |  / phi_0
      | /
      +-----> Iw
      |
      | E1 (Primary Induced EMF)
      |
      \-------<----- I2' (Primary equivalent of I2, lags V1 by phi_2)
       \       /
        \     / I1
         \   /
          \ /
           v Phi (Flux)
```

### 3.3 Leading Power Factor Load (Capacitive Load)

*   **Load Current ($I_2$):** Leads the secondary voltage $V_2$ by an angle $\phi_2$.
*   **Primary Equivalent Current ($I_2'$):** Leads $V_1$ by $\phi_2$.
*   **Total Primary Current ($I_1$):** Phasor sum of $I_0$ and $I_2'$. The angle of $I_1$ with respect to $V_1$ will be smaller than $\phi_0$.
*   **Voltage Regulation:** Better than unity power factor, can even be negative.

**(Diagrammatic Representation - Simplified, neglecting winding impedances):**

```
      ^ V1 (Applied Voltage)
      |
      |----- jIm
      |     /
      |    / Io
      |   /
      |  / phi_0
      | /
      +-----> Iw
      |
      | E1 (Primary Induced EMF)
      |
      ---------> I2' (Primary equivalent of I2, leads V1 by phi_2)
      /         /
     /         / I1
    /         /
   /         /
   v Phi (Flux)
```

**Important Note on Phasor Diagrams:** For accurate phasor diagrams, the impedance of the primary and secondary windings ($R_1, X_1, R_2, X_2$) must be considered, leading to voltage drops. The induced EMFs ($E_1, E_2$) are then no longer exactly in phase with $V_1$ and $V_2$.

---

## 4. Equivalent Circuit of a Single-Phase Transformer

The equivalent circuit represents the transformer's electrical characteristics using circuit elements. It allows for analysis of performance under various conditions.

*   **Primary Winding Resistance ($R_1$):** Represents the copper losses in the primary winding.
*   **Primary Winding Leakage Reactance ($X_1$):** Represents the flux that does not link both windings.
*   **Core Loss Resistance ($R_c$):** Represents the hysteresis and eddy current losses in the core. Connected in parallel with the ideal transformer.
*   **Magnetizing Reactance ($X_m$):** Represents the inductive effect of the core, responsible for establishing the magnetic flux. Connected in parallel with the ideal transformer.
*   **Secondary Winding Resistance ($R_2$):** Represents the copper losses in the secondary winding.
*   **Secondary Winding Leakage Reactance ($X_2$):** Represents the flux that does not link both windings.
*   **Ideal Transformer:** Represents the voltage and current transformation based on the turns ratio.

There are two common forms of the equivalent circuit:

### 4.1 Exact Equivalent Circuit

This circuit accurately represents the transformer's behavior by including all parameters.

**(Circuit Diagram):**

```
  V1 --- R1 --- jX1 ---+---- Ideal Transformer ----+--- R2 --- jX2 --- V2
                      |                         |                    |
                      |                         |                    Load
                      |                         |                    |
                      +---- Rc ---- jXm -------+                    |
                                                                     Load
```

**Explanation:**

*   The parallel branch ($R_c$ and $X_m$) represents the no-load circuit.
*   The series impedance ($R_1 + jX_1$ and $R_2 + jX_2$) represents the winding impedances.
*   The ideal transformer has a turns ratio $a = N_2/N_1$.

### 4.2 Approximate Equivalent Circuit

For practical analysis, especially when the no-load current is small, the parallel branch ($R_c$ and $X_m$) can be moved to the primary side.

*   **Moving $R_c$ and $X_m$ to the primary side:**
    *   $R_c' = R_c / a^2$
    *   $X_m' = X_m / a^2$
*   **Referred Secondary Resistance and Reactance:** The secondary side parameters are often referred to the primary side for simpler calculation.
    *   $R_2' = a^2 R_2$
    *   $X_2' = a^2 X_2$
*   **Primary Equivalent Impedance:**
    *   $Z_1 = R_1 + jX_1$
    *   $Z_2' = R_2' + jX_2'$

**(Approximate Equivalent Circuit - Referred to Primary):**

```
  V1 --- R1 --- jX1 --- Rc' --- jXm' ---+---- V2' ----
                                       |
                                       |
                                       +---- Load (referred to primary)
```

Or, even more simplified by combining all series impedances:

```
  V1 --- (R1 + R2') --- j(X1 + X2') ---+---- V2' ----
                                      |
                                      |
                                      +---- Load (referred to primary)
```

Where $V_2' = a V_2$ is the secondary voltage referred to the primary.

---

## 5. Equivalent Circuit Parameters Determination (Open-Circuit and Short-Circuit Tests)

The parameters of the equivalent circuit are determined experimentally using two tests:

### 5.1 Open-Circuit (OC) Test (No-Load Test)

*   **Procedure:** The secondary winding is kept open. The primary winding is supplied with rated voltage at rated frequency.
*   **Purpose:** To determine the core loss resistance ($R_c$) and magnetizing reactance ($X_m$).
*   **Measurements:** Voltage ($V_{oc}$), Current ($I_{oc}$), Power ($P_{oc}$).
*   **Calculations:**
    *   $I_{oc}$ is approximately equal to $I_0$.
    *   $P_{oc}$ represents the core losses ($P_{core}$).
    *   The equivalent impedance on no-load is $Z_{oc} = V_{oc} / I_{oc}$.
    *   The no-load current is $I_{oc} = I_w + jI_m$.
    *   $I_w = P_{oc} / V_{oc}$ (this current is in phase with $V_{oc}$).
    *   Using the Pythagorean theorem in the complex plane: $I_{oc}^2 = I_w^2 + I_m^2$, so $I_m = \sqrt{I_{oc}^2 - I_w^2}$.
    *   $R_c = V_{oc} / I_w$.
    *   $X_m = V_{oc} / I_m$.

### 5.2 Short-Circuit (SC) Test

*   **Procedure:** The secondary winding is short-circuited. The primary winding is supplied with a reduced voltage, and the current is gradually increased until the primary current reaches its rated value. The applied voltage is usually adjusted to circulate rated current in the windings.
*   **Purpose:** To determine the winding resistances ($R_1, R_2'$) and leakage reactances ($X_1, X_2'$).
*   **Measurements:** Voltage ($V_{sc}$), Current ($I_{sc}$), Power ($P_{sc}$).
*   **Calculations:**
    *   $I_{sc}$ is the rated current.
    *   $P_{sc}$ represents the total copper losses ($I^2R$ losses) at rated current, i.e., $P_{sc} = I_{sc}^2 R_{eq}$, where $R_{eq}$ is the equivalent resistance referred to the side where measurements are taken (usually primary).
    *   $R_{eq} = P_{sc} / I_{sc}^2$.
    *   The equivalent impedance on short-circuit is $Z_{eq} = V_{sc} / I_{sc}$.
    *   The equivalent reactance on short-circuit is $X_{eq} = \sqrt{Z_{eq}^2 - R_{eq}^2}$.

*   **Distribution of Parameters:**
    *   Often, it is assumed that $R_1 = R_2'$ and $X_1 = X_2'$.
    *   Then, $R_1 = R_2' = R_{eq} / 2$.
    *   $X_1 = X_2' = X_{eq} / 2$.
    *   Alternatively, if the transformer is designed for a specific voltage ratio, the resistances and reactances can be allocated based on the winding properties (e.g., more turns mean higher resistance and reactance). For example, if the primary winding has more turns, $R_1 > R_2'$.

---

## 6. Voltage Regulation

Voltage regulation is a measure of the change in secondary terminal voltage from no load to full load for a specified power factor. It indicates how well the transformer maintains its secondary voltage under varying load conditions.

*   **Definition:** Voltage regulation (VR) is defined as the percentage change in secondary voltage from no load to full load, relative to the full-load secondary voltage.
    *   $VR = \frac{V_{2,nl} - V_{2,fl}}{V_{2,fl}} \times 100\%$
    where:
        *   $V_{2,nl}$ is the secondary terminal voltage at no load.
        *   $V_{2,fl}$ is the secondary terminal voltage at full load.

*   **Ideal Transformer:** For an ideal transformer, the voltage regulation is zero, as there are no internal voltage drops.

*   **Practical Transformer:** In a practical transformer, the internal impedance ($R_1, X_1, R_2, X_2$) causes a voltage drop when current flows. This drop causes the terminal voltage to decrease from no load to full load.

*   **Calculation of Voltage Regulation:**
    *   Voltage regulation can be calculated using the approximate equivalent circuit.
    *   First, we need to find the secondary voltage at full load ($V_{2,fl}$) for a given load power factor.
    *   Refer all parameters to the primary side.
    *   Calculate the primary current $I_1 = a I_2$, where $I_2$ is the secondary full-load current.
    *   The primary terminal voltage $V_1$ is related to the referred secondary voltage $V_2'$ and the equivalent impedance $Z_{eq} = (R_1+R_2') + j(X_1+X_2')$.
    *   $V_1 = V_2' + I_1 Z_{eq}$ (phasor equation).
    *   To calculate $V_{2,nl}$, consider the no-load condition where $I_2 = 0$, so $I_1$ is only the no-load current $I_0$. $V_1 \approx E_1$.
    *   The relationship $E_1 = a V_2$ is used.
    *   A more practical approach to calculate $V_{2,fl}$ for voltage regulation is:
        *   Determine $E_1 = V_1$ (primary applied voltage, assuming $I_0$ is small and $R_1, X_1$ drops are negligible for no-load voltage reference).
        *   Calculate the referred secondary voltage $E_2' = a E_1$.
        *   Calculate the secondary current $I_2$ based on the load.
        *   Refer $I_2$ to the primary side: $I_2' = a I_2$.
        *   Calculate the voltage drop across the equivalent impedance: $\Delta V' = I_2' Z_{eq} = I_2'(R_{eq} + jX_{eq})$.
        *   The secondary voltage referred to the primary at full load is $V_2' = E_1 - I_2' Z_{eq}$ (phasor subtraction).
        *   The actual secondary voltage at full load is $V_{2,fl} = V_2' / a$.
    *   Now, $V_{2,nl}$ is usually taken as the no-load secondary terminal voltage, which is $a \times V_1$ if we refer to primary side.

*   **Approximate Formula for Voltage Regulation:** For simpler calculations, the following approximate formula can be used, which is derived from the phasor diagram:
    *   For lagging power factor ($\phi_2$ is the angle between $V_2$ and $I_2$):
        $VR \approx \frac{I_2 R_{eq} \cos(\phi_2) + I_2 X_{eq} \sin(\phi_2)}{V_2} \times 100\%$
    *   For leading power factor ($\phi_2$ is the angle between $V_2$ and $I_2$):
        $VR \approx \frac{I_2 R_{eq} \cos(\phi_2) - I_2 X_{eq} \sin(\phi_2)}{V_2} \times 100\%$

    *   Where:
        *   $I_2$ is the full-load secondary current.
        *   $R_{eq}$ is the equivalent resistance referred to the secondary side ($R_{eq} = R_1/a^2 + R_2$).
        *   $X_{eq}$ is the equivalent leakage reactance referred to the secondary side ($X_{eq} = X_1/a^2 + X_2$).
        *   $V_2$ is the rated secondary voltage.
        *   $\cos(\phi_2)$ is the load power factor.
        *   $\sin(\phi_2)$ is determined from $\cos(\phi_2)$. For lagging PF, $\phi_2$ is positive. For leading PF, $\phi_2$ is negative, and $\cos(\phi_2)$ is still positive, but $\sin(\phi_2)$ becomes negative. The formula correctly handles this by the sign change.

*   **Power Factor and Voltage Regulation:**
    *   **Lagging PF:** Voltage regulation is positive and increases with decreasing power factor.
    *   **Unity PF:** Voltage regulation is positive but lower than at lagging PF.
    *   **Leading PF:** Voltage regulation is negative, meaning the terminal voltage increases from no load to full load. This is due to the reactive component of the current leading the voltage, causing a voltage rise in the transformer's inductive impedance.

**Example:** A transformer has a voltage regulation of +2% at full load unity power factor and -3% at full load 0.8 leading power factor.

---

## 7. Numerical Problems

Let's work through some examples to solidify our understanding.

### Problem 1: No-Load Operation

A 10 kVA, 2400/240 V, 50 Hz single-phase transformer has the following no-load test data:
Applied voltage to LV side = 240 V
Current = 1.5 A
Power input = 100 W

Determine:
a) The core loss.
b) The magnetizing current ($I_m$).
c) The core loss current ($I_w$).
d) The power factor on no load.

**Solution:**

Given:
Rating = 10 kVA
$V_1$ (rated primary) = 2400 V
$V_2$ (rated secondary) = 240 V
$f$ = 50 Hz

No-load test on LV side:
$V_{oc}$ = 240 V
$I_{oc}$ = 1.5 A
$P_{oc}$ = 100 W

a) **Core Loss:**
The power input on no-load is the core loss.
$P_{core} = P_{oc} = 100 \, W$

b) **Core Loss Current ($I_w$):**
The core loss is dissipated by the current $I_w$ which is in phase with the applied voltage.
$P_{core} = V_{oc} \times I_w$
$100 = 240 \times I_w$
$I_w = \frac{100}{240} = 0.4167 \, A$

c) **Magnetizing Current ($I_m$):**
The no-load current $I_{oc}$ is the phasor sum of $I_w$ and $I_m$.
$I_{oc}^2 = I_w^2 + I_m^2$
$I_m^2 = I_{oc}^2 - I_w^2$
$I_m^2 = (1.5)^2 - (0.4167)^2$
$I_m^2 = 2.25 - 0.1736 = 2.0764$
$I_m = \sqrt{2.0764} = 1.441 \, A$

d) **Power Factor on No Load ($\cos(\phi_0)$):**
$\cos(\phi_0) = \frac{P_{oc}}{V_{oc} I_{oc}} = \frac{100}{240 \times 1.5} = \frac{100}{360} = 0.2778$

**Important Note:** Notice that $I_w$ is much smaller than $I_m$, and the no-load power factor is very low. This is characteristic of transformer no-load operation.

---

### Problem 2: Voltage Regulation

A 20 kVA, 2200/220 V, 50 Hz single-phase transformer has the following equivalent circuit parameters referred to the high voltage side:
$R_{eq1} = 10 \, \Omega$
$X_{eq1} = 25 \, \Omega$
$R_c = 10 \, k\Omega$
$X_{m} = 5 \, k\Omega$

The transformer is supplying a load of 15 kW at 220 V and 0.8 lagging power factor.
Calculate the voltage regulation of the transformer.

**Solution:**

Given:
Rating = 20 kVA
$V_1$ (rated primary) = 2200 V
$V_2$ (rated secondary) = 220 V
$f$ = 50 Hz

Equivalent circuit parameters referred to HV side:
$R_{eq1} = 10 \, \Omega$
$X_{eq1} = 25 \, \Omega$
$R_c = 10 \, k\Omega$
$X_m = 5 \, k\Omega$

Load conditions:
$P_{load}$ = 15 kW = 15000 W
$V_{2,fl}$ = 220 V (rated secondary voltage at full load)
$\cos(\phi_2)$ = 0.8 lagging

**Step 1: Refer parameters to the secondary side (for applying the approximate formula for VR).**
Turns ratio $a = N_2/N_1 = V_2/V_1 = 220/2200 = 0.1$.
Alternatively, $a_{HV/LV} = 2200/220 = 10$. Let's use $a=10$ for referring HV to LV.

$R_{eq2} = R_{eq1} / a^2 = 10 / 10^2 = 10 / 100 = 0.1 \, \Omega$
$X_{eq2} = X_{eq1} / a^2 = 25 / 10^2 = 25 / 100 = 0.25 \, \Omega$
$R_c2 = R_c / a^2 = 10000 / 100 = 100 \, \Omega$
$X_{m2} = X_m / a^2 = 5000 / 100 = 50 \, \Omega$

**Step 2: Calculate the secondary full-load current ($I_2$).**
The load is 15 kW at 220 V, 0.8 PF.
$P_{load} = V_{2,fl} I_{2,fl} \cos(\phi_2)$
$15000 = 220 \times I_{2,fl} \times 0.8$
$I_{2,fl} = \frac{15000}{220 \times 0.8} = \frac{15000}{176} = 85.227 \, A$

**Step 3: Determine the power factor angle ($\phi_2$).**
$\cos(\phi_2) = 0.8$ (lagging)
$\sin(\phi_2) = \sqrt{1 - 0.8^2} = \sqrt{1 - 0.64} = \sqrt{0.36} = 0.6$

**Step 4: Calculate the voltage regulation using the approximate formula.**
$VR \approx \frac{I_2 R_{eq2} \cos(\phi_2) + I_2 X_{eq2} \sin(\phi_2)}{V_2} \times 100\%$
$VR \approx \frac{85.227 \times 0.1 \times 0.8 + 85.227 \times 0.25 \times 0.6}{220} \times 100\%$
$VR \approx \frac{6.81816 + 12.78405}{220} \times 100\%$
$VR \approx \frac{19.60221}{220} \times 100\%$
$VR \approx 0.08910 \times 100\% \approx 8.91\%$

**Alternative method using referred primary voltage ($V_1$):**
The rated primary voltage is $V_1 = 2200 \, V$.
The full load secondary voltage is $V_{2,fl} = 220 \, V$.
The no-load secondary voltage, $V_{2,nl}$, is approximately the rated primary voltage referred to the secondary side if we consider the ideal transformer part.
$V_{2,nl} = a \times V_1 = 0.1 \times 2200 = 220 \, V$.
This seems counterintuitive if we are looking for voltage drop. Let's reconsider.

Let's use the primary side equivalent circuit for calculating voltage regulation.
$V_1$ (applied) = 2200 V.
The referred secondary voltage at no load is $V_{2,nl}' = V_1 = 2200 \, V$.

Now, calculate the equivalent impedance drop at full load.
Full load secondary current $I_2 = 85.227 \, A$.
Equivalent secondary impedance $Z_{eq2} = R_{eq2} + jX_{eq2} = 0.1 + j0.25 \, \Omega$.
Equivalent primary impedance $Z_{eq1} = R_{eq1} + jX_{eq1} = 10 + j25 \, \Omega$.

Primary current at full load $I_1 = a I_2 = 0.1 \times 85.227 = 8.5227 \, A$.
The power factor of the load is 0.8 lagging. So, the primary current $I_1$ will also lag the referred secondary voltage $V_2'$ by the same angle.
The referred secondary voltage at no load is $V_2' (nl) = V_1 = 2200 \, V$.

At full load, the primary current is $I_1 = 8.5227 \, A$ at 0.8 PF lagging.
Let $V_1$ be the reference phasor for calculation of voltage drop.
$V_1 = 2200 \angle 0^\circ \, V$.
$I_1 = 8.5227 \angle -36.87^\circ \, A$ (since $\cos(36.87^\circ) = 0.8$).

Voltage drop in the equivalent impedance referred to primary:
$\Delta V_1 = I_1 Z_{eq1} = (8.5227 \angle -36.87^\circ) \times (10 + j25)$
$Z_{eq1} = \sqrt{10^2 + 25^2} \angle \arctan(25/10) = 26.926 \angle 68.199^\circ \, \Omega$.
$\Delta V_1 = (8.5227 \angle -36.87^\circ) \times (26.926 \angle 68.199^\circ)$
$\Delta V_1 = (8.5227 \times 26.926) \angle (-36.87^\circ + 68.199^\circ)$
$\Delta V_1 = 229.50 \angle 31.329^\circ \, V$
$\Delta V_1 = 229.50 (\cos(31.329^\circ) + j\sin(31.329^\circ))$
$\Delta V_1 = 229.50 (0.8546 + j0.5204) = 196.16 + j119.43 \, V$.

The referred secondary voltage at full load, $V_2'(fl)$, is:
$V_2'(fl) = V_1 - \Delta V_1$
$V_2'(fl) = 2200 \angle 0^\circ - (196.16 + j119.43)$
$V_2'(fl) = 2200 - 196.16 - j119.43$
$V_2'(fl) = 2003.84 - j119.43 \, V$

Magnitude of $V_2'(fl) = \sqrt{2003.84^2 + (-119.43)^2} = \sqrt{4015374 + 14264} = \sqrt{4029638} = 2007.39 \, V$.

The actual secondary voltage at full load is $V_{2,fl} = V_2'(fl) / a = 2007.39 / 10 = 200.74 \, V$.

The no-load secondary voltage is $V_{2,nl} = 220 \, V$.

Voltage Regulation:
$VR = \frac{V_{2,nl} - V_{2,fl}}{V_{2,fl}} \times 100\%$
$VR = \frac{220 - 200.74}{200.74} \times 100\%$
$VR = \frac{19.26}{200.74} \times 100\% = 9.595 \% \approx 9.60\%$

**Discrepancy between methods:** The approximate formula gives 8.91% while the phasor method gives 9.60%. The difference arises from the assumptions made in the approximate formula (e.g., neglecting the voltage drop in $R_c$ and $X_m$ when referring parameters and calculating $V_2$, and assuming $I_2$ is in phase with $V_2'$ for calculating the drop). The phasor method is more accurate.

**Let's recheck the approximate formula's inputs:**
$I_2 R_{eq2} \cos(\phi_2) = 85.227 \times 0.1 \times 0.8 = 6.81816$
$I_2 X_{eq2} \sin(\phi_2) = 85.227 \times 0.25 \times 0.6 = 12.78405$
$V_2 = 220 V$

The approximation is: $V_2'(nl) = V_2'(fl) + I_2'(fl) (R_{eq1} \cos\phi_2 + X_{eq1} \sin\phi_2)$
Here $V_2'(nl)$ should be $V_1$.
$V_1 = V_2'(fl) + I_2'(fl) (R_{eq1} \cos\phi_2 + X_{eq1} \sin\phi_2)$
$2200 = V_2'(fl) + (8.5227) (10 \times 0.8 + 25 \times 0.6)$
$2200 = V_2'(fl) + 8.5227 \times (8 + 15)$
$2200 = V_2'(fl) + 8.5227 \times 23$
$2200 = V_2'(fl) + 196.0221$
$V_2'(fl) = 2200 - 196.0221 = 2003.9779 \, V$.

$V_{2,fl} = V_2'(fl) / a = 2003.9779 / 10 = 200.40 \, V$.

$VR = \frac{220 - 200.40}{200.40} \times 100\% = \frac{19.6}{200.40} \times 100\% = 9.78\%$

This result is closer to the phasor method. The approximate formula is often stated as:
$VR (\% ) \approx \frac{I_2 (R_{eq2} \cos(\phi_2) + X_{eq2} \sin(\phi_2))}{V_2} \times 100$ for lagging PF.
This formula is derived by approximating the voltage drop along the impedance phasor.

Let's try with the approximate formula again with careful interpretation of terms.
$I_2 = 85.227 A$
$R_{eq2} = 0.1 \Omega$
$X_{eq2} = 0.25 \Omega$
$V_2 = 220 V$
$\cos(\phi_2) = 0.8$ lagging, $\sin(\phi_2) = 0.6$

$VR \approx \frac{85.227 \times 0.1 \times 0.8 + 85.227 \times 0.25 \times 0.6}{220} \times 100\%$
$VR \approx \frac{6.818 + 12.784}{220} \times 100\% = \frac{19.602}{220} \times 100\% = 8.91\%$

The discrepancy is often due to how the phasor diagram is simplified to get the approximate formula. The phasor method directly solving $V_1 = V_2' + I_1' Z_{eq1}$ is more accurate.

---

### Problem 3: Short-Circuit Test Analysis

From the short-circuit test of a 50 kVA, 11000/440 V, 50 Hz single-phase transformer, the following data was obtained:
Short-circuited voltage = 500 V
Short-circuited current = 4.54 A (rated primary current)
Power input = 1100 W

Determine the equivalent impedance, resistance, and leakage reactance referred to the HV side. Also, determine the percentage voltage regulation at full load 0.8 lagging power factor.

**Solution:**

Given:
Rating = 50 kVA
$V_1$ (rated primary) = 11000 V
$V_2$ (rated secondary) = 440 V
$f$ = 50 Hz

Short-circuit test data:
$V_{sc}$ = 500 V
$I_{sc}$ = 4.54 A (which is rated primary current $I_{1,rated}$)
$P_{sc}$ = 1100 W

**Step 1: Calculate equivalent impedance referred to HV side ($Z_{eq1}$).**
$Z_{eq1} = \frac{V_{sc}}{I_{sc}} = \frac{500 \, V}{4.54 \, A} = 110.13 \, \Omega$

**Step 2: Calculate equivalent resistance referred to HV side ($R_{eq1}$).**
The power input $P_{sc}$ at short circuit represents the copper losses ($I^2R$ losses) at rated current.
$P_{sc} = I_{sc}^2 R_{eq1}$
$1100 \, W = (4.54 \, A)^2 R_{eq1}$
$1100 = 20.6116 \times R_{eq1}$
$R_{eq1} = \frac{1100}{20.6116} = 53.37 \, \Omega$

**Step 3: Calculate equivalent leakage reactance referred to HV side ($X_{eq1}$).**
$Z_{eq1}^2 = R_{eq1}^2 + X_{eq1}^2$
$X_{eq1} = \sqrt{Z_{eq1}^2 - R_{eq1}^2}$
$X_{eq1} = \sqrt{(110.13)^2 - (53.37)^2}$
$X_{eq1} = \sqrt{12128.6 - 2848.3} = \sqrt{9280.3} = 96.33 \, \Omega$

**Summary of parameters referred to HV side:**
$Z_{eq1} = 110.13 \, \Omega$
$R_{eq1} = 53.37 \, \Omega$
$X_{eq1} = 96.33 \, \Omega$

**Step 4: Calculate the voltage regulation at full load 0.8 lagging power factor.**
First, determine the full-load current at secondary.
$I_{2,rated} = \frac{50 \, kVA}{440 \, V} = \frac{50000}{440} = 113.64 \, A$

Now, we need to use the approximate voltage regulation formula. We need parameters referred to the secondary side.
Turns ratio $a = V_1/V_2 = 11000/440 = 25$.
$R_{eq2} = R_{eq1} / a^2 = 53.37 / 25^2 = 53.37 / 625 = 0.0854 \, \Omega$
$X_{eq2} = X_{eq1} / a^2 = 96.33 / 25^2 = 96.33 / 625 = 0.1541 \, \Omega$
$V_2 = 440 \, V$
$I_2 = 113.64 \, A$
$\cos(\phi_2) = 0.8$ lagging, $\sin(\phi_2) = 0.6$

$VR \approx \frac{I_2 R_{eq2} \cos(\phi_2) + I_2 X_{eq2} \sin(\phi_2)}{V_2} \times 100\%$
$VR \approx \frac{113.64 \times 0.0854 \times 0.8 + 113.64 \times 0.1541 \times 0.6}{440} \times 100\%$
$VR \approx \frac{7.757 + 10.528}{440} \times 100\%$
$VR \approx \frac{18.285}{440} \times 100\%$
$VR \approx 0.04156 \times 100\% \approx 4.16\%$

---

## Practice Questions

1.  A 15 kVA, 440/220 V, 50 Hz single-phase transformer has the following values obtained from tests:
    *   Open circuit test (on LV side): $V_{oc}$ = 220 V, $I_{oc}$ = 4 A, $P_{oc}$ = 150 W.
    *   Short circuit test (on HV side): $V_{sc}$ = 25 V, $I_{sc}$ = 34 A, $P_{sc}$ = 450 W.
    Calculate the parameters of the equivalent circuit referred to the HV side. Also, calculate the voltage regulation at full load 0.8 lagging power factor. (Assume $R_c$ and $X_m$ are large enough not to significantly affect the SC test results).

2.  Explain the phenomenon of voltage regulation in a single-phase transformer. How does the power factor of the load affect the voltage regulation?

3.  Draw and explain the phasor diagram of a single-phase transformer supplying a capacitive load at unity power factor.

4.  A 5 kVA, 400/200 V, 50 Hz transformer has the following equivalent circuit parameters:
    *   $R_1 = 0.8 \, \Omega$, $X_1 = 1.2 \, \Omega$
    *   $R_2 = 0.2 \, \Omega$, $X_2 = 0.3 \, \Omega$
    *   $R_c = 400 \, \Omega$, $X_m = 200 \, \Omega$
    Calculate the voltage regulation at full load of 0.8 leading power factor.

---

## Answers to Practice Questions

1.  **Equivalent Circuit Parameters (HV side):**
    *   **OC Test (LV Side):**
        *   $I_w = P_{oc} / V_{oc} = 150 W / 220 V = 0.6818 A$
        *   $I_m = \sqrt{I_{oc}^2 - I_w^2} = \sqrt{4^2 - 0.6818^2} = \sqrt{16 - 0.4648} = \sqrt{15.5352} = 3.941 A$
        *   $R_c$(LV) $= V_{oc} / I_w = 220 V / 0.6818 A = 322.67 \, \Omega$
        *   $X_m$(LV) $= V_{oc} / I_m = 220 V / 3.941 A = 55.82 \, \Omega$
    *   **SC Test (HV Side):**
        *   $Z_{eq1} = V_{sc} / I_{sc} = 25 V / 34 A = 0.7353 \, \Omega$
        *   $R_{eq1} = P_{sc} / I_{sc}^2 = 450 W / (34 A)^2 = 450 / 1156 = 0.3893 \, \Omega$
        *   $X_{eq1} = \sqrt{Z_{eq1}^2 - R_{eq1}^2} = \sqrt{(0.7353)^2 - (0.3893)^2} = \sqrt{0.5407 - 0.1515} = \sqrt{0.3892} = 0.624 \, \Omega$
    *   **Parameters referred to HV side:**
        *   Turns ratio $a = V_1/V_2 = 440/220 = 2$.
        *   $R_{eq1} = R_{eq1}$ (from SC test) $= 0.3893 \, \Omega$.
        *   $X_{eq1} = X_{eq1}$ (from SC test) $= 0.624 \, \Omega$.
        *   $R_c1 = R_c$(LV) $\times a^2 = 322.67 \times 2^2 = 322.67 \times 4 = 1290.68 \, \Omega$.
        *   $X_{m1} = X_m$(LV) $\times a^2 = 55.82 \times 2^2 = 55.82 \times 4 = 223.28 \, \Omega$.

    *   **Voltage Regulation:**
        *   Full load secondary current $I_{2,fl} = 15000 VA / 220 V = 68.18 A$.
        *   $\cos(\phi_2) = 0.8$ lagging, $\sin(\phi_2) = 0.6$.
        *   $VR \approx \frac{I_2 R_{eq2} \cos(\phi_2) + I_2 X_{eq2} \sin(\phi_2)}{V_2} \times 100\%$
        *   $R_{eq2} = R_{eq1}/a^2 = 0.3893 / 4 = 0.0973 \, \Omega$.
        *   $X_{eq2} = X_{eq1}/a^2 = 0.624 / 4 = 0.156 \, \Omega$.
        *   $VR \approx \frac{68.18 \times 0.0973 \times 0.8 + 68.18 \times 0.156 \times 0.6}{220} \times 100\%$
        *   $VR \approx \frac{5.322 + 6.386}{220} \times 100\% = \frac{11.708}{220} \times 100\% = 5.32\%$

2.  **Voltage Regulation Explanation:** Voltage regulation in a transformer is the percentage change in the secondary terminal voltage from no load to full load at a constant primary voltage. It is caused by the internal impedance (resistance and leakage reactance) of the transformer windings, which leads to voltage drops.
    *   **Lagging Power Factor:** Voltage regulation is positive and increases as the power factor becomes more lagging. The reactive component of the current adds to the voltage drop across the inductive reactance.
    *   **Unity Power Factor:** Voltage regulation is positive but lower than at lagging power factor.
    *   **Leading Power Factor:** Voltage regulation can be negative. This occurs because the reactive component of the current leads the voltage, and the voltage drop across the inductive reactance is partially offset by a voltage rise due to the leading reactive current. At a sufficiently leading power factor, the terminal voltage at full load can be higher than the no-load voltage.

3.  **Phasor Diagram (Capacitive Load, Unity PF):** (Sketch the phasor diagram as described in Section 3.3, but for unity power factor load).
    *   $V_2$ (secondary terminal voltage) is the reference.
    *   $I_2$ is in phase with $V_2$.
    *   $I_2'$ (primary equivalent of $I_2$) leads $V_1$ by the same angle as $I_2$ with $V_2$. If the load is unity PF, $I_2$ is in phase with $V_2$. Then $I_2'$ would be in phase with $V_1$ (neglecting impedances).
    *   $I_0$ lags $V_1$ slightly.
    *   $I_1$ (total primary current) is the phasor sum of $I_0$ and $I_2'$.
    *   $E_1$ leads $V_1$ slightly.
    *   $V_1$ leads $E_1$ slightly.
    *   In this case, $I_2'$ is in phase with $V_1$. $I_0$ lags $V_1$. $I_1$ will have a smaller angle with $V_1$ than $I_0$.

4.  **Voltage Regulation (leading PF):**
    *   Rating: 5 kVA, 400/200 V. Turns ratio $a = 400/200 = 2$.
    *   Parameters referred to LV side:
        *   $R_{eq2} = R_2 + R_1/a^2 = 0.2 + 0.8/2^2 = 0.2 + 0.8/4 = 0.2 + 0.2 = 0.4 \, \Omega$.
        *   $X_{eq2} = X_2 + X_1/a^2 = 0.3 + 1.2/2^2 = 0.3 + 1.2/4 = 0.3 + 0.3 = 0.6 \, \Omega$.
    *   Full load secondary current $I_{2,fl} = 5000 VA / 200 V = 25 A$.
    *   Load: 0.8 leading power factor. $\cos(\phi_2) = 0.8$, $\sin(\phi_2) = -0.6$.
    *   $VR \approx \frac{I_2 R_{eq2} \cos(\phi_2) + I_2 X_{eq2} \sin(\phi_2)}{V_2} \times 100\%$
    *   $VR \approx \frac{25 \times 0.4 \times 0.8 + 25 \times 0.6 \times (-0.6)}{200} \times 100\%$
    *   $VR \approx \frac{8 - 9}{200} \times 100\% = \frac{-1}{200} \times 100\% = -0.5\%$

---

## Learning Outcomes Alignment

This module content directly addresses **CO4: Analyse the performance of 1-phase transformer and auto-transformer under various load conditions.** (Knowledge Level: K3)

*   **Operation on no load and on load:** Covered in sections 1 and 2, explaining the current components and flux creation.
*   **Phasor diagram at different load conditions:** Detailed in section 3, illustrating the current and voltage relationships for various power factors.
*   **Equivalent circuit:** Explained in section 4, presenting both exact and approximate models.
*   **Voltage regulation:** Defined and calculated in section 6, emphasizing its dependence on load power factor.
*   **Numerical problems:** Demonstrated in section 7 and practiced in the questions, applying the learned concepts for practical analysis.

The understanding of these operational aspects is foundational for analyzing the overall performance of single-phase transformers, as required by CO4.

---
**(End of Module 3 Notes)**
