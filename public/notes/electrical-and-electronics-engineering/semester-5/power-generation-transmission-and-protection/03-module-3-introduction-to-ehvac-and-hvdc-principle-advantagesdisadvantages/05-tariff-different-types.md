---
title: "Tariff - different types"
subject: "POWER GENERATION, TRANSMISSION AND PROTECTION"
module: "Module 3: Introduction to EHVAC and HVDC: Principle, advantages/disadvantages"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3618e"
status: "completed"
scrapedAt: "2026-05-23T16:23:33.057Z"
---
# Module 3: Introduction to EHVAC and HVDC: Principle, Advantages/Disadvantages

## Topic: Tariff - Different Types

**Course Outcomes addressed:**

*   **CO1:** Learn different types of power generating systems and schedule generation appropriate for a given area. (Knowledge Level: K3) - *While not directly about generation scheduling, understanding tariffs is crucial for economic dispatch and overall power system operation.*

---

### 1. Introduction to Tariff

A **tariff** in the context of electrical power is the **rate at which electricity is supplied to a consumer**. It represents the price charged for the electrical energy consumed, taking into account various factors. Tariffs are designed to recover the costs incurred by the utility in generating, transmitting, and distributing electricity, while also aiming for fair compensation from consumers and potentially influencing consumption patterns.

**Why are Tariffs Important?**

*   **Revenue Generation:** To recover the fixed and variable costs of the electricity supply system.
*   **Cost Recovery:** To cover expenses related to generation, transmission, distribution, maintenance, and administration.
*   **Demand Management:** To encourage efficient use of electricity and discourage wasteful consumption.
*   **Fairness:** To ensure that different classes of consumers pay equitably based on their usage patterns and impact on the system.
*   **Investment Incentives:** To provide a framework for attracting investments in new generation and infrastructure.

**Key Considerations in Tariff Design:**

*   **Cost of Service:** The actual cost of supplying electricity to a particular consumer or class of consumers.
*   **Consumer Classification:** Different tariffs are often designed for different types of consumers (e.g., residential, commercial, industrial).
*   **Load Factor:** The ratio of the average load to the maximum load over a period. A higher load factor generally leads to lower per-unit costs.
*   **Power Factor:** The ratio of real power to apparent power. A lower power factor increases losses and requires larger equipment.
*   **Time of Day:** Electricity demand varies throughout the day, leading to different generation costs.
*   **Economic Considerations:** The ability of consumers to pay and the overall economic impact.

---

### 2. Different Types of Tariffs

Tariffs can be broadly classified based on how they are structured and what factors they consider. Here are the common types:

#### 2.1. Flat Demand Tariff

*   **Description:** In this tariff, the charge is based on the **connected load** (e.g., in kW or kVA) rather than the actual energy consumed (in kWh). The consumer pays a fixed amount per unit of connected load, regardless of how much electricity they use.
*   **Formula:**
    *   `Charge = Rate × Connected Load`
*   **Advantages:**
    *   Simple to understand and administer.
    *   Encourages consumers to use their connected load efficiently as they pay the same amount regardless of consumption.
*   **Disadvantages:**
    *   **Unfair to consumers:** A consumer with a large connected load but low usage pays the same as a consumer with a large connected load and high usage.
    *   **No incentive for energy saving:** Consumers are not motivated to reduce their energy consumption.
    *   **Doesn't reflect actual cost:** Does not account for the actual energy consumed or the demand charges.
*   **Example:** In some cases, a fixed monthly charge for street lighting based on the wattage of the lamps.
*   **Textbook Reference:**
    *   **Wadhwa C. L., Electrical Power Systems:** Discusses basic metering and billing principles, which would underpin such a tariff.
    *   **Mehta V. K. and Mehta R., Principles of Power System:** Likely to cover basic billing concepts where this simple form of tariff might be introduced.

#### 2.2. Metered Tariff (Energy Tariff)

