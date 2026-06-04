---
title: "Power factor improvement, numerical examples."
subject: "ENERGY MANAGEMENT AND AUDITING"
module: "Module 2: Energy Efficiency in Electrical Utilities: Electricity transmission and distribution system, cascade efficiency."
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36879"
status: "completed"
scrapedAt: "2026-05-23T16:36:55.312Z"
---
# ENERGY MANAGEMENT AND AUDITING - MODULE 2: ENERGY EFFICIENCY IN ELECTRICAL UTILITIES

## Topic: Power Factor Improvement, Numerical Examples

This topic delves into the concept of power factor, its implications for electrical systems, and the methods and benefits of improving it, particularly within the context of electricity transmission and distribution.

---

### 1. Understanding Power Factor

**Key Concepts & Definitions:**

*   **Apparent Power (S):** The total power delivered to a circuit, measured in Volt-Amperes (VA) or kilo Volt-Amperes (kVA). It represents the vector sum of real and reactive power.
    *   *Formula: S = V * I (where V is voltage and I is current)*
*   **Real Power (P):** The actual power consumed by the load to do useful work (e.g., heat, light, mechanical motion). Measured in Watts (W) or kilowatts (kW).
*   **Reactive Power (Q):** The power that oscillates between the source and reactive components (inductors and capacitors) in a circuit. It is necessary for the operation of inductive loads like motors but does not perform useful work. Measured in Volt-Amperes Reactive (VAR) or kilo VAR (kVAR).
*   **Power Factor (PF):** The ratio of real power (P) to apparent power (S). It is a measure of how effectively electrical power is being used.
    *   *Formula: PF = P / S*
    *   *Alternatively, PF = cos(φ), where φ is the phase angle between voltage and current.*
*   **Leading Power Factor:** Occurs when the current leads the voltage, typically associated with capacitive loads.
*   **Lagging Power Factor:** Occurs when the current lags the voltage, typically associated with inductive loads. Most industrial loads are inductive.
*   **Unity Power Factor (PF = 1):** Occurs when voltage and current are in phase, meaning all apparent power is real power. This is the ideal scenario for efficiency.

**Illustrative Example (Conceptual):**
Imagine a person carrying a briefcase (real power) and a large suitcase (reactive power). The total effort they exert to move from point A to point B is represented by their walking pace (apparent power). If they could somehow reduce the size or weight of the suitcase without affecting their walking pace, they would be more efficient.

**Importance of Power Factor:**

*   **Efficiency:** A low power factor means a larger apparent power (kVA) is required to deliver the same amount of real power (kW). This leads to increased losses in the transmission and distribution system.
*   **Current Levels:** For a given real power, a lower PF means higher current. High current can lead to:
    *   Increased I²R (copper) losses in conductors.
    *   Overheating of transformers, generators, and cables.
    *   Voltage drop across conductors.
*   **Capacity:** Utilities must generate and transmit higher apparent power (kVA) to meet the kW demand of customers with low power factors. This limits the capacity of their infrastructure.
*   **Penalties:** Many electricity utilities impose penalties on industrial consumers whose power factor falls below a certain threshold (e.g., 0.9).

**Reference from Textbooks:**

*   **Energy Management and Conservation Handbook by D. Yogi Goswami, Frank Kreith:** This handbook extensively covers the fundamental principles of electrical power systems, including power factor and its impact on efficiency and losses. It discusses how reactive power is essential for magnetic fields in motors and transformers but contributes to system inefficiency.
*   **Energy Management Hand Book by Wayne C. Turner:** Similar to Goswami and Kreith, Turner's handbook provides practical insights into managing electrical energy, with a significant focus on power factor correction in industrial settings.

**Alignment with Course Outcomes:**

*   **CO2:** Discuss the energy efficiency and management of electrical loads. (K2) - Understanding power factor is crucial for discussing the efficiency of electrical loads.
*   **CO4:** Explain the energy management opportunities in industries. (K2) - Power factor improvement is a significant energy management opportunity.

---

### 2. Power Factor Improvement

**Key Concepts & Definitions:**

*   **Power Factor Improvement:** The process of increasing the power factor of an electrical load, typically by adding capacitors to compensate for the lagging reactive power drawn by inductive loads.
*   **Capacitor Banks:** A collection of capacitors connected in series or parallel to provide leading reactive power.
*   **Synchronous Condensers:** Rotating machines that can be over-excited to provide leading reactive power. Less common for typical industrial power factor correction compared to capacitors.

