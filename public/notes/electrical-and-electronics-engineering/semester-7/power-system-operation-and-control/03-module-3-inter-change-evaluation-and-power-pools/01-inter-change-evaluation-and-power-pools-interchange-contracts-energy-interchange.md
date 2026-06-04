---
title: "Inter change evaluation and power pools- Interchange contracts – Energy interchange between utilities - Interchange evaluation with unit commitment - Energy banking- power pools."
subject: "POWER SYSTEM OPERATION AND CONTROL"
module: "Module 3: Inter change evaluation and power pools"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200862b85456187f3685c"
status: "completed"
scrapedAt: "2026-05-23T16:39:15.653Z"
---
## POWER SYSTEM OPERATION AND CONTROL - Module 3: Interchange Evaluation and Power Pools

### Topic: Interchange Evaluation and Power Pools

This module delves into the economics and operational aspects of energy exchange between different utility companies and within coordinated power systems, known as power pools. Understanding these concepts is crucial for efficient, reliable, and cost-effective power system operation.

---

### 1. Interchange Contracts

**1.1 Introduction to Interchange Contracts**

Interchange contracts are formal agreements between two or more electric utilities to buy and sell electric power over a specified period. These contracts are the backbone of inter-utility energy transactions, facilitating the sharing of resources, managing peak demands, and leveraging economic advantages.

**Key Concepts:**

*   **Wholesale Power Agreements:** These are the primary types of contracts, typically between generating entities and distribution utilities, or between neighboring utilities.
*   **Participants:** Utilities, power marketers, independent power producers (IPPs), and municipalities.
*   **Purpose:** To ensure reliable power supply, optimize generation, reduce costs, and manage system imbalances.

**Types of Interchange Contracts:**

*   **Firm Power Contracts:** Guaranteed supply of a specific amount of power, usually during peak periods. The buyer pays a fixed capacity charge and a variable energy charge.
*   **Non-Firm Power Contracts (Economy Energy):** Power available from the seller's surplus capacity. This is typically cheaper and is dispatched based on economic merit. It is not guaranteed and can be curtailed.
*   **Capacity Contracts:** Agreement to provide a certain amount of generating capacity, regardless of actual energy delivered.
*   **Energy Contracts:** Agreement to buy or sell a specific amount of energy (kWh) over a period.
*   **Wheeling Agreements:** Contracts that allow one utility to transmit power through another utility's transmission system to a third party.
*   **Ancillary Services Contracts:** Agreements for services like frequency regulation, voltage support, and spinning reserves, which are essential for system stability.

**Key Contractual Elements:**

*   **Term:** Duration of the contract (e.g., hourly, daily, monthly, yearly, long-term).
*   **Capacity:** The maximum amount of power (MW) that can be delivered.
*   **Energy:** The amount of energy (MWh) to be exchanged.
*   **Delivery Point:** The specific location where power is transferred between systems.
*   **Pricing:** How the capacity and energy are priced (e.g., fixed price, floating price, market-based price).
*   **Scheduling:** Procedures for requesting and confirming power transfers.
*   **Curtailment Rights:** Conditions under which a party can reduce or stop deliveries.
*   **Force Majeure:** Clauses that define events beyond control that may impact contract fulfillment.

**Example:** Utility A needs an additional 100 MW during peak hours from Utility B. They might enter into a firm power contract for 5 years, with a delivery point at a specific substation. The contract would specify the hourly capacity, the pricing structure (e.g., $10/kW-month for capacity, $50/MWh for energy), and penalties for non-compliance.

**Reference:**

*   **Wood & Wollenberg (3rd ed.):** Chapter 10, "Economic Dispatch and Interchange," discusses the principles of economic power sharing and contracts.

**Learning Outcome Alignment:**

*   **CO3 (Evaluate power exchange in interconnected power systems):** Understanding interchange contracts is fundamental to evaluating the economic and operational implications of power exchange. (Knowledge Level: K5)

