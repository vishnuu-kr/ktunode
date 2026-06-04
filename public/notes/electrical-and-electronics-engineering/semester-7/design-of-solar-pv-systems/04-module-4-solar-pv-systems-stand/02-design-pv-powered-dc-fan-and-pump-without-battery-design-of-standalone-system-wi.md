---
title: "Design PV powered DC fan and pump without battery-Design of Standalone System with Battery and AC or DC Load."
subject: "DESIGN OF SOLAR PV SYSTEMS"
module: "Module 4: Solar PV Systems  –stand"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a93"
status: "completed"
scrapedAt: "2026-05-23T16:34:35.520Z"
---
# DESIGN OF SOLAR PV SYSTEMS - Module 4: Standalone PV Systems

## Topic: Design PV Powered DC Fan and Pump without Battery & Design of Standalone System with Battery and AC or DC Load

---

### **Introduction to Standalone PV Systems**

Standalone PV systems, also known as off-grid systems, operate independently of the main electricity grid. They are ideal for remote locations where grid connection is unavailable or uneconomical. These systems convert solar energy into electrical energy to power various loads.

**Key Concepts:**

*   **Off-grid operation:** The system is completely disconnected from the public electricity grid.
*   **Self-sufficiency:** The system generates all the power it needs, typically with energy storage.
*   **Loads:** Devices or appliances that consume electrical energy. These can be DC (Direct Current) or AC (Alternating Current) loads.

---

### **1. Design of PV Powered DC Fan and Pump without Battery**

This section focuses on designing a PV system that directly powers DC fans and pumps, eliminating the need for a battery. This approach is cost-effective and simpler but relies on the availability of sunlight.

**Learning Outcomes Addressed:**

*   Design a standalone PV system. (CO2 - K3)

**Key Concepts and Definitions:**

*   **DC Fan/Pump:** An electrical device designed to operate on direct current.
*   **Direct Connection:** The PV array is directly connected to the DC fan/pump, with no intermediate storage or conversion.
*   **Maximum Power Point Tracking (MPPT):** A technique used in charge controllers or directly in some DC-DC converters to extract the maximum possible power from the PV array under varying conditions. While a direct connection might not always have an explicit MPPT controller, the design aims to match the array's operating point to the load's requirement.
*   **Voltage and Current Matching:** The operating voltage and current of the PV array should be compatible with the fan/pump's requirements for efficient operation.

**Design Considerations:**

1.  **Load Analysis:**
    *   **Power Consumption (Watts):** Determine the power rating of the DC fan and DC pump.
    *   **Operating Voltage (Volts):** Identify the voltage required by the fan and pump.
    *   **Operating Current (Amperes):** Calculate the current drawn by the fan and pump.
    *   **Daily Energy Consumption (Wh/day):** Estimate the total energy needed per day.

2.  **PV Array Sizing:**
    *   **Peak Sun Hours (PSH):** The equivalent number of hours per day when the solar irradiance averages 1000 W/m². This value varies geographically and seasonally. (Refer to Solanki, Chapter 3, for irradiance data).
    *   **Required PV Array Power (Wp):**
        *   The PV array must be sized to meet the instantaneous power demand of the fan and pump when they are operating.
        *   Consider the worst-case scenario (e.g., highest power demand, lowest sunlight).
        *   A general formula can be:
            $$ P_{PV\_array} \ge \frac{\text{Load Power}}{\text{Derating Factor} \times \text{System Efficiency}} $$
            *   **Derating Factor:** Accounts for losses due to temperature, soiling, shading, etc. Typically 0.75 - 0.85.
            *   **System Efficiency:** Assumes direct connection efficiency, which can be high if voltage is well-matched. If a DC-DC converter is used for voltage matching, its efficiency (typically 90-98%) should be included.
    *   **PV Module Selection:** Choose PV modules with appropriate voltage and current characteristics that can be configured to meet the system's requirements.

3.  **Voltage and Current Matching:**
    *   **Series Connection:** Connect PV modules in series to increase the voltage and meet the DC fan/pump's operating voltage.
    *   **Parallel Connection:** Connect strings of PV modules in parallel to increase the current if needed.
    *   **Example:** If a DC pump operates at 24V and a single PV module outputs 18V, two modules would need to be connected in series (18V + 18V = 36V). A DC-DC converter might be needed to step down the voltage from 36V to 24V and potentially track the maximum power point.

4.  **Protection:**
    *   **DC Fuses/Circuit Breakers:** For overcurrent protection.
    *   **Reverse Current Protection:** To prevent current flowing back from the load to the PV array at night or in low-light conditions. This is often incorporated into MPPT controllers.

