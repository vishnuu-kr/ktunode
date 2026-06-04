---
title: "Calibration of 1-phase Energy meter at various power factors and phantom loading (minimum 3 conditions) *."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 10: Calibration of 1"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35cf5"
status: "completed"
scrapedAt: "2026-05-23T16:11:59.826Z"
---
# CIRCUITS AND MEASUREMENTS LAB

## Module 10: Calibration of 1-Phase Energy Meter

### Topic: Calibration of 1-phase Energy Meter at Various Power Factors and Phantom Loading (Minimum 3 Conditions)

---

### 1. Introduction to Energy Meters

An **energy meter** is an instrument that measures the electrical energy consumed by a customer. It is essentially an integration of power over time. For a DC circuit, energy (E) is given by $E = P \times t$, where P is power and t is time. In AC circuits, however, power is not constant due to varying voltage and current, and the phase difference between them. Therefore, energy in an AC circuit is measured as the integral of instantaneous power over time:

$E = \int P(t) dt$

where $P(t) = V(t) \times I(t) \times \cos(\phi(t))$

The most common type of energy meter used in residential and commercial applications is the **induction type (electromechanical) energy meter**.

---

### 2. Working Principle of Induction Type Energy Meter

The induction type energy meter operates on the principle of **electromagnetic induction** and the interaction of magnetic fields produced by two coils:

*   **Potential Coil (Pressure Coil):** Connected in parallel with the load, it is wound with a large number of turns of fine wire. It is designed to have a high inductance and a power factor close to zero, so that the current through it is nearly in phase with the applied voltage and its magnitude is proportional to the voltage.
*   **Current Coil (Series Coil):** Connected in series with the load, it is wound with a few turns of thick wire. Its magnetic field is proportional to the load current.

These coils are placed in proximity to a rotating disc, typically made of aluminum. The interaction of the alternating magnetic fields produced by these coils with the induced eddy currents in the rotating disc generates a torque, causing the disc to rotate.

**Torque Development:**

The torque produced in an induction energy meter is proportional to the product of the magnetic fluxes from the potential and current coils and the sine of the phase angle between them. For accurate energy measurement, the torque should be proportional to the power consumed by the load.

*   **Voltage Coil Flux ($\phi_v$)**: Proportional to voltage ($V$).
*   **Current Coil Flux ($\phi_i$)**: Proportional to current ($I$).

The resultant torque ($T$) is approximately proportional to:
$T \propto \phi_v \times \phi_i \times \sin(\alpha)$
where $\alpha$ is the phase angle between $\phi_v$ and $\phi_i$.

To ensure that the torque is proportional to power ($P = VI \cos \phi$), the phase angle between the fluxes needs to be controlled. This is achieved through a **phase shifting device** (like a series resistance or capacitor in the potential circuit) and a **brake magnet**.

*   **Brake Magnet:** A permanent magnet is placed near the edge of the rotating disc. As the disc rotates, it cuts the magnetic flux lines of the brake magnet, inducing eddy currents in the disc. These eddy currents interact with the brake magnet's field to produce a braking torque ($T_b$) which is proportional to the speed of the disc ($\omega$): $T_b \propto \omega$.
*   **Balancing Torque:** For continuous rotation at a steady speed, the driving torque must equal the braking torque. Therefore, at a constant load power, the speed becomes constant. The energy recorded by the meter is proportional to the total number of revolutions, which is proportional to the integral of the driving torque over time. By carefully designing the meter, the driving torque can be made proportional to the power, and thus the speed is proportional to power.

---

### 3. Calibration of an Energy Meter

**Calibration** is the process of verifying and adjusting an instrument's accuracy against a known standard. For an energy meter, calibration involves comparing its reading with the actual energy consumed over a specific period.

**Why Calibration is Necessary:**

*   **Manufacturing Tolerances:** Components might not have exact values.
*   **Aging of Components:** Magnetic properties of materials can change over time.
*   **Wear and Tear:** Mechanical parts can wear down.
*   **Changes in Load Conditions:** Performance can vary with different load levels and power factors.

**Calibration Procedure:**

The fundamental principle of calibrating an energy meter is to measure the energy consumed by a known load and compare it with the energy registered by the meter. The meter's accuracy is often expressed as a percentage error.