---

### 2. Energy Interchange Between Utilities

**2.1 Principles of Energy Interchange**

Energy interchange is the actual flow of electricity between interconnected power systems of different utilities. This flow is governed by contract terms and system conditions.

**Key Concepts:**

*   **Interconnected Systems:** Power systems that are electrically connected, allowing power to flow between them.
*   **Net Transfer Capability (NTC):** The amount of power that can be transferred from one system to another, considering the system's limitations and security criteria.
*   **System Frequency:** A critical parameter that must be maintained within a narrow band. Any imbalance between generation and load causes frequency deviations.
*   **Tie Lines:** The physical transmission lines connecting the systems of different utilities.
*   **Control Area:** A distinct geographical region where generation is balanced with load within that region, usually under the control of a single entity. Interchanges occur between control areas.

**2.2 Automatic Generation Control (AGC)**

AGC is a vital mechanism for maintaining the balance between generation and load in real-time and for controlling the interchange of power between control areas.

**Key Concepts:**

*   **Frequency Bias:** A setting where a control area automatically adjusts its generation in response to frequency deviations, contributing to system stability.
*   **Control Signal:** The signal sent from a control center to adjust the output of generators.
*   **Area Control Error (ACE):** A measure of the imbalance between the desired and actual net interchange, and the deviation from the scheduled frequency.
    *   $ACE = (B_{actual} \times \Delta f) + (10 \times \Delta I_{interchange})$
    *   Where:
        *   $B_{actual}$ is the frequency bias constant for the control area.
        *   $\Delta f$ is the deviation from scheduled frequency (e.g., 60 Hz).
        *   $\Delta I_{interchange}$ is the difference between actual and scheduled net interchange.

**How AGC Works:**

1.  **Monitoring:** AGC continuously monitors the system frequency and the net interchange of power with neighboring control areas.
2.  **Calculating ACE:** The ACE is calculated based on frequency deviation and interchange error.
3.  **Dispatching Generation:** If ACE is positive (indicating generation shortage or excess import), AGC signals generators within the control area to increase their output. If ACE is negative, generation is reduced.
4.  **Maintaining Schedule:** AGC works to reduce ACE to zero, thereby maintaining the scheduled interchange and the system frequency.

**Example:** If a control area's frequency drops due to sudden load increase, AGC will detect this. If the control area has a negative frequency bias, it will increase its generation to help restore the frequency and maintain its scheduled interchange.

**Reference:**

*   **Wood & Wollenberg (3rd ed.):** Chapter 7, "Automatic Generation Control," provides a detailed explanation of AGC principles and implementation.

**Learning Outcome Alignment:**

*   **CO3 (Evaluate power exchange in interconnected power systems):** AGC is the primary mechanism for managing real-time energy interchange and maintaining system stability during these exchanges. (Knowledge Level: K5)

---

### 3. Interchange Evaluation with Unit Commitment

**3.1 Introduction to Unit Commitment and Interchange**

Unit commitment is the process of scheduling which generating units will be available to operate and at what output levels to meet the expected load demand at the lowest cost. Interchange evaluation is integrated into this process to determine the most economical way to meet the system load, potentially by buying power from or selling power to neighboring utilities.

**Key Concepts:**

*   **Economic Dispatch:** Once units are committed, economic dispatch determines the optimal generation allocation among the committed units to meet the load at minimum cost.
*   **Incremental Cost:** The cost of producing one additional MW of power. For economic dispatch, incremental costs should be equalized across all operating units (within their operating limits).
*   **Opportunity Cost:** The cost incurred by choosing one option over another. In interchange, this means the cost of generating power internally versus buying it from an external source.
*   **Spot Market:** Where electricity is bought and sold on a short-term basis, often hourly or daily.

**3.2 Integrating Interchange into Unit Commitment**

When evaluating unit commitment, utilities consider the cost of generating power from their own units versus the cost of purchasing power from other utilities or through a power exchange.

