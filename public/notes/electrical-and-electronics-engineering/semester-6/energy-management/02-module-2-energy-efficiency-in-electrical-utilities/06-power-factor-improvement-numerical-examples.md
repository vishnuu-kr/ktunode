---
title: "Power factor improvement, numerical examples."
subject: "ENERGY MANAGEMENT"
module: "Module 2: Energy Efficiency in Electrical Utilities:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36706"
status: "completed"
scrapedAt: "2026-05-23T16:27:43.531Z"
---
# ENERGY MANAGEMENT

## Module 2: Energy Efficiency in Electrical Utilities

### Topic: Power Factor Improvement & Numerical Examples

---

### **Introduction to Power Factor**

**Definition:** Power factor (PF) is the ratio of the real power (kW) to the apparent power (kVA) in an AC electrical system. It represents how effectively electrical power is being used.

*   **Real Power (kW):** The actual power consumed by a load to perform useful work (e.g., light, heat, mechanical motion).
*   **Reactive Power (kVAR):** The power required by inductive or capacitive components to establish and maintain magnetic or electric fields. It does not perform useful work but is essential for the operation of equipment like motors and transformers.
*   **Apparent Power (kVA):** The vector sum of real power and reactive power. It represents the total power that the electrical system must supply.

**Relationship:** These three powers are related by the power triangle:

```
      Apparent Power (kVA)
      /|
     / | Reactive Power (kVAR)
    /  |
   /___|
Real Power (kW)
```

**Power Factor (PF) = Real Power (kW) / Apparent Power (kVA)**

**Power Triangle Formula:** $kVA^2 = kW^2 + kVAR^2$

---

### **Understanding the Importance of Power Factor**

A low power factor indicates that a significant portion of the apparent power is reactive power, meaning the electrical system is not being utilized efficiently. This has several negative consequences:

*   **Increased Current:** For a given amount of real power, a lower power factor requires a higher current. This leads to:
    *   **Higher I²R Losses:** Increased current flowing through conductors causes greater heat dissipation ($P = I^2R$), resulting in wasted energy.
    *   **Oversized Equipment:** Larger conductors, transformers, and switchgear are required to handle the increased current, leading to higher capital costs.
*   **Voltage Drops:** Higher currents cause increased voltage drops along the distribution system, potentially affecting the performance of sensitive equipment.
*   **Reduced System Capacity:** The generator and distribution system capacity is measured in kVA. A lower power factor means more kVA is needed to deliver the same kW, reducing the available capacity for additional loads.
*   **Penalties from Utilities:** Many electricity utilities impose penalties on industrial and commercial customers with power factors below a certain threshold (typically 0.85 or 0.9 lagging). This is because they have to supply the reactive power, which requires larger and more expensive infrastructure.

**Lagging vs. Leading Power Factor:**

*   **Lagging Power Factor:** Occurs with inductive loads (e.g., induction motors, transformers, fluorescent lighting ballasts). Current lags behind voltage. This is the most common scenario in industrial and commercial settings.
*   **Leading Power Factor:** Occurs with capacitive loads (e.g., synchronous condensers, capacitor banks). Current leads voltage.

**Ideal Power Factor:** A power factor of 1.0 (unity) is ideal, meaning all apparent power is real power.

---

### **Power Factor Improvement**

**Objective:** To increase the power factor of an electrical system, typically from a lagging value closer to unity.

**Method:** The most common method for improving a lagging power factor is by introducing **capacitive compensation**. Static capacitor banks are connected in parallel with the inductive loads.

**How it Works:** Capacitors supply reactive power to inductive loads, effectively cancelling out a portion of the lagging reactive power drawn from the supply. This reduces the overall reactive power demand from the utility, thereby increasing the power factor.

**Types of Compensation:**

1.  **Centralized Compensation:** A single large capacitor bank is installed at the main incoming supply point.
2.  **Group Compensation:** Capacitor banks are installed at the distribution panel of a group of loads.
3.  **Individual Compensation:** Capacitors are connected directly to individual large inductive loads (e.g., induction motors). This is often the most effective method, as it compensates for reactive power at the source.

**Calculating the Required Capacitance:**

The goal is to reduce the reactive power component (kVAR) of the system. We can use the power triangle to calculate the required kVAR of the capacitor bank.

**Steps:**

