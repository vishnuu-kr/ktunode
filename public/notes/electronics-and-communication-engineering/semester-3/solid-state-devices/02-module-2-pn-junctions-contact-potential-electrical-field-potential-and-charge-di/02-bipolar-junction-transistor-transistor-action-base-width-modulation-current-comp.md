---
title: "Bipolar junction transistor : Transistor action, Base width modulation, Current components in a BJT, Derivation of current components."
subject: "SOLID STATE DEVICES"
module: "Module 2: PN junctions : Contact potential, Electrical Field, Potential and Charge distribution at the junction, Biasing and Energy band diagrams, Ideal diode equation."
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2b6"
status: "completed"
scrapedAt: "2026-05-23T17:47:34.660Z"
---
# SOLID STATE DEVICES - Module 2: PN Junctions & Bipolar Junction Transistors

This module delves into the fundamental behavior of PN junctions, forming the bedrock for understanding more complex semiconductor devices. We'll then explore the operation of the Bipolar Junction Transistor (BJT), a key active component in electronics.

**Learning Outcomes:**

*   Understand the fundamental principles of transistor action in a BJT.
*   Explain the phenomenon of base width modulation and its impact on transistor characteristics.
*   Identify and derive the various current components that flow in a BJT.

**Course Outcomes Alignment:**

*   **CO1:** (Implicitly used in understanding carrier behavior within the BJT, though not explicitly the focus of this specific topic).
*   **CO2:** Essential for understanding how drift and diffusion currents contribute to BJT operation.
*   **CO3:** The core of this topic is deriving and understanding the current components.
*   **CO4:** Discussed through the principles of transistor action and biasing.
*   **CO5:** Not directly covered in this topic.

---

## Topic 1: Bipolar Junction Transistor (BJT)

### 1.1 Transistor Action

**Key Concept:** A BJT is a three-terminal semiconductor device that amplifies or switches electronic signals. It consists of two PN junctions, forming either an NPN or PNP structure.

**Structure of a BJT:**

*   **Emitter (E):** Heavily doped, emits carriers into the base.
*   **Base (B):** Lightly doped and very thin, controls the current flow between emitter and collector.
*   **Collector (C):** Moderately doped and relatively wider, collects carriers from the base.

**Operation (NPN Transistor as an example):**

The fundamental "transistor action" relies on controlling the current flowing from the emitter to the collector by varying the current flowing into the base. This is achieved by forward and reverse biasing the two PN junctions.

1.  **Forward Biased Emitter-Base (EB) Junction:**
    *   When the EB junction is forward-biased (e.g., $V_{EB} > 0$), electrons are injected from the emitter (N-type) into the base (P-type).
    *   This injection creates a large number of minority carriers (electrons) in the base.

2.  **Thin and Lightly Doped Base:**
    *   The base is designed to be extremely thin and lightly doped. This is crucial for efficient transistor action.
    *   **Thin Base:** Most of the injected electrons from the emitter will reach the collector-base (CB) junction without recombining in the base.
    *   **Lightly Doped Base:** Minimizes recombination of injected electrons with the majority carriers (holes) in the base.

3.  **Reverse Biased Collector-Base (CB) Junction:**
    *   When the CB junction is reverse-biased (e.g., $V_{CB} > 0$ for NPN), it creates a depletion region.
    *   The electric field in the CB depletion region sweeps the electrons that have diffused through the base into the collector.

**Analogy:** Imagine a water valve. The emitter is the water source, the collector is the outlet, and the base is the valve control. A small effort (base current) on the valve can control a much larger flow of water (emitter-collector current).

**Biasing for Amplification:**

*   **Forward Bias EB Junction:** To allow carrier injection from emitter to base.
*   **Reverse Bias CB Junction:** To efficiently collect carriers at the collector.

**Important Point:** The amplification capability arises from the fact that a small change in the base-emitter voltage ($V_{BE}$) or base current ($I_B$) can lead to a much larger change in the collector current ($I_C$).

**Textbook Reference:**

*   **Pierret, "Semiconductor Device Fundamentals":** Chapter 9, "The Bipolar Junction Transistor," provides a detailed explanation of transistor action and the physical mechanisms involved.
*   **Sze, "Physics of Semiconductor Devices":** Chapter 6, "Bipolar Transistors," covers the fundamental principles of transistor operation.

---

### 1.2 Base Width Modulation (Early Effect)

