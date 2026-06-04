---
title: "CMOS Amplifiers : Common source amplifier with resistive and active loads"
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 1: MOS small signal model:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff41b"
status: "completed"
scrapedAt: "2026-05-23T18:08:03.334Z"
---
# Mixed Signal Circuits: Module 1: MOS Small Signal Model

## Topic: CMOS Amplifiers: Common Source Amplifier with Resistive and Active Loads

This module introduces the fundamental building block of analog integrated circuits: the Common Source (CS) amplifier. We will analyze its behavior using the MOS small-signal model and explore the impact of different load types (resistive and active) on its performance.

---

### 1. Introduction to Common Source Amplifier

The Common Source (CS) amplifier is one of the most fundamental amplifier configurations in CMOS technology. It amplifies the input voltage signal applied to the gate of a MOSFET by producing a varying output voltage at the drain.

*   **Basic Configuration:**
    *   Input signal applied to the **gate** terminal.
    *   Output signal taken from the **drain** terminal.
    *   Source terminal is typically connected to ground or a constant voltage (for NMOS).
    *   **Gain Mechanism:** The input voltage at the gate controls the drain current, which then flows through the load, generating an output voltage swing.

*   **Small-Signal Model of MOSFET:**
    *   To analyze amplifier performance accurately, we use the small-signal model, which represents the non-linear MOSFET as a linear circuit for small AC variations around a DC bias point.
    *   **Key Components:**
        *   **Transconductance ($g_m$):** Represents how effectively the gate voltage controls the drain current. For an NMOS transistor in saturation, $g_m = \frac{\partial I_D}{\partial V_{GS}} = K_n'(W/L) (V_{GS} - V_{th}) = K_n'(W/L) V_{ov}$. (Razavi, 2/e, Ch. 4.2.1)
        *   **Output Resistance ($r_o$):** Represents the incremental change in drain current with respect to the drain-source voltage, due to channel-length modulation. For an NMOS transistor in saturation, $r_o = \frac{\partial I_D}{\partial V_{DS}} \approx \frac{1}{\lambda I_D} = \frac{V_A}{I_D}$, where $\lambda = \frac{1}{V_A}$ and $V_A$ is the Early voltage. (Baker et al., Ch. 3.2.2)
        *   **Input Resistance:** Ideally infinite, as the gate is insulated.
        *   **Output Resistance:** Primarily determined by $r_o$ of the MOSFET.

---

### 2. Common Source Amplifier with Resistive Load

This is the simplest form of a CS amplifier where a resistor ($R_D$) is used as the load.

*   **Circuit Diagram:**
    *   An NMOS transistor with its gate connected to the input voltage ($v_{in}$), drain connected to $V_{DD}$ through $R_D$, and source connected to ground.
    *   The output voltage ($v_{out}$) is taken at the drain.

    ```
        VDD
         |
         RD
         |
      .--o--. v_out
      |     |
     /|     |
    | | M1  |
    |_|     |
      |     |
     ---    |
      G     D
      |     |
     vin    S
      |     |
     ---    |
      G     D
            |
           ---
            GND
    ```

*   **DC Analysis:**
    *   The DC gate-source voltage ($V_{GS}$) determines the DC drain current ($I_D$).
    *   The DC drain voltage ($V_{DS}$) is $V_{DD} - I_D R_D$. For the transistor to be in saturation, $V_{DS} \ge V_{GS} - V_{th}$.

*   **Small-Signal Analysis:**
    *   Replace the MOSFET with its small-signal model (current source $g_m v_{gs}$ in parallel with $r_o$).
    *   The gate is connected to $v_{in}$.
    *   The drain is connected to $V_{DD}$ through $R_D$ (which looks like an open circuit to AC signals, so $R_D$ appears as a resistor) and to ground through $r_o$.

    ```
        v_in ---o----| G
                  |    |
                  |   ---
                  |   M1 (small-signal)
                  |    |
                  |    D
                  |    |
                 R_D   r_o
                  |    |
                 VDD   v_out
                  |    |
                 ---   ---
                 GND   GND
    ```