1.  **Determine the existing power factor (PF₁).**
2.  **Determine the desired power factor (PF₂).**
3.  **Calculate the existing reactive power (kVAR₁).**
    *   $kVAR_1 = kW \times \tan(\theta_1)$
    *   where $\theta_1 = \cos^{-1}(PF_1)$
4.  **Calculate the desired reactive power (kVAR₂).**
    *   $kVAR_2 = kW \times \tan(\theta_2)$
    *   where $\theta_2 = \cos^{-1}(PF_2)$
5.  **Calculate the required reactive power to be supplied by the capacitor bank (kVAR_c).**
    *   $kVAR_c = kVAR_1 - kVAR_2$

**Calculating the Capacitance Value:**

The reactive power of a capacitor is given by:
$kVAR_c = \frac{V^2}{X_C} = \frac{V^2}{1/(2\pi f C)} = 2\pi f C V^2$

Where:
*   $V$ = System voltage (in kV)
*   $f$ = System frequency (in Hz)
*   $C$ = Capacitance (in Farads)

Rearranging for capacitance:
$C = \frac{kVAR_c}{2\pi f V^2}$ (in Farads)

To get capacitance in microfarads ($\mu F$):
$C (\mu F) = \frac{kVAR_c \times 10^6}{2\pi f V^2}$

Or, a simpler formula relating kVAR to capacitance at a given voltage and frequency:
$C (\mu F) = \frac{kVAR_c}{\text{Voltag}^2 \times \text{Frequency}} \times 1000 \times (\frac{1000}{2\pi})$
**Simplified Formula for $\mu F$ at 50 Hz and 400V:**
$C (\mu F) = \frac{kVAR_c}{V_{kV}^2} \times \frac{1000}{2\pi \times 50}$
$C (\mu F) = \frac{kVAR_c}{(V_{kV})^2} \times 3.18 \times 1000$  (This is a common approximation for metric units)

**A more direct approach using kVAR relationships:**
$kVAR_c = kW (\tan(\cos^{-1}(PF_1)) - \tan(\cos^{-1}(PF_2)))$

---

### **Numerical Examples**

**Example 1: Simple Power Factor Improvement**

**Problem:** An industrial plant has a total connected load of 500 kW, operating at a power factor of 0.7 lagging. The supply voltage is 400 V, and the frequency is 50 Hz. The utility charges a penalty for power factors below 0.9. Calculate the size of the capacitor bank required to improve the power factor to 0.95 lagging.

**Solution:**

1.  **Existing Conditions:**
    *   $kW = 500 \text{ kW}$
    *   $PF_1 = 0.7 \text{ lagging}$
    *   $\theta_1 = \cos^{-1}(0.7) \approx 45.57^\circ$
    *   $kVAR_1 = kW \times \tan(\theta_1) = 500 \times \tan(45.57^\circ) = 500 \times 1.02 = 510 \text{ kVAR}$
    *   $kVA_1 = \frac{kW}{PF_1} = \frac{500}{0.7} \approx 714.3 \text{ kVA}$

2.  **Desired Conditions:**
    *   $kW = 500 \text{ kW}$ (Real power remains the same)
    *   $PF_2 = 0.95 \text{ lagging}$
    *   $\theta_2 = \cos^{-1}(0.95) \approx 18.19^\circ$
    *   $kVAR_2 = kW \times \tan(\theta_2) = 500 \times \tan(18.19^\circ) = 500 \times 0.3287 \approx 164.35 \text{ kVAR}$
    *   $kVA_2 = \frac{kW}{PF_2} = \frac{500}{0.95} \approx 526.3 \text{ kVA}$

3.  **Required Capacitor Bank Size:**
    *   $kVAR_c = kVAR_1 - kVAR_2 = 510 \text{ kVAR} - 164.35 \text{ kVAR} = 345.65 \text{ kVAR}$

4.  **Capacitance Calculation (using simplified formula):**
    *   $V = 400 \text{ V} = 0.4 \text{ kV}$
    *   $f = 50 \text{ Hz}$
    *   $C (\mu F) = \frac{kVAR_c \times 1000}{V_{kV}^2 \times f} \times (\frac{1000}{2\pi})$  (Using the general formula to be precise)
    *   $C (\mu F) = \frac{345.65 \times 1000}{(0.4)^2 \times 50} \times (\frac{1000}{2\pi}) = \frac{345650}{0.16 \times 50} \times 159.15 = \frac{345650}{8} \times 159.15 = 43206.25 \times 159.15 \approx 6,878,420 \mu F$

    **Let's use the more standard direct formula for kVAR to capacitance:**
    $C (\mu F) = \frac{kVAR_c}{2\pi f V^2} \times 10^6$
    $C (\mu F) = \frac{345.65 \times 10^6}{2\pi \times 50 \times (400)^2} = \frac{345.65 \times 10^6}{2\pi \times 50 \times 160000} = \frac{345.65 \times 10^6}{5026548} \approx 68.75 \mu F$

    **Important Note:** Capacitors are typically available in standard sizes. The calculated value of $345.65 \text{ kVAR}$ would be achieved by using a combination of standard capacitor units, perhaps totaling 350 kVAR.

