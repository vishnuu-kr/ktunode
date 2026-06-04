---
title: "Calibration of 3-phase Energy meter using standard wattmeter"
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 11: Calibration of 3"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35cf7"
status: "completed"
scrapedAt: "2026-05-23T16:12:00.555Z"
---
# CIRCUITS AND MEASUREMENTS LAB - Module 11: Calibration of 3-Phase Energy Meter using Standard Wattmeter

## Introduction to Calibration

Calibration is the process of comparing a measuring instrument's readings with those of a known, accurate standard and making necessary adjustments to ensure the instrument's accuracy.

### Key Concepts and Definitions:

*   **Accuracy:** The closeness of agreement between a measured value and the true value.
*   **Precision:** The degree of reproducibility of measurements.
*   **Standard Instrument:** An instrument whose accuracy is known and is used as a reference for calibration. In this experiment, a **standard wattmeter** is used as the reference.
*   **Calibration Error:** The difference between the indicated value of the instrument under test (3-phase energy meter) and the true value (measured by the standard wattmeter).
*   **Percentage Error:** Calibration Error expressed as a percentage of the true value or the full-scale value.

## Objective of the Experiment

The primary objective of this experiment is to **calibrate a 3-phase energy meter** by comparing its energy consumption indication with the power measured by a standard 3-phase wattmeter. This allows us to determine if the energy meter is under- or over-registering the actual energy consumed.

## Relevant Course Outcomes

This experiment directly contributes to the following course outcomes:

*   **CO3: Measure power in single and three phase circuits by various methods (Knowledge Level: K3)** - We will be measuring 3-phase power using a standard wattmeter.
*   **CO4: Determine the calibration characteristics of various meters used in electrical systems (Knowledge Level: K3)** - This is the core outcome addressed, as we are calibrating an energy meter.

## Theoretical Background

### 3-Phase Power Measurement

In a balanced 3-phase system, the total power can be measured using the **two-wattmeter method**. This method uses two wattmeters, and the sum of their readings gives the total 3-phase power.

*   **Two-Wattmeter Method:**
    *   In a balanced 3-phase system, the total power $P_{total}$ is given by:
        $P_{total} = P_1 + P_2$
        where $P_1$ and $P_2$ are the readings of the two wattmeters.
    *   The connections for the two-wattmeter method are crucial. Each wattmeter measures the power in one phase and the algebraic sum of the currents in the other two phases.
    *   For a balanced star-connected load:
        $P_1 = V_{ab} I_a \cos(\theta - 30^\circ)$
        $P_2 = V_{cb} I_c \cos(\theta + 30^\circ)$
        where $V_{ab}$ and $V_{cb}$ are phase voltages, $I_a$ and $I_c$ are phase currents, and $\theta$ is the phase angle of the load.
    *   The total power for a balanced system is also given by $P_{total} = \sqrt{3} V_L I_L \cos \phi$, where $V_L$ is the line voltage, $I_L$ is the line current, and $\phi$ is the phase angle between line voltage and line current.

### Energy Meter Operation

An energy meter, often a **induction type energy meter**, measures electrical energy consumed over a period of time. It operates on the principle of the interaction between two magnetic fields produced by the current and voltage coils, and their effect on a rotating disc.

*   **Induction Type Energy Meter:**
    *   The speed of rotation of the disc is proportional to the power consumed by the load.
    *   The number of revolutions of the disc is proportional to the total energy consumed.
    *   The energy meter has a gearing mechanism to convert disc revolutions into energy units (e.g., kWh).
    *   The calibration involves checking the accuracy of this conversion process.

### Calibration Principle

The calibration process compares the energy registered by the energy meter over a specific time interval with the actual power measured by the standard wattmeter over the same interval.

*   **Energy Measured by Energy Meter:**
    $E_{meter} = (N_{meter} / K_{EM}) \times T$
    where $N_{meter}$ is the number of revolutions of the energy meter disc, $K_{EM}$ is the disc constant (revolutions per kWh), and $T$ is the time in hours.

*   **Actual Energy Consumed:**
    $E_{actual} = P_{wattmeter} \times T$
    where $P_{wattmeter}$ is the total power measured by the standard wattmeter (in kW) and $T$ is the time in hours.

*   **Calibration Error:**
    $Error = E_{meter} - E_{actual}$

*   **Percentage Error:**
    $Percentage \ Error = \frac{E_{meter} - E_{actual}}{E_{actual}} \times 100\%$

Alternatively, and often more practically in a lab setting, we can calculate the error based on the speed of the disc. If the energy meter is accurate, its disc should rotate at a speed proportional to the power.

*   **Disc Speed (Revolutions per second):**
    $N_{sec} = N_{meter} / T_{sec}$
    where $T_{sec}$ is the time in seconds.

