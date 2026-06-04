---
title: "SFEE"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f4e"
status: "completed"
scrapedAt: "2026-05-20T17:53:28.214Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics

## Topic: Steady-Flow Energy Equation (SFEE)

This topic delves into the application of the First Law of Thermodynamics to **open systems** operating under **steady-flow conditions**. This is a crucial aspect of thermodynamic analysis as many engineering devices, such as turbines, pumps, compressors, and heat exchangers, operate in a steady-flow manner.

---

### Learning Outcomes Covered:

*   **Understand the First Law of Thermodynamics for steady-flow systems:** This section will build upon the general First Law and adapt it for the specific context of steady-flow.
*   **Analyze the components of the SFEE:** We will break down the equation into its constituent terms, understanding the energy transfer mechanisms involved.
*   **Apply the SFEE to various steady-flow devices:** This will involve working through numerous examples of common engineering equipment.
*   **Simplify the SFEE for specific cases:** Understanding how to reduce the SFEE under certain assumptions is vital for practical problem-solving.

---

### Course Outcomes Addressed:

*   **CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2):** This topic directly addresses the application of the First Law of Thermodynamics.
*   **CO3: Conduct first law analysis of open and closed systems (Knowledge Level: K3):** The primary focus of this topic is the first law analysis of open systems.

---

### 1. Introduction to Steady Flow

**Definition: Steady Flow Process:** A process during which a fluid flows through a control volume such that there is no change in conditions at any point within the control volume or on its boundaries with respect to time.

**Key Characteristics of Steady Flow:**

*   **Mass flow rate is constant:** The rate at which mass enters the control volume is equal to the rate at which mass leaves.
*   **Energy content of the control volume is constant:** Although energy can cross the boundaries, the net rate of energy accumulation within the control volume is zero.
*   **Properties at any point within the control volume are constant with time:** This implies that temperature, pressure, velocity, etc., do not change over time at a specific location.

**Important Distinction:** Steady flow does not imply that the fluid is stationary. The fluid is in motion, but its properties at any given point remain constant.

---

### 2. Derivation of the Steady-Flow Energy Equation (SFEE)

The SFEE is a direct consequence of the **conservation of energy** applied to a control volume under steady-flow conditions.

**General Energy Balance for a Control Volume:**

The most general form of the first law for a control volume states that the net rate of energy transfer into the control volume is equal to the rate of change of energy within the control volume.

$ \dot{E}_{in} - \dot{E}_{out} = \frac{dE_{CV}}{dt} $

Where:
*   $ \dot{E}_{in} $ is the total rate of energy transfer into the control volume ($ \text{kW} $ or $ \text{kJ/s} $).
*   $ \dot{E}_{out} $ is the total rate of energy transfer out of the control volume ($ \text{kW} $ or $ \text{kJ/s} $).
*   $ \frac{dE_{CV}}{dt} $ is the rate of change of energy within the control volume ($ \text{kW} $ or $ \text{kJ/s} $).

**Types of Energy Transfer:**

Energy can enter or leave the control volume through:
*   **Heat transfer ($\dot{Q}$):** Energy transferred due to a temperature difference.
*   **Work transfer ($\dot{W}$):** Energy transferred by mechanical means (shaft work, flow work).
*   **Mass flow ($\dot{m} \times e_{mass}$):** Energy carried by the mass entering or leaving.

**For a steady-flow process, $ \frac{dE_{CV}}{dt} = 0 $.** Therefore, the energy balance simplifies to:

$ \dot{E}_{in} = \dot{E}_{out} $

**Considering Energy Carried by Mass:**

Each unit of mass entering or leaving the control volume carries energy in various forms:
*   **Internal Energy ($u$):** Energy associated with the molecular motion.
*   **Kinetic Energy ($ke = \frac{V^2}{2}$):** Energy due to motion.
*   **Potential Energy ($pe = gz$):** Energy due to elevation.

Additionally, mass entering or leaving the control volume does work on the surrounding fluid. This is known as **flow work** or **pressure-energy**.

**Flow Work:** When a fluid enters or leaves a control volume, work is done by the fluid outside the control volume on the fluid inside, or vice-versa. For a fluid entering at pressure $P_1$ and velocity $V_1$ occupying a volume $v_1$ (specific volume), the flow work done on this fluid by the upstream fluid is $P_1 v_1$. Similarly, for fluid leaving at $P_2$ and $V_2$ occupying $v_2$, the flow work done by the fluid inside on the fluid outside is $P_2 v_2$.

