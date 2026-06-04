---
title: "Brake test on DC series motor (CO2)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 4: Brake test on DC series motor (CO2)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360b1"
status: "completed"
scrapedAt: "2026-05-23T16:15:15.471Z"
---
# DC MACHINES & TRANSFORMERS LAB - Module 4: Brake Test on DC Series Motor (CO2)

## Objective

To conduct a brake test on a DC series motor and determine its performance characteristics, specifically focusing on sketching the torque-speed, power-efficiency, and torque-current curves.

## Relevant Course Outcome (CO)

*   **CO2:** Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3).
    *   This lab directly addresses CO2 by requiring the determination and plotting of key performance characteristics of a DC series motor.

## Learning Outcomes Covered

*   Conducting the brake test on a DC series motor.
*   Measuring various electrical and mechanical parameters during the test.
*   Calculating input power, output power, losses, and efficiency.
*   Plotting performance characteristic curves of the DC series motor.
*   Understanding the behavior of a DC series motor under varying load conditions.

## Key Concepts and Definitions

### DC Series Motor

*   **Definition:** A DC motor where the field winding is connected in series with the armature winding across the supply.
*   **Characteristics:**
    *   **High Starting Torque:** Due to the series connection, the field flux is directly proportional to the armature current. At starting, the armature current is very high, resulting in a strong field flux and thus a very high starting torque.
    *   **Speed Variation:** The speed is highly dependent on the load. As the load increases, the armature current increases, the flux increases, and the motor speed decreases significantly. Conversely, at light loads, the flux is weak, and the speed can become dangerously high.
    *   **Starting Requirement:** A DC series motor should never be started on no-load or very light load, as it will accelerate to an extremely high speed and can cause severe damage due to centrifugal forces. It must always be started with a load connected or with a suitable starting resistance.
*   **Applications:** Traction (electric trains, trams), cranes, hoists, elevators, conveyors, electric vehicles (historically).

### Brake Test (or Load Test)

*   **Purpose:** To determine the performance characteristics of a DC motor by varying the load and measuring electrical and mechanical parameters.
*   **Principle:** The motor's output shaft is coupled to a brake mechanism (e.g., a rope brake or a band brake). The load is applied by adjusting the brake, which opposes the rotation of the shaft.
*   **Brake Mechanism:**
    *   **Rope Brake Dynamometer:** A rope is wrapped around the motor's pulley. One end of the rope is attached to a spring balance, and the other end is attached to a weight hanger. By tightening or loosening the rope (usually via a jockey pulley or screw mechanism), the load on the motor can be controlled.
    *   **Band Brake:** A flexible band lined with friction material is wrapped around a drum attached to the motor shaft. The tension in the band is adjusted to control the braking torque.

### Parameters to be Measured

*   **Supply Voltage (V):** Measured using a voltmeter across the armature terminals.
*   **Armature Current (Ia):** Measured using an ammeter in series with the armature.
*   **Field Current (If):** In a series motor, $I_f = I_a$.
*   **Speed (N):** Measured using a tachometer (in RPM).
*   **Brake Drum Diameter (D):** The diameter of the pulley or drum on which the brake is applied.
*   **Effective Brake Effort (F):** Measured using a spring balance (or the difference between weights and spring balance reading). This is the force applied tangentially at the brake drum's circumference.

### Calculations

*   **Shaft Torque ($T_{sh}$):** The torque developed at the motor shaft.
    *   $T_{sh} = F \times \frac{D}{2}$ Newton-meters (Nm)
    *   Where:
        *   $F$ is the effective brake effort in Newtons (N).
        *   $D$ is the brake drum diameter in meters (m).
        *   Note: If the spring balance is placed on one side and weights on the other, $F = (\text{Weight} - \text{Spring Balance reading})$ or vice-versa, depending on how the setup is arranged. Always ensure $F$ represents the net retarding force.