**Example Scenario:**

*   **Load:** A DC pump that consumes 100W at 24V (approx. 4.17A).
*   **Sunlight:** 5 Peak Sun Hours (PSH) per day.
*   **PV Module:** A module rated at 100Wp, with an open-circuit voltage (Voc) of 22V and a voltage at maximum power point (Vmp) of 18V.

**Design Steps:**

1.  **Determine the required PV array power:**
    *   Assume a derating factor of 0.8 and system efficiency of 0.9 (considering a DC-DC converter).
    *   $$ P_{PV\_array} \ge \frac{100 \text{W}}{0.8 \times 0.9} \approx 139 \text{Wp} $$
    *   Therefore, we need at least a 140Wp PV array.

2.  **Determine PV module configuration:**
    *   The pump operates at 24V. A single module provides 18V (Vmp).
    *   To get close to 24V, we could connect two modules in series (18V + 18V = 36V).
    *   With two modules in series, the array's Vmp is 36V. A DC-DC converter would be required to step down the voltage to 24V and optimize power transfer.
    *   Two 100Wp modules in series would give a total array rating of 200Wp, which is more than the minimum requirement, providing a buffer for lower sunlight conditions.

**Important Points to Remember:**

*   **Direct drive systems are simpler and cheaper** but are highly dependent on available sunlight.
*   **Matching the PV array's output characteristics to the load's input requirements is crucial** for efficient operation.
*   **DC-DC converters with MPPT are highly recommended** for maximizing power extraction and ensuring stable operation if voltage matching isn't perfect.
*   **Seasonal variations in sunlight and temperature** must be considered for reliable performance.

---

### **2. Design of Standalone System with Battery and AC or DC Load**

This section covers the more common standalone PV system design that includes a battery for energy storage, enabling power availability even when sunlight is not sufficient. It also addresses powering both AC and DC loads.

**Learning Outcomes Addressed:**

*   Design a standalone PV system. (CO2 - K3)
*   Explain the basics of solar energy conversion systems. (CO1 - K1)

**Key Components of a Standalone PV System with Battery:**

1.  **PV Array:** Converts sunlight into DC electricity.
2.  **Charge Controller:** Regulates the charging of the battery from the PV array and prevents overcharging or deep discharge. Many modern charge controllers incorporate MPPT for efficiency.
3.  **Battery Bank:** Stores excess energy generated by the PV array for use when solar generation is low or absent.
4.  **DC Loads:** Appliances that run directly on DC power (e.g., DC fans, DC lights, some electronics).
5.  **DC-AC Inverter:** Converts DC power from the battery bank or PV array into AC power for AC loads (e.g., household appliances, AC pumps).
6.  **DC Distribution Panel:** For connecting and protecting DC loads and components.
7.  **AC Distribution Panel:** For connecting and protecting AC loads.
8.  **Wiring and Connectors:** Appropriately sized and rated for the currents and voltages involved.
9.  **Mounting Structure:** For the PV array.

**Design Steps:**

1.  **Load Analysis (Crucial Step):**
    *   **Identify all loads:** List every appliance to be powered (DC fans, DC pumps, AC lights, AC refrigerators, etc.).
    *   **Determine power consumption (Watts) for each load.**
    *   **Determine operating voltage (V) for each load (DC or AC).**
    *   **Estimate daily operating hours for each load.**
    *   **Calculate daily energy consumption (Watt-hours/day or kWh/day) for each load:**
        $$ \text{Daily Energy} = \text{Power} \times \text{Operating Hours} $$
    *   **Sum up the total daily energy consumption for all loads.**
    *   **Calculate the total daily AC energy consumption and total daily DC energy consumption separately** if both types of loads are present.
    *   **Account for system losses:** Include inefficiencies of the inverter, charge controller, wiring, and battery charging/discharging. A system loss factor of 1.2 to 1.5 is often used to oversize the PV array and battery.