**Steps:**

1.  **Load Forecasting:** Predict the system load for the scheduling period.
2.  **Available Generation:** Identify all available generating units and their operating characteristics (minimum/maximum output, startup costs, fuel costs).
3.  **Interchange Options:** Evaluate available interchange agreements and market prices. This includes the cost of purchasing power from other utilities or the revenue from selling surplus power.
4.  **Cost Minimization:** Solve a mixed-integer programming problem that minimizes the total cost, which includes:
    *   Fuel costs of committed generating units.
    *   Startup and shutdown costs of generating units.
    *   Cost of purchased power from interchange.
    *   Revenue from sales of power through interchange.
5.  **Unit Commitment Solution:** The output of this process is the set of generating units to be committed and their operational schedule, along with the optimal interchange schedule.

**Economic Decision Rule for Interchange:**

A utility should buy power from an external source if the purchase price (including transmission costs) is less than the incremental cost of generating that power from its own most expensive available unit. Conversely, it should sell surplus power if the selling price is higher than the incremental cost of generating that power.

**Example:**
Suppose a utility's cheapest available generator has an incremental cost of $60/MWh. If they can purchase power from a neighboring utility at $50/MWh (including transmission), it is economically beneficial to buy the power. If they can sell surplus power at $70/MWh, it is beneficial to generate and sell.

**Reference:**

*   **Wood & Wollenberg (3rd ed.):** Chapter 9, "Unit Commitment," and Chapter 10, "Economic Dispatch and Interchange," are highly relevant. Chapter 10 explicitly covers the integration of interchange into economic dispatch and unit commitment.

**Learning Outcome Alignment:**

*   **CO1 (Analyse various methods of generation scheduling):** This topic is a direct application of integrating economic interchange into the generation scheduling process. (Knowledge Level: K4)
*   **CO3 (Evaluate power exchange in interconnected power systems):** The core of this section is the economic evaluation of power exchange options within the context of unit commitment. (Knowledge Level: K5)

---

### 4. Energy Banking

**4.1 Introduction to Energy Banking**

Energy banking is a mechanism that allows utilities to "store" energy in a virtual sense by accumulating credits for surplus generation or for energy delivered to another utility. These banked credits can then be "withdrawn" or used later, typically when the utility has a deficit in generation or faces higher internal generation costs.

**Key Concepts:**

*   **Credit System:** Energy banked is typically tracked as a credit of energy (MWh) or its equivalent monetary value.
*   **Interest/Carrying Costs:** There might be associated costs or benefits (interest) for carrying over banked energy, depending on the agreement.
*   **Storage Capacity:** The maximum amount of energy that can be banked.
*   **Withdrawal/Usage Conditions:** Rules governing when and how banked energy can be used.

**Purpose of Energy Banking:**

*   **Smoothing Seasonal Variations:** Particularly useful for hydro-dominant systems where energy can be banked during wet seasons for use during dry seasons.
*   **Managing Outages:** Allows for the use of banked energy during unexpected generator outages.
*   **Economic Optimization:** Enables utilities to defer the use of expensive generation by using banked energy when internal costs are high.
*   **Inter-Utility Cooperation:** Facilitates coordinated operations between utilities, especially those with complementary generation profiles (e.g., hydro and thermal).

**How it Works:**

*   **Deposit:** When a utility has surplus energy (e.g., from abundant hydro resources or low demand) and can sell it at a low price or provide it to a partner utility under an energy banking agreement, it "deposits" this energy. This creates a credit for the depositing utility.
*   **Withdrawal:** When the utility faces a deficit or a high internal generation cost, it can "withdraw" from its banked energy to meet its needs. This reduces the credit balance.

**Example:**
A hydro utility has a very wet spring and generates more energy than it needs. It enters into an energy banking agreement with a thermal utility. The hydro utility "deposits" 1000 MWh into its bank. Later, during a summer heatwave, the thermal utility's generation costs are very high. The hydro utility "withdraws" 500 MWh from its bank to reduce its need to buy expensive power. The agreement might specify that banked energy earns a small interest rate or is valued at a certain price.