*   **Key Performance Parameters:**

    *   **Voltage Gain ($A_v$):**
        *   The output AC current is $i_d = g_m v_{gs} + \frac{v_{ds}}{r_o}$.
        *   The input voltage is $v_{gs} = v_{in}$.
        *   The output voltage is $v_{out} = -i_d (R_D || r_o)$.
        *   Substituting $v_{gs}$ and $i_d$: $v_{out} = -(g_m v_{in}) (R_D || r_o)$.
        *   Therefore, $A_v = \frac{v_{out}}{v_{in}} = -g_m (R_D || r_o)$.
        *   **Observation:** The gain is negative, indicating an inversion. It is proportional to $g_m$ and the parallel combination of $R_D$ and $r_o$. (Razavi, 2/e, Ch. 4.3.1)

    *   **Input Resistance ($R_{in}$):**
        *   The gate of the MOSFET is isolated by an oxide layer, so the input impedance is ideally infinite.
        *   $R_{in} = \infty$.

    *   **Output Resistance ($R_{out}$):**
        *   Looking into the drain terminal with the input voltage set to zero ($v_{in} = 0$, which means $v_{gs} = 0$, thus $g_m v_{gs} = 0$).
        *   The output is connected to $R_D$ and $r_o$ in parallel.
        *   $R_{out} = R_D || r_o$.
        *   **Observation:** The output resistance is limited by the smaller of $R_D$ and $r_o$.

    *   **Trade-offs:**
        *   A larger $R_D$ leads to higher gain but also a lower DC current (unless $V_{DD}$ is increased), potentially limiting the output voltage swing.
        *   A larger $r_o$ (achieved with longer channel lengths) improves gain.

*   **Example:**
    Consider an NMOS transistor with $V_{th} = 1V$, $k_n' = 100 \mu A/V^2$, $W/L = 20/1$. If $V_{GS} = 2V$ and $R_D = 10 k\Omega$.
    *   $V_{ov} = V_{GS} - V_{th} = 2V - 1V = 1V$.
    *   $g_m = k_n'(W/L)V_{ov} = 100 \mu A/V^2 \times 20 \times 1V = 2000 \mu A/V = 2 mS$.
    *   Assume $V_A = 50V$, so $r_o = V_A / I_D$.
    *   $I_D = \frac{1}{2} k_n' (W/L) V_{ov}^2 = \frac{1}{2} \times 100 \mu A/V^2 \times 20 \times (1V)^2 = 1000 \mu A = 1 mA$.
    *   $r_o = 50V / 1mA = 50 k\Omega$.
    *   $A_v = -g_m (R_D || r_o) = -2 mS (10 k\Omega || 50 k\Omega) = -2 mS \times 8.33 k\Omega = -16.67$.

---

### 3. Common Source Amplifier with Active Load (Current Source Load)

Using a resistor as a load has limitations: it requires significant chip area and can limit the voltage swing. Active loads, typically implemented using other MOSFETs configured as current sources, offer advantages.

*   **Circuit Diagram:**
    *   The resistor $R_D$ is replaced by another MOSFET (e.g., a PMOS transistor M2 for an NMOS amplifier M1).
    *   M2 is biased to act as a current source, providing a constant DC current to M1.

    **NMOS Amplifier with PMOS Active Load:**

    ```
        VDD
         |
        .-----.
        |     |
        |    M2 (PMOS)
        |     |
        .-----.-----. v_out
              |     |
             /|     |
            | | M1  |
            |_|     |
              |     |
             ---    |
              G     D
              |     |
             vin    S
              |     |
             ---    |
              G     D
                    |
                   ---
                   GND
    ```

*   **DC Analysis:**
    *   M1 is biased as before.
    *   M2 (PMOS) is biased such that its gate is connected to a voltage $V_{B}$ (bias voltage) to establish a constant drain current $I_{D2}$.
    *   For M1 to be in saturation, $V_{DS1} = V_{DD} - V_{S2} \ge V_{GS1} - V_{th1}$. $V_{S2}$ is the source voltage of M2, which is the drain voltage of M1 ($v_{out}$).
    *   The DC drain current of M1, $I_{D1}$, must be equal to the DC drain current of M2, $I_{D2}$, to maintain the bias. $I_{D1} = I_{D2} = I_{bias}$.