*   **Power Indicated by Energy Meter (in Watts):**
    $P_{meter} = (N_{sec} \times K_{EM} \times 3600) / 1000$  (if $K_{EM}$ is in rev/kWh)
    Or, more directly:
    $P_{meter} = (N_{sec} / K_{EM}) \times 3600$  (if $K_{EM}$ is in rev/kWh) - This is incorrect.
    Let's correct this. If $K_{EM}$ is in revolutions per kWh, then to get power from disc speed:
    Power (kW) = (Disc Revolutions / Time in hours) / $K_{EM}$
    Power (Watts) = (Disc Revolutions / Time in seconds) * (3600 / Time in seconds) / $K_{EM}$ * 1000 - This is also getting complicated.

    A simpler approach:
    If the energy meter is accurate, then Energy measured by meter = Actual Energy.
    $P_{meter} \times T_{hours} = P_{actual} \times T_{hours}$
    This implies $P_{meter} = P_{actual}$.

    Let's consider the disc speed:
    The disc speed is proportional to the power.
    $N_{meter} \propto P_{actual}$
    $N_{meter} = k \times P_{actual} \times T$
    Where $k$ is a proportionality constant.
    The energy meter's $K_{EM}$ is defined as revolutions per kWh.
    So, $N_{meter} = K_{EM} \times E_{actual} = K_{EM} \times (P_{actual} \times T_{hours})$.
    Thus, $k = K_{EM} / 1000$ (if $P_{actual}$ is in Watts and $T$ in hours).

    **The practical approach for calibration in the lab is to measure the time it takes for the energy meter disc to complete a certain number of revolutions (e.g., 10 revolutions) for a given load.**

    Let:
    *   $N_{fixed}$ = Fixed number of revolutions of the energy meter disc (e.g., 10, 20).
    *   $T_{measured}$ = Time taken for $N_{fixed}$ revolutions (in seconds).
    *   $P_{actual}$ = Actual power consumed by the load (measured by standard wattmeter in Watts).
    *   $K_{EM}$ = Disc constant of the energy meter (in revolutions per kWh).

    **Energy registered by the energy meter for $N_{fixed}$ revolutions:**
    $E_{meter} = (N_{fixed} / K_{EM}) \text{ kWh}$

    **Actual energy consumed during $T_{measured}$ seconds:**
    $E_{actual} = (P_{actual} \times T_{measured}) / 3600 \text{ kWh}$

    **Percentage Error:**
    $Percentage \ Error = \frac{E_{meter} - E_{actual}}{E_{actual}} \times 100\%$
    $Percentage \ Error = \frac{\frac{N_{fixed}}{K_{EM}} - \frac{P_{actual} \times T_{measured}}{3600}}{\frac{P_{actual} \times T_{measured}}{3600}} \times 100\%$
    $Percentage \ Error = \left( \frac{N_{fixed} \times 3600}{K_{EM} \times P_{actual} \times T_{measured}} - 1 \right) \times 100\%$

    This formula directly relates the measured quantities ($N_{fixed}$, $T_{measured}$, $P_{actual}$) and the known constant ($K_{EM}$) to the percentage error.

## Required Apparatus

1.  **3-Phase Energy Meter (to be calibrated):**
2.  **Standard 3-Phase Wattmeter:** High accuracy wattmeter for accurate power measurement.
3.  **3-Phase AC Supply:** Variable voltage and frequency is desirable but not always available.
4.  **3-Phase Load:** Resistive load bank, preferably with different impedance settings to test at various power factors.
5.  **Connecting Wires and Cables.**
6.  **Stopwatch:** For precise time measurement.
7.  **Ammeter (3-phase):** To measure line currents.
8.  **Voltmeter (3-phase):** To measure line voltages.

## Circuit Diagram

A typical circuit diagram for calibrating a 3-phase energy meter using the two-wattmeter method would involve:

*   The 3-phase supply connected to the input terminals of the energy meter and the wattmeter.
*   The output terminals of the energy meter connected to the 3-phase load.
*   The wattmeter's voltage coils connected across appropriate lines and the current coils connected in series with the lines supplying the load.
*   The load connected to the energy meter output.

**(Refer to textbooks like Sawhney or Gupta for detailed circuit diagrams showing connections of voltage coils, current coils of both wattmeters, energy meter, and the load. The diagram typically shows a balanced 3-phase load.)**

**Key connections for two-wattmeter method:**
*   **Wattmeter 1 (W1):** Voltage coil across L1-L2, Current coil in L1.
*   **Wattmeter 2 (W2):** Voltage coil across L3-L2, Current coil in L3.
*   The neutral is usually not connected for a balanced 3-phase load measurement with two wattmeters.
*   The energy meter is connected in series with the supply and the load, acting as a load for the supply and supplying the load.

## Procedure

1.  **Check Connections:** Carefully inspect all connections to ensure they are correct and secure, following the circuit diagram. Ensure proper polarity for wattmeters.
2.  **Note Energy Meter Constant:** Locate and record the disc constant ($K_{EM}$) of the energy meter, usually printed on its dial (e.g., '600 rev/kWh').
3.  **Set Load:** Connect the 3-phase load and set it to a specific resistance value (e.g., to draw a certain current or power at the supply voltage).
4.  **Energize Supply:** Switch on the 3-phase AC supply.
5.  **Adjust Voltage:** Adjust the supply voltage to its rated value if a variable supply is available.
6.  **Measure Power:**
    *   Note the readings of the standard 3-phase wattmeter ($P_1$ and $P_2$).
    *   Calculate the total actual power consumed by the load: $P_{actual} = P_1 + P_2$ (in Watts).
    *   If 3-phase ammeters and voltmeters are used, note the line voltages ($V_L$) and line currents ($I_L$). For a balanced load, $P_{actual} = \sqrt{3} V_L I_L \cos \phi$.
