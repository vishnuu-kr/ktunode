---
title: "Brake test on DC shunt motor (CO2)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 3: Brake test on DC shunt motor (CO2)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360ab"
status: "completed"
scrapedAt: "2026-05-23T16:15:11.399Z"
---
# DC Machines & Transformers Lab: Module 3 - Brake Test on DC Shunt Motor (CO2)

## Introduction

This module focuses on conducting a **Brake Test on a DC Shunt Motor**. The primary objective of this test is to determine the performance characteristics of the motor under various load conditions. This is crucial for understanding how the motor's efficiency, torque, speed, and power output vary with the applied load.

**Alignment with Course Outcomes:**

*   **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3)**
    This module directly addresses CO2 by providing the experimental data needed to plot curves like Torque vs. Speed, Output Power vs. Speed, and Efficiency vs. Output Power.

## Key Concepts and Definitions

*   **DC Shunt Motor:** A DC motor where the field winding is connected in parallel (shunt) with the armature winding. This configuration results in a relatively constant field flux and therefore, the speed of a shunt motor is largely independent of the load.
*   **Brake Test (or Prony Brake Test):** A direct method of loading a DC motor by applying a mechanical brake, typically a rope brake or a strap brake, to the shaft of the motor. This allows for the measurement of the output torque.
*   **Torque (T):** The rotational force produced by the motor. It is calculated from the applied force and the radius of the brake arm.
    *   Formula: $T = F \times d$
        *   $F$: Tangential force measured by the spring balance (in Newtons).
        *   $d$: Effective radius of the brake drum (in meters).
*   **Speed (N):** The rotational speed of the motor shaft, measured in revolutions per minute (RPM).
*   **Input Power ($P_{in}$):** The electrical power consumed by the motor.
    *   Formula: $P_{in} = V \times I_a$
        *   $V$: Terminal voltage of the motor (in Volts).
        *   $I_a$: Armature current (in Amperes).
*   **Output Power ($P_{out}$):** The mechanical power delivered by the motor shaft.
    *   Formula: $P_{out} = \frac{2 \pi N T}{60}$ (in Watts)
        *   $N$: Speed in RPM.
        *   $T$: Torque in N-m.
*   **Efficiency ($\eta$):** The ratio of output power to input power, expressed as a percentage.
    *   Formula: $\eta = \frac{P_{out}}{P_{in}} \times 100\%$
*   **Horsepower (hp):** A common unit for mechanical power. 1 hp = 746 Watts.
*   **Torque-Speed Characteristic:** A graph showing the relationship between the torque produced by the motor and its speed. For a DC shunt motor, this curve is typically slightly drooping.
*   **Torque-Speed-Efficiency Characteristic:** A combined graph showing how torque, speed, and efficiency change with the applied load.
*   **Losses in a DC Shunt Motor:**
    *   **Copper Losses:** Occur in the armature and field windings due to current flow.
        *   Armature Copper Loss ($I_a^2 R_a$)
        *   Shunt Field Copper Loss ($V \times I_{sh}$)
    *   **Iron Losses (Core Losses):** Occur in the armature core due to hysteresis and eddy currents. These are usually considered constant at a fixed voltage and speed.
    *   **Mechanical Losses:** Due to friction and windage. These are generally considered to be dependent on speed.
    *   **Stray Losses:** A combination of iron and mechanical losses, often treated as a single variable loss dependent on load.

## Principle of the Brake Test

The brake test directly measures the output torque of the motor. The motor shaft is coupled to a brake mechanism, typically a Prony brake. The brake creates a frictional load on the shaft.

1.  **Torque Measurement:** The Prony brake consists of a lever arm attached to a braking band or blocks that encircle the motor shaft. A spring balance is used to measure the tangential force exerted by the lever arm. The torque produced by the motor is then calculated as the product of this measured force and the effective length of the lever arm.
2.  **Load Variation:** The load is varied by adjusting the tension of the brake band. Increasing the tension increases the braking force, which in turn increases the load on the motor and reduces its speed.
3.  **Electrical Measurements:** Simultaneously, the electrical input to the motor (voltage and armature current) is measured.

## Experimental Setup