**Example 2: Calculating Savings and Payback Period**

**Problem:** Continuing with Example 1, assume the following:
*   The plant operates for 300 days a year, 10 hours a day.
*   The electricity tariff is ₹5 per kWh and there's a penalty of ₹200 per kVAh for the excess kVA demand above the kVA at 0.9 PF.
*   The cost of the capacitor bank (including installation) is ₹500,000.

Calculate the annual savings and the payback period.

**Solution:**

1.  **Calculate Annual Energy Consumption:**
    *   Annual Operating Hours = 300 days/year * 10 hours/day = 3000 hours/year
    *   Annual Energy (kWh) = $kW \times \text{Operating Hours} = 500 \text{ kW} \times 3000 \text{ hours} = 1,500,000 \text{ kWh}$

2.  **Calculate Annual Electricity Cost (before improvement):**
    *   This part is tricky without knowing the peak demand in kVA. Utilities often charge based on a combination of energy (kWh) and peak demand (kVA). Let's assume for simplicity that the penalty is solely based on the kVAh exceeding a certain point.
    *   However, the most common penalty structure is a **power factor penalty**. Let's rephrase the problem to be more typical: "The utility charges ₹5 per kWh and penalizes for power factor below 0.9. For every 0.01 drop in PF below 0.9, a penalty of 0.5% of the energy bill is levied."
    *   Let's use a more direct penalty as stated: ₹200 per kVAh for excess kVA demand above the kVA at 0.9 PF.
    *   **Existing kVAh:** $kVA_1 \times \text{Operating Hours} = 714.3 \text{ kVA} \times 3000 \text{ hours} = 2,142,900 \text{ kVAh}$
    *   **Target kVAh (at 0.9 PF):** $kVA_{target} = \frac{500}{0.9} = 555.56 \text{ kVA}$. So, $kVAh_{target} = 555.56 \text{ kVA} \times 3000 \text{ hours} = 1,666,680 \text{ kVAh}$
    *   **Excess kVAh:** $2,142,900 \text{ kVAh} - 1,666,680 \text{ kVAh} = 476,220 \text{ kVAh}$
    *   **Annual Penalty Cost:** $476,220 \text{ kVAh} \times ₹200/\text{kVAh} = ₹95,244,000$ (This penalty is extremely high, suggesting the utility might charge per kVA of peak demand, not kVAh. Let's assume the penalty is on peak demand kVA).

    **Revised Penalty Interpretation (More Realistic):** The utility charges based on a combination of energy and peak demand. Let's assume there's a base demand charge and a power factor penalty. A common structure is:
    *   Energy Charge: ₹5/kWh
    *   Demand Charge: ₹X per kVA of peak demand.
    *   Power Factor Penalty: If PF < 0.9, a penalty is applied. Let's assume the penalty is ₹200 per kVA *per month* for every 0.01 reduction in PF below 0.9.

    **Let's simplify and focus on the direct benefits of reducing kVA demand.**

    *   **Annual Energy Cost:** $1,500,000 \text{ kWh} \times ₹5/\text{kWh} = ₹7,500,000$
    *   **Savings from reduced kVA:**
        *   The primary saving comes from avoiding penalties and potentially reducing demand charges if they are based on kVA.
        *   If the utility has a penalty structure based on kVAh consumption due to low PF, the saving is the reduction in kVAh.
        *   Let's assume the penalty is such that the *effective* cost per kWh increases with lower PF.
        *   A simpler way to look at savings is the reduction in kVA, and thus the associated costs.

    **Let's reframe the saving calculation focusing on the reduction in apparent power:**
    *   Reduced Apparent Power ($kVA$): $kVA_1 - kVA_2 = 714.3 \text{ kVA} - 526.3 \text{ kVA} = 188 \text{ kVA}$
    *   If the utility charges, say, ₹500 per kVA per month for demand, then:
        *   Monthly Savings = $188 \text{ kVA} \times ₹500/\text{kVA} = ₹94,000$
        *   Annual Savings = $94,000 \times 12 = ₹1,128,000$

    **Alternative Saving calculation based on the penalty:**
    *   Let's assume the penalty is ₹200 per kVAh of *excess* kVAh above the 0.9 PF level *for the entire year*.
    *   Annual Penalty Savings = $476,220 \text{ kVAh} \times ₹200/\text{kVAh} = ₹95,244,000$. This is still too high.

    **Let's consider a more standard utility penalty: PF penalty on the total energy bill.**
    *   Assume utility penalizes 0.5% of the energy bill for every 0.01 below 0.9 PF.
    *   Existing PF = 0.7
    *   Target PF = 0.95
    *   PF deficiency from 0.9 = $0.9 - 0.7 = 0.2$
    *   Number of 0.01 units below 0.9 = $0.2 / 0.01 = 20$
    *   Penalty percentage = $20 \times 0.5\% = 10\%$
    *   Annual Energy Bill = $1,500,000 \text{ kWh} \times ₹5/\text{kWh} = ₹7,500,000$
    *   Annual Penalty = $10\% \times ₹7,500,000 = ₹750,000$
    *   **Total Annual Cost (before improvement) = ₹7,500,000 (Energy) + ₹750,000 (Penalty) = ₹8,250,000**

    *   **After Improvement (PF = 0.95):**
        *   The PF is now above 0.9, so there is no penalty.
        *   Annual Energy Cost = ₹7,500,000
        *   **Total Annual Cost (after improvement) = ₹7,500,000**

    *   **Annual Savings:** ₹8,250,000 - ₹7,500,000 = **₹750,000**

3.  **Calculate Payback Period:**
    *   Payback Period = Cost of Capacitor Bank / Annual Savings
    *   Payback Period = ₹500,000 / ₹750,000 per year = **0.67 years** (or 8 months)

**Example 3: Synchronous Motor with Power Factor Correction**

**Problem:** A synchronous motor draws 200 kW at a power factor of 0.8 lagging from a 400 V, 50 Hz supply. The motor is over-excited to provide a leading power factor of 0.95. What is the leading kVAR supplied by the motor's field excitation?

**Solution:**

1.  **Calculate kVAR at 0.8 PF lagging:**
    *   $kW = 200 \text{ kW}$
    *   $PF_1 = 0.8 \text{ lagging}$
    *   $\theta_1 = \cos^{-1}(0.8) = 36.87^\circ$
    *   $kVAR_1 = kW \times \tan(\theta_1) = 200 \times \tan(36.87^\circ) = 200 \times 0.75 = 150 \text{ kVAR (lagging)}$

2.  **Calculate kVAR at 0.95 PF leading:**
    *   $kW = 200 \text{ kW}$ (Real power is unchanged)
    *   $PF_2 = 0.95 \text{ leading}$
    *   $\theta_2 = \cos^{-1}(0.95) = 18.19^\circ$
    *   $kVAR_2 = kW \times \tan(\theta_2) = 200 \times \tan(18.19^\circ) = 200 \times 0.3287 \approx 65.74 \text{ kVAR (leading)}$

3.  **Leading kVAR Supplied by Excitation:**
    *   The motor's real power is 200 kW.
    *   At 0.8 PF lagging, it draws 150 kVAR lagging from the supply.
    *   At 0.95 PF leading, it draws 65.74 kVAR leading from the supply.
    *   The difference in reactive power is handled by the motor's excitation.
    *   The motor needs to supply the difference between the lagging kVAR it would normally draw and the leading kVAR it now draws.
    *   Leading kVAR supplied by excitation = $kVAR_1 - (-kVAR_2)$ (since $kVAR_2$ is leading, it's negative in the lagging convention).
    *   Leading kVAR supplied by excitation = $150 \text{ kVAR} - (-65.74 \text{ kVAR}) = 150 + 65.74 = 215.74 \text{ kVAR}$

    **Alternatively, consider the power triangle:**
    *   Existing kVA = $200 / 0.8 = 250 \text{ kVA}$
    *   Existing kVAR = 150 kVAR (lagging)
    *   New kVA = $200 / 0.95 = 210.53 \text{ kVA}$
    *   New kVAR = 65.74 kVAR (leading)

    The change in reactive power demand is from 150 kVAR lagging to 65.74 kVAR leading. The total reactive power supplied internally to achieve this shift is $150 \text{ kVAR (lagging)} + 65.74 \text{ kVAR (leading)} = 215.74 \text{ kVAR}$ (supplied by the motor's over-excitation).

---

### **Benefits of Power Factor Improvement**

*   **Reduced Electricity Bills:** By avoiding penalties and lowering peak demand charges.
*   **Lower Energy Losses:** Reduced I²R losses in conductors and transformers due to lower current.
*   **Increased System Capacity:** Releasing capacity in generators, transformers, and cables.
*   **Improved Voltage Regulation:** Reduced voltage drops along feeders.
*   **Extended Equipment Life:** Reduced thermal stress on equipment.
*   **Environmental Benefits:** More efficient use of energy leads to reduced emissions.

---

### **Key Considerations for Capacitor Bank Installation**

*   **Harmonics:** If the system has significant harmonic distortion, standard capacitors can resonate with system inductance, leading to amplified harmonics and potential capacitor failure. In such cases, **detuned capacitor banks** (capacitors in series with a small inductor) or **harmonic filters** are required.
*   **Switching:** Capacitors should be switched intelligently, especially in large installations. Sudden switching can cause voltage transients. Automatic Power Factor Correction (APFC) panels use controllers to switch capacitor banks in or out based on the measured power factor.
*   **Location:** Strategically locating capacitor banks close to inductive loads is crucial for maximum benefit.
*   **Maintenance:** Regular inspection and testing of capacitor banks are necessary to ensure optimal performance.

---

### **Connection to Course Outcomes**

*   **CO1: Analyse the significance of energy management and auditing.**
    *   Understanding power factor is crucial for energy management, as inefficient PF leads to wasted energy and higher costs. Auditing electrical systems often identifies poor PF as a major area for improvement.
*   **CO2: Discuss the energy efficiency and management of electrical loads.**
    *   This topic directly addresses energy efficiency in electrical loads by explaining how to reduce reactive power demand and its consequences.
*   **CO3: Apply demand side management techniques.**
    *   Power factor improvement can be considered a demand-side management technique as it reduces the overall demand from the utility by optimizing the load's power consumption.
*   **CO4: Explain the energy management opportunities in industries.**
    *   Poor power factor is a common issue in industries with large motor loads, making PF improvement a significant energy management opportunity.
*   **CO5: Compute the economic feasibility of the energy conservation measures.**
    *   The numerical examples demonstrate how to calculate savings and payback periods, which are essential for determining the economic feasibility of implementing power factor correction.

---

### **Important Points to Remember**

*   Low power factor (lagging) is caused by inductive loads.
*   Power factor improvement uses capacitors to supply reactive power.
*   The goal is to reduce reactive power (kVAR) and improve the ratio of kW to kVA.
*   The size of the capacitor bank is determined by the required reduction in kVAR.
*   Savings from PF improvement include reduced electricity bills, lower energy losses, and increased system capacity.
*   Harmonic distortion can complicate PF correction and may require detuned or filtered banks.
*   Payback period is a key metric for economic feasibility.

---

### **Practice Questions**

1.  **Question:** A factory has a total load of 800 kW at a power factor of 0.75 lagging. Calculate the required reactive power (kVAR) of the load and the apparent power (kVA). If the factory wants to improve the power factor to 0.92 lagging, what size capacitor bank (in kVAR) is required?
    **Answer:**
    *   $PF_1 = 0.75 \text{ lagging}$
    *   $\theta_1 = \cos^{-1}(0.75) \approx 41.41^\circ$
    *   $kVAR_1 = 800 \times \tan(41.41^\circ) = 800 \times 0.8819 = 705.52 \text{ kVAR}$
    *   $kVA_1 = \frac{800}{0.75} = 1066.67 \text{ kVA}$
    *   $PF_2 = 0.92 \text{ lagging}$
    *   $\theta_2 = \cos^{-1}(0.92) \approx 23.07^\circ$
    *   $kVAR_2 = 800 \times \tan(23.07^\circ) = 800 \times 0.4264 = 341.12 \text{ kVAR}$
    *   $kVAR_c = kVAR_1 - kVAR_2 = 705.52 - 341.12 = 364.4 \text{ kVAR}$
    *   **Required capacitor bank size = 364.4 kVAR**

2.  **Question:** An induction motor draws 100 kW and 50 kVAR lagging from the supply. If the supply voltage is 415 V, calculate the current drawn by the motor. If a capacitor bank of 30 kVAR is connected in parallel, what will be the new power factor and the new current drawn from the supply?
    **Answer:**
    *   **Before capacitor:**
        *   $kW = 100 \text{ kW}$
        *   $kVAR_1 = 50 \text{ kVAR}$
        *   $kVA_1 = \sqrt{kW^2 + kVAR_1^2} = \sqrt{100^2 + 50^2} = \sqrt{10000 + 2500} = \sqrt{12500} = 111.8 \text{ kVA}$
        *   $PF_1 = \frac{kW}{kVA_1} = \frac{100}{111.8} = 0.894 \text{ lagging}$
        *   Current ($I_1$) = $\frac{kVA_1 \times 1000}{V} = \frac{111.8 \times 1000}{415} \approx 269.4 \text{ A}$
    *   **After capacitor:**
        *   The capacitor supplies 30 kVAR.
        *   New Reactive Power ($kVAR_2$) = $kVAR_1 - kVAR_c = 50 \text{ kVAR} - 30 \text{ kVAR} = 20 \text{ kVAR}$
        *   $kW = 100 \text{ kW}$
        *   $kVA_2 = \sqrt{kW^2 + kVAR_2^2} = \sqrt{100^2 + 20^2} = \sqrt{10000 + 400} = \sqrt{10400} = 101.98 \text{ kVA}$
        *   New Power Factor ($PF_2$) = $\frac{kW}{kVA_2} = \frac{100}{101.98} = 0.981 \text{ lagging}$
        *   New Current ($I_2$) = $\frac{kVA_2 \times 1000}{V} = \frac{101.98 \times 1000}{415} \approx 245.7 \text{ A}$
    *   **New Power Factor = 0.981 lagging, New Current = 245.7 A**

3.  **Question:** A large industrial facility has an average monthly electricity bill of ₹20,00,000. The power factor is consistently 0.7 lagging. The utility has a power factor penalty of 1% of the total bill for every 0.01 drop in power factor below 0.9. If the facility installs a capacitor bank of 300 kVAR, the power factor improves to 0.93 lagging. The capacitor bank costs ₹4,00,000. Calculate the annual savings and the payback period. Assume the monthly bill is constant throughout the year.
    **Answer:**
    *   **Before Capacitor:**
        *   Monthly Bill = ₹20,00,000
        *   PF = 0.7 lagging
        *   PF deficiency from 0.9 = $0.9 - 0.7 = 0.2$
        *   Number of 0.01 units = $0.2 / 0.01 = 20$
        *   Penalty Percentage = $20 \times 1\% = 20\%$
        *   Monthly Penalty = $20\% \times ₹20,00,000 = ₹4,00,000$
        *   Total Monthly Bill (with penalty) = ₹20,00,000 + ₹4,00,000 = ₹24,00,000
        *   Annual Bill (with penalty) = ₹24,00,000 * 12 = ₹2,88,00,000
    *   **After Capacitor:**
        *   PF = 0.93 lagging
        *   PF is above 0.9, so no penalty.
        *   Monthly Bill (without penalty) = ₹20,00,000
        *   Annual Bill (without penalty) = ₹20,00,000 * 12 = ₹2,40,00,000
    *   **Annual Savings:** ₹2,88,00,000 - ₹2,40,00,000 = **₹48,00,000**
    *   **Payback Period:** Cost / Annual Savings = ₹4,00,000 / ₹48,00,000 per year = **0.083 years** (approximately 1 month)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **References**

*   **Publications of Bureau of Energy Efficiency (BEE):** BEE provides various reports, guidelines, and training materials related to energy efficiency in India, which often cover power factor correction in detail.
*   **Energy Management and Conservation Handbook by D. Yogi Goswami, Frank Kreith:** This comprehensive handbook covers a wide range of energy management topics, including electrical system efficiency and power factor correction. (Refer to Chapters on Electrical Systems and Energy Efficiency Measures).
*   **Energy Management Handbook by Wayne C. Turner:** Another valuable resource for understanding energy management principles and practices in industrial settings, including electrical system optimization. (Refer to sections on electrical power quality and efficiency).
*   **Industrial Energy Conservation by Charles M. Gottschalk:** This book focuses on practical strategies for energy conservation in industrial environments, likely including detailed explanations and case studies on power factor improvement.

---