**Reference:**

*   While not a primary focus of all texts, concepts related to energy storage and exchange often touch upon banking. **Wood & Wollenberg** might discuss this in the context of resource management and long-term planning.

**Learning Outcome Alignment:**

*   **CO1 (Analyse various methods of generation scheduling):** Energy banking is a strategic tool for optimizing generation scheduling over longer periods. (Knowledge Level: K4)
*   **CO3 (Evaluate power exchange in interconnected power systems):** Banking is a form of deferred energy exchange and needs to be evaluated economically alongside other interchange options. (Knowledge Level: K5)

---

### 5. Power Pools

**5.1 Introduction to Power Pools**

A power pool is a voluntary association of two or more interconnected electric utilities that coordinate their generation and transmission resources to achieve greater economy, reliability, and efficiency. They essentially operate as a single, larger, more integrated system.

**Key Concepts:**

*   **Coordinated Operation:** Utilities in a pool share generation resources and transmission capacity.
*   **Economic Dispatch of the Pool:** Generation is dispatched across the entire pool based on the aggregate incremental costs of all member utilities' units, rather than on a utility-by-utility basis.
*   **Reliability Enhancement:** By sharing resources, pools can better handle unexpected outages and load fluctuations.
*   **Reduced Reserve Requirements:** Jointly held reserves are more efficient than each utility maintaining its own separate reserves.
*   **Shared Transmission:** Pooling can involve coordinated use and expansion of transmission facilities.

**Functions of a Power Pool:**

1.  **Joint Economic Dispatch:** The pool's central dispatch center determines the optimal economic dispatch of all committed generating units within the pool to meet the total pool load.
2.  **Reliability Studies:** Performing studies on system stability, contingency analysis, and reserve requirements for the entire pool.
3.  **Capacity and Energy Planning:** Collaborating on long-term generation and transmission planning.
4.  **Management of Interchanges:** Coordinating the flow of power between member systems and with external entities.
5.  **Ancillary Services Coordination:** Jointly providing and managing essential services like frequency regulation and voltage support.
6.  **Emergency Operations:** Coordinating responses to system emergencies.

**Types of Power Pools:**

*   **Firm Power Pools:** Utilities commit to supplying each other with firm power during emergencies, often based on their installed capacity.
*   **Economy Energy Pools:** Focus on sharing surplus generation for economic benefits, with less emphasis on firm commitment.
*   **Integrated Pools:** A more advanced form where utilities operate almost as a single entity, with a highly centralized dispatch and planning function.

**Benefits of Power Pools:**

*   **Reduced Operating Costs:** Due to the efficient dispatch of lower-cost generation across the pool.
*   **Increased Reliability:** Better ability to withstand outages and meet demand due to shared resources.
*   **Lower Reserve Requirements:** Shared reserves are more cost-effective.
*   **Economies of Scale:** Can lead to more efficient planning and construction of new facilities.
*   **Improved System Security:** Enhanced ability to manage disturbances.

**Challenges of Power Pools:**

*   **Coordination Complexity:** Requires sophisticated communication and control systems.
*   **Contractual and Regulatory Issues:** Agreements on cost sharing, dispatch authority, and revenue distribution can be complex.
*   **Loss of Individual Autonomy:** Utilities may have to cede some degree of operational control.

**Example:**
Consider three utilities (A, B, and C) forming a power pool. Utility A has cheap hydro power, Utility B has mid-cost thermal power, and Utility C has expensive oil-fired power. When operating individually, each might have to use its expensive units to meet peak demand. In a pool, the dispatch center would first commit all of Utility A's hydro, then Utility B's thermal, and only then Utility C's oil-fired units (if still needed) to meet the *total* pool demand. This significantly reduces the overall cost of generation for all members.