**Key Concept:** Base width modulation, also known as the Early effect, describes the phenomenon where the effective width of the base in a BJT changes with the collector-base voltage ($V_{CB}$).

**Mechanism:**

*   The collector-base junction is typically reverse-biased during active mode operation.
*   As the reverse-bias voltage across the CB junction ($V_{CB}$) increases, the width of the CB depletion region increases.
*   This widening of the depletion region effectively "pinches" the base region, reducing its physical width.

**Impact on Collector Current:**

1.  **Reduced Recombination:** A narrower base means fewer opportunities for the injected minority carriers from the emitter to recombine with majority carriers in the base. This leads to a slightly higher fraction of injected carriers reaching the collector.
2.  **Increased Collection Efficiency:** With a narrower base, carriers have a shorter diffusion path to reach the collector depletion region, increasing the probability of being swept into the collector.

**Effect on Output Characteristics ($I_C$ vs. $V_{CE}$):**

*   The collector current ($I_C$) shows a slight increase as the collector-base voltage ($V_{CB}$) increases (for a constant $V_{BE}$).
*   In the output characteristics ($I_C$ vs. $V_{CE}$ with $I_B$ as a parameter), the curves are not perfectly horizontal. They have a slight positive slope, indicating that $I_C$ increases with increasing $V_{CE}$.
*   **Early Voltage ($V_A$):** This effect is quantified by the Early voltage. If the output characteristics are extrapolated back to the $V_{CE}$ axis, they intersect at a point called the Early voltage ($V_A$). This voltage is a measure of the sensitivity of $I_C$ to $V_{CE}$.
*   **Collector Current Equation with Early Effect:**
    $I_C = I_S e^{V_{BE}/V_T} (1 + \frac{V_{CE}}{V_A})$
    Where:
    *   $I_S$ is the reverse saturation current of the CB junction.
    *   $V_{BE}$ is the base-emitter voltage.
    *   $V_T$ is the thermal voltage ($kT/q$).
    *   $V_A$ is the Early voltage.

**Important Point:** Base width modulation is a non-ideal effect that leads to a non-zero output conductance in the active region of the BJT.

**Textbook Reference:**

*   **Pierret, "Semiconductor Device Fundamentals":** Chapter 9, "The Bipolar Junction Transistor," discusses the Early effect and its impact on transistor characteristics.
*   **Sze, "Semiconductor Physics and Devices":** Chapter 6, "Bipolar Transistors," also covers base width modulation.

---

### 1.3 Current Components in a BJT

**Key Concept:** In a BJT, several current components contribute to the total current flow. Understanding these components is crucial for analyzing BJT behavior and deriving key parameters like current gain.

**Assumptions for Simplified Analysis (Active Mode):**

*   EB junction is forward-biased.
*   CB junction is reverse-biased.
*   Base is very thin and lightly doped.
*   Negligible recombination in the depletion regions.

**Current Components (NPN Transistor):**

1.  **Emitter Injection Current ($I_{E, inj}$):**
    *   This is the current due to electrons injected from the emitter (N) into the base (P).
    *   It is the primary current responsible for transistor action.
    *   This is a diffusion current.

2.  **Base Recombination Current ($I_{B, rec}$):**
    *   A small fraction of the injected electrons in the base recombine with the majority carriers (holes) in the base.
    *   This recombination current constitutes the base current $I_B$.
    *   It is a diffusion current.

3.  **Collector Diffusion Current ($I_{C, diff}$):**
    *   This is the current of electrons that diffuse through the base and reach the CB junction.
    *   These electrons are then swept into the collector by the electric field of the reverse-biased CB junction.
    *   This is the main component of the collector current.
    *   It is a diffusion current.

4.  **Collector Reverse Saturation Current ($I_{C, sat}$):**
    *   This is a small leakage current that flows across the reverse-biased CB junction due to thermally generated minority carriers in the collector depletion region.
    *   It flows from collector to base, even when there is no emitter current.
    *   This is a drift current.

5.  **Base Diffusion Current ($I_{B, diff}$):**
    *   This is the current due to holes that diffuse from the base into the emitter.
    *   Since the base is lightly doped, this current is generally smaller than the emitter injection current.
    *   This is a diffusion current.

**Kirchhoff's Current Law:**

The sum of currents entering a node must equal the sum of currents leaving it.
For a BJT, this translates to:
$I_E = I_C + I_B$