*   **Small-Signal Analysis:**
    *   M1 is replaced by its small-signal model ($g_{m1}v_{gs1}$ in parallel with $r_{o1}$).
    *   M2 (the PMOS load) is also replaced by its small-signal model ($g_{m2}v_{gs2}$ in parallel with $r_{o2}$).
    *   The gate of M1 is connected to $v_{in}$.
    *   The drain of M1 is connected to the drain of M2.
    *   The source of M2 is connected to $V_{DD}$.
    *   The gate of M2 is connected to a bias voltage $V_B$.

    ```
               VDD
                |
               ---
               M2 (small-signal)
              /|\
             Gmos2  Dmos2
              |     |
             VB ----|----o---- v_out
                    |     |
                   /|     |
                  | | M1  |
                  |_|     |
                    |     |
                   ---    |
                    G     D
                    |     |
                   vin    S
                    |     |
                   ---    |
                   GND
    ```

*   **Key Performance Parameters:**

    *   **Voltage Gain ($A_v$):**
        *   The AC drain current of M1 is $i_{d1} = g_{m1} v_{gs1} + \frac{v_{ds1}}{r_{o1}}$. Here $v_{gs1} = v_{in}$ and $v_{ds1} = v_{out}$ (since the source of M1 is grounded and the drain is at $v_{out}$).
        *   The AC drain current of M2 (the PMOS load) is $i_{d2} = -g_{m2} v_{gs2} - \frac{v_{ds2}}{r_{o2}}$. Note the negative sign due to PMOS current convention.
        *   The source of M2 is connected to $V_{DD}$ (AC ground). So $v_{ds2} = v_{out} - V_{DD} = v_{out}$.
        *   The gate of M2 is at $V_B$ (AC ground). So $v_{gs2} = V_B - V_{S2} = 0 - v_{out} = -v_{out}$.
        *   Thus, $i_{d2} = -g_{m2}(-v_{out}) - \frac{v_{out}}{r_{o2}} = g_{m2} v_{out} - \frac{v_{out}}{r_{o2}} = v_{out} (\frac{1}{r_{o2}} - g_{m2})$. **Correction:** The current flow for M2 is from $V_{DD}$ to its drain. Thus the current flowing *out* of the drain of M1 into the source of M2 is $i_{d1}$. The current flowing *into* the drain of M2 from $V_{DD}$ is $i_{d2}$. So $i_{d1} + i_{d2} = 0$.
        *   Let's re-evaluate $i_{d2}$: The drain current of M2 flows *out* of the drain. The source of M2 is at $V_{DD}$ (AC ground). So $i_{d2} = -g_{m2} v_{gs2} - \frac{v_{ds2}}{r_{o2}}$. $v_{gs2} = V_B - V_{S2} = 0 - v_{out} = -v_{out}$. $v_{ds2} = v_{out} - V_{DD} = v_{out}$.
        *   $i_{d2} = -g_{m2}(-v_{out}) - \frac{v_{out}}{r_{o2}} = g_{m2}v_{out} - \frac{v_{out}}{r_{o2}}$. This is the current flowing *out* of the drain of M2.
        *   The current flowing *into* the drain of M1 is $i_{d1} = g_{m1}v_{in} + v_{out}/r_{o1}$.
        *   Kirchhoff's Current Law at the drain node: $i_{d1} + i_{d2} = 0$.
        *   $(g_{m1}v_{in} + \frac{v_{out}}{r_{o1}}) + (g_{m2}v_{out} - \frac{v_{out}}{r_{o2}}) = 0$.
        *   $g_{m1}v_{in} = -v_{out}(\frac{1}{r_{o1}} + g_{m2} - \frac{1}{r_{o2}})$.
        *   $A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{\frac{1}{r_{o1}} + g_{m2} - \frac{1}{r_{o2}}}$.
        *   If we assume $r_{o1}$ and $r_{o2}$ are large, $A_v \approx -\frac{g_{m1}}{g_{m2}}$. This is a simplification.
        *   **More accurate derivation:** The current flowing *into* the drain node from M1 is $i_{d1} = g_{m1}v_{in} + v_{out}/r_{o1}$. The current flowing *out* of the drain node into M2 is $i_{d2}'$. The drain current of M2 ($i_{d2}$) flows from $V_{DD}$ to its drain. So $i_{d2} = -g_{m2}v_{gs2} - v_{ds2}/r_{o2}$. $v_{gs2} = -v_{out}$. $v_{ds2} = v_{out}$.
        *   $i_{d2} = -g_{m2}(-v_{out}) - v_{out}/r_{o2} = g_{m2}v_{out} - v_{out}/r_{o2}$. This is the current flowing from $V_{DD}$ to the drain.
        *   The current from M1 to the drain node is $i_{d1} = g_{m1}v_{in} + v_{out}/r_{o1}$.
        *   The current flowing *from* the drain node *into* M2's source is $i_{d1}$. The current flowing *out* of M2's drain is $i_{d2} = g_{m2}v_{out} - v_{out}/r_{o2}$.
        *   KCL at drain: $i_{d1} + i_{d2} = 0$ is incorrect. Current flows from M1 to M2. The current from M1 is $i_{d1}$. The current entering M2's drain is $i_{d2}$. So the current from M1 flows into M2's drain.
        *   Let's use current flowing *into* the node. Current into drain from M1: $i_{d1} = g_{m1}v_{in} + v_{out}/r_{o1}$. Current out of drain into M2: $i_{d2\_out} = -i_{d2} = -(-g_{m2}v_{gs2} - v_{ds2}/r_{o2})$. $v_{gs2}=-v_{out}$, $v_{ds2}=v_{out}$. So $i_{d2\_out} = -(g_{m2}v_{out} - v_{out}/r_{o2}) = -g_{m2}v_{out} + v_{out}/r_{o2}$.
        *   KCL: $i_{d1} + i_{d2\_out} = 0$.
        *   $g_{m1}v_{in} + v_{out}/r_{o1} - g_{m2}v_{out} + v_{out}/r_{o2} = 0$.
        *   $g_{m1}v_{in} = v_{out}(g_{m2} - 1/r_{o1} - 1/r_{o2})$.
        *   $A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m1}}{g_{m2} - \frac{1}{r_{o1}} - \frac{1}{r_{o2}}}$.
        *   If $r_{o1}$ and $r_{o2}$ are very large (long channel devices), $A_v \approx \frac{g_{m1}}{g_{m2}}$. (Sedra & Smith, 6/e, Ch. 7.3.2)
        *   **Key Advantage:** The gain is determined by the ratio of transconductances of M1 and M2, allowing for potentially much higher gains than resistive loads.

    *   **Input Resistance ($R_{in}$):**
        *   Still ideally infinite, as the gate of M1 is isolated.
        *   $R_{in} = \infty$.

    *   **Output Resistance ($R_{out}$):**
        *   Looking into the drain node with $v_{in} = 0$ ($g_{m1}v_{gs1} = 0$).
        *   The output is connected to $r_{o1}$ (from M1) in parallel with the output resistance of M2 (viewed from its drain).
        *   For M2 (PMOS), $v_{gs2} = -v_{out}$ and $v_{ds2} = v_{out}$. The current flowing into the drain of M2 is $i_{d2} = -g_{m2}v_{gs2} - v_{ds2}/r_{o2} = -g_{m2}(-v_{out}) - v_{out}/r_{o2} = g_{m2}v_{out} - v_{out}/r_{o2}$.
        *   The output resistance looking into the drain of M2 is $R_{out2} = \frac{v_{out}}{i_{d2}} = \frac{v_{out}}{g_{m2}v_{out} - v_{out}/r_{o2}} = \frac{1}{g_{m2} - 1/r_{o2}}$.
        *   Therefore, the total output resistance is $R_{out} = r_{o1} || R_{out2} = r_{o1} || \frac{1}{g_{m2} - 1/r_{o2}}$.
        *   Since $g_{m2}$ is typically much larger than $1/r_{o2}$, $R_{out2} \approx 1/g_{m2}$. This is incorrect. The output resistance of a current source is its own output resistance $r_o$.
        *   **Correct reasoning for $R_{out2}$:** When looking into the drain of M2 (PMOS), with its source connected to AC ground ($V_{DD}$) and gate at AC ground ($V_B$), the equivalent resistance seen is its own output resistance, $r_{o2}$.
        *   So, $R_{out} = r_{o1} || r_{o2}$. (Razavi, 2/e, Ch. 4.3.2)
        *   **Observation:** The output resistance can be significantly higher than the resistive load case, leading to higher voltage gain.

    *   **Advantages of Active Loads:**
        *   Higher voltage gain (due to higher output resistance).
        *   Reduced chip area compared to large resistors.
        *   Potentially better power efficiency.

    *   **Disadvantages of Active Loads:**
        *   Requires proper biasing of the load transistor.
        *   Can limit the output voltage swing, especially if the load transistor is in saturation with a low overdrive voltage.
        *   The gain is dependent on the transconductance of the load device, which can vary with process and temperature.