*   **Output Power ($P_{out}$):** The mechanical power delivered at the shaft.
    *   $P_{out} = T_{sh} \times \omega$ Watts (W)
    *   Where $\omega$ is the angular speed in radians per second (rad/s).
    *   $\omega = \frac{2 \pi N}{60}$
    *   Therefore, $P_{out} = T_{sh} \times \frac{2 \pi N}{60}$ Watts
*   **Input Power ($P_{in}$):** The electrical power consumed by the motor.
    *   $P_{in} = V \times I_a$ Watts (for a DC motor)
*   **Efficiency ($\eta$)**: The ratio of output power to input power.
    *   $\eta = \frac{P_{out}}{P_{in}} \times 100\%$
*   **Losses:**
    *   **Total Losses:** $P_{loss} = P_{in} - P_{out}$
    *   **Copper Losses:**
        *   Armature Copper Loss ($I_a^2 R_a$)
        *   Field Copper Loss ($I_f^2 R_{se}$) where $R_{se}$ is the series field resistance. Since $I_f = I_a$, this is $I_a^2 R_{se}$.
    *   **Constant Losses (Iron losses + Mechanical losses):** These are typically assumed to be constant and can be determined from the no-load test. For this brake test, we often look at the total losses.

## Experimental Setup

*   DC Series Motor (rated HP, voltage, speed)
*   DC Power Supply (variable voltage)
*   Ammeter (for armature current)
*   Voltmeter (for supply voltage)
*   Tachometer (for speed measurement)
*   Rope brake dynamometer or band brake setup (pulley, rope, spring balance, weights, jockey pulley/screw)
*   Rheostat (starting resistance, often not needed for series motor brake test if starting with load and gradually increasing)

## Procedure

1.  **Connections:** Connect the DC series motor to the DC power supply through an appropriate starter (if applicable, though often direct starting with load is done for series motors). Connect the voltmeter across the armature terminals and the ammeter in series with the armature. Couple the motor shaft to the brake dynamometer. Ensure the brake mechanism is properly lubricated and adjusted.
2.  **Initial Setup:**
    *   Apply a suitable load to the motor using the brake mechanism. Ensure the initial load is not too light to avoid over-speeding. A load that results in a speed significantly below the rated speed is a good starting point.
    *   Note the brake drum diameter (D).
3.  **Starting:** Start the motor with the initial load connected.
4.  **Data Acquisition (for each load step):**
    *   Adjust the brake to set a specific load.
    *   Allow the motor to stabilize at a constant speed.
    *   Record the following readings:
        *   Supply Voltage (V)
        *   Armature Current ($I_a$)
        *   Spring Balance Reading ($S$)
        *   Weight on the hanger ($W$) (if using rope brake with weights)
        *   Speed (N) in RPM
    *   **Important Note on Force Calculation (F):**
        *   If the spring balance is on the fixed end and weights are on the movable end: $F = W - S$ (assuming the spring balance measures tension pulling downwards and weights are added to the hanger which also pulls downwards). Or, if the spring balance is positioned to measure the upward pull required to balance the downward force from weights and rope: $F = S - W$ (check diagram carefully).
        *   A more common and simpler setup for the rope brake: One end of the rope is attached to a fixed support, and the other end to a spring balance. The load is adjusted by a jockey pulley. In this case, the effective effort is the reading on the spring balance. $F = S$. (Refer to textbook diagrams for specific setup).
        *   Let's assume for simplicity in calculation examples that $F$ is the directly measured effective brake effort.
5.  **Varying Load:** Gradually decrease the braking effort (loosen the brake), which increases the motor speed and decreases the load. Repeat step 4 for several load points, from the initial heavy load to a light load, ensuring the motor is always under load. **Crucially, avoid reaching very light loads or no-load conditions.**
6.  **Shutdown:** After taking readings at the lightest safe load, switch off the supply.

## Data Table