2.  **Battery Bank Sizing:**
    *   **Days of Autonomy:** The number of consecutive cloudy days the system should be able to power the loads without significant solar input. Typically 1-3 days.
    *   **Depth of Discharge (DoD):** The maximum percentage of the battery's capacity that can be discharged without causing permanent damage. For deep-cycle lead-acid batteries, 50% is often recommended for longevity. Lithium batteries can have higher DoD (e.g., 80-90%).
    *   **Battery Voltage:** Typically 12V, 24V, or 48V for standalone systems. This depends on the scale of the system and the loads.
    *   **Temperature Compensation:** Battery capacity decreases at lower temperatures. Consider average minimum temperatures.
    *   **Calculation of required battery capacity (Amp-hours, Ah):**
        $$ \text{Required Battery Capacity (Ah)} = \frac{\text{Total Daily Energy Consumption (Wh)} \times \text{Days of Autonomy}}{\text{DoD} \times \text{Battery Voltage (V)} \times \text{Temperature Factor}} $$
        *   **Temperature Factor:** Typically 1.0 at 25°C, but might be lower for colder climates.
    *   **Example:** If total daily energy needed is 1000 Wh, with 2 days of autonomy, 50% DoD, and a 24V system:
        $$ \text{Capacity} = \frac{1000 \text{ Wh} \times 2}{0.50 \times 24 \text{ V}} = \frac{2000 \text{ Wh}}{12 \text{ V}} = 166.7 \text{ Ah} $$
        This means you need a 24V battery bank with a minimum capacity of 166.7 Ah. Choose a commercially available battery bank with a slightly higher capacity (e.g., 180-200 Ah) for a safety margin.

3.  **PV Array Sizing:**
    *   **Peak Sun Hours (PSH):** Determine the average PSH for the location for the worst month of the year (usually winter). (Refer to Solanki, Chapter 3).
    *   **System Losses:** Account for losses in wiring, charge controller, battery charging, and module temperature effects (derating factor). A combined derating factor of 0.7-0.8 is common.
    *   **Calculation of required PV array power (Wp):**
        $$ P_{PV\_array} \ge \frac{\text{Total Daily Energy Consumption (Wh)} \times \text{System Loss Factor}}{\text{PSH}} $$
    *   **Example:** If total daily energy consumption is 1000 Wh, PSH is 4 hours, and system loss factor is 1.3:
        $$ P_{PV\_array} \ge \frac{1000 \text{ Wh} \times 1.3}{4 \text{ h}} = 325 \text{ Wp} $$
        So, a PV array of at least 325Wp is required. You would select modules to achieve this, considering voltage and current requirements for the charge controller.

4.  **Charge Controller Selection:**
    *   **Type:**
        *   **PWM (Pulse Width Modulation):** Simpler, less expensive, but less efficient. Best suited when the PV array voltage is close to the battery voltage.
        *   **MPPT (Maximum Power Point Tracking):** More efficient (can increase energy yield by 10-30%), especially when PV array voltage differs significantly from battery voltage or in varying weather conditions. Recommended for larger systems or when maximizing energy yield is important. (Refer to Solanki, Chapter 5, for charge controller types).
    *   **Rating:** The controller must be rated to handle the maximum current and voltage from the PV array and the maximum load current.
        *   **Current Rating:** $I_{charge} = \frac{P_{PV\_array}}{V_{battery\_nominal}}$ (for PWM). For MPPT, it depends on the output current. Always add a safety margin (e.g., 25%).
        *   **Voltage Rating:** Must exceed the open-circuit voltage ($V_{oc}$) of the PV array.

5.  **Inverter Selection (for AC Loads):**
    *   **Type:**
        *   **Modified Sine Wave:** Cheaper, but can cause issues with sensitive electronics or motors.
        *   **Pure Sine Wave:** Produces clean power, compatible with all AC loads, but more expensive. Recommended for most modern systems.
    *   **Rating:**
        *   **Continuous Power Rating (Watts):** Must be greater than the sum of the continuous power of all AC loads operating simultaneously.
        *   **Surge Power Rating (Watts):** Must be able to handle the starting surge of inductive loads (motors, pumps) which can be 2-7 times their running power.
    *   **Efficiency:** Inverters have an efficiency of around 85-95%. This loss should be factored into PV array and battery sizing.

6.  **Wiring and Protection:**
    *   **Wire Sizing:** Use appropriate cable sizes based on current carrying capacity and acceptable voltage drop to minimize losses. (Refer to Solanki, Chapter 6, for wiring and protection).
    *   **Fuses and Circuit Breakers:** Install fuses/breakers at appropriate points: between PV array and charge controller, between charge controller and battery, between battery and inverter, and for each DC/AC load branch. This protects the system from overcurrents and short circuits.
    *   **Grounding:** Ensure proper grounding of the system for safety.

**Example Scenario: Powering a DC Fan and an AC Pump**