**Total energy per unit mass ($e$) entering or leaving:**
$ e = u + ke + pe + Pv $
$ e = h + ke + pe $  (Since $h = u + Pv$)

**The SFEE Formulation:**

Let's consider a control volume with one inlet (state 1) and one outlet (state 2).

**Energy IN:**
*   Heat transfer into the CV: $ \dot{Q}_{in} $
*   Shaft work into the CV: $ \dot{W}_{shaft, in} $ (Conventionally, work done *by* the system is positive, so work done *on* the system is negative. Here, we'll group all work terms and define the convention later.)
*   Energy carried by mass entering: $ \dot{m}_1 (h_1 + \frac{V_1^2}{2} + gz_1) $

**Energy OUT:**
*   Heat transfer out of the CV: $ \dot{Q}_{out} $
*   Shaft work out of the CV: $ \dot{W}_{shaft, out} $
*   Energy carried by mass leaving: $ \dot{m}_2 (h_2 + \frac{V_2^2}{2} + gz_2) $

**Applying Conservation of Energy for Steady Flow ($ \dot{E}_{in} = \dot{E}_{out} $):**

$ \dot{Q}_{in} + \dot{W}_{shaft, in} + \dot{m}_1 (h_1 + \frac{V_1^2}{2} + gz_1) = \dot{Q}_{out} + \dot{W}_{shaft, out} + \dot{m}_2 (h_2 + \frac{V_2^2}{2} + gz_2) $

**For steady flow, $ \dot{m}_1 = \dot{m}_2 = \dot{m} $.**

$ \dot{Q}_{in} + \dot{W}_{shaft, in} + \dot{m} (h_1 + \frac{V_1^2}{2} + gz_1) = \dot{Q}_{out} + \dot{W}_{shaft, out} + \dot{m} (h_2 + \frac{V_2^2}{2} + gz_2) $

**Rearranging terms and defining net heat and work transfer:**

Let $ \dot{Q}_{net, in} = \dot{Q}_{in} - \dot{Q}_{out} $ (Net heat transfer into the CV)
Let $ \dot{W}_{net, out} = \dot{W}_{shaft, out} - \dot{W}_{shaft, in} $ (Net shaft work done by the CV)

$ \dot{Q}_{net, in} + \dot{m} (h_1 + \frac{V_1^2}{2} + gz_1) = \dot{W}_{net, out} + \dot{m} (h_2 + \frac{V_2^2}{2} + gz_2) $

**This is the Steady-Flow Energy Equation (SFEE) in its general form, expressed in terms of rates.**

**SFEE per unit mass:**

Dividing the equation by the mass flow rate $ \dot{m} $, we get the SFEE per unit mass:

$ q_{in} + (h_1 + \frac{V_1^2}{2} + gz_1) = w_{net, out} + (h_2 + \frac{V_2^2}{2} + gz_2) $

Or, rearranging to express net work done by the system:

$ w_{net, out} = (h_2 - h_1) + (\frac{V_2^2 - V_1^2}{2}) + g(z_2 - z_1) - q_{in} $

**Convention for Heat and Work:**

*   $ \dot{Q} $ is positive if heat is transferred *to* the system (control volume).
*   $ \dot{W} $ is positive if work is done *by* the system (control volume).

Using this convention, the SFEE can be written as:

$ \dot{Q} + \dot{W}_{shaft, in} + \dot{m} (h_1 + \frac{V_1^2}{2} + gz_1) = \dot{m} (h_2 + \frac{V_2^2}{2} + gz_2) + \dot{W}_{shaft, out} $

**The most common form of the SFEE (per unit mass, with work done by the system as positive):**

$ h_1 + \frac{V_1^2}{2} + gz_1 + q_{in} = h_2 + \frac{V_2^2}{2} + gz_2 + w_{out} $

Where:
*   $h$: Specific enthalpy ($ \text{kJ/kg} $).
*   $V$: Velocity ($ \text{m/s} $).
*   $g$: Acceleration due to gravity ($ \text{m/s}^2 $).
*   $z$: Elevation ($ \text{m} $).
*   $q_{in}$: Specific heat transfer into the system ($ \text{kJ/kg} $).
*   $w_{out}$: Specific work done by the system ($ \text{kJ/kg} $).

**Note on Units:**
When using the SFEE, ensure consistent units. Often, the kinetic and potential energy terms are small compared to enthalpy changes. For instance, if $V$ is in m/s, $\frac{V^2}{2}$ has units of $ (\text{m/s})^2 $. To convert to kJ/kg, divide by $1000 \, \text{m}^2/\text{s}^2 \cdot \text{kJ} $.

$ \frac{V^2}{2} \left( \frac{1 \, \text{kJ}}{1000 \, \text{J}} \right) = \frac{V^2}{2000} \, \text{kJ/kg} $

Similarly for potential energy:

$ g(z_2 - z_1) \left( \frac{1 \, \text{kJ}}{1000 \, \text{J}} \right) = \frac{g(z_2 - z_1)}{1000} \, \text{kJ/kg} $

**(Cengel & Boles, Chapter 6: Control Volume Analysis using Energy)**
**(P.K. Nag, Chapter 5: First Law of Thermodynamics for Open System)**

---

### 3. Components of the SFEE Explained

*   **Specific Enthalpy ($h = u + Pv$):** Represents the sum of internal energy and flow work per unit mass. It accounts for the energy stored within the fluid and the energy required to "push" the fluid into or out of the control volume.
    *   $u$: Specific internal energy.
    *   $Pv$: Specific flow work (pressure energy).

*   **Specific Kinetic Energy ($ke = \frac{V^2}{2}$):** Represents the energy associated with the bulk motion of the fluid. Significant for high-speed flows (e.g., in nozzles or jets).

*   **Specific Potential Energy ($pe = gz$):** Represents the energy associated with the position of the fluid in a gravitational field. Significant when there are large changes in elevation (e.g., in pumps or turbines handling large vertical lifts).

*   **Specific Heat Transfer ($q_{in}$):** The rate of heat transfer into the system per unit mass. Positive for heat added, negative for heat removed.

*   **Specific Work Transfer ($w_{out}$):** The net rate of work done by the system per unit mass. This includes shaft work (e.g., from a rotating shaft in a turbine or compressor) and any other forms of work. Flow work is already incorporated into the enthalpy term.

---

### 4. Applications of SFEE to Engineering Devices

The SFEE is a powerful tool for analyzing the performance of various steady-flow devices. By making appropriate assumptions, the SFEE can be significantly simplified for each device.

#### 4.1 Turbines (Work-Producing Devices)

**Function:** Extract energy from a flowing fluid and convert it into useful work, typically rotating a shaft. Examples: steam turbines, gas turbines, hydraulic turbines.

**Energy Transfer:**
*   Fluid enters at high pressure and/or enthalpy.
*   Fluid leaves at lower pressure and/or enthalpy.
*   Work is done *by* the turbine shaft ($w_{out} > 0$).
*   Heat transfer is often negligible ($q_{in} \approx 0$).
*   Changes in kinetic and potential energy are often negligible for large turbines.

**SFEE for a Turbine:**

$ h_1 + \frac{V_1^2}{2} + gz_1 + q_{in} = h_2 + \frac{V_2^2}{2} + gz_2 + w_{out} $

Assuming $q_{in} \approx 0$ and negligible changes in KE and PE:

$ h_1 = h_2 + w_{out} $

**Therefore, $w_{out} = h_1 - h_2$.**

This means the work output of a turbine is primarily determined by the drop in enthalpy of the working fluid.

**(Cengel & Boles, Chapter 6.4: Analyzing the Energy of Steady-Flow Devices)**
**(P.K. Nag, Chapter 5.6: Turbine)**

#### 4.2 Pumps and Compressors (Work-Consuming Devices)

**Function:** Impart energy to a fluid, increasing its pressure and/or velocity. Pumps handle liquids, while compressors handle gases.

**Energy Transfer:**
*   Fluid enters at lower pressure and/or enthalpy.
*   Fluid leaves at higher pressure and/or enthalpy.
*   Work is done *on* the pump/compressor shaft ($w_{in} > 0$, or $w_{out} < 0$).
*   Heat transfer is often negligible ($q_{in} \approx 0$).
*   Changes in kinetic and potential energy are often negligible for many pumps/compressors.

**SFEE for a Pump/Compressor:**

$ h_1 + \frac{V_1^2}{2} + gz_1 + q_{in} = h_2 + \frac{V_2^2}{2} + gz_2 + w_{out} $

Assuming $q_{in} \approx 0$ and negligible changes in KE and PE:

$ h_1 = h_2 + w_{out} $

**Therefore, $w_{out} = h_1 - h_2$.** Since $h_2 > h_1$, $w_{out}$ is negative, indicating work is done on the system. The work input is $w_{in} = -w_{out} = h_2 - h_1$.

**(Cengel & Boles, Chapter 6.4: Analyzing the Energy of Steady-Flow Devices)**
**(P.K. Nag, Chapter 5.7: Pump and Compressor)**

#### 4.3 Heat Exchangers (e.g., Condensers, Boilers, Radiators)

**Function:** Transfer heat between two fluids at different temperatures without significant work transfer or mass transfer between the fluids themselves.

**Energy Transfer:**
*   Two separate flow streams (primary and secondary).
*   No shaft work ($w_{out} = 0$).
*   No change in kinetic or potential energy is usually assumed ($ \Delta ke \approx 0, \Delta pe \approx 0 $).
*   Heat transfer occurs between the fluids, but not necessarily to/from the surroundings.

**SFEE for one fluid stream (say, Fluid 1):**

Let Fluid 1 enter at state 1 and leave at state 2.
Let Fluid 2 enter at state 3 and leave at state 4.

For Fluid 1:
$ h_1 + q_{in,1} = h_2 + w_{out,1} $
Since $w_{out,1} = 0$:
$ h_1 + q_{in,1} = h_2 $
$ q_{in,1} = h_2 - h_1 $

The heat gained by Fluid 1 ($q_{in,1}$) is lost by Fluid 2 ($q_{out,2}$).
So, $q_{out,2} = -(h_4 - h_3)$.

The energy balance for the entire heat exchanger as a control volume states that the net heat added must be zero if there's no heat loss to the surroundings. Therefore, heat gained by one fluid must equal heat lost by the other.

$ \dot{m}_1 (h_2 - h_1) = \dot{m}_2 (h_3 - h_4) $

Or, per unit mass of Fluid 1:
$ q_{in,1} = \frac{\dot{m}_2}{\dot{m}_1} (h_3 - h_4) $

**(Cengel & Boles, Chapter 6.4: Analyzing the Energy of Steady-Flow Devices)**
**(P.K. Nag, Chapter 5.8: Heat Exchanger)**

#### 4.4 Nozzles and Diffusers

**Function:**
*   **Nozzle:** Increases the velocity of a fluid by decreasing its pressure. Typically used to convert thermal or flow energy into kinetic energy. Examples: jet engines, steam turbines.
*   **Diffuser:** Decreases the velocity of a fluid by increasing its pressure. Typically used to convert kinetic energy into thermal or flow energy. Examples: aircraft inlets.

**Energy Transfer:**
*   Work transfer is zero ($w_{out} = 0$).
*   Heat transfer is often negligible ($q_{in} \approx 0$).
*   Changes in kinetic energy are significant ($ \Delta ke \neq 0 $).
*   Changes in potential energy are usually negligible ($ \Delta pe \approx 0 $).

**SFEE for a Nozzle/Diffuser:**

$ h_1 + \frac{V_1^2}{2} + gz_1 + q_{in} = h_2 + \frac{V_2^2}{2} + gz_2 + w_{out} $

Assuming $q_{in} \approx 0$, $w_{out} = 0$, and $ \Delta pe \approx 0 $:

$ h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2} $