**Methods of Power Factor Improvement:**

1.  **Static Capacitors:** The most common and cost-effective method for industrial power factor correction. Capacitors are installed at or near the inductive loads.
2.  **Synchronous Motors:** Operating synchronous motors at over-excitation can make them act as synchronous condensers, supplying leading reactive power. This is usually considered when synchronous motors are already part of the plant's operation.
3.  **Synchronous Condensers:** Dedicated rotating machines that can provide variable reactive power and help regulate voltage.

**Why Improve Power Factor?**

*   **Reduced Electricity Bills:** Avoiding penalties and potentially earning rebates from utilities.
*   **Increased System Capacity:** Lowering apparent power (kVA) means existing transformers, generators, and conductors can handle more real power (kW).
*   **Reduced Electrical Losses:** Lowering current reduces I²R losses in the distribution system.
*   **Improved Voltage Regulation:** Compensating for reactive power can help stabilize voltage levels.

**Reference from Textbooks:**

*   **Publications of Bureau of Energy Efficiency (BEE):** BEE publications often provide guidelines and case studies on power factor improvement techniques in India, emphasizing its economic and technical benefits. They highlight mandatory power factor standards for various consumer categories.
*   **Industrial energy conservation by Charles M. Gottschalk:** This book offers practical approaches to identifying and implementing energy conservation measures in industries, with detailed sections on power factor correction strategies and their economic justification.

**Alignment with Course Outcomes:**

*   **CO3:** Apply demand side management techniques. (K2) - Power factor improvement is a demand-side management technique that reduces the overall demand on the utility.
*   **CO4:** Explain the energy management opportunities in industries. (K2) - Power factor correction is a key opportunity.
*   **CO5:** Compute the economic feasibility of the energy conservation measures. (K3) - This topic directly relates to calculating the costs and benefits of PF correction.

---

### 3. Numerical Examples of Power Factor Improvement

**Understanding the Power Triangle:**

The relationship between apparent power (S), real power (P), and reactive power (Q) can be represented by a right-angled triangle, where:
*   S is the hypotenuse
*   P is the adjacent side
*   Q is the opposite side
*   The angle between S and P is the phase angle (φ).

$S^2 = P^2 + Q^2$
$P = S \cos(\phi)$
$Q = S \sin(\phi)$
$PF = \cos(\phi)$

**Steps for Calculation:**

1.  **Identify the existing parameters:** Real power (kW), voltage (V), current (A), and existing power factor (PF_old).
2.  **Calculate the existing reactive power (kVAR_old):**
    *   First, find the apparent power (kVA_old) using $kVA_{old} = \frac{kW}{PF_{old}}$.
    *   Then, calculate the existing reactive power: $kVAR_{old} = \sqrt{kVA_{old}^2 - kW^2}$ or $kVAR_{old} = kW \times \tan(\phi_{old})$.
3.  **Determine the desired power factor (PF_new):** This is usually specified by the utility or a target efficiency level.
4.  **Calculate the required reactive power (kVAR_new) for the desired PF:**
    *   The real power (kW) remains constant.
    *   Calculate the new phase angle: $\phi_{new} = \cos^{-1}(PF_{new})$.
    *   Calculate the required reactive power: $kVAR_{new} = kW \times \tan(\phi_{new})$.
5.  **Calculate the required capacitor bank size (kVAR_cap):** This is the difference between the existing and required reactive power.
    *   $kVAR_{cap} = kVAR_{old} - kVAR_{new}$

**Important Formulas to Remember:**

*   $PF = \cos(\phi)$
*   $\phi = \cos^{-1}(PF)$
*   $kW = kVA \times PF$
*   $kVAR = kVA \times \sin(\phi)$
*   $kVA = \sqrt{kW^2 + kVAR^2}$
*   $kVAR_{cap} = kW (\tan(\phi_{old}) - \tan(\phi_{new}))$

**Example 1: Simple Power Factor Correction**

**Problem:** A factory has a load of 200 kW with a power factor of 0.75 lagging. The electricity bill is calculated based on kW demand, but a penalty is levied if the power factor drops below 0.9. Calculate the size of the capacitor bank required to bring the power factor up to 0.95 lagging.

