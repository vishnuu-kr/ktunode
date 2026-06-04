---
title: "Short Circuit Power: Short Circuit Current of Inverter"
subject: "LOW POWER VLSI"
module: "Module 2: Sources of power dissipation in digital  ICs"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff677"
status: "completed"
scrapedAt: "2026-05-23T18:14:36.116Z"
---
# LOW POWER VLSI: Module 2 - Sources of Power Dissipation in Digital ICs

## Topic: Short Circuit Power: Short Circuit Current of Inverter

---

### 1. Introduction to Short Circuit Power

**Short circuit power** is one of the three primary components of power dissipation in CMOS digital integrated circuits (ICs), alongside dynamic (switching) power and static leakage power. It occurs when both the PMOS and NMOS transistors in a CMOS gate are simultaneously conducting, creating a direct path between Vdd and Ground.

**Key Concept:** In an ideal CMOS inverter, the PMOS transistor turns off completely when the input is high (logic '1'), and the NMOS transistor turns off completely when the input is low (logic '0'). However, in real devices, there's a transition region where both transistors conduct.

**Learning Outcome Alignment:**
*   **CO2 (K2):** Discuss the different sources of power dissipation in digital ICs. (This topic directly addresses one of these sources).

---

### 2. The CMOS Inverter During Switching

Consider a CMOS inverter with input voltage $V_{in}$ and output voltage $V_{out}$.

*   **$V_{in}$ = 0V (Logic '0'):** PMOS is ON, NMOS is OFF. Output is Vdd.
*   **$V_{in}$ = Vdd (Logic '1'):** PMOS is OFF, NMOS is ON. Output is 0V.

**The Transition Region:**
As the input voltage $V_{in}$ changes from 0V to Vdd, there's a period where:
*   The PMOS transistor is not fully turned OFF.
*   The NMOS transistor is not fully turned ON.

During this transition, both PMOS and NMOS transistors are in their saturation or linear regions, conducting current. This current flows from Vdd through the PMOS, through the NMOS, to Ground.

**Diagram (Conceptual):**

```
      Vdd
       |
      / \
     |   |  (PMOS ON)
     | P |
     \ /
      |------- Vout
      |
     / \
    |   |  (NMOS ON)
    | N |
    \ /
     |
    GND
```

During the transition, imagine the PMOS is partially conducting downwards and the NMOS is partially conducting upwards, creating a path for current from Vdd to GND.

---

### 3. Short Circuit Current in an Inverter

The current that flows from Vdd to Ground during the transition is known as the **short circuit current ($I_{sc}$)**.

**Factors Affecting Short Circuit Current:**

*   **Input Transition Slope ($dV_{in}/dt$):** A faster input transition (steeper slope) means the transition region is shorter in time, but the instantaneous current can be higher. A slower transition spreads the current over a longer period.
*   **Device Characteristics (Transconductance $g_m$):** Higher transconductance leads to higher current.
*   **Supply Voltage ($V_{dd}$):** Higher $V_{dd}$ generally leads to higher current.
*   **Device Sizing (W/L ratio):** Larger transistors can conduct more current.
*   **Load Capacitance ($C_L$):** While $C_L$ primarily impacts dynamic power, it also influences the output voltage transition, which in turn affects the $V_{out}$ waveform and thus the short circuit current duration. A larger $C_L$ will slow down the output transition, potentially leading to a longer duration of simultaneous conduction.

**Mathematical Representation (Simplified Model):**

From **Razavi (Design of Analog CMOS Integrated Circuits, 2/e)** and **Baker et al. (CMOS: Circuits Design, Layout and Simulation, 4/e)**, we can approximate the short circuit current.

When both transistors are conducting, the current can be approximated by:

$I_{sc} \approx \frac{1}{2} \beta_{eff} (V_{in} - V_{th,n})^2 + \frac{1}{2} \beta_{eff} (V_{dd} - V_{in} - V_{th,p})^2$