**Therefore, $h_2 - h_1 = \frac{V_1^2 - V_2^2}{2}$.**

*   **For a nozzle:** $V_2 > V_1$, so $h_2 < h_1$. This means the fluid cools as its velocity increases (enthalpy drop).
*   **For a diffuser:** $V_1 > V_2$, so $h_1 < h_2$. This means the fluid heats up as its velocity decreases (enthalpy rise).

**(Cengel & Boles, Chapter 6.4: Analyzing the Energy of Steady-Flow Devices)**
**(P.K. Nag, Chapter 5.9: Nozzle and Diffuser)**

#### 4.5 Throttling Devices (e.g., Expansion Valves, Capillary Tubes)

**Function:** Reduce the pressure of a liquid or gas by passing it through a restriction.

**Energy Transfer:**
*   Work transfer is zero ($w_{out} = 0$).
*   Heat transfer is often negligible ($q_{in} \approx 0$).
*   Changes in kinetic energy are usually negligible ($ \Delta ke \approx 0 $).
*   Changes in potential energy are usually negligible ($ \Delta pe \approx 0 $).

**SFEE for a Throttling Device:**

$ h_1 + \frac{V_1^2}{2} + gz_1 + q_{in} = h_2 + \frac{V_2^2}{2} + gz_2 + w_{out} $

