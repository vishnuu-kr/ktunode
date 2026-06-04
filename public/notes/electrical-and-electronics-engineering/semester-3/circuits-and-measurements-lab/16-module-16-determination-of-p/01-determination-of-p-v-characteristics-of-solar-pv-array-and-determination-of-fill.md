---
title: "Determination of P-V characteristics of solar PV array and determination of fill factor (study of partial shading may be included)."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 16: Determination of P"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d01"
status: "completed"
scrapedAt: "2026-05-23T16:12:04.322Z"
---
# CIRCUITS AND MEASUREMENTS LAB - Module 16: Determination of P

## Topic: Determination of P-V Characteristics of Solar PV Array and Determination of Fill Factor (Study of Partial Shading May Be Included)

### 1. Introduction to Solar Photovoltaic (PV) Arrays

Solar PV arrays are semiconductor devices that convert sunlight directly into electricity through the photovoltaic effect. They are composed of multiple solar cells connected in series and parallel to achieve desired voltage and current outputs. Understanding their electrical characteristics is crucial for efficient energy harvesting and system design.

**Key Concepts:**

*   **Photovoltaic Effect:** The process by which a photovoltaic cell produces electricity when exposed to light. Photons from sunlight strike the semiconductor material, exciting electrons and creating electron-hole pairs, which are then separated by an internal electric field to generate a current.
*   **Solar Cell:** The basic unit of a PV array.
*   **PV Module/Panel:** A collection of solar cells interconnected and encapsulated in a weather-resistant frame.
*   **PV Array:** A collection of PV modules connected in series and parallel to produce the desired electrical output.

### 2. P-V Characteristics of a Solar PV Array

The Power-Voltage (P-V) characteristic curve of a solar PV array illustrates the relationship between the electrical power output and the voltage across the array for a given set of operating conditions (irradiance and temperature).

**Key Concepts:**

*   **Voltage-Current (V-I) Characteristic:** This is the fundamental characteristic of a PV array, showing the relationship between voltage and current. The P-V curve is derived from the V-I curve using the relationship $P = V \times I$.
*   **Open-Circuit Voltage ($V_{oc}$):** The voltage across the PV array when no current is flowing (i.e., the circuit is open). This is the maximum voltage the array can produce.
*   **Short-Circuit Current ($I_{sc}$):** The current flowing through the PV array when the voltage across it is zero (i.e., the circuit is shorted). This is the maximum current the array can produce.
*   **Maximum Power Point (MPP):** The point on the P-V curve where the array delivers its maximum power output. This is the optimal operating point.
*   **Voltage at Maximum Power ($V_{mp}$):** The voltage at which the array produces its maximum power.
*   **Current at Maximum Power ($I_{mp}$):** The current at which the array produces its maximum power.
*   **Maximum Power ($P_{max}$):** The product of $V_{mp}$ and $I_{mp}$ ($P_{max} = V_{mp} \times I_{mp}$).

**Typical P-V Curve Shape:**

A typical P-V curve of a solar PV array under constant irradiance and temperature starts from zero power at zero voltage, increases to a maximum power point, and then decreases to zero power at $V_{oc}$ (where current is zero).

**Diagram:**

```
     ^ Power (P)
     |
     |       _._ Maximum Power Point (MPP)
     |      /   \
     |     /     \
     |    /       \
     |   /         \
     |  /           \
     | /             \
     +----------------------------> Voltage (V)
    0  V_mp      V_oc
```

### 3. Determination of Fill Factor (FF)

The Fill Factor (FF) is a crucial parameter that quantizes the "squareness" of the P-V characteristic. It represents how closely the actual power output of a PV cell/array approaches the ideal rectangular shape of the product of $V_{oc}$ and $I_{sc}$.

**Definition:**

The Fill Factor (FF) is defined as the ratio of the maximum power output ($P_{max}$) to the product of the open-circuit voltage ($V_{oc}$) and the short-circuit current ($I_{sc}$):