**Solution:**

1.  **Existing Parameters:**
    *   $kW = 200$ kW
    *   $PF_{old} = 0.75$ lagging
    *   $PF_{new} = 0.95$ lagging

2.  **Calculate Existing Reactive Power (kVAR_old):**
    *   $\phi_{old} = \cos^{-1}(0.75) \approx 41.41^\circ$
    *   $\tan(\phi_{old}) = \tan(41.41^\circ) \approx 0.8819$
    *   $kVAR_{old} = kW \times \tan(\phi_{old}) = 200 \text{ kW} \times 0.8819 \approx 176.38$ kVAR

3.  **Calculate Required Reactive Power (kVAR_new) for PF = 0.95:**
    *   $\phi_{new} = \cos^{-1}(0.95) \approx 18.19^\circ$
    *   $\tan(\phi_{new}) = \tan(18.19^\circ) \approx 0.3287$
    *   $kVAR_{new} = kW \times \tan(\phi_{new}) = 200 \text{ kW} \times 0.3287 \approx 65.74$ kVAR

4.  **Calculate Capacitor Bank Size (kVAR_cap):**
    *   $kVAR_{cap} = kVAR_{old} - kVAR_{new} = 176.38 \text{ kVAR} - 65.74 \text{ kVAR} \approx 110.64$ kVAR

    Therefore, a capacitor bank of approximately **110 kVAR** is required.

**Example 2: Impact on Apparent Power and Current**

**Problem:** Consider the same factory load from Example 1 (200 kW at 0.75 PF). If the supply voltage is 415 V, calculate the line current before and after installing a capacitor bank to improve the power factor to 0.95.

**Solution:**

1.  **Before Power Factor Improvement:**
    *   $kW = 200$ kW
    *   $PF_{old} = 0.75$
    *   $kVA_{old} = \frac{kW}{PF_{old}} = \frac{200 \text{ kW}}{0.75} \approx 266.67$ kVA
    *   For a 3-phase system, $kVA = \frac{\sqrt{3} \times V \times I}{1000}$.
    *   $I_{old} = \frac{kVA_{old} \times 1000}{\sqrt{3} \times V} = \frac{266.67 \times 1000}{\sqrt{3} \times 415 \text{ V}} \approx \frac{266670}{1.732 \times 415} \approx \frac{266670}{718.78} \approx 371.06$ A

2.  **After Power Factor Improvement (to 0.95):**
    *   $kW = 200$ kW (Real power remains the same)
    *   $PF_{new} = 0.95$
    *   $kVA_{new} = \frac{kW}{PF_{new}} = \frac{200 \text{ kW}}{0.95} \approx 210.53$ kVA
    *   $I_{new} = \frac{kVA_{new} \times 1000}{\sqrt{3} \times V} = \frac{210.53 \times 1000}{\sqrt{3} \times 415 \text{ V}} \approx \frac{210530}{718.78} \approx 292.88$ A

**Observation:** By improving the power factor from 0.75 to 0.95, the apparent power is reduced from 266.67 kVA to 210.53 kVA, and the line current is reduced from 371.06 A to 292.88 A. This reduction in current leads to lower I²R losses and frees up system capacity.

**Reference from Textbooks:**

*   **Energy Management and Conservation Handbook by D. Yogi Goswami, Frank Kreith:** This handbook provides numerous examples and detailed derivations for power factor calculations and the impact on system performance.
*   **Energy Management Hand Book by Wayne C. Turner:** Turner's handbook offers practical "how-to" guides for industrial settings, including step-by-step calculations for selecting capacitor banks.

**Alignment with Course Outcomes:**

*   **CO5:** Compute the economic feasibility of the energy conservation measures. (K3) - These examples are foundational for the economic analysis of power factor improvement.

---

### 4. Economic Feasibility and Benefits

**Key Concepts & Definitions:**

*   **Cost of Capacitors:** The initial investment required for purchasing and installing the capacitor bank.
*   **Annual Savings:** The reduction in electricity bills due to improved power factor, which includes avoiding penalties and potentially lower energy charges due to reduced losses.
*   **Payback Period:** The time it takes for the accumulated annual savings to equal the initial investment cost.
    *   *Formula: Payback Period = Initial Investment Cost / Annual Savings*