Assuming $q_{in} \approx 0$, $w_{out} = 0$, $ \Delta ke \approx 0 $, and $ \Delta pe \approx 0 $:

$ h_1 = h_2 $

**Throttling is an isenthalpic process.** The enthalpy remains constant across the throttling device. However, the temperature and pressure change significantly. This process is irreversible.

**(Cengel & Boles, Chapter 6.4: Analyzing the Energy of Steady-Flow Devices)**
**(P.K. Nag, Chapter 5.10: Throttling Process)**

---

### 5. Multiple-Inlet and Multiple-Outlet Control Volumes

The SFEE can be generalized for control volumes with multiple inlets and outlets:

$ \dot{Q}_{net, in} + \sum_{in} \dot{m}_i (h_i + \frac{V_i^2}{2} + gz_i) = \dot{W}_{net, out} + \sum_{out} \dot{m}_e (h_e + \frac{V_e^2}{2} + gz_e) $

Where:
*   $ \sum_{in} $ denotes summation over all inlets.
*   $ \sum_{out} $ denotes summation over all outlets.
*   For steady flow, $ \sum_{in} \dot{m}_i = \sum_{out} \dot{m}_e = \dot{m}_{total} $.

**(Cengel & Boles, Chapter 6.3: Conservation of Mass)**
**(P.K. Nag, Chapter 5.3: Continuity Equation for Steady Flow)**