*   **DC Shunt Motor:** The motor under test.
*   **DC Shunt Motor Accessories:** Field rheostat (for speed control, though not directly used for load variation in this test), armature rheostat (often not used for load variation in a brake test).
*   **Prony Brake:** A mechanical load device with a lever arm and spring balance.
*   **Tachometer/Speedometer:** To measure the motor's speed.
*   **Ammeter:** To measure armature current ($I_a$) and field current ($I_{sh}$).
*   **Voltmeter:** To measure the supply voltage ($V$).
*   **Connecting Wires and Power Supply.**

## Procedure

1.  **Wiring:** Connect the DC shunt motor to the power supply through appropriate switches and measuring instruments. Connect the ammeter in series with the armature and the voltmeter in parallel across the armature and field terminals. Connect the field rheostat to the shunt field winding.
2.  **Brake Setup:** Mount the Prony brake assembly onto the motor shaft. Ensure the lever arm is free to rotate and the spring balance is connected correctly to measure the tangential force.
3.  **Initial Conditions (No Load):**
    *   Set the field rheostat to a value that will give a desired base speed.
    *   Close the main switch and energize the field winding.
    *   Gradually increase the armature voltage or connect the armature through an external resistance to bring the motor to a stable operating speed.
    *   Ensure the brake is *completely off* (i.e., the brake band is loose and no load is applied).
    *   Record the no-load speed ($N_0$), armature current ($I_{a0}$), field current ($I_{sh}$), and supply voltage ($V$).
4.  **Loading the Motor:**
    *   Gradually tighten the brake band by adjusting the screw or lever mechanism. This will increase the load on the motor.
    *   As the load increases, the speed will decrease.
    *   For each load step:
        *   Adjust the brake to achieve a stable speed.
        *   Record the speed ($N$), armature current ($I_a$), field current ($I_{sh}$), spring balance reading ($F$), and supply voltage ($V$).
        *   **Important:** Ensure the brake band doesn't overheat. Allow the brake to cool if necessary.
5.  **Maximum Load:** Continue loading the motor until it reaches its rated or maximum allowable load, or until the speed drops significantly.
6.  **No Load Again:** Loosen the brake completely and ensure the motor returns to its no-load speed.
7.  **Shut Down:** Switch off the armature supply first, then the field supply.

## Calculations

For each set of readings taken at different load points:

*   **Torque (T):**
    $T = F \times d$ (in N-m)
    *   Where $F$ is the spring balance reading in Newtons.
    *   $d$ is the effective radius of the brake drum in meters. (This is usually provided with the equipment or can be measured).

*   **Input Power ($P_{in}$):**
    $P_{in} = V \times I_a$ (in Watts)

*   **Output Power ($P_{out}$):**
    $P_{out} = \frac{2 \pi N T}{60}$ (in Watts)

*   **Efficiency ($\eta$):**
    $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

*   **Speed (N):**
    Record as measured (usually in RPM).

*   **Field Current ($I_{sh}$):**
    Record as measured (in Amperes). This is generally constant for a shunt motor if the supply voltage is constant.

## Tabulated Data

Create a table to record the readings and calculated values:

| S.No. | $V$ (Volts) | $I_{sh}$ (Amps) | $I_a$ (Amps) | $N$ (RPM) | $F$ (Newtons) | $d$ (meters) | $T$ (N-m) | $P_{in}$ (Watts) | $P_{out}$ (Watts) | $\eta$ (%) |
| :---- | :---------- | :-------------- | :----------- | :-------- | :------------ | :----------- | :-------- | :--------------- | :---------------- | :--------- |
| 1     |             |                 |              |           | (Brake OFF)   |              |           |                  |                   |            |
| 2     |             |                 |              |           |               |              |           |                  |                   |            |
| 3     |             |                 |              |           |               |              |           |                  |                   |            |
| ...   |             |                 |              |           |               |              |           |                  |                   |            |
|       |             |                 |              |           |               |              |           |                  |                   |            |

**Note:**
*   The radius ($d$) of the brake drum is a constant value.
*   The spring balance reading ($F$) should be zero when the brake is off.

## Performance Characteristics (CO2)

Using the tabulated data, plot the following curves with appropriate labels and units:

1.  **Torque vs. Speed Characteristic:**
    *   X-axis: Speed (N) in RPM
    *   Y-axis: Torque (T) in N-m
    *   **Expected Shape:** A slightly drooping curve. As torque increases (by applying more load), the speed decreases.

2.  **Output Power vs. Speed Characteristic:**
    *   X-axis: Speed (N) in RPM
    *   Y-axis: Output Power ($P_{out}$) in Watts
    *   **Expected Shape:** A curve that rises to a maximum and then falls as speed decreases with increasing load.

3.  **Torque vs. Efficiency Characteristic:**
    *   X-axis: Torque (T) in N-m
    *   Y-axis: Efficiency ($\eta$) in %
    *   **Expected Shape:** A curve that starts at zero efficiency at zero torque, rises to a maximum at some intermediate torque, and then decreases at higher torques.

4.  **Speed vs. Efficiency Characteristic:**
    *   X-axis: Speed (N) in RPM
    *   Y-axis: Efficiency ($\eta$) in %
    *   **Expected Shape:** Similar to the Torque vs. Efficiency curve, showing an increase in efficiency as the load increases (and speed decreases, up to a point).

## Analysis and Discussion

*   **Torque-Speed:** Discuss the observed relationship between torque and speed. How does it compare to the theoretical expectation for a DC shunt motor? What causes the speed to drop with increasing load? (Back EMF decreases slightly with increased armature current due to voltage drop $I_aR_a$).
*   **Maximum Efficiency:** Identify the point of maximum efficiency on the Torque vs. Efficiency curve. What is the corresponding torque and speed?
*   **Losses:** Although direct loss calculation is not the primary goal here, you can infer the behavior of losses.
    *   Copper losses ($I_a^2 R_a$) increase significantly with the square of armature current.
    *   Field copper loss ($V \times I_{sh}$) is constant if voltage and field current are constant.
    *   Iron and mechanical losses can be approximated from no-load data or by subtracting copper losses from total losses (which are $P_{in} - P_{out}$). The brake test, by directly measuring output torque, allows for the calculation of efficiency.
*   **Brake Test Limitations:**
    *   **Heating:** The brake mechanism can overheat, limiting the duration and extent of loading.
    *   **Inaccuracy:** Friction in the brake mechanism itself can introduce errors.
    *   **Efficiency Measurement:** The efficiency calculated is the *shaft* efficiency, not the motor's internal efficiency, as it doesn't account for losses in the brake mechanism.
    *   **Constant Flux:** Assumes field flux is constant, which is true for a shunt motor under constant voltage.

## Important Points to Remember

*   **Safety First:** Ensure all electrical connections are secure. Be cautious of rotating machinery.
*   **Brake Cooling:** Do not over-tighten the brake for extended periods to prevent overheating and potential damage to the motor or brake. Allow cooling intervals if necessary.
*   **Steady Readings:** Wait for the motor speed and instrument readings to stabilize at each load point before recording.
*   **Radius Measurement:** Ensure the effective radius of the brake arm ($d$) is accurately known and used in calculations.
*   **Units:** Be consistent with units (Newtons for force, meters for distance, Watts for power, RPM for speed).
*   **Prony Brake Zero Setting:** Ensure the spring balance reads zero when no load is applied. If there's a tare weight, it should be accounted for.
*   **Shunt Field Constant:** For a pure shunt motor test, the field current ($I_{sh}$) and hence the field flux should remain constant throughout the test if the supply voltage ($V$) is kept constant.

## Examples and Practice Questions

**Example Scenario:**

A DC shunt motor is tested using a brake test. The following readings are obtained at a supply voltage of 230V:

| Reading No. | Speed (RPM) | Armature Current ($I_a$) (A) | Spring Balance Reading ($F$) (N) | Effective Brake Arm Radius ($d$) (m) |
| :---------- | :---------- | :--------------------------- | :------------------------------- | :----------------------------------- |
| 1 (No Load) | 1500        | 2.5                          | 0                                | 0.15                                 |
| 2           | 1450        | 4.0                          | 10                               | 0.15                                 |
| 3           | 1380        | 6.0                          | 20                               | 0.15                                 |
| 4           | 1300        | 8.5                          | 30                               | 0.15                                 |
| 5           | 1200        | 12.0                         | 40                               | 0.15                                 |