*   **Description:** This is the most common type of tariff where the consumer is charged based on the **actual electrical energy consumed**, typically measured in kilowatt-hours (kWh).
*   **Formula:**
    *   `Charge = Rate per kWh × Energy Consumed (kWh)`
*   **Advantages:**
    *   **Fairness:** Consumers pay for what they consume, promoting energy conservation.
    *   **Simplicity:** Relatively straightforward to implement with energy meters.
*   **Disadvantages:**
    *   **Doesn't account for demand:** Ignores the impact of peak demand on the system. A consumer using a small amount of energy but during peak hours can still stress the system more than a consumer using the same amount during off-peak hours.
    *   **No incentive for improving power factor:** The charge is solely based on energy, not apparent power.
*   **Example:** Most residential electricity bills are based on this tariff.
*   **Textbook Reference:**
    *   **Wadhwa C. L., Electrical Power Systems:** Detailed discussions on energy meters and their functioning are relevant here.
    *   **Mehta V. K. and Mehta R., Principles of Power System:** Covers metering and billing, making this a core topic.

#### 2.3. Block Tariff

*   **Description:** In a block tariff, the rate per unit of energy consumed varies depending on the amount of energy consumed within specified **blocks** or ranges. The rate typically decreases as consumption increases.
*   **Structure:**
    *   Block 1: First X kWh at Rate R1
    *   Block 2: Next Y kWh at Rate R2 (where R2 < R1)
    *   Block 3: Remaining kWh at Rate R3 (where R3 < R2)
*   **Advantages:**
    *   **Encourages higher consumption:** The decreasing rates incentivize consumers to use more electricity, which can be beneficial for utilities in terms of utilizing generation capacity.
    *   **Promotes conservation:** Higher rates for initial blocks encourage conservation by certain consumer segments.
*   **Disadvantages:**
    *   **Can be complex:** Consumers need to understand the different blocks and rates.
    *   **May not fully reflect costs:** Especially if the blocks are not precisely aligned with cost variations.
*   **Example:**
    *   First 100 kWh: ₹5.00/kWh
    *   Next 200 kWh: ₹4.50/kWh
    *   Above 300 kWh: ₹4.00/kWh
*   **Textbook Reference:**
    *   **Wadhwa C. L., Electrical Power Systems:** Discusses tariff structures and their economic implications.
    *   **Mehta V. K. and Mehta R., Principles of Power System:** Provides examples of different tariff structures, including block tariffs.

#### 2.4. Two-Part Tariff (or Multiple-Part Tariff)

*   **Description:** This tariff divides the total charge into two or more parts, typically a **fixed charge** and a **variable charge**.
    *   **Fixed Charge:** Based on the maximum demand (kW) of the consumer or the connected load. This part covers the fixed costs of the utility, such as power plant capital costs, transmission and distribution network costs, and fixed operating expenses, which are incurred regardless of the energy consumed.
    *   **Variable Charge:** Based on the actual energy consumed (kWh). This part covers the running costs of generation and distribution, such as fuel costs, labor, and maintenance.
*   **Formula:**
    *   `Total Charge = (Fixed Charge Rate × Maximum Demand) + (Variable Charge Rate × Energy Consumed)`
*   **Advantages:**
    *   **Fairer than flat demand:** Accounts for both the demand placed on the system and the energy consumed.
    *   **Incentivizes demand reduction:** Consumers are motivated to reduce their peak demand to lower their fixed charges.
    *   **Reflects cost more accurately:** Recognizes that maintaining capacity incurs costs.
*   **Disadvantages:**
    *   **Requires demand meters:** More complex metering equipment is needed to measure maximum demand.
    *   **Can be complex to explain:** Consumers might find it harder to understand the breakdown of charges.
*   **Example:** Industrial consumers are often charged using a two-part tariff. A factory might have a fixed charge based on its peak demand in kVA and a per-unit charge for the kWh consumed.
*   **Textbook Reference:**
    *   **Wadhwa C. L., Electrical Power Systems:** Provides a detailed analysis of different tariffs, including two-part tariffs and their economic rationale.
    *   **Mehta V. K. and Mehta R., Principles of Power System:** Explains the components of a two-part tariff and its application.