| S.No. | Voltage (V) Volts | Armature Current ($I_a$) Amps | Spring Balance Reading ($S$) Newtons | Weight ($W$) Newtons (if applicable) | Effective Effort ($F$) Newtons | Speed (N) RPM | Brake Drum Diameter (D) Meters | Shaft Torque ($T_{sh}$) Nm | Angular Speed ($\omega$) rad/s | Output Power ($P_{out}$) Watts | Input Power ($P_{in}$) Watts | Efficiency ($\eta$) % |
| :---- | :---------------- | :---------------------------- | :----------------------------------- | :----------------------------------- | :----------------------------- | :------------ | :----------------------------- | :------------------------- | :--------------------------- | :----------------------------- | :------------------------- | :-------------------- |
| 1     |                   |                               |                                      |                                      |                                |               |                                |                            |                              |                                |                            |                       |
| 2     |                   |                               |                                      |                                      |                                |               |                                |                            |                              |                                |                            |                       |
| ...   |                   |                               |                                      |                                      |                                |               |                                |                            |                              |                                |                            |                       |

**Note:** The "Effective Effort (F)" column should be calculated based on the specific setup and readings ($W$ and $S$).

## Calculations

For each row in the data table:

1.  **Effective Effort ($F$):**
    *   Calculate $F$ based on the setup. For example, if $F = W - S$ (and $W$ and $S$ are measured in Newtons).
2.  **Shaft Torque ($T_{sh}$):**
    *   $T_{sh} = F \times \frac{D}{2}$ Nm
3.  **Angular Speed ($\omega$):**
    *   $\omega = \frac{2 \pi N}{60}$ rad/s
4.  **Output Power ($P_{out}$):**
    *   $P_{out} = T_{sh} \times \omega$ Watts
5.  **Input Power ($P_{in}$):**
    *   $P_{in} = V \times I_a$ Watts
6.  **Efficiency ($\eta$):**
    *   $\eta = \frac{P_{out}}{P_{in}} \times 100\%$

## Performance Characteristic Curves

Plot the following curves with $I_a$ or $T_{sh}$ on the x-axis and the corresponding parameter on the y-axis.

1.  **Torque-Speed Characteristic:**
    *   Plot $T_{sh}$ vs. $N$.
    *   Expected Shape: A hyperbola-like curve, showing a very high torque at low speeds, and the torque decreasing rapidly as speed increases. This is characteristic of series motors.
2.  **Torque-Current Characteristic:**
    *   Plot $T_{sh}$ vs. $I_a$.
    *   Expected Shape: Approximately a straight line passing through the origin. This is because for a series motor, $T_{sh} \propto \phi \times I_a$, and $\phi \propto I_a$ (assuming linear magnetic circuit), hence $T_{sh} \propto I_a^2$. However, the curve is often plotted as $T_{sh}$ vs. $I_a$, and it will show a near-linear relationship over the operating range, deviating from linearity at higher currents due to saturation.
3.  **Speed-Current Characteristic:**
    *   Plot $N$ vs. $I_a$.
    *   Expected Shape: A steeply decreasing curve. As armature current ($I_a$) increases, the flux ($\phi$) increases, leading to a significant decrease in speed.
4.  **Efficiency-Output Power Characteristic:**
    *   Plot $\eta$ vs. $P_{out}$.
    *   Expected Shape: The efficiency will be zero at no load ($P_{out}=0$) and will increase with load, reaching a maximum at some load point, and then gradually decrease at higher loads.
5.  **Output Power-Current Characteristic:**
    *   Plot $P_{out}$ vs. $I_a$.
    *   Expected Shape: A curve that increases with armature current.

**Reference (P.S. Bimbhra, Electrical Machinery):** Chapter on DC Motors, specifically the characteristics of Series Motors. The book details the theoretical basis for these curves and often includes sample plots obtained from experiments. (Refer to relevant chapters for detailed explanation of torque, speed, and flux relationships).

**Reference (D.P. Kothari & I.J. Nagrath, Electric Machines):** Similar to Bimbhra, these authors provide in-depth theoretical analysis of DC motor operation and performance characteristics. Their chapters on DC Motor performance and testing will be invaluable for understanding the derivation and interpretation of these curves.

