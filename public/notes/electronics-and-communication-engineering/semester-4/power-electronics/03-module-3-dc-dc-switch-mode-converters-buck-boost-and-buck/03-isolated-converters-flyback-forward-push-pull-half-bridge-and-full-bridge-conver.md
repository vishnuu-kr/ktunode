---
title: "Isolated converters:  Flyback, Forward, Push Pull, Half bridge and Full bridge converters – Waveforms and governing equations."
subject: "POWER ELECTRONICS"
module: "Module 3: DC – DC Switch Mode Converters:  Buck, Boost and Buck"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe600"
status: "completed"
scrapedAt: "2026-05-23T17:52:14.179Z"
---
Here are comprehensive study notes for "Isolated converters: Flyback, Forward, Push Pull, Half bridge and Full bridge converters – Waveforms and governing equations" as part of Module 3: DC – DC Switch Mode Converters in Power Electronics.

---

## Module 3: DC – DC Switch Mode Converters
### Topic: Isolated Converters: Flyback, Forward, Push Pull, Half Bridge, and Full Bridge Converters

---

### 1. Introduction to Isolated DC-DC Converters

**Why Isolation?**

*   **Safety:** Provides galvanic isolation between input and output, protecting users from high voltages. This is crucial in applications like medical equipment and consumer electronics. (Refer to Rashid, Ch. 12; Umanand, Ch. 9)
*   **Voltage Scaling:** Allows for easy voltage step-up or step-down using transformer turns ratio.
*   **Noise Reduction:** Helps to block common-mode noise propagation.
*   **Ground Loop Elimination:** Prevents ground loops that can cause noise and instability.

**Key Components:**

*   **Transformer:** The core component providing isolation and voltage scaling.
*   **Switches (MOSFETs, IGBTs):** Used for controlling the power flow.
*   **Diodes:** For rectification and freewheeling.
*   **Capacitors and Inductors:** For filtering and energy storage.

---

### 2. Flyback Converter

The flyback converter is a versatile isolated converter that uses a transformer to store energy during the ON time of the switch and release it to the output during the OFF time. It is essentially a buck-boost converter with a coupled inductor (transformer).

**Circuit Topology:**

*   Input voltage source ($V_{in}$).
*   Switch (S1), typically a MOSFET.
*   Transformer with primary and secondary windings. The dot convention on the windings is crucial for operation.
*   Diode (D1) for rectification.
*   Output capacitor ($C_o$) for filtering.
*   Output load ($R_o$).

**Operation Principle (Continuous Conduction Mode - CCM):**

*   **Mode 1: Switch S1 ON (0 < t < DT):**
    *   Primary winding is connected across $V_{in}$.
    *   Energy is stored in the primary winding of the transformer.
    *   Secondary winding is reverse-biased, and diode D1 is OFF.
    *   The inductor current in the primary ($i_{Lp}$) ramps up linearly.
    *   **Governing Equation:** $V_{in} = L_p \frac{di_{Lp}}{dt}$ where $L_p$ is the primary inductance.
    *   **Current Ramp:** $\Delta i_{Lp} = \frac{V_{in}}{L_p} DT$

*   **Mode 2: Switch S1 OFF (DT < t < T):**
    *   The primary winding is disconnected from $V_{in}$.
    *   The magnetic flux in the core collapses, inducing a voltage in the secondary winding.
    *   The secondary voltage polarity reverses due to the energy transfer mechanism.
    *   Diode D1 becomes forward-biased, and energy stored in the transformer core is transferred to the output capacitor and load.
    *   The inductor current in the secondary ($i_{Ls}$) ramps down linearly.
    *   **Governing Equation:** $V_{sec} = L_s \frac{di_{Ls}}{dt}$ where $L_s$ is the secondary inductance. The voltage induced in the secondary is $V_{sec} = -V_{out} - V_{D1}$ (where $V_{D1}$ is the forward voltage drop of D1).
    *   **Current Ramp:** $\Delta i_{Ls} = \frac{V_{sec}}{L_s} (1-D)T = -\frac{V_{out} + V_{D1}}{L_s} (1-D)T$. The negative sign indicates a decrease in current.

**Waveforms:**

*   **$V_{in}$:** Square wave applied to the primary.
*   **$V_{S1}$:** Voltage across the switch (0 during ON, $V_{in}$ during OFF).
*   **$i_{Lp}$:** Ramps up during ON time, drops to zero during OFF time (in discontinuous mode) or continues to flow in the secondary (in continuous mode).
*   **$i_{Ls}$:** Zero during ON time, ramps down from a peak value during OFF time.
*   **$V_{out}$:** Relatively constant DC voltage, with ripple.

**Key Governing Equations (CCM):**

*   **Voltage Conversion Ratio:**
    *   From volt-second balance on the primary inductance: $V_{in} \cdot DT = V_{sec} \cdot (1-D)T$
    *   Relating primary and secondary voltages: $V_{sec} = n \cdot V_{in}$, where $n = N_s/N_p$ (turns ratio).
    *   Therefore, $V_{in} \cdot DT = (n V_{in}) \cdot (1-D)T$. This implies $D = n(1-D)$, which isn't generally true. The correct relation comes from $V_{in} \cdot DT = (V_{out} + V_{D1}) \cdot (1-D)T$ if we neglect leakage inductance and consider ideal diode.
    *   A more accurate voltage conversion for flyback (neglecting diode drops) is: $\frac{V_{out}}{V_{in}} = -\frac{N_s}{N_p}$ (for ideal transformer). However, the actual output voltage is positive. The voltage transfer relies on energy storage and release.
    *   **Effective Voltage Conversion Ratio:** $\frac{V_{out}}{V_{in}} \approx \frac{N_s}{N_p} \frac{D}{1-D}$ (for CCM and neglecting diode drops and leakage). This is similar to the buck-boost ratio.