**Accuracy (%) = (Meter Reading - True Value) / True Value * 100%**

Or, more commonly, the **percentage error** is calculated as:

**Percentage Error = (True Energy - Metered Energy) / True Energy * 100%**

A positive percentage error means the meter is running fast (measuring more energy than consumed), and a negative percentage error means it is running slow.

The calibration is performed at different load conditions and power factors to ensure accuracy across the meter's operating range.

---

### 4. Key Concepts and Definitions

*   **Energy:** The rate at which work is done or heat is produced. Measured in Joules (J) or kilowatt-hours (kWh).
*   **Power:** The rate of energy transfer. Measured in Watts (W) or kilowatts (kW).
*   **Power Factor (PF):** The cosine of the phase angle between the voltage and current. It represents the ratio of real power (kW) to apparent power (kVA).
    *   **Leading Power Factor:** Current leads voltage (capacitive load).
    *   **Lagging Power Factor:** Current lags voltage (inductive load).
    *   **Unity Power Factor:** Voltage and current are in phase (resistive load).
*   **True Wattmeter:** A highly accurate instrument used as a standard for measuring power during calibration.
*   **Phantom Loading:** A method of testing energy meters where the voltage and current circuits are supplied from separate sources. This allows for testing at a wide range of power factors without actually consuming significant power.
*   **Revolutions per kWh:** A constant marked on the energy meter disc, indicating the number of revolutions the disc makes for every kilowatt-hour of energy consumed. This is used to calculate the energy registered by the meter.
*   **Error:** The difference between the actual energy consumed and the energy indicated by the meter.

---

### 5. Experimental Setup for Calibration

The calibration of a 1-phase energy meter at various power factors and phantom loading requires the following equipment:

1.  **Variable Voltage Source:** To control the voltage supplied to the potential circuit.
2.  **Variable Voltage Source (Separate):** For phantom loading, to control the voltage supplied to the potential circuit.
3.  **Variable Current Source:** To control the current supplied to the current circuit.
4.  **Auto-transformers (Variacs):** Used as variable voltage sources.
5.  **Standard Wattmeter:** A highly accurate wattmeter to measure the true power consumed by the load.
6.  **Standard Energy Meter (Optional but Recommended):** A calibrated energy meter for comparison.
7.  **Load Bank:** A variable load with different combinations of resistance, inductance, and capacitance to achieve different power factors.
8.  **Phase Shifter:** To control the phase angle between voltage and current (can be integrated into the load bank).
9.  **Stopwatch or Timer:** To accurately measure the time taken for a certain number of disc revolutions.
10. **Connecting Wires and Multimeters (for monitoring voltages and currents).**

**Circuit Diagram for Phantom Loading:**

```
                                      +----------------+
                                      | Variable       |
                                      | Voltage Source |
                                      | (Potential     |
                                      |  Circuit)      |
                                      +--------+-------+
                                               | Vp
                                               |
                                               o-------o
                                               |       |
                                  Potential    |       |
                                  Coil of      |       |  Potential
                                  Energy Meter |       |  Coil of
                                               |       |  Standard
                                               |       |  Wattmeter
                                               |       |
                                               o-------o
                                               |
                                               |
                                      +--------+-------+
                                      | Variable       |
                                      | Voltage Source |
                                      | (Current       |
                                      |  Circuit)      |
                                      +--------+-------+
                                               | Vc
                                               |
                                               o-------o
                                               |       |
                                  Current      |       |  Current
                                  Coil of      |       |  Coil of
                                  Energy Meter |       |  Standard
                                               |       |  Wattmeter
                                               |       |
                                               o-------o
                                               |
                                               |
                                           (Load)
                                          R, L, C
                                          (PF control)
```

**Explanation of Circuit:**

*   The **potential coil (P)** of the energy meter and the **potential coil (P)** of the standard wattmeter are connected in parallel across a variable voltage source. This source sets the operating voltage for the meter.
*   The **current coil (A)** of the energy meter and the **current coil (A)** of the standard wattmeter are connected in series with the **load**.
*   The **load** is designed to allow for the simulation of different power factors (unity, lagging, leading).
*   In phantom loading, the **voltage for the potential circuit** and the **voltage for the current circuit** are supplied from **separate sources**. This is the key to phantom loading.
    *   The **potential circuit voltage** (Vp) is typically set to the rated voltage of the energy meter (e.g., 230V).
    *   The **current circuit voltage** (Vc) is supplied from a separate source and is used to drive current through the current coil of the energy meter and the current coil of the standard wattmeter, and through the load. The magnitude of this voltage (Vc) is adjusted to set the desired load current.