Where:
*   $\beta_{eff} = \mu_n C_{ox} (\frac{W}{L})_{n,eff}$ (for NMOS) and $\beta_{eff} = \mu_p C_{ox} (\frac{W}{L})_{p,eff}$ (for PMOS). In a well-designed inverter, the effective $\beta$ values are often matched for similar drive strength.
*   $V_{th,n}$ is the threshold voltage of the NMOS.
*   $V_{th,p}$ is the threshold voltage of the PMOS.
*   $V_{in}$ is the input voltage.

A more accurate model often considers the point where $V_{out}$ is between $V_{in}$ and $V_{dd}-V_{th,p}$.

During the transition, the current is often modeled as a triangular pulse. The peak current occurs when $V_{in} \approx V_{dd}/2$. At this point, both transistors are partially ON.

**Peak Short Circuit Current ($I_{sc,peak}$):**
When $V_{in} \approx V_{dd}/2$ and assuming $V_{th,n} \approx V_{th,p} \approx V_{th}$, and $\beta_n \approx \beta_p$:
$I_{sc,peak} \approx \frac{1}{2} \beta (V_{dd}/2 - V_{th})^2$ (This is a simplification, as transistor operating regions change).

A common simplified approximation for the peak current is:
$I_{sc,peak} \approx \beta (\frac{V_{dd}}{2} - V_{th})^2$ if both are in saturation.
Or more practically, it's often proportional to $\beta$ and $(V_{dd} - V_{th})^2$.

**Duration of Short Circuit Current ($t_{sc}$):**
The duration depends on the input transition time. If the input transition time is $\Delta t_{in}$, then $t_{sc} \approx \Delta t_{in}$.

---

### 4. Short Circuit Power Dissipation ($P_{sc}$)

Short circuit power is the product of the short circuit current and the supply voltage, integrated over the time the current flows.

$P_{sc} = \frac{1}{T} \int_{0}^{T} V_{dd} \cdot I_{sc}(t) dt$

Where T is the period of the input signal.

For a single switching event, the energy dissipated ($E_{sc}$) is:
$E_{sc} = V_{dd} \int I_{sc}(t) dt$

If we approximate $I_{sc}(t)$ as a triangular pulse with peak $I_{sc,peak}$ and duration $t_{sc}$, the average short circuit current over a period $T$ of a signal that switches at a frequency $f = 1/T$ is:
$I_{sc,avg} = f \cdot (\text{Area under } I_{sc}(t) \text{ pulse}) = f \cdot (\frac{1}{2} I_{sc,peak} \cdot t_{sc})$

Therefore, the average short circuit power is:
$P_{sc} = V_{dd} \cdot I_{sc,avg} = V_{dd} \cdot f \cdot (\frac{1}{2} I_{sc,peak} \cdot t_{sc})$

**Key Relationship:** $P_{sc}$ is proportional to the switching frequency ($f$), the input transition time ($t_{sc}$), and the peak short-circuit current ($I_{sc,peak}$).

**Learning Outcome Alignment:**
*   **CO1 (K2):** Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.
    *   **Scaling Impact:** As feature sizes shrink in advanced technologies, the threshold voltages ($V_{th}$) are reduced, and transistor overdrive voltages $(V_{GS} - V_{th})$ can become smaller. However, with faster switching speeds and potentially steeper input ramps, short-circuit power can become more significant. Devices with lower $V_{th}$ can conduct current for a wider range of input voltages.

---

### 5. Short Circuit Power in Different Gates

While we focused on the inverter, the principle applies to other CMOS gates:

*   **NAND gate:** Has multiple PMOS transistors in series and multiple NMOS transistors in parallel. During switching, there can be a short-circuit path.
*   **NOR gate:** Has multiple PMOS transistors in parallel and multiple NMOS transistors in series.
*   **Complex Gates:** The complexity of the short-circuit path can increase significantly.

**Example: 2-input NAND Gate:**
*   **Input A=0, B=0:** PMOS block ON, NMOS block OFF.
*   **Input A=1, B=1:** PMOS block OFF, NMOS block ON.
*   **During transitions (e.g., A changes, B stays 1):** There can be a short-circuit current. If both A and B transition simultaneously, the path can be more complex.