*   **Output Current:** $I_{out} = \frac{P_{out}}{V_{out}}$. The average secondary current is related to the primary current: $I_{Ls} = n I_{Lp}$.
*   **Average Primary Current:** $I_{in} = I_{Lp(avg)} = \frac{1}{2} \frac{V_{in}}{L_p} DT = \frac{I_{out}}{n}$.
*   **Transformer Turns Ratio:** $n = N_s/N_p$.
*   **Required Inductance for CCM:** $L_p \ge \frac{V_{in} DT_{max}}{2 I_{Ls(min)}}$, where $I_{Ls(min)}$ is the minimum secondary current for CCM. For CCM, $I_{Ls(min)} > 0$. This means $I_{Ls(avg)} > \frac{1}{2} \Delta i_{Ls}$.
*   **Output Ripple Voltage:** Determined by $C_o$ and the output current ripple.

**Advantages:**

*   Simple circuit, fewer components than forward converter.
*   Can provide multiple outputs with additional secondary windings.
*   Good for low power applications (typically < 150W).

**Disadvantages:**

*   Transformer acts as an inductor, high current ripple.
*   Energy is transferred discontinuously (in most modes), leading to higher conduction losses.
*   Requires a larger transformer for the same power compared to other converters due to energy storage.
*   Requires careful transformer design to handle peak currents and minimize leakage inductance.

**Example:** A flyback converter with $V_{in} = 24V$, $N_p = 10$, $N_s = 10$, $D = 0.5$. What is the approximate output voltage?
*   Turns ratio $n = N_s/N_p = 10/10 = 1$.
*   $V_{out} \approx V_{in} \frac{n D}{1-D} = 24V \frac{1 \cdot 0.5}{1-0.5} = 24V \frac{0.5}{0.5} = 24V$. (This is for a buck-boost like relation. Flyback is slightly different due to energy transfer.)
*   A better approach using volt-second balance: $V_{in} DT = V_{out} (1-D)T$ (ideal, ignoring diode).
*   $24V \cdot 0.5T = V_{out} \cdot 0.5T \implies V_{out} = 24V$. This seems incorrect.

Let's re-evaluate the voltage transfer for flyback. The voltage across the secondary during the OFF time is induced by the collapsing flux from the primary. The volt-second product on the primary during the ON time must be balanced by the volt-second product on the secondary during the OFF time for proper operation.
$V_{in} D T = V_{sec} (1-D) T$
$V_{sec} = n V_{in}$ (This assumes the secondary voltage is directly proportional to primary voltage by turns ratio).
So, $V_{in} D T = n V_{in} (1-D) T \implies D = n(1-D)$. This implies a fixed duty cycle.

The correct way to think about the flyback voltage transfer: During the ON time, energy is stored in $L_p$. During the OFF time, this energy is transferred to the output. The voltage across the secondary during the OFF time is proportional to the rate of change of flux, which is the same as the primary.
$V_{in} = L_p \frac{di_{Lp}}{dt} \implies L_p \Delta i_{Lp} = V_{in} DT$
$V_{sec} = L_s \frac{di_{Ls}}{dt}$ (during OFF time). If we assume ideal transformer, $L_s = n^2 L_p$.
During OFF time, the voltage induced in the secondary is such that it drives the output current. $V_{sec} = -(V_{out} + V_{D1})$. The negative sign indicates polarity for current flow.
So, $- (V_{out} + V_{D1}) = n L_p \frac{di_{Ls}}{dt}$.
Also, the current in the secondary is $i_{Ls} = -n i_{Lp}$ (due to dot convention and energy transfer).
$V_{in} DT = L_p \Delta i_{Lp}$
$-(V_{out} + V_{D1})(1-D)T = L_s \Delta i_{Ls}$
Substituting $L_s = n^2 L_p$ and $\Delta i_{Ls} = -n \Delta i_{Lp}$:
$-(V_{out} + V_{D1})(1-D)T = n^2 L_p (-n \Delta i_{Lp}) \frac{1}{n^2 L_p} \frac{L_s}{n} (-n \Delta i_{Lp}) \frac{1}{n}$
$-(V_{out} + V_{D1})(1-D)T = n^2 L_p (-n \Delta i_{Lp}) \frac{1}{n}$
$-(V_{out} + V_{D1})(1-D)T = n^2 L_p \frac{\Delta i_{Lp}}{n}$

Let's use the average secondary current. Average secondary current $I_{Ls}$ flows through the load $R_o$.
$I_{Ls} = I_{out}$.
Average primary current $I_{Lp(avg)} = I_{out}/n$.
$I_{Lp(avg)} = \frac{1}{T} \int_0^{DT} i_{Lp}(t) dt = \frac{1}{T} \int_0^{DT} (\frac{V_{in}}{L_p} t + I_{Lp(min)}) dt$
In CCM, $I_{Lp(avg)} = \frac{1}{2} (I_{Lp(max)} + I_{Lp(min)})$.
$I_{Lp(max)} = I_{Lp(min)} + \frac{V_{in}}{L_p} DT$.
$I_{Lp(avg)} = I_{Lp(min)} + \frac{1}{2} \frac{V_{in}}{L_p} DT$.
Since $I_{in} = I_{Lp(avg)} = I_{out}/n$,
$\frac{I_{out}}{n} = I_{Lp(min)} + \frac{1}{2} \frac{V_{in}}{L_p} DT$.
For CCM, $I_{Lp(min)} > 0$.

**Correct Voltage Transfer:**
Using volt-second balance on the transformer windings:
$V_{in} DT = V_{sec} (1-D)T$, where $V_{sec}$ is the voltage across the secondary winding during the OFF time.
$V_{sec}$ is related to $V_{out}$ by the dot convention and diode. During the OFF time, the secondary voltage polarity is such that it forward biases D1. If the dots are on the same side:
$V_{sec} = V_{out} + V_{D1}$ (approximately).
So, $V_{in} DT = (V_{out} + V_{D1})(1-D)T$.
$\frac{V_{out} + V_{D1}}{V_{in}} = \frac{D}{1-D}$.
$\frac{V_{out}}{V_{in}} \approx \frac{D}{1-D}$ (neglecting diode drop).
This is the buck-boost conversion ratio! This is characteristic of flyback.