*   **Return on Investment (ROI):** A measure of the profitability of the investment.
    *   *Formula: ROI = (Total Savings over Project Life - Initial Investment Cost) / Initial Investment Cost * 100%*

**Reference from Textbooks:**

*   **Energy Management and Conservation Handbook by D. Yogi Goswami, Frank Kreith:** Discusses the financial aspects of energy conservation measures, including calculating payback periods and ROI for power factor correction projects.
*   **Energy Management Hand Book by Wayne C. Turner:** Provides practical tools and frameworks for evaluating the economic viability of energy efficiency projects in industrial environments.

**Alignment with Course Outcomes:**

*   **CO1:** Analyse the significance of energy management and auditing. (K2) - Understanding the economic benefits reinforces the significance of energy management.
*   **CO5:** Compute the economic feasibility of the energy conservation measures. (K3) - This is the core outcome related to the economic aspects.

---

### 5. Practice Questions and Exercises

**Question 1:**
A large industrial consumer has a connected load of 500 kW. The average monthly consumption is 150,000 kWh. The average power factor at which the load operates is 0.7 lagging. The utility's tariff structure imposes a penalty of ₹500 per kVA for every 0.1 reduction in power factor below 0.9. If the supply voltage is 400 V (3-phase), calculate:
a) The average monthly apparent power (kVA).
b) The average monthly reactive power (kVAR).
c) The monthly penalty for low power factor, assuming the average monthly demand is considered for the penalty.
d) The size of the capacitor bank required to bring the power factor to 0.95 lagging.
e) The annual savings if the capacitor bank costs ₹5000 per kVAR and has an annual operating cost of 2% of its initial cost, and the penalty avoided is considered. Assume the monthly consumption and PF are constant throughout the year.

**Answer 1:**

**a) Average Monthly Apparent Power (kVA):**
*   First, calculate the average kW demand from monthly consumption:
    Average $kW = \frac{Monthly \ KWh}{Days \ in \ month \times 24 \ hours} = \frac{150,000 \ kWh}{30 \times 24} = 208.33 \ kW$ (Assuming 30 days/month)
*   $kVA_{avg} = \frac{kW_{avg}}{PF_{old}} = \frac{208.33 \ kW}{0.7} \approx 297.61 \ kVA$

**b) Average Monthly Reactive Power (kVAR):**
*   $\phi_{old} = \cos^{-1}(0.7) \approx 45.57^\circ$
*   $\tan(\phi_{old}) = \tan(45.57^\circ) \approx 1.020$
*   $kVAR_{avg} = kW_{avg} \times \tan(\phi_{old}) = 208.33 \ kW \times 1.020 \approx 212.50 \ kVAR$

**c) Monthly Penalty for Low Power Factor:**
*   The target PF is 0.9. The current PF is 0.7.
*   The reduction in PF below 0.9 is $0.9 - 0.7 = 0.2$.
*   This reduction is equivalent to $0.2 / 0.1 = 2$ steps of 0.1 reduction.
*   The average demand for penalty calculation is the average kVA demand at the existing PF, which is 297.61 kVA.
*   Monthly Penalty = Penalty per kVA step * Number of steps * Average kVA demand
*   Monthly Penalty = ₹500/kVA * 2 * 297.61 kVA $\approx$ ₹297,610

**d) Size of Capacitor Bank Required (to PF = 0.95):**
*   Target $PF_{new} = 0.95$
*   $\phi_{new} = \cos^{-1}(0.95) \approx 18.19^\circ$
*   $\tan(\phi_{new}) = \tan(18.19^\circ) \approx 0.3287$
*   $kVAR_{new} = kW_{avg} \times \tan(\phi_{new}) = 208.33 \ kW \times 0.3287 \approx 68.48 \ kVAR$
*   $kVAR_{cap} = kVAR_{avg} - kVAR_{new} = 212.50 \ kVAR - 68.48 \ kVAR \approx 144.02 \ kVAR$
    So, approximately **144 kVAR** capacitor bank is needed.