**Reference:**

*   **Wood & Wollenberg (3rd ed.):** Chapter 10, "Economic Dispatch and Interchange," extensively discusses the principles behind pooling and the economic benefits derived from coordinated operation.

**Learning Outcome Alignment:**

*   **CO1 (Analyse various methods of generation scheduling):** Power pools represent a method of cooperative generation scheduling. (Knowledge Level: K4)
*   **CO3 (Evaluate power exchange in interconnected power systems):** Power pools are the most integrated form of power exchange, and evaluating their performance is key. (Knowledge Level: K5)
*   **CO4 (Analyse security issues in power system networks):** Pool operation significantly impacts system security by sharing reserves and coordinating emergency responses. (Knowledge Level: K3)

---

### Practice Questions and Answers

**Question 1:**

What is the primary purpose of Automatic Generation Control (AGC) in an interconnected power system?

**Answer:**
The primary purpose of AGC is to maintain the system frequency at its scheduled value and to ensure that the net interchange of power between control areas adheres to the agreed-upon schedule. It achieves this by automatically adjusting the generation output of units within a control area in response to deviations in frequency and interchange.

**Question 2:**

Under what economic condition would a utility choose to purchase power from an external source instead of generating it internally?

**Answer:**
A utility would choose to purchase power from an external source if the delivered cost of that external power (including transmission charges) is less than the incremental cost of generating that same amount of power from its own most economical available generating unit.

**Question 3:**

Explain the concept of "energy banking" and provide a scenario where it would be particularly beneficial.

**Answer:**
Energy banking is a mechanism where a utility accumulates credits for surplus energy generation or delivery, which can be used later to meet its own future energy needs. It is particularly beneficial for hydro-dominant utilities in regions with distinct wet and dry seasons. During the wet season, they can bank excess hydro energy and use it during the dry season when their internal hydro generation is insufficient, thus avoiding the use of more expensive thermal generation.

**Question 4:**

What is a significant economic advantage of utilities operating within a power pool compared to operating independently?

**Answer:**
A significant economic advantage of operating within a power pool is the ability to perform joint economic dispatch. This means that generation is dispatched across all member utilities based on the aggregate incremental costs of all generating units in the pool. This allows the pool to utilize the cheapest available generation across the entire interconnected system first, leading to overall lower operating costs compared to each utility optimizing its generation in isolation.

**Question 5:**

Define the Area Control Error (ACE) and briefly explain its components.

**Answer:**
Area Control Error (ACE) is a measure used in AGC to quantify the deviation of a control area from its desired operating conditions. It has two main components:
1.  **Frequency Deviation Component:** This is related to the difference between the actual system frequency and the scheduled frequency, adjusted by a frequency bias setting.
2.  **Net Interchange Deviation Component:** This is the difference between the actual net interchange of power with other control areas and the scheduled net interchange.
The ACE essentially combines these two errors to provide a single signal for automatic generation adjustment.

---

### Important Points to Remember

*   **Economic Dispatch and Interchange are inseparable:** The cheapest way to meet load often involves optimizing internal generation alongside buying/selling power from other utilities.
*   **AGC is critical for stability:** It's the real-time mechanism that keeps the interconnected system synchronized and ensures scheduled power flows are met.
*   **Contracts define the rules:** All inter-utility energy transactions are governed by specific contract terms.
*   **Power pools maximize economies of scale and reliability:** By pooling resources, utilities can achieve lower costs and better resilience.
*   **Energy banking smooths out temporal imbalances:** It's a strategy for managing variations in generation availability and demand over time.
*   **Incremental cost is the key economic driver:** Decisions about generation and interchange are largely based on comparing incremental costs.

---
This comprehensive set of notes covers the core concepts of interchange evaluation and power pools, aligning with the specified learning outcomes and referencing the provided textbooks. The inclusion of definitions, examples, and practice questions aims to facilitate a deeper understanding of this crucial aspect of power system operation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