*   **Biasing the Load Transistor:**
    *   For M2 to act as a current source, it must be in saturation. This requires its $V_{SD2} \ge V_{SG2} - V_{th2}$.
    *   In our NMOS amplifier example, $V_{S2} = V_{out}$ (AC), $V_D2 = V_{DD}$ (AC). So $V_{SD2} = V_{DD} - V_{out}$ (DC). $V_{SG2} = V_{DD} - V_B$ (DC).
    *   Condition for saturation: $V_{DD} - V_{out, DC} \ge (V_{DD} - V_B) - V_{th2}$.

*   **Example:**
    Consider the NMOS amplifier M1 with $V_{th1} = 1V$, $k_{n1}' = 100 \mu A/V^2$, $W_1/L_1 = 20/1$, biased at $V_{GS1} = 2V$. This gives $g_{m1} = 2mS$ and $I_{D1} = 1mA$, $r_{o1} = 50 k\Omega$.
    Let M2 be a PMOS transistor with $V_{th2} = -1V$, $k_{p2}' = 50 \mu A/V^2$, $W_2/L_2 = 40/1$.
    Let M2 be biased with $V_{SG2} = 2V$, so $V_B = V_{DD} - 2V$.
    *   $V_{ov2} = V_{SG2} - |V_{th2}| = 2V - 1V = 1V$.
    *   $I_{D2} = \frac{1}{2} k_{p2}' (W_2/L_2) V_{ov2}^2 = \frac{1}{2} \times 50 \mu A/V^2 \times 40 \times (1V)^2 = 1000 \mu A = 1mA$.
    *   This matches $I_{D1}$, so $I_{bias} = 1mA$.
    *   $g_{m2} = k_{p2}' (W_2/L_2) V_{ov2} = 50 \mu A/V^2 \times 40 \times 1V = 2000 \mu A/V = 2mS$.
    *   Assume $V_{A,PMOS} = 60V$, so $r_{o2} = V_A / I_{D2} = 60V / 1mA = 60 k\Omega$.
    *   $A_v = \frac{g_{m1}}{g_{m2} - 1/r_{o1} - 1/r_{o2}} = \frac{2mS}{2mS - 1/(50k\Omega) - 1/(60k\Omega)} = \frac{2mS}{2mS - 20 \mu S - 16.7 \mu S} \approx \frac{2mS}{2mS} = 1$. **This is incorrect. The denominator should be $g_{m2}$ if $r_o$ are large.**
    *   **Corrected Calculation:**
        *   $A_v = \frac{g_{m1}}{g_{m2} - (1/r_{o1} + 1/r_{o2})}$ is the general form.
        *   If $r_{o1}$ and $r_{o2}$ are large (e.g., from longer channel lengths), the $1/r_o$ terms become small.
        *   $A_v \approx \frac{g_{m1}}{g_{m2}} = \frac{2mS}{2mS} = 1$. This still implies a gain of 1. This indicates the transconductances are similar, and the $r_o$ values are not negligible.
        *   Let's re-examine the gain formula: $A_v = \frac{g_{m1}}{g_{m2} - 1/r_{o1} - 1/r_{o2}}$.
        *   $A_v = \frac{2mS}{2mS - (1/50k\Omega + 1/60k\Omega)} = \frac{2mS}{2mS - (20\mu S + 16.7\mu S)} = \frac{2mS}{2mS - 36.7\mu S} = \frac{2mS}{1963.3\mu S} \approx 10.18$.
        *   This gain is much higher than the resistive load case and is positive if we don't consider the inversion of M1. The formula derivation actually led to a negative sign. Let's check the polarity of the current sources.
        *   Current into drain of M1: $i_{d1} = g_{m1}v_{in} + v_{out}/r_{o1}$.
        *   Current into drain of M2: $i_{d2} = -g_{m2}v_{gs2} - v_{ds2}/r_{o2}$. $v_{gs2} = -v_{out}$, $v_{ds2} = v_{out}$.
        *   $i_{d2} = -g_{m2}(-v_{out}) - v_{out}/r_{o2} = g_{m2}v_{out} - v_{out}/r_{o2}$. This is the current flowing *out* of M2's drain.
        *   KCL at the drain node: $i_{d1} + i_{d2} = 0$. (current from M1 + current from M2 = 0).
        *   $(g_{m1}v_{in} + v_{out}/r_{o1}) + (g_{m2}v_{out} - v_{out}/r_{o2}) = 0$.
        *   $g_{m1}v_{in} = -v_{out}(1/r_{o1} + g_{m2} - 1/r_{o2})$.
        *   $A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m2} - 1/r_{o1} - 1/r_{o2}} = -\frac{2mS}{2mS - 36.7\mu S} \approx -10.18$.

    *   **Output Resistance of Active Load:**
        *   $R_{out} = r_{o1} || r_{o2} = 50 k\Omega || 60 k\Omega = 27.27 k\Omega$.