*   **Load 1 (DC):** DC Fan, 50W, 12V, 8 hours/day.
*   **Load 2 (AC):** AC Pump, 200W (running), 230V AC, 2 hours/day. Requires a surge of 600W for starting.
*   **Location:** 4 PSH (worst month average).
*   **System Requirements:** 1 day of autonomy, 50% DoD for batteries.

**Design Steps:**

1.  **Load Analysis:**
    *   **DC Fan Energy:** 50W * 8 hours = 400 Wh/day
    *   **AC Pump Energy:** 200W * 2 hours = 400 Wh/day
    *   **Total Daily Energy:** 400 Wh (DC) + 400 Wh (AC) = 800 Wh/day
    *   **Assume System Losses:** Let's account for inverter efficiency (90%), charge controller efficiency (95%), battery charge/discharge efficiency (85%), and wiring losses. A combined loss factor of 1.4 is a reasonable estimate.
    *   **Effective Daily Energy Requirement:** 800 Wh/day * 1.4 = 1120 Wh/day

2.  **Battery Bank Sizing:**
    *   **Days of Autonomy:** 1 day
    *   **DoD:** 0.50
    *   **Battery Voltage:** Let's use a 12V system for simplicity.
    *   **Required Capacity (Ah):**
        $$ \text{Capacity} = \frac{1120 \text{ Wh} \times 1 \text{ day}}{0.50 \times 12 \text{ V}} = \frac{1120}{6} \approx 186.7 \text{ Ah} $$
        *   Select a 12V, 200 Ah deep-cycle battery.

3.  **PV Array Sizing:**
    *   **PSH:** 4 hours
    *   **Effective Daily Energy Requirement:** 1120 Wh/day
    *   **Required PV Array Power (Wp):**
        $$ P_{PV\_array} \ge \frac{1120 \text{ Wh/day}}{4 \text{ h}} = 280 \text{ Wp} $$
        *   We need at least 280 Wp. Let's select a 300 Wp PV array (e.g., two 150Wp modules).

4.  **Charge Controller Selection:**
    *   **PV Array:** 300 Wp, likely operating around 18-20V (for a single 12V nominal system, usually one module is used).
    *   **Battery Voltage:** 12V.
    *   **Array Current (approx.):** $I_{PV} = P_{PV} / V_{mpp} \approx 300 \text{W} / 18\text{V} \approx 16.7 \text{A}$.
    *   **Selection:** A 12V, 20A MPPT charge controller would be suitable, providing a safety margin.

5.  **Inverter Selection:**
    *   **AC Load:** 200W running, 600W surge.
    *   **Type:** Pure Sine Wave inverter.
    *   **Rating:** Must handle 200W continuous and 600W surge. A 600W continuous / 1200W surge pure sine wave inverter would be appropriate.

6.  **Wiring and Protection:**
    *   Size wires for 16.7A from PV to controller, and for the inverter's maximum DC input current (e.g., $P_{out} / (\eta \times V_{batt}) = 600\text{W} / (0.9 \times 12\text{V}) \approx 55\text{A}$).
    *   Install appropriately rated DC fuses/breakers for PV to controller, controller to battery, and battery to inverter. Install an AC breaker for the pump.

**Important Points to Remember:**

*   **Accurate load assessment is paramount.** Underestimating load leads to system failure.
*   **Battery sizing determines system autonomy.** More days of autonomy require larger battery banks, increasing cost.
*   **PV array sizing ensures batteries are recharged.** Sizing is based on daily energy needs and available sunlight.
*   **MPPT charge controllers are generally preferred** for their efficiency gains.
*   **Pure sine wave inverters are essential for reliable operation of most AC appliances.**
*   **Always include a safety margin** in component sizing for reliability and longevity.
*   **System design needs to consider the worst-case solar resource** (e.g., winter month) to ensure year-round performance.

---

### **Practice Questions and Exercises**

**Question 1 (No Battery System):**
A small farm needs to power a DC water pump that operates at 12V and consumes 60W. The average peak sun hours (PSH) in the location are 5 hours/day. A single PV module rated at 100Wp has a Vmp of 18V and Imp of 5.56A. Design a PV system to directly power the pump. What is the minimum PV array size needed? If you use the given PV module, what configuration and additional component would be necessary?

**Answer 1:**
*   **Minimum PV Array Size:**
    *   Assuming a derating factor of 0.8 and a DC-DC converter efficiency of 0.9:
    *   $P_{PV\_array} \ge \frac{\text{Load Power}}{\text{Derating Factor} \times \text{System Efficiency}} = \frac{60 \text{W}}{0.8 \times 0.9} \approx 83.3 \text{Wp}$.
    *   Therefore, a minimum of 85Wp is needed.
