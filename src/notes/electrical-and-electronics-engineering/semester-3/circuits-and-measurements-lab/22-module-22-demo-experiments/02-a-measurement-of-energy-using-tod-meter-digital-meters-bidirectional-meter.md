---
title: "(a) Measurement of energy using TOD meter / Digital meters/ Bidirectional meter"
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 22: Demo Experiments:"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d0e"
status: "completed"
scrapedAt: "2026-05-23T16:12:09.431Z"
---
# CIRCUITS AND MEASUREMENTS LAB - Module 22: Demo Experiments

## Topic: (a) Measurement of Energy using TOD meter / Digital Meters / Bidirectional Meter

---

### **1. Introduction to Energy Measurement**

Energy, in an electrical context, is the capacity to do work. It is the product of power and time. Accurate measurement of electrical energy is crucial for billing consumers, monitoring energy consumption patterns, and for efficient energy management.

*   **Definition of Electrical Energy:** Electrical energy is the work done by electric charges moving through a circuit.
    *   Mathematically, Energy (E) = Power (P) × Time (t).
    *   Units: Watt-second (Ws) or Joule (J) is the base unit. For practical purposes, kilowatt-hour (kWh) is used, commonly known as a "unit" of electricity.
*   **Importance in the Lab:** This experiment demonstrates different methods and modern devices used for energy measurement, which is a fundamental aspect of electrical systems.

---

### **2. Time-of-Day (TOD) Meter**

A Time-of-Day (TOD) meter is a type of energy meter that records energy consumption based on the time of day. This is particularly useful for implementing time-based electricity tariffs, where the price of electricity varies depending on the time of use (e.g., peak hours vs. off-peak hours).

*   **Concept:**
    *   Electricity grids often have higher demand during certain periods (peak hours) and lower demand during others (off-peak hours).
    *   TOD metering encourages consumers to shift their high energy usage to off-peak hours, thereby balancing the load on the grid.
    *   TOD meters have internal clocks and registers to record energy consumed during different pre-defined time blocks.
*   **Components:**
    *   **Energy Metering Mechanism:** Measures the actual energy consumed (similar to a standard energy meter). This can be electromechanical or electronic.
    *   **Real-Time Clock (RTC):** Keeps track of the current time.
    *   **Time Block Configuration:** Stores the defined time intervals for different tariffs (e.g., Peak, Shoulder, Off-Peak).
    *   **Multiple Registers:** Each register corresponds to a specific time block and stores the energy consumed during that block.
    *   **Display Unit:** Shows the total energy consumed and often the breakdown by time block.