---

### 6. Important Points to Remember

*   **SFEE is for Steady Flow:** Ensure the process is steady before applying the SFEE.
*   **Control Volume Analysis:** The SFEE is derived for a control volume. Clearly define the boundaries of your CV.
*   **Energy Forms:** Account for all relevant energy forms: enthalpy (internal energy + flow work), kinetic energy, and potential energy.
*   **Sign Conventions:** Be consistent with the sign conventions for heat and work. The most common is $ \dot{Q} > 0 $ for heat in, $ \dot{W} > 0 $ for work out.
*   **Assumptions:** Carefully state and justify any assumptions made (e.g., negligible heat transfer, negligible KE/PE changes). These assumptions significantly simplify the SFEE.
*   **Units:** Maintain consistency in units. Pay special attention to units when calculating KE and PE terms.
*   **Enthalpy:** For many common devices (turbines, compressors), the change in enthalpy is the primary factor determining work transfer.
*   **Throttling:** Throttling is an isenthalpic process ($h_1 = h_2$).
*   **Nozzles/Diffusers:** Primary energy conversion is between enthalpy and kinetic energy.
*   **Heat Exchangers:** Focus is on heat transfer between fluids, with negligible work and KE/PE changes.

---

### 7. Practice Questions and Exercises

**Question 1 (Turbine Work):**
Steam enters a turbine at 4000 kPa and 550°C and leaves at 10 kPa. The specific enthalpies are $h_1 = 3500 \, \text{kJ/kg}$ and $h_2 = 2600 \, \text{kJ/kg}$. The inlet velocity is 60 m/s and the outlet velocity is 270 m/s. The changes in potential energy are negligible, and heat transfer to the surroundings is 50 kJ/kg. Calculate the work output of the turbine per unit mass of steam.

**Solution 1:**
Using the SFEE per unit mass:
$ h_1 + \frac{V_1^2}{2} + gz_1 + q_{in} = h_2 + \frac{V_2^2}{2} + gz_2 + w_{out} $

Given:
$ h_1 = 3500 \, \text{kJ/kg} $
$ h_2 = 2600 \, \text{kJ/kg} $
$ V_1 = 60 \, \text{m/s} $
$ V_2 = 270 \, \text{m/s} $
$ \Delta z = z_2 - z_1 \approx 0 $
$ q_{in} = -50 \, \text{kJ/kg} $ (Heat transfer *to* the surroundings means heat transfer *from* the system)