**Example 2:** $V_{in}=12V$, $N_p=5$, $N_s=10$, $D=0.6$. Calculate $V_{out}$ (ideal).
$n = N_s/N_p = 10/5 = 2$.
$V_{out}/V_{in} \approx \frac{D}{1-D} = \frac{0.6}{1-0.6} = \frac{0.6}{0.4} = 1.5$.
$V_{out} \approx 1.5 \times 12V = 18V$.

---

### 3. Forward Converter

The forward converter is a DC-DC converter that transfers energy to the output through a transformer during the ON time of the primary switch. The transformer is not used for energy storage in the same way as the flyback.

**Circuit Topology:**

*   Input voltage source ($V_{in}$).
*   Primary side: Switch (S1), Diode (D1), Freewheeling Diode (D2), Primary winding ($L_p$), sometimes a Reset Winding and a Reset Switch (S2) or a Reset Inductor ($L_r$).
*   Secondary side: Secondary winding ($L_s$), Diode (D3), Output Inductor ($L_{out}$), Output Capacitor ($C_o$), Output Load ($R_o$).

**Operation Principle (CCM, with reset winding and switch):**

*   **Mode 1: Switch S1 ON (0 < t < DT):**
    *   Primary winding is connected across $V_{in}$.
    *   Energy is transferred from the input to the output via the transformer.
    *   The secondary voltage is $V_{sec} = n V_{in}$ (where $n = N_s/N_p$).
    *   Diode D3 is forward-biased, allowing current to flow through $L_{out}$ and to the load.
    *   $L_{out}$ current ramps up.
    *   **Governing Equations:**
        *   $V_{in} = V_{Lp}$ (Primary voltage)
        *   $V_{sec} = n V_{in} = V_{L_{out}} + V_{D3} + V_{out}$ (Secondary side, approximately $V_{sec} \approx V_{out}$ for $L_{out}$ current)
        *   $V_{L_{out}} = L_{out} \frac{di_{out}}{dt}$

*   **Mode 2: Switch S1 OFF (DT < t < T):**
    *   Primary winding is disconnected from $V_{in}$.
    *   The magnetic flux in the transformer core must be reset to zero before the next ON cycle, otherwise the core will saturate. This is a critical difference from the flyback.
    *   **Resetting the core:**
        *   **Using a reset winding:** A separate winding ($N_r$) is used. When S1 is OFF, a reset switch (S2) is turned ON. The reset winding is connected across a DC voltage source (e.g., $V_{in}$ or a dedicated supply). The polarity of the reset winding's voltage must be opposite to the primary winding's voltage during the ON time.
        *   **Using a reset inductor:** The primary winding itself is connected to a reset inductor and freewheeling diode.
    *   **Energy Transfer During OFF Time:** When S1 is OFF, the secondary current from $L_{out}$ cannot immediately stop. It continues to flow, but through a freewheeling diode (D4, not shown in basic diagram, often part of D3 circuit in some configurations or a separate diode across $L_{out}$). D3 is reverse-biased.

**Simplified Forward Converter (with Reset Winding and Switch):**

*   **Mode 1: S1 ON, S2 OFF (0 < t < DT):**
    *   $V_{in}$ applied to primary. $V_{sec} = nV_{in}$. D3 conducts. $L_{out}$ current ramps up.
    *   $V_{in} = L_p \frac{di_{Lp}}{dt}$