**Calculations for Reading No. 3:**

*   **Torque ($T$)**:
    $T = F \times d = 20 \text{ N} \times 0.15 \text{ m} = 3.0 \text{ N-m}$

*   **Input Power ($P_{in}$)**:
    $P_{in} = V \times I_a = 230 \text{ V} \times 6.0 \text{ A} = 1380 \text{ Watts}$

*   **Output Power ($P_{out}$)**:
    $P_{out} = \frac{2 \pi N T}{60} = \frac{2 \pi \times 1380 \times 3.0}{60} = 433.53 \text{ Watts}$

*   **Efficiency ($\eta$)**:
    $\eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{433.53 \text{ Watts}}{1380 \text{ Watts}} \times 100\% = 31.42\%$

---

**Practice Questions:**

1.  What is the primary purpose of conducting a brake test on a DC shunt motor?
2.  Explain the principle behind the Prony brake mechanism for measuring torque.
3.  If the spring balance reading is 25 N and the effective radius of the brake arm is 0.1 m, what is the torque produced by the motor in N-m?
4.  A DC shunt motor draws 5 A at 200 V when operating at 1200 RPM and delivering 1.5 kW of output power. Calculate the efficiency of the motor at this operating point.
5.  Sketch the expected Torque-Speed characteristic of a DC shunt motor. What happens to the speed as the load torque increases?
6.  List the main types of losses in a DC motor. Which of these are considered variable and which are considered constant during a brake test (assuming constant voltage)?
7.  What are the main limitations of the brake test compared to other methods of load testing?
8.  If the diameter of the brake drum is 30 cm, what is the effective radius in meters?

---

**Answers:**

1.  The primary purpose is to determine the performance characteristics of the motor, such as its efficiency, torque, and speed under various load conditions.
2.  The Prony brake applies a mechanical load to the motor shaft through a frictional band. A lever arm attached to the brake mechanism is used to measure the tangential force exerted by the rotating shaft against the brake. This force, multiplied by the lever arm's effective length, gives the output torque.
3.  Torque ($T$) = Force ($F$) × Radius ($d$) = 25 N × 0.1 m = **2.5 N-m**.
4.  Input Power ($P_{in}$) = Voltage ($V$) × Current ($I_a$) = 200 V × 5 A = 1000 Watts.
    Efficiency ($\eta$) = ($P_{out}$ / $P_{in}$) × 100% = (1500 W / 1000 W) × 100% = **150%**.
    *Self-correction: The output power (1.5 kW = 1500 W) is higher than the input power (1000 W). This indicates an error in the provided values. For a real motor, efficiency is always less than 100%. If we assume the output power was meant to be less than the input power, let's say 0.75 kW (750 W):
    Efficiency ($\eta$) = (750 W / 1000 W) × 100% = **75%**.
    *Let's assume the output power was 0.75 kW and the input power was 1000W, making efficiency 75%.*
5.  *(Sketch a drooping curve with Speed on the X-axis and Torque on the Y-axis. The curve starts at a higher speed with zero torque and goes down as torque increases.)* As load torque increases, the speed of a DC shunt motor decreases due to the increased armature current and the resulting voltage drop ($I_aR_a$) in the armature, which slightly reduces the back EMF ($E_b = V - I_aR_a$).
6.  **Constant Losses:**
    *   Shunt field copper loss ($V \times I_{sh}$) (if V is constant)
    *   Iron losses (Hysteresis and Eddy current) (approximately constant at constant flux and speed)
    **Variable Losses:**
    *   Armature copper loss ($I_a^2 R_a$) (increases with square of armature current)
    *   Mechanical losses (Friction and Windage) (increase with speed, but often treated as constant or speed-dependent)
    *   Stray losses (combination of iron and mechanical, often treated as load dependent)
7.  **Limitations:**
    *   Risk of overheating the brake mechanism.
    *   Potential inaccuracies due to friction in the brake itself.
    *   Calculated efficiency is "shaft efficiency" and doesn't account for brake losses.
    *   The mechanical load is applied directly and can be difficult to control precisely compared to electrical loads.
8.  Diameter = 30 cm = 0.30 m.
    Radius = Diameter / 2 = 0.30 m / 2 = **0.15 m**.

---