*   **Module Configuration:**
    *   The pump requires 12V. The module provides 18V (Vmp).
    *   To match the voltage requirement efficiently, a DC-DC converter is necessary. The 100Wp module can power the 60W pump. A single 100Wp module would be sufficient. The DC-DC converter will step down the voltage from the module's operating voltage (around 18V) to the pump's required 12V and potentially perform MPPT.

---

**Question 2 (Battery System):**
Design a standalone PV system for a remote cabin that needs to power the following loads daily:
*   4 x 10W DC LED lights, 5 hours/day each.
*   1 x 150W AC refrigerator, 12 hours/day (assume it cycles on/off, so energy consumption is the primary factor).
*   The system should have 2 days of autonomy and use a 24V battery system with 50% DoD.
*   Average PSH for the location is 4.5 hours/day. Assume system losses equivalent to a factor of 1.3.

**Calculate:**
a) Total daily energy consumption for all loads.
b) Required PV array size (Wp).
c) Required battery bank capacity (Ah).
d) Suggest a suitable charge controller type and rating.
e) Suggest a suitable inverter type and rating for the refrigerator.

**Answer 2:**
a) **Total daily energy consumption:**
    *   DC Lights: 4 lights * 10W/light * 5 hours/day = 200 Wh/day
    *   AC Refrigerator: 150W * 12 hours/day = 1800 Wh/day
    *   Total direct load energy = 200 Wh + 1800 Wh = 2000 Wh/day
    *   Effective daily energy requirement (with losses): 2000 Wh/day * 1.3 = 2600 Wh/day

b) **Required PV array size (Wp):**
    *   $P_{PV\_array} \ge \frac{\text{Effective Daily Energy Requirement}}{\text{PSH}} = \frac{2600 \text{ Wh/day}}{4.5 \text{ h}} \approx 578 \text{ Wp}$.
    *   So, a PV array of at least 580 Wp is needed.

c) **Required battery bank capacity (Ah):**
    *   $ \text{Capacity} = \frac{\text{Effective Daily Energy} \times \text{Days of Autonomy}}{\text{DoD} \times \text{Battery Voltage}} $
    *   $ \text{Capacity} = \frac{2600 \text{ Wh} \times 2}{0.50 \times 24 \text{ V}} = \frac{5200 \text{ Wh}}{12 \text{ V}} \approx 433.3 \text{ Ah} $
    *   A 24V battery bank of at least 440 Ah capacity is required.

d) **Charge Controller:**
    *   Given the PV array size and battery voltage difference, an **MPPT charge controller** is highly recommended for efficiency.
    *   PV array current (approx. for 580Wp at 24V nominal, say 30V actual operating voltage): $I_{PV} \approx 580\text{W} / 30\text{V} \approx 19.3\text{A}$.
    *   Load current (from battery to inverter): $I_{load\_DC} = \frac{\text{AC Load Power}}{\eta \times V_{batt}} = \frac{150\text{W}}{0.9 \times 24\text{V}} \approx 6.94\text{A}$.
    *   A **24V, 30A MPPT charge controller** would be suitable, providing a safety margin.

e) **Inverter:**
    *   AC Load: 150W refrigerator. Refrigerators have starting surges. While it's not explicitly stated, assume a surge factor of 3x for a reasonable estimate.
    *   Continuous power: 150W. Surge power: 150W * 3 = 450W.
    *   A **Pure Sine Wave inverter** is essential for refrigerators.
    *   A **24V, 500W continuous / 1000W surge pure sine wave inverter** would be appropriate.

---

### **Important Points to Remember Recap:**

*   **Load analysis is the cornerstone of any PV system design.**
*   **Standalone systems without batteries are simpler but limited by sunlight.**
*   **Battery systems offer reliability but increase complexity and cost.**
*   **Understand the difference between DC and AC loads and the components needed for each.**
*   **MPPT technology significantly improves energy harvest.**
*   **Component ratings (voltage, current, power) must be carefully matched and oversized for reliability.**
*   **Always account for system losses** (inverter, charge controller, battery, wiring, temperature) by using derating factors or loss factors.
*   **Safety is paramount:** Use appropriate fuses, breakers, and grounding.
*   **Refer to textbooks like Solanki and Tiwari** for detailed information on irradiance data, component specifications, and design methodologies.

---
This comprehensive study note covers the core aspects of designing PV-powered DC fans and pumps without batteries, as well as standalone systems with battery storage for both AC and DC loads, aligning with the provided learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