$$FF = \frac{P_{max}}{V_{oc} \times I_{sc}}$$

Alternatively, it can be expressed as:

$$FF = \frac{V_{mp} \times I_{mp}}{V_{oc} \times I_{sc}}$$

**Significance:**

*   A higher Fill Factor indicates a more efficient PV device, meaning it operates closer to its theoretical maximum power output.
*   Typical Fill Factors for silicon solar cells range from 0.7 to 0.85.
*   Factors affecting FF include series resistance, shunt resistance, ideality factor, and recombination losses within the solar cell.

### 4. Experimental Setup and Procedure for Determining P-V Characteristics and Fill Factor

**Objectives:**

*   To plot the V-I and P-V characteristic curves of a solar PV array under varying conditions.
*   To determine $V_{oc}$, $I_{sc}$, $V_{mp}$, $I_{mp}$, $P_{max}$, and Fill Factor.

**Required Equipment:**

*   **Solar PV Array:** A small, manageable PV panel or array for laboratory demonstration.
*   **Variable Load:** A rheostat or electronic load that can be adjusted to vary the resistance across the PV array.
*   **DC Ammeter:** To measure the current output of the PV array.
*   **DC Voltmeter:** To measure the voltage across the PV array.
*   **Light Source:** A controllable and consistent light source (e.g., a halogen lamp or a solar simulator) to provide irradiance to the PV array. If using natural sunlight, measurements should be taken during a period of stable irradiance.
*   **Irradiance Meter (Pyranometer):** To measure the intensity of the light incident on the PV array. (Optional but highly recommended for accurate analysis).
*   **Temperature Sensor:** To measure the temperature of the PV array. (Optional but recommended).
*   **Connecting Wires and Clips.**

**Procedure:**

1.  **Setup:**
    *   Connect the solar PV array to the variable load.
    *   Connect the DC ammeter in series with the PV array and the load.
    *   Connect the DC voltmeter in parallel across the PV array and the load.
    *   Position the light source to illuminate the PV array uniformly. Ensure the irradiance is constant throughout the experiment. If using natural sunlight, aim for a clear sky with minimal cloud cover.

2.  **Data Acquisition:**
    *   **Open Circuit Measurement:** With the load resistance set to maximum (effectively an open circuit), record the voltage ($V_{oc}$) and the current (which should be zero).
    *   **Varying Load:** Gradually decrease the resistance of the variable load. For each step of load resistance:
        *   Record the voltage ($V$) across the PV array using the voltmeter.
        *   Record the current ($I$) flowing through the PV array using the ammeter.
    *   **Short Circuit Measurement:** With the load resistance set to minimum (effectively a short circuit), record the current ($I_{sc}$) and the voltage (which should be zero).

3.  **Data Recording:** Organize the recorded data in a table:

    | Trial | Voltage (V) [Volts] | Current (I) [Amps] | Power (P = V x I) [Watts] |
    | :---- | :------------------ | :----------------- | :------------------------ |
    | 1     | $V_{oc}$            | 0                  | 0                         |
    | 2     | $V_2$               | $I_2$              | $P_2$                     |
    | 3     | $V_3$               | $I_3$              | $P_3$                     |
    | ...   | ...                 | ...                | ...                       |
    | n     | 0                   | $I_{sc}$           | 0                         |

4.  **Analysis:**
    *   **Plot V-I Characteristic:** Plot the recorded voltage (on the x-axis) against the current (on the y-axis).
    *   **Plot P-V Characteristic:** Plot the recorded voltage (on the x-axis) against the calculated power (on the y-axis).
    *   **Determine MPP:** From the P-V curve, identify the maximum power point ($P_{max}$) and the corresponding voltage ($V_{mp}$) and current ($I_{mp}$).
    *   **Calculate Fill Factor:** Using the recorded $V_{oc}$, $I_{sc}$, and the determined $P_{max}$ (or $V_{mp}$ and $I_{mp}$), calculate the Fill Factor using the formula:
        $$FF = \frac{P_{max}}{V_{oc} \times I_{sc}}$$

