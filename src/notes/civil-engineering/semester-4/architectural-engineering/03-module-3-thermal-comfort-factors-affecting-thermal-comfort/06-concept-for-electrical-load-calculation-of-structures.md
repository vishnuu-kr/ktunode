---
title: "Concept for electrical load calculation of structures"
subject: "ARCHITECTURAL ENGINEERING"
module: "Module 3: Thermal comfort: Factors affecting thermal comfort"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810bca"
status: "completed"
scrapedAt: "2026-05-20T18:43:04.027Z"
---
# ARCHITECTURAL ENGINEERING: Module 3 - Thermal Comfort: Factors Affecting Thermal Comfort

## Topic: Concept for Electrical Load Calculation of Structures

---

### Introduction to Electrical Load Calculation

The electrical load calculation for a structure is a crucial step in the design process. It determines the total electrical power required for the building's operation, which then dictates the size of electrical services, distribution panels, wiring, and protective devices. While this topic is presented within the context of thermal comfort, it's important to recognize its broader significance in building design and functionality. Understanding electrical loads is essential for energy efficiency, safety, and ensuring adequate power supply for all building systems, including those that influence thermal comfort.

---

### Learning Outcomes

This topic aims to equip you with the fundamental concepts behind calculating electrical loads for various structures. Upon completion, you should be able to:

*   **Understand the purpose and importance of electrical load calculations.**
*   **Identify the various sources of electrical load in a building.**
*   **Distinguish between different types of electrical loads (e.g., lighting, power, HVAC).**
*   **Explain the concept of demand factors and their application.**
*   **Understand the role of diversity factors in electrical load calculations.**
*   **Recognize the basic principles of calculating connected load vs. demand load.**
*   **Appreciate how thermal comfort systems contribute to the overall electrical load.**

---

### 1. Purpose and Importance of Electrical Load Calculations

#### Key Concepts:

*   **Connected Load:** The sum of the power ratings of all electrical equipment and fixtures that are intended to be connected to the electrical system. This represents the *maximum possible* demand.
*   **Demand Load (or Calculated Load):** The actual electrical power that is expected to be used by the building at any given time. This is typically less than the connected load due to the principles of diversity and demand factors.
*   **Service Entrance:** The point where the electrical utility's supply connects to the building's wiring system. The capacity of the service entrance is determined by the demand load.
*   **Overcurrent Protective Devices:** Circuit breakers and fuses designed to protect the electrical system from damage due to overloads or short circuits. Their ratings are based on the calculated load.
*   **Wiring and Conductor Sizing:** The size of electrical wires must be appropriate to carry the expected current without overheating.
*   **Energy Efficiency:** Accurate load calculations help in designing efficient electrical systems and avoiding oversizing, which can lead to wasted energy and increased costs.
*   **Safety:** Proper load calculations ensure that the electrical system is not overloaded, preventing hazards like fires and electrical shocks.

#### Importance:

*   **System Sizing:** Ensures that transformers, switchgear, panels, and wiring are adequately sized to handle the expected electrical demand.
*   **Cost-Effectiveness:** Prevents overspending on oversized equipment and services.
*   **Reliability:** Guarantees that the building's electrical system can reliably power all intended equipment.
*   **Code Compliance:** Adherence to electrical codes (e.g., NEC - National Electrical Code in the US, BS 7671 in the UK) is mandatory and requires accurate load calculations.

---

### 2. Sources of Electrical Load in a Building

Electrical loads can originate from a wide variety of equipment and systems within a structure. These can be broadly categorized as:

#### Key Concepts:

*   **Lighting Loads:** Power consumed by lights for illumination. This includes general lighting, task lighting, emergency lighting, and exterior lighting.
*   **Power Loads (Receptacle Loads):** Power consumed by electrical outlets (receptacles) that power portable appliances, electronics, and fixed equipment not directly wired.
*   **Appliance Loads:** Dedicated circuits for fixed appliances such as refrigerators, ovens, washing machines, dishwashers, water heaters, etc.
*   **HVAC Loads:** Power consumed by heating, ventilation, and air conditioning systems. This is a significant component, especially in the context of thermal comfort.
    *   **Heating:** Electric furnaces, heat pumps, resistance heaters.
    *   **Cooling:** Air conditioners, chillers, heat pumps.
    *   **Ventilation:** Fans, exhaust systems, air handlers.