**Generalization:** The short-circuit current in any gate is due to the simultaneous conduction of PMOS and NMOS pull-up/pull-down networks.

**Learning Outcome Alignment:**
*   **CO2 (K2):** Discuss the different sources of power dissipation in digital ICs. (Short circuit power in various gates).
*   **CO4 (K3):** Apply various clocked and non-clocked design styles for logic implementation.
    *   **Clocked Design Styles (e.g., Latches):** Latches have continuous clock signals, meaning their transistors are often active for longer durations. This can increase the total short-circuit power if the inputs transition frequently when the clock is active.
    *   **Non-Clocked Design Styles (e.g., Combinational Logic):** The short-circuit power depends on the input data patterns and transition activity.

---

### 6. Strategies to Reduce Short Circuit Power

The primary goal is to minimize the duration and magnitude of the short-circuit current.

1.  **Control Input Transition Times:**
    *   **Slew Rate Control:** Introduce controlled rise/fall times for input signals. This can be done by:
        *   **Buffer Insertion:** Add buffers (inverters) to slow down the transitions of signals driving large capacitive loads.
        *   **Resistor-Capacitor (RC) Filtering:** Sometimes deliberate RC networks are used, though less common in pure digital design due to timing implications.
    *   **Use of slower clock edges:** If applicable.

2.  **Optimize Transistor Sizing:**
    *   **Avoid Over-sizing:** While larger transistors provide lower resistance and faster switching, they also have higher leakage and can contribute to higher short-circuit currents if not sized appropriately.
    *   **Balanced Drive Strength:** Ensure that the PMOS and NMOS transistors have comparable drive strengths to minimize the time both are conducting significantly. In standard CMOS, this often means the PMOS needs to be wider than the NMOS due to lower hole mobility.

3.  **Reduce Supply Voltage ($V_{dd}$):**
    *   This also reduces dynamic power and leakage power, but it lowers the overdrive voltage for transistors, which can affect switching speed. The benefit of reduced $V_{dd}$ usually outweighs the potential increase in $t_{sc}$ duration.

4.  **Avoid Simultaneous Switching of Large Numbers of Inputs:**
    *   In complex circuits, if many inputs to a large gate transition at the same time, the short-circuit current can be substantial. Careful floorplanning and routing can sometimes mitigate this.

5.  **Use Adiabatic Switching Techniques (Advanced):**
    *   As mentioned in **CO5**, adiabatic logic reduces power dissipation by charging and discharging capacitors gradually, thereby minimizing the $I \cdot V$ product. In adiabatic circuits, the concept of a direct short circuit current is largely eliminated.

**Learning Outcome Alignment:**
*   **CO3 (K2):** Describe the various approaches for power management in digital ICs. (Reducing short-circuit power is a key aspect).
*   **CO5 (K2):** Describe the use of Adiabatic switching for power management in digital ICs. (This is an advanced technique that fundamentally addresses short-circuit power).

---

### 7. Short Circuit Power vs. Dynamic Power

It's important to distinguish between short-circuit power and dynamic (switching) power.

*   **Dynamic Power ($P_{dyn}$):** Dissipated due to charging and discharging load capacitances. $P_{dyn} = \alpha C_L V_{dd}^2 f$, where $\alpha$ is the activity factor.
*   **Short Circuit Power ($P_{sc}$):** Dissipated due to direct current flow from Vdd to Ground during input transitions. $P_{sc} \approx V_{dd} \cdot I_{sc,avg} = V_{dd} \cdot f \cdot (\frac{1}{2} I_{sc,peak} \cdot t_{sc})$.

**Comparison:**
*   $P_{dyn}$ is dominant when $C_L$ is large and switching frequency is high.
*   $P_{sc}$ becomes significant when input transition times are slow (large $t_{sc}$) or when the devices have high transconductance and are driven by strong, fast signals leading to high peak $I_{sc}$.
*   **Impact of Input Transition Slope:** A very sharp input transition minimizes $t_{sc}$ and increases $P_{dyn}$ (faster switching), but minimizes $P_{sc}$. A very slow input transition increases $t_{sc}$, leading to higher $P_{sc}$, but might slightly reduce $P_{dyn}$ due to slower effective switching of the gate output (though the overall $f$ is the same). This highlights the trade-off.