**Where do these currents come from?**

*   **Emitter Current ($I_E$):** Primarily the injection of electrons from the emitter into the base ($I_{E, inj}$), plus a small diffusion current of holes from the base into the emitter ($I_{B, diff}$).
    $I_E = I_{E, inj} + I_{B, diff}$

*   **Base Current ($I_B$):** Primarily the recombination of injected electrons with base majority carriers ($I_{B, rec}$), plus the leakage current from the collector ($I_{C, sat}$).
    $I_B = I_{B, rec} + I_{C, sat}$

*   **Collector Current ($I_C$):** Primarily the collected injected electrons ($I_{C, diff}$), plus the leakage current from the collector ($I_{C, sat}$).
    $I_C = I_{C, diff} + I_{C, sat}$

**Important Point:** The goal of transistor action is to make $I_C$ largely proportional to $I_E$ (and thus controlled by $I_B$), with $I_{C, sat}$ being a small leakage current.

**Textbook Reference:**

*   **Pierret, "Semiconductor Device Fundamentals":** Chapter 9, Section 3, "Current Components and Gains," provides a detailed breakdown of these currents.
*   **Neamen, "Semiconductor Physics and Devices":** Chapter 7, "Bipolar Junction Transistors," outlines the current components and their origins.

---

### 1.4 Derivation of Current Components

This section derives the mathematical expressions for the main current components, assuming an NPN transistor in the active region. We'll focus on the diffusion currents, as they dominate transistor operation.

**Assumptions:**

*   The device is in the active region (EB forward-biased, CB reverse-biased).
*   The base width ($W$) is very small ($W \ll L_n$, where $L_n$ is the electron diffusion length in the base).
*   The doping concentrations are uniform.
*   The CB junction depletion region is entirely within the collector.
*   The EB junction depletion region is entirely within the emitter.
*   Recombination in the depletion regions is negligible.

**Electron Concentration Profile in the Base:**

Due to the forward-biased EB junction, electrons are injected from the emitter into the base. Since the base is thin, this injection results in a nearly linear gradient of electron concentration across the base.

*   **Electron concentration at the emitter edge of the base ($x=0$):** This is the minority carrier concentration in the base, determined by the EB forward bias.
    $n_n(0) \approx n_{p0} e^{V_{BE}/V_T}$
    where $n_{p0}$ is the equilibrium electron concentration in the P-type base.

*   **Electron concentration at the collector edge of the base ($x=W$):** Due to the reverse-biased CB junction, the electron concentration at the collector edge of the base is very low, close to zero (or more precisely, the equilibrium concentration $n_{p0}$ but with a strong electric field effect). For simplification, we often assume:
    $n_n(W) \approx 0$ (This is a good approximation when the CB reverse bias is significant).

**1. Emitter Injection Current ($I_{E, inj}$):**

This is the diffusion current of electrons across the EB junction into the base.
The diffusion current density is given by $J_n = q D_n \frac{dn_n}{dx}$.
Across the EB junction, we consider the flux of electrons entering the base.
However, it's more direct to consider the electron current *density* entering the base from the emitter.

A more common approach for the emitter current component is to consider the electron current density entering the base due to the forward-biased EB junction:

$J_{E, inj} \approx q \frac{D_n}{L_n} n_{p0} e^{V_{BE}/V_T}$ (This represents the recombination in the emitter and is often approximated by the total emitter current)

**A more direct way to derive the emitter current component due to injection:**

Consider the diffusion of electrons from the emitter into the base. The electron current density entering the base is:
$J_{n}(x=0) = q D_n \frac{dn_n}{dx}|_{x=0}$

Assuming a linear profile: $\frac{dn_n}{dx} \approx \frac{n_n(0) - n_n(W)}{W} \approx \frac{n_{p0} e^{V_{BE}/V_T} - 0}{W}$

So, $J_{n}(x=0) \approx q D_n \frac{n_{p0} e^{V_{BE}/V_T}}{W}$. This is the electron diffusion current density entering the base.
The total emitter injection current is this density multiplied by the emitter area ($A_E$):
$I_{E, inj} = A_E \cdot q D_n \frac{n_{p0} e^{V_{BE}/V_T}}{W}$

**However, the standard derivation for the emitter current is often related to the total emitter current density, which includes a small hole component:**