*   The **load** itself is connected in series with the current coils. While the load consumes real power, the primary purpose in phantom loading is to create the necessary phase shift for testing at different power factors. The actual power consumed by the load is measured by the standard wattmeter.

---

### 6. Calibration Conditions (Minimum 3)

The calibration is typically performed at various load currents and power factors to check the meter's accuracy across its operating range. For this experiment, we will focus on different power factors at a specific load current (e.g., rated current).

**Condition 1: Unity Power Factor (PF = 1)**

*   **Load:** Purely resistive load.
*   **Procedure:**
    1.  Set the voltage source for the potential circuit to the rated voltage of the energy meter (e.g., 230V).
    2.  Set the voltage source for the current circuit such that it drives the rated current through the current coils and the resistive load (e.g., 5A).
    3.  Measure the power ($P_{true}$) using the standard wattmeter.
    4.  Start the timer and count the number of revolutions ($N$) of the energy meter disc over a specific time interval ($t$).
    5.  Calculate the energy registered by the energy meter ($E_{meter}$).
    6.  Calculate the actual energy consumed ($E_{true}$).
    7.  Calculate the percentage error.
*   **Formula for $E_{meter}$:**
    If the disc has a constant of $K$ revolutions per kWh (e.g., 1600 rev/kWh), then:
    $E_{meter} = N / K$ (in kWh)
*   **Formula for $E_{true}$:**
    $E_{true} = P_{true} \times t$ (in kWs or kWh, depending on units of $P_{true}$ and $t$)

**Condition 2: Lagging Power Factor (e.g., PF = 0.5 Lag)**

*   **Load:** A combination of resistive and inductive load.
*   **Procedure:**
    1.  Set the voltage source for the potential circuit to the rated voltage (e.g., 230V).
    2.  Set the voltage source for the current circuit to drive the rated current through the series combination of resistance and inductance.
    3.  Measure the true power ($P_{true}$) using the standard wattmeter. Note that at lagging PF, $P_{true} = V \times I \times 0.5$.
    4.  Start the timer and count the number of revolutions ($N$) of the energy meter disc over a specific time interval ($t$).
    5.  Calculate $E_{meter}$ and $E_{true}$.
    6.  Calculate the percentage error.

**Condition 3: Leading Power Factor (e.g., PF = 0.5 Lead)**

*   **Load:** A combination of resistive and capacitive load.
*   **Procedure:**
    1.  Set the voltage source for the potential circuit to the rated voltage (e.g., 230V).
    2.  Set the voltage source for the current circuit to drive the rated current through the series combination of resistance and capacitance.
    3.  Measure the true power ($P_{true}$) using the standard wattmeter. Note that at leading PF, $P_{true} = V \times I \times 0.5$.
    4.  Start the timer and count the number of revolutions ($N$) of the energy meter disc over a specific time interval ($t$).
    5.  Calculate $E_{meter}$ and $E_{true}$.
    6.  Calculate the percentage error.

**Other possible conditions:**

*   **Different Load Currents:** For instance, half the rated current at unity PF, or full rated current at unity PF.
*   **Low Power Factor:** Testing at very low power factors (e.g., 0.2 Lag or Lead) is crucial for checking performance under extreme conditions.

---

### 7. Calculations and Error Analysis

For each condition, the following calculations are performed:

1.  **True Power ($P_{true}$):** Read directly from the standard wattmeter.
    $P_{true} = V_{measured} \times I_{measured} \times PF_{measured}$ (if PF is also measured)
    Or $P_{true}$ as indicated by the standard wattmeter.

2.  **Energy Registered by Meter ($E_{meter}$):**
    $E_{meter} = (N / K)$ kWh
    where $N$ is the number of revolutions counted and $K$ is the constant of the energy meter (rev/kWh).

3.  **Actual Energy Consumed ($E_{true}$):**
    $E_{true} = P_{true} \times (t / 3600)$ kWh
    where $P_{true}$ is in Watts and $t$ is in seconds.
    Alternatively, if $P_{true}$ is in kW and $t$ is in hours:
    $E_{true} = P_{true} \times t$ kWh