## Important Points to Remember

*   **Starting:** A DC series motor **must not** be started on no-load. Always ensure a load is connected or use a starter resistance if starting from rest without a load. This lab is usually performed by starting with a significant load and reducing it.
*   **Over-speeding:** Be extremely cautious when reducing the load. If the load is reduced too much, the motor can accelerate to dangerously high speeds, potentially damaging itself or causing injury.
*   **Brake Adjustment:** Ensure the brake mechanism is functioning correctly and the adjustments are smooth. Over-tightening can cause excessive heating and premature wear.
*   **Measurements:** Take readings when the motor has stabilized at each load point. Ensure accurate readings from all meters and the tachometer.
*   **Safety:** Follow all standard electrical lab safety procedures. Ensure proper earthing.

## Practice Questions and Answers

1.  **Question:** Why is a DC series motor not started on no-load?
    **Answer:** At no-load, the armature current is very small, leading to a weak magnetic field. According to the torque equation ($T \propto \phi I_a$), the torque developed is minimal. However, in a series motor, the speed ($N$) is inversely proportional to the flux ($\phi$) and hence inversely proportional to the armature current ($I_a$) at light loads ($N \propto 1/\phi \propto 1/I_a$). With very low armature current, the flux is very weak, and the speed will rise to an extremely high and unsafe level, potentially destroying the motor due to centrifugal forces.

2.  **Question:** What is the relationship between torque and armature current for a DC series motor?
    **Answer:** Theoretically, for a linear magnetic circuit, the torque ($T$) is proportional to the product of flux ($\phi$) and armature current ($I_a$). In a series motor, $\phi$ is directly proportional to $I_a$. Therefore, $T \propto I_a^2$. In practice, due to magnetic saturation at higher currents, this relationship becomes non-linear, and the torque increases at a slower rate than $I_a^2$. The plot of $T_{sh}$ vs. $I_a$ will be approximately a straight line passing through the origin for most of the operating range.

3.  **Question:** Describe the torque-speed characteristic of a DC series motor.
    **Answer:** The torque-speed characteristic of a DC series motor is a steeply falling curve. At low speeds, the torque is very high. As the speed increases, the torque decreases rapidly. This is because as the load (and hence armature current) decreases, the flux weakens, and the speed increases inversely with the flux.

4.  **Question:** If the brake drum diameter is 0.2 m and the spring balance reads 50 N, what is the shaft torque developed by the motor?
    **Answer:**
    Given:
    Brake Drum Diameter, $D = 0.2$ m
    Effective Effort, $F = 50$ N
    Shaft Torque, $T_{sh} = F \times \frac{D}{2}$
    $T_{sh} = 50 \times \frac{0.2}{2} = 50 \times 0.1 = 5$ Nm

5.  **Question:** What are the primary applications of DC series motors, and why?
    **Answer:** DC series motors are primarily used in applications requiring high starting torque. Examples include:
    *   **Traction (Electric Trains, Trams):** To start heavy loads from rest.
    *   **Cranes and Hoists:** To lift heavy loads from the ground.
    *   **Electric Vehicles:** (Historically, for their high starting torque).
    The series connection provides this characteristic advantage.

6.  **Question:** How do you calculate the efficiency of the motor during the brake test?
    **Answer:** Efficiency ($\eta$) is calculated as the ratio of output mechanical power ($P_{out}$) to input electrical power ($P_{in}$), expressed as a percentage:
    $\eta = \frac{P_{out}}{P_{in}} \times 100\%$
    Where:
    $P_{out} = T_{sh} \times \omega = T_{sh} \times \frac{2 \pi N}{60}$ Watts
    $P_{in} = V \times I_a$ Watts
    So, $\eta = \frac{T_{sh} \times \frac{2 \pi N}{60}}{V \times I_a} \times 100\%$