### 5. Factors Affecting PV Array Performance

*   **Irradiance:** Higher irradiance leads to higher current and power output.
*   **Temperature:** Increased temperature generally leads to a decrease in voltage and power output, although current might slightly increase. This is a significant factor to consider.
*   **Shading:** Partial shading of a PV array can drastically reduce its overall power output and can even lead to the formation of multiple local maximum power points on the P-V curve.
*   **Angle of Incidence:** The angle at which sunlight strikes the PV cells affects the amount of light absorbed.
*   **Dust and Soiling:** Accumulation of dust or dirt on the surface of the PV array reduces the amount of light reaching the cells.

### 6. Study of Partial Shading

**Impact of Partial Shading:**

When a portion of a PV array is shaded, the shaded cells experience significantly reduced current. Since cells are typically connected in series within a module, the current in the entire series string is limited by the weakest link – the shaded cell(s). This can lead to:

*   **Reduced Overall Power Output:** The total power output of the array drops significantly.
*   **Increased Series Resistance Effects:** The shaded cells can act like resistors, dissipating power.
*   **Hot Spots:** In severe cases, the shaded cells can become reverse-biased and dissipate more power than they generate, leading to overheating and potential damage (hot spots). This is why bypass diodes are incorporated into PV modules.

**Experimental Study of Partial Shading:**

1.  **Procedure:**
    *   Perform the experiment as described in Section 4 under normal, uniform illumination.
    *   Introduce partial shading to a section of the PV array using an opaque object (e.g., cardboard, cloth). Ensure the shading is consistent.
    *   Repeat the data acquisition process (varying the load) under partial shading conditions.

2.  **Analysis:**
    *   Plot the V-I and P-V characteristic curves under partial shading.
    *   Compare these curves with the curves obtained under uniform illumination.
    *   **Observation:** You will likely observe that the P-V curve under partial shading might have a different shape, potentially exhibiting multiple peaks (local maximum power points). This is because the behavior of the array is no longer dictated by a single operating point. The global maximum power point might be significantly lower.

**Example Scenario:**

Consider a string of four identical solar cells, each capable of producing 1A at 0.5V under 1000 W/m² irradiance.

*   **No Shading:** The array (4 cells in series) would have $V_{oc} \approx 4 \times 0.5 = 2V$ and $I_{sc} \approx 1A$. $P_{max}$ would be around $1.8V \times 0.9A = 1.62W$. FF would be high.
*   **Partial Shading:** If one cell is shaded, its current output might drop to 0.2A. The entire string is now limited to 0.2A. The $V_{oc}$ of the string would still be around 2V, but $I_{sc}$ would be limited to 0.2A. The $P_{max}$ would be significantly lower, and the shape of the P-V curve would change.

**Bypass Diodes:**

*   PV modules often incorporate bypass diodes. These diodes are connected in parallel across groups of series-connected cells.
*   When a group of cells is shaded and starts to experience reverse voltage, the bypass diode in parallel with that group becomes forward-biased and conducts.
*   This effectively bypasses the shaded group, allowing current to flow through the diode instead of the shaded cells, thereby preventing significant power loss for the entire string and mitigating the risk of hot spots.

### 7. Laboratory Relevance and Course Outcomes Alignment

This experiment directly relates to several course outcomes:

*   **CO1: Analyse voltage current phasor relations of RLC circuits (Knowledge Level: K3):** While this experiment deals with DC circuits, understanding V-I characteristics is a fundamental building block for analyzing AC circuits and power. The concept of current and voltage dependence is analogous.
*   **CO3: Measure power in single and three phase circuits by various methods (Knowledge Level: K3):** The experiment involves measuring voltage and current to calculate power ($P = V \times I$), a core aspect of power measurement. Understanding the P-V curve is essential for maximizing power extraction from a solar source.
*   **CO6: Analyse the characteristics of various types of transducer systems (Knowledge Level: K3):** A solar PV array acts as a transducer, converting light energy into electrical energy. This experiment analyzes its input-output characteristics.