The emitter current density is primarily due to electrons injected from the emitter into the base. This injection is driven by the forward bias of the EB junction. The electron current density injected across the EB junction is given by:

$J_n(x=0) \approx q \frac{D_n}{L_n} n_{p0} e^{V_{BE}/V_T}$ (This relates to the recombination in the emitter).

**Let's focus on the key components that contribute to $I_C$ and $I_B$ through the base:**

**2. Collector Diffusion Current ($I_{C, diff}$):**

This is the current of electrons that diffuse across the base and are swept into the collector.
The electron current density at any point in the base is given by:
$J_n(x) = q D_n \frac{dn_n}{dx}$

Assuming a linear profile in the base: $n_n(x) = n_n(0) - \frac{n_n(0) - n_n(W)}{W} x$.
Using $n_n(W) \approx 0$ and $n_n(0) \approx n_{p0} e^{V_{BE}/V_T}$:
$n_n(x) \approx n_{p0} e^{V_{BE}/V_T} (1 - \frac{x}{W})$

The derivative is:
$\frac{dn_n}{dx} = - \frac{n_{p0} e^{V_{BE}/V_T}}{W}$

So, the electron current density in the base is constant (ideally, neglecting recombination in the base for now):
$J_n = q D_n (-\frac{n_{p0} e^{V_{BE}/V_T}}{W}) = -q D_n \frac{n_{p0} e^{V_{BE}/V_T}}{W}$
The negative sign indicates electron flow from emitter to collector.

The collector diffusion current is this current density flowing across the collector junction area ($A_C$):
$I_{C, diff} = A_C \cdot J_n$ (where $J_n$ is the current density)

The current density is approximately constant across the base because the base is thin and recombination is low. So, we can use the current density calculated at any point.
The current density flowing *into* the collector is:
$J_n(W) = q D_n \frac{n_{p0} e^{V_{BE}/V_T}}{W}$ (The magnitude of the current density).

Therefore, the collector diffusion current is:
$I_{C, diff} = A_C \cdot q D_n \frac{n_{p0} e^{V_{BE}/V_T}}{W}$

Let's relate this to the emitter injection current. The total current entering the base from the emitter is approximately:
$I_{E, inj} = A_E \cdot q D_n \frac{n_{p0} e^{V_{BE}/V_T}}{W}$ (assuming $A_E \approx A_C$).

So, $I_{C, diff} \approx I_{E, inj}$. This shows that most of the injected carriers reach the collector.

**3. Base Recombination Current ($I_{B, rec}$):**

This is the current of electrons that recombine with holes in the base.
The number of electron-hole recombinations per unit volume per unit time is $R = \frac{n_n' p_n'}{ \tau_p }$, where $n_n'$ and $p_n'$ are the excess minority carrier concentrations.
In our case, the excess electron concentration in the base is $n_n'(x) = n_n(x) - n_{p0}$. Since $n_n(W) \approx 0$, $n_n(x) \approx n_{p0} e^{V_{BE}/V_T} (1 - \frac{x}{W})$.
The excess electron concentration is $n_n'(x) \approx n_{p0} e^{V_{BE}/V_T} (1 - \frac{x}{W}) - n_{p0}$.
For significant injection, $n_{p0} e^{V_{BE}/V_T} \gg n_{p0}$, so $n_n'(x) \approx n_{p0} e^{V_{BE}/V_T} (1 - \frac{x}{W})$.