**e) Annual Savings:**
*   Initial Investment Cost of Capacitor Bank = $144.02 \text{ kVAR} \times ₹5000/\text{kVAR} \approx ₹720,100$
*   Annual Operating Cost of Capacitor Bank = 2% of ₹720,100 = $0.02 \times ₹720,100 \approx ₹14,402$
*   The penalty is avoided if PF is improved to 0.95. Let's assume the utility has a "power factor clause" where they charge extra for power factors below a certain limit. If the penalty structure is as described in (c), then improving to 0.95 means the PF is above 0.9, and no penalty is incurred based on that clause.
*   However, to calculate savings, we need to compare the cost of power at PF=0.7 vs PF=0.95. The most direct saving is the avoided penalty.
*   Total Annual Penalty Avoided = Monthly Penalty * 12 = ₹297,610 * 12 = ₹3,571,320
*   Net Annual Savings = Total Annual Penalty Avoided - Annual Operating Cost
*   Net Annual Savings = ₹3,571,320 - ₹14,402 = ₹3,556,918

**Question 2:**
An industrial plant has a load of 300 kW at a power factor of 0.8 lagging. The utility requires customers to maintain a power factor of at least 0.92 lagging. If the cost of capacitor banks is ₹4,000 per kVAR, and the plant pays ₹200,000 per year in power factor penalties, calculate:
a) The size of the capacitor bank needed to meet the utility's requirement.
b) The simple payback period for installing the capacitor bank.

**Answer 2:**

**a) Size of Capacitor Bank Needed:**
*   $kW = 300$ kW
*   $PF_{old} = 0.8$ lagging
*   $PF_{new} = 0.92$ lagging
*   $\phi_{old} = \cos^{-1}(0.8) \approx 36.87^\circ$
*   $\tan(\phi_{old}) = \tan(36.87^\circ) \approx 0.750$
*   $kVAR_{old} = kW \times \tan(\phi_{old}) = 300 \text{ kW} \times 0.750 = 225 \ kVAR$
*   $\phi_{new} = \cos^{-1}(0.92) \approx 23.07^\circ$
*   $\tan(\phi_{new}) = \tan(23.07^\circ) \approx 0.426$
*   $kVAR_{new} = kW \times \tan(\phi_{new}) = 300 \text{ kW} \times 0.426 \approx 127.8 \ kVAR$
*   $kVAR_{cap} = kVAR_{old} - kVAR_{new} = 225 \ kVAR - 127.8 \ kVAR \approx 97.2 \ kVAR$
    So, approximately **97.2 kVAR** capacitor bank is needed.

**b) Simple Payback Period:**
*   Initial Investment Cost = $97.2 \text{ kVAR} \times ₹4000/\text{kVAR} = ₹388,800$
*   Annual Savings = Annual Power Factor Penalties Avoided = ₹200,000
*   Simple Payback Period = $\frac{Initial \ Investment \ Cost}{Annual \ Savings} = \frac{₹388,800}{₹200,000} \approx 1.94 \text{ years}$

---

### 6. Important Points to Remember

*   **Lagging PF:** Most industrial loads are inductive and cause a lagging power factor.
*   **Capacitors:** Provide leading reactive power to counteract lagging reactive power.
*   **Power Triangle:** Always use the power triangle concept to visualize and calculate power factor relationships.
*   **kW is Constant:** When correcting power factor using capacitors, the real power (kW) consumed by the load remains unchanged.
*   **Current Reduction:** The primary benefit of power factor improvement is the reduction in apparent power (kVA) and hence line current.
*   **Utility Tariffs:** Be aware of utility power factor clauses and penalties.
*   **Optimal PF:** While unity PF is ideal, a PF of 0.92 to 0.95 is often considered optimal for industrial installations, balancing correction costs with savings.
*   **Harmonics:** Excessive use of power factor correction capacitors, especially in systems with non-linear loads (like VFDs, SMPS), can lead to harmonic resonance. Harmonic filters might be necessary in such cases. (This is an advanced consideration but important to be aware of).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. Further Reading and References

*   **Bureau of Energy Efficiency (BEE) Publications:** Refer to BEE's energy conservation guidelines and reports for specific Indian context and case studies.
*   **Energy Management and Conservation Handbook by D. Yogi Goswami, Frank Kreith:** Chapters on electrical systems, power quality, and energy efficiency measures.
*   **Energy Management Hand Book by Wayne C. Turner:** Sections dedicated to electrical system analysis, load management, and power factor correction.
*   **Industrial energy conservation by Charles M. Gottschalk:** Practical guidance on implementing energy-saving measures in industrial settings.

---