### 8. Important Points to Remember

*   **Constant Irradiance:** Ensure the light source is stable and uniformly illuminates the PV array throughout the experiment. Record irradiance if a meter is available.
*   **Load Variation:** Cover a wide range of load resistances, from open circuit to short circuit, to capture the entire V-I characteristic.
*   **Accuracy of Meters:** Ensure your ammeter and voltmeter are connected correctly and have appropriate ranges.
*   **$V_{oc}$ and $I_{sc}$:** These are critical parameters for calculating the Fill Factor. Measure them accurately at the extremes of the load variation.
*   **MPP Identification:** Clearly identify the $P_{max}$, $V_{mp}$, and $I_{mp}$ from the plotted P-V curve.
*   **Partial Shading Effects:** Be prepared to observe a significant impact on performance and potentially a change in the shape of the P-V curve when shading is introduced.
*   **Safety:** Handle electrical connections carefully.

### 9. Practice Questions

**Question 1:** Define the Fill Factor (FF) of a solar PV array and provide the formula for its calculation. What is the significance of a high Fill Factor?

**Answer:** The Fill Factor (FF) is a measure of the squareness of the P-V characteristic curve of a solar PV array. It is defined as the ratio of the maximum power output ($P_{max}$) to the product of the open-circuit voltage ($V_{oc}$) and the short-circuit current ($I_{sc}$).
$$FF = \frac{P_{max}}{V_{oc} \times I_{sc}}$$
A high Fill Factor indicates that the PV array operates efficiently and its performance is close to its theoretical ideal.

**Question 2:** A solar PV array has the following measured parameters: $V_{oc} = 20V$, $I_{sc} = 5A$, $V_{mp} = 17V$, and $I_{mp} = 4.5A$. Calculate the maximum power output ($P_{max}$) and the Fill Factor (FF).

**Answer:**
$P_{max} = V_{mp} \times I_{mp} = 17V \times 4.5A = 76.5W$
$FF = \frac{P_{max}}{V_{oc} \times I_{sc}} = \frac{76.5W}{20V \times 5A} = \frac{76.5W}{100W} = 0.765$

**Question 3:** Briefly explain the effect of partial shading on the P-V characteristic of a solar PV array. How do bypass diodes help mitigate these effects?

**Answer:** Partial shading reduces the current output of the shaded cells, thereby limiting the current of the entire series string. This leads to a significant reduction in the overall power output of the array. The P-V curve can become distorted, potentially showing multiple local maximum power points. Bypass diodes are connected in parallel with groups of cells. When a group of cells is shaded, the bypass diode becomes forward-biased and conducts, allowing current to bypass the shaded cells. This helps maintain a higher current for the rest of the string, reduces power loss in the shaded section, and prevents the formation of damaging hot spots.

**Question 4:** What are the key parameters that define the electrical performance of a solar PV array?

**Answer:** The key parameters are:
*   Open-Circuit Voltage ($V_{oc}$)
*   Short-Circuit Current ($I_{sc}$)
*   Voltage at Maximum Power Point ($V_{mp}$)
*   Current at Maximum Power Point ($I_{mp}$)
*   Maximum Power Output ($P_{max}$)
*   Fill Factor (FF)

**Question 5:** Describe the necessary equipment for conducting an experiment to determine the P-V characteristics of a solar PV array.

**Answer:** The necessary equipment includes a Solar PV Array, a Variable Load (rheostat/electronic load), a DC Ammeter, a DC Voltmeter, a controllable Light Source, and optionally an Irradiance Meter and a Temperature Sensor. Connecting wires and clips are also required.