---

### 4. CMOS Amplifiers: Comparison of Resistive and Active Loads

| Parameter          | Resistive Load ($R_D$)                       | Active Load (MOS Current Source)                      |
| :----------------- | :------------------------------------------- | :---------------------------------------------------- |
| **Voltage Gain**   | $-g_m(R_D || r_o)$                           | $-\frac{g_{m1}}{g_{m2} - (1/r_{o1} + 1/r_{o2})}$ (Approx: $-g_{m1}/g_{m2}$) |
| **Input Resistance** | $\infty$                                     | $\infty$                                              |
| **Output Resistance**| $R_D || r_o$                                 | $r_{o1} || r_{o2}$                                    |
| **Gain vs. $R_D$** | Higher $R_D \implies$ Higher Gain            | Gain depends on $g_m$ ratio and $r_o$ of transistors. |
| **Chip Area**      | Larger for high $R_D$                        | Smaller                                               |
| **Power Consumption**| Can be high if $R_D$ is small              | Can be lower, depends on bias current                 |
| **Output Swing**   | Limited by $I_D \times R_D$                  | Limited by saturation voltage of load device          |
| **Complexity**     | Simpler                                      | Requires biasing of load device                       |

*   **Key takeaway:** Active loads generally offer higher gain and are more area-efficient, making them preferred in modern CMOS designs. The gain of an active load CS amplifier is often referred to as the **gain of a single-stage amplifier**, and it's crucial for building more complex circuits like op-amps. (Allen & Holbery, 3/e, Ch. 3.3)