#### 2.5. Three-Part Tariff

*   **Description:** An extension of the two-part tariff, this tariff further categorizes the charges into three parts:
    *   **Fixed Charge:** Based on the connected load or maximum demand.
    *   **Semi-fixed Charge:** Related to the number of units consumed up to a certain point or related to the hours of use of the maximum demand.
    *   **Variable Charge:** Based on the actual energy consumed (kWh), often varying with the cost of fuel.
*   **Formula (Example):**
    *   `Total Charge = (Fixed Charge Rate × Maximum Demand) + (Semi-fixed Charge Rate × Hours of Use of Max Demand) + (Variable Charge Rate × Energy Consumed)`
*   **Advantages:**
    *   **More accurate cost reflection:** Attempts to capture a wider range of cost components.
    *   **Encourages efficient usage:** Can penalize consumers who use high demand for short periods or incentivize efficient load management.
*   **Disadvantages:**
    *   **Most complex:** Difficult to administer and explain to consumers.
    *   **Requires sophisticated metering:** Needs equipment to measure demand, energy, and potentially hours of use.
*   **Example:** Some large industrial consumers with highly variable loads might be subjected to a three-part tariff.
*   **Textbook Reference:**
    *   **Wadhwa C. L., Electrical Power Systems:** Discusses advanced tariff structures like three-part tariffs for comprehensive cost recovery.
    *   **Mehta V. K. and Mehta R., Principles of Power System:** May touch upon this as a more complex tariff for specific consumer categories.

#### 2.6. Maximum Demand (MD) Tariff

*   **Description:** This tariff is similar to the fixed charge component of a two-part tariff but might be presented as a standalone tariff type. The charge is directly proportional to the **maximum demand** registered by the consumer during the billing period.
*   **Formula:**
    *   `Charge = Rate per kW of Maximum Demand × Maximum Demand (kW)`
*   **Advantages:**
    *   **Addresses peak load issues:** Directly penalizes consumers who contribute to high peak loads, which are more expensive to meet.
    *   **Encourages load leveling:** Consumers are motivated to spread their load over time.
*   **Disadvantages:**
    *   **Requires demand metering:** Needs appropriate meters.
    *   **Doesn't account for energy consumed:** If a consumer has a low maximum demand but high energy consumption, this tariff alone might not be appropriate.
*   **Example:** Some industrial or commercial consumers might have a tariff structured primarily around their maximum demand.

#### 2.7. Power Factor Tariff

*   **Description:** This tariff includes a clause to penalize consumers whose **power factor (PF)** falls below a certain prescribed limit (e.g., 0.9 lagging). The charge is adjusted based on the power factor.
*   **Methods of implementation:**
    *   **Apparent Energy Charge:** Charging is based on kilovolt-ampere-hours (kVAh) instead of kilowatt-hours (kWh). Since kVAh = kWh / PF, a lower PF leads to a higher kVAh charge for the same kWh consumed.
    *   **Penalty/Bonus Clause:** The energy charge is modified by a penalty for PF below the limit or a bonus for PF above it.
        *   `Revised Charge = Energy Charge × (Actual PF / Prescribed PF)`
*   **Advantages:**
    *   **Improves system power factor:** Encourages consumers to install power factor correction equipment (like capacitors).
    *   **Reduces losses:** A higher power factor leads to lower current for the same real power, reducing I²R losses in the system.
    *   **Improves voltage regulation:** Higher PF leads to better voltage profiles.
*   **Disadvantages:**
    *   **Requires specialized meters:** Need meters capable of measuring power factor or apparent energy.
    *   **Can be complex to administer:** Calculating penalties and bonuses can be intricate.