The recombination rate is approximately $R(x) \approx \frac{n_n'(x)}{\tau_n}$, where $\tau_n$ is the minority carrier lifetime in the base.
$R(x) \approx \frac{n_{p0} e^{V_{BE}/V_T} (1 - \frac{x}{W})}{\tau_n}$

The recombination current is the integral of this rate over the base volume ($A_B \cdot dx$) and multiplied by the charge $q$.
$I_{B, rec} = \int_0^W q R(x) A_B dx = \int_0^W q \frac{n_{p0} e^{V_{BE}/V_T} (1 - \frac{x}{W})}{\tau_n} A_B dx$
$I_{B, rec} = \frac{q A_B n_{p0} e^{V_{BE}/V_T}}{\tau_n} \int_0^W (1 - \frac{x}{W}) dx$
$I_{B, rec} = \frac{q A_B n_{p0} e^{V_{BE}/V_T}}{\tau_n} [x - \frac{x^2}{2W}]_0^W$
$I_{B, rec} = \frac{q A_B n_{p0} e^{V_{BE}/V_T}}{\tau_n} (W - \frac{W^2}{2W}) = \frac{q A_B n_{p0} e^{V_{BE}/V_T}}{\tau_n} \frac{W}{2}$

We can relate this to the emitter injection current. The electron diffusion length is $L_n = \sqrt{D_n \tau_n}$.
So, $\tau_n = L_n^2 / D_n$.
$I_{B, rec} = \frac{q A_B n_{p0} e^{V_{BE}/V_T}}{L_n^2 / D_n} \frac{W}{2} = \frac{q A_B n_{p0} e^{V_{BE}/V_T} D_n}{L_n^2} \frac{W}{2}$

Recall $I_{E, inj} \approx A_E \cdot q D_n \frac{n_{p0} e^{V_{BE}/V_T}}{W}$.
$I_{B, rec} = I_{E, inj} \frac{W}{2} \frac{D_n}{L_n^2 / D_n} \frac{A_B}{A_E} \approx I_{E, inj} \frac{W}{2L_n^2} D_n \frac{A_B}{A_E}$ (This is getting complicated).

Let's use a simpler representation:
$I_{B, rec} = \frac{I_{E, inj}}{ \beta } $ is incorrect. $\beta$ is related to $I_C / I_B$.

**A more direct approach to express $I_{B, rec}$ in terms of $I_{E, inj}$:**

The total number of injected electrons per unit time is $I_{E, inj}/q$.
The number of electrons recombining per unit time is $I_{B, rec}/q$.
The ratio of these currents is related to the base properties.

The current gain $\beta$ is defined as $\beta = \frac{I_C}{I_B}$.
We know $I_C \approx I_{E, inj} - I_{B, rec}$ (ideally, $I_C = I_{E, inj} - I_{B, rec} - I_{B, diff}$, but $I_{B, diff}$ is small).
$I_B = I_{B, rec} + I_{C, sat}$.
$I_E = I_{E, inj} + I_{B, diff}$.
$I_C = I_{C, diff} + I_{C, sat}$.

From $I_E = I_C + I_B$:
$(I_{E, inj} + I_{B, diff}) = (I_{C, diff} + I_{C, sat}) + (I_{B, rec} + I_{C, sat})$
$I_{E, inj} + I_{B, diff} = I_{C, diff} + I_{B, rec} + 2I_{C, sat}$ (This is not useful).

Let's use the approximations:
$I_C \approx I_{C, diff}$
$I_E \approx I_{E, inj}$
$I_B \approx I_{B, rec}$

Then $\beta = \frac{I_C}{I_B} \approx \frac{I_{E, inj}}{I_{B, rec}}$.
We found $I_{C, diff} \approx I_{E, inj}$.
And $I_{B, rec} \approx \frac{q A_B n_{p0} e^{V_{BE}/V_T} W}{2 \tau_n}$
And $I_{E, inj} \approx A_E \cdot q D_n \frac{n_{p0} e^{V_{BE}/V_T}}{W}$.

So, $I_{B, rec} = \frac{I_{E, inj} W}{2 \tau_n} \frac{A_E q D_n n_{p0} e^{V_{BE}/V_T}}{W} \frac{1}{q D_n n_{p0} e^{V_{BE}/V_T} A_E / W}$
$I_{B, rec} = I_{E, inj} \frac{W}{2 \tau_n} \frac{D_n}{D_n} \frac{A_B}{A_E} = I_{E, inj} \frac{W}{2 L_n^2} \frac{A_B}{A_E}$ (using $\tau_n = L_n^2/D_n$).

The ratio $I_{E, inj} / I_{B, rec}$ is related to the $\beta$ factor.
$\beta \approx \frac{I_{E, inj}}{I_{B, rec}} = \frac{I_{E, inj}}{I_{E, inj} \frac{W}{2 L_n^2} \frac{A_B}{A_E}} = \frac{2 L_n^2}{W \cdot (A_B/A_E)}$
Since the base is lightly doped and thin, $L_n$ is usually much larger than $W$, and the doping ratio is adjusted to give a high $\beta$.

**Simplified Expressions for Current Components:**

Let $I_0 = q A_C D_n \frac{n_{p0}}{W}$. This is a constant related to the base and emitter properties.
Then, $I_{C, diff} = I_0 e^{V_{BE}/V_T}$.
And $I_{E, inj} = I_0 e^{V_{BE}/V_T} \frac{W}{L_n} \frac{A_E}{A_C} \frac{1}{D_n} (\text{this is getting complicated})$.

**Let's use the standard formulation of the collector current:**

The collector current ($I_C$) is primarily composed of injected electrons that cross the base and reach the collector. This is a diffusion current.

$I_C \approx I_{C, diff} = q A_C D_n \frac{n_{p0}}{W} e^{V_{BE}/V_T}$

This equation neglects recombination in the base and the small hole diffusion current from base to emitter.

**The ideal diode equation for the collector current is:**

$I_C = I_S e^{V_{BE}/V_T}$

where $I_S$ is the reverse saturation current of the collector junction.
Comparing this to our derived $I_{C, diff}$:
$I_S = q A_C D_n \frac{n_{p0}}{W}$

This $I_S$ is the portion of the collector current that flows when $V_{BE} = 0$ (but this is usually associated with the CB junction's reverse saturation current, which is different).

**A more complete expression for the collector current that accounts for recombination:**

The collector current is the emitter injection current minus the base recombination current.
$I_C = I_{E, inj} - I_{B, rec}$ (neglecting leakage currents for now).

We had $I_{E, inj} \approx A_E \cdot q D_n \frac{n_{p0} e^{V_{BE}/V_T}}{W}$
And $I_{B, rec} \approx I_{E, inj} \frac{W^2}{2 D_n \tau_n} \frac{A_B}{A_E}$. (This form accounts for recombination in the bulk base).

Let's use the simplified ideal transistor equations that are more commonly derived:

**Collector Current ($I_C$):**
The collector current is essentially the emitter injection current minus the recombination current in the base.
$I_C = I_{E, inj} - I_{B, rec}$

$I_{E, inj} \approx I_{E0} e^{V_{BE}/V_T}$
where $I_{E0} = q A_E D_n \frac{n_{p0}}{L_n}$ (related to the emission of electrons from the emitter, accounting for diffusion length in the emitter).

$I_{B, rec} \approx \frac{I_{E, inj}}{\beta}$ is incorrect.
The base recombination current is proportional to the number of injected minority carriers in the base.

**A fundamental derivation connects the current components to the output current:**

The total current collected by the collector is the injected electron current from the emitter, minus the recombination of electrons in the base.

$I_C = I_{E, inj} \cdot \frac{1}{1 + (\text{fraction of recombination in base})}$

The fraction of recombination is related to $W^2 / (2 D_n \tau_n)$.

**Final Derivation Form (from common textbooks):**

**Collector Current ($I_C$):**
The collector current is dominated by the diffusion of injected electrons from the emitter to the collector.
$I_C = q A_C D_n \frac{n_{p0}}{W} e^{V_{BE}/V_T} (1 + \frac{V_{CB}}{V_A})$

where:
*   $q$ is the elementary charge.
*   $A_C$ is the collector area.
*   $D_n$ is the diffusion coefficient for electrons.
*   $n_{p0}$ is the equilibrium electron concentration in the P-type base.
*   $W$ is the base width.
*   $V_{BE}$ is the base-emitter voltage.
*   $V_T$ is the thermal voltage.
*   $V_{CB}$ is the collector-base voltage (for Early effect).
*   $V_A$ is the Early voltage.

**Emitter Current ($I_E$):**
The emitter current is the sum of injected electrons and hole diffusion from base to emitter.
$I_E = I_{E, inj} + I_{B, diff}$
$I_E = q A_E \frac{D_n}{L_n} n_{p0} e^{V_{BE}/V_T} + q A_E \frac{D_p}{L_p} p_{n0} e^{V_{BE}/V_T}$ (This is for PN junction, not ideal BJT).

**Simplified Emitter Current Derivation:**
The emitter current is approximately the injected electron current plus a smaller hole current from the base into the emitter.
$I_E \approx q A_E \frac{D_n}{L_n} n_{p0} e^{V_{BE}/V_T} + q A_E \frac{D_p}{L_p} p_{n0} e^{V_{EB}/V_T}$ (this is the emitter-base diode)

In a BJT, the emitter current is primarily the injected electron current:
$I_E \approx I_C + I_B$
$I_E \approx I_{E, inj} \approx q A_E \frac{D_n}{W} n_{p0} e^{V_{BE}/V_T}$ (This assumes nearly all emitted carriers are electrons and diffusion limited by base width).

**Base Current ($I_B$):**
The base current is the sum of recombination in the base and the leakage current of the CB junction.
$I_B = I_{B, rec} + I_{C, sat}$

$I_{B, rec} \approx \frac{I_C}{\beta}$ (This is a definition, not a derivation of $I_{B, rec}$).

The recombination current in the base is approximately proportional to the number of injected carriers and the base doping.
$I_{B, rec} \approx q A_B \frac{W}{2 \tau_n} n_{p0} e^{V_{BE}/V_T}$

**Current Gain ($\alpha$ and $\beta$):**

*   **Common-Base Current Gain ($\alpha$):** The ratio of collector current to emitter current.
    $\alpha = \frac{I_C}{I_E} = \frac{I_{C, diff}}{I_{E, inj}} \approx \frac{q A_C D_n n_{p0}/W}{q A_E D_n n_{p0}/W} = \frac{A_C}{A_E}$ (Assuming $A_C \approx A_E$).
    More precisely, $\alpha \approx \frac{1}{1 + W^2 / (2 D_n \tau_n)} \approx 1 - \frac{W^2}{2 D_n \tau_n} = 1 - \frac{W^2}{2 L_n^2}$.
    This shows $\alpha$ is close to 1.

*   **Common-Emitter Current Gain ($\beta$):** The ratio of collector current to base current.
    $\beta = \frac{I_C}{I_B}$
    Using $I_E = I_C + I_B$:
    $\beta = \frac{I_C}{I_E - I_C} = \frac{\alpha I_E}{I_E - \alpha I_E} = \frac{\alpha}{1 - \alpha}$
    Substituting $\alpha \approx 1 - \frac{W^2}{2 L_n^2}$:
    $\beta \approx \frac{1 - W^2/(2L_n^2)}{1 - (1 - W^2/(2L_n^2))} = \frac{1 - W^2/(2L_n^2)}{W^2/(2L_n^2)} \approx \frac{2 L_n^2}{W^2}$ (for small $W^2/(2L_n^2)$).
    This highlights that a high $\beta$ requires a long diffusion length ($L_n$) and a short base width ($W$).

**Important Points to Remember:**

*   $\alpha$ is slightly less than 1.
*   $\beta$ is typically much larger than 1 (e.g., 50-300).
*   The derivation relies on diffusion currents and the minority carrier transport in the base.
*   Base width modulation affects $\alpha$ and $\beta$ slightly.

**Textbook Reference:**

*   **Pierret, "Semiconductor Device Fundamentals":** Chapter 9, Section 3, "Current Components and Gains," provides rigorous derivations.
*   **Sze, "Physics of Semiconductor Devices":** Chapter 6, Section 2, "Bipolar Transistor Operation," details the derivation of current components and gains.
*   **Shur, "Physics of Semiconductor Devices":** Chapter 11, "Bipolar Transistors," offers a comprehensive look at derivations.

---

## Practice Questions

**Question 1:**
Explain the concept of transistor action in a BJT. What are the roles of the emitter, base, and collector? (CO3, K3)

**Answer:**
Transistor action in a BJT refers to its ability to amplify signals. This is achieved by controlling a large current flowing between the emitter and collector with a small current or voltage applied to the base.
*   **Emitter:** Heavily doped, designed to inject majority carriers (electrons for NPN, holes for PNP) into the base.
*   **Base:** Very thin and lightly doped, acts as a control terminal. It allows most of the injected carriers to pass through to the collector while a small fraction recombines, forming the base current.
*   **Collector:** Moderately doped and wider, designed to collect the majority of carriers that have diffused through the base.

**Question 2:**
Describe the phenomenon of base width modulation (Early Effect) in a BJT. How does it affect the output characteristics? (CO3, CO4, K3)

**Answer:**
Base width modulation, or the Early effect, occurs because the collector-base junction is reverse-biased in active mode. An increase in the collector-base voltage ($V_{CB}$) widens the depletion region of the CB junction, effectively reducing the physical width of the base. This reduction in base width leads to:
1.  Less recombination of injected carriers in the base, as the diffusion path is shorter.
2.  Increased collection efficiency of carriers at the collector.
As a result, the collector current ($I_C$) shows a slight increase with increasing $V_{CE}$ (for a constant $V_{BE}$), causing the output characteristic curves to have a non-zero slope and to intersect at the Early voltage ($V_A$) when extrapolated back to the $V_{CE}$ axis.

**Question 3:**
Identify the major current components in an NPN BJT operating in the active region. Briefly explain the origin of each component. (CO3, K3)

**Answer:**
The major current components in an NPN BJT in the active region are:
1.  **Emitter Injection Current ($I_{E, inj}$):** Electrons injected from the emitter into the base due to forward bias of the EB junction. This is a diffusion current.
2.  **Collector Diffusion Current ($I_{C, diff}$):** Electrons that diffuse through the base and are swept into the collector by the reverse-biased CB junction. This is the primary component of $I_C$.
3.  **Base Recombination Current ($I_{B, rec}$):** Electrons injected into the base that recombine with majority holes in the base. This current flows into the base terminal.
4.  **Collector Reverse Saturation Current ($I_{C, sat}$):** A small leakage current across the reverse-biased CB junction due to thermally generated carriers. This flows from collector to base.
5.  **Base Diffusion Current ($I_{B, diff}$):** Holes diffusing from the base into the emitter. Usually smaller than $I_{E, inj}$.

**Question 4:**
Derive an expression for the collector diffusion current ($I_{C, diff}$) in an NPN BJT. State all assumptions made. (CO3, K3)

**Answer:**
**Assumptions:**
*   NPN transistor in the active region.
*   EB junction forward-biased, CB junction reverse-biased.
*   Base width ($W$) is very small ($W \ll L_n$).
*   Linear electron concentration profile in the base.
*   Negligible recombination in depletion regions.

**Derivation:**
The electron concentration at the emitter edge of the base ($x=0$) is $n_n(0) \approx n_{p0} e^{V_{BE}/V_T}$.
The electron concentration at the collector edge of the base ($x=W$) is approximately zero ($n_n(W) \approx 0$).

Assuming a linear concentration profile: $n_n(x) = n_n(0) - \frac{n_n(0) - n_n(W)}{W} x = n_{p0} e^{V_{BE}/V_T} (1 - \frac{x}{W})$.

The electron diffusion current density is $J_n(x) = q D_n \frac{dn_n}{dx}$.
$\frac{dn_n}{dx} = - \frac{n_{p0} e^{V_{BE}/V_T}}{W}$.

So, $J_n(x) = q D_n (-\frac{n_{p0} e^{V_{BE}/V_T}}{W})$. The magnitude of the electron current density is:
$|J_n| = q D_n \frac{n_{p0} e^{V_{BE}/V_T}}{W}$.

The collector diffusion current is this current density multiplied by the collector area ($A_C$):
$I_{C, diff} = A_C \cdot q D_n \frac{n_{p0}}{W} e^{V_{BE}/V_T}$.

To include the Early effect, we modify the base width effectively:
$I_{C, diff} = A_C \cdot q D_n \frac{n_{p0}}{W_{eff}} e^{V_{BE}/V_T}$
where $W_{eff}$ is the effective base width, which decreases with increasing $V_{CB}$.
This leads to the equation:
$I_C = I_S e^{V_{BE}/V_T} (1 + \frac{V_{CE}}{V_A})$
where $I_S = q A_C D_n \frac{n_{p0}}{W}$ is the collector saturation current for $V_{CE}=0$.

**Question 5:**
If a BJT has $\alpha = 0.98$, calculate its $\beta$. (CO3, K3)

**Answer:**
The relationship between $\alpha$ and $\beta$ is given by:
$\beta = \frac{\alpha}{1 - \alpha}$

Given $\alpha = 0.98$:
$\beta = \frac{0.98}{1 - 0.98} = \frac{0.98}{0.02} = 49$.

---

**Important Points to Remember:**

*   **Transistor Action:** Controlled current flow through two PN junctions.
*   **Base Properties:** Thin and lightly doped for efficient carrier transfer.
*   **Base Width Modulation (Early Effect):** $V_{CB}$ affects base width, leading to a slight increase in $I_C$ with $V_{CE}$.
*   **Current Components:** Dominated by diffusion currents; recombination in the base is the main contributor to base current.
*   **Gains:** $\alpha$ is close to 1, $\beta$ is much larger than 1.
*   **Design for High $\beta$:** Long minority carrier lifetime ($L_n$) and narrow base width ($W$) are crucial.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