4.  **Percentage Error:**
    Percentage Error = $(E_{meter} - E_{true}) / E_{true} \times 100\%$

    *   **Positive Error:** Meter is fast.
    *   **Negative Error:** Meter is slow.

**Example Calculation:**

Suppose the energy meter has a constant $K = 1600$ rev/kWh.
At unity PF, rated current (5A), rated voltage (230V):
True Power measured by standard wattmeter = 1000 W (1 kW)
Time taken for 10 revolutions ($N$) = 1 minute (60 seconds)

*   $E_{meter} = N / K = 10 / 1600$ kWh = 0.00625 kWh
*   $E_{true} = P_{true} \times (t / 3600) = 1000 \text{ W} \times (60 \text{ s} / 3600 \text{ s/h}) = 1000 \times (1/60)$ Wh = 16.67 Wh = 0.01667 kWh
    *Correction: $E_{true} = P_{true} \times t = 1 \text{ kW} \times (60/3600) \text{ h} = 1 \times (1/60) \text{ kWh} \approx 0.01667 \text{ kWh}$*

    Let's re-calculate to match typical scenarios. If the load is 1 kW, for the meter to register a significant number of revolutions, it would take some time.

    Let's assume the experiment is designed such that the number of revolutions is manageable within a reasonable time.
    If the meter registers 10 revolutions, and the true power is 1kW, then the true energy consumed in, say, 1 minute (1/60 hour) is:
    $E_{true} = 1 \text{ kW} \times (1/60) \text{ h} = 1/60 \text{ kWh} \approx 0.01667 \text{ kWh}$

    Now, let's use the meter's constant to find how much energy the meter *thinks* it has registered from its revolutions.
    If $N = 10$ revolutions are observed, and $K = 1600$ rev/kWh, then the energy registered by the meter is:
    $E_{meter} = N / K = 10 / 1600 = 0.00625 \text{ kWh}$.

    This example shows a discrepancy in how $E_{meter}$ and $E_{true}$ are derived. A more practical approach:
    Measure the time taken for a specific number of revolutions, say $N_1$.
    Calculate the true power $P_{true}$ for that load condition.
    The energy registered by the meter is $E_{meter} = N_1 / K$.
    The time taken for these $N_1$ revolutions is $t_1$.
    The true energy consumed during this time $t_1$ is $E_{true} = P_{true} \times (t_1 / 3600)$ if $P_{true}$ is in Watts and $t_1$ in seconds.

    Let's refine the example:
    Load: 1 kW, PF = 1
    Time to complete $N_1 = 100$ revolutions = 2 minutes = 120 seconds.
    $K = 1600$ rev/kWh

    *   $E_{meter} = N_1 / K = 100 / 1600 = 1/16 = 0.0625 \text{ kWh}$
    *   $E_{true} = P_{true} \times (t_1 / 3600) = 1000 \text{ W} \times (120 \text{ s} / 3600 \text{ s/h}) = 1000 \times (1/30) \text{ Wh} = 1000/30 \text{ Wh} \approx 33.33 \text{ Wh} = 0.03333 \text{ kWh}$

    *This still seems off. Let's check the basic relationship:*
    Speed of disc in RPM = $(P_{true} \times K) / 60$ (if $P_{true}$ is in kW)
    Speed of disc in rev/sec = $(P_{true} \times K) / 3600$ (if $P_{true}$ is in Watts)

    Using the previous example: $P_{true} = 1000$ W, $K = 1600$ rev/kWh
    Speed = $(1000 \times 1600) / 3600$ rev/sec = $1600000 / 3600$ rev/sec $\approx 444.4$ rev/sec.
    This is extremely high. The constant $K$ is typically chosen such that at rated load, the disc speed is reasonable.

    Let's assume a more realistic scenario for demonstration:
    Rated Load = 230V, 5A, PF=1 (Power = 230V * 5A * 1 = 1150 W = 1.15 kW)
    Energy meter constant $K = 1600$ rev/kWh.

    **Scenario:** Test at 50% of rated load, PF = 1.
    $P_{true} = 0.5 \times 1.15 \text{ kW} = 0.575 \text{ kW} = 575 \text{ W}$.

    Speed of disc in rev/sec = $(P_{true} \times K) / 3600$
    Speed = $(575 \times 1600) / 3600$ rev/sec = $920000 / 3600$ rev/sec $\approx 255.5$ rev/sec. Still very high.

    **Let's reconsider the role of $K$ and typical readings:**
    The energy meter's display (dial or digital) is proportional to the number of revolutions.
    For calibration, we compare the number of revolutions with the true energy consumed.

    **Revised Example Calculation Approach:**

    1.  Set up the load for a specific condition (e.g., 230V, 5A, PF=0.5 Lag).
    2.  Measure the true power ($P_{true}$) using the standard wattmeter.
    3.  Start the timer and count the number of disc revolutions ($N$) over a measured time interval ($t$).

    Let's say:
    $P_{true} = 600$ W
    $t = 2$ minutes = 120 seconds
    $N = 30$ revolutions
    $K = 1600$ rev/kWh

    *   **Energy registered by the meter ($E_{meter}$):**
        $E_{meter} = N / K = 30 / 1600 = 0.01875 \text{ kWh}$

    *   **True energy consumed ($E_{true}$):**
        $E_{true} = P_{true} \times (t / 3600) = 600 \text{ W} \times (120 \text{ s} / 3600 \text{ s/h})$
        $E_{true} = 600 \times (1/30) \text{ Wh} = 20 \text{ Wh} = 0.020 \text{ kWh}$

    *   **Percentage Error:**
        Error = $(E_{meter} - E_{true}) / E_{true} \times 100\%$
        Error = $(0.01875 - 0.020) / 0.020 \times 100\%$
        Error = $(-0.00125) / 0.020 \times 100\%$
        Error = $-0.0625 \times 100\% = -6.25\%$

    This means the meter is slow by 6.25%.

    **Important Note on Energy Meter Constants:**
    The "revolutions per kWh" constant ($K$) is crucial. It is usually printed on the energy meter's nameplate. If it's not available, you might need to perform a preliminary test at a known load to determine it.