7.  **Measure Disc Revolutions:**
    *   Start the stopwatch precisely when a prominent mark on the energy meter disc passes a fixed reference point.
    *   Observe the energy meter disc and count a predetermined number of revolutions, say $N_{fixed}$ (e.g., 10 or 20 revolutions).
    *   Stop the stopwatch precisely when the same mark on the disc completes the $N_{fixed}$th revolution.
    *   Record the time taken, $T_{measured}$ (in seconds).
8.  **Calculate Percentage Error:** Using the formula derived in the theoretical background:
    $Percentage \ Error = \left( \frac{N_{fixed} \times 3600}{K_{EM} \times P_{actual} \times T_{measured}} - 1 \right) \times 100\%$
    where $P_{actual}$ is in Watts and $K_{EM}$ is in rev/kWh.
9.  **Repeat for Different Loads:** Vary the load resistance to draw different amounts of power (e.g., 25%, 50%, 75%, 100% of rated load) and repeat steps 3 to 8 for each load.
10. **Record Data:** Tabulate all readings systematically.

## Data Table

| Sr. No. | Load Setting | Line Voltage ($V_L$) (Volts) | Line Current ($I_L$) (Amps) | Wattmeter Reading $P_1$ (Watts) | Wattmeter Reading $P_2$ (Watts) | Total Actual Power $P_{actual} = P_1 + P_2$ (Watts) | Fixed Revolutions ($N_{fixed}$) | Time for $N_{fixed}$ Revolutions ($T_{measured}$) (Seconds) | $K_{EM}$ (rev/kWh) | Calculated Percentage Error (%) |
| :------ | :----------- | :--------------------------- | :-------------------------- | :-------------------------------- | :-------------------------------- | :--------------------------------------------------- | :---------------------------- | :------------------------------------------------------------ | :----------------- | :-------------------------- |
| 1       | Low          |                              |                             |                                   |                                   |                                                      |                               |                                                               |                    |                             |
| 2       | Medium       |                              |                             |                                   |                                   |                                                      |                               |                                                               |                    |                             |
| 3       | High         |                              |                             |                                   |                                   |                                                      |                               |                                                               |                    |                             |
| ...     | ...          |                              |                             |                                   |                                   |                                                      |                               |                                                               |                    |                             |

## Calculations

For each load setting:

1.  **Actual Power ($P_{actual}$):** $P_{actual} = P_1 + P_2$ (Watts).
2.  **Percentage Error:**
    $Percentage \ Error = \left( \frac{N_{fixed} \times 3600}{K_{EM} \times P_{actual} \times T_{measured}} - 1 \right) \times 100\%$

## Analysis and Discussion

*   **Plot:** Plot a graph of Percentage Error vs. Actual Power (Watts).
*   **Interpretation:**
    *   Analyze the shape of the error curve. Does the error vary with the load?
    *   Is the energy meter under-registering or over-registering at different loads?
    *   Are the errors within the permissible limits specified by standards (e.g., IS standards, IEC standards)?
*   **Sources of Error:** Discuss potential sources of error in the experiment, such as:
    *   Inaccuracy of the standard wattmeter.
    *   Inaccuracy of the stopwatch.
    *   Friction in the energy meter disc mechanism.
    *   Variation in supply voltage or frequency.
    *   Inherent errors in the energy meter design (e.g., starting torque, creep).
    *   Connection errors.
    *   Temperature variations affecting instrument readings.
*   **Correction:** If the errors are significant, discuss how the energy meter could be adjusted or corrected. This usually involves adjusting the position of the brake magnet in an induction-type energy meter. Moving the brake magnet closer to the center increases the speed (and over-registers), while moving it away decreases the speed (and under-registers).

## Important Points to Remember

*   **Accuracy of Standard:** The accuracy of the calibration depends heavily on the accuracy of the standard wattmeter used.
*   **Two-Wattmeter Method:** Ensure the two-wattmeter method is correctly applied for balanced 3-phase power measurement.
*   **Disc Constant ($K_{EM}$):** This is a crucial parameter. Always verify the correct value.
*   **Time Measurement:** Precise timing of the disc revolutions is vital. Use a good quality stopwatch and practice timing.
*   **Load Conditions:** Test the energy meter at various load conditions (power factor and magnitude) to determine its accuracy over its operating range.
*   **Starting Torque and Creep:** For induction type energy meters, check for starting torque (minimum load at which the disc starts rotating) and creep (disc rotating when no voltage is applied). These are also calibration aspects.
*   **Standard Specifications:** Refer to relevant Indian Standards (IS) or International Electrotechnical Commission (IEC) standards for acceptable error limits for energy meters.