**Textbook Reference:**
*   **Sedra & Smith (Microelectronic Circuits, 8/e)** provides detailed analysis of transistor behavior in different regions, which is fundamental to understanding the current flow during switching.
*   **Baker et al. (CMOS: Circuits Design, Layout and Simulation, 4/e)** offers practical insights into the impact of design choices on power dissipation, including short-circuit effects.

---

### 8. Practice Questions and Answers

**Q1. What causes short circuit power dissipation in a CMOS inverter?**
**Answer:** Short circuit power is caused by the direct current path from Vdd to Ground that exists when both the PMOS and NMOS transistors in the inverter are simultaneously conducting during the input voltage transition.

**Q2. List three factors that influence the magnitude of short circuit current in a CMOS inverter.**
**Answer:**
1.  Input transition slope (rise/fall time).
2.  Device transconductance ($\beta$).
3.  Supply voltage ($V_{dd}$).
4.  Device sizing (W/L ratio).
5.  Threshold voltages ($V_{th,n}$, $V_{th,p}$).

**Q3. How does a faster input transition affect short circuit power?**
**Answer:** A faster input transition (steeper slope) generally leads to a shorter duration of simultaneous conduction ($t_{sc}$), which tends to *reduce* the total short circuit energy dissipated per transition. However, the peak short circuit current ($I_{sc,peak}$) might be higher. The net effect on average power depends on the interplay between peak current and duration. For very fast transitions, $P_{sc}$ can become less dominant compared to $P_{dyn}$.

**Q4. If you wanted to reduce short circuit power in a circuit, what is one design strategy you could employ?**
**Answer:** One strategy is to control and slow down the input signal transition times (increase the input rise/fall time). This increases the duration the transistors are partially on, but reduces the peak current and spreads the current over a longer period, often leading to lower overall energy dissipation per transition. Another strategy is to avoid over-sizing transistors.

**Q5. Is short circuit power dependent on load capacitance? Explain briefly.**
**Answer:** Indirectly. While short circuit power is primarily a function of the internal gate's transition and current flow, load capacitance affects the output voltage transition ($V_{out}$). A larger $C_L$ will slow down the $V_{out}$ transition, which in turn can influence the operating region of the PMOS and NMOS transistors, potentially affecting the duration and magnitude of the short-circuit current. However, it's not a direct proportionality like dynamic power.

---

### 9. Important Points to Remember

*   **Short circuit power is a transient power component.** It occurs only during the switching period.
*   It is proportional to **switching frequency**, **input transition time**, and the **peak short-circuit current**.
*   **Steeper input transitions** lead to higher peak currents but shorter durations, while **slower transitions** lead to lower peak currents but longer durations.
*   **Balancing transistor sizing** (PMOS and NMOS) is crucial for minimizing the overlap in their conduction periods.
*   Strategies to reduce short-circuit power include **controlling input slew rates** and **optimizing transistor sizing**.
*   **Adiabatic switching** is an advanced technique that aims to eliminate short-circuit power by ensuring gradual charging/discharging.
*   In nanometer technologies, as $V_{th}$ is scaled down and devices become faster, short-circuit power can become a more significant contributor to the total power budget, especially in circuits with high transition activity.

---

### 10. Learning Outcome Mapping

*   **CO1 (K2):** Covered in Section 3 regarding the impact of scaling on $V_{th}$ and short-circuit current.
*   **CO2 (K2):** Explicitly discussed as a source of power dissipation in Section 1 and throughout the notes.
*   **CO3 (K2):** Strategies to reduce short-circuit power are detailed in Section 6.
*   **CO4 (K3):** Mentioned in Section 5 regarding how different design styles (clocked vs. non-clocked) can affect the overall short-circuit power.
*   **CO5 (K2):** Referenced in Section 6 as an advanced technique that mitigates short-circuit power.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