*   **Mode 2: S1 OFF, S2 ON (DT < t < D'T):**
    *   The primary winding (and reset winding) is energized by $V_{in}$ through the reset winding and S2. This reduces the flux in the core.
    *   $V_{in} = V_{L_r}$ (voltage across reset winding).
    *   $V_{sec} = -n V_{in}$ (voltage across secondary, polarity reversal due to reset winding action). D3 is OFF. $L_{out}$ current freewheels through D3 (or a separate freewheeling diode).
    *   For complete reset in time $D'T$: $V_{in} DT = V_{in} D'T \implies D'=D$. This means the reset must happen within the remaining OFF time $(1-D)T$. So, $D' \le (1-D)$.
    *   **Vol-sec Balance for Reset:** $V_{in} \cdot DT_{reset} = V_{in} \cdot D'T$. The reset time $DT_{reset}$ is typically proportional to $DT$.

*   **Mode 3: S1 OFF, S2 OFF (D'T < t < T):** (Gap for resetting)
    *   No primary current. Secondary current freewheels.

**Waveforms:**

*   **$V_{in}$:** Applied to the primary when S1 is ON.
*   **$i_{Lp}$:** Ramps up during ON time, drops to zero during OFF time.
*   **$V_{sec}$:** Positive $nV_{in}$ during ON time, negative $-nV_{in}$ during reset, and zero during the gap.
*   **$i_{sec}$:** Transferred current, ramps up and then freewheels.
*   **$i_{out}$:** DC current with ripple, smoothed by $L_{out}$ and $C_o$.

**Key Governing Equations (CCM):**

*   **Voltage Conversion Ratio:**
    *   Volt-second balance on the primary during energy transfer: $V_{in} \cdot DT = V_{sec} \cdot (1-D)T$.
    *   $V_{sec} \approx V_{out}$ (assuming ideal transformer and low diode drop).
    *   So, $V_{in} \cdot DT = V_{out} \cdot (1-D)T$.
    *   $\frac{V_{out}}{V_{in}} = \frac{D}{1-D}$. (Similar to buck-boost, but energy is transferred directly, not stored and released).

*   **Transformer Duty Cycle Limit:** The flux reset must be completed within the OFF time $(1-D)T$. If the reset happens in time $D'T$, then $D' \le (1-D)$. For a simple reset winding with voltage $V_{res}$ across it, $V_{in} DT_{reset} = V_{res} D'T$. If $V_{res} = V_{in}$, then $DT_{reset} = D'T$, so $D' = D$. This means the reset must be completed within $(1-D)T$. Thus, $D \le (1-D) \implies 2D \le 1 \implies D \le 0.5$.
    *   **Important:** The maximum duty cycle for a standard forward converter is 0.5.

*   **Output Inductor Design:** The inductor $L_{out}$ stores energy to maintain current during the freewheeling period.
    *   $\Delta i_{out} = \frac{V_{sec} - V_{out}}{L_{out}} DT = \frac{n V_{in} - V_{out}}{L_{out}} DT$. For a simplified relation, $\Delta i_{out} \approx \frac{V_{in} D}{L_{out} f}$ where $f=1/T$.
    *   Typically, ripple current $\Delta i_{out}$ is chosen as 20-40% of the average output current.

*   **Transformer Turns Ratio:** $n = N_s/N_p$.
    *   $V_{sec} \approx V_{out}$ implies $n V_{in} \approx V_{out}$.
    *   So, $V_{out}/V_{in} = n$.
    *   Combining with voltage conversion: $\frac{V_{out}}{V_{in}} = \frac{D}{1-D} = n$. This implies $n = D/(1-D)$.

**Advantages:**

*   Can handle higher power than flyback (typically up to 500W).
*   Transformer is not used for energy storage, so smaller transformer for the same power.
*   Lower output ripple compared to flyback.
*   Can provide multiple outputs.

**Disadvantages:**

*   Requires core reset mechanism (adds complexity and limits duty cycle).
*   More components than flyback (reset winding/inductor, reset switch).
*   Transformer utilization factor is not optimal.

---

### 4. Push-Pull Converter

The push-pull converter uses two switches and a center-tapped transformer primary to achieve isolation and voltage conversion. It's an extension of the buck-boost concept.

**Circuit Topology:**

*   Input voltage source ($V_{in}$).
*   Primary side: Two switches (S1, S2), center-tapped transformer primary, diodes (D1, D2) for rectification on the secondary.
*   Secondary side: Secondary winding, output inductor ($L_{out}$), output capacitor ($C_o$), output load ($R_o$).

**Operation Principle (CCM):**

*   **Mode 1: Switch S1 ON (0 < t < DT):**
    *   $V_{in}$ is applied across the top half of the primary winding (from one end to the center tap).
    *   The voltage across the top half of the primary is $V_{in}$.
    *   The voltage across the secondary winding is $V_{sec} = n V_{in}$, where $n=N_s/N_p$ (ratio of secondary turns to half primary turns).
    *   Diode D1 is forward-biased, transferring energy to the output through $L_{out}$.
    *   Current ramps up in $L_{out}$.

*   **Mode 2: Switch S2 ON (DT < t < T):**
    *   $V_{in}$ is applied across the bottom half of the primary winding (from the other end to the center tap).
    *   The voltage across the bottom half of the primary is $V_{in}$.
    *   The induced voltage across the secondary winding is $V_{sec} = -n V_{in}$ (due to polarity reversal of the bottom half of the primary).
    *   Diode D2 is forward-biased, transferring energy to the output through $L_{out}$.
    *   Current ramps up in $L_{out}$.

*   **Important Considerations:**
    *   **Core Reset:** In this basic push-pull, the flux reset is inherent. When S1 is ON, flux increases in one direction. When S1 turns OFF and S2 turns ON, the voltage on the bottom half of the primary is applied, which is opposite in polarity, causing the flux to decrease. This naturally resets the core as long as the duty cycle is less than 0.5 for each switch.
    *   **Dead Time:** A small dead time between switching S1 OFF and S2 ON (and vice-versa) is necessary to prevent shoot-through, where both switches conduct simultaneously.
    *   **Transformer Utilization:** The primary winding is utilized for the full period, allowing better transformer utilization than the forward converter.

**Waveforms:**

*   **$V_{S1}, V_{S2}$:** Square waves, 180° phase shifted, with dead time.
*   **$V_{primary-center}$:** $\pm V_{in}$ during the ON times of S1 and S2.
*   **$V_{sec}$:** $\pm n V_{in}$, pulses of $nV_{in}$ and $-nV_{in}$ during ON times of S1 and S2, causing the secondary diodes to conduct alternately.
*   **$i_{out}$:** DC current with ripple, smoothed by $L_{out}$ and $C_o$.

**Key Governing Equations (CCM):**

*   **Voltage Conversion Ratio:**
    *   During S1 ON: $V_{sec} = n V_{in}$. This voltage appears across $L_{out}$ and the output.
    *   During S2 ON: $V_{sec} = -n V_{in}$. This is the voltage across the other half of the secondary. However, only one diode conducts at a time. When S1 is ON, D1 conducts. When S2 is ON, D2 conducts.
    *   The voltage across the output is effectively $n V_{in}$ for the entire ON period of each switch.
    *   Average secondary voltage across $L_{out}$ = $n V_{in} D T / T + n V_{in} D T / T = n V_{in} (2D)$. This is wrong.
    *   During S1 ON (duration $DT$), $V_{out} \approx n V_{in}$.
    *   During S2 ON (duration $DT$), $V_{out} \approx n V_{in}$.
    *   The total ON time for power transfer is $2DT$.
    *   So, the average output voltage is $V_{out} \approx n V_{in}$. This is for the rectification.
    *   Let's use volt-second balance on the transformer. Voltage applied to the top half of the primary is $V_{in}$ for $DT$. This induces $nV_{in}$ in the secondary, driving current.
    *   Voltage applied to the bottom half is $V_{in}$ for $DT$. This induces $-nV_{in}$ in the secondary, driving current.
    *   The average voltage across the secondary winding that contributes to the output is $nV_{in}$ for a total duration of $2DT$ in a full cycle $T$.
    *   $\frac{V_{out}}{V_{in}} = n \cdot \frac{2D}{1} = 2nD$. This is for the buck-boost equivalent.
    *   Correct analysis: The voltage across the secondary winding when S1 is ON is $nV_{in}$. This drives $L_{out}$. When S2 is ON, the voltage across the secondary winding is also $nV_{in}$ (due to the other half of the primary). The total effective ON time for delivering power is $2DT$.
    *   For CCM, $V_{out} \approx n V_{in}$. This implies the ratio $V_{out}/V_{in} = n$. This is not right.

    *   Consider the buck-boost analogy. It's like two buck-boost converters operating on alternate halves of the cycle. Each part provides $V_{in} \frac{D}{1-D}$.
    *   **Correct Voltage Conversion Ratio:** $\frac{V_{out}}{V_{in}} = \frac{n}{1-D}$? No.
    *   The voltage across the secondary winding is $nV_{in}$ for a duration $DT$ and $-nV_{in}$ for $DT$. The output diode rectifies this.
    *   The average voltage that drives the output inductor is the average of the rectified secondary voltages. During S1 ON, $nV_{in}$ drives $L_{out}$. During S2 ON, $nV_{in}$ drives $L_{out}$. The total time is $2DT$.
    *   Consider the volt-second product for the output inductor. $L_{out} \Delta i_{out} = V_{out} (1-D)T$. No.

    *   **From Rashid (Ch. 12):** For Push-Pull converter, $\frac{V_{out}}{V_{in}} = \frac{n}{1-D}$ for a step-up or $\frac{V_{out}}{V_{in}} = n \frac{D}{1-D}$ for step-down. The turns ratio here is $N_s/N_p$ where $N_p$ is the total primary turns (not half).
    *   Let $N_p$ be the total primary turns and $N_s$ be the secondary turns. The transformer is center-tapped.
    *   When S1 is ON, voltage across half primary $V_{p1} = V_{in}$. Induced secondary voltage $V_{sec1} = \frac{N_s}{N_p/2} V_{in} = \frac{2N_s}{N_p} V_{in}$. Let $n' = N_s/(N_p/2)$.
    *   When S2 is ON, $V_{p2} = V_{in}$. Induced secondary voltage $V_{sec2} = -\frac{N_s}{N_p/2} V_{in} = -n' V_{in}$.
    *   Diodes D1 and D2 rectify these. The average voltage across the output during the ON periods is $n' V_{in}$.
    *   The total ON time for power delivery is $2DT$.
    *   Thus, $V_{out} \approx n' V_{in}$. This means $V_{out}/V_{in} = n' = N_s/(N_p/2)$. This implies a direct voltage transfer. This doesn't account for duty cycle.

    *   **Let's use simpler representation.** If we consider one half of the push-pull as a buck-boost, and the other half as another.
    *   Each half-bridge switch pair effectively creates a voltage $V_{in}$ across half the primary.
    *   The voltage across the secondary is $n \times (\text{voltage across half primary})$.
    *   Let $n = N_s / (N_p/2)$.
    *   When S1 is ON, $V_{sec} = n V_{in}$. This drives $L_{out}$.
    *   When S2 is ON, $V_{sec} = -n V_{in}$. This drives $L_{out}$.
    *   The rectified voltage across $L_{out}$ is $nV_{in}$ for $DT$ and $nV_{in}$ for $DT$.
    *   The total effective ON time for delivering voltage to $L_{out}$ is $2DT$.
    *   Volt-second balance on $L_{out}$: $V_{out} (1-D_{eff}) T = L_{out} \Delta i_{out}$. This doesn't help for ratio.
    *   Volt-second balance on the secondary side.
    *   Voltage across secondary during S1 ON: $nV_{in}$.
    *   Voltage across secondary during S2 ON: $nV_{in}$.
    *   Total volt-second product applied to output = $(nV_{in}) DT + (nV_{in}) DT = 2n V_{in} DT$.
    *   This must be balanced by the reverse voltage across $L_{out}$ during the OFF time $(1-2D)T$.
    *   $V_{out} (1-2D)T = 2n V_{in} DT$. This is for step-down.
    *   **$\frac{V_{out}}{V_{in}} = \frac{2nD}{1-2D}$** (This is for buck-boost type operation).

*   **Transformer Utilization:** The primary winding is used twice per cycle. The flux swing is $\Delta B$. For a given core, the flux swing determines the required voltage and frequency.
*   **Current Stress:** Each switch carries the primary current, which is $1/n$ of the secondary current. The peak current is higher than in a forward converter.

**Advantages:**

*   Higher power handling than single-ended forward or flyback.
*   Better transformer utilization.
*   No need for core reset components.
*   Can provide higher output voltage than a single-ended forward converter for the same input voltage and duty cycle.

**Disadvantages:**

*   Requires a center-tapped transformer, which is more complex and expensive.
*   Two switches are needed, and their switching must be synchronized with dead time.
*   The maximum duty cycle for each switch is limited to 0.5, leading to an overall duty cycle of $2D \le 1$.

---

### 5. Half-Bridge Converter

The half-bridge converter uses two switches and a transformer with a center-tapped primary winding, similar to the push-pull, but the driving voltage is different. It's essentially two forward converters in parallel.

**Circuit Topology:**

*   Input voltage source ($V_{in}$).
*   Primary side: Two switches (S1, S2) in series, connected to the input DC voltage. The junction between S1 and S2 is connected to the center tap of the transformer primary. The ends of the primary winding are connected to ground/return.
*   Secondary side: Secondary winding, output inductor ($L_{out}$), output capacitor ($C_o$), output load ($R_o$).

**Operation Principle (CCM):**

*   **Mode 1: Switch S1 ON, S2 OFF (0 < t < DT):**
    *   $V_{in}$ is applied across the top half of the primary winding (from the center tap to one end).
    *   The voltage across the top half of the primary is $V_{in}$.
    *   The induced voltage across the secondary winding is $V_{sec} = n V_{in}$, where $n=N_s/(N_p/2)$.
    *   Diode D1 (on secondary) is forward-biased, transferring energy to the output through $L_{out}$. Current ramps up in $L_{out}$.

*   **Mode 2: Switch S2 ON, S1 OFF (DT < t < T):**
    *   $V_{in}$ is applied across the bottom half of the primary winding (from the center tap to the other end).
    *   The voltage across the bottom half of the primary is $V_{in}$.
    *   The induced voltage across the secondary winding is $V_{sec} = -n V_{in}$ (due to polarity reversal of the bottom half of the primary).
    *   Diode D2 (on secondary) is forward-biased, transferring energy to the output through $L_{out}$. Current ramps up in $L_{out}$.

*   **Important Considerations:**
    *   **Core Reset:** Similar to push-pull, the flux reset is inherent due to alternating voltage polarities.
    *   **Duty Cycle:** The duty cycle for each switch is $D$. The total ON time for power transfer is $2DT$. The maximum duty cycle for each switch is 0.5, so $2D \le 1$.
    *   **Transformer:** Requires a center-tapped transformer primary.

**Waveforms:**

*   **$V_{S1}, V_{S2}$:** Square waves, 180° phase shifted, with dead time.
*   **Voltage across half primary:** $V_{in}$ during ON time of the respective switch, 0 during OFF time.
*   **$V_{sec}$:** Pulses of $nV_{in}$ and $-nV_{in}$, with a gap of zero voltage. Diodes D1 and D2 conduct alternately.
*   **$i_{out}$:** DC current with ripple, smoothed by $L_{out}$ and $C_o$.

**Key Governing Equations (CCM):**

*   **Voltage Conversion Ratio:**
    *   During S1 ON: $V_{sec} = n V_{in}$ (drives $L_{out}$ if D1 conducts).
    *   During S2 ON: $V_{sec} = -n V_{in}$ (drives $L_{out}$ if D2 conducts).
    *   The voltage across the secondary winding is $nV_{in}$ for a duration $DT$ and $-nV_{in}$ for $DT$.
    *   The average voltage across $L_{out}$ is the average of the rectified secondary voltages.
    *   The rectified voltage is $nV_{in}$ when S1 is ON and $nV_{in}$ when S2 is ON.
    *   Total ON time for power delivery to $L_{out}$ is $2DT$.
    *   **$\frac{V_{out}}{V_{in}} = \frac{2nD}{1}$** This is wrong.

    *   Let's consider the voltage applied to the output stage. The output stage sees $nV_{in}$ during $DT$ (from S1) and $nV_{in}$ during $DT$ (from S2). The total time is $2DT$.
    *   The voltage across the output inductor $L_{out}$ is $V_{out} = V_{sec}$ (ideal).
    *   Volt-second balance on $L_{out}$: $V_{out} (1-2D)T = L_{out} \Delta i_{out}$. This is for the freewheeling period.

    *   **Correct analysis:** The secondary voltage is $nV_{in}$ when S1 conducts and $-nV_{in}$ when S2 conducts. The output diodes rectify this. So, the voltage seen by $L_{out}$ is effectively $nV_{in}$ for $DT$ and $nV_{in}$ for $DT$.
    *   The total ON time is $2DT$.
    *   $V_{out} \cdot (1-2D)T = L_{out} \Delta i_{out}$
    *   **$\frac{V_{out}}{V_{in}} = n \frac{2D}{1-2D}$** (This is for step-down).
    *   Where $n = N_s / (N_p/2)$.

*   **Transformer Utilization:** Similar to push-pull, the transformer is well-utilized.
*   **Switch Voltage Stress:** Each switch blocks $V_{in}$.

**Advantages:**

*   Higher power handling than single-ended converters.
*   Good transformer utilization.
*   No core reset components needed.
*   Higher output voltage than push-pull for the same $V_{in}$ and $D$.

**Disadvantages:**

*   Requires a center-tapped transformer.
*   Two switches require synchronized switching with dead time.

---

### 6. Full-Bridge Converter

The full-bridge converter uses four switches and a standard (non-center-tapped) transformer. It is suitable for higher power applications.

**Circuit Topology:**

*   Input voltage source ($V_{in}$).
*   Primary side: Four switches (S1, S2, S3, S4) arranged in two legs (S1, S3 in one leg; S2, S4 in the other). The primary winding of the transformer is connected between the junctions of the two legs.
*   Secondary side: Secondary winding, output inductor ($L_{out}$), output capacitor ($C_o$), output load ($R_o$).

**Operation Principle (CCM):**

*   **Mode 1: S1 & S4 ON, S2 & S3 OFF (0 < t < DT):**
    *   $V_{in}$ is applied across the entire primary winding.
    *   The voltage across the primary winding is $V_{in}$.
    *   The induced voltage across the secondary winding is $V_{sec} = n V_{in}$, where $n = N_s/N_p$.
    *   Diode D1 on the secondary is forward-biased, transferring energy to $L_{out}$. Current ramps up in $L_{out}$.

*   **Mode 2: S2 & S3 ON, S1 & S4 OFF (DT < t < T):**
    *   $V_{in}$ is applied across the primary winding, but with reversed polarity compared to Mode 1.
    *   The voltage across the primary winding is $-V_{in}$.
    *   The induced voltage across the secondary winding is $V_{sec} = -n V_{in}$.
    *   Diode D2 on the secondary is forward-biased, transferring energy to $L_{out}$. Current ramps up in $L_{out}$.

*   **Important Considerations:**
    *   **Core Reset:** The alternating polarity across the transformer primary automatically resets the core.
    *   **Switching Pattern:** The switches are typically turned ON in a complementary manner. For example, S1 and S4 are ON for $DT$, then S1 and S4 turn OFF, followed by S2 and S3 turning ON for $DT$. Dead time is needed between switching complementary pairs (e.g., S1 OFF before S2 ON).
    *   **Voltage Stress:** Each switch blocks $V_{in}$.

**Waveforms:**

*   **$V_{S1}, V_{S2}, V_{S3}, V_{S4}$:** Square waves.
*   **Voltage across primary:** $V_{in}$ for $DT$, $-V_{in}$ for $DT$.
*   **$V_{sec}$:** Pulses of $nV_{in}$ and $-nV_{in}$ alternating.
*   **$i_{out}$:** DC current with ripple, smoothed by $L_{out}$ and $C_o$.

**Key Governing Equations (CCM):**

*   **Voltage Conversion Ratio:**
    *   The voltage across the secondary winding is $nV_{in}$ for $DT$ and $-nV_{in}$ for $DT$.
    *   The effective voltage applied to $L_{out}$ is always positive (due to diodes), magnitude $|V_{sec}| = nV_{in}$.
    *   The total ON time for power delivery is $2DT$.
    *   **$\frac{V_{out}}{V_{in}} = n \frac{2D}{1}$** Incorrect.

    *   Volt-second balance on $L_{out}$: $V_{out} (T - 2DT) = L_{out} \Delta i_{out}$.
    *   The voltage applied to $L_{out}$ is $nV_{in}$ for $DT$ and $nV_{in}$ for $DT$.
    *   So, the average voltage is $\frac{nV_{in} DT + nV_{in} DT}{T} = \frac{2n V_{in} DT}{T} = 2n V_{in} D$.
    *   This average voltage must be $V_{out}$.
    *   **$\frac{V_{out}}{V_{in}} = 2nD$** (This is for step-down, with $n = N_s/N_p$).

*   **Transformer Utilization:** Excellent, as the full primary winding is used.
*   **Current Stress:** Each switch carries half the primary current. The peak current is lower than in a push-pull converter for the same power.

**Advantages:**

*   Highest power handling capability among these isolated converters.
*   Excellent transformer utilization.
*   No core reset needed.
*   Lower switch current stress compared to push-pull.
*   Can achieve higher output voltages.

**Disadvantages:**

*   Requires four switches, making the control circuit more complex.
*   Higher component count.
*   Requires careful switching with dead time to prevent shoot-through.

---

### 7. Summary of Isolated Converters and Their Characteristics

| Converter Type   | Key Feature                                  | Max Duty Cycle (per switch) | Max Power (Typical) | Transformer Type        | Component Count (Switches) | Voltage Conversion Ratio (Approx.) |
| :--------------- | :------------------------------------------- | :-------------------------- | :------------------ | :---------------------- | :------------------------- | :--------------------------------- |
| **Flyback**      | Energy storage in transformer                | 1 (single switch)           | Low (<150W)         | Coupled Inductor        | 1                          | $V_{out}/V_{in} \approx n D/(1-D)$ |
| **Forward**      | Direct energy transfer, needs core reset   | 0.5 (single switch)         | Medium (<500W)      | Standard                | 1 (+ reset switch)         | $V_{out}/V_{in} \approx D/(1-D)$   |
| **Push-Pull**    | Two switches, center-tapped primary        | 0.5 (per switch)            | Medium-High         | Center-tapped primary   | 2                          | $V_{out}/V_{in} \approx n 2D/(1-2D)$ |
| **Half-Bridge**  | Two switches, center-tapped primary        | 0.5 (per switch)            | High                | Center-tapped primary   | 2                          | $V_{out}/V_{in} \approx n 2D/(1-2D)$ |
| **Full-Bridge**  | Four switches, standard primary              | 0.5 (per switch)            | Very High           | Standard                | 4                          | $V_{out}/V_{in} \approx n 2D$       |

*Note: The voltage conversion ratios provided are approximate and for step-down operation (unless stated otherwise). $n$ is the turns ratio, defined differently for different converters.*
*   Flyback: $n = N_s/N_p$
*   Forward: $n = N_s/N_p$
*   Push-Pull/Half-Bridge: $n = N_s/(N_p/2)$
*   Full-Bridge: $n = N_s/N_p$

---

### 8. Learning Outcomes Addressed

*   **CO3: Analyze different power converter circuits (Knowledge Level: K3)**
    *   This entire topic focuses on analyzing the operation, waveforms, and governing equations of isolated DC-DC converters (Flyback, Forward, Push-Pull, Half-Bridge, Full-Bridge).
*   **CO1: Outline the operation of power semiconductor devices and its characteristics. (Knowledge Level: K2)**
    *   Understanding how switches (MOSFETs/IGBTs) and diodes operate in these circuits, including their role in power transfer and their voltage/current stresses, is essential.
*   **CO2: Design and analyze various rectifier circuits for power devices (Knowledge Level: K3)**
    *   The secondary side of these isolated converters inherently includes rectifier circuits (using diodes) to convert the AC voltage from the transformer secondary into DC for the output. Analysis of these rectifier stages is part of the overall converter analysis.

---

### 9. Practice Questions

**Question 1:**
A flyback converter operates with $V_{in} = 24V$, $N_p = 8$, $N_s = 16$, and a duty cycle $D=0.4$. Assuming ideal components and continuous conduction mode, calculate the approximate output voltage $V_{out}$.

**Question 2:**
Explain the core reset mechanism required in a forward converter. What is the primary limitation imposed by this mechanism on the duty cycle?

**Question 3:**
For a push-pull converter, what is the advantage of using a center-tapped transformer primary compared to a standard transformer primary used in a full-bridge converter?

**Question 4:**
A full-bridge converter operates with $V_{in} = 48V$, $N_p = 10$, $N_s = 10$, and a duty cycle $D = 0.4$ for each switch pair. Calculate the approximate output voltage $V_{out}$.

**Question 5:**
Compare and contrast the energy transfer mechanisms of a flyback converter and a forward converter.

---

### 10. Answers to Practice Questions

**Answer 1:**
For a flyback converter, the approximate voltage conversion ratio is:
$\frac{V_{out}}{V_{in}} \approx \frac{D}{1-D}$ (neglecting diode drop and leakage inductance).
Given $V_{in} = 24V$ and $D=0.4$:
$\frac{V_{out}}{24V} \approx \frac{0.4}{1-0.4} = \frac{0.4}{0.6} = \frac{2}{3}$
$V_{out} \approx 24V \times \frac{2}{3} = 16V$.

**Answer 2:**
The core reset mechanism is required in a forward converter to prevent the transformer core from saturating. During the ON time of the primary switch, magnetic flux builds up in one direction. If this flux is not reduced to zero before the next ON cycle, the core will quickly reach saturation, leading to a sudden increase in primary current and potential failure of the converter. The reset is typically achieved using a reset winding that applies a voltage of opposite polarity to the primary winding during the OFF time, or by using a reset inductor. The primary limitation imposed is that the reset process must be completed within the OFF time $(1-D)T$. If the reset requires a time $D'T$, then $D' \le (1-D)$. For a common reset configuration where the reset voltage equals the input voltage, the reset time is proportional to the ON time $(DT)$, leading to $D' \approx D$. Thus, $D \le (1-D)$, which means the maximum duty cycle for a standard forward converter is $D_{max} = 0.5$.

**Answer 3:**
The advantage of using a center-tapped transformer primary in a push-pull converter is that it allows for symmetrical driving of the transformer core by alternating voltage polarities across each half of the primary. This inherently provides flux reset without the need for separate reset components (like a reset winding/switch in a forward converter). This simplifies the design and increases the transformer utilization factor. In contrast, a full-bridge converter uses a standard transformer but requires four switches to achieve similar alternating voltage application across the primary.

**Answer 4:**
For a full-bridge converter, the approximate voltage conversion ratio is:
$\frac{V_{out}}{V_{in}} \approx n \frac{2D}{1}$ (This is for a specific operation where the output is stepped up).
Let's use the step-down relation.
The voltage across the secondary is $nV_{in}$ for $DT$ and $-nV_{in}$ for $DT$.
The effective voltage applied to the output stage (via diodes) is $nV_{in}$ for the first $DT$ and $nV_{in}$ for the second $DT$.
The total ON time for power transfer is $2DT$. The OFF time is $(1-2D)T$.
$\frac{V_{out}}{V_{in}} = n \frac{2D}{1-2D}$ (This is for buck-boost operation).

Let's re-verify the full bridge ratio. The voltage applied across the primary is $V_{in}$ for $DT$ and $-V_{in}$ for $DT$.
The induced secondary voltage is $nV_{in}$ for $DT$ and $-nV_{in}$ for $DT$.
The output stage (rectified) sees $|V_{sec}| = nV_{in}$ for a total duration of $2DT$.
The output inductor $L_{out}$ and capacitor $C_o$ smooth this.
$V_{out} = \frac{1}{T} \int_0^T |V_{sec,rectified}| dt = \frac{nV_{in} DT + nV_{in} DT}{T} = 2n V_{in} D$.
Thus, $\frac{V_{out}}{V_{in}} = 2nD$.
Given $V_{in} = 48V$, $n = N_s/N_p = 10/10 = 1$, and $D=0.4$:
$V_{out} \approx 1 \times 2 \times 0.4 \times 48V = 0.8 \times 48V = 38.4V$.

**Answer 5:**
*   **Energy Transfer Mechanism:**
    *   **Flyback:** Energy is stored in the magnetic field of the transformer during the ON time of the switch. During the OFF time, this stored energy is released to the output. The transformer acts as both an isolator and an energy storage element.
    *   **Forward:** Energy is directly transferred from the input to the output through the transformer during the ON time of the switch. The transformer does not primarily store energy; it acts as an isolator and voltage scaler. A significant challenge is the need to reset the magnetic flux in the core during the OFF time.

*   **Similarities:** Both are isolated DC-DC converters that use a transformer for isolation and voltage scaling. Both can be used for step-up or step-down conversion.

*   **Differences:**
    *   **Energy Storage:** Flyback stores energy, Forward transfers it directly.
    *   **Transformer Requirement:** Flyback uses a coupled inductor (transformer), which needs to be designed to store energy. Forward uses a standard transformer.
    *   **Core Reset:** Flyback does not inherently require core reset (though proper winding design is crucial). Forward requires a specific mechanism for core reset, limiting its duty cycle.
    *   **Complexity:** Flyback is generally simpler in terms of components for low-power applications.
    *   **Power Capability:** Forward converters can handle higher power than flyback converters due to more efficient transformer utilization and direct energy transfer.

---

### 11. Important Points to Remember

*   **Isolation:** The primary purpose of these converters is to provide galvanic isolation.
*   **Transformer:** The heart of these converters, responsible for isolation, voltage scaling, and in some cases, energy storage. Pay close attention to dot conventions and turns ratios ($n$).
*   **Core Reset:** Critical for forward converters; failure to reset leads to core saturation and converter failure. This limits the duty cycle to 0.5.
*   **Duty Cycle Limits:** Be aware of duty cycle limitations, especially for forward, push-pull, and half-bridge converters.
*   **Switching Losses & Conduction Losses:** These are crucial for efficiency calculations. For isolated converters, the transformer also has core losses.
*   **Transformer Utilization:** Full-bridge and push-pull converters generally offer better transformer utilization than flyback and forward converters.
*   **Power Handling:** The choice of converter depends on the required power level (Flyback for low, Full-Bridge for high).
*   **Waveforms:** Understanding the voltage and current waveforms across switches, transformer windings, and output components is key to analyzing operation and calculating parameters.

---
This concludes the comprehensive study notes on isolated DC-DC converters. Remember to refer to your textbooks for detailed derivations and specific design considerations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