Convert KE terms to kJ/kg:
$ \frac{V_1^2}{2} = \frac{(60 \, \text{m/s})^2}{2 \times 1000} = \frac{3600}{2000} = 1.8 \, \text{kJ/kg} $
$ \frac{V_2^2}{2} = \frac{(270 \, \text{m/s})^2}{2 \times 1000} = \frac{72900}{2000} = 36.45 \, \text{kJ/kg} $

Substitute into SFEE:
$ 3500 + 1.8 + 0 + (-50) = 2600 + 36.45 + 0 + w_{out} $
$ 3451.8 = 2636.45 + w_{out} $
$ w_{out} = 3451.8 - 2636.45 $
$ w_{out} = 815.35 \, \text{kJ/kg} $

**Answer:** The work output of the turbine is 815.35 kJ/kg.

---

**Question 2 (Pump Work):**
Water enters a pump at 20°C and 100 kPa with negligible velocity and leaves at a pressure of 1500 kPa. The pump efficiency is 80%. The specific volume of water at the inlet is $ v_1 = 0.001002 \, \text{m}^3/\text{kg} $. Assume the process is isothermal and reversible (isentropic for liquids). Calculate the actual work input required by the pump per unit mass of water.

**Solution 2:**
For a pump, work is done *on* the system, so $w_{out}$ will be negative.
SFEE per unit mass:
$ h_1 + \frac{V_1^2}{2} + gz_1 + q_{in} = h_2 + \frac{V_2^2}{2} + gz_2 + w_{out} $

For liquids, assuming no phase change and negligible heat transfer ($q_{in} \approx 0$) and velocity changes ($ \Delta ke \approx 0 $), and potential energy changes ($ \Delta pe \approx 0 $):
$ h_1 \approx h_2 $
This implies that for liquids, the enthalpy change is negligible, and the SFEE reduces to relating pressure and specific volume for work.

The work done on the pump can be approximated by:
$ w_{in} \approx v (P_2 - P_1) $  (This is derived from $w = \int P dv$ for a reversible process, for incompressible substances $v$ is constant)

Given:
$ P_1 = 100 \, \text{kPa} $
$ P_2 = 1500 \, \text{kPa} $
$ v = v_1 = 0.001002 \, \text{m}^3/\text{kg} $

Ideal work input (assuming reversible, isentropic process with no KE/PE changes):
$ w_{in, ideal} = v (P_2 - P_1) = (0.001002 \, \text{m}^3/\text{kg}) (1500 - 100) \, \text{kPa} $
$ w_{in, ideal} = (0.001002) (1400) \, \text{kPa} \cdot \text{m}^3/\text{kg} $
$ w_{in, ideal} = 1.4028 \, \text{kPa} \cdot \text{m}^3/\text{kg} $

Convert to kJ/kg: $ 1 \, \text{kPa} \cdot \text{m}^3 = 1 \, \text{kJ} $
$ w_{in, ideal} = 1.4028 \, \text{kJ/kg} $

Actual work input considering pump efficiency ($ \eta_{pump} = 0.80 $):
$ \eta_{pump} = \frac{w_{in, ideal}}{w_{in, actual}} $
$ w_{in, actual} = \frac{w_{in, ideal}}{\eta_{pump}} = \frac{1.4028 \, \text{kJ/kg}}{0.80} $
$ w_{in, actual} = 1.7535 \, \text{kJ/kg} $

**Answer:** The actual work input required by the pump is 1.7535 kJ/kg.

---

**Question 3 (Nozzle Velocity):**
Air enters a nozzle at 300 K and 100 kPa with a velocity of 50 m/s. The air expands to a pressure of 20 kPa. The process is adiabatic and reversible. Assuming air behaves as an ideal gas with $ c_p = 1.005 \, \text{kJ/(kg} \cdot \text{K)} $ and $ k = 1.4 $, determine the exit velocity of the air.

**Solution 3:**
SFEE for a nozzle, adiabatic ($q_{in} = 0$) and reversible ($w_{out} = 0$), negligible PE changes:
$ h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2} $
$ V_2^2 = V_1^2 + 2 (h_1 - h_2) $