*   **Example:** Industrial consumers with large inductive loads (motors) are often subject to power factor clauses. If their PF drops below 0.9, their bill might increase by a certain percentage or be calculated on kVAh.
*   **Textbook Reference:**
    *   **Wadhwa C. L., Electrical Power Systems:** Provides in-depth analysis of power factor correction and its economic impact, often linked to tariff structures.
    *   **Mehta V. K. and Mehta R., Principles of Power System:** Explains the concept of power factor and its implications for billing.

#### 2.8. Load Factor Tariff

*   **Description:** This tariff is designed to encourage consumers to improve their **load factor**. The rate per unit of energy consumed is adjusted based on the consumer's load factor.
*   **Concept:** If the load factor is high, the rate per kWh is lower, and vice versa. This can be structured in various ways, often as a modification to other tariffs.
*   **Advantages:**
    *   **Improves overall system efficiency:** Encourages consumers to utilize the system more uniformly.
    *   **Reduces the need for peak capacity:** Lower demand fluctuations mean less investment in peak generation and transmission.
*   **Disadvantages:**
    *   **Complex to implement:** Requires detailed load monitoring.
    *   **Difficult to communicate:** Consumers may find it hard to understand how their load factor impacts their bill.
*   **Example:** While not very common as a standalone tariff, load factor incentives might be incorporated into contracts with large industrial users.

#### 2.9. Time-of-Day (TOD) Tariff (or Time-of-Use - TOU Tariff)

*   **Description:** This tariff charges different rates for electricity consumed during different **times of the day**. Electricity is generally more expensive during peak hours (when demand is high) and cheaper during off-peak hours (when demand is low).
*   **Structure:**
    *   **Peak Hours:** Higher rates (e.g., morning and evening)
    *   **Off-Peak Hours:** Lower rates (e.g., night)
    *   **Shoulder Hours:** Intermediate rates
*   **Advantages:**
    *   **Effective demand management:** Encourages consumers to shift their load from peak to off-peak hours.
    *   **Economic dispatch optimization:** Aligns consumer costs with the actual cost of generation at different times.
    *   **Promotes renewable energy integration:** Can incentivize consumption when solar or wind generation is high.
*   **Disadvantages:**
    *   **Requires smart metering:** Advanced meters capable of recording consumption at different time intervals are essential.
    *   **Consumer behavior change:** Requires consumers to be aware of and adapt to different time rates.
    *   **Complexity:** Bills can become more complex.
*   **Example:** Many utilities are implementing TOD tariffs for residential customers with smart meters. For instance, electricity might cost ₹10/kWh from 6 PM to 10 PM, and ₹3/kWh from 1 AM to 5 AM.
*   **Textbook Reference:**
    *   **Wadhwa C. L., Electrical Power Systems:** Discusses load management and demand-side management strategies, where TOD tariffs are a key tool.
    *   **Mehta V. K. and Mehta R., Principles of Power System:** Might mention this as a modern approach to tariff design.

---

### 3. Key Concepts and Definitions Summary

*   **Tariff:** The rate at which electricity is supplied to a consumer.
*   **Connected Load:** The total power rating of all appliances and equipment connected by a consumer.
*   **Maximum Demand (MD):** The highest rate of energy consumption during a specified period (e.g., a month).
*   **Load Factor:** The ratio of average load to maximum demand over a period. `Load Factor = (Average Load / Maximum Demand)`.
*   **Power Factor (PF):** The ratio of real power (kW) to apparent power (kVA). `PF = kW / kVA`.
*   **kWh (Kilowatt-hour):** Unit of electrical energy consumed.
*   **kVAh (Kilovolt-ampere-hour):** Unit of apparent energy consumed.

---

### 4. Important Points to Remember