---

### 8. Aligning with Course Outcomes (COs)

*   **CO1: Analyse voltage current phasor relations of RLC circuits (Knowledge Level: K3)**
    *   This is implicitly covered as the experiment involves setting up loads with different impedance characteristics (R, L, C) to achieve various power factors. Understanding the phase relationships is key to achieving these power factors.

*   **CO3: Measure power in single and three phase circuits by various methods (Knowledge Level: K3)**
    *   This is directly addressed by using a **standard wattmeter** to measure the true power consumed by the load. This involves accurate power measurement.

*   **CO4: Determine the calibration characteristics of various meters used in electrical systems (Knowledge Level: K3)**
    *   This is the **primary objective** of the experiment. We are determining the calibration characteristics (accuracy) of the 1-phase energy meter at different operating conditions (power factors).

---

### 9. Important Points to Remember

*   **Phantom Loading:** Always ensure the voltage and current circuits are supplied from **separate sources**. This is the defining characteristic of phantom loading and allows for independent control of voltage magnitude and phase angle.
*   **Meter Constant ($K$):** Obtain the "revolutions per kWh" constant from the energy meter's nameplate. This is essential for calculating the energy registered by the meter.
*   **Standard Instruments:** Use a high-accuracy standard wattmeter for true power measurement. Ensure all instruments are properly calibrated.
*   **Stable Conditions:** Maintain stable voltage and current throughout the measurement for each condition.
*   **Time Measurement:** Accurate timing is critical for calculating the true energy consumed.
*   **Multiple Readings:** Take multiple readings for each condition and average them to reduce random errors.
*   **Observation Time:** Ensure the time for observation ($t$) is long enough to count a reasonable number of disc revolutions ($N$) for better accuracy.
*   **Power Factor Calculation:** If the load is not precisely known to achieve a specific PF, measure Voltage, Current, and Power using the standard wattmeter to calculate the actual PF: $PF = P_{true} / (V \times I)$.

---

### 10. Practice Questions and Answers

**Question 1:** What is the principle behind the working of an induction type energy meter?
**Answer:** It works on the principle of electromagnetic induction, where rotating magnetic fields produced by the potential and current coils induce eddy currents in an aluminum disc. The interaction between these fields and eddy currents creates a torque that rotates the disc. A braking magnet provides a counter-torque proportional to the speed, ensuring the disc speed is proportional to the power.