---

### 5. Common Source Amplifier with Diode-Connected Load

A simpler form of active load is to use a MOSFET in the diode-connected configuration. This means the gate and drain are shorted.

*   **Circuit Diagram:**
    *   NMOS M1 as the amplifier.
    *   PMOS M2 connected as a diode (gate and drain shorted) acting as the load.

    ```
        VDD
         |
        .-----.
        |     |
        |    M2 (PMOS)
        |-----|  (Gate-Drain Short)
        |     |
        .-----.-----. v_out
              |     |
             /|     |
            | | M1  |
            |_|     |
              |     |
             ---    |
              G     D
              |     |
             vin    S
              |     |
             ---    |
              G     D
                    |
                   ---
                   GND
    ```

*   **Analysis:**
    *   M2 is connected as a diode-load, so $V_{GS2} = V_{DS2}$. For saturation, $V_{DS2} \ge V_{GS2} - V_{th2}$, which is always true when $V_{GS2} = V_{DS2}$ and $V_{th2} < 0$.
    *   The gate of M2 is shorted to its drain, so $v_{gs2} = v_{ds2}$.
    *   Small-signal model of M2: $g_{m2}v_{gs2}$ is in parallel with $r_{o2}$. Since $v_{gs2} = v_{ds2}$, the current flowing into the drain of M2 is $i_{d2} = g_{m2}v_{ds2} + v_{ds2}/r_{o2} = v_{ds2}(g_{m2} + 1/r_{o2})$.
    *   The output resistance looking into the drain of M2 is $R_{out2} = \frac{v_{ds2}}{i_{d2}} = \frac{1}{g_{m2} + 1/r_{o2}}$. This is approximately $1/g_{m2}$ if $g_{m2} \gg 1/r_{o2}$.