*   **Purpose of Tariffs:** Cost recovery, fairness, and demand management.
*   **Simple Tariffs:** Flat demand, metered energy.
*   **More Sophisticated Tariffs:** Block, Two-Part, Three-Part, MD, Power Factor, TOD.
*   **Choice of Tariff:** Depends on the consumer class (residential, commercial, industrial), load characteristics, and utility objectives.
*   **Modern Trends:** Shift towards smart metering and tariffs like TOD to manage demand and integrate renewables.
*   **Tariffs and System Efficiency:** Tariffs play a vital role in influencing consumer behavior, which in turn impacts the overall efficiency and economics of the power system.

---

### 5. Practice Questions and Exercises

**Question 1:**
A residential consumer has a connected load of 5 kW. In a month, they consumed 300 kWh. If the tariff is a simple metered tariff of ₹6 per kWh, calculate the total bill.

**Answer:**
*   Energy Consumed = 300 kWh
*   Rate per kWh = ₹6
*   Total Bill = 300 kWh × ₹6/kWh = ₹1800

**Question 2:**
An industrial consumer has a maximum demand of 200 kW. The energy consumed in a month is 60,000 kWh. The tariff is a two-part tariff with a fixed charge of ₹200 per kW of maximum demand and a running charge of ₹4 per kWh. Calculate the total bill.

**Answer:**
*   Maximum Demand = 200 kW
*   Fixed Charge Rate = ₹200/kW
*   Fixed Charge Component = 200 kW × ₹200/kW = ₹40,000
*   Energy Consumed = 60,000 kWh
*   Variable Charge Rate = ₹4/kWh
*   Variable Charge Component = 60,000 kWh × ₹4/kWh = ₹240,000
*   Total Bill = ₹40,000 + ₹240,000 = ₹280,000

**Question 3:**
A consumer is billed using a block tariff. The rates are:
*   First 100 kWh: ₹7/kWh
*   Next 200 kWh: ₹5/kWh
*   Above 300 kWh: ₹4/kWh

If the consumer consumed 450 kWh in a month, calculate the total bill.

**Answer:**
*   Charge for the first 100 kWh = 100 kWh × ₹7/kWh = ₹700
*   Charge for the next 200 kWh = 200 kWh × ₹5/kWh = ₹1000
*   Remaining kWh = 450 - 100 - 200 = 150 kWh
*   Charge for the remaining 150 kWh = 150 kWh × ₹4/kWh = ₹600
*   Total Bill = ₹700 + ₹1000 + ₹600 = ₹2300

**Question 4:**
Explain the advantages of a Time-of-Day (TOD) tariff over a simple metered tariff for managing electricity consumption.

**Answer:**
TOD tariffs encourage consumers to shift their electricity usage from peak hours (when generation is most expensive and demand is high) to off-peak hours (when generation is cheaper). This helps in:
1.  **Reducing Peak Demand:** This lowers the overall maximum demand on the system, potentially reducing the need for expensive peaking power plants and transmission infrastructure.
2.  **Improving Load Factor:** By spreading consumption more evenly throughout the day, the system's load factor improves, leading to better utilization of assets and lower per-unit costs.
3.  **Cost Alignment:** It aligns consumer charges more closely with the actual cost of generating electricity at different times, making the pricing more economically rational.
4.  **Integration of Renewables:** It can incentivize consumption during periods of high renewable energy generation (e.g., solar during the day), making the grid more sustainable.

A simple metered tariff, on the other hand, charges a flat rate per kWh regardless of when it's consumed, offering no incentive for load shifting.

**Question 5:**
What is the primary purpose of a power factor tariff clause for industrial consumers?
a) To increase overall energy consumption.
b) To penalize consumers for using high-power appliances.
c) To encourage consumers to improve their power factor and reduce system losses.
d) To simplify billing for industrial users.

**Answer:**
c) To encourage consumers to improve their power factor and reduce system losses.

---

This module's focus on EHVAC and HVDC principles, advantages, and disadvantages (which will be covered in subsequent topics) is complemented by understanding tariffs. Tariffs are the economic tools that utilities use to manage the costs and demand associated with these high-power transmission systems, impacting how electricity is priced and consumed across the grid.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