*   **Working Principle:**
    1.  The energy metering mechanism continuously measures the instantaneous power and integrates it over time to calculate the total energy consumed.
    2.  The RTC synchronizes with a central clock or receives time signals.
    3.  Based on the current time, the meter directs the calculated energy into the appropriate register corresponding to the active time block (e.g., if it's 8 PM and the peak hour tariff is active, the energy consumed is added to the "peak" register).
*   **Laboratory Demonstration:**
    *   A TOD meter will be set up with different time blocks configured.
    *   A load (e.g., resistive heater, lamp) will be connected to simulate consumption.
    *   The load will be switched ON and OFF during different pre-defined time blocks.
    *   The readings on the TOD meter's registers will be observed and compared with the expected energy consumption for each block.
*   **Relevance to Course Outcomes:**
    *   **CO3 (Measure power in single and three phase circuits):** While the TOD meter directly measures energy, its operation relies on accurate power measurement. Understanding how energy is derived from power is key.
    *   **CO4 (Determine the calibration characteristics of various meters):** Although not directly calibrating the TOD meter itself in this demo, understanding its function relates to the broader concept of meter accuracy and characterization.

---

### **3. Digital Meters for Energy Measurement**

Digital meters represent a modern advancement in energy measurement, offering higher accuracy, better readability, and additional functionalities compared to older electromechanical meters.

*   **Types of Digital Energy Meters:**
    *   **Digital Wattmeters:** Measure instantaneous power. Integrating this power over time gives energy.
    *   **Digital Energy Meters (kWh meters):** Directly display the cumulative energy consumed in kWh. These are the most common type found in homes and industries.
*   **Working Principle of a Digital Energy Meter:**
    1.  **Voltage and Current Sensing:** The meter senses the instantaneous voltage across and current through the load using voltage and current transformers (CTs) or resistive shunts.
    2.  **Analog-to-Digital Conversion (ADC):** The sampled analog voltage and current signals are converted into digital values by ADCs.
    3.  **Multiplication and Integration:** A digital multiplier circuit multiplies the instantaneous voltage and current samples to obtain instantaneous power. This digital power value is then integrated over time (summed up) to calculate the total energy consumed.
    4.  **Display:** The cumulative energy value is displayed on a digital display (e.g., LCD, LED).
    5.  **Additional Features:** Many digital meters also display:
        *   Instantaneous voltage
        *   Instantaneous current
        *   Power Factor
        *   Real Power, Reactive Power, Apparent Power
        *   Tamper detection, communication ports (e.g., for smart grids).
*   **Advantages of Digital Meters:**
    *   **Higher Accuracy:** Generally more accurate than electromechanical meters.
    *   **Better Readability:** Clear digital display reduces reading errors.
    *   **Additional Information:** Can display multiple electrical parameters.
    *   **No Moving Parts:** Increased reliability and reduced wear and tear.
    *   **Ease of Integration:** Can be easily integrated into automated metering infrastructure (AMI) or smart grids.
*   **Laboratory Demonstration:**
    *   A digital energy meter will be connected in series with a load.
    *   The meter will be powered on, and the load will be operated.
    *   The energy consumed (kWh) will be recorded from the digital display.
    *   If the meter displays other parameters (voltage, current, power), these can also be recorded and verified using separate digital multimeters or power meters.
*   **Relevance to Course Outcomes:**
    *   **CO1 (Analyse voltage current phasor relations of RLC circuits):** Digital meters accurately measure voltage and current, which are fundamental to phasor analysis. Some advanced digital meters can even display power factor, which is directly related to the phase difference between voltage and current.
    *   **CO3 (Measure power in single and three phase circuits):** Digital meters directly provide power readings, simplifying power measurement.
    *   **CO4 (Determine the calibration characteristics of various meters):** The accuracy of the digital meter can be assessed by comparing its readings with a reference standard instrument under various load conditions.

---

### **4. Bidirectional Meter**

A bidirectional meter, also known as a net energy meter or a two-way meter, is specifically designed to measure the flow of electrical energy in both directions. This is particularly important in systems where energy can be both consumed from and supplied to the grid.

*   **Application:**
    *   **Distributed Generation (DG) Systems:** Such as solar photovoltaic (PV) systems or small wind turbines installed at a consumer's premises.
    *   When the DG system generates more power than is currently being consumed by the load, the excess power flows back to the grid.
    *   A bidirectional meter correctly records both the energy consumed from the grid and the energy supplied to the grid.
*   **Concept of Net Metering:**
    *   In a net metering arrangement, the utility credits the consumer for the excess energy they export to the grid, typically at a pre-determined rate.
    *   The bidirectional meter facilitates this by tracking both import and export of energy.
*   **Working Principle:**
    *   Similar to a digital energy meter, but with the ability to differentiate the direction of energy flow.
    *   It typically uses two sets of registers:
        *   **Import Register:** Records energy consumed from the grid.
        *   **Export Register:** Records energy supplied to the grid.
    *   The metering mechanism is designed to detect the phase relationship between voltage and current. A positive (import) phase relationship contributes to the import register, while a negative (export) phase relationship contributes to the export register.
*   **Laboratory Demonstration:**
    *   A bidirectional meter will be set up.
    *   A primary load will be connected to simulate consumption from the grid.
    *   A secondary source (e.g., a DC power supply with an inverter, or a small solar panel setup) will be used to simulate generation.
    *   The operation will involve:
        1.  **Import Mode:** Only the primary load is operated, drawing power from the mains. The import register should increase.
        2.  **Export Mode:** The DG source is activated and generates more power than the primary load consumes. The excess power flows back to the mains. The export register should increase.
        3.  **Combined Mode:** Both the primary load and DG source are operating, with the DG source generating enough to partially or fully cover the load demand and export excess. The import and export registers will reflect these flows.
*   **Relevance to Course Outcomes:**
    *   **CO1 (Analyse voltage current phasor relations of RLC circuits):** Understanding the phase shift between voltage and current is crucial for a bidirectional meter to correctly identify import versus export.
    *   **CO3 (Measure power in single and three phase circuits):** The core function is to measure power flow, and the bidirectional meter does this in two directions.
    *   **CO4 (Determine the calibration characteristics of various meters):** Similar to other meters, the accuracy of both the import and export registers of a bidirectional meter can be tested against a reference.

---

### **5. Key Concepts and Definitions**

*   **Power (P):** The rate at which energy is transferred or consumed. Unit: Watt (W) or kilowatt (kW).
    *   For DC circuits: P = V × I
    *   For AC circuits: P = V × I × Power Factor (for sinusoidal waveforms)
*   **Energy (E):** The total amount of work done or power consumed over a period of time. Unit: Watt-hour (Wh) or kilowatt-hour (kWh).
    *   E = P × t
*   **Time-of-Day (TOD) Tariff:** An electricity pricing scheme where the cost of electricity varies depending on the time of day, week, or season.
*   **Real-Time Clock (RTC):** A clock that keeps track of the current time, essential for TOD metering.
*   **Registers:** Internal storage units within an energy meter that accumulate the total energy consumed. TOD meters have multiple registers for different time blocks.
*   **Distributed Generation (DG):** Electricity generation from small-scale sources located near the point of consumption, such as solar PV or small wind turbines.
*   **Net Metering:** A billing mechanism that allows consumers who generate their own electricity (e.g., from solar panels) to be credited for any electricity they export to the grid.
*   **Power Factor (PF):** The ratio of real power (kW) to apparent power (kVA). It indicates how effectively electrical power is being used.
    *   PF = Real Power / Apparent Power
*   **Imported Energy:** Energy consumed from the utility grid.
*   **Exported Energy:** Energy generated and supplied back to the utility grid.

---

### **6. Important Points to Remember**

*   **Energy vs. Power:** Energy is the accumulation of power over time. A high-power device used for a short time might consume less energy than a low-power device used for a long time.
*   **Units of Measurement:** Always be mindful of the units (W, kW, Wh, kWh). The common "unit" of electricity is 1 kWh.
*   **TOD Meter Functionality:** TOD meters are primarily for implementing time-varying tariffs and require accurate timekeeping.
*   **Digital Meter Advantages:** Embrace digital meters for their accuracy, readability, and enhanced features.
*   **Bidirectional Meter Necessity:** Bidirectional meters are essential for systems with distributed generation where energy flow can be in both directions (import and export).
*   **Phase Angle:** The phase relationship between voltage and current is critical for AC power and energy measurement, especially for distinguishing between import and export in bidirectional meters.

---

### **7. Practice Questions and Exercises**

**Question 1:**
An electric heater rated at 1500 W is used for 2 hours per day. If the TOD meter charges $8 per kWh during peak hours (2 PM to 6 PM) and $4 per kWh during off-peak hours, calculate the cost of running the heater for 30 days if it is used from 5 PM to 7 PM daily.

**Answer 1:**
*   Daily consumption = 1500 W × 2 h = 3000 Wh = 3 kWh.
*   Daily consumption during peak hours (5 PM to 6 PM): 1500 W × 1 h = 1.5 kWh.
*   Daily consumption during off-peak hours (6 PM to 7 PM): 1500 W × 1 h = 1.5 kWh.
*   Daily cost = (1.5 kWh × $8/kWh) + (1.5 kWh × $4/kWh) = $12 + $6 = $18.
*   Total cost for 30 days = $18/day × 30 days = $540.

**Question 2:**
A solar PV system at a residence generates 5 kWh of energy on a particular day. The residence consumes 12 kWh from the grid. If the energy meter is bidirectional, how would the import and export registers typically read at the end of the day?

**Answer 2:**
*   Energy Consumed from Grid (Imported): 12 kWh (from the perspective of the grid) - 5 kWh (generated and used locally or exported) = 7 kWh.
*   Energy Supplied to Grid (Exported): 5 kWh (assuming all generated power not used locally is exported).
*   Therefore, the bidirectional meter's registers would typically show:
    *   Import Register: 7 kWh
    *   Export Register: 5 kWh

**Question 3:**
A digital energy meter shows a reading of 150 kWh after running a constant load of 1 kW for 150 hours. Does this indicate that the meter is functioning correctly? Justify your answer.

**Answer 3:**
Yes, the meter is functioning correctly.
*   Energy consumed = Power × Time
*   Energy = 1 kW × 150 hours = 150 kWh.
*   The meter reading matches the calculated energy consumption, indicating accurate measurement for this steady load condition.

---