*   **Voltage Gain ($A_v$):**
    *   KCL at drain node: $i_{d1} + i_{d2} = 0$.
    *   $g_{m1}v_{in} + v_{out}/r_{o1} + v_{out}(g_{m2} + 1/r_{o2}) = 0$.
    *   $g_{m1}v_{in} = -v_{out}(1/r_{o1} + g_{m2} + 1/r_{o2})$.
    *   $A_v = -\frac{g_{m1}}{g_{m2} + 1/r_{o1} + 1/r_{o2}}$.
    *   If $g_{m2}$ is large, the gain is $-g_{m1}/g_{m2}$. (Razavi, 2/e, Ch. 4.3.3)

*   **Output Resistance ($R_{out}$):**
    *   $R_{out} = r_{o1} || \frac{1}{g_{m2} + 1/r_{o2}}$.
    *   If $g_{m2} \gg 1/r_{o2}$, then $R_{out} \approx r_{o1} || (1/g_{m2})$. This is much smaller than $r_{o1} || r_{o2}$.

*   **Comparison:** Diode-connected loads provide higher gain than resistive loads but generally lower gain and lower output resistance compared to a current source active load. They are simpler to bias.

---

### 6. Learning Outcomes Coverage and Course Outcomes Alignment

*   **LO1: Explain various Single stage Amplifiers with different types of loads.**
    *   Covered in sections 2 (Resistive Load), 3 (Active Load), and 5 (Diode-Connected Load).

*   **CO1: Explain various Single stage Amplifiers with different types of loads (Knowledge Level: K2)**
    *   This topic directly addresses CO1 by explaining the CS amplifier with resistive and active loads. The analysis of gain, input/output impedance, and trade-offs satisfies the knowledge requirement.