*   **Special Equipment Loads:** Power for specialized equipment like elevators, escalators, pumps, generators, medical equipment, industrial machinery, etc.
*   **Motor Loads:** Power consumed by electric motors in HVAC systems, elevators, pumps, etc. Motors have specific starting current characteristics that need consideration.
*   **Standby/Emergency Power Loads:** Loads served by backup generators or UPS systems.

#### Examples:

*   **Residential:** Lights, TV, refrigerators, air conditioners, electric stoves, computers.
*   **Commercial:** Fluorescent or LED lighting, office equipment (computers, printers, copiers), HVAC systems, escalators, kitchen appliances (in restaurants).
*   **Industrial:** Manufacturing machinery, process equipment, heavy-duty motors, high-bay lighting.

---

### 3. Types of Electrical Loads

Understanding the nature of different loads is crucial for accurate calculations.

#### Key Concepts:

*   **Continuous Loads:** Loads that are expected to operate for 3 hours or more at a time. These loads require conductors and overcurrent devices to be rated for 125% of the continuous load.
    *   *Example:* Lighting in a retail store during business hours, continuous operation of a server room HVAC system.
*   **Non-Continuous Loads:** Loads that are expected to operate for less than 3 hours at a time.
    *   *Example:* A toaster used for a few minutes, a vacuum cleaner.
*   **Motor Loads:** As mentioned earlier, motors have high starting currents (inrush current) that are significantly higher than their running current. This needs to be accounted for in sizing protective devices and wiring.
*   **Incandescent Loads:** Resistance heating of a filament. Their power consumption is directly proportional to voltage squared.
*   **Fluorescent/LED Loads:** These use ballasts or drivers, which can introduce harmonics into the electrical system and have slightly different power factor characteristics.
*   **Resistive Loads:** Loads where the power factor is close to 1 (e.g., electric heaters, incandescent lamps).
*   **Inductive Loads:** Loads with motors or transformers, where the current lags the voltage. These have a power factor less than 1.
*   **Capacitive Loads:** Less common in typical building loads, but can be introduced by power factor correction equipment.

---

### 4. Demand Factors

Demand factors are multipliers applied to the connected load to account for the fact that not all connected loads operate simultaneously at their full rated capacity. This is where the concept of diversity comes into play.

#### Key Concepts:

*   **Demand Factor (DF):** The ratio of the maximum demand of a system (or part of a system) to the total connected load of that system.
    *   *Formula:* `Demand Factor = Maximum Demand / Connected Load`
    *   Demand factors are typically determined by electrical codes and standards based on the type of occupancy and the nature of the loads. They are usually less than 1.
*   **Purpose:** To reduce the calculated load to a more realistic and economical value, preventing oversizing of electrical services and equipment.
*   **Code-Based:** Electrical codes provide tables of demand factors for various types of occupancies and loads (e.g., lighting, receptacles in dwelling units, motors).

#### Application:

1.  **Calculate the total connected load** for a specific circuit, area, or the entire building.
2.  **Apply the appropriate demand factor** as specified by the relevant electrical code.
    *   *Example:* If a building has a connected lighting load of 10,000 VA and the code specifies a demand factor of 0.75 for lighting in that occupancy, the calculated lighting demand load would be 10,000 VA * 0.75 = 7,500 VA.

**Important Note:** Demand factors are generally applied to the *total* connected load of a specific category (e.g., all lighting in a dwelling unit) before calculating the overall service load.

---

### 5. Diversity Factors

Diversity is the principle that not all loads in a building operate at their maximum capacity at the same time. Diversity factor accounts for this by recognizing that different loads have different usage patterns.

#### Key Concepts:

*   **Diversity Factor (DFac):** The ratio of the sum of the individual maximum demands of various subdivisions of a system to the maximum demand of the whole system.
    *   *Formula:* `Diversity Factor = Sum of Individual Maximum Demands / Maximum Demand of the Whole System`
    *   Diversity factors are typically **greater than 1**.
*   **Purpose:** To reduce the total calculated load for the entire building. It acknowledges that while individual circuits might be sized for their connected loads, the overall building demand is less than the sum of these individual maximums.
*   **Application:** Diversity factors are often applied when calculating the total load for a building from the loads of its various sections or feeders. However, many modern electrical codes tend to incorporate diversity principles directly into demand factors applied to specific load types, rather than using a separate overall diversity factor.

#### Distinction from Demand Factor:

*   **Demand Factor:** Applies to a *specific group* of loads (e.g., lighting in a living room) to reduce its connected load. It's a reduction factor.
*   **Diversity Factor:** Applies to the *sum of the maximum demands* of different parts of a system to find the overall maximum demand of the entire system. It's more about the aggregation of demands.

**In practice, understanding and correctly applying the demand factors provided by codes is paramount, as they often implicitly account for diversity.**

---

### 6. Connected Load vs. Demand Load Calculation Principles

#### Key Concepts:

*   **Calculating Connected Load:** This is relatively straightforward. It involves identifying all electrical equipment and fixtures and summing their rated power (in Watts, VA, or kW).
    *   *Example:* A room with 5 light fixtures rated at 60W each and several receptacles connected to general lighting circuits. The connected load for lighting is 5 * 60W = 300W.
*   **Calculating Demand Load:** This is where codes, demand factors, and understanding load types come into play. The general process involves:
    1.  **Identify all load categories** (lighting, receptacles, HVAC, appliances, motors, etc.).
    2.  **Calculate the connected load for each category.**
    3.  **Apply specific demand factors** from the electrical code to each category.
        *   *Example (Dwelling Unit, based on NEC principles):*
            *   First 3,000 VA at 100%
            *   Next 117,000 VA at 35% (for receptacle loads in a dwelling)
            *   Additional load above 120,000 VA at 40% (for general lighting and receptacles).
    4.  **Sum the calculated demand loads** from each category to get the total demand load for the service.
    5.  **Consider continuous loads:** For continuous loads, multiply the load by 125% before applying demand factors or sizing conductors/overcurrent devices.

#### Example Scenario: Residential Kitchen

*   **Connected Loads:**
    *   Refrigerator: 200W
    *   Dishwasher: 1200W
    *   Garbage Disposal: 750W
    *   Microwave Oven: 1500W
    *   General Lighting: 200W
    *   Receptacles: 1500 VA (as per code allowance for general receptacle load)
*   **Total Connected Load:** 200 + 1200 + 750 + 1500 + 200 + 1500 = 5350W (or VA, assuming unity power factor for simplicity in this example).

*   **Demand Load Calculation (Simplified Example - Actual code application is more detailed):**
    *   Let's assume a code dictates specific demand factors for kitchen appliances and receptacles.
    *   *Refrigerator:* Often considered a critical load and might be taken at 100% or a specific factor. Let's use 100% for simplicity = 200W.
    *   *Dishwasher, Disposal, Microwave:* These are appliances. If they are on dedicated circuits, their individual demand might be considered. If they are part of a larger receptacle load calculation, specific factors apply.
    *   *Receptacle Load:* Codes often have a specific calculation for receptacle loads, often applying a lower demand factor. For example, the first 10 outlets might be taken at 100%, then a reduced factor for subsequent outlets.
    *   *Lighting:* Often has its own demand factor.

    A more realistic calculation might involve looking up the NEC (or relevant code) tables for "Kitchen Small Appliance Branch Circuits" and "General Lighting, Motors, and Other Loads" in dwelling units.

    **Key takeaway:** Connected load is the sum of all ratings. Demand load is a calculated value that accounts for the *actual* usage patterns and diversity, resulting in a lower, more realistic load for system sizing.

---

### 7. Impact of Thermal Comfort Systems on Electrical Load

Thermal comfort systems are significant contributors to a building's overall electrical load.

#### Key Concepts:

*   **Heating and Cooling Equipment:**
    *   **Electric Resistance Heating:** Very high electrical loads (e.g., electric furnaces, baseboard heaters). Power consumption is directly proportional to resistance and the square of the voltage.
    *   **Heat Pumps and Air Conditioners:** Utilize compressors, fans, and control systems. The load is primarily for the compressor and fans. Cooling loads are often higher than heating loads for the same system in many climates.
    *   **Chillers and Boilers (for large buildings):** These are large central systems with substantial electrical demands for compressors, pumps, and fans.
*   **Ventilation Systems:**
    *   **Fans:** Supply fans, exhaust fans, circulation fans in HVAC units. These run continuously or intermittently to move air, impacting electrical consumption.
    *   **Air Handling Units (AHUs):** Combine fans, filters, heating/cooling coils, and control systems, representing a significant load.
*   **Humidifiers and Dehumidifiers:** Electrical loads for fans and heating elements.
*   **Controls and Sensors:** While individually small, the collective load of thermostats, sensors, building automation systems (BAS), and smart building controls can add up.

#### How it relates to Thermal Comfort:

*   **System Sizing:** The thermal loads calculated for heating and cooling directly inform the size of HVAC equipment, which in turn dictates the electrical load.
*   **Occupancy and Usage:** The comfort settings (temperature, humidity), setpoints, and operating schedules of HVAC systems are direct drivers of electrical consumption.
*   **Building Envelope:** A well-insulated and sealed building envelope reduces heating and cooling loads, thereby reducing the electrical demand of HVAC systems. Conversely, poor insulation leads to higher electrical loads.
*   **Energy Efficiency Measures:** Implementing energy-efficient HVAC systems, variable speed drives for fans and pumps, and smart control strategies can significantly reduce the electrical load associated with thermal comfort.

#### Example:

Consider an office building in a hot climate.
*   **Connected Load:** Total connected load for lights, receptacles, and IT equipment might be 200 kW.
*   **HVAC Load:** The cooling system (chillers, air handlers, pumps) is designed to handle a peak cooling load of 500 kW.
*   **Total Connected Load:** 200 kW + 500 kW = 700 kW.
*   **Demand Load Calculation:**
    *   Lighting and receptacles might have a demand factor applied.
    *   The HVAC system's full capacity (500 kW) might be considered for the peak demand, or a slightly reduced factor might apply if the peak of all systems doesn't coincide.
    *   If the building's total demand load is calculated to be 600 kW (after applying demand factors and considering diversity), this value will be used for sizing the main electrical service. The HVAC system is clearly a dominant factor in this scenario.

---

### Important Points to Remember

*   **Codes are Paramount:** Always refer to the latest edition of the relevant electrical code (NEC, BS 7671, etc.) for specific demand factors, calculation methods, and requirements.
*   **Connected Load vs. Demand Load:** Understand the difference and why demand load is used for system sizing.
*   **Continuous Loads:** Remember the 125% rule for conductors and overcurrent protection of continuous loads.
*   **HVAC Dominance:** HVAC systems are often the largest single contributor to a building's electrical load, especially in climates with significant heating or cooling needs.
*   **Accuracy:** Precise load calculations are essential for safety, efficiency, and cost-effectiveness.
*   **Power Factor:** For AC circuits, it's important to consider the power factor, as it affects the apparent power (VA) which is used for sizing.
*   **Future Expansion:** Always consider potential future additions or increases in electrical load during the design phase.

---

### Practice Questions/Exercises

**Question 1:**
What is the difference between connected load and demand load?

**Answer 1:**
*   **Connected Load:** The sum of the power ratings of all electrical equipment and fixtures intended to be connected to the electrical system. It represents the maximum possible power that *could* be used.
*   **Demand Load:** The actual electrical power expected to be used by the building at any given time, calculated by applying demand factors and considering diversity to the connected load. It's a more realistic estimate of the load for system sizing.

**Question 2:**
Explain the purpose of a demand factor in electrical load calculations.

**Answer 2:**
Demand factors are multipliers applied to the connected load to reduce it to a more realistic value. They account for the fact that not all connected loads operate simultaneously at their full rated capacity, preventing oversizing of electrical services and equipment, leading to cost savings and improved efficiency.

**Question 3:**
Name three major sources of electrical load in a typical commercial building.

**Answer 3:**
1.  Lighting Loads
2.  HVAC Loads (Heating, Ventilation, and Air Conditioning)
3.  Power Loads (Receptacles for office equipment, computers, etc.)
    *(Other valid answers include: Motor loads, appliance loads, special equipment loads)*

**Question 4:**
A room has a connected lighting load of 1500 VA. The electrical code specifies a demand factor of 0.8 for lighting in this type of occupancy. What is the calculated demand load for lighting in this room?

**Answer 4:**
Calculated Demand Load = Connected Load × Demand Factor
Calculated Demand Load = 1500 VA × 0.8
**Calculated Demand Load = 1200 VA**

**Question 5:**
Why are HVAC systems often the largest contributors to a building's electrical load?

**Answer 5:**
HVAC systems are responsible for maintaining comfortable indoor temperatures and air quality, which involves significant energy consumption for:
*   **Compressors and Motors:** To run air conditioners, heat pumps, fans, and pumps.
*   **Heating Elements:** In electric resistance heating systems.
*   **Continuous Operation:** HVAC systems often operate for extended periods, especially during peak seasons or in buildings with high internal heat gains.
*   **High Power Ratings:** The equipment required to condition large volumes of air is inherently powerful.

---