For an ideal gas, $ h_1 - h_2 = c_p (T_1 - T_2) $.
We need to find $T_2$. For a reversible adiabatic (isentropic) process for an ideal gas:
$ T_2 = T_1 \left( \frac{P_2}{P_1} \right)^{(k-1)/k} $

Given:
$ T_1 = 300 \, \text{K} $
$ P_1 = 100 \, \text{kPa} $
$ V_1 = 50 \, \text{m/s} $
$ P_2 = 20 \, \text{kPa} $
$ c_p = 1.005 \, \text{kJ/(kg} \cdot \text{K)} $
$ k = 1.4 $

Calculate $T_2$:
$ \frac{k-1}{k} = \frac{1.4-1}{1.4} = \frac{0.4}{1.4} = \frac{2}{7} \approx 0.2857 $
$ T_2 = 300 \, \text{K} \left( \frac{20 \, \text{kPa}}{100 \, \text{kPa}} \right)^{0.2857} = 300 \, \text{K} (0.2)^{0.2857} $
$ T_2 = 300 \, \text{K} (0.7214) = 216.42 \, \text{K} $

Now calculate $h_1 - h_2$:
$ h_1 - h_2 = c_p (T_1 - T_2) = (1.005 \, \text{kJ/(kg} \cdot \text{K)}) (300 - 216.42) \, \text{K} $
$ h_1 - h_2 = (1.005) (83.58) \, \text{kJ/kg} = 83.998 \, \text{kJ/kg} $

Convert enthalpy difference to $ (\text{m/s})^2 $:
$ 2 (h_1 - h_2) = 2 \times 83.998 \, \text{kJ/kg} = 167.996 \, \text{kJ/kg} $
$ 2 (h_1 - h_2) = 167.996 \times 1000 \, \text{(m/s)}^2/\text{kg} = 167996 \, \text{(m/s)}^2 $

Calculate $V_2$:
$ V_2^2 = V_1^2 + 2 (h_1 - h_2) = (50 \, \text{m/s})^2 + 167996 \, \text{(m/s)}^2 $
$ V_2^2 = 2500 + 167996 = 170496 \, \text{(m/s)}^2 $
$ V_2 = \sqrt{170496} \, \text{m/s} \approx 412.91 \, \text{m/s} $

**Answer:** The exit velocity of the air is approximately 412.91 m/s.

---

### 8. Additional Practice Questions (Self-Assessment)

1.  **Heat Exchanger Analysis:** 5 kg/s of hot water enters a heat exchanger at 80°C and 100 kPa and leaves at 40°C. The specific heat of water is $c_p = 4.18 \, \text{kJ/(kg} \cdot \text{K)}$. Cold oil enters the heat exchanger at 20°C and has a mass flow rate of 10 kg/s. Assume no heat loss to the surroundings and negligible changes in kinetic and potential energies for both streams. Determine the exit temperature of the oil. (Given $c_p$ for oil is approximately $2.1 \, \text{kJ/(kg} \cdot \text{K)}$).
    *   **Answer:** $ T_{oil, exit} \approx 59.5 \, °C $

2.  **Throttling Process:** Refrigerant-134a enters a throttling valve at 0.8 MPa and 40°C. It leaves at 0.15 MPa. Determine the exit temperature and quality of the refrigerant. Assume throttling is an isenthalpic process. (You will need to refer to Refrigerant-134a property tables for this).
    *   **Answer:** (Requires R-134a tables) Exit temperature will be significantly lower than inlet temperature, and the quality will be high (close to 1 if it's a liquid-vapor mixture).

3.  **Compressor Work:** Air enters an adiabatic compressor at 100 kPa and 17°C with a velocity of 30 m/s and leaves at 500 kPa with a velocity of 70 m/s. The mass flow rate is 2 kg/s. The exit temperature is 140°C. Calculate the power required to drive the compressor.
    *   **Answer:** (Requires ideal gas properties and SFEE) Power required $\approx 298.5 \, \text{kW}$

---

This comprehensive set of notes covers the Steady-Flow Energy Equation, its derivation, components, applications to various engineering devices, and includes examples and practice questions. It aims to fulfill the learning outcomes and align with the provided course outcomes. Remember to consult your textbooks for detailed property data and more in-depth explanations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