**Question 2:** Why is phantom loading used for energy meter calibration?
**Answer:** Phantom loading allows testing at various power factors without consuming significant real power. This is achieved by supplying the voltage and current circuits from separate sources, enabling independent control over voltage magnitude and phase angle relative to the current.

**Question 3:** An energy meter has a constant of 1200 rev/kWh. If its disc rotates 60 times in 50 seconds while connected to a load of 240V, 10A at a power factor of 0.8 lagging, what is the percentage error of the meter?
**Solution:**
*   **True Power ($P_{true}$):**
    $P_{true} = V \times I \times PF = 240 \text{ V} \times 10 \text{ A} \times 0.8 = 1920 \text{ W} = 1.92 \text{ kW}$
*   **True Energy Consumed ($E_{true}$):**
    Time $t = 50$ seconds.
    $E_{true} = P_{true} \times (t / 3600) = 1.92 \text{ kW} \times (50 \text{ s} / 3600 \text{ s/h})$
    $E_{true} = 1.92 \times (50/3600) \text{ kWh} = 1.92 \times (1/72) \text{ kWh} \approx 0.02667 \text{ kWh}$
*   **Energy Registered by Meter ($E_{meter}$):**
    Number of revolutions $N = 60$ rev.
    Meter constant $K = 1200$ rev/kWh.
    $E_{meter} = N / K = 60 \text{ rev} / 1200 \text{ rev/kWh} = 0.05 \text{ kWh}$

    **Wait, there seems to be a mismatch.** The energy registered by the meter (0.05 kWh) is significantly higher than the true energy consumed (0.02667 kWh). This implies the meter is running very fast, or the number of revolutions counted is too high for the given time and power. Let's re-evaluate the relationship between power, constant, and speed.

    **Let's check the expected speed:**
    Speed in rev/sec = $(P_{true} \times K) / 3600$
    Speed = $(1920 \text{ W} \times 1200 \text{ rev/kWh}) / 3600 \text{ s}$
    Speed = $(2304000) / 3600$ rev/sec = 640 rev/sec.

    If the speed is 640 rev/sec, then in 50 seconds, the number of revolutions should be:
    $N = Speed \times t = 640 \text{ rev/sec} \times 50 \text{ sec} = 32000$ revolutions.

    The question states $N=60$ revolutions. This indicates that the load power or the meter constant in the question might be designed for a much slower rotation. This is a common issue in exam questions if not carefully constructed.

    **Let's assume the question meant "the meter's reading increased by an amount corresponding to 60 revolutions".** This means the counter advanced by an amount equivalent to 60 revolutions.

    Let's recalculate the error using the provided values directly:
    *   $E_{meter} = 60 \text{ rev} / 1200 \text{ rev/kWh} = 0.05 \text{ kWh}$
    *   $E_{true} = 0.02667 \text{ kWh}$

    *   **Percentage Error:**
        Error = $(E_{meter} - E_{true}) / E_{true} \times 100\%$
        Error = $(0.05 - 0.02667) / 0.02667 \times 100\%$
        Error = $(0.02333) / 0.02667 \times 100\%$
        Error $\approx 0.875 \times 100\% = 87.5\%$

    This is an extremely high error, suggesting either the question parameters are unrealistic or the interpretation of "disc rotates 60 times" needs to align with the power and constant.

    **Alternative Interpretation:** What if the load condition was different such that the disc speed resulted in 60 revolutions in 50 seconds?
    If $N = 60$ rev in $t = 50$ sec, then the average speed is $60/50 = 1.2$ rev/sec.
    Expected speed for 1.92kW load was 640 rev/sec. This is a huge discrepancy.

    **Let's assume the question intended a load that *would* produce 60 revolutions in 50 seconds.**
    If the actual speed is 1.2 rev/sec, what is the true power?
    True Speed (rev/sec) = $(P_{true} \times K) / 3600$
    $1.2 = (P_{true} \times 1200) / 3600$
    $P_{true} = (1.2 \times 3600) / 1200 = (1.2 \times 3) = 3.6$ Watts.

    So, if the actual power was 3.6 W, the meter would rotate 60 times in 50 seconds.
    If the actual power was 3.6 W (0.0036 kW), the true energy is $0.0036 \text{ kW} \times (50/3600) \text{ h} \approx 0.00005 \text{ kWh}$.
    The meter registered $E_{meter} = 0.05 \text{ kWh}$.
    Error = $(0.05 - 0.00005) / 0.00005 \times 100\% = (0.04995) / 0.00005 \times 100\% \approx 99900 \%$.

    **Conclusion for Question 3:** The parameters given are likely inconsistent. In a real lab, we'd set the load and then measure time/revolutions. For a problem, assume the measured values of V, I, PF, and revolutions are correct for *some* load and calculate the error based on those measurements. The discrepancy points to the importance of realistic parameters.

    **Let's try to find consistent parameters for the same question:**
    If $P_{true} = 1920$ W, $K = 1200$ rev/kWh, the speed is 640 rev/sec.
    In, say, 10 seconds, revolutions would be $640 \times 10 = 6400$ rev.
    $E_{meter} = 6400 / 1200 = 64/12 = 16/3 \approx 5.33 \text{ kWh}$.
    $E_{true} = 1.92 \text{ kW} \times (10/3600) \text{ h} = 1.92 / 360 \approx 0.00533 \text{ kWh}$.
    This again shows a huge discrepancy. The energy meter is designed for much larger energy values.

    **A better way to frame the question:**
    An energy meter with a constant of 1200 rev/kWh is tested at a load of 240V, 10A, PF=0.8 lagging. The meter registers 100 revolutions in 30 seconds. Calculate the percentage error.

    *   **True Power ($P_{true}$):** $240 \times 10 \times 0.8 = 1920$ W = 1.92 kW
    *   **True Energy Consumed ($E_{true}$):** $1.92 \text{ kW} \times (30/3600) \text{ h} = 1.92 / 120 \text{ kWh} = 0.016 \text{ kWh}$
    *   **Energy Registered by Meter ($E_{meter}$):** $100 \text{ rev} / 1200 \text{ rev/kWh} = 100/1200 = 1/12 \text{ kWh} \approx 0.0833 \text{ kWh}$

    *   **Percentage Error:**
        Error = $(E_{meter} - E_{true}) / E_{true} \times 100\%$
        Error = $(0.0833 - 0.016) / 0.016 \times 100\%$
        Error = $(0.0673) / 0.016 \times 100\%$
        Error $\approx 4.206 \times 100\% = 420.6\%$

    This still indicates a problem with the numbers used for a typical scenario. Let's assume the **registered energy** is what is derived from the revolutions.

    **Let's use the definition of error more directly:**
    The meter's registration rate is $N/t$ rev/sec.
    The true power is $P_{true}$.
    The speed of rotation corresponding to true power is $S_{true} = (P_{true} \times K) / 3600$ rev/sec.
    The error is related to the difference in these speeds.

    **A more consistent approach for the original question (assuming there's a way to get 60 rev in 50 sec):**
    If we accept the measurement of 60 revolutions in 50 seconds as correct for the tested conditions (240V, 10A, 0.8 PF), then:
    *   $E_{meter} = 60 / 1200 = 0.05$ kWh
    *   $E_{true} = 1.92 \text{ kW} \times (50/3600) \text{ h} = 1.92 / 72 \text{ kWh} \approx 0.02667$ kWh
    *   Percentage Error = $((0.05 - 0.02667) / 0.02667) \times 100\% \approx 87.5\%$ (Meter is fast)

**Question 4:** At unity power factor, is the phase angle between the voltage coil flux and the current coil flux approximately 90 degrees or 0 degrees?
**Answer:** At unity power factor, the voltage and current are in phase. To produce maximum torque proportional to power ($VI \cos \phi$), the flux due to the potential coil should lag the voltage by approximately 90 degrees, and the flux due to the current coil should be in phase with the current. When voltage and current are in phase (unity PF), the phase angle between the fluxes would be approximately 90 degrees to produce maximum torque. This is achieved by the design of the coils and the phase-shifting components within the meter.

**Question 5:** What would be the typical percentage error expected at rated load and unity power factor for a class 1 energy meter?
**Answer:** A Class 1 energy meter has an accuracy of $\pm 1\%$. Therefore, the percentage error at rated load and unity power factor should typically be within $\pm 1\%$.

---