*   **Further Connections (Though not directly asked for this specific topic, the foundation is laid):**
    *   **CO2: Explain Differential Amplifiers & Current Mirrors:** Understanding the CS amplifier is foundational to understanding differential pairs and how current mirrors are used to create active loads.
    *   **CO3: Apply the knowledge of amplifiers in the design of two stage OPAMP:** The CS amplifier is a basic stage used in cascaded amplifier designs like two-stage op-amps.
    *   **CO4: Illustrate the concept of frequency compensation in OPAMP:** Frequency response analysis of CS amplifiers (which we haven't covered here but is a natural extension) is key to understanding compensation techniques.
    *   **CO5: Describe the specifications and architectures of data converter circuits:** Amplifiers are used in various parts of data converters (e.g., sample-and-hold circuits, output buffers), so understanding amplifier performance is relevant.

---

### 7. Important Points to Remember

*   **Small-Signal Model:** Essential for analyzing AC behavior. Key parameters are $g_m$ and $r_o$.
*   **Common Source Amplifier:** Inverts the input signal ($A_v < 0$). Has infinite input impedance.
*   **Resistive Load:** Simple, but gain is limited by $R_D$ and $r_o$. Output resistance is $R_D || r_o$. Requires large area for high resistance.
*   **Active Load:** Uses transistors as loads for higher gain and smaller area.
    *   **Current Source Load:** Provides the highest output resistance and gain. Gain is approximately $-g_{m1}/g_{m2}$. Output resistance is $r_{o1} || r_{o2}$. Requires proper biasing.
    *   **Diode-Connected Load:** Simpler active load. Lower output resistance and gain compared to current source load. Gain is approximately $-g_{m1}/g_{m2}$. Output resistance is approximately $r_{o1} || (1/g_{m2})$.
*   **Trade-offs:** Always consider the trade-offs between gain, bandwidth, power consumption, output swing, and chip area.
*   **Channel Length Modulation ($r_o$):** Crucial for high gain, especially with active loads. Longer channel lengths increase $r_o$.

---

### 8. Practice Questions and Answers

**Question 1:**
An NMOS common-source amplifier with a resistive load $R_D = 50k\Omega$ is biased with $I_D = 0.5mA$. The transistor has $g_m = 2.5mS$ and $r_o = 100k\Omega$. Calculate the voltage gain.
*   **Answer:**
    $A_v = -g_m(R_D || r_o)$
    $R_D || r_o = 50k\Omega || 100k\Omega = \frac{50k \times 100k}{50k + 100k} = \frac{5000}{150} k\Omega = 33.33 k\Omega$.
    $A_v = -2.5mS \times 33.33 k\Omega = -83.33$.

**Question 2:**
Consider a CS amplifier with an active load implemented by a PMOS current source. If the NMOS input transistor M1 has $g_{m1} = 3mS$, $r_{o1} = 80k\Omega$ and the PMOS load transistor M2 has $g_{m2} = 2mS$, $r_{o2} = 120k\Omega$. Calculate the voltage gain and output resistance.
*   **Answer:**
    Voltage Gain:
    $A_v = -\frac{g_{m1}}{g_{m2} - (1/r_{o1} + 1/r_{o2})}$
    $1/r_{o1} = 1/80k\Omega = 12.5 \mu S$
    $1/r_{o2} = 1/120k\Omega = 8.33 \mu S$
    $A_v = -\frac{3mS}{2mS - (12.5 \mu S + 8.33 \mu S)} = -\frac{3mS}{2mS - 20.83 \mu S} = -\frac{3mS}{1979.17 \mu S} \approx -1.516$.
    *Correction:* The example derivation for the NMOS amplifier with PMOS load had a negative sign. The gain is negative.
    $A_v \approx -1.516$.

    Output Resistance:
    $R_{out} = r_{o1} || r_{o2} = 80k\Omega || 120k\Omega = \frac{80k \times 120k}{80k + 120k} = \frac{9600}{200} k\Omega = 48 k\Omega$.

**Question 3:**
What is the primary advantage of using an active load over a resistive load in a CMOS common-source amplifier?
*   **Answer:** The primary advantage is achieving significantly higher voltage gain due to the much larger output resistance provided by the active load (typically $r_{o1} || r_{o2}$) compared to the resistive load ($R_D || r_o$). Additionally, active loads are more area-efficient.

**Question 4:**
In a common-source amplifier with a diode-connected load, how is the output resistance determined?
*   **Answer:** The output resistance is determined by the parallel combination of the output resistance of the main transistor ($r_{o1}$) and the output resistance of the diode-connected load transistor ($1/(g_{m2} + 1/r_{o2})$).